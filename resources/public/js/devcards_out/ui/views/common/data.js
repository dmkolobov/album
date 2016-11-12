// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.data');
goog.require('cljs.core');
goog.require('ui.views.common.form');
goog.require('re_com.util');
goog.require('re_com.core');
goog.require('ui.views.common.animations');
goog.require('cljs_time.extend');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
ui.views.common.data.app_gap = (16);
ui.views.common.data.px = (function ui$views$common$data$px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
ui.views.common.data.date_only = cljs_time.format.formatter.call(null,"MMM dd, yyyy");
ui.views.common.data.day_time = cljs_time.format.formatter.call(null,"EEE hh:mm a");
ui.views.common.data.attribute = (function ui$views$common$data$attribute(var_args){
var args__19949__auto__ = [];
var len__19942__auto___48486 = arguments.length;
var i__19943__auto___48487 = (0);
while(true){
if((i__19943__auto___48487 < len__19942__auto___48486)){
args__19949__auto__.push((arguments[i__19943__auto___48487]));

var G__48488 = (i__19943__auto___48487 + (1));
i__19943__auto___48487 = G__48488;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.data.attribute.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.data.attribute.cljs$core$IFn$_invoke$arity$variadic = (function (p__48483){
var map__48484 = p__48483;
var map__48484__$1 = ((((!((map__48484 == null)))?((((map__48484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48484):map__48484);
var label = cljs.core.get.call(null,map__48484__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.call(null,map__48484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"date-attribute",new cljs.core.Keyword(null,"gap","gap",80255254),"0.7em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"class","class",-2030961996),"attr-label",new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.data.px.call(null,(ui.views.common.data.app_gap / (4))),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),children], null)], null)], null);
});

ui.views.common.data.attribute.cljs$lang$maxFixedArity = (0);

ui.views.common.data.attribute.cljs$lang$applyTo = (function (seq48482){
return ui.views.common.data.attribute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48482));
});
ui.views.common.data.pad_string = (function ui$views$common$data$pad_string(n,s){
if((cljs.core.count.call(null,s) >= n)){
return s;
} else {
return [cljs.core.str(clojure.string.join.call(null,cljs.core.repeat.call(null,(n - cljs.core.count.call(null,s)),"0"))),cljs.core.str(s)].join('');
}
});
ui.views.common.data.set_hour_BANG_ = (function ui$views$common$data$set_hour_BANG_(model,hour){
return cljs.core.swap_BANG_.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"hour","hour",-555989214),hour);
});
ui.views.common.data.toggle_ampm_BANG_ = (function ui$views$common$data$toggle_ampm_BANG_(model){
return cljs.core.swap_BANG_.call(null,model,cljs.core.update,new cljs.core.Keyword(null,"hour","hour",-555989214),(function (p1__48489_SHARP_){
return cljs.core.mod.call(null,((12) + p1__48489_SHARP_),(24));
}));
});
ui.views.common.data.hour_input = (function ui$views$common$data$hour_input(model){
var hour = cljs.core.get.call(null,cljs.core.deref.call(null,model),new cljs.core.Keyword(null,"hour","hour",-555989214));
var rem = cljs.core.mod.call(null,hour,(12));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),ui.views.common.data.pad_string.call(null,(2),[cljs.core.str(((cljs.core._EQ_.call(null,rem,(0)))?(12):rem))].join('')),new cljs.core.Keyword(null,"width","width",-384071477),"1.3em",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (hour,rem){
return (function (p1__48490_SHARP_){
return ui.views.common.data.set_hour_BANG_.call(null,model,parseInt(p1__48490_SHARP_));
});})(hour,rem))
], null);
});
ui.views.common.data.ampm_input = (function ui$views$common$data$ampm_input(model){
var hour = cljs.core.get.call(null,cljs.core.deref.call(null,model),new cljs.core.Keyword(null,"hour","hour",-555989214));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),((((hour / (12)) < (1)))?"AM":"PM"),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,ui.views.common.data.toggle_ampm_BANG_,model)], null)], null);
});
ui.views.common.data.date_form = (function ui$views$common$data$date_form(model){
var set_attr = (function (attr,val){
return cljs.core.swap_BANG_.call(null,model,cljs.core.assoc,attr,parseInt(val));
});
var input = ((function (set_attr){
return (function() { 
var G__48497__delegate = function (attr,width,p__48494){
var map__48495 = p__48494;
var map__48495__$1 = ((((!((map__48495 == null)))?((((map__48495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48495):map__48495);
var pad = cljs.core.get.call(null,map__48495__$1,new cljs.core.Keyword(null,"pad","pad",-36734541));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),ui.views.common.data.pad_string.call(null,pad,[cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,model),attr))].join('')),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,set_attr,attr)], null);
};
var G__48497 = function (attr,width,var_args){
var p__48494 = null;
if (arguments.length > 2) {
var G__48498__i = 0, G__48498__a = new Array(arguments.length -  2);
while (G__48498__i < G__48498__a.length) {G__48498__a[G__48498__i] = arguments[G__48498__i + 2]; ++G__48498__i;}
  p__48494 = new cljs.core.IndexedSeq(G__48498__a,0);
} 
return G__48497__delegate.call(this,attr,width,p__48494);};
G__48497.cljs$lang$maxFixedArity = 2;
G__48497.cljs$lang$applyTo = (function (arglist__48499){
var attr = cljs.core.first(arglist__48499);
arglist__48499 = cljs.core.next(arglist__48499);
var width = cljs.core.first(arglist__48499);
var p__48494 = cljs.core.rest(arglist__48499);
return G__48497__delegate(attr,width,p__48494);
});
G__48497.cljs$core$IFn$_invoke$arity$variadic = G__48497__delegate;
return G__48497;
})()
;})(set_attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.data.px.call(null,ui.views.common.data.app_gap),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.attribute,new cljs.core.Keyword(null,"label","label",1718410804),"Year",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.Keyword(null,"year","year",335913393),"2.5em"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.attribute,new cljs.core.Keyword(null,"label","label",1718410804),"Month",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.Keyword(null,"month","month",-1960248533),"1.35em",new cljs.core.Keyword(null,"pad","pad",-36734541),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.attribute,new cljs.core.Keyword(null,"label","label",1718410804),"Day",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.Keyword(null,"day","day",-274800446),"1.35em",new cljs.core.Keyword(null,"pad","pad",-36734541),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.attribute,new cljs.core.Keyword(null,"label","label",1718410804),"Time",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.hour_input,model,cljs.core.partial.call(null,set_attr,new cljs.core.Keyword(null,"hour","hour",-555989214))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),":",new cljs.core.Keyword(null,"class","class",-2030961996),"time-sep"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.Keyword(null,"minute","minute",-642875969),"1.35em",new cljs.core.Keyword(null,"pad","pad",-36734541),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.ampm_input,model], null)], null)], null)], null)], null);
});
ui.views.common.data.date_display = (function ui$views$common$data$date_display(model){
var map__48502 = cljs.core.deref.call(null,model);
var map__48502__$1 = ((((!((map__48502 == null)))?((((map__48502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48502):map__48502);
var year = cljs.core.get.call(null,map__48502__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.call(null,map__48502__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.call(null,map__48502__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__48502__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__48502__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var date = cljs_time.core.date_time.call(null,year,month,day,hour,minute);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.data.px.call(null,(ui.views.common.data.app_gap / (4))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs_time.format.unparse.call(null,ui.views.common.data.date_only,date),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"class","class",-2030961996),"date-label",new cljs.core.Keyword(null,"label","label",1718410804),cljs_time.format.unparse.call(null,ui.views.common.data.day_time,date)], null)], null)], null);
});
ui.views.common.data.date_field = (function ui$views$common$data$date_field(var_args){
var args__19949__auto__ = [];
var len__19942__auto___48508 = arguments.length;
var i__19943__auto___48509 = (0);
while(true){
if((i__19943__auto___48509 < len__19942__auto___48508)){
args__19949__auto__.push((arguments[i__19943__auto___48509]));

var G__48510 = (i__19943__auto___48509 + (1));
i__19943__auto___48509 = G__48510;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.data.date_field.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.data.date_field.cljs$core$IFn$_invoke$arity$variadic = (function (p__48505){
var map__48506 = p__48505;
var map__48506__$1 = ((((!((map__48506 == null)))?((((map__48506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48506):map__48506);
var class$ = cljs.core.get.call(null,map__48506__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var model = cljs.core.get.call(null,map__48506__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__48506__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.attr_form,new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-calendar",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"on-commit","on-commit",551275063),on_change,new cljs.core.Keyword(null,"content-fn","content-fn",-1280686114),ui.views.common.data.date_display,new cljs.core.Keyword(null,"form-fn","form-fn",813273806),ui.views.common.data.date_form], null);
});

ui.views.common.data.date_field.cljs$lang$maxFixedArity = (0);

ui.views.common.data.date_field.cljs$lang$applyTo = (function (seq48504){
return ui.views.common.data.date_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48504));
});

//# sourceMappingURL=data.js.map?rel=1478934890427