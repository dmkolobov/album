(ns layout.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]
            [layout.util :refer [selector mk-rect]]))

(reg-sub :album-layout/window (fn [db [_ gallery-id]] (get-in db [:album-layout/containers gallery-id])))
(reg-sub :album-layout/window-base (fn [db [_ gallery-id]] (get-in db [:album-layout/containers gallery-id :base-box])))

(defn item-aspect [[id {:keys [aspect]}]] aspect)

(defonce linear-partition (js/require "linear-partitioning"))

(defn compute-rows
  "Given the window dimensions and a sequence of item aspect ratios,
  return the ideal number of rows for the gallery layout."
  [{:keys [width height]} aspects]
  (.round js/Math
          (/ (* (/ height 3) (reduce + aspects))
             width)))

(defn aspect-weight [a] (* a 100))

(defn compute-partitions
  "Given a sequence of item aspects and the number of rows, return
  a sequence of rows, each of which is a sequence of item aspects
  whose sum is as equal as possible to the sums of other rows."
  [aspects num-rows]
  (linear-partition (clj->js (map aspect-weight aspects))
                    num-rows))

(defn item-weight [i] (* 100 (item-aspect i)))

(defn compute-layout
  "Given a sequence of items and the window dimensions, return a sequence of
  sequences containing item entries laid out according to the partition
  algorithm."
  [items window-base]
  (let [aspects  (map item-aspect items)
        num-rows (compute-rows window-base aspects)]
    (map (partial map (selector item-weight items))
         (compute-partitions aspects num-rows))))

(reg-sub
  :album-layout/layout
  (fn [[_ items]]
    [items
     (subscribe [:album-layout/window-base (hash items)])])
  (fn [[items window-base] _]
    (when window-base
      (compute-layout items window-base))))

(defn row-aspect-map
  [layout]
  (map (fn [items] [(reduce + (map item-aspect items)) items])
       layout))

(reg-sub
  :album-layout/summed-layout
  (fn [[_ items]] (subscribe [:album-layout/layout items]))
  (fn [layout] (row-aspect-map layout)))

(defn ->sized-row
  [width gap [aspect-sum row]]
  [row
   (/ (- width (* gap (dec (count row))))
      aspect-sum)])

(defrecord PaintRect [id x y width height])

(reg-sub
  :album-layout/paint-list
  (fn [[_ items _]]
    [(subscribe [:album-layout/window (hash items)])
     (subscribe [:album-layout/summed-layout items])])
  (fn [[{:keys [box] :as window} layout] [_ _ gap]]
    (let [width        (:width box)
          [row height] (->sized-row width gap (first layout))]
      (loop [x          0
             y          0
             paint-list (transient [])
             height     height
             row        row
             layout     (rest layout)]
        (cond (seq row)
              (let [[id {:keys [aspect] :as data}] (first row)
                    width       (* aspect height)
                    paint-list' (conj! paint-list
                                       (PaintRect. id x y width height))
                    x'          (+ x width gap)]
                (recur x' y paint-list' height (rest row) layout))

              (seq layout)
              (let [[row' height'] (->sized-row width gap (first layout))
                    y'             (+ y height gap)]
                (recur 0 y' paint-list height' row' (rest layout)))

              :default [(+ y height) (persistent! paint-list)])))))