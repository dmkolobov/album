// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.images');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
ui.views.common.images.absolute_image = (function ui$views$common$images$absolute_image(var_args){
var args__19919__auto__ = [];
var len__19912__auto___25514 = arguments.length;
var i__19913__auto___25515 = (0);
while(true){
if((i__19913__auto___25515 < len__19912__auto___25514)){
args__19919__auto__.push((arguments[i__19913__auto___25515]));

var G__25516 = (i__19913__auto___25515 + (1));
i__19913__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic = (function (p__25511){
var map__25512 = p__25511;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var path = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_click = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image","img.image",1785555815),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["100%",(0),(0),"100%",(0),"block","absolute",(0),"auto"])], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null))], null);
});

ui.views.common.images.absolute_image.cljs$lang$maxFixedArity = (0);

ui.views.common.images.absolute_image.cljs$lang$applyTo = (function (seq25510){
return ui.views.common.images.absolute_image.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25510));
});
ui.views.common.images.square = (function ui$views$common$images$square(path,aspect){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((((1) / aspect) * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.views.common.images.landscape = (function ui$views$common$images$landscape(path,_){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
ui.views.common.images.portrait = (function ui$views$common$images$portrait(path,aspect){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"0",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),[cljs.core.str((aspect * (100))),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.absolute_image,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
});
/**
 * Display an image so that it fills as much content as it can
 *   while preserving aspect ratio. Requires that the parent element
 *   has CSS positioning other than 'fixed'
 */
ui.views.common.images.image = (function ui$views$common$images$image(path,aspect){
if(cljs.core._EQ_.call(null,aspect,(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.square,path,aspect], null);
} else {
if((aspect > (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.landscape,path,aspect], null);
} else {
if((aspect < (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.portrait,path,aspect], null);
} else {
return null;
}
}
}
});

//# sourceMappingURL=images.js.map?rel=1478388957945