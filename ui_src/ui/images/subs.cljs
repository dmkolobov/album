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

;; Returns a sequence of date strings, sorted in descending
;; order.

(reg-sub
  :images/date-filters
  (fn [_ _]
    (subscribe [:loaded-images]))
  (fn [images _]
    (->> images
         (map (comp :taken-at second))
         (sort)
         (map date-string)
         (into (list))
         (distinct))))

(reg-sub
  :images/date-filter
  (fn [_ _]
    (subscribe [:loaded-images]))
  (fn [images [_ date]]
    (filter #(= date (date-string (:taken-at (second %)))) images)))

(reg-sub
  :preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))