(ns ui.controls.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [re-com.core :refer [md-icon-button v-box box h-box title]]))

(defn import-button
  []
  [md-icon-button :md-icon-name     "zmdi-upload"
                  :size             :larger
                  :tooltip          "Import photos"
                  :tooltip-position :below-center
                  :on-click         #(dispatch [:start-import])])

(defn album-button
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [md-icon-button :md-icon-name     "zmdi-image"
                      :size             :larger
                      :tooltip          "Photos"
                      :tooltip-position :right-center
                      :emphasise?       (= :photos-view @current-view)
                      :on-click         #(dispatch [:controls/set-view :photos-view])])));;

(defn expand-sidebar-button
  []
  [md-icon-button :md-icon-name     "zmdi-menu"
                  :size             :larger
                  :tooltip          "Main menu"
                  :tooltip-position :below-center
                  :on-click         #(println "opening menu")])

(defn sidebar
  []
  [v-box :size     "none"
         :padding  "2em"
         :children [[album-button]]])

(defn toolbar
  []
  [h-box :class    "toolbar"
         :size     "none"
         :gap      "2em"
         :padding  "1em 2em"
         :align    :baseline
         :children [[expand-sidebar-button]
                    [title :level :level2
                           :margin-top "0"
                           :margin-bottom "0"
                           :label "Photos"]
                    [import-button]]])