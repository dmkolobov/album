(ns ui.views.common.animations
  (:require [reagent.core :as reagent]
            [re-com.core :refer [box]]))

(def transition-group
  (reagent/adapt-react-class js/React.addons.TransitionGroup))

(defn transition
  [& {:keys [name class content]}]
  [transition-group
   {:transition-name name}
   (when content ^{:key name} [class content])])

(defn slide-in-left
  [cb]
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "transform" (str "translate3d(-"target", 0, 0)"))
        (aget node "offsetLeft") ;; force repaint
        (aset node "style" "transition" "transform 100ms ease-out")
        (aset node "style" "transform" (str "translate3d(0, 0, 0)"))
        (cb)))))

(defn slide-out-left
  [cb]
  (println "leave")
  (this-as owner
    (let [node  (reagent/dom-node owner)]
      (aset node "style" "width" "auto")
      (let [target (.-width (js/getComputedStyle node))]
        (aset node "style" "transition" "transform 100ms ease-out")
        (.addEventListener node "transitionend" cb)
        (aset node "style" "transform" (str "translate3d(-"target", 0, 0)"))))))

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

(defn do-grow
  [cb]
  (this-as owner
    (let [node   (reagent/dom-node owner)]
      (.log js/console node)
      (aset node "style" "height" "auto")
      (let [style  (js/getComputedStyle node)
            height (.-height style)
            width  (.-width style)]
        (aset node "style" "height" 0)
        (aset node "style" "width" 0)
        (aset node "style" "overflow" "hidden")
        (aget node "offsetLeft")
        (aset node "style" "transition" "height 150ms ease-in-out 50ms, width 150ms ease-in-out")
        (.addEventListener node "transitionend" cb)
        (aset node "style" "height" height)
        (aset node "style" "width" width)))))

(defn do-shrink
  [cb]
  (this-as owner
    (let [node   (reagent/dom-node owner)]
        (aset node "style" "transition" "height 150ms ease-in-out, width 150ms ease-in-out 50ms")
        (.addEventListener node "transitionend" cb)
        (aset node "style" "width" 0)
        (aset node "style" "height" 0))))

(def grow-transition
  (reagent/create-class
    {:component-will-enter do-grow
     :component-will-leave do-shrink
     :reagent-render       (fn [content] [box :child content])}))

(defn grow
  [id content]
  [transition :name    id
              :class   grow-transition
              :content content])

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
