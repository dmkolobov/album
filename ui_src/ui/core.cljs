(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [re-com.core :refer [md-icon-button h-box v-box box throbber title label button scroller h-split]]
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

            [ui.views.common.toolbar :refer [base-toolbar]]
            [ui.views.main :refer [main-view]]
            [ui.views.fullscreen :refer [fullscreen-view]]

            [ui.controls.views :as controls]
            [ui.controls.events]
            [ui.controls.subs]

            [ui.views.carousel :refer [carousel]]))

(enable-console-print!)

(defn info-button
  []
  [md-icon-button :md-icon-name     "zmdi-info"
                  :size             :regular
                  :tooltip          "Info"
                  :tooltip-position :below-left
                  :on-click         #(dispatch [:images/open-info])])

(defn display-photo
  [path {:keys [aspect]}]
  [:div
   {:style
    (if (<= aspect 1)

      {:display        "block"
       :position       "relative"
       :width          "0"
       :height         "100%"
       :padding-right  (str (* aspect 100) "%")
       :margin         "auto"}

      {:display        "block"
       :position       "relative"
       :width          "100%"
       :height         "0"
       :padding-top    (str (* (/ 1 aspect) 100) "%")
       :margin         "auto"})}
   [images/render :path path :absolute? true]])

(defn display-info
  [model]
  (let [[path info]  @model
        printed-info (with-out-str (pprint info))]
    ^{:key path}
    [v-box :class    "fullscreen-sidebar"
           :height   "100%"
           :size     "none"
           :padding  "0 1em"
           :children [[h-box :align :center
                             :children [[box :size "auto" :child [title :level :level2 :label "Info"]]
                                        [md-icon-button :md-icon-name "zmdi-close"
                                                        :size         :regular
                                                        :on-click     #(dispatch [:images/close-info])]]]
                      [box :child [:pre printed-info]]]]))

(defn carousel-view
  "Display stored photo sequence in a full-screen carousel view."
  []
  (let [cursor     (subscribe [:images/cursor])
        info?      (subscribe [:images/info?])

        on-rewind  #(dispatch [:images/rewind-carousel])
        on-advance #(dispatch [:images/advance-carousel])
        on-close   #(dispatch [:images/close-carousel])]
    (fn []
      [fullscreen-view :on-close on-close
                       :actions  [info-button]
                       :sidebar  (when @info? [display-info cursor])
                       :content  [carousel :model      cursor
                                           :on-rewind  on-rewind
                                           :on-advance on-advance
                                           :render-fn  display-photo]])))

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
  [main-view :title   "Photos"
             :content [photo-gallery]])

(defn albums-view
  "Display a gallery of all albums in your Album library."
  []
  [main-view :title   "Albums"
             :content [:div "Coming soon..."]])

(def views
  {:photos-view   photos-view
   :albums-view   albums-view
   :carousel-view carousel-view})

(defn root-component
  []
  (let [current-view (subscribe [:controls/current-view])]
    (fn []
      [(get views @current-view)])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
