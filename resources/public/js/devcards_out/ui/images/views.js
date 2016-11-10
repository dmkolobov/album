// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.images.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
ui.images.views.absolute_image = (function ui$images$views$absolute_image(var_args){
var args__19919__auto__ = [];
var len__19912__auto___22898 = arguments.length;
var i__19913__auto___22899 = (0);
while(true){
if((i__19913__auto___22899 < len__19912__auto___22898)){
args__19919__auto__.push((arguments[i__19913__auto___22899]));

var G__22900 = (i__19913__auto___22899 + (1));
i__19913__auto___22899 = G__22900;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.images.views.absolute_image.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.images.views.absolute_image.cljs$core$IFn$_invoke$arity$variadic = (function (p__22895){
var map__22896 = p__22895;
var map__22896__$1 = ((((!((map__22896 == null)))?((((map__22896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22896):map__22896);
var path = cljs.core.get.call(null,map__22896__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_click = cljs.core.get.call(null,map__22896__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image","img.image",1785555815),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["100%",(0),(0),"100%",(0),"block","absolute",(0),"auto"])], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null))], null);
});

ui.images.views.absolute_image.cljs$lang$maxFixedArity = (0);

ui.images.views.absolute_image.cljs$lang$applyTo = (function (seq22894){
return ui.images.views.absolute_image.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22894));
});
ui.images.views.block_image = (function ui$images$views$block_image(var_args){
var args__19919__auto__ = [];
var len__19912__auto___22905 = arguments.length;
var i__19913__auto___22906 = (0);
while(true){
if((i__19913__auto___22906 < len__19912__auto___22905)){
args__19919__auto__.push((arguments[i__19913__auto___22906]));

var G__22907 = (i__19913__auto___22906 + (1));
i__19913__auto___22906 = G__22907;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.images.views.block_image.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.images.views.block_image.cljs$core$IFn$_invoke$arity$variadic = (function (p__22902){
var map__22903 = p__22902;
var map__22903__$1 = ((((!((map__22903 == null)))?((((map__22903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22903):map__22903);
var path = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_click = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image","img.image",1785555815),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null))], null);
});

ui.images.views.block_image.cljs$lang$maxFixedArity = (0);

ui.images.views.block_image.cljs$lang$applyTo = (function (seq22901){
return ui.images.views.block_image.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22901));
});
ui.images.views.square_photo = (function ui$images$views$square_photo(path,p__22908){
var map__22911 = p__22908;
var map__22911__$1 = ((((!((map__22911 == null)))?((((map__22911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22911):map__22911);
var info = map__22911__$1;
var aspect = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((((1) / aspect) * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.images.views.landscape_photo = (function ui$images$views$landscape_photo(path,info){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.images.views.portrait_photo = (function ui$images$views$portrait_photo(path,p__22913){
var map__22916 = p__22913;
var map__22916__$1 = ((((!((map__22916 == null)))?((((map__22916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22916):map__22916);
var info = map__22916__$1;
var aspect = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((aspect * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.images.views.fullscreen_photo = (function ui$images$views$fullscreen_photo(path,p__22918){
var map__22921 = p__22918;
var map__22921__$1 = ((((!((map__22921 == null)))?((((map__22921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22921):map__22921);
var info = map__22921__$1;
var aspect = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
if(cljs.core._EQ_.call(null,aspect,(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.square_photo,path,info], null);
} else {
if((aspect > (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.landscape_photo,path,info], null);
} else {
if((aspect < (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.images.views.portrait_photo,path,info], null);
} else {
return null;
}
}
}
});

//# sourceMappingURL=views.js.map?rel=1478388950629