(ns lib.slideshow
  (:require [re-frame.core :refer [reg-sub reg-event-db reg-event-fx trim-v]]
            [datascript.core :as datascript]))

;; ------------ events ------------

(reg-event-fx
  ::open
  [trim-v]
  (fn [{:keys [db] :as cofx} [idx items]]
    (let [state {:items items :idx idx}]
      {:db       (assoc db ::state state)
       :dispatch [:lib.controls/push-view :carousel-view]})))

(reg-event-fx
  ::close
  [trim-v]
  (fn [{:keys [db] :as cofx}]
    {:db       (dissoc db ::state)
     :dispatch [:lib.controls/pop-view]}))

(reg-event-db
  ::advance
  (fn [db _] (update-in db [::state :idx] inc)))

(reg-event-db
  ::rewind
  (fn [db _] (update-in db [::state :idx] dec)))

;; ------------ subscriptions ------------

(reg-sub
  ::state
  (fn [db] (get db ::state)))

(reg-sub
  ::cursor
  (fn []
    (subscribe [::stage]))
  (fn [{:keys [items idx]} _]
    (let [id     (nth items idx)
          first? (= 0 idx)
          last?  (= (dec (count items)) idx)]
      [id first? last?])))