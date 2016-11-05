(ns ui.views.common.toolbar
  (:require [re-com.core :refer [h-box box]]))

(defn toolbar
  [& {:keys [class
             logo
             left
             mid
             right]}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "2em"
         :padding  "1em 1.5em"
         :align    :center
         :children [[box :size "none" :child logo]
                    (when left
                      [box :size "auto" :child left])
                    [box :size "auto" :child (if mid mid [:span ""])]
                    (when right
                      [box :size "none" :child right])]])
