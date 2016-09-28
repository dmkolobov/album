(ns ui.fx
  (:require [re-frame.core :refer [reg-fx reg-event-fx trim-v reg-event-db dispatch]]))

(defonce gm (js/require "gm"))

(defn mk-node-handler
  [on-success on-err]
  (fn [err val]
    (if err
      (dispatch (conj on-err (js->clj err)))
      (dispatch (if val (conj on-success (js->clj val)) on-success)))))

;; ---- GraphicsMagick effects
;; -------------------------------
;; ---------------------------------------------------------------------------------

(reg-fx
  :gm/get
  (fn [{:keys [path on-success on-error]}]
    (.identify (gm path) (mk-node-handler on-success on-error))))

(reg-fx
  :gm/manipulate
  (fn [{:keys [path out-path commands on-success on-error]}]
    (let [gm      (gm path)]
      (doseq [[action & args] commands]
        (condp = action
          :resize  (let [[w h] args] (.resize gm w h))
          :quality (let [[factor] args] (.quality gm factor))))
      (.write gm out-path (mk-node-handler on-success on-error)))))

;; ---- File system effects
;; ----------------------------
;; ---------------------------------------------------------------------------------

(defonce fs (js/require "fs"))
(defonce ncp (js/require "ncp"))

(reg-fx
  :fs
  (fn [{:keys [command args on-success on-error]}]
    (let [handler (mk-node-handler on-success on-error)]
      (condp = command
        :copy       (let [[in out] args] (ncp in out handler))
        :read-dir   (let [[path] args] (.readdir fs path handler))
        :read-file  (let [[path] args] (.readFile fs path handler))
        :write-file (let [[path content] args] (.writeFile fs path content handler))))))
