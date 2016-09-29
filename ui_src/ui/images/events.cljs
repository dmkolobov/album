(ns ui.images.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db trim-v]]
            [ui.async :refer [async-action]]
            [ui.fx]))

(defrecord ImageAsset [filesize last-modified size])

(def image-intercept [async-action trim-v])

(reg-event-db
  :image/update-info
  [trim-v]
  (fn [db [path info]]
    (update-in db
               [:image-info path]
               (fn [image]
                 (if image
                   (merge image info)
                   (map->ImageAsset info))))))

(reg-event-fx
  :image/read-info
  image-intercept
  (fn [{:keys [on-success on-error]} [path]]
    (let [write-state [:image/update-info path]

          fs-event    [:async/fx
                       :fs/stat {:in path :on-success write-state}]

          gm-event    [:async/fx
                       :gm/read-info {:in        path
                                       :attrs      [:size]
                                       :on-success write-state}]]
      {:async/all {:events     [gm-event fs-event]
                   :on-success on-success
                   :on-error   on-error}})))

(reg-event-fx
  :image/import
  image-intercept
  (fn [{:keys [on-success on-error]} [in out]]
    (let [copy-event [:async/fx :fs/copy {:in in :out out}]
          read-event [:image/read-info out]]
      {:async/sequence {:events     [copy-event read-event]
                        :on-success on-success
                        :on-error   on-error}})))

(reg-event-fx
  :image/resize
  image-intercept
  (fn [{:keys [on-success on-error]} [in out width]]
    {:async/sequence {:events     [[:async/fx
                                     :gm/manipulate {:in       in
                                                     :out      out
                                                     :commands [[:resize width]]}]
                                  [:image/read-info out]]
                      :on-success on-success
                      :on-error   on-error}}))