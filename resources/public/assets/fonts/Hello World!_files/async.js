// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23541 = [];
var len__19912__auto___23547 = arguments.length;
var i__19913__auto___23548 = (0);
while(true){
if((i__19913__auto___23548 < len__19912__auto___23547)){
args23541.push((arguments[i__19913__auto___23548]));

var G__23549 = (i__19913__auto___23548 + (1));
i__19913__auto___23548 = G__23549;
continue;
} else {
}
break;
}

var G__23543 = args23541.length;
switch (G__23543) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23541.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23544 = (function (f,blockable,meta23545){
this.f = f;
this.blockable = blockable;
this.meta23545 = meta23545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23546,meta23545__$1){
var self__ = this;
var _23546__$1 = this;
return (new cljs.core.async.t_cljs$core$async23544(self__.f,self__.blockable,meta23545__$1));
});

cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23546){
var self__ = this;
var _23546__$1 = this;
return self__.meta23545;
});

cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23545","meta23545",-177855538,null)], null);
});

cljs.core.async.t_cljs$core$async23544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23544";

cljs.core.async.t_cljs$core$async23544.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async23544");
});

cljs.core.async.__GT_t_cljs$core$async23544 = (function cljs$core$async$__GT_t_cljs$core$async23544(f__$1,blockable__$1,meta23545){
return (new cljs.core.async.t_cljs$core$async23544(f__$1,blockable__$1,meta23545));
});

}

