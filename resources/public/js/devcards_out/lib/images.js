// Compiled by ClojureScript 1.8.40 {}
goog.provide('lib.images');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('lib.util');
if(typeof lib.images.file_path !== 'undefined'){
} else {
lib.images.file_path = require("path");
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("lib.images","read-data","lib.images/read-data",-278985771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.async_action,re_frame.core.trim_v], null),(function (p__25453,p__25454){
var map__25455 = p__25453;
var map__25455__$1 = ((((!((map__25455 == null)))?((((map__25455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25455):map__25455);
var on_success = cljs.core.get.call(null,map__25455__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__25455__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var vec__25456 = p__25454;
var id = cljs.core.nth.call(null,vec__25456,(0),null);
var path = cljs.core.nth.call(null,vec__25456,(1),null);
var fs_query = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fs","stat","fs/stat",-1370594505),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
var gm_query = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("img","info","img/info",-317165335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
var capture = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"filename","filename",-1428840783),lib.images.file_path.basename(path)], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatches","first-dispatches",1387434487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gm_query,fs_query], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.success_ev.call(null,fs_query),lib.util.success_ev.call(null,gm_query)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_success,new cljs.core.Keyword(null,"capture","capture",-677031143),capture,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib.util.error_ev.call(null,fs_query),lib.util.error_ev.call(null,gm_query)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),on_error,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("lib.images","mark-loaded","lib.images/mark-loaded",-271242815),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__25458){
var vec__25459 = p__25458;
var path = cljs.core.nth.call(null,vec__25459,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preloaded?","preloaded?",-1491476999),path], null),true);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("lib.images","preloaded?","lib.images/preloaded?",-2061532166),(function (db,p__25460){
var vec__25461 = p__25460;
var _ = cljs.core.nth.call(null,vec__25461,(0),null);
var path = cljs.core.nth.call(null,vec__25461,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preloaded?","preloaded?",-1491476999),path], null));
}));

//# sourceMappingURL=images.js.map?rel=1478388957655