(ns ui.views.common.data
  (:require [ui.views.common.animations :as animations]
            [ui.views.common.form :as form]

            [reagent.core :refer [atom]]
            [re-com.core :as re-com :refer [box h-box button v-box label title md-icon-button input-text]]
            [re-com.util :refer [deref-or-value]]
            [cljs-time.extend]
            [cljs-time.core :as time]
            [cljs-time.format :as timef]))

(def app-gap 16)
(defn px [x] (str x "px"))

(def date-only (timef/formatter "MMM dd, yyyy"))
(def day-time  (timef/formatter "EEE hh:mm a"))

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
  [model]
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

(defn date-field
  [& {:keys [class model on-change]}]
  [form/attr-form :icon       "zmdi-calendar"
                  :class      class
                  :model      model
                  :on-commit  on-change
                  :content-fn date-display
                  :form-fn    date-form])