// Compiled by ClojureScript 1.8.40 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28210__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28209 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__28209,(0),null);
var body = cljs.core.nthnext.call(null,vec__28209,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28211__i = 0, G__28211__a = new Array(arguments.length -  0);
while (G__28211__i < G__28211__a.length) {G__28211__a[G__28211__i] = arguments[G__28211__i + 0]; ++G__28211__i;}
  args = new cljs.core.IndexedSeq(G__28211__a,0);
} 
return G__28210__delegate.call(this,args);};
G__28210.cljs$lang$maxFixedArity = 0;
G__28210.cljs$lang$applyTo = (function (arglist__28212){
var args = cljs.core.seq(arglist__28212);
return G__28210__delegate(args);
});
G__28210.cljs$core$IFn$_invoke$arity$variadic = G__28210__delegate;
return G__28210;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19623__auto__ = (function sablono$core$update_arglists_$_iter__28217(s__28218){
return (new cljs.core.LazySeq(null,(function (){
var s__28218__$1 = s__28218;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28218__$1);
if(temp__4657__auto__){
var s__28218__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28218__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__28218__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__28220 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__28219 = (0);
while(true){
if((i__28219 < size__19622__auto__)){
var args = cljs.core._nth.call(null,c__19621__auto__,i__28219);
cljs.core.chunk_append.call(null,b__28220,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28221 = (i__28219 + (1));
i__28219 = G__28221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28220),sablono$core$update_arglists_$_iter__28217.call(null,cljs.core.chunk_rest.call(null,s__28218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28220),null);
}
} else {
var args = cljs.core.first.call(null,s__28218__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28217.call(null,cljs.core.rest.call(null,s__28218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19919__auto__ = [];
var len__19912__auto___28227 = arguments.length;
var i__19913__auto___28228 = (0);
while(true){
if((i__19913__auto___28228 < len__19912__auto___28227)){
args__19919__auto__.push((arguments[i__19913__auto___28228]));

var G__28229 = (i__19913__auto___28228 + (1));
i__19913__auto___28228 = G__28229;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19623__auto__ = (function sablono$core$iter__28223(s__28224){
return (new cljs.core.LazySeq(null,(function (){
var s__28224__$1 = s__28224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28224__$1);
if(temp__4657__auto__){
var s__28224__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28224__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__28224__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__28226 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__28225 = (0);
while(true){
if((i__28225 < size__19622__auto__)){
var style = cljs.core._nth.call(null,c__19621__auto__,i__28225);
cljs.core.chunk_append.call(null,b__28226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28230 = (i__28225 + (1));
i__28225 = G__28230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28226),sablono$core$iter__28223.call(null,cljs.core.chunk_rest.call(null,s__28224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28226),null);
}
} else {
var style = cljs.core.first.call(null,s__28224__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28223.call(null,cljs.core.rest.call(null,s__28224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28222){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28222));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28231 = (function sablono$core$link_to28231(var_args){
var args__19919__auto__ = [];
var len__19912__auto___28234 = arguments.length;
var i__19913__auto___28235 = (0);
while(true){
if((i__19913__auto___28235 < len__19912__auto___28234)){
args__19919__auto__.push((arguments[i__19913__auto___28235]));

var G__28236 = (i__19913__auto___28235 + (1));
i__19913__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((1) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28231.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19920__auto__);
});

sablono.core.link_to28231.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28231.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28231.cljs$lang$applyTo = (function (seq28232){
var G__28233 = cljs.core.first.call(null,seq28232);
var seq28232__$1 = cljs.core.next.call(null,seq28232);
return sablono.core.link_to28231.cljs$core$IFn$_invoke$arity$variadic(G__28233,seq28232__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28231);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28237 = (function sablono$core$mail_to28237(var_args){
var args__19919__auto__ = [];
var len__19912__auto___28242 = arguments.length;
var i__19913__auto___28243 = (0);
while(true){
if((i__19913__auto___28243 < len__19912__auto___28242)){
args__19919__auto__.push((arguments[i__19913__auto___28243]));

var G__28244 = (i__19913__auto___28243 + (1));
i__19913__auto___28243 = G__28244;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((1) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28237.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19920__auto__);
});

sablono.core.mail_to28237.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28240){
var vec__28241 = p__28240;
var content = cljs.core.nth.call(null,vec__28241,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18843__auto__ = content;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28237.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28237.cljs$lang$applyTo = (function (seq28238){
var G__28239 = cljs.core.first.call(null,seq28238);
var seq28238__$1 = cljs.core.next.call(null,seq28238);
return sablono.core.mail_to28237.cljs$core$IFn$_invoke$arity$variadic(G__28239,seq28238__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28237);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28245 = (function sablono$core$unordered_list28245(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19623__auto__ = (function sablono$core$unordered_list28245_$_iter__28250(s__28251){
return (new cljs.core.LazySeq(null,(function (){
var s__28251__$1 = s__28251;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28251__$1);
if(temp__4657__auto__){
var s__28251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28251__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__28251__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__28253 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__28252 = (0);
while(true){
if((i__28252 < size__19622__auto__)){
var x = cljs.core._nth.call(null,c__19621__auto__,i__28252);
cljs.core.chunk_append.call(null,b__28253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28254 = (i__28252 + (1));
i__28252 = G__28254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28253),sablono$core$unordered_list28245_$_iter__28250.call(null,cljs.core.chunk_rest.call(null,s__28251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28253),null);
}
} else {
var x = cljs.core.first.call(null,s__28251__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28245_$_iter__28250.call(null,cljs.core.rest.call(null,s__28251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28245);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28255 = (function sablono$core$ordered_list28255(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19623__auto__ = (function sablono$core$ordered_list28255_$_iter__28260(s__28261){
return (new cljs.core.LazySeq(null,(function (){
var s__28261__$1 = s__28261;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28261__$1);
if(temp__4657__auto__){
var s__28261__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28261__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__28261__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__28263 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__28262 = (0);
while(true){
if((i__28262 < size__19622__auto__)){
var x = cljs.core._nth.call(null,c__19621__auto__,i__28262);
cljs.core.chunk_append.call(null,b__28263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28264 = (i__28262 + (1));
i__28262 = G__28264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28263),sablono$core$ordered_list28255_$_iter__28260.call(null,cljs.core.chunk_rest.call(null,s__28261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28263),null);
}
} else {
var x = cljs.core.first.call(null,s__28261__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28255_$_iter__28260.call(null,cljs.core.rest.call(null,s__28261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28255);
/**
 * Create an image element.
 */
sablono.core.image28265 = (function sablono$core$image28265(var_args){
var args28266 = [];
var len__19912__auto___28269 = arguments.length;
var i__19913__auto___28270 = (0);
while(true){
if((i__19913__auto___28270 < len__19912__auto___28269)){
args28266.push((arguments[i__19913__auto___28270]));

var G__28271 = (i__19913__auto___28270 + (1));
i__19913__auto___28270 = G__28271;
continue;
} else {
}
break;
}

var G__28268 = args28266.length;
switch (G__28268) {
case 1:
return sablono.core.image28265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28266.length)].join('')));

}
});

sablono.core.image28265.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28265.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28265.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28265);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28273_SHARP_,p2__28274_SHARP_){
return [cljs.core.str(p1__28273_SHARP_),cljs.core.str("["),cljs.core.str(p2__28274_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28275_SHARP_,p2__28276_SHARP_){
return [cljs.core.str(p1__28275_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28276_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18843__auto__ = value;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field28277 = (function sablono$core$color_field28277(var_args){
var args28278 = [];
var len__19912__auto___28345 = arguments.length;
var i__19913__auto___28346 = (0);
while(true){
if((i__19913__auto___28346 < len__19912__auto___28345)){
args28278.push((arguments[i__19913__auto___28346]));

var G__28347 = (i__19913__auto___28346 + (1));
i__19913__auto___28346 = G__28347;
continue;
} else {
}
break;
}

var G__28280 = args28278.length;
switch (G__28280) {
case 1:
return sablono.core.color_field28277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28278.length)].join('')));

}
});

sablono.core.color_field28277.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.color_field28277.call(null,name__28198__auto__,null);
});

sablono.core.color_field28277.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.color_field28277.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28277);

/**
 * Creates a date input field.
 */
sablono.core.date_field28281 = (function sablono$core$date_field28281(var_args){
var args28282 = [];
var len__19912__auto___28349 = arguments.length;
var i__19913__auto___28350 = (0);
while(true){
if((i__19913__auto___28350 < len__19912__auto___28349)){
args28282.push((arguments[i__19913__auto___28350]));

var G__28351 = (i__19913__auto___28350 + (1));
i__19913__auto___28350 = G__28351;
continue;
} else {
}
break;
}

var G__28284 = args28282.length;
switch (G__28284) {
case 1:
return sablono.core.date_field28281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28282.length)].join('')));

}
});

sablono.core.date_field28281.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.date_field28281.call(null,name__28198__auto__,null);
});

sablono.core.date_field28281.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.date_field28281.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28281);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28285 = (function sablono$core$datetime_field28285(var_args){
var args28286 = [];
var len__19912__auto___28353 = arguments.length;
var i__19913__auto___28354 = (0);
while(true){
if((i__19913__auto___28354 < len__19912__auto___28353)){
args28286.push((arguments[i__19913__auto___28354]));

var G__28355 = (i__19913__auto___28354 + (1));
i__19913__auto___28354 = G__28355;
continue;
} else {
}
break;
}

var G__28288 = args28286.length;
switch (G__28288) {
case 1:
return sablono.core.datetime_field28285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28286.length)].join('')));

}
});

sablono.core.datetime_field28285.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.datetime_field28285.call(null,name__28198__auto__,null);
});

sablono.core.datetime_field28285.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.datetime_field28285.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28285);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28289 = (function sablono$core$datetime_local_field28289(var_args){
var args28290 = [];
var len__19912__auto___28357 = arguments.length;
var i__19913__auto___28358 = (0);
while(true){
if((i__19913__auto___28358 < len__19912__auto___28357)){
args28290.push((arguments[i__19913__auto___28358]));

var G__28359 = (i__19913__auto___28358 + (1));
i__19913__auto___28358 = G__28359;
continue;
} else {
}
break;
}

var G__28292 = args28290.length;
switch (G__28292) {
case 1:
return sablono.core.datetime_local_field28289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28290.length)].join('')));

}
});

sablono.core.datetime_local_field28289.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.datetime_local_field28289.call(null,name__28198__auto__,null);
});

sablono.core.datetime_local_field28289.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.datetime_local_field28289.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28289);

/**
 * Creates a email input field.
 */
sablono.core.email_field28293 = (function sablono$core$email_field28293(var_args){
var args28294 = [];
var len__19912__auto___28361 = arguments.length;
var i__19913__auto___28362 = (0);
while(true){
if((i__19913__auto___28362 < len__19912__auto___28361)){
args28294.push((arguments[i__19913__auto___28362]));

var G__28363 = (i__19913__auto___28362 + (1));
i__19913__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var G__28296 = args28294.length;
switch (G__28296) {
case 1:
return sablono.core.email_field28293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28294.length)].join('')));

}
});

sablono.core.email_field28293.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.email_field28293.call(null,name__28198__auto__,null);
});

sablono.core.email_field28293.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.email_field28293.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28293);

/**
 * Creates a file input field.
 */
sablono.core.file_field28297 = (function sablono$core$file_field28297(var_args){
var args28298 = [];
var len__19912__auto___28365 = arguments.length;
var i__19913__auto___28366 = (0);
while(true){
if((i__19913__auto___28366 < len__19912__auto___28365)){
args28298.push((arguments[i__19913__auto___28366]));

var G__28367 = (i__19913__auto___28366 + (1));
i__19913__auto___28366 = G__28367;
continue;
} else {
}
break;
}

var G__28300 = args28298.length;
switch (G__28300) {
case 1:
return sablono.core.file_field28297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28298.length)].join('')));

}
});

sablono.core.file_field28297.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.file_field28297.call(null,name__28198__auto__,null);
});

sablono.core.file_field28297.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.file_field28297.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28297);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28301 = (function sablono$core$hidden_field28301(var_args){
var args28302 = [];
var len__19912__auto___28369 = arguments.length;
var i__19913__auto___28370 = (0);
while(true){
if((i__19913__auto___28370 < len__19912__auto___28369)){
args28302.push((arguments[i__19913__auto___28370]));

var G__28371 = (i__19913__auto___28370 + (1));
i__19913__auto___28370 = G__28371;
continue;
} else {
}
break;
}

var G__28304 = args28302.length;
switch (G__28304) {
case 1:
return sablono.core.hidden_field28301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28302.length)].join('')));

}
});

sablono.core.hidden_field28301.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.hidden_field28301.call(null,name__28198__auto__,null);
});

sablono.core.hidden_field28301.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.hidden_field28301.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28301);

/**
 * Creates a month input field.
 */
sablono.core.month_field28305 = (function sablono$core$month_field28305(var_args){
var args28306 = [];
var len__19912__auto___28373 = arguments.length;
var i__19913__auto___28374 = (0);
while(true){
if((i__19913__auto___28374 < len__19912__auto___28373)){
args28306.push((arguments[i__19913__auto___28374]));

var G__28375 = (i__19913__auto___28374 + (1));
i__19913__auto___28374 = G__28375;
continue;
} else {
}
break;
}

var G__28308 = args28306.length;
switch (G__28308) {
case 1:
return sablono.core.month_field28305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28306.length)].join('')));

}
});

