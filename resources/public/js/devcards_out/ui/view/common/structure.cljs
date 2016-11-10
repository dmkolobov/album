(ns ui.view.common.structure
  (:require [re-com.core :refer [h-box v-box]]))

(defn main
  [{:keys [app-bar side-nav content right-nav]}]
  [v-box :children [app-bar
                    [h-box :children [side-nav content right-nav]]]])