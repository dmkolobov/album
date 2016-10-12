(ns ui.images.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :image-metrics
  (fn [db] (get db :image-info)))

(reg-sub
  :loaded-images
  (fn [db _]
    (subscribe [:image-metrics]))
  (fn [image-metrics _]
    (filter #(contains? (second %) :aspect) image-metrics)))

(reg-sub
  :preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))