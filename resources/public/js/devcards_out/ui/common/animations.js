// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.common.animations');
goog.require('cljs.core');
goog.require('reagent.core');
ui.common.animations.slide_in_left = (function ui$common$animations$slide_in_left(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_22108 = getComputedStyle(node).width;
(node["style"]["marginLeft"] = [cljs.core.str("-"),cljs.core.str(target_22108)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-left 100ms ease-out");

(node["style"]["marginLeft"] = (0));

return cb.call(null);
});
ui.common.animations.slide_out_left = (function ui$common$animations$slide_out_left(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-left 100ms ease-out");

(node["style"]["marginLeft"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});
ui.common.animations.slide_in_right = (function ui$common$animations$slide_in_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target_22109 = getComputedStyle(node).width;
(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target_22109)].join(''));

(node["offsetLeft"]);

(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = (0));

return cb.call(null);
});
ui.common.animations.slide_out_right = (function ui$common$animations$slide_out_right(cb){
var owner = this;
var node = reagent.core.dom_node.call(null,owner);
(node["style"]["width"] = "auto");

var target = getComputedStyle(node).width;
(node["style"]["transition"] = "margin-right 100ms ease-out");

(node["style"]["marginRight"] = [cljs.core.str("-"),cljs.core.str(target)].join(''));

return node.addEventListener("transitionend",cb);
});

//# sourceMappingURL=animations.js.map?rel=1478388210990