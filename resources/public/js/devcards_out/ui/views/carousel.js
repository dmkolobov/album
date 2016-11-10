// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.carousel');
goog.require('cljs.core');
goog.require('re_com.core');
ui.views.carousel.carousel_left = (function ui$views$carousel$carousel_left(on_click){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-left",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null);
});
ui.views.carousel.carousel_right = (function ui$views$carousel$carousel_right(on_click){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-right",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null);
});
ui.views.carousel.carousel = (function ui$views$carousel$carousel(var_args){
var args__19919__auto__ = [];
var len__19912__auto___22606 = arguments.length;
var i__19913__auto___22607 = (0);
while(true){
if((i__19913__auto___22607 < len__19912__auto___22606)){
args__19919__auto__.push((arguments[i__19913__auto___22607]));

var G__22608 = (i__19913__auto___22607 + (1));
i__19913__auto___22607 = G__22608;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.carousel.carousel.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.carousel.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (p__22601){
var map__22602 = p__22601;
var map__22602__$1 = ((((!((map__22602 == null)))?((((map__22602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22602):map__22602);
var model = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_advance = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"on-advance","on-advance",440117875));
var on_rewind = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"on-rewind","on-rewind",1291208182));
var render_fn = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var vec__22604 = cljs.core.deref.call(null,model);
var vec__22605 = cljs.core.nth.call(null,vec__22604,(0),null);
var id = cljs.core.nth.call(null,vec__22605,(0),null);
var info = cljs.core.nth.call(null,vec__22605,(1),null);
var first_QMARK_ = cljs.core.nth.call(null,vec__22604,(1),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__22604,(2),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,first_QMARK_))?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"fullscreen-button",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"0"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_rewind], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.carousel.carousel_left,on_rewind], null)], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn,id,info], null)], null),((cljs.core.not.call(null,last_QMARK_))?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"fullscreen-button",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"0"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_advance], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.carousel.carousel_right,on_advance], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});

ui.views.carousel.carousel.cljs$lang$maxFixedArity = (0);

ui.views.carousel.carousel.cljs$lang$applyTo = (function (seq22600){
return ui.views.carousel.carousel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22600));
});

//# sourceMappingURL=carousel.js.map?rel=1478388949294