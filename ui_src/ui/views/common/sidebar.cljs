(ns ui.views.common.sidebar
  (:require [re-com.core :refer [h-box v-box]]
            [reagent.core :as reagent]))

(def transition-group
  (reagent/adapt-react-class js/React.addons.TransitionGroup))

(def slide-in
  (reagent/create-class
    {:component-will-enter (fn [cb]
                             (this-as owner
                               (let [node  (reagent/dom-node owner)]
                                 (aset node "style" "width" "auto")
                                 (let [target (.-width (js/getComputedStyle node))]
                                   (aset node "style" "marginRight" (str "-" target))
                                   (aget node "offsetLeft") ;; force repaint
                                   (aset node "style" "transition" "margin-right 100ms ease-out")
                                   (aset node "style" "marginRight" 0))
                                 (cb))))
     :component-will-leave (fn [cb]
                             (this-as owner
                               (let [node  (reagent/dom-node owner)]
                                 (aset node "style" "width" "auto")
                                 (let [target (.-width (js/getComputedStyle node))]
                                   (aset node "style" "transition" "margin-right 100ms ease-out")
                                   (aset node "style" "marginRight" (str "-" target))
                                   (.addEventListener node
                                                      "transitionend"
                                                      cb)))))
     :reagent-render       identity}))

(defn sidebar-split
  [& {:keys [class content sidebar]}]
  [h-box :class    class
         :size     "100%"
         :height   "100%"
         :style    {:position "relative"
                    :overflow "hidden"}
         :children [content
                    [transition-group {:transition-name "foobar"}
                       (when sidebar
                         ^{:key "sidebar"}
                         [slide-in sidebar])]]])