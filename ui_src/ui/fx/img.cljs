(ns ui.fx.img
  (:require [re-frame.core :refer [dispatch]]
            [ui.async-util :refer [reg-fx-service]]))

(defonce gm (js/require "gm"))

(reg-fx-service
  :img/info
  (fn [{:keys [path on-success on-error]}]
    (.identify (gm path)
               (fn [err val]
                 (if err
                   (dispatch (conj on-error path (js->clj err)))
                   (dispatch (conj on-success path {:size (js->clj val.size :keywordize-keys true)})))))))

(reg-fx-service
  :img/preload
  (fn [{:keys [path on-success on-error]}]
    (let [image (js/Image.)]
      (.addEventListener image "load" #(dispatch on-success))
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