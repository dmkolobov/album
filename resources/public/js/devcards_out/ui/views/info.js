// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.info');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
ui.views.info.info_button = (function ui$views$info$info_button(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-info",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Info",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-left","below-left",1233934732),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","open-info","images/open-info",-1015437373)], null));
})], null);
});
ui.views.info.display_info = (function ui$views$info$display_info(model){
var vec__22629 = cljs.core.deref.call(null,model);
var vec__22630 = cljs.core.nth.call(null,vec__22629,(0),null);
var path = cljs.core.nth.call(null,vec__22630,(0),null);
var info = cljs.core.nth.call(null,vec__22630,(1),null);
var _ = cljs.core.nth.call(null,vec__22629,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22629,(2),null);
var printed_info = (function (){var sb__19828__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22631_22633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22632_22634 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22631_22633,_STAR_print_fn_STAR_22632_22634,sb__19828__auto__,vec__22629,vec__22630,path,info,_,___$1){
return (function (x__19829__auto__){
return sb__19828__auto__.append(x__19829__auto__);
});})(_STAR_print_newline_STAR_22631_22633,_STAR_print_fn_STAR_22632_22634,sb__19828__auto__,vec__22629,vec__22630,path,info,_,___$1))
;

try{cljs.pprint.pprint.call(null,info);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22632_22634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22631_22633;
}
return [cljs.core.str(sb__19828__auto__)].join('');
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"fullscreen-sidebar",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"size","size",1098693007),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Info"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__22629,vec__22630,path,info,_,___$1,printed_info){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("images","close-info","images/close-info",307468980)], null));
});})(vec__22629,vec__22630,path,info,_,___$1,printed_info))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),printed_info], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null));
});

//# sourceMappingURL=info.js.map?rel=1478388949421