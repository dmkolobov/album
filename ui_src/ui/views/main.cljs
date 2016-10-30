(ns ui.views.main
  (:require [re-com.core :as re-com :refer [box hyperlink title h-box v-box scroller md-icon-button]]
            [re-frame.core :refer [dispatch subscribe]]
            [ui.views.common.toolbar :refer [base-toolbar]]
            [ui.views.common.menu :refer [menu]]
            [reagent.core :as reagent]))

;; -------- toolbar --------

(defn main-menu-button
  []
  [md-icon-button :md-icon-name     "zmdi-menu"
                  :size             :regular
                  :tooltip          "Main Menu"
                  :tooltip-position :below-right
                  :on-click         #(dispatch [:controls/open-left-sidebar])])

(defn import-button
  []
  [md-icon-button :md-icon-name     "zmdi-upload"
                  :size             :regular
                  :tooltip          "Import Photos"
                  :tooltip-position :below-left
                  :on-click         #(dispatch [:start-import])])

(defn main-toolbar
  [title]
  [base-toolbar :class "main-menu"
   :logo  [main-menu-button]
   :left-content [re-com/title :level         :level2
                               :margin-top    "0px"
                               :margin-bottom "0px"
                               :label         title]
   :right-content [import-button]])

;; -------- sidebar --------

(defn sidebar-logo
  []
  [box :child [hyperlink :on-click #(dispatch [:controls/close-left-sidebar])
               :label    [box :align   :center
                              :padding "1em 2em"
                              :child   [title :level         :level2
                                              :margin-top    "0px"
                                              :margin-bottom "0px"
                                              :label         "album"]]]])

(def transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(def sidebar-items
  [{:id :photos-view :label "Photos" :icon "zmdi-image"}
   {:id :albums-view :label "Albums" :icon "zmdi-collection-image"}])

(defn label-expanded-sidebar-item
  [{:keys [label icon]}]
  [h-box :align    :center
   :gap      "1em"
   :children [[box :child [:i.sidebar-icon {:class (str "zmdi " icon)}]]
              [re-com/label :label label]]])

(defn label-sidebar-item
  [{:keys [label icon]}]
  [v-box :align    :center
   :gap      "0.25em"
   :children [[box :child [:i.sidebar-icon.sidebar-icon-gray {:class (str "zmdi " icon)}]]
              [re-com/label :class "sidebar-label" :label label]]])

(defn sidebar
  []
  (let [current-view (subscribe [:controls/current-view])
        sidebar?     (subscribe [:controls/sidebar-left?])
        swap-view    #(dispatch [:controls/set-view %])]
    (fn []
      [h-box :padding "1em 0"
       :children [[transition-group
                   {:transition-name           "sidebar"
                    :transition-enter-timeout  100
                    :transition-leave-timeout  100}
                   (when @sidebar?
                     ^{:key "sidebar"}
                     [v-box :size     "auto"
                      :class    "sidebar left-sidebar"
                      :children [[sidebar-logo]
                                 [box :child [menu :model     current-view
                                                   :items     sidebar-items
                                                   :label-fn  label-expanded-sidebar-item
                                                   :on-change swap-view]]]])]
                  [menu :model     current-view
                        :items     sidebar-items
                        :label-fn  label-sidebar-item
                        :class     "collapsed"
                        :on-change swap-view]]])))

;; -------- content ---------

(defn main-view
  [& {:keys [title content]}]
  [v-box :size     "100%"
         :height   "100%"
         :children [[main-toolbar title]
                    [h-box :size     "auto"
                           :children [[sidebar]
                                      [scroller :size       "100%"
                                                :padding    "1em 1em 1em 0"
                                                :v-scroll   :auto
                                                :child      content]]]]])
