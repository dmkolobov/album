(ns ui.views.info
  (:require [re-com.core :refer [md-icon-button v-box h-box box title label]]
            [re-frame.core :refer [dispatch]]
            [cljs.pprint :refer [pprint]]))

(defonce file-path (js/require "path"))

(defn info-button
  []
  [md-icon-button :md-icon-name     "zmdi-info"
                  :size             :regular
                  :tooltip          "Info"
                  :tooltip-position :below-left
                  :on-click         #(dispatch [:images/open-info])])

(defn human-filesize
  [filesize]
  (let [[num scale] (cond
                      (< filesize (* 1000 1000))      [(/ filesize 1000) "KB"]
                      (< filesize (* 1000 1000 1000)) [(/ filesize 1000000) "MB"]
                      :default                        [(/ filesize 1000000000) "GB"])]
    (str (.toFixed num 2) " " scale)))

(defn human-size
  [{:keys [width height]}]
  (str width " x " height))

(defn display-info
  [model]
  (let [[[path {:keys [filesize taken-at size]}] _ _]  @model]
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
                                        [title :label (.basename file-path path) :level :level3]
                                        [h-box :gap      "1em"
                                               :children [[label :label (human-size size)]
                                                          [label :label (human-filesize filesize)]]]]]))