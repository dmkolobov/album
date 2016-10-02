(ns ui.images.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db trim-v]]
            [ui.async :refer [async-action] :as async]
            [ui.fx]))

(defonce file-path (js/require "path"))

(defrecord ImageAsset
  [filesize last-modified size])

(def image-intercept [async-action trim-v])

(reg-event-db
  :image/update-info
  [trim-v]
  (fn [db [path attr info]]
    (update-in db
               [:image-info path]
               (fn [image]
                 (if image
                   (merge image (if info {attr info} attr))
                   (map->ImageAsset (if info {attr info} attr)))))))

(reg-event-fx
  :image/read-info
  image-intercept
  (fn [{:keys [on-success on-error]} [path]]
    (let [fs-event [:async/fx :fs/stat {:in path :on-success [:image/update-info path]}]
          gm-event [:async/fx :gm/read-info {:in path :on-success [:image/update-info path :size]}]]
      (async/all-events {:events     [gm-event fs-event]
                         :on-success on-success
                         :on-error   on-error}))))

(reg-event-fx
  :image/preload
  [trim-v]
  (fn [_ [path]]
    {:preload-image
     {:path       path
      :on-success [:write-to [:preloaded? path] true]}}))

(reg-event-fx
  :image/import
  image-intercept
  (fn [{:keys [on-success on-error]} [in out]]
    (let [copy-event    [:async/fx :fs/copy {:in in :out out}]
          read-event    [:image/read-info out]
          preload-event [:image/preload out]]
      {:async-flow
       {:first-dispatch copy-event

        :rules [{:when         :seen-sequence?
                 :events       [copy-event read-event]
                 :step-success [:async/success]
                 :dispatch-n   [on-success preload-event]
                 :halt?        true}

                {:when     :seen-any-of?
                 :events   [[:async/error copy-event] [:async/error read-event]]
                 :dispatch on-error
                 :halt?    true}]}})))

(defn import-path
  [path]
  (.join file-path js/process.env.HOME (.basename file-path path)))

(defn path->import-event
  [path]
  [:image/import path (import-path path)])

(reg-event-fx
  :import-images
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [images]]
    (async/all-events
      {:events     (mapv path->import-event images)
       :on-success on-success
       :on-error   on-error})))

(reg-event-fx
  :start-import
  (constantly
    {:main-thread/open-files {:on-open [:import-images]}}))