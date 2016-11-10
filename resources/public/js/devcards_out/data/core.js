// Compiled by ClojureScript 1.8.40 {}
goog.provide('data.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.ratom');
goog.require('datascript.core');
data.core.get_db = (function data$core$get_db(db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("data.core","db","data.core/db",307683750));
});
data.core.set_db = (function data$core$set_db(db,v){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("data.core","db","data.core/db",307683750),v);
});
/**
 * Applies the stored transaction datato the datascript database at
 *   ::db and stores the :db-after value of the report.
 */
data.core.transact = (function data$core$transact(db,tx_data){
var tx_report = datascript.core.with$.call(null,data.core.get_db.call(null,db),tx_data);
return data.core.set_db.call(null,db,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("data.core","transact","data.core/transact",132220821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),data.core.transact);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("data.core","db","data.core/db",307683750),data.core.get_db);
data.core.query_db = (function data$core$query_db(query){
var db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data.core","db","data.core/db",307683750)], null));
return reagent.ratom.make_reaction.call(null,((function (db){
return (function (){
return datascript.core.q.call(null,query,cljs.core.deref.call(null,db));
});})(db))
);
});

//# sourceMappingURL=core.js.map?rel=1478388955889