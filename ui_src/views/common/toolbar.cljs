(ns ui.views.common.toolbar
  (:require [re-com.core :as re-com :refer [h-box box md-icon-button]]))

(def app-gap 16)

(defn px [x] (str x "px"))

(defn action
  [& {:keys [icon label position on-click]}]
  [box :class "action-button"
       :child [md-icon-button :md-icon-name     icon
                              :size             :regular
                              :tooltip          label
                              :tooltip-position position
                              :on-click         on-click]])

(defn toolbar
  [& {:keys [class
             title

             nav
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
  [h-box :class    (str "toolbar " class)
         :gap      (px (* 1.5 app-gap))
         :padding  (str (px app-gap) " " (px (* 1.5 app-gap)))
         :align    :center
         :children (into
                     [[action :icon     nav
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
                           actions)))])
;;