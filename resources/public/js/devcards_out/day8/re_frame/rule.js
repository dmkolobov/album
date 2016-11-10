// Compiled by ClojureScript 1.8.40 {}
goog.provide('day8.re_frame.rule');
goog.require('cljs.core');
goog.require('re_frame.core');

/**
 * @interface
 */
day8.re_frame.rule.IAmRule = function(){};

/**
 * Return a sequence of events which should be dispatched when this rule is fired.
 */
day8.re_frame.rule.fire = (function day8$re_frame$rule$fire(_){
if((!((_ == null))) && (!((_.day8$re_frame$rule$IAmRule$fire$arity$1 == null)))){
return _.day8$re_frame$rule$IAmRule$fire$arity$1(_);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (day8.re_frame.rule.fire[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_);
} else {
var m__19507__auto____$1 = (day8.re_frame.rule.fire["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IAmRule.fire",_);
}
}
}
});

/**
 * Return a new rule which has seen the given event.
 */
day8.re_frame.rule.record = (function day8$re_frame$rule$record(_,event_v){
if((!((_ == null))) && (!((_.day8$re_frame$rule$IAmRule$record$arity$2 == null)))){
return _.day8$re_frame$rule$IAmRule$record$arity$2(_,event_v);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (day8.re_frame.rule.record[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_,event_v);
} else {
var m__19507__auto____$1 = (day8.re_frame.rule.record["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_,event_v);
} else {
throw cljs.core.missing_protocol.call(null,"IAmRule.record",_);
}
}
}
});

/**
 * Returns true if the event should be fired.
 */
day8.re_frame.rule.ready_QMARK_ = (function day8$re_frame$rule$ready_QMARK_(_){
if((!((_ == null))) && (!((_.day8$re_frame$rule$IAmRule$ready_QMARK_$arity$1 == null)))){
return _.day8$re_frame$rule$IAmRule$ready_QMARK_$arity$1(_);
} else {
var x__19506__auto__ = (((_ == null))?null:_);
var m__19507__auto__ = (day8.re_frame.rule.ready_QMARK_[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,_);
} else {
var m__19507__auto____$1 = (day8.re_frame.rule.ready_QMARK_["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IAmRule.ready?",_);
}
}
}
});

day8.re_frame.rule.matches_QMARK_ = (function day8$re_frame$rule$matches_QMARK_(pattern,event_v){
return ((cljs.core.count.call(null,pattern) <= cljs.core.count.call(null,event_v))) && (cljs.core._EQ_.call(null,cljs.core.subvec.call(null,event_v,(0),cljs.core.count.call(null,pattern)),pattern));
});
/**
 * Returns true if the rule has seen all of its required events.
 */
day8.re_frame.rule.seen_all_QMARK_ = (function day8$re_frame$rule$seen_all_QMARK_(p__22360){
var map__22363 = p__22360;
var map__22363__$1 = ((((!((map__22363 == null)))?((((map__22363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22363):map__22363);
var events = cljs.core.get.call(null,map__22363__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var seen_events = cljs.core.get.call(null,map__22363__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
return cljs.core.empty_QMARK_.call(null,cljs.core.reduce.call(null,((function (map__22363,map__22363__$1,events,seen_events){
return (function (patterns,event){
return cljs.core.remove.call(null,((function (map__22363,map__22363__$1,events,seen_events){
return (function (p1__22359_SHARP_){
return day8.re_frame.rule.matches_QMARK_.call(null,p1__22359_SHARP_,event);
});})(map__22363,map__22363__$1,events,seen_events))
,patterns);
});})(map__22363,map__22363__$1,events,seen_events))
,events,seen_events));
});
/**
 * Returns true if the rule has seen any of its required events.
 */
day8.re_frame.rule.seen_any_QMARK_ = (function day8$re_frame$rule$seen_any_QMARK_(p__22365){
var map__22368 = p__22365;
var map__22368__$1 = ((((!((map__22368 == null)))?((((map__22368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22368):map__22368);
var events = cljs.core.get.call(null,map__22368__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var seen_events = cljs.core.get.call(null,map__22368__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
return (cljs.core.count.call(null,events) > (cljs.core.count.call(null,events) - cljs.core.count.call(null,seen_events)));
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
 * @implements {day8.re_frame.rule.IAmRule}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
day8.re_frame.rule.Rule = (function (id,when_fn,events,dispatch_n,halt_QMARK_,capture_QMARK_,seen_events,__meta,__extmap,__hash){
this.id = id;
this.when_fn = when_fn;
this.events = events;
this.dispatch_n = dispatch_n;
this.halt_QMARK_ = halt_QMARK_;
this.capture_QMARK_ = capture_QMARK_;
this.seen_events = seen_events;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
day8.re_frame.rule.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

day8.re_frame.rule.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k22372,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__22374 = (((k22372 instanceof cljs.core.Keyword))?k22372.fqn:null);
switch (G__22374) {
case "id":
return self__.id;

break;
case "when-fn":
return self__.when_fn;

break;
case "events":
return self__.events;

break;
case "dispatch-n":
return self__.dispatch_n;

break;
case "halt?":
return self__.halt_QMARK_;

break;
case "capture?":
return self__.capture_QMARK_;

break;
case "seen-events":
return self__.seen_events;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22372,else__19468__auto__);

}
});

day8.re_frame.rule.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#day8.re-frame.rule.Rule{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events","events",1792552201),self__.events],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),self__.dispatch_n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"halt?","halt?",-1110658247),self__.halt_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"capture?","capture?",-741966441),self__.capture_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),self__.seen_events],null))], null),self__.__extmap));
});

day8.re_frame.rule.Rule.prototype.cljs$core$IIterable$ = true;

day8.re_frame.rule.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22371){
var self__ = this;
var G__22371__$1 = this;
return (new cljs.core.RecordIter((0),G__22371__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),new cljs.core.Keyword(null,"capture?","capture?",-741966441),new cljs.core.Keyword(null,"seen-events","seen-events",1607648392)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

day8.re_frame.rule.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

day8.re_frame.rule.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame.rule.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame.rule.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

day8.re_frame.rule.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

day8.re_frame.rule.Rule.prototype.day8$re_frame$rule$IAmRule$ = true;

day8.re_frame.rule.Rule.prototype.day8$re_frame$rule$IAmRule$ready_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.when_fn.call(null,this$__$1);
});

day8.re_frame.rule.Rule.prototype.day8$re_frame$rule$IAmRule$fire$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__22375 = (cljs.core.truth_(self__.capture_QMARK_)?cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22370_SHARP_){
return cljs.core.into.call(null,p1__22370_SHARP_,self__.seen_events);
});})(___$1))
,self__.dispatch_n):self__.dispatch_n);
if(cljs.core.truth_(self__.halt_QMARK_)){
return cljs.core.conj.call(null,G__22375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async-flow","halt","async-flow/halt",-1136687399),cljs.core.keyword.call(null,cljs.core.namespace.call(null,self__.id))], null));
} else {
return G__22375;
}
});

day8.re_frame.rule.Rule.prototype.day8$re_frame$rule$IAmRule$record$arity$2 = (function (this$,event_v){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),cljs.core.conj.call(null,self__.seen_events,event_v));
});

day8.re_frame.rule.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),null,new cljs.core.Keyword(null,"events","events",1792552201),null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),null,new cljs.core.Keyword(null,"capture?","capture?",-741966441),null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

day8.re_frame.rule.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__22371){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__22376 = cljs.core.keyword_identical_QMARK_;
var expr__22377 = k__19473__auto__;
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__22377))){
return (new day8.re_frame.rule.Rule(G__22371,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,G__22371,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"events","events",1792552201),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,G__22371,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,G__22371,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,G__22371,self__.capture_QMARK_,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"capture?","capture?",-741966441),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,G__22371,self__.seen_events,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22376.call(null,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),expr__22377))){
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,G__22371,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__22371),null));
}
}
}
}
}
}
}
});

