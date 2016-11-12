(ns ui.views.common.drawer
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [re-com.core :refer [box]]
            [reagent.core :as reagent]
            [cljs.core.async :as async :refer [put! <! chan]]))

(def transition
  (reagent/adapt-react-class js/React.addons.TransitionGroup))

(defn drawer-child
  [enter resize]
  (reagent/create-class
    {:component-will-appear  (fn [cb]
                             (this-as owner
                               (let [key  (second (reagent/argv owner))
                                     node (reagent/dom-node owner)]
                                 (enter key node cb))))

     :component-did-mount   (fn [owner]
                               (let [key  (second (reagent/argv owner))
                                     node (reagent/dom-node owner)]
                                 (js/ResizeSensor. node
                                                   (fn []
                                                     (println "resized" key (.now js/Date))
                                                     (resize)))))

     :reagent-render       (fn [_ child] [box :class "drawer-child"
                                              :style {:position "absolute"}
                                              :child child])}))

(defn register-child
  [state key node callback]
  (swap! state
         (fn [{:keys [nodes callbacks]}]
           {:nodes     (assoc nodes key node)
            :callbacks (assoc callbacks key callback)})))

(defn translate-3d [x y] (str "translate3d("x"px,"y"px,0)"))

(defn layout
  [keys nodes]
  (loop [keys       keys
         max-width  0
         offset     0
         offsets    []]
    (if (seq keys)
      (let [[key & keys'] keys
            node        (get nodes key)
            width       (.-offsetWidth node)
            height      (.-offsetHeight node)]
        (recur keys'
               (max width max-width)
               (+ offset height)
               (conj offsets offset)))
      [max-width offsets])))

(defn intro-sequence
  [_ max-width offsets]
  (map-indexed (fn [idx offset]
                 {:initial (translate-3d max-width offset)
                  :final   (translate-3d 0         offset)
                  :duration 150
                  :delay    (* 40 idx)})
               offsets))

(defn resize-sequence
  [pw w offsets]
  (doall
    (map-indexed (fn [idx offset]
         {:initial  (translate-3d 0 offset)
          :final    (translate-3d 0 offset)
          :duration 150
          :delay    (if (>= w pw) 100 0)})
       offsets)))

(def animation-scale 3);;

(defn animate!
  [node callback {:keys [initial final duration delay ease]
                  :or   {ease "cubic-bezier(0.075, 0.82, 0.165, 1)"}}]
  (when initial
    (aset node "style" "transform" initial)
    (aget node "offsetLeft"))
  (aset node
        "style"
        "transition"
        (str "transform "
             (* duration animation-scale)"ms "
             ease" "
             (* delay animation-scale)"ms"))
  (aset node "style" "transform" final)
  (when callback (callback)))

(defn throttle-chan
  [c ms]
  (let [c' (chan)]
    (go-loop []
        (put! c' (<! c))
        (<! (async/timeout ms))
        (recur))
    c'))

(defn drawer
  [& _]
  (let [state        (atom {:parent-node nil
                            :prev-width 0
                            :nodes       {}
                            :callbacks   {}})
        animate-chan (chan (async/dropping-buffer 1))
        child-fn     (drawer-child (partial register-child state)
                                   (partial put! animate-chan resize-sequence))]

    (reagent/create-class
      {:component-will-mount
       (fn [this]
         (go-loop []
           (let [choreography (<! animate-chan)
                 {:keys [parent-node nodes callbacks prev-width]} @state
                 [_ & {:keys [children]}] (reagent/argv this)
                 child-keys               (map (comp :key meta) children)
                 [max-width offsets]      (layout child-keys nodes)]
             (reagent/next-tick
               (fn []
                 (animate! parent-node nil {:final    (translate-3d (- max-width) 0)
                                            :duration 150
                                            :delay    (if (> max-width prev-width) 0 100)})
                 (doall
                   (map animate!
                        (map #(get nodes %)     child-keys)
                        (map #(get callbacks %) child-keys)
                        (choreography prev-width max-width offsets)))))
             (swap! state assoc :prev-width max-width)
             (recur))))


      ;; Translate all initial children to their proper positions and expand drawer.
       :component-did-mount
       (fn [this]
         (let [parent-node (reagent/dom-node this)]
           (swap! state assoc :parent-node parent-node)
           (put! animate-chan intro-sequence)))

       ;; Children have been added or removed. Slide children to accommodate.
       :component-did-update (fn [this]
                               (println "drawer updated:" @state))

       :reagent-render       (fn [& {:keys [children]}]
                               [:div.drawer
                                [transition
                                {:name "drawer"}
                                (doall
                                  (map (fn [child]
                                         (let [key (:key (meta child))]
                                           ^{:key key} [child-fn key child]))
                                       children))]])})))