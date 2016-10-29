(ns ui.views.main
  (:require [re-com.core :as re-com :refer [h-box v-box scroller]]
            [re-frame.core :refer [dispatch]]
            [ui.views.common.buttons :as buttons]
            [ui.views.common.toolbar :as toolbar]))

(def sidebar-button
  (let [on-click #(dispatch [:controls/open-left-sidebar])]
    [buttons/menu-button :on-click on-click :tooltip-position :below-right]))

(def import-button
  (let [on-click #(dispatch [:start-import])]
    [buttons/import-button :on-click on-click :tooltip-position :below-left]))

(defn main-toolbar
  [title]
  [toolbar/base-toolbar :class "main-toolbar"
                        :logo-icon     sidebar-button
                        :left-content  [re-com/title :class "main-toolbar-title"
                                                     :level :level-2
                                                     :label title]
                        :right-content import-button])

(defn main-view
  [& {:keys [title content]}]
  [v-box :size     "100%"
   :height   "100%"
   :children [[main-toolbar title]
              [h-box :size     "auto"
                     :children [[sidebar]
                                [scroller :size     "100%"
                                          :padding  "1em 1em 1em 0"
                                          :v-scroll :auto
                                          :child    content]]]]])