(ns ui.views.common.menu)

(defn menu
  [& {:keys [model
             items
             on-change
             label-fn
             id-fn
             class]
      :or {id-fn    :id
           label-fn :label}}]
  [:ul.list-group
   {:class class}
   (doall
     (for [item items]
       ^{:key (id-fn item)}
       [:li.list-group-item
        {:class    (when (= (id-fn item) @model) "active")
         :on-click #(on-change (id-fn item))}
        (label-fn item)]))])