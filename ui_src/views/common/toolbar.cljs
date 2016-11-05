(ns ui.views.common.toolbar
  (:require [re-com.core :as re-com :refer [button v-box h-box box md-icon-button]]))

(def app-gap 16)

(defn px [x] (str x "px"))

(def ribbon-gap
  (px (* 1.5 app-gap)))

(def ribbon-padding
  (str (px app-gap) " " ribbon-gap))

(defn icon-button
  [& {:keys [icon label position emphasise? on-click]}]
  [box :class (str "action-button " (when emphasise? "emphasis"))
       :child [md-icon-button :md-icon-name     icon
                              :tooltip          label
                              :tooltip-position position
                              :on-click         on-click]])

(defn menu-button
  [& {:keys [icon label emphasise? on-click]}]
  [h-box :class    (str "nav-button"
                        (when emphasise?
                          " active"))
         :gap      ribbon-gap
         :padding  ribbon-padding
         :width    "100%"
         :align    :center
         :children [[:i.zmdi {:class icon}]
                    [re-com/title :label         label
                                  :level         :level3
                                  :margin-top    "0px"
                                  :margin-bottom "0px"]]
         :attr     {:on-click on-click}])

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
  [v-box :class    (str "nav-ribbon " class)
         :align    :center
         :gap      ribbon-gap
         :padding  ribbon-padding
         :children (doall
                     (map (fn [act]
                            [icon-button :icon      (icon-fn act)
                                         :label     (label-fn act)
                                         :position  :right-center
                                         :emphasise? (= (id-fn act) @model)
                                         :on-click  #(on-change act)])
                          @actions))])

(defn navmenu
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
  [v-box :class    (str "nav-ribbon " class)
         :align    :center
         :children (doall
                     (map (fn [act]
                            ^{:key (id-fn act)}
                            [menu-button :icon       (icon-fn act)
                                         :label      (label-fn act)
                                         :emphasise? (= @model (id-fn act))
                                         :on-click   #(on-change act)])
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
                     [[icon-button :icon     nav-icon
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
                             [icon-button :icon     (action-icon-fn act)
                                          :label    (action-label-fn act)
                                          :position :below-center
                                          :on-click #(on-action act)])
                           @actions)))])
;;