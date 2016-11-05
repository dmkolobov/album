(ns ui.views.common.toolbar
  (:require [re-com.core :as re-com :refer [h-box box md-icon-button]]))

(defn toolbar
  [& {:keys [class
             title

             nav
             nav-tooltip
             on-nav

             actions
             on-action
             action-id-fn
             action-icon-fn
             action-label-fn]
      :or   {action-id-fn    :id
             action-icon-fn  :icon
             action-label-fn :label}}]
  [h-box :class    (str "toolbar " class)
         :size     "none"
         :gap      "1em"
         :padding  "1em 1.5em"
         :align    :center
         :children [[md-icon-button :md-icon-name     nav
                                    :size             :regular
                                    :tooltip          nav-tooltip
                                    :tooltip-position :below-right
                                    :on-click     on-nav]
                    [box :class "toolbar-title"
                         :size  "auto"
                         :child [re-com/title :label         title
                                              :margin-top    "0px"
                                              :margin-bottom "0px"
                                              :level         :level2]]
                    [h-box :gap      "1.5em"
                           :children
                     (doall
                      (map (fn [action]
                             ^{:key (action-id-fn action)}
                             [md-icon-button :md-icon-name     (action-icon-fn action)
                                             :size             :regular
                                             :tooltip          (action-label-fn action)
                                             :tooltip-position :below-center
                                             :on-click         #(on-action action)])
                           actions))]]])
;;