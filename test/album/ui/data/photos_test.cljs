(ns album.ui.data.photos-test
  (:require [cljs.test :refer-macros [is deftest]]
            [datascript.core :as datascript :refer [create-conn transact!]]
            [data.photos]
            [data.images]))

(def schema (reduce merge
                    [data.photos/schema
                     data.images/schema]))

(enable-console-print!)

(defn mock-image
  [path filename width height date]
  [{:db/id             -666
    :data.images/path   path
    :data.images/width  width
    :data.images/height height}

   {:data.photos/base-image -666
    :data.photos/filename   filename
    :data.photos/taken-on   date}])

(def way-back  (.parse js/Date "Dec 25, 1973"))
(def last-week (.parse js/Date "Jan 31, 1989"))
(def today     (.parse js/Date "Nov 2, 2016"))

(def images
  [["img/img1.jpg" "img1" 100 100 way-back]
   ["img/img2.jpg" "img2" 200 100 way-back]
   ["img/img3.jpg" "img3" 300 100 way-back]
   ["img/img4.jpg" "img4" 400 100 last-week]
   ["img/img5.jpg" "img5" 500 100 last-week]
   ["img/img6.jpg" "img6" 600 100 today]])

(def conn
  (reduce (fn [db spec]
            (:db-after
              (datascript/with db (apply mock-image spec))))
          (datascript/empty-db schema)
          images))

(deftest foobar
  (is (= (datascript/q '[:find  ?k ?filename ?w ?h
                         :in    $ [[?k ?pid ?w ?h] ...]
                         :where [?pid :data.photos/filename ?filename]]
                       conn
                       (datascript/q data.photos/grouped-query
                                     conn
                                     :data.photos/taken-on))

         #{[way-back  "img1" 100 100]
           [way-back  "img2" 200 100]
           [way-back  "img3" 300 100]
           [last-week "img4" 400 100]
           [last-week "img5" 500 100]
           [today     "img6" 600 100]})))

