(ns ui.images.views
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

(defn block-image
  [& {:keys [path on-click]}]
  [:img.image (merge {:src   path
                      :style {:margin     "0 auto"
                              :max-width  "100%"
                              :max-height "100%"
                              :display    "block"
                              :z-index    1}}
                     (when on-click {:on-click on-click}))])

;; ---- fullscreen photos ----

(defn square-photo
  [path {:keys [aspect] :as info}]
  [:div {:style   {:position       "relative"
                   :display        "block"
                   :width          "0"
                   :height         "100%"
                   :padding-left   (str (* (/ 1 aspect) 100) "%")
                   :margin         "auto"}}
   [absolute-image :path path]])

(defn landscape-photo
  [path info]
  [box :size   "100%"
       :height "100%"
       :align  :center
       :child  [absolute-image :path path]])

(defn portrait-photo
  [path {:keys [aspect] :as info}]
  [:div {:display        "block"
         :position       "relative"
         :width          "0"
         :height         "100%"
         :padding-left    (str (* aspect 100) "%")
         :margin         "auto"}
   [absolute-image :path path]])

(defn fullscreen-photo
  [path {:keys [aspect] :as info}]
  (cond  (= aspect 1) [square-photo path info]
         (> aspect 1) [landscape-photo path info]
         (< aspect 1) [portrait-photo path info]))