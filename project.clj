(defproject hello-electron "0.1.0-SNAPSHOT"
  :source-paths ["src"]
  :description "A hello world application for electron"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]
                 [figwheel "0.5.2"]
                 [reagent "0.6.0-rc" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "15.2.1-0"]
                 [re-frame "0.8.1"]
                 [re-com "0.9.0"]
                 [album-layout "0.1.3"]
                 [ring/ring-core "1.4.0"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [day8.re-frame/async-flow-fx "0.1.2-DEV"]
                 [datascript "0.15.4"]
                 [posh "0.5.4"]]
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.2"]]

  :clean-targets ^{:protect false} ["resources/main.js"
                                    "resources/public/js/ui-core.js"
                                    "resources/public/js/ui-core.js.map"
                                    "resources/public/js/ui-out"]
  :cljsbuild
  {:builds
   [{:source-paths ["test" "ui_src"]
     :id           "ui-test"
     :compiler     {:optimizations  :none
                    :pretty-print   true
                    :cache-analysis true
                    :output-to      "run/compiled/browser/test.js"
                    :source-map     true
                    :output-dir     "run/compiled/browser/test"}}

    {:source-paths ["electron_src"]
     :id "electron-dev"
     :compiler {:output-to "resources/main.js"
                :optimizations :simple
                :pretty-print true
                :cache-analysis true}}
    {:source-paths ["ui_src" "dev_src"]
     :id "frontend-dev"
     :compiler {:output-to "resources/public/js/ui-core.js"
                :output-dir "resources/public/js/ui-out"
                :source-map true
                :asset-path "js/ui-out"
                :optimizations :none
                :cache-analysis true
                :main "dev.core"}}
    {:source-paths ["electron_src"]
     :id "electron-release"
     :compiler {:output-to "resources/main.js"
                :optimizations :simple
                :pretty-print true
                :cache-analysis true}}
    {:source-paths ["ui_src"]
     :id "frontend-release"
     :compiler {:output-to "resources/public/js/ui-core.js"
                :output-dir "resources/public/js/ui-release-out"
                :source-map "resources/public/js/ui-core.js.map"
                :optimizations :simple
                :cache-analysis true
                :main "ui.core"}}]}
  :figwheel {:http-server-root "public"
             :css-dirs ["resources/public/css"]
             :ring-handler tools.figwheel-middleware/app
             :server-port 3449})
