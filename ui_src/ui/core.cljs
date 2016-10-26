(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [re-com.core :refer [md-circle-icon-button h-box v-box box throbber title label button scroller h-split]]
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
            [ui.controls.subs]

            [ui.views.carousel :refer [carousel]]))

(enable-console-print!)

(defn main-view
  [& {:keys [toolbar content]}]
  [v-box :size     "100%"
         :height   "100%"
         :children [toolbar
                    [h-box :size     "auto"
                           :children [[controls/sidebar]
                                      [scroller :size       "100%"
                                                :padding    "1em 1em 1em 0"
                                                :v-scroll   :auto
                                                :child      content]]]]])

(defn stacked-view
  [& {:keys [toolbar-content content on-close]}]
  [v-box :size     "auto"
         :height   "100%"
         :children [[controls/toolbar :icon     "zmdi-arrow-left"
                                      :tooltip  "Close"
                                      :on-click on-close
                                      :content  toolbar-content]
                    content]])

(defn carousel-view
  "Display stored photo sequence in a full-screen carousel view."
  []
  (let [cursor     (subscribe [:images/carousel-cursor])
        on-rewind  #(dispatch [:images/rewind-carousel])
        on-advance #(dispatch [:images/advance-carousel])
        on-close   #(dispatch [:images/close-carousel])
        render-fn  (fn [path] [images/render :path path])]
    (fn []
      [stacked-view :on-close on-close
                    :actions  [label :label "foobar"]
                    :content  [carousel :model      cursor
                                        :on-rewind  on-rewind
                                        :on-advance on-advance
                                        :render-fn  render-fn]])))

(defn index-image
  [path idx items]
  (let [on-click #(dispatch [:images/open-carousel idx items])]
    [images/render :path path :on-click on-click]))

(def MONTHS
  ["January"
   "February"
   "March"
   "April"
   "May"
   "June"
   "July"
   "August"
   "September"
   "October"
   "November"
   "December"])

(defn date-string
  [date]
  (let [year  (.getFullYear date)
        month (get MONTHS (.getMonth date))
        day   (.getDate date)]
    (str month " " day ", " year)))

(defn gallery
  [date layout]
  [v-box :size     "none"
         :gap      "1em"
         :children [[title :label (date-string date)
                           :level :level3]
                    [box :size  "auto"
                         :child layout]]])

(defn photo-gallery
  []
  (let [by-date (subscribe [:images/by-date])]
    (fn []
      [grouped-layout :groups    by-date
                      :item-gap  5
                      :item-fn   index-image
                      :group-gap 50
                      :group-fn  gallery])))

(defn photos-view
  "Display a gallery of all photos in your Album library."
  []
  [main-view :toolbar [controls/main-toolbar :title "Photos"]
             :content ;;[box :size    "100%"
                      ;;     :padding "1em 1.5em 1em 0"
                      [photo-gallery]])

(defn albums-view
  "Display a gallery of all albums in your Album library."
  []
  [main-view :toolbar [controls/main-toolbar :title "Albums"]
             :content [:div "Coming soon..."]])

(def views
  {:photos-view   photos-view
   :albums-view   albums-view
   :carousel-view carousel-view})

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
