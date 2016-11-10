// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.images.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"image-metrics","image-metrics",865490447),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"image-info","image-info",-122073623));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loaded-images","loaded-images",-396086334),(function (db,_){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-metrics","image-metrics",865490447)], null));
}),(function (image_metrics,_){
return cljs.core.filter.call(null,(function (p__22999){
var vec__23000 = p__22999;
var path = cljs.core.nth.call(null,vec__23000,(0),null);
var map__23001 = cljs.core.nth.call(null,vec__23000,(1),null);
var map__23001__$1 = ((((!((map__23001 == null)))?((((map__23001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23001):map__23001);
var aspect = cljs.core.get.call(null,map__23001__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var taken_at = cljs.core.get.call(null,map__23001__$1,new cljs.core.Keyword(null,"taken-at","taken-at",-118016636));
return (cljs.core.some_QMARK_.call(null,aspect)) && (cljs.core.some_QMARK_.call(null,taken_at));
}),image_metrics);
}));
ui.images.subs.date__GT_day = (function ui$images$subs$date__GT_day(date){
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
return (new Date(year,month,day));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("images","by-date","images/by-date",-1636159504),(function (_,___$1){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-images","loaded-images",-396086334)], null));
}),(function (images){
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,cljs.core._GT_),cljs.core.group_by.call(null,cljs.core.comp.call(null,ui.images.subs.date__GT_day,new cljs.core.Keyword(null,"taken-at","taken-at",-118016636),cljs.core.second),images));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("images","preloaded?","images/preloaded?",1614844817),(function (db,p__23003){
var vec__23004 = p__23003;
var _ = cljs.core.nth.call(null,vec__23004,(0),null);
var path = cljs.core.nth.call(null,vec__23004,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preloaded?","preloaded?",-1491476999),path], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("images","cursor","images/cursor",1947952228),(function (db,_){
var map__23005 = cljs.core.get.call(null,db,new cljs.core.Keyword("images","carousel-state","images/carousel-state",-430866318));
var map__23005__$1 = ((((!((map__23005 == null)))?((((map__23005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23005):map__23005);
var items = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var idx = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var path = cljs.core.nth.call(null,items,idx);
var info = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-info","image-info",-122073623),path], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,info], null),cljs.core._EQ_.call(null,(0),idx),cljs.core._EQ_.call(null,(cljs.core.count.call(null,items) - (1)),idx)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("images","info?","images/info?",1824069657),(function (db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("images","info?","images/info?",1824069657));
}));

//# sourceMappingURL=subs.js.map?rel=1478388950802