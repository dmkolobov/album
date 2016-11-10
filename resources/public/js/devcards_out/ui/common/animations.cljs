(ns ui.common.animations
  (:require [reagent.core :as reagent]))

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