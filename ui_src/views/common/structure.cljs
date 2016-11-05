(ns ui.views.common.structure
  (:require [re-com.core :refer [h-box v-box box]]
            [reagent.core :as reagent]))

(def transition-group
  (reagent/adapt-react-class js/React.addons.TransitionGroup))

(defn slide-in-left
  [cb]
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "marginLeft" (str "-" target))
        (aget node "offsetLeft") ;; force repaint
        (aset node "style" "transition" "margin-left 100ms ease-out")
        (aset node "style" "marginLeft" 0))
      (cb))))

(defn slide-out-left
  [cb]
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "transition" "margin-left 100ms ease-out")
        (aset node "style" "marginLeft" (str "-" target))
        (.addEventListener node
                           "transitionend"
                           cb)))))

(defn slide-in-right
  [cb]
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "marginRight" (str "-" target))
        (aget node "offsetLeft") ;; force repaint
        (aset node "style" "transition" "margin-right 100ms ease-out")
        (aset node "style" "marginRight" 0))
      (cb))))

(defn slide-out-right
  [cb]
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "transition" "margin-right 100ms ease-out")
        (aset node "style" "marginRight" (str "-" target))
        (.addEventListener node
                           "transitionend"
                           cb)))))

(def side-sheet
  (reagent/create-class
    {:component-will-enter slide-in-left
     :component-will-leave slide-out-left
     :reagent-render       (fn [nav] [box :class "side-nav shadow-1" :child nav])}))

(def right-sheet
  (reagent/create-class
    {:component-will-enter slide-in-right
     :component-will-leave slide-out-right
     :reagent-render       (fn [nav] [box :class "right-nav shadow-1" :child nav])}))

(defn main
  [& {:keys [app-bar side-nav content right-nav attr]}]
  [h-box :class    "structure"
         :attr     attr
         :children [[transition-group
                     {:transition-name "side-nav"}
                     (when side-nav ^{:key "side-nav"} [side-sheet side-nav])]

                    [v-box :size     "auto"
                           :children [[box :class "app-bar"
                                           :child app-bar]
                                      content]]
                    [transition-group
                     {:transition-name "right-nav"}
                     (when right-nav ^{:key "right-nav"} [right-sheet right-nav])]]])


