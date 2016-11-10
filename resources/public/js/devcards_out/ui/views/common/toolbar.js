// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.toolbar');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_com.util');
ui.views.common.toolbar.app_gap = (16);
ui.views.common.toolbar.px = (function ui$views$common$toolbar$px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
ui.views.common.toolbar.ribbon_gap = ui.views.common.toolbar.px.call(null,(1.5 * ui.views.common.toolbar.app_gap));
ui.views.common.toolbar.ribbon_padding = [cljs.core.str(ui.views.common.toolbar.px.call(null,ui.views.common.toolbar.app_gap)),cljs.core.str(" "),cljs.core.str(ui.views.common.toolbar.ribbon_gap)].join('');
ui.views.common.toolbar.icon_button = (function ui$views$common$toolbar$icon_button(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26320 = arguments.length;
var i__19943__auto___26321 = (0);
while(true){
if((i__19943__auto___26321 < len__19942__auto___26320)){
args__19949__auto__.push((arguments[i__19943__auto___26321]));

var G__26322 = (i__19943__auto___26321 + (1));
i__19943__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__26317){
var map__26318 = p__26317;
var map__26318__$1 = ((((!((map__26318 == null)))?((((map__26318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26318):map__26318);
var icon = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var position = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var emphasise_QMARK_ = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var on_click = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("action-button "),cljs.core.str((cljs.core.truth_(emphasise_QMARK_)?"emphasis":null))].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),icon,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),label,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),position,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
});

ui.views.common.toolbar.icon_button.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.icon_button.cljs$lang$applyTo = (function (seq26316){
return ui.views.common.toolbar.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26316));
});
ui.views.common.toolbar.menu_button = (function ui$views$common$toolbar$menu_button(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26327 = arguments.length;
var i__19943__auto___26328 = (0);
while(true){
if((i__19943__auto___26328 < len__19942__auto___26327)){
args__19949__auto__.push((arguments[i__19943__auto___26328]));

var G__26329 = (i__19943__auto___26328 + (1));
i__19943__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__26324){
var map__26325 = p__26324;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var icon = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var emphasise_QMARK_ = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var on_click = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-button"),cljs.core.str((cljs.core.truth_(emphasise_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi","i.zmdi",1574581732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
});

ui.views.common.toolbar.menu_button.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.menu_button.cljs$lang$applyTo = (function (seq26323){
return ui.views.common.toolbar.menu_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26323));
});
ui.views.common.toolbar.navbar = (function ui$views$common$toolbar$navbar(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26334 = arguments.length;
var i__19943__auto___26335 = (0);
while(true){
if((i__19943__auto___26335 < len__19942__auto___26334)){
args__19949__auto__.push((arguments[i__19943__auto___26335]));

var G__26336 = (i__19943__auto___26335 + (1));
i__19943__auto___26335 = G__26336;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__26331){
var map__26332 = p__26331;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var class$ = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var model = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"model","model",331153215));
var actions = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var on_change = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var icon_fn = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"icon-fn","icon-fn",-1497534529),new cljs.core.Keyword(null,"icon","icon",1679606541));
var label_fn = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-ribbon "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__26332,map__26332__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (act){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,act),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),cljs.core._EQ_.call(null,id_fn.call(null,act),cljs.core.deref.call(null,model)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26332,map__26332__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (){
return on_change.call(null,act);
});})(map__26332,map__26332__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
], null);
});})(map__26332,map__26332__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
,re_com.util.deref_or_value.call(null,actions)))], null);
});

ui.views.common.toolbar.navbar.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.navbar.cljs$lang$applyTo = (function (seq26330){
return ui.views.common.toolbar.navbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26330));
});
ui.views.common.toolbar.navmenu = (function ui$views$common$toolbar$navmenu(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26341 = arguments.length;
var i__19943__auto___26342 = (0);
while(true){
if((i__19943__auto___26342 < len__19942__auto___26341)){
args__19949__auto__.push((arguments[i__19943__auto___26342]));

var G__26343 = (i__19943__auto___26342 + (1));
i__19943__auto___26342 = G__26343;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic = (function (p__26338){
var map__26339 = p__26338;
var map__26339__$1 = ((((!((map__26339 == null)))?((((map__26339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26339):map__26339);
var class$ = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var model = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"model","model",331153215));
var actions = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var on_change = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var icon_fn = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"icon-fn","icon-fn",-1497534529),new cljs.core.Keyword(null,"icon","icon",1679606541));
var label_fn = cljs.core.get.call(null,map__26339__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("nav-ribbon "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__26339,map__26339__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (act){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.menu_button,new cljs.core.Keyword(null,"icon","icon",1679606541),icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),label_fn.call(null,act),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),cljs.core._EQ_.call(null,cljs.core.deref.call(null,model),id_fn.call(null,act)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26339,map__26339__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn){
return (function (){
return on_change.call(null,act);
});})(map__26339,map__26339__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,act)], null));
});})(map__26339,map__26339__$1,class$,model,actions,on_change,id_fn,icon_fn,label_fn))
,re_com.util.deref_or_value.call(null,actions)))], null);
});

ui.views.common.toolbar.navmenu.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.navmenu.cljs$lang$applyTo = (function (seq26337){
return ui.views.common.toolbar.navmenu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26337));
});
ui.views.common.toolbar.toolbar = (function ui$views$common$toolbar$toolbar(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26348 = arguments.length;
var i__19943__auto___26349 = (0);
while(true){
if((i__19943__auto___26349 < len__19942__auto___26348)){
args__19949__auto__.push((arguments[i__19943__auto___26349]));

var G__26350 = (i__19943__auto___26349 + (1));
i__19943__auto___26349 = G__26350;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__26345){
var map__26346 = p__26345;
var map__26346__$1 = ((((!((map__26346 == null)))?((((map__26346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var action_icon_fn = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"action-icon-fn","action-icon-fn",-1499407779),new cljs.core.Keyword(null,"icon","icon",1679606541));
var action_label_fn = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"action-label-fn","action-label-fn",-1994090817),new cljs.core.Keyword(null,"label","label",1718410804));
var action_id_fn = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"action-id-fn","action-id-fn",-1865342012),new cljs.core.Keyword(null,"id","id",-1388402092));
var nav_tooltip = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"nav-tooltip","nav-tooltip",1212937734));
var on_nav = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"on-nav","on-nav",1358020715));
var actions = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_action = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"on-action","on-action",-894612848));
var class$ = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var nav_icon = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"nav-icon","nav-icon",-1454298860));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("shadow-1 toolbar "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.toolbar.ribbon_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.toolbar.ribbon_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),nav_icon,new cljs.core.Keyword(null,"label","label",1718410804),nav_tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_nav], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null)], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__26346,map__26346__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon){
return (function (act){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.icon_button,new cljs.core.Keyword(null,"icon","icon",1679606541),action_icon_fn.call(null,act),new cljs.core.Keyword(null,"label","label",1718410804),action_label_fn.call(null,act),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26346,map__26346__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon){
return (function (){
return on_action.call(null,act);
});})(map__26346,map__26346__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),action_id_fn.call(null,act)], null));
});})(map__26346,map__26346__$1,action_icon_fn,action_label_fn,action_id_fn,nav_tooltip,on_nav,actions,title,on_action,class$,nav_icon))
,re_com.util.deref_or_value.call(null,actions))))], null);
});

ui.views.common.toolbar.toolbar.cljs$lang$maxFixedArity = (0);

ui.views.common.toolbar.toolbar.cljs$lang$applyTo = (function (seq26344){
return ui.views.common.toolbar.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26344));
});

//# sourceMappingURL=toolbar.js.map?rel=1478582023969