(ns ui.images.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :image-metrics
  (fn [db] (get db :image-info)))

(reg-sub
  :preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))