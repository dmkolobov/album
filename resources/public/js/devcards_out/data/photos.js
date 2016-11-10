// Compiled by ClojureScript 1.8.40 {}
goog.provide('data.photos');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('data.images');
data.photos.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("data.photos","filename","data.photos/filename",901286766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","type","db/type",1174271242),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.Keyword("data.photos","taken-on","data.photos/taken-on",-1860724123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","type","db/type",1174271242),new cljs.core.Keyword("db.type","instant","db.type/instant",-1024769248)], null),new cljs.core.Keyword("data.photos","base-image","data.photos/base-image",-1289526264),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null)], null);
data.photos.build_photo = (function data$photos$build_photo(p__25401){
var map__25404 = p__25401;
var map__25404__$1 = ((((!((map__25404 == null)))?((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var data__$1 = map__25404__$1;
var id = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var filename = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var taken_on = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"taken-on","taken-on",771936688));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data.images.build_image.call(null,cljs.core.select_keys.call(null,data__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"filesize","filesize",-784040361)], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("data.photos","filename","data.photos/filename",901286766),filename,new cljs.core.Keyword("data.photos","taken-on","data.photos/taken-on",-1860724123),taken_on,new cljs.core.Keyword("data.photos","base-image","data.photos/base-image",-1289526264),id], null)], null);
});
data.photos.grouped_query = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Symbol(null,"?photo-id","?photo-id",-1677708779,null),new cljs.core.Symbol(null,"?width","?width",-252802649,null),new cljs.core.Symbol(null,"?height","?height",-1374895195,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?key-attr","?key-attr",-1976429569,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?photo-id","?photo-id",-1677708779,null),new cljs.core.Symbol(null,"?key-attr","?key-attr",-1976429569,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?photo-id","?photo-id",-1677708779,null),new cljs.core.Keyword("data.photos","base-image","data.photos/base-image",-1289526264),new cljs.core.Symbol(null,"?image-id","?image-id",-2138330105,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?image-id","?image-id",-2138330105,null),new cljs.core.Keyword("data.images","width","data.images/width",1752485767),new cljs.core.Symbol(null,"?width","?width",-252802649,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?image-id","?image-id",-2138330105,null),new cljs.core.Keyword("data.images","height","data.images/height",-1134413630),new cljs.core.Symbol(null,"?height","?height",-1374895195,null)], null)], null);

//# sourceMappingURL=photos.js.map?rel=1478388957394