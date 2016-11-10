(ns layout.events
  (:require [re-frame.core :refer [reg-cofx reg-event-db reg-event-fx inject-cofx trim-v]]))

(defrecord LayoutContainer [base-rect scale-rect])

(defn ^boolean should-layout?
  [step rect new-rect]
  (> (.abs js/Math
           (- (:width rect)
              (:width new-rect)))
     step))

(defn handle-update-metrics
  [{:keys [db]} [layout-id rect step]]
  {:db
   (update-in db
              [:layouts/metrics layout-id]
              (fn [{:keys [base-rect] :as container}]
                (if (should-layout? step base-rect rect)
                  (LayoutContainer. rect rect)
                  (assoc container :scale-rect rect))))})

(reg-event-fx :layouts/update-metrics
              [trim-v]
              handle-update-metrics)