// Compiled by ClojureScript 1.8.40 {}
goog.provide('day8.re_frame.async_flow_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('day8.re_frame.flow');
/**
 * Generate a unique flow id.
 */
day8.re_frame.async_flow_fx.unique_flow_id = (function day8$re_frame$async_flow_fx$unique_flow_id(){
var s = cljs.core.gensym.call(null);
return cljs.core.keyword.call(null,[cljs.core.str("flow-"),cljs.core.str(s)].join(''));
});
/**
 * Given a flow, dispatch an event to install the flow into the time machine.
 * 	State will be stored in the db-path of the flow, or in the path [:async-flow/state].
 */
day8.re_frame.async_flow_fx.fx_handler = (function day8$re_frame$async_flow_fx$fx_handler(p__27640){
var map__27643 = p__27640;
var map__27643__$1 = ((((!((map__27643 == null)))?((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var flow = map__27643__$1;
var db_path = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async-flow","state","async-flow/state",536299182)], null));
var id = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame.async_flow_fx.unique_flow_id.call(null));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async-flow","init","async-flow/init",-1431365179),db_path,cljs.core.assoc.call(null,flow,new cljs.core.Keyword(null,"id","id",-1388402092),id)], null));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),day8.re_frame.async_flow_fx.fx_handler);
/**
 * All time machine events have the db-path of the machine as their first non-id element.
 * 	Given a coeffects map, adds a key :time-machine to the coeffects with the machine state
 * 	stored at the event's db-path as the value.
 */
day8.re_frame.async_flow_fx.get_state = (function day8$re_frame$async_flow_fx$get_state(p__27645){
var map__27649 = p__27645;
var map__27649__$1 = ((((!((map__27649 == null)))?((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var coeffects = map__27649__$1;
var db = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"event","event",301435442));
var vec__27651 = event;
var path = cljs.core.nth.call(null,vec__27651,(0),null);
var _ = cljs.core.nthnext.call(null,vec__27651,(1));
return cljs.core.assoc.call(null,coeffects,new cljs.core.Keyword(null,"time-machine","time-machine",878234630),(function (){var temp__4655__auto__ = cljs.core.get_in.call(null,db,path);
if(cljs.core.truth_(temp__4655__auto__)){
var state = temp__4655__auto__;
return state;
} else {
return day8.re_frame.flow.fresh_state;
}
})());
});
/**
 * Given an effects map containing a :time-machine key and a db-path, stores the
 * 	value of the :time-machine key in the db under db-path
 */
day8.re_frame.async_flow_fx.set_state = (function day8$re_frame$async_flow_fx$set_state(p__27652,db_path){
var map__27655 = p__27652;
var map__27655__$1 = ((((!((map__27655 == null)))?((((map__27655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27655):map__27655);
var effects = map__27655__$1;
var time_machine = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword(null,"time-machine","time-machine",878234630));
return cljs.core.dissoc.call(null,cljs.core.update.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in,db_path,time_machine),new cljs.core.Keyword(null,"time-machine","time-machine",878234630));
});
day8.re_frame.async_flow_fx.flow_interceptor = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flow-interceptor","flow-interceptor",-1080905433),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame$async_flow_fx$get_state_ctx(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame.async_flow_fx.get_state);
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame$async_flow_fx$set_state_ctx(context){
var path = cljs.core.first.call(null,cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null)));
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame.async_flow_fx.set_state,path);
}));
day8.re_frame.async_flow_fx.intercept = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,day8.re_frame.async_flow_fx.flow_interceptor], null);
day8.re_frame.async_flow_fx.normalize_dispatches = (function day8$re_frame$async_flow_fx$normalize_dispatches(first_dispatch,first_dispatches,flow){
if(cljs.core.truth_(first_dispatch)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_dispatch], null);
} else {
return first_dispatches;
}
});
day8.re_frame.async_flow_fx.init = (function day8$re_frame$async_flow_fx$init(p__27657,p__27658){
var map__27665 = p__27657;
var map__27665__$1 = ((((!((map__27665 == null)))?((((map__27665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27665):map__27665);
var db = cljs.core.get.call(null,map__27665__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time_machine = cljs.core.get.call(null,map__27665__$1,new cljs.core.Keyword(null,"time-machine","time-machine",878234630));
var vec__27666 = p__27658;
var db_path = cljs.core.nth.call(null,vec__27666,(0),null);
var map__27667 = cljs.core.nth.call(null,vec__27666,(1),null);
var map__27667__$1 = ((((!((map__27667 == null)))?((((map__27667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27667):map__27667);
var flow = map__27667__$1;
var id = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var first_dispatch = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var first_dispatches = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"first-dispatches","first-dispatches",1387434487));
var vec__27670 = day8.re_frame.flow.install.call(null,time_machine,flow);
var time_machine_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27670,(0),null);
var deps = cljs.core.nth.call(null,vec__27670,(1),null);
var dispatches = day8.re_frame.async_flow_fx.normalize_dispatches.call(null,first_dispatch,first_dispatches,flow);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"time-machine","time-machine",878234630),time_machine_SINGLEQUOTE_,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatches,new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),deps,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async-flow","transition","async-flow/transition",2032347718),db_path], null)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("async-flow","init","async-flow/init",-1431365179),day8.re_frame.async_flow_fx.intercept,day8.re_frame.async_flow_fx.init);
day8.re_frame.async_flow_fx.qualify_halts = (function day8$re_frame$async_flow_fx$qualify_halts(db_path,dispatches){
return cljs.core.map.call(null,(function (p__27673){
var vec__27674 = p__27673;
var event_id = cljs.core.nth.call(null,vec__27674,(0),null);
var flow_id = cljs.core.nth.call(null,vec__27674,(1),null);
var dispatch = vec__27674;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("async-flow","halt","async-flow/halt",-1136687399),event_id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async-flow","halt","async-flow/halt",-1136687399),db_path,flow_id], null);
} else {
return dispatch;
}
}),dispatches);
});
/**
 * Transition the machine state at db-path and dispatch all events returned by
 * 	the transition.
 */
day8.re_frame.async_flow_fx.transition = (function day8$re_frame$async_flow_fx$transition(p__27675,p__27676){
var map__27681 = p__27675;
var map__27681__$1 = ((((!((map__27681 == null)))?((((map__27681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27681):map__27681);
var db = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time_machine = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"time-machine","time-machine",878234630));
var vec__27682 = p__27676;
var db_path = cljs.core.nth.call(null,vec__27682,(0),null);
var event_v = cljs.core.nth.call(null,vec__27682,(1),null);
var vec__27684 = day8.re_frame.flow.transition.call(null,time_machine,event_v);
var time_machine_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27684,(0),null);
var dispatches = cljs.core.nth.call(null,vec__27684,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),day8.re_frame.async_flow_fx.qualify_halts.call(null,db_path,dispatches),new cljs.core.Keyword(null,"time-machine","time-machine",878234630),time_machine_SINGLEQUOTE_], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("async-flow","transition","async-flow/transition",2032347718),day8.re_frame.async_flow_fx.intercept,day8.re_frame.async_flow_fx.transition);
/**
 * Uninstall the flow-id flow from the machine state at db-path, and unregister
 * 	any forwarded events associated with that flow.
 */
day8.re_frame.async_flow_fx.halt = (function day8$re_frame$async_flow_fx$halt(p__27685,p__27686){
var map__27690 = p__27685;
var map__27690__$1 = ((((!((map__27690 == null)))?((((map__27690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27690):map__27690);
var db = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"db","db",993250759));
var time_machine = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"time-machine","time-machine",878234630));
var vec__27691 = p__27686;
var db_path = cljs.core.nth.call(null,vec__27691,(0),null);
var flow_id = cljs.core.nth.call(null,vec__27691,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"time-machine","time-machine",878234630),day8.re_frame.flow.uninstall.call(null,time_machine,flow_id),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),flow_id], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("async-flow","halt","async-flow/halt",-1136687399),day8.re_frame.async_flow_fx.intercept,day8.re_frame.async_flow_fx.halt);

//# sourceMappingURL=async_flow_fx.js.map?rel=1478297185958