// Compiled by ClojureScript 1.8.40 {}
goog.provide('layout.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('layout.data');
layout.subs.selector = (function layout$subs$selector(key_fn,coll){
var cache = cljs.core.atom.call(null,cljs.core.group_by.call(null,key_fn,coll));
return ((function (cache){
return (function (k){
var item = cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cache),k));
cljs.core.swap_BANG_.call(null,cache,cljs.core.update,k,cljs.core.rest);

return item;
});
;})(cache))
});
layout.subs.photos_per_screen = 3.5;
if(typeof layout.subs.linear_partition !== 'undefined'){
} else {
layout.subs.linear_partition = require("linear-partitioning");
}
layout.subs.num_rows = (function layout$subs$num_rows(p__25127,aspects){
var map__25130 = p__25127;
var map__25130__$1 = ((((!((map__25130 == null)))?((((map__25130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);
var width = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return Math.round((((height / layout.subs.photos_per_screen) * cljs.core.reduce.call(null,cljs.core._PLUS_,aspects)) / width));
});
layout.subs.item_weight = (function layout$subs$item_weight(item){
return ((100) * cljs.core.second.call(null,item));
});
/**
 * Partition the provided items into 'n' rows, where 'n' depends on
 *   'photos-per-screen', and each row has an approximately equal sum of
 *   aspect ratios.
 */
layout.subs.compute_partitions = (function layout$subs$compute_partitions(rect,items){
var aspects = cljs.core.map.call(null,cljs.core.second,items);
var n = layout.subs.num_rows.call(null,rect,aspects);
return layout.subs.linear_partition.call(null,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (aspects,n){
return (function (p1__25132_SHARP_){
return ((100) * p1__25132_SHARP_);
});})(aspects,n))
,aspects)),n);
});
/**
 * Given a layout container rect and a sequence of items, return a sequence
 *   of item sequences, where the sum of aspects in each item sequence is
 *   as equal as possible.
 */
layout.subs.compute_rows = (function layout$subs$compute_rows(rect,items){
cljs.core.println.call(null,"computing rows");

var select = layout.subs.selector.call(null,layout.subs.item_weight,items);
var partitions = layout.subs.compute_partitions.call(null,rect,items);
if(cljs.core.seq.call(null,partitions)){
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (select,partitions){
return (function (p1__25133_SHARP_){
return cljs.core.map.call(null,select,p1__25133_SHARP_);
});})(select,partitions))
,partitions));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items], null);
}
});
layout.subs.row_aspect = (function layout$subs$row_aspect(row){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.second,row));
});
/**
 * Return the width of the 'row' accounting for 'gap' pixels between
 *   each row item.
 */
