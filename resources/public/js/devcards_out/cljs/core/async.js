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
var args21085 = [];
var len__19942__auto___21091 = arguments.length;
var i__19943__auto___21092 = (0);
while(true){
if((i__19943__auto___21092 < len__19942__auto___21091)){
args21085.push((arguments[i__19943__auto___21092]));

var G__21093 = (i__19943__auto___21092 + (1));
i__19943__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var G__21087 = args21085.length;
switch (G__21087) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21085.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21088 = (function (f,blockable,meta21089){
this.f = f;
this.blockable = blockable;
this.meta21089 = meta21089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21090,meta21089__$1){
var self__ = this;
var _21090__$1 = this;
return (new cljs.core.async.t_cljs$core$async21088(self__.f,self__.blockable,meta21089__$1));
});

cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21090){
var self__ = this;
var _21090__$1 = this;
return self__.meta21089;
});

cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21089","meta21089",2037096502,null)], null);
});

cljs.core.async.t_cljs$core$async21088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21088";

cljs.core.async.t_cljs$core$async21088.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async21088");
});

cljs.core.async.__GT_t_cljs$core$async21088 = (function cljs$core$async$__GT_t_cljs$core$async21088(f__$1,blockable__$1,meta21089){
return (new cljs.core.async.t_cljs$core$async21088(f__$1,blockable__$1,meta21089));
});

}

return (new cljs.core.async.t_cljs$core$async21088(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21097 = [];
var len__19942__auto___21100 = arguments.length;
var i__19943__auto___21101 = (0);
while(true){
if((i__19943__auto___21101 < len__19942__auto___21100)){
args21097.push((arguments[i__19943__auto___21101]));

var G__21102 = (i__19943__auto___21101 + (1));
i__19943__auto___21101 = G__21102;
continue;
} else {
}
break;
}

var G__21099 = args21097.length;
switch (G__21099) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21097.length)].join('')));

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
var args21104 = [];
var len__19942__auto___21107 = arguments.length;
var i__19943__auto___21108 = (0);
while(true){
if((i__19943__auto___21108 < len__19942__auto___21107)){
args21104.push((arguments[i__19943__auto___21108]));

var G__21109 = (i__19943__auto___21108 + (1));
i__19943__auto___21108 = G__21109;
continue;
} else {
}
break;
}

var G__21106 = args21104.length;
switch (G__21106) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21104.length)].join('')));

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
var args21111 = [];
var len__19942__auto___21114 = arguments.length;
var i__19943__auto___21115 = (0);
while(true){
if((i__19943__auto___21115 < len__19942__auto___21114)){
args21111.push((arguments[i__19943__auto___21115]));

var G__21116 = (i__19943__auto___21115 + (1));
i__19943__auto___21115 = G__21116;
continue;
} else {
}
break;
}

var G__21113 = args21111.length;
switch (G__21113) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21111.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21118 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21118);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21118,ret){
return (function (){
return fn1.call(null,val_21118);
});})(val_21118,ret))
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
var args21119 = [];
var len__19942__auto___21122 = arguments.length;
var i__19943__auto___21123 = (0);
while(true){
if((i__19943__auto___21123 < len__19942__auto___21122)){
args21119.push((arguments[i__19943__auto___21123]));

var G__21124 = (i__19943__auto___21123 + (1));
i__19943__auto___21123 = G__21124;
continue;
} else {
}
break;
}

var G__21121 = args21119.length;
switch (G__21121) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21119.length)].join('')));

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
var n__19787__auto___21126 = n;
var x_21127 = (0);
while(true){
if((x_21127 < n__19787__auto___21126)){
(a[x_21127] = (0));

var G__21128 = (x_21127 + (1));
x_21127 = G__21128;
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

var G__21129 = (i + (1));
i = G__21129;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21133 = (function (alt_flag,flag,meta21134){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21134 = meta21134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21135,meta21134__$1){
var self__ = this;
var _21135__$1 = this;
return (new cljs.core.async.t_cljs$core$async21133(self__.alt_flag,self__.flag,meta21134__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21135){
var self__ = this;
var _21135__$1 = this;
return self__.meta21134;
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21134","meta21134",992657786,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21133";

cljs.core.async.t_cljs$core$async21133.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async21133");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21133 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21133(alt_flag__$1,flag__$1,meta21134){
return (new cljs.core.async.t_cljs$core$async21133(alt_flag__$1,flag__$1,meta21134));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21133(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21139 = (function (alt_handler,flag,cb,meta21140){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21140 = meta21140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21141,meta21140__$1){
var self__ = this;
var _21141__$1 = this;
return (new cljs.core.async.t_cljs$core$async21139(self__.alt_handler,self__.flag,self__.cb,meta21140__$1));
});

cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21141){
var self__ = this;
var _21141__$1 = this;
return self__.meta21140;
});

cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21140","meta21140",144115189,null)], null);
});

cljs.core.async.t_cljs$core$async21139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21139";

cljs.core.async.t_cljs$core$async21139.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async21139");
});

cljs.core.async.__GT_t_cljs$core$async21139 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21139(alt_handler__$1,flag__$1,cb__$1,meta21140){
return (new cljs.core.async.t_cljs$core$async21139(alt_handler__$1,flag__$1,cb__$1,meta21140));
});

}

