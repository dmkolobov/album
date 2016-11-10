// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.async_util');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
ui.async_util.async_action = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"async-action","async-action",-1977190062),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),(function (p__22831){
var map__22832 = p__22831;
var map__22832__$1 = ((((!((map__22832 == null)))?((((map__22832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22832):map__22832);
var cofx = map__22832__$1;
var event = cljs.core.get.call(null,map__22832__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),event], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),event], null));
}));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("async","success","async/success",1949169942),(function (db,v){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("async","error","async/error",-1154409548),(function (db,v){
throw Error;

return db;
}));
/**
 * Register an fx handler which performs some async action, and should dispatch
 *   a success or error event depending on the result of the action, specified by
 *   the :on-success and :on-error entries in its argument map. Creates an event handler
 *   which when given an [fx-id [fx-map-args]] event-v, will merge the result events
 *   {:on-success [:async/success event-v] :on-error [:async/error event-v]}
 *   into fx-map-args before invoking the fx-id fx.
 */
ui.async_util.reg_fx_service = (function ui$async_util$reg_fx_service(fx_id,fx_handler){
re_frame.core.reg_fx.call(null,fx_id,fx_handler);

return re_frame.core.reg_event_fx.call(null,fx_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.async_util.async_action,re_frame.core.trim_v], null),(function (p__22839,p__22840){
var map__22841 = p__22839;
var map__22841__$1 = ((((!((map__22841 == null)))?((((map__22841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22841):map__22841);
var on_success = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__22842 = p__22840;
var args = cljs.core.nth.call(null,vec__22842,(0),null);
return cljs.core.PersistentArrayMap.fromArray([fx_id,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error)], true, false);
}));
});

//# sourceMappingURL=async_util.js.map?rel=1478388950284