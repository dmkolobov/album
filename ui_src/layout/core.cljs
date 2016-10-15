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
         (let [node       (reagent/dom-node owner)
               on-resize! (resize-handler layout-id node scale-increment)]
           (.listen goog.events
                    js/window
                    (.-RESIZE (.-EventType goog.events))
                    on-resize!)
           (on-resize!)))
       :reagent-render
       (fn [& {:keys [gap]}]
         [:div
          {:style {:width    "100%"
                   :height   (str (first @paint-list) "px")
                   :position "relative"}}
          (doall
            (for [p-rect (second @paint-list)]
              ^{:key (:id p-rect)}
              [:div {:style {:position "absolute"
                             :left     (:x p-rect)
                             :top      (:y p-rect)
                             :width    (:width p-rect)
                             :height   (:height p-rect)}}
               [item-fn (:id p-rect)]]))])})))