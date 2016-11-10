// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.main');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('ui.views.common.toolbar');
goog.require('ui.views.common.menu');
goog.require('reagent.core');
ui.views.main.main_menu_button = (function ui$views$main$main_menu_button(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-menu",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Main Menu",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","open-left-sidebar","controls/open-left-sidebar",-2124445491)], null));
})], null);
});
ui.views.main.import_button = (function ui$views$main$import_button(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-upload",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Import Photos",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-left","below-left",1233934732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-import","start-import",-1731366764)], null));
})], null);
});
ui.views.main.main_toolbar = (function ui$views$main$main_toolbar(title){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.base_toolbar,new cljs.core.Keyword(null,"class","class",-2030961996),"main-menu",new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.main_menu_button], null),new cljs.core.Keyword(null,"left-content","left-content",1051835530),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"label","label",1718410804),title], null),new cljs.core.Keyword(null,"right-content","right-content",-2003362022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.import_button], null)], null);
});
ui.views.main.sidebar_logo = (function ui$views$main$sidebar_logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","close-left-sidebar","controls/close-left-sidebar",-445515479)], null));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 2em",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"label","label",1718410804),"album"], null)], null)], null)], null);
});
ui.views.main.transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
ui.views.main.sidebar_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"photos-view","photos-view",-1323011941),new cljs.core.Keyword(null,"label","label",1718410804),"Photos",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-image"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"albums-view","albums-view",1122235758),new cljs.core.Keyword(null,"label","label",1718410804),"Albums",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-collection-image"], null)], null);
ui.views.main.label_expanded_sidebar_item = (function ui$views$main$label_expanded_sidebar_item(p__22811){
var map__22814 = p__22811;
var map__22814__$1 = ((((!((map__22814 == null)))?((((map__22814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22814):map__22814);
var label = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon","i.sidebar-icon",1759246766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("zmdi "),cljs.core.str(icon)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null)], null);
});
ui.views.main.label_sidebar_item = (function ui$views$main$label_sidebar_item(p__22816){
var map__22819 = p__22816;
var map__22819__$1 = ((((!((map__22819 == null)))?((((map__22819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22819):map__22819);
var label = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var icon = cljs.core.get.call(null,map__22819__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"0.25em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon.sidebar-icon-gray","i.sidebar-icon.sidebar-icon-gray",1111868216),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("zmdi "),cljs.core.str(icon)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar-label",new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null)], null);
});
ui.views.main.sidebar = (function ui$views$main$sidebar(){
var current_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","current-view","controls/current-view",1600600084)], null));
var sidebar_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","sidebar-left?","controls/sidebar-left?",571890082)], null));
var swap_view = ((function (current_view,sidebar_QMARK_){
return (function (p1__22821_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("controls","set-view","controls/set-view",-1280365785),p1__22821_SHARP_], null));
});})(current_view,sidebar_QMARK_))
;
return ((function (current_view,sidebar_QMARK_,swap_view){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 0",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"sidebar",new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642),(100),new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286),(100)], null),(cljs.core.truth_(cljs.core.deref.call(null,sidebar_QMARK_))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar left-sidebar",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.sidebar_logo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.menu.menu,new cljs.core.Keyword(null,"model","model",331153215),current_view,new cljs.core.Keyword(null,"items","items",1031954938),ui.views.main.sidebar_items,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),ui.views.main.label_expanded_sidebar_item,new cljs.core.Keyword(null,"on-change","on-change",-732046149),swap_view], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"sidebar"], null)):null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.menu.menu,new cljs.core.Keyword(null,"model","model",331153215),current_view,new cljs.core.Keyword(null,"items","items",1031954938),ui.views.main.sidebar_items,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),ui.views.main.label_sidebar_item,new cljs.core.Keyword(null,"class","class",-2030961996),"collapsed",new cljs.core.Keyword(null,"on-change","on-change",-732046149),swap_view], null)], null)], null);
});
;})(current_view,sidebar_QMARK_,swap_view))
});
ui.views.main.main_view = (function ui$views$main$main_view(var_args){
var args__19919__auto__ = [];
var len__19912__auto___22826 = arguments.length;
var i__19913__auto___22827 = (0);
while(true){
if((i__19913__auto___22827 < len__19912__auto___22826)){
args__19919__auto__.push((arguments[i__19913__auto___22827]));

var G__22828 = (i__19913__auto___22827 + (1));
i__19913__auto___22827 = G__22828;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.main.main_view.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.main.main_view.cljs$core$IFn$_invoke$arity$variadic = (function (p__22823){
var map__22824 = p__22823;
var map__22824__$1 = ((((!((map__22824 == null)))?((((map__22824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22824):map__22824);
var title = cljs.core.get.call(null,map__22824__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__22824__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.main_toolbar,title], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.main.sidebar], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 0",new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"child","child",623967545),content], null)], null)], null)], null)], null);
});

ui.views.main.main_view.cljs$lang$maxFixedArity = (0);

ui.views.main.main_view.cljs$lang$applyTo = (function (seq22822){
return ui.views.main.main_view.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22822));
});

//# sourceMappingURL=main.js.map?rel=1478388950246