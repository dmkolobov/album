(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [album-layout.core :refer [perfect-layout]]

            [cljs.pprint :refer [pprint]]

            [ui.fx]
            [ui.async :refer [async-action] :as async]

            [cognitect.transit :as transit]

            [ui.images.events]
            [ui.images.subs]))

(enable-console-print!)

(defn root-component
  []
  (let [info (subscribe [:image-info])]
    (fn []
      [:div
       [:a {:href "#" :on-click #(dispatch [:start-import])} "Import"]
       (doall
         (for [[path info] @info]
           (do
             [:div
              [:img {:src path :style {:max-width "200px"}}]
              [:pre (str (:size info))]])))])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
