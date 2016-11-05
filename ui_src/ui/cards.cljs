(ns ui.cards
  (:require
    [ui.views.common.toolbar :as toolbar]

    [reagent.core :as reagent]
    [re-com.core :as re-com])
  (:require-macros
    [devcards.core :refer [defcard]]))

(defn butt
  [icon]
  [re-com/md-icon-button :md-icon-name icon
                         :size         :regular
                         :on-click     identity])

(let [actions [{:id    :foo
                :icon  "zmdi-book"
                :label "foobar"}

               {:id    :bar
                :icon  "zmdi-cake"
                :label "hello, world"}

               {:id    :car
                :icon  "zmdi-cocktail"
                :label "yes, indeed!"}]
      on-action (comp println vector :id)
      on-nav    (partial println "toolbar nav")]

(defcard basic-toolbar
         (reagent/as-element
           [toolbar/toolbar :class       "shadow-1"
                            :nav         "zmdi-menu"
                            :nav-tooltip "Main menu"
                            :title       "Hello, World"
                            :actions     actions
                            :on-nav      on-nav
                            :on-action   on-action])))