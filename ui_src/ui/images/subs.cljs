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
    (filter (fn [[path {:keys [aspect taken-at]}]]
              (and (some? aspect) (some? taken-at)))
            image-metrics)))

(defn date-string
  [date]
  (.toDateString date))

(reg-sub
  :images/by-date
  (fn [_ _]
    (subscribe [:loaded-images]))
  (fn [images]
    (->> images
         (group-by (comp date-string :taken-at second))
         (into (sorted-map)))))

(reg-sub
  :preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))