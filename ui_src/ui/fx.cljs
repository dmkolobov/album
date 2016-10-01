(ns ui.fx
  (:require [ui.fx.main-thread]

    [re-frame.core :refer [reg-fx reg-event-fx trim-v reg-event-db dispatch]]
            [cljs.pprint :refer [pprint]]))

(defonce gm (js/require "gm"))

(defn mk-node-handler
  [on-success on-err]
  (fn [err val]
    (if err
      (dispatch (conj on-err (js->clj err)))
      (dispatch (if val (conj on-success (js->clj val)) on-success)))))

;; ---- Images

(reg-fx
  :preload-image
  (fn [{:keys [path on-success]}]
    (let [image (js/Image.)]
      (.addEventListener image "load" #(dispatch on-success))
      (aset image "src" path))))

;; ---- GraphicsMagick effects
;; -------------------------------
;; ---------------------------------------------------------------------------------

(reg-fx
  :gm/read-info
  (fn [{:keys [in on-success on-error]}]
    (.identify (gm in)
               (fn [err val]
                 (if err
                   (dispatch (conj on-error (js->clj err)))
                   (dispatch (conj on-success (js->clj val.size :keywordize-keys true))))))))

(reg-fx
  :gm/manipulate
  (fn [{:keys [in out commands on-success on-error]}]
    (let [gm      (gm in)]
      (doseq [[action & args] commands]
        (condp = action
          :resize  (let [[w h] args] (.resize gm w h))
          :quality (let [[factor] args] (.quality gm factor))))
      (.write gm out (mk-node-handler on-success on-error)))))

;; ---- File system effects
;; ----------------------------
;; ---------------------------------------------------------------------------------

(defonce fs (js/require "fs"))
(defonce ncp (js/require "ncp"))

(defn process-stats
  [stats]
  {:filesize      (.-size stats)
   :last-modified (.-mtime stats)})

(reg-fx
  :fs/stat
  (fn [{:keys [in on-success on-error]}]
    (println "gathering stats")
    (.stat fs
           in
           (fn [err val]
             (if err
               (dispatch (conj on-error (js->clj err)))
               (dispatch (conj on-success (process-stats val))))))))

(reg-fx
  :fs/copy
  (fn [{:keys [in out on-success on-error]}]
    (let [handler (mk-node-handler on-success on-error)]
      (ncp in out handler))))