(ns layout.core
  (:require [goog.events]
            [reagent.core :as reagent]
            [re-frame.core :refer [reg-sub reg-event-db subscribe dispatch dispatch-sync]]
            ;; Need to include 'subs' and 'events' explicitely for Google Closure Compiler.
            [layout.subs]
            [layout.events]
            [cljs.pprint :refer [pprint]]
            [layout.util :refer [node-dimensions]]))

(enable-console-print!)

(defn resize-handler
  [layout-id node scale-increment]
  #(dispatch [:album-layout/container-resized layout-id (node-dimensions node) scale-increment]))

(defn render-paint-list
  "Given a paint list and an item render-fn, render each item in its
  correct absolute position and with the correct dimensions."
  [render-fn [layout-height rect-list :as paint-list]]
  [:div
   {:style {:width    "100%"
            :height   (str layout-height "px")
            :position "relative"}}
   (doall
     (for [{:keys [x y width height id]} rect-list]
       ^{:key (str id)}
       [:div
        {:style {:position "absolute"
                 :left     x
                 :top      y
                 :width    width
                 :height   height}}
        [render-fn id]]))])

(defn watch-dimensions!
  [layout-id scale-increment node]
  (let [on-resize! (resize-handler layout-id node scale-increment)]
    (.listen goog.events
             js/window
             (.-RESIZE (.-EventType goog.events))
             on-resize!)
    (on-resize!)))

(defn perfect-layout
  [& {:keys [items
             item-fn
             scale-increment
             gap]
      :or {scale-increment 100
           gap             0}}]
  (let [layout-id  (hash items)
        paint-list (subscribe [:album-layout/paint-list items gap])]
    (reagent/create-class
      {:component-did-mount
       (fn [owner]
         (watch-dimensions! layout-id
                            scale-increment
                            (reagent/dom-node owner)))
       :reagent-render
       (fn [& {:keys [gap]}]
         (render-paint-list item-fn @paint-list))})))