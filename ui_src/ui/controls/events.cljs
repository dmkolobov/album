(ns ui.controls.events
  (:require [re-frame.core :refer [reg-event-db trim-v]]))

(reg-event-db
  :controls/set-view
  [trim-v]
  (fn [db [view-id]]
    (assoc db :controls/current-view view-id)))