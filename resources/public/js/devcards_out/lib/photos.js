// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.photos');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('datascript.core');
goog.require('data.core');
goog.require('data.photos');
goog.require('lib.util');
if(typeof lib.photos.fs !== 'undefined'){
} else {
lib.photos.fs = require("fs-extra");
}
if(typeof lib.photos.file_path !== 'undefined'){
} else {
lib.photos.file_path = require("path");
}
if(typeof lib.photos.js_uuid !== 'undefined'){
} else {
lib.photos.js_uuid = require("uuid");
}
lib.photos.random_path = (function lib$photos$random_path(){
return lib.photos.file_path.join(process.env.HOME,[cljs.core.str(lib.photos.js_uuid.v4()),cljs.core.str(".jpg")].join(''));
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
lib.photos.PhotoDescriptor = (function (id,src,dst,__meta,__extmap,__hash){
this.id = id;
this.src = src;
this.dst = dst;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
lib.photos.PhotoDescriptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

lib.photos.PhotoDescriptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k25409,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__25411 = (((k25409 instanceof cljs.core.Keyword))?k25409.fqn:null);
switch (G__25411) {
case "id":
return self__.id;

break;
case "src":
return self__.src;

break;
case "dst":
return self__.dst;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25409,else__19468__auto__);

}
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#lib.photos.PhotoDescriptor{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051),self__.src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dst","dst",844682948),self__.dst],null))], null),self__.__extmap));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IIterable$ = true;

lib.photos.PhotoDescriptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25408){
var self__ = this;
var G__25408__$1 = this;
return (new cljs.core.RecordIter((0),G__25408__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dst","dst",844682948)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

lib.photos.PhotoDescriptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new lib.photos.PhotoDescriptor(self__.id,self__.src,self__.dst,self__.__meta,self__.__extmap,self__.__hash));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

lib.photos.PhotoDescriptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

lib.photos.PhotoDescriptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dst","dst",844682948),null,new cljs.core.Keyword(null,"src","src",-1651076051),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new lib.photos.PhotoDescriptor(self__.id,self__.src,self__.dst,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__25408){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__25412 = cljs.core.keyword_identical_QMARK_;
var expr__25413 = k__19473__auto__;
if(cljs.core.truth_(pred__25412.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25413))){
return (new lib.photos.PhotoDescriptor(G__25408,self__.src,self__.dst,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25412.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),expr__25413))){
return (new lib.photos.PhotoDescriptor(self__.id,G__25408,self__.dst,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25412.call(null,new cljs.core.Keyword(null,"dst","dst",844682948),expr__25413))){
return (new lib.photos.PhotoDescriptor(self__.id,self__.src,G__25408,self__.__meta,self__.__extmap,null));
} else {
return (new lib.photos.PhotoDescriptor(self__.id,self__.src,self__.dst,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__25408),null));
}
}
}
});

lib.photos.PhotoDescriptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051),self__.src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dst","dst",844682948),self__.dst],null))], null),self__.__extmap));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__25408){
var self__ = this;
var this__19464__auto____$1 = this;
return (new lib.photos.PhotoDescriptor(self__.id,self__.src,self__.dst,G__25408,self__.__extmap,self__.__hash));
});

lib.photos.PhotoDescriptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

lib.photos.PhotoDescriptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"dst","dst",-1809752821,null)], null);
});

lib.photos.PhotoDescriptor.cljs$lang$type = true;

lib.photos.PhotoDescriptor.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lib.photos/PhotoDescriptor");
});

lib.photos.PhotoDescriptor.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"lib.photos/PhotoDescriptor");
});

lib.photos.__GT_PhotoDescriptor = (function lib$photos$__GT_PhotoDescriptor(id,src,dst){
return (new lib.photos.PhotoDescriptor(id,src,dst,null,null,null));
});

