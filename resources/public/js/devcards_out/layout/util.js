// Compiled by ClojureScript 1.8.40 {}
goog.provide('layout.util');
goog.require('cljs.core');
layout.util.selector = (function layout$util$selector(key_fn,coll){
var cache = cljs.core.atom.call(null,cljs.core.group_by.call(null,key_fn,coll));
return ((function (cache){
return (function (k){
var item = cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cache),k));
cljs.core.swap_BANG_.call(null,cache,cljs.core.update,k,cljs.core.rest);

return item;
});
;})(cache))
});

//# sourceMappingURL=util.js.map?rel=1478297171833