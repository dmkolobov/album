(ns ui.images.views
  (:require [re-frame.core :refer [subscribe]]
            [re-com.core :refer [box throbber]]))

(defn render
  [& {:keys [path on-click]}]
  (let [preloaded? (subscribe [:preloaded? path])]
    (fn [_]
      (if @preloaded?
        [:img.image (merge {:src path
                            :style {:margin "0 auto"}}
                           (when on-click {:on-click on-click}))]
        [box :class   "image-throbber"
             :align   :center
             :justify :center
             :child   [:span ""]]))))