day8.re_frame.rule.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events","events",1792552201),self__.events],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),self__.dispatch_n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"halt?","halt?",-1110658247),self__.halt_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"capture?","capture?",-741966441),self__.capture_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),self__.seen_events],null))], null),self__.__extmap));
});

day8.re_frame.rule.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__22371){
var self__ = this;
var this__19464__auto____$1 = this;
return (new day8.re_frame.rule.Rule(self__.id,self__.when_fn,self__.events,self__.dispatch_n,self__.halt_QMARK_,self__.capture_QMARK_,self__.seen_events,G__22371,self__.__extmap,self__.__hash));
});

day8.re_frame.rule.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

day8.re_frame.rule.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"when-fn","when-fn",1582914556,null),new cljs.core.Symbol(null,"events","events",-861883568,null),new cljs.core.Symbol(null,"dispatch-n","dispatch-n",1136062291,null),new cljs.core.Symbol(null,"halt?","halt?",529873280,null),new cljs.core.Symbol(null,"capture?","capture?",898565086,null),new cljs.core.Symbol(null,"seen-events","seen-events",-1046787377,null)], null);
});

day8.re_frame.rule.Rule.cljs$lang$type = true;

day8.re_frame.rule.Rule.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"day8.re-frame.rule/Rule");
});

