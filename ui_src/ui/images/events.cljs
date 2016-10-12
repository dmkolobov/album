(ns ui.images.events
  (:require [re-frame.core :refer [reg-event-fx reg-event-db trim-v]]
            [ui.async-util :refer [async-action]]))

(defonce file-path (js/require "path"))

(defrecord ImageAsset
  [filesize last-modified size])

(def image-intercept [async-action trim-v])

(reg-event-db
  :image/store-info
  [trim-v]
  (fn [db [path [_ _ _ info]]]
    (update-in db
               [:image-info path]
               (fn [image]
                 (if image (into image info) (map->ImageAsset info))))))

(reg-event-db
  :image/mark-loaded
  [trim-v]
  (fn [db [path]]
    (assoc-in db [:preloaded? path] true)))

(reg-event-fx
  :image/read-info
  image-intercept
  (fn [{:keys [on-success on-error]} [path final-path]]
    (let [fs-query [:fs/stat {:path path}]
          gm-query [:img/info {:path path}]
          store-qr [:image/store-info (if final-path final-path path)]]
      {:async-flow
       {:first-dispatches [gm-query fs-query]
        :rules          [{:when     :seen?
                          :event    [:async/success fs-query]
                          :capture? true
                          :dispatch store-qr}

                         {:when     :seen?
                          :event    [:async/success gm-query]
                          :capture? true
                          :dispatch store-qr}

                         {:when     :seen?
                          :events   [[:async/success fs-query]
                                     [:async/success gm-query]]
                          :dispatch on-success
                          :halt?    true}

                         {:when     :seen-any-of?
                          :events   [[:async/error fs-query]
                                     [:async/error gm-query]]
                          :halt?    true
                          :capture? true
                          :dispatch on-error}]}})))

(reg-event-fx
  :image/import
  image-intercept
  (fn [{:keys [on-success on-error]} [src-path dest-path]]
    (let [read-event    [:image/read-info src-path dest-path]
          copy-event    [:fs/copy {:src-path src-path :dest-path dest-path}]
          preload-event [:img/preload {:path dest-path}]]
      {:async-flow
       {:first-dispatch read-event

        :rules [{:when     :seen?
                 :event    [:async/success read-event]
                 :dispatch copy-event}

                {:when       :seen?
                 :event      [:async/success copy-event]
                 :dispatch   preload-event}

                {:when       :seen?
                 :event      [:async/success preload-event]
                 :dispatch-n [on-success [:image/mark-loaded dest-path]]
                 :halt?      true}

                {:when     :seen-any-of?
                 :events   [[:async/error copy-event] [:async/error read-event]]
                 :dispatch on-error
                 :capture? true
                 :halt?    true}]}})))

(defn path->import-event
  [path]
  [:image/import path (.join file-path
                             js/process.env.HOME
                             (.basename file-path path))])

(reg-event-fx
  :import-images
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [images]]
    (let [events    (mapv path->import-event images)
          successes (mapv #(vector :async/success %) events)
          errors    (mapv #(vector :async/error %) events)]
      (println "importing" images)
      {:async-flow

       {:first-dispatches events

        :rules [{:when     :seen?
                 :events   successes
                 :dispatch on-success
                 :halt?    true}

                {:when     :seen?
                 :events   errors
                 :dispatch on-error
                 :halt?    true
                 :capture? true}]}})))

(reg-event-fx
  :start-import
  (constantly
    {:main-thread/open-files {:on-open [:import-images]}}))