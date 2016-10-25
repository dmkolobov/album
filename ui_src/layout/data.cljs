(ns layout.data
  (:require [re-frame.core :refer [reg-sub]]))

(defprotocol IWillLayout
  (aspect [_] ""))

(defrecord PaintRect [id x y width height])

(defrecord Layout [rect paint-list carousel]
  IWillLayout

  (aspect [_]
    (/ (:width rect) (:height rect))))
