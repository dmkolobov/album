// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.form');
goog.require('cljs.core');
goog.require('ui.views.common.animations');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('re_com.util');
ui.views.common.form.app_gap = (16);
ui.views.common.form.px = (function ui$views$common$form$px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
ui.views.common.form.app_padding = [cljs.core.str(ui.views.common.form.px.call(null,ui.views.common.form.app_gap)),cljs.core.str(" "),cljs.core.str(ui.views.common.form.px.call(null,(ui.views.common.form.app_gap * 1.5)))].join('');
ui.views.common.form.form_header = (function ui$views$common$form$form_header(icon,title,on_edit){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"form-header",new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.form.app_padding,new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.form.px.call(null,(ui.views.common.form.app_gap * 1.5)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_edit], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zmdi","i.icon.zmdi",311225212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null)], null),title], null)], null);
});
ui.views.common.form.form_content = (function ui$views$common$form$form_content(icon,content,on_commit,on_discard){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"form-content-inner",new cljs.core.Keyword(null,"padding","padding",1660304693),ui.views.common.form.app_padding,new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.form.px.call(null,(ui.views.common.form.app_gap * 1.5)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zmdi","i.icon.zmdi",311225212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),icon,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.form.px.call(null,ui.views.common.form.app_gap),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"gap","gap",80255254),ui.views.common.form.px.call(null,(ui.views.common.form.app_gap / (2))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_discard], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Save",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_commit], null)], null)], null)], null)], null)], null)], null);
});
ui.views.common.form.form_overlay = (function ui$views$common$form$form_overlay(on_discard,opacity){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"form-overlay",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("rgba(0,0,0,"),cljs.core.str(opacity),cljs.core.str("")].join('')], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_discard], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),""], null)], null);
});
ui.views.common.form.transition = reagent.core.adapt_react_class.call(null,React.addons.TransitionGroup);
ui.views.common.form.form_transition = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),(function (cb){
var owner = this;
(reagent.core.dom_node.call(null,owner)["style"]["position"] = "absolute");

return setTimeout(cb,(1600));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (c){
return c;
})], null));
ui.views.common.form.attr_form = (function ui$views$common$form$attr_form(var_args){
var args__19949__auto__ = [];
var len__19942__auto___61929 = arguments.length;
var i__19943__auto___61930 = (0);
while(true){
if((i__19943__auto___61930 < len__19942__auto___61929)){
args__19949__auto__.push((arguments[i__19943__auto___61930]));

var G__61931 = (i__19943__auto___61930 + (1));
i__19943__auto___61930 = G__61931;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.form.attr_form.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.form.attr_form.cljs$core$IFn$_invoke$arity$variadic = (function (p__61923){
var map__61924 = p__61923;
var map__61924__$1 = ((((!((map__61924 == null)))?((((map__61924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61924):map__61924);
var model = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_commit = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"on-commit","on-commit",551275063));
var content_fn = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"content-fn","content-fn",-1280686114));
var form_fn = cljs.core.get.call(null,map__61924__$1,new cljs.core.Keyword(null,"form-fn","form-fn",813273806));
var local_model = reagent.core.atom.call(null,cljs.core.deref.call(null,model));
var edit_QMARK_ = reagent.core.atom.call(null,false);
var commit_BANG_ = ((function (local_model,edit_QMARK_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn){
return (function (){
on_commit.call(null,cljs.core.deref.call(null,local_model));

return cljs.core.reset_BANG_.call(null,edit_QMARK_,false);
});})(local_model,edit_QMARK_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn))
;
var discard_BANG_ = ((function (local_model,edit_QMARK_,commit_BANG_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn){
return (function (){
cljs.core.reset_BANG_.call(null,local_model,cljs.core.deref.call(null,model));

return cljs.core.reset_BANG_.call(null,edit_QMARK_,false);
});})(local_model,edit_QMARK_,commit_BANG_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn))
;
var edit_BANG_ = ((function (local_model,edit_QMARK_,commit_BANG_,discard_BANG_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn){
return (function (){
return cljs.core.reset_BANG_.call(null,edit_QMARK_,true);
});})(local_model,edit_QMARK_,commit_BANG_,discard_BANG_,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn))
;
var watch_id = cljs.core.gensym.call(null);
cljs.core.add_watch.call(null,model,watch_id,((function (local_model,edit_QMARK_,commit_BANG_,discard_BANG_,edit_BANG_,watch_id,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn){
return (function (_,___$1,___$2,v){
return cljs.core.reset_BANG_.call(null,local_model,v);
});})(local_model,edit_QMARK_,commit_BANG_,discard_BANG_,edit_BANG_,watch_id,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn))
);

return ((function (local_model,edit_QMARK_,commit_BANG_,discard_BANG_,edit_BANG_,watch_id,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn){
return (function() { 
var G__61932__delegate = function (p__61926){
var map__61927 = p__61926;
var map__61927__$1 = ((((!((map__61927 == null)))?((((map__61927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61927):map__61927);
var icon = cljs.core.get.call(null,map__61927__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var class$ = cljs.core.get.call(null,map__61927__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var overlay_opacity = cljs.core.get.call(null,map__61927__$1,new cljs.core.Keyword(null,"overlay-opacity","overlay-opacity",-1938296818));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("form "),cljs.core.str(class$),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,edit_QMARK_))?" active":null))].join(''),new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__18861__auto__ = cljs.core.deref.call(null,edit_QMARK_);
if(cljs.core.truth_(and__18861__auto__)){
return overlay_opacity;
} else {
return and__18861__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.form_overlay,discard_BANG_,overlay_opacity], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.form_header,icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_fn,local_model], null),edit_BANG_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"form-content"], null),(cljs.core.truth_(cljs.core.deref.call(null,edit_QMARK_))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.form_transition,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.form.form_content,icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_fn,local_model], null),commit_BANG_,discard_BANG_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"content"], null)):null)], null)], null)], null);
};
var G__61932 = function (var_args){
var p__61926 = null;
if (arguments.length > 0) {
var G__61933__i = 0, G__61933__a = new Array(arguments.length -  0);
while (G__61933__i < G__61933__a.length) {G__61933__a[G__61933__i] = arguments[G__61933__i + 0]; ++G__61933__i;}
  p__61926 = new cljs.core.IndexedSeq(G__61933__a,0);
} 
return G__61932__delegate.call(this,p__61926);};
G__61932.cljs$lang$maxFixedArity = 0;
G__61932.cljs$lang$applyTo = (function (arglist__61934){
var p__61926 = cljs.core.seq(arglist__61934);
return G__61932__delegate(p__61926);
});
G__61932.cljs$core$IFn$_invoke$arity$variadic = G__61932__delegate;
return G__61932;
})()
;
;})(local_model,edit_QMARK_,commit_BANG_,discard_BANG_,edit_BANG_,watch_id,map__61924,map__61924__$1,model,on_commit,content_fn,form_fn))
});

ui.views.common.form.attr_form.cljs$lang$maxFixedArity = (0);

ui.views.common.form.attr_form.cljs$lang$applyTo = (function (seq61922){
return ui.views.common.form.attr_form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61922));
});

//# sourceMappingURL=form.js.map?rel=1478768962473