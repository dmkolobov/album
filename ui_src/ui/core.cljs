(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx reg-event-db reg-sub dispatch subscribe]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [album-layout.core :refer [perfect-layout]]

            [cljs.pprint :refer [pprint]]

            [ui.fx]
            [ui.async :refer [async-action]]

            [ui.images.events]
            [ui.images.subs]))

(enable-console-print!)

(defonce file-path (js/require "path"))

(def image-path (.join file-path js/process.env.HOME "Desktop/fire_pit.jpg"))

(defn import-path
  [path]
  (.join file-path js/process.env.HOME (.basename file-path path)))

(reg-event-fx
  :test-import-resize
  [async-action]
  (fn [{:keys [on-success on-error]}]
    (println "test import size")
    {:async/sequence
     {:events [[:image/import image-path (import-path image-path)]
               [:image/resize image-path (import-path image-path) 200]]
      :on-success on-success
      :on-error   on-error}}))

(defn root-component
  []
  (let [info (subscribe [:image-info])]
    (dispatch [:test-import-resize])
    (fn []
      [:pre (with-out-str (pprint @info))])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
