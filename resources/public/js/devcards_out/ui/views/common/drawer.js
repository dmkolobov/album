// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.drawer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
ui.views.common.drawer.transition = reagent.core.adapt_react_class.call(null,React.addons.TransitionGroup);
ui.views.common.drawer.drawer_child = (function ui$views$common$drawer$drawer_child(enter,resize){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-will-appear","component-will-appear",-1771830862),(function (cb){
var owner = this;
var key = cljs.core.second.call(null,reagent.core.argv.call(null,owner));
var node = reagent.core.dom_node.call(null,owner);
return enter.call(null,key,node,cb);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (owner){
var key = cljs.core.second.call(null,reagent.core.argv.call(null,owner));
var node = reagent.core.dom_node.call(null,owner);
return (new ResizeSensor(node,((function (key,node){
return (function (){
cljs.core.println.call(null,"resized",key,Date.now());

return resize.call(null);
});})(key,node))
));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (key,child){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-child","div.drawer-child",-1309964241),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(key),cljs.core.str(" drawer-child")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),child], null);
})], null));
});
ui.views.common.drawer.register_child = (function ui$views$common$drawer$register_child(state,key,node,callback){
return cljs.core.swap_BANG_.call(null,state,(function (p__48706){
var map__48707 = p__48706;
var map__48707__$1 = ((((!((map__48707 == null)))?((((map__48707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48707):map__48707);
var nodes = cljs.core.get.call(null,map__48707__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var callbacks = cljs.core.get.call(null,map__48707__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.assoc.call(null,nodes,key,node),new cljs.core.Keyword(null,"callbacks","callbacks",71591310),cljs.core.assoc.call(null,callbacks,key,callback)], null);
}));
});
ui.views.common.drawer.translate_3d = (function ui$views$common$drawer$translate_3d(x,y){
return [cljs.core.str("translate3d("),cljs.core.str(x),cljs.core.str("px,"),cljs.core.str(y),cljs.core.str("px,0)")].join('');
});
ui.views.common.drawer.layout = (function ui$views$common$drawer$layout(keys,nodes){
var keys__$1 = keys;
var max_width = (0);
var offset = (0);
var offsets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys__$1)){
var vec__48710 = keys__$1;
var key = cljs.core.nth.call(null,vec__48710,(0),null);
var keys_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__48710,(1));
var node = cljs.core.get.call(null,nodes,key);
var box = node.getBoundingClientRect();
var width = box.width;
var height = box.height;
var G__48711 = keys_SINGLEQUOTE_;
var G__48712 = (function (){var x__19204__auto__ = width;
var y__19205__auto__ = max_width;
return ((x__19204__auto__ > y__19205__auto__) ? x__19204__auto__ : y__19205__auto__);
})();
var G__48713 = (offset + height);
var G__48714 = cljs.core.conj.call(null,offsets,offset);
keys__$1 = G__48711;
max_width = G__48712;
offset = G__48713;
offsets = G__48714;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_width,offsets], null);
}
break;
}
});
ui.views.common.drawer.intro_sequence = (function ui$views$common$drawer$intro_sequence(_,max_width,offsets){
return cljs.core.map_indexed.call(null,(function (idx,offset){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),ui.views.common.drawer.translate_3d.call(null,max_width,offset),new cljs.core.Keyword(null,"final","final",1157881357),ui.views.common.drawer.translate_3d.call(null,(0),offset),new cljs.core.Keyword(null,"duration","duration",1444101068),(150),new cljs.core.Keyword(null,"delay","delay",-574225219),((40) * idx)], null);
}),offsets);
});
ui.views.common.drawer.resize_sequence = (function ui$views$common$drawer$resize_sequence(pw,w,offsets){
return cljs.core.map_indexed.call(null,(function (idx,offset){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"final","final",1157881357),ui.views.common.drawer.translate_3d.call(null,(0),offset),new cljs.core.Keyword(null,"duration","duration",1444101068),(1000),new cljs.core.Keyword(null,"delay","delay",-574225219),(((w > pw))?(400):(0))], null);
}),offsets);
});
ui.views.common.drawer.drawer = (function ui$views$common$drawer$drawer(var_args){
var args__19949__auto__ = [];
var len__19942__auto___48833 = arguments.length;
var i__19943__auto___48834 = (0);
while(true){
if((i__19943__auto___48834 < len__19942__auto___48833)){
args__19949__auto__.push((arguments[i__19943__auto___48834]));

var G__48835 = (i__19943__auto___48834 + (1));
i__19943__auto___48834 = G__48835;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parent-node","parent-node",-605954869),null,new cljs.core.Keyword(null,"prev-width","prev-width",92230696),(0),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"callbacks","callbacks",71591310),cljs.core.PersistentArrayMap.EMPTY], null));
var animate_chan = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(1)));
var child_fn = ui.views.common.drawer.drawer_child.call(null,cljs.core.partial.call(null,ui.views.common.drawer.register_child,state),cljs.core.partial.call(null,cljs.core.async.put_BANG_,animate_chan,ui.views.common.drawer.resize_sequence));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (state,animate_chan,child_fn){
return (function (this$){
var c__20987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20987__auto__,state,animate_chan,child_fn){
return (function (){
var f__20988__auto__ = (function (){var switch__20966__auto__ = ((function (c__20987__auto__,state,animate_chan,child_fn){
return (function (state_48787){
var state_val_48788 = (state_48787[(1)]);
if((state_val_48788 === (7))){
var inst_48740 = (state_48787[(2)]);
var state_48787__$1 = state_48787;
if(cljs.core.truth_(inst_48740)){
var statearr_48789_48836 = state_48787__$1;
(statearr_48789_48836[(1)] = (11));

} else {
var statearr_48790_48837 = state_48787__$1;
(statearr_48790_48837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (20))){
var inst_48752 = (state_48787[(7)]);
var inst_48769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48752);
var state_48787__$1 = state_48787;
var statearr_48791_48838 = state_48787__$1;
(statearr_48791_48838[(2)] = inst_48769);

(statearr_48791_48838[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (1))){
var state_48787__$1 = state_48787;
var statearr_48792_48839 = state_48787__$1;
(statearr_48792_48839[(2)] = null);

(statearr_48792_48839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (4))){
var inst_48725 = (state_48787[(8)]);
var inst_48724 = (state_48787[(2)]);
var inst_48725__$1 = cljs.core.deref.call(null,state);
var inst_48727 = (inst_48725__$1 == null);
var inst_48728 = cljs.core.not.call(null,inst_48727);
var state_48787__$1 = (function (){var statearr_48793 = state_48787;
(statearr_48793[(9)] = inst_48724);

(statearr_48793[(8)] = inst_48725__$1);

return statearr_48793;
})();
if(inst_48728){
var statearr_48794_48840 = state_48787__$1;
(statearr_48794_48840[(1)] = (5));

} else {
var statearr_48795_48841 = state_48787__$1;
(statearr_48795_48841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (15))){
var state_48787__$1 = state_48787;
var statearr_48796_48842 = state_48787__$1;
(statearr_48796_48842[(2)] = false);

(statearr_48796_48842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (21))){
var inst_48752 = (state_48787[(7)]);
var state_48787__$1 = state_48787;
var statearr_48797_48843 = state_48787__$1;
(statearr_48797_48843[(2)] = inst_48752);

(statearr_48797_48843[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (13))){
var inst_48745 = (state_48787[(10)]);
var inst_48752 = (state_48787[(7)]);
var inst_48750 = (state_48787[(11)]);
var inst_48745__$1 = (state_48787[(2)]);
var inst_48746 = cljs.core.get.call(null,inst_48745__$1,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869));
var inst_48747 = cljs.core.get.call(null,inst_48745__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var inst_48748 = cljs.core.get.call(null,inst_48745__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
var inst_48749 = cljs.core.get.call(null,inst_48745__$1,new cljs.core.Keyword(null,"prev-width","prev-width",92230696));
var inst_48750__$1 = reagent.core.argv.call(null,this$);
var inst_48751 = cljs.core.nth.call(null,inst_48750__$1,(0),null);
var inst_48752__$1 = cljs.core.nthnext.call(null,inst_48750__$1,(1));
var inst_48754 = (inst_48752__$1 == null);
var inst_48755 = cljs.core.not.call(null,inst_48754);
var state_48787__$1 = (function (){var statearr_48798 = state_48787;
(statearr_48798[(10)] = inst_48745__$1);

(statearr_48798[(7)] = inst_48752__$1);

(statearr_48798[(12)] = inst_48748);

(statearr_48798[(13)] = inst_48747);

(statearr_48798[(14)] = inst_48746);

(statearr_48798[(11)] = inst_48750__$1);

(statearr_48798[(15)] = inst_48749);

(statearr_48798[(16)] = inst_48751);

return statearr_48798;
})();
if(inst_48755){
var statearr_48799_48844 = state_48787__$1;
(statearr_48799_48844[(1)] = (14));

} else {
var statearr_48800_48845 = state_48787__$1;
(statearr_48800_48845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (22))){
var inst_48745 = (state_48787[(10)]);
var inst_48748 = (state_48787[(12)]);
var inst_48747 = (state_48787[(13)]);
var inst_48746 = (state_48787[(14)]);
var inst_48750 = (state_48787[(11)]);
var inst_48749 = (state_48787[(15)]);
var inst_48751 = (state_48787[(16)]);
var inst_48724 = (state_48787[(9)]);
var inst_48772 = (state_48787[(2)]);
var inst_48773 = cljs.core.get.call(null,inst_48772,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_48774 = cljs.core.comp.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.meta);
var inst_48775 = cljs.core.map.call(null,inst_48774,inst_48773);
var inst_48776 = ui.views.common.drawer.layout.call(null,inst_48775,inst_48747);
var inst_48777 = cljs.core.nth.call(null,inst_48776,(0),null);
var inst_48778 = cljs.core.nth.call(null,inst_48776,(1),null);
var inst_48779 = inst_48724.call(null,inst_48749,inst_48777,inst_48778);
var inst_48780 = (function (){var offsets = inst_48778;
var vec__48720 = inst_48750;
var children = inst_48773;
var parent_key = ".drawer";
var child_keys = inst_48775;
var map__48719 = inst_48745;
var ___$1 = inst_48751;
var vec__48722 = inst_48776;
var prev_width = inst_48749;
var choreography = inst_48779;
var parent_node = inst_48746;
var max_width = inst_48777;
var map__48721 = inst_48772;
var callbacks = inst_48748;
var choreograph_fn = inst_48724;
var nodes = inst_48747;
return ((function (offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn){
return (function (){
if(cljs.core.not_EQ_.call(null,max_width,prev_width)){
var G__48801_48846 = move(parent_key);
G__48801_48846.set("transform",ui.views.common.drawer.translate_3d.call(null,(- max_width),(0)));

G__48801_48846.duration((1000));

G__48801_48846.delay((((max_width > prev_width))?(0):(400)));

G__48801_48846.ease("cubic-bezier(0.4, 0.0, 0.2, 1)");

G__48801_48846.end();

} else {
}

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn){
return (function (item_key,item_node,cb,p__48802){
var map__48803 = p__48802;
var map__48803__$1 = ((((!((map__48803 == null)))?((((map__48803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48803):map__48803);
var initial = cljs.core.get.call(null,map__48803__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var final$ = cljs.core.get.call(null,map__48803__$1,new cljs.core.Keyword(null,"final","final",1157881357));
var duration = cljs.core.get.call(null,map__48803__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__48803__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var ease = cljs.core.get.call(null,map__48803__$1,new cljs.core.Keyword(null,"ease","ease",-1427802543),"cubic-bezier(0.4, 0.0, 0.2, 1)");
if(cljs.core.truth_(initial)){
(item_node["style"]["transform"] = initial);

(item_node["offsetLeft"]);
} else {
}

var G__48805 = move([cljs.core.str("."),cljs.core.str(item_key)].join(''));
G__48805.set("transform",final$);

G__48805.duration(duration);

G__48805.delay(delay);

G__48805.ease(ease);

G__48805.end(cb);

return G__48805;
});})(offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn))
,child_keys,cljs.core.map.call(null,((function (offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__48715_SHARP_){
return cljs.core.get.call(null,nodes,p1__48715_SHARP_);
});})(offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),cljs.core.map.call(null,((function (offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__48716_SHARP_){
return cljs.core.get.call(null,callbacks,p1__48716_SHARP_);
});})(offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),choreography));
});
;})(offsets,vec__48720,children,parent_key,child_keys,map__48719,___$1,vec__48722,prev_width,choreography,parent_node,max_width,map__48721,callbacks,choreograph_fn,nodes,inst_48745,inst_48748,inst_48747,inst_48746,inst_48750,inst_48749,inst_48751,inst_48724,inst_48772,inst_48773,inst_48774,inst_48775,inst_48776,inst_48777,inst_48778,inst_48779,state_val_48788,c__20987__auto__,state,animate_chan,child_fn))
})();
var inst_48781 = reagent.core.next_tick.call(null,inst_48780);
var inst_48782 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-width","prev-width",92230696),inst_48777);
var state_48787__$1 = (function (){var statearr_48806 = state_48787;
(statearr_48806[(17)] = inst_48781);

(statearr_48806[(18)] = inst_48782);

return statearr_48806;
})();
var statearr_48807_48847 = state_48787__$1;
(statearr_48807_48847[(2)] = null);

(statearr_48807_48847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (6))){
var state_48787__$1 = state_48787;
var statearr_48808_48848 = state_48787__$1;
(statearr_48808_48848[(2)] = false);

(statearr_48808_48848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (17))){
var state_48787__$1 = state_48787;
var statearr_48809_48850 = state_48787__$1;
(statearr_48809_48850[(2)] = true);

(statearr_48809_48850[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (3))){
var inst_48785 = (state_48787[(2)]);
var state_48787__$1 = state_48787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48787__$1,inst_48785);
} else {
if((state_val_48788 === (12))){
var inst_48725 = (state_48787[(8)]);
var state_48787__$1 = state_48787;
var statearr_48810_48851 = state_48787__$1;
(statearr_48810_48851[(2)] = inst_48725);

(statearr_48810_48851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (2))){
var state_48787__$1 = state_48787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48787__$1,(4),animate_chan);
} else {
if((state_val_48788 === (19))){
var inst_48764 = (state_48787[(2)]);
var state_48787__$1 = state_48787;
var statearr_48811_48852 = state_48787__$1;
(statearr_48811_48852[(2)] = inst_48764);

(statearr_48811_48852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (11))){
var inst_48725 = (state_48787[(8)]);
var inst_48742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48725);
var state_48787__$1 = state_48787;
var statearr_48812_48853 = state_48787__$1;
(statearr_48812_48853[(2)] = inst_48742);

(statearr_48812_48853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (9))){
var state_48787__$1 = state_48787;
var statearr_48813_48854 = state_48787__$1;
(statearr_48813_48854[(2)] = false);

(statearr_48813_48854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (5))){
var inst_48725 = (state_48787[(8)]);
var inst_48730 = inst_48725.cljs$lang$protocol_mask$partition0$;
var inst_48731 = (inst_48730 & (64));
var inst_48732 = inst_48725.cljs$core$ISeq$;
var inst_48733 = (inst_48731) || (inst_48732);
var state_48787__$1 = state_48787;
if(cljs.core.truth_(inst_48733)){
var statearr_48814_48855 = state_48787__$1;
(statearr_48814_48855[(1)] = (8));

} else {
var statearr_48815_48856 = state_48787__$1;
(statearr_48815_48856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (14))){
var inst_48752 = (state_48787[(7)]);
var inst_48757 = inst_48752.cljs$lang$protocol_mask$partition0$;
var inst_48758 = (inst_48757 & (64));
var inst_48759 = inst_48752.cljs$core$ISeq$;
var inst_48760 = (inst_48758) || (inst_48759);
var state_48787__$1 = state_48787;
if(cljs.core.truth_(inst_48760)){
var statearr_48816_48857 = state_48787__$1;
(statearr_48816_48857[(1)] = (17));

} else {
var statearr_48817_48858 = state_48787__$1;
(statearr_48817_48858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (16))){
var inst_48767 = (state_48787[(2)]);
var state_48787__$1 = state_48787;
if(cljs.core.truth_(inst_48767)){
var statearr_48818_48859 = state_48787__$1;
(statearr_48818_48859[(1)] = (20));

} else {
var statearr_48819_48860 = state_48787__$1;
(statearr_48819_48860[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (10))){
var inst_48737 = (state_48787[(2)]);
var state_48787__$1 = state_48787;
var statearr_48820_48861 = state_48787__$1;
(statearr_48820_48861[(2)] = inst_48737);

(statearr_48820_48861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (18))){
var state_48787__$1 = state_48787;
var statearr_48821_48862 = state_48787__$1;
(statearr_48821_48862[(2)] = false);

(statearr_48821_48862[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48788 === (8))){
var state_48787__$1 = state_48787;
var statearr_48822_48863 = state_48787__$1;
(statearr_48822_48863[(2)] = true);

(statearr_48822_48863[(1)] = (10));


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
});})(c__20987__auto__,state,animate_chan,child_fn))
;
return ((function (switch__20966__auto__,c__20987__auto__,state,animate_chan,child_fn){
return (function() {
var ui$views$common$drawer$state_machine__20967__auto__ = null;
var ui$views$common$drawer$state_machine__20967__auto____0 = (function (){
var statearr_48826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48826[(0)] = ui$views$common$drawer$state_machine__20967__auto__);

(statearr_48826[(1)] = (1));

return statearr_48826;
});
var ui$views$common$drawer$state_machine__20967__auto____1 = (function (state_48787){
while(true){
var ret_value__20968__auto__ = (function (){try{while(true){
var result__20969__auto__ = switch__20966__auto__.call(null,state_48787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20969__auto__;
}
break;
}
}catch (e48827){if((e48827 instanceof Object)){
var ex__20970__auto__ = e48827;
var statearr_48828_48864 = state_48787;
(statearr_48828_48864[(5)] = ex__20970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48865 = state_48787;
state_48787 = G__48865;
continue;
} else {
return ret_value__20968__auto__;
}
break;
}
});
ui$views$common$drawer$state_machine__20967__auto__ = function(state_48787){
switch(arguments.length){
case 0:
return ui$views$common$drawer$state_machine__20967__auto____0.call(this);
case 1:
return ui$views$common$drawer$state_machine__20967__auto____1.call(this,state_48787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$0 = ui$views$common$drawer$state_machine__20967__auto____0;
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$1 = ui$views$common$drawer$state_machine__20967__auto____1;
return ui$views$common$drawer$state_machine__20967__auto__;
})()
;})(switch__20966__auto__,c__20987__auto__,state,animate_chan,child_fn))
})();
var state__20989__auto__ = (function (){var statearr_48829 = f__20988__auto__.call(null);
(statearr_48829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20987__auto__);

return statearr_48829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20989__auto__);
});})(c__20987__auto__,state,animate_chan,child_fn))
);

return c__20987__auto__;
});})(state,animate_chan,child_fn))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (state,animate_chan,child_fn){
return (function (this$){
var parent_node = reagent.core.dom_node.call(null,this$);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869),parent_node);

return cljs.core.async.put_BANG_.call(null,animate_chan,ui.views.common.drawer.intro_sequence);
});})(state,animate_chan,child_fn))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (state,animate_chan,child_fn){
return (function (this$){
return cljs.core.println.call(null,"drawer updated:",cljs.core.deref.call(null,state));
});})(state,animate_chan,child_fn))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state,animate_chan,child_fn){
return (function() { 
var G__48866__delegate = function (p__48830){
var map__48831 = p__48830;
var map__48831__$1 = ((((!((map__48831 == null)))?((((map__48831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48831):map__48831);
var children = cljs.core.get.call(null,map__48831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.drawer.transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"drawer"], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__48831,map__48831__$1,children,state,animate_chan,child_fn){
return (function (child){
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,child));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_fn,key,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(map__48831,map__48831__$1,children,state,animate_chan,child_fn))
,children))], null)], null);
};
var G__48866 = function (var_args){
var p__48830 = null;
if (arguments.length > 0) {
var G__48867__i = 0, G__48867__a = new Array(arguments.length -  0);
while (G__48867__i < G__48867__a.length) {G__48867__a[G__48867__i] = arguments[G__48867__i + 0]; ++G__48867__i;}
  p__48830 = new cljs.core.IndexedSeq(G__48867__a,0);
} 
return G__48866__delegate.call(this,p__48830);};
G__48866.cljs$lang$maxFixedArity = 0;
G__48866.cljs$lang$applyTo = (function (arglist__48868){
var p__48830 = cljs.core.seq(arglist__48868);
return G__48866__delegate(p__48830);
});
G__48866.cljs$core$IFn$_invoke$arity$variadic = G__48866__delegate;
return G__48866;
})()
;})(state,animate_chan,child_fn))
], null));
});

ui.views.common.drawer.drawer.cljs$lang$maxFixedArity = (0);

ui.views.common.drawer.drawer.cljs$lang$applyTo = (function (seq48717){
return ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48717));
});

//# sourceMappingURL=drawer.js.map?rel=1478935729648