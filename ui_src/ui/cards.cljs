(ns ui.cards
  (:require
    [ui.views.common.toolbar :as toolbar]
    [ui.views.common.structure :as struct]
    [ui.views.common.images :as images]

    [reagent.core :as reagent :refer [atom]]
    [re-com.core :as re-com :refer [v-box h-box box]])
  (:require-macros
    [devcards.core :refer [defcard]]))

;; -------------- photos ---------------------

(defonce test-images
  (atom
    [["img/fix/fire_pit.jpg"    (/ 1024 683)]
     ["img/fix/good_deal.jpg"   (/ 826 826)]
     ["img/fix/see_saw.jpg"     (/ 1024 1536)]]))

(def test-images-small
   [["img/fix/jackhammer.jpg"  (/ 200 200)]
    ["img/fix/death_truck.jpg" (/ 200 150)]
    ["img/fix/fire_stick.jpg"  (/ 133 200)]])

(defn framed-image
  [path aspect frame-size]
  [box :class  "photo-frame shadow-1"
       :width  (str frame-size "px")
       :height (str frame-size "px")
       :style  {:position "relative"}
       :child  [images/image path aspect]])

(def frames [100 250 500])

(defn framed-gallery
  [images]
  [v-box :gap      "16px"
         :children (map (fn [[path aspect]]
                          [h-box :gap      "16px"
                                 :align    :center
                                 :children (map #(conj [framed-image path aspect] %) frames)])
                        images)])

(defn app-gallery
  []
  [v-box :children [[re-com/title :label "Oversized" :level :level2]
                    [framed-gallery @test-images]
                    [re-com/title :label "Undersized" :level :level2]
                    [framed-gallery test-images-small]]])

(defcard responsive-images (reagent/as-element [app-gallery]))

(defn test-image
  [size]
  [box :size   "auto"
       :height (str size "px")
       :style  {:position "relative"}
       :child  [images/image "img/fix/fire_pit.jpg" (/ 1024 683)]])

;; ---------------- interface -------------------

(defonce actions
  (atom
    [{:id :slideshow :icon "zmdi-slideshow"     :label "book"}
     {:id :cake     :icon "zmdi-cake"     :label "cake"}
     {:id :cocktail :icon "zmdi-cocktail" :label "cocktail"}]))

(defonce page-model (atom :book))
(defonce menu?      (atom false))
(defonce slideshow? (atom false))
(defonce info?      (atom false))

(defn toggle-menu! [] (swap! menu? not))
(defn toggle-slideshow! [] (swap! slideshow? not))
(defn toggle-info! [] (swap! info? not))
(defn navigate! [{:keys [id]}] (reset! page-model id))

(defn app-bar
  []
  [toolbar/toolbar :nav-icon    "zmdi-menu"
                   :nav-tooltip "Main menu"
                   :title       "Hello, World"
                   :actions     [{:id    :slideshow
                                  :label "slideshow"
                                  :icon  "zmdi-slideshow"}]
                   :on-nav      toggle-menu!
                   :on-action   #(when (= (:id %) :slideshow) (toggle-slideshow!))])

(defn app-nav-bar
  []
  [toolbar/navbar :actions     actions
                  :model       page-model
                  :on-change   navigate!])

(defn app-nav-menu
  []
  [re-com/box :child [toolbar/navmenu :actions     actions
                                      :model       page-model
                                      :on-change   navigate!]])

(defn app-content
  []
  [re-com/h-box :children [(when (not @slideshow?) [app-nav-bar])
                           [box :size "auto"
                                :child [test-image (if @slideshow? 600 200)]]]])

(defcard bar      (reagent/as-element [app-bar]))
(defcard nav-bar  (reagent/as-element [box :child [app-nav-bar]]))
(defcard nav-menu (reagent/as-element [box :child [app-nav-menu]]))

(defn slideshow-bar
  []
  [toolbar/toolbar :class       "translucent"
                   :nav-icon    "zmdi-close"
                   :nav-tooltip "Photos"
                   :actions     [{:id    :info
                                  :label "Info"
                                  :icon  "zmdi-info"}]
                   :on-nav      toggle-slideshow!
                   :on-action   #(when (= (:id %) :info) (toggle-info!))])

(defn main-structure
  []
  [struct/main :app-bar   (if @slideshow? [slideshow-bar] [app-bar])
               :side-nav  (when @menu? [app-nav-menu])
               :content   [app-content]
               :right-nav (when (and @slideshow? @info?)
                            [box :child "foobar"])
               :attr      (when @menu?
                            {:on-click toggle-menu!})])

(defcard layout (reagent/as-element [main-structure]))
