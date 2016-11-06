(ns ui.views.common.data
  (:require [reagent.core :refer [atom]]
            [re-com.core :as re-com :refer [box h-box button v-box label title md-icon-button input-text]]
            [re-com.util :refer [deref-or-value]]
            [cljs-time.extend]
            [cljs-time.core :as time]
            [cljs-time.format :as timef]))

(def date-only (timef/formatter "MMM dd, yyyy"))
(def day-time  (timef/formatter "EEE hh:mm a"))

(def app-gap 16)
(defn px [x] (str x "px"))

(defn attribute
  [& {:keys [label children]}]
  [v-box :class    "date-attribute"
         :gap      "0.7em"
         :children [[re-com/label :class "attr-label"
                                  :label label]
                    [h-box :gap (px (/ app-gap 4)) :align :center :children children]]])

(defn pad-string
  [n s]
  (if (>= (count s) n)
    s
    (str (clojure.string/join (repeat (- n (count s)) "0"))
         s)))

(defn set-hour!
  [model hour]
  (swap! model assoc :hour hour))

(defn toggle-ampm!
  [model]
  (swap! model
         update
         :hour
         #(mod (+ 12 %) 24)))

(defn hour-input
  [model]
  (let [hour (get @model :hour)
        rem  (mod hour 12)]
    [input-text :model     (pad-string 2 (str (if (= rem 0) 12 rem)))
                :width     "1.3em"
                :style     {:padding "0"}
                :on-change #(set-hour! model (js/parseInt %))]))

(defn ampm-input
  [model]
  (let [hour (get @model :hour)]
    [label :label (if (< (divide hour 12) 1) "AM" "PM")
           :attr  {:on-click (partial toggle-ampm! model)}]))

(defn date-form
  [model commit]
  (let [set-attr (fn [attr val] (swap! model assoc attr (js/parseInt val)))
        input    (fn [attr width & {:keys [pad]}]
                   [input-text :model     (pad-string pad (str (get @model attr)))
                               :width     width
                               :style     {:padding "0"}
                               :on-change (partial set-attr attr)])]
    [h-box :gap      (px app-gap)
           :align    :center
           :children [[attribute :label    "Year"
                                 :children [[input :year "2.5em"]]]

                      [attribute :label    "Month"
                                 :children [[input :month "1.35em" :pad 2]]]

                      [attribute :label    "Day"
                                 :children [[input :day "1.35em" :pad 2]]]

                      [attribute :label    "Time"
                                 :children [[hour-input model (partial set-attr :hour)]
                                            [label :label ":" :class "time-sep"]
                                            [input :minute "1.35em" :pad 2]
                                            [ampm-input model]]]]]))

(defn date-display
  [model]
  (let [{:keys [year month day hour minute]} @model
        date (time/date-time year month day hour minute)]
    [v-box :size     "auto"
           :gap      (px (/ app-gap 4))
           :children [[title :label         (timef/unparse date-only date)
                             :margin-top    "0px"
                             :margin-bottom "0px"
                             :level         :level3]

                      [label :class "date-label"
                             :label (timef/unparse day-time date)]]]))

(defn date-time->model
  [date-time]
  {:year   (.getFullYear date-time)
   :month  (inc (.getMonth date-time))
   :day    (.getDate date-time)
   :hour   (.getHours date-time)
   :minute (.getMinutes date-time)})

(def app-padding (str (px app-gap)" "(px (* app-gap 1.5))))

(defn form
  [& {:keys [icon class on-edit on-commit on-discard title content editing?]}]
  [v-box :class    (str "form " class (when (deref-or-value editing?) " active"))
         :children [(when @editing?
                      [box :class "form-overlay"
                           :attr  {:on-click on-discard}
                           :child [:div ""]])
                    [h-box :align    :center
                           :class    "form-header"
                           :padding  app-padding
                           :gap      (px (* app-gap 1.5))
                           :attr     {:on-click on-edit}
                           :children [[box :child [:i.icon.zmdi {:class icon}]]
                                      title]]
                     (when (deref-or-value editing?)
                       [h-box :align    :center
                              :class    "form-content"
                              :padding  app-padding
                              :gap      (px (* app-gap 1.5))
                              :children [[box :child [:i.icon.zmdi {:class icon :style {:opacity "0"}}]]
                                               [v-box :gap (px app-gap)
                                                      :children [content
                                                                 [h-box :justify  :end
                                                                        :gap      (px (/ app-gap 2))
                                                                        :children [[button :label    "Cancel"
                                                                                           :on-click on-discard]
                                                                                   [button :label    "Save"
                                                                                           :on-click on-commit]]]]]]])]])

(defn date-field
  [& {:keys [model on-change]}]
  (let [edit?         (atom false)
        local-model   (atom (date-time->model @model))
        commit-edit!  #(do
                        (swap! edit? not)
                        (on-change @local-model))
        discard-edit! #(do
                        (swap! edit? not)
                        (reset! local-model (date-time->model @model)))
        toggle-edit!  #(do
                        (println "edit toggle")
                        (swap! edit? not))]
    (fn [& {:keys [class]}]
      [form :icon       "zmdi-calendar"
            :class      class
            :editing?   edit?
            :on-edit    toggle-edit!
            :on-commit  commit-edit!
            :on-discard discard-edit!
            :title      [date-display local-model]
            :content    [date-form local-model]])))