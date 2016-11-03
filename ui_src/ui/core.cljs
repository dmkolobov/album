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

            [ui.images.photos]
            [ui.images.photos]
            [ui.images.images :as images]

            [ui.views.common.toolbar :refer [base-toolbar]]
            [ui.views.main :refer [main-view]]
            [ui.views.fullscreen :refer [fullscreen-view]]

            [ui.controls.views :as controls]
            [ui.controls.events]
            [ui.controls.controls]

            [ui.views.slideshow :refer [carousel]]
            [ui.views.info :refer [display-info info-button]]

            [ui.util :refer [date-string]]))

(enable-console-print!)

(defn carousel-view
  "Display photo results in a full-screen carousel view."
  []
  (let [cursor     (subscribe [:lib.slideshow/current-id])
        info?      (subscribe [:lib.controls/photo-info?])

        on-rewind  #(dispatch [:lib.slideshow/rewind])
        on-advance #(dispatch [:lib.slideshow/advance])
        on-close   #(dispatch [:lib.slideshow/close])]
    (fn []
      [fullscreen-view :on-close on-close
                       :actions  [info-button]
                       :sidebar  (when @info? [display-info cursor])
                       :content  [carousel :model      cursor
                                           :on-rewind  on-rewind
                                           :on-advance on-advance
                                           :render-fn  images/fullscreen-photo]])))

(defn group-header
  [label ids]
  (let [selected? (subscribe [:lib.selection/contains-all? ids])]
    (fn [label ids]
      [h-box
       :align     :center
       :class     (str "gallery-header " (when @selected? "active"))
       :children [[md-icon-button :class        "gallery-selection-icon"
                                  :md-icon-name "zmdi-check-circle"
                                  :size         :regular
                                  :on-click    (if @selected?
                                                 #(dispatch [:lib.selection/exclude-ids ids])
                                                 #(dispatch [:lib.selection/include-ids ids]))]
                  [title :class "gallery-title"
                         :label label
                         :level :level3]]])))

(defn gallery-group
  [date items layout]
  [v-box :size     "none"
         :gap      "1em"
         :children [^{:key (hash items)} [group-header (date-string date) items]
                    [box :size  "auto"
                         :child layout]]])

(defn gallery-photo
  [photo-id idx items]
  (let []
    (fn [_]
      ())))

(defn gallery-image
  "Display an image in the photo gallery. A checkmark circle icon allows for selection
  of the image for use in group actions."
  [photo-id _ _ _]
  (let [selected?  (subscribe [:lib.selection/contains? photo-id])
        on-select  #(dispatch [:lib.selection/toggle-id photo-id])]
    (fn [photo-id aspect idx items]
      [:div.gallery-image
       {:class (when @selected? "active")
        :style {:padding (if @selected? (str "1em " aspect "em") "0")}}
       [md-icon-button :md-icon-name "zmdi-check-circle"
                       :class        (str "photo-selection-icon " (when @selected? "active"))
                       :size         :regular
                       :on-click     on-select]
       [gallery-photo photo-id idx items]])))

(defn photo-gallery
  []
  (let [by-date (subscribe [:lib.photos/by-date])]
    (fn []
      [grouped-layout :groups    by-date
                      :item-gap  5
                      :item-fn   gallery-image
                      :group-gap 50
                      :group-fn  gallery-group])))

(defn photos-view
  "Display a gallery of all photos in your Album library."
  []
  (let [selection-count (subscribe [:lib.selection/count])]
    (fn []
      [main-view :title   (if (> @selection-count 0)
                            (str "Photos - " @selection-count)
                            "Photos")
                 :content [photo-gallery]])))

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
  (let [current-view (subscribe [:lib.controls/current-view])]
    (fn []
      [(get views @current-view)])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