return (new cljs.core.async.t_cljs$core$async21139(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21142_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21143_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21143_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18873__auto__ = wport;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21144 = (i + (1));
i = G__21144;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18873__auto__ = ret;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18861__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18861__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18861__auto__;
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
var args__19949__auto__ = [];
var len__19942__auto___21150 = arguments.length;
var i__19943__auto___21151 = (0);
while(true){
if((i__19943__auto___21151 < len__19942__auto___21150)){
args__19949__auto__.push((arguments[i__19943__auto___21151]));

var G__21152 = (i__19943__auto___21151 + (1));
i__19943__auto___21151 = G__21152;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((1) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19950__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21147){
var map__21148 = p__21147;
var map__21148__$1 = ((((!((map__21148 == null)))?((((map__21148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21148):map__21148);
var opts = map__21148__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21145){
var G__21146 = cljs.core.first.call(null,seq21145);
var seq21145__$1 = cljs.core.next.call(null,seq21145);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21146,seq21145__$1);
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
var args21153 = [];
var len__19942__auto___21203 = arguments.length;
var i__19943__auto___21204 = (0);
while(true){
if((i__19943__auto___21204 < len__19942__auto___21203)){
args21153.push((arguments[i__19943__auto___21204]));

var G__21205 = (i__19943__auto___21204 + (1));
i__19943__auto___21204 = G__21205;
continue;
} else {
}
break;
}

var G__21155 = args21153.length;
switch (G__21155) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21153.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21040__auto___21207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___21207){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___21207){
return (function (state_21179){
var state_val_21180 = (state_21179[(1)]);
if((state_val_21180 === (7))){
var inst_21175 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21181_21208 = state_21179__$1;
(statearr_21181_21208[(2)] = inst_21175);

(statearr_21181_21208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (1))){
var state_21179__$1 = state_21179;
var statearr_21182_21209 = state_21179__$1;
(statearr_21182_21209[(2)] = null);

(statearr_21182_21209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (4))){
var inst_21158 = (state_21179[(7)]);
var inst_21158__$1 = (state_21179[(2)]);
var inst_21159 = (inst_21158__$1 == null);
var state_21179__$1 = (function (){var statearr_21183 = state_21179;
(statearr_21183[(7)] = inst_21158__$1);

return statearr_21183;
})();
if(cljs.core.truth_(inst_21159)){
var statearr_21184_21210 = state_21179__$1;
(statearr_21184_21210[(1)] = (5));

} else {
var statearr_21185_21211 = state_21179__$1;
(statearr_21185_21211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (13))){
var state_21179__$1 = state_21179;
var statearr_21186_21212 = state_21179__$1;
(statearr_21186_21212[(2)] = null);

(statearr_21186_21212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (6))){
var inst_21158 = (state_21179[(7)]);
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21179__$1,(11),to,inst_21158);
} else {
if((state_val_21180 === (3))){
var inst_21177 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21179__$1,inst_21177);
} else {
if((state_val_21180 === (12))){
var state_21179__$1 = state_21179;
var statearr_21187_21213 = state_21179__$1;
(statearr_21187_21213[(2)] = null);

(statearr_21187_21213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (2))){
var state_21179__$1 = state_21179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21179__$1,(4),from);
} else {
if((state_val_21180 === (11))){
var inst_21168 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
if(cljs.core.truth_(inst_21168)){
var statearr_21188_21214 = state_21179__$1;
(statearr_21188_21214[(1)] = (12));

} else {
var statearr_21189_21215 = state_21179__$1;
(statearr_21189_21215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (9))){
var state_21179__$1 = state_21179;
var statearr_21190_21216 = state_21179__$1;
(statearr_21190_21216[(2)] = null);

(statearr_21190_21216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (5))){
var state_21179__$1 = state_21179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21191_21217 = state_21179__$1;
(statearr_21191_21217[(1)] = (8));

} else {
var statearr_21192_21218 = state_21179__$1;
(statearr_21192_21218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (14))){
var inst_21173 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21193_21219 = state_21179__$1;
(statearr_21193_21219[(2)] = inst_21173);

(statearr_21193_21219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (10))){
var inst_21165 = (state_21179[(2)]);
var state_21179__$1 = state_21179;
var statearr_21194_21220 = state_21179__$1;
(statearr_21194_21220[(2)] = inst_21165);

(statearr_21194_21220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21180 === (8))){
var inst_21162 = cljs.core.async.close_BANG_.call(null,to);
var state_21179__$1 = state_21179;
var statearr_21195_21221 = state_21179__$1;
(statearr_21195_21221[(2)] = inst_21162);

(statearr_21195_21221[(1)] = (10));


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
});})(c__21040__auto___21207))
;
return ((function (switch__20928__auto__,c__21040__auto___21207){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_21199 = [null,null,null,null,null,null,null,null];
(statearr_21199[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_21199[(1)] = (1));

return statearr_21199;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_21179){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object)){
var ex__20932__auto__ = e21200;
var statearr_21201_21222 = state_21179;
(statearr_21201_21222[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21223 = state_21179;
state_21179 = G__21223;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_21179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_21179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___21207))
})();
var state__21042__auto__ = (function (){var statearr_21202 = f__21041__auto__.call(null);
(statearr_21202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21207);

return statearr_21202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___21207))
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
return (function (p__21407){
var vec__21408 = p__21407;
var v = cljs.core.nth.call(null,vec__21408,(0),null);
var p = cljs.core.nth.call(null,vec__21408,(1),null);
var job = vec__21408;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21040__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results){
return (function (state_21413){
var state_val_21414 = (state_21413[(1)]);
if((state_val_21414 === (1))){
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,(2),res,v);
} else {
if((state_val_21414 === (2))){
var inst_21410 = (state_21413[(2)]);
var inst_21411 = cljs.core.async.close_BANG_.call(null,res);
var state_21413__$1 = (function (){var statearr_21415 = state_21413;
(statearr_21415[(7)] = inst_21410);

return statearr_21415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else {
return null;
}
}
});})(c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results))
;
return ((function (switch__20928__auto__,c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_21419 = [null,null,null,null,null,null,null,null];
(statearr_21419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__);

(statearr_21419[(1)] = (1));

return statearr_21419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1 = (function (state_21413){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21420){if((e21420 instanceof Object)){
var ex__20932__auto__ = e21420;
var statearr_21421_21591 = state_21413;
(statearr_21421_21591[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21592 = state_21413;
state_21413 = G__21592;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results))
})();
var state__21042__auto__ = (function (){var statearr_21422 = f__21041__auto__.call(null);
(statearr_21422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21590);

return statearr_21422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___21590,res,vec__21408,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21423){
var vec__21424 = p__21423;
var v = cljs.core.nth.call(null,vec__21424,(0),null);
var p = cljs.core.nth.call(null,vec__21424,(1),null);
var job = vec__21424;
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
var n__19787__auto___21593 = n;
var __21594 = (0);
while(true){
if((__21594 < n__19787__auto___21593)){
var G__21425_21595 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21425_21595) {
case "compute":
var c__21040__auto___21597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21594,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (__21594,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function (state_21438){
var state_val_21439 = (state_21438[(1)]);
if((state_val_21439 === (1))){
var state_21438__$1 = state_21438;
var statearr_21440_21598 = state_21438__$1;
(statearr_21440_21598[(2)] = null);

(statearr_21440_21598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21439 === (2))){
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21438__$1,(4),jobs);
} else {
if((state_val_21439 === (3))){
var inst_21436 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21438__$1,inst_21436);
} else {
if((state_val_21439 === (4))){
var inst_21428 = (state_21438[(2)]);
var inst_21429 = process.call(null,inst_21428);
var state_21438__$1 = state_21438;
if(cljs.core.truth_(inst_21429)){
var statearr_21441_21599 = state_21438__$1;
(statearr_21441_21599[(1)] = (5));

} else {
var statearr_21442_21600 = state_21438__$1;
(statearr_21442_21600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21439 === (5))){
var state_21438__$1 = state_21438;
var statearr_21443_21601 = state_21438__$1;
(statearr_21443_21601[(2)] = null);

(statearr_21443_21601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21439 === (6))){
var state_21438__$1 = state_21438;
var statearr_21444_21602 = state_21438__$1;
(statearr_21444_21602[(2)] = null);

(statearr_21444_21602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21439 === (7))){
var inst_21434 = (state_21438[(2)]);
var state_21438__$1 = state_21438;
var statearr_21445_21603 = state_21438__$1;
(statearr_21445_21603[(2)] = inst_21434);

(statearr_21445_21603[(1)] = (3));


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
});})(__21594,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
;
return ((function (__21594,switch__20928__auto__,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_21449 = [null,null,null,null,null,null,null];
(statearr_21449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__);

(statearr_21449[(1)] = (1));

return statearr_21449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1 = (function (state_21438){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21450){if((e21450 instanceof Object)){
var ex__20932__auto__ = e21450;
var statearr_21451_21604 = state_21438;
(statearr_21451_21604[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21605 = state_21438;
state_21438 = G__21605;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = function(state_21438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1.call(this,state_21438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__;
})()
;})(__21594,switch__20928__auto__,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
})();
var state__21042__auto__ = (function (){var statearr_21452 = f__21041__auto__.call(null);
(statearr_21452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21597);

return statearr_21452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(__21594,c__21040__auto___21597,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
);


break;
case "async":
var c__21040__auto___21606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21594,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (__21594,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function (state_21465){
var state_val_21466 = (state_21465[(1)]);
if((state_val_21466 === (1))){
var state_21465__$1 = state_21465;
var statearr_21467_21607 = state_21465__$1;
(statearr_21467_21607[(2)] = null);

(statearr_21467_21607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21466 === (2))){
var state_21465__$1 = state_21465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21465__$1,(4),jobs);
} else {
if((state_val_21466 === (3))){
var inst_21463 = (state_21465[(2)]);
var state_21465__$1 = state_21465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21465__$1,inst_21463);
} else {
if((state_val_21466 === (4))){
var inst_21455 = (state_21465[(2)]);
var inst_21456 = async.call(null,inst_21455);
var state_21465__$1 = state_21465;
if(cljs.core.truth_(inst_21456)){
var statearr_21468_21608 = state_21465__$1;
(statearr_21468_21608[(1)] = (5));

} else {
var statearr_21469_21609 = state_21465__$1;
(statearr_21469_21609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21466 === (5))){
var state_21465__$1 = state_21465;
var statearr_21470_21610 = state_21465__$1;
(statearr_21470_21610[(2)] = null);

(statearr_21470_21610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21466 === (6))){
var state_21465__$1 = state_21465;
var statearr_21471_21611 = state_21465__$1;
(statearr_21471_21611[(2)] = null);

(statearr_21471_21611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21466 === (7))){
var inst_21461 = (state_21465[(2)]);
var state_21465__$1 = state_21465;
var statearr_21472_21612 = state_21465__$1;
(statearr_21472_21612[(2)] = inst_21461);

(statearr_21472_21612[(1)] = (3));


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
});})(__21594,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
;
return ((function (__21594,switch__20928__auto__,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_21476 = [null,null,null,null,null,null,null];
(statearr_21476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__);

(statearr_21476[(1)] = (1));

return statearr_21476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1 = (function (state_21465){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21477){if((e21477 instanceof Object)){
var ex__20932__auto__ = e21477;
var statearr_21478_21613 = state_21465;
(statearr_21478_21613[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21614 = state_21465;
state_21465 = G__21614;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = function(state_21465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1.call(this,state_21465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__;
})()
;})(__21594,switch__20928__auto__,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
})();
var state__21042__auto__ = (function (){var statearr_21479 = f__21041__auto__.call(null);
(statearr_21479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21606);

return statearr_21479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(__21594,c__21040__auto___21606,G__21425_21595,n__19787__auto___21593,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21615 = (__21594 + (1));
__21594 = G__21615;
continue;
} else {
}
break;
}

var c__21040__auto___21616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___21616,jobs,results,process,async){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___21616,jobs,results,process,async){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (1))){
var state_21501__$1 = state_21501;
var statearr_21503_21617 = state_21501__$1;
(statearr_21503_21617[(2)] = null);

(statearr_21503_21617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (2))){
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(4),from);
} else {
if((state_val_21502 === (3))){
var inst_21499 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (4))){
var inst_21482 = (state_21501[(7)]);
var inst_21482__$1 = (state_21501[(2)]);
var inst_21483 = (inst_21482__$1 == null);
var state_21501__$1 = (function (){var statearr_21504 = state_21501;
(statearr_21504[(7)] = inst_21482__$1);

return statearr_21504;
})();
if(cljs.core.truth_(inst_21483)){
var statearr_21505_21618 = state_21501__$1;
(statearr_21505_21618[(1)] = (5));

} else {
var statearr_21506_21619 = state_21501__$1;
(statearr_21506_21619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (5))){
var inst_21485 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21501__$1 = state_21501;
var statearr_21507_21620 = state_21501__$1;
(statearr_21507_21620[(2)] = inst_21485);

(statearr_21507_21620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (6))){
var inst_21487 = (state_21501[(8)]);
var inst_21482 = (state_21501[(7)]);
var inst_21487__$1 = cljs.core.async.chan.call(null,(1));
var inst_21488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21489 = [inst_21482,inst_21487__$1];
var inst_21490 = (new cljs.core.PersistentVector(null,2,(5),inst_21488,inst_21489,null));
var state_21501__$1 = (function (){var statearr_21508 = state_21501;
(statearr_21508[(8)] = inst_21487__$1);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(8),jobs,inst_21490);
} else {
if((state_val_21502 === (7))){
var inst_21497 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21509_21621 = state_21501__$1;
(statearr_21509_21621[(2)] = inst_21497);

(statearr_21509_21621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (8))){
var inst_21487 = (state_21501[(8)]);
var inst_21492 = (state_21501[(2)]);
var state_21501__$1 = (function (){var statearr_21510 = state_21501;
(statearr_21510[(9)] = inst_21492);

return statearr_21510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(9),results,inst_21487);
} else {
if((state_val_21502 === (9))){
var inst_21494 = (state_21501[(2)]);
var state_21501__$1 = (function (){var statearr_21511 = state_21501;
(statearr_21511[(10)] = inst_21494);

return statearr_21511;
})();
var statearr_21512_21622 = state_21501__$1;
(statearr_21512_21622[(2)] = null);

(statearr_21512_21622[(1)] = (2));


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
});})(c__21040__auto___21616,jobs,results,process,async))
;
return ((function (switch__20928__auto__,c__21040__auto___21616,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_21516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__);

(statearr_21516[(1)] = (1));

return statearr_21516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1 = (function (state_21501){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21517){if((e21517 instanceof Object)){
var ex__20932__auto__ = e21517;
var statearr_21518_21623 = state_21501;
(statearr_21518_21623[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21624 = state_21501;
state_21501 = G__21624;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___21616,jobs,results,process,async))
})();
var state__21042__auto__ = (function (){var statearr_21519 = f__21041__auto__.call(null);
(statearr_21519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21616);

return statearr_21519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___21616,jobs,results,process,async))
);


var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__,jobs,results,process,async){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__,jobs,results,process,async){
return (function (state_21557){
var state_val_21558 = (state_21557[(1)]);
if((state_val_21558 === (7))){
var inst_21553 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
var statearr_21559_21625 = state_21557__$1;
(statearr_21559_21625[(2)] = inst_21553);

(statearr_21559_21625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (20))){
var state_21557__$1 = state_21557;
var statearr_21560_21626 = state_21557__$1;
(statearr_21560_21626[(2)] = null);

(statearr_21560_21626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (1))){
var state_21557__$1 = state_21557;
var statearr_21561_21627 = state_21557__$1;
(statearr_21561_21627[(2)] = null);

(statearr_21561_21627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (4))){
var inst_21522 = (state_21557[(7)]);
var inst_21522__$1 = (state_21557[(2)]);
var inst_21523 = (inst_21522__$1 == null);
var state_21557__$1 = (function (){var statearr_21562 = state_21557;
(statearr_21562[(7)] = inst_21522__$1);

return statearr_21562;
})();
if(cljs.core.truth_(inst_21523)){
var statearr_21563_21628 = state_21557__$1;
(statearr_21563_21628[(1)] = (5));

} else {
var statearr_21564_21629 = state_21557__$1;
(statearr_21564_21629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (15))){
var inst_21535 = (state_21557[(8)]);
var state_21557__$1 = state_21557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21557__$1,(18),to,inst_21535);
} else {
if((state_val_21558 === (21))){
var inst_21548 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
var statearr_21565_21630 = state_21557__$1;
(statearr_21565_21630[(2)] = inst_21548);

(statearr_21565_21630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (13))){
var inst_21550 = (state_21557[(2)]);
var state_21557__$1 = (function (){var statearr_21566 = state_21557;
(statearr_21566[(9)] = inst_21550);

return statearr_21566;
})();
var statearr_21567_21631 = state_21557__$1;
(statearr_21567_21631[(2)] = null);

(statearr_21567_21631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (6))){
var inst_21522 = (state_21557[(7)]);
var state_21557__$1 = state_21557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21557__$1,(11),inst_21522);
} else {
if((state_val_21558 === (17))){
var inst_21543 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
if(cljs.core.truth_(inst_21543)){
var statearr_21568_21632 = state_21557__$1;
(statearr_21568_21632[(1)] = (19));

} else {
var statearr_21569_21633 = state_21557__$1;
(statearr_21569_21633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (3))){
var inst_21555 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21557__$1,inst_21555);
} else {
if((state_val_21558 === (12))){
var inst_21532 = (state_21557[(10)]);
var state_21557__$1 = state_21557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21557__$1,(14),inst_21532);
} else {
if((state_val_21558 === (2))){
var state_21557__$1 = state_21557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21557__$1,(4),results);
} else {
if((state_val_21558 === (19))){
var state_21557__$1 = state_21557;
var statearr_21570_21634 = state_21557__$1;
(statearr_21570_21634[(2)] = null);

(statearr_21570_21634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (11))){
var inst_21532 = (state_21557[(2)]);
var state_21557__$1 = (function (){var statearr_21571 = state_21557;
(statearr_21571[(10)] = inst_21532);

return statearr_21571;
})();
var statearr_21572_21635 = state_21557__$1;
(statearr_21572_21635[(2)] = null);

(statearr_21572_21635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (9))){
var state_21557__$1 = state_21557;
var statearr_21573_21636 = state_21557__$1;
(statearr_21573_21636[(2)] = null);

(statearr_21573_21636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (5))){
var state_21557__$1 = state_21557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21574_21637 = state_21557__$1;
(statearr_21574_21637[(1)] = (8));

} else {
var statearr_21575_21638 = state_21557__$1;
(statearr_21575_21638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (14))){
var inst_21537 = (state_21557[(11)]);
var inst_21535 = (state_21557[(8)]);
var inst_21535__$1 = (state_21557[(2)]);
var inst_21536 = (inst_21535__$1 == null);
var inst_21537__$1 = cljs.core.not.call(null,inst_21536);
var state_21557__$1 = (function (){var statearr_21576 = state_21557;
(statearr_21576[(11)] = inst_21537__$1);

(statearr_21576[(8)] = inst_21535__$1);

return statearr_21576;
})();
if(inst_21537__$1){
var statearr_21577_21639 = state_21557__$1;
(statearr_21577_21639[(1)] = (15));

} else {
var statearr_21578_21640 = state_21557__$1;
(statearr_21578_21640[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (16))){
var inst_21537 = (state_21557[(11)]);
var state_21557__$1 = state_21557;
var statearr_21579_21641 = state_21557__$1;
(statearr_21579_21641[(2)] = inst_21537);

(statearr_21579_21641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (10))){
var inst_21529 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
var statearr_21580_21642 = state_21557__$1;
(statearr_21580_21642[(2)] = inst_21529);

(statearr_21580_21642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (18))){
var inst_21540 = (state_21557[(2)]);
var state_21557__$1 = state_21557;
var statearr_21581_21643 = state_21557__$1;
(statearr_21581_21643[(2)] = inst_21540);

(statearr_21581_21643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21558 === (8))){
var inst_21526 = cljs.core.async.close_BANG_.call(null,to);
var state_21557__$1 = state_21557;
var statearr_21582_21644 = state_21557__$1;
(statearr_21582_21644[(2)] = inst_21526);

(statearr_21582_21644[(1)] = (10));


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
});})(c__21040__auto__,jobs,results,process,async))
;
return ((function (switch__20928__auto__,c__21040__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_21586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__);

(statearr_21586[(1)] = (1));

return statearr_21586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1 = (function (state_21557){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21587){if((e21587 instanceof Object)){
var ex__20932__auto__ = e21587;
var statearr_21588_21645 = state_21557;
(statearr_21588_21645[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21646 = state_21557;
state_21557 = G__21646;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__ = function(state_21557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1.call(this,state_21557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__,jobs,results,process,async))
})();
var state__21042__auto__ = (function (){var statearr_21589 = f__21041__auto__.call(null);
(statearr_21589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__,jobs,results,process,async))
);

return c__21040__auto__;
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
var args21647 = [];
var len__19942__auto___21650 = arguments.length;
var i__19943__auto___21651 = (0);
while(true){
if((i__19943__auto___21651 < len__19942__auto___21650)){
args21647.push((arguments[i__19943__auto___21651]));

var G__21652 = (i__19943__auto___21651 + (1));
i__19943__auto___21651 = G__21652;
continue;
} else {
}
break;
}

var G__21649 = args21647.length;
switch (G__21649) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21647.length)].join('')));

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
var args21654 = [];
var len__19942__auto___21657 = arguments.length;
var i__19943__auto___21658 = (0);
while(true){
if((i__19943__auto___21658 < len__19942__auto___21657)){
args21654.push((arguments[i__19943__auto___21658]));

var G__21659 = (i__19943__auto___21658 + (1));
i__19943__auto___21658 = G__21659;
continue;
} else {
}
break;
}

var G__21656 = args21654.length;
switch (G__21656) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21654.length)].join('')));

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
var args21661 = [];
var len__19942__auto___21714 = arguments.length;
var i__19943__auto___21715 = (0);
while(true){
if((i__19943__auto___21715 < len__19942__auto___21714)){
args21661.push((arguments[i__19943__auto___21715]));

var G__21716 = (i__19943__auto___21715 + (1));
i__19943__auto___21715 = G__21716;
continue;
} else {
}
break;
}

var G__21663 = args21661.length;
switch (G__21663) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21661.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21040__auto___21718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___21718,tc,fc){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___21718,tc,fc){
return (function (state_21689){
var state_val_21690 = (state_21689[(1)]);
if((state_val_21690 === (7))){
var inst_21685 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21691_21719 = state_21689__$1;
(statearr_21691_21719[(2)] = inst_21685);

(statearr_21691_21719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (1))){
var state_21689__$1 = state_21689;
var statearr_21692_21720 = state_21689__$1;
(statearr_21692_21720[(2)] = null);

(statearr_21692_21720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (4))){
var inst_21666 = (state_21689[(7)]);
var inst_21666__$1 = (state_21689[(2)]);
var inst_21667 = (inst_21666__$1 == null);
var state_21689__$1 = (function (){var statearr_21693 = state_21689;
(statearr_21693[(7)] = inst_21666__$1);

return statearr_21693;
})();
if(cljs.core.truth_(inst_21667)){
var statearr_21694_21721 = state_21689__$1;
(statearr_21694_21721[(1)] = (5));

} else {
var statearr_21695_21722 = state_21689__$1;
(statearr_21695_21722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (13))){
var state_21689__$1 = state_21689;
var statearr_21696_21723 = state_21689__$1;
(statearr_21696_21723[(2)] = null);

(statearr_21696_21723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (6))){
var inst_21666 = (state_21689[(7)]);
var inst_21672 = p.call(null,inst_21666);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21672)){
var statearr_21697_21724 = state_21689__$1;
(statearr_21697_21724[(1)] = (9));

} else {
var statearr_21698_21725 = state_21689__$1;
(statearr_21698_21725[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (3))){
var inst_21687 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21689__$1,inst_21687);
} else {
if((state_val_21690 === (12))){
var state_21689__$1 = state_21689;
var statearr_21699_21726 = state_21689__$1;
(statearr_21699_21726[(2)] = null);

(statearr_21699_21726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (2))){
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21689__$1,(4),ch);
} else {
if((state_val_21690 === (11))){
var inst_21666 = (state_21689[(7)]);
var inst_21676 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21689__$1,(8),inst_21676,inst_21666);
} else {
if((state_val_21690 === (9))){
var state_21689__$1 = state_21689;
var statearr_21700_21727 = state_21689__$1;
(statearr_21700_21727[(2)] = tc);

(statearr_21700_21727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (5))){
var inst_21669 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21670 = cljs.core.async.close_BANG_.call(null,fc);
var state_21689__$1 = (function (){var statearr_21701 = state_21689;
(statearr_21701[(8)] = inst_21669);

return statearr_21701;
})();
var statearr_21702_21728 = state_21689__$1;
(statearr_21702_21728[(2)] = inst_21670);

(statearr_21702_21728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (14))){
var inst_21683 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21703_21729 = state_21689__$1;
(statearr_21703_21729[(2)] = inst_21683);

(statearr_21703_21729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (10))){
var state_21689__$1 = state_21689;
var statearr_21704_21730 = state_21689__$1;
(statearr_21704_21730[(2)] = fc);

(statearr_21704_21730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (8))){
var inst_21678 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21678)){
var statearr_21705_21731 = state_21689__$1;
(statearr_21705_21731[(1)] = (12));

} else {
var statearr_21706_21732 = state_21689__$1;
(statearr_21706_21732[(1)] = (13));

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
});})(c__21040__auto___21718,tc,fc))
;
return ((function (switch__20928__auto__,c__21040__auto___21718,tc,fc){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_21710 = [null,null,null,null,null,null,null,null,null];
(statearr_21710[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_21710[(1)] = (1));

return statearr_21710;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_21689){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21711){if((e21711 instanceof Object)){
var ex__20932__auto__ = e21711;
var statearr_21712_21733 = state_21689;
(statearr_21712_21733[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21734 = state_21689;
state_21689 = G__21734;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_21689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_21689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___21718,tc,fc))
})();
var state__21042__auto__ = (function (){var statearr_21713 = f__21041__auto__.call(null);
(statearr_21713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___21718);

return statearr_21713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___21718,tc,fc))
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
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_21798){
var state_val_21799 = (state_21798[(1)]);
if((state_val_21799 === (7))){
var inst_21794 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21800_21821 = state_21798__$1;
(statearr_21800_21821[(2)] = inst_21794);

(statearr_21800_21821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (1))){
var inst_21778 = init;
var state_21798__$1 = (function (){var statearr_21801 = state_21798;
(statearr_21801[(7)] = inst_21778);

return statearr_21801;
})();
var statearr_21802_21822 = state_21798__$1;
(statearr_21802_21822[(2)] = null);

(statearr_21802_21822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (4))){
var inst_21781 = (state_21798[(8)]);
var inst_21781__$1 = (state_21798[(2)]);
var inst_21782 = (inst_21781__$1 == null);
var state_21798__$1 = (function (){var statearr_21803 = state_21798;
(statearr_21803[(8)] = inst_21781__$1);

return statearr_21803;
})();
if(cljs.core.truth_(inst_21782)){
var statearr_21804_21823 = state_21798__$1;
(statearr_21804_21823[(1)] = (5));

} else {
var statearr_21805_21824 = state_21798__$1;
(statearr_21805_21824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (6))){
var inst_21778 = (state_21798[(7)]);
var inst_21781 = (state_21798[(8)]);
var inst_21785 = (state_21798[(9)]);
var inst_21785__$1 = f.call(null,inst_21778,inst_21781);
var inst_21786 = cljs.core.reduced_QMARK_.call(null,inst_21785__$1);
var state_21798__$1 = (function (){var statearr_21806 = state_21798;
(statearr_21806[(9)] = inst_21785__$1);

return statearr_21806;
})();
if(inst_21786){
var statearr_21807_21825 = state_21798__$1;
(statearr_21807_21825[(1)] = (8));

} else {
var statearr_21808_21826 = state_21798__$1;
(statearr_21808_21826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (3))){
var inst_21796 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21798__$1,inst_21796);
} else {
if((state_val_21799 === (2))){
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21798__$1,(4),ch);
} else {
if((state_val_21799 === (9))){
var inst_21785 = (state_21798[(9)]);
var inst_21778 = inst_21785;
var state_21798__$1 = (function (){var statearr_21809 = state_21798;
(statearr_21809[(7)] = inst_21778);

return statearr_21809;
})();
var statearr_21810_21827 = state_21798__$1;
(statearr_21810_21827[(2)] = null);

(statearr_21810_21827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (5))){
var inst_21778 = (state_21798[(7)]);
var state_21798__$1 = state_21798;
var statearr_21811_21828 = state_21798__$1;
(statearr_21811_21828[(2)] = inst_21778);

(statearr_21811_21828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (10))){
var inst_21792 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21812_21829 = state_21798__$1;
(statearr_21812_21829[(2)] = inst_21792);

(statearr_21812_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (8))){
var inst_21785 = (state_21798[(9)]);
var inst_21788 = cljs.core.deref.call(null,inst_21785);
var state_21798__$1 = state_21798;
var statearr_21813_21830 = state_21798__$1;
(statearr_21813_21830[(2)] = inst_21788);

(statearr_21813_21830[(1)] = (10));


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
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20929__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20929__auto____0 = (function (){
var statearr_21817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21817[(0)] = cljs$core$async$reduce_$_state_machine__20929__auto__);

(statearr_21817[(1)] = (1));

return statearr_21817;
});
var cljs$core$async$reduce_$_state_machine__20929__auto____1 = (function (state_21798){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21818){if((e21818 instanceof Object)){
var ex__20932__auto__ = e21818;
var statearr_21819_21831 = state_21798;
(statearr_21819_21831[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21832 = state_21798;
state_21798 = G__21832;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20929__auto__ = function(state_21798){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20929__auto____1.call(this,state_21798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20929__auto____0;
cljs$core$async$reduce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20929__auto____1;
return cljs$core$async$reduce_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_21820 = f__21041__auto__.call(null);
(statearr_21820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_21820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__,f__$1){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__,f__$1){
return (function (state_21852){
var state_val_21853 = (state_21852[(1)]);
if((state_val_21853 === (1))){
var inst_21847 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21852__$1 = state_21852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21852__$1,(2),inst_21847);
} else {
if((state_val_21853 === (2))){
var inst_21849 = (state_21852[(2)]);
var inst_21850 = f__$1.call(null,inst_21849);
var state_21852__$1 = state_21852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21852__$1,inst_21850);
} else {
return null;
}
}
});})(c__21040__auto__,f__$1))
;
return ((function (switch__20928__auto__,c__21040__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__20929__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20929__auto____0 = (function (){
var statearr_21857 = [null,null,null,null,null,null,null];
(statearr_21857[(0)] = cljs$core$async$transduce_$_state_machine__20929__auto__);

(statearr_21857[(1)] = (1));

return statearr_21857;
});
var cljs$core$async$transduce_$_state_machine__20929__auto____1 = (function (state_21852){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21858){if((e21858 instanceof Object)){
var ex__20932__auto__ = e21858;
var statearr_21859_21861 = state_21852;
(statearr_21859_21861[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21862 = state_21852;
state_21852 = G__21862;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20929__auto__ = function(state_21852){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20929__auto____1.call(this,state_21852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20929__auto____0;
cljs$core$async$transduce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20929__auto____1;
return cljs$core$async$transduce_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__,f__$1))
})();
var state__21042__auto__ = (function (){var statearr_21860 = f__21041__auto__.call(null);
(statearr_21860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_21860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__,f__$1))
);

return c__21040__auto__;
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
var args21863 = [];
var len__19942__auto___21915 = arguments.length;
var i__19943__auto___21916 = (0);
while(true){
if((i__19943__auto___21916 < len__19942__auto___21915)){
args21863.push((arguments[i__19943__auto___21916]));

var G__21917 = (i__19943__auto___21916 + (1));
i__19943__auto___21916 = G__21917;
continue;
} else {
}
break;
}

var G__21865 = args21863.length;
switch (G__21865) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21863.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_21890){
var state_val_21891 = (state_21890[(1)]);
if((state_val_21891 === (7))){
var inst_21872 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21892_21919 = state_21890__$1;
(statearr_21892_21919[(2)] = inst_21872);

(statearr_21892_21919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (1))){
var inst_21866 = cljs.core.seq.call(null,coll);
var inst_21867 = inst_21866;
var state_21890__$1 = (function (){var statearr_21893 = state_21890;
(statearr_21893[(7)] = inst_21867);

return statearr_21893;
})();
var statearr_21894_21920 = state_21890__$1;
(statearr_21894_21920[(2)] = null);

(statearr_21894_21920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (4))){
var inst_21867 = (state_21890[(7)]);
var inst_21870 = cljs.core.first.call(null,inst_21867);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21890__$1,(7),ch,inst_21870);
} else {
if((state_val_21891 === (13))){
var inst_21884 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21895_21921 = state_21890__$1;
(statearr_21895_21921[(2)] = inst_21884);

(statearr_21895_21921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (6))){
var inst_21875 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
if(cljs.core.truth_(inst_21875)){
var statearr_21896_21922 = state_21890__$1;
(statearr_21896_21922[(1)] = (8));

} else {
var statearr_21897_21923 = state_21890__$1;
(statearr_21897_21923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (3))){
var inst_21888 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21890__$1,inst_21888);
} else {
if((state_val_21891 === (12))){
var state_21890__$1 = state_21890;
var statearr_21898_21924 = state_21890__$1;
(statearr_21898_21924[(2)] = null);

(statearr_21898_21924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (2))){
var inst_21867 = (state_21890[(7)]);
var state_21890__$1 = state_21890;
if(cljs.core.truth_(inst_21867)){
var statearr_21899_21925 = state_21890__$1;
(statearr_21899_21925[(1)] = (4));

} else {
var statearr_21900_21926 = state_21890__$1;
(statearr_21900_21926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (11))){
var inst_21881 = cljs.core.async.close_BANG_.call(null,ch);
var state_21890__$1 = state_21890;
var statearr_21901_21927 = state_21890__$1;
(statearr_21901_21927[(2)] = inst_21881);

(statearr_21901_21927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (9))){
var state_21890__$1 = state_21890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21902_21928 = state_21890__$1;
(statearr_21902_21928[(1)] = (11));

} else {
var statearr_21903_21929 = state_21890__$1;
(statearr_21903_21929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (5))){
var inst_21867 = (state_21890[(7)]);
var state_21890__$1 = state_21890;
var statearr_21904_21930 = state_21890__$1;
(statearr_21904_21930[(2)] = inst_21867);

(statearr_21904_21930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (10))){
var inst_21886 = (state_21890[(2)]);
var state_21890__$1 = state_21890;
var statearr_21905_21931 = state_21890__$1;
(statearr_21905_21931[(2)] = inst_21886);

(statearr_21905_21931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21891 === (8))){
var inst_21867 = (state_21890[(7)]);
var inst_21877 = cljs.core.next.call(null,inst_21867);
var inst_21867__$1 = inst_21877;
var state_21890__$1 = (function (){var statearr_21906 = state_21890;
(statearr_21906[(7)] = inst_21867__$1);

return statearr_21906;
})();
var statearr_21907_21932 = state_21890__$1;
(statearr_21907_21932[(2)] = null);

(statearr_21907_21932[(1)] = (2));


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
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_21911 = [null,null,null,null,null,null,null,null];
(statearr_21911[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_21911[(1)] = (1));

return statearr_21911;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_21890){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_21890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e21912){if((e21912 instanceof Object)){
var ex__20932__auto__ = e21912;
var statearr_21913_21933 = state_21890;
(statearr_21913_21933[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21934 = state_21890;
state_21890 = G__21934;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_21890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_21890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_21914 = f__21041__auto__.call(null);
(statearr_21914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_21914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
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
var x__19536__auto__ = (((_ == null))?null:_);
var m__19537__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,_);
} else {
var m__19537__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,_);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19537__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,ch);
} else {
var m__19537__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,ch);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m);
} else {
var m__19537__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22156 = (function (mult,ch,cs,meta22157){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22157 = meta22157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22158,meta22157__$1){
var self__ = this;
var _22158__$1 = this;
return (new cljs.core.async.t_cljs$core$async22156(self__.mult,self__.ch,self__.cs,meta22157__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22158){
var self__ = this;
var _22158__$1 = this;
return self__.meta22157;
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22157","meta22157",280999590,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22156";

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async22156");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22156 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22156(mult__$1,ch__$1,cs__$1,meta22157){
return (new cljs.core.async.t_cljs$core$async22156(mult__$1,ch__$1,cs__$1,meta22157));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22156(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21040__auto___22377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___22377,cs,m,dchan,dctr,done){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___22377,cs,m,dchan,dctr,done){
return (function (state_22289){
var state_val_22290 = (state_22289[(1)]);
if((state_val_22290 === (7))){
var inst_22285 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22291_22378 = state_22289__$1;
(statearr_22291_22378[(2)] = inst_22285);

(statearr_22291_22378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (20))){
var inst_22190 = (state_22289[(7)]);
var inst_22200 = cljs.core.first.call(null,inst_22190);
var inst_22201 = cljs.core.nth.call(null,inst_22200,(0),null);
var inst_22202 = cljs.core.nth.call(null,inst_22200,(1),null);
var state_22289__$1 = (function (){var statearr_22292 = state_22289;
(statearr_22292[(8)] = inst_22201);

return statearr_22292;
})();
if(cljs.core.truth_(inst_22202)){
var statearr_22293_22379 = state_22289__$1;
(statearr_22293_22379[(1)] = (22));

} else {
var statearr_22294_22380 = state_22289__$1;
(statearr_22294_22380[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (27))){
var inst_22237 = (state_22289[(9)]);
var inst_22230 = (state_22289[(10)]);
var inst_22232 = (state_22289[(11)]);
var inst_22161 = (state_22289[(12)]);
var inst_22237__$1 = cljs.core._nth.call(null,inst_22230,inst_22232);
var inst_22238 = cljs.core.async.put_BANG_.call(null,inst_22237__$1,inst_22161,done);
var state_22289__$1 = (function (){var statearr_22295 = state_22289;
(statearr_22295[(9)] = inst_22237__$1);

return statearr_22295;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22296_22381 = state_22289__$1;
(statearr_22296_22381[(1)] = (30));

} else {
var statearr_22297_22382 = state_22289__$1;
(statearr_22297_22382[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (1))){
var state_22289__$1 = state_22289;
var statearr_22298_22383 = state_22289__$1;
(statearr_22298_22383[(2)] = null);

(statearr_22298_22383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (24))){
var inst_22190 = (state_22289[(7)]);
var inst_22207 = (state_22289[(2)]);
var inst_22208 = cljs.core.next.call(null,inst_22190);
var inst_22170 = inst_22208;
var inst_22171 = null;
var inst_22172 = (0);
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22299 = state_22289;
(statearr_22299[(13)] = inst_22171);

(statearr_22299[(14)] = inst_22207);

(statearr_22299[(15)] = inst_22173);

(statearr_22299[(16)] = inst_22172);

(statearr_22299[(17)] = inst_22170);

return statearr_22299;
})();
var statearr_22300_22384 = state_22289__$1;
(statearr_22300_22384[(2)] = null);

(statearr_22300_22384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (39))){
var state_22289__$1 = state_22289;
var statearr_22304_22385 = state_22289__$1;
(statearr_22304_22385[(2)] = null);

(statearr_22304_22385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (4))){
var inst_22161 = (state_22289[(12)]);
var inst_22161__$1 = (state_22289[(2)]);
var inst_22162 = (inst_22161__$1 == null);
var state_22289__$1 = (function (){var statearr_22305 = state_22289;
(statearr_22305[(12)] = inst_22161__$1);

return statearr_22305;
})();
if(cljs.core.truth_(inst_22162)){
var statearr_22306_22386 = state_22289__$1;
(statearr_22306_22386[(1)] = (5));

} else {
var statearr_22307_22387 = state_22289__$1;
(statearr_22307_22387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (15))){
var inst_22171 = (state_22289[(13)]);
var inst_22173 = (state_22289[(15)]);
var inst_22172 = (state_22289[(16)]);
var inst_22170 = (state_22289[(17)]);
var inst_22186 = (state_22289[(2)]);
var inst_22187 = (inst_22173 + (1));
var tmp22301 = inst_22171;
var tmp22302 = inst_22172;
var tmp22303 = inst_22170;
var inst_22170__$1 = tmp22303;
var inst_22171__$1 = tmp22301;
var inst_22172__$1 = tmp22302;
var inst_22173__$1 = inst_22187;
var state_22289__$1 = (function (){var statearr_22308 = state_22289;
(statearr_22308[(13)] = inst_22171__$1);

(statearr_22308[(15)] = inst_22173__$1);

(statearr_22308[(16)] = inst_22172__$1);

(statearr_22308[(18)] = inst_22186);

(statearr_22308[(17)] = inst_22170__$1);

return statearr_22308;
})();
var statearr_22309_22388 = state_22289__$1;
(statearr_22309_22388[(2)] = null);

(statearr_22309_22388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (21))){
var inst_22211 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22313_22389 = state_22289__$1;
(statearr_22313_22389[(2)] = inst_22211);

(statearr_22313_22389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (31))){
var inst_22237 = (state_22289[(9)]);
var inst_22241 = done.call(null,null);
var inst_22242 = cljs.core.async.untap_STAR_.call(null,m,inst_22237);
var state_22289__$1 = (function (){var statearr_22314 = state_22289;
(statearr_22314[(19)] = inst_22241);

return statearr_22314;
})();
var statearr_22315_22390 = state_22289__$1;
(statearr_22315_22390[(2)] = inst_22242);

(statearr_22315_22390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (32))){
var inst_22230 = (state_22289[(10)]);
var inst_22232 = (state_22289[(11)]);
var inst_22231 = (state_22289[(20)]);
var inst_22229 = (state_22289[(21)]);
var inst_22244 = (state_22289[(2)]);
var inst_22245 = (inst_22232 + (1));
var tmp22310 = inst_22230;
var tmp22311 = inst_22231;
var tmp22312 = inst_22229;
var inst_22229__$1 = tmp22312;
var inst_22230__$1 = tmp22310;
var inst_22231__$1 = tmp22311;
var inst_22232__$1 = inst_22245;
var state_22289__$1 = (function (){var statearr_22316 = state_22289;
(statearr_22316[(10)] = inst_22230__$1);

(statearr_22316[(11)] = inst_22232__$1);

(statearr_22316[(20)] = inst_22231__$1);

(statearr_22316[(21)] = inst_22229__$1);

(statearr_22316[(22)] = inst_22244);

return statearr_22316;
})();
var statearr_22317_22391 = state_22289__$1;
(statearr_22317_22391[(2)] = null);

(statearr_22317_22391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (40))){
var inst_22257 = (state_22289[(23)]);
var inst_22261 = done.call(null,null);
var inst_22262 = cljs.core.async.untap_STAR_.call(null,m,inst_22257);
var state_22289__$1 = (function (){var statearr_22318 = state_22289;
(statearr_22318[(24)] = inst_22261);

return statearr_22318;
})();
var statearr_22319_22392 = state_22289__$1;
(statearr_22319_22392[(2)] = inst_22262);

(statearr_22319_22392[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (33))){
var inst_22248 = (state_22289[(25)]);
var inst_22250 = cljs.core.chunked_seq_QMARK_.call(null,inst_22248);
var state_22289__$1 = state_22289;
if(inst_22250){
var statearr_22320_22393 = state_22289__$1;
(statearr_22320_22393[(1)] = (36));

} else {
var statearr_22321_22394 = state_22289__$1;
(statearr_22321_22394[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (13))){
var inst_22180 = (state_22289[(26)]);
var inst_22183 = cljs.core.async.close_BANG_.call(null,inst_22180);
var state_22289__$1 = state_22289;
var statearr_22322_22395 = state_22289__$1;
(statearr_22322_22395[(2)] = inst_22183);

(statearr_22322_22395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (22))){
var inst_22201 = (state_22289[(8)]);
var inst_22204 = cljs.core.async.close_BANG_.call(null,inst_22201);
var state_22289__$1 = state_22289;
var statearr_22323_22396 = state_22289__$1;
(statearr_22323_22396[(2)] = inst_22204);

(statearr_22323_22396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (36))){
var inst_22248 = (state_22289[(25)]);
var inst_22252 = cljs.core.chunk_first.call(null,inst_22248);
var inst_22253 = cljs.core.chunk_rest.call(null,inst_22248);
var inst_22254 = cljs.core.count.call(null,inst_22252);
var inst_22229 = inst_22253;
var inst_22230 = inst_22252;
var inst_22231 = inst_22254;
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22324 = state_22289;
(statearr_22324[(10)] = inst_22230);

(statearr_22324[(11)] = inst_22232);

(statearr_22324[(20)] = inst_22231);

(statearr_22324[(21)] = inst_22229);

return statearr_22324;
})();
var statearr_22325_22397 = state_22289__$1;
(statearr_22325_22397[(2)] = null);

(statearr_22325_22397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (41))){
var inst_22248 = (state_22289[(25)]);
var inst_22264 = (state_22289[(2)]);
var inst_22265 = cljs.core.next.call(null,inst_22248);
var inst_22229 = inst_22265;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22326 = state_22289;
(statearr_22326[(10)] = inst_22230);

(statearr_22326[(11)] = inst_22232);

(statearr_22326[(20)] = inst_22231);

(statearr_22326[(27)] = inst_22264);

(statearr_22326[(21)] = inst_22229);

return statearr_22326;
})();
var statearr_22327_22398 = state_22289__$1;
(statearr_22327_22398[(2)] = null);

(statearr_22327_22398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (43))){
var state_22289__$1 = state_22289;
var statearr_22328_22399 = state_22289__$1;
(statearr_22328_22399[(2)] = null);

(statearr_22328_22399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (29))){
var inst_22273 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22329_22400 = state_22289__$1;
(statearr_22329_22400[(2)] = inst_22273);

(statearr_22329_22400[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (44))){
var inst_22282 = (state_22289[(2)]);
var state_22289__$1 = (function (){var statearr_22330 = state_22289;
(statearr_22330[(28)] = inst_22282);

return statearr_22330;
})();
var statearr_22331_22401 = state_22289__$1;
(statearr_22331_22401[(2)] = null);

(statearr_22331_22401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (6))){
var inst_22221 = (state_22289[(29)]);
var inst_22220 = cljs.core.deref.call(null,cs);
var inst_22221__$1 = cljs.core.keys.call(null,inst_22220);
var inst_22222 = cljs.core.count.call(null,inst_22221__$1);
var inst_22223 = cljs.core.reset_BANG_.call(null,dctr,inst_22222);
var inst_22228 = cljs.core.seq.call(null,inst_22221__$1);
var inst_22229 = inst_22228;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22332 = state_22289;
(statearr_22332[(10)] = inst_22230);

(statearr_22332[(11)] = inst_22232);

(statearr_22332[(20)] = inst_22231);

(statearr_22332[(29)] = inst_22221__$1);

(statearr_22332[(21)] = inst_22229);

(statearr_22332[(30)] = inst_22223);

return statearr_22332;
})();
var statearr_22333_22402 = state_22289__$1;
(statearr_22333_22402[(2)] = null);

(statearr_22333_22402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (28))){
var inst_22229 = (state_22289[(21)]);
var inst_22248 = (state_22289[(25)]);
var inst_22248__$1 = cljs.core.seq.call(null,inst_22229);
var state_22289__$1 = (function (){var statearr_22334 = state_22289;
(statearr_22334[(25)] = inst_22248__$1);

return statearr_22334;
})();
if(inst_22248__$1){
var statearr_22335_22403 = state_22289__$1;
(statearr_22335_22403[(1)] = (33));

} else {
var statearr_22336_22404 = state_22289__$1;
(statearr_22336_22404[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (25))){
var inst_22232 = (state_22289[(11)]);
var inst_22231 = (state_22289[(20)]);
var inst_22234 = (inst_22232 < inst_22231);
var inst_22235 = inst_22234;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22235)){
var statearr_22337_22405 = state_22289__$1;
(statearr_22337_22405[(1)] = (27));

} else {
var statearr_22338_22406 = state_22289__$1;
(statearr_22338_22406[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (34))){
var state_22289__$1 = state_22289;
var statearr_22339_22407 = state_22289__$1;
(statearr_22339_22407[(2)] = null);

(statearr_22339_22407[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (17))){
var state_22289__$1 = state_22289;
var statearr_22340_22408 = state_22289__$1;
(statearr_22340_22408[(2)] = null);

(statearr_22340_22408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (3))){
var inst_22287 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22289__$1,inst_22287);
} else {
if((state_val_22290 === (12))){
var inst_22216 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22341_22409 = state_22289__$1;
(statearr_22341_22409[(2)] = inst_22216);

(statearr_22341_22409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (2))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22289__$1,(4),ch);
} else {
if((state_val_22290 === (23))){
var state_22289__$1 = state_22289;
var statearr_22342_22410 = state_22289__$1;
(statearr_22342_22410[(2)] = null);

(statearr_22342_22410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (35))){
var inst_22271 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22343_22411 = state_22289__$1;
(statearr_22343_22411[(2)] = inst_22271);

(statearr_22343_22411[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (19))){
var inst_22190 = (state_22289[(7)]);
var inst_22194 = cljs.core.chunk_first.call(null,inst_22190);
var inst_22195 = cljs.core.chunk_rest.call(null,inst_22190);
var inst_22196 = cljs.core.count.call(null,inst_22194);
var inst_22170 = inst_22195;
var inst_22171 = inst_22194;
var inst_22172 = inst_22196;
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22344 = state_22289;
(statearr_22344[(13)] = inst_22171);

(statearr_22344[(15)] = inst_22173);

(statearr_22344[(16)] = inst_22172);

(statearr_22344[(17)] = inst_22170);

return statearr_22344;
})();
var statearr_22345_22412 = state_22289__$1;
(statearr_22345_22412[(2)] = null);

(statearr_22345_22412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (11))){
var inst_22190 = (state_22289[(7)]);
var inst_22170 = (state_22289[(17)]);
var inst_22190__$1 = cljs.core.seq.call(null,inst_22170);
var state_22289__$1 = (function (){var statearr_22346 = state_22289;
(statearr_22346[(7)] = inst_22190__$1);

return statearr_22346;
})();
if(inst_22190__$1){
var statearr_22347_22413 = state_22289__$1;
(statearr_22347_22413[(1)] = (16));

} else {
var statearr_22348_22414 = state_22289__$1;
(statearr_22348_22414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (9))){
var inst_22218 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22349_22415 = state_22289__$1;
(statearr_22349_22415[(2)] = inst_22218);

(statearr_22349_22415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (5))){
var inst_22168 = cljs.core.deref.call(null,cs);
var inst_22169 = cljs.core.seq.call(null,inst_22168);
var inst_22170 = inst_22169;
var inst_22171 = null;
var inst_22172 = (0);
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22350 = state_22289;
(statearr_22350[(13)] = inst_22171);

(statearr_22350[(15)] = inst_22173);

(statearr_22350[(16)] = inst_22172);

(statearr_22350[(17)] = inst_22170);

return statearr_22350;
})();
var statearr_22351_22416 = state_22289__$1;
(statearr_22351_22416[(2)] = null);

(statearr_22351_22416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (14))){
var state_22289__$1 = state_22289;
var statearr_22352_22417 = state_22289__$1;
(statearr_22352_22417[(2)] = null);

(statearr_22352_22417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (45))){
var inst_22279 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22353_22418 = state_22289__$1;
(statearr_22353_22418[(2)] = inst_22279);

(statearr_22353_22418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (26))){
var inst_22221 = (state_22289[(29)]);
var inst_22275 = (state_22289[(2)]);
var inst_22276 = cljs.core.seq.call(null,inst_22221);
var state_22289__$1 = (function (){var statearr_22354 = state_22289;
(statearr_22354[(31)] = inst_22275);

return statearr_22354;
})();
if(inst_22276){
var statearr_22355_22419 = state_22289__$1;
(statearr_22355_22419[(1)] = (42));

} else {
var statearr_22356_22420 = state_22289__$1;
(statearr_22356_22420[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (16))){
var inst_22190 = (state_22289[(7)]);
var inst_22192 = cljs.core.chunked_seq_QMARK_.call(null,inst_22190);
var state_22289__$1 = state_22289;
if(inst_22192){
var statearr_22357_22421 = state_22289__$1;
(statearr_22357_22421[(1)] = (19));

} else {
var statearr_22358_22422 = state_22289__$1;
(statearr_22358_22422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (38))){
var inst_22268 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22359_22423 = state_22289__$1;
(statearr_22359_22423[(2)] = inst_22268);

(statearr_22359_22423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (30))){
var state_22289__$1 = state_22289;
var statearr_22360_22424 = state_22289__$1;
(statearr_22360_22424[(2)] = null);

(statearr_22360_22424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (10))){
var inst_22171 = (state_22289[(13)]);
var inst_22173 = (state_22289[(15)]);
var inst_22179 = cljs.core._nth.call(null,inst_22171,inst_22173);
var inst_22180 = cljs.core.nth.call(null,inst_22179,(0),null);
var inst_22181 = cljs.core.nth.call(null,inst_22179,(1),null);
var state_22289__$1 = (function (){var statearr_22361 = state_22289;
(statearr_22361[(26)] = inst_22180);

return statearr_22361;
})();
if(cljs.core.truth_(inst_22181)){
var statearr_22362_22425 = state_22289__$1;
(statearr_22362_22425[(1)] = (13));

} else {
var statearr_22363_22426 = state_22289__$1;
(statearr_22363_22426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (18))){
var inst_22214 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22364_22427 = state_22289__$1;
(statearr_22364_22427[(2)] = inst_22214);

(statearr_22364_22427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (42))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22289__$1,(45),dchan);
} else {
if((state_val_22290 === (37))){
var inst_22161 = (state_22289[(12)]);
var inst_22248 = (state_22289[(25)]);
var inst_22257 = (state_22289[(23)]);
var inst_22257__$1 = cljs.core.first.call(null,inst_22248);
var inst_22258 = cljs.core.async.put_BANG_.call(null,inst_22257__$1,inst_22161,done);
var state_22289__$1 = (function (){var statearr_22365 = state_22289;
(statearr_22365[(23)] = inst_22257__$1);

return statearr_22365;
})();
if(cljs.core.truth_(inst_22258)){
var statearr_22366_22428 = state_22289__$1;
(statearr_22366_22428[(1)] = (39));

} else {
var statearr_22367_22429 = state_22289__$1;
(statearr_22367_22429[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22290 === (8))){
var inst_22173 = (state_22289[(15)]);
var inst_22172 = (state_22289[(16)]);
var inst_22175 = (inst_22173 < inst_22172);
var inst_22176 = inst_22175;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22176)){
var statearr_22368_22430 = state_22289__$1;
(statearr_22368_22430[(1)] = (10));

} else {
var statearr_22369_22431 = state_22289__$1;
(statearr_22369_22431[(1)] = (11));

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
});})(c__21040__auto___22377,cs,m,dchan,dctr,done))
;
return ((function (switch__20928__auto__,c__21040__auto___22377,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20929__auto__ = null;
var cljs$core$async$mult_$_state_machine__20929__auto____0 = (function (){
var statearr_22373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22373[(0)] = cljs$core$async$mult_$_state_machine__20929__auto__);

(statearr_22373[(1)] = (1));

return statearr_22373;
});
var cljs$core$async$mult_$_state_machine__20929__auto____1 = (function (state_22289){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_22289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e22374){if((e22374 instanceof Object)){
var ex__20932__auto__ = e22374;
var statearr_22375_22432 = state_22289;
(statearr_22375_22432[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22433 = state_22289;
state_22289 = G__22433;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20929__auto__ = function(state_22289){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20929__auto____1.call(this,state_22289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20929__auto____0;
cljs$core$async$mult_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20929__auto____1;
return cljs$core$async$mult_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___22377,cs,m,dchan,dctr,done))
})();
var state__21042__auto__ = (function (){var statearr_22376 = f__21041__auto__.call(null);
(statearr_22376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___22377);

return statearr_22376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___22377,cs,m,dchan,dctr,done))
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
var args22434 = [];
var len__19942__auto___22437 = arguments.length;
var i__19943__auto___22438 = (0);
while(true){
if((i__19943__auto___22438 < len__19942__auto___22437)){
args22434.push((arguments[i__19943__auto___22438]));

var G__22439 = (i__19943__auto___22438 + (1));
i__19943__auto___22438 = G__22439;
continue;
} else {
}
break;
}

var G__22436 = args22434.length;
switch (G__22436) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22434.length)].join('')));

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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,ch);
} else {
var m__19537__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,ch);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,ch);
} else {
var m__19537__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,ch);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m);
} else {
var m__19537__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,state_map);
} else {
var m__19537__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,state_map);
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
var x__19536__auto__ = (((m == null))?null:m);
var m__19537__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,m,mode);
} else {
var m__19537__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19949__auto__ = [];
var len__19942__auto___22451 = arguments.length;
var i__19943__auto___22452 = (0);
while(true){
if((i__19943__auto___22452 < len__19942__auto___22451)){
args__19949__auto__.push((arguments[i__19943__auto___22452]));

var G__22453 = (i__19943__auto___22452 + (1));
i__19943__auto___22452 = G__22453;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((3) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19950__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22445){
var map__22446 = p__22445;
var map__22446__$1 = ((((!((map__22446 == null)))?((((map__22446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22446):map__22446);
var opts = map__22446__$1;
var statearr_22448_22454 = state;
(statearr_22448_22454[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22446,map__22446__$1,opts){
return (function (val){
var statearr_22449_22455 = state;
(statearr_22449_22455[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22446,map__22446__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22450_22456 = state;
(statearr_22450_22456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22441){
var G__22442 = cljs.core.first.call(null,seq22441);
var seq22441__$1 = cljs.core.next.call(null,seq22441);
var G__22443 = cljs.core.first.call(null,seq22441__$1);
var seq22441__$2 = cljs.core.next.call(null,seq22441__$1);
var G__22444 = cljs.core.first.call(null,seq22441__$2);
var seq22441__$3 = cljs.core.next.call(null,seq22441__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22442,G__22443,G__22444,seq22441__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22620 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22621){
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
this.meta22621 = meta22621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22622,meta22621__$1){
var self__ = this;
var _22622__$1 = this;
return (new cljs.core.async.t_cljs$core$async22620(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22621__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22622){
var self__ = this;
var _22622__$1 = this;
return self__.meta22621;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22620.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22621","meta22621",1770019718,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22620";

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async22620");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22620 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22621){
return (new cljs.core.async.t_cljs$core$async22620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22621));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22620(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21040__auto___22783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22720){
var state_val_22721 = (state_22720[(1)]);
if((state_val_22721 === (7))){
var inst_22638 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22722_22784 = state_22720__$1;
(statearr_22722_22784[(2)] = inst_22638);

(statearr_22722_22784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (20))){
var inst_22650 = (state_22720[(7)]);
var state_22720__$1 = state_22720;
var statearr_22723_22785 = state_22720__$1;
(statearr_22723_22785[(2)] = inst_22650);

(statearr_22723_22785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (27))){
var state_22720__$1 = state_22720;
var statearr_22724_22786 = state_22720__$1;
(statearr_22724_22786[(2)] = null);

(statearr_22724_22786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (1))){
var inst_22626 = (state_22720[(8)]);
var inst_22626__$1 = calc_state.call(null);
var inst_22628 = (inst_22626__$1 == null);
var inst_22629 = cljs.core.not.call(null,inst_22628);
var state_22720__$1 = (function (){var statearr_22725 = state_22720;
(statearr_22725[(8)] = inst_22626__$1);

return statearr_22725;
})();
if(inst_22629){
var statearr_22726_22787 = state_22720__$1;
(statearr_22726_22787[(1)] = (2));

} else {
var statearr_22727_22788 = state_22720__$1;
(statearr_22727_22788[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (24))){
var inst_22680 = (state_22720[(9)]);
var inst_22673 = (state_22720[(10)]);
var inst_22694 = (state_22720[(11)]);
var inst_22694__$1 = inst_22673.call(null,inst_22680);
var state_22720__$1 = (function (){var statearr_22728 = state_22720;
(statearr_22728[(11)] = inst_22694__$1);

return statearr_22728;
})();
if(cljs.core.truth_(inst_22694__$1)){
var statearr_22729_22789 = state_22720__$1;
(statearr_22729_22789[(1)] = (29));

} else {
var statearr_22730_22790 = state_22720__$1;
(statearr_22730_22790[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (4))){
var inst_22641 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22641)){
var statearr_22731_22791 = state_22720__$1;
(statearr_22731_22791[(1)] = (8));

} else {
var statearr_22732_22792 = state_22720__$1;
(statearr_22732_22792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (15))){
var inst_22667 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22667)){
var statearr_22733_22793 = state_22720__$1;
(statearr_22733_22793[(1)] = (19));

} else {
var statearr_22734_22794 = state_22720__$1;
(statearr_22734_22794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (21))){
var inst_22672 = (state_22720[(12)]);
var inst_22672__$1 = (state_22720[(2)]);
var inst_22673 = cljs.core.get.call(null,inst_22672__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22674 = cljs.core.get.call(null,inst_22672__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22675 = cljs.core.get.call(null,inst_22672__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22720__$1 = (function (){var statearr_22735 = state_22720;
(statearr_22735[(12)] = inst_22672__$1);

(statearr_22735[(10)] = inst_22673);

(statearr_22735[(13)] = inst_22674);

return statearr_22735;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22720__$1,(22),inst_22675);
} else {
if((state_val_22721 === (31))){
var inst_22702 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22702)){
var statearr_22736_22795 = state_22720__$1;
(statearr_22736_22795[(1)] = (32));

} else {
var statearr_22737_22796 = state_22720__$1;
(statearr_22737_22796[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (32))){
var inst_22679 = (state_22720[(14)]);
var state_22720__$1 = state_22720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22720__$1,(35),out,inst_22679);
} else {
if((state_val_22721 === (33))){
var inst_22672 = (state_22720[(12)]);
var inst_22650 = inst_22672;
var state_22720__$1 = (function (){var statearr_22738 = state_22720;
(statearr_22738[(7)] = inst_22650);

return statearr_22738;
})();
var statearr_22739_22797 = state_22720__$1;
(statearr_22739_22797[(2)] = null);

(statearr_22739_22797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (13))){
var inst_22650 = (state_22720[(7)]);
var inst_22657 = inst_22650.cljs$lang$protocol_mask$partition0$;
var inst_22658 = (inst_22657 & (64));
var inst_22659 = inst_22650.cljs$core$ISeq$;
var inst_22660 = (inst_22658) || (inst_22659);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22660)){
var statearr_22740_22798 = state_22720__$1;
(statearr_22740_22798[(1)] = (16));

} else {
var statearr_22741_22799 = state_22720__$1;
(statearr_22741_22799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (22))){
var inst_22680 = (state_22720[(9)]);
var inst_22679 = (state_22720[(14)]);
var inst_22678 = (state_22720[(2)]);
var inst_22679__$1 = cljs.core.nth.call(null,inst_22678,(0),null);
var inst_22680__$1 = cljs.core.nth.call(null,inst_22678,(1),null);
var inst_22681 = (inst_22679__$1 == null);
var inst_22682 = cljs.core._EQ_.call(null,inst_22680__$1,change);
var inst_22683 = (inst_22681) || (inst_22682);
var state_22720__$1 = (function (){var statearr_22742 = state_22720;
(statearr_22742[(9)] = inst_22680__$1);

(statearr_22742[(14)] = inst_22679__$1);

return statearr_22742;
})();
if(cljs.core.truth_(inst_22683)){
var statearr_22743_22800 = state_22720__$1;
(statearr_22743_22800[(1)] = (23));

} else {
var statearr_22744_22801 = state_22720__$1;
(statearr_22744_22801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (36))){
var inst_22672 = (state_22720[(12)]);
var inst_22650 = inst_22672;
var state_22720__$1 = (function (){var statearr_22745 = state_22720;
(statearr_22745[(7)] = inst_22650);

return statearr_22745;
})();
var statearr_22746_22802 = state_22720__$1;
(statearr_22746_22802[(2)] = null);

(statearr_22746_22802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (29))){
var inst_22694 = (state_22720[(11)]);
var state_22720__$1 = state_22720;
var statearr_22747_22803 = state_22720__$1;
(statearr_22747_22803[(2)] = inst_22694);

(statearr_22747_22803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (6))){
var state_22720__$1 = state_22720;
var statearr_22748_22804 = state_22720__$1;
(statearr_22748_22804[(2)] = false);

(statearr_22748_22804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (28))){
var inst_22690 = (state_22720[(2)]);
var inst_22691 = calc_state.call(null);
var inst_22650 = inst_22691;
var state_22720__$1 = (function (){var statearr_22749 = state_22720;
(statearr_22749[(7)] = inst_22650);

(statearr_22749[(15)] = inst_22690);

return statearr_22749;
})();
var statearr_22750_22805 = state_22720__$1;
(statearr_22750_22805[(2)] = null);

(statearr_22750_22805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (25))){
var inst_22716 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22751_22806 = state_22720__$1;
(statearr_22751_22806[(2)] = inst_22716);

(statearr_22751_22806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (34))){
var inst_22714 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22752_22807 = state_22720__$1;
(statearr_22752_22807[(2)] = inst_22714);

(statearr_22752_22807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (17))){
var state_22720__$1 = state_22720;
var statearr_22753_22808 = state_22720__$1;
(statearr_22753_22808[(2)] = false);

(statearr_22753_22808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (3))){
var state_22720__$1 = state_22720;
var statearr_22754_22809 = state_22720__$1;
(statearr_22754_22809[(2)] = false);

(statearr_22754_22809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (12))){
var inst_22718 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22720__$1,inst_22718);
} else {
if((state_val_22721 === (2))){
var inst_22626 = (state_22720[(8)]);
var inst_22631 = inst_22626.cljs$lang$protocol_mask$partition0$;
var inst_22632 = (inst_22631 & (64));
var inst_22633 = inst_22626.cljs$core$ISeq$;
var inst_22634 = (inst_22632) || (inst_22633);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22634)){
var statearr_22755_22810 = state_22720__$1;
(statearr_22755_22810[(1)] = (5));

} else {
var statearr_22756_22811 = state_22720__$1;
(statearr_22756_22811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (23))){
var inst_22679 = (state_22720[(14)]);
var inst_22685 = (inst_22679 == null);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22685)){
var statearr_22757_22812 = state_22720__$1;
(statearr_22757_22812[(1)] = (26));

} else {
var statearr_22758_22813 = state_22720__$1;
(statearr_22758_22813[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (35))){
var inst_22705 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22705)){
var statearr_22759_22814 = state_22720__$1;
(statearr_22759_22814[(1)] = (36));

} else {
var statearr_22760_22815 = state_22720__$1;
(statearr_22760_22815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (19))){
var inst_22650 = (state_22720[(7)]);
var inst_22669 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22650);
var state_22720__$1 = state_22720;
var statearr_22761_22816 = state_22720__$1;
(statearr_22761_22816[(2)] = inst_22669);

(statearr_22761_22816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (11))){
var inst_22650 = (state_22720[(7)]);
var inst_22654 = (inst_22650 == null);
var inst_22655 = cljs.core.not.call(null,inst_22654);
var state_22720__$1 = state_22720;
if(inst_22655){
var statearr_22762_22817 = state_22720__$1;
(statearr_22762_22817[(1)] = (13));

} else {
var statearr_22763_22818 = state_22720__$1;
(statearr_22763_22818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (9))){
var inst_22626 = (state_22720[(8)]);
var state_22720__$1 = state_22720;
var statearr_22764_22819 = state_22720__$1;
(statearr_22764_22819[(2)] = inst_22626);

(statearr_22764_22819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (5))){
var state_22720__$1 = state_22720;
var statearr_22765_22820 = state_22720__$1;
(statearr_22765_22820[(2)] = true);

(statearr_22765_22820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (14))){
var state_22720__$1 = state_22720;
var statearr_22766_22821 = state_22720__$1;
(statearr_22766_22821[(2)] = false);

(statearr_22766_22821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (26))){
var inst_22680 = (state_22720[(9)]);
var inst_22687 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22680);
var state_22720__$1 = state_22720;
var statearr_22767_22822 = state_22720__$1;
(statearr_22767_22822[(2)] = inst_22687);

(statearr_22767_22822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (16))){
var state_22720__$1 = state_22720;
var statearr_22768_22823 = state_22720__$1;
(statearr_22768_22823[(2)] = true);

(statearr_22768_22823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (38))){
var inst_22710 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22769_22824 = state_22720__$1;
(statearr_22769_22824[(2)] = inst_22710);

(statearr_22769_22824[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (30))){
var inst_22680 = (state_22720[(9)]);
var inst_22673 = (state_22720[(10)]);
var inst_22674 = (state_22720[(13)]);
var inst_22697 = cljs.core.empty_QMARK_.call(null,inst_22673);
var inst_22698 = inst_22674.call(null,inst_22680);
var inst_22699 = cljs.core.not.call(null,inst_22698);
var inst_22700 = (inst_22697) && (inst_22699);
var state_22720__$1 = state_22720;
var statearr_22770_22825 = state_22720__$1;
(statearr_22770_22825[(2)] = inst_22700);

(statearr_22770_22825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (10))){
var inst_22626 = (state_22720[(8)]);
var inst_22646 = (state_22720[(2)]);
var inst_22647 = cljs.core.get.call(null,inst_22646,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22648 = cljs.core.get.call(null,inst_22646,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22649 = cljs.core.get.call(null,inst_22646,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22650 = inst_22626;
var state_22720__$1 = (function (){var statearr_22771 = state_22720;
(statearr_22771[(16)] = inst_22647);

(statearr_22771[(7)] = inst_22650);

(statearr_22771[(17)] = inst_22649);

(statearr_22771[(18)] = inst_22648);

return statearr_22771;
})();
var statearr_22772_22826 = state_22720__$1;
(statearr_22772_22826[(2)] = null);

(statearr_22772_22826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (18))){
var inst_22664 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22773_22827 = state_22720__$1;
(statearr_22773_22827[(2)] = inst_22664);

(statearr_22773_22827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (37))){
var state_22720__$1 = state_22720;
var statearr_22774_22828 = state_22720__$1;
(statearr_22774_22828[(2)] = null);

(statearr_22774_22828[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (8))){
var inst_22626 = (state_22720[(8)]);
var inst_22643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22626);
var state_22720__$1 = state_22720;
var statearr_22775_22829 = state_22720__$1;
(statearr_22775_22829[(2)] = inst_22643);

(statearr_22775_22829[(1)] = (10));


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
});})(c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20928__auto__,c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20929__auto__ = null;
var cljs$core$async$mix_$_state_machine__20929__auto____0 = (function (){
var statearr_22779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22779[(0)] = cljs$core$async$mix_$_state_machine__20929__auto__);

(statearr_22779[(1)] = (1));

return statearr_22779;
});
var cljs$core$async$mix_$_state_machine__20929__auto____1 = (function (state_22720){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_22720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e22780){if((e22780 instanceof Object)){
var ex__20932__auto__ = e22780;
var statearr_22781_22830 = state_22720;
(statearr_22781_22830[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22720;
state_22720 = G__22831;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20929__auto__ = function(state_22720){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20929__auto____1.call(this,state_22720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20929__auto____0;
cljs$core$async$mix_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20929__auto____1;
return cljs$core$async$mix_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21042__auto__ = (function (){var statearr_22782 = f__21041__auto__.call(null);
(statearr_22782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___22783);

return statearr_22782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___22783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19536__auto__ = (((p == null))?null:p);
var m__19537__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19537__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19536__auto__ = (((p == null))?null:p);
var m__19537__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,p,v,ch);
} else {
var m__19537__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22832 = [];
var len__19942__auto___22835 = arguments.length;
var i__19943__auto___22836 = (0);
while(true){
if((i__19943__auto___22836 < len__19942__auto___22835)){
args22832.push((arguments[i__19943__auto___22836]));

var G__22837 = (i__19943__auto___22836 + (1));
i__19943__auto___22836 = G__22837;
continue;
} else {
}
break;
}

var G__22834 = args22832.length;
switch (G__22834) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22832.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19536__auto__ = (((p == null))?null:p);
var m__19537__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,p);
} else {
var m__19537__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,p);
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
var x__19536__auto__ = (((p == null))?null:p);
var m__19537__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,p,v);
} else {
var m__19537__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,p,v);
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
var args22840 = [];
var len__19942__auto___22965 = arguments.length;
var i__19943__auto___22966 = (0);
while(true){
if((i__19943__auto___22966 < len__19942__auto___22965)){
args22840.push((arguments[i__19943__auto___22966]));

var G__22967 = (i__19943__auto___22966 + (1));
i__19943__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22842 = args22840.length;
switch (G__22842) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22840.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18873__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18873__auto__,mults){
return (function (p1__22839_SHARP_){
if(cljs.core.truth_(p1__22839_SHARP_.call(null,topic))){
return p1__22839_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22839_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18873__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22844 = meta22844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22845,meta22844__$1){
var self__ = this;
var _22845__$1 = this;
return (new cljs.core.async.t_cljs$core$async22843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22844__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22845){
var self__ = this;
var _22845__$1 = this;
return self__.meta22844;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22844","meta22844",1623195629,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22843";

cljs.core.async.t_cljs$core$async22843.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async22843");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22843 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22844){
return (new cljs.core.async.t_cljs$core$async22843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22844));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21040__auto___22969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___22969,mults,ensure_mult,p){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___22969,mults,ensure_mult,p){
return (function (state_22917){
var state_val_22918 = (state_22917[(1)]);
if((state_val_22918 === (7))){
var inst_22913 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22919_22970 = state_22917__$1;
(statearr_22919_22970[(2)] = inst_22913);

(statearr_22919_22970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (20))){
var state_22917__$1 = state_22917;
var statearr_22920_22971 = state_22917__$1;
(statearr_22920_22971[(2)] = null);

(statearr_22920_22971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (1))){
var state_22917__$1 = state_22917;
var statearr_22921_22972 = state_22917__$1;
(statearr_22921_22972[(2)] = null);

(statearr_22921_22972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (24))){
var inst_22896 = (state_22917[(7)]);
var inst_22905 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22896);
var state_22917__$1 = state_22917;
var statearr_22922_22973 = state_22917__$1;
(statearr_22922_22973[(2)] = inst_22905);

(statearr_22922_22973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (4))){
var inst_22848 = (state_22917[(8)]);
var inst_22848__$1 = (state_22917[(2)]);
var inst_22849 = (inst_22848__$1 == null);
var state_22917__$1 = (function (){var statearr_22923 = state_22917;
(statearr_22923[(8)] = inst_22848__$1);

return statearr_22923;
})();
if(cljs.core.truth_(inst_22849)){
var statearr_22924_22974 = state_22917__$1;
(statearr_22924_22974[(1)] = (5));

} else {
var statearr_22925_22975 = state_22917__$1;
(statearr_22925_22975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (15))){
var inst_22890 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22926_22976 = state_22917__$1;
(statearr_22926_22976[(2)] = inst_22890);

(statearr_22926_22976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (21))){
var inst_22910 = (state_22917[(2)]);
var state_22917__$1 = (function (){var statearr_22927 = state_22917;
(statearr_22927[(9)] = inst_22910);

return statearr_22927;
})();
var statearr_22928_22977 = state_22917__$1;
(statearr_22928_22977[(2)] = null);

(statearr_22928_22977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (13))){
var inst_22872 = (state_22917[(10)]);
var inst_22874 = cljs.core.chunked_seq_QMARK_.call(null,inst_22872);
var state_22917__$1 = state_22917;
if(inst_22874){
var statearr_22929_22978 = state_22917__$1;
(statearr_22929_22978[(1)] = (16));

} else {
var statearr_22930_22979 = state_22917__$1;
(statearr_22930_22979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (22))){
var inst_22902 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
if(cljs.core.truth_(inst_22902)){
var statearr_22931_22980 = state_22917__$1;
(statearr_22931_22980[(1)] = (23));

} else {
var statearr_22932_22981 = state_22917__$1;
(statearr_22932_22981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (6))){
var inst_22896 = (state_22917[(7)]);
var inst_22848 = (state_22917[(8)]);
var inst_22898 = (state_22917[(11)]);
var inst_22896__$1 = topic_fn.call(null,inst_22848);
var inst_22897 = cljs.core.deref.call(null,mults);
var inst_22898__$1 = cljs.core.get.call(null,inst_22897,inst_22896__$1);
var state_22917__$1 = (function (){var statearr_22933 = state_22917;
(statearr_22933[(7)] = inst_22896__$1);

(statearr_22933[(11)] = inst_22898__$1);

return statearr_22933;
})();
if(cljs.core.truth_(inst_22898__$1)){
var statearr_22934_22982 = state_22917__$1;
(statearr_22934_22982[(1)] = (19));

} else {
var statearr_22935_22983 = state_22917__$1;
(statearr_22935_22983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (25))){
var inst_22907 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22936_22984 = state_22917__$1;
(statearr_22936_22984[(2)] = inst_22907);

(statearr_22936_22984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (17))){
var inst_22872 = (state_22917[(10)]);
var inst_22881 = cljs.core.first.call(null,inst_22872);
var inst_22882 = cljs.core.async.muxch_STAR_.call(null,inst_22881);
var inst_22883 = cljs.core.async.close_BANG_.call(null,inst_22882);
var inst_22884 = cljs.core.next.call(null,inst_22872);
var inst_22858 = inst_22884;
var inst_22859 = null;
var inst_22860 = (0);
var inst_22861 = (0);
var state_22917__$1 = (function (){var statearr_22937 = state_22917;
(statearr_22937[(12)] = inst_22859);

(statearr_22937[(13)] = inst_22860);

(statearr_22937[(14)] = inst_22858);

(statearr_22937[(15)] = inst_22883);

(statearr_22937[(16)] = inst_22861);

return statearr_22937;
})();
var statearr_22938_22985 = state_22917__$1;
(statearr_22938_22985[(2)] = null);

(statearr_22938_22985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (3))){
var inst_22915 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22917__$1,inst_22915);
} else {
if((state_val_22918 === (12))){
var inst_22892 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22939_22986 = state_22917__$1;
(statearr_22939_22986[(2)] = inst_22892);

(statearr_22939_22986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (2))){
var state_22917__$1 = state_22917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22917__$1,(4),ch);
} else {
if((state_val_22918 === (23))){
var state_22917__$1 = state_22917;
var statearr_22940_22987 = state_22917__$1;
(statearr_22940_22987[(2)] = null);

(statearr_22940_22987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (19))){
var inst_22848 = (state_22917[(8)]);
var inst_22898 = (state_22917[(11)]);
var inst_22900 = cljs.core.async.muxch_STAR_.call(null,inst_22898);
var state_22917__$1 = state_22917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22917__$1,(22),inst_22900,inst_22848);
} else {
if((state_val_22918 === (11))){
var inst_22858 = (state_22917[(14)]);
var inst_22872 = (state_22917[(10)]);
var inst_22872__$1 = cljs.core.seq.call(null,inst_22858);
var state_22917__$1 = (function (){var statearr_22941 = state_22917;
(statearr_22941[(10)] = inst_22872__$1);

return statearr_22941;
})();
if(inst_22872__$1){
var statearr_22942_22988 = state_22917__$1;
(statearr_22942_22988[(1)] = (13));

} else {
var statearr_22943_22989 = state_22917__$1;
(statearr_22943_22989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (9))){
var inst_22894 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22944_22990 = state_22917__$1;
(statearr_22944_22990[(2)] = inst_22894);

(statearr_22944_22990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (5))){
var inst_22855 = cljs.core.deref.call(null,mults);
var inst_22856 = cljs.core.vals.call(null,inst_22855);
var inst_22857 = cljs.core.seq.call(null,inst_22856);
var inst_22858 = inst_22857;
var inst_22859 = null;
var inst_22860 = (0);
var inst_22861 = (0);
var state_22917__$1 = (function (){var statearr_22945 = state_22917;
(statearr_22945[(12)] = inst_22859);

(statearr_22945[(13)] = inst_22860);

(statearr_22945[(14)] = inst_22858);

(statearr_22945[(16)] = inst_22861);

return statearr_22945;
})();
var statearr_22946_22991 = state_22917__$1;
(statearr_22946_22991[(2)] = null);

(statearr_22946_22991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (14))){
var state_22917__$1 = state_22917;
var statearr_22950_22992 = state_22917__$1;
(statearr_22950_22992[(2)] = null);

(statearr_22950_22992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (16))){
var inst_22872 = (state_22917[(10)]);
var inst_22876 = cljs.core.chunk_first.call(null,inst_22872);
var inst_22877 = cljs.core.chunk_rest.call(null,inst_22872);
var inst_22878 = cljs.core.count.call(null,inst_22876);
var inst_22858 = inst_22877;
var inst_22859 = inst_22876;
var inst_22860 = inst_22878;
var inst_22861 = (0);
var state_22917__$1 = (function (){var statearr_22951 = state_22917;
(statearr_22951[(12)] = inst_22859);

(statearr_22951[(13)] = inst_22860);

(statearr_22951[(14)] = inst_22858);

(statearr_22951[(16)] = inst_22861);

return statearr_22951;
})();
var statearr_22952_22993 = state_22917__$1;
(statearr_22952_22993[(2)] = null);

(statearr_22952_22993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (10))){
var inst_22859 = (state_22917[(12)]);
var inst_22860 = (state_22917[(13)]);
var inst_22858 = (state_22917[(14)]);
var inst_22861 = (state_22917[(16)]);
var inst_22866 = cljs.core._nth.call(null,inst_22859,inst_22861);
var inst_22867 = cljs.core.async.muxch_STAR_.call(null,inst_22866);
var inst_22868 = cljs.core.async.close_BANG_.call(null,inst_22867);
var inst_22869 = (inst_22861 + (1));
var tmp22947 = inst_22859;
var tmp22948 = inst_22860;
var tmp22949 = inst_22858;
var inst_22858__$1 = tmp22949;
var inst_22859__$1 = tmp22947;
var inst_22860__$1 = tmp22948;
var inst_22861__$1 = inst_22869;
var state_22917__$1 = (function (){var statearr_22953 = state_22917;
(statearr_22953[(12)] = inst_22859__$1);

(statearr_22953[(17)] = inst_22868);

(statearr_22953[(13)] = inst_22860__$1);

(statearr_22953[(14)] = inst_22858__$1);

(statearr_22953[(16)] = inst_22861__$1);

return statearr_22953;
})();
var statearr_22954_22994 = state_22917__$1;
(statearr_22954_22994[(2)] = null);

(statearr_22954_22994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (18))){
var inst_22887 = (state_22917[(2)]);
var state_22917__$1 = state_22917;
var statearr_22955_22995 = state_22917__$1;
(statearr_22955_22995[(2)] = inst_22887);

(statearr_22955_22995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22918 === (8))){
var inst_22860 = (state_22917[(13)]);
var inst_22861 = (state_22917[(16)]);
var inst_22863 = (inst_22861 < inst_22860);
var inst_22864 = inst_22863;
var state_22917__$1 = state_22917;
if(cljs.core.truth_(inst_22864)){
var statearr_22956_22996 = state_22917__$1;
(statearr_22956_22996[(1)] = (10));

} else {
var statearr_22957_22997 = state_22917__$1;
(statearr_22957_22997[(1)] = (11));

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
});})(c__21040__auto___22969,mults,ensure_mult,p))
;
return ((function (switch__20928__auto__,c__21040__auto___22969,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_22961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22961[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_22961[(1)] = (1));

return statearr_22961;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_22917){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_22917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e22962){if((e22962 instanceof Object)){
var ex__20932__auto__ = e22962;
var statearr_22963_22998 = state_22917;
(statearr_22963_22998[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22999 = state_22917;
state_22917 = G__22999;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_22917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_22917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___22969,mults,ensure_mult,p))
})();
var state__21042__auto__ = (function (){var statearr_22964 = f__21041__auto__.call(null);
(statearr_22964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___22969);

return statearr_22964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___22969,mults,ensure_mult,p))
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
var args23000 = [];
var len__19942__auto___23003 = arguments.length;
var i__19943__auto___23004 = (0);
while(true){
if((i__19943__auto___23004 < len__19942__auto___23003)){
args23000.push((arguments[i__19943__auto___23004]));

var G__23005 = (i__19943__auto___23004 + (1));
i__19943__auto___23004 = G__23005;
continue;
} else {
}
break;
}

var G__23002 = args23000.length;
switch (G__23002) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23000.length)].join('')));

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
var args23007 = [];
var len__19942__auto___23010 = arguments.length;
var i__19943__auto___23011 = (0);
while(true){
if((i__19943__auto___23011 < len__19942__auto___23010)){
args23007.push((arguments[i__19943__auto___23011]));

var G__23012 = (i__19943__auto___23011 + (1));
i__19943__auto___23011 = G__23012;
continue;
} else {
}
break;
}

var G__23009 = args23007.length;
switch (G__23009) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23007.length)].join('')));

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
var args23014 = [];
var len__19942__auto___23085 = arguments.length;
var i__19943__auto___23086 = (0);
while(true){
if((i__19943__auto___23086 < len__19942__auto___23085)){
args23014.push((arguments[i__19943__auto___23086]));

var G__23087 = (i__19943__auto___23086 + (1));
i__19943__auto___23086 = G__23087;
continue;
} else {
}
break;
}

var G__23016 = args23014.length;
switch (G__23016) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23014.length)].join('')));

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
var c__21040__auto___23089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23055){
var state_val_23056 = (state_23055[(1)]);
if((state_val_23056 === (7))){
var state_23055__$1 = state_23055;
var statearr_23057_23090 = state_23055__$1;
(statearr_23057_23090[(2)] = null);

(statearr_23057_23090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (1))){
var state_23055__$1 = state_23055;
var statearr_23058_23091 = state_23055__$1;
(statearr_23058_23091[(2)] = null);

(statearr_23058_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (4))){
var inst_23019 = (state_23055[(7)]);
var inst_23021 = (inst_23019 < cnt);
var state_23055__$1 = state_23055;
if(cljs.core.truth_(inst_23021)){
var statearr_23059_23092 = state_23055__$1;
(statearr_23059_23092[(1)] = (6));

} else {
var statearr_23060_23093 = state_23055__$1;
(statearr_23060_23093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (15))){
var inst_23051 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
var statearr_23061_23094 = state_23055__$1;
(statearr_23061_23094[(2)] = inst_23051);

(statearr_23061_23094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (13))){
var inst_23044 = cljs.core.async.close_BANG_.call(null,out);
var state_23055__$1 = state_23055;
var statearr_23062_23095 = state_23055__$1;
(statearr_23062_23095[(2)] = inst_23044);

(statearr_23062_23095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (6))){
var state_23055__$1 = state_23055;
var statearr_23063_23096 = state_23055__$1;
(statearr_23063_23096[(2)] = null);

(statearr_23063_23096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (3))){
var inst_23053 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23055__$1,inst_23053);
} else {
if((state_val_23056 === (12))){
var inst_23041 = (state_23055[(8)]);
var inst_23041__$1 = (state_23055[(2)]);
var inst_23042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23041__$1);
var state_23055__$1 = (function (){var statearr_23064 = state_23055;
(statearr_23064[(8)] = inst_23041__$1);

return statearr_23064;
})();
if(cljs.core.truth_(inst_23042)){
var statearr_23065_23097 = state_23055__$1;
(statearr_23065_23097[(1)] = (13));

} else {
var statearr_23066_23098 = state_23055__$1;
(statearr_23066_23098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (2))){
var inst_23018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23019 = (0);
var state_23055__$1 = (function (){var statearr_23067 = state_23055;
(statearr_23067[(9)] = inst_23018);

(statearr_23067[(7)] = inst_23019);

return statearr_23067;
})();
var statearr_23068_23099 = state_23055__$1;
(statearr_23068_23099[(2)] = null);

(statearr_23068_23099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (11))){
var inst_23019 = (state_23055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23055,(10),Object,null,(9));
var inst_23028 = chs__$1.call(null,inst_23019);
var inst_23029 = done.call(null,inst_23019);
var inst_23030 = cljs.core.async.take_BANG_.call(null,inst_23028,inst_23029);
var state_23055__$1 = state_23055;
var statearr_23069_23100 = state_23055__$1;
(statearr_23069_23100[(2)] = inst_23030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (9))){
var inst_23019 = (state_23055[(7)]);
var inst_23032 = (state_23055[(2)]);
var inst_23033 = (inst_23019 + (1));
var inst_23019__$1 = inst_23033;
var state_23055__$1 = (function (){var statearr_23070 = state_23055;
(statearr_23070[(10)] = inst_23032);

(statearr_23070[(7)] = inst_23019__$1);

return statearr_23070;
})();
var statearr_23071_23101 = state_23055__$1;
(statearr_23071_23101[(2)] = null);

(statearr_23071_23101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (5))){
var inst_23039 = (state_23055[(2)]);
var state_23055__$1 = (function (){var statearr_23072 = state_23055;
(statearr_23072[(11)] = inst_23039);

return statearr_23072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23055__$1,(12),dchan);
} else {
if((state_val_23056 === (14))){
var inst_23041 = (state_23055[(8)]);
var inst_23046 = cljs.core.apply.call(null,f,inst_23041);
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23055__$1,(16),out,inst_23046);
} else {
if((state_val_23056 === (16))){
var inst_23048 = (state_23055[(2)]);
var state_23055__$1 = (function (){var statearr_23073 = state_23055;
(statearr_23073[(12)] = inst_23048);

return statearr_23073;
})();
var statearr_23074_23102 = state_23055__$1;
(statearr_23074_23102[(2)] = null);

(statearr_23074_23102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (10))){
var inst_23023 = (state_23055[(2)]);
var inst_23024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23055__$1 = (function (){var statearr_23075 = state_23055;
(statearr_23075[(13)] = inst_23023);

return statearr_23075;
})();
var statearr_23076_23103 = state_23055__$1;
(statearr_23076_23103[(2)] = inst_23024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (8))){
var inst_23037 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
var statearr_23077_23104 = state_23055__$1;
(statearr_23077_23104[(2)] = inst_23037);

(statearr_23077_23104[(1)] = (5));


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
});})(c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20928__auto__,c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23081[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23081[(1)] = (1));

return statearr_23081;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23055){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23082){if((e23082 instanceof Object)){
var ex__20932__auto__ = e23082;
var statearr_23083_23105 = state_23055;
(statearr_23083_23105[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23106 = state_23055;
state_23055 = G__23106;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21042__auto__ = (function (){var statearr_23084 = f__21041__auto__.call(null);
(statearr_23084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23089);

return statearr_23084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23089,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23108 = [];
var len__19942__auto___23164 = arguments.length;
var i__19943__auto___23165 = (0);
while(true){
if((i__19943__auto___23165 < len__19942__auto___23164)){
args23108.push((arguments[i__19943__auto___23165]));

var G__23166 = (i__19943__auto___23165 + (1));
i__19943__auto___23165 = G__23166;
continue;
} else {
}
break;
}

var G__23110 = args23108.length;
switch (G__23110) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23108.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23168,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23168,out){
return (function (state_23140){
var state_val_23141 = (state_23140[(1)]);
if((state_val_23141 === (7))){
var inst_23120 = (state_23140[(7)]);
var inst_23119 = (state_23140[(8)]);
var inst_23119__$1 = (state_23140[(2)]);
var inst_23120__$1 = cljs.core.nth.call(null,inst_23119__$1,(0),null);
var inst_23121 = cljs.core.nth.call(null,inst_23119__$1,(1),null);
var inst_23122 = (inst_23120__$1 == null);
var state_23140__$1 = (function (){var statearr_23142 = state_23140;
(statearr_23142[(9)] = inst_23121);

(statearr_23142[(7)] = inst_23120__$1);

(statearr_23142[(8)] = inst_23119__$1);

return statearr_23142;
})();
if(cljs.core.truth_(inst_23122)){
var statearr_23143_23169 = state_23140__$1;
(statearr_23143_23169[(1)] = (8));

} else {
var statearr_23144_23170 = state_23140__$1;
(statearr_23144_23170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (1))){
var inst_23111 = cljs.core.vec.call(null,chs);
var inst_23112 = inst_23111;
var state_23140__$1 = (function (){var statearr_23145 = state_23140;
(statearr_23145[(10)] = inst_23112);

return statearr_23145;
})();
var statearr_23146_23171 = state_23140__$1;
(statearr_23146_23171[(2)] = null);

(statearr_23146_23171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (4))){
var inst_23112 = (state_23140[(10)]);
var state_23140__$1 = state_23140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23140__$1,(7),inst_23112);
} else {
if((state_val_23141 === (6))){
var inst_23136 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
var statearr_23147_23172 = state_23140__$1;
(statearr_23147_23172[(2)] = inst_23136);

(statearr_23147_23172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (3))){
var inst_23138 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23140__$1,inst_23138);
} else {
if((state_val_23141 === (2))){
var inst_23112 = (state_23140[(10)]);
var inst_23114 = cljs.core.count.call(null,inst_23112);
var inst_23115 = (inst_23114 > (0));
var state_23140__$1 = state_23140;
if(cljs.core.truth_(inst_23115)){
var statearr_23149_23173 = state_23140__$1;
(statearr_23149_23173[(1)] = (4));

} else {
var statearr_23150_23174 = state_23140__$1;
(statearr_23150_23174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (11))){
var inst_23112 = (state_23140[(10)]);
var inst_23129 = (state_23140[(2)]);
var tmp23148 = inst_23112;
var inst_23112__$1 = tmp23148;
var state_23140__$1 = (function (){var statearr_23151 = state_23140;
(statearr_23151[(10)] = inst_23112__$1);

(statearr_23151[(11)] = inst_23129);

return statearr_23151;
})();
var statearr_23152_23175 = state_23140__$1;
(statearr_23152_23175[(2)] = null);

(statearr_23152_23175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (9))){
var inst_23120 = (state_23140[(7)]);
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23140__$1,(11),out,inst_23120);
} else {
if((state_val_23141 === (5))){
var inst_23134 = cljs.core.async.close_BANG_.call(null,out);
var state_23140__$1 = state_23140;
var statearr_23153_23176 = state_23140__$1;
(statearr_23153_23176[(2)] = inst_23134);

(statearr_23153_23176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (10))){
var inst_23132 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
var statearr_23154_23177 = state_23140__$1;
(statearr_23154_23177[(2)] = inst_23132);

(statearr_23154_23177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (8))){
var inst_23121 = (state_23140[(9)]);
var inst_23112 = (state_23140[(10)]);
var inst_23120 = (state_23140[(7)]);
var inst_23119 = (state_23140[(8)]);
var inst_23124 = (function (){var cs = inst_23112;
var vec__23117 = inst_23119;
var v = inst_23120;
var c = inst_23121;
return ((function (cs,vec__23117,v,c,inst_23121,inst_23112,inst_23120,inst_23119,state_val_23141,c__21040__auto___23168,out){
return (function (p1__23107_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23107_SHARP_);
});
;})(cs,vec__23117,v,c,inst_23121,inst_23112,inst_23120,inst_23119,state_val_23141,c__21040__auto___23168,out))
})();
var inst_23125 = cljs.core.filterv.call(null,inst_23124,inst_23112);
var inst_23112__$1 = inst_23125;
var state_23140__$1 = (function (){var statearr_23155 = state_23140;
(statearr_23155[(10)] = inst_23112__$1);

return statearr_23155;
})();
var statearr_23156_23178 = state_23140__$1;
(statearr_23156_23178[(2)] = null);

(statearr_23156_23178[(1)] = (2));


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
});})(c__21040__auto___23168,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23168,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23160[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23160[(1)] = (1));

return statearr_23160;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23140){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23161){if((e23161 instanceof Object)){
var ex__20932__auto__ = e23161;
var statearr_23162_23179 = state_23140;
(statearr_23162_23179[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23180 = state_23140;
state_23140 = G__23180;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23168,out))
})();
var state__21042__auto__ = (function (){var statearr_23163 = f__21041__auto__.call(null);
(statearr_23163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23168);

return statearr_23163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23168,out))
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
var args23181 = [];
var len__19942__auto___23230 = arguments.length;
var i__19943__auto___23231 = (0);
while(true){
if((i__19943__auto___23231 < len__19942__auto___23230)){
args23181.push((arguments[i__19943__auto___23231]));

var G__23232 = (i__19943__auto___23231 + (1));
i__19943__auto___23231 = G__23232;
continue;
} else {
}
break;
}

var G__23183 = args23181.length;
switch (G__23183) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23181.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23234,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23234,out){
return (function (state_23207){
var state_val_23208 = (state_23207[(1)]);
if((state_val_23208 === (7))){
var inst_23189 = (state_23207[(7)]);
var inst_23189__$1 = (state_23207[(2)]);
var inst_23190 = (inst_23189__$1 == null);
var inst_23191 = cljs.core.not.call(null,inst_23190);
var state_23207__$1 = (function (){var statearr_23209 = state_23207;
(statearr_23209[(7)] = inst_23189__$1);

return statearr_23209;
})();
if(inst_23191){
var statearr_23210_23235 = state_23207__$1;
(statearr_23210_23235[(1)] = (8));

} else {
var statearr_23211_23236 = state_23207__$1;
(statearr_23211_23236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (1))){
var inst_23184 = (0);
var state_23207__$1 = (function (){var statearr_23212 = state_23207;
(statearr_23212[(8)] = inst_23184);

return statearr_23212;
})();
var statearr_23213_23237 = state_23207__$1;
(statearr_23213_23237[(2)] = null);

(statearr_23213_23237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (4))){
var state_23207__$1 = state_23207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23207__$1,(7),ch);
} else {
if((state_val_23208 === (6))){
var inst_23202 = (state_23207[(2)]);
var state_23207__$1 = state_23207;
var statearr_23214_23238 = state_23207__$1;
(statearr_23214_23238[(2)] = inst_23202);

(statearr_23214_23238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (3))){
var inst_23204 = (state_23207[(2)]);
var inst_23205 = cljs.core.async.close_BANG_.call(null,out);
var state_23207__$1 = (function (){var statearr_23215 = state_23207;
(statearr_23215[(9)] = inst_23204);

return statearr_23215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23207__$1,inst_23205);
} else {
if((state_val_23208 === (2))){
var inst_23184 = (state_23207[(8)]);
var inst_23186 = (inst_23184 < n);
var state_23207__$1 = state_23207;
if(cljs.core.truth_(inst_23186)){
var statearr_23216_23239 = state_23207__$1;
(statearr_23216_23239[(1)] = (4));

} else {
var statearr_23217_23240 = state_23207__$1;
(statearr_23217_23240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (11))){
var inst_23184 = (state_23207[(8)]);
var inst_23194 = (state_23207[(2)]);
var inst_23195 = (inst_23184 + (1));
var inst_23184__$1 = inst_23195;
var state_23207__$1 = (function (){var statearr_23218 = state_23207;
(statearr_23218[(10)] = inst_23194);

(statearr_23218[(8)] = inst_23184__$1);

return statearr_23218;
})();
var statearr_23219_23241 = state_23207__$1;
(statearr_23219_23241[(2)] = null);

(statearr_23219_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (9))){
var state_23207__$1 = state_23207;
var statearr_23220_23242 = state_23207__$1;
(statearr_23220_23242[(2)] = null);

(statearr_23220_23242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (5))){
var state_23207__$1 = state_23207;
var statearr_23221_23243 = state_23207__$1;
(statearr_23221_23243[(2)] = null);

(statearr_23221_23243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (10))){
var inst_23199 = (state_23207[(2)]);
var state_23207__$1 = state_23207;
var statearr_23222_23244 = state_23207__$1;
(statearr_23222_23244[(2)] = inst_23199);

(statearr_23222_23244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23208 === (8))){
var inst_23189 = (state_23207[(7)]);
var state_23207__$1 = state_23207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23207__$1,(11),out,inst_23189);
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
});})(c__21040__auto___23234,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23234,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23226[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23226[(1)] = (1));

return statearr_23226;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23207){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23227){if((e23227 instanceof Object)){
var ex__20932__auto__ = e23227;
var statearr_23228_23245 = state_23207;
(statearr_23228_23245[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23246 = state_23207;
state_23207 = G__23246;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23234,out))
})();
var state__21042__auto__ = (function (){var statearr_23229 = f__21041__auto__.call(null);
(statearr_23229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23234);

return statearr_23229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23234,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23254 = (function (map_LT_,f,ch,meta23255){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23255 = meta23255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23256,meta23255__$1){
var self__ = this;
var _23256__$1 = this;
return (new cljs.core.async.t_cljs$core$async23254(self__.map_LT_,self__.f,self__.ch,meta23255__$1));
});

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23256){
var self__ = this;
var _23256__$1 = this;
return self__.meta23255;
});

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23257 = (function (map_LT_,f,ch,meta23255,_,fn1,meta23258){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23255 = meta23255;
this._ = _;
this.fn1 = fn1;
this.meta23258 = meta23258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23259,meta23258__$1){
var self__ = this;
var _23259__$1 = this;
return (new cljs.core.async.t_cljs$core$async23257(self__.map_LT_,self__.f,self__.ch,self__.meta23255,self__._,self__.fn1,meta23258__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23259){
var self__ = this;
var _23259__$1 = this;
return self__.meta23258;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23247_SHARP_){
return f1.call(null,(((p1__23247_SHARP_ == null))?null:self__.f.call(null,p1__23247_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23255","meta23255",1588539501,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23254","cljs.core.async/t_cljs$core$async23254",131491450,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23258","meta23258",-1691414081,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23257";

cljs.core.async.t_cljs$core$async23257.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async23257");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23257 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23257(map_LT___$1,f__$1,ch__$1,meta23255__$1,___$2,fn1__$1,meta23258){
return (new cljs.core.async.t_cljs$core$async23257(map_LT___$1,f__$1,ch__$1,meta23255__$1,___$2,fn1__$1,meta23258));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23257(self__.map_LT_,self__.f,self__.ch,self__.meta23255,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18861__auto__ = ret;
if(cljs.core.truth_(and__18861__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18861__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23255","meta23255",1588539501,null)], null);
});

cljs.core.async.t_cljs$core$async23254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23254";

cljs.core.async.t_cljs$core$async23254.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async23254");
});

cljs.core.async.__GT_t_cljs$core$async23254 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23254(map_LT___$1,f__$1,ch__$1,meta23255){
return (new cljs.core.async.t_cljs$core$async23254(map_LT___$1,f__$1,ch__$1,meta23255));
});

}

return (new cljs.core.async.t_cljs$core$async23254(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23263 = (function (map_GT_,f,ch,meta23264){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23264 = meta23264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23265,meta23264__$1){
var self__ = this;
var _23265__$1 = this;
return (new cljs.core.async.t_cljs$core$async23263(self__.map_GT_,self__.f,self__.ch,meta23264__$1));
});

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23265){
var self__ = this;
var _23265__$1 = this;
return self__.meta23264;
});

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23264","meta23264",-50929548,null)], null);
});

cljs.core.async.t_cljs$core$async23263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23263";

cljs.core.async.t_cljs$core$async23263.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async23263");
});

cljs.core.async.__GT_t_cljs$core$async23263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23263(map_GT___$1,f__$1,ch__$1,meta23264){
return (new cljs.core.async.t_cljs$core$async23263(map_GT___$1,f__$1,ch__$1,meta23264));
});

}

return (new cljs.core.async.t_cljs$core$async23263(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23269 = (function (filter_GT_,p,ch,meta23270){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23270 = meta23270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23271,meta23270__$1){
var self__ = this;
var _23271__$1 = this;
return (new cljs.core.async.t_cljs$core$async23269(self__.filter_GT_,self__.p,self__.ch,meta23270__$1));
});

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23271){
var self__ = this;
var _23271__$1 = this;
return self__.meta23270;
});

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23270","meta23270",-1486817211,null)], null);
});

cljs.core.async.t_cljs$core$async23269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23269";

cljs.core.async.t_cljs$core$async23269.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"cljs.core.async/t_cljs$core$async23269");
});

cljs.core.async.__GT_t_cljs$core$async23269 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23269(filter_GT___$1,p__$1,ch__$1,meta23270){
return (new cljs.core.async.t_cljs$core$async23269(filter_GT___$1,p__$1,ch__$1,meta23270));
});

}

return (new cljs.core.async.t_cljs$core$async23269(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23272 = [];
var len__19942__auto___23316 = arguments.length;
var i__19943__auto___23317 = (0);
while(true){
if((i__19943__auto___23317 < len__19942__auto___23316)){
args23272.push((arguments[i__19943__auto___23317]));

var G__23318 = (i__19943__auto___23317 + (1));
i__19943__auto___23317 = G__23318;
continue;
} else {
}
break;
}

var G__23274 = args23272.length;
switch (G__23274) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23272.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23320,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23320,out){
return (function (state_23295){
var state_val_23296 = (state_23295[(1)]);
if((state_val_23296 === (7))){
var inst_23291 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23297_23321 = state_23295__$1;
(statearr_23297_23321[(2)] = inst_23291);

(statearr_23297_23321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (1))){
var state_23295__$1 = state_23295;
var statearr_23298_23322 = state_23295__$1;
(statearr_23298_23322[(2)] = null);

(statearr_23298_23322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (4))){
var inst_23277 = (state_23295[(7)]);
var inst_23277__$1 = (state_23295[(2)]);
var inst_23278 = (inst_23277__$1 == null);
var state_23295__$1 = (function (){var statearr_23299 = state_23295;
(statearr_23299[(7)] = inst_23277__$1);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23278)){
var statearr_23300_23323 = state_23295__$1;
(statearr_23300_23323[(1)] = (5));

} else {
var statearr_23301_23324 = state_23295__$1;
(statearr_23301_23324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (6))){
var inst_23277 = (state_23295[(7)]);
var inst_23282 = p.call(null,inst_23277);
var state_23295__$1 = state_23295;
if(cljs.core.truth_(inst_23282)){
var statearr_23302_23325 = state_23295__$1;
(statearr_23302_23325[(1)] = (8));

} else {
var statearr_23303_23326 = state_23295__$1;
(statearr_23303_23326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (3))){
var inst_23293 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23295__$1,inst_23293);
} else {
if((state_val_23296 === (2))){
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23295__$1,(4),ch);
} else {
if((state_val_23296 === (11))){
var inst_23285 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23304_23327 = state_23295__$1;
(statearr_23304_23327[(2)] = inst_23285);

(statearr_23304_23327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (9))){
var state_23295__$1 = state_23295;
var statearr_23305_23328 = state_23295__$1;
(statearr_23305_23328[(2)] = null);

(statearr_23305_23328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (5))){
var inst_23280 = cljs.core.async.close_BANG_.call(null,out);
var state_23295__$1 = state_23295;
var statearr_23306_23329 = state_23295__$1;
(statearr_23306_23329[(2)] = inst_23280);

(statearr_23306_23329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (10))){
var inst_23288 = (state_23295[(2)]);
var state_23295__$1 = (function (){var statearr_23307 = state_23295;
(statearr_23307[(8)] = inst_23288);

return statearr_23307;
})();
var statearr_23308_23330 = state_23295__$1;
(statearr_23308_23330[(2)] = null);

(statearr_23308_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (8))){
var inst_23277 = (state_23295[(7)]);
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23295__$1,(11),out,inst_23277);
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
});})(c__21040__auto___23320,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23320,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23312 = [null,null,null,null,null,null,null,null,null];
(statearr_23312[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23312[(1)] = (1));

return statearr_23312;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23295){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23313){if((e23313 instanceof Object)){
var ex__20932__auto__ = e23313;
var statearr_23314_23331 = state_23295;
(statearr_23314_23331[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23332 = state_23295;
state_23295 = G__23332;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23320,out))
})();
var state__21042__auto__ = (function (){var statearr_23315 = f__21041__auto__.call(null);
(statearr_23315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23320);

return statearr_23315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23320,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23333 = [];
var len__19942__auto___23336 = arguments.length;
var i__19943__auto___23337 = (0);
while(true){
if((i__19943__auto___23337 < len__19942__auto___23336)){
args23333.push((arguments[i__19943__auto___23337]));

var G__23338 = (i__19943__auto___23337 + (1));
i__19943__auto___23337 = G__23338;
continue;
} else {
}
break;
}

var G__23335 = args23333.length;
switch (G__23335) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23333.length)].join('')));

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
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_23505){
var state_val_23506 = (state_23505[(1)]);
if((state_val_23506 === (7))){
var inst_23501 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23507_23548 = state_23505__$1;
(statearr_23507_23548[(2)] = inst_23501);

(statearr_23507_23548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (20))){
var inst_23471 = (state_23505[(7)]);
var inst_23482 = (state_23505[(2)]);
var inst_23483 = cljs.core.next.call(null,inst_23471);
var inst_23457 = inst_23483;
var inst_23458 = null;
var inst_23459 = (0);
var inst_23460 = (0);
var state_23505__$1 = (function (){var statearr_23508 = state_23505;
(statearr_23508[(8)] = inst_23482);

(statearr_23508[(9)] = inst_23458);

(statearr_23508[(10)] = inst_23459);

(statearr_23508[(11)] = inst_23457);

(statearr_23508[(12)] = inst_23460);

return statearr_23508;
})();
var statearr_23509_23549 = state_23505__$1;
(statearr_23509_23549[(2)] = null);

(statearr_23509_23549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (1))){
var state_23505__$1 = state_23505;
var statearr_23510_23550 = state_23505__$1;
(statearr_23510_23550[(2)] = null);

(statearr_23510_23550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (4))){
var inst_23446 = (state_23505[(13)]);
var inst_23446__$1 = (state_23505[(2)]);
var inst_23447 = (inst_23446__$1 == null);
var state_23505__$1 = (function (){var statearr_23511 = state_23505;
(statearr_23511[(13)] = inst_23446__$1);

return statearr_23511;
})();
if(cljs.core.truth_(inst_23447)){
var statearr_23512_23551 = state_23505__$1;
(statearr_23512_23551[(1)] = (5));

} else {
var statearr_23513_23552 = state_23505__$1;
(statearr_23513_23552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (15))){
var state_23505__$1 = state_23505;
var statearr_23517_23553 = state_23505__$1;
(statearr_23517_23553[(2)] = null);

(statearr_23517_23553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (21))){
var state_23505__$1 = state_23505;
var statearr_23518_23554 = state_23505__$1;
(statearr_23518_23554[(2)] = null);

(statearr_23518_23554[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (13))){
var inst_23458 = (state_23505[(9)]);
var inst_23459 = (state_23505[(10)]);
var inst_23457 = (state_23505[(11)]);
var inst_23460 = (state_23505[(12)]);
var inst_23467 = (state_23505[(2)]);
var inst_23468 = (inst_23460 + (1));
var tmp23514 = inst_23458;
var tmp23515 = inst_23459;
var tmp23516 = inst_23457;
var inst_23457__$1 = tmp23516;
var inst_23458__$1 = tmp23514;
var inst_23459__$1 = tmp23515;
var inst_23460__$1 = inst_23468;
var state_23505__$1 = (function (){var statearr_23519 = state_23505;
(statearr_23519[(9)] = inst_23458__$1);

(statearr_23519[(10)] = inst_23459__$1);

(statearr_23519[(11)] = inst_23457__$1);

(statearr_23519[(12)] = inst_23460__$1);

(statearr_23519[(14)] = inst_23467);

return statearr_23519;
})();
var statearr_23520_23555 = state_23505__$1;
(statearr_23520_23555[(2)] = null);

(statearr_23520_23555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (22))){
var state_23505__$1 = state_23505;
var statearr_23521_23556 = state_23505__$1;
(statearr_23521_23556[(2)] = null);

(statearr_23521_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (6))){
var inst_23446 = (state_23505[(13)]);
var inst_23455 = f.call(null,inst_23446);
var inst_23456 = cljs.core.seq.call(null,inst_23455);
var inst_23457 = inst_23456;
var inst_23458 = null;
var inst_23459 = (0);
var inst_23460 = (0);
var state_23505__$1 = (function (){var statearr_23522 = state_23505;
(statearr_23522[(9)] = inst_23458);

(statearr_23522[(10)] = inst_23459);

(statearr_23522[(11)] = inst_23457);

(statearr_23522[(12)] = inst_23460);

return statearr_23522;
})();
var statearr_23523_23557 = state_23505__$1;
(statearr_23523_23557[(2)] = null);

(statearr_23523_23557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (17))){
var inst_23471 = (state_23505[(7)]);
var inst_23475 = cljs.core.chunk_first.call(null,inst_23471);
var inst_23476 = cljs.core.chunk_rest.call(null,inst_23471);
var inst_23477 = cljs.core.count.call(null,inst_23475);
var inst_23457 = inst_23476;
var inst_23458 = inst_23475;
var inst_23459 = inst_23477;
var inst_23460 = (0);
var state_23505__$1 = (function (){var statearr_23524 = state_23505;
(statearr_23524[(9)] = inst_23458);

(statearr_23524[(10)] = inst_23459);

(statearr_23524[(11)] = inst_23457);

(statearr_23524[(12)] = inst_23460);

return statearr_23524;
})();
var statearr_23525_23558 = state_23505__$1;
(statearr_23525_23558[(2)] = null);

(statearr_23525_23558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (3))){
var inst_23503 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23505__$1,inst_23503);
} else {
if((state_val_23506 === (12))){
var inst_23491 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23526_23559 = state_23505__$1;
(statearr_23526_23559[(2)] = inst_23491);

(statearr_23526_23559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (2))){
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23505__$1,(4),in$);
} else {
if((state_val_23506 === (23))){
var inst_23499 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23527_23560 = state_23505__$1;
(statearr_23527_23560[(2)] = inst_23499);

(statearr_23527_23560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (19))){
var inst_23486 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23528_23561 = state_23505__$1;
(statearr_23528_23561[(2)] = inst_23486);

(statearr_23528_23561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (11))){
var inst_23457 = (state_23505[(11)]);
var inst_23471 = (state_23505[(7)]);
var inst_23471__$1 = cljs.core.seq.call(null,inst_23457);
var state_23505__$1 = (function (){var statearr_23529 = state_23505;
(statearr_23529[(7)] = inst_23471__$1);

return statearr_23529;
})();
if(inst_23471__$1){
var statearr_23530_23562 = state_23505__$1;
(statearr_23530_23562[(1)] = (14));

} else {
var statearr_23531_23563 = state_23505__$1;
(statearr_23531_23563[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (9))){
var inst_23493 = (state_23505[(2)]);
var inst_23494 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23505__$1 = (function (){var statearr_23532 = state_23505;
(statearr_23532[(15)] = inst_23493);

return statearr_23532;
})();
if(cljs.core.truth_(inst_23494)){
var statearr_23533_23564 = state_23505__$1;
(statearr_23533_23564[(1)] = (21));

} else {
var statearr_23534_23565 = state_23505__$1;
(statearr_23534_23565[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (5))){
var inst_23449 = cljs.core.async.close_BANG_.call(null,out);
var state_23505__$1 = state_23505;
var statearr_23535_23566 = state_23505__$1;
(statearr_23535_23566[(2)] = inst_23449);

(statearr_23535_23566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (14))){
var inst_23471 = (state_23505[(7)]);
var inst_23473 = cljs.core.chunked_seq_QMARK_.call(null,inst_23471);
var state_23505__$1 = state_23505;
if(inst_23473){
var statearr_23536_23567 = state_23505__$1;
(statearr_23536_23567[(1)] = (17));

} else {
var statearr_23537_23568 = state_23505__$1;
(statearr_23537_23568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (16))){
var inst_23489 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23538_23569 = state_23505__$1;
(statearr_23538_23569[(2)] = inst_23489);

(statearr_23538_23569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (10))){
var inst_23458 = (state_23505[(9)]);
var inst_23460 = (state_23505[(12)]);
var inst_23465 = cljs.core._nth.call(null,inst_23458,inst_23460);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,(13),out,inst_23465);
} else {
if((state_val_23506 === (18))){
var inst_23471 = (state_23505[(7)]);
var inst_23480 = cljs.core.first.call(null,inst_23471);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,(20),out,inst_23480);
} else {
if((state_val_23506 === (8))){
var inst_23459 = (state_23505[(10)]);
var inst_23460 = (state_23505[(12)]);
var inst_23462 = (inst_23460 < inst_23459);
var inst_23463 = inst_23462;
var state_23505__$1 = state_23505;
if(cljs.core.truth_(inst_23463)){
var statearr_23539_23570 = state_23505__$1;
(statearr_23539_23570[(1)] = (10));

} else {
var statearr_23540_23571 = state_23505__$1;
(statearr_23540_23571[(1)] = (11));

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
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____0 = (function (){
var statearr_23544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23544[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__);

(statearr_23544[(1)] = (1));

return statearr_23544;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____1 = (function (state_23505){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23545){if((e23545 instanceof Object)){
var ex__20932__auto__ = e23545;
var statearr_23546_23572 = state_23505;
(statearr_23546_23572[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23573 = state_23505;
state_23505 = G__23573;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__ = function(state_23505){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____1.call(this,state_23505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20929__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_23547 = f__21041__auto__.call(null);
(statearr_23547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_23547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23574 = [];
var len__19942__auto___23577 = arguments.length;
var i__19943__auto___23578 = (0);
while(true){
if((i__19943__auto___23578 < len__19942__auto___23577)){
args23574.push((arguments[i__19943__auto___23578]));

var G__23579 = (i__19943__auto___23578 + (1));
i__19943__auto___23578 = G__23579;
continue;
} else {
}
break;
}

var G__23576 = args23574.length;
switch (G__23576) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23574.length)].join('')));

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
var args23581 = [];
var len__19942__auto___23584 = arguments.length;
var i__19943__auto___23585 = (0);
while(true){
if((i__19943__auto___23585 < len__19942__auto___23584)){
args23581.push((arguments[i__19943__auto___23585]));

var G__23586 = (i__19943__auto___23585 + (1));
i__19943__auto___23585 = G__23586;
continue;
} else {
}
break;
}

var G__23583 = args23581.length;
switch (G__23583) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23581.length)].join('')));

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
var args23588 = [];
var len__19942__auto___23639 = arguments.length;
var i__19943__auto___23640 = (0);
while(true){
if((i__19943__auto___23640 < len__19942__auto___23639)){
args23588.push((arguments[i__19943__auto___23640]));

var G__23641 = (i__19943__auto___23640 + (1));
i__19943__auto___23640 = G__23641;
continue;
} else {
}
break;
}

var G__23590 = args23588.length;
switch (G__23590) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23588.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23643,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23643,out){
return (function (state_23614){
var state_val_23615 = (state_23614[(1)]);
if((state_val_23615 === (7))){
var inst_23609 = (state_23614[(2)]);
var state_23614__$1 = state_23614;
var statearr_23616_23644 = state_23614__$1;
(statearr_23616_23644[(2)] = inst_23609);

(statearr_23616_23644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (1))){
var inst_23591 = null;
var state_23614__$1 = (function (){var statearr_23617 = state_23614;
(statearr_23617[(7)] = inst_23591);

return statearr_23617;
})();
var statearr_23618_23645 = state_23614__$1;
(statearr_23618_23645[(2)] = null);

(statearr_23618_23645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (4))){
var inst_23594 = (state_23614[(8)]);
var inst_23594__$1 = (state_23614[(2)]);
var inst_23595 = (inst_23594__$1 == null);
var inst_23596 = cljs.core.not.call(null,inst_23595);
var state_23614__$1 = (function (){var statearr_23619 = state_23614;
(statearr_23619[(8)] = inst_23594__$1);

return statearr_23619;
})();
if(inst_23596){
var statearr_23620_23646 = state_23614__$1;
(statearr_23620_23646[(1)] = (5));

} else {
var statearr_23621_23647 = state_23614__$1;
(statearr_23621_23647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (6))){
var state_23614__$1 = state_23614;
var statearr_23622_23648 = state_23614__$1;
(statearr_23622_23648[(2)] = null);

(statearr_23622_23648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (3))){
var inst_23611 = (state_23614[(2)]);
var inst_23612 = cljs.core.async.close_BANG_.call(null,out);
var state_23614__$1 = (function (){var statearr_23623 = state_23614;
(statearr_23623[(9)] = inst_23611);

return statearr_23623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23614__$1,inst_23612);
} else {
if((state_val_23615 === (2))){
var state_23614__$1 = state_23614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23614__$1,(4),ch);
} else {
if((state_val_23615 === (11))){
var inst_23594 = (state_23614[(8)]);
var inst_23603 = (state_23614[(2)]);
var inst_23591 = inst_23594;
var state_23614__$1 = (function (){var statearr_23624 = state_23614;
(statearr_23624[(7)] = inst_23591);

(statearr_23624[(10)] = inst_23603);

return statearr_23624;
})();
var statearr_23625_23649 = state_23614__$1;
(statearr_23625_23649[(2)] = null);

(statearr_23625_23649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (9))){
var inst_23594 = (state_23614[(8)]);
var state_23614__$1 = state_23614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23614__$1,(11),out,inst_23594);
} else {
if((state_val_23615 === (5))){
var inst_23594 = (state_23614[(8)]);
var inst_23591 = (state_23614[(7)]);
var inst_23598 = cljs.core._EQ_.call(null,inst_23594,inst_23591);
var state_23614__$1 = state_23614;
if(inst_23598){
var statearr_23627_23650 = state_23614__$1;
(statearr_23627_23650[(1)] = (8));

} else {
var statearr_23628_23651 = state_23614__$1;
(statearr_23628_23651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (10))){
var inst_23606 = (state_23614[(2)]);
var state_23614__$1 = state_23614;
var statearr_23629_23652 = state_23614__$1;
(statearr_23629_23652[(2)] = inst_23606);

(statearr_23629_23652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23615 === (8))){
var inst_23591 = (state_23614[(7)]);
var tmp23626 = inst_23591;
var inst_23591__$1 = tmp23626;
var state_23614__$1 = (function (){var statearr_23630 = state_23614;
(statearr_23630[(7)] = inst_23591__$1);

return statearr_23630;
})();
var statearr_23631_23653 = state_23614__$1;
(statearr_23631_23653[(2)] = null);

(statearr_23631_23653[(1)] = (2));


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
});})(c__21040__auto___23643,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23643,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23635[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23635[(1)] = (1));

return statearr_23635;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23614){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23636){if((e23636 instanceof Object)){
var ex__20932__auto__ = e23636;
var statearr_23637_23654 = state_23614;
(statearr_23637_23654[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23655 = state_23614;
state_23614 = G__23655;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23643,out))
})();
var state__21042__auto__ = (function (){var statearr_23638 = f__21041__auto__.call(null);
(statearr_23638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23643);

return statearr_23638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23643,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23656 = [];
var len__19942__auto___23726 = arguments.length;
var i__19943__auto___23727 = (0);
while(true){
if((i__19943__auto___23727 < len__19942__auto___23726)){
args23656.push((arguments[i__19943__auto___23727]));

var G__23728 = (i__19943__auto___23727 + (1));
i__19943__auto___23727 = G__23728;
continue;
} else {
}
break;
}

var G__23658 = args23656.length;
switch (G__23658) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23656.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23730,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23730,out){
return (function (state_23696){
var state_val_23697 = (state_23696[(1)]);
if((state_val_23697 === (7))){
var inst_23692 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
var statearr_23698_23731 = state_23696__$1;
(statearr_23698_23731[(2)] = inst_23692);

(statearr_23698_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (1))){
var inst_23659 = (new Array(n));
var inst_23660 = inst_23659;
var inst_23661 = (0);
var state_23696__$1 = (function (){var statearr_23699 = state_23696;
(statearr_23699[(7)] = inst_23661);

(statearr_23699[(8)] = inst_23660);

return statearr_23699;
})();
var statearr_23700_23732 = state_23696__$1;
(statearr_23700_23732[(2)] = null);

(statearr_23700_23732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (4))){
var inst_23664 = (state_23696[(9)]);
var inst_23664__$1 = (state_23696[(2)]);
var inst_23665 = (inst_23664__$1 == null);
var inst_23666 = cljs.core.not.call(null,inst_23665);
var state_23696__$1 = (function (){var statearr_23701 = state_23696;
(statearr_23701[(9)] = inst_23664__$1);

return statearr_23701;
})();
if(inst_23666){
var statearr_23702_23733 = state_23696__$1;
(statearr_23702_23733[(1)] = (5));

} else {
var statearr_23703_23734 = state_23696__$1;
(statearr_23703_23734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (15))){
var inst_23686 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
var statearr_23704_23735 = state_23696__$1;
(statearr_23704_23735[(2)] = inst_23686);

(statearr_23704_23735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (13))){
var state_23696__$1 = state_23696;
var statearr_23705_23736 = state_23696__$1;
(statearr_23705_23736[(2)] = null);

(statearr_23705_23736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (6))){
var inst_23661 = (state_23696[(7)]);
var inst_23682 = (inst_23661 > (0));
var state_23696__$1 = state_23696;
if(cljs.core.truth_(inst_23682)){
var statearr_23706_23737 = state_23696__$1;
(statearr_23706_23737[(1)] = (12));

} else {
var statearr_23707_23738 = state_23696__$1;
(statearr_23707_23738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (3))){
var inst_23694 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23696__$1,inst_23694);
} else {
if((state_val_23697 === (12))){
var inst_23660 = (state_23696[(8)]);
var inst_23684 = cljs.core.vec.call(null,inst_23660);
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23696__$1,(15),out,inst_23684);
} else {
if((state_val_23697 === (2))){
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23696__$1,(4),ch);
} else {
if((state_val_23697 === (11))){
var inst_23676 = (state_23696[(2)]);
var inst_23677 = (new Array(n));
var inst_23660 = inst_23677;
var inst_23661 = (0);
var state_23696__$1 = (function (){var statearr_23708 = state_23696;
(statearr_23708[(10)] = inst_23676);

(statearr_23708[(7)] = inst_23661);

(statearr_23708[(8)] = inst_23660);

return statearr_23708;
})();
var statearr_23709_23739 = state_23696__$1;
(statearr_23709_23739[(2)] = null);

(statearr_23709_23739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (9))){
var inst_23660 = (state_23696[(8)]);
var inst_23674 = cljs.core.vec.call(null,inst_23660);
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23696__$1,(11),out,inst_23674);
} else {
if((state_val_23697 === (5))){
var inst_23669 = (state_23696[(11)]);
var inst_23661 = (state_23696[(7)]);
var inst_23664 = (state_23696[(9)]);
var inst_23660 = (state_23696[(8)]);
var inst_23668 = (inst_23660[inst_23661] = inst_23664);
var inst_23669__$1 = (inst_23661 + (1));
var inst_23670 = (inst_23669__$1 < n);
var state_23696__$1 = (function (){var statearr_23710 = state_23696;
(statearr_23710[(11)] = inst_23669__$1);

(statearr_23710[(12)] = inst_23668);

return statearr_23710;
})();
if(cljs.core.truth_(inst_23670)){
var statearr_23711_23740 = state_23696__$1;
(statearr_23711_23740[(1)] = (8));

} else {
var statearr_23712_23741 = state_23696__$1;
(statearr_23712_23741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (14))){
var inst_23689 = (state_23696[(2)]);
var inst_23690 = cljs.core.async.close_BANG_.call(null,out);
var state_23696__$1 = (function (){var statearr_23714 = state_23696;
(statearr_23714[(13)] = inst_23689);

return statearr_23714;
})();
var statearr_23715_23742 = state_23696__$1;
(statearr_23715_23742[(2)] = inst_23690);

(statearr_23715_23742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (10))){
var inst_23680 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
var statearr_23716_23743 = state_23696__$1;
(statearr_23716_23743[(2)] = inst_23680);

(statearr_23716_23743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (8))){
var inst_23669 = (state_23696[(11)]);
var inst_23660 = (state_23696[(8)]);
var tmp23713 = inst_23660;
var inst_23660__$1 = tmp23713;
var inst_23661 = inst_23669;
var state_23696__$1 = (function (){var statearr_23717 = state_23696;
(statearr_23717[(7)] = inst_23661);

(statearr_23717[(8)] = inst_23660__$1);

return statearr_23717;
})();
var statearr_23718_23744 = state_23696__$1;
(statearr_23718_23744[(2)] = null);

(statearr_23718_23744[(1)] = (2));


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
});})(c__21040__auto___23730,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23730,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23722[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23722[(1)] = (1));

return statearr_23722;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23696){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23723){if((e23723 instanceof Object)){
var ex__20932__auto__ = e23723;
var statearr_23724_23745 = state_23696;
(statearr_23724_23745[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23746 = state_23696;
state_23696 = G__23746;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23730,out))
})();
var state__21042__auto__ = (function (){var statearr_23725 = f__21041__auto__.call(null);
(statearr_23725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23730);

return statearr_23725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23730,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23747 = [];
var len__19942__auto___23821 = arguments.length;
var i__19943__auto___23822 = (0);
while(true){
if((i__19943__auto___23822 < len__19942__auto___23821)){
args23747.push((arguments[i__19943__auto___23822]));

var G__23823 = (i__19943__auto___23822 + (1));
i__19943__auto___23822 = G__23823;
continue;
} else {
}
break;
}

var G__23749 = args23747.length;
switch (G__23749) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23747.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21040__auto___23825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___23825,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___23825,out){
return (function (state_23791){
var state_val_23792 = (state_23791[(1)]);
if((state_val_23792 === (7))){
var inst_23787 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23793_23826 = state_23791__$1;
(statearr_23793_23826[(2)] = inst_23787);

(statearr_23793_23826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (1))){
var inst_23750 = [];
var inst_23751 = inst_23750;
var inst_23752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23791__$1 = (function (){var statearr_23794 = state_23791;
(statearr_23794[(7)] = inst_23751);

(statearr_23794[(8)] = inst_23752);

return statearr_23794;
})();
var statearr_23795_23827 = state_23791__$1;
(statearr_23795_23827[(2)] = null);

(statearr_23795_23827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (4))){
var inst_23755 = (state_23791[(9)]);
var inst_23755__$1 = (state_23791[(2)]);
var inst_23756 = (inst_23755__$1 == null);
var inst_23757 = cljs.core.not.call(null,inst_23756);
var state_23791__$1 = (function (){var statearr_23796 = state_23791;
(statearr_23796[(9)] = inst_23755__$1);

return statearr_23796;
})();
if(inst_23757){
var statearr_23797_23828 = state_23791__$1;
(statearr_23797_23828[(1)] = (5));

} else {
var statearr_23798_23829 = state_23791__$1;
(statearr_23798_23829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (15))){
var inst_23781 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23799_23830 = state_23791__$1;
(statearr_23799_23830[(2)] = inst_23781);

(statearr_23799_23830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (13))){
var state_23791__$1 = state_23791;
var statearr_23800_23831 = state_23791__$1;
(statearr_23800_23831[(2)] = null);

(statearr_23800_23831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (6))){
var inst_23751 = (state_23791[(7)]);
var inst_23776 = inst_23751.length;
var inst_23777 = (inst_23776 > (0));
var state_23791__$1 = state_23791;
if(cljs.core.truth_(inst_23777)){
var statearr_23801_23832 = state_23791__$1;
(statearr_23801_23832[(1)] = (12));

} else {
var statearr_23802_23833 = state_23791__$1;
(statearr_23802_23833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (3))){
var inst_23789 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23791__$1,inst_23789);
} else {
if((state_val_23792 === (12))){
var inst_23751 = (state_23791[(7)]);
var inst_23779 = cljs.core.vec.call(null,inst_23751);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23791__$1,(15),out,inst_23779);
} else {
if((state_val_23792 === (2))){
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23791__$1,(4),ch);
} else {
if((state_val_23792 === (11))){
var inst_23755 = (state_23791[(9)]);
var inst_23759 = (state_23791[(10)]);
var inst_23769 = (state_23791[(2)]);
var inst_23770 = [];
var inst_23771 = inst_23770.push(inst_23755);
var inst_23751 = inst_23770;
var inst_23752 = inst_23759;
var state_23791__$1 = (function (){var statearr_23803 = state_23791;
(statearr_23803[(11)] = inst_23769);

(statearr_23803[(12)] = inst_23771);

(statearr_23803[(7)] = inst_23751);

(statearr_23803[(8)] = inst_23752);

return statearr_23803;
})();
var statearr_23804_23834 = state_23791__$1;
(statearr_23804_23834[(2)] = null);

(statearr_23804_23834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (9))){
var inst_23751 = (state_23791[(7)]);
var inst_23767 = cljs.core.vec.call(null,inst_23751);
var state_23791__$1 = state_23791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23791__$1,(11),out,inst_23767);
} else {
if((state_val_23792 === (5))){
var inst_23755 = (state_23791[(9)]);
var inst_23752 = (state_23791[(8)]);
var inst_23759 = (state_23791[(10)]);
var inst_23759__$1 = f.call(null,inst_23755);
var inst_23760 = cljs.core._EQ_.call(null,inst_23759__$1,inst_23752);
var inst_23761 = cljs.core.keyword_identical_QMARK_.call(null,inst_23752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23762 = (inst_23760) || (inst_23761);
var state_23791__$1 = (function (){var statearr_23805 = state_23791;
(statearr_23805[(10)] = inst_23759__$1);

return statearr_23805;
})();
if(cljs.core.truth_(inst_23762)){
var statearr_23806_23835 = state_23791__$1;
(statearr_23806_23835[(1)] = (8));

} else {
var statearr_23807_23836 = state_23791__$1;
(statearr_23807_23836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (14))){
var inst_23784 = (state_23791[(2)]);
var inst_23785 = cljs.core.async.close_BANG_.call(null,out);
var state_23791__$1 = (function (){var statearr_23809 = state_23791;
(statearr_23809[(13)] = inst_23784);

return statearr_23809;
})();
var statearr_23810_23837 = state_23791__$1;
(statearr_23810_23837[(2)] = inst_23785);

(statearr_23810_23837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (10))){
var inst_23774 = (state_23791[(2)]);
var state_23791__$1 = state_23791;
var statearr_23811_23838 = state_23791__$1;
(statearr_23811_23838[(2)] = inst_23774);

(statearr_23811_23838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23792 === (8))){
var inst_23755 = (state_23791[(9)]);
var inst_23751 = (state_23791[(7)]);
var inst_23759 = (state_23791[(10)]);
var inst_23764 = inst_23751.push(inst_23755);
var tmp23808 = inst_23751;
var inst_23751__$1 = tmp23808;
var inst_23752 = inst_23759;
var state_23791__$1 = (function (){var statearr_23812 = state_23791;
(statearr_23812[(7)] = inst_23751__$1);

(statearr_23812[(8)] = inst_23752);

(statearr_23812[(14)] = inst_23764);

return statearr_23812;
})();
var statearr_23813_23839 = state_23791__$1;
(statearr_23813_23839[(2)] = null);

(statearr_23813_23839[(1)] = (2));


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
});})(c__21040__auto___23825,out))
;
return ((function (switch__20928__auto__,c__21040__auto___23825,out){
return (function() {
var cljs$core$async$state_machine__20929__auto__ = null;
var cljs$core$async$state_machine__20929__auto____0 = (function (){
var statearr_23817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23817[(0)] = cljs$core$async$state_machine__20929__auto__);

(statearr_23817[(1)] = (1));

return statearr_23817;
});
var cljs$core$async$state_machine__20929__auto____1 = (function (state_23791){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_23791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e23818){if((e23818 instanceof Object)){
var ex__20932__auto__ = e23818;
var statearr_23819_23840 = state_23791;
(statearr_23819_23840[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23841 = state_23791;
state_23791 = G__23841;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
cljs$core$async$state_machine__20929__auto__ = function(state_23791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20929__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20929__auto____1.call(this,state_23791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20929__auto____0;
cljs$core$async$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20929__auto____1;
return cljs$core$async$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___23825,out))
})();
var state__21042__auto__ = (function (){var statearr_23820 = f__21041__auto__.call(null);
(statearr_23820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___23825);

return statearr_23820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___23825,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1478582017146