layout.subs.row_width = (function layout$subs$row_width(row,p__25134,gap){
var map__25137 = p__25134;
var map__25137__$1 = ((((!((map__25137 == null)))?((((map__25137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25137):map__25137);
var width = cljs.core.get.call(null,map__25137__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (width - (gap * (cljs.core.count.call(null,row) - (1))));
});
/**
 * Returns a pair [row-height row], so 'row-height' is defined so
 *   that the row takes up the entire width of the enclosing 'rect',
 *   accounting for 'gap' pixels between each row item.
 */
layout.subs.fit_row = (function layout$subs$fit_row(row,rect,gap){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(layout.subs.row_width.call(null,row,rect,gap) / layout.subs.row_aspect.call(null,row)),row], null);
});
/**
 * Returns a vector [row-height row], where that `row-height` is defined
 *   so that the width of the row fills the provided `rect`.
 */
layout.subs.fit_last_row = (function layout$subs$fit_last_row(row,p__25139,gap){
var map__25142 = p__25139;
var map__25142__$1 = ((((!((map__25142 == null)))?((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);
var rect = map__25142__$1;
var width = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var row_height = (height / layout.subs.photos_per_screen);
var row_width = ((row_height * layout.subs.row_aspect.call(null,row)) + (gap * (cljs.core.count.call(null,row) - (1))));
if((row_width >= width)){
return layout.subs.fit_row.call(null,row,rect,gap);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_height,row], null);
}
});
layout.subs.fit_rows = (function layout$subs$fit_rows(rows,rect,gap){
var scaled = cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__25144_SHARP_){
return layout.subs.fit_row.call(null,p1__25144_SHARP_,rect,gap);
}),cljs.core.butlast.call(null,rows)),layout.subs.fit_last_row.call(null,cljs.core.last.call(null,rows),rect,gap));
return scaled;
});
/**
 * Returns a layout where each element of 'rows' is scaled to fit
 *   the width of the enclosing 'rect' with 'gap' pixels between each
 *   item on all sides.
 * 
 *   The value returned implements IWillLayout and can participate in other
 *   layouts.
 */
layout.subs.scale_rows = (function layout$subs$scale_rows(p__25145,rows,gap){
var map__25153 = p__25145;
var map__25153__$1 = ((((!((map__25153 == null)))?((((map__25153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25153):map__25153);
var rect = map__25153__$1;
var width = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"width","width",-384071477));
cljs.core.println.call(null,"scaling rows");

var scaled_rows = layout.subs.fit_rows.call(null,rows,rect,gap);
var vec__25155 = scaled_rows;
var vec__25156 = cljs.core.nth.call(null,vec__25155,(0),null);
var height = cljs.core.nth.call(null,vec__25156,(0),null);
var row = cljs.core.nth.call(null,vec__25156,(1),null);
var rows__$1 = cljs.core.nthnext.call(null,vec__25155,(1));
var x = (0);
var y = (0);
var width__$1 = (0);
var height__$1 = height;
var row__$1 = row;
var rows__$2 = rows__$1;
var paint_list = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.seq.call(null,row__$1)){
var vec__25157 = cljs.core.first.call(null,row__$1);
var id = cljs.core.nth.call(null,vec__25157,(0),null);
var aspect = cljs.core.nth.call(null,vec__25157,(1),null);
var item_width = (aspect * height__$1);
var item_end = (x + item_width);
var rect__$1 = layout.data.map__GT_PaintRect.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),item_width,new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null));
var G__25160 = (item_end + gap);
var G__25161 = y;
var G__25162 = (function (){var x__19174__auto__ = width__$1;
var y__19175__auto__ = item_end;
return ((x__19174__auto__ > y__19175__auto__) ? x__19174__auto__ : y__19175__auto__);
})();
var G__25163 = height__$1;
var G__25164 = cljs.core.rest.call(null,row__$1);
var G__25165 = rows__$2;
var G__25166 = cljs.core.conj_BANG_.call(null,paint_list,rect__$1);
x = G__25160;
y = G__25161;
width__$1 = G__25162;
height__$1 = G__25163;
row__$1 = G__25164;
rows__$2 = G__25165;
paint_list = G__25166;
continue;
} else {
if(cljs.core.seq.call(null,rows__$2)){
var vec__25158 = rows__$2;
var vec__25159 = cljs.core.nth.call(null,vec__25158,(0),null);
var height_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25159,(0),null);
var row__$2 = cljs.core.nth.call(null,vec__25159,(1),null);
var rows__$3 = cljs.core.nthnext.call(null,vec__25158,(1));
var y_SINGLEQUOTE_ = ((y + height__$1) + gap);
var G__25167 = (0);
var G__25168 = y_SINGLEQUOTE_;
var G__25169 = width__$1;
var G__25170 = height_SINGLEQUOTE_;
var G__25171 = row__$2;
var G__25172 = rows__$3;
var G__25173 = paint_list;
x = G__25167;
y = G__25168;
width__$1 = G__25169;
height__$1 = G__25170;
row__$1 = G__25171;
rows__$2 = G__25172;
paint_list = G__25173;
continue;
} else {
var paint_list__$1 = cljs.core.persistent_BANG_.call(null,paint_list);
var height__$2 = (y + height__$1);
return layout.data.map__GT_Layout.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$2], null),new cljs.core.Keyword(null,"paint-list","paint-list",319909561),paint_list__$1,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),paint_list__$1)], null));

}
}
break;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","metrics","layouts/metrics",435129894),(function (db,p__25174){
var vec__25175 = p__25174;
var _ = cljs.core.nth.call(null,vec__25175,(0),null);
var window_id = cljs.core.nth.call(null,vec__25175,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","metrics","layouts/metrics",435129894),window_id], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","base-rect","layouts/base-rect",1431512843),(function (p__25176){
var vec__25177 = p__25176;
var _ = cljs.core.nth.call(null,vec__25177,(0),null);
var window_id = cljs.core.nth.call(null,vec__25177,(1),null);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","metrics","layouts/metrics",435129894),window_id], null));
}),(function (window,_){
return new cljs.core.Keyword(null,"base-rect","base-rect",1337932388).cljs$core$IFn$_invoke$arity$1(window);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","scale-rect","layouts/scale-rect",1430858443),(function (p__25178){
var vec__25179 = p__25178;
var _ = cljs.core.nth.call(null,vec__25179,(0),null);
var window_id = cljs.core.nth.call(null,vec__25179,(1),null);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","metrics","layouts/metrics",435129894),window_id], null));
}),(function (window,_){
return new cljs.core.Keyword(null,"scale-rect","scale-rect",1322043458).cljs$core$IFn$_invoke$arity$1(window);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","perfect-rows","layouts/perfect-rows",2007493771),(function (p__25180){
var vec__25181 = p__25180;
var _ = cljs.core.nth.call(null,vec__25181,(0),null);
var window_id = cljs.core.nth.call(null,vec__25181,(1),null);
var items = cljs.core.nth.call(null,vec__25181,(2),null);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","base-rect","layouts/base-rect",1431512843),window_id], null));
}),(function (base_rect,p__25182){
var vec__25183 = p__25182;
var _ = cljs.core.nth.call(null,vec__25183,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25183,(1),null);
var items = cljs.core.nth.call(null,vec__25183,(2),null);
return layout.subs.compute_rows.call(null,base_rect,items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","perfect-layout","layouts/perfect-layout",1128091322),(function (p__25184,p__25185){
var vec__25186 = p__25184;
var _ = cljs.core.nth.call(null,vec__25186,(0),null);
var window_id = cljs.core.nth.call(null,vec__25186,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__25186,(2),null);
var vec__25187 = p__25185;
var items = cljs.core.nth.call(null,vec__25187,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","scale-rect","layouts/scale-rect",1430858443),window_id], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","perfect-rows","layouts/perfect-rows",2007493771),window_id,items], null))], null);
}),(function (p__25188,p__25189){
var vec__25190 = p__25188;
var scale_rect = cljs.core.nth.call(null,vec__25190,(0),null);
var rows = cljs.core.nth.call(null,vec__25190,(1),null);
var vec__25191 = p__25189;
var _ = cljs.core.nth.call(null,vec__25191,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25191,(1),null);
var gap = cljs.core.nth.call(null,vec__25191,(2),null);
return layout.subs.scale_rows.call(null,scale_rect,rows,gap);
}));
/**
 * Takes a window rect, an integer gap, and a sequence of layouts
 *   as inputs and returns a sequence of layout rows, so that thin layouts
 *   are displayed on the same row.
 */
