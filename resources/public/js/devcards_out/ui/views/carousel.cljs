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
  (let [[[id info] first? last?] @model]
    ^{:key id}
    [h-box :size     "100%"
           :width    "100%"
           :align    :center
           :style    {:position "relative"}
           :children [(when (not first?)
                        [box :size    "none"
                             :align   :center
                             :class   "fullscreen-button"
                             :padding "1em"
                             :style   {:position "absolute"
                                       :left     "0"}
                             :attr {:on-click  on-rewind}
                             :child   [carousel-left on-rewind]])

                      [box :size   "auto"
                           :height "100%"
                           :child  [render-fn id info]]

                      (when (not last?)
                        [box :size    "none"
                             :align   :center
                             :class   "fullscreen-button"
                             :padding "1em"
                             :style   {:position "absolute"
                                       :right     "0"}
                             :attr {:on-click on-advance}
                             :child   [carousel-right on-advance]])]]))