// Compiled by ClojureScript 1.8.40 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18843__auto__ = (function (){var and__18831__auto__ = typeof Symbol !== 'undefined';
if(and__18831__auto__){
var and__18831__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18831__auto____$1){
var and__18831__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18831__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18831__auto____$2;
}
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})();
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__29270_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__29270_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args29271 = [];
var len__19912__auto___29274 = arguments.length;
var i__19913__auto___29275 = (0);
while(true){
if((i__19913__auto___29275 < len__19912__auto___29274)){
args29271.push((arguments[i__19913__auto___29275]));

var G__29276 = (i__19913__auto___29275 + (1));
i__19913__auto___29275 = G__29276;
continue;
} else {
}
break;
}

var G__29273 = args29271.length;
switch (G__29273) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29271.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18831__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18831__auto__){
var map__29284 = c;
var map__29284__$1 = ((((!((map__29284 == null)))?((((map__29284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);
var path = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18831__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__28516__auto___29290 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18843__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__28516__auto___29290);
}

var seq__29286_29291 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29287_29292 = null;
var count__29288_29293 = (0);
var i__29289_29294 = (0);
while(true){
if((i__29289_29294 < count__29288_29293)){
var property__28517__auto___29295 = cljs.core._nth.call(null,chunk__29287_29292,i__29289_29294);
if(cljs.core.truth_((base__28516__auto___29290[property__28517__auto___29295]))){
(devcards.core.CodeHighlight.prototype[property__28517__auto___29295] = (base__28516__auto___29290[property__28517__auto___29295]));
} else {
}

var G__29296 = seq__29286_29291;
var G__29297 = chunk__29287_29292;
var G__29298 = count__29288_29293;
var G__29299 = (i__29289_29294 + (1));
seq__29286_29291 = G__29296;
chunk__29287_29292 = G__29297;
count__29288_29293 = G__29298;
i__29289_29294 = G__29299;
continue;
} else {
var temp__4657__auto___29300 = cljs.core.seq.call(null,seq__29286_29291);
if(temp__4657__auto___29300){
var seq__29286_29301__$1 = temp__4657__auto___29300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29286_29301__$1)){
var c__19654__auto___29302 = cljs.core.chunk_first.call(null,seq__29286_29301__$1);
var G__29303 = cljs.core.chunk_rest.call(null,seq__29286_29301__$1);
var G__29304 = c__19654__auto___29302;
var G__29305 = cljs.core.count.call(null,c__19654__auto___29302);
var G__29306 = (0);
seq__29286_29291 = G__29303;
chunk__29287_29292 = G__29304;
count__29288_29293 = G__29305;
i__29289_29294 = G__29306;
continue;
} else {
var property__28517__auto___29307 = cljs.core.first.call(null,seq__29286_29301__$1);
if(cljs.core.truth_((base__28516__auto___29290[property__28517__auto___29307]))){
(devcards.core.CodeHighlight.prototype[property__28517__auto___29307] = (base__28516__auto___29290[property__28517__auto___29307]));
} else {
}

var G__29308 = cljs.core.next.call(null,seq__29286_29301__$1);
var G__29309 = null;
var G__29310 = (0);
var G__29311 = (0);
seq__29286_29291 = G__29308;
chunk__29287_29292 = G__29309;
count__29288_29293 = G__29310;
i__29289_29294 = G__29311;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19769__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19771__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19771__auto__,method_table__19767__auto__,prefer_table__19768__auto__,method_cache__19769__auto__,cached_hierarchy__19770__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29312){
var map__29313 = p__29312;
var map__29313__$1 = ((((!((map__29313 == null)))?((((map__29313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29313):map__29313);
var content = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__29315){
var map__29316 = p__29315;
var map__29316__$1 = ((((!((map__29316 == null)))?((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var block = map__29316__$1;
var content = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19919__auto__ = [];
var len__19912__auto___29319 = arguments.length;
var i__19913__auto___29320 = (0);
while(true){
if((i__19913__auto___29320 < len__19912__auto___29319)){
args__19919__auto__.push((arguments[i__19913__auto___29320]));

var G__29321 = (i__19913__auto___29320 + (1));
i__19913__auto___29320 = G__29321;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq29318){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29318));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__29323 = devcards.system.devcards_rendered_card_class;
var G__29323__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__29323),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__29323);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__29323__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__29323__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args29324 = [];
var len__19912__auto___29332 = arguments.length;
var i__19913__auto___29333 = (0);
while(true){
if((i__19913__auto___29333 < len__19912__auto___29332)){
args29324.push((arguments[i__19913__auto___29333]));

var G__29334 = (i__19913__auto___29333 + (1));
i__19913__auto___29333 = G__29334;
continue;
} else {
}
break;
}

var G__29326 = args29324.length;
switch (G__29326) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29324.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__29327 = card;
var map__29327__$1 = ((((!((map__29327 == null)))?((((map__29327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29327):map__29327);
var path = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__29327__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__29327,map__29327__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__29327,map__29327__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs29329 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29329))?sablono.interpreter.attributes.call(null,attrs29329):null),((cljs.core.map_QMARK_.call(null,attrs29329))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29329)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19506__auto__ = (((this$ == null))?null:this$);
var m__19507__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,this$,devcard_opts);
} else {
var m__19507__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19506__auto__ = (((this$ == null))?null:this$);
var m__19507__auto__ = (devcards.core._devcard[goog.typeOf(x__19506__auto__)]);
if(!((m__19507__auto__ == null))){
return m__19507__auto__.call(null,this$,devcard_opts);
} else {
var m__19507__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19507__auto____$1 == null))){
return m__19507__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__28516__auto___29341 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs29336 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29336))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs29336)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs29336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29336)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__28516__auto___29341);
}

var seq__29337_29342 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29338_29343 = null;
var count__29339_29344 = (0);
var i__29340_29345 = (0);
while(true){
if((i__29340_29345 < count__29339_29344)){
var property__28517__auto___29346 = cljs.core._nth.call(null,chunk__29338_29343,i__29340_29345);
if(cljs.core.truth_((base__28516__auto___29341[property__28517__auto___29346]))){
(devcards.core.DontUpdate.prototype[property__28517__auto___29346] = (base__28516__auto___29341[property__28517__auto___29346]));
} else {
}

var G__29347 = seq__29337_29342;
var G__29348 = chunk__29338_29343;
var G__29349 = count__29339_29344;
var G__29350 = (i__29340_29345 + (1));
seq__29337_29342 = G__29347;
chunk__29338_29343 = G__29348;
count__29339_29344 = G__29349;
i__29340_29345 = G__29350;
continue;
} else {
var temp__4657__auto___29351 = cljs.core.seq.call(null,seq__29337_29342);
if(temp__4657__auto___29351){
var seq__29337_29352__$1 = temp__4657__auto___29351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29337_29352__$1)){
var c__19654__auto___29353 = cljs.core.chunk_first.call(null,seq__29337_29352__$1);
var G__29354 = cljs.core.chunk_rest.call(null,seq__29337_29352__$1);
var G__29355 = c__19654__auto___29353;
var G__29356 = cljs.core.count.call(null,c__19654__auto___29353);
var G__29357 = (0);
seq__29337_29342 = G__29354;
chunk__29338_29343 = G__29355;
count__29339_29344 = G__29356;
i__29340_29345 = G__29357;
continue;
} else {
var property__28517__auto___29358 = cljs.core.first.call(null,seq__29337_29352__$1);
if(cljs.core.truth_((base__28516__auto___29341[property__28517__auto___29358]))){
(devcards.core.DontUpdate.prototype[property__28517__auto___29358] = (base__28516__auto___29341[property__28517__auto___29358]));
} else {
}

var G__29359 = cljs.core.next.call(null,seq__29337_29352__$1);
var G__29360 = null;
var G__29361 = (0);
var G__29362 = (0);
seq__29337_29342 = G__29359;
chunk__29338_29343 = G__29360;
count__29339_29344 = G__29361;
i__29340_29345 = G__29362;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18843__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main__$1),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__28516__auto___29369 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18843__auto__ = (function (){var and__18831__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18831__auto__)){
return this$.state;
} else {
return and__18831__auto__;
}
})();
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18831__auto__ = data_atom;
if(cljs.core.truth_(and__18831__auto__)){
return id;
} else {
return and__18831__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__28516__auto___29369);
}

var seq__29365_29370 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29366_29371 = null;
var count__29367_29372 = (0);
var i__29368_29373 = (0);
while(true){
if((i__29368_29373 < count__29367_29372)){
var property__28517__auto___29374 = cljs.core._nth.call(null,chunk__29366_29371,i__29368_29373);
if(cljs.core.truth_((base__28516__auto___29369[property__28517__auto___29374]))){
(devcards.core.DevcardBase.prototype[property__28517__auto___29374] = (base__28516__auto___29369[property__28517__auto___29374]));
} else {
}

var G__29375 = seq__29365_29370;
var G__29376 = chunk__29366_29371;
var G__29377 = count__29367_29372;
var G__29378 = (i__29368_29373 + (1));
seq__29365_29370 = G__29375;
chunk__29366_29371 = G__29376;
count__29367_29372 = G__29377;
i__29368_29373 = G__29378;
continue;
} else {
var temp__4657__auto___29379 = cljs.core.seq.call(null,seq__29365_29370);
if(temp__4657__auto___29379){
var seq__29365_29380__$1 = temp__4657__auto___29379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29365_29380__$1)){
var c__19654__auto___29381 = cljs.core.chunk_first.call(null,seq__29365_29380__$1);
var G__29382 = cljs.core.chunk_rest.call(null,seq__29365_29380__$1);
var G__29383 = c__19654__auto___29381;
var G__29384 = cljs.core.count.call(null,c__19654__auto___29381);
var G__29385 = (0);
seq__29365_29370 = G__29382;
chunk__29366_29371 = G__29383;
count__29367_29372 = G__29384;
i__29368_29373 = G__29385;
continue;
} else {
var property__28517__auto___29386 = cljs.core.first.call(null,seq__29365_29380__$1);
if(cljs.core.truth_((base__28516__auto___29369[property__28517__auto___29386]))){
(devcards.core.DevcardBase.prototype[property__28517__auto___29386] = (base__28516__auto___29369[property__28517__auto___29386]));
} else {
}

var G__29387 = cljs.core.next.call(null,seq__29365_29380__$1);
var G__29388 = null;
var G__29389 = (0);
var G__29390 = (0);
seq__29365_29370 = G__29387;
chunk__29366_29371 = G__29388;
count__29367_29372 = G__29389;
i__29368_29373 = G__29390;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__28516__auto___29395 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18831__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18831__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__28516__auto___29395);
}

var seq__29391_29396 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29392_29397 = null;
var count__29393_29398 = (0);
var i__29394_29399 = (0);
while(true){
if((i__29394_29399 < count__29393_29398)){
var property__28517__auto___29400 = cljs.core._nth.call(null,chunk__29392_29397,i__29394_29399);
if(cljs.core.truth_((base__28516__auto___29395[property__28517__auto___29400]))){
(devcards.core.DomComponent.prototype[property__28517__auto___29400] = (base__28516__auto___29395[property__28517__auto___29400]));
} else {
}

var G__29401 = seq__29391_29396;
var G__29402 = chunk__29392_29397;
var G__29403 = count__29393_29398;
var G__29404 = (i__29394_29399 + (1));
seq__29391_29396 = G__29401;
chunk__29392_29397 = G__29402;
count__29393_29398 = G__29403;
i__29394_29399 = G__29404;
continue;
} else {
var temp__4657__auto___29405 = cljs.core.seq.call(null,seq__29391_29396);
if(temp__4657__auto___29405){
var seq__29391_29406__$1 = temp__4657__auto___29405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29391_29406__$1)){
var c__19654__auto___29407 = cljs.core.chunk_first.call(null,seq__29391_29406__$1);
var G__29408 = cljs.core.chunk_rest.call(null,seq__29391_29406__$1);
var G__29409 = c__19654__auto___29407;
var G__29410 = cljs.core.count.call(null,c__19654__auto___29407);
var G__29411 = (0);
seq__29391_29396 = G__29408;
chunk__29392_29397 = G__29409;
count__29393_29398 = G__29410;
i__29394_29399 = G__29411;
continue;
} else {
var property__28517__auto___29412 = cljs.core.first.call(null,seq__29391_29406__$1);
if(cljs.core.truth_((base__28516__auto___29395[property__28517__auto___29412]))){
(devcards.core.DomComponent.prototype[property__28517__auto___29412] = (base__28516__auto___29395[property__28517__auto___29412]));
} else {
}

var G__29413 = cljs.core.next.call(null,seq__29391_29406__$1);
var G__29414 = null;
var G__29415 = (0);
var G__29416 = (0);
seq__29391_29396 = G__29413;
chunk__29392_29397 = G__29414;
count__29393_29398 = G__29415;
i__29394_29399 = G__29416;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18843__auto__ = x === true;
if(or__18843__auto__){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = x === false;
if(or__18843__auto____$1){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = (x == null);
if(or__18843__auto____$2){
return or__18843__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18843__auto__ = typeof x === 'string';
if(or__18843__auto__){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = (x == null);
if(or__18843__auto____$1){
return or__18843__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18843__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__29417_SHARP_){
return !(p1__29417_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__29426 = opts;
var map__29426__$1 = ((((!((map__29426 == null)))?((((map__29426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29426):map__29426);
var name = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18843__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18843__auto__){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = (options == null);
if(or__18843__auto____$1){
return or__18843__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18843__auto__ = (initial_data == null);
if(or__18843__auto__){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18843__auto____$1){
return or__18843__auto____$1;
} else {
var or__18843__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18843__auto____$2){
return or__18843__auto____$2;
} else {
var or__18843__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18843__auto____$3){
return or__18843__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__29426,map__29426__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__29418_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__29418_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__29426,map__29426__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs29434 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29434))?sablono.interpreter.attributes.call(null,attrs29434):null),((cljs.core.map_QMARK_.call(null,attrs29434))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29434)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs29438 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29438))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs29438)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs29438))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29438)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs29439 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29439))?sablono.interpreter.attributes.call(null,attrs29439):null),((cljs.core.map_QMARK_.call(null,attrs29439))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29439)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs29440 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29440))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs29440)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs29440))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29440)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__29441_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__29441_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k29443,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__29445 = (((k29443 instanceof cljs.core.Keyword))?k29443.fqn:null);
switch (G__29445) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29443,else__19468__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29442){
var self__ = this;
var G__29442__$1 = this;
return (new cljs.core.RecordIter((0),G__29442__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
var self__ = this;
var this__19460__auto____$1 = this;
var h__19278__auto__ = self__.__hash;
if(!((h__19278__auto__ == null))){
return h__19278__auto__;
} else {
var h__19278__auto____$1 = cljs.core.hash_imap.call(null,this__19460__auto____$1);
self__.__hash = h__19278__auto____$1;

return h__19278__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
var self__ = this;
var this__19461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18831__auto__ = other__19462__auto__;
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = (this__19461__auto____$1.constructor === other__19462__auto__.constructor);
if(and__18831__auto____$1){
return cljs.core.equiv_map.call(null,this__19461__auto____$1,other__19462__auto__);
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__29442){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__29446 = cljs.core.keyword_identical_QMARK_;
var expr__29447 = k__19473__auto__;
if(cljs.core.truth_(pred__29446.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29447))){
return (new devcards.core.IdentiyOptions(G__29442,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__29442),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__29442){
var self__ = this;
var this__19464__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__29442,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__29444){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29444),null,cljs.core.dissoc.call(null,G__29444,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__29450){
var map__29453 = p__29450;
var map__29453__$1 = ((((!((map__29453 == null)))?((((map__29453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453):map__29453);
var devcard_opts = map__29453__$1;
var options = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__29453,map__29453__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__29453,map__29453__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k29456,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__29458 = (((k29456 instanceof cljs.core.Keyword))?k29456.fqn:null);
switch (G__29458) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29456,else__19468__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29455){
var self__ = this;
var G__29455__$1 = this;
return (new cljs.core.RecordIter((0),G__29455__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
var self__ = this;
var this__19460__auto____$1 = this;
var h__19278__auto__ = self__.__hash;
if(!((h__19278__auto__ == null))){
return h__19278__auto__;
} else {
var h__19278__auto____$1 = cljs.core.hash_imap.call(null,this__19460__auto____$1);
self__.__hash = h__19278__auto____$1;

return h__19278__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
var self__ = this;
var this__19461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18831__auto__ = other__19462__auto__;
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = (this__19461__auto____$1.constructor === other__19462__auto__.constructor);
if(and__18831__auto____$1){
return cljs.core.equiv_map.call(null,this__19461__auto____$1,other__19462__auto__);
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__29455){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__29459 = cljs.core.keyword_identical_QMARK_;
var expr__29460 = k__19473__auto__;
if(cljs.core.truth_(pred__29459.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29460))){
return (new devcards.core.AtomLikeOptions(G__29455,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__29455),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__29455){
var self__ = this;
var this__19464__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__29455,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__29457){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29457),null,cljs.core.dissoc.call(null,G__29457,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19465__auto__,k__19466__auto__){
var self__ = this;
var this__19465__auto____$1 = this;
return cljs.core._lookup.call(null,this__19465__auto____$1,k__19466__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19467__auto__,k29466,else__19468__auto__){
var self__ = this;
var this__19467__auto____$1 = this;
var G__29468 = (((k29466 instanceof cljs.core.Keyword))?k29466.fqn:null);
switch (G__29468) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29466,else__19468__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19479__auto__,writer__19480__auto__,opts__19481__auto__){
var self__ = this;
var this__19479__auto____$1 = this;
var pr_pair__19482__auto__ = ((function (this__19479__auto____$1){
return (function (keyval__19483__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,cljs.core.pr_writer,""," ","",opts__19481__auto__,keyval__19483__auto__);
});})(this__19479__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19480__auto__,pr_pair__19482__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19481__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29465){
var self__ = this;
var G__29465__$1 = this;
return (new cljs.core.RecordIter((0),G__29465__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19463__auto__){
var self__ = this;
var this__19463__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19459__auto__){
var self__ = this;
var this__19459__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19469__auto__){
var self__ = this;
var this__19469__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19460__auto__){
var self__ = this;
var this__19460__auto____$1 = this;
var h__19278__auto__ = self__.__hash;
if(!((h__19278__auto__ == null))){
return h__19278__auto__;
} else {
var h__19278__auto____$1 = cljs.core.hash_imap.call(null,this__19460__auto____$1);
self__.__hash = h__19278__auto____$1;

return h__19278__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19461__auto__,other__19462__auto__){
var self__ = this;
var this__19461__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18831__auto__ = other__19462__auto__;
if(cljs.core.truth_(and__18831__auto__)){
var and__18831__auto____$1 = (this__19461__auto____$1.constructor === other__19462__auto__.constructor);
if(and__18831__auto____$1){
return cljs.core.equiv_map.call(null,this__19461__auto____$1,other__19462__auto__);
} else {
return and__18831__auto____$1;
}
} else {
return and__18831__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19474__auto__,k__19475__auto__){
var self__ = this;
var this__19474__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19475__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19474__auto____$1),self__.__meta),k__19475__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19475__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19472__auto__,k__19473__auto__,G__29465){
var self__ = this;
var this__19472__auto____$1 = this;
var pred__29469 = cljs.core.keyword_identical_QMARK_;
var expr__29470 = k__19473__auto__;
if(cljs.core.truth_(pred__29469.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29470))){
return (new devcards.core.EdnLikeOptions(G__29465,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19473__auto__,G__29465),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19477__auto__){
var self__ = this;
var this__19477__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19464__auto__,G__29465){
var self__ = this;
var this__19464__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__29465,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19470__auto__,entry__19471__auto__){
var self__ = this;
var this__19470__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19471__auto__)){
return cljs.core._assoc.call(null,this__19470__auto____$1,cljs.core._nth.call(null,entry__19471__auto__,(0)),cljs.core._nth.call(null,entry__19471__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19470__auto____$1,entry__19471__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19499__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19499__auto__,writer__19500__auto__){
return cljs.core._write.call(null,writer__19500__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__29467){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29467),null,cljs.core.dissoc.call(null,G__29467,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18831__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18831__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18831__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__29484 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__29484 == null))){
if((false) || (G__29484.devcards$core$IDevcard$)){
return true;
} else {
if((!G__29484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29484);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__29487 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__29487__$1 = ((((!((map__29487 == null)))?((((map__29487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);
var history = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29491 = cljs.core.deref.call(null,history_atom);
var map__29491__$1 = ((((!((map__29491 == null)))?((((map__29491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29491):map__29491);
var history = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29495 = cljs.core.deref.call(null,history_atom);
var map__29495__$1 = ((((!((map__29495 == null)))?((((map__29495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495):map__29495);
var history = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29499 = cljs.core.deref.call(null,history_atom);
var map__29499__$1 = ((((!((map__29499 == null)))?((((map__29499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29499):map__29499);
var history = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18831__auto__ = data_atom;
if(cljs.core.truth_(and__18831__auto__)){
return id;
} else {
return and__18831__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__29501){
var map__29502 = p__29501;
var map__29502__$1 = ((((!((map__29502 == null)))?((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29502):map__29502);
var ha = map__29502__$1;
var pointer = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__29502__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18843__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18843__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_29517 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_29517;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19769__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19771__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19771__auto__,method_table__19767__auto__,prefer_table__19768__auto__,method_cache__19769__auto__,cached_hierarchy__19770__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs29518 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29518))?sablono.interpreter.attributes.call(null,attrs29518):null),((cljs.core.map_QMARK_.call(null,attrs29518))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29518)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__29519,body){
var map__29523 = p__29519;
var map__29523__$1 = ((((!((map__29523 == null)))?((((map__29523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29523):map__29523);
var message = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs29525 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29525))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs29525)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs29525))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29525)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__29526){
var map__29534 = p__29526;
var map__29534__$1 = ((((!((map__29534 == null)))?((((map__29534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29534):map__29534);
var m = map__29534__$1;
var expected = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs29536 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29536))?sablono.interpreter.attributes.call(null,attrs29536):null),((cljs.core.map_QMARK_.call(null,attrs29536))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29536),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs29543 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29543))?sablono.interpreter.attributes.call(null,attrs29543):null),((cljs.core.map_QMARK_.call(null,attrs29543))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29543)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs29544 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29544))?sablono.interpreter.attributes.call(null,attrs29544):null),((cljs.core.map_QMARK_.call(null,attrs29544))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29544)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__29545){
var map__29546 = p__29545;
var map__29546__$1 = ((((!((map__29546 == null)))?((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29546):map__29546);
var testing_contexts = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs29548 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__29546,map__29546__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__29546,map__29546__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29548))?sablono.interpreter.attributes.call(null,attrs29548):null),((cljs.core.map_QMARK_.call(null,attrs29548))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29548)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs29555 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__29556,p__29557){
var map__29558 = p__29556;
var map__29558__$1 = ((((!((map__29558 == null)))?((((map__29558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29558):map__29558);
var last_context = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__29558__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__29559 = p__29557;
var i = cljs.core.nth.call(null,vec__29559,(0),null);
var t = cljs.core.nth.call(null,vec__29559,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t,i));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29555))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs29555)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs29555))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29555)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__29573){
var map__29574 = p__29573;
var map__29574__$1 = ((((!((map__29574 == null)))?((((map__29574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29574):map__29574);
var type = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__29572 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__29572__$1 = ((((!((map__29572 == null)))?((((map__29572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29572):map__29572);
var fail = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (p__29577){
var map__29578 = p__29577;
var map__29578__$1 = ((((!((map__29578 == null)))?((((map__29578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var type = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1){
return (function (p__29580){
var map__29581 = p__29580;
var map__29581__$1 = ((((!((map__29581 == null)))?((((map__29581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var type = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__29572,map__29572__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18843__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_29669){
var state_val_29670 = (state_29669[(1)]);
if((state_val_29670 === (7))){
var state_29669__$1 = state_29669;
var statearr_29671_29720 = state_29669__$1;
(statearr_29671_29720[(2)] = false);

(statearr_29671_29720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (20))){
var inst_29610 = (state_29669[(7)]);
var inst_29629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29610);
var state_29669__$1 = state_29669;
var statearr_29672_29721 = state_29669__$1;
(statearr_29672_29721[(2)] = inst_29629);

(statearr_29672_29721[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (27))){
var inst_29644 = (state_29669[(8)]);
var inst_29634 = (state_29669[(9)]);
var inst_29648 = inst_29634.call(null,inst_29644);
var state_29669__$1 = state_29669;
var statearr_29673_29722 = state_29669__$1;
(statearr_29673_29722[(2)] = inst_29648);

(statearr_29673_29722[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (1))){
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29669__$1,(2),devcards.core.test_channel);
} else {
if((state_val_29670 === (24))){
var state_29669__$1 = state_29669;
var statearr_29674_29723 = state_29669__$1;
(statearr_29674_29723[(2)] = null);

(statearr_29674_29723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (4))){
var state_29669__$1 = state_29669;
var statearr_29675_29724 = state_29669__$1;
(statearr_29675_29724[(2)] = false);

(statearr_29675_29724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (15))){
var state_29669__$1 = state_29669;
var statearr_29676_29725 = state_29669__$1;
(statearr_29676_29725[(2)] = false);

(statearr_29676_29725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (21))){
var inst_29610 = (state_29669[(7)]);
var state_29669__$1 = state_29669;
var statearr_29677_29726 = state_29669__$1;
(statearr_29677_29726[(2)] = inst_29610);

(statearr_29677_29726[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (13))){
var inst_29667 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29669__$1,inst_29667);
} else {
if((state_val_29670 === (22))){
var inst_29633 = (state_29669[(10)]);
var inst_29632 = (state_29669[(2)]);
var inst_29633__$1 = cljs.core.get.call(null,inst_29632,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29634 = cljs.core.get.call(null,inst_29632,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_29669__$1 = (function (){var statearr_29678 = state_29669;
(statearr_29678[(10)] = inst_29633__$1);

(statearr_29678[(9)] = inst_29634);

return statearr_29678;
})();
if(cljs.core.truth_(inst_29633__$1)){
var statearr_29679_29727 = state_29669__$1;
(statearr_29679_29727[(1)] = (23));

} else {
var statearr_29680_29728 = state_29669__$1;
(statearr_29680_29728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (29))){
var inst_29658 = (state_29669[(2)]);
var inst_29659 = cljs.test.clear_env_BANG_.call(null);
var state_29669__$1 = (function (){var statearr_29681 = state_29669;
(statearr_29681[(11)] = inst_29658);

(statearr_29681[(12)] = inst_29659);

return statearr_29681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29669__$1,(30),devcards.core.test_channel);
} else {
if((state_val_29670 === (6))){
var state_29669__$1 = state_29669;
var statearr_29682_29729 = state_29669__$1;
(statearr_29682_29729[(2)] = true);

(statearr_29682_29729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (28))){
var inst_29634 = (state_29669[(9)]);
var inst_29650 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_29651 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_29652 = cljs.core.PersistentHashMap.fromArrays(inst_29650,inst_29651);
var inst_29653 = devcards.core.collect_test.call(null,inst_29652);
var inst_29654 = cljs.test.get_current_env.call(null);
var inst_29655 = cljs.core.assoc.call(null,inst_29654,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_29656 = inst_29634.call(null,inst_29655);
var state_29669__$1 = (function (){var statearr_29683 = state_29669;
(statearr_29683[(13)] = inst_29653);

return statearr_29683;
})();
var statearr_29684_29730 = state_29669__$1;
(statearr_29684_29730[(2)] = inst_29656);

(statearr_29684_29730[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (25))){
var inst_29665 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29685_29731 = state_29669__$1;
(statearr_29685_29731[(2)] = inst_29665);

(statearr_29685_29731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (17))){
var state_29669__$1 = state_29669;
var statearr_29686_29732 = state_29669__$1;
(statearr_29686_29732[(2)] = true);

(statearr_29686_29732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (3))){
var inst_29587 = (state_29669[(14)]);
var inst_29592 = inst_29587.cljs$lang$protocol_mask$partition0$;
var inst_29593 = (inst_29592 & (64));
var inst_29594 = inst_29587.cljs$core$ISeq$;
var inst_29595 = (inst_29593) || (inst_29594);
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29595)){
var statearr_29687_29733 = state_29669__$1;
(statearr_29687_29733[(1)] = (6));

} else {
var statearr_29688_29734 = state_29669__$1;
(statearr_29688_29734[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (12))){
var inst_29610 = (state_29669[(7)]);
var inst_29614 = (inst_29610 == null);
var inst_29615 = cljs.core.not.call(null,inst_29614);
var state_29669__$1 = state_29669;
if(inst_29615){
var statearr_29689_29735 = state_29669__$1;
(statearr_29689_29735[(1)] = (14));

} else {
var statearr_29690_29736 = state_29669__$1;
(statearr_29690_29736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (2))){
var inst_29587 = (state_29669[(14)]);
var inst_29587__$1 = (state_29669[(2)]);
var inst_29589 = (inst_29587__$1 == null);
var inst_29590 = cljs.core.not.call(null,inst_29589);
var state_29669__$1 = (function (){var statearr_29691 = state_29669;
(statearr_29691[(14)] = inst_29587__$1);

return statearr_29691;
})();
if(inst_29590){
var statearr_29692_29737 = state_29669__$1;
(statearr_29692_29737[(1)] = (3));

} else {
var statearr_29693_29738 = state_29669__$1;
(statearr_29693_29738[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (23))){
var inst_29637 = (state_29669[(15)]);
var inst_29633 = (state_29669[(10)]);
var inst_29637__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_29638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29639 = devcards.core.run_card_tests.call(null,inst_29633);
var inst_29640 = [inst_29639,inst_29637__$1];
var inst_29641 = (new cljs.core.PersistentVector(null,2,(5),inst_29638,inst_29640,null));
var state_29669__$1 = (function (){var statearr_29694 = state_29669;
(statearr_29694[(15)] = inst_29637__$1);

return statearr_29694;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29669__$1,(26),inst_29641);
} else {
if((state_val_29670 === (19))){
var inst_29624 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29695_29739 = state_29669__$1;
(statearr_29695_29739[(2)] = inst_29624);

(statearr_29695_29739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (11))){
var inst_29587 = (state_29669[(14)]);
var inst_29607 = (state_29669[(2)]);
var inst_29608 = cljs.core.get.call(null,inst_29607,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29609 = cljs.core.get.call(null,inst_29607,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_29610 = inst_29587;
var state_29669__$1 = (function (){var statearr_29696 = state_29669;
(statearr_29696[(16)] = inst_29609);

(statearr_29696[(17)] = inst_29608);

(statearr_29696[(7)] = inst_29610);

return statearr_29696;
})();
var statearr_29697_29740 = state_29669__$1;
(statearr_29697_29740[(2)] = null);

(statearr_29697_29740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (9))){
var inst_29587 = (state_29669[(14)]);
var inst_29604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29587);
var state_29669__$1 = state_29669;
var statearr_29698_29741 = state_29669__$1;
(statearr_29698_29741[(2)] = inst_29604);

(statearr_29698_29741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (5))){
var inst_29602 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29602)){
var statearr_29699_29742 = state_29669__$1;
(statearr_29699_29742[(1)] = (9));

} else {
var statearr_29700_29743 = state_29669__$1;
(statearr_29700_29743[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (14))){
var inst_29610 = (state_29669[(7)]);
var inst_29617 = inst_29610.cljs$lang$protocol_mask$partition0$;
var inst_29618 = (inst_29617 & (64));
var inst_29619 = inst_29610.cljs$core$ISeq$;
var inst_29620 = (inst_29618) || (inst_29619);
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29620)){
var statearr_29701_29744 = state_29669__$1;
(statearr_29701_29744[(1)] = (17));

} else {
var statearr_29702_29745 = state_29669__$1;
(statearr_29702_29745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (26))){
var inst_29637 = (state_29669[(15)]);
var inst_29643 = (state_29669[(2)]);
var inst_29644 = cljs.core.nth.call(null,inst_29643,(0),null);
var inst_29645 = cljs.core.nth.call(null,inst_29643,(1),null);
var inst_29646 = cljs.core.not_EQ_.call(null,inst_29645,inst_29637);
var state_29669__$1 = (function (){var statearr_29703 = state_29669;
(statearr_29703[(8)] = inst_29644);

return statearr_29703;
})();
if(inst_29646){
var statearr_29704_29746 = state_29669__$1;
(statearr_29704_29746[(1)] = (27));

} else {
var statearr_29705_29747 = state_29669__$1;
(statearr_29705_29747[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (16))){
var inst_29627 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29627)){
var statearr_29706_29748 = state_29669__$1;
(statearr_29706_29748[(1)] = (20));

} else {
var statearr_29707_29749 = state_29669__$1;
(statearr_29707_29749[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (30))){
var inst_29661 = (state_29669[(2)]);
var inst_29610 = inst_29661;
var state_29669__$1 = (function (){var statearr_29708 = state_29669;
(statearr_29708[(7)] = inst_29610);

return statearr_29708;
})();
var statearr_29709_29750 = state_29669__$1;
(statearr_29709_29750[(2)] = null);

(statearr_29709_29750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (10))){
var inst_29587 = (state_29669[(14)]);
var state_29669__$1 = state_29669;
var statearr_29710_29751 = state_29669__$1;
(statearr_29710_29751[(2)] = inst_29587);

(statearr_29710_29751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (18))){
var state_29669__$1 = state_29669;
var statearr_29711_29752 = state_29669__$1;
(statearr_29711_29752[(2)] = false);

(statearr_29711_29752[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (8))){
var inst_29599 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29712_29753 = state_29669__$1;
(statearr_29712_29753[(2)] = inst_29599);

(statearr_29712_29753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var devcards$core$state_machine__23385__auto__ = null;
var devcards$core$state_machine__23385__auto____0 = (function (){
var statearr_29716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29716[(0)] = devcards$core$state_machine__23385__auto__);

(statearr_29716[(1)] = (1));

return statearr_29716;
});
var devcards$core$state_machine__23385__auto____1 = (function (state_29669){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_29669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e29717){if((e29717 instanceof Object)){
var ex__23388__auto__ = e29717;
var statearr_29718_29754 = state_29669;
(statearr_29718_29754[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29755 = state_29669;
state_29669 = G__29755;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
devcards$core$state_machine__23385__auto__ = function(state_29669){
switch(arguments.length){
case 0:
return devcards$core$state_machine__23385__auto____0.call(this);
case 1:
return devcards$core$state_machine__23385__auto____1.call(this,state_29669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__23385__auto____0;
devcards$core$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__23385__auto____1;
return devcards$core$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_29719 = f__23497__auto__.call(null);
(statearr_29719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__28516__auto___29760 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__28516__auto___29760);
}

var seq__29756_29761 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29757_29762 = null;
var count__29758_29763 = (0);
var i__29759_29764 = (0);
while(true){
if((i__29759_29764 < count__29758_29763)){
var property__28517__auto___29765 = cljs.core._nth.call(null,chunk__29757_29762,i__29759_29764);
if(cljs.core.truth_((base__28516__auto___29760[property__28517__auto___29765]))){
(devcards.core.TestDevcard.prototype[property__28517__auto___29765] = (base__28516__auto___29760[property__28517__auto___29765]));
} else {
}

var G__29766 = seq__29756_29761;
var G__29767 = chunk__29757_29762;
var G__29768 = count__29758_29763;
var G__29769 = (i__29759_29764 + (1));
seq__29756_29761 = G__29766;
chunk__29757_29762 = G__29767;
count__29758_29763 = G__29768;
i__29759_29764 = G__29769;
continue;
} else {
var temp__4657__auto___29770 = cljs.core.seq.call(null,seq__29756_29761);
if(temp__4657__auto___29770){
var seq__29756_29771__$1 = temp__4657__auto___29770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29756_29771__$1)){
var c__19654__auto___29772 = cljs.core.chunk_first.call(null,seq__29756_29771__$1);
var G__29773 = cljs.core.chunk_rest.call(null,seq__29756_29771__$1);
var G__29774 = c__19654__auto___29772;
var G__29775 = cljs.core.count.call(null,c__19654__auto___29772);
var G__29776 = (0);
seq__29756_29761 = G__29773;
chunk__29757_29762 = G__29774;
count__29758_29763 = G__29775;
i__29759_29764 = G__29776;
continue;
} else {
var property__28517__auto___29777 = cljs.core.first.call(null,seq__29756_29771__$1);
if(cljs.core.truth_((base__28516__auto___29760[property__28517__auto___29777]))){
(devcards.core.TestDevcard.prototype[property__28517__auto___29777] = (base__28516__auto___29760[property__28517__auto___29777]));
} else {
}

var G__29778 = cljs.core.next.call(null,seq__29756_29771__$1);
var G__29779 = null;
var G__29780 = (0);
var G__29781 = (0);
seq__29756_29761 = G__29778;
chunk__29757_29762 = G__29779;
count__29758_29763 = G__29780;
i__29759_29764 = G__29781;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19919__auto__ = [];
var len__19912__auto___29786 = arguments.length;
var i__19913__auto___29787 = (0);
while(true){
if((i__19913__auto___29787 < len__19912__auto___29786)){
args__19919__auto__.push((arguments[i__19913__auto___29787]));

var G__29788 = (i__19913__auto___29787 + (1));
i__19913__auto___29787 = G__29788;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core29783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core29783 = (function (test_thunks,meta29784){
this.test_thunks = test_thunks;
this.meta29784 = meta29784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core29783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29785,meta29784__$1){
var self__ = this;
var _29785__$1 = this;
return (new devcards.core.t_devcards$core29783(self__.test_thunks,meta29784__$1));
});

devcards.core.t_devcards$core29783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29785){
var self__ = this;
var _29785__$1 = this;
return self__.meta29784;
});

devcards.core.t_devcards$core29783.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core29783.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core29783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta29784","meta29784",2062342503,null)], null);
});

devcards.core.t_devcards$core29783.cljs$lang$type = true;

devcards.core.t_devcards$core29783.cljs$lang$ctorStr = "devcards.core/t_devcards$core29783";

devcards.core.t_devcards$core29783.cljs$lang$ctorPrWriter = (function (this__19449__auto__,writer__19450__auto__,opt__19451__auto__){
return cljs.core._write.call(null,writer__19450__auto__,"devcards.core/t_devcards$core29783");
});

devcards.core.__GT_t_devcards$core29783 = (function devcards$core$__GT_t_devcards$core29783(test_thunks__$1,meta29784){
return (new devcards.core.t_devcards$core29783(test_thunks__$1,meta29784));
});

}

return (new devcards.core.t_devcards$core29783(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq29782){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29782));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs29790 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29790))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs29790)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs29790))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29790)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs29792 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29792))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs29792)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs29792))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29792)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_29822){
var state_val_29823 = (state_29822[(1)]);
if((state_val_29823 === (1))){
var inst_29813 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(2),inst_29813);
} else {
if((state_val_29823 === (2))){
var inst_29815 = (state_29822[(2)]);
var inst_29816 = cljs.core.async.timeout.call(null,(100));
var state_29822__$1 = (function (){var statearr_29824 = state_29822;
(statearr_29824[(7)] = inst_29815);

return statearr_29824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(3),inst_29816);
} else {
if((state_val_29823 === (3))){
var inst_29818 = (state_29822[(2)]);
var inst_29819 = (function (){return ((function (inst_29818,state_val_29823,c__23496__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_29818,state_val_29823,c__23496__auto__))
})();
var inst_29820 = setTimeout(inst_29819,(0));
var state_29822__$1 = (function (){var statearr_29825 = state_29822;
(statearr_29825[(8)] = inst_29818);

return statearr_29825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29822__$1,inst_29820);
} else {
return null;
}
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__23385__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__23385__auto____0 = (function (){
var statearr_29829 = [null,null,null,null,null,null,null,null,null];
(statearr_29829[(0)] = devcards$core$mount_namespace_$_state_machine__23385__auto__);

(statearr_29829[(1)] = (1));

return statearr_29829;
});
var devcards$core$mount_namespace_$_state_machine__23385__auto____1 = (function (state_29822){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_29822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e29830){if((e29830 instanceof Object)){
var ex__23388__auto__ = e29830;
var statearr_29831_29833 = state_29822;
(statearr_29831_29833[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29834 = state_29822;
state_29822 = G__29834;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__23385__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__23385__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__23385__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__23385__auto____0;
devcards$core$mount_namespace_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__23385__auto____1;
return devcards$core$mount_namespace_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_29832 = f__23497__auto__.call(null);
(statearr_29832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_29832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1478297189524