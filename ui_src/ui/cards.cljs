(ns ui.cards
  (:require
    [ui.views.common.toolbar :as toolbar]

    [reagent.core :as reagent]
    [re-com.core :as re-com])
  (:require-macros
    [devcards.core :refer [defcard]]))

(defn butt
  [icon]
  [re-com/md-circle-icon-button :md-icon-name icon
                                :size         :regular
                                :on-click     identity])

(defcard basic-toolbar
         (reagent/as-element
           [toolbar/toolbar :logo  [butt "zmdi-menu"]
                            :left  [re-com/title :label         "foobar"
                                                 :margin-top    "0px"
                                                 :margin-bottom "0px"
                                                 :level         :level2]
                            :mid   [re-com/input-text :model "foobar"
                                                       :on-change identity]
                            :right [butt "zmdi-upload"]]))