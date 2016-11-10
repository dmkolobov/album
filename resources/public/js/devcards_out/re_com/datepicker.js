// Compiled by ClojureScript 1.8.40 {}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
re_com.datepicker.month_format = cljs_time.format.formatter.call(null,"MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.call(null,"ww");
re_com.datepicker.date_format = cljs_time.format.formatter.call(null,"yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq.call(null,iso8601)){
return cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date","basic-date",1566551506)),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date){
return cljs_time.format.unparse.call(null,re_com.datepicker.month_format,date);
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date){
return cljs_time.core.minus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date){
return cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,(1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.days.call(null,n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var args27410 = [];
var len__19912__auto___27413 = arguments.length;
var i__19913__auto___27414 = (0);
while(true){
if((i__19913__auto___27414 < len__19912__auto___27413)){
args27410.push((arguments[i__19913__auto___27414]));

var G__27415 = (i__19913__auto___27414 + (1));
i__19913__auto___27414 = G__27415;
continue;
} else {
}
break;
}

var G__27412 = args27410.length;
switch (G__27412) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27410.length)].join('')));

}
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.call(null,pred,re_com.util.now__GT_utc.call(null));
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.call(null,pred,date,cljs_time.core.days.call(null,(1)));
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_(pred.call(null,date))){
return date;
} else {
var G__27417 = pred;
var G__27418 = cljs_time.core.minus.call(null,date,period);
var G__27419 = period;
pred = G__27417;
date = G__27418;
period = G__27419;
continue;
}
break;
}
});

