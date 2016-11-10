(ns ui.controls.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :controls/current-view
  (fn [db]
    (peek
      (get db :controls/view-stack [:photos-view]))))

(reg-sub
  :controls/sidebar-left?
  (fn [db]
    (get db :controls/sidebar-left?)))