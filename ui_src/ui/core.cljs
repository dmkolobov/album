(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [re-com.core :refer [h-box v-box box throbber title label button scroller h-split]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [layout.core :refer [perfect-layout]]

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

(defn photos-content
  []
  (let [metrics (subscribe [:loaded-images])]
    (fn []
      (when @metrics
        [v-box :size "auto"
               :children [[box :padding "1em 1em 1em 0"
                               :child [perfect-layout :items   metrics
                                                      :gap     6
                                                      :item-fn images/render]]]]))))

(defn base-view
  [& {:keys [toolbar content]}]
  [v-box :size       "auto"
         :max-height "100%"
         :children [toolbar
                    [h-box :size     "auto"
                           :children [[controls/sidebar]
                                      [scroller :size       "auto"
                                                :max-height "100%"
                                                :child      content]]]]])

(defn photos-view
  []
  [base-view :toolbar [controls/toolbar :title "Photos"]
             :content [photos-content]])

(defn albums-view
  []
  [base-view :toolbar [controls/toolbar :title "Albums"]
             :content [:div "Coming soon..."]])

(def views
  {:photos-view [photos-view]
   :albums-view [albums-view]})

(defn root-component
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
     (get views @current-view))))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
