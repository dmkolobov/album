(ns ui.views.common.toolbar
  (:require [re-com.core :refer [h-box box]]))

(defn base-toolbar
  [& {:keys [class
             logo-icon
             left-content
             center-content
             right-content]}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "2em"
         :padding  "1em 1.5em"
         :align    :baseline
         :children [logo-icon
                    (when left-content
                      [box :size "none" :child left-content])
                    (when center-content
                      [box :size "auto" :child center-content])
                    (when right-content
                      [box :size "none" :child right-content])]])