sablono.core.month_field28305.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.month_field28305.call(null,name__28198__auto__,null);
});

sablono.core.month_field28305.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.month_field28305.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28305);

/**
 * Creates a number input field.
 */
sablono.core.number_field28309 = (function sablono$core$number_field28309(var_args){
var args28310 = [];
var len__19912__auto___28377 = arguments.length;
var i__19913__auto___28378 = (0);
while(true){
if((i__19913__auto___28378 < len__19912__auto___28377)){
args28310.push((arguments[i__19913__auto___28378]));

var G__28379 = (i__19913__auto___28378 + (1));
i__19913__auto___28378 = G__28379;
continue;
} else {
}
break;
}

var G__28312 = args28310.length;
switch (G__28312) {
case 1:
return sablono.core.number_field28309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28310.length)].join('')));

}
});

sablono.core.number_field28309.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.number_field28309.call(null,name__28198__auto__,null);
});

sablono.core.number_field28309.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.number_field28309.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28309);

/**
 * Creates a password input field.
 */
sablono.core.password_field28313 = (function sablono$core$password_field28313(var_args){
var args28314 = [];
var len__19912__auto___28381 = arguments.length;
var i__19913__auto___28382 = (0);
while(true){
if((i__19913__auto___28382 < len__19912__auto___28381)){
args28314.push((arguments[i__19913__auto___28382]));

var G__28383 = (i__19913__auto___28382 + (1));
i__19913__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var G__28316 = args28314.length;
switch (G__28316) {
case 1:
return sablono.core.password_field28313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28314.length)].join('')));

}
});

