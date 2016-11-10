// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.images');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
ui.views.images.absolute_image = (function ui$views$images$absolute_image(var_args){
var args__19919__auto__ = [];
var len__19912__auto___35221 = arguments.length;
var i__19913__auto___35222 = (0);
while(true){
if((i__19913__auto___35222 < len__19912__auto___35221)){
args__19919__auto__.push((arguments[i__19913__auto___35222]));

var G__35223 = (i__19913__auto___35222 + (1));
i__19913__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic = (function (p__35218){
var map__35219 = p__35218;
var map__35219__$1 = ((((!((map__35219 == null)))?((((map__35219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35219):map__35219);
var path = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_click = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image","img.image",1785555815),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["100%",(0),(0),"100%",(0),"block","absolute",(0),"auto"])], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null))], null);
});

ui.views.images.absolute_image.cljs$lang$maxFixedArity = (0);

ui.views.images.absolute_image.cljs$lang$applyTo = (function (seq35217){
return ui.views.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35217));
});
ui.views.images.block_image = (function ui$views$images$block_image(var_args){
var args__19919__auto__ = [];
var len__19912__auto___35228 = arguments.length;
var i__19913__auto___35229 = (0);
while(true){
if((i__19913__auto___35229 < len__19912__auto___35228)){
args__19919__auto__.push((arguments[i__19913__auto___35229]));

var G__35230 = (i__19913__auto___35229 + (1));
i__19913__auto___35229 = G__35230;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.images.block_image.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.images.block_image.cljs$core$IFn$_invoke$arity$variadic = (function (p__35225){
var map__35226 = p__35225;
var map__35226__$1 = ((((!((map__35226 == null)))?((((map__35226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35226):map__35226);
var path = cljs.core.get.call(null,map__35226__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_click = cljs.core.get.call(null,map__35226__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image","img.image",1785555815),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null))], null);
});

ui.views.images.block_image.cljs$lang$maxFixedArity = (0);

ui.views.images.block_image.cljs$lang$applyTo = (function (seq35224){
return ui.views.images.block_image.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35224));
});
ui.views.images.square = (function ui$views$images$square(path,aspect){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((((1) / aspect) * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.views.images.landscape = (function ui$views$images$landscape(path,_){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.views.images.portrait = (function ui$views$images$portrait(path,aspect){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((aspect * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.views.images.image = (function ui$views$images$image(path,aspect){
if(cljs.core._EQ_.call(null,aspect,(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.square,path,aspect], null);
} else {
if((aspect > (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.landscape,path,aspect], null);
} else {
if((aspect < (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.images.portrait,path,aspect], null);
} else {
return null;
}
}
}
});

//# sourceMappingURL=images.js.map?rel=1478297203261