day8.re_frame.rule.Rule.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"day8.re-frame.rule/Rule");
});

day8.re_frame.rule.__GT_Rule = (function day8$re_frame$rule$__GT_Rule(id,when_fn,events,dispatch_n,halt_QMARK_,capture_QMARK_,seen_events){
return (new day8.re_frame.rule.Rule(id,when_fn,events,dispatch_n,halt_QMARK_,capture_QMARK_,seen_events,null,null,null));
});

day8.re_frame.rule.map__GT_Rule = (function day8$re_frame$rule$map__GT_Rule(G__22373){
return (new day8.re_frame.rule.Rule(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"halt?","halt?",-1110658247).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"capture?","capture?",-741966441).cljs$core$IFn$_invoke$arity$1(G__22373),new cljs.core.Keyword(null,"seen-events","seen-events",1607648392).cljs$core$IFn$_invoke$arity$1(G__22373),null,cljs.core.dissoc.call(null,G__22373,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),new cljs.core.Keyword(null,"capture?","capture?",-741966441),new cljs.core.Keyword(null,"seen-events","seen-events",1607648392)),null));
});

day8.re_frame.rule.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.rule.seen_all_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.rule.seen_all_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.rule.seen_all_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.rule.seen_any_QMARK_], null);
day8.re_frame.rule.when__GT_fn = (function day8$re_frame$rule$when__GT_fn(when_kw){
var temp__4655__auto__ = day8.re_frame.rule.map_when__GT_fn.call(null,when_kw);
if(cljs.core.truth_(temp__4655__auto__)){
var when_fn = temp__4655__auto__;
return when_fn;
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: got bad value for :when - ",when_kw);
}
});
day8.re_frame.rule.normalize_dispatch = (function day8$re_frame$rule$normalize_dispatch(dispatch,dispatch_n,rule){
if(cljs.core.truth_(dispatch_n)){
if(cljs.core.truth_(dispatch)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: rule can only specify one of :dispatch and :dispatch-n. Got both: ",rule);
} else {
return dispatch_n;
}
} else {
if(cljs.core.truth_(dispatch)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch], null);
} else {
return cljs.core.List.EMPTY;

}
}
});
day8.re_frame.rule.normalize_events = (function day8$re_frame$rule$normalize_events(event,events,rule){
if(cljs.core.truth_(events)){
if(cljs.core.truth_(event)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: rules can only specify one of :event and :events. Got both: ",rule);
} else {
return cljs.core.set.call(null,events);
}
} else {
if(cljs.core.truth_(event)){
return cljs.core.PersistentHashSet.fromArray([event], true);
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: must specify one of :event or :events. Got none: ",rule);

}
}
});
day8.re_frame.rule.compile = (function day8$re_frame$rule$compile(flow_id,index,p__22380){
var map__22383 = p__22380;
var map__22383__$1 = ((((!((map__22383 == null)))?((((map__22383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22383):map__22383);
var rule = map__22383__$1;
var id = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var event = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"event","event",301435442));
var events = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var halt_QMARK_ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
var capture_QMARK_ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"capture?","capture?",-741966441));
return day8.re_frame.rule.map__GT_Rule.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.name.call(null,flow_id),(cljs.core.truth_(id)?cljs.core.name.call(null,id):[cljs.core.str("rule-"),cljs.core.str((index + (1)))].join(''))),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__18843__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"capture?","capture?",-741966441),(function (){var or__18843__auto__ = capture_QMARK_;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),day8.re_frame.rule.when__GT_fn.call(null,when),new cljs.core.Keyword(null,"events","events",1792552201),day8.re_frame.rule.normalize_events.call(null,event,events,rule),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),day8.re_frame.rule.normalize_dispatch.call(null,dispatch,dispatch_n,rule),new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),cljs.core.PersistentVector.EMPTY], null));
});

//# sourceMappingURL=rule.js.map?rel=1478297176887