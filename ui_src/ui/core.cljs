(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [album-layout.core :refer [perfect-layout]]

            [cljs.pprint :refer [pprint]]

            [ui.fx.fs]
            [ui.fx.img]
            [ui.fx.main-thread]

            [ui.images.events]
            [ui.images.subs]))

(enable-console-print!)

;; ---- common events ----
;; -----------------------

(reg-event-db
  :write-to
  [trim-v]
  (fn [db [path val]] (assoc-in db path val)))

;; ---- views ----
;; ---------------

(defn image
  [path]
  (let [preloaded? (subscribe [:preloaded? path])]
    (fn [_]
      (if @preloaded?
        [:img {:src path :style {:max-width "200px"}}]
        [:div "loading..."]))))

(defn root-component
  []
  (let [info (subscribe [:image-info])]
    (fn []
      [:div
       [:a {:href "#" :on-click #(dispatch [:start-import])} "Import"]
       (doall
         (for [[path _] @info]
           ^{:key path} [image path]))])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
