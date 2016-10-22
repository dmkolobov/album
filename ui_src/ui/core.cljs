(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [re-com.core :refer [h-box v-box box throbber title label button scroller h-split]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [layout.core :refer [perfect-layout grouped-layout]]

            [cljs.pprint :refer [pprint]]

            [ui.fx.fs]
            [ui.fx.img]
            [ui.fx.main-thread]

            [ui.images.events]
            [ui.images.subs]
            [ui.images.views :as images]
            
            [ui.controls.views :as controls]
            [ui.controls.events]
            [ui.controls.subs]))

(enable-console-print!)

(defn index-image
  [path]
  [images/render :path     path
                 :on-click #(dispatch [:controls/push-view [:photo-view path]])])

(defn gallery
  [date-string layout]
  [v-box :size     "none"
         :gap      "1em"
         :children [[title :label date-string
                           :level :level3]
                    layout]])

(defn photos-content
  []
  (let [by-date (subscribe [:images/by-date])]
    (fn []
      [grouped-layout :groups    by-date
                      :item-gap  5
                      :item-fn   index-image
                      :group-gap 50
                      :group-fn  gallery])))

(defn base-view
  [& {:keys [toolbar content]}]
  [v-box :size       "auto"
         :max-height "100%"
         :children [toolbar
                    [h-box :size     "auto"
                           :children [[controls/sidebar]
                                      [scroller :size       "auto"
                                                :max-height "100%"
                                                :padding "1em 1em 1em 0"
                                                :child      content]]]]])

(defn stacked-view
  [& {:keys [toolbar-content content]}]
  [v-box :size     "auto"
         :height   "100%"
         :children [[controls/toolbar :icon     "zmdi-arrow-left"
                                      :tooltip  "Close"
                                      :on-click #(dispatch [:controls/pop-view])
                                      :content  toolbar-content]
                    content]])

(defn photo-view
  [path]
  [stacked-view :content [box :size       "auto"
                              :height     "100%"
                              :padding    "1em"
                              :align-self :center
                              :align      :center
                              :child      [images/render :path path]]])

(defn photos-view
  []
  [base-view :toolbar [controls/main-toolbar :title "Photos"]
             :content [photos-content]])

(defn albums-view
  []
  [base-view :toolbar [controls/main-toolbar :title "Albums"]
             :content [:div "Coming soon..."]])

(def views
  {:photo-view  photo-view
   :photos-view photos-view
   :albums-view albums-view})

(defn root-component
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      (let [[view-id & args] @current-view]
        (into [(get views view-id)]
              args)))))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
