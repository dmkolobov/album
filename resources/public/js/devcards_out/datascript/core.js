// Compiled by ClojureScript 1.8.40 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__33840_SHARP_){
var and__18831__auto__ = pred.call(null,u,p1__33840_SHARP_);
if(cljs.core.truth_(and__18831__auto__)){
return fdb.pred.call(null,p1__33840_SHARP_);
} else {
return and__18831__auto__;
}
});})(fdb,u))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__33841_SHARP_){
return pred.call(null,db,p1__33841_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args33842 = [];
var len__19912__auto___33845 = arguments.length;
var i__19913__auto___33846 = (0);
while(true){
if((i__19913__auto___33846 < len__19912__auto___33845)){
args33842.push((arguments[i__19913__auto___33846]));

var G__33847 = (i__19913__auto___33846 + (1));
i__19913__auto___33846 = G__33847;
continue;
} else {
}
break;
}

var G__33844 = args33842.length;
switch (G__33844) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33842.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args33849 = [];
var len__19912__auto___33852 = arguments.length;
var i__19913__auto___33853 = (0);
while(true){
if((i__19913__auto___33853 < len__19912__auto___33852)){
args33849.push((arguments[i__19913__auto___33853]));

var G__33854 = (i__19913__auto___33853 + (1));
i__19913__auto___33853 = G__33854;
continue;
} else {
}
break;
}

var G__33851 = args33849.length;
switch (G__33851) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33849.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args33856 = [];
var len__19912__auto___33859 = arguments.length;
var i__19913__auto___33860 = (0);
while(true){
if((i__19913__auto___33860 < len__19912__auto___33859)){
args33856.push((arguments[i__19913__auto___33860]));

var G__33861 = (i__19913__auto___33860 + (1));
i__19913__auto___33860 = G__33861;
continue;
} else {
}
break;
}

var G__33858 = args33856.length;
switch (G__33858) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33856.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__18831__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__18831__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__18831__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args33867 = [];
var len__19912__auto___33870 = arguments.length;
var i__19913__auto___33871 = (0);
while(true){
if((i__19913__auto___33871 < len__19912__auto___33870)){
args33867.push((arguments[i__19913__auto___33871]));

var G__33872 = (i__19913__auto___33871 + (1));
i__19913__auto___33871 = G__33872;
continue;
} else {
}
break;
}

var G__33869 = args33867.length;
switch (G__33869) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33867.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args33874 = [];
var len__19912__auto___33877 = arguments.length;
var i__19913__auto___33878 = (0);
while(true){
if((i__19913__auto___33878 < len__19912__auto___33877)){
args33874.push((arguments[i__19913__auto___33878]));

var G__33879 = (i__19913__auto___33878 + (1));
i__19913__auto___33878 = G__33879;
continue;
} else {
}
break;
}

var G__33876 = args33874.length;
switch (G__33876) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33874.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args33881 = [];
var len__19912__auto___33890 = arguments.length;
var i__19913__auto___33891 = (0);
while(true){
if((i__19913__auto___33891 < len__19912__auto___33890)){
args33881.push((arguments[i__19913__auto___33891]));

var G__33892 = (i__19913__auto___33891 + (1));
i__19913__auto___33891 = G__33892;
continue;
} else {
}
break;
}

var G__33883 = args33881.length;
switch (G__33883) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33881.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__33884_33894 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__33885_33895 = null;
var count__33886_33896 = (0);
var i__33887_33897 = (0);
while(true){
if((i__33887_33897 < count__33886_33896)){
var vec__33888_33898 = cljs.core._nth.call(null,chunk__33885_33895,i__33887_33897);
var __33899 = cljs.core.nth.call(null,vec__33888_33898,(0),null);
var callback_33900 = cljs.core.nth.call(null,vec__33888_33898,(1),null);
callback_33900.call(null,report);

var G__33901 = seq__33884_33894;
var G__33902 = chunk__33885_33895;
var G__33903 = count__33886_33896;
var G__33904 = (i__33887_33897 + (1));
seq__33884_33894 = G__33901;
chunk__33885_33895 = G__33902;
count__33886_33896 = G__33903;
i__33887_33897 = G__33904;
continue;
} else {
var temp__4657__auto___33905 = cljs.core.seq.call(null,seq__33884_33894);
if(temp__4657__auto___33905){
var seq__33884_33906__$1 = temp__4657__auto___33905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33884_33906__$1)){
var c__19654__auto___33907 = cljs.core.chunk_first.call(null,seq__33884_33906__$1);
var G__33908 = cljs.core.chunk_rest.call(null,seq__33884_33906__$1);
var G__33909 = c__19654__auto___33907;
var G__33910 = cljs.core.count.call(null,c__19654__auto___33907);
var G__33911 = (0);
seq__33884_33894 = G__33908;
chunk__33885_33895 = G__33909;
count__33886_33896 = G__33910;
i__33887_33897 = G__33911;
continue;
} else {
var vec__33889_33912 = cljs.core.first.call(null,seq__33884_33906__$1);
var __33913 = cljs.core.nth.call(null,vec__33889_33912,(0),null);
var callback_33914 = cljs.core.nth.call(null,vec__33889_33912,(1),null);
callback_33914.call(null,report);

var G__33915 = cljs.core.next.call(null,seq__33884_33906__$1);
var G__33916 = null;
var G__33917 = (0);
var G__33918 = (0);
seq__33884_33894 = G__33915;
chunk__33885_33895 = G__33916;
count__33886_33896 = G__33917;
i__33887_33897 = G__33918;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args33920 = [];
var len__19912__auto___33929 = arguments.length;
var i__19913__auto___33930 = (0);
while(true){
if((i__19913__auto___33930 < len__19912__auto___33929)){
args33920.push((arguments[i__19913__auto___33930]));

var G__33931 = (i__19913__auto___33930 + (1));
i__19913__auto___33930 = G__33931;
continue;
} else {
}
break;
}

var G__33922 = args33920.length;
switch (G__33922) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33920.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__33919_SHARP_){
return cljs.core.assoc.call(null,p1__33919_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__33923_33933 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__33924_33934 = null;
var count__33925_33935 = (0);
var i__33926_33936 = (0);
while(true){
if((i__33926_33936 < count__33925_33935)){
var vec__33927_33937 = cljs.core._nth.call(null,chunk__33924_33934,i__33926_33936);
var __33938 = cljs.core.nth.call(null,vec__33927_33937,(0),null);
var callback_33939 = cljs.core.nth.call(null,vec__33927_33937,(1),null);
callback_33939.call(null,report);

var G__33940 = seq__33923_33933;
var G__33941 = chunk__33924_33934;
var G__33942 = count__33925_33935;
var G__33943 = (i__33926_33936 + (1));
seq__33923_33933 = G__33940;
chunk__33924_33934 = G__33941;
count__33925_33935 = G__33942;
i__33926_33936 = G__33943;
continue;
} else {
var temp__4657__auto___33944 = cljs.core.seq.call(null,seq__33923_33933);
if(temp__4657__auto___33944){
var seq__33923_33945__$1 = temp__4657__auto___33944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33923_33945__$1)){
var c__19654__auto___33946 = cljs.core.chunk_first.call(null,seq__33923_33945__$1);
var G__33947 = cljs.core.chunk_rest.call(null,seq__33923_33945__$1);
var G__33948 = c__19654__auto___33946;
var G__33949 = cljs.core.count.call(null,c__19654__auto___33946);
var G__33950 = (0);
seq__33923_33933 = G__33947;
chunk__33924_33934 = G__33948;
count__33925_33935 = G__33949;
i__33926_33936 = G__33950;
continue;
} else {
var vec__33928_33951 = cljs.core.first.call(null,seq__33923_33945__$1);
var __33952 = cljs.core.nth.call(null,vec__33928_33951,(0),null);
var callback_33953 = cljs.core.nth.call(null,vec__33928_33951,(1),null);
callback_33953.call(null,report);

var G__33954 = cljs.core.next.call(null,seq__33923_33945__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33923_33933 = G__33954;
chunk__33924_33934 = G__33955;
count__33925_33935 = G__33956;
i__33926_33936 = G__33957;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args33958 = [];
var len__19912__auto___33961 = arguments.length;
var i__19913__auto___33962 = (0);
while(true){
if((i__19913__auto___33962 < len__19912__auto___33961)){
args33958.push((arguments[i__19913__auto___33962]));

var G__33963 = (i__19913__auto___33962 + (1));
i__19913__auto___33962 = G__33963;
continue;
} else {
}
break;
}

var G__33960 = args33958.length;
switch (G__33960) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33958.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__33965_33971 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__33966_33972 = null;
var count__33967_33973 = (0);
var i__33968_33974 = (0);
while(true){
if((i__33968_33974 < count__33967_33973)){
var vec__33969_33975 = cljs.core._nth.call(null,chunk__33966_33972,i__33968_33974);
var tag_33976 = cljs.core.nth.call(null,vec__33969_33975,(0),null);
var cb_33977 = cljs.core.nth.call(null,vec__33969_33975,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_33976,cb_33977);

var G__33978 = seq__33965_33971;
var G__33979 = chunk__33966_33972;
var G__33980 = count__33967_33973;
var G__33981 = (i__33968_33974 + (1));
seq__33965_33971 = G__33978;
chunk__33966_33972 = G__33979;
count__33967_33973 = G__33980;
i__33968_33974 = G__33981;
continue;
} else {
var temp__4657__auto___33982 = cljs.core.seq.call(null,seq__33965_33971);
if(temp__4657__auto___33982){
var seq__33965_33983__$1 = temp__4657__auto___33982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33965_33983__$1)){
var c__19654__auto___33984 = cljs.core.chunk_first.call(null,seq__33965_33983__$1);
var G__33985 = cljs.core.chunk_rest.call(null,seq__33965_33983__$1);
var G__33986 = c__19654__auto___33984;
var G__33987 = cljs.core.count.call(null,c__19654__auto___33984);
var G__33988 = (0);
seq__33965_33971 = G__33985;
chunk__33966_33972 = G__33986;
count__33967_33973 = G__33987;
i__33968_33974 = G__33988;
continue;
} else {
var vec__33970_33989 = cljs.core.first.call(null,seq__33965_33983__$1);
var tag_33990 = cljs.core.nth.call(null,vec__33970_33989,(0),null);
var cb_33991 = cljs.core.nth.call(null,vec__33970_33989,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_33990,cb_33991);

var G__33992 = cljs.core.next.call(null,seq__33965_33983__$1);
var G__33993 = null;
var G__33994 = (0);
var G__33995 = (0);
seq__33965_33971 = G__33992;
chunk__33966_33972 = G__33993;
count__33967_33973 = G__33994;
i__33968_33974 = G__33995;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args33996 = [];
var len__19912__auto___33999 = arguments.length;
var i__19913__auto___34000 = (0);
while(true){
if((i__19913__auto___34000 < len__19912__auto___33999)){
args33996.push((arguments[i__19913__auto___34000]));

var G__34001 = (i__19913__auto___34000 + (1));
i__19913__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var G__33998 = args33996.length;
switch (G__33998) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33996.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args34003 = [];
var len__19912__auto___34009 = arguments.length;
var i__19913__auto___34010 = (0);
while(true){
if((i__19913__auto___34010 < len__19912__auto___34009)){
args34003.push((arguments[i__19913__auto___34010]));

var G__34011 = (i__19913__auto___34010 + (1));
i__19913__auto___34010 = G__34011;
continue;
} else {
}
break;
}

var G__34005 = args34003.length;
switch (G__34005) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34003.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core34006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core34006 = (function (conn,tx_data,tx_meta,res,meta34007){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta34007 = meta34007;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core34006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_34008,meta34007__$1){
var self__ = this;
var _34008__$1 = this;
return (new datascript.core.t_datascript$core34006(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta34007__$1));
});})(res))
;

datascript.core.t_datascript$core34006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_34008){
var self__ = this;
var _34008__$1 = this;
return self__.meta34007;
});})(res))
;

datascript.core.t_datascript$core34006.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core34006.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core34006.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core34006.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta34007","meta34007",-2039219646,null)], null);
});})(res))
;

