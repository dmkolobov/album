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

(defn gallery
  [date-string]
  (let [images (subscribe [:images/date-filter date-string])]
    (fn [_]
      [v-box :size    "none"
             :gap     "1em"
             :children [[title :label date-string
                                     :level :level3]
                              (when @images
                                [box :child   [perfect-layout :items   images
                                                              :gap     6
                                                              :item-fn images/render]])]])))

(defn photos-content
  []
  (let [dates (subscribe [:images/date-filters])]
    (fn []
      [v-box :size    "auto"
             :padding "1em 1em 1em 0"
             :gap     "1em"
             :children (doall (map (fn [date]
                                           ^{:key date}
                                           [gallery date])
                                         @dates))])))

(defn base-view
  [& {:keys [toolbar content]}]
  [v-box :size       "auto"
         :max-height "100%"
         :children [toolbar
                    [h-box :size     "auto"
                           :children [[controls/sidebar]
                                      [scroller :size       "auto"
                                                :max-height "100%"
                                                :child      content]]]]]);;

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