sablono.core.password_field28313.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.password_field28313.call(null,name__28198__auto__,null);
});

sablono.core.password_field28313.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.password_field28313.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28313);

/**
 * Creates a range input field.
 */
sablono.core.range_field28317 = (function sablono$core$range_field28317(var_args){
var args28318 = [];
var len__19912__auto___28385 = arguments.length;
var i__19913__auto___28386 = (0);
while(true){
if((i__19913__auto___28386 < len__19912__auto___28385)){
args28318.push((arguments[i__19913__auto___28386]));

var G__28387 = (i__19913__auto___28386 + (1));
i__19913__auto___28386 = G__28387;
continue;
} else {
}
break;
}

var G__28320 = args28318.length;
switch (G__28320) {
case 1:
return sablono.core.range_field28317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28318.length)].join('')));

}
});

sablono.core.range_field28317.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.range_field28317.call(null,name__28198__auto__,null);
});

sablono.core.range_field28317.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.range_field28317.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28317);

/**
 * Creates a search input field.
 */
sablono.core.search_field28321 = (function sablono$core$search_field28321(var_args){
var args28322 = [];
var len__19912__auto___28389 = arguments.length;
var i__19913__auto___28390 = (0);
while(true){
if((i__19913__auto___28390 < len__19912__auto___28389)){
args28322.push((arguments[i__19913__auto___28390]));

var G__28391 = (i__19913__auto___28390 + (1));
i__19913__auto___28390 = G__28391;
continue;
} else {
}
break;
}

var G__28324 = args28322.length;
switch (G__28324) {
case 1:
return sablono.core.search_field28321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28322.length)].join('')));

}
});

