// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.util');
goog.require('cljs.core');
ui.util.MONTHS = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
ui.util.date_string = (function ui$util$date_string(date){
var year = date.getFullYear();
var month = cljs.core.get.call(null,ui.util.MONTHS,date.getMonth());
var day = date.getDate();
return [cljs.core.str(month),cljs.core.str(" "),cljs.core.str(day),cljs.core.str(", "),cljs.core.str(year)].join('');
});

//# sourceMappingURL=util.js.map?rel=1478396810374