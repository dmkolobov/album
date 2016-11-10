// Compiled by ClojureScript 1.8.40 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__19828__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22087_22089 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22088_22090 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22087_22089,_STAR_print_fn_STAR_22088_22090,sb__19828__auto__){
return (function (x__19829__auto__){
return sb__19828__auto__.append(x__19829__auto__);
});})(_STAR_print_newline_STAR_22087_22089,_STAR_print_fn_STAR_22088_22090,sb__19828__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22088_22090;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22087_22089;
}
return [cljs.core.str(sb__19828__auto__)].join('');
}catch (e22085){if((e22085 instanceof Error)){
var e1 = e22085;
try{return obj.toString();
}catch (e22086){if((e22086 instanceof Error)){
var e2 = e22086;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e22086;

}
}} else {
throw e22085;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_22092 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_22092;
}});

//# sourceMappingURL=utils.js.map?rel=1478297175836