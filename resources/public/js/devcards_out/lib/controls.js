// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.controls');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('lib.util');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.controls","set-view","lib.controls/set-view",719808114),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__25584){
var vec__25585 = p__25584;
var view_id = cljs.core.nth.call(null,vec__25585,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("lib.controls","stack","lib.controls/stack",2047373787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_id], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.controls","push-view","lib.controls/push-view",387637803),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__25586){
var vec__25587 = p__25586;
var view_id = cljs.core.nth.call(null,vec__25587,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("lib.controls","stack","lib.controls/stack",2047373787),((function (vec__25587,view_id){
return (function (s){
if(cljs.core.truth_(s)){
return cljs.core.conj.call(null,s,view_id);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941),view_id], null);
}
});})(vec__25587,view_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.controls","pop-view","lib.controls/pop-view",-229970946),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword("lib.controls","view-stack","lib.controls/view-stack",-1847059254),cljs.core.pop);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.controls","current-view","lib.controls/current-view",-426918723),(function (db){
return cljs.core.peek.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword("lib.controls","stack","lib.controls/stack",2047373787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941)], null)));
}));
lib.util.db_flag.call(null,new cljs.core.Keyword("lib.controls","main-menu?","lib.controls/main-menu?",789026025),new cljs.core.Keyword("lib.controls","open-main-menu","lib.controls/open-main-menu",1267876007),new cljs.core.Keyword("lib.controls","close-main-menu","lib.controls/close-main-menu",2005459933));
lib.util.db_flag.call(null,new cljs.core.Keyword("lib.controls","photo-info?","lib.controls/photo-info?",-1811696723),new cljs.core.Keyword("lib.controls","open-photo-info","lib.controls/open-photo-info",-1166642562),new cljs.core.Keyword("lib.controls","close-photo-info","lib.controls/close-photo-info",1435652865));

//# sourceMappingURL=controls.js.map?rel=1478388958313