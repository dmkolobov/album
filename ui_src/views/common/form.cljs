(ns ui.views.common.form
  (:require [ui.views.common.animations :as animations]
            [reagent.core :refer [atom]]
            [re-com.core :refer [v-box h-box box button]]
            [re-com.util :refer [deref-or-value]]
            [reagent.core :as reagent]))

(def app-gap 16)
(defn px [x] (str x "px"))
(def app-padding (str (px app-gap)" "(px (* app-gap 1.5))))

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
  [on-discard opacity]
  [box :class "form-overlay"
       :style {:background (str "rgba(0,0,0,"opacity"")}
       :attr  {:on-click on-discard}
       :child [:div ""]])

(def transition
  (reagent/adapt-react-class js/React.addons.TransitionGroup))

(def form-transition
  (reagent/create-class
    {:component-will-leave
     (fn [cb]
       (this-as owner
         (aset (reagent/dom-node owner)
               "style"
               "position"
               "absolute")
         (js/setTimeout cb 460)))
     :reagent-render
     (fn [c] c)}))

(defn attr-form
  [&  {:keys [model on-commit content-fn form-fn]}]
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
    (fn [& {:keys [icon class overlay-opacity]}]
      [v-box :class    (str "form " class (when @edit? " active"))
             :size     "none"
             :children [(when (and @edit? overlay-opacity)
                          [form-overlay discard! overlay-opacity])
                        [form-header icon [content-fn local-model] edit!]
                        [transition {:transition-name "form-content"}
                        (when @edit?
                           ^{:key "content"}
                           [form-transition
                            [form-content icon [form-fn local-model] commit! discard!]])]]])))
