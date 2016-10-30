(ns ui.controls.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [reagent.core :as reagent]
            [ui.views.common.menu :refer [menu]]
            [ui.views.common.toolbar :refer [base-toolbar]]
            [re-com.core :as re-com :refer [md-icon-button hyperlink title v-box box h-box]]))
