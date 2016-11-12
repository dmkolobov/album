(ns ui.views.common.drawer
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
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

     :reagent-render       (fn [key child] [:div.drawer-child
                                            {:class (str key " drawer-child")
                                                :style {:position "absolute"}}
                                            child])}))

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
            box         (.getBoundingClientRect node)
            width       (.-width box)
            height      (.-height box)]
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
  (map-indexed (fn [idx offset]
       {:final    (translate-3d 0 offset)
        :duration 250
        :delay    (if (> w pw) 100 0)})
     offsets))

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
           (let [choreograph-fn (<! animate-chan)
                 {:keys [parent-node nodes callbacks prev-width]} @state
                 [_ & {:keys [children]}] (reagent/argv this)
                 parent-key               ".drawer"
                 child-keys               (map (comp :key meta) children)
                 [max-width offsets]      (layout child-keys nodes)
                 choreography             (choreograph-fn prev-width
                                                          max-width
                                                          offsets)]

             (reagent/next-tick ;;

               (fn []

                 (when (not= max-width prev-width)
                   (doto (js/move parent-key)
                     (.set "transform" (translate-3d (- max-width) 0))
                     (.duration 250)
                     (.delay (if (> max-width prev-width) 0 100))
                     (.ease "snap")
                     (.end)))

                 (doall
                   (map (fn [item-key item-node cb {:keys [initial final duration delay ease]
                                                    :or   {ease "snap"}}]
                          (when initial
                            (aset item-node "style" "transform" initial)
                            (aget item-node "offsetLeft"))

                          (doto (js/move (str "." item-key))
                            (.set "transform" final)
                            (.duration duration)
                            (.delay delay)
                            (.ease ease)
                            (.end cb)))

                        child-keys
                        (map #(get nodes %) child-keys)
                        (map #(get callbacks %) child-keys)
                        choreography))))

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