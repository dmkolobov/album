// Compiled by ClojureScript 1.8.40 {}
goog.provide('layout.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('layout.subs');
goog.require('layout.events');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
layout.core.Rect = (function (width,height,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
layout.core.Rect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19495__auto__,k__19496__auto__){
var self__ = this;
var this__19495__auto____$1 = this;
return cljs.core._lookup.call(null,this__19495__auto____$1,k__19496__auto__,null);
});

layout.core.Rect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19497__auto__,k26258,else__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
var G__26260 = (((k26258 instanceof cljs.core.Keyword))?k26258.fqn:null);
switch (G__26260) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26258,else__19498__auto__);

}
});

layout.core.Rect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19509__auto__,writer__19510__auto__,opts__19511__auto__){
var self__ = this;
var this__19509__auto____$1 = this;
var pr_pair__19512__auto__ = ((function (this__19509__auto____$1){
return (function (keyval__19513__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,cljs.core.pr_writer,""," ","",opts__19511__auto__,keyval__19513__auto__);
});})(this__19509__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,pr_pair__19512__auto__,"#layout.core.Rect{",", ","}",opts__19511__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

layout.core.Rect.prototype.cljs$core$IIterable$ = true;

layout.core.Rect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26257){
var self__ = this;
var G__26257__$1 = this;
return (new cljs.core.RecordIter((0),G__26257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

layout.core.Rect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19493__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
return self__.__meta;
});

layout.core.Rect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19489__auto__){
var self__ = this;
var this__19489__auto____$1 = this;
return (new layout.core.Rect(self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});

layout.core.Rect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19499__auto__){
var self__ = this;
var this__19499__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

layout.core.Rect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19490__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var h__19308__auto__ = self__.__hash;
if(!((h__19308__auto__ == null))){
return h__19308__auto__;
} else {
var h__19308__auto____$1 = cljs.core.hash_imap.call(null,this__19490__auto____$1);
self__.__hash = h__19308__auto____$1;

return h__19308__auto____$1;
}
});

layout.core.Rect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19491__auto__,other__19492__auto__){
var self__ = this;
var this__19491__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18861__auto__ = other__19492__auto__;
if(cljs.core.truth_(and__18861__auto__)){
var and__18861__auto____$1 = (this__19491__auto____$1.constructor === other__19492__auto__.constructor);
if(and__18861__auto____$1){
return cljs.core.equiv_map.call(null,this__19491__auto____$1,other__19492__auto__);
} else {
return and__18861__auto____$1;
}
} else {
return and__18861__auto__;
}
})())){
return true;
} else {
return false;
}
});

layout.core.Rect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19504__auto__,k__19505__auto__){
var self__ = this;
var this__19504__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__19505__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19504__auto____$1),self__.__meta),k__19505__auto__);
} else {
return (new layout.core.Rect(self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19505__auto__)),null));
}
});

layout.core.Rect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19502__auto__,k__19503__auto__,G__26257){
var self__ = this;
var this__19502__auto____$1 = this;
var pred__26261 = cljs.core.keyword_identical_QMARK_;
var expr__26262 = k__19503__auto__;
if(cljs.core.truth_(pred__26261.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__26262))){
return (new layout.core.Rect(G__26257,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26261.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__26262))){
return (new layout.core.Rect(self__.width,G__26257,self__.__meta,self__.__extmap,null));
} else {
return (new layout.core.Rect(self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19503__auto__,G__26257),null));
}
}
});

layout.core.Rect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19507__auto__){
var self__ = this;
var this__19507__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

layout.core.Rect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19494__auto__,G__26257){
var self__ = this;
var this__19494__auto____$1 = this;
return (new layout.core.Rect(self__.width,self__.height,G__26257,self__.__extmap,self__.__hash));
});

layout.core.Rect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19500__auto__,entry__19501__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19501__auto__)){
return cljs.core._assoc.call(null,this__19500__auto____$1,cljs.core._nth.call(null,entry__19501__auto__,(0)),cljs.core._nth.call(null,entry__19501__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19500__auto____$1,entry__19501__auto__);
}
});

layout.core.Rect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
});

layout.core.Rect.cljs$lang$type = true;