sablono.core.search_field28321.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.search_field28321.call(null,name__28198__auto__,null);
});

sablono.core.search_field28321.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.search_field28321.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28321);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28325 = (function sablono$core$tel_field28325(var_args){
var args28326 = [];
var len__19912__auto___28393 = arguments.length;
var i__19913__auto___28394 = (0);
while(true){
if((i__19913__auto___28394 < len__19912__auto___28393)){
args28326.push((arguments[i__19913__auto___28394]));

var G__28395 = (i__19913__auto___28394 + (1));
i__19913__auto___28394 = G__28395;
continue;
} else {
}
break;
}

var G__28328 = args28326.length;
switch (G__28328) {
case 1:
return sablono.core.tel_field28325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28326.length)].join('')));

}
});

sablono.core.tel_field28325.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.tel_field28325.call(null,name__28198__auto__,null);
});

sablono.core.tel_field28325.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.tel_field28325.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28325);

/**
 * Creates a text input field.
 */
sablono.core.text_field28329 = (function sablono$core$text_field28329(var_args){
var args28330 = [];
var len__19912__auto___28397 = arguments.length;
var i__19913__auto___28398 = (0);
while(true){
if((i__19913__auto___28398 < len__19912__auto___28397)){
args28330.push((arguments[i__19913__auto___28398]));

var G__28399 = (i__19913__auto___28398 + (1));
i__19913__auto___28398 = G__28399;
continue;
} else {
}
break;
}

var G__28332 = args28330.length;
switch (G__28332) {
case 1:
return sablono.core.text_field28329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28330.length)].join('')));

}
});

