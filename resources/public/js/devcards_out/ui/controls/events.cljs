(ns ui.controls.events
  (:require [re-frame.core :refer [reg-event-db trim-v]]))

(reg-event-db
  :controls/set-view
  [trim-v]
  (fn [db [view-id]]
    (assoc db :controls/view-stack [view-id])))

(reg-event-db
  :controls/push-view
  [trim-v]
  (fn [db [view-id]]
    (update db
            :controls/view-stack
            (fn [s]
              (if s (conj s view-id) [:photos-view view-id])))))

(reg-event-db
  :controls/pop-view
  (fn [db _]
    (update db :controls/view-stack pop)))

;; ---- sidebars ----

(reg-event-db
  :controls/open-left-sidebar
  (fn [db _]
    (assoc db :controls/sidebar-left? true)))

(reg-event-db
  :controls/close-left-sidebar
  (fn [db _]
    (dissoc db :controls/sidebar-left?)))