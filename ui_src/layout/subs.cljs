(ns layout.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]
            [layout.data :refer [aspect map->PaintRect map->Layout]]))

(defn selector
  [key-fn coll]
  (let [cache (atom (group-by key-fn coll))]
    (fn [k]
      (let [item (first (get @cache k))]
        (swap! cache update k rest)
        item))))

(def photos-per-screen 3.5)

(defonce linear-partition (js/require "linear-partitioning"))

(defn num-rows
  [{:keys [width height]} aspects]
  (.round js/Math
          (/ (* (/ height photos-per-screen) (reduce + aspects))
             width)))

;; The layout rows are populated with items using a base window rect.
;; This base rect is only updated when the window width is scaled
;; more than some threshold.

(defn item-weight [item] (* 100 (aspect (second item))))

(defn compute-partitions
  "Partition the provided items into 'n' rows, where 'n' depends on
  'photos-per-screen', and each row has an approximately equal sum of
  aspect ratios."
  [rect items]
  (let [aspects (map (comp aspect second) items)
        n       (num-rows rect aspects)]
    (linear-partition (clj->js (map #(* 100 %) aspects))
                      n)))

(defn compute-rows
  "Given a layout container rect and a sequence of items, return a sequence
  of item sequences, where the sum of aspects in each item sequence is
  as equal as possible."
  [rect items]
  (println "computing rows")
  (let [select     (selector item-weight items)
        partitions (compute-partitions rect items)]
    (if (seq partitions)
      (doall (map #(map select %) partitions))
      [items])))

(defn row-aspect [row] (reduce + (map (comp aspect second) row)))

;; The rows are scaled using a different window rect. This window rect
;; always reflects the size of the current window.

(defn row-width
  "Return the width of the 'row' accounting for 'gap' pixels between
  each row item."
  [row {:keys [width]} gap]
  (- width (* gap (dec (count row)))));;

(defn fit-row
  "Returns a pair [row-height row], so 'row-height' is defined so
  that the row takes up the entire width of the enclosing 'rect',
  accounting for 'gap' pixels between each row item."
  [row rect gap]
  [(/ (row-width row rect gap) (row-aspect row))
   row])

(defn fit-last-row
  "Returns a vector [row-height row], where that `row-height` is defined
  so that the width of the row fills the provided `rect`."
  [row {:keys [width height] :as rect} gap]
  (let [row-height (/ height photos-per-screen)
        row-width  (+ (* row-height (row-aspect row))
                      (* gap (dec (count row))))]
    (if (>= row-width width)
      (fit-row row rect gap)
      [row-height row])))

(defn fit-rows
  [rows rect gap]
  (let [scaled (conj (mapv #(fit-row % rect gap) (butlast rows))
        (fit-last-row (last rows) rect gap))]
    scaled))

(defn scale-rows
  "Returns a layout where each element of 'rows' is scaled to fit
  the width of the enclosing 'rect' with 'gap' pixels between each
  item on all sides.

  The value returned implements IWillLayout and can participate in other
  layouts."
  [{:keys [width] :as rect} rows gap]
  (println "scaling rows")
  (let [scaled-rows            (fit-rows rows rect gap)
        [[height row] & rows]  scaled-rows]
    (loop [x          0
           y          0
           width      0
           height     height
           row        row
           rows       rows
           paint-list (transient [])]
      (cond (seq row)
            (let [[id item]  (first row)
                  item-width (* (aspect item) height)
                  item-end   (+ x item-width)
                  rect       (map->PaintRect
                               {:id     id
                                :x      x
                                :y      y
                                :width  item-width
                                :height height})]
              (recur (+ item-end gap)
                     y
                     (max width item-end)
                     height
                     (rest row)
                     rows
                     (conj! paint-list rect)))

            (seq rows)
            (let [[[height' row] & rows] rows
                  y' (+ y height gap)]
              (recur 0 y' width height' row rows paint-list))

            :default
            (let [paint-list (persistent! paint-list)
                  height     (+ y height)]
              (map->Layout
              {:rect       {:width  width :height height}
               :paint-list paint-list}))))))

;; subscriptions

(reg-sub :layouts/metrics (fn [db [_ window-id]] (get-in db [:layouts/metrics window-id])))

(reg-sub :layouts/base-rect
         (fn [[_ window-id]] (subscribe [:layouts/metrics window-id]))
         (fn [window _] (:base-rect window)))

(reg-sub :layouts/scale-rect
         (fn [[_ window-id]] (subscribe [:layouts/metrics window-id]))
         (fn [window _] (:scale-rect window)))

(reg-sub
  :layouts/perfect-rows

  (fn [[_ window-id items]]
    (subscribe [:layouts/base-rect window-id]))

  (fn [base-rect [_ _ items]]
    (compute-rows base-rect items)))

(reg-sub
  :layouts/perfect-layout

  (fn [[_ window-id _] [items]]
    [(subscribe [:layouts/scale-rect window-id])
     (subscribe [:layouts/perfect-rows window-id items])])

  (fn [[scale-rect rows] [_ _ gap]]
    (scale-rows scale-rect rows gap)))

(defn clump-layouts
  "Takes a window rect, an integer gap, and a sequence of layouts
  as inputs and returns a sequence of layout rows, so that thin layouts
  are displayed on the same row."
  [{:keys [width] :as rect} gap layouts]
  (loop [rows          []
         current-row   []
         current-width 0
         layouts       layouts]
    (if (seq layouts)
      (let [[{:keys [rect] :as layout} & layouts'] layouts
            layout-width (:width rect)]

        (cond ;; layout is the same width as the container and gets its own row.
              (= layout-width width)
              (recur (if-let [row (seq current-row)]
                       (conj rows row [layout])
                       (conj rows [layout]))
                     []
                     0
                     layouts')

              ;; layout is smaller than the container and fits into the current row.
              (<= (+ current-width layout-width) width)
              (recur rows (conj current-row layout) (+ current-width layout-width gap) layouts')

              ;; layout is smaller than the container, but does not fit into the current row;
              ;; start a new row.
              :default
              (recur (conj rows current-row) [layout] layout-width layouts')))

      (if-let [row (seq current-row)] (conj rows row) rows))))

(reg-sub
  :layouts/grouped-layout

  (fn [[_ window-id _ _] [groups]]
    (into [(subscribe [:layouts/scale-rect window-id])]
          (map (fn [[group-id group-items]]
                 (subscribe [:layouts/perfect-rows window-id group-items]))
               groups)))

  (fn [[scale-rect & row-groups] [_ _ item-gap group-gap] [groups]]
    (let [layout-groups (map #(assoc %2 :id %1)
                             (keys groups)
                             (map #(scale-rows scale-rect % item-gap) row-groups))]
      (clump-layouts scale-rect group-gap layout-groups))))