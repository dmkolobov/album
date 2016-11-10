// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.toolbar');
goog.require('cljs.core');
goog.require('re_com.core');
ui.views.common.toolbar.app_gap = (16);
ui.views.common.toolbar.px = (function ui$views$common$toolbar$px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
ui.views.common.toolbar.ribbon_gap = ui.views.common.toolbar.px.call(null,(1.5 * ui.views.common.toolbar.app_gap));
ui.views.common.toolbar.ribbon_padding = [cljs.core.str(ui.views.common.toolbar.px.call(null,ui.views.common.toolbar.app_gap)),cljs.core.str(" "),cljs.core.str(ui.views.common.toolbar.ribbon_gap)].join('');
ui.views.common.toolbar.icon_button = (function ui$views$common$toolbar$icon_button(var_args){
var args__19919__auto__ = [];
var len__19912__auto___38984 = arguments.length;
var i__19913__auto___38985 = (0);
while(true){
if((i__19913__auto___38985 < len__19912__auto___38984)){
args__19919__auto__.push((arguments[i__19913__auto___38985]));

var G__38986 = (i__19913__auto___38985 + (1));
i__19913__auto___38985 = G__38986;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__38981){
var map__38982 = p__38981;
var map__38982__$1 = ((((!((map__38982 == null)))?((((map__38982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38982):map__38982);
var icon = cljs.core.get.call(null,map__38982__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__38982__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var position = cljs.core.get.call(null,map__38982__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var emphasise_QMARK_ = cljs.core.get.call(null,map__38982__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var on_click = cljs.core.get.call(null,map__38982__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("action-button "),cljs.core.str((cljs.core.truth_(emphasise_QMARK_)?"emphasis":null))].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),icon,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),label,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),position,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
});

ui.views.common.toolbar.icon_button.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.icon_button.cljs$lang$applyTo = (function (seq38980){
return ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38980));
});
ui.views.common.toolbar.menu_button = (function ui$views$common$toolbar$menu_button(var_args){
var args__19919__auto__ = [];
var len__19912__auto___38991 = arguments.length;
var i__19913__auto___38992 = (0);
while(true){
if((i__19913__auto___38992 < len__19912__auto___38991)){
args__19919__auto__.push((arguments[i__19913__auto___38992]));

var G__38993 = (i__19913__auto___38992 + (1));
i__19913__auto___38992 = G__38993;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__38988){
var map__38989 = p__38988;
var map__38989__$1 = ((((!((map__38989 == null)))?((((map__38989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38989):map__38989);
var icon = cljs.core.get.call(null,map__38989__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__38989__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var emphasise_QMARK_ = cljs.core.get.call(null,map__38989__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var on_click = cljs.core.get.call(null,map__38989__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-button"),cljs.core.str((cljs.core.truth_(emphasise_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi","i.zmdi",1574581732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
});

ui.views.common.toolbar.menu_button.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.menu_button.cljs$lang$applyTo = (function (seq38987){
return ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38987));
});
ui.views.common.toolbar.navbar = (function ui$views$common$toolbar$navbar(var_args){
var args__19919__auto__ = [];
var len__19912__auto___38998 = arguments.length;
var i__19913__auto___38999 = (0);
while(true){
if((i__19913__auto___38999 < len__19912__auto___38998)){
args__19919__auto__.push((arguments[i__19913__auto___38999]));

var G__39000 = (i__19913__auto___38999 + (1));
i__19913__auto___38999 = G__39000;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__38995){
var map__38996 = p__38995;
var map__38996__$1 = ((((!((map__38996 == null)))?((((map__38996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38996):map__38996);
var class$ = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var model = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"model","model",331153215));
var actions = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var on_change = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var icon_fn = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"icon-fn","icon-fn",-1497534529),new cljs.core.Keyword(null,"icon","icon",1679606541));
var label_fn = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-ribbon "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__38996,map__38996__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (act){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,act),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),cljs.core._EQ_.call(null,id_fn.call(null,act),cljs.core.deref.call(null,model)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__38996,map__38996__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (){
return on_change.call(null,act);
});})(map__38996,map__38996__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
], null);
});})(map__38996,map__38996__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
,cljs.core.deref.call(null,actions)))], null);
});

ui.views.common.toolbar.navbar.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.navbar.cljs$lang$applyTo = (function (seq38994){
return ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38994));
});
ui.views.common.toolbar.navmenu = (function ui$views$common$toolbar$navmenu(var_args){
var args__19919__auto__ = [];
var len__19912__auto___39005 = arguments.length;
var i__19913__auto___39006 = (0);
while(true){
if((i__19913__auto___39006 < len__19912__auto___39005)){
args__19919__auto__.push((arguments[i__19913__auto___39006]));

var G__39007 = (i__19913__auto___39006 + (1));
i__19913__auto___39006 = G__39007;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic = (function (p__39002){
var map__39003 = p__39002;
var map__39003__$1 = ((((!((map__39003 == null)))?((((map__39003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39003):map__39003);
var class$ = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var model = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"model","model",331153215));
var actions = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var on_change = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var icon_fn = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"icon-fn","icon-fn",-1497534529),new cljs.core.Keyword(null,"icon","icon",1679606541));
var label_fn = cljs.core.get.call(null,map__39003__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-ribbon "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__39003,map__39003__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (act){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.menu_button,new cljs.core.Keyword(null,"icon","icon",1679606541),icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,act),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),cljs.core._EQ_.call(null,cljs.core.deref.call(null,model),id_fn.call(null,act)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__39003,map__39003__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (){
return on_change.call(null,act);
});})(map__39003,map__39003__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,act)], null));
});})(map__39003,map__39003__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
,cljs.core.deref.call(null,actions)))], null);
});

