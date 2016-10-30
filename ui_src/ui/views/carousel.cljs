(ns ui.views.carousel
  (:require [re-com.core :refer [md-circle-icon-button h-box box]]))

(defn carousel-left
  [on-click]
  [md-circle-icon-button :md-icon-name "zmdi-chevron-left"
   :on-click     on-click])

(defn carousel-right
  [on-click]
  [md-circle-icon-button :md-icon-name "zmdi-chevron-right"
   :on-click     on-click])

(defn carousel
  [& {:keys [model on-advance on-rewind render-fn]}]
  (let [[id data] @model]
    ^{:key id}
    [h-box :size     "100%"
           :width    "100%"
           :align    :center
           :children [[box :size     "none"
                           :padding  "1em"
                           :child    [carousel-left on-rewind]]

                      [box :size    "auto"
                           :height  "100%"
                           :child   [render-fn id data]]

                      [box :size     "none"
                           :padding  "1em"
                           :child    [carousel-right on-advance]]]]))