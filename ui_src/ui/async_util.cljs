(ns ui.async-util
  (:require [re-frame.core :refer [reg-fx debug dispatch reg-event-fx reg-event-db trim-v]]
            [cljs.pprint :refer [pprint]]))

(def async-action
  (re-frame.core/->interceptor
    :id     :async-action
    :before (fn [context]
              (update context
                      :coeffects
                      (fn [{:keys [event] :as cofx}]
                        (assoc cofx
                          :on-success [:async/success event]
                          :on-error   [:async/error event]))))))

(reg-event-db :async/success (fn [db v] db))
(reg-event-db :async/error (fn [db v]
                             (throw js/Error "myerror")
                             db))

(defn reg-fx-service
  "Register an fx handler which performs some async action, and should dispatch
  a success or error event depending on the result of the action, specified by
  the :on-success and :on-error entries in its argument map. Creates an event handler
  which when given an [fx-id [fx-map-args]] event-v, will merge the result events
  {:on-success [:async/success event-v] :on-error [:async/error event-v]}
  into fx-map-args before invoking the fx-id fx."
  [fx-id fx-handler]
  (reg-fx fx-id fx-handler)
  (reg-event-fx
    fx-id
    [async-action trim-v]
    (fn [{:keys [on-success on-error]} [args]]
      {fx-id (assoc args :on-success on-success :on-error on-error)})))
