(ns ui.views.common.toolbar
  (:require [re-com.core :refer [h-box box]]))

(defn base-toolbar
  [& {:keys [class
             logo
             left-content
             center-content
             right-content]}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "2em"
         :padding  "1em 1.5em"
         :align    :baseline
         :children [[box :size "none" :child logo]
                    (when left-content
                      [box :size "none" :child left-content])
                    [box :size "auto" :child (if center-content
                                               center-content
                                               [:span ""])]
                    (when right-content
                      [box :size "none" :child right-content])]])
