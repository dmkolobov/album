(ns ui.controls.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [re-com.core :as re-com :refer [md-icon-button v-box box h-box]]))

(defn import-button
  []
  [md-icon-button :md-icon-name     "zmdi-upload"
                  :size             :larger
                  :tooltip          "Import photos"
                  :tooltip-position :below-center
                  :on-click         #(dispatch [:start-import])])

(defn photos-button
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [md-icon-button :md-icon-name     "zmdi-image"
                      :size             :larger
                      :tooltip          "Photos"
                      :tooltip-position :right-center
                      :emphasise?       (= [:photos-view] @current-view)
                      :on-click         #(dispatch [:controls/set-view [:photos-view]])])))

(defn albums-button
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [md-icon-button :md-icon-name     "zmdi-collection-image"
                      :size             :larger
                      :tooltip          "Albums"
                      :tooltip-position :right-center
                      :emphasise?       (= [:albums-view] @current-view)
                      :on-click         #(dispatch [:controls/set-view [:albums-view]])])))

(defn sidebar
  []
  [v-box :size     "none"
         :align    :center
         :padding  "2em"
         :gap      "1em"
         :children [[photos-button]
                    [albums-button]]])

(defn toolbar
  [& {:keys [icon tooltip on-click content class]}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "2em"
         :padding  "1em 2em"
         :align    :baseline
         :children [[md-icon-button :md-icon-name     icon
                                    :size             :larger
                                    :tooltip          tooltip
                                    :tooltip-position :below-center
                                    :on-click         on-click]
                    content]])

(defn main-toolbar
  [& {:keys [title]}]
  [toolbar :icon     "zmdi-menu"
           :tooltip  "Main menu"
           :on-click #(println "opening main menu")
           :content  [h-box :size "none"
                            :align :baseline
                            :children [[re-com/title :level :level2
                                                     :margin-top    "0px"
                                                     :margin-bottom "0px"
                                                     :label title]
                                       [import-button]]]])
