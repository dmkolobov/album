// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.animations');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.core');
ui.views.common.animations.transition_group = reagent.core.adapt_react_class.call(null,React.addons.TransitionGroup);
ui.views.common.animations.multiplier = (10);
ui.views.common.animations.duration = (function ui$views$common$animations$duration(x){
return (ui.views.common.animations.multiplier * x);
});
ui.views.common.animations.transition = (function ui$views$common$animations$transition(var_args){
var args__19949__auto__ = [];
var len__19942__auto___52321 = arguments.length;
var i__19943__auto___52322 = (0);
while(true){
if((i__19943__auto___52322 < len__19942__auto___52321)){
args__19949__auto__.push((arguments[i__19943__auto___52322]));

var G__52323 = (i__19943__auto___52322 + (1));
i__19943__auto___52322 = G__52323;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.animations.transition.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.animations.transition.cljs$core$IFn$_invoke$arity$variadic = (function (p__52318){
var map__52319 = p__52318;
var map__52319__$1 = ((((!((map__52319 == null)))?((((map__52319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52319):map__52319);
var name = cljs.core.get.call(null,map__52319__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class$ = cljs.core.get.call(null,map__52319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var content = cljs.core.get.call(null,map__52319__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.animations.transition_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),name], null),(cljs.core.truth_(content)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)):null)], null);
});

ui.views.common.animations.transition.cljs$lang$maxFixedArity = (0);

ui.views.common.animations.transition.cljs$lang$applyTo = (function (seq52317){
return ui.views.common.animations.transition.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52317));
});
ui.views.common.animations.slide_in_left = (function ui$views$common$animations$slide_in_left(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transform"] = [cljs.core.str("translate3d(-"),cljs.core.str(target),cljs.core.str(", 0, 0)")].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "transform 100ms ease-out");

(node["style"]["transform"] = [cljs.core.str("translate3d(0, 0, 0)")].join(''));

return cb.call(null);
});
ui.views.common.animations.slide_out_left = (function ui$views$common$animations$slide_out_left(cb){
cljs.core.println.call(null,"leave");

var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "transform 100ms ease-out");

node.addEventListener("transitionend",cb);

return (node["style"]["transform"] = [cljs.core.str("translate3d(-"),cljs.core.str(target),cljs.core.str(", 0, 0)")].join(''));
});
ui.views.common.animations.slide_in_right = (function ui$views$common$animations$slide_in_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_52324 = getComputedStyle(node).width;
(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target_52324)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = (0));

return cb.call(null);
});
ui.views.common.animations.slide_out_right = (function ui$views$common$animations$slide_out_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});
ui.views.common.animations.slide_left_transition = (function ui$views$common$animations$slide_left_transition(render_fn){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-enter","component-will-enter",-1012533217),ui.views.common.animations.slide_in_left,new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),ui.views.common.animations.slide_out_left,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_fn], null));
});
ui.views.common.animations.slide_right_transition = (function ui$views$common$animations$slide_right_transition(render_fn){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-enter","component-will-enter",-1012533217),ui.views.common.animations.slide_in_right,new cljs.core.Keyword(null,"component-will-leave","component-will-leave",747435020),ui.views.common.animations.slide_out_right,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_fn], null));
});

//# sourceMappingURL=animations.js.map?rel=1478766781283