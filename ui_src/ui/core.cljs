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

            [ui.controls.views :as controls]))

(enable-console-print!)

(defn photos-view
  []
  (let [metrics (subscribe [:loaded-images])]
    (fn []
      (when @metrics
        [v-box :size "auto"
               :children [[box :padding "1em 1em 1em 0"
                               :child [perfect-layout :items   metrics
                                                      :gap     6
                                                      :item-fn images/render]]]]))))
(defn root-component
  []
  [v-box :size       "auto"
         :max-height "100%"
         :children [[controls/toolbar]
                    [h-box :size     "auto"
                           :children [[controls/sidebar]
                                      [scroller :size       "auto"
                                                :max-height "100%"
                                                :child      [photos-view]]]]]])

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
