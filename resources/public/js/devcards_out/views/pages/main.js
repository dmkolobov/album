// Compiled by ClojureScript 1.8.40 {}
goog.provide('views.pages.main');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('ui.views.common.menu');
goog.require('ui.views.common.toolbar');
goog.require('reagent.core');
views.pages.main.main_menu_button = (function views$pages$main$main_menu_button(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-menu",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Main Menu",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","open-left-sidebar","controls/open-left-sidebar",-2124445491)], null));
})], null);
});
views.pages.main.import_button = (function views$pages$main$import_button(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-upload",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Import Photos",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-left","below-left",1233934732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-import","start-import",-1731366764)], null));
})], null);
});
views.pages.main.main_toolbar_STAR_ = (function views$pages$main$main_toolbar_STAR_(title){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.toolbar,new cljs.core.Keyword(null,"class","class",-2030961996),"main-menu",new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.main_menu_button], null),new cljs.core.Keyword(null,"left-content","left-content",1051835530),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"label","label",1718410804),title], null),new cljs.core.Keyword(null,"right-content","right-content",-2003362022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.import_button], null)], null);
});
views.pages.main.unselect_button = (function views$pages$main$unselect_button(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selection","discard","selection/discard",590067499)], null));
})], null);
});
views.pages.main.main_toolbar = (function views$pages$main$main_toolbar(var_args){
var args__19919__auto__ = [];
var len__19912__auto___26843 = arguments.length;
var i__19913__auto___26844 = (0);
while(true){
if((i__19913__auto___26844 < len__19912__auto___26843)){
args__19919__auto__.push((arguments[i__19913__auto___26844]));

var G__26845 = (i__19913__auto___26844 + (1));
i__19913__auto___26844 = G__26845;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return views.pages.main.main_toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

views.pages.main.main_toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var selection_count = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selection","count","selection/count",693385449)], null));
return ((function (selection_count){
return (function() { 
var G__26846__delegate = function (p__26840){
var map__26841 = p__26840;
var map__26841__$1 = ((((!((map__26841 == null)))?((((map__26841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26841):map__26841);
var title = cljs.core.get.call(null,map__26841__$1,new cljs.core.Keyword(null,"title","title",636505583));
var select_actions = cljs.core.get.call(null,map__26841__$1,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860));
if((cljs.core.deref.call(null,selection_count) > (0))){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.toolbar,new cljs.core.Keyword(null,"class","class",-2030961996),"selection-menu",new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.unselect_button], null),new cljs.core.Keyword(null,"left-content","left-content",1051835530),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(cljs.core.deref.call(null,selection_count)),cljs.core.str(" selected")].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.Keyword(null,"right-content","right-content",-2003362022),select_actions], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.main_toolbar_STAR_,title], null);
}
};
var G__26846 = function (var_args){
var p__26840 = null;
if (arguments.length > 0) {
var G__26847__i = 0, G__26847__a = new Array(arguments.length -  0);
while (G__26847__i < G__26847__a.length) {G__26847__a[G__26847__i] = arguments[G__26847__i + 0]; ++G__26847__i;}
  p__26840 = new cljs.core.IndexedSeq(G__26847__a,0);
} 
return G__26846__delegate.call(this,p__26840);};
G__26846.cljs$lang$maxFixedArity = 0;
G__26846.cljs$lang$applyTo = (function (arglist__26848){
var p__26840 = cljs.core.seq(arglist__26848);
return G__26846__delegate(p__26840);
});
G__26846.cljs$core$IFn$_invoke$arity$variadic = G__26846__delegate;
return G__26846;
})()
;
;})(selection_count))
});

views.pages.main.main_toolbar.cljs$lang$maxFixedArity = (0);

