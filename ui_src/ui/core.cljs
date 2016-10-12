(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [re-com.core :refer [h-box v-box box throbber title label button]]
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

(defonce file-path (js/require "path"))

(defn image-info
  [filename {:keys [size filesize aspect]}]
  [v-box :children [[title :label filename :class "property-list-title"]
                    [h-box :children [[label :label "Dimensions" :class "property-list-label"]
                                      [label :label (if size
                                                      (str (:width size) " X " (:height size))
                                                      [throbber :size :small])]]]

                    [h-box :children [[label :label "Aspect Ratio" :class "property-list-label"]
                                      [label :label (if aspect
                                                      (str aspect)
                                                      [throbber :size :small])]]]

                    [h-box :children [[label :label "Filesize"  :class "property-list-label"]
                                      [label :label (str filesize " bytes")]]]]])

(defn image
  [path _]
  (let [filename   (.basename file-path path)
        preloaded? (subscribe [:preloaded? path])]
    (fn [_ {:keys [aspect] :as metrics}]
      [h-box :class    "property-list"
             :align    :baseline
             :gap      "1em"
             :children [[box :size "400px"
                             :align-self :start
                             :child (if @preloaded?
                                      [:img {:src path
                                             :width "400px"
                                             :height (str (/ 400 aspect) "px")}]
                                      [throbber])]
                        [image-info filename metrics]]])))

(defn import-view
  []
  (let [metrics (subscribe [:image-metrics])]
    (fn []
      [v-box :gap "1em"
       :children  (reduce (fn [rows [path metrics]]
                            (conj rows
                                  ^{:key path}
                                  [image path metrics]))
                          []
                          @metrics)])))

(defn root-component
  []
  [v-box :children [[button :label    "Import"
                            :on-click #(dispatch [:start-import])]
                    [import-view]]])

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
