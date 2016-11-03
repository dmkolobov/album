(ns lib.controls
  (:require [re-frame.core :refer [reg-sub reg-event-db trim-v]]
            [lib.util :refer [db-flag]]))

;; ------------ events ------------

(reg-event-db
  ::set-view
  [trim-v]
  (fn [db [view-id]] (assoc db ::stack [view-id])))

(reg-event-db
  ::push-view
  [trim-v]
  (fn [db [view-id]]
    (update db
            ::stack
            (fn [s]
              (if s (conj s view-id) [:photos-view view-id])))))

(reg-event-db
  ::pop-view
  (fn [db _] (update db ::view-stack pop)))

;; ------------ subscriptions ------------

(reg-sub
  ::current-view
  (fn [db] (peek (get db ::stack [:photos-view]))))


;; ------------ flags ------------

(db-flag ::main-menu?  ::open-main-menu  ::close-main-menu)
(db-flag ::photo-info? ::open-photo-info ::close-photo-info)