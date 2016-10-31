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

(defn date->day
  [date]
  (let [year  (.getFullYear date)
        month (.getMonth date)
        day   (.getDate date)]
    (js/Date. year month day)))

(reg-sub
  :images/by-date
  (fn [_ _]
    (subscribe [:loaded-images]))
  (fn [images]
    (->> images
         (group-by (comp date->day :taken-at second))
         (into (sorted-map-by >)))))

(reg-sub
  :images/preloaded?
  (fn [db [_ path]] (get-in db [:preloaded? path])))

(reg-sub
  :images/cursor
  (fn [db _]
    (let [{:keys [items idx]} (get db :images/carousel-state)
          path (nth items idx)
          info (get-in db [:image-info path])]
      [[path info]
       (= 0 idx)
       (= (dec (count items))
          idx)])))

(reg-sub
  :images/info?
  (fn [db]
    (get db :images/info?)))