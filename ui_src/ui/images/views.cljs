(ns ui.images.views
  (:require [re-frame.core :refer [subscribe]]
            [re-com.core :refer [box throbber]]))

(defn render
  [path]
  (let [preloaded? (subscribe [:preloaded? path])]
    (fn [path]
      (if @preloaded?
        [:img.image {:src path}]
        [box :class   "image-throbber"
             :align   :center
             :justify :center
             :child   [throbber]]))))