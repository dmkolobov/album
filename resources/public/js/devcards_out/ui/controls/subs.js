// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.controls.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("controls","current-view","controls/current-view",1600600084),(function (db){
return cljs.core.peek.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword("controls","view-stack","controls/view-stack",381587967),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941)], null)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("controls","sidebar-left?","controls/sidebar-left?",571890082),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("controls","sidebar-left?","controls/sidebar-left?",571890082));
}));

//# sourceMappingURL=subs.js.map?rel=1478388950643