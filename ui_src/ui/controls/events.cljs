(ns ui.controls.events
  (:require [re-frame.core :refer [reg-event-db trim-v]]))

(reg-event-db
  :controls/set-view
  [trim-v]
  (fn [db [view-vec]]
    (assoc db :controls/view-stack [view-vec])))

(reg-event-db
  :controls/push-view
  [trim-v]
  (fn [db [view-vec]]
    (update db
            :controls/view-stack
            (fn [s]
              (if s (conj s view-vec) [[:photos-view] view-vec])))))

(reg-event-db
  :controls/pop-view
  (fn [db _]
    (update db :controls/view-stack pop)))