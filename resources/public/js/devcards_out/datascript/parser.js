// Compiled by ClojureScript 1.8.40 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (datascript.parser._collect[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_,pred,acc);
} else {
var m__19507__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_,acc);
} else {
var m__19507__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (datascript.parser._postwalk[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_,f);
} else {
var m__19507__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__32321_SHARP_,p2__32320_SHARP_){
var temp__4655__auto__ = parse_el.call(null,p2__32320_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.call(null,p1__32321_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__19919__auto__ = [];
var len__19912__auto___32328 = arguments.length;
var i__19913__auto___32329 = (0);
while(true){
if((i__19913__auto___32329 < len__19912__auto___32328)){
args__19919__auto__.push((arguments[i__19913__auto___32329]));

var G__32330 = (i__19913__auto___32329 + (1));
i__19913__auto___32329 = G__32330;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((2) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((2)),(0),null)):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19920__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__32325){
var vec__32326 = p__32325;
var acc = cljs.core.nth.call(null,vec__32326,(0),null);
var acc__$1 = (function (){var or__18843__auto__ = acc;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__32326,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__32326,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq32322){
var G__32323 = cljs.core.first.call(null,seq32322);
var seq32322__$1 = cljs.core.next.call(null,seq32322);
var G__32324 = cljs.core.first.call(null,seq32322__$1);
var seq32322__$2 = cljs.core.next.call(null,seq32322__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__32323,G__32324,seq32322__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__18843__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__18843__auto__){
return or__18843__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__32337){
var vec__32338 = p__32337;
var k = cljs.core.nth.call(null,vec__32338,(0),null);
var v = cljs.core.nth.call(null,vec__32338,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__32331_SHARP_){
return datascript$parser$postwalk.call(null,p1__32331_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__32332_SHARP_){
return datascript$parser$postwalk.call(null,p1__32332_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__18843__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32343,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32345 = k32343;
switch (G__32345) {
default:
return cljs.core.get.call(null,self__.__extmap,k32343,else__19468__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Placeholder{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32342){
var self__ = this;
var G__32342__$1 = this;
return (new cljs.core.RecordIter((0),G__32342__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32342){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32346 = cljs.core.keyword_identical_QMARK_;
var expr__32347 = k__19473__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32342),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32342){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Placeholder(G__32342,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32339){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32340,acc32341){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32341;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32341){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32341;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__32344){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__32344),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32354,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32356 = (((k32354 instanceof cljs.core.Keyword))?k32354.fqn:null);
switch (G__32356) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32354,else__19468__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Variable{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32353){
var self__ = this;
var G__32353__$1 = this;
return (new cljs.core.RecordIter((0),G__32353__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32353){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32357 = cljs.core.keyword_identical_QMARK_;
var expr__32358 = k__19473__auto__;
if(cljs.core.truth_(pred__32357.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__32358))){
return (new datascript.parser.Variable(G__32353,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32353),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32353){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__32353,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32350){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f32350),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32351,acc32352){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32351,self__.symbol,acc32352);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32352){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32352,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__32355){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__32355),null,cljs.core.dissoc.call(null,G__32355,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32365,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32367 = (((k32365 instanceof cljs.core.Keyword))?k32365.fqn:null);
switch (G__32367) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32365,else__19468__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.SrcVar{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32364){
var self__ = this;
var G__32364__$1 = this;
return (new cljs.core.RecordIter((0),G__32364__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32364){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32368 = cljs.core.keyword_identical_QMARK_;
var expr__32369 = k__19473__auto__;
if(cljs.core.truth_(pred__32368.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__32369))){
return (new datascript.parser.SrcVar(G__32364,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32364),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32364){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__32364,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32361){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f32361),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32362,acc32363){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32362,self__.symbol,acc32363);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32363){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32363,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__32366){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__32366),null,cljs.core.dissoc.call(null,G__32366,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32376,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32378 = k32376;
switch (G__32378) {
default:
return cljs.core.get.call(null,self__.__extmap,k32376,else__19468__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32375){
var self__ = this;
var G__32375__$1 = this;
return (new cljs.core.RecordIter((0),G__32375__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32375){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32379 = cljs.core.keyword_identical_QMARK_;
var expr__32380 = k__19473__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32375),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32375){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__32375,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32372){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32373,acc32374){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32374;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32374){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32374;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__32377){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__32377),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32387,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32389 = k32387;
switch (G__32389) {
default:
return cljs.core.get.call(null,self__.__extmap,k32387,else__19468__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.RulesVar{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32386){
var self__ = this;
var G__32386__$1 = this;
return (new cljs.core.RecordIter((0),G__32386__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32386){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32390 = cljs.core.keyword_identical_QMARK_;
var expr__32391 = k__19473__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32386),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32386){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.RulesVar(G__32386,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32383){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32384,acc32385){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32385;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32385){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32385;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__32388){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__32388),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32398,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32400 = (((k32398 instanceof cljs.core.Keyword))?k32398.fqn:null);
switch (G__32400) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32398,else__19468__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Constant{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32397){
var self__ = this;
var G__32397__$1 = this;
return (new cljs.core.RecordIter((0),G__32397__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32397){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32401 = cljs.core.keyword_identical_QMARK_;
var expr__32402 = k__19473__auto__;
if(cljs.core.truth_(pred__32401.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32402))){
return (new datascript.parser.Constant(G__32397,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32397),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32397){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__32397,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32394){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f32394),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32395,acc32396){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32395,self__.value,acc32396);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32396){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32396,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__32399){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32399),null,cljs.core.dissoc.call(null,G__32399,new cljs.core.Keyword(null,"value","value",305978217)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32409,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32411 = (((k32409 instanceof cljs.core.Keyword))?k32409.fqn:null);
switch (G__32411) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32409,else__19468__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32408){
var self__ = this;
var G__32408__$1 = this;
return (new cljs.core.RecordIter((0),G__32408__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32408){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32412 = cljs.core.keyword_identical_QMARK_;
var expr__32413 = k__19473__auto__;
if(cljs.core.truth_(pred__32412.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__32413))){
return (new datascript.parser.PlainSymbol(G__32408,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32408),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32408){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__32408,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32405){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f32405),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32406,acc32407){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32406,self__.symbol,acc32407);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32407){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32407,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__32410){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__32410),null,cljs.core.dissoc.call(null,G__32410,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__18843__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32420,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32422 = (((k32420 instanceof cljs.core.Keyword))?k32420.fqn:null);
switch (G__32422) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32420,else__19468__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.RuleVars{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32419){
var self__ = this;
var G__32419__$1 = this;
return (new cljs.core.RecordIter((0),G__32419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32419){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32423 = cljs.core.keyword_identical_QMARK_;
var expr__32424 = k__19473__auto__;
if(cljs.core.truth_(pred__32423.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__32424))){
return (new datascript.parser.RuleVars(G__32419,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32423.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__32424))){
return (new datascript.parser.RuleVars(self__.required,G__32419,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32419),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32419){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__32419,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32416){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f32416),datascript.parser.postwalk.call(null,self__.free,f32416),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32417,acc32418){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32417,self__.free,datascript.parser.collect.call(null,pred32417,self__.required,acc32418));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32418){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32418,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__32421){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__32421),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__32421),null,cljs.core.dissoc.call(null,G__32421,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__32428 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__32428,(0),null);
var rest = cljs.core.nth.call(null,vec__32428,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32433,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32435 = k32433;
switch (G__32435) {
default:
return cljs.core.get.call(null,self__.__extmap,k32433,else__19468__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32432){
var self__ = this;
var G__32432__$1 = this;
return (new cljs.core.RecordIter((0),G__32432__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32432){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32436 = cljs.core.keyword_identical_QMARK_;
var expr__32437 = k__19473__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32432),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32432){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__32432,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32429){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32430,acc32431){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32431;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32431){
var self__ = this;
var ___31293__auto____$1 = this;
return acc32431;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__32434){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__32434),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32444,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32446 = (((k32444 instanceof cljs.core.Keyword))?k32444.fqn:null);
switch (G__32446) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32444,else__19468__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.BindScalar{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32443){
var self__ = this;
var G__32443__$1 = this;
return (new cljs.core.RecordIter((0),G__32443__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32443){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32447 = cljs.core.keyword_identical_QMARK_;
var expr__32448 = k__19473__auto__;
if(cljs.core.truth_(pred__32447.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__32448))){
return (new datascript.parser.BindScalar(G__32443,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32443),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32443){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__32443,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32440){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f32440),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32441,acc32442){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32441,self__.variable,acc32442);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32442){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32442,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__32445){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__32445),null,cljs.core.dissoc.call(null,G__32445,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32455,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32457 = (((k32455 instanceof cljs.core.Keyword))?k32455.fqn:null);
switch (G__32457) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32455,else__19468__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.BindTuple{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32454){
var self__ = this;
var G__32454__$1 = this;
return (new cljs.core.RecordIter((0),G__32454__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32454){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32458 = cljs.core.keyword_identical_QMARK_;
var expr__32459 = k__19473__auto__;
if(cljs.core.truth_(pred__32458.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__32459))){
return (new datascript.parser.BindTuple(G__32454,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32454),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32454){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__32454,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32451){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f32451),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32452,acc32453){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32452,self__.bindings,acc32453);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32453){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32453,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__32456){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__32456),null,cljs.core.dissoc.call(null,G__32456,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32466,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32468 = (((k32466 instanceof cljs.core.Keyword))?k32466.fqn:null);
switch (G__32468) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32466,else__19468__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.BindColl{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32465){
var self__ = this;
var G__32465__$1 = this;
return (new cljs.core.RecordIter((0),G__32465__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32465){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32469 = cljs.core.keyword_identical_QMARK_;
var expr__32470 = k__19473__auto__;
if(cljs.core.truth_(pred__32469.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__32470))){
return (new datascript.parser.BindColl(G__32465,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32465),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32465){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__32465,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32462){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f32462),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32463,acc32464){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32463,self__.binding,acc32464);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32464){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32464,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__32467){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__32467),null,cljs.core.dissoc.call(null,G__32467,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4657__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var var$ = temp__4657__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__18831__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__18831__auto__;
}
})())){
var temp__4655__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var sub_bind = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__18843__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4657__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4657__auto__)){
var sub_bindings = temp__4657__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__18831__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__18831__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__18843__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__18843__auto____$2)){
return or__18843__auto____$2;
} else {
var or__18843__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__18843__auto____$3)){
return or__18843__auto____$3;
} else {
var or__18843__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__18843__auto____$4)){
return or__18843__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__19506__auto__ = (((this$ == null))?null:this$);
var m__19507__auto__ = (datascript.parser._find_vars[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,this$);
} else {
var m__19507__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32477,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32479 = (((k32477 instanceof cljs.core.Keyword))?k32477.fqn:null);
switch (G__32479) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32477,else__19468__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Aggregate{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32476){
var self__ = this;
var G__32476__$1 = this;
return (new cljs.core.RecordIter((0),G__32476__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32476){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32480 = cljs.core.keyword_identical_QMARK_;
var expr__32481 = k__19473__auto__;
if(cljs.core.truth_(pred__32480.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__32481))){
return (new datascript.parser.Aggregate(G__32476,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32480.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__32481))){
return (new datascript.parser.Aggregate(self__.fn,G__32476,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32476),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32476){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__32476,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32473){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f32473),datascript.parser.postwalk.call(null,self__.args,f32473),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32474,acc32475){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32474,self__.args,datascript.parser.collect.call(null,pred32474,self__.fn,acc32475));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32475){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32475,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__32478){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__32478),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__32478),null,cljs.core.dissoc.call(null,G__32478,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32488,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32490 = (((k32488 instanceof cljs.core.Keyword))?k32488.fqn:null);
switch (G__32490) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32488,else__19468__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Pull{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32487){
var self__ = this;
var G__32487__$1 = this;
return (new cljs.core.RecordIter((0),G__32487__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32487){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32491 = cljs.core.keyword_identical_QMARK_;
var expr__32492 = k__19473__auto__;
if(cljs.core.truth_(pred__32491.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__32492))){
return (new datascript.parser.Pull(G__32487,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32491.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__32492))){
return (new datascript.parser.Pull(self__.source,G__32487,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32491.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__32492))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__32487,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32487),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32487){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__32487,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32484){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f32484),datascript.parser.postwalk.call(null,self__.variable,f32484),datascript.parser.postwalk.call(null,self__.pattern,f32484),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32485,acc32486){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32485,self__.pattern,datascript.parser.collect.call(null,pred32485,self__.variable,datascript.parser.collect.call(null,pred32485,self__.source,acc32486)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32486){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32486,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__32489){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__32489),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__32489),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__32489),null,cljs.core.dissoc.call(null,G__32489,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__19506__auto__ = (((this$ == null))?null:this$);
var m__19507__auto__ = (datascript.parser.find_elements[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,this$);
} else {
var m__19507__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32499,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32501 = (((k32499 instanceof cljs.core.Keyword))?k32499.fqn:null);
switch (G__32501) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32499,else__19468__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.FindRel{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32498){
var self__ = this;
var G__32498__$1 = this;
return (new cljs.core.RecordIter((0),G__32498__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32498){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32502 = cljs.core.keyword_identical_QMARK_;
var expr__32503 = k__19473__auto__;
if(cljs.core.truth_(pred__32502.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__32503))){
return (new datascript.parser.FindRel(G__32498,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32498),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32498){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__32498,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32495){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f32495),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32496,acc32497){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32496,self__.elements,acc32497);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32497){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32497,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__32500){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__32500),null,cljs.core.dissoc.call(null,G__32500,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32510,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32512 = (((k32510 instanceof cljs.core.Keyword))?k32510.fqn:null);
switch (G__32512) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32510,else__19468__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.FindColl{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32509){
var self__ = this;
var G__32509__$1 = this;
return (new cljs.core.RecordIter((0),G__32509__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32509){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32513 = cljs.core.keyword_identical_QMARK_;
var expr__32514 = k__19473__auto__;
if(cljs.core.truth_(pred__32513.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__32514))){
return (new datascript.parser.FindColl(G__32509,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32509),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32509){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__32509,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32506){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f32506),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32507,acc32508){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32507,self__.element,acc32508);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32508){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32508,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__32511){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__32511),null,cljs.core.dissoc.call(null,G__32511,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32521,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32523 = (((k32521 instanceof cljs.core.Keyword))?k32521.fqn:null);
switch (G__32523) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32521,else__19468__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.FindScalar{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32520){
var self__ = this;
var G__32520__$1 = this;
return (new cljs.core.RecordIter((0),G__32520__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32520){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32524 = cljs.core.keyword_identical_QMARK_;
var expr__32525 = k__19473__auto__;
if(cljs.core.truth_(pred__32524.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__32525))){
return (new datascript.parser.FindScalar(G__32520,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32520),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32520){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__32520,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32517){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f32517),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32518,acc32519){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32518,self__.element,acc32519);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32519){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32519,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__32522){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__32522),null,cljs.core.dissoc.call(null,G__32522,new cljs.core.Keyword(null,"element","element",1974019749)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32532,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32534 = (((k32532 instanceof cljs.core.Keyword))?k32532.fqn:null);
switch (G__32534) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32532,else__19468__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.FindTuple{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32531){
var self__ = this;
var G__32531__$1 = this;
return (new cljs.core.RecordIter((0),G__32531__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32531){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32535 = cljs.core.keyword_identical_QMARK_;
var expr__32536 = k__19473__auto__;
if(cljs.core.truth_(pred__32535.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__32536))){
return (new datascript.parser.FindTuple(G__32531,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32531),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32531){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__32531,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32528){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f32528),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32529,acc32530){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32529,self__.elements,acc32530);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32530){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32530,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__32533){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__32533),null,cljs.core.dissoc.call(null,G__32533,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__32540 = form;
var fn = cljs.core.nth.call(null,vec__32540,(0),null);
var args = cljs.core.nthnext.call(null,vec__32540,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__18831__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
return args_STAR_;
} else {
return and__18831__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__32542 = form;
var _ = cljs.core.nth.call(null,vec__32542,(0),null);
var fn = cljs.core.nth.call(null,vec__32542,(1),null);
var args = cljs.core.nthnext.call(null,vec__32542,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__18831__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
return args_STAR_;
} else {
return and__18831__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__32544 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__32544,(0),null);
var pattern = cljs.core.nth.call(null,vec__32544,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__18843__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__18831__auto__ = src_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__18831__auto____$1)){
return pattern_STAR_;
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__18843__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__18843__auto____$2)){
return or__18843__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__32546 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__32546 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__32546,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__32548 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__32548 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__32548,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__32550 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__32550 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__32550,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__32552 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__32552 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__32552,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__18843__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__18843__auto____$2)){
return or__18843__auto____$2;
} else {
var or__18843__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__18843__auto____$3)){
return or__18843__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__18843__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4655__auto__ = (function (){var or__18843__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__18843__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32557,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32559 = (((k32557 instanceof cljs.core.Keyword))?k32557.fqn:null);
switch (G__32559) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32557,else__19468__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Pattern{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32556){
var self__ = this;
var G__32556__$1 = this;
return (new cljs.core.RecordIter((0),G__32556__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32556){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32560 = cljs.core.keyword_identical_QMARK_;
var expr__32561 = k__19473__auto__;
if(cljs.core.truth_(pred__32560.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__32561))){
return (new datascript.parser.Pattern(G__32556,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32560.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__32561))){
return (new datascript.parser.Pattern(self__.source,G__32556,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32556),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32556){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__32556,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32553){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f32553),datascript.parser.postwalk.call(null,self__.pattern,f32553),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32554,acc32555){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32554,self__.pattern,datascript.parser.collect.call(null,pred32554,self__.source,acc32555));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32555){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32555,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__32558){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__32558),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__32558),null,cljs.core.dissoc.call(null,G__32558,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32568,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32570 = (((k32568 instanceof cljs.core.Keyword))?k32568.fqn:null);
switch (G__32570) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32568,else__19468__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Predicate{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32567){
var self__ = this;
var G__32567__$1 = this;
return (new cljs.core.RecordIter((0),G__32567__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32567){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32571 = cljs.core.keyword_identical_QMARK_;
var expr__32572 = k__19473__auto__;
if(cljs.core.truth_(pred__32571.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__32572))){
return (new datascript.parser.Predicate(G__32567,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32571.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__32572))){
return (new datascript.parser.Predicate(self__.fn,G__32567,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32567),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32567){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__32567,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32564){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f32564),datascript.parser.postwalk.call(null,self__.args,f32564),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32565,acc32566){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32565,self__.args,datascript.parser.collect.call(null,pred32565,self__.fn,acc32566));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32566){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32566,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__32569){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__32569),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__32569),null,cljs.core.dissoc.call(null,G__32569,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32579,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32581 = (((k32579 instanceof cljs.core.Keyword))?k32579.fqn:null);
switch (G__32581) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32579,else__19468__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Function{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32578){
var self__ = this;
var G__32578__$1 = this;
return (new cljs.core.RecordIter((0),G__32578__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32578){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32582 = cljs.core.keyword_identical_QMARK_;
var expr__32583 = k__19473__auto__;
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__32583))){
return (new datascript.parser.Function(G__32578,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__32583))){
return (new datascript.parser.Function(self__.fn,G__32578,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32582.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__32583))){
return (new datascript.parser.Function(self__.fn,self__.args,G__32578,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32578),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32578){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__32578,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32575){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f32575),datascript.parser.postwalk.call(null,self__.args,f32575),datascript.parser.postwalk.call(null,self__.binding,f32575),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32576,acc32577){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32576,self__.binding,datascript.parser.collect.call(null,pred32576,self__.args,datascript.parser.collect.call(null,pred32576,self__.fn,acc32577)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32577){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32577,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__32580){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__32580),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__32580),null,cljs.core.dissoc.call(null,G__32580,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32590,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32592 = (((k32590 instanceof cljs.core.Keyword))?k32590.fqn:null);
switch (G__32592) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32590,else__19468__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32589){
var self__ = this;
var G__32589__$1 = this;
return (new cljs.core.RecordIter((0),G__32589__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32589){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32593 = cljs.core.keyword_identical_QMARK_;
var expr__32594 = k__19473__auto__;
if(cljs.core.truth_(pred__32593.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__32594))){
return (new datascript.parser.RuleExpr(G__32589,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32593.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32594))){
return (new datascript.parser.RuleExpr(self__.source,G__32589,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32593.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__32594))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__32589,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32589),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32589){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__32589,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32586){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f32586),datascript.parser.postwalk.call(null,self__.name,f32586),datascript.parser.postwalk.call(null,self__.args,f32586),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32587,acc32588){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32587,self__.args,datascript.parser.collect.call(null,pred32587,self__.name,datascript.parser.collect.call(null,pred32587,self__.source,acc32588)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32588){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32588,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__32591){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__32591),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32591),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__32591),null,cljs.core.dissoc.call(null,G__32591,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32601,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32603 = (((k32601 instanceof cljs.core.Keyword))?k32601.fqn:null);
switch (G__32603) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32601,else__19468__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Not{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32600){
var self__ = this;
var G__32600__$1 = this;
return (new cljs.core.RecordIter((0),G__32600__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32600){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32604 = cljs.core.keyword_identical_QMARK_;
var expr__32605 = k__19473__auto__;
if(cljs.core.truth_(pred__32604.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__32605))){
return (new datascript.parser.Not(G__32600,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32604.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__32605))){
return (new datascript.parser.Not(self__.source,G__32600,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32604.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__32605))){
return (new datascript.parser.Not(self__.source,self__.vars,G__32600,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32600),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32600){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__32600,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32597){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f32597),datascript.parser.postwalk.call(null,self__.vars,f32597),datascript.parser.postwalk.call(null,self__.clauses,f32597),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32598,acc32599){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32598,self__.clauses,datascript.parser.collect.call(null,pred32598,self__.vars,datascript.parser.collect.call(null,pred32598,self__.source,acc32599)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32599){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32599,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__32602){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__32602),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__32602),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__32602),null,cljs.core.dissoc.call(null,G__32602,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32612,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32614 = (((k32612 instanceof cljs.core.Keyword))?k32612.fqn:null);
switch (G__32614) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32612,else__19468__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Or{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32611){
var self__ = this;
var G__32611__$1 = this;
return (new cljs.core.RecordIter((0),G__32611__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32611){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32615 = cljs.core.keyword_identical_QMARK_;
var expr__32616 = k__19473__auto__;
if(cljs.core.truth_(pred__32615.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__32616))){
return (new datascript.parser.Or(G__32611,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32615.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__32616))){
return (new datascript.parser.Or(self__.source,G__32611,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32615.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__32616))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__32611,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32611),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32611){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__32611,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32608){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f32608),datascript.parser.postwalk.call(null,self__.rule_vars,f32608),datascript.parser.postwalk.call(null,self__.clauses,f32608),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32609,acc32610){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32609,self__.clauses,datascript.parser.collect.call(null,pred32609,self__.rule_vars,datascript.parser.collect.call(null,pred32609,self__.source,acc32610)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32610){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32610,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__32613){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__32613),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__32613),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__32613),null,cljs.core.dissoc.call(null,G__32613,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32623,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32625 = (((k32623 instanceof cljs.core.Keyword))?k32623.fqn:null);
switch (G__32625) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32623,else__19468__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.And{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32622){
var self__ = this;
var G__32622__$1 = this;
return (new cljs.core.RecordIter((0),G__32622__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32622){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32626 = cljs.core.keyword_identical_QMARK_;
var expr__32627 = k__19473__auto__;
if(cljs.core.truth_(pred__32626.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__32627))){
return (new datascript.parser.And(G__32622,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32622),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32622){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__32622,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32619){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f32619),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32620,acc32621){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32620,self__.clauses,acc32621);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32621){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc32621,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__32624){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__32624),null,cljs.core.dissoc.call(null,G__32624,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__18843__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4655__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var source_STAR_ = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32631 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32631,(0),null);
var next_form = cljs.core.nth.call(null,vec__32631,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var pattern_STAR_ = temp__4657__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__32633 = form;
var fn = cljs.core.nth.call(null,vec__32633,(0),null);
var args = cljs.core.nthnext.call(null,vec__32633,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__18843__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__18831__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
return args_STAR_;
} else {
return and__18831__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4657__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32635 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__32635,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__32635,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__32638 = form;
var call = cljs.core.nth.call(null,vec__32638,(0),null);
var binding = cljs.core.nth.call(null,vec__32638,(1),null);
var temp__4657__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32639 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__32639,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__32639,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4657__auto____$1)){
var binding_STAR_ = temp__4657__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32642 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32642,(0),null);
var next_form = cljs.core.nth.call(null,vec__32642,(1),null);
var vec__32643 = next_form;
var name = cljs.core.nth.call(null,vec__32643,(0),null);
var args = cljs.core.nthnext.call(null,vec__32643,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_32646 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_32646)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_32646)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32649 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32649,(0),null);
var next_form = cljs.core.nth.call(null,vec__32649,(1),null);
var vec__32650 = next_form;
var sym = cljs.core.nth.call(null,vec__32650,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__32650,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32653 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32653,(0),null);
var next_form = cljs.core.nth.call(null,vec__32653,(1),null);
var vec__32654 = next_form;
var sym = cljs.core.nth.call(null,vec__32654,(0),null);
var vars = cljs.core.nth.call(null,vec__32654,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__32654,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__18831__auto__ = vars_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
return clauses_STAR_;
} else {
return and__18831__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__32663 = clause;
var map__32663__$1 = ((((!((map__32663 == null)))?((((map__32663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32663):map__32663);
var map__32664 = cljs.core.get.call(null,map__32663__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__32664__$1 = ((((!((map__32664 == null)))?((((map__32664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32664):map__32664);
var required = cljs.core.get.call(null,map__32664__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__32664__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__32663__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__32667_32671 = cljs.core.seq.call(null,clauses);
var chunk__32668_32672 = null;
var count__32669_32673 = (0);
var i__32670_32674 = (0);
while(true){
if((i__32670_32674 < count__32669_32673)){
var clause_32675__$1 = cljs.core._nth.call(null,chunk__32668_32672,i__32670_32674);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_32675__$1], null),form);

var G__32676 = seq__32667_32671;
var G__32677 = chunk__32668_32672;
var G__32678 = count__32669_32673;
var G__32679 = (i__32670_32674 + (1));
seq__32667_32671 = G__32676;
chunk__32668_32672 = G__32677;
count__32669_32673 = G__32678;
i__32670_32674 = G__32679;
continue;
} else {
var temp__4657__auto___32680 = cljs.core.seq.call(null,seq__32667_32671);
if(temp__4657__auto___32680){
var seq__32667_32681__$1 = temp__4657__auto___32680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32667_32681__$1)){
var c__19654__auto___32682 = cljs.core.chunk_first.call(null,seq__32667_32681__$1);
var G__32683 = cljs.core.chunk_rest.call(null,seq__32667_32681__$1);
var G__32684 = c__19654__auto___32682;
var G__32685 = cljs.core.count.call(null,c__19654__auto___32682);
var G__32686 = (0);
seq__32667_32671 = G__32683;
chunk__32668_32672 = G__32684;
count__32669_32673 = G__32685;
i__32670_32674 = G__32686;
continue;
} else {
var clause_32687__$1 = cljs.core.first.call(null,seq__32667_32681__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_32687__$1], null),form);

var G__32688 = cljs.core.next.call(null,seq__32667_32681__$1);
var G__32689 = null;
var G__32690 = (0);
var G__32691 = (0);
seq__32667_32671 = G__32688;
chunk__32668_32672 = G__32689;
count__32669_32673 = G__32690;
i__32670_32674 = G__32691;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32694 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32694,(0),null);
var next_form = cljs.core.nth.call(null,vec__32694,(1),null);
var vec__32695 = next_form;
var sym = cljs.core.nth.call(null,vec__32695,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__32695,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__32698 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__32698,(0),null);
var next_form = cljs.core.nth.call(null,vec__32698,(1),null);
var vec__32699 = next_form;
var sym = cljs.core.nth.call(null,vec__32699,(0),null);
var vars = cljs.core.nth.call(null,vec__32699,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__32699,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__18831__auto__ = vars_STAR_;
if(cljs.core.truth_(and__18831__auto__)){
return clauses_STAR_;
} else {
return and__18831__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__18843__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__18843__auto____$2)){
return or__18843__auto____$2;
} else {
var or__18843__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__18843__auto____$3)){
return or__18843__auto____$3;
} else {
var or__18843__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__18843__auto____$4)){
return or__18843__auto____$4;
} else {
var or__18843__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__18843__auto____$5)){
return or__18843__auto____$5;
} else {
var or__18843__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__18843__auto____$6)){
return or__18843__auto____$6;
} else {
var or__18843__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__18843__auto____$7)){
return or__18843__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__18843__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32705,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32707 = (((k32705 instanceof cljs.core.Keyword))?k32705.fqn:null);
switch (G__32707) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32705,else__19468__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32704){
var self__ = this;
var G__32704__$1 = this;
return (new cljs.core.RecordIter((0),G__32704__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32704){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32708 = cljs.core.keyword_identical_QMARK_;
var expr__32709 = k__19473__auto__;
if(cljs.core.truth_(pred__32708.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__32709))){
return (new datascript.parser.RuleBranch(G__32704,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32708.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__32709))){
return (new datascript.parser.RuleBranch(self__.vars,G__32704,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32704),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32704){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__32704,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32701){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f32701),datascript.parser.postwalk.call(null,self__.clauses,f32701),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32702,acc32703){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32702,self__.clauses,datascript.parser.collect.call(null,pred32702,self__.vars,acc32703));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32703){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32703,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__32706){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__32706),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__32706),null,cljs.core.dissoc.call(null,G__32706,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32716,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32718 = (((k32716 instanceof cljs.core.Keyword))?k32716.fqn:null);
switch (G__32718) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32716,else__19468__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Rule{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32715){
var self__ = this;
var G__32715__$1 = this;
return (new cljs.core.RecordIter((0),G__32715__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32715){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32719 = cljs.core.keyword_identical_QMARK_;
var expr__32720 = k__19473__auto__;
if(cljs.core.truth_(pred__32719.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32720))){
return (new datascript.parser.Rule(G__32715,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32719.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__32720))){
return (new datascript.parser.Rule(self__.name,G__32715,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32715),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32715){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__32715,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32712){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f32712),datascript.parser.postwalk.call(null,self__.branches,f32712),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32713,acc32714){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32713,self__.branches,datascript.parser.collect.call(null,pred32713,self__.name,acc32714));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32714){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32714,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__32717){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32717),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__32717),null,cljs.core.dissoc.call(null,G__32717,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__32723_SHARP_){
return (p1__32723_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__32724_SHARP_){
return (p1__32724_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__32727 = form;
var head = cljs.core.nth.call(null,vec__32727,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__32727,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__32728 = head;
var name = cljs.core.nth.call(null,vec__32728,(0),null);
var vars = cljs.core.nthnext.call(null,vec__32728,(1));
var name_STAR_ = (function (){var or__18843__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__18843__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__32735 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__32737 = null;
var count__32738 = (0);
var i__32739 = (0);
while(true){
if((i__32739 < count__32738)){
var b = cljs.core._nth.call(null,chunk__32737,i__32739);
var vars_32741 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_32741))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_32741)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__32742 = seq__32735;
var G__32743 = chunk__32737;
var G__32744 = count__32738;
var G__32745 = (i__32739 + (1));
seq__32735 = G__32742;
chunk__32737 = G__32743;
count__32738 = G__32744;
i__32739 = G__32745;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32735);
if(temp__4657__auto__){
var seq__32735__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32735__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__32735__$1);
var G__32746 = cljs.core.chunk_rest.call(null,seq__32735__$1);
var G__32747 = c__19654__auto__;
var G__32748 = cljs.core.count.call(null,c__19654__auto__);
var G__32749 = (0);
seq__32735 = G__32746;
chunk__32737 = G__32747;
count__32738 = G__32748;
i__32739 = G__32749;
continue;
} else {
var b = cljs.core.first.call(null,seq__32735__$1);
var vars_32750 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_32750))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_32750)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__32751 = cljs.core.next.call(null,seq__32735__$1);
var G__32752 = null;
var G__32753 = (0);
var G__32754 = (0);
seq__32735 = G__32751;
chunk__32737 = G__32752;
count__32738 = G__32753;
i__32739 = G__32754;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__19623__auto__ = (function datascript$parser$parse_rules_$_iter__32764(s__32765){
return (new cljs.core.LazySeq(null,(function (){
var s__32765__$1 = s__32765;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32765__$1);
if(temp__4657__auto__){
var s__32765__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32765__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__32765__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__32767 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__32766 = (0);
while(true){
if((i__32766 < size__19622__auto__)){
var vec__32770 = cljs.core._nth.call(null,c__19621__auto__,i__32766);
var name = cljs.core.nth.call(null,vec__32770,(0),null);
var branches = cljs.core.nth.call(null,vec__32770,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__32766,vec__32770,name,branches,c__19621__auto__,size__19622__auto__,b__32767,s__32765__$2,temp__4657__auto__){
return (function (p1__32755_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__32755_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__32755_SHARP_),null,null,null));
});})(i__32766,vec__32770,name,branches,c__19621__auto__,size__19622__auto__,b__32767,s__32765__$2,temp__4657__auto__))
,branches);
cljs.core.chunk_append.call(null,b__32767,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__32772 = (i__32766 + (1));
i__32766 = G__32772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32767),datascript$parser$parse_rules_$_iter__32764.call(null,cljs.core.chunk_rest.call(null,s__32765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32767),null);
}
} else {
var vec__32771 = cljs.core.first.call(null,s__32765__$2);
var name = cljs.core.nth.call(null,vec__32771,(0),null);
var branches = cljs.core.nth.call(null,vec__32771,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__32771,name,branches,s__32765__$2,temp__4657__auto__){
return (function (p1__32755_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__32755_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__32755_SHARP_),null,null,null));
});})(vec__32771,name,branches,s__32765__$2,temp__4657__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__32764.call(null,cljs.core.rest.call(null,s__32765__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19623__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k32777,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__32779 = (((k32777 instanceof cljs.core.Keyword))?k32777.fqn:null);
switch (G__32779) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32777,else__19468__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#datascript.parser.Query{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32776){
var self__ = this;
var G__32776__$1 = this;
return (new cljs.core.RecordIter((0),G__32776__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__32776){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__32780 = cljs.core.keyword_identical_QMARK_;
var expr__32781 = k__19473__auto__;
if(cljs.core.truth_(pred__32780.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__32781))){
return (new datascript.parser.Query(G__32776,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32780.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__32781))){
return (new datascript.parser.Query(self__.find,G__32776,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32780.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__32781))){
return (new datascript.parser.Query(self__.find,self__.with$,G__32776,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32780.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__32781))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__32776,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__32776),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__32776){
var self__ = this;
var this__19464__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__32776,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__31290__auto__,f32773){
var self__ = this;
var this__31290__auto____$1 = this;
var new__31291__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f32773),datascript.parser.postwalk.call(null,self__.with$,f32773),datascript.parser.postwalk.call(null,self__.in$,f32773),datascript.parser.postwalk.call(null,self__.where,f32773),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__31290__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__31292__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__31291__auto__,meta__31292__auto__);
} else {
return new__31291__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___31293__auto__,pred32774,acc32775){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect.call(null,pred32774,self__.where,datascript.parser.collect.call(null,pred32774,self__.in$,datascript.parser.collect.call(null,pred32774,self__.with$,datascript.parser.collect.call(null,pred32774,self__.find,acc32775))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___31293__auto__,acc32775){
var self__ = this;
var ___31293__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc32775,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__32778){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__32778),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__32778),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__32778),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__32778),null,cljs.core.dissoc.call(null,G__32778,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
if((q instanceof cljs.core.Keyword)){
var G__32784 = parsed;
var G__32785 = q;
var G__32786 = cljs.core.next.call(null,qs);
parsed = G__32784;
key = G__32785;
qs = G__32786;
continue;
} else {
var G__32787 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__32788 = key;
var G__32789 = cljs.core.next.call(null,qs);
parsed = G__32787;
key = G__32788;
qs = G__32789;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_32796 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_32797 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_32798 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_32799 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_32800 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_32796,with_vars_32797),clojure.set.union.call(null,where_vars_32799,in_vars_32798));
var shared_32801 = clojure.set.intersection.call(null,find_vars_32796,with_vars_32797);
if(cljs.core.empty_QMARK_.call(null,unknown_32800)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_32800)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_32800,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_32801)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_32801)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_32801,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_32802 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_32803 = datascript.parser.collect.call(null,((function (in_vars_32802){
return (function (p1__32790_SHARP_){
return (p1__32790_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_32802))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_32804 = datascript.parser.collect.call(null,((function (in_vars_32802,in_sources_32803){
return (function (p1__32791_SHARP_){
return (p1__32791_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_32802,in_sources_32803))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__18831__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_32802);
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_32803);
if(cljs.core.truth_(and__18831__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_32804);
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_32805 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_32805))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_32806 = datascript.parser.collect.call(null,(function (p1__32792_SHARP_){
return (p1__32792_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_32807 = datascript.parser.collect.call(null,((function (in_sources_32806){
return (function (p1__32793_SHARP_){
return (p1__32793_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_32806))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_32808 = clojure.set.difference.call(null,where_sources_32807,in_sources_32806);
if(cljs.core.empty_QMARK_.call(null,unknown_32808)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_32808)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_32808,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__32794_SHARP_){
return (p1__32794_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__32795_SHARP_){
return (p1__32795_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4657__auto__)){
var with$ = temp__4657__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1478297196313