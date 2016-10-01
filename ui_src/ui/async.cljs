(ns ui.async
  (:require [re-frame.core :refer [reg-fx debug dispatch reg-event-fx reg-event-db trim-v]]
            [cljs.pprint :refer [pprint]]))

(defn async-success [e] [:async/success e])
(defn async-error [e] [:async/error e])

(def async-action
  (re-frame.core/->interceptor
    :id     :async-action
    :before (fn [context]
              (update context
                      :coeffects
                      (fn [{:keys [event] :as cofx}]
                        (assoc cofx
                          :on-success (async-success event)
                          :on-error   (async-error event)))))))

(reg-event-fx :async/do-fx [trim-v] (fn [_ [fx]] fx))

(reg-event-db :async/success (fn [db v] (println "success:" v) db))
(reg-event-db :async/error (fn [db v] (println "error:" v) db))

;; ---- composing events
;; -------------------------
;; -----------------------------

(defn all-events
  [{:keys [events on-success on-error]}]
  {:async-flow
   {:first-dispatch [:async/do-fx {:dispatch-n events}]
    :rules          [{:when     :seen?
                      :events   (doall (mapv async-success events))
                      :dispatch on-success
                      :halt?    true}

                     {:when     :seen-any-of?
                      :events   (doall (mapv async-error events))
                      :dispatch on-error
                      :halt?    true}]}})

(defn sequence-rule
  [c e]
  {:when :seen? :event [:async/success c] :dispatch e})

(defn sequence-events
  [{:keys [events on-success on-error]}]
  (let [start  (first events)
        rules  (loop [rules  []
                      prev   start
                      events (rest events)]
                 (if (seq events)
                   (recur (conj rules (sequence-rule prev (first events)))
                          (first events)
                          (rest events))
                   rules))]
    {:async-flow {:first-dispatch start
                  :rules (conj rules
                               {:when     :seen?
                                :event    [:async/success (last events)]
                                :dispatch on-success
                                :halt?    true}
                               {:when     :seen-any-of?
                                :events   (map (partial vector :async/error) events)
                                :dispatch on-error
                                :halt?    true})}}))

(reg-event-fx
  :async/fx
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [id args]]
    (if-let [fx-success (:on-success args)]
      (let [flow {:async-flow
                   {:first-dispatch [:async/do-fx {id (assoc args :on-error on-error)}];
                    :rules          [{:when     :seen?
                                      :event    fx-success
                                      :dispatch on-success}

                                     {:when     :seen-any-of?
                                      :events   [on-success on-error]
                                      :halt?    true}]}}]
        (println "---------- doing async ---------------")
        (pprint flow)
        (println "--------------------------------------")

        flow)
      {id (assoc args
        :on-success on-success
        :on-error   on-error)})))
