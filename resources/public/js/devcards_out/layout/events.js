// Compiled by ClojureScript 1.8.40 {}
goog.provide('layout.events');
goog.require('cljs.core');
goog.require('re_frame.core');

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
layout.events.LayoutContainer = (function (base_rect,scale_rect,__meta,__extmap,__hash){
this.base_rect = base_rect;
this.scale_rect = scale_rect;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
layout.events.LayoutContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

layout.events.LayoutContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k33532,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__33534 = (((k33532 instanceof cljs.core.Keyword))?k33532.fqn:null);
switch (G__33534) {
case "base-rect":
return self__.base_rect;

break;
case "scale-rect":
return self__.scale_rect;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33532,else__19468__auto__);

}
});

layout.events.LayoutContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#layout.events.LayoutContainer{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),self__.base_rect],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458),self__.scale_rect],null))], null),self__.__extmap));
});

layout.events.LayoutContainer.prototype.cljs$core$IIterable$ = true;

layout.events.LayoutContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33531){
var self__ = this;
var G__33531__$1 = this;
return (new cljs.core.RecordIter((0),G__33531__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

layout.events.LayoutContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

layout.events.LayoutContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new layout.events.LayoutContainer(self__.base_rect,self__.scale_rect,self__.__meta,self__.__extmap,self__.__hash));
});

layout.events.LayoutContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

layout.events.LayoutContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
var self__ = this;
var this__19460__auto____$1 = this;
var h__19278__auto__ = self__.__hash;
if(!((h__19278__auto__ == null))){
return h__19278__auto__;
} else {
var h__19278__auto____$1 = cljs.core.hash_imap.call(null,this__19460__auto____$1);
self__.__hash = h__19278__auto____$1;

return h__19278__auto____$1;
}
});

layout.events.LayoutContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
var self__ = this;
var this__19461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18831__auto__ = other__19462__auto__;
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = (this__19461__auto____$1.constructor === other__19462__auto__.constructor);
if(and__18831__auto____$1){
return cljs.core.equiv_map.call(null,this__19461__auto____$1,other__19462__auto__);
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
return true;
} else {
return false;
}
});

layout.events.LayoutContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458),null,new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new layout.events.LayoutContainer(self__.base_rect,self__.scale_rect,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

layout.events.LayoutContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__33531){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__33535 = cljs.core.keyword_identical_QMARK_;
var expr__33536 = k__19473__auto__;
if(cljs.core.truth_(pred__33535.call(null,new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),expr__33536))){
return (new layout.events.LayoutContainer(G__33531,self__.scale_rect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33535.call(null,new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458),expr__33536))){
return (new layout.events.LayoutContainer(self__.base_rect,G__33531,self__.__meta,self__.__extmap,null));
} else {
return (new layout.events.LayoutContainer(self__.base_rect,self__.scale_rect,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__33531),null));
}
}
});

layout.events.LayoutContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),self__.base_rect],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458),self__.scale_rect],null))], null),self__.__extmap));
});

layout.events.LayoutContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__33531){
var self__ = this;
var this__19464__auto____$1 = this;
return (new layout.events.LayoutContainer(self__.base_rect,self__.scale_rect,G__33531,self__.__extmap,self__.__hash));
});

layout.events.LayoutContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

layout.events.LayoutContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base-rect","base-rect",-1316503381,null),new cljs.core.Symbol(null,"scale-rect","scale-rect",-1332392311,null)], null);
});

layout.events.LayoutContainer.cljs$lang$type = true;

layout.events.LayoutContainer.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"layout.events/LayoutContainer");
});

layout.events.LayoutContainer.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"layout.events/LayoutContainer");
});

layout.events.__GT_LayoutContainer = (function layout$events$__GT_LayoutContainer(base_rect,scale_rect){
return (new layout.events.LayoutContainer(base_rect,scale_rect,null,null,null));
});

layout.events.map__GT_LayoutContainer = (function layout$events$map__GT_LayoutContainer(G__33533){
return (new layout.events.LayoutContainer(new cljs.core.Keyword(null,"base-rect","base-rect",1337932388).cljs$core$IFn$_invoke$arity$1(G__33533),new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458).cljs$core$IFn$_invoke$arity$1(G__33533),null,cljs.core.dissoc.call(null,G__33533,new cljs.core.Keyword(null,"base-rect","base-rect",1337932388),new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458)),null));
});

layout.events.should_layout_QMARK_ = (function layout$events$should_layout_QMARK_(step,rect,new_rect){
return (Math.abs((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new_rect))) > step);
});
layout.events.handle_update_metrics = (function layout$events$handle_update_metrics(p__33539,p__33540){
var map__33547 = p__33539;
var map__33547__$1 = ((((!((map__33547 == null)))?((((map__33547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33547):map__33547);
var db = cljs.core.get.call(null,map__33547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33548 = p__33540;
var layout_id = cljs.core.nth.call(null,vec__33548,(0),null);
var rect = cljs.core.nth.call(null,vec__33548,(1),null);
var step = cljs.core.nth.call(null,vec__33548,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","metrics","layouts/metrics",435129894),layout_id], null),((function (map__33547,map__33547__$1,db,vec__33548,layout_id,rect,step){
return (function (p__33550){
var map__33551 = p__33550;
var map__33551__$1 = ((((!((map__33551 == null)))?((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var container = map__33551__$1;
var base_rect = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"base-rect","base-rect",1337932388));
if(layout.events.should_layout_QMARK_.call(null,step,base_rect,rect)){
return (new layout.events.LayoutContainer(rect,rect,null,null,null));
} else {
return cljs.core.assoc.call(null,container,new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458),rect);
}
});})(map__33547,map__33547__$1,db,vec__33548,layout_id,rect,step))
)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("layouts","update-metrics","layouts/update-metrics",2065310977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),layout.events.handle_update_metrics);

//# sourceMappingURL=events.js.map?rel=1478297200090