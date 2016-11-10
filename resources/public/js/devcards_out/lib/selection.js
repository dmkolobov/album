// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.selection');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.selection","toggle-id","lib.selection/toggle-id",1540530598),(function (db,p__25542){
var vec__25543 = p__25542;
var _ = cljs.core.nth.call(null,vec__25543,(0),null);
var path = cljs.core.nth.call(null,vec__25543,(1),null);
var s = cljs.core.get.call(null,db,new cljs.core.Keyword("selection","id-set","selection/id-set",-594856761),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("selection","id-set","selection/id-set",-594856761),((cljs.core.contains_QMARK_.call(null,s,path))?cljs.core.disj.call(null,s,path):cljs.core.conj.call(null,s,path)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.selection","include-ids","lib.selection/include-ids",-1597492734),(function (db,p__25544){
var vec__25545 = p__25544;
var _ = cljs.core.nth.call(null,vec__25545,(0),null);
var ids = cljs.core.nth.call(null,vec__25545,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("selection","id-set","selection/id-set",-594856761),((function (vec__25545,_,ids){
return (function (id_set){
if(cljs.core.truth_(id_set)){
return cljs.core.into.call(null,id_set,ids);
} else {
return cljs.core.set.call(null,ids);
}
});})(vec__25545,_,ids))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.selection","exclude-ids","lib.selection/exclude-ids",-891890337),(function (db,p__25546){
var vec__25547 = p__25546;
var _ = cljs.core.nth.call(null,vec__25547,(0),null);
var ids = cljs.core.nth.call(null,vec__25547,(1),null);
return cljs.core.apply.call(null,cljs.core.update,db,new cljs.core.Keyword("selection","id-set","selection/id-set",-594856761),cljs.core.disj,ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.selection","discard","lib.selection/discard",-825367786),(function (db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword("selection","id-set","selection/id-set",-594856761));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.selection","contains?","lib.selection/contains?",-165669634),(function (db,p__25548){
var vec__25549 = p__25548;
var _ = cljs.core.nth.call(null,vec__25549,(0),null);
var id = cljs.core.nth.call(null,vec__25549,(1),null);
return cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword("lib.selection","state","lib.selection/state",-857620686)),id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.selection","contains-all?","lib.selection/contains-all?",1286458760),(function (db,p__25550){
var vec__25551 = p__25550;
var _ = cljs.core.nth.call(null,vec__25551,(0),null);
var ids = cljs.core.nth.call(null,vec__25551,(1),null);
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,ids),cljs.core.get.call(null,db,new cljs.core.Keyword("lib.selection","state","lib.selection/state",-857620686),cljs.core.PersistentHashSet.EMPTY));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.selection","count","lib.selection/count",-580268840),(function (db){
return cljs.core.count.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword("lib.selection","state","lib.selection/state",-857620686)));
}));

//# sourceMappingURL=selection.js.map?rel=1478388958155