lib.photos.map__GT_PhotoDescriptor = (function lib$photos$map__GT_PhotoDescriptor(G__25410){
return (new lib.photos.PhotoDescriptor(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25410),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(G__25410),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(G__25410),null,cljs.core.dissoc.call(null,G__25410,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dst","dst",844682948)),null));
});

lib.photos.pd__GT_read_event = (function lib$photos$pd__GT_read_event(p__25416){
var map__25419 = p__25416;
var map__25419__$1 = ((((!((map__25419 == null)))?((((map__25419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25419):map__25419);
var id = cljs.core.get.call(null,map__25419__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var src = cljs.core.get.call(null,map__25419__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.images","read-data","lib.images/read-data",-278985771),id,src], null);
});
lib.photos.pd__GT_copy_event = (function lib$photos$pd__GT_copy_event(p__25421){
var map__25424 = p__25421;
var map__25424__$1 = ((((!((map__25424 == null)))?((((map__25424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25424):map__25424);
var src = cljs.core.get.call(null,map__25424__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var dst = cljs.core.get.call(null,map__25424__$1,new cljs.core.Keyword(null,"dst","dst",844682948));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.photos","copy-and-preload","lib.photos/copy-and-preload",-1111204822),src,dst], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.photos","copy-and-preload","lib.photos/copy-and-preload",-1111204822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.async_action,re_frame.core.trim_v], null),(function (p__25426,p__25427){
var map__25428 = p__25426;
var map__25428__$1 = ((((!((map__25428 == null)))?((((map__25428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25428):map__25428);
var on_success = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__25429 = p__25427;
var src_path = cljs.core.nth.call(null,vec__25429,(0),null);
var dest_path = cljs.core.nth.call(null,vec__25429,(1),null);
var copy_event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","copy","fs/copy",-1077613006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src-path","src-path",-1449489977),src_path,new cljs.core.Keyword(null,"dest-path","dest-path",636224831),dest_path], null)], null);
var success_preload = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.images","mark-loaded","lib.images/mark-loaded",-271242815),dest_path], null);
var preload = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("img","preload","img/preload",1646986579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),dest_path,new cljs.core.Keyword(null,"on-success","on-success",1786904109),success_preload], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),copy_event,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"just","just",466318146),lib.util.success_ev.call(null,copy_event),new cljs.core.Keyword(null,"=>","=>",1841166128),preload], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"just","just",466318146),success_preload,new cljs.core.Keyword(null,"=>","=>",1841166128),on_success,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.error_ev.call(null,copy_event)], null),new cljs.core.Keyword(null,"=>","=>",1841166128),on_error,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.photos","commit-photos","lib.photos/commit-photos",-767305746),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__25431,pds,image_data){
var map__25432 = p__25431;
var map__25432__$1 = ((((!((map__25432 == null)))?((((map__25432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25432):map__25432);
var db = cljs.core.get.call(null,map__25432__$1,new cljs.core.Keyword(null,"db","db",993250759));
var paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dst","dst",844682948)),pds));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data.core","transact","data.core/transact",132220821)], null),cljs.core.mapcat.call(null,data.photos.build_photo,cljs.core.map.call(null,((function (paths,map__25432,map__25432__$1,db){
return (function (p__25434){
var map__25435 = p__25434;
var map__25435__$1 = ((((!((map__25435 == null)))?((((map__25435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25435):map__25435);
var data__$1 = map__25435__$1;
var id = cljs.core.get.call(null,map__25435__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,data__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get.call(null,paths,id));
});})(paths,map__25432,map__25432__$1,db))
,image_data)))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.photos","import","lib.photos/import",2120201333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.async_action,re_frame.core.trim_v], null),(function (p__25439,p__25440){
var map__25441 = p__25439;
var map__25441__$1 = ((((!((map__25441 == null)))?((((map__25441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25441):map__25441);
var on_success = cljs.core.get.call(null,map__25441__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25441__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__25442 = p__25440;
var paths = cljs.core.nth.call(null,vec__25442,(0),null);
var pds = cljs.core.map_indexed.call(null,((function (map__25441,map__25441__$1,on_success,on_error,vec__25442,paths){
return (function (p1__25437_SHARP_,p2__25438_SHARP_){
return (new lib.photos.PhotoDescriptor(p1__25437_SHARP_,p2__25438_SHARP_,lib.photos.random_path.call(null),null,null,null));
});})(map__25441,map__25441__$1,on_success,on_error,vec__25442,paths))
,paths);
var read_events = cljs.core.map.call(null,lib.photos.pd__GT_read_event,pds);
var copy_events = cljs.core.map.call(null,lib.photos.pd__GT_copy_event,pds);
var all_events = cljs.core.concat.call(null,read_events,copy_events);
var commit = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-photos","commit-photos",-1129745416),pds], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatches","first-dispatches",1387434487),all_events,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.mapv.call(null,lib.util.success_ev,read_events),new cljs.core.Keyword(null,"=>","=>",1841166128),commit,new cljs.core.Keyword(null,"capture","capture",-677031143),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.mapv.call(null,lib.util.success_ev,all_events),new cljs.core.Keyword(null,"=>","=>",1841166128),on_success,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.mapv.call(null,lib.util.error_ev,all_events),new cljs.core.Keyword(null,"=>","=>",1841166128),on_error,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"start-import","start-import",-1731366764),cljs.core.constantly.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("main-thread","open-files","main-thread/open-files",1383449517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.photos","import","lib.photos/import",2120201333)], null)], null)], null)));
lib.photos.date__GT_day = (function lib$photos$date__GT_day(date){
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
return (new Date(year,month,day));
});
lib.photos.collect_dated_photos = (function lib$photos$collect_dated_photos(groups,p__25444){
var vec__25448 = p__25444;
var k = cljs.core.nth.call(null,vec__25448,(0),null);
var results = cljs.core.nth.call(null,vec__25448,(1),null);
return cljs.core.assoc.call(null,groups,k,cljs.core.reduce.call(null,((function (vec__25448,k,results){
return (function (items,p__25449){
var vec__25450 = p__25449;
var _ = cljs.core.nth.call(null,vec__25450,(0),null);
var id = cljs.core.nth.call(null,vec__25450,(1),null);
var w = cljs.core.nth.call(null,vec__25450,(2),null);
var h = cljs.core.nth.call(null,vec__25450,(3),null);
return cljs.core.conj.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(w / h)], null));
});})(vec__25448,k,results))
,cljs.core.PersistentVector.EMPTY,results));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.photos","by-date","lib.photos/by-date",298395986),(function (_,___$1){
return data.core.query_db.call(null,data.photos.grouped_query);
}),(function (datums,_){
return cljs.core.reduce.call(null,lib.photos.collect_dated_photos,cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.comp.call(null,lib.photos.date__GT_day,cljs.core.first),cljs.core.sort_by.call(null,cljs.core.first,datums)));
}));

//# sourceMappingURL=photos.js.map?rel=1478388957606