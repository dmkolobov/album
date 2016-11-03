(ns data.core
  (:require [re-frame.core :refer [reg-sub reg-event-db trim-v subscribe]]
            [reagent.ratom :refer [make-reaction]]
            [datascript.core :refer [with]]
            [datascript.core :as datascript]))

(defn get-db [db]   (get db ::db))
(defn set-db [db v] (assoc db ::db v))

(defn transact
  "Applies the stored transaction datato the datascript database at
  ::db and stores the :db-after value of the report."
  [db tx-data]
  (let [tx-report (datascript/with (get-db db) tx-data)]
    (set-db db (:db-after tx-report))))

(reg-event-db ::transact [trim-v] transact)

(reg-sub ::db get-db)

(defn query-db
  [query]
  (let [db (subscribe [::db])]
    (make-reaction
      (fn [] (datascript/q query @db)))))