sablono.core.text_field28329.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.text_field28329.call(null,name__28198__auto__,null);
});

sablono.core.text_field28329.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.text_field28329.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28329);

/**
 * Creates a time input field.
 */
sablono.core.time_field28333 = (function sablono$core$time_field28333(var_args){
var args28334 = [];
var len__19912__auto___28401 = arguments.length;
var i__19913__auto___28402 = (0);
while(true){
if((i__19913__auto___28402 < len__19912__auto___28401)){
args28334.push((arguments[i__19913__auto___28402]));

var G__28403 = (i__19913__auto___28402 + (1));
i__19913__auto___28402 = G__28403;
continue;
} else {
}
break;
}

var G__28336 = args28334.length;
switch (G__28336) {
case 1:
return sablono.core.time_field28333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28334.length)].join('')));

}
});

sablono.core.time_field28333.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.time_field28333.call(null,name__28198__auto__,null);
});

sablono.core.time_field28333.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.time_field28333.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28333);

/**
 * Creates a url input field.
 */
sablono.core.url_field28337 = (function sablono$core$url_field28337(var_args){
var args28338 = [];
var len__19912__auto___28405 = arguments.length;
var i__19913__auto___28406 = (0);
while(true){
if((i__19913__auto___28406 < len__19912__auto___28405)){
args28338.push((arguments[i__19913__auto___28406]));

var G__28407 = (i__19913__auto___28406 + (1));
i__19913__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var G__28340 = args28338.length;
switch (G__28340) {
case 1:
return sablono.core.url_field28337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28338.length)].join('')));

}
});

sablono.core.url_field28337.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.url_field28337.call(null,name__28198__auto__,null);
});

sablono.core.url_field28337.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.url_field28337.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28337);

/**
 * Creates a week input field.
 */
sablono.core.week_field28341 = (function sablono$core$week_field28341(var_args){
var args28342 = [];
var len__19912__auto___28409 = arguments.length;
var i__19913__auto___28410 = (0);
while(true){
if((i__19913__auto___28410 < len__19912__auto___28409)){
args28342.push((arguments[i__19913__auto___28410]));

var G__28411 = (i__19913__auto___28410 + (1));
i__19913__auto___28410 = G__28411;
continue;
} else {
}
break;
}

var G__28344 = args28342.length;
switch (G__28344) {
case 1:
return sablono.core.week_field28341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28342.length)].join('')));

}
});

sablono.core.week_field28341.cljs$core$IFn$_invoke$arity$1 = (function (name__28198__auto__){
return sablono.core.week_field28341.call(null,name__28198__auto__,null);
});

sablono.core.week_field28341.cljs$core$IFn$_invoke$arity$2 = (function (name__28198__auto__,value__28199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28198__auto__,value__28199__auto__);
});

sablono.core.week_field28341.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28341);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28413 = (function sablono$core$check_box28413(var_args){
var args28414 = [];
var len__19912__auto___28417 = arguments.length;
var i__19913__auto___28418 = (0);
while(true){
if((i__19913__auto___28418 < len__19912__auto___28417)){
args28414.push((arguments[i__19913__auto___28418]));

var G__28419 = (i__19913__auto___28418 + (1));
i__19913__auto___28418 = G__28419;
continue;
} else {
}
break;
}

var G__28416 = args28414.length;
switch (G__28416) {
case 1:
return sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28414.length)].join('')));

}
});

sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28413.call(null,name,null);
});

sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28413.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28413.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18843__auto__ = value;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28413.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28413);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28421 = (function sablono$core$radio_button28421(var_args){
var args28422 = [];
var len__19912__auto___28425 = arguments.length;
var i__19913__auto___28426 = (0);
while(true){
if((i__19913__auto___28426 < len__19912__auto___28425)){
args28422.push((arguments[i__19913__auto___28426]));

var G__28427 = (i__19913__auto___28426 + (1));
i__19913__auto___28426 = G__28427;
continue;
} else {
}
break;
}

var G__28424 = args28422.length;
switch (G__28424) {
case 1:
return sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28422.length)].join('')));

}
});

sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28421.call(null,group,null);
});

sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28421.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28421.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18843__auto__ = value;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28421.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28421);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28429 = (function sablono$core$select_options28429(coll){
var iter__19623__auto__ = (function sablono$core$select_options28429_$_iter__28438(s__28439){
return (new cljs.core.LazySeq(null,(function (){
var s__28439__$1 = s__28439;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28439__$1);
if(temp__4657__auto__){
var s__28439__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28439__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__28439__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__28441 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__28440 = (0);
while(true){
if((i__28440 < size__19622__auto__)){
var x = cljs.core._nth.call(null,c__19621__auto__,i__28440);
cljs.core.chunk_append.call(null,b__28441,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28444 = x;
var text = cljs.core.nth.call(null,vec__28444,(0),null);
var val = cljs.core.nth.call(null,vec__28444,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28444,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28429.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28446 = (i__28440 + (1));
i__28440 = G__28446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28441),sablono$core$select_options28429_$_iter__28438.call(null,cljs.core.chunk_rest.call(null,s__28439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28441),null);
}
} else {
var x = cljs.core.first.call(null,s__28439__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28445 = x;
var text = cljs.core.nth.call(null,vec__28445,(0),null);
var val = cljs.core.nth.call(null,vec__28445,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28445,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28429.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28429_$_iter__28438.call(null,cljs.core.rest.call(null,s__28439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28429);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28447 = (function sablono$core$drop_down28447(var_args){
var args28448 = [];
var len__19912__auto___28451 = arguments.length;
var i__19913__auto___28452 = (0);
while(true){
if((i__19913__auto___28452 < len__19912__auto___28451)){
args28448.push((arguments[i__19913__auto___28452]));

var G__28453 = (i__19913__auto___28452 + (1));
i__19913__auto___28452 = G__28453;
continue;
} else {
}
break;
}

var G__28450 = args28448.length;
switch (G__28450) {
case 2:
return sablono.core.drop_down28447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28447.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28448.length)].join('')));

}
});

sablono.core.drop_down28447.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28447.call(null,name,options,null);
});

sablono.core.drop_down28447.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28447.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28447);
/**
 * Creates a text area element.
 */
sablono.core.text_area28455 = (function sablono$core$text_area28455(var_args){
var args28456 = [];
var len__19912__auto___28459 = arguments.length;
var i__19913__auto___28460 = (0);
while(true){
if((i__19913__auto___28460 < len__19912__auto___28459)){
args28456.push((arguments[i__19913__auto___28460]));

var G__28461 = (i__19913__auto___28460 + (1));
i__19913__auto___28460 = G__28461;
continue;
} else {
}
break;
}

var G__28458 = args28456.length;
switch (G__28458) {
case 1:
return sablono.core.text_area28455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28456.length)].join('')));

}
});

sablono.core.text_area28455.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28455.call(null,name,null);
});

sablono.core.text_area28455.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18843__auto__ = value;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28455.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28455);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28463 = (function sablono$core$label28463(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28463);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28464 = (function sablono$core$submit_button28464(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28464);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28465 = (function sablono$core$reset_button28465(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28465);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28466 = (function sablono$core$form_to28466(var_args){
var args__19919__auto__ = [];
var len__19912__auto___28471 = arguments.length;
var i__19913__auto___28472 = (0);
while(true){
if((i__19913__auto___28472 < len__19912__auto___28471)){
args__19919__auto__.push((arguments[i__19913__auto___28472]));

var G__28473 = (i__19913__auto___28472 + (1));
i__19913__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((1) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28466.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19920__auto__);
});

sablono.core.form_to28466.cljs$core$IFn$_invoke$arity$variadic = (function (p__28469,body){
var vec__28470 = p__28469;
var method = cljs.core.nth.call(null,vec__28470,(0),null);
var action = cljs.core.nth.call(null,vec__28470,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28466.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28466.cljs$lang$applyTo = (function (seq28467){
var G__28468 = cljs.core.first.call(null,seq28467);
var seq28467__$1 = cljs.core.next.call(null,seq28467);
return sablono.core.form_to28466.cljs$core$IFn$_invoke$arity$variadic(G__28468,seq28467__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28466);

//# sourceMappingURL=core.js.map?rel=1478297186931