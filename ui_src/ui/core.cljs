(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx reg-event-db reg-sub dispatch subscribe]]
            [day8.re-frame.async-flow-fx]
            [album-layout.core :refer [perfect-layout]]

            [clojure.string :refer [join]]

            [ui.fx]
            [ui.events]
            [ui.subs]))

(enable-console-print!)

(reg-event-fx :println (fn [_ [_ message]] (println message)))

(defn root-component
  []
  (let [data (subscribe [:read-from [:foo :bar]])]
    (dispatch
      [:do-fx
       {:async-flow
        {:first-dispatch
         [:do-fx {:fs {:command :read-dir
                       :args ["/"]
                       :on-success [:write-to [:foo :bar]]
                       :on-error   [:println]}}]
         :rules [{:when     :seen?
                  :event    [:write-to [:foo :bar]]
                  :dispatch [:println "done."]
                  :halt?    true}]}}])
    (fn []
      [:pre (join "\n" @data)])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
