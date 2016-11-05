(ns ui.views.common.toolbar
  (:require [re-com.core :as re-com :refer [v-box h-box box md-icon-button]]))

(def app-gap 16)

(defn px [x] (str x "px"))

(defn action
  [& {:keys [icon label position emphasis? on-click]}]
  [box :class (str "action-button "
                   (when emphasis? "emphasis"))
       :child [md-icon-button :md-icon-name     icon
                              :size             :regular
                              :tooltip          label
                              :tooltip-position position
                              :on-click         on-click]])

(def ribbon-gap
  (px (* 1.5 app-gap)))

(def ribbon-padding
  (str (px app-gap) " " ribbon-gap))

(defn navbar
  [& {:keys [class

             model
             actions
             on-change
             id-fn
             icon-fn
             label-fn]

      :or   {id-fn    :id
             icon-fn  :icon
             label-fn :label}}]
  [v-box :class    (str "shadow-1 nav-ribbon " class)
         :align    :center
         :gap      ribbon-gap
         :padding  ribbon-padding
         :children (doall
                     (map (fn [act]
                            [action :icon      (icon-fn act)
                                    :label     (label-fn act)
                                    :position  :right-center
                                    :emphasis? (= (id-fn act) @model)
                                    :on-click  #(on-change act)])
                          @actions))])

(defn toolbar
  [& {:keys [class
             title

             nav-icon
             nav-tooltip
             on-nav

             actions
             on-action
             action-id-fn
             action-icon-fn
             action-label-fn]

      :or   {action-id-fn    :id
             action-icon-fn  :icon
             action-label-fn :label}}]
  [h-box :class    (str "shadow-1 toolbar " class)
         :gap      ribbon-gap
         :padding  ribbon-padding
         :align    :center
         :children (into
                     [[action :icon     nav-icon
                            :label    nav-tooltip
                            :position :below-right
                            :on-click on-nav]
                      [box :size  "auto"
                           :child [re-com/title :label         title
                                                :margin-top    "0px"
                                                :margin-bottom "0px"
                                                :level         :level2]]]
                     (doall
                      (map (fn [act]
                             ^{:key (action-id-fn act)}
                             [action :icon     (action-icon-fn act)
                                     :label    (action-label-fn act)
                                     :position :below-center
                                     :on-click #(on-action act)])
                           @actions)))])
;;