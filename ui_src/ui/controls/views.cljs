(ns ui.controls.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [re-com.core :as re-com :refer [md-icon-button hyperlink title v-box box h-box]]))

(defn import-button
  []
  [md-icon-button :md-icon-name     "zmdi-upload"
                  :size             :regular
                  :tooltip          "Import photos"
                  :tooltip-position :below-center
                  :on-click         #(dispatch [:start-import])])

(defn photos-button
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [md-icon-button :md-icon-name     "zmdi-image"
                      :size             :regular
                      :tooltip          "Photos"
                      :tooltip-position :right-center
                      :emphasise?       (= [:photos-view] @current-view)
                      :on-click         #(dispatch [:controls/set-view [:photos-view]])])))

(defn albums-button
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [md-icon-button :md-icon-name     "zmdi-collection-image"
                      :size             :regular
                      :tooltip          "Albums"
                      :tooltip-position :right-center
                      :emphasise?       (= [:albums-view] @current-view)
                      :on-click         #(dispatch [:controls/set-view [:albums-view]])])))

(def sidebar-actions
  [["Photos" [photos-button]]
   ["Albums" [albums-button]]])

(defn sidebar
  []
  (let [sidebar? (subscribe [:controls/sidebar-left?])]
    (fn []
     [h-box :children [(when @sidebar?
                         [v-box :size     "auto"
                                :class    "sidebar left-sidebar"
                                :children [[box :child [hyperlink :label    [box :align   :center
                                                                                 :padding "1em 2em"
                                                                                 :child   [title :level         :level2
                                                                                                 :margin-top    "0px"
                                                                                                 :margin-bottom "0px"
                                                                                                 :label         "album"]]
                                                                  :on-click #(dispatch [:controls/close-left-sidebar])]]
                                           [v-box :padding  "2em"
                                                  :gap      "1em"
                                                  :children (map (fn [[label button]]
                                                                   [h-box :gap      "2em"
                                                                          :align    :center
                                                                          :children [[box :size "none" :child button]
                                                                                     [title :level :level4
                                                                                            :label label
                                                                                            :margin-top    "0px"
                                                                                            :margin-bottom "0px"]]])
                                                                 sidebar-actions)]]])
                       [v-box :size     "none"
                              :align    :center
                              :padding  "2em"
                              :gap      "1em"
                              :children (map second sidebar-actions)]]])))

(defn toolbar
  [& {:keys [icon tooltip on-click content class]}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "2em"
         :padding  "1em 2em"
         :align    :baseline
         :children [[md-icon-button :md-icon-name     icon
                                    :size             :regular
                                    :tooltip          tooltip
                                    :tooltip-position :below-center
                                    :on-click         on-click]
                    content]])

(defn main-toolbar
  [& {:keys [title]}]
  [toolbar :icon     "zmdi-menu"
           :tooltip  "Main menu"
           :on-click #(dispatch [:controls/open-left-sidebar])
           :content  [h-box :size "none"
                            :align :center
                            :children [[re-com/title :level :level2
                                                     :margin-top    "0px"
                                                     :margin-bottom "0px"
                                                     :label title]
                                       [import-button]]]])