datascript.core.t_datascript$core34006.cljs$lang$type = true;

datascript.core.t_datascript$core34006.cljs$lang$ctorStr = "datascript.core/t_datascript$core34006";

datascript.core.t_datascript$core34006.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"datascript.core/t_datascript$core34006");
});})(res))
;

datascript.core.__GT_t_datascript$core34006 = ((function (res){
return (function datascript$core$__GT_t_datascript$core34006(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta34007){
return (new datascript.core.t_datascript$core34006(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta34007));
});})(res))
;

}

return (new datascript.core.t_datascript$core34006(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core34016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core34016 = (function (future_call,f,res,realized,meta34017){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta34017 = meta34017;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core34016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_34018,meta34017__$1){
var self__ = this;
var _34018__$1 = this;
return (new datascript.core.t_datascript$core34016(self__.future_call,self__.f,self__.res,self__.realized,meta34017__$1));
});})(res,realized))
;

datascript.core.t_datascript$core34016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_34018){
var self__ = this;
var _34018__$1 = this;
return self__.meta34017;
});})(res,realized))
;

datascript.core.t_datascript$core34016.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core34016.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core34016.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core34016.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta34017","meta34017",-1303140142,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core34016.cljs$lang$type = true;

datascript.core.t_datascript$core34016.cljs$lang$ctorStr = "datascript.core/t_datascript$core34016";

datascript.core.t_datascript$core34016.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"datascript.core/t_datascript$core34016");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core34016 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core34016(future_call__$1,f__$1,res__$1,realized__$1,meta34017){
return (new datascript.core.t_datascript$core34016(future_call__$1,f__$1,res__$1,realized__$1,meta34017));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core34016(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args34019 = [];
var len__19912__auto___34022 = arguments.length;
var i__19913__auto___34023 = (0);
while(true){
if((i__19913__auto___34023 < len__19912__auto___34022)){
args34019.push((arguments[i__19913__auto___34023]));

var G__34024 = (i__19913__auto___34023 + (1));
i__19913__auto___34023 = G__34024;
continue;
} else {
}
break;
}

var G__34021 = args34019.length;
switch (G__34021) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34019.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args34026 = [];
var len__19912__auto___34029 = arguments.length;
var i__19913__auto___34030 = (0);
while(true){
if((i__19913__auto___34030 < len__19912__auto___34029)){
args34026.push((arguments[i__19913__auto___34030]));

var G__34031 = (i__19913__auto___34030 + (1));
i__19913__auto___34030 = G__34031;
continue;
} else {
}
break;
}

var G__34028 = args34026.length;
switch (G__34028) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34026.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map?rel=1478297201446