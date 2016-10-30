(ns ui.images.views
  (:require [re-frame.core :refer [subscribe]]
            [re-com.core :refer [box throbber]]))

(defn render
  [& {:keys [path on-click absolute?]}]
  (let [preloaded? (subscribe [:preloaded? path])]
    (fn [_]
      (if @preloaded?
        [:img.image (merge {:src path
                            :style (if absolute?
                                     {:position "absolute"
                                      :display  "block"
                                      :max-width "100%"
                                      :max-height "100%"
                                      :top    0
                                      :right  0
                                      :bottom 0
                                      :left   0
                                      :margin "auto"}

                                     {:margin     "0 auto"
                                      :max-width  "100%"
                                      :max-height "100%"
                                      :display    "block"
                                      :z-index    1})}
                           (when on-click {:on-click on-click}))]
        [box :class   "image-throbber"
             :align   :center
             :justify :center
             :child   [:span ""]]))))