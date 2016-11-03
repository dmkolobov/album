(ns lib.selection
  (:require [re-frame.core :refer [reg-sub reg-event-db]]))

;; ------------ events ------------

(reg-event-db
  ::toggle-id
  (fn [db [_ path]]
    (let [s (get db :selection/id-set #{})]
      (assoc db
        :selection/id-set (if (contains? s path)
                            (disj s path)
                            (conj s path))))))

(reg-event-db
  ::include-ids
  (fn [db [_ ids]]
    (update db
            :selection/id-set
            (fn [id-set]
              (if id-set (into id-set ids) (set ids))))))

(reg-event-db
  ::exclude-ids
  (fn [db [_ ids]]
    (apply update db :selection/id-set disj ids)))

(reg-event-db
  ::discard
  (fn [db] (dissoc db :selection/id-set)))

;; ------------ subscriptions ------------

(reg-sub
  ::contains?
  (fn [db [_ id]]
    (contains? (get db ::state) id)))

(reg-sub
  ::contains-all?
  (fn [db [_ ids]]
    (clojure.set/subset? (set ids) (get db ::state #{}))))

(reg-sub
  ::count
  (fn [db] (count (get db ::state))))
