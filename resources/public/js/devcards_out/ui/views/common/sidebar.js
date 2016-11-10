// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.sidebar');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('reagent.core');
ui.views.common.sidebar.transition_group = reagent.core.adapt_react_class.call(null,React.addons.TransitionGroup);
ui.views.common.sidebar.slide_in_right = (function ui$views$common$sidebar$slide_in_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_23017 = getComputedStyle(node).width;
(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target_23017)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = (0));

return cb.call(null);
});
ui.views.common.sidebar.slide_out_right = (function ui$views$common$sidebar$slide_out_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});
ui.views.common.sidebar.right_sheet = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-enter","component-will-enter",-1012533217),ui.views.common.sidebar.slide_in_right,new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),ui.views.common.sidebar.slide_out_right,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),cljs.core.identity], null));
ui.views.common.sidebar.sidebar_split = (function ui$views$common$sidebar$sidebar_split(var_args){
var args__19919__auto__ = [];
var len__19912__auto___23022 = arguments.length;
var i__19913__auto___23023 = (0);
while(true){
if((i__19913__auto___23023 < len__19912__auto___23022)){
args__19919__auto__.push((arguments[i__19913__auto___23023]));

var G__23024 = (i__19913__auto___23023 + (1));
i__19913__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.sidebar.sidebar_split.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.sidebar.sidebar_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__23019){
var map__23020 = p__23019;
var map__23020__$1 = ((((!((map__23020 == null)))?((((map__23020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23020):map__23020);
var class$ = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var content = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sidebar = cljs.core.get.call(null,map__23020__$1,new cljs.core.Keyword(null,"sidebar","sidebar",35784458));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.sidebar.transition_group,(cljs.core.truth_(sidebar)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.sidebar.right_sheet,sidebar], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"sidebar"], null)):null)], null)], null)], null);
});

ui.views.common.sidebar.sidebar_split.cljs$lang$maxFixedArity = (0);

ui.views.common.sidebar.sidebar_split.cljs$lang$applyTo = (function (seq23018){
return ui.views.common.sidebar.sidebar_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23018));
});

//# sourceMappingURL=sidebar.js.map?rel=1478388950879