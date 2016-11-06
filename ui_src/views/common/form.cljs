(ns ui.views.common.form
  (:require [ui.views.common.animations :as animations]
            [reagent.core :refer [atom]]
            [re-com.core :refer [v-box h-box box button]]
            [re-com.util :refer [deref-or-value]]))

(def app-gap 16)
(defn px [x] (str x "px"))
(def app-padding (str (px app-gap)" "(px (* app-gap 1.5))))

(def form-transition
  (animations/grow-transition (fn [v] [box :class "form-content" :child v])))

(defn form-header
  [icon title on-edit]
  [h-box :align    :center
         :class    "form-header"
         :padding  app-padding
         :gap      (px (* app-gap 1.5))
         :attr     {:on-click on-edit}
         :children [[box :child [:i.icon.zmdi {:class icon}]]
                    title]])

(defn form-content
  [icon content on-commit on-discard]
  [h-box :align    :center
         :class    "form-content-inner"
         :padding  app-padding
         :gap      (px (* app-gap 1.5))
         :children [[box :child [:i.icon.zmdi {:class icon :style {:opacity "0"}}]]
                    [v-box :gap      (px app-gap)
                           :children [content
                                      [h-box :justify  :end
                                             :gap      (px (/ app-gap 2))
                                             :children [[button :label    "Cancel"
                                                                :on-click on-discard]
                                                        [button :label    "Save"
                                                                :on-click on-commit]]]]]]])

(defn form-overlay
  [on-discard]
  [box :class "form-overlay"
       :attr  {:on-click on-discard}
       :child [:div ""]])

(defn attr-form
  [&  {:keys [model on-commit title-fn form-fn]}]
  (let [local-model (atom @model)
        edit?    (atom false)
        commit!  (fn []
                   (on-commit @local-model)
                   (reset! edit? false))
        discard! (fn []
                   (reset! local-model @model)
                   (reset! edit? false))
        edit!    (fn []
                   (reset! edit? true))
        watch-id (gensym)]
    (add-watch model watch-id (fn [_ _ _ v] (reset! local-model v)))
    (fn [& {:keys [icon class]}]
      [v-box :class    (str "form " class (when @edit? " active"))
             :size     "none"
             :children [(when @edit? [form-overlay discard!])
                        [form-header icon [title-fn local-model] edit!]
                        [animations/transition :name    "form-content"
                                               :class   form-transition
                                               :content (when @edit?
                                                          [form-content icon [form-fn local-model] commit! discard!])]]])))

