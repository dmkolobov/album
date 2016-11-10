(ns lib.photos
  (:require [re-frame.core :refer [reg-event-db reg-event-fx trim-v reg-sub subscribe]]
            [datascript.core :as datascript]
            [data.core :refer [query-db]]
            [data.photos :as photos]
            [lib.util :refer [async-action success-ev error-ev]]))


(defonce fs        (js/require "fs-extra"))
(defonce file-path (js/require "path"))
(defonce js-uuid   (js/require "uuid"))

(defn random-path
  []
  (.join file-path js/process.env.HOME (str (.v4 js-uuid) ".jpg")))

(defrecord PhotoDescriptor [id src dst])

(defn pd->read-event [{:keys [id src]}] [:lib.images/read-data id src])
(defn pd->copy-event [{:keys [src dst]}] [::copy-and-preload src dst])

;; ------------ events ------------

(reg-event-fx
  ::copy-and-preload
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [src-path dest-path]]
    (let [copy-event      [:fs/copy {:src-path src-path :dest-path dest-path}]
          success-preload [:lib.images/mark-loaded dest-path]
          preload         [:img/preload {:path dest-path :on-success success-preload}]]
      {:async-flow
       {:first-dispatch copy-event
        :rules [{:just (success-ev copy-event) :=> preload}
                {:just success-preload         :=> on-success    :halt? true}
                {:any  [(error-ev copy-event)] :=> on-error      :halt? true :trace? true}]}})))

(reg-event-fx
  ::commit-photos
  [trim-v]
  (fn [{:keys [db]} pds image-data]
    (let [paths (into {} (map (juxt :id :dst) pds))]
      {:dispatch (into [:data.core/transact]
                       (->> image-data
                            (map (fn [{:keys [id] :as data}] (assoc data :path (get paths id))))
                            (mapcat photos/build-photo)))})))

(reg-event-fx
  ::import
  [async-action trim-v]
  (fn [{:keys [on-success on-error]} [paths]]
    (let [pds          (map-indexed #(PhotoDescriptor. %1 %2 (random-path)) paths)
          read-events  (map pd->read-event pds)
          copy-events  (map pd->copy-event pds)
          all-events   (concat read-events copy-events)
          commit       [:commit-photos pds]]
      {:async-flow
       {:first-dispatches all-events
        :rules [{:all (mapv success-ev read-events) :=> commit     :capture []}
                {:all (mapv success-ev all-events)  :=> on-success :halt? true}
                {:any (mapv error-ev all-events)    :=> on-error   :halt? true :trace? true}]}})))

(reg-event-fx
  :start-import
  (constantly
    {:main-thread/open-files {:on-open [::import]}}))

;; ------------ subscriptions ------------

(defn date->day
  [date]
  (let [year  (.getFullYear date)
        month (.getMonth date)
        day   (.getDate date)]
    (js/Date. year month day)))

(defn collect-dated-photos
  [groups [k results]]
  (assoc groups
    k (reduce (fn [items [_ id w h]]
                (conj items [id (/ w h)]))
              []
              results)))

(reg-sub
  ::by-date
  (fn [_ _]
    (query-db photos/grouped-query))
  (fn [datums _]
    (->> datums
         (sort-by first)
         (group-by (comp date->day first))
         (reduce collect-dated-photos {}))))