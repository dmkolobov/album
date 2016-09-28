(ns ui.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :read-from
  (fn [db [_ path]]
    (get-in db path)))