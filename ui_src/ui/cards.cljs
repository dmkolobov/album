(ns ui.cards
  (:require
    [ui.views.common.toolbar :as toolbar]
    [ui.views.common.structure :as struct]
    [ui.views.common.images :as images]

    [reagent.core :as reagent :refer [atom]]
    [re-com.core :as re-com :refer [v-box h-box box]])
  (:require-macros
    [devcards.core :refer [defcard]]))

(defonce actions
  (atom
    [{:id :book     :icon "zmdi-book"     :label "book"}
     {:id :cake     :icon "zmdi-cake"     :label "cake"}
     {:id :cocktail :icon "zmdi-cocktail" :label "cocktail"}]))

(defonce model
  (atom :book))

(defonce menu?
  (atom false))

(defonce sidebar?
  (atom false))

(defn toggle-menu! [] (swap! menu? not))
(defn toggle-sidebar! [] (swap! sidebar? not))
(defn navigate! [{:keys [id]}] (reset! model id))

(def app-bar
  [toolbar/toolbar :nav-icon    "zmdi-menu"
                   :nav-tooltip "Main menu"
                   :title       "Hello, World"
                   :actions     actions
                   :on-nav      toggle-menu!
                   :on-action   toggle-sidebar!])

(def app-nav-bar
  [toolbar/navbar :actions     actions
                  :model       model
                  :on-change   navigate!])

(def app-nav-menu
  [re-com/box :child [toolbar/navmenu :actions     actions
                                      :model       model
                                      :on-change   navigate!]])

(def app-content
  [re-com/h-box :children [app-nav-bar
                           [box :child [:div "hello, world"]]]])

(defcard bar (reagent/as-element app-bar))
(defcard nav-bar (reagent/as-element [box :child app-nav-bar]))
(defcard nav-menu (reagent/as-element [box :child app-nav-menu]))

(defn main-structure
  []
  [struct/main :app-bar   app-bar
               :side-nav  (when @menu? app-nav-menu)
               :content   app-content
               :right-nav (when @sidebar?
                            [box :child "foobar"])
               :attr      (when @menu?
                            {:on-click toggle-menu!})])

(defcard layout (reagent/as-element [main-structure]))

(def test-images
  [["img/fix/fire_pit.jpg"    (/ 1024 683)]
   ["img/fix/good_deal.jpg"   (/ 826 826)]
   ["img/fix/see_saw.jpg"     (/ 1024 1536)]
   ["img/fix/jackhammer.jpg"  (/ 200 200)]
   ["img/fix/death_truck.jpg" (/ 200 150)]
   ["img/fix/fire_stick.jpg"  (/ 133 200)]])

(defn framed-image
  [entry frame-size]
  [box :class  "photo-frame shadow-1"
       :width  (str frame-size "px")
       :height (str frame-size "px")
       :style  {:position "relative"}
       :child  (into [images/image] entry)])

(def frames [100 250 500])

(defcard responsive-images
         (reagent/as-element
           [v-box :gap      "16px"
                  :children (map (fn [entry]
                                   [h-box :gap      "16px"
                                          :align    :center
                                          :children (map #(conj [framed-image entry] %) frames)])
                                 test-images)]))