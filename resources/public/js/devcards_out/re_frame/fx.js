// Compiled by ClojureScript 1.8.40 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__22150 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22151 = null;
var count__22152 = (0);
var i__22153 = (0);
while(true){
if((i__22153 < count__22152)){
var vec__22154 = cljs.core._nth.call(null,chunk__22151,i__22153);
var effect_k = cljs.core.nth.call(null,vec__22154,(0),null);
var value = cljs.core.nth.call(null,vec__22154,(1),null);
var temp__4655__auto___22156 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___22156)){
var effect_fn_22157 = temp__4655__auto___22156;
effect_fn_22157.call(null,value);
} else {
}

var G__22158 = seq__22150;
var G__22159 = chunk__22151;
var G__22160 = count__22152;
var G__22161 = (i__22153 + (1));
seq__22150 = G__22158;
chunk__22151 = G__22159;
count__22152 = G__22160;
i__22153 = G__22161;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22150);
if(temp__4657__auto__){
var seq__22150__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22150__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__22150__$1);
var G__22162 = cljs.core.chunk_rest.call(null,seq__22150__$1);
var G__22163 = c__19654__auto__;
var G__22164 = cljs.core.count.call(null,c__19654__auto__);
var G__22165 = (0);
seq__22150 = G__22162;
chunk__22151 = G__22163;
count__22152 = G__22164;
i__22153 = G__22165;
continue;
} else {
var vec__22155 = cljs.core.first.call(null,seq__22150__$1);
var effect_k = cljs.core.nth.call(null,vec__22155,(0),null);
var value = cljs.core.nth.call(null,vec__22155,(1),null);
var temp__4655__auto___22166 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___22166)){
var effect_fn_22167 = temp__4655__auto___22166;
effect_fn_22167.call(null,value);
} else {
}

var G__22168 = cljs.core.next.call(null,seq__22150__$1);
var G__22169 = null;
var G__22170 = (0);
var G__22171 = (0);
seq__22150 = G__22168;
chunk__22151 = G__22169;
count__22152 = G__22170;
i__22153 = G__22171;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22172 = cljs.core.seq.call(null,value);
var chunk__22173 = null;
var count__22174 = (0);
var i__22175 = (0);
while(true){
if((i__22175 < count__22174)){
var map__22176 = cljs.core._nth.call(null,chunk__22173,i__22175);
var map__22176__$1 = ((((!((map__22176 == null)))?((((map__22176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22176):map__22176);
var effect = map__22176__$1;
var ms = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22172,chunk__22173,count__22174,i__22175,map__22176,map__22176__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22172,chunk__22173,count__22174,i__22175,map__22176,map__22176__$1,effect,ms,dispatch))
,ms);
}

var G__22180 = seq__22172;
var G__22181 = chunk__22173;
var G__22182 = count__22174;
var G__22183 = (i__22175 + (1));
seq__22172 = G__22180;
chunk__22173 = G__22181;
count__22174 = G__22182;
i__22175 = G__22183;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22172);
if(temp__4657__auto__){
var seq__22172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22172__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__22172__$1);
var G__22184 = cljs.core.chunk_rest.call(null,seq__22172__$1);
var G__22185 = c__19654__auto__;
var G__22186 = cljs.core.count.call(null,c__19654__auto__);
var G__22187 = (0);
seq__22172 = G__22184;
chunk__22173 = G__22185;
count__22174 = G__22186;
i__22175 = G__22187;
continue;
} else {
var map__22178 = cljs.core.first.call(null,seq__22172__$1);
var map__22178__$1 = ((((!((map__22178 == null)))?((((map__22178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22178):map__22178);
var effect = map__22178__$1;
var ms = cljs.core.get.call(null,map__22178__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22178__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22172,chunk__22173,count__22174,i__22175,map__22178,map__22178__$1,effect,ms,dispatch,seq__22172__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22172,chunk__22173,count__22174,i__22175,map__22178,map__22178__$1,effect,ms,dispatch,seq__22172__$1,temp__4657__auto__))
,ms);
}

var G__22188 = cljs.core.next.call(null,seq__22172__$1);
var G__22189 = null;
var G__22190 = (0);
var G__22191 = (0);
seq__22172 = G__22188;
chunk__22173 = G__22189;
count__22174 = G__22190;
i__22175 = G__22191;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__22192 = cljs.core.seq.call(null,value);
var chunk__22193 = null;
var count__22194 = (0);
var i__22195 = (0);
while(true){
if((i__22195 < count__22194)){
var event = cljs.core._nth.call(null,chunk__22193,i__22195);
re_frame.router.dispatch.call(null,event);

var G__22196 = seq__22192;
var G__22197 = chunk__22193;
var G__22198 = count__22194;
var G__22199 = (i__22195 + (1));
seq__22192 = G__22196;
chunk__22193 = G__22197;
count__22194 = G__22198;
i__22195 = G__22199;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22192);
if(temp__4657__auto__){
var seq__22192__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22192__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__22192__$1);
var G__22200 = cljs.core.chunk_rest.call(null,seq__22192__$1);
var G__22201 = c__19654__auto__;
var G__22202 = cljs.core.count.call(null,c__19654__auto__);
var G__22203 = (0);
seq__22192 = G__22200;
chunk__22193 = G__22201;
count__22194 = G__22202;
i__22195 = G__22203;
continue;
} else {
var event = cljs.core.first.call(null,seq__22192__$1);
re_frame.router.dispatch.call(null,event);

var G__22204 = cljs.core.next.call(null,seq__22192__$1);
var G__22205 = null;
var G__22206 = (0);
var G__22207 = (0);
seq__22192 = G__22204;
chunk__22193 = G__22205;
count__22194 = G__22206;
i__22195 = G__22207;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22208 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__22209 = null;
var count__22210 = (0);
var i__22211 = (0);
while(true){
if((i__22211 < count__22210)){
var event = cljs.core._nth.call(null,chunk__22209,i__22211);
clear_event.call(null,event);

var G__22212 = seq__22208;
var G__22213 = chunk__22209;
var G__22214 = count__22210;
var G__22215 = (i__22211 + (1));
seq__22208 = G__22212;
chunk__22209 = G__22213;
count__22210 = G__22214;
i__22211 = G__22215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22208);
if(temp__4657__auto__){
var seq__22208__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22208__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__22208__$1);
var G__22216 = cljs.core.chunk_rest.call(null,seq__22208__$1);
var G__22217 = c__19654__auto__;
var G__22218 = cljs.core.count.call(null,c__19654__auto__);
var G__22219 = (0);
seq__22208 = G__22216;
chunk__22209 = G__22217;
count__22210 = G__22218;
i__22211 = G__22219;
continue;
} else {
var event = cljs.core.first.call(null,seq__22208__$1);
clear_event.call(null,event);

var G__22220 = cljs.core.next.call(null,seq__22208__$1);
var G__22221 = null;
var G__22222 = (0);
var G__22223 = (0);
seq__22208 = G__22220;
chunk__22209 = G__22221;
count__22210 = G__22222;
i__22211 = G__22223;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1478297176215