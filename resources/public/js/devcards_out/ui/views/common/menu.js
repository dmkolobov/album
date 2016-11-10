// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.menu');
goog.require('cljs.core');
ui.views.common.menu.menu = (function ui$views$common$menu$menu(var_args){
var args__19919__auto__ = [];
var len__19912__auto___22619 = arguments.length;
var i__19913__auto___22620 = (0);
while(true){
if((i__19913__auto___22620 < len__19912__auto___22619)){
args__19919__auto__.push((arguments[i__19913__auto___22620]));

var G__22621 = (i__19913__auto___22620 + (1));
i__19913__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.common.menu.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.common.menu.menu.cljs$core$IFn$_invoke$arity$variadic = (function (p__22612){
var map__22613 = p__22612;
var map__22613__$1 = ((((!((map__22613 == null)))?((((map__22613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22613):map__22613);
var model = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"model","model",331153215));
var items = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_change = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label_fn = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22613__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),cljs.core.doall.call(null,(function (){var iter__19623__auto__ = ((function (map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$){
return (function ui$views$common$menu$iter__22615(s__22616){
return (new cljs.core.LazySeq(null,((function (map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$){
return (function (){
var s__22616__$1 = s__22616;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22616__$1);
if(temp__4657__auto__){
var s__22616__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22616__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__22616__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__22618 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__22617 = (0);
while(true){
if((i__22617 < size__19622__auto__)){
var item = cljs.core._nth.call(null,c__19621__auto__,i__22617);
cljs.core.chunk_append.call(null,b__22618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,id_fn.call(null,item),cljs.core.deref.call(null,model)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22617,item,c__19621__auto__,size__19622__auto__,b__22618,s__22616__$2,temp__4657__auto__,map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$){
return (function (){
return on_change.call(null,id_fn.call(null,item));
});})(i__22617,item,c__19621__auto__,size__19622__auto__,b__22618,s__22616__$2,temp__4657__auto__,map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$))
], null),label_fn.call(null,item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,item)], null)));

var G__22622 = (i__22617 + (1));
i__22617 = G__22622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22618),ui$views$common$menu$iter__22615.call(null,cljs.core.chunk_rest.call(null,s__22616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22618),null);
}
} else {
var item = cljs.core.first.call(null,s__22616__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,id_fn.call(null,item),cljs.core.deref.call(null,model)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__22616__$2,temp__4657__auto__,map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$){
return (function (){
return on_change.call(null,id_fn.call(null,item));
});})(item,s__22616__$2,temp__4657__auto__,map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$))
], null),label_fn.call(null,item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,item)], null)),ui$views$common$menu$iter__22615.call(null,cljs.core.rest.call(null,s__22616__$2)));
}
} else {
return null;
}
break;
}
});})(map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$))
,null,null));
});})(map__22613,map__22613__$1,model,items,on_change,label_fn,id_fn,class$))
;
return iter__19623__auto__.call(null,items);
})())], null);
});

ui.views.common.menu.menu.cljs$lang$maxFixedArity = (0);

ui.views.common.menu.menu.cljs$lang$applyTo = (function (seq22611){
return ui.views.common.menu.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22611));
});

//# sourceMappingURL=menu.js.map?rel=1478388949381