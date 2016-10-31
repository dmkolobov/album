(ns layout.core
  (:require [goog.events]
            [reagent.core :as reagent]
            [re-com.core :refer [v-box h-box]]
            [re-frame.core :refer [reg-sub reg-event-db subscribe dispatch dispatch-sync]]
            ;; Need to include 'subs' and 'events' explicitely for Google Closure Compiler.
            [layout.subs]
            [layout.events]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defrecord Rect [width height])

(defn node-dimensions
  "Given a DOM element, return a map containing the width
  and height of the element."
  [node]
  (let [rect (.getBoundingClientRect node)]
    (Rect. (js/parseInt
             (min (.-width rect)
                  (.-innerWidth js/window)))
           (.-innerHeight js/window))))

(defn resize-handler
  "Creates a function which will update the layout window rects with
  measurements from 'node' whenever the window resizes."
  [layout-id node step]
  #(dispatch [:layouts/update-metrics layout-id (node-dimensions node) step]))

(defn paint-layout
  "Given a paint list and an item render-fn, render each item in its
  correct absolute position and with the correct dimensions."
  [render-fn {:keys [rect paint-list] :as layout}]
  (let [item-ids (map :id paint-list)]
    [:div
     {:style {:width    (str (:width rect) "px")
              :height   (str (:height rect) "px")
              :position "relative"}}
     (doall
       (map-indexed (fn [item-idx {:keys [x y width height id]}]
                      ^{:key (str id)}
                      [:div
                       {:style {:position "absolute"
                                :left     x
                                :top      y
                                :width    width
                                :height   height}}
                       [render-fn id (/ width height) item-idx item-ids]])
                    paint-list))]))

(defn measure-node!
  [window-id node step]
  (let [on-resize! (resize-handler window-id node step)]
    (.listen goog.events
             js/window
             (.-RESIZE (.-EventType goog.events))
             on-resize!)
    (on-resize!)))

(defn perfect-layout
  [& {:keys [items
             item-fn
             step
             gap]
      :or {step 100
           gap  0}}]
  (let [window-id (hash items)
        layout    (subscribe [:layouts/perfect-layout window-id gap] [items])]
    (reagent/create-class
      {:component-did-mount
       (fn [owner]
         (measure-node! window-id
                        (reagent/dom-node owner)
                        step))
       :reagent-render
       (fn [& {:keys [gap]}]
         [paint-layout item-fn @layout])})))

(defn grouped-layout
  [& {:keys [groups
             step

             item-gap
             group-gap

             group-fn
             item-fn]
      :or {step 100
           item-gap 0
           group-gap 5}}]
  (let [window-id    (hash groups)
        group-layout (subscribe [:layouts/grouped-layout
                                 window-id
                                 item-gap
                                 group-gap]
                                [groups])]
    (reagent/create-class
      {:component-did-mount
       (fn [owner]
         (measure-node! window-id
                        (reagent/dom-node owner)
                        step))
       :reagent-render
       (fn [_]
         [v-box :class    "grouped-perfect-layout"
                :gap      "1em"
                :size     "auto"
                :width    "100%"
                :children (doall
                            (map (fn [row]
                                   (cond (= 0 (count row))
                                         (println "blank row!")

                                         (= 1 (count row))
                                         [group-fn (:id (first row)) (:items (first row)) [paint-layout item-fn (first row)]]

                                         :default [h-box :gap      (str group-gap "px")
                                                         :size     "none"
                                                         :width    "100%"
                                                         :margin   (if (= row (last @group-layout))
                                                                     "0 0 1em 0"
                                                                     "0px")
                                                         :children (map (fn [{:keys [id items] :as layout}]
                                                                          [group-fn id items [paint-layout item-fn layout]])
                                                                        row)]))
                                 @group-layout))])})))