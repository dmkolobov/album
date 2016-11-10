(ns ui.fx.main-thread
  (:require [re-frame.core :refer [reg-event-fx dispatch reg-fx]]))

(defonce electron (js/require "electron"))
(defonce ipc electron.ipcRenderer)

(def thread-calls (atom {}))

(.on ipc
     "open-files:response"
     (fn [event args]
       (let [id      (js->clj (.-id args))
             files   (js->clj (.-files args))
             on-open (get @thread-calls id)]
         (swap! thread-calls dissoc id)
         (dispatch (conj on-open files)))))

(reg-fx
  :main-thread/open-files
  (fn [{:keys [on-open]}]
    (let [call-id (str (gensym))]
      (swap! thread-calls assoc call-id on-open)
      (.send ipc "open-files" (clj->js {"id" call-id})))))