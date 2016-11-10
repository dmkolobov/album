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
devcards.core.react_element_type_symbol = (function (){var or__18873__auto__ = (function (){var and__18861__auto__ = typeof Symbol !== 'undefined';
if(and__18861__auto__){
var and__18861__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18861__auto____$1){
var and__18861__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18861__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18861__auto____$2;
}
} else {
return and__18861__auto____$1;
}
} else {
return and__18861__auto__;
}
})();
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__25690_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__25690_SHARP_.detail], null));
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
var args25691 = [];
var len__19942__auto___25694 = arguments.length;
var i__19943__auto___25695 = (0);
while(true){
if((i__19943__auto___25695 < len__19942__auto___25694)){
args25691.push((arguments[i__19943__auto___25695]));

var G__25696 = (i__19943__auto___25695 + (1));
i__19943__auto___25695 = G__25696;
continue;
} else {
}
break;
}

var G__25693 = args25691.length;
switch (G__25693) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25691.length)].join('')));

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
var and__18861__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18861__auto__){
var map__25704 = c;
var map__25704__$1 = ((((!((map__25704 == null)))?((((map__25704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25704):map__25704);
var path = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18861__auto__;
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
var base__25047__auto___25710 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18873__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25047__auto___25710);
}

var seq__25706_25711 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__25707_25712 = null;
var count__25708_25713 = (0);
var i__25709_25714 = (0);
while(true){
if((i__25709_25714 < count__25708_25713)){
var property__25048__auto___25715 = cljs.core._nth.call(null,chunk__25707_25712,i__25709_25714);
if(cljs.core.truth_((base__25047__auto___25710[property__25048__auto___25715]))){
(devcards.core.CodeHighlight.prototype[property__25048__auto___25715] = (base__25047__auto___25710[property__25048__auto___25715]));
} else {
}

var G__25716 = seq__25706_25711;
var G__25717 = chunk__25707_25712;
var G__25718 = count__25708_25713;
var G__25719 = (i__25709_25714 + (1));
seq__25706_25711 = G__25716;
chunk__25707_25712 = G__25717;
count__25708_25713 = G__25718;
i__25709_25714 = G__25719;
continue;
} else {
var temp__4657__auto___25720 = cljs.core.seq.call(null,seq__25706_25711);
if(temp__4657__auto___25720){
var seq__25706_25721__$1 = temp__4657__auto___25720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25706_25721__$1)){
var c__19684__auto___25722 = cljs.core.chunk_first.call(null,seq__25706_25721__$1);
var G__25723 = cljs.core.chunk_rest.call(null,seq__25706_25721__$1);
var G__25724 = c__19684__auto___25722;
var G__25725 = cljs.core.count.call(null,c__19684__auto___25722);
var G__25726 = (0);
seq__25706_25711 = G__25723;
chunk__25707_25712 = G__25724;
count__25708_25713 = G__25725;
i__25709_25714 = G__25726;
continue;
} else {
var property__25048__auto___25727 = cljs.core.first.call(null,seq__25706_25721__$1);
if(cljs.core.truth_((base__25047__auto___25710[property__25048__auto___25727]))){
(devcards.core.CodeHighlight.prototype[property__25048__auto___25727] = (base__25047__auto___25710[property__25048__auto___25727]));
} else {
}

var G__25728 = cljs.core.next.call(null,seq__25706_25721__$1);
var G__25729 = null;
var G__25730 = (0);
var G__25731 = (0);
seq__25706_25711 = G__25728;
chunk__25707_25712 = G__25729;
count__25708_25713 = G__25730;
i__25709_25714 = G__25731;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__19797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19801__auto__,method_table__19797__auto__,prefer_table__19798__auto__,method_cache__19799__auto__,cached_hierarchy__19800__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25732){
var map__25733 = p__25732;
var map__25733__$1 = ((((!((map__25733 == null)))?((((map__25733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25733):map__25733);
var content = cljs.core.get.call(null,map__25733__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__25735){
var map__25736 = p__25735;
var map__25736__$1 = ((((!((map__25736 == null)))?((((map__25736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25736):map__25736);
var block = map__25736__$1;
var content = cljs.core.get.call(null,map__25736__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19949__auto__ = [];
var len__19942__auto___25739 = arguments.length;
var i__19943__auto___25740 = (0);
while(true){
if((i__19943__auto___25740 < len__19942__auto___25739)){
args__19949__auto__.push((arguments[i__19943__auto___25740]));

var G__25741 = (i__19943__auto___25740 + (1));
i__19943__auto___25740 = G__25741;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
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

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq25738){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25738));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__25743 = devcards.system.devcards_rendered_card_class;
var G__25743__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__25743),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__25743);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__25743__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__25743__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args25744 = [];
var len__19942__auto___25752 = arguments.length;
var i__19943__auto___25753 = (0);
while(true){
if((i__19943__auto___25753 < len__19942__auto___25752)){
args25744.push((arguments[i__19943__auto___25753]));

var G__25754 = (i__19943__auto___25753 + (1));
i__19943__auto___25753 = G__25754;
continue;
} else {
}
break;
}

var G__25746 = args25744.length;
switch (G__25746) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25744.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__25747 = card;
var map__25747__$1 = ((((!((map__25747 == null)))?((((map__25747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25747):map__25747);
var path = cljs.core.get.call(null,map__25747__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__25747__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__25747,map__25747__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__25747,map__25747__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs25749 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs25749))?sablono.interpreter.attributes.call(null,attrs25749):null),((cljs.core.map_QMARK_.call(null,attrs25749))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25749)], null)));
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
var x__19536__auto__ = (((this$ == null))?null:this$);
var m__19537__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,this$,devcard_opts);
} else {
var m__19537__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,this$,devcard_opts);
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
var x__19536__auto__ = (((this$ == null))?null:this$);
var m__19537__auto__ = (devcards.core._devcard[goog.typeOf(x__19536__auto__)]);
if(!((m__19537__auto__ == null))){
return m__19537__auto__.call(null,this$,devcard_opts);
} else {
var m__19537__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19537__auto____$1 == null))){
return m__19537__auto____$1.call(null,this$,devcard_opts);
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
var base__25047__auto___25761 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs25756 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25756))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs25756)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs25756))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25756)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25047__auto___25761);
}

var seq__25757_25762 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__25758_25763 = null;
var count__25759_25764 = (0);
var i__25760_25765 = (0);
while(true){
if((i__25760_25765 < count__25759_25764)){
var property__25048__auto___25766 = cljs.core._nth.call(null,chunk__25758_25763,i__25760_25765);
if(cljs.core.truth_((base__25047__auto___25761[property__25048__auto___25766]))){
(devcards.core.DontUpdate.prototype[property__25048__auto___25766] = (base__25047__auto___25761[property__25048__auto___25766]));
} else {
}

var G__25767 = seq__25757_25762;
var G__25768 = chunk__25758_25763;
var G__25769 = count__25759_25764;
var G__25770 = (i__25760_25765 + (1));
seq__25757_25762 = G__25767;
chunk__25758_25763 = G__25768;
count__25759_25764 = G__25769;
i__25760_25765 = G__25770;
continue;
} else {
var temp__4657__auto___25771 = cljs.core.seq.call(null,seq__25757_25762);
if(temp__4657__auto___25771){
var seq__25757_25772__$1 = temp__4657__auto___25771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25757_25772__$1)){
var c__19684__auto___25773 = cljs.core.chunk_first.call(null,seq__25757_25772__$1);
var G__25774 = cljs.core.chunk_rest.call(null,seq__25757_25772__$1);
var G__25775 = c__19684__auto___25773;
var G__25776 = cljs.core.count.call(null,c__19684__auto___25773);
var G__25777 = (0);
seq__25757_25762 = G__25774;
chunk__25758_25763 = G__25775;
count__25759_25764 = G__25776;
i__25760_25765 = G__25777;
continue;
} else {
var property__25048__auto___25778 = cljs.core.first.call(null,seq__25757_25772__$1);
if(cljs.core.truth_((base__25047__auto___25761[property__25048__auto___25778]))){
(devcards.core.DontUpdate.prototype[property__25048__auto___25778] = (base__25047__auto___25761[property__25048__auto___25778]));
} else {
}

var G__25779 = cljs.core.next.call(null,seq__25757_25772__$1);
var G__25780 = null;
var G__25781 = (0);
var G__25782 = (0);
seq__25757_25762 = G__25779;
chunk__25758_25763 = G__25780;
count__25759_25764 = G__25781;
i__25760_25765 = G__25782;
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
var data = (function (){var or__18873__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
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
var base__25047__auto___25789 = {"getInitialState": (function (){
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
return this$.setState((function (){var or__18873__auto__ = (function (){var and__18861__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18861__auto__)){
return this$.state;
} else {
return and__18861__auto__;
}
})();
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
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
if(cljs.core.truth_((function (){var and__18861__auto__ = data_atom;
if(cljs.core.truth_(and__18861__auto__)){
return id;
} else {
return and__18861__auto__;
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
devcards.core.DevcardBase = React.createClass(base__25047__auto___25789);
}

var seq__25785_25790 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__25786_25791 = null;
var count__25787_25792 = (0);
var i__25788_25793 = (0);
while(true){
if((i__25788_25793 < count__25787_25792)){
var property__25048__auto___25794 = cljs.core._nth.call(null,chunk__25786_25791,i__25788_25793);
if(cljs.core.truth_((base__25047__auto___25789[property__25048__auto___25794]))){
(devcards.core.DevcardBase.prototype[property__25048__auto___25794] = (base__25047__auto___25789[property__25048__auto___25794]));
} else {
}

var G__25795 = seq__25785_25790;
var G__25796 = chunk__25786_25791;
var G__25797 = count__25787_25792;
var G__25798 = (i__25788_25793 + (1));
seq__25785_25790 = G__25795;
chunk__25786_25791 = G__25796;
count__25787_25792 = G__25797;
i__25788_25793 = G__25798;
continue;
} else {
var temp__4657__auto___25799 = cljs.core.seq.call(null,seq__25785_25790);
if(temp__4657__auto___25799){
var seq__25785_25800__$1 = temp__4657__auto___25799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25785_25800__$1)){
var c__19684__auto___25801 = cljs.core.chunk_first.call(null,seq__25785_25800__$1);
var G__25802 = cljs.core.chunk_rest.call(null,seq__25785_25800__$1);
var G__25803 = c__19684__auto___25801;
var G__25804 = cljs.core.count.call(null,c__19684__auto___25801);
var G__25805 = (0);
seq__25785_25790 = G__25802;
chunk__25786_25791 = G__25803;
count__25787_25792 = G__25804;
i__25788_25793 = G__25805;
continue;
} else {
var property__25048__auto___25806 = cljs.core.first.call(null,seq__25785_25800__$1);
if(cljs.core.truth_((base__25047__auto___25789[property__25048__auto___25806]))){
(devcards.core.DevcardBase.prototype[property__25048__auto___25806] = (base__25047__auto___25789[property__25048__auto___25806]));
} else {
}

var G__25807 = cljs.core.next.call(null,seq__25785_25800__$1);
var G__25808 = null;
var G__25809 = (0);
var G__25810 = (0);
seq__25785_25790 = G__25807;
chunk__25786_25791 = G__25808;
count__25787_25792 = G__25809;
i__25788_25793 = G__25810;
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
var base__25047__auto___25815 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18861__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18861__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18861__auto__;
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
devcards.core.DomComponent = React.createClass(base__25047__auto___25815);
}

var seq__25811_25816 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__25812_25817 = null;
var count__25813_25818 = (0);
var i__25814_25819 = (0);
while(true){
if((i__25814_25819 < count__25813_25818)){
var property__25048__auto___25820 = cljs.core._nth.call(null,chunk__25812_25817,i__25814_25819);
if(cljs.core.truth_((base__25047__auto___25815[property__25048__auto___25820]))){
(devcards.core.DomComponent.prototype[property__25048__auto___25820] = (base__25047__auto___25815[property__25048__auto___25820]));
} else {
}

var G__25821 = seq__25811_25816;
var G__25822 = chunk__25812_25817;
var G__25823 = count__25813_25818;
var G__25824 = (i__25814_25819 + (1));
seq__25811_25816 = G__25821;
chunk__25812_25817 = G__25822;
count__25813_25818 = G__25823;
i__25814_25819 = G__25824;
continue;
} else {
var temp__4657__auto___25825 = cljs.core.seq.call(null,seq__25811_25816);
if(temp__4657__auto___25825){
var seq__25811_25826__$1 = temp__4657__auto___25825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25811_25826__$1)){
var c__19684__auto___25827 = cljs.core.chunk_first.call(null,seq__25811_25826__$1);
var G__25828 = cljs.core.chunk_rest.call(null,seq__25811_25826__$1);
var G__25829 = c__19684__auto___25827;
var G__25830 = cljs.core.count.call(null,c__19684__auto___25827);
var G__25831 = (0);
seq__25811_25816 = G__25828;
chunk__25812_25817 = G__25829;
count__25813_25818 = G__25830;
i__25814_25819 = G__25831;
continue;
} else {
var property__25048__auto___25832 = cljs.core.first.call(null,seq__25811_25826__$1);
if(cljs.core.truth_((base__25047__auto___25815[property__25048__auto___25832]))){
(devcards.core.DomComponent.prototype[property__25048__auto___25832] = (base__25047__auto___25815[property__25048__auto___25832]));
} else {
}

var G__25833 = cljs.core.next.call(null,seq__25811_25826__$1);
var G__25834 = null;
var G__25835 = (0);
var G__25836 = (0);
seq__25811_25816 = G__25833;
chunk__25812_25817 = G__25834;
count__25813_25818 = G__25835;
i__25814_25819 = G__25836;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18873__auto__ = x === true;
if(or__18873__auto__){
return or__18873__auto__;
} else {
var or__18873__auto____$1 = x === false;
if(or__18873__auto____$1){
return or__18873__auto____$1;
} else {
var or__18873__auto____$2 = (x == null);
if(or__18873__auto____$2){
return or__18873__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18873__auto__ = typeof x === 'string';
if(or__18873__auto__){
return or__18873__auto__;
} else {
var or__18873__auto____$1 = (x == null);
if(or__18873__auto____$1){
return or__18873__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18873__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__25837_SHARP_){
return !(p1__25837_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__25846 = opts;
var map__25846__$1 = ((((!((map__25846 == null)))?((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25846):map__25846);
var name = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__25846__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18873__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18873__auto__){
return or__18873__auto__;
} else {
var or__18873__auto____$1 = (options == null);
if(or__18873__auto____$1){
return or__18873__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18873__auto__ = (initial_data == null);
if(or__18873__auto__){
return or__18873__auto__;
} else {
var or__18873__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18873__auto____$1){
return or__18873__auto____$1;
} else {
var or__18873__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18873__auto____$2){
return or__18873__auto____$2;
} else {
var or__18873__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18873__auto____$3){
return or__18873__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__25846,map__25846__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__25838_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__25838_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__25846,map__25846__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs25854 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs25854))?sablono.interpreter.attributes.call(null,attrs25854):null),((cljs.core.map_QMARK_.call(null,attrs25854))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25854)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs25858 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25858))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs25858)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs25858))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25858)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs25859 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25859))?sablono.interpreter.attributes.call(null,attrs25859):null),((cljs.core.map_QMARK_.call(null,attrs25859))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25859)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs25860 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25860))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs25860)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs25860))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25860)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__25861_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__25861_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19495__auto__,k__19496__auto__){
var self__ = this;
var this__19495__auto____$1 = this;
return cljs.core._lookup.call(null,this__19495__auto____$1,k__19496__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19497__auto__,k25863,else__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
var G__25865 = (((k25863 instanceof cljs.core.Keyword))?k25863.fqn:null);
switch (G__25865) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25863,else__19498__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19509__auto__,writer__19510__auto__,opts__19511__auto__){
var self__ = this;
var this__19509__auto____$1 = this;
var pr_pair__19512__auto__ = ((function (this__19509__auto____$1){
return (function (keyval__19513__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,cljs.core.pr_writer,""," ","",opts__19511__auto__,keyval__19513__auto__);
});})(this__19509__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,pr_pair__19512__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19511__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25862){
var self__ = this;
var G__25862__$1 = this;
return (new cljs.core.RecordIter((0),G__25862__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19493__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19489__auto__){
var self__ = this;
var this__19489__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19499__auto__){
var self__ = this;
var this__19499__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19490__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var h__19308__auto__ = self__.__hash;
if(!((h__19308__auto__ == null))){
return h__19308__auto__;
} else {
var h__19308__auto____$1 = cljs.core.hash_imap.call(null,this__19490__auto____$1);
self__.__hash = h__19308__auto____$1;

return h__19308__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19491__auto__,other__19492__auto__){
var self__ = this;
var this__19491__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18861__auto__ = other__19492__auto__;
if(cljs.core.truth_(and__18861__auto__)){
var and__18861__auto____$1 = (this__19491__auto____$1.constructor === other__19492__auto__.constructor);
if(and__18861__auto____$1){
return cljs.core.equiv_map.call(null,this__19491__auto____$1,other__19492__auto__);
} else {
return and__18861__auto____$1;
}
} else {
return and__18861__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19504__auto__,k__19505__auto__){
var self__ = this;
var this__19504__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19505__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19504__auto____$1),self__.__meta),k__19505__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19505__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19502__auto__,k__19503__auto__,G__25862){
var self__ = this;
var this__19502__auto____$1 = this;
var pred__25866 = cljs.core.keyword_identical_QMARK_;
var expr__25867 = k__19503__auto__;
if(cljs.core.truth_(pred__25866.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__25867))){
return (new devcards.core.IdentiyOptions(G__25862,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19503__auto__,G__25862),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19507__auto__){
var self__ = this;
var this__19507__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19494__auto__,G__25862){
var self__ = this;
var this__19494__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__25862,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19500__auto__,entry__19501__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19501__auto__)){
return cljs.core._assoc.call(null,this__19500__auto____$1,cljs.core._nth.call(null,entry__19501__auto__,(0)),cljs.core._nth.call(null,entry__19501__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19500__auto____$1,entry__19501__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19529__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19529__auto__,writer__19530__auto__){
return cljs.core._write.call(null,writer__19530__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__25864){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__25864),null,cljs.core.dissoc.call(null,G__25864,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__25870){
var map__25873 = p__25870;
var map__25873__$1 = ((((!((map__25873 == null)))?((((map__25873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25873):map__25873);
var devcard_opts = map__25873__$1;
var options = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__25873,map__25873__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__25873,map__25873__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19495__auto__,k__19496__auto__){
var self__ = this;
var this__19495__auto____$1 = this;
return cljs.core._lookup.call(null,this__19495__auto____$1,k__19496__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19497__auto__,k25876,else__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
var G__25878 = (((k25876 instanceof cljs.core.Keyword))?k25876.fqn:null);
switch (G__25878) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25876,else__19498__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19509__auto__,writer__19510__auto__,opts__19511__auto__){
var self__ = this;
var this__19509__auto____$1 = this;
var pr_pair__19512__auto__ = ((function (this__19509__auto____$1){
return (function (keyval__19513__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,cljs.core.pr_writer,""," ","",opts__19511__auto__,keyval__19513__auto__);
});})(this__19509__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,pr_pair__19512__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19511__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25875){
var self__ = this;
var G__25875__$1 = this;
return (new cljs.core.RecordIter((0),G__25875__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19493__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19489__auto__){
var self__ = this;
var this__19489__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19499__auto__){
var self__ = this;
var this__19499__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19490__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var h__19308__auto__ = self__.__hash;
if(!((h__19308__auto__ == null))){
return h__19308__auto__;
} else {
var h__19308__auto____$1 = cljs.core.hash_imap.call(null,this__19490__auto____$1);
self__.__hash = h__19308__auto____$1;

return h__19308__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19491__auto__,other__19492__auto__){
var self__ = this;
var this__19491__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18861__auto__ = other__19492__auto__;
if(cljs.core.truth_(and__18861__auto__)){
var and__18861__auto____$1 = (this__19491__auto____$1.constructor === other__19492__auto__.constructor);
if(and__18861__auto____$1){
return cljs.core.equiv_map.call(null,this__19491__auto____$1,other__19492__auto__);
} else {
return and__18861__auto____$1;
}
} else {
return and__18861__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19504__auto__,k__19505__auto__){
var self__ = this;
var this__19504__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19505__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19504__auto____$1),self__.__meta),k__19505__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19505__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19502__auto__,k__19503__auto__,G__25875){
var self__ = this;
var this__19502__auto____$1 = this;
var pred__25879 = cljs.core.keyword_identical_QMARK_;
var expr__25880 = k__19503__auto__;
if(cljs.core.truth_(pred__25879.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__25880))){
return (new devcards.core.AtomLikeOptions(G__25875,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19503__auto__,G__25875),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19507__auto__){
var self__ = this;
var this__19507__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19494__auto__,G__25875){
var self__ = this;
var this__19494__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__25875,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19500__auto__,entry__19501__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19501__auto__)){
return cljs.core._assoc.call(null,this__19500__auto____$1,cljs.core._nth.call(null,entry__19501__auto__,(0)),cljs.core._nth.call(null,entry__19501__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19500__auto____$1,entry__19501__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19529__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19529__auto__,writer__19530__auto__){
return cljs.core._write.call(null,writer__19530__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__25877){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__25877),null,cljs.core.dissoc.call(null,G__25877,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19495__auto__,k__19496__auto__){
var self__ = this;
var this__19495__auto____$1 = this;
return cljs.core._lookup.call(null,this__19495__auto____$1,k__19496__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19497__auto__,k25886,else__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
var G__25888 = (((k25886 instanceof cljs.core.Keyword))?k25886.fqn:null);
switch (G__25888) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25886,else__19498__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19509__auto__,writer__19510__auto__,opts__19511__auto__){
var self__ = this;
var this__19509__auto____$1 = this;
var pr_pair__19512__auto__ = ((function (this__19509__auto____$1){
return (function (keyval__19513__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,cljs.core.pr_writer,""," ","",opts__19511__auto__,keyval__19513__auto__);
});})(this__19509__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19510__auto__,pr_pair__19512__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19511__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25885){
var self__ = this;
var G__25885__$1 = this;
return (new cljs.core.RecordIter((0),G__25885__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19493__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19489__auto__){
var self__ = this;
var this__19489__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19499__auto__){
var self__ = this;
var this__19499__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19490__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var h__19308__auto__ = self__.__hash;
if(!((h__19308__auto__ == null))){
return h__19308__auto__;
} else {
var h__19308__auto____$1 = cljs.core.hash_imap.call(null,this__19490__auto____$1);
self__.__hash = h__19308__auto____$1;

return h__19308__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19491__auto__,other__19492__auto__){
var self__ = this;
var this__19491__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18861__auto__ = other__19492__auto__;
if(cljs.core.truth_(and__18861__auto__)){
var and__18861__auto____$1 = (this__19491__auto____$1.constructor === other__19492__auto__.constructor);
if(and__18861__auto____$1){
return cljs.core.equiv_map.call(null,this__19491__auto____$1,other__19492__auto__);
} else {
return and__18861__auto____$1;
}
} else {
return and__18861__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19504__auto__,k__19505__auto__){
var self__ = this;
var this__19504__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19505__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19504__auto____$1),self__.__meta),k__19505__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19505__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19502__auto__,k__19503__auto__,G__25885){
var self__ = this;
var this__19502__auto____$1 = this;
var pred__25889 = cljs.core.keyword_identical_QMARK_;
var expr__25890 = k__19503__auto__;
if(cljs.core.truth_(pred__25889.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__25890))){
return (new devcards.core.EdnLikeOptions(G__25885,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19503__auto__,G__25885),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19507__auto__){
var self__ = this;
var this__19507__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19494__auto__,G__25885){
var self__ = this;
var this__19494__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__25885,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19500__auto__,entry__19501__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19501__auto__)){
return cljs.core._assoc.call(null,this__19500__auto____$1,cljs.core._nth.call(null,entry__19501__auto__,(0)),cljs.core._nth.call(null,entry__19501__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19500__auto____$1,entry__19501__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19529__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19529__auto__,writer__19530__auto__){
return cljs.core._write.call(null,writer__19530__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__25887){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__25887),null,cljs.core.dissoc.call(null,G__25887,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18861__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18861__auto__){
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
return and__18861__auto__;
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
if((function (){var G__25904 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__25904 == null))){
if((false) || (G__25904.devcards$core$IDevcard$)){
return true;
} else {
if((!G__25904.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__25904);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__25904);
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
var map__25907 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__25907__$1 = ((((!((map__25907 == null)))?((((map__25907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25907):map__25907);
var history = cljs.core.get.call(null,map__25907__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__25907__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__25911 = cljs.core.deref.call(null,history_atom);
var map__25911__$1 = ((((!((map__25911 == null)))?((((map__25911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25911):map__25911);
var history = cljs.core.get.call(null,map__25911__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__25911__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__25915 = cljs.core.deref.call(null,history_atom);
var map__25915__$1 = ((((!((map__25915 == null)))?((((map__25915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25915):map__25915);
var history = cljs.core.get.call(null,map__25915__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__25915__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__25919 = cljs.core.deref.call(null,history_atom);
var map__25919__$1 = ((((!((map__25919 == null)))?((((map__25919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25919):map__25919);
var history = cljs.core.get.call(null,map__25919__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
if(cljs.core.truth_((function (){var and__18861__auto__ = data_atom;
if(cljs.core.truth_(and__18861__auto__)){
return id;
} else {
return and__18861__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__25921){
var map__25922 = p__25921;
var map__25922__$1 = ((((!((map__25922 == null)))?((((map__25922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922):map__25922);
var ha = map__25922__$1;
var pointer = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
if(cljs.core.truth_((function (){var or__18873__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18873__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
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
var _STAR_current_env_STAR_25937 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_25937;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19801__auto__,method_table__19797__auto__,prefer_table__19798__auto__,method_cache__19799__auto__,cached_hierarchy__19800__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs25938 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25938))?sablono.interpreter.attributes.call(null,attrs25938):null),((cljs.core.map_QMARK_.call(null,attrs25938))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25938)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__25939,body){
var map__25943 = p__25939;
var map__25943__$1 = ((((!((map__25943 == null)))?((((map__25943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25943):map__25943);
var message = cljs.core.get.call(null,map__25943__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs25945 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs25945))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs25945)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs25945))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25945)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__25946){
var map__25954 = p__25946;
var map__25954__$1 = ((((!((map__25954 == null)))?((((map__25954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25954):map__25954);
var m = map__25954__$1;
var expected = cljs.core.get.call(null,map__25954__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__25954__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__25954__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs25956 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25956))?sablono.interpreter.attributes.call(null,attrs25956):null),((cljs.core.map_QMARK_.call(null,attrs25956))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25956),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs25963 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs25963))?sablono.interpreter.attributes.call(null,attrs25963):null),((cljs.core.map_QMARK_.call(null,attrs25963))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25963)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs25964 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25964))?sablono.interpreter.attributes.call(null,attrs25964):null),((cljs.core.map_QMARK_.call(null,attrs25964))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25964)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__25965){
var map__25966 = p__25965;
var map__25966__$1 = ((((!((map__25966 == null)))?((((map__25966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25966):map__25966);
var testing_contexts = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs25968 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__25966,map__25966__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__25966,map__25966__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25968))?sablono.interpreter.attributes.call(null,attrs25968):null),((cljs.core.map_QMARK_.call(null,attrs25968))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25968)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs25975 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__25976,p__25977){
var map__25978 = p__25976;
var map__25978__$1 = ((((!((map__25978 == null)))?((((map__25978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25978):map__25978);
var last_context = cljs.core.get.call(null,map__25978__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__25978__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__25979 = p__25977;
var i = cljs.core.nth.call(null,vec__25979,(0),null);
var t = cljs.core.nth.call(null,vec__25979,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t,i));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs25975))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs25975)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs25975))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25975)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__25993){
var map__25994 = p__25993;
var map__25994__$1 = ((((!((map__25994 == null)))?((((map__25994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25994):map__25994);
var type = cljs.core.get.call(null,map__25994__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__25992 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__25992__$1 = ((((!((map__25992 == null)))?((((map__25992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25992):map__25992);
var fail = cljs.core.get.call(null,map__25992__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__25992__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__25992__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (p__25997){
var map__25998 = p__25997;
var map__25998__$1 = ((((!((map__25998 == null)))?((((map__25998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25998):map__25998);
var type = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1){
return (function (p__26000){
var map__26001 = p__26000;
var map__26001__$1 = ((((!((map__26001 == null)))?((((map__26001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26001):map__26001);
var type = cljs.core.get.call(null,map__26001__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__25992,map__25992__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18873__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
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
devcards.core.test_loop = (function (){var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_26089){
var state_val_26090 = (state_26089[(1)]);
if((state_val_26090 === (7))){
var state_26089__$1 = state_26089;
var statearr_26091_26140 = state_26089__$1;
(statearr_26091_26140[(2)] = false);

(statearr_26091_26140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (20))){
var inst_26030 = (state_26089[(7)]);
var inst_26049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26030);
var state_26089__$1 = state_26089;
var statearr_26092_26141 = state_26089__$1;
(statearr_26092_26141[(2)] = inst_26049);

(statearr_26092_26141[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (27))){
var inst_26054 = (state_26089[(8)]);
var inst_26064 = (state_26089[(9)]);
var inst_26068 = inst_26054.call(null,inst_26064);
var state_26089__$1 = state_26089;
var statearr_26093_26142 = state_26089__$1;
(statearr_26093_26142[(2)] = inst_26068);

(statearr_26093_26142[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (1))){
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(2),devcards.core.test_channel);
} else {
if((state_val_26090 === (24))){
var state_26089__$1 = state_26089;
var statearr_26094_26143 = state_26089__$1;
(statearr_26094_26143[(2)] = null);

(statearr_26094_26143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (4))){
var state_26089__$1 = state_26089;
var statearr_26095_26144 = state_26089__$1;
(statearr_26095_26144[(2)] = false);

(statearr_26095_26144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (15))){
var state_26089__$1 = state_26089;
var statearr_26096_26145 = state_26089__$1;
(statearr_26096_26145[(2)] = false);

(statearr_26096_26145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (21))){
var inst_26030 = (state_26089[(7)]);
var state_26089__$1 = state_26089;
var statearr_26097_26146 = state_26089__$1;
(statearr_26097_26146[(2)] = inst_26030);

(statearr_26097_26146[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (13))){
var inst_26087 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26089__$1,inst_26087);
} else {
if((state_val_26090 === (22))){
var inst_26053 = (state_26089[(10)]);
var inst_26052 = (state_26089[(2)]);
var inst_26053__$1 = cljs.core.get.call(null,inst_26052,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26054 = cljs.core.get.call(null,inst_26052,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_26089__$1 = (function (){var statearr_26098 = state_26089;
(statearr_26098[(8)] = inst_26054);

(statearr_26098[(10)] = inst_26053__$1);

return statearr_26098;
})();
if(cljs.core.truth_(inst_26053__$1)){
var statearr_26099_26147 = state_26089__$1;
(statearr_26099_26147[(1)] = (23));

} else {
var statearr_26100_26148 = state_26089__$1;
(statearr_26100_26148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (29))){
var inst_26078 = (state_26089[(2)]);
var inst_26079 = cljs.test.clear_env_BANG_.call(null);
var state_26089__$1 = (function (){var statearr_26101 = state_26089;
(statearr_26101[(11)] = inst_26078);

(statearr_26101[(12)] = inst_26079);

return statearr_26101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(30),devcards.core.test_channel);
} else {
if((state_val_26090 === (6))){
var state_26089__$1 = state_26089;
var statearr_26102_26149 = state_26089__$1;
(statearr_26102_26149[(2)] = true);

(statearr_26102_26149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (28))){
var inst_26054 = (state_26089[(8)]);
var inst_26070 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_26071 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_26072 = cljs.core.PersistentHashMap.fromArrays(inst_26070,inst_26071);
var inst_26073 = devcards.core.collect_test.call(null,inst_26072);
var inst_26074 = cljs.test.get_current_env.call(null);
var inst_26075 = cljs.core.assoc.call(null,inst_26074,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_26076 = inst_26054.call(null,inst_26075);
var state_26089__$1 = (function (){var statearr_26103 = state_26089;
(statearr_26103[(13)] = inst_26073);

return statearr_26103;
})();
var statearr_26104_26150 = state_26089__$1;
(statearr_26104_26150[(2)] = inst_26076);

(statearr_26104_26150[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (25))){
var inst_26085 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26105_26151 = state_26089__$1;
(statearr_26105_26151[(2)] = inst_26085);

(statearr_26105_26151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (17))){
var state_26089__$1 = state_26089;
var statearr_26106_26152 = state_26089__$1;
(statearr_26106_26152[(2)] = true);

(statearr_26106_26152[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (3))){
var inst_26007 = (state_26089[(14)]);
var inst_26012 = inst_26007.cljs$lang$protocol_mask$partition0$;
var inst_26013 = (inst_26012 & (64));
var inst_26014 = inst_26007.cljs$core$ISeq$;
var inst_26015 = (inst_26013) || (inst_26014);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26015)){
var statearr_26107_26153 = state_26089__$1;
(statearr_26107_26153[(1)] = (6));

} else {
var statearr_26108_26154 = state_26089__$1;
(statearr_26108_26154[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (12))){
var inst_26030 = (state_26089[(7)]);
var inst_26034 = (inst_26030 == null);
var inst_26035 = cljs.core.not.call(null,inst_26034);
var state_26089__$1 = state_26089;
if(inst_26035){
var statearr_26109_26155 = state_26089__$1;
(statearr_26109_26155[(1)] = (14));

} else {
var statearr_26110_26156 = state_26089__$1;
(statearr_26110_26156[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (2))){
var inst_26007 = (state_26089[(14)]);
var inst_26007__$1 = (state_26089[(2)]);
var inst_26009 = (inst_26007__$1 == null);
var inst_26010 = cljs.core.not.call(null,inst_26009);
var state_26089__$1 = (function (){var statearr_26111 = state_26089;
(statearr_26111[(14)] = inst_26007__$1);

return statearr_26111;
})();
if(inst_26010){
var statearr_26112_26157 = state_26089__$1;
(statearr_26112_26157[(1)] = (3));

} else {
var statearr_26113_26158 = state_26089__$1;
(statearr_26113_26158[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (23))){
var inst_26053 = (state_26089[(10)]);
var inst_26057 = (state_26089[(15)]);
var inst_26057__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_26058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26059 = devcards.core.run_card_tests.call(null,inst_26053);
var inst_26060 = [inst_26059,inst_26057__$1];
var inst_26061 = (new cljs.core.PersistentVector(null,2,(5),inst_26058,inst_26060,null));
var state_26089__$1 = (function (){var statearr_26114 = state_26089;
(statearr_26114[(15)] = inst_26057__$1);

return statearr_26114;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26089__$1,(26),inst_26061);
} else {
if((state_val_26090 === (19))){
var inst_26044 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26115_26159 = state_26089__$1;
(statearr_26115_26159[(2)] = inst_26044);

(statearr_26115_26159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (11))){
var inst_26007 = (state_26089[(14)]);
var inst_26027 = (state_26089[(2)]);
var inst_26028 = cljs.core.get.call(null,inst_26027,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26029 = cljs.core.get.call(null,inst_26027,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_26030 = inst_26007;
var state_26089__$1 = (function (){var statearr_26116 = state_26089;
(statearr_26116[(7)] = inst_26030);

(statearr_26116[(16)] = inst_26029);

(statearr_26116[(17)] = inst_26028);

return statearr_26116;
})();
var statearr_26117_26160 = state_26089__$1;
(statearr_26117_26160[(2)] = null);

(statearr_26117_26160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (9))){
var inst_26007 = (state_26089[(14)]);
var inst_26024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26007);
var state_26089__$1 = state_26089;
var statearr_26118_26161 = state_26089__$1;
(statearr_26118_26161[(2)] = inst_26024);

(statearr_26118_26161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (5))){
var inst_26022 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26022)){
var statearr_26119_26162 = state_26089__$1;
(statearr_26119_26162[(1)] = (9));

} else {
var statearr_26120_26163 = state_26089__$1;
(statearr_26120_26163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (14))){
var inst_26030 = (state_26089[(7)]);
var inst_26037 = inst_26030.cljs$lang$protocol_mask$partition0$;
var inst_26038 = (inst_26037 & (64));
var inst_26039 = inst_26030.cljs$core$ISeq$;
var inst_26040 = (inst_26038) || (inst_26039);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26040)){
var statearr_26121_26164 = state_26089__$1;
(statearr_26121_26164[(1)] = (17));

} else {
var statearr_26122_26165 = state_26089__$1;
(statearr_26122_26165[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (26))){
var inst_26057 = (state_26089[(15)]);
var inst_26063 = (state_26089[(2)]);
var inst_26064 = cljs.core.nth.call(null,inst_26063,(0),null);
var inst_26065 = cljs.core.nth.call(null,inst_26063,(1),null);
var inst_26066 = cljs.core.not_EQ_.call(null,inst_26065,inst_26057);
var state_26089__$1 = (function (){var statearr_26123 = state_26089;
(statearr_26123[(9)] = inst_26064);

return statearr_26123;
})();
if(inst_26066){
var statearr_26124_26166 = state_26089__$1;
(statearr_26124_26166[(1)] = (27));

} else {
var statearr_26125_26167 = state_26089__$1;
(statearr_26125_26167[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (16))){
var inst_26047 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26047)){
var statearr_26126_26168 = state_26089__$1;
(statearr_26126_26168[(1)] = (20));

} else {
var statearr_26127_26169 = state_26089__$1;
(statearr_26127_26169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (30))){
var inst_26081 = (state_26089[(2)]);
var inst_26030 = inst_26081;
var state_26089__$1 = (function (){var statearr_26128 = state_26089;
(statearr_26128[(7)] = inst_26030);

return statearr_26128;
})();
var statearr_26129_26170 = state_26089__$1;
(statearr_26129_26170[(2)] = null);

(statearr_26129_26170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (10))){
var inst_26007 = (state_26089[(14)]);
var state_26089__$1 = state_26089;
var statearr_26130_26171 = state_26089__$1;
(statearr_26130_26171[(2)] = inst_26007);

(statearr_26130_26171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (18))){
var state_26089__$1 = state_26089;
var statearr_26131_26172 = state_26089__$1;
(statearr_26131_26172[(2)] = false);

(statearr_26131_26172[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (8))){
var inst_26019 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26132_26173 = state_26089__$1;
(statearr_26132_26173[(2)] = inst_26019);

(statearr_26132_26173[(1)] = (5));


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
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var devcards$core$state_machine__20929__auto__ = null;
var devcards$core$state_machine__20929__auto____0 = (function (){
var statearr_26136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26136[(0)] = devcards$core$state_machine__20929__auto__);

(statearr_26136[(1)] = (1));

return statearr_26136;
});
var devcards$core$state_machine__20929__auto____1 = (function (state_26089){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_26089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e26137){if((e26137 instanceof Object)){
var ex__20932__auto__ = e26137;
var statearr_26138_26174 = state_26089;
(statearr_26138_26174[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26175 = state_26089;
state_26089 = G__26175;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
devcards$core$state_machine__20929__auto__ = function(state_26089){
switch(arguments.length){
case 0:
return devcards$core$state_machine__20929__auto____0.call(this);
case 1:
return devcards$core$state_machine__20929__auto____1.call(this,state_26089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__20929__auto____0;
devcards$core$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__20929__auto____1;
return devcards$core$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_26139 = f__21041__auto__.call(null);
(statearr_26139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_26139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25047__auto___26180 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__25047__auto___26180);
}

var seq__26176_26181 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26177_26182 = null;
var count__26178_26183 = (0);
var i__26179_26184 = (0);
while(true){
if((i__26179_26184 < count__26178_26183)){
var property__25048__auto___26185 = cljs.core._nth.call(null,chunk__26177_26182,i__26179_26184);
if(cljs.core.truth_((base__25047__auto___26180[property__25048__auto___26185]))){
(devcards.core.TestDevcard.prototype[property__25048__auto___26185] = (base__25047__auto___26180[property__25048__auto___26185]));
} else {
}

var G__26186 = seq__26176_26181;
var G__26187 = chunk__26177_26182;
var G__26188 = count__26178_26183;
var G__26189 = (i__26179_26184 + (1));
seq__26176_26181 = G__26186;
chunk__26177_26182 = G__26187;
count__26178_26183 = G__26188;
i__26179_26184 = G__26189;
continue;
} else {
var temp__4657__auto___26190 = cljs.core.seq.call(null,seq__26176_26181);
if(temp__4657__auto___26190){
var seq__26176_26191__$1 = temp__4657__auto___26190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26176_26191__$1)){
var c__19684__auto___26192 = cljs.core.chunk_first.call(null,seq__26176_26191__$1);
var G__26193 = cljs.core.chunk_rest.call(null,seq__26176_26191__$1);
var G__26194 = c__19684__auto___26192;
var G__26195 = cljs.core.count.call(null,c__19684__auto___26192);
var G__26196 = (0);
seq__26176_26181 = G__26193;
chunk__26177_26182 = G__26194;
count__26178_26183 = G__26195;
i__26179_26184 = G__26196;
continue;
} else {
var property__25048__auto___26197 = cljs.core.first.call(null,seq__26176_26191__$1);
if(cljs.core.truth_((base__25047__auto___26180[property__25048__auto___26197]))){
(devcards.core.TestDevcard.prototype[property__25048__auto___26197] = (base__25047__auto___26180[property__25048__auto___26197]));
} else {
}

var G__26198 = cljs.core.next.call(null,seq__26176_26191__$1);
var G__26199 = null;
var G__26200 = (0);
var G__26201 = (0);
seq__26176_26181 = G__26198;
chunk__26177_26182 = G__26199;
count__26178_26183 = G__26200;
i__26179_26184 = G__26201;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19949__auto__ = [];
var len__19942__auto___26206 = arguments.length;
var i__19943__auto___26207 = (0);
while(true){
if((i__19943__auto___26207 < len__19942__auto___26206)){
args__19949__auto__.push((arguments[i__19943__auto___26207]));

var G__26208 = (i__19943__auto___26207 + (1));
i__19943__auto___26207 = G__26208;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core26203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core26203 = (function (test_thunks,meta26204){
this.test_thunks = test_thunks;
this.meta26204 = meta26204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core26203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26205,meta26204__$1){
var self__ = this;
var _26205__$1 = this;
return (new devcards.core.t_devcards$core26203(self__.test_thunks,meta26204__$1));
});

devcards.core.t_devcards$core26203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26205){
var self__ = this;
var _26205__$1 = this;
return self__.meta26204;
});

devcards.core.t_devcards$core26203.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core26203.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core26203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta26204","meta26204",-2029419661,null)], null);
});

devcards.core.t_devcards$core26203.cljs$lang$type = true;

devcards.core.t_devcards$core26203.cljs$lang$ctorStr = "devcards.core/t_devcards$core26203";

devcards.core.t_devcards$core26203.cljs$lang$ctorPrWriter = (function (this__19479__auto__,writer__19480__auto__,opt__19481__auto__){
return cljs.core._write.call(null,writer__19480__auto__,"devcards.core/t_devcards$core26203");
});

devcards.core.__GT_t_devcards$core26203 = (function devcards$core$__GT_t_devcards$core26203(test_thunks__$1,meta26204){
return (new devcards.core.t_devcards$core26203(test_thunks__$1,meta26204));
});

}

return (new devcards.core.t_devcards$core26203(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq26202){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26202));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs26210 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26210))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs26210)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs26210))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26210)], null)));
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
return React.render((function (){var attrs26212 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26212))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs26212)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs26212))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26212)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_26242){
var state_val_26243 = (state_26242[(1)]);
if((state_val_26243 === (1))){
var inst_26233 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(2),inst_26233);
} else {
if((state_val_26243 === (2))){
var inst_26235 = (state_26242[(2)]);
var inst_26236 = cljs.core.async.timeout.call(null,(100));
var state_26242__$1 = (function (){var statearr_26244 = state_26242;
(statearr_26244[(7)] = inst_26235);

return statearr_26244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(3),inst_26236);
} else {
if((state_val_26243 === (3))){
var inst_26238 = (state_26242[(2)]);
var inst_26239 = (function (){return ((function (inst_26238,state_val_26243,c__21040__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_26238,state_val_26243,c__21040__auto__))
})();
var inst_26240 = setTimeout(inst_26239,(0));
var state_26242__$1 = (function (){var statearr_26245 = state_26242;
(statearr_26245[(8)] = inst_26238);

return statearr_26245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26242__$1,inst_26240);
} else {
return null;
}
}
}
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__20929__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__20929__auto____0 = (function (){
var statearr_26249 = [null,null,null,null,null,null,null,null,null];
(statearr_26249[(0)] = devcards$core$mount_namespace_$_state_machine__20929__auto__);

(statearr_26249[(1)] = (1));

return statearr_26249;
});
var devcards$core$mount_namespace_$_state_machine__20929__auto____1 = (function (state_26242){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_26242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e26250){if((e26250 instanceof Object)){
var ex__20932__auto__ = e26250;
var statearr_26251_26253 = state_26242;
(statearr_26251_26253[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26254 = state_26242;
state_26242 = G__26254;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__20929__auto__ = function(state_26242){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__20929__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__20929__auto____1.call(this,state_26242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__20929__auto____0;
devcards$core$mount_namespace_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__20929__auto____1;
return devcards$core$mount_namespace_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_26252 = f__21041__auto__.call(null);
(statearr_26252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_26252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1478582022757