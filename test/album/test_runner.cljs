(ns album.test-runner
  (:require
    [cljs.test :as cljs-test :include-macros true]
    ;; Test Namespaces -------------------------------
		[album.ui.data.photos-test])
  (:refer-clojure :exclude (set-print-fn!)))

(enable-console-print!)

;; ---- BROWSER based tests ----------------------------------------------------
(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))

(defn ^:export run-html-tests []
  (cljs-test/run-tests
		'album.ui.data.photos-test))
