// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.fx.img');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('lib.util');
if(typeof ui.fx.img.gm !== 'undefined'){
} else {
ui.fx.img.gm = require("gm");
}
ui.fx.img.normalize_date = (function ui$fx$img$normalize_date(taken_at){
var vec__25321 = clojure.string.split.call(null,taken_at," ");
var date = cljs.core.nth.call(null,vec__25321,(0),null);
var tim = cljs.core.nth.call(null,vec__25321,(1),null);
var date_SINGLEQUOTE_ = clojure.string.join.call(null,"-",clojure.string.split.call(null,date,":"));
return (new Date(Date.parse([cljs.core.str(date_SINGLEQUOTE_),cljs.core.str(" "),cljs.core.str(tim)].join(''))));
});
ui.fx.img.process_image_data = (function ui$fx$img$process_image_data(data__$1){
var map__25324 = cljs.core.js__GT_clj.call(null,data.size,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__25324__$1 = ((((!((map__25324 == null)))?((((map__25324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25324):map__25324);
var size = map__25324__$1;
var width = cljs.core.get.call(null,map__25324__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__25324__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var exif = (data__$1["Profile-EXIF"]);
var now = (new Date());
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),(cljs.core.truth_(exif)?(function (){var temp__4655__auto__ = (exif["Date Time Original"]);
if(cljs.core.truth_(temp__4655__auto__)){
var taken_at = temp__4655__auto__;
if(typeof taken_at === 'string'){
return ui.fx.img.normalize_date.call(null,taken_at);
} else {
return taken_at;
}
} else {
return now;
}
})():now)], null);
});
lib.util.reg_fx_service.call(null,new cljs.core.Keyword("img","info","img/info",-317165335),(function (p__25326){
var map__25327 = p__25326;
var map__25327__$1 = ((((!((map__25327 == null)))?((((map__25327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25327):map__25327);
var path = cljs.core.get.call(null,map__25327__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_success = cljs.core.get.call(null,map__25327__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25327__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return ui.fx.img.gm.call(null,path).identify(((function (map__25327,map__25327__$1,path,on_success,on_error){
return (function (err,val){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_error,path,cljs.core.js__GT_clj.call(null,err)));
} else {
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,ui.fx.img.process_image_data.call(null,val)));
}
});})(map__25327,map__25327__$1,path,on_success,on_error))
);
}));
lib.util.reg_fx_service.call(null,new cljs.core.Keyword("img","preload","img/preload",1646986579),(function (p__25329){
var map__25330 = p__25329;
var map__25330__$1 = ((((!((map__25330 == null)))?((((map__25330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25330):map__25330);
var path = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_success = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var image = (new Image());
(image["onload"] = ((function (image,map__25330,map__25330__$1,path,on_success,on_error){
return (function (){
return re_frame.core.dispatch.call(null,on_success);
});})(image,map__25330,map__25330__$1,path,on_success,on_error))
);

return (image["src"] = path);
}));
lib.util.reg_fx_service.call(null,new cljs.core.Keyword("img","manipulate","img/manipulate",-983066649),(function (p__25332){
var map__25333 = p__25332;
var map__25333__$1 = ((((!((map__25333 == null)))?((((map__25333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25333):map__25333);
var src_path = cljs.core.get.call(null,map__25333__$1,new cljs.core.Keyword(null,"src-path","src-path",-1449489977));
var dest_path = cljs.core.get.call(null,map__25333__$1,new cljs.core.Keyword(null,"dest-path","dest-path",636224831));
var commands = cljs.core.get.call(null,map__25333__$1,new cljs.core.Keyword(null,"commands","commands",161008658));
var on_success = cljs.core.get.call(null,map__25333__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25333__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var gm = ui.fx.img.gm.call(null,src_path);
var seq__25335_25351 = cljs.core.seq.call(null,commands);
var chunk__25336_25352 = null;
var count__25337_25353 = (0);
var i__25338_25354 = (0);
while(true){
if((i__25338_25354 < count__25337_25353)){
var vec__25339_25355 = cljs.core._nth.call(null,chunk__25336_25352,i__25338_25354);
var action_25356 = cljs.core.nth.call(null,vec__25339_25355,(0),null);
var args_25357 = cljs.core.nthnext.call(null,vec__25339_25355,(1));
var pred__25340_25358 = cljs.core._EQ_;
var expr__25341_25359 = action_25356;
if(cljs.core.truth_(pred__25340_25358.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),expr__25341_25359))){
var vec__25343_25360 = args_25357;
var w_25361 = cljs.core.nth.call(null,vec__25343_25360,(0),null);
var h_25362 = cljs.core.nth.call(null,vec__25343_25360,(1),null);
gm.resize(w_25361,h_25362);
} else {
if(cljs.core.truth_(pred__25340_25358.call(null,new cljs.core.Keyword(null,"quality","quality",147850199),expr__25341_25359))){
var vec__25344_25363 = args_25357;
var factor_25364 = cljs.core.nth.call(null,vec__25344_25363,(0),null);
gm.quality(factor_25364);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25341_25359)].join('')));
}
}

var G__25365 = seq__25335_25351;
var G__25366 = chunk__25336_25352;
var G__25367 = count__25337_25353;
var G__25368 = (i__25338_25354 + (1));
seq__25335_25351 = G__25365;
chunk__25336_25352 = G__25366;
count__25337_25353 = G__25367;
i__25338_25354 = G__25368;
continue;
} else {
var temp__4657__auto___25369 = cljs.core.seq.call(null,seq__25335_25351);
if(temp__4657__auto___25369){
var seq__25335_25370__$1 = temp__4657__auto___25369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25335_25370__$1)){
var c__19654__auto___25371 = cljs.core.chunk_first.call(null,seq__25335_25370__$1);
var G__25372 = cljs.core.chunk_rest.call(null,seq__25335_25370__$1);
var G__25373 = c__19654__auto___25371;
var G__25374 = cljs.core.count.call(null,c__19654__auto___25371);
var G__25375 = (0);
seq__25335_25351 = G__25372;
chunk__25336_25352 = G__25373;
count__25337_25353 = G__25374;
i__25338_25354 = G__25375;
continue;
} else {
var vec__25345_25376 = cljs.core.first.call(null,seq__25335_25370__$1);
var action_25377 = cljs.core.nth.call(null,vec__25345_25376,(0),null);
var args_25378 = cljs.core.nthnext.call(null,vec__25345_25376,(1));
var pred__25346_25379 = cljs.core._EQ_;
var expr__25347_25380 = action_25377;
if(cljs.core.truth_(pred__25346_25379.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),expr__25347_25380))){
var vec__25349_25381 = args_25378;
var w_25382 = cljs.core.nth.call(null,vec__25349_25381,(0),null);
var h_25383 = cljs.core.nth.call(null,vec__25349_25381,(1),null);
gm.resize(w_25382,h_25383);
} else {
if(cljs.core.truth_(pred__25346_25379.call(null,new cljs.core.Keyword(null,"quality","quality",147850199),expr__25347_25380))){
var vec__25350_25384 = args_25378;
var factor_25385 = cljs.core.nth.call(null,vec__25350_25384,(0),null);
gm.quality(factor_25385);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25347_25380)].join('')));
}
}

var G__25386 = cljs.core.next.call(null,seq__25335_25370__$1);
var G__25387 = null;
var G__25388 = (0);
var G__25389 = (0);
seq__25335_25351 = G__25386;
chunk__25336_25352 = G__25387;
count__25337_25353 = G__25388;
i__25338_25354 = G__25389;
continue;
}
} else {
}
}
break;
}

return gm.write(dest_path,((function (gm,map__25333,map__25333__$1,src_path,dest_path,commands,on_success,on_error){
return (function (err,val){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_error,err));
} else {
return re_frame.core.dispatch.call(null,on_success);
}
});})(gm,map__25333,map__25333__$1,src_path,dest_path,commands,on_success,on_error))
);
}));

//# sourceMappingURL=img.js.map?rel=1478388957155