layout.core.Rect.cljs$lang$ctorPrSeq = (function (this__19529__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"layout.core/Rect");
});

layout.core.Rect.cljs$lang$ctorPrWriter = (function (this__19529__auto__,writer__19530__auto__){
return cljs.core._write.call(null,writer__19530__auto__,"layout.core/Rect");
});

layout.core.__GT_Rect = (function layout$core$__GT_Rect(width,height){
return (new layout.core.Rect(width,height,null,null,null));
});

layout.core.map__GT_Rect = (function layout$core$map__GT_Rect(G__26259){
return (new layout.core.Rect(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__26259),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__26259),null,cljs.core.dissoc.call(null,G__26259,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)),null));
});

/**
 * Given a DOM element, return a map containing the width
 *   and height of the element.
 */
layout.core.node_dimensions = (function layout$core$node_dimensions(node){
var rect = node.getBoundingClientRect();
return (new layout.core.Rect(parseInt((function (){var x__19211__auto__ = rect.width;
var y__19212__auto__ = window.innerWidth;
return ((x__19211__auto__ < y__19212__auto__) ? x__19211__auto__ : y__19212__auto__);
})()),window.innerHeight,null,null,null));
});
/**
 * Creates a function which will update the layout window rects with
 *   measurements from 'node' whenever the window resizes.
 */
layout.core.resize_handler = (function layout$core$resize_handler(layout_id,node,step){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","update-metrics","layouts/update-metrics",2065310977),layout_id,layout.core.node_dimensions.call(null,node),step], null));
});
});
/**
 * Given a paint list and an item render-fn, render each item in its
 *   correct absolute position and with the correct dimensions.
 */
layout.core.paint_layout = (function layout$core$paint_layout(render_fn,p__26265){
var map__26271 = p__26265;
var map__26271__$1 = ((((!((map__26271 == null)))?((((map__26271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26271):map__26271);
var layout__$1 = map__26271__$1;
var rect = cljs.core.get.call(null,map__26271__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var paint_list = cljs.core.get.call(null,map__26271__$1,new cljs.core.Keyword(null,"paint-list","paint-list",319909561));
var item_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),paint_list);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (item_ids,map__26271,map__26271__$1,layout__$1,rect,paint_list){
return (function (item_idx,p__26273){
var map__26274 = p__26273;
var map__26274__$1 = ((((!((map__26274 == null)))?((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26274):map__26274);
var x = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var id = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn,id,(width / height),item_idx,item_ids], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null));
});})(item_ids,map__26271,map__26271__$1,layout__$1,rect,paint_list))
,paint_list))], null);
});
layout.core.measure_node_BANG_ = (function layout$core$measure_node_BANG_(window_id,node,step){
var on_resize_BANG_ = layout.core.resize_handler.call(null,window_id,node,step);
goog.events.listen(window,goog.events.EventType.RESIZE,on_resize_BANG_);

return on_resize_BANG_.call(null);
});
layout.core.perfect_layout = (function layout$core$perfect_layout(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26283 = arguments.length;
var i__19943__auto___26284 = (0);
while(true){
if((i__19943__auto___26284 < len__19942__auto___26283)){
args__19949__auto__.push((arguments[i__19943__auto___26284]));

var G__26285 = (i__19943__auto___26284 + (1));
i__19943__auto___26284 = G__26285;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return layout.core.perfect_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

layout.core.perfect_layout.cljs$core$IFn$_invoke$arity$variadic = (function (p__26277){
var map__26278 = p__26277;
var map__26278__$1 = ((((!((map__26278 == null)))?((((map__26278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26278):map__26278);
var items = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var item_fn = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"item-fn","item-fn",-291245183));
var step = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"step","step",1288888124),(100));
var gap = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"gap","gap",80255254),(0));
var window_id = cljs.core.hash.call(null,items);
var layout__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","perfect-layout","layouts/perfect-layout",1128091322),window_id,gap], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (window_id,layout__$1,map__26278,map__26278__$1,items,item_fn,step,gap){
return (function (owner){
return layout.core.measure_node_BANG_.call(null,window_id,reagent.core.dom_node.call(null,owner),step);
});})(window_id,layout__$1,map__26278,map__26278__$1,items,item_fn,step,gap))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (window_id,layout__$1,map__26278,map__26278__$1,items,item_fn,step,gap){
return (function() { 
var G__26286__delegate = function (p__26280){
var map__26281 = p__26280;
var map__26281__$1 = ((((!((map__26281 == null)))?((((map__26281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var gap__$1 = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout.core.paint_layout,item_fn,cljs.core.deref.call(null,layout__$1)], null);
};
var G__26286 = function (var_args){
var p__26280 = null;
if (arguments.length > 0) {
var G__26287__i = 0, G__26287__a = new Array(arguments.length -  0);
while (G__26287__i < G__26287__a.length) {G__26287__a[G__26287__i] = arguments[G__26287__i + 0]; ++G__26287__i;}
  p__26280 = new cljs.core.IndexedSeq(G__26287__a,0);
} 
return G__26286__delegate.call(this,p__26280);};
G__26286.cljs$lang$maxFixedArity = 0;
G__26286.cljs$lang$applyTo = (function (arglist__26288){
var p__26280 = cljs.core.seq(arglist__26288);
return G__26286__delegate(p__26280);
});
G__26286.cljs$core$IFn$_invoke$arity$variadic = G__26286__delegate;
return G__26286;
})()
;})(window_id,layout__$1,map__26278,map__26278__$1,items,item_fn,step,gap))
], null));
});

