(ns layout.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as reagent]))

(defn gallery
  [& {:keys [layout render-fn gap]}]
  (loop [x     0
         y     0
         els   []
         row   (first @layout)
         rows  (rest @layout)]
    (cond (seq row)
          (let [[[id {:keys [width height] :as rect} data] & row'] row]
            (recur (+ x gap)
                   y
                   (conj els
                         ^{:key id}
                         [:div {:style {:position "absolute"
                                        :width    width
                                        :height   height
                                        :left     x
                                        :right    y}}
                          [render-fn id rect data]])
                   row'
                   rows))

          (seq rows)
          (recur 0
                 (+ y gap)
                 els
                 (first rows)
                 (rest rows))

          :default
          [:div
           {:style {:position "relative"
                    :width    "100%"}}
           (seq els)])))

(defn render-gallery
  ""
  [& {:keys [layout render-fn gap]}]


  (doall
    (map-indexed (fn [row-idx row]
                   ^{:key row-idx}
                   [:div {:style {:position "relative"
                                  :height   (:height (second (first row)))}}
                    (seq
                      (first
                        (reduce (fn [[row x] [id {:keys [width height] :as rect} data]]
                                  [(conj row
                                         ^{:key id}
                                         [:div {:style {:position "absolute"
                                                        :width    width
                                                        :height   height
                                                        :top      0
                                                        :left     x}}
                                          [render-fn id rect data]])
                                   (+ x width gap)])
                                [[] 0]
                                row)))])
                  @layout)))

