(ns ui.views.common.sidebar
  (:require [re-com.core :refer [h-box v-box]]))

(defn sidebar-split
  [& {:keys [class content sidebar]}]
  [h-box :class    class
         :size     "100%"
         :height   "100%"
         :children [content sidebar]])