layout.core.perfect_layout.cljs$lang$maxFixedArity = (0);

layout.core.perfect_layout.cljs$lang$applyTo = (function (seq26276){
return layout.core.perfect_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26276));
});
layout.core.grouped_layout = (function layout$core$grouped_layout(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26298 = arguments.length;
var i__19943__auto___26299 = (0);
while(true){
if((i__19943__auto___26299 < len__19942__auto___26298)){
args__19949__auto__.push((arguments[i__19943__auto___26299]));

var G__26300 = (i__19943__auto___26299 + (1));
i__19943__auto___26299 = G__26300;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return layout.core.grouped_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

layout.core.grouped_layout.cljs$core$IFn$_invoke$arity$variadic = (function (p__26290){
var map__26291 = p__26290;
var map__26291__$1 = ((((!((map__26291 == null)))?((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26291):map__26291);
var groups = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var step = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"step","step",1288888124),(100));
var item_gap = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"item-gap","item-gap",1270325531),(0));
var group_gap = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"group-gap","group-gap",1041149623),(5));
var group_fn = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707));
var item_fn = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"item-fn","item-fn",-291245183));
var window_id = cljs.core.hash.call(null,groups);
var group_layout = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","grouped-layout","layouts/grouped-layout",1156680198),window_id,item_gap,group_gap], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [groups], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn){
return (function (owner){
return layout.core.measure_node_BANG_.call(null,window_id,reagent.core.dom_node.call(null,owner),step);
});})(window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn){
return (function (_){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"grouped-perfect-layout",new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn){
return (function (row){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,row))){
var map__26293 = cljs.core.first.call(null,row);
var map__26293__$1 = ((((!((map__26293 == null)))?((((map__26293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26293):map__26293);
var layout__$1 = map__26293__$1;
var id = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var items = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_fn,id,items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout.core.paint_layout,item_fn,layout__$1], null)], null);
} else {
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),[cljs.core.str(group_gap),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,((function (window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn){
return (function (p__26295){
var map__26296 = p__26295;
var map__26296__$1 = ((((!((map__26296 == null)))?((((map__26296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26296):map__26296);
var layout__$1 = map__26296__$1;
var id = cljs.core.get.call(null,map__26296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var items = cljs.core.get.call(null,map__26296__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_fn,id,items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout.core.paint_layout,item_fn,layout__$1], null)], null);
});})(window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn))
,row)], null);

}
});})(window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn))
,cljs.core.deref.call(null,group_layout)))], null);
});})(window_id,group_layout,map__26291,map__26291__$1,groups,step,item_gap,group_gap,group_fn,item_fn))
], null));
});

layout.core.grouped_layout.cljs$lang$maxFixedArity = (0);

layout.core.grouped_layout.cljs$lang$applyTo = (function (seq26289){
return layout.core.grouped_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26289));
});

//# sourceMappingURL=core.js.map?rel=1478582023447