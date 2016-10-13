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
            [ui.images.subs]))

(enable-console-print!)

;; ---- views ----
;; ---------------

(defonce file-path (js/require "path"))

(defn image-info
  [path {:keys [size filesize aspect]}]
  [v-box :children [[title :label (.basename file-path path) :class "property-list-title"]
                    [h-box :children [[label :label "Dimensions" :class "property-list-label"]
                                      [label :label (if size
                                                      (str (:width size) " X " (:height size))
                                                      [throbber :size :small])]]]

                    [h-box :children [[label :label "Aspect Ratio" :class "property-list-label"]
                                      [label :label (if aspect
                                                      (str aspect)
                                                      [throbber :size :small])]]]

                    [h-box :children [[label :label "Filesize"  :class "property-list-label"]
                                      [label :label (if filesize
                                                      (str filesize " bytes")
                                                      [throbber :size :small])]]]]])

(defn image-display
  [path _ _]
  (let [preloaded? (subscribe [:preloaded? path])]
    (fn [path                   ;; the id of the layout item
         {:keys [width height]} ;; the dimensions of the space given to the layout item
         {:keys [row col]}]     ;; the row number and the column offset of the layout item
      (if @preloaded?
        [:img {:src    path
               :width  "100%"
               :height "100%"
               :style  {:box-shadow "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}
               :on-click #(js/alert (str "clicked: " path ", row " row ", col " col))}]
        [box :child [throbber]]))))

(defn import-view
  []
  (let [metrics (subscribe [:loaded-images])]
    (fn []
      (when @metrics
        [box :size  "100%"
             :padding "1em 1em 10em 1em"
             :child [perfect-layout :items      metrics
                                    :gap        6
                                    :item-fn    image-display]]))))

(defn root-component
  []
  [h-box :height "100%"
         :children [[box :size  "none"
                         :style {:background "white"
                                 :height     "100%"}
                         :child [button :label    "Import"
                                        :on-click #(dispatch [:start-import])]]
                    [scroller :size  "auto"
                              :child [import-view]]]])

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
