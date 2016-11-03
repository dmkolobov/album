(ns data.core
  (:require [re-frame.core :refer [reg-sub reg-event-db trim-v]]
            [datascript.core :refer [with]]
            [datascript.core :as datascript]))

(defn enqueue
  "Enqueue a sequence of transaction maps, to be applied
  the next time ::flush is dispatched."
  [db tx-data]
    (update db ::transaction into tx-data))

(defn flush-transaction
  "Applies the stored transaction datato the datascript database at
  ::db and stores the :db-after value of the report."
  [db]
  (let [tx-report (datascript/with (get db ::db)
                                   (get db ::transaction))]
    (assoc db ::db (:db-after tx-report))))

(reg-event-db ::enqueue [trim-v] enqueue)
(reg-event-db ::flush   [trim-v] flush-transaction)