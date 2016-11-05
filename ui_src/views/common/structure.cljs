(ns ui.views.common.structure
  (:require [re-com.core :refer [h-box v-box box]]))

(defn main
  [& {:keys [app-bar side-nav content right-nav attr]}]
  [h-box :class    "structure"
         :attr     attr
         :children [(when side-nav
                      [box :class "side-nav shadow-1"
                           :child side-nav])

                    [v-box :size     "auto"
                           :children [[box :class "app-bar"
                                           :child app-bar]
                                      content]]

                    (when right-nav
                      [box :class "right-nav shadow-1"
                           :child right-nav])]])

