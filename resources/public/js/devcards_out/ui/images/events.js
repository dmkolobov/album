// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.images.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.async_util');
goog.require('layout.data');
if(typeof ui.images.events.file_path !== 'undefined'){
} else {
ui.images.events.file_path = require("path");
}

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
ui.images.events.ImageAsset = (function (filesize,taken_at,last_modified,size,aspect,__meta,__extmap,__hash){
this.filesize = filesize;
this.taken_at = taken_at;
this.last_modified = last_modified;
this.size = size;
this.aspect = aspect;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ui.images.events.ImageAsset.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

ui.images.events.ImageAsset.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k22847,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__22849 = (((k22847 instanceof cljs.core.Keyword))?k22847.fqn:null);
switch (G__22849) {
case "filesize":
return self__.filesize;

break;
case "taken-at":
return self__.taken_at;

break;
case "last-modified":
return self__.last_modified;

break;
case "size":
return self__.size;

break;
case "aspect":
return self__.aspect;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22847,else__19468__auto__);

}
});

ui.images.events.ImageAsset.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#ui.images.events.ImageAsset{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"filesize","filesize",-784040361),self__.filesize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),self__.taken_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),self__.last_modified],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aspect","aspect",-839905246),self__.aspect],null))], null),self__.__extmap));
});

ui.images.events.ImageAsset.prototype.cljs$core$IIterable$ = true;

ui.images.events.ImageAsset.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22846){
var self__ = this;
var G__22846__$1 = this;
return (new cljs.core.RecordIter((0),G__22846__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filesize","filesize",-784040361),new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"aspect","aspect",-839905246)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ui.images.events.ImageAsset.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

ui.images.events.ImageAsset.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,self__.size,self__.aspect,self__.__meta,self__.__extmap,self__.__hash));
});

ui.images.events.ImageAsset.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ui.images.events.ImageAsset.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
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

ui.images.events.ImageAsset.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
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

ui.images.events.ImageAsset.prototype.layout$data$IWillLayout$ = true;

ui.images.events.ImageAsset.prototype.layout$data$IWillLayout$aspect$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ui.images.events.ImageAsset.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"aspect","aspect",-839905246),null,new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),null,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"filesize","filesize",-784040361),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,self__.size,self__.aspect,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

ui.images.events.ImageAsset.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__22846){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__22850 = cljs.core.keyword_identical_QMARK_;
var expr__22851 = k__19473__auto__;
if(cljs.core.truth_(pred__22850.call(null,new cljs.core.Keyword(null,"filesize","filesize",-784040361),expr__22851))){
return (new ui.images.events.ImageAsset(G__22846,self__.taken_at,self__.last_modified,self__.size,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22850.call(null,new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),expr__22851))){
return (new ui.images.events.ImageAsset(self__.filesize,G__22846,self__.last_modified,self__.size,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22850.call(null,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),expr__22851))){
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,G__22846,self__.size,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22850.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__22851))){
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,G__22846,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22850.call(null,new cljs.core.Keyword(null,"aspect","aspect",-839905246),expr__22851))){
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,self__.size,G__22846,self__.__meta,self__.__extmap,null));
} else {
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,self__.size,self__.aspect,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__22846),null));
}
}
}
}
}
});

ui.images.events.ImageAsset.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"filesize","filesize",-784040361),self__.filesize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),self__.taken_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),self__.last_modified],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aspect","aspect",-839905246),self__.aspect],null))], null),self__.__extmap));
});

ui.images.events.ImageAsset.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__22846){
var self__ = this;
var this__19464__auto____$1 = this;
return (new ui.images.events.ImageAsset(self__.filesize,self__.taken_at,self__.last_modified,self__.size,self__.aspect,G__22846,self__.__extmap,self__.__hash));
});

ui.images.events.ImageAsset.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

ui.images.events.ImageAsset.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filesize","filesize",856491166,null),new cljs.core.Symbol(null,"taken-at","taken-at",1522514891,null),new cljs.core.Symbol(null,"last-modified","last-modified",-1061023978,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"aspect","aspect",800626281,null)], null);
});

