(ns ui.views.common.images
  (:require [re-frame.core :refer [subscribe]]
            [re-com.core :refer [box throbber]]))

(defn absolute-image
  [& {:keys [path on-click]}]
  [:img.image (merge {:src   path
                      :style {:position   "absolute"
                              :display    "block"
                              :max-width  "100%"
                              :max-height "100%"
                              :top        0
                              :right      0
                              :bottom     0
                              :left       0
                              :margin     "auto"}}
                     (when on-click {:on-click on-click}))])

(defn square
  [path aspect]
  [:div {:style   {:position       "relative"
                   :display        "block"
                   :width          "0"
                   :height         "100%"
                   :padding-left   (str (* (/ 1 aspect) 100) "%")
                   :margin         "auto"}}
   [absolute-image :path path]])

(defn landscape
  [path _]
  [box :size   "100%"
       :height "100%"
       :align  :center
       :child  [absolute-image :path path]])

(defn portrait
  [path aspect]
  [:div {:display        "block"
         :position       "relative"
         :width          "0"
         :height         "100%"
         :padding-left    (str (* aspect 100) "%")
         :margin         "auto"}
   [absolute-image :path path]])

(defn image
  "Display an image so that it fills as much content as it can
  while preserving aspect ratio. Requires that the parent element
  has CSS positioning other than 'fixed'"
  [path aspect]
  (cond (= aspect 1) [square path aspect]
        (> aspect 1) [landscape path aspect]
        (< aspect 1) [portrait path aspect]))