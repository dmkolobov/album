(ns layout.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]
            [layout.util :refer [selector mk-rect]]))

(reg-sub :album-layout/window (fn [db [_ gallery-id]] (get-in db [:album-layout/containers gallery-id])))
(reg-sub :album-layout/window-base (fn [db [_ gallery-id]] (get-in db [:album-layout/containers gallery-id :base-box])))

(defn item-aspect [[id {:keys [aspect]}]] aspect)

(defonce linear-partition (js/require "linear-partitioning"))

(def photos-per-screen 3.5)

(defn compute-rows
  "Given the window dimensions and a sequence of item aspect ratios,
  return the ideal number of rows for the gallery layout."
  [{:keys [width height]} aspects]
  (.round js/Math
          (/ (* (/ height photos-per-screen) (reduce + aspects))
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

(defn by-row-aspect
  [layout]
  (map (fn [items] [(reduce + (map item-aspect items)) items])
       layout))

(defn compute-layout
  "Given a sequence of items and the window dimensions, return a sequence of
  sequences containing item entries laid out according to the partition
  algorithm."
  [items window-base]
  (let [aspects    (map item-aspect items)
        num-rows   (compute-rows window-base aspects)
        select     (selector item-weight items)
        partitions (compute-partitions aspects num-rows)]
    (by-row-aspect
      (if (seq partitions)
        (map #(map select %) partitions)
        [items]))))

(reg-sub
  :album-layout/layout
  (fn [[_ items]]
    [items
     (subscribe [:album-layout/window-base (hash items)])])
  (fn [[items window-base] _]
    (when window-base
      (compute-layout items window-base))))

(defn ->scaled-row
  [width gap [aspect-sum row]]
  [(/ (- width (* gap (dec (count row))))
      aspect-sum)
   row])

(defn scale-layout
  "Given a screen rect, a gap specified in pixels, and a sequence of
  laid out rows, return a sequence of [row-height row] pairs."
  [{:keys [width height]} gap layout]
  (conj (mapv #(->scaled-row width gap %) (butlast layout))
        (let [[row-aspect last-row]   (last layout)
              row-height (/ height photos-per-screen)
              row-width  (- (* row-height row-aspect)
                            (* gap (dec (count last-row))))]
          (if (> row-width width)
            (->scaled-row width gap (last layout))
            [row-height last-row]))))

(defrecord PaintRect [id x y width height])

(defn build-paint-list
  [{:keys [width]} gap scaled-layout]
  (let [[first-height first-row] (first scaled-layout)]
    (loop [x              0
           y              0
           height         first-height
           current-row    first-row
           remaining-rows (rest scaled-layout)
           paint-list     (transient [])]
      (cond (seq current-row)
            (let [[id {:keys [aspect]}] (first current-row)
                  width                 (* aspect height)
                  rect                  (PaintRect. id x y width height)]
              (recur (+ x width gap)
                     y
                     height
                     (rest current-row)
                     remaining-rows
                     (conj! paint-list rect)))

            (seq remaining-rows)
            (let [[row-height row] (first remaining-rows)]
              (recur 0
                     (+ y height gap)
                     row-height
                     row
                     (rest remaining-rows)
                     paint-list))

            :default [(+ y height) (persistent! paint-list)]))))

(reg-sub
  :album-layout/paint-list;;
  (fn [[_ items _]]
    [(subscribe [:album-layout/window (hash items)])
     (subscribe [:album-layout/layout items])])
  (fn [[{:keys [box] :as window} layout] [_ _ gap]]
    (->> layout
         (scale-layout box gap)
         (build-paint-list box gap))))