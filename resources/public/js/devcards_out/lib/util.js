// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.util');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
lib.util.async_action = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"async-action","async-action",-1977190062),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),(function (p__25289){
var map__25290 = p__25289;
var map__25290__$1 = ((((!((map__25290 == null)))?((((map__25290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25290):map__25290);
var cofx = map__25290__$1;
var event = cljs.core.get.call(null,map__25290__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
lib.util.reg_fx_service = (function lib$util$reg_fx_service(fx_id,fx_handler){
re_frame.core.reg_fx.call(null,fx_id,fx_handler);

return re_frame.core.reg_event_fx.call(null,fx_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.async_action,re_frame.core.trim_v], null),(function (p__25297,p__25298){
var map__25299 = p__25297;
var map__25299__$1 = ((((!((map__25299 == null)))?((((map__25299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25299):map__25299);
var on_success = cljs.core.get.call(null,map__25299__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25299__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__25300 = p__25298;
var args = cljs.core.nth.call(null,vec__25300,(0),null);
return cljs.core.PersistentArrayMap.fromArray([fx_id,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error)], true, false);
}));
});
lib.util.success_ev = (function lib$util$success_ev(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),e], null);
});
lib.util.error_ev = (function lib$util$error_ev(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),e], null);
});
lib.util.db_flag = (function lib$util$db_flag(key,on,off){
re_frame.core.reg_event_db.call(null,on,(function (p1__25302_SHARP_){
return cljs.core.assoc.call(null,p1__25302_SHARP_,key,true);
}));

re_frame.core.reg_event_db.call(null,off,(function (p1__25303_SHARP_){
return cljs.core.dissoc.call(null,p1__25303_SHARP_,key);
}));

return re_frame.core.reg_sub.call(null,cljs.core.keyword.call(null,cljs.core.name.call(null,key)),(function (p1__25304_SHARP_){
return cljs.core.get.call(null,p1__25304_SHARP_,key);
}));
});

//# sourceMappingURL=util.js.map?rel=1478388956980