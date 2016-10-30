(ns ui.views.fullscreen
  (:require [re-com.core :refer [box h-box v-box md-icon-button]]
            [re-frame.core :refer [dispatch]]
            [ui.views.common.toolbar :refer [base-toolbar]]))

(defn return-button
  [on-close]
  [md-icon-button :md-icon-name     "zmdi-arrow-left"
                  :size             :regular
                  :tooltip          "Photos"
                  :tooltip-position :right-center
                  :on-click         on-close])

(defn fullscreen-view
  [& {:keys [content actions sidebar on-close]}]
  [h-box :class   "fullscreen"
         :size     "100%"
         :height   "100%"
         :children [[v-box :size     "auto"
                           :height   "100%"
                           :children [[base-toolbar :class         "fullscreen-toolbar"
                                                    :logo          [return-button on-close]
                                                    :right-content actions]
                                      content]]
                    (when sidebar sidebar)]])
