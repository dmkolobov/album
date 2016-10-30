(ns ui.views.info
  (:require [re-com.core :refer [md-icon-button v-box h-box box title]]
            [re-frame.core :refer [dispatch]]
            [cljs.pprint :refer [pprint]]))

(defn info-button
  []
  [md-icon-button :md-icon-name     "zmdi-info"
                  :size             :regular
                  :tooltip          "Info"
                  :tooltip-position :below-left
                  :on-click         #(dispatch [:images/open-info])])

(defn display-info
  [model]
  (let [[path info]  @model
        printed-info (with-out-str (pprint info))]
    ^{:key path}
    [v-box :class    "fullscreen-sidebar"
           :height   "100%"
           :size     "none"
           :padding  "0 1em"
           :children [[h-box :align :center
                       :children [[box :size "auto" :child [title :level :level2 :label "Info"]]
                                  [md-icon-button :md-icon-name "zmdi-close"
                                   :size         :regular
                                   :on-click     #(dispatch [:images/close-info])]]]
                      [box :child [:pre printed-info]]]]))