ui.views.common.toolbar.navmenu.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.navmenu.cljs$lang$applyTo = (function (seq39001){
return ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39001));
});
ui.views.common.toolbar.toolbar = (function ui$views$common$toolbar$toolbar(var_args){
var args__19919__auto__ = [];
var len__19912__auto___39012 = arguments.length;
var i__19913__auto___39013 = (0);
while(true){
if((i__19913__auto___39013 < len__19912__auto___39012)){
args__19919__auto__.push((arguments[i__19913__auto___39013]));

var G__39014 = (i__19913__auto___39013 + (1));
i__19913__auto___39013 = G__39014;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__39009){
var map__39010 = p__39009;
var map__39010__$1 = ((((!((map__39010 == null)))?((((map__39010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39010):map__39010);
var action_icon_fn = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"action-icon-fn","action-icon-fn",-1499407779),new cljs.core.Keyword(null,"icon","icon",1679606541));
var action_label_fn = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"action-label-fn","action-label-fn",-1994090817),new cljs.core.Keyword(null,"label","label",1718410804));
var action_id_fn = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"action-id-fn","action-id-fn",-1865342012),new cljs.core.Keyword(null,"id","id",-1388402092));
var nav_tooltip = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"nav-tooltip","nav-tooltip",1212937734));
var on_nav = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"on-nav","on-nav",1358020715));
var actions = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_action = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"on-action","on-action",-894612848));
var class$ = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var nav_icon = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"nav-icon","nav-icon",-1454298860));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("shadow-1 toolbar "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),nav_icon,new cljs.core.Keyword(null,"label","label",1718410804),nav_tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_nav], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null)], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__39010,map__39010__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon){
return (function (act){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),action_icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),action_label_fn.call(null,act),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__39010,map__39010__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon){
return (function (){
return on_action.call(null,act);
});})(map__39010,map__39010__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),action_id_fn.call(null,act)], null));
});})(map__39010,map__39010__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon))
,cljs.core.deref.call(null,actions))))], null);
});

ui.views.common.toolbar.toolbar.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.toolbar.cljs$lang$applyTo = (function (seq39008){
return ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39008));
});

//# sourceMappingURL=toolbar.js.map?rel=1478378320744