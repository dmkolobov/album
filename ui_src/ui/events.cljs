(ns ui.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx trim-v]]))

;; ---- Common Events ----
;; ---------------------------
;; -----------------------------------------------------------------

(reg-event-db
  :write-to
  [trim-v]
  (fn [db [path data]] (assoc-in db path data)))

(reg-event-db
  :noop
  [trim-v]
  (fn [db _] db))

(reg-event-fx
  :do-fx
  [trim-v]
  (fn [_ [fx]] fx))


