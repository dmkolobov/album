// Compiled by ClojureScript 1.8.40 {}
goog.provide('layout.data');
goog.require('cljs.core');
goog.require('re_frame.core');

/**
 * @interface
 */
layout.data.IWillLayout = function(){};

/**
 * 
 */
layout.data.aspect = (function layout$data$aspect(_){
if((!((_ == null))) && (!((_.layout$data$IWillLayout$aspect$arity$1 == null)))){
return _.layout$data$IWillLayout$aspect$arity$1(_);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (layout.data.aspect[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_);
} else {
var m__19507__auto____$1 = (layout.data.aspect["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IWillLayout.aspect",_);
}
}
}
});


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
layout.data.PaintRect = (function (id,x,y,width,height,__meta,__extmap,__hash){
this.id = id;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
layout.data.PaintRect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

layout.data.PaintRect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k25110,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__25112 = (((k25110 instanceof cljs.core.Keyword))?k25110.fqn:null);
switch (G__25112) {
case "id":
return self__.id;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25110,else__19468__auto__);

}
});

layout.data.PaintRect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#layout.data.PaintRect{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

layout.data.PaintRect.prototype.cljs$core$IIterable$ = true;

layout.data.PaintRect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25109){
var self__ = this;
var G__25109__$1 = this;
return (new cljs.core.RecordIter((0),G__25109__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

layout.data.PaintRect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

layout.data.PaintRect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});

layout.data.PaintRect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

layout.data.PaintRect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

layout.data.PaintRect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

layout.data.PaintRect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

layout.data.PaintRect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__25109){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__25113 = cljs.core.keyword_identical_QMARK_;
var expr__25114 = k__19473__auto__;
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25114))){
return (new layout.data.PaintRect(G__25109,self__.x,self__.y,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__25114))){
return (new layout.data.PaintRect(self__.id,G__25109,self__.y,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__25114))){
return (new layout.data.PaintRect(self__.id,self__.x,G__25109,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__25114))){
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,G__25109,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25113.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__25114))){
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,self__.width,G__25109,self__.__meta,self__.__extmap,null));
} else {
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__25109),null));
}
}
}
}
}
});

layout.data.PaintRect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

layout.data.PaintRect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__25109){
var self__ = this;
var this__19464__auto____$1 = this;
return (new layout.data.PaintRect(self__.id,self__.x,self__.y,self__.width,self__.height,G__25109,self__.__extmap,self__.__hash));
});

layout.data.PaintRect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

layout.data.PaintRect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
});

layout.data.PaintRect.cljs$lang$type = true;

layout.data.PaintRect.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"layout.data/PaintRect");
});

layout.data.PaintRect.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"layout.data/PaintRect");
});

layout.data.__GT_PaintRect = (function layout$data$__GT_PaintRect(id,x,y,width,height){
return (new layout.data.PaintRect(id,x,y,width,height,null,null,null));
});

layout.data.map__GT_PaintRect = (function layout$data$map__GT_PaintRect(G__25111){
return (new layout.data.PaintRect(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25111),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__25111),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__25111),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__25111),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__25111),null,cljs.core.dissoc.call(null,G__25111,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {layout.data.IWillLayout}
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
layout.data.Layout = (function (id,rect,paint_list,items,__meta,__extmap,__hash){
this.id = id;
this.rect = rect;
this.paint_list = paint_list;
this.items = items;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
layout.data.Layout.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

layout.data.Layout.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k25118,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__25120 = (((k25118 instanceof cljs.core.Keyword))?k25118.fqn:null);
switch (G__25120) {
case "id":
return self__.id;

break;
case "rect":
return self__.rect;

break;
case "paint-list":
return self__.paint_list;

break;
case "items":
return self__.items;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25118,else__19468__auto__);

}
});

layout.data.Layout.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#layout.data.Layout{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rect","rect",-108902628),self__.rect],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"paint-list","paint-list",319909561),self__.paint_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null))], null),self__.__extmap));
});

layout.data.Layout.prototype.cljs$core$IIterable$ = true;

layout.data.Layout.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25117){
var self__ = this;
var G__25117__$1 = this;
return (new cljs.core.RecordIter((0),G__25117__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"paint-list","paint-list",319909561),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

layout.data.Layout.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

layout.data.Layout.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new layout.data.Layout(self__.id,self__.rect,self__.paint_list,self__.items,self__.__meta,self__.__extmap,self__.__hash));
});

layout.data.Layout.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

layout.data.Layout.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

layout.data.Layout.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

layout.data.Layout.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"paint-list","paint-list",319909561),null,new cljs.core.Keyword(null,"items","items",1031954938),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new layout.data.Layout(self__.id,self__.rect,self__.paint_list,self__.items,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

layout.data.Layout.prototype.layout$data$IWillLayout$ = true;

layout.data.Layout.prototype.layout$data$IWillLayout$aspect$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.rect) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.rect));
});

layout.data.Layout.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__25117){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__25121 = cljs.core.keyword_identical_QMARK_;
var expr__25122 = k__19473__auto__;
if(cljs.core.truth_(pred__25121.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25122))){
return (new layout.data.Layout(G__25117,self__.rect,self__.paint_list,self__.items,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25121.call(null,new cljs.core.Keyword(null,"rect","rect",-108902628),expr__25122))){
return (new layout.data.Layout(self__.id,G__25117,self__.paint_list,self__.items,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25121.call(null,new cljs.core.Keyword(null,"paint-list","paint-list",319909561),expr__25122))){
return (new layout.data.Layout(self__.id,self__.rect,G__25117,self__.items,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25121.call(null,new cljs.core.Keyword(null,"items","items",1031954938),expr__25122))){
return (new layout.data.Layout(self__.id,self__.rect,self__.paint_list,G__25117,self__.__meta,self__.__extmap,null));
} else {
return (new layout.data.Layout(self__.id,self__.rect,self__.paint_list,self__.items,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__25117),null));
}
}
}
}
});

layout.data.Layout.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rect","rect",-108902628),self__.rect],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"paint-list","paint-list",319909561),self__.paint_list],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null))], null),self__.__extmap));
});

layout.data.Layout.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__25117){
var self__ = this;
var this__19464__auto____$1 = this;
return (new layout.data.Layout(self__.id,self__.rect,self__.paint_list,self__.items,G__25117,self__.__extmap,self__.__hash));
});

layout.data.Layout.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

layout.data.Layout.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"rect","rect",1531628899,null),new cljs.core.Symbol(null,"paint-list","paint-list",1960441088,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

layout.data.Layout.cljs$lang$type = true;

layout.data.Layout.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"layout.data/Layout");
});

layout.data.Layout.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"layout.data/Layout");
});

layout.data.__GT_Layout = (function layout$data$__GT_Layout(id,rect,paint_list,items){
return (new layout.data.Layout(id,rect,paint_list,items,null,null,null));
});

layout.data.map__GT_Layout = (function layout$data$map__GT_Layout(G__25119){
return (new layout.data.Layout(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25119),new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(G__25119),new cljs.core.Keyword(null,"paint-list","paint-list",319909561).cljs$core$IFn$_invoke$arity$1(G__25119),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(G__25119),null,cljs.core.dissoc.call(null,G__25119,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"paint-list","paint-list",319909561),new cljs.core.Keyword(null,"items","items",1031954938)),null));
});


//# sourceMappingURL=data.js.map?rel=1478388956336