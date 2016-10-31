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

            [ui.views.carousel :refer [carousel]]
            [ui.views.info :refer [display-info info-button]]

            [ui.util :refer [date-string]]))

(enable-console-print!)

(defn carousel-view
  "Display photo results in a full-screen carousel view."
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
                                           :render-fn  images/fullscreen-photo]])))

(reg-sub
  :selection/contains?
  (fn [db [_ id]]
    (contains? (get db :selection/id-set) id)))

(reg-sub
  :selection/contains-all?
  (fn [db [_ ids]]
    (clojure.set/subset? (set ids) (get db :selection/id-set #{}))))

(reg-sub
  :selection/count
  (fn [db] (count (get db :selection/id-set))))

(reg-event-db
  :selection/toggle-id
  (fn [db [_ path]]
    (let [s (get db :selection/id-set #{})]
      (assoc db
        :selection/id-set (if (contains? s path)
                            (disj s path)
                            (conj s path))))))

(reg-event-db
  :selection/include-ids
  (fn [db [_ ids]]
    (update db
            :selection/id-set
            (fn [id-set]
              (if id-set (into id-set ids) (set ids))))))

(reg-event-db
  :selection/exclude-ids
  (fn [db [_ ids]]
    (apply update db :selection/id-set disj ids)))

(reg-event-db
  :selection/discard
  (fn [db] (dissoc db :selection/id-set)))

(defn group-header
  [label ids]
  (let [selected? (subscribe [:selection/contains-all? ids])]
    (fn [label ids]
      [h-box
       :align     :center
       :class     (str "gallery-header " (when @selected? "active"))
       :children [[md-icon-button :class        "gallery-selection-icon"
                                  :md-icon-name "zmdi-check-circle"
                                  :size         :regular
                                  :on-click    (if @selected?
                                                 #(dispatch [:selection/exclude-ids ids])
                                                 #(dispatch [:selection/include-ids ids]))]
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

(defn gallery-image
  "Display an image in the photo gallery. A checkmark circle icon allows for selection
  of the image for use in group actions."
  [path _ _ _]
  (let [selected?  (subscribe [:selection/contains? path])
        preloaded? (subscribe [:images/preloaded? path])

        on-select  #(dispatch [:selection/toggle-id path])]
    (fn [path aspect idx items]
      (when @preloaded?
        [:div.gallery-image
         {:class (when @selected? "active")
          :style {:padding (if @selected? (str "1em " aspect "em") "0")}}
         [md-icon-button :md-icon-name "zmdi-check-circle"
                         :class        (str "photo-selection-icon " (when @selected? "active"))
                         :size         :regular
                         :on-click     on-select]
         [images/block-image :path     path
                             :on-click #(dispatch [:images/open-carousel idx items])]]))))

(defn photo-gallery
  []
  (let [by-date (subscribe [:images/by-date])]
    (fn []
      [grouped-layout :groups    by-date
                      :item-gap  5
                      :item-fn   gallery-image
                      :group-gap 50
                      :group-fn  gallery-group])))

(defn group-info-button
  []
  [md-icon-button :md-icon-name "zmdi-info"
                  :size         :regular
                  :on-click     #(dispatch [:images/open-multiple-info])])

(defn photos-view
  "Display a gallery of all photos in your Album library."
  []
  (let [selection-count (subscribe [:selection/count])]
    (fn []
      [main-view :title   (if (> @selection-count 0)
                            (str "Photos - " @selection-count)
                            "Photos")
                 :content [photo-gallery]
                 :select-actions [group-info-button]])))

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