re_com.datepicker.previous.cljs$lang$maxFixedArity = 3;
re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return (cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date1),cljs_time.core.year.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date1),cljs_time.core.month.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date1),cljs_time.core.day.call(null,date2)));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__18843__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs_time.core.before_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__18843__auto__ = re_com.datepicker._EQ_date.call(null,date1,date2);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs_time.core.after_QMARK_.call(null,date1,date2);
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Mo","Mo",706762113),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"M",new cljs.core.Keyword(null,"name","name",1843675177),"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"We","We",-705480743),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"W",new cljs.core.Keyword(null,"name","name",1843675177),"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Th","Th",1409372402),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Fr","Fr",1051514106),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"F",new cljs.core.Keyword(null,"name","name",1843675177),"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Sa","Sa",1909936819),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Su","Su",1604604633),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SUN"], null)], null);
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count.call(null,coll);
return cljs.core.take.call(null,c,cljs.core.drop.call(null,cljs.core.mod.call(null,n,c),cljs.core.cycle.call(null,coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__27420_SHARP_){
return cljs.core._EQ_.call(null,cljs_time.core.day_of_week.call(null,p1__27420_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"radius","radius",-2073122258),"4px",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?"none":null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-datepicker datepicker noselect "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style)], null),attr),table_div], null)], null)], null)], null);
});
/**
 * Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(current,p__27421){
var map__27428 = p__27421;
var map__27428__$1 = ((((!((map__27428 == null)))?((((map__27428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27428):map__27428);
var show_weeks_QMARK_ = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var minimum = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var start_of_week = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var prev_date = re_com.datepicker.dec_month.call(null,cljs.core.deref.call(null,current));
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_.call(null,prev_date,minimum):true);
var next_date = re_com.datepicker.inc_month.call(null,cljs.core.deref.call(null,current));
var next_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_.call(null,next_date,maximum):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.conj.call(null,template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("prev "),cljs.core.str((cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled"))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(prev_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,current,prev_date);
} else {
}

return null;
});})(prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-left","i.zmdi.zmdi-chevron-left",-1877271880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"col-span","col-span",-232603210),"5"], null),re_com.datepicker.month_label.call(null,cljs.core.deref.call(null,current))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("next "),cljs.core.str((cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled"))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(next_enabled_QMARK_)){
cljs.core.reset_BANG_.call(null,current,next_date);
} else {
}

return null;
});})(prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-chevron-right","i.zmdi.zmdi-chevron-right",1358259812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)),cljs.core.conj.call(null,template_row,(function (){var iter__19623__auto__ = ((function (prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function re_com$datepicker$table_thead_$_iter__27430(s__27431){
return (new cljs.core.LazySeq(null,((function (prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (){
var s__27431__$1 = s__27431;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27431__$1);
if(temp__4657__auto__){
var s__27431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27431__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__27431__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__27433 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__27432 = (0);
while(true){
if((i__27432 < size__19622__auto__)){
var day = cljs.core._nth.call(null,c__19621__auto__,i__27432);
cljs.core.chunk_append.call(null,b__27433,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__27434 = (i__27432 + (1));
i__27432 = G__27434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27433),re_com$datepicker$table_thead_$_iter__27430.call(null,cljs.core.chunk_rest.call(null,s__27431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27433),null);
}
} else {
var day = cljs.core.first.call(null,s__27431__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)),re_com$datepicker$table_thead_$_iter__27430.call(null,cljs.core.rest.call(null,s__27431__$2)));
}
} else {
return null;
}
break;
}
});})(prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
,null,null));
});})(prev_date,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__27428,map__27428__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
;
return iter__19623__auto__.call(null,re_com.datepicker.rotate.call(null,start_of_week,re_com.datepicker.days_vector));
})())], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return change_callback.call(null,selection);
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__27435,disabled_QMARK_,on_change){
var map__27438 = p__27435;
var map__27438__$1 = ((((!((map__27438 == null)))?((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var attributes = map__27438__$1;
var minimum = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var enabled_min = (cljs.core.truth_(minimum)?re_com.datepicker._GT__EQ_date.call(null,date,minimum):true);
var enabled_max = (cljs.core.truth_(maximum)?re_com.datepicker._LT__EQ_date.call(null,date,maximum):true);
var enabled_day = (function (){var and__18831__auto__ = enabled_min;
if(cljs.core.truth_(and__18831__auto__)){
return enabled_max;
} else {
return and__18831__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not.call(null,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes).call(null,date)):true);
var styles = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.call(null,focus_month,cljs_time.core.month.call(null,date)))?"available":"available off"
)));
var styles__$1 = (cljs.core.truth_((function (){var and__18831__auto__ = selected;
if(cljs.core.truth_(and__18831__auto__)){
return re_com.datepicker._EQ_date.call(null,selected,date);
} else {
return and__18831__auto__;
}
})())?[cljs.core.str(styles),cljs.core.str(" active start-date end-date")].join(''):(cljs.core.truth_((function (){var and__18831__auto__ = today;
if(cljs.core.truth_(and__18831__auto__)){
return re_com.datepicker._EQ_date.call(null,date,today);
} else {
return and__18831__auto__;
}
})())?[cljs.core.str(styles),cljs.core.str(" today")].join(''):styles
));
var on_click = ((function (enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,map__27438,map__27438__$1,attributes,minimum,maximum){
return (function (){
if(cljs.core.truth_((function (){var or__18843__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed.call(null,date,on_change);
}
});})(enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,map__27438,map__27438__$1,attributes,minimum,maximum))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),styles__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,on_click,map__27438,map__27438__$1,attributes,minimum,maximum){
return (function (event){
on_click.call(null);

return null;
});})(enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,styles,styles__$1,on_click,map__27438,map__27438__$1,attributes,minimum,maximum))
], null),cljs_time.core.day.call(null,date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),cljs_time.format.unparse.call(null,re_com.datepicker.week_format,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.datepicker.week_td.call(null,date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.call(null,((function (table_row){
return (function (p1__27440_SHARP_){
return re_com.datepicker.inc_date.call(null,date,p1__27440_SHARP_);
});})(table_row))
,cljs.core.range.call(null,(7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.Keyword(null,"today","today",945271563).cljs$core$IFn$_invoke$arity$1(attributes):null);
return cljs.core.into.call(null,table_row,cljs.core.map.call(null,((function (table_row,row_dates,today){
return (function (p1__27441_SHARP_){
return re_com.datepicker.table_td.call(null,p1__27441_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
});})(table_row,row_dates,today))
,row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(current,selected,attributes,disabled_QMARK_,on_change){
var start_of_week = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.call(null,re_com.datepicker.is_day_pred.call(null,start_of_week),current);
var focus_month = cljs_time.core.month.call(null,current);
var row_start_dates = cljs.core.map.call(null,((function (start_of_week,current_start,focus_month){
return (function (p1__27442_SHARP_){
return re_com.datepicker.inc_date.call(null,current_start,((7) * p1__27442_SHARP_));
});})(start_of_week,current_start,focus_month))
,cljs.core.range.call(null,(6)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.call(null,((function (start_of_week,current_start,focus_month,row_start_dates){
return (function (p1__27443_SHARP_){
return re_com.datepicker.table_tr.call(null,p1__27443_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
});})(start_of_week,current_start,focus_month,row_start_dates))
,row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes):(function (date){
return true;
}));
return cljs.core.merge.call(null,attributes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),selectable_fn,new cljs.core.Keyword(null,"today","today",945271563),re_com.util.now__GT_utc.call(null)], null));
});
re_com.datepicker.datepicker_args_desc = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the selected date. If provided, should pass pred :selectable-fn"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when a new selection is made"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"(fn [date] true)",new cljs.core.Keyword(null,"type","type",1174270348),"pred",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Predicate is passed a date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"goog.date.UtcDateTime",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.goog_date_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(6),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"description","description",-1428560544),"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__19919__auto__ = [];
var len__19912__auto___27453 = arguments.length;
var i__19913__auto___27454 = (0);
while(true){
if((i__19913__auto___27454 < len__19912__auto___27453)){
args__19919__auto__.push((arguments[i__19913__auto___27454]));

var G__27455 = (i__19913__auto___27454 + (1));
i__19913__auto___27454 = G__27455;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__27445){
var map__27446 = p__27445;
var map__27446__$1 = ((((!((map__27446 == null)))?((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
var args = map__27446__$1;
var model = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),args,"datepicker")))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var current = (function (){var current = (function (){var or__18843__auto__ = re_com.util.deref_or_value.call(null,model);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs_time.core.now.call(null);
}
})();
return reagent.core.atom.call(null,cljs_time.core.first_day_of_the_month.call(null,current));
})();
return ((function (current,map__27446,map__27446__$1,args,model){
return (function() { 
var re_com$datepicker$datepicker_component__delegate = function (p__27448){
var map__27451 = p__27448;
var map__27451__$1 = ((((!((map__27451 == null)))?((((map__27451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27451):map__27451);
var properties = map__27451__$1;
var model__$1 = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"model","model",331153215));
var disabled_QMARK_ = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var hide_border_QMARK_ = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var on_change = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var start_of_week = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),(6));
var class$ = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_args_desc),properties,"datepicker")))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc properties \"datepicker\")"));
}

var props_with_defaults = cljs.core.merge.call(null,properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week], null));
var configuration = re_com.datepicker.configure.call(null,props_with_defaults);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-condensed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,current,configuration], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref.call(null,current),re_com.util.deref_or_value.call(null,model__$1),configuration,(((disabled_QMARK_ == null))?false:re_com.util.deref_or_value.call(null,disabled_QMARK_)),on_change], null)], null),hide_border_QMARK_,class$,style,attr], null);
};
var re_com$datepicker$datepicker_component = function (var_args){
var p__27448 = null;
if (arguments.length > 0) {
var G__27456__i = 0, G__27456__a = new Array(arguments.length -  0);
while (G__27456__i < G__27456__a.length) {G__27456__a[G__27456__i] = arguments[G__27456__i + 0]; ++G__27456__i;}
  p__27448 = new cljs.core.IndexedSeq(G__27456__a,0);
} 
return re_com$datepicker$datepicker_component__delegate.call(this,p__27448);};
re_com$datepicker$datepicker_component.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_component.cljs$lang$applyTo = (function (arglist__27457){
var p__27448 = cljs.core.seq(arglist__27457);
return re_com$datepicker$datepicker_component__delegate(p__27448);
});
re_com$datepicker$datepicker_component.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_component__delegate;
return re_com$datepicker$datepicker_component;
})()
;
;})(current,map__27446,map__27446__$1,args,model))
});

re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0);

re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq27444){
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27444));
});
/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"input-group display-flex noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,shown_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control dropdown-button"], null),(((re_com.util.deref_or_value.call(null,model) instanceof goog.date.Date))?cljs_time.format.unparse.call(null,((cljs.core.seq.call(null,format))?cljs_time.format.formatter.call(null,format):re_com.datepicker.date_format),re_com.util.deref_or_value.call(null,model)):"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-button.activator.input-group-addon","span.dropdown-button.activator.input-group-addon",-1049661492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-apps","i.zmdi.zmdi-apps",-641069407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = cljs.core.conj.call(null,re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"yyyy MMM dd",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] a represenatation of a date format. See cljs_time.format"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null));
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__19919__auto__ = [];
var len__19912__auto___27465 = arguments.length;
var i__19913__auto___27466 = (0);
while(true){
if((i__19913__auto___27466 < len__19912__auto___27465)){
args__19919__auto__.push((arguments[i__19913__auto___27466]));

var G__27467 = (i__19913__auto___27466 + (1));
i__19913__auto___27466 = G__27467;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__27459){
var map__27460 = p__27459;
var map__27460__$1 = ((((!((map__27460 == null)))?((((map__27460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27460):map__27460);
var args = map__27460__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.datepicker.datepicker_dropdown_args_desc),args,"datepicker-dropdown")))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-dropdown-args-desc args \"datepicker-dropdown\")"));
}

var shown_QMARK_ = reagent.core.atom.call(null,false);
var cancel_popover = ((function (shown_QMARK_,map__27460,map__27460__$1,args){
return (function (){
return cljs.core.reset_BANG_.call(null,shown_QMARK_,false);
});})(shown_QMARK_,map__27460,map__27460__$1,args))
;
var position = new cljs.core.Keyword(null,"below-left","below-left",1233934732);
return ((function (shown_QMARK_,cancel_popover,position,map__27460,map__27460__$1,args){
return (function() { 
var G__27468__delegate = function (p__27462){
var map__27463 = p__27462;
var map__27463__$1 = ((((!((map__27463 == null)))?((((map__27463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);
var passthrough_args = map__27463__$1;
var model = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"model","model",331153215));
var show_weeks_QMARK_ = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var on_change = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var format = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var no_clip_QMARK_ = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var collapse_on_select = ((function (map__27463,map__27463__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,shown_QMARK_,cancel_popover,position,map__27460,map__27460__$1,args){
return (function (new_model){
cljs.core.reset_BANG_.call(null,shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return on_change.call(null,new_model);
} else {
return null;
}
});})(map__27463,map__27463__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,shown_QMARK_,cancel_popover,position,map__27460,map__27460__$1,args))
;
var passthrough_args__$1 = cljs.core.dissoc.call(null,passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766));
var passthrough_args__$2 = cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null),cljs.core.assoc.call(null,passthrough_args__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select))));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),shown_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),(cljs.core.truth_(show_weeks_QMARK_)?(43):(44)),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(3),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),cancel_popover,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$2)], null)], null);
};
var G__27468 = function (var_args){
var p__27462 = null;
if (arguments.length > 0) {
var G__27469__i = 0, G__27469__a = new Array(arguments.length -  0);
while (G__27469__i < G__27469__a.length) {G__27469__a[G__27469__i] = arguments[G__27469__i + 0]; ++G__27469__i;}
  p__27462 = new cljs.core.IndexedSeq(G__27469__a,0);
} 
return G__27468__delegate.call(this,p__27462);};
G__27468.cljs$lang$maxFixedArity = 0;
G__27468.cljs$lang$applyTo = (function (arglist__27470){
var p__27462 = cljs.core.seq(arglist__27470);
return G__27468__delegate(p__27462);
});
G__27468.cljs$core$IFn$_invoke$arity$variadic = G__27468__delegate;
return G__27468;
})()
;
;})(shown_QMARK_,cancel_popover,position,map__27460,map__27460__$1,args))
});

re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0);

re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq27458){
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27458));
});

//# sourceMappingURL=datepicker.js.map?rel=1478297184769