// Compiled by ClojureScript 1.8.40 {}
goog.provide('re_frame.interceptor');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return (cljs.core.map_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set.call(null,cljs.core.keys.call(null,m))));
});
/**
 * Create an interceptor from named arguments
 */
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__19919__auto__ = [];
var len__19912__auto___20903 = arguments.length;
var i__19913__auto___20904 = (0);
while(true){
if((i__19913__auto___20904 < len__19912__auto___20903)){
args__19919__auto__.push((arguments[i__19913__auto___20904]));

var G__20905 = (i__19913__auto___20904 + (1));
i__19913__auto___20904 = G__20905;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__20900){
var map__20901 = p__20900;
var map__20901__$1 = ((((!((map__20901 == null)))?((((map__20901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20901):map__20901);
var m = map__20901__$1;
var id = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__4655__auto___20906 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__4655__auto___20906){
var unknown_keys_20907 = temp__4655__auto___20906;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ->interceptor ",m," has unknown keys:",unknown_keys_20907);
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__18843__auto__ = id;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
});

re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0);

re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq20899){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20899));
});
re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var args20908 = [];
var len__19912__auto___20911 = arguments.length;
var i__19913__auto___20912 = (0);
while(true){
if((i__19913__auto___20912 < len__19912__auto___20911)){
args20908.push((arguments[i__19913__auto___20912]));

var G__20913 = (i__19913__auto___20912 + (1));
i__19913__auto___20912 = G__20913;
continue;
} else {
}
break;
}

var G__20910 = args20908.length;
switch (G__20910) {
case 1:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20908.length)].join('')));

}
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
});

re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
var args20915 = [];
var len__19912__auto___20918 = arguments.length;
var i__19913__auto___20919 = (0);
while(true){
if((i__19913__auto___20919 < len__19912__auto___20918)){
args20915.push((arguments[i__19913__auto___20919]));

var G__20920 = (i__19913__auto___20919 + (1));
i__19913__auto___20919 = G__20920;
continue;
} else {
}
break;
}

var G__20917 = args20915.length;
switch (G__20917) {
case 1:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20915.length)].join('')));

}
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
});

re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3;
re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__19919__auto__ = [];
var len__19912__auto___20926 = arguments.length;
var i__19913__auto___20927 = (0);
while(true){
if((i__19913__auto___20927 < len__19912__auto___20926)){
args__19919__auto__.push((arguments[i__19913__auto___20927]));

var G__20928 = (i__19913__auto___20927 + (1));
i__19913__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((3) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19920__auto__);
});

re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.call(null,cljs.core.update,context,key,f,args);
});

re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3);

re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq20922){
var G__20923 = cljs.core.first.call(null,seq20922);
var seq20922__$1 = cljs.core.next.call(null,seq20922);
var G__20924 = cljs.core.first.call(null,seq20922__$1);
var seq20922__$2 = cljs.core.next.call(null,seq20922__$1);
var G__20925 = cljs.core.first.call(null,seq20922__$2);
var seq20922__$3 = cljs.core.next.call(null,seq20922__$2);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(G__20923,G__20924,G__20925,seq20922__$3);
});
re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__4655__auto__ = cljs.core.get.call(null,interceptor,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,context);
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` fucntion will (if present)
 *   add to a `context's` `:coeffect`, while it's `:after` function
 *   will modify the `context`'s `:effect`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__20929 = re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__20929;
continue;
}
break;
}
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function would allow an interceptor could add new
 *   interceptors to the `:queue` of a context.
 */
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.call(null,cljs.core.into,re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
var args20930 = [];
var len__19912__auto___20933 = arguments.length;
var i__19913__auto___20934 = (0);
while(true){
if((i__19913__auto___20934 < len__19912__auto___20933)){
args20930.push((arguments[i__19913__auto___20934]));

var G__20935 = (i__19913__auto___20934 + (1));
i__19913__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var G__20932 = args20930.length;
switch (G__20932) {
case 2:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20930.length)].join('')));

}
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue.call(null,re_frame.interceptor.assoc_coeffect.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),interceptors);
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect.call(null,re_frame.interceptor.context.call(null,event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
});

re_frame.interceptor.context.cljs$lang$maxFixedArity = 3;
/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffect` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
return re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.change_direction.call(null,re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.context.call(null,event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=interceptor.js.map?rel=1478297172380