return (new cljs.core.async.t_cljs$core$async23544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23553 = [];
var len__19912__auto___23556 = arguments.length;
var i__19913__auto___23557 = (0);
while(true){
if((i__19913__auto___23557 < len__19912__auto___23556)){
args23553.push((arguments[i__19913__auto___23557]));

var G__23558 = (i__19913__auto___23557 + (1));
i__19913__auto___23557 = G__23558;
continue;
} else {
}
break;
}

var G__23555 = args23553.length;
switch (G__23555) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23553.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23560 = [];
var len__19912__auto___23563 = arguments.length;
var i__19913__auto___23564 = (0);
while(true){
if((i__19913__auto___23564 < len__19912__auto___23563)){
args23560.push((arguments[i__19913__auto___23564]));

var G__23565 = (i__19913__auto___23564 + (1));
i__19913__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var G__23562 = args23560.length;
switch (G__23562) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23560.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23567 = [];
var len__19912__auto___23570 = arguments.length;
var i__19913__auto___23571 = (0);
while(true){
if((i__19913__auto___23571 < len__19912__auto___23570)){
args23567.push((arguments[i__19913__auto___23571]));

var G__23572 = (i__19913__auto___23571 + (1));
i__19913__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var G__23569 = args23567.length;
switch (G__23569) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23567.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23574 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23574);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23574,ret){
return (function (){
return fn1.call(null,val_23574);
});})(val_23574,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23575 = [];
var len__19912__auto___23578 = arguments.length;
var i__19913__auto___23579 = (0);
while(true){
if((i__19913__auto___23579 < len__19912__auto___23578)){
args23575.push((arguments[i__19913__auto___23579]));

var G__23580 = (i__19913__auto___23579 + (1));
i__19913__auto___23579 = G__23580;
continue;
} else {
}
break;
}

var G__23577 = args23575.length;
switch (G__23577) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23575.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19757__auto___23582 = n;
var x_23583 = (0);
while(true){
if((x_23583 < n__19757__auto___23582)){
(a[x_23583] = (0));

var G__23584 = (x_23583 + (1));
x_23583 = G__23584;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23585 = (i + (1));
i = G__23585;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23589 = (function (alt_flag,flag,meta23590){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23590 = meta23590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23591,meta23590__$1){
var self__ = this;
var _23591__$1 = this;
return (new cljs.core.async.t_cljs$core$async23589(self__.alt_flag,self__.flag,meta23590__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23591){
var self__ = this;
var _23591__$1 = this;
return self__.meta23590;
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23590","meta23590",1384922178,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23589";

cljs.core.async.t_cljs$core$async23589.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async23589");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23589 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23589(alt_flag__$1,flag__$1,meta23590){
return (new cljs.core.async.t_cljs$core$async23589(alt_flag__$1,flag__$1,meta23590));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23589(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23595 = (function (alt_handler,flag,cb,meta23596){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23596 = meta23596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23597,meta23596__$1){
var self__ = this;
var _23597__$1 = this;
return (new cljs.core.async.t_cljs$core$async23595(self__.alt_handler,self__.flag,self__.cb,meta23596__$1));
});

cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23597){
var self__ = this;
var _23597__$1 = this;
return self__.meta23596;
});

cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23596","meta23596",97337903,null)], null);
});

cljs.core.async.t_cljs$core$async23595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23595";

cljs.core.async.t_cljs$core$async23595.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async23595");
});

cljs.core.async.__GT_t_cljs$core$async23595 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23595(alt_handler__$1,flag__$1,cb__$1,meta23596){
return (new cljs.core.async.t_cljs$core$async23595(alt_handler__$1,flag__$1,cb__$1,meta23596));
});

}

return (new cljs.core.async.t_cljs$core$async23595(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23598_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23598_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23599_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23599_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18843__auto__ = wport;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23600 = (i + (1));
i = G__23600;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18843__auto__ = ret;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18831__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18831__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19919__auto__ = [];
var len__19912__auto___23606 = arguments.length;
var i__19913__auto___23607 = (0);
while(true){
if((i__19913__auto___23607 < len__19912__auto___23606)){
args__19919__auto__.push((arguments[i__19913__auto___23607]));

var G__23608 = (i__19913__auto___23607 + (1));
i__19913__auto___23607 = G__23608;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((1) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19920__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23603){
var map__23604 = p__23603;
var map__23604__$1 = ((((!((map__23604 == null)))?((((map__23604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23604):map__23604);
var opts = map__23604__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23601){
var G__23602 = cljs.core.first.call(null,seq23601);
var seq23601__$1 = cljs.core.next.call(null,seq23601);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23602,seq23601__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23609 = [];
var len__19912__auto___23659 = arguments.length;
var i__19913__auto___23660 = (0);
while(true){
if((i__19913__auto___23660 < len__19912__auto___23659)){
args23609.push((arguments[i__19913__auto___23660]));

var G__23661 = (i__19913__auto___23660 + (1));
i__19913__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var G__23611 = args23609.length;
switch (G__23611) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23609.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23496__auto___23663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___23663){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___23663){
return (function (state_23635){
var state_val_23636 = (state_23635[(1)]);
if((state_val_23636 === (7))){
var inst_23631 = (state_23635[(2)]);
var state_23635__$1 = state_23635;
var statearr_23637_23664 = state_23635__$1;
(statearr_23637_23664[(2)] = inst_23631);

(statearr_23637_23664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (1))){
var state_23635__$1 = state_23635;
var statearr_23638_23665 = state_23635__$1;
(statearr_23638_23665[(2)] = null);

(statearr_23638_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (4))){
var inst_23614 = (state_23635[(7)]);
var inst_23614__$1 = (state_23635[(2)]);
var inst_23615 = (inst_23614__$1 == null);
var state_23635__$1 = (function (){var statearr_23639 = state_23635;
(statearr_23639[(7)] = inst_23614__$1);

return statearr_23639;
})();
if(cljs.core.truth_(inst_23615)){
var statearr_23640_23666 = state_23635__$1;
(statearr_23640_23666[(1)] = (5));

} else {
var statearr_23641_23667 = state_23635__$1;
(statearr_23641_23667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (13))){
var state_23635__$1 = state_23635;
var statearr_23642_23668 = state_23635__$1;
(statearr_23642_23668[(2)] = null);

(statearr_23642_23668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (6))){
var inst_23614 = (state_23635[(7)]);
var state_23635__$1 = state_23635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23635__$1,(11),to,inst_23614);
} else {
if((state_val_23636 === (3))){
var inst_23633 = (state_23635[(2)]);
var state_23635__$1 = state_23635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23635__$1,inst_23633);
} else {
if((state_val_23636 === (12))){
var state_23635__$1 = state_23635;
var statearr_23643_23669 = state_23635__$1;
(statearr_23643_23669[(2)] = null);

(statearr_23643_23669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (2))){
var state_23635__$1 = state_23635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23635__$1,(4),from);
} else {
if((state_val_23636 === (11))){
var inst_23624 = (state_23635[(2)]);
var state_23635__$1 = state_23635;
if(cljs.core.truth_(inst_23624)){
var statearr_23644_23670 = state_23635__$1;
(statearr_23644_23670[(1)] = (12));

} else {
var statearr_23645_23671 = state_23635__$1;
(statearr_23645_23671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (9))){
var state_23635__$1 = state_23635;
var statearr_23646_23672 = state_23635__$1;
(statearr_23646_23672[(2)] = null);

(statearr_23646_23672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (5))){
var state_23635__$1 = state_23635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23647_23673 = state_23635__$1;
(statearr_23647_23673[(1)] = (8));

} else {
var statearr_23648_23674 = state_23635__$1;
(statearr_23648_23674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (14))){
var inst_23629 = (state_23635[(2)]);
var state_23635__$1 = state_23635;
var statearr_23649_23675 = state_23635__$1;
(statearr_23649_23675[(2)] = inst_23629);

(statearr_23649_23675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (10))){
var inst_23621 = (state_23635[(2)]);
var state_23635__$1 = state_23635;
var statearr_23650_23676 = state_23635__$1;
(statearr_23650_23676[(2)] = inst_23621);

(statearr_23650_23676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23636 === (8))){
var inst_23618 = cljs.core.async.close_BANG_.call(null,to);
var state_23635__$1 = state_23635;
var statearr_23651_23677 = state_23635__$1;
(statearr_23651_23677[(2)] = inst_23618);

(statearr_23651_23677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___23663))
;
return ((function (switch__23384__auto__,c__23496__auto___23663){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_23655 = [null,null,null,null,null,null,null,null];
(statearr_23655[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_23655[(1)] = (1));

return statearr_23655;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_23635){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_23635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e23656){if((e23656 instanceof Object)){
var ex__23388__auto__ = e23656;
var statearr_23657_23678 = state_23635;
(statearr_23657_23678[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23679 = state_23635;
state_23635 = G__23679;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_23635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_23635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___23663))
})();
var state__23498__auto__ = (function (){var statearr_23658 = f__23497__auto__.call(null);
(statearr_23658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___23663);

return statearr_23658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___23663))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23863){
var vec__23864 = p__23863;
var v = cljs.core.nth.call(null,vec__23864,(0),null);
var p = cljs.core.nth.call(null,vec__23864,(1),null);
var job = vec__23864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23496__auto___24046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results){
return (function (state_23869){
var state_val_23870 = (state_23869[(1)]);
if((state_val_23870 === (1))){
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23869__$1,(2),res,v);
} else {
if((state_val_23870 === (2))){
var inst_23866 = (state_23869[(2)]);
var inst_23867 = cljs.core.async.close_BANG_.call(null,res);
var state_23869__$1 = (function (){var statearr_23871 = state_23869;
(statearr_23871[(7)] = inst_23866);

return statearr_23871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23869__$1,inst_23867);
} else {
return null;
}
}
});})(c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results))
;
return ((function (switch__23384__auto__,c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_23875 = [null,null,null,null,null,null,null,null];
(statearr_23875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__);

(statearr_23875[(1)] = (1));

return statearr_23875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1 = (function (state_23869){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_23869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e23876){if((e23876 instanceof Object)){
var ex__23388__auto__ = e23876;
var statearr_23877_24047 = state_23869;
(statearr_23877_24047[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24048 = state_23869;
state_23869 = G__24048;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = function(state_23869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1.call(this,state_23869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results))
})();
var state__23498__auto__ = (function (){var statearr_23878 = f__23497__auto__.call(null);
(statearr_23878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24046);

return statearr_23878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___24046,res,vec__23864,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23879){
var vec__23880 = p__23879;
var v = cljs.core.nth.call(null,vec__23880,(0),null);
var p = cljs.core.nth.call(null,vec__23880,(1),null);
var job = vec__23880;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19757__auto___24049 = n;
var __24050 = (0);
while(true){
if((__24050 < n__19757__auto___24049)){
var G__23881_24051 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23881_24051) {
case "compute":
var c__23496__auto___24053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24050,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (__24050,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function (state_23894){
var state_val_23895 = (state_23894[(1)]);
if((state_val_23895 === (1))){
var state_23894__$1 = state_23894;
var statearr_23896_24054 = state_23894__$1;
(statearr_23896_24054[(2)] = null);

(statearr_23896_24054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (2))){
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(4),jobs);
} else {
if((state_val_23895 === (3))){
var inst_23892 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23894__$1,inst_23892);
} else {
if((state_val_23895 === (4))){
var inst_23884 = (state_23894[(2)]);
var inst_23885 = process.call(null,inst_23884);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23885)){
var statearr_23897_24055 = state_23894__$1;
(statearr_23897_24055[(1)] = (5));

} else {
var statearr_23898_24056 = state_23894__$1;
(statearr_23898_24056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (5))){
var state_23894__$1 = state_23894;
var statearr_23899_24057 = state_23894__$1;
(statearr_23899_24057[(2)] = null);

(statearr_23899_24057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (6))){
var state_23894__$1 = state_23894;
var statearr_23900_24058 = state_23894__$1;
(statearr_23900_24058[(2)] = null);

(statearr_23900_24058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (7))){
var inst_23890 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23901_24059 = state_23894__$1;
(statearr_23901_24059[(2)] = inst_23890);

(statearr_23901_24059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24050,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
;
return ((function (__24050,switch__23384__auto__,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_23905 = [null,null,null,null,null,null,null];
(statearr_23905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__);

(statearr_23905[(1)] = (1));

return statearr_23905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1 = (function (state_23894){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_23894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e23906){if((e23906 instanceof Object)){
var ex__23388__auto__ = e23906;
var statearr_23907_24060 = state_23894;
(statearr_23907_24060[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24061 = state_23894;
state_23894 = G__24061;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = function(state_23894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1.call(this,state_23894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__;
})()
;})(__24050,switch__23384__auto__,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
})();
var state__23498__auto__ = (function (){var statearr_23908 = f__23497__auto__.call(null);
(statearr_23908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24053);

return statearr_23908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(__24050,c__23496__auto___24053,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
);


break;
case "async":
var c__23496__auto___24062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24050,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (__24050,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function (state_23921){
var state_val_23922 = (state_23921[(1)]);
if((state_val_23922 === (1))){
var state_23921__$1 = state_23921;
var statearr_23923_24063 = state_23921__$1;
(statearr_23923_24063[(2)] = null);

(statearr_23923_24063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (2))){
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23921__$1,(4),jobs);
} else {
if((state_val_23922 === (3))){
var inst_23919 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23921__$1,inst_23919);
} else {
if((state_val_23922 === (4))){
var inst_23911 = (state_23921[(2)]);
var inst_23912 = async.call(null,inst_23911);
var state_23921__$1 = state_23921;
if(cljs.core.truth_(inst_23912)){
var statearr_23924_24064 = state_23921__$1;
(statearr_23924_24064[(1)] = (5));

} else {
var statearr_23925_24065 = state_23921__$1;
(statearr_23925_24065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (5))){
var state_23921__$1 = state_23921;
var statearr_23926_24066 = state_23921__$1;
(statearr_23926_24066[(2)] = null);

(statearr_23926_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (6))){
var state_23921__$1 = state_23921;
var statearr_23927_24067 = state_23921__$1;
(statearr_23927_24067[(2)] = null);

(statearr_23927_24067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23922 === (7))){
var inst_23917 = (state_23921[(2)]);
var state_23921__$1 = state_23921;
var statearr_23928_24068 = state_23921__$1;
(statearr_23928_24068[(2)] = inst_23917);

(statearr_23928_24068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24050,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
;
return ((function (__24050,switch__23384__auto__,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_23932 = [null,null,null,null,null,null,null];
(statearr_23932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__);

(statearr_23932[(1)] = (1));

return statearr_23932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1 = (function (state_23921){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_23921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e23933){if((e23933 instanceof Object)){
var ex__23388__auto__ = e23933;
var statearr_23934_24069 = state_23921;
(statearr_23934_24069[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24070 = state_23921;
state_23921 = G__24070;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = function(state_23921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1.call(this,state_23921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__;
})()
;})(__24050,switch__23384__auto__,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
})();
var state__23498__auto__ = (function (){var statearr_23935 = f__23497__auto__.call(null);
(statearr_23935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24062);

return statearr_23935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(__24050,c__23496__auto___24062,G__23881_24051,n__19757__auto___24049,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24071 = (__24050 + (1));
__24050 = G__24071;
continue;
} else {
}
break;
}

var c__23496__auto___24072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___24072,jobs,results,process,async){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___24072,jobs,results,process,async){
return (function (state_23957){
var state_val_23958 = (state_23957[(1)]);
if((state_val_23958 === (1))){
var state_23957__$1 = state_23957;
var statearr_23959_24073 = state_23957__$1;
(statearr_23959_24073[(2)] = null);

(statearr_23959_24073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (2))){
var state_23957__$1 = state_23957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23957__$1,(4),from);
} else {
if((state_val_23958 === (3))){
var inst_23955 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23957__$1,inst_23955);
} else {
if((state_val_23958 === (4))){
var inst_23938 = (state_23957[(7)]);
var inst_23938__$1 = (state_23957[(2)]);
var inst_23939 = (inst_23938__$1 == null);
var state_23957__$1 = (function (){var statearr_23960 = state_23957;
(statearr_23960[(7)] = inst_23938__$1);

return statearr_23960;
})();
if(cljs.core.truth_(inst_23939)){
var statearr_23961_24074 = state_23957__$1;
(statearr_23961_24074[(1)] = (5));

} else {
var statearr_23962_24075 = state_23957__$1;
(statearr_23962_24075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (5))){
var inst_23941 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23957__$1 = state_23957;
var statearr_23963_24076 = state_23957__$1;
(statearr_23963_24076[(2)] = inst_23941);

(statearr_23963_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (6))){
var inst_23943 = (state_23957[(8)]);
var inst_23938 = (state_23957[(7)]);
var inst_23943__$1 = cljs.core.async.chan.call(null,(1));
var inst_23944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23945 = [inst_23938,inst_23943__$1];
var inst_23946 = (new cljs.core.PersistentVector(null,2,(5),inst_23944,inst_23945,null));
var state_23957__$1 = (function (){var statearr_23964 = state_23957;
(statearr_23964[(8)] = inst_23943__$1);

return statearr_23964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23957__$1,(8),jobs,inst_23946);
} else {
if((state_val_23958 === (7))){
var inst_23953 = (state_23957[(2)]);
var state_23957__$1 = state_23957;
var statearr_23965_24077 = state_23957__$1;
(statearr_23965_24077[(2)] = inst_23953);

(statearr_23965_24077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23958 === (8))){
var inst_23943 = (state_23957[(8)]);
var inst_23948 = (state_23957[(2)]);
var state_23957__$1 = (function (){var statearr_23966 = state_23957;
(statearr_23966[(9)] = inst_23948);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23957__$1,(9),results,inst_23943);
} else {
if((state_val_23958 === (9))){
var inst_23950 = (state_23957[(2)]);
var state_23957__$1 = (function (){var statearr_23967 = state_23957;
(statearr_23967[(10)] = inst_23950);

return statearr_23967;
})();
var statearr_23968_24078 = state_23957__$1;
(statearr_23968_24078[(2)] = null);

(statearr_23968_24078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___24072,jobs,results,process,async))
;
return ((function (switch__23384__auto__,c__23496__auto___24072,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_23972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__);

(statearr_23972[(1)] = (1));

return statearr_23972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1 = (function (state_23957){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_23957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e23973){if((e23973 instanceof Object)){
var ex__23388__auto__ = e23973;
var statearr_23974_24079 = state_23957;
(statearr_23974_24079[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24080 = state_23957;
state_23957 = G__24080;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = function(state_23957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1.call(this,state_23957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___24072,jobs,results,process,async))
})();
var state__23498__auto__ = (function (){var statearr_23975 = f__23497__auto__.call(null);
(statearr_23975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24072);

return statearr_23975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___24072,jobs,results,process,async))
);


var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__,jobs,results,process,async){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__,jobs,results,process,async){
return (function (state_24013){
var state_val_24014 = (state_24013[(1)]);
if((state_val_24014 === (7))){
var inst_24009 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24015_24081 = state_24013__$1;
(statearr_24015_24081[(2)] = inst_24009);

(statearr_24015_24081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (20))){
var state_24013__$1 = state_24013;
var statearr_24016_24082 = state_24013__$1;
(statearr_24016_24082[(2)] = null);

(statearr_24016_24082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (1))){
var state_24013__$1 = state_24013;
var statearr_24017_24083 = state_24013__$1;
(statearr_24017_24083[(2)] = null);

(statearr_24017_24083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (4))){
var inst_23978 = (state_24013[(7)]);
var inst_23978__$1 = (state_24013[(2)]);
var inst_23979 = (inst_23978__$1 == null);
var state_24013__$1 = (function (){var statearr_24018 = state_24013;
(statearr_24018[(7)] = inst_23978__$1);

return statearr_24018;
})();
if(cljs.core.truth_(inst_23979)){
var statearr_24019_24084 = state_24013__$1;
(statearr_24019_24084[(1)] = (5));

} else {
var statearr_24020_24085 = state_24013__$1;
(statearr_24020_24085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (15))){
var inst_23991 = (state_24013[(8)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24013__$1,(18),to,inst_23991);
} else {
if((state_val_24014 === (21))){
var inst_24004 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24021_24086 = state_24013__$1;
(statearr_24021_24086[(2)] = inst_24004);

(statearr_24021_24086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (13))){
var inst_24006 = (state_24013[(2)]);
var state_24013__$1 = (function (){var statearr_24022 = state_24013;
(statearr_24022[(9)] = inst_24006);

return statearr_24022;
})();
var statearr_24023_24087 = state_24013__$1;
(statearr_24023_24087[(2)] = null);

(statearr_24023_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (6))){
var inst_23978 = (state_24013[(7)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(11),inst_23978);
} else {
if((state_val_24014 === (17))){
var inst_23999 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
if(cljs.core.truth_(inst_23999)){
var statearr_24024_24088 = state_24013__$1;
(statearr_24024_24088[(1)] = (19));

} else {
var statearr_24025_24089 = state_24013__$1;
(statearr_24025_24089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (3))){
var inst_24011 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24013__$1,inst_24011);
} else {
if((state_val_24014 === (12))){
var inst_23988 = (state_24013[(10)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(14),inst_23988);
} else {
if((state_val_24014 === (2))){
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(4),results);
} else {
if((state_val_24014 === (19))){
var state_24013__$1 = state_24013;
var statearr_24026_24090 = state_24013__$1;
(statearr_24026_24090[(2)] = null);

(statearr_24026_24090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (11))){
var inst_23988 = (state_24013[(2)]);
var state_24013__$1 = (function (){var statearr_24027 = state_24013;
(statearr_24027[(10)] = inst_23988);

return statearr_24027;
})();
var statearr_24028_24091 = state_24013__$1;
(statearr_24028_24091[(2)] = null);

(statearr_24028_24091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (9))){
var state_24013__$1 = state_24013;
var statearr_24029_24092 = state_24013__$1;
(statearr_24029_24092[(2)] = null);

(statearr_24029_24092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (5))){
var state_24013__$1 = state_24013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24030_24093 = state_24013__$1;
(statearr_24030_24093[(1)] = (8));

} else {
var statearr_24031_24094 = state_24013__$1;
(statearr_24031_24094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (14))){
var inst_23991 = (state_24013[(8)]);
var inst_23993 = (state_24013[(11)]);
var inst_23991__$1 = (state_24013[(2)]);
var inst_23992 = (inst_23991__$1 == null);
var inst_23993__$1 = cljs.core.not.call(null,inst_23992);
var state_24013__$1 = (function (){var statearr_24032 = state_24013;
(statearr_24032[(8)] = inst_23991__$1);

(statearr_24032[(11)] = inst_23993__$1);

return statearr_24032;
})();
if(inst_23993__$1){
var statearr_24033_24095 = state_24013__$1;
(statearr_24033_24095[(1)] = (15));

} else {
var statearr_24034_24096 = state_24013__$1;
(statearr_24034_24096[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (16))){
var inst_23993 = (state_24013[(11)]);
var state_24013__$1 = state_24013;
var statearr_24035_24097 = state_24013__$1;
(statearr_24035_24097[(2)] = inst_23993);

(statearr_24035_24097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (10))){
var inst_23985 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24036_24098 = state_24013__$1;
(statearr_24036_24098[(2)] = inst_23985);

(statearr_24036_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (18))){
var inst_23996 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24037_24099 = state_24013__$1;
(statearr_24037_24099[(2)] = inst_23996);

(statearr_24037_24099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (8))){
var inst_23982 = cljs.core.async.close_BANG_.call(null,to);
var state_24013__$1 = state_24013;
var statearr_24038_24100 = state_24013__$1;
(statearr_24038_24100[(2)] = inst_23982);

(statearr_24038_24100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto__,jobs,results,process,async))
;
return ((function (switch__23384__auto__,c__23496__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_24042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__);

(statearr_24042[(1)] = (1));

return statearr_24042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1 = (function (state_24013){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_24013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e24043){if((e24043 instanceof Object)){
var ex__23388__auto__ = e24043;
var statearr_24044_24101 = state_24013;
(statearr_24044_24101[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24102 = state_24013;
state_24013 = G__24102;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__ = function(state_24013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1.call(this,state_24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__,jobs,results,process,async))
})();
var state__23498__auto__ = (function (){var statearr_24045 = f__23497__auto__.call(null);
(statearr_24045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__,jobs,results,process,async))
);

return c__23496__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24103 = [];
var len__19912__auto___24106 = arguments.length;
var i__19913__auto___24107 = (0);
while(true){
if((i__19913__auto___24107 < len__19912__auto___24106)){
args24103.push((arguments[i__19913__auto___24107]));

var G__24108 = (i__19913__auto___24107 + (1));
i__19913__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var G__24105 = args24103.length;
switch (G__24105) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24103.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24110 = [];
var len__19912__auto___24113 = arguments.length;
var i__19913__auto___24114 = (0);
while(true){
if((i__19913__auto___24114 < len__19912__auto___24113)){
args24110.push((arguments[i__19913__auto___24114]));

var G__24115 = (i__19913__auto___24114 + (1));
i__19913__auto___24114 = G__24115;
continue;
} else {
}
break;
}

var G__24112 = args24110.length;
switch (G__24112) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24110.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24117 = [];
var len__19912__auto___24170 = arguments.length;
var i__19913__auto___24171 = (0);
while(true){
if((i__19913__auto___24171 < len__19912__auto___24170)){
args24117.push((arguments[i__19913__auto___24171]));

var G__24172 = (i__19913__auto___24171 + (1));
i__19913__auto___24171 = G__24172;
continue;
} else {
}
break;
}

var G__24119 = args24117.length;
switch (G__24119) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24117.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23496__auto___24174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___24174,tc,fc){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___24174,tc,fc){
return (function (state_24145){
var state_val_24146 = (state_24145[(1)]);
if((state_val_24146 === (7))){
var inst_24141 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24147_24175 = state_24145__$1;
(statearr_24147_24175[(2)] = inst_24141);

(statearr_24147_24175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (1))){
var state_24145__$1 = state_24145;
var statearr_24148_24176 = state_24145__$1;
(statearr_24148_24176[(2)] = null);

(statearr_24148_24176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (4))){
var inst_24122 = (state_24145[(7)]);
var inst_24122__$1 = (state_24145[(2)]);
var inst_24123 = (inst_24122__$1 == null);
var state_24145__$1 = (function (){var statearr_24149 = state_24145;
(statearr_24149[(7)] = inst_24122__$1);

return statearr_24149;
})();
if(cljs.core.truth_(inst_24123)){
var statearr_24150_24177 = state_24145__$1;
(statearr_24150_24177[(1)] = (5));

} else {
var statearr_24151_24178 = state_24145__$1;
(statearr_24151_24178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (13))){
var state_24145__$1 = state_24145;
var statearr_24152_24179 = state_24145__$1;
(statearr_24152_24179[(2)] = null);

(statearr_24152_24179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (6))){
var inst_24122 = (state_24145[(7)]);
var inst_24128 = p.call(null,inst_24122);
var state_24145__$1 = state_24145;
if(cljs.core.truth_(inst_24128)){
var statearr_24153_24180 = state_24145__$1;
(statearr_24153_24180[(1)] = (9));

} else {
var statearr_24154_24181 = state_24145__$1;
(statearr_24154_24181[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (3))){
var inst_24143 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24145__$1,inst_24143);
} else {
if((state_val_24146 === (12))){
var state_24145__$1 = state_24145;
var statearr_24155_24182 = state_24145__$1;
(statearr_24155_24182[(2)] = null);

(statearr_24155_24182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (2))){
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24145__$1,(4),ch);
} else {
if((state_val_24146 === (11))){
var inst_24122 = (state_24145[(7)]);
var inst_24132 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24145__$1,(8),inst_24132,inst_24122);
} else {
if((state_val_24146 === (9))){
var state_24145__$1 = state_24145;
var statearr_24156_24183 = state_24145__$1;
(statearr_24156_24183[(2)] = tc);

(statearr_24156_24183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (5))){
var inst_24125 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24126 = cljs.core.async.close_BANG_.call(null,fc);
var state_24145__$1 = (function (){var statearr_24157 = state_24145;
(statearr_24157[(8)] = inst_24125);

return statearr_24157;
})();
var statearr_24158_24184 = state_24145__$1;
(statearr_24158_24184[(2)] = inst_24126);

(statearr_24158_24184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (14))){
var inst_24139 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24159_24185 = state_24145__$1;
(statearr_24159_24185[(2)] = inst_24139);

(statearr_24159_24185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (10))){
var state_24145__$1 = state_24145;
var statearr_24160_24186 = state_24145__$1;
(statearr_24160_24186[(2)] = fc);

(statearr_24160_24186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (8))){
var inst_24134 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
if(cljs.core.truth_(inst_24134)){
var statearr_24161_24187 = state_24145__$1;
(statearr_24161_24187[(1)] = (12));

} else {
var statearr_24162_24188 = state_24145__$1;
(statearr_24162_24188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___24174,tc,fc))
;
return ((function (switch__23384__auto__,c__23496__auto___24174,tc,fc){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_24166 = [null,null,null,null,null,null,null,null,null];
(statearr_24166[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_24166[(1)] = (1));

return statearr_24166;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_24145){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_24145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e24167){if((e24167 instanceof Object)){
var ex__23388__auto__ = e24167;
var statearr_24168_24189 = state_24145;
(statearr_24168_24189[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24190 = state_24145;
state_24145 = G__24190;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_24145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_24145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___24174,tc,fc))
})();
var state__23498__auto__ = (function (){var statearr_24169 = f__23497__auto__.call(null);
(statearr_24169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24174);

return statearr_24169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___24174,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (7))){
var inst_24250 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24256_24277 = state_24254__$1;
(statearr_24256_24277[(2)] = inst_24250);

(statearr_24256_24277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (1))){
var inst_24234 = init;
var state_24254__$1 = (function (){var statearr_24257 = state_24254;
(statearr_24257[(7)] = inst_24234);

return statearr_24257;
})();
var statearr_24258_24278 = state_24254__$1;
(statearr_24258_24278[(2)] = null);

(statearr_24258_24278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (4))){
var inst_24237 = (state_24254[(8)]);
var inst_24237__$1 = (state_24254[(2)]);
var inst_24238 = (inst_24237__$1 == null);
var state_24254__$1 = (function (){var statearr_24259 = state_24254;
(statearr_24259[(8)] = inst_24237__$1);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24238)){
var statearr_24260_24279 = state_24254__$1;
(statearr_24260_24279[(1)] = (5));

} else {
var statearr_24261_24280 = state_24254__$1;
(statearr_24261_24280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var inst_24237 = (state_24254[(8)]);
var inst_24234 = (state_24254[(7)]);
var inst_24241 = (state_24254[(9)]);
var inst_24241__$1 = f.call(null,inst_24234,inst_24237);
var inst_24242 = cljs.core.reduced_QMARK_.call(null,inst_24241__$1);
var state_24254__$1 = (function (){var statearr_24262 = state_24254;
(statearr_24262[(9)] = inst_24241__$1);

return statearr_24262;
})();
if(inst_24242){
var statearr_24263_24281 = state_24254__$1;
(statearr_24263_24281[(1)] = (8));

} else {
var statearr_24264_24282 = state_24254__$1;
(statearr_24264_24282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (3))){
var inst_24252 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (2))){
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(4),ch);
} else {
if((state_val_24255 === (9))){
var inst_24241 = (state_24254[(9)]);
var inst_24234 = inst_24241;
var state_24254__$1 = (function (){var statearr_24265 = state_24254;
(statearr_24265[(7)] = inst_24234);

return statearr_24265;
})();
var statearr_24266_24283 = state_24254__$1;
(statearr_24266_24283[(2)] = null);

(statearr_24266_24283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (5))){
var inst_24234 = (state_24254[(7)]);
var state_24254__$1 = state_24254;
var statearr_24267_24284 = state_24254__$1;
(statearr_24267_24284[(2)] = inst_24234);

(statearr_24267_24284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (10))){
var inst_24248 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24268_24285 = state_24254__$1;
(statearr_24268_24285[(2)] = inst_24248);

(statearr_24268_24285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (8))){
var inst_24241 = (state_24254[(9)]);
var inst_24244 = cljs.core.deref.call(null,inst_24241);
var state_24254__$1 = state_24254;
var statearr_24269_24286 = state_24254__$1;
(statearr_24269_24286[(2)] = inst_24244);

(statearr_24269_24286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23385__auto____0 = (function (){
var statearr_24273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24273[(0)] = cljs$core$async$reduce_$_state_machine__23385__auto__);

(statearr_24273[(1)] = (1));

return statearr_24273;
});
var cljs$core$async$reduce_$_state_machine__23385__auto____1 = (function (state_24254){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e24274){if((e24274 instanceof Object)){
var ex__23388__auto__ = e24274;
var statearr_24275_24287 = state_24254;
(statearr_24275_24287[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24288 = state_24254;
state_24254 = G__24288;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23385__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23385__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23385__auto____0;
cljs$core$async$reduce_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23385__auto____1;
return cljs$core$async$reduce_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_24276 = f__23497__auto__.call(null);
(statearr_24276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_24276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24289 = [];
var len__19912__auto___24341 = arguments.length;
var i__19913__auto___24342 = (0);
while(true){
if((i__19913__auto___24342 < len__19912__auto___24341)){
args24289.push((arguments[i__19913__auto___24342]));

var G__24343 = (i__19913__auto___24342 + (1));
i__19913__auto___24342 = G__24343;
continue;
} else {
}
break;
}

var G__24291 = args24289.length;
switch (G__24291) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24289.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_24316){
var state_val_24317 = (state_24316[(1)]);
if((state_val_24317 === (7))){
var inst_24298 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24318_24345 = state_24316__$1;
(statearr_24318_24345[(2)] = inst_24298);

(statearr_24318_24345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (1))){
var inst_24292 = cljs.core.seq.call(null,coll);
var inst_24293 = inst_24292;
var state_24316__$1 = (function (){var statearr_24319 = state_24316;
(statearr_24319[(7)] = inst_24293);

return statearr_24319;
})();
var statearr_24320_24346 = state_24316__$1;
(statearr_24320_24346[(2)] = null);

(statearr_24320_24346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (4))){
var inst_24293 = (state_24316[(7)]);
var inst_24296 = cljs.core.first.call(null,inst_24293);
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24316__$1,(7),ch,inst_24296);
} else {
if((state_val_24317 === (13))){
var inst_24310 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24321_24347 = state_24316__$1;
(statearr_24321_24347[(2)] = inst_24310);

(statearr_24321_24347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (6))){
var inst_24301 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
if(cljs.core.truth_(inst_24301)){
var statearr_24322_24348 = state_24316__$1;
(statearr_24322_24348[(1)] = (8));

} else {
var statearr_24323_24349 = state_24316__$1;
(statearr_24323_24349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (3))){
var inst_24314 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24316__$1,inst_24314);
} else {
if((state_val_24317 === (12))){
var state_24316__$1 = state_24316;
var statearr_24324_24350 = state_24316__$1;
(statearr_24324_24350[(2)] = null);

(statearr_24324_24350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (2))){
var inst_24293 = (state_24316[(7)]);
var state_24316__$1 = state_24316;
if(cljs.core.truth_(inst_24293)){
var statearr_24325_24351 = state_24316__$1;
(statearr_24325_24351[(1)] = (4));

} else {
var statearr_24326_24352 = state_24316__$1;
(statearr_24326_24352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (11))){
var inst_24307 = cljs.core.async.close_BANG_.call(null,ch);
var state_24316__$1 = state_24316;
var statearr_24327_24353 = state_24316__$1;
(statearr_24327_24353[(2)] = inst_24307);

(statearr_24327_24353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (9))){
var state_24316__$1 = state_24316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24328_24354 = state_24316__$1;
(statearr_24328_24354[(1)] = (11));

} else {
var statearr_24329_24355 = state_24316__$1;
(statearr_24329_24355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (5))){
var inst_24293 = (state_24316[(7)]);
var state_24316__$1 = state_24316;
var statearr_24330_24356 = state_24316__$1;
(statearr_24330_24356[(2)] = inst_24293);

(statearr_24330_24356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (10))){
var inst_24312 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24331_24357 = state_24316__$1;
(statearr_24331_24357[(2)] = inst_24312);

(statearr_24331_24357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (8))){
var inst_24293 = (state_24316[(7)]);
var inst_24303 = cljs.core.next.call(null,inst_24293);
var inst_24293__$1 = inst_24303;
var state_24316__$1 = (function (){var statearr_24332 = state_24316;
(statearr_24332[(7)] = inst_24293__$1);

return statearr_24332;
})();
var statearr_24333_24358 = state_24316__$1;
(statearr_24333_24358[(2)] = null);

(statearr_24333_24358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_24337 = [null,null,null,null,null,null,null,null];
(statearr_24337[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_24337[(1)] = (1));

return statearr_24337;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_24316){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_24316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e24338){if((e24338 instanceof Object)){
var ex__23388__auto__ = e24338;
var statearr_24339_24359 = state_24316;
(statearr_24339_24359[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24360 = state_24316;
state_24316 = G__24360;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_24316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_24316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_24340 = f__23497__auto__.call(null);
(statearr_24340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_24340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_);
} else {
var m__19507__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19507__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,ch);
} else {
var m__19507__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m);
} else {
var m__19507__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24582 = (function (mult,ch,cs,meta24583){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24583 = meta24583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24584,meta24583__$1){
var self__ = this;
var _24584__$1 = this;
return (new cljs.core.async.t_cljs$core$async24582(self__.mult,self__.ch,self__.cs,meta24583__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24584){
var self__ = this;
var _24584__$1 = this;
return self__.meta24583;
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24583","meta24583",-2083312892,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24582";

cljs.core.async.t_cljs$core$async24582.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async24582");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24582 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24582(mult__$1,ch__$1,cs__$1,meta24583){
return (new cljs.core.async.t_cljs$core$async24582(mult__$1,ch__$1,cs__$1,meta24583));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24582(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23496__auto___24803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___24803,cs,m,dchan,dctr,done){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___24803,cs,m,dchan,dctr,done){
return (function (state_24715){
var state_val_24716 = (state_24715[(1)]);
if((state_val_24716 === (7))){
var inst_24711 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24717_24804 = state_24715__$1;
(statearr_24717_24804[(2)] = inst_24711);

(statearr_24717_24804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (20))){
var inst_24616 = (state_24715[(7)]);
var inst_24626 = cljs.core.first.call(null,inst_24616);
var inst_24627 = cljs.core.nth.call(null,inst_24626,(0),null);
var inst_24628 = cljs.core.nth.call(null,inst_24626,(1),null);
var state_24715__$1 = (function (){var statearr_24718 = state_24715;
(statearr_24718[(8)] = inst_24627);

return statearr_24718;
})();
if(cljs.core.truth_(inst_24628)){
var statearr_24719_24805 = state_24715__$1;
(statearr_24719_24805[(1)] = (22));

} else {
var statearr_24720_24806 = state_24715__$1;
(statearr_24720_24806[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (27))){
var inst_24656 = (state_24715[(9)]);
var inst_24663 = (state_24715[(10)]);
var inst_24587 = (state_24715[(11)]);
var inst_24658 = (state_24715[(12)]);
var inst_24663__$1 = cljs.core._nth.call(null,inst_24656,inst_24658);
var inst_24664 = cljs.core.async.put_BANG_.call(null,inst_24663__$1,inst_24587,done);
var state_24715__$1 = (function (){var statearr_24721 = state_24715;
(statearr_24721[(10)] = inst_24663__$1);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24664)){
var statearr_24722_24807 = state_24715__$1;
(statearr_24722_24807[(1)] = (30));

} else {
var statearr_24723_24808 = state_24715__$1;
(statearr_24723_24808[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (1))){
var state_24715__$1 = state_24715;
var statearr_24724_24809 = state_24715__$1;
(statearr_24724_24809[(2)] = null);

(statearr_24724_24809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (24))){
var inst_24616 = (state_24715[(7)]);
var inst_24633 = (state_24715[(2)]);
var inst_24634 = cljs.core.next.call(null,inst_24616);
var inst_24596 = inst_24634;
var inst_24597 = null;
var inst_24598 = (0);
var inst_24599 = (0);
var state_24715__$1 = (function (){var statearr_24725 = state_24715;
(statearr_24725[(13)] = inst_24598);

(statearr_24725[(14)] = inst_24596);

(statearr_24725[(15)] = inst_24633);

(statearr_24725[(16)] = inst_24599);

(statearr_24725[(17)] = inst_24597);

return statearr_24725;
})();
var statearr_24726_24810 = state_24715__$1;
(statearr_24726_24810[(2)] = null);

(statearr_24726_24810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (39))){
var state_24715__$1 = state_24715;
var statearr_24730_24811 = state_24715__$1;
(statearr_24730_24811[(2)] = null);

(statearr_24730_24811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (4))){
var inst_24587 = (state_24715[(11)]);
var inst_24587__$1 = (state_24715[(2)]);
var inst_24588 = (inst_24587__$1 == null);
var state_24715__$1 = (function (){var statearr_24731 = state_24715;
(statearr_24731[(11)] = inst_24587__$1);

return statearr_24731;
})();
if(cljs.core.truth_(inst_24588)){
var statearr_24732_24812 = state_24715__$1;
(statearr_24732_24812[(1)] = (5));

} else {
var statearr_24733_24813 = state_24715__$1;
(statearr_24733_24813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (15))){
var inst_24598 = (state_24715[(13)]);
var inst_24596 = (state_24715[(14)]);
var inst_24599 = (state_24715[(16)]);
var inst_24597 = (state_24715[(17)]);
var inst_24612 = (state_24715[(2)]);
var inst_24613 = (inst_24599 + (1));
var tmp24727 = inst_24598;
var tmp24728 = inst_24596;
var tmp24729 = inst_24597;
var inst_24596__$1 = tmp24728;
var inst_24597__$1 = tmp24729;
var inst_24598__$1 = tmp24727;
var inst_24599__$1 = inst_24613;
var state_24715__$1 = (function (){var statearr_24734 = state_24715;
(statearr_24734[(13)] = inst_24598__$1);

(statearr_24734[(18)] = inst_24612);

(statearr_24734[(14)] = inst_24596__$1);

(statearr_24734[(16)] = inst_24599__$1);

(statearr_24734[(17)] = inst_24597__$1);

return statearr_24734;
})();
var statearr_24735_24814 = state_24715__$1;
(statearr_24735_24814[(2)] = null);

(statearr_24735_24814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (21))){
var inst_24637 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24739_24815 = state_24715__$1;
(statearr_24739_24815[(2)] = inst_24637);

(statearr_24739_24815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (31))){
var inst_24663 = (state_24715[(10)]);
var inst_24667 = done.call(null,null);
var inst_24668 = cljs.core.async.untap_STAR_.call(null,m,inst_24663);
var state_24715__$1 = (function (){var statearr_24740 = state_24715;
(statearr_24740[(19)] = inst_24667);

return statearr_24740;
})();
var statearr_24741_24816 = state_24715__$1;
(statearr_24741_24816[(2)] = inst_24668);

(statearr_24741_24816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (32))){
var inst_24656 = (state_24715[(9)]);
var inst_24657 = (state_24715[(20)]);
var inst_24655 = (state_24715[(21)]);
var inst_24658 = (state_24715[(12)]);
var inst_24670 = (state_24715[(2)]);
var inst_24671 = (inst_24658 + (1));
var tmp24736 = inst_24656;
var tmp24737 = inst_24657;
var tmp24738 = inst_24655;
var inst_24655__$1 = tmp24738;
var inst_24656__$1 = tmp24736;
var inst_24657__$1 = tmp24737;
var inst_24658__$1 = inst_24671;
var state_24715__$1 = (function (){var statearr_24742 = state_24715;
(statearr_24742[(9)] = inst_24656__$1);

(statearr_24742[(20)] = inst_24657__$1);

(statearr_24742[(22)] = inst_24670);

(statearr_24742[(21)] = inst_24655__$1);

(statearr_24742[(12)] = inst_24658__$1);

return statearr_24742;
})();
var statearr_24743_24817 = state_24715__$1;
(statearr_24743_24817[(2)] = null);

(statearr_24743_24817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (40))){
var inst_24683 = (state_24715[(23)]);
var inst_24687 = done.call(null,null);
var inst_24688 = cljs.core.async.untap_STAR_.call(null,m,inst_24683);
var state_24715__$1 = (function (){var statearr_24744 = state_24715;
(statearr_24744[(24)] = inst_24687);

return statearr_24744;
})();
var statearr_24745_24818 = state_24715__$1;
(statearr_24745_24818[(2)] = inst_24688);

(statearr_24745_24818[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (33))){
var inst_24674 = (state_24715[(25)]);
var inst_24676 = cljs.core.chunked_seq_QMARK_.call(null,inst_24674);
var state_24715__$1 = state_24715;
if(inst_24676){
var statearr_24746_24819 = state_24715__$1;
(statearr_24746_24819[(1)] = (36));

} else {
var statearr_24747_24820 = state_24715__$1;
(statearr_24747_24820[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (13))){
var inst_24606 = (state_24715[(26)]);
var inst_24609 = cljs.core.async.close_BANG_.call(null,inst_24606);
var state_24715__$1 = state_24715;
var statearr_24748_24821 = state_24715__$1;
(statearr_24748_24821[(2)] = inst_24609);

(statearr_24748_24821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (22))){
var inst_24627 = (state_24715[(8)]);
var inst_24630 = cljs.core.async.close_BANG_.call(null,inst_24627);
var state_24715__$1 = state_24715;
var statearr_24749_24822 = state_24715__$1;
(statearr_24749_24822[(2)] = inst_24630);

(statearr_24749_24822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (36))){
var inst_24674 = (state_24715[(25)]);
var inst_24678 = cljs.core.chunk_first.call(null,inst_24674);
var inst_24679 = cljs.core.chunk_rest.call(null,inst_24674);
var inst_24680 = cljs.core.count.call(null,inst_24678);
var inst_24655 = inst_24679;
var inst_24656 = inst_24678;
var inst_24657 = inst_24680;
var inst_24658 = (0);
var state_24715__$1 = (function (){var statearr_24750 = state_24715;
(statearr_24750[(9)] = inst_24656);

(statearr_24750[(20)] = inst_24657);

(statearr_24750[(21)] = inst_24655);

(statearr_24750[(12)] = inst_24658);

return statearr_24750;
})();
var statearr_24751_24823 = state_24715__$1;
(statearr_24751_24823[(2)] = null);

(statearr_24751_24823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (41))){
var inst_24674 = (state_24715[(25)]);
var inst_24690 = (state_24715[(2)]);
var inst_24691 = cljs.core.next.call(null,inst_24674);
var inst_24655 = inst_24691;
var inst_24656 = null;
var inst_24657 = (0);
var inst_24658 = (0);
var state_24715__$1 = (function (){var statearr_24752 = state_24715;
(statearr_24752[(9)] = inst_24656);

(statearr_24752[(20)] = inst_24657);

(statearr_24752[(21)] = inst_24655);

(statearr_24752[(27)] = inst_24690);

(statearr_24752[(12)] = inst_24658);

return statearr_24752;
})();
var statearr_24753_24824 = state_24715__$1;
(statearr_24753_24824[(2)] = null);

(statearr_24753_24824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (43))){
var state_24715__$1 = state_24715;
var statearr_24754_24825 = state_24715__$1;
(statearr_24754_24825[(2)] = null);

(statearr_24754_24825[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (29))){
var inst_24699 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24755_24826 = state_24715__$1;
(statearr_24755_24826[(2)] = inst_24699);

(statearr_24755_24826[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (44))){
var inst_24708 = (state_24715[(2)]);
var state_24715__$1 = (function (){var statearr_24756 = state_24715;
(statearr_24756[(28)] = inst_24708);

return statearr_24756;
})();
var statearr_24757_24827 = state_24715__$1;
(statearr_24757_24827[(2)] = null);

(statearr_24757_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (6))){
var inst_24647 = (state_24715[(29)]);
var inst_24646 = cljs.core.deref.call(null,cs);
var inst_24647__$1 = cljs.core.keys.call(null,inst_24646);
var inst_24648 = cljs.core.count.call(null,inst_24647__$1);
var inst_24649 = cljs.core.reset_BANG_.call(null,dctr,inst_24648);
var inst_24654 = cljs.core.seq.call(null,inst_24647__$1);
var inst_24655 = inst_24654;
var inst_24656 = null;
var inst_24657 = (0);
var inst_24658 = (0);
var state_24715__$1 = (function (){var statearr_24758 = state_24715;
(statearr_24758[(9)] = inst_24656);

(statearr_24758[(20)] = inst_24657);

(statearr_24758[(29)] = inst_24647__$1);

(statearr_24758[(21)] = inst_24655);

(statearr_24758[(30)] = inst_24649);

(statearr_24758[(12)] = inst_24658);

return statearr_24758;
})();
var statearr_24759_24828 = state_24715__$1;
(statearr_24759_24828[(2)] = null);

(statearr_24759_24828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (28))){
var inst_24655 = (state_24715[(21)]);
var inst_24674 = (state_24715[(25)]);
var inst_24674__$1 = cljs.core.seq.call(null,inst_24655);
var state_24715__$1 = (function (){var statearr_24760 = state_24715;
(statearr_24760[(25)] = inst_24674__$1);

return statearr_24760;
})();
if(inst_24674__$1){
var statearr_24761_24829 = state_24715__$1;
(statearr_24761_24829[(1)] = (33));

} else {
var statearr_24762_24830 = state_24715__$1;
(statearr_24762_24830[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (25))){
var inst_24657 = (state_24715[(20)]);
var inst_24658 = (state_24715[(12)]);
var inst_24660 = (inst_24658 < inst_24657);
var inst_24661 = inst_24660;
var state_24715__$1 = state_24715;
if(cljs.core.truth_(inst_24661)){
var statearr_24763_24831 = state_24715__$1;
(statearr_24763_24831[(1)] = (27));

} else {
var statearr_24764_24832 = state_24715__$1;
(statearr_24764_24832[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (34))){
var state_24715__$1 = state_24715;
var statearr_24765_24833 = state_24715__$1;
(statearr_24765_24833[(2)] = null);

(statearr_24765_24833[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (17))){
var state_24715__$1 = state_24715;
var statearr_24766_24834 = state_24715__$1;
(statearr_24766_24834[(2)] = null);

(statearr_24766_24834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (3))){
var inst_24713 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24715__$1,inst_24713);
} else {
if((state_val_24716 === (12))){
var inst_24642 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24767_24835 = state_24715__$1;
(statearr_24767_24835[(2)] = inst_24642);

(statearr_24767_24835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (2))){
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24715__$1,(4),ch);
} else {
if((state_val_24716 === (23))){
var state_24715__$1 = state_24715;
var statearr_24768_24836 = state_24715__$1;
(statearr_24768_24836[(2)] = null);

(statearr_24768_24836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (35))){
var inst_24697 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24769_24837 = state_24715__$1;
(statearr_24769_24837[(2)] = inst_24697);

(statearr_24769_24837[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (19))){
var inst_24616 = (state_24715[(7)]);
var inst_24620 = cljs.core.chunk_first.call(null,inst_24616);
var inst_24621 = cljs.core.chunk_rest.call(null,inst_24616);
var inst_24622 = cljs.core.count.call(null,inst_24620);
var inst_24596 = inst_24621;
var inst_24597 = inst_24620;
var inst_24598 = inst_24622;
var inst_24599 = (0);
var state_24715__$1 = (function (){var statearr_24770 = state_24715;
(statearr_24770[(13)] = inst_24598);

(statearr_24770[(14)] = inst_24596);

(statearr_24770[(16)] = inst_24599);

(statearr_24770[(17)] = inst_24597);

return statearr_24770;
})();
var statearr_24771_24838 = state_24715__$1;
(statearr_24771_24838[(2)] = null);

(statearr_24771_24838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (11))){
var inst_24596 = (state_24715[(14)]);
var inst_24616 = (state_24715[(7)]);
var inst_24616__$1 = cljs.core.seq.call(null,inst_24596);
var state_24715__$1 = (function (){var statearr_24772 = state_24715;
(statearr_24772[(7)] = inst_24616__$1);

return statearr_24772;
})();
if(inst_24616__$1){
var statearr_24773_24839 = state_24715__$1;
(statearr_24773_24839[(1)] = (16));

} else {
var statearr_24774_24840 = state_24715__$1;
(statearr_24774_24840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (9))){
var inst_24644 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24775_24841 = state_24715__$1;
(statearr_24775_24841[(2)] = inst_24644);

(statearr_24775_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (5))){
var inst_24594 = cljs.core.deref.call(null,cs);
var inst_24595 = cljs.core.seq.call(null,inst_24594);
var inst_24596 = inst_24595;
var inst_24597 = null;
var inst_24598 = (0);
var inst_24599 = (0);
var state_24715__$1 = (function (){var statearr_24776 = state_24715;
(statearr_24776[(13)] = inst_24598);

(statearr_24776[(14)] = inst_24596);

(statearr_24776[(16)] = inst_24599);

(statearr_24776[(17)] = inst_24597);

return statearr_24776;
})();
var statearr_24777_24842 = state_24715__$1;
(statearr_24777_24842[(2)] = null);

(statearr_24777_24842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (14))){
var state_24715__$1 = state_24715;
var statearr_24778_24843 = state_24715__$1;
(statearr_24778_24843[(2)] = null);

(statearr_24778_24843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (45))){
var inst_24705 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24779_24844 = state_24715__$1;
(statearr_24779_24844[(2)] = inst_24705);

(statearr_24779_24844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (26))){
var inst_24647 = (state_24715[(29)]);
var inst_24701 = (state_24715[(2)]);
var inst_24702 = cljs.core.seq.call(null,inst_24647);
var state_24715__$1 = (function (){var statearr_24780 = state_24715;
(statearr_24780[(31)] = inst_24701);

return statearr_24780;
})();
if(inst_24702){
var statearr_24781_24845 = state_24715__$1;
(statearr_24781_24845[(1)] = (42));

} else {
var statearr_24782_24846 = state_24715__$1;
(statearr_24782_24846[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (16))){
var inst_24616 = (state_24715[(7)]);
var inst_24618 = cljs.core.chunked_seq_QMARK_.call(null,inst_24616);
var state_24715__$1 = state_24715;
if(inst_24618){
var statearr_24783_24847 = state_24715__$1;
(statearr_24783_24847[(1)] = (19));

} else {
var statearr_24784_24848 = state_24715__$1;
(statearr_24784_24848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (38))){
var inst_24694 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24785_24849 = state_24715__$1;
(statearr_24785_24849[(2)] = inst_24694);

(statearr_24785_24849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (30))){
var state_24715__$1 = state_24715;
var statearr_24786_24850 = state_24715__$1;
(statearr_24786_24850[(2)] = null);

(statearr_24786_24850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (10))){
var inst_24599 = (state_24715[(16)]);
var inst_24597 = (state_24715[(17)]);
var inst_24605 = cljs.core._nth.call(null,inst_24597,inst_24599);
var inst_24606 = cljs.core.nth.call(null,inst_24605,(0),null);
var inst_24607 = cljs.core.nth.call(null,inst_24605,(1),null);
var state_24715__$1 = (function (){var statearr_24787 = state_24715;
(statearr_24787[(26)] = inst_24606);

return statearr_24787;
})();
if(cljs.core.truth_(inst_24607)){
var statearr_24788_24851 = state_24715__$1;
(statearr_24788_24851[(1)] = (13));

} else {
var statearr_24789_24852 = state_24715__$1;
(statearr_24789_24852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (18))){
var inst_24640 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24790_24853 = state_24715__$1;
(statearr_24790_24853[(2)] = inst_24640);

(statearr_24790_24853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (42))){
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24715__$1,(45),dchan);
} else {
if((state_val_24716 === (37))){
var inst_24683 = (state_24715[(23)]);
var inst_24674 = (state_24715[(25)]);
var inst_24587 = (state_24715[(11)]);
var inst_24683__$1 = cljs.core.first.call(null,inst_24674);
var inst_24684 = cljs.core.async.put_BANG_.call(null,inst_24683__$1,inst_24587,done);
var state_24715__$1 = (function (){var statearr_24791 = state_24715;
(statearr_24791[(23)] = inst_24683__$1);

return statearr_24791;
})();
if(cljs.core.truth_(inst_24684)){
var statearr_24792_24854 = state_24715__$1;
(statearr_24792_24854[(1)] = (39));

} else {
var statearr_24793_24855 = state_24715__$1;
(statearr_24793_24855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (8))){
var inst_24598 = (state_24715[(13)]);
var inst_24599 = (state_24715[(16)]);
var inst_24601 = (inst_24599 < inst_24598);
var inst_24602 = inst_24601;
var state_24715__$1 = state_24715;
if(cljs.core.truth_(inst_24602)){
var statearr_24794_24856 = state_24715__$1;
(statearr_24794_24856[(1)] = (10));

} else {
var statearr_24795_24857 = state_24715__$1;
(statearr_24795_24857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___24803,cs,m,dchan,dctr,done))
;
return ((function (switch__23384__auto__,c__23496__auto___24803,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23385__auto__ = null;
var cljs$core$async$mult_$_state_machine__23385__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24799[(0)] = cljs$core$async$mult_$_state_machine__23385__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var cljs$core$async$mult_$_state_machine__23385__auto____1 = (function (state_24715){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_24715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__23388__auto__ = e24800;
var statearr_24801_24858 = state_24715;
(statearr_24801_24858[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24859 = state_24715;
state_24715 = G__24859;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23385__auto__ = function(state_24715){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23385__auto____1.call(this,state_24715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23385__auto____0;
cljs$core$async$mult_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23385__auto____1;
return cljs$core$async$mult_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___24803,cs,m,dchan,dctr,done))
})();
var state__23498__auto__ = (function (){var statearr_24802 = f__23497__auto__.call(null);
(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___24803);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___24803,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24860 = [];
var len__19912__auto___24863 = arguments.length;
var i__19913__auto___24864 = (0);
while(true){
if((i__19913__auto___24864 < len__19912__auto___24863)){
args24860.push((arguments[i__19913__auto___24864]));

var G__24865 = (i__19913__auto___24864 + (1));
i__19913__auto___24864 = G__24865;
continue;
} else {
}
break;
}

var G__24862 = args24860.length;
switch (G__24862) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24860.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,ch);
} else {
var m__19507__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,ch);
} else {
var m__19507__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m);
} else {
var m__19507__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,state_map);
} else {
var m__19507__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19506__auto__ = (((m == null))?null:m);
var m__19507__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,m,mode);
} else {
var m__19507__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19919__auto__ = [];
var len__19912__auto___24877 = arguments.length;
var i__19913__auto___24878 = (0);
while(true){
if((i__19913__auto___24878 < len__19912__auto___24877)){
args__19919__auto__.push((arguments[i__19913__auto___24878]));

var G__24879 = (i__19913__auto___24878 + (1));
i__19913__auto___24878 = G__24879;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((3) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19920__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24871){
var map__24872 = p__24871;
var map__24872__$1 = ((((!((map__24872 == null)))?((((map__24872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24872):map__24872);
var opts = map__24872__$1;
var statearr_24874_24880 = state;
(statearr_24874_24880[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24872,map__24872__$1,opts){
return (function (val){
var statearr_24875_24881 = state;
(statearr_24875_24881[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24872,map__24872__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24876_24882 = state;
(statearr_24876_24882[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24867){
var G__24868 = cljs.core.first.call(null,seq24867);
var seq24867__$1 = cljs.core.next.call(null,seq24867);
var G__24869 = cljs.core.first.call(null,seq24867__$1);
var seq24867__$2 = cljs.core.next.call(null,seq24867__$1);
var G__24870 = cljs.core.first.call(null,seq24867__$2);
var seq24867__$3 = cljs.core.next.call(null,seq24867__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24868,G__24869,G__24870,seq24867__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25046 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25047){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25047 = meta25047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25048,meta25047__$1){
var self__ = this;
var _25048__$1 = this;
return (new cljs.core.async.t_cljs$core$async25046(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25047__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25048){
var self__ = this;
var _25048__$1 = this;
return self__.meta25047;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25047","meta25047",-1355935652,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25046";

cljs.core.async.t_cljs$core$async25046.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25046");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25046 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25046(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25047){
return (new cljs.core.async.t_cljs$core$async25046(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25047));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25046(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23496__auto___25209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25146){
var state_val_25147 = (state_25146[(1)]);
if((state_val_25147 === (7))){
var inst_25064 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25148_25210 = state_25146__$1;
(statearr_25148_25210[(2)] = inst_25064);

(statearr_25148_25210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (20))){
var inst_25076 = (state_25146[(7)]);
var state_25146__$1 = state_25146;
var statearr_25149_25211 = state_25146__$1;
(statearr_25149_25211[(2)] = inst_25076);

(statearr_25149_25211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (27))){
var state_25146__$1 = state_25146;
var statearr_25150_25212 = state_25146__$1;
(statearr_25150_25212[(2)] = null);

(statearr_25150_25212[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (1))){
var inst_25052 = (state_25146[(8)]);
var inst_25052__$1 = calc_state.call(null);
var inst_25054 = (inst_25052__$1 == null);
var inst_25055 = cljs.core.not.call(null,inst_25054);
var state_25146__$1 = (function (){var statearr_25151 = state_25146;
(statearr_25151[(8)] = inst_25052__$1);

return statearr_25151;
})();
if(inst_25055){
var statearr_25152_25213 = state_25146__$1;
(statearr_25152_25213[(1)] = (2));

} else {
var statearr_25153_25214 = state_25146__$1;
(statearr_25153_25214[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (24))){
var inst_25106 = (state_25146[(9)]);
var inst_25099 = (state_25146[(10)]);
var inst_25120 = (state_25146[(11)]);
var inst_25120__$1 = inst_25099.call(null,inst_25106);
var state_25146__$1 = (function (){var statearr_25154 = state_25146;
(statearr_25154[(11)] = inst_25120__$1);

return statearr_25154;
})();
if(cljs.core.truth_(inst_25120__$1)){
var statearr_25155_25215 = state_25146__$1;
(statearr_25155_25215[(1)] = (29));

} else {
var statearr_25156_25216 = state_25146__$1;
(statearr_25156_25216[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (4))){
var inst_25067 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25067)){
var statearr_25157_25217 = state_25146__$1;
(statearr_25157_25217[(1)] = (8));

} else {
var statearr_25158_25218 = state_25146__$1;
(statearr_25158_25218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (15))){
var inst_25093 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25093)){
var statearr_25159_25219 = state_25146__$1;
(statearr_25159_25219[(1)] = (19));

} else {
var statearr_25160_25220 = state_25146__$1;
(statearr_25160_25220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (21))){
var inst_25098 = (state_25146[(12)]);
var inst_25098__$1 = (state_25146[(2)]);
var inst_25099 = cljs.core.get.call(null,inst_25098__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25100 = cljs.core.get.call(null,inst_25098__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25101 = cljs.core.get.call(null,inst_25098__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25146__$1 = (function (){var statearr_25161 = state_25146;
(statearr_25161[(13)] = inst_25100);

(statearr_25161[(12)] = inst_25098__$1);

(statearr_25161[(10)] = inst_25099);

return statearr_25161;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25146__$1,(22),inst_25101);
} else {
if((state_val_25147 === (31))){
var inst_25128 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25128)){
var statearr_25162_25221 = state_25146__$1;
(statearr_25162_25221[(1)] = (32));

} else {
var statearr_25163_25222 = state_25146__$1;
(statearr_25163_25222[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (32))){
var inst_25105 = (state_25146[(14)]);
var state_25146__$1 = state_25146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25146__$1,(35),out,inst_25105);
} else {
if((state_val_25147 === (33))){
var inst_25098 = (state_25146[(12)]);
var inst_25076 = inst_25098;
var state_25146__$1 = (function (){var statearr_25164 = state_25146;
(statearr_25164[(7)] = inst_25076);

return statearr_25164;
})();
var statearr_25165_25223 = state_25146__$1;
(statearr_25165_25223[(2)] = null);

(statearr_25165_25223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (13))){
var inst_25076 = (state_25146[(7)]);
var inst_25083 = inst_25076.cljs$lang$protocol_mask$partition0$;
var inst_25084 = (inst_25083 & (64));
var inst_25085 = inst_25076.cljs$core$ISeq$;
var inst_25086 = (inst_25084) || (inst_25085);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25086)){
var statearr_25166_25224 = state_25146__$1;
(statearr_25166_25224[(1)] = (16));

} else {
var statearr_25167_25225 = state_25146__$1;
(statearr_25167_25225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (22))){
var inst_25106 = (state_25146[(9)]);
var inst_25105 = (state_25146[(14)]);
var inst_25104 = (state_25146[(2)]);
var inst_25105__$1 = cljs.core.nth.call(null,inst_25104,(0),null);
var inst_25106__$1 = cljs.core.nth.call(null,inst_25104,(1),null);
var inst_25107 = (inst_25105__$1 == null);
var inst_25108 = cljs.core._EQ_.call(null,inst_25106__$1,change);
var inst_25109 = (inst_25107) || (inst_25108);
var state_25146__$1 = (function (){var statearr_25168 = state_25146;
(statearr_25168[(9)] = inst_25106__$1);

(statearr_25168[(14)] = inst_25105__$1);

return statearr_25168;
})();
if(cljs.core.truth_(inst_25109)){
var statearr_25169_25226 = state_25146__$1;
(statearr_25169_25226[(1)] = (23));

} else {
var statearr_25170_25227 = state_25146__$1;
(statearr_25170_25227[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (36))){
var inst_25098 = (state_25146[(12)]);
var inst_25076 = inst_25098;
var state_25146__$1 = (function (){var statearr_25171 = state_25146;
(statearr_25171[(7)] = inst_25076);

return statearr_25171;
})();
var statearr_25172_25228 = state_25146__$1;
(statearr_25172_25228[(2)] = null);

(statearr_25172_25228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (29))){
var inst_25120 = (state_25146[(11)]);
var state_25146__$1 = state_25146;
var statearr_25173_25229 = state_25146__$1;
(statearr_25173_25229[(2)] = inst_25120);

(statearr_25173_25229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (6))){
var state_25146__$1 = state_25146;
var statearr_25174_25230 = state_25146__$1;
(statearr_25174_25230[(2)] = false);

(statearr_25174_25230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (28))){
var inst_25116 = (state_25146[(2)]);
var inst_25117 = calc_state.call(null);
var inst_25076 = inst_25117;
var state_25146__$1 = (function (){var statearr_25175 = state_25146;
(statearr_25175[(15)] = inst_25116);

(statearr_25175[(7)] = inst_25076);

return statearr_25175;
})();
var statearr_25176_25231 = state_25146__$1;
(statearr_25176_25231[(2)] = null);

(statearr_25176_25231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (25))){
var inst_25142 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25177_25232 = state_25146__$1;
(statearr_25177_25232[(2)] = inst_25142);

(statearr_25177_25232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (34))){
var inst_25140 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25178_25233 = state_25146__$1;
(statearr_25178_25233[(2)] = inst_25140);

(statearr_25178_25233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (17))){
var state_25146__$1 = state_25146;
var statearr_25179_25234 = state_25146__$1;
(statearr_25179_25234[(2)] = false);

(statearr_25179_25234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (3))){
var state_25146__$1 = state_25146;
var statearr_25180_25235 = state_25146__$1;
(statearr_25180_25235[(2)] = false);

(statearr_25180_25235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (12))){
var inst_25144 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25146__$1,inst_25144);
} else {
if((state_val_25147 === (2))){
var inst_25052 = (state_25146[(8)]);
var inst_25057 = inst_25052.cljs$lang$protocol_mask$partition0$;
var inst_25058 = (inst_25057 & (64));
var inst_25059 = inst_25052.cljs$core$ISeq$;
var inst_25060 = (inst_25058) || (inst_25059);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25060)){
var statearr_25181_25236 = state_25146__$1;
(statearr_25181_25236[(1)] = (5));

} else {
var statearr_25182_25237 = state_25146__$1;
(statearr_25182_25237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (23))){
var inst_25105 = (state_25146[(14)]);
var inst_25111 = (inst_25105 == null);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25111)){
var statearr_25183_25238 = state_25146__$1;
(statearr_25183_25238[(1)] = (26));

} else {
var statearr_25184_25239 = state_25146__$1;
(statearr_25184_25239[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (35))){
var inst_25131 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25131)){
var statearr_25185_25240 = state_25146__$1;
(statearr_25185_25240[(1)] = (36));

} else {
var statearr_25186_25241 = state_25146__$1;
(statearr_25186_25241[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (19))){
var inst_25076 = (state_25146[(7)]);
var inst_25095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25076);
var state_25146__$1 = state_25146;
var statearr_25187_25242 = state_25146__$1;
(statearr_25187_25242[(2)] = inst_25095);

(statearr_25187_25242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (11))){
var inst_25076 = (state_25146[(7)]);
var inst_25080 = (inst_25076 == null);
var inst_25081 = cljs.core.not.call(null,inst_25080);
var state_25146__$1 = state_25146;
if(inst_25081){
var statearr_25188_25243 = state_25146__$1;
(statearr_25188_25243[(1)] = (13));

} else {
var statearr_25189_25244 = state_25146__$1;
(statearr_25189_25244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (9))){
var inst_25052 = (state_25146[(8)]);
var state_25146__$1 = state_25146;
var statearr_25190_25245 = state_25146__$1;
(statearr_25190_25245[(2)] = inst_25052);

(statearr_25190_25245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (5))){
var state_25146__$1 = state_25146;
var statearr_25191_25246 = state_25146__$1;
(statearr_25191_25246[(2)] = true);

(statearr_25191_25246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (14))){
var state_25146__$1 = state_25146;
var statearr_25192_25247 = state_25146__$1;
(statearr_25192_25247[(2)] = false);

(statearr_25192_25247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (26))){
var inst_25106 = (state_25146[(9)]);
var inst_25113 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25106);
var state_25146__$1 = state_25146;
var statearr_25193_25248 = state_25146__$1;
(statearr_25193_25248[(2)] = inst_25113);

(statearr_25193_25248[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (16))){
var state_25146__$1 = state_25146;
var statearr_25194_25249 = state_25146__$1;
(statearr_25194_25249[(2)] = true);

(statearr_25194_25249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (38))){
var inst_25136 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25195_25250 = state_25146__$1;
(statearr_25195_25250[(2)] = inst_25136);

(statearr_25195_25250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (30))){
var inst_25106 = (state_25146[(9)]);
var inst_25100 = (state_25146[(13)]);
var inst_25099 = (state_25146[(10)]);
var inst_25123 = cljs.core.empty_QMARK_.call(null,inst_25099);
var inst_25124 = inst_25100.call(null,inst_25106);
var inst_25125 = cljs.core.not.call(null,inst_25124);
var inst_25126 = (inst_25123) && (inst_25125);
var state_25146__$1 = state_25146;
var statearr_25196_25251 = state_25146__$1;
(statearr_25196_25251[(2)] = inst_25126);

(statearr_25196_25251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (10))){
var inst_25052 = (state_25146[(8)]);
var inst_25072 = (state_25146[(2)]);
var inst_25073 = cljs.core.get.call(null,inst_25072,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25074 = cljs.core.get.call(null,inst_25072,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25075 = cljs.core.get.call(null,inst_25072,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25076 = inst_25052;
var state_25146__$1 = (function (){var statearr_25197 = state_25146;
(statearr_25197[(16)] = inst_25074);

(statearr_25197[(7)] = inst_25076);

(statearr_25197[(17)] = inst_25073);

(statearr_25197[(18)] = inst_25075);

return statearr_25197;
})();
var statearr_25198_25252 = state_25146__$1;
(statearr_25198_25252[(2)] = null);

(statearr_25198_25252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (18))){
var inst_25090 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25199_25253 = state_25146__$1;
(statearr_25199_25253[(2)] = inst_25090);

(statearr_25199_25253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (37))){
var state_25146__$1 = state_25146;
var statearr_25200_25254 = state_25146__$1;
(statearr_25200_25254[(2)] = null);

(statearr_25200_25254[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (8))){
var inst_25052 = (state_25146[(8)]);
var inst_25069 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25052);
var state_25146__$1 = state_25146;
var statearr_25201_25255 = state_25146__$1;
(statearr_25201_25255[(2)] = inst_25069);

(statearr_25201_25255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23384__auto__,c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23385__auto__ = null;
var cljs$core$async$mix_$_state_machine__23385__auto____0 = (function (){
var statearr_25205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25205[(0)] = cljs$core$async$mix_$_state_machine__23385__auto__);

(statearr_25205[(1)] = (1));

return statearr_25205;
});
var cljs$core$async$mix_$_state_machine__23385__auto____1 = (function (state_25146){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25206){if((e25206 instanceof Object)){
var ex__23388__auto__ = e25206;
var statearr_25207_25256 = state_25146;
(statearr_25207_25256[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25257 = state_25146;
state_25146 = G__25257;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23385__auto__ = function(state_25146){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23385__auto____1.call(this,state_25146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23385__auto____0;
cljs$core$async$mix_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23385__auto____1;
return cljs$core$async$mix_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23498__auto__ = (function (){var statearr_25208 = f__23497__auto__.call(null);
(statearr_25208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25209);

return statearr_25208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25209,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19506__auto__ = (((p == null))?null:p);
var m__19507__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19507__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19506__auto__ = (((p == null))?null:p);
var m__19507__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,p,v,ch);
} else {
var m__19507__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25258 = [];
var len__19912__auto___25261 = arguments.length;
var i__19913__auto___25262 = (0);
while(true){
if((i__19913__auto___25262 < len__19912__auto___25261)){
args25258.push((arguments[i__19913__auto___25262]));

var G__25263 = (i__19913__auto___25262 + (1));
i__19913__auto___25262 = G__25263;
continue;
} else {
}
break;
}

var G__25260 = args25258.length;
switch (G__25260) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25258.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19506__auto__ = (((p == null))?null:p);
var m__19507__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,p);
} else {
var m__19507__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19506__auto__ = (((p == null))?null:p);
var m__19507__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,p,v);
} else {
var m__19507__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25266 = [];
var len__19912__auto___25391 = arguments.length;
var i__19913__auto___25392 = (0);
while(true){
if((i__19913__auto___25392 < len__19912__auto___25391)){
args25266.push((arguments[i__19913__auto___25392]));

var G__25393 = (i__19913__auto___25392 + (1));
i__19913__auto___25392 = G__25393;
continue;
} else {
}
break;
}

var G__25268 = args25266.length;
switch (G__25268) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25266.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18843__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18843__auto__,mults){
return (function (p1__25265_SHARP_){
if(cljs.core.truth_(p1__25265_SHARP_.call(null,topic))){
return p1__25265_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25265_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18843__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25269 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25270){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25270 = meta25270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25271,meta25270__$1){
var self__ = this;
var _25271__$1 = this;
return (new cljs.core.async.t_cljs$core$async25269(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25270__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25271){
var self__ = this;
var _25271__$1 = this;
return self__.meta25270;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25270","meta25270",-2106600825,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25269";

cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25269");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25269 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25270){
return (new cljs.core.async.t_cljs$core$async25269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25270));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25269(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23496__auto___25395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25395,mults,ensure_mult,p){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25395,mults,ensure_mult,p){
return (function (state_25343){
var state_val_25344 = (state_25343[(1)]);
if((state_val_25344 === (7))){
var inst_25339 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25345_25396 = state_25343__$1;
(statearr_25345_25396[(2)] = inst_25339);

(statearr_25345_25396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (20))){
var state_25343__$1 = state_25343;
var statearr_25346_25397 = state_25343__$1;
(statearr_25346_25397[(2)] = null);

(statearr_25346_25397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (1))){
var state_25343__$1 = state_25343;
var statearr_25347_25398 = state_25343__$1;
(statearr_25347_25398[(2)] = null);

(statearr_25347_25398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (24))){
var inst_25322 = (state_25343[(7)]);
var inst_25331 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25322);
var state_25343__$1 = state_25343;
var statearr_25348_25399 = state_25343__$1;
(statearr_25348_25399[(2)] = inst_25331);

(statearr_25348_25399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (4))){
var inst_25274 = (state_25343[(8)]);
var inst_25274__$1 = (state_25343[(2)]);
var inst_25275 = (inst_25274__$1 == null);
var state_25343__$1 = (function (){var statearr_25349 = state_25343;
(statearr_25349[(8)] = inst_25274__$1);

return statearr_25349;
})();
if(cljs.core.truth_(inst_25275)){
var statearr_25350_25400 = state_25343__$1;
(statearr_25350_25400[(1)] = (5));

} else {
var statearr_25351_25401 = state_25343__$1;
(statearr_25351_25401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (15))){
var inst_25316 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25352_25402 = state_25343__$1;
(statearr_25352_25402[(2)] = inst_25316);

(statearr_25352_25402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (21))){
var inst_25336 = (state_25343[(2)]);
var state_25343__$1 = (function (){var statearr_25353 = state_25343;
(statearr_25353[(9)] = inst_25336);

return statearr_25353;
})();
var statearr_25354_25403 = state_25343__$1;
(statearr_25354_25403[(2)] = null);

(statearr_25354_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (13))){
var inst_25298 = (state_25343[(10)]);
var inst_25300 = cljs.core.chunked_seq_QMARK_.call(null,inst_25298);
var state_25343__$1 = state_25343;
if(inst_25300){
var statearr_25355_25404 = state_25343__$1;
(statearr_25355_25404[(1)] = (16));

} else {
var statearr_25356_25405 = state_25343__$1;
(statearr_25356_25405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (22))){
var inst_25328 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
if(cljs.core.truth_(inst_25328)){
var statearr_25357_25406 = state_25343__$1;
(statearr_25357_25406[(1)] = (23));

} else {
var statearr_25358_25407 = state_25343__$1;
(statearr_25358_25407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (6))){
var inst_25324 = (state_25343[(11)]);
var inst_25322 = (state_25343[(7)]);
var inst_25274 = (state_25343[(8)]);
var inst_25322__$1 = topic_fn.call(null,inst_25274);
var inst_25323 = cljs.core.deref.call(null,mults);
var inst_25324__$1 = cljs.core.get.call(null,inst_25323,inst_25322__$1);
var state_25343__$1 = (function (){var statearr_25359 = state_25343;
(statearr_25359[(11)] = inst_25324__$1);

(statearr_25359[(7)] = inst_25322__$1);

return statearr_25359;
})();
if(cljs.core.truth_(inst_25324__$1)){
var statearr_25360_25408 = state_25343__$1;
(statearr_25360_25408[(1)] = (19));

} else {
var statearr_25361_25409 = state_25343__$1;
(statearr_25361_25409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (25))){
var inst_25333 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25362_25410 = state_25343__$1;
(statearr_25362_25410[(2)] = inst_25333);

(statearr_25362_25410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (17))){
var inst_25298 = (state_25343[(10)]);
var inst_25307 = cljs.core.first.call(null,inst_25298);
var inst_25308 = cljs.core.async.muxch_STAR_.call(null,inst_25307);
var inst_25309 = cljs.core.async.close_BANG_.call(null,inst_25308);
var inst_25310 = cljs.core.next.call(null,inst_25298);
var inst_25284 = inst_25310;
var inst_25285 = null;
var inst_25286 = (0);
var inst_25287 = (0);
var state_25343__$1 = (function (){var statearr_25363 = state_25343;
(statearr_25363[(12)] = inst_25286);

(statearr_25363[(13)] = inst_25284);

(statearr_25363[(14)] = inst_25309);

(statearr_25363[(15)] = inst_25285);

(statearr_25363[(16)] = inst_25287);

return statearr_25363;
})();
var statearr_25364_25411 = state_25343__$1;
(statearr_25364_25411[(2)] = null);

(statearr_25364_25411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (3))){
var inst_25341 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25343__$1,inst_25341);
} else {
if((state_val_25344 === (12))){
var inst_25318 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25365_25412 = state_25343__$1;
(statearr_25365_25412[(2)] = inst_25318);

(statearr_25365_25412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (2))){
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25343__$1,(4),ch);
} else {
if((state_val_25344 === (23))){
var state_25343__$1 = state_25343;
var statearr_25366_25413 = state_25343__$1;
(statearr_25366_25413[(2)] = null);

(statearr_25366_25413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (19))){
var inst_25324 = (state_25343[(11)]);
var inst_25274 = (state_25343[(8)]);
var inst_25326 = cljs.core.async.muxch_STAR_.call(null,inst_25324);
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25343__$1,(22),inst_25326,inst_25274);
} else {
if((state_val_25344 === (11))){
var inst_25284 = (state_25343[(13)]);
var inst_25298 = (state_25343[(10)]);
var inst_25298__$1 = cljs.core.seq.call(null,inst_25284);
var state_25343__$1 = (function (){var statearr_25367 = state_25343;
(statearr_25367[(10)] = inst_25298__$1);

return statearr_25367;
})();
if(inst_25298__$1){
var statearr_25368_25414 = state_25343__$1;
(statearr_25368_25414[(1)] = (13));

} else {
var statearr_25369_25415 = state_25343__$1;
(statearr_25369_25415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (9))){
var inst_25320 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25370_25416 = state_25343__$1;
(statearr_25370_25416[(2)] = inst_25320);

(statearr_25370_25416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (5))){
var inst_25281 = cljs.core.deref.call(null,mults);
var inst_25282 = cljs.core.vals.call(null,inst_25281);
var inst_25283 = cljs.core.seq.call(null,inst_25282);
var inst_25284 = inst_25283;
var inst_25285 = null;
var inst_25286 = (0);
var inst_25287 = (0);
var state_25343__$1 = (function (){var statearr_25371 = state_25343;
(statearr_25371[(12)] = inst_25286);

(statearr_25371[(13)] = inst_25284);

(statearr_25371[(15)] = inst_25285);

(statearr_25371[(16)] = inst_25287);

return statearr_25371;
})();
var statearr_25372_25417 = state_25343__$1;
(statearr_25372_25417[(2)] = null);

(statearr_25372_25417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (14))){
var state_25343__$1 = state_25343;
var statearr_25376_25418 = state_25343__$1;
(statearr_25376_25418[(2)] = null);

(statearr_25376_25418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (16))){
var inst_25298 = (state_25343[(10)]);
var inst_25302 = cljs.core.chunk_first.call(null,inst_25298);
var inst_25303 = cljs.core.chunk_rest.call(null,inst_25298);
var inst_25304 = cljs.core.count.call(null,inst_25302);
var inst_25284 = inst_25303;
var inst_25285 = inst_25302;
var inst_25286 = inst_25304;
var inst_25287 = (0);
var state_25343__$1 = (function (){var statearr_25377 = state_25343;
(statearr_25377[(12)] = inst_25286);

(statearr_25377[(13)] = inst_25284);

(statearr_25377[(15)] = inst_25285);

(statearr_25377[(16)] = inst_25287);

return statearr_25377;
})();
var statearr_25378_25419 = state_25343__$1;
(statearr_25378_25419[(2)] = null);

(statearr_25378_25419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (10))){
var inst_25286 = (state_25343[(12)]);
var inst_25284 = (state_25343[(13)]);
var inst_25285 = (state_25343[(15)]);
var inst_25287 = (state_25343[(16)]);
var inst_25292 = cljs.core._nth.call(null,inst_25285,inst_25287);
var inst_25293 = cljs.core.async.muxch_STAR_.call(null,inst_25292);
var inst_25294 = cljs.core.async.close_BANG_.call(null,inst_25293);
var inst_25295 = (inst_25287 + (1));
var tmp25373 = inst_25286;
var tmp25374 = inst_25284;
var tmp25375 = inst_25285;
var inst_25284__$1 = tmp25374;
var inst_25285__$1 = tmp25375;
var inst_25286__$1 = tmp25373;
var inst_25287__$1 = inst_25295;
var state_25343__$1 = (function (){var statearr_25379 = state_25343;
(statearr_25379[(12)] = inst_25286__$1);

(statearr_25379[(13)] = inst_25284__$1);

(statearr_25379[(17)] = inst_25294);

(statearr_25379[(15)] = inst_25285__$1);

(statearr_25379[(16)] = inst_25287__$1);

return statearr_25379;
})();
var statearr_25380_25420 = state_25343__$1;
(statearr_25380_25420[(2)] = null);

(statearr_25380_25420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (18))){
var inst_25313 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25381_25421 = state_25343__$1;
(statearr_25381_25421[(2)] = inst_25313);

(statearr_25381_25421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (8))){
var inst_25286 = (state_25343[(12)]);
var inst_25287 = (state_25343[(16)]);
var inst_25289 = (inst_25287 < inst_25286);
var inst_25290 = inst_25289;
var state_25343__$1 = state_25343;
if(cljs.core.truth_(inst_25290)){
var statearr_25382_25422 = state_25343__$1;
(statearr_25382_25422[(1)] = (10));

} else {
var statearr_25383_25423 = state_25343__$1;
(statearr_25383_25423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25395,mults,ensure_mult,p))
;
return ((function (switch__23384__auto__,c__23496__auto___25395,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_25387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25387[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_25387[(1)] = (1));

return statearr_25387;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_25343){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25388){if((e25388 instanceof Object)){
var ex__23388__auto__ = e25388;
var statearr_25389_25424 = state_25343;
(statearr_25389_25424[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25425 = state_25343;
state_25343 = G__25425;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_25343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_25343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25395,mults,ensure_mult,p))
})();
var state__23498__auto__ = (function (){var statearr_25390 = f__23497__auto__.call(null);
(statearr_25390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25395);

return statearr_25390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25395,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25426 = [];
var len__19912__auto___25429 = arguments.length;
var i__19913__auto___25430 = (0);
while(true){
if((i__19913__auto___25430 < len__19912__auto___25429)){
args25426.push((arguments[i__19913__auto___25430]));

var G__25431 = (i__19913__auto___25430 + (1));
i__19913__auto___25430 = G__25431;
continue;
} else {
}
break;
}

var G__25428 = args25426.length;
switch (G__25428) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25426.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25433 = [];
var len__19912__auto___25436 = arguments.length;
var i__19913__auto___25437 = (0);
while(true){
if((i__19913__auto___25437 < len__19912__auto___25436)){
args25433.push((arguments[i__19913__auto___25437]));

var G__25438 = (i__19913__auto___25437 + (1));
i__19913__auto___25437 = G__25438;
continue;
} else {
}
break;
}

var G__25435 = args25433.length;
switch (G__25435) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25433.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25440 = [];
var len__19912__auto___25511 = arguments.length;
var i__19913__auto___25512 = (0);
while(true){
if((i__19913__auto___25512 < len__19912__auto___25511)){
args25440.push((arguments[i__19913__auto___25512]));

var G__25513 = (i__19913__auto___25512 + (1));
i__19913__auto___25512 = G__25513;
continue;
} else {
}
break;
}

var G__25442 = args25440.length;
switch (G__25442) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25440.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23496__auto___25515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25481){
var state_val_25482 = (state_25481[(1)]);
if((state_val_25482 === (7))){
var state_25481__$1 = state_25481;
var statearr_25483_25516 = state_25481__$1;
(statearr_25483_25516[(2)] = null);

(statearr_25483_25516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (1))){
var state_25481__$1 = state_25481;
var statearr_25484_25517 = state_25481__$1;
(statearr_25484_25517[(2)] = null);

(statearr_25484_25517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (4))){
var inst_25445 = (state_25481[(7)]);
var inst_25447 = (inst_25445 < cnt);
var state_25481__$1 = state_25481;
if(cljs.core.truth_(inst_25447)){
var statearr_25485_25518 = state_25481__$1;
(statearr_25485_25518[(1)] = (6));

} else {
var statearr_25486_25519 = state_25481__$1;
(statearr_25486_25519[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (15))){
var inst_25477 = (state_25481[(2)]);
var state_25481__$1 = state_25481;
var statearr_25487_25520 = state_25481__$1;
(statearr_25487_25520[(2)] = inst_25477);

(statearr_25487_25520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (13))){
var inst_25470 = cljs.core.async.close_BANG_.call(null,out);
var state_25481__$1 = state_25481;
var statearr_25488_25521 = state_25481__$1;
(statearr_25488_25521[(2)] = inst_25470);

(statearr_25488_25521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (6))){
var state_25481__$1 = state_25481;
var statearr_25489_25522 = state_25481__$1;
(statearr_25489_25522[(2)] = null);

(statearr_25489_25522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (3))){
var inst_25479 = (state_25481[(2)]);
var state_25481__$1 = state_25481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25481__$1,inst_25479);
} else {
if((state_val_25482 === (12))){
var inst_25467 = (state_25481[(8)]);
var inst_25467__$1 = (state_25481[(2)]);
var inst_25468 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25467__$1);
var state_25481__$1 = (function (){var statearr_25490 = state_25481;
(statearr_25490[(8)] = inst_25467__$1);

return statearr_25490;
})();
if(cljs.core.truth_(inst_25468)){
var statearr_25491_25523 = state_25481__$1;
(statearr_25491_25523[(1)] = (13));

} else {
var statearr_25492_25524 = state_25481__$1;
(statearr_25492_25524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (2))){
var inst_25444 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25445 = (0);
var state_25481__$1 = (function (){var statearr_25493 = state_25481;
(statearr_25493[(7)] = inst_25445);

(statearr_25493[(9)] = inst_25444);

return statearr_25493;
})();
var statearr_25494_25525 = state_25481__$1;
(statearr_25494_25525[(2)] = null);

(statearr_25494_25525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (11))){
var inst_25445 = (state_25481[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25481,(10),Object,null,(9));
var inst_25454 = chs__$1.call(null,inst_25445);
var inst_25455 = done.call(null,inst_25445);
var inst_25456 = cljs.core.async.take_BANG_.call(null,inst_25454,inst_25455);
var state_25481__$1 = state_25481;
var statearr_25495_25526 = state_25481__$1;
(statearr_25495_25526[(2)] = inst_25456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (9))){
var inst_25445 = (state_25481[(7)]);
var inst_25458 = (state_25481[(2)]);
var inst_25459 = (inst_25445 + (1));
var inst_25445__$1 = inst_25459;
var state_25481__$1 = (function (){var statearr_25496 = state_25481;
(statearr_25496[(10)] = inst_25458);

(statearr_25496[(7)] = inst_25445__$1);

return statearr_25496;
})();
var statearr_25497_25527 = state_25481__$1;
(statearr_25497_25527[(2)] = null);

(statearr_25497_25527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (5))){
var inst_25465 = (state_25481[(2)]);
var state_25481__$1 = (function (){var statearr_25498 = state_25481;
(statearr_25498[(11)] = inst_25465);

return statearr_25498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25481__$1,(12),dchan);
} else {
if((state_val_25482 === (14))){
var inst_25467 = (state_25481[(8)]);
var inst_25472 = cljs.core.apply.call(null,f,inst_25467);
var state_25481__$1 = state_25481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25481__$1,(16),out,inst_25472);
} else {
if((state_val_25482 === (16))){
var inst_25474 = (state_25481[(2)]);
var state_25481__$1 = (function (){var statearr_25499 = state_25481;
(statearr_25499[(12)] = inst_25474);

return statearr_25499;
})();
var statearr_25500_25528 = state_25481__$1;
(statearr_25500_25528[(2)] = null);

(statearr_25500_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (10))){
var inst_25449 = (state_25481[(2)]);
var inst_25450 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25481__$1 = (function (){var statearr_25501 = state_25481;
(statearr_25501[(13)] = inst_25449);

return statearr_25501;
})();
var statearr_25502_25529 = state_25481__$1;
(statearr_25502_25529[(2)] = inst_25450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25482 === (8))){
var inst_25463 = (state_25481[(2)]);
var state_25481__$1 = state_25481;
var statearr_25503_25530 = state_25481__$1;
(statearr_25503_25530[(2)] = inst_25463);

(statearr_25503_25530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23384__auto__,c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_25507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25507[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_25507[(1)] = (1));

return statearr_25507;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_25481){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25508){if((e25508 instanceof Object)){
var ex__23388__auto__ = e25508;
var statearr_25509_25531 = state_25481;
(statearr_25509_25531[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25532 = state_25481;
state_25481 = G__25532;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_25481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_25481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23498__auto__ = (function (){var statearr_25510 = f__23497__auto__.call(null);
(statearr_25510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25515);

return statearr_25510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25515,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25534 = [];
var len__19912__auto___25590 = arguments.length;
var i__19913__auto___25591 = (0);
while(true){
if((i__19913__auto___25591 < len__19912__auto___25590)){
args25534.push((arguments[i__19913__auto___25591]));

var G__25592 = (i__19913__auto___25591 + (1));
i__19913__auto___25591 = G__25592;
continue;
} else {
}
break;
}

var G__25536 = args25534.length;
switch (G__25536) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25534.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___25594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25594,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25594,out){
return (function (state_25566){
var state_val_25567 = (state_25566[(1)]);
if((state_val_25567 === (7))){
var inst_25546 = (state_25566[(7)]);
var inst_25545 = (state_25566[(8)]);
var inst_25545__$1 = (state_25566[(2)]);
var inst_25546__$1 = cljs.core.nth.call(null,inst_25545__$1,(0),null);
var inst_25547 = cljs.core.nth.call(null,inst_25545__$1,(1),null);
var inst_25548 = (inst_25546__$1 == null);
var state_25566__$1 = (function (){var statearr_25568 = state_25566;
(statearr_25568[(7)] = inst_25546__$1);

(statearr_25568[(8)] = inst_25545__$1);

(statearr_25568[(9)] = inst_25547);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25548)){
var statearr_25569_25595 = state_25566__$1;
(statearr_25569_25595[(1)] = (8));

} else {
var statearr_25570_25596 = state_25566__$1;
(statearr_25570_25596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (1))){
var inst_25537 = cljs.core.vec.call(null,chs);
var inst_25538 = inst_25537;
var state_25566__$1 = (function (){var statearr_25571 = state_25566;
(statearr_25571[(10)] = inst_25538);

return statearr_25571;
})();
var statearr_25572_25597 = state_25566__$1;
(statearr_25572_25597[(2)] = null);

(statearr_25572_25597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (4))){
var inst_25538 = (state_25566[(10)]);
var state_25566__$1 = state_25566;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25566__$1,(7),inst_25538);
} else {
if((state_val_25567 === (6))){
var inst_25562 = (state_25566[(2)]);
var state_25566__$1 = state_25566;
var statearr_25573_25598 = state_25566__$1;
(statearr_25573_25598[(2)] = inst_25562);

(statearr_25573_25598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (3))){
var inst_25564 = (state_25566[(2)]);
var state_25566__$1 = state_25566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25566__$1,inst_25564);
} else {
if((state_val_25567 === (2))){
var inst_25538 = (state_25566[(10)]);
var inst_25540 = cljs.core.count.call(null,inst_25538);
var inst_25541 = (inst_25540 > (0));
var state_25566__$1 = state_25566;
if(cljs.core.truth_(inst_25541)){
var statearr_25575_25599 = state_25566__$1;
(statearr_25575_25599[(1)] = (4));

} else {
var statearr_25576_25600 = state_25566__$1;
(statearr_25576_25600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (11))){
var inst_25538 = (state_25566[(10)]);
var inst_25555 = (state_25566[(2)]);
var tmp25574 = inst_25538;
var inst_25538__$1 = tmp25574;
var state_25566__$1 = (function (){var statearr_25577 = state_25566;
(statearr_25577[(11)] = inst_25555);

(statearr_25577[(10)] = inst_25538__$1);

return statearr_25577;
})();
var statearr_25578_25601 = state_25566__$1;
(statearr_25578_25601[(2)] = null);

(statearr_25578_25601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (9))){
var inst_25546 = (state_25566[(7)]);
var state_25566__$1 = state_25566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25566__$1,(11),out,inst_25546);
} else {
if((state_val_25567 === (5))){
var inst_25560 = cljs.core.async.close_BANG_.call(null,out);
var state_25566__$1 = state_25566;
var statearr_25579_25602 = state_25566__$1;
(statearr_25579_25602[(2)] = inst_25560);

(statearr_25579_25602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (10))){
var inst_25558 = (state_25566[(2)]);
var state_25566__$1 = state_25566;
var statearr_25580_25603 = state_25566__$1;
(statearr_25580_25603[(2)] = inst_25558);

(statearr_25580_25603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25567 === (8))){
var inst_25538 = (state_25566[(10)]);
var inst_25546 = (state_25566[(7)]);
var inst_25545 = (state_25566[(8)]);
var inst_25547 = (state_25566[(9)]);
var inst_25550 = (function (){var cs = inst_25538;
var vec__25543 = inst_25545;
var v = inst_25546;
var c = inst_25547;
return ((function (cs,vec__25543,v,c,inst_25538,inst_25546,inst_25545,inst_25547,state_val_25567,c__23496__auto___25594,out){
return (function (p1__25533_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25533_SHARP_);
});
;})(cs,vec__25543,v,c,inst_25538,inst_25546,inst_25545,inst_25547,state_val_25567,c__23496__auto___25594,out))
})();
var inst_25551 = cljs.core.filterv.call(null,inst_25550,inst_25538);
var inst_25538__$1 = inst_25551;
var state_25566__$1 = (function (){var statearr_25581 = state_25566;
(statearr_25581[(10)] = inst_25538__$1);

return statearr_25581;
})();
var statearr_25582_25604 = state_25566__$1;
(statearr_25582_25604[(2)] = null);

(statearr_25582_25604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25594,out))
;
return ((function (switch__23384__auto__,c__23496__auto___25594,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_25586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25586[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_25586[(1)] = (1));

return statearr_25586;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_25566){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25587){if((e25587 instanceof Object)){
var ex__23388__auto__ = e25587;
var statearr_25588_25605 = state_25566;
(statearr_25588_25605[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25606 = state_25566;
state_25566 = G__25606;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_25566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_25566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25594,out))
})();
var state__23498__auto__ = (function (){var statearr_25589 = f__23497__auto__.call(null);
(statearr_25589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25594);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25594,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25607 = [];
var len__19912__auto___25656 = arguments.length;
var i__19913__auto___25657 = (0);
while(true){
if((i__19913__auto___25657 < len__19912__auto___25656)){
args25607.push((arguments[i__19913__auto___25657]));

var G__25658 = (i__19913__auto___25657 + (1));
i__19913__auto___25657 = G__25658;
continue;
} else {
}
break;
}

var G__25609 = args25607.length;
switch (G__25609) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25607.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___25660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25660,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25660,out){
return (function (state_25633){
var state_val_25634 = (state_25633[(1)]);
if((state_val_25634 === (7))){
var inst_25615 = (state_25633[(7)]);
var inst_25615__$1 = (state_25633[(2)]);
var inst_25616 = (inst_25615__$1 == null);
var inst_25617 = cljs.core.not.call(null,inst_25616);
var state_25633__$1 = (function (){var statearr_25635 = state_25633;
(statearr_25635[(7)] = inst_25615__$1);

return statearr_25635;
})();
if(inst_25617){
var statearr_25636_25661 = state_25633__$1;
(statearr_25636_25661[(1)] = (8));

} else {
var statearr_25637_25662 = state_25633__$1;
(statearr_25637_25662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (1))){
var inst_25610 = (0);
var state_25633__$1 = (function (){var statearr_25638 = state_25633;
(statearr_25638[(8)] = inst_25610);

return statearr_25638;
})();
var statearr_25639_25663 = state_25633__$1;
(statearr_25639_25663[(2)] = null);

(statearr_25639_25663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (4))){
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25633__$1,(7),ch);
} else {
if((state_val_25634 === (6))){
var inst_25628 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25640_25664 = state_25633__$1;
(statearr_25640_25664[(2)] = inst_25628);

(statearr_25640_25664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (3))){
var inst_25630 = (state_25633[(2)]);
var inst_25631 = cljs.core.async.close_BANG_.call(null,out);
var state_25633__$1 = (function (){var statearr_25641 = state_25633;
(statearr_25641[(9)] = inst_25630);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25633__$1,inst_25631);
} else {
if((state_val_25634 === (2))){
var inst_25610 = (state_25633[(8)]);
var inst_25612 = (inst_25610 < n);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25612)){
var statearr_25642_25665 = state_25633__$1;
(statearr_25642_25665[(1)] = (4));

} else {
var statearr_25643_25666 = state_25633__$1;
(statearr_25643_25666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (11))){
var inst_25610 = (state_25633[(8)]);
var inst_25620 = (state_25633[(2)]);
var inst_25621 = (inst_25610 + (1));
var inst_25610__$1 = inst_25621;
var state_25633__$1 = (function (){var statearr_25644 = state_25633;
(statearr_25644[(8)] = inst_25610__$1);

(statearr_25644[(10)] = inst_25620);

return statearr_25644;
})();
var statearr_25645_25667 = state_25633__$1;
(statearr_25645_25667[(2)] = null);

(statearr_25645_25667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (9))){
var state_25633__$1 = state_25633;
var statearr_25646_25668 = state_25633__$1;
(statearr_25646_25668[(2)] = null);

(statearr_25646_25668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (5))){
var state_25633__$1 = state_25633;
var statearr_25647_25669 = state_25633__$1;
(statearr_25647_25669[(2)] = null);

(statearr_25647_25669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (10))){
var inst_25625 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25648_25670 = state_25633__$1;
(statearr_25648_25670[(2)] = inst_25625);

(statearr_25648_25670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (8))){
var inst_25615 = (state_25633[(7)]);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25633__$1,(11),out,inst_25615);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25660,out))
;
return ((function (switch__23384__auto__,c__23496__auto___25660,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_25652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25652[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_25652[(1)] = (1));

return statearr_25652;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_25633){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25653){if((e25653 instanceof Object)){
var ex__23388__auto__ = e25653;
var statearr_25654_25671 = state_25633;
(statearr_25654_25671[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25672 = state_25633;
state_25633 = G__25672;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_25633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_25633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25660,out))
})();
var state__23498__auto__ = (function (){var statearr_25655 = f__23497__auto__.call(null);
(statearr_25655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25660);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25660,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25680 = (function (map_LT_,f,ch,meta25681){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25681 = meta25681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25682,meta25681__$1){
var self__ = this;
var _25682__$1 = this;
return (new cljs.core.async.t_cljs$core$async25680(self__.map_LT_,self__.f,self__.ch,meta25681__$1));
});

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25682){
var self__ = this;
var _25682__$1 = this;
return self__.meta25681;
});

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25683 = (function (map_LT_,f,ch,meta25681,_,fn1,meta25684){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25681 = meta25681;
this._ = _;
this.fn1 = fn1;
this.meta25684 = meta25684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25685,meta25684__$1){
var self__ = this;
var _25685__$1 = this;
return (new cljs.core.async.t_cljs$core$async25683(self__.map_LT_,self__.f,self__.ch,self__.meta25681,self__._,self__.fn1,meta25684__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25685){
var self__ = this;
var _25685__$1 = this;
return self__.meta25684;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25673_SHARP_){
return f1.call(null,(((p1__25673_SHARP_ == null))?null:self__.f.call(null,p1__25673_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25681","meta25681",616853313,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25680","cljs.core.async/t_cljs$core$async25680",-1623913597,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25684","meta25684",620019958,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25683";

cljs.core.async.t_cljs$core$async25683.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25683");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25683 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25683(map_LT___$1,f__$1,ch__$1,meta25681__$1,___$2,fn1__$1,meta25684){
return (new cljs.core.async.t_cljs$core$async25683(map_LT___$1,f__$1,ch__$1,meta25681__$1,___$2,fn1__$1,meta25684));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25683(self__.map_LT_,self__.f,self__.ch,self__.meta25681,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18831__auto__ = ret;
if(cljs.core.truth_(and__18831__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18831__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25681","meta25681",616853313,null)], null);
});

cljs.core.async.t_cljs$core$async25680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25680";

cljs.core.async.t_cljs$core$async25680.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25680");
});

cljs.core.async.__GT_t_cljs$core$async25680 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25680(map_LT___$1,f__$1,ch__$1,meta25681){
return (new cljs.core.async.t_cljs$core$async25680(map_LT___$1,f__$1,ch__$1,meta25681));
});

}

return (new cljs.core.async.t_cljs$core$async25680(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25689 = (function (map_GT_,f,ch,meta25690){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25690 = meta25690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25691,meta25690__$1){
var self__ = this;
var _25691__$1 = this;
return (new cljs.core.async.t_cljs$core$async25689(self__.map_GT_,self__.f,self__.ch,meta25690__$1));
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25691){
var self__ = this;
var _25691__$1 = this;
return self__.meta25690;
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25690","meta25690",-1814847165,null)], null);
});

cljs.core.async.t_cljs$core$async25689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25689";

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25689");
});

cljs.core.async.__GT_t_cljs$core$async25689 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25689(map_GT___$1,f__$1,ch__$1,meta25690){
return (new cljs.core.async.t_cljs$core$async25689(map_GT___$1,f__$1,ch__$1,meta25690));
});

}

return (new cljs.core.async.t_cljs$core$async25689(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25695 = (function (filter_GT_,p,ch,meta25696){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25696 = meta25696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25697,meta25696__$1){
var self__ = this;
var _25697__$1 = this;
return (new cljs.core.async.t_cljs$core$async25695(self__.filter_GT_,self__.p,self__.ch,meta25696__$1));
});

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25697){
var self__ = this;
var _25697__$1 = this;
return self__.meta25696;
});

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25696","meta25696",-1283415757,null)], null);
});

cljs.core.async.t_cljs$core$async25695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25695";

cljs.core.async.t_cljs$core$async25695.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"cljs.core.async/t_cljs$core$async25695");
});

cljs.core.async.__GT_t_cljs$core$async25695 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25695(filter_GT___$1,p__$1,ch__$1,meta25696){
return (new cljs.core.async.t_cljs$core$async25695(filter_GT___$1,p__$1,ch__$1,meta25696));
});

}

return (new cljs.core.async.t_cljs$core$async25695(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25698 = [];
var len__19912__auto___25742 = arguments.length;
var i__19913__auto___25743 = (0);
while(true){
if((i__19913__auto___25743 < len__19912__auto___25742)){
args25698.push((arguments[i__19913__auto___25743]));

var G__25744 = (i__19913__auto___25743 + (1));
i__19913__auto___25743 = G__25744;
continue;
} else {
}
break;
}

var G__25700 = args25698.length;
switch (G__25700) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25698.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___25746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___25746,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___25746,out){
return (function (state_25721){
var state_val_25722 = (state_25721[(1)]);
if((state_val_25722 === (7))){
var inst_25717 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25723_25747 = state_25721__$1;
(statearr_25723_25747[(2)] = inst_25717);

(statearr_25723_25747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (1))){
var state_25721__$1 = state_25721;
var statearr_25724_25748 = state_25721__$1;
(statearr_25724_25748[(2)] = null);

(statearr_25724_25748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (4))){
var inst_25703 = (state_25721[(7)]);
var inst_25703__$1 = (state_25721[(2)]);
var inst_25704 = (inst_25703__$1 == null);
var state_25721__$1 = (function (){var statearr_25725 = state_25721;
(statearr_25725[(7)] = inst_25703__$1);

return statearr_25725;
})();
if(cljs.core.truth_(inst_25704)){
var statearr_25726_25749 = state_25721__$1;
(statearr_25726_25749[(1)] = (5));

} else {
var statearr_25727_25750 = state_25721__$1;
(statearr_25727_25750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (6))){
var inst_25703 = (state_25721[(7)]);
var inst_25708 = p.call(null,inst_25703);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25708)){
var statearr_25728_25751 = state_25721__$1;
(statearr_25728_25751[(1)] = (8));

} else {
var statearr_25729_25752 = state_25721__$1;
(statearr_25729_25752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (3))){
var inst_25719 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25721__$1,inst_25719);
} else {
if((state_val_25722 === (2))){
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25721__$1,(4),ch);
} else {
if((state_val_25722 === (11))){
var inst_25711 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25730_25753 = state_25721__$1;
(statearr_25730_25753[(2)] = inst_25711);

(statearr_25730_25753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (9))){
var state_25721__$1 = state_25721;
var statearr_25731_25754 = state_25721__$1;
(statearr_25731_25754[(2)] = null);

(statearr_25731_25754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (5))){
var inst_25706 = cljs.core.async.close_BANG_.call(null,out);
var state_25721__$1 = state_25721;
var statearr_25732_25755 = state_25721__$1;
(statearr_25732_25755[(2)] = inst_25706);

(statearr_25732_25755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (10))){
var inst_25714 = (state_25721[(2)]);
var state_25721__$1 = (function (){var statearr_25733 = state_25721;
(statearr_25733[(8)] = inst_25714);

return statearr_25733;
})();
var statearr_25734_25756 = state_25721__$1;
(statearr_25734_25756[(2)] = null);

(statearr_25734_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (8))){
var inst_25703 = (state_25721[(7)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25721__$1,(11),out,inst_25703);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___25746,out))
;
return ((function (switch__23384__auto__,c__23496__auto___25746,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_25738 = [null,null,null,null,null,null,null,null,null];
(statearr_25738[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_25738[(1)] = (1));

return statearr_25738;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_25721){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25739){if((e25739 instanceof Object)){
var ex__23388__auto__ = e25739;
var statearr_25740_25757 = state_25721;
(statearr_25740_25757[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25758 = state_25721;
state_25721 = G__25758;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___25746,out))
})();
var state__23498__auto__ = (function (){var statearr_25741 = f__23497__auto__.call(null);
(statearr_25741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___25746);

return statearr_25741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___25746,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25759 = [];
var len__19912__auto___25762 = arguments.length;
var i__19913__auto___25763 = (0);
while(true){
if((i__19913__auto___25763 < len__19912__auto___25762)){
args25759.push((arguments[i__19913__auto___25763]));

var G__25764 = (i__19913__auto___25763 + (1));
i__19913__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var G__25761 = args25759.length;
switch (G__25761) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25759.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25927 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25933_25974 = state_25931__$1;
(statearr_25933_25974[(2)] = inst_25927);

(statearr_25933_25974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (20))){
var inst_25897 = (state_25931[(7)]);
var inst_25908 = (state_25931[(2)]);
var inst_25909 = cljs.core.next.call(null,inst_25897);
var inst_25883 = inst_25909;
var inst_25884 = null;
var inst_25885 = (0);
var inst_25886 = (0);
var state_25931__$1 = (function (){var statearr_25934 = state_25931;
(statearr_25934[(8)] = inst_25886);

(statearr_25934[(9)] = inst_25885);

(statearr_25934[(10)] = inst_25908);

(statearr_25934[(11)] = inst_25884);

(statearr_25934[(12)] = inst_25883);

return statearr_25934;
})();
var statearr_25935_25975 = state_25931__$1;
(statearr_25935_25975[(2)] = null);

(statearr_25935_25975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var state_25931__$1 = state_25931;
var statearr_25936_25976 = state_25931__$1;
(statearr_25936_25976[(2)] = null);

(statearr_25936_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var inst_25872 = (state_25931[(13)]);
var inst_25872__$1 = (state_25931[(2)]);
var inst_25873 = (inst_25872__$1 == null);
var state_25931__$1 = (function (){var statearr_25937 = state_25931;
(statearr_25937[(13)] = inst_25872__$1);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25873)){
var statearr_25938_25977 = state_25931__$1;
(statearr_25938_25977[(1)] = (5));

} else {
var statearr_25939_25978 = state_25931__$1;
(statearr_25939_25978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (15))){
var state_25931__$1 = state_25931;
var statearr_25943_25979 = state_25931__$1;
(statearr_25943_25979[(2)] = null);

(statearr_25943_25979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (21))){
var state_25931__$1 = state_25931;
var statearr_25944_25980 = state_25931__$1;
(statearr_25944_25980[(2)] = null);

(statearr_25944_25980[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (13))){
var inst_25886 = (state_25931[(8)]);
var inst_25885 = (state_25931[(9)]);
var inst_25884 = (state_25931[(11)]);
var inst_25883 = (state_25931[(12)]);
var inst_25893 = (state_25931[(2)]);
var inst_25894 = (inst_25886 + (1));
var tmp25940 = inst_25885;
var tmp25941 = inst_25884;
var tmp25942 = inst_25883;
var inst_25883__$1 = tmp25942;
var inst_25884__$1 = tmp25941;
var inst_25885__$1 = tmp25940;
var inst_25886__$1 = inst_25894;
var state_25931__$1 = (function (){var statearr_25945 = state_25931;
(statearr_25945[(8)] = inst_25886__$1);

(statearr_25945[(9)] = inst_25885__$1);

(statearr_25945[(11)] = inst_25884__$1);

(statearr_25945[(12)] = inst_25883__$1);

(statearr_25945[(14)] = inst_25893);

return statearr_25945;
})();
var statearr_25946_25981 = state_25931__$1;
(statearr_25946_25981[(2)] = null);

(statearr_25946_25981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (22))){
var state_25931__$1 = state_25931;
var statearr_25947_25982 = state_25931__$1;
(statearr_25947_25982[(2)] = null);

(statearr_25947_25982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (6))){
var inst_25872 = (state_25931[(13)]);
var inst_25881 = f.call(null,inst_25872);
var inst_25882 = cljs.core.seq.call(null,inst_25881);
var inst_25883 = inst_25882;
var inst_25884 = null;
var inst_25885 = (0);
var inst_25886 = (0);
var state_25931__$1 = (function (){var statearr_25948 = state_25931;
(statearr_25948[(8)] = inst_25886);

(statearr_25948[(9)] = inst_25885);

(statearr_25948[(11)] = inst_25884);

(statearr_25948[(12)] = inst_25883);

return statearr_25948;
})();
var statearr_25949_25983 = state_25931__$1;
(statearr_25949_25983[(2)] = null);

(statearr_25949_25983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (17))){
var inst_25897 = (state_25931[(7)]);
var inst_25901 = cljs.core.chunk_first.call(null,inst_25897);
var inst_25902 = cljs.core.chunk_rest.call(null,inst_25897);
var inst_25903 = cljs.core.count.call(null,inst_25901);
var inst_25883 = inst_25902;
var inst_25884 = inst_25901;
var inst_25885 = inst_25903;
var inst_25886 = (0);
var state_25931__$1 = (function (){var statearr_25950 = state_25931;
(statearr_25950[(8)] = inst_25886);

(statearr_25950[(9)] = inst_25885);

(statearr_25950[(11)] = inst_25884);

(statearr_25950[(12)] = inst_25883);

return statearr_25950;
})();
var statearr_25951_25984 = state_25931__$1;
(statearr_25951_25984[(2)] = null);

(statearr_25951_25984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (3))){
var inst_25929 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (12))){
var inst_25917 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25952_25985 = state_25931__$1;
(statearr_25952_25985[(2)] = inst_25917);

(statearr_25952_25985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (2))){
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25931__$1,(4),in$);
} else {
if((state_val_25932 === (23))){
var inst_25925 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25953_25986 = state_25931__$1;
(statearr_25953_25986[(2)] = inst_25925);

(statearr_25953_25986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (19))){
var inst_25912 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25954_25987 = state_25931__$1;
(statearr_25954_25987[(2)] = inst_25912);

(statearr_25954_25987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (11))){
var inst_25897 = (state_25931[(7)]);
var inst_25883 = (state_25931[(12)]);
var inst_25897__$1 = cljs.core.seq.call(null,inst_25883);
var state_25931__$1 = (function (){var statearr_25955 = state_25931;
(statearr_25955[(7)] = inst_25897__$1);

return statearr_25955;
})();
if(inst_25897__$1){
var statearr_25956_25988 = state_25931__$1;
(statearr_25956_25988[(1)] = (14));

} else {
var statearr_25957_25989 = state_25931__$1;
(statearr_25957_25989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var inst_25919 = (state_25931[(2)]);
var inst_25920 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25931__$1 = (function (){var statearr_25958 = state_25931;
(statearr_25958[(15)] = inst_25919);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25920)){
var statearr_25959_25990 = state_25931__$1;
(statearr_25959_25990[(1)] = (21));

} else {
var statearr_25960_25991 = state_25931__$1;
(statearr_25960_25991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var inst_25875 = cljs.core.async.close_BANG_.call(null,out);
var state_25931__$1 = state_25931;
var statearr_25961_25992 = state_25931__$1;
(statearr_25961_25992[(2)] = inst_25875);

(statearr_25961_25992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (14))){
var inst_25897 = (state_25931[(7)]);
var inst_25899 = cljs.core.chunked_seq_QMARK_.call(null,inst_25897);
var state_25931__$1 = state_25931;
if(inst_25899){
var statearr_25962_25993 = state_25931__$1;
(statearr_25962_25993[(1)] = (17));

} else {
var statearr_25963_25994 = state_25931__$1;
(statearr_25963_25994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (16))){
var inst_25915 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25964_25995 = state_25931__$1;
(statearr_25964_25995[(2)] = inst_25915);

(statearr_25964_25995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25886 = (state_25931[(8)]);
var inst_25884 = (state_25931[(11)]);
var inst_25891 = cljs.core._nth.call(null,inst_25884,inst_25886);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(13),out,inst_25891);
} else {
if((state_val_25932 === (18))){
var inst_25897 = (state_25931[(7)]);
var inst_25906 = cljs.core.first.call(null,inst_25897);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(20),out,inst_25906);
} else {
if((state_val_25932 === (8))){
var inst_25886 = (state_25931[(8)]);
var inst_25885 = (state_25931[(9)]);
var inst_25888 = (inst_25886 < inst_25885);
var inst_25889 = inst_25888;
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25889)){
var statearr_25965_25996 = state_25931__$1;
(statearr_25965_25996[(1)] = (10));

} else {
var statearr_25966_25997 = state_25931__$1;
(statearr_25966_25997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____0 = (function (){
var statearr_25970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__);

(statearr_25970[(1)] = (1));

return statearr_25970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____1 = (function (state_25931){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e25971){if((e25971 instanceof Object)){
var ex__23388__auto__ = e25971;
var statearr_25972_25998 = state_25931;
(statearr_25972_25998[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25999 = state_25931;
state_25931 = G__25999;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_25973 = f__23497__auto__.call(null);
(statearr_25973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_25973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26000 = [];
var len__19912__auto___26003 = arguments.length;
var i__19913__auto___26004 = (0);
while(true){
if((i__19913__auto___26004 < len__19912__auto___26003)){
args26000.push((arguments[i__19913__auto___26004]));

var G__26005 = (i__19913__auto___26004 + (1));
i__19913__auto___26004 = G__26005;
continue;
} else {
}
break;
}

var G__26002 = args26000.length;
switch (G__26002) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26000.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26007 = [];
var len__19912__auto___26010 = arguments.length;
var i__19913__auto___26011 = (0);
while(true){
if((i__19913__auto___26011 < len__19912__auto___26010)){
args26007.push((arguments[i__19913__auto___26011]));

var G__26012 = (i__19913__auto___26011 + (1));
i__19913__auto___26011 = G__26012;
continue;
} else {
}
break;
}

var G__26009 = args26007.length;
switch (G__26009) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26007.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26014 = [];
var len__19912__auto___26065 = arguments.length;
var i__19913__auto___26066 = (0);
while(true){
if((i__19913__auto___26066 < len__19912__auto___26065)){
args26014.push((arguments[i__19913__auto___26066]));

var G__26067 = (i__19913__auto___26066 + (1));
i__19913__auto___26066 = G__26067;
continue;
} else {
}
break;
}

var G__26016 = args26014.length;
switch (G__26016) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26014.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___26069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___26069,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___26069,out){
return (function (state_26040){
var state_val_26041 = (state_26040[(1)]);
if((state_val_26041 === (7))){
var inst_26035 = (state_26040[(2)]);
var state_26040__$1 = state_26040;
var statearr_26042_26070 = state_26040__$1;
(statearr_26042_26070[(2)] = inst_26035);

(statearr_26042_26070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (1))){
var inst_26017 = null;
var state_26040__$1 = (function (){var statearr_26043 = state_26040;
(statearr_26043[(7)] = inst_26017);

return statearr_26043;
})();
var statearr_26044_26071 = state_26040__$1;
(statearr_26044_26071[(2)] = null);

(statearr_26044_26071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (4))){
var inst_26020 = (state_26040[(8)]);
var inst_26020__$1 = (state_26040[(2)]);
var inst_26021 = (inst_26020__$1 == null);
var inst_26022 = cljs.core.not.call(null,inst_26021);
var state_26040__$1 = (function (){var statearr_26045 = state_26040;
(statearr_26045[(8)] = inst_26020__$1);

return statearr_26045;
})();
if(inst_26022){
var statearr_26046_26072 = state_26040__$1;
(statearr_26046_26072[(1)] = (5));

} else {
var statearr_26047_26073 = state_26040__$1;
(statearr_26047_26073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (6))){
var state_26040__$1 = state_26040;
var statearr_26048_26074 = state_26040__$1;
(statearr_26048_26074[(2)] = null);

(statearr_26048_26074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (3))){
var inst_26037 = (state_26040[(2)]);
var inst_26038 = cljs.core.async.close_BANG_.call(null,out);
var state_26040__$1 = (function (){var statearr_26049 = state_26040;
(statearr_26049[(9)] = inst_26037);

return statearr_26049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26040__$1,inst_26038);
} else {
if((state_val_26041 === (2))){
var state_26040__$1 = state_26040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26040__$1,(4),ch);
} else {
if((state_val_26041 === (11))){
var inst_26020 = (state_26040[(8)]);
var inst_26029 = (state_26040[(2)]);
var inst_26017 = inst_26020;
var state_26040__$1 = (function (){var statearr_26050 = state_26040;
(statearr_26050[(7)] = inst_26017);

(statearr_26050[(10)] = inst_26029);

return statearr_26050;
})();
var statearr_26051_26075 = state_26040__$1;
(statearr_26051_26075[(2)] = null);

(statearr_26051_26075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (9))){
var inst_26020 = (state_26040[(8)]);
var state_26040__$1 = state_26040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26040__$1,(11),out,inst_26020);
} else {
if((state_val_26041 === (5))){
var inst_26017 = (state_26040[(7)]);
var inst_26020 = (state_26040[(8)]);
var inst_26024 = cljs.core._EQ_.call(null,inst_26020,inst_26017);
var state_26040__$1 = state_26040;
if(inst_26024){
var statearr_26053_26076 = state_26040__$1;
(statearr_26053_26076[(1)] = (8));

} else {
var statearr_26054_26077 = state_26040__$1;
(statearr_26054_26077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (10))){
var inst_26032 = (state_26040[(2)]);
var state_26040__$1 = state_26040;
var statearr_26055_26078 = state_26040__$1;
(statearr_26055_26078[(2)] = inst_26032);

(statearr_26055_26078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26041 === (8))){
var inst_26017 = (state_26040[(7)]);
var tmp26052 = inst_26017;
var inst_26017__$1 = tmp26052;
var state_26040__$1 = (function (){var statearr_26056 = state_26040;
(statearr_26056[(7)] = inst_26017__$1);

return statearr_26056;
})();
var statearr_26057_26079 = state_26040__$1;
(statearr_26057_26079[(2)] = null);

(statearr_26057_26079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___26069,out))
;
return ((function (switch__23384__auto__,c__23496__auto___26069,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_26061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26061[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_26061[(1)] = (1));

return statearr_26061;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_26040){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_26040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e26062){if((e26062 instanceof Object)){
var ex__23388__auto__ = e26062;
var statearr_26063_26080 = state_26040;
(statearr_26063_26080[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26081 = state_26040;
state_26040 = G__26081;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_26040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_26040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___26069,out))
})();
var state__23498__auto__ = (function (){var statearr_26064 = f__23497__auto__.call(null);
(statearr_26064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___26069);

return statearr_26064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___26069,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26082 = [];
var len__19912__auto___26152 = arguments.length;
var i__19913__auto___26153 = (0);
while(true){
if((i__19913__auto___26153 < len__19912__auto___26152)){
args26082.push((arguments[i__19913__auto___26153]));

var G__26154 = (i__19913__auto___26153 + (1));
i__19913__auto___26153 = G__26154;
continue;
} else {
}
break;
}

var G__26084 = args26082.length;
switch (G__26084) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26082.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___26156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___26156,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___26156,out){
return (function (state_26122){
var state_val_26123 = (state_26122[(1)]);
if((state_val_26123 === (7))){
var inst_26118 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26124_26157 = state_26122__$1;
(statearr_26124_26157[(2)] = inst_26118);

(statearr_26124_26157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (1))){
var inst_26085 = (new Array(n));
var inst_26086 = inst_26085;
var inst_26087 = (0);
var state_26122__$1 = (function (){var statearr_26125 = state_26122;
(statearr_26125[(7)] = inst_26086);

(statearr_26125[(8)] = inst_26087);

return statearr_26125;
})();
var statearr_26126_26158 = state_26122__$1;
(statearr_26126_26158[(2)] = null);

(statearr_26126_26158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (4))){
var inst_26090 = (state_26122[(9)]);
var inst_26090__$1 = (state_26122[(2)]);
var inst_26091 = (inst_26090__$1 == null);
var inst_26092 = cljs.core.not.call(null,inst_26091);
var state_26122__$1 = (function (){var statearr_26127 = state_26122;
(statearr_26127[(9)] = inst_26090__$1);

return statearr_26127;
})();
if(inst_26092){
var statearr_26128_26159 = state_26122__$1;
(statearr_26128_26159[(1)] = (5));

} else {
var statearr_26129_26160 = state_26122__$1;
(statearr_26129_26160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (15))){
var inst_26112 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26130_26161 = state_26122__$1;
(statearr_26130_26161[(2)] = inst_26112);

(statearr_26130_26161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (13))){
var state_26122__$1 = state_26122;
var statearr_26131_26162 = state_26122__$1;
(statearr_26131_26162[(2)] = null);

(statearr_26131_26162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (6))){
var inst_26087 = (state_26122[(8)]);
var inst_26108 = (inst_26087 > (0));
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26108)){
var statearr_26132_26163 = state_26122__$1;
(statearr_26132_26163[(1)] = (12));

} else {
var statearr_26133_26164 = state_26122__$1;
(statearr_26133_26164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (3))){
var inst_26120 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26122__$1,inst_26120);
} else {
if((state_val_26123 === (12))){
var inst_26086 = (state_26122[(7)]);
var inst_26110 = cljs.core.vec.call(null,inst_26086);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,(15),out,inst_26110);
} else {
if((state_val_26123 === (2))){
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26122__$1,(4),ch);
} else {
if((state_val_26123 === (11))){
var inst_26102 = (state_26122[(2)]);
var inst_26103 = (new Array(n));
var inst_26086 = inst_26103;
var inst_26087 = (0);
var state_26122__$1 = (function (){var statearr_26134 = state_26122;
(statearr_26134[(7)] = inst_26086);

(statearr_26134[(10)] = inst_26102);

(statearr_26134[(8)] = inst_26087);

return statearr_26134;
})();
var statearr_26135_26165 = state_26122__$1;
(statearr_26135_26165[(2)] = null);

(statearr_26135_26165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (9))){
var inst_26086 = (state_26122[(7)]);
var inst_26100 = cljs.core.vec.call(null,inst_26086);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,(11),out,inst_26100);
} else {
if((state_val_26123 === (5))){
var inst_26090 = (state_26122[(9)]);
var inst_26095 = (state_26122[(11)]);
var inst_26086 = (state_26122[(7)]);
var inst_26087 = (state_26122[(8)]);
var inst_26094 = (inst_26086[inst_26087] = inst_26090);
var inst_26095__$1 = (inst_26087 + (1));
var inst_26096 = (inst_26095__$1 < n);
var state_26122__$1 = (function (){var statearr_26136 = state_26122;
(statearr_26136[(11)] = inst_26095__$1);

(statearr_26136[(12)] = inst_26094);

return statearr_26136;
})();
if(cljs.core.truth_(inst_26096)){
var statearr_26137_26166 = state_26122__$1;
(statearr_26137_26166[(1)] = (8));

} else {
var statearr_26138_26167 = state_26122__$1;
(statearr_26138_26167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (14))){
var inst_26115 = (state_26122[(2)]);
var inst_26116 = cljs.core.async.close_BANG_.call(null,out);
var state_26122__$1 = (function (){var statearr_26140 = state_26122;
(statearr_26140[(13)] = inst_26115);

return statearr_26140;
})();
var statearr_26141_26168 = state_26122__$1;
(statearr_26141_26168[(2)] = inst_26116);

(statearr_26141_26168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (10))){
var inst_26106 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26142_26169 = state_26122__$1;
(statearr_26142_26169[(2)] = inst_26106);

(statearr_26142_26169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (8))){
var inst_26095 = (state_26122[(11)]);
var inst_26086 = (state_26122[(7)]);
var tmp26139 = inst_26086;
var inst_26086__$1 = tmp26139;
var inst_26087 = inst_26095;
var state_26122__$1 = (function (){var statearr_26143 = state_26122;
(statearr_26143[(7)] = inst_26086__$1);

(statearr_26143[(8)] = inst_26087);

return statearr_26143;
})();
var statearr_26144_26170 = state_26122__$1;
(statearr_26144_26170[(2)] = null);

(statearr_26144_26170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___26156,out))
;
return ((function (switch__23384__auto__,c__23496__auto___26156,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_26148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26148[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_26148[(1)] = (1));

return statearr_26148;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_26122){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_26122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e26149){if((e26149 instanceof Object)){
var ex__23388__auto__ = e26149;
var statearr_26150_26171 = state_26122;
(statearr_26150_26171[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26172 = state_26122;
state_26122 = G__26172;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_26122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_26122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___26156,out))
})();
var state__23498__auto__ = (function (){var statearr_26151 = f__23497__auto__.call(null);
(statearr_26151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___26156);

return statearr_26151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___26156,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26173 = [];
var len__19912__auto___26247 = arguments.length;
var i__19913__auto___26248 = (0);
while(true){
if((i__19913__auto___26248 < len__19912__auto___26247)){
args26173.push((arguments[i__19913__auto___26248]));

var G__26249 = (i__19913__auto___26248 + (1));
i__19913__auto___26248 = G__26249;
continue;
} else {
}
break;
}

var G__26175 = args26173.length;
switch (G__26175) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26173.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23496__auto___26251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___26251,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___26251,out){
return (function (state_26217){
var state_val_26218 = (state_26217[(1)]);
if((state_val_26218 === (7))){
var inst_26213 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26219_26252 = state_26217__$1;
(statearr_26219_26252[(2)] = inst_26213);

(statearr_26219_26252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (1))){
var inst_26176 = [];
var inst_26177 = inst_26176;
var inst_26178 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26217__$1 = (function (){var statearr_26220 = state_26217;
(statearr_26220[(7)] = inst_26177);

(statearr_26220[(8)] = inst_26178);

return statearr_26220;
})();
var statearr_26221_26253 = state_26217__$1;
(statearr_26221_26253[(2)] = null);

(statearr_26221_26253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (4))){
var inst_26181 = (state_26217[(9)]);
var inst_26181__$1 = (state_26217[(2)]);
var inst_26182 = (inst_26181__$1 == null);
var inst_26183 = cljs.core.not.call(null,inst_26182);
var state_26217__$1 = (function (){var statearr_26222 = state_26217;
(statearr_26222[(9)] = inst_26181__$1);

return statearr_26222;
})();
if(inst_26183){
var statearr_26223_26254 = state_26217__$1;
(statearr_26223_26254[(1)] = (5));

} else {
var statearr_26224_26255 = state_26217__$1;
(statearr_26224_26255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (15))){
var inst_26207 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26225_26256 = state_26217__$1;
(statearr_26225_26256[(2)] = inst_26207);

(statearr_26225_26256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (13))){
var state_26217__$1 = state_26217;
var statearr_26226_26257 = state_26217__$1;
(statearr_26226_26257[(2)] = null);

(statearr_26226_26257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (6))){
var inst_26177 = (state_26217[(7)]);
var inst_26202 = inst_26177.length;
var inst_26203 = (inst_26202 > (0));
var state_26217__$1 = state_26217;
if(cljs.core.truth_(inst_26203)){
var statearr_26227_26258 = state_26217__$1;
(statearr_26227_26258[(1)] = (12));

} else {
var statearr_26228_26259 = state_26217__$1;
(statearr_26228_26259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (3))){
var inst_26215 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26217__$1,inst_26215);
} else {
if((state_val_26218 === (12))){
var inst_26177 = (state_26217[(7)]);
var inst_26205 = cljs.core.vec.call(null,inst_26177);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26217__$1,(15),out,inst_26205);
} else {
if((state_val_26218 === (2))){
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26217__$1,(4),ch);
} else {
if((state_val_26218 === (11))){
var inst_26185 = (state_26217[(10)]);
var inst_26181 = (state_26217[(9)]);
var inst_26195 = (state_26217[(2)]);
var inst_26196 = [];
var inst_26197 = inst_26196.push(inst_26181);
var inst_26177 = inst_26196;
var inst_26178 = inst_26185;
var state_26217__$1 = (function (){var statearr_26229 = state_26217;
(statearr_26229[(11)] = inst_26195);

(statearr_26229[(7)] = inst_26177);

(statearr_26229[(8)] = inst_26178);

(statearr_26229[(12)] = inst_26197);

return statearr_26229;
})();
var statearr_26230_26260 = state_26217__$1;
(statearr_26230_26260[(2)] = null);

(statearr_26230_26260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (9))){
var inst_26177 = (state_26217[(7)]);
var inst_26193 = cljs.core.vec.call(null,inst_26177);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26217__$1,(11),out,inst_26193);
} else {
if((state_val_26218 === (5))){
var inst_26185 = (state_26217[(10)]);
var inst_26178 = (state_26217[(8)]);
var inst_26181 = (state_26217[(9)]);
var inst_26185__$1 = f.call(null,inst_26181);
var inst_26186 = cljs.core._EQ_.call(null,inst_26185__$1,inst_26178);
var inst_26187 = cljs.core.keyword_identical_QMARK_.call(null,inst_26178,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26188 = (inst_26186) || (inst_26187);
var state_26217__$1 = (function (){var statearr_26231 = state_26217;
(statearr_26231[(10)] = inst_26185__$1);

return statearr_26231;
})();
if(cljs.core.truth_(inst_26188)){
var statearr_26232_26261 = state_26217__$1;
(statearr_26232_26261[(1)] = (8));

} else {
var statearr_26233_26262 = state_26217__$1;
(statearr_26233_26262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (14))){
var inst_26210 = (state_26217[(2)]);
var inst_26211 = cljs.core.async.close_BANG_.call(null,out);
var state_26217__$1 = (function (){var statearr_26235 = state_26217;
(statearr_26235[(13)] = inst_26210);

return statearr_26235;
})();
var statearr_26236_26263 = state_26217__$1;
(statearr_26236_26263[(2)] = inst_26211);

(statearr_26236_26263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (10))){
var inst_26200 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26237_26264 = state_26217__$1;
(statearr_26237_26264[(2)] = inst_26200);

(statearr_26237_26264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (8))){
var inst_26185 = (state_26217[(10)]);
var inst_26177 = (state_26217[(7)]);
var inst_26181 = (state_26217[(9)]);
var inst_26190 = inst_26177.push(inst_26181);
var tmp26234 = inst_26177;
var inst_26177__$1 = tmp26234;
var inst_26178 = inst_26185;
var state_26217__$1 = (function (){var statearr_26238 = state_26217;
(statearr_26238[(14)] = inst_26190);

(statearr_26238[(7)] = inst_26177__$1);

(statearr_26238[(8)] = inst_26178);

return statearr_26238;
})();
var statearr_26239_26265 = state_26217__$1;
(statearr_26239_26265[(2)] = null);

(statearr_26239_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto___26251,out))
;
return ((function (switch__23384__auto__,c__23496__auto___26251,out){
return (function() {
var cljs$core$async$state_machine__23385__auto__ = null;
var cljs$core$async$state_machine__23385__auto____0 = (function (){
var statearr_26243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26243[(0)] = cljs$core$async$state_machine__23385__auto__);

(statearr_26243[(1)] = (1));

return statearr_26243;
});
var cljs$core$async$state_machine__23385__auto____1 = (function (state_26217){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_26217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e26244){if((e26244 instanceof Object)){
var ex__23388__auto__ = e26244;
var statearr_26245_26266 = state_26217;
(statearr_26245_26266[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26267 = state_26217;
state_26217 = G__26267;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
cljs$core$async$state_machine__23385__auto__ = function(state_26217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23385__auto____1.call(this,state_26217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23385__auto____0;
cljs$core$async$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23385__auto____1;
return cljs$core$async$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___26251,out))
})();
var state__23498__auto__ = (function (){var statearr_26246 = f__23497__auto__.call(null);
(statearr_26246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___26251);

return statearr_26246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___26251,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1478297180733