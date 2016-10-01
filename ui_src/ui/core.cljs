(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [reg-event-fx reg-fx trim-v reg-event-db reg-sub dispatch subscribe]]
            [day8.re-frame.async-flow-fx]
            [re-com.core]

            [album-layout.core :refer [perfect-layout]]

            [cljs.pprint :refer [pprint]]

            [ui.fx]
            [ui.async :refer [async-action] :as async]

            [ui.images.events]
            [ui.images.subs]))

(enable-console-print!)

(defonce file-path (js/require "path"))

(defonce electron (js/require "electron"))

(reg-fx
  :file-dialog
  (fn [{:keys [on-select]}]
    (.showOpenDialog electron.remote.dialog
                     (clj->js
                       {"properties" ["openFile" "multiSelections"]
                        "filters"    [{"name"       "JPEGEEZ"
                                       "extensions" ["jpg"]}]})
                     #(dispatch (conj on-select (js->clj %))))))

(reg-event-fx
  :println
  (fn [{:keys [db]} [_ message]]
    (println message)
    {:db db}))

(defn import-path
  [path]
  (.join file-path js/process.env.HOME (.basename file-path path)))

(reg-event-fx
  :import-images
  [trim-v]
  (fn [_ [images]]
    (async/all-events
      {:events (mapv #(vector :image/import % (import-path %))
                               images)
       :on-success [:println "success import"]
       :on-error   [:println "error import"]})))

(reg-event-fx
  :start-import
  (fn []
    {:file-dialog
     {:on-select [:import-images]}}))

(reg-event-fx
  :hello
  [async-action trim-v]
  (fn [{:keys [on-success]} v] {:dispatch on-success}))

(reg-event-fx
  :goodbye
  [async-action trim-v]
  (fn [{:keys [on-success]} v] {:dispatch on-success}))
;;

(reg-event-fx
  :foo
  [async-action trim-v]
  (fn []
    (async/all-events {:events [[:hello "foo"]
                                [:hello "bar"]]
                       :on-success [:println "bar"]
                       :on-error   [:println "wrong"]})))

(defn root-component
  []
  (let [info (subscribe [:image-info])]
    (dispatch [:foo])
    (fn []
      [:div
       [:a {:href "#" :on-click #(dispatch [:start-import])} "Import"]
       [:pre (with-out-str (pprint @info))]])))

(reagent/render
  [root-component]
  (js/document.getElementById "app-container"))
