// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.controls.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("controls","set-view","controls/set-view",-1280365785),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__23011){
var vec__23012 = p__23011;
var view_id = cljs.core.nth.call(null,vec__23012,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("controls","view-stack","controls/view-stack",381587967),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_id], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("controls","push-view","controls/push-view",-1645045628),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__23013){
var vec__23014 = p__23013;
var view_id = cljs.core.nth.call(null,vec__23014,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("controls","view-stack","controls/view-stack",381587967),((function (vec__23014,view_id){
return (function (s){
if(cljs.core.truth_(s)){
return cljs.core.conj.call(null,s,view_id);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941),view_id], null);
}
});})(vec__23014,view_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("controls","pop-view","controls/pop-view",1802502995),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("controls","view-stack","controls/view-stack",381587967),cljs.core.pop);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("controls","open-left-sidebar","controls/open-left-sidebar",-2124445491),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("controls","sidebar-left?","controls/sidebar-left?",571890082),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("controls","close-left-sidebar","controls/close-left-sidebar",-445515479),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword("controls","sidebar-left?","controls/sidebar-left?",571890082));
}));

//# sourceMappingURL=events.js.map?rel=1478388950834