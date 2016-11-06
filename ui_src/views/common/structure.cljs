(ns ui.views.common.structure
  (:require [re-com.core :refer [h-box v-box box]]
            [ui.views.common.animations :as animate]
            [reagent.core :as reagent]))

(def side-sheet
  (animate/slide-left-transition
    (fn [nav] [box :class "side-nav shadow-1" :child nav])))

(def right-sheet
  (animate/slide-right-transition
    (fn [nav] [box :class "right-nav shadow-1" :child nav])))

(defn main
  [& {:keys [app-bar side-nav content right-nav attr]}]
  [h-box :class    "structure"
         :attr     attr
         :children [[animate/transition :name    "side-nav"
                                        :class   side-sheet
                                        :content side-nav]

                    [v-box :size     "auto"
                           :class    "content-canvas"
                           :children [[box :class "app-bar"
                                           :child app-bar]
                                      [box :class "app-content"
                                           :child content]]]

                    [animate/transition :name    "right-nav"
                                        :class   right-sheet
                                        :content right-nav]]])

