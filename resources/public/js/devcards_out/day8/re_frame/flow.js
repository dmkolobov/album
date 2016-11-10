// Compiled by ClojureScript 1.8.40 {}
goog.provide('day8.re_frame.flow');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.rule');
goog.require('day8.re_frame.matcher');
goog.require('clojure.set');

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
day8.re_frame.flow.MachineState = (function (flows,rules,matcher,fired_rules,__meta,__extmap,__hash){
this.flows = flows;
this.rules = rules;
this.matcher = matcher;
this.fired_rules = fired_rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
day8.re_frame.flow.MachineState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

day8.re_frame.flow.MachineState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k27592,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__27594 = (((k27592 instanceof cljs.core.Keyword))?k27592.fqn:null);
switch (G__27594) {
case "flows":
return self__.flows;

break;
case "rules":
return self__.rules;

break;
case "matcher":
return self__.matcher;

break;
case "fired-rules":
return self__.fired_rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27592,else__19468__auto__);

}
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#day8.re-frame.flow.MachineState{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flows","flows",-1369576628),self__.flows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),self__.fired_rules],null))], null),self__.__extmap));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IIterable$ = true;

day8.re_frame.flow.MachineState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27591){
var self__ = this;
var G__27591__$1 = this;
return (new cljs.core.RecordIter((0),G__27591__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flows","flows",-1369576628),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

day8.re_frame.flow.MachineState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,self__.matcher,self__.fired_rules,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

day8.re_frame.flow.MachineState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

day8.re_frame.flow.MachineState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flows","flows",-1369576628),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,self__.matcher,self__.fired_rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__27591){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__27595 = cljs.core.keyword_identical_QMARK_;
var expr__27596 = k__19473__auto__;
if(cljs.core.truth_(pred__27595.call(null,new cljs.core.Keyword(null,"flows","flows",-1369576628),expr__27596))){
return (new day8.re_frame.flow.MachineState(G__27591,self__.rules,self__.matcher,self__.fired_rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27595.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__27596))){
return (new day8.re_frame.flow.MachineState(self__.flows,G__27591,self__.matcher,self__.fired_rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27595.call(null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),expr__27596))){
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,G__27591,self__.fired_rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27595.call(null,new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),expr__27596))){
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,self__.matcher,G__27591,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,self__.matcher,self__.fired_rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__27591),null));
}
}
}
}
});

day8.re_frame.flow.MachineState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flows","flows",-1369576628),self__.flows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),self__.fired_rules],null))], null),self__.__extmap));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__27591){
var self__ = this;
var this__19464__auto____$1 = this;
return (new day8.re_frame.flow.MachineState(self__.flows,self__.rules,self__.matcher,self__.fired_rules,G__27591,self__.__extmap,self__.__hash));
});

day8.re_frame.flow.MachineState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

day8.re_frame.flow.MachineState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flows","flows",270954899,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"fired-rules","fired-rules",-2123233771,null)], null);
});

day8.re_frame.flow.MachineState.cljs$lang$type = true;

day8.re_frame.flow.MachineState.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"day8.re-frame.flow/MachineState");
});

day8.re_frame.flow.MachineState.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"day8.re-frame.flow/MachineState");
});

day8.re_frame.flow.__GT_MachineState = (function day8$re_frame$flow$__GT_MachineState(flows,rules,matcher,fired_rules){
return (new day8.re_frame.flow.MachineState(flows,rules,matcher,fired_rules,null,null,null));
});

day8.re_frame.flow.map__GT_MachineState = (function day8$re_frame$flow$map__GT_MachineState(G__27593){
return (new day8.re_frame.flow.MachineState(new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(G__27593),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__27593),new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(G__27593),new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998).cljs$core$IFn$_invoke$arity$1(G__27593),null,cljs.core.dissoc.call(null,G__27593,new cljs.core.Keyword(null,"flows","flows",-1369576628),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998)),null));
});

