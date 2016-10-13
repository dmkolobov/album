(ns ui.controls.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :controls/current-view
  (fn [db]
    (get db :controls/current-view)))