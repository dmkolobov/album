// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.structure');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('ui.views.common.animations');
goog.require('reagent.core');
ui.views.common.structure.side_sheet = ui.views.common.animations.slide_left_transition.call(null,(function (nav){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav shadow-2",new cljs.core.Keyword(null,"child","child",623967545),nav], null);
}));
ui.views.common.structure.right_sheet = ui.views.common.animations.slide_right_transition.call(null,(function (nav){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"class","class",-2030961996),"right-nav shadow-2",new cljs.core.Keyword(null,"child","child",623967545),nav], null);
}));
ui.views.common.structure.main = (function ui$views$common$structure$main(var_args){
var args__19949__auto__ = [];
var len__19942__auto___52331 = arguments.length;
var i__19943__auto___52332 = (0);
while(true){
if((i__19943__auto___52332 < len__19942__auto___52331)){
args__19949__auto__.push((arguments[i__19943__auto___52332]));

var G__52333 = (i__19943__auto___52332 + (1));
i__19943__auto___52332 = G__52333;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic = (function (p__52328){
var map__52329 = p__52328;
var map__52329__$1 = ((((!((map__52329 == null)))?((((map__52329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52329):map__52329);
var app_bar = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908));
var side_nav = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"side-nav","side-nav",1449518636));
var content = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"content","content",15833224));
var right_nav = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"right-nav","right-nav",-1158261400));
var attr = cljs.core.get.call(null,map__52329__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"structure",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.animations.transition,new cljs.core.Keyword(null,"name","name",1843675177),"side-nav",new cljs.core.Keyword(null,"class","class",-2030961996),ui.views.common.structure.side_sheet,new cljs.core.Keyword(null,"content","content",15833224),side_nav], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"class","class",-2030961996),"content-canvas",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"app-bar",new cljs.core.Keyword(null,"child","child",623967545),app_bar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"app-content",new cljs.core.Keyword(null,"child","child",623967545),content], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.animations.transition,new cljs.core.Keyword(null,"name","name",1843675177),"right-nav",new cljs.core.Keyword(null,"class","class",-2030961996),ui.views.common.structure.right_sheet,new cljs.core.Keyword(null,"content","content",15833224),right_nav], null)], null)], null);
});

ui.views.common.structure.main.cljs$lang$maxFixedArity = (0);

ui.views.common.structure.main.cljs$lang$applyTo = (function (seq52327){
return ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52327));
});

//# sourceMappingURL=structure.js.map?rel=1478766781321