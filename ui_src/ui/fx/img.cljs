(ns ui.fx.img
  (:require [re-frame.core :refer [dispatch]]
            [clojure.string :refer [split join]]
            [ui.async-util :refer [reg-fx-service]]))

(defonce gm (js/require "gm"))

(defn normalize-date
  [taken-at]
  (let [[date tim] (clojure.string/split taken-at " ")
        date'       (clojure.string/join "-"
                                         (clojure.string/split date ":"))]
    (js/Date.
      (.parse js/Date (str date' " " tim)))))

(defn process-image-data
  [data]
  (let [{:keys [width height] :as size} (js->clj data.size :keywordize-keys true)
        exif                            (aget data "Profile-EXIF")
        now                             (js/Date.)]
    {:size      size
     :aspect   (/ width height)
     :taken-at (if exif
                 (if-let [taken-at (aget exif "Date Time Original")]
                   (if (string? taken-at)
                     (normalize-date taken-at)
                     taken-at)
                   now)
                 now)}))

(reg-fx-service
  :img/info
  (fn [{:keys [path on-success on-error]}]
    (.identify (gm path)
               (fn [err val]
                 (if err
                   (dispatch (conj on-error path (js->clj err)))
                   (dispatch (conj on-success
                                   path
                                   (process-image-data val))))))))

(reg-fx-service
  :img/preload
  (fn [{:keys [path on-success on-error]}]
    (let [image (js/Image.)]
      (aset image "onload" #(dispatch on-success))
      (aset image "src" path))))

(reg-fx-service
  :img/manipulate
  (fn [{:keys [src-path dest-path commands on-success on-error]}]
    (let [gm      (gm src-path)]
      (doseq [[action & args] commands]
        (condp = action
          :resize  (let [[w h] args] (.resize gm w h))
          :quality (let [[factor] args] (.quality gm factor))))
      (.write gm
              dest-path
              (fn [err val]
                (if err
                  (dispatch (conj on-error err))
                  (dispatch on-success)))))))