day8.re_frame.flow.fresh_state = (new day8.re_frame.flow.MachineState(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null));
day8.re_frame.flow.add_rules = (function day8$re_frame$flow$add_rules(rules,new_rules){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (rules__$1,p__27602){
var map__27603 = p__27602;
var map__27603__$1 = ((((!((map__27603 == null)))?((((map__27603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27603):map__27603);
var rule = map__27603__$1;
var id = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_BANG_.call(null,rules__$1,id,rule);
}),cljs.core.transient$.call(null,rules),new_rules));
});
day8.re_frame.flow.remove_rules = (function day8$re_frame$flow$remove_rules(rules,removed_rules){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (rules__$1,p__27608){
var map__27609 = p__27608;
var map__27609__$1 = ((((!((map__27609 == null)))?((((map__27609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27609):map__27609);
var id = cljs.core.get.call(null,map__27609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.dissoc_BANG_.call(null,rules__$1,id);
}),cljs.core.transient$.call(null,rules),removed_rules));
});
day8.re_frame.flow.dep_xform = cljs.core.comp.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"events","events",1792552201)),cljs.core.map.call(null,cljs.core.first));
/**
 * Incorporate the rules of the given flow into the machine state.
 */
day8.re_frame.flow.install = (function day8$re_frame$flow$install(p__27611,p__27612){
var map__27617 = p__27611;
var map__27617__$1 = ((((!((map__27617 == null)))?((((map__27617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27617):map__27617);
var time_machine = map__27617__$1;
var matcher = cljs.core.get.call(null,map__27617__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
var rules = cljs.core.get.call(null,map__27617__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var flows = cljs.core.get.call(null,map__27617__$1,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var map__27618 = p__27612;
var map__27618__$1 = ((((!((map__27618 == null)))?((((map__27618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27618):map__27618);
var flow = map__27618__$1;
var id = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var new_rules = cljs.core.map_indexed.call(null,((function (map__27617,map__27617__$1,time_machine,matcher,rules,flows,map__27618,map__27618__$1,flow,id){
return (function (idx,spec){
return day8.re_frame.rule.compile.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow),idx,spec);
});})(map__27617,map__27617__$1,time_machine,matcher,rules,flows,map__27618,map__27618__$1,flow,id))
,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(flow)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,time_machine,new cljs.core.Keyword(null,"rules","rules",1198912366),day8.re_frame.flow.add_rules.call(null,rules,new_rules),new cljs.core.Keyword(null,"matcher","matcher",-452768995),day8.re_frame.matcher.add_rules.call(null,matcher,new_rules),new cljs.core.Keyword(null,"flows","flows",-1369576628),cljs.core.assoc.call(null,flows,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow),new_rules)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,day8.re_frame.flow.dep_xform,new_rules)], null);
});
/**
 * Remove all traces of the given flow from the machine state.
 */
day8.re_frame.flow.uninstall = (function day8$re_frame$flow$uninstall(p__27621,flow_id){
var map__27624 = p__27621;
var map__27624__$1 = ((((!((map__27624 == null)))?((((map__27624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27624):map__27624);
var time_machine = map__27624__$1;
var fired_rules = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998));
var matcher = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
var rules = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var flows = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var flow_rules = cljs.core.get.call(null,flows,flow_id);
return cljs.core.assoc.call(null,time_machine,new cljs.core.Keyword(null,"rules","rules",1198912366),day8.re_frame.flow.remove_rules.call(null,rules,flow_rules),new cljs.core.Keyword(null,"matcher","matcher",-452768995),day8.re_frame.matcher.remove_rules.call(null,matcher,flow_rules),new cljs.core.Keyword(null,"flows","flows",-1369576628),cljs.core.dissoc.call(null,flows,flow_id),new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),clojure.set.difference.call(null,fired_rules,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),flow_rules))));
});
/**
 * Given a machine state and an event vector, return a tuple of the machine
 * 	state after seeing the event, and the seq of events to dispatch resulting
 * 	from the rules fired.
 */
day8.re_frame.flow.transition = (function day8$re_frame$flow$transition(p__27628,event_v){
var map__27631 = p__27628;
var map__27631__$1 = ((((!((map__27631 == null)))?((((map__27631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27631):map__27631);
var time_machine = map__27631__$1;
var matcher = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
var fired_rules = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998));
var rules = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var changed_rules = cljs.core.map.call(null,((function (map__27631,map__27631__$1,time_machine,matcher,fired_rules,rules){
return (function (p1__27627_SHARP_){
return day8.re_frame.rule.record.call(null,p1__27627_SHARP_,event_v);
});})(map__27631,map__27631__$1,time_machine,matcher,fired_rules,rules))
,cljs.core.map.call(null,((function (map__27631,map__27631__$1,time_machine,matcher,fired_rules,rules){
return (function (p1__27626_SHARP_){
return cljs.core.get.call(null,rules,p1__27626_SHARP_);
});})(map__27631,map__27631__$1,time_machine,matcher,fired_rules,rules))
,clojure.set.difference.call(null,day8.re_frame.matcher.matching_rules.call(null,matcher,event_v),fired_rules)));
var ready_rules = cljs.core.filter.call(null,day8.re_frame.rule.ready_QMARK_,changed_rules);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,cljs.core.update.call(null,time_machine,new cljs.core.Keyword(null,"rules","rules",1198912366),day8.re_frame.flow.add_rules,changed_rules),new cljs.core.Keyword(null,"fired-rules","fired-rules",531201998),cljs.core.into,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules)),cljs.core.mapcat.call(null,day8.re_frame.rule.fire,ready_rules)], null);
});

//# sourceMappingURL=flow.js.map?rel=1478297185806