ui.images.events.ImageAsset.cljs$lang$type = true;

ui.images.events.ImageAsset.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ui.images.events/ImageAsset");
});

ui.images.events.ImageAsset.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"ui.images.events/ImageAsset");
});

ui.images.events.__GT_ImageAsset = (function ui$images$events$__GT_ImageAsset(filesize,taken_at,last_modified,size,aspect){
return (new ui.images.events.ImageAsset(filesize,taken_at,last_modified,size,aspect,null,null,null));
});

ui.images.events.map__GT_ImageAsset = (function ui$images$events$map__GT_ImageAsset(G__22848){
return (new ui.images.events.ImageAsset(new cljs.core.Keyword(null,"filesize","filesize",-784040361).cljs$core$IFn$_invoke$arity$1(G__22848),new cljs.core.Keyword(null,"taken-at","taken-at",-118016636).cljs$core$IFn$_invoke$arity$1(G__22848),new cljs.core.Keyword(null,"last-modified","last-modified",1593411791).cljs$core$IFn$_invoke$arity$1(G__22848),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__22848),new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(G__22848),null,cljs.core.dissoc.call(null,G__22848,new cljs.core.Keyword(null,"filesize","filesize",-784040361),new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"aspect","aspect",-839905246)),null));
});

ui.images.events.image_intercept = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.async_util.async_action,re_frame.core.trim_v], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("image","store-info","image/store-info",-1691678582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__22854){
var vec__22855 = p__22854;
var path = cljs.core.nth.call(null,vec__22855,(0),null);
var vec__22856 = cljs.core.nth.call(null,vec__22855,(1),null);
var _ = cljs.core.nth.call(null,vec__22856,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22856,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22856,(2),null);
var info = cljs.core.nth.call(null,vec__22856,(3),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-info","image-info",-122073623),path], null),((function (vec__22855,path,vec__22856,_,___$1,___$2,info){
return (function (image){
if(cljs.core.truth_(image)){
return cljs.core.into.call(null,image,info);
} else {
return ui.images.events.map__GT_ImageAsset.call(null,info);
}
});})(vec__22855,path,vec__22856,_,___$1,___$2,info))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("image","mark-loaded","image/mark-loaded",668122527),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__22857){
var vec__22858 = p__22857;
var path = cljs.core.nth.call(null,vec__22858,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preloaded?","preloaded?",-1491476999),path], null),true);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("image","read-info","image/read-info",666543828),ui.images.events.image_intercept,(function (p__22859,p__22860){
var map__22861 = p__22859;
var map__22861__$1 = ((((!((map__22861 == null)))?((((map__22861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22861):map__22861);
var on_success = cljs.core.get.call(null,map__22861__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__22861__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__22862 = p__22860;
var path = cljs.core.nth.call(null,vec__22862,(0),null);
var final_path = cljs.core.nth.call(null,vec__22862,(1),null);
var fs_query = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","stat","fs/stat",-1370594505),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
var gm_query = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("img","info","img/info",-317165335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
var store_qr = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","store-info","image/store-info",-1691678582),(cljs.core.truth_(final_path)?final_path:path)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatches","first-dispatches",1387434487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gm_query,fs_query], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),fs_query], null),new cljs.core.Keyword(null,"capture?","capture?",-741966441),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),store_qr], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),gm_query], null),new cljs.core.Keyword(null,"capture?","capture?",-741966441),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),store_qr], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),fs_query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),gm_query], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_success,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),fs_query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),gm_query], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"capture?","capture?",-741966441),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_error], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("image","import","image/import",-1566661944),ui.images.events.image_intercept,(function (p__22864,p__22865){
var map__22866 = p__22864;
var map__22866__$1 = ((((!((map__22866 == null)))?((((map__22866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22866):map__22866);
var on_success = cljs.core.get.call(null,map__22866__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__22866__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__22867 = p__22865;
var src_path = cljs.core.nth.call(null,vec__22867,(0),null);
var dest_path = cljs.core.nth.call(null,vec__22867,(1),null);
var read_event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","read-info","image/read-info",666543828),src_path,dest_path], null);
var copy_event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","copy","fs/copy",-1077613006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src-path","src-path",-1449489977),src_path,new cljs.core.Keyword(null,"dest-path","dest-path",636224831),dest_path], null)], null);
var preload_event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("img","preload","img/preload",1646986579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),dest_path], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),read_event,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),read_event], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),copy_event], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),copy_event], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),preload_event], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","success","async/success",1949169942),preload_event], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","mark-loaded","image/mark-loaded",668122527),dest_path], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),copy_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("async","error","async/error",-1154409548),read_event], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_error,new cljs.core.Keyword(null,"capture?","capture?",-741966441),true,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
ui.images.events.path__GT_import_event = (function ui$images$events$path__GT_import_event(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","import","image/import",-1566661944),path,ui.images.events.file_path.join(process.env.HOME,ui.images.events.file_path.basename(path))], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"import-images","import-images",1511604414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.async_util.async_action,re_frame.core.trim_v], null),(function (p__22871,p__22872){
var map__22873 = p__22871;
var map__22873__$1 = ((((!((map__22873 == null)))?((((map__22873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22873):map__22873);
var on_success = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__22874 = p__22872;
var images = cljs.core.nth.call(null,vec__22874,(0),null);
var events = cljs.core.mapv.call(null,ui.images.events.path__GT_import_event,images);
var successes = cljs.core.mapv.call(null,((function (events,map__22873,map__22873__$1,on_success,on_error,vec__22874,images){
return (function (p1__22869_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("async","success","async/success",1949169942),p1__22869_SHARP_],null));
});})(events,map__22873,map__22873__$1,on_success,on_error,vec__22874,images))
,events);
var errors = cljs.core.mapv.call(null,((function (events,successes,map__22873,map__22873__$1,on_success,on_error,vec__22874,images){
return (function (p1__22870_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("async","error","async/error",-1154409548),p1__22870_SHARP_],null));
});})(events,successes,map__22873,map__22873__$1,on_success,on_error,vec__22874,images))
,events);
cljs.core.println.call(null,"importing",images);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatches","first-dispatches",1387434487),events,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),successes,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_success,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),errors,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_error,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"capture?","capture?",-741966441),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"start-import","start-import",-1731366764),cljs.core.constantly.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("main-thread","open-files","main-thread/open-files",1383449517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"import-images","import-images",1511604414)], null)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("images","open-carousel","images/open-carousel",319108840),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__22876,p__22877){
var map__22878 = p__22876;
var map__22878__$1 = ((((!((map__22878 == null)))?((((map__22878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22878):map__22878);
var cofx = map__22878__$1;
var db = cljs.core.get.call(null,map__22878__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22879 = p__22877;
var idx = cljs.core.nth.call(null,vec__22879,(0),null);
var items = cljs.core.nth.call(null,vec__22879,(1),null);
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("images","carousel-state","images/carousel-state",-430866318),state),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","push-view","controls/push-view",-1645045628),new cljs.core.Keyword(null,"carousel-view","carousel-view",1786124935)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("images","close-carousel","images/close-carousel",901673199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__22881){
var map__22882 = p__22881;
var map__22882__$1 = ((((!((map__22882 == null)))?((((map__22882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22882):map__22882);
var cofx = map__22882__$1;
var db = cljs.core.get.call(null,map__22882__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword("images","carousel-state","images/carousel-state",-430866318)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","pop-view","controls/pop-view",1802502995)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("images","advance-carousel","images/advance-carousel",-1616478672),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","carousel-state","images/carousel-state",-430866318),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("images","rewind-carousel","images/rewind-carousel",1698989476),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","carousel-state","images/carousel-state",-430866318),new cljs.core.Keyword(null,"idx","idx",1053688473)], null),cljs.core.dec);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("images","open-info","images/open-info",-1015437373),(function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("images","info?","images/info?",1824069657),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("images","close-info","images/close-info",307468980),(function (db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword("images","info?","images/info?",1824069657));
}));

//# sourceMappingURL=events.js.map?rel=1478388950501