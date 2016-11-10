// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.slideshow');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('datascript.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.slideshow","open","lib.slideshow/open",425540443),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__25519,p__25520){
var map__25521 = p__25519;
var map__25521__$1 = ((((!((map__25521 == null)))?((((map__25521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25521):map__25521);
var cofx = map__25521__$1;
var db = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25522 = p__25520;
var idx = cljs.core.nth.call(null,vec__25522,(0),null);
var items = cljs.core.nth.call(null,vec__25522,(1),null);
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092),state),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.controls","push-view","lib.controls/push-view",387637803),new cljs.core.Keyword(null,"carousel-view","carousel-view",1786124935)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.slideshow","close","lib.slideshow/close",-371632877),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__25524){
var map__25525 = p__25524;
var map__25525__$1 = ((((!((map__25525 == null)))?((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var cofx = map__25525__$1;
var db = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.controls","pop-view","lib.controls/pop-view",-229970946)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.slideshow","advance","lib.slideshow/advance",-450647730),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.slideshow","rewind","lib.slideshow/rewind",1488259050),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core.dec);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("lib.slideshow","state","lib.slideshow/state",-167306092));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.slideshow","cursor","lib.slideshow/cursor",-1194984233),(function (){
return lib.slideshow.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.slideshow","stage","lib.slideshow/stage",-511074631)], null));
}),(function (p__25527,_){
var map__25528 = p__25527;
var map__25528__$1 = ((((!((map__25528 == null)))?((((map__25528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25528):map__25528);
var items = cljs.core.get.call(null,map__25528__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var idx = cljs.core.get.call(null,map__25528__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var id = cljs.core.nth.call(null,items,idx);
var first_QMARK_ = cljs.core._EQ_.call(null,(0),idx);
var last_QMARK_ = cljs.core._EQ_.call(null,(cljs.core.count.call(null,items) - (1)),idx);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,first_QMARK_,last_QMARK_], null);
}));

//# sourceMappingURL=slideshow.js.map?rel=1478388958009