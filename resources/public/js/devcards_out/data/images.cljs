(ns data.images)

(def schema
  {::width    {:db/type :db.type/double}
   ::height   {:db/type :db.type/double}
   ::filesize {:db/type :db.type/long}
   ::path     {:db/type :db.type/string}})

(defn build-image
  [{:keys [id width height filesize path]}]
  [{:db/id     id
    ::path     path
    ::width    width
    ::height   height
    ::filesize filesize}])