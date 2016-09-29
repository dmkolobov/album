(ns ui.async
  (:require [re-frame.core :refer [reg-fx debug dispatch reg-event-fx trim-v]]
            [cljs.pprint :refer [pprint]]))

(defn async-success [e] [:async/success e])
(defn async-error [e] [:async/error e])

(def async-action
  (re-frame.core/->interceptor
    :id     :async-action
    :before (fn [context]
              (println "intercepting context")
              (update context
                      :coeffects
                      (fn [{:keys [event] :as cofx}]
                        (assoc cofx
                          :on-success (async-success event)
                          :on-error   (async-error event)))))))

(reg-event-fx :async/do-fx [trim-v] (fn [_ [fx]] (println "doing") (pprint fx) fx))

(reg-event-fx :async/success println)
(reg-event-fx :async/error println)

;; ---- composing events
;; -------------------------
;; -----------------------------

(defn all-events
  [{:keys [events on-success on-error]}]
  (println "collecting all events")
  {:async-flow
   {:first-dispatch [:async/do-fx {:dispatch-n events}]
    :rules          [{:when     :seen?
                      :events   (map async-success events)
                      :dispatch on-success}

                     {:when     :seen-any-of?
                      :events   (map async-error events)
                      :dispatch on-error}]}})

(reg-fx
  :async/all
  (fn [args]
    (dispatch [:async/do-fx (all-events args)])))

(defn sequence-events
  [{:keys [events on-success on-error]}]
  (let [term-rule {:when     :seen-any-of?
                   :events   (map async-error events)
                   :dispatch on-error
                   :halt?    true}
        [e1 e2 erest] events]
    {:async-flow
     {:first-dispatch e1
      :rules
      (loop [prev      (first events)
             curr      (second events)
             remaining (drop 2 events)
             rules     [{:when :seen? :event e1 :dispatch e2}]]
        (if (seq remaining)
          (recur curr
                 (first remaining)
                 (rest remaining)
                 (conj rules
                       {:when :seen? :event (async-success prev) :dispatch curr}))
          (conj rules
                {:when :seen? :event curr :dispatch on-success :halt? true}
                term-rule)))}}))

(reg-fx :async/sequence (fn [args] (dispatch [:async/do-fx (sequence-events args)])))

(reg-event-fx
  :async/fx
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [id args]]
    (println "fx" id)
    (println "args" id)
    (if-let [fx-success (:on-success args)]
      {:async-flow
       {:first-dispatch [:async/do-fx {id (assoc args :on-error on-error)}];
        :rules          [{:when     :seen?
                          :event    fx-success
                          :dispatch on-success
                          :halt?    true}

                         {:when     :seen?
                          :event    (:on-error args)
                          :halt?    true}]}}
      {:dispatch [:async/do-fx {id (assoc args
                                     :on-success on-success
                                     :on-error   on-error)}]})))
