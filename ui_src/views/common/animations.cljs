(ns ui.views.common.animations
  (:require [reagent.core :as reagent]))

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

(defn slide-left-transition
  [render-fn]
  (reagent/create-class
    {:component-will-enter slide-in-left
     :component-will-leave slide-out-left
     :reagent-render       render-fn}))

(defn slide-right-transition
  [render-fn]
  (reagent/create-class
    {:component-will-enter slide-in-right
     :component-will-leave slide-out-right
     :reagent-render       render-fn}))

(defn transition
  [& {:keys [name class content]}]
  [transition-group
   {:transition-name name}
   (when content ^{:key name} [class content])])