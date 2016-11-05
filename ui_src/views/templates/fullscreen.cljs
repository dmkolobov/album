(ns views.pages.fullscreen
  (:require [re-com.core :refer [box h-box v-box md-icon-button]]
            [re-frame.core :refer [dispatch]]
            [ui.views.common.toolbar]
            [ui.views.common.sidebar :refer [sidebar-split]]))

(defn return-button
  [on-close]
  [md-icon-button :md-icon-name     "zmdi-arrow-left"
                  :size             :regular
                  :tooltip          "Photos"
                  :tooltip-position :right-center
                  :on-click         on-close])

(defn fullscreen-view
  [& {:keys [content actions sidebar on-close]}]
  [sidebar-split :class "fullscreen"
                 :content [v-box :size     "auto"
                                 :height   "100%"
                                 :style    {:position "relative"}
                                 :children [[base-toolbar :class         "fullscreen-toolbar"
                                                          :logo          [return-button on-close]
                                                          :right-content actions]
                                             content]]
                 :sidebar sidebar])
