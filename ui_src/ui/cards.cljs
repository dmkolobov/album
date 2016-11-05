(ns ui.cards
  (:require
    [ui.views.common.toolbar :as toolbar]

    [reagent.core :as reagent :refer [atom]]
    [re-com.core :as re-com])
  (:require-macros
    [devcards.core :refer [defcard]]))

(defn butt
  [icon]
  [re-com/md-icon-button :md-icon-name icon
                         :size         :regular
                         :on-click     identity])

(let [actions   (atom
                  [{:id :book     :icon "zmdi-book"     :label "book"}
                   {:id :cake     :icon "zmdi-cake"     :label "cake"}
                   {:id :cocktail :icon "zmdi-cocktail" :label "cocktail"}])
      on-action (comp println vector :id)
      on-nav    (partial println "toolbar nav")]

(defcard toolbar
         (reagent/as-element
           [toolbar/toolbar :nav-icon    "zmdi-menu"
                            :nav-tooltip "Main menu"
                            :title       "Hello, World"
                            :actions     actions
                            :on-nav      on-nav
                            :on-action   on-action]))

(let [model     (atom :book)
      on-change #(reset! model (:id %))]
  (defcard navbar
           (reagent/as-element
             [re-com/box :child [toolbar/navbar :actions     actions
                                                :model       model
                                                :on-change   on-change]]))
  (defcard navmenu
           (reagent/as-element
             [re-com/box :child [toolbar/navmenu :actions     actions
                                                 :model       model
                                                 :on-change   on-change]]))))