// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.fx.fs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('lib.util');
if(typeof ui.fx.fs.fs !== 'undefined'){
} else {
ui.fx.fs.fs = require("fs-extra");
}
lib.util.reg_fx_service.call(null,new cljs.core.Keyword("fs","stat","fs/stat",-1370594505),(function (p__25307){
var map__25308 = p__25307;
var map__25308__$1 = ((((!((map__25308 == null)))?((((map__25308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25308):map__25308);
var path = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_success = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return ui.fx.fs.fs.stat(path,((function (map__25308,map__25308__$1,path,on_success,on_error){
return (function (err,val){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_error,cljs.core.js__GT_clj.call(null,err)));
} else {
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filesize","filesize",-784040361),val.size], null)));
}
});})(map__25308,map__25308__$1,path,on_success,on_error))
);
}));
lib.util.reg_fx_service.call(null,new cljs.core.Keyword("fs","copy","fs/copy",-1077613006),(function (p__25310){
var map__25311 = p__25310;
var map__25311__$1 = ((((!((map__25311 == null)))?((((map__25311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25311):map__25311);
var src_path = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword(null,"src-path","src-path",-1449489977));
var dest_path = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword(null,"dest-path","dest-path",636224831));
var on_success = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25311__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return ui.fx.fs.fs.copy(src_path,dest_path,((function (map__25311,map__25311__$1,src_path,dest_path,on_success,on_error){
return (function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,on_error);
} else {
return re_frame.core.dispatch.call(null,on_success);
}
});})(map__25311,map__25311__$1,src_path,dest_path,on_success,on_error))
);
}));

//# sourceMappingURL=fs.js.map?rel=1478388957018