layout.subs.clump_layouts = (function layout$subs$clump_layouts(p__25192,gap,layouts){
var map__25198 = p__25192;
var map__25198__$1 = ((((!((map__25198 == null)))?((((map__25198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25198):map__25198);
var rect = map__25198__$1;
var width = cljs.core.get.call(null,map__25198__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.PersistentVector.EMPTY;
var current_row = cljs.core.PersistentVector.EMPTY;
var current_width = (0);
var layouts__$1 = layouts;
while(true){
if(cljs.core.seq.call(null,layouts__$1)){
var vec__25200 = layouts__$1;
var map__25201 = cljs.core.nth.call(null,vec__25200,(0),null);
var map__25201__$1 = ((((!((map__25201 == null)))?((((map__25201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25201):map__25201);
var layout__$1 = map__25201__$1;
var rect__$1 = cljs.core.get.call(null,map__25201__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var layouts_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__25200,(1));
var layout_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect__$1);
if((Math.abs((layout_width - width)) < gap)){
var G__25203 = (function (){var temp__4655__auto__ = cljs.core.seq.call(null,current_row);
if(temp__4655__auto__){
var row = temp__4655__auto__;
return cljs.core.conj.call(null,rows,row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout__$1], null));
} else {
return cljs.core.conj.call(null,rows,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout__$1], null));
}
})();
var G__25204 = cljs.core.PersistentVector.EMPTY;
var G__25205 = (0);
var G__25206 = layouts_SINGLEQUOTE_;
rows = G__25203;
current_row = G__25204;
current_width = G__25205;
layouts__$1 = G__25206;
continue;
} else {
if(((current_width + layout_width) <= width)){
var G__25207 = rows;
var G__25208 = cljs.core.conj.call(null,current_row,layout__$1);
var G__25209 = ((current_width + layout_width) + gap);
var G__25210 = layouts_SINGLEQUOTE_;
rows = G__25207;
current_row = G__25208;
current_width = G__25209;
layouts__$1 = G__25210;
continue;
} else {
var G__25211 = cljs.core.conj.call(null,rows,current_row);
var G__25212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout__$1], null);
var G__25213 = layout_width;
var G__25214 = layouts_SINGLEQUOTE_;
rows = G__25211;
current_row = G__25212;
current_width = G__25213;
layouts__$1 = G__25214;
continue;

}
}
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,current_row);
if(temp__4655__auto__){
var row = temp__4655__auto__;
return cljs.core.conj.call(null,rows,row);
} else {
return rows;
}
}
break;
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("layouts","grouped-layout","layouts/grouped-layout",1156680198),(function (p__25216,p__25217){
var vec__25218 = p__25216;
var _ = cljs.core.nth.call(null,vec__25218,(0),null);
var window_id = cljs.core.nth.call(null,vec__25218,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__25218,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__25218,(3),null);
var vec__25219 = p__25217;
var groups = cljs.core.nth.call(null,vec__25219,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","scale-rect","layouts/scale-rect",1430858443),window_id], null))], null),cljs.core.map.call(null,((function (vec__25218,_,window_id,___$1,___$2,vec__25219,groups){
return (function (p__25220){
var vec__25221 = p__25220;
var group_id = cljs.core.nth.call(null,vec__25221,(0),null);
var group_items = cljs.core.nth.call(null,vec__25221,(1),null);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layouts","perfect-rows","layouts/perfect-rows",2007493771),window_id,group_items], null));
});})(vec__25218,_,window_id,___$1,___$2,vec__25219,groups))
,groups));
}),(function (p__25222,p__25223,p__25224){
var vec__25225 = p__25222;
var scale_rect = cljs.core.nth.call(null,vec__25225,(0),null);
var row_groups = cljs.core.nthnext.call(null,vec__25225,(1));
var vec__25226 = p__25223;
var _ = cljs.core.nth.call(null,vec__25226,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25226,(1),null);
var item_gap = cljs.core.nth.call(null,vec__25226,(2),null);
var group_gap = cljs.core.nth.call(null,vec__25226,(3),null);
var vec__25227 = p__25224;
var groups = cljs.core.nth.call(null,vec__25227,(0),null);
var layout_groups = cljs.core.map.call(null,((function (vec__25225,scale_rect,row_groups,vec__25226,_,___$1,item_gap,group_gap,vec__25227,groups){
return (function (layout__$1,id,items){
return cljs.core.assoc.call(null,layout__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});})(vec__25225,scale_rect,row_groups,vec__25226,_,___$1,item_gap,group_gap,vec__25227,groups))
,cljs.core.map.call(null,((function (vec__25225,scale_rect,row_groups,vec__25226,_,___$1,item_gap,group_gap,vec__25227,groups){
return (function (p1__25215_SHARP_){
return layout.subs.scale_rows.call(null,scale_rect,p1__25215_SHARP_,item_gap);
});})(vec__25225,scale_rect,row_groups,vec__25226,_,___$1,item_gap,group_gap,vec__25227,groups))
,row_groups),cljs.core.keys.call(null,groups));
return layout.subs.clump_layouts.call(null,scale_rect,group_gap,layout_groups);
}));

//# sourceMappingURL=subs.js.map?rel=1478388956615