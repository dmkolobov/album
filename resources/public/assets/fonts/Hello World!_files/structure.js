// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.structure');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('reagent.core');
ui.views.common.structure.transition_group = reagent.core.adapt_react_class.call(null,React.addons.TransitionGroup);
ui.views.common.structure.slide_in_left = (function ui$views$common$structure$slide_in_left(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_40622 = getComputedStyle(node).width;
(node["style"]["marginLeft"] = [cljs.core.str("-"),cljs.core.str(target_40622)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-left 100ms ease-out");

(node["style"]["marginLeft"] = (0));

return cb.call(null);
});
ui.views.common.structure.slide_out_left = (function ui$views$common$structure$slide_out_left(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-left 100ms ease-out");

(node["style"]["marginLeft"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});
ui.views.common.structure.slide_in_right = (function ui$views$common$structure$slide_in_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_40623 = getComputedStyle(node).width;
(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target_40623)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = (0));

return cb.call(null);
});
ui.views.common.structure.slide_out_right = (function ui$views$common$structure$slide_out_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});
ui.views.common.structure.side_sheet = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-enter","component-will-enter",-1012533217),ui.views.common.structure.slide_in_left,new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),ui.views.common.structure.slide_out_left,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (nav){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav shadow-1",new cljs.core.Keyword(null,"child","child",623967545),nav], null);
})], null));
ui.views.common.structure.right_sheet = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-enter","component-will-enter",-1012533217),ui.views.common.structure.slide_in_right,new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),ui.views.common.structure.slide_out_right,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (nav){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"right-nav shadow-1",new cljs.core.Keyword(null,"child","child",623967545),nav], null);
})], null));
ui.views.common.structure.main = (function ui$views$common$structure$main(var_args){
var args__19919__auto__ = [];
var len__19912__auto___40628 = arguments.length;
var i__19913__auto___40629 = (0);
while(true){
if((i__19913__auto___40629 < len__19912__auto___40628)){
args__19919__auto__.push((arguments[i__19913__auto___40629]));

var G__40630 = (i__19913__auto___40629 + (1));
i__19913__auto___40629 = G__40630;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic = (function (p__40625){
var map__40626 = p__40625;
var map__40626__$1 = ((((!((map__40626 == null)))?((((map__40626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40626):map__40626);
var app_bar = cljs.core.get.call(null,map__40626__$1,new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908));
var side_nav = cljs.core.get.call(null,map__40626__$1,new cljs.core.Keyword(null,"side-nav","side-nav",1449518636));
var content = cljs.core.get.call(null,map__40626__$1,new cljs.core.Keyword(null,"content","content",15833224));
var right_nav = cljs.core.get.call(null,map__40626__$1,new cljs.core.Keyword(null,"right-nav","right-nav",-1158261400));
var attr = cljs.core.get.call(null,map__40626__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"structure",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.transition_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"side-nav"], null),(cljs.core.truth_(side_nav)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.side_sheet,side_nav], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"side-nav"], null)):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"app-bar",new cljs.core.Keyword(null,"child","child",623967545),app_bar], null),content], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.transition_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"right-nav"], null),(cljs.core.truth_(right_nav)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.right_sheet,right_nav], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"right-nav"], null)):null)], null)], null)], null);
});

ui.views.common.structure.main.cljs$lang$maxFixedArity = (0);

ui.views.common.structure.main.cljs$lang$applyTo = (function (seq40624){
return ui.views.common.structure.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40624));
});

//# sourceMappingURL=structure.js.map?rel=1478383506186