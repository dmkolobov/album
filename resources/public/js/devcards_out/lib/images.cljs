(ns lib.images
  (:require [re-frame.core :refer [reg-sub reg-event-db reg-event-fx trim-v]]
            [lib.util :refer [async-action success-ev error-ev]]))

(defonce file-path (js/require "path"))

;; ------------ events ------------

(reg-event-fx
  ::read-data
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [id path]]
    (let [fs-query [:fs/stat  {:path path}]
          gm-query [:img/info {:path path}]
          capture  {:id id :filename (.basename file-path path)}]
      {:async-flow
       {:first-dispatches [gm-query fs-query]
        :rules          [{:all [(success-ev fs-query) (success-ev gm-query)] :dispatch on-success :capture  capture :halt? true}
                         {:any [(error-ev fs-query)   (error-ev gm-query)]   :dispatch on-error   :trace?   true    :halt? true}]}})))

(reg-event-db
  ::mark-loaded
  [trim-v]
  (fn [db [path]]
    (assoc-in db [:preloaded? path] true)))

;; ------------ subscriptions ------------

(reg-sub
  ::preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))