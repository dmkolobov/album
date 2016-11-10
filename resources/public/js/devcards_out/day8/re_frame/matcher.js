// Compiled by ClojureScript 1.8.40 {}
goog.provide('day8.re_frame.matcher');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
/**
 * Given a matcher and a flow rule, return a new matcher which
 * 	includes all of the events mentioned in the rule.
 */
day8.re_frame.matcher.add_rule = (function day8$re_frame$matcher$add_rule(matcher,p__27575){
var map__27578 = p__27575;
var map__27578__$1 = ((((!((map__27578 == null)))?((((map__27578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27578):map__27578);
var rule = map__27578__$1;
var id = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var events = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"events","events",1792552201));
return cljs.core.reduce.call(null,((function (map__27578,map__27578__$1,rule,id,events){
return (function (matcher__$1,event_v){
return cljs.core.update_in.call(null,matcher__$1,event_v,((function (map__27578,map__27578__$1,rule,id,events){
return (function (rule_set){
if(cljs.core.truth_(rule_set)){
return cljs.core.conj.call(null,rule_set,id);
} else {
return cljs.core.PersistentHashSet.fromArray([id], true);
}
});})(map__27578,map__27578__$1,rule,id,events))
);
});})(map__27578,map__27578__$1,rule,id,events))
,matcher,events);
});
day8.re_frame.matcher.add_rules = (function day8$re_frame$matcher$add_rules(matcher,rules){
return cljs.core.reduce.call(null,day8.re_frame.matcher.add_rule,matcher,rules);
});
day8.re_frame.matcher.removable_path_QMARK_ = (function day8$re_frame$matcher$removable_path_QMARK_(matcher,path){
var x = cljs.core.get_in.call(null,matcher,path);
return (cljs.core.set_QMARK_.call(null,x)) || ((cljs.core.map_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,x))));
});
day8.re_frame.matcher.event_dissoc_path = (function day8$re_frame$matcher$event_dissoc_path(matcher,event_v){
var path = cljs.core.PersistentVector.EMPTY;
var event_v__$1 = event_v;
while(true){
if(cljs.core.truth_((function (){var and__18831__auto__ = cljs.core.seq.call(null,event_v__$1);
if(and__18831__auto__){
return day8.re_frame.matcher.removable_path_QMARK_.call(null,matcher,event_v__$1);
} else {
return and__18831__auto__;
}
})())){
var G__27580 = event_v__$1;
var G__27581 = cljs.core.pop.call(null,event_v__$1);
path = G__27580;
event_v__$1 = G__27581;
continue;
} else {
return path;
}
break;
}
});
day8.re_frame.matcher.remove_event = (function day8$re_frame$matcher$remove_event(matcher,event_v){
var path = day8.re_frame.matcher.event_dissoc_path.call(null,matcher,event_v);
var path_count = cljs.core.count.call(null,path);
if(cljs.core._EQ_.call(null,(1),path_count)){
return cljs.core.dissoc.call(null,matcher,cljs.core.get.call(null,path,(0)));
} else {
return cljs.core.update_in.call(null,matcher,cljs.core.subvec.call(null,path,(0),(path_count - (1))),cljs.core.dissoc,cljs.core.get.call(null,path,(path_count - (1))));
}
});
/**
 * Given a matcher and a flow rule, return a new matcher without
 * 	all of the events mentioned in the rule.
 */
day8.re_frame.matcher.remove_rule = (function day8$re_frame$matcher$remove_rule(matcher,p__27582){
var map__27585 = p__27582;
var map__27585__$1 = ((((!((map__27585 == null)))?((((map__27585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27585):map__27585);
var rule = map__27585__$1;
var id = cljs.core.get.call(null,map__27585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var events = cljs.core.get.call(null,map__27585__$1,new cljs.core.Keyword(null,"events","events",1792552201));
return cljs.core.reduce.call(null,((function (map__27585,map__27585__$1,rule,id,events){
return (function (matcher__$1,event_v){
var temp__4655__auto__ = cljs.core.get_in.call(null,matcher__$1,event_v);
if(cljs.core.truth_(temp__4655__auto__)){
var rule_set = temp__4655__auto__;
if(((1) > cljs.core.count.call(null,rule_set))){
return cljs.core.assoc_in.call(null,matcher__$1,event_v,cljs.core.disj.call(null,rule_set,id));
} else {
return day8.re_frame.matcher.remove_event.call(null,matcher__$1,event_v);
}
} else {
return matcher__$1;
}
});})(map__27585,map__27585__$1,rule,id,events))
,matcher,events);
});
day8.re_frame.matcher.remove_rules = (function day8$re_frame$matcher$remove_rules(matcher,rules){
return cljs.core.reduce.call(null,day8.re_frame.matcher.remove_rule,matcher,rules);
});
day8.re_frame.matcher.matching_rules = (function day8$re_frame$matcher$matching_rules(matcher,event_v){
while(true){
if(cljs.core.seq.call(null,event_v)){
var temp__4657__auto__ = cljs.core.get.call(null,matcher,cljs.core.first.call(null,event_v));
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
var G__27587 = x;
var G__27588 = cljs.core.rest.call(null,event_v);
matcher = G__27587;
event_v = G__27588;
continue;
}
} else {
return null;
}
} else {
return null;
}
break;
}
});

//# sourceMappingURL=matcher.js.map?rel=1478297185649