views.pages.main.main_toolbar.cljs$lang$applyTo = (function (seq26839){
return views.pages.main.main_toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26839));
});
views.pages.main.sidebar_logo = (function views$pages$main$sidebar_logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","close-left-sidebar","controls/close-left-sidebar",-445515479)], null));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 2em",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"label","label",1718410804),"album"], null)], null)], null)], null);
});
views.pages.main.transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
views.pages.main.sidebar_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941),new cljs.core.Keyword(null,"label","label",1718410804),"Photos",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-image"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"albums-view","albums-view",1122235758),new cljs.core.Keyword(null,"label","label",1718410804),"Albums",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-collection-image"], null)], null);
views.pages.main.label_expanded_sidebar_item = (function views$pages$main$label_expanded_sidebar_item(p__26849){
var map__26852 = p__26849;
var map__26852__$1 = ((((!((map__26852 == null)))?((((map__26852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852):map__26852);
var label = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.call(null,map__26852__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon","i.sidebar-icon",1759246766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("zmdi "),cljs.core.str(icon)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null)], null);
});
views.pages.main.label_sidebar_item = (function views$pages$main$label_sidebar_item(p__26854){
var map__26857 = p__26854;
var map__26857__$1 = ((((!((map__26857 == null)))?((((map__26857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26857):map__26857);
var label = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"0.25em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon.sidebar-icon-gray","i.sidebar-icon.sidebar-icon-gray",1111868216),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("zmdi "),cljs.core.str(icon)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar-label",new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null)], null);
});
views.pages.main.sidebar = (function views$pages$main$sidebar(){
var current_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.controls","current-view","lib.controls/current-view",-426918723)], null));
var main_menu_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib.controls","main-menu?","lib.controls/main-menu?",789026025)], null));
var swap_view = ((function (current_view,main_menu_QMARK_){
return (function (p1__26859_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","set-view","controls/set-view",-1280365785),p1__26859_SHARP_], null));
});})(current_view,main_menu_QMARK_))
;
return ((function (current_view,main_menu_QMARK_,swap_view){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 0",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"sidebar",new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642),(100),new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286),(100)], null),(cljs.core.truth_(cljs.core.deref.call(null,main_menu_QMARK_))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar left-sidebar",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.sidebar_logo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.menu.menu,new cljs.core.Keyword(null,"model","model",331153215),current_view,new cljs.core.Keyword(null,"items","items",1031954938),views.pages.main.sidebar_items,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),views.pages.main.label_expanded_sidebar_item,new cljs.core.Keyword(null,"on-change","on-change",-732046149),swap_view], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"sidebar"], null)):null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.menu.menu,new cljs.core.Keyword(null,"model","model",331153215),current_view,new cljs.core.Keyword(null,"items","items",1031954938),views.pages.main.sidebar_items,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),views.pages.main.label_sidebar_item,new cljs.core.Keyword(null,"class","class",-2030961996),"collapsed",new cljs.core.Keyword(null,"on-change","on-change",-732046149),swap_view], null)], null)], null);
});
;})(current_view,main_menu_QMARK_,swap_view))
});
views.pages.main.main_view = (function views$pages$main$main_view(var_args){
var args__19919__auto__ = [];
var len__19912__auto___26864 = arguments.length;
var i__19913__auto___26865 = (0);
while(true){
if((i__19913__auto___26865 < len__19912__auto___26864)){
args__19919__auto__.push((arguments[i__19913__auto___26865]));

var G__26866 = (i__19913__auto___26865 + (1));
i__19913__auto___26865 = G__26866;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return views.pages.main.main_view.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

views.pages.main.main_view.cljs$core$IFn$_invoke$arity$variadic = (function (p__26861){
var map__26862 = p__26861;
var map__26862__$1 = ((((!((map__26862 == null)))?((((map__26862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26862):map__26862);
var title = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"content","content",15833224));
var select_actions = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.main_toolbar,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),select_actions], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.pages.main.sidebar], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 0",new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"child","child",623967545),content], null)], null)], null)], null)], null);
});

views.pages.main.main_view.cljs$lang$maxFixedArity = (0);

views.pages.main.main_view.cljs$lang$applyTo = (function (seq26860){
return views.pages.main.main_view.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26860));
});

//# sourceMappingURL=main.js.map?rel=1478392965448