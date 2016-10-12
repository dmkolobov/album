(ns ui.fx.fs
  (:require [re-frame.core :refer [dispatch]]
            [ui.async-util :refer [reg-fx-service]]))

(defonce fs (js/require "fs"))
(defonce ncp (js/require "ncp"))

(reg-fx-service
  :fs/stat
  (fn [{:keys [path on-success on-error]}]
    (.stat fs
           path
           (fn [err val]
             (if err
               (dispatch (conj on-error (js->clj err)))
               (dispatch (conj on-success
                               path
                               {:filesize      (.-size val)
                                :last-modified (.-mtime val)})))))))

(reg-fx-service
  :fs/copy
  (fn [{:keys [src-path dest-path on-success on-error]}]
    (ncp src-path
         dest-path
         (fn [err]
           (if err
             (dispatch on-error)
             (dispatch on-success))))))