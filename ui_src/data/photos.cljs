(ns data.photos
  (:require [datascript.core :as datascript]))

(def schema
  {::filename     {:db/type   :db.type/string}
   ::taken-on     {:db/type   :db.type/instant}

   ::base-image   {:db/valueType   :db.type/ref
                   :db/cardinality :db.cardinality/many
                   :db/isComponent true}})

(def grouped-query
  '[:find  ?key ?photo-id ?width ?height
    :in    $ ?key-attr
    :where [?photo-id ?key-attr           ?key]
           [?photo-id ::base-image        ?image-id]
           [?image-id :data.images/width  ?width]
           [?image-id :data.images/height ?height]])