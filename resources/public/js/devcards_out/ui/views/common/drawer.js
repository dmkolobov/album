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
return cljs.core.swap_BANG_.call(null,state,(function (p__46609){
var map__46610 = p__46609;
var map__46610__$1 = ((((!((map__46610 == null)))?((((map__46610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46610):map__46610);
var nodes = cljs.core.get.call(null,map__46610__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var callbacks = cljs.core.get.call(null,map__46610__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
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
var vec__46613 = keys__$1;
var key = cljs.core.nth.call(null,vec__46613,(0),null);
var keys_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__46613,(1));
var node = cljs.core.get.call(null,nodes,key);
var box = node.getBoundingClientRect();
var width = box.width;
var height = box.height;
var G__46614 = keys_SINGLEQUOTE_;
var G__46615 = (function (){var x__19204__auto__ = width;
var y__19205__auto__ = max_width;
return ((x__19204__auto__ > y__19205__auto__) ? x__19204__auto__ : y__19205__auto__);
})();
var G__46616 = (offset + height);
var G__46617 = cljs.core.conj.call(null,offsets,offset);
keys__$1 = G__46614;
max_width = G__46615;
offset = G__46616;
offsets = G__46617;
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"final","final",1157881357),ui.views.common.drawer.translate_3d.call(null,(0),offset),new cljs.core.Keyword(null,"duration","duration",1444101068),(250),new cljs.core.Keyword(null,"delay","delay",-574225219),(((w > pw))?(100):(0))], null);
}),offsets);
});
ui.views.common.drawer.drawer = (function ui$views$common$drawer$drawer(var_args){
var args__19949__auto__ = [];
var len__19942__auto___46736 = arguments.length;
var i__19943__auto___46737 = (0);
while(true){
if((i__19943__auto___46737 < len__19942__auto___46736)){
args__19949__auto__.push((arguments[i__19943__auto___46737]));

var G__46738 = (i__19943__auto___46737 + (1));
i__19943__auto___46737 = G__46738;
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
return (function (state_46690){
var state_val_46691 = (state_46690[(1)]);
if((state_val_46691 === (7))){
var inst_46643 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
if(cljs.core.truth_(inst_46643)){
var statearr_46692_46739 = state_46690__$1;
(statearr_46692_46739[(1)] = (11));

} else {
var statearr_46693_46740 = state_46690__$1;
(statearr_46693_46740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (20))){
var inst_46655 = (state_46690[(7)]);
var inst_46672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46655);
var state_46690__$1 = state_46690;
var statearr_46694_46741 = state_46690__$1;
(statearr_46694_46741[(2)] = inst_46672);

(statearr_46694_46741[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (1))){
var state_46690__$1 = state_46690;
var statearr_46695_46742 = state_46690__$1;
(statearr_46695_46742[(2)] = null);

(statearr_46695_46742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (4))){
var inst_46628 = (state_46690[(8)]);
var inst_46627 = (state_46690[(2)]);
var inst_46628__$1 = cljs.core.deref.call(null,state);
var inst_46630 = (inst_46628__$1 == null);
var inst_46631 = cljs.core.not.call(null,inst_46630);
var state_46690__$1 = (function (){var statearr_46696 = state_46690;
(statearr_46696[(8)] = inst_46628__$1);

(statearr_46696[(9)] = inst_46627);

return statearr_46696;
})();
if(inst_46631){
var statearr_46697_46743 = state_46690__$1;
(statearr_46697_46743[(1)] = (5));

} else {
var statearr_46698_46744 = state_46690__$1;
(statearr_46698_46744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (15))){
var state_46690__$1 = state_46690;
var statearr_46699_46745 = state_46690__$1;
(statearr_46699_46745[(2)] = false);

(statearr_46699_46745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (21))){
var inst_46655 = (state_46690[(7)]);
var state_46690__$1 = state_46690;
var statearr_46700_46746 = state_46690__$1;
(statearr_46700_46746[(2)] = inst_46655);

(statearr_46700_46746[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (13))){
var inst_46648 = (state_46690[(10)]);
var inst_46653 = (state_46690[(11)]);
var inst_46655 = (state_46690[(7)]);
var inst_46648__$1 = (state_46690[(2)]);
var inst_46649 = cljs.core.get.call(null,inst_46648__$1,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869));
var inst_46650 = cljs.core.get.call(null,inst_46648__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var inst_46651 = cljs.core.get.call(null,inst_46648__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
var inst_46652 = cljs.core.get.call(null,inst_46648__$1,new cljs.core.Keyword(null,"prev-width","prev-width",92230696));
var inst_46653__$1 = reagent.core.argv.call(null,this$);
var inst_46654 = cljs.core.nth.call(null,inst_46653__$1,(0),null);
var inst_46655__$1 = cljs.core.nthnext.call(null,inst_46653__$1,(1));
var inst_46657 = (inst_46655__$1 == null);
var inst_46658 = cljs.core.not.call(null,inst_46657);
var state_46690__$1 = (function (){var statearr_46701 = state_46690;
(statearr_46701[(12)] = inst_46654);

(statearr_46701[(13)] = inst_46650);

(statearr_46701[(14)] = inst_46651);

(statearr_46701[(10)] = inst_46648__$1);

(statearr_46701[(11)] = inst_46653__$1);

(statearr_46701[(7)] = inst_46655__$1);

(statearr_46701[(15)] = inst_46649);

(statearr_46701[(16)] = inst_46652);

return statearr_46701;
})();
if(inst_46658){
var statearr_46702_46747 = state_46690__$1;
(statearr_46702_46747[(1)] = (14));

} else {
var statearr_46703_46748 = state_46690__$1;
(statearr_46703_46748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (22))){
var inst_46654 = (state_46690[(12)]);
var inst_46650 = (state_46690[(13)]);
var inst_46651 = (state_46690[(14)]);
var inst_46648 = (state_46690[(10)]);
var inst_46653 = (state_46690[(11)]);
var inst_46627 = (state_46690[(9)]);
var inst_46649 = (state_46690[(15)]);
var inst_46652 = (state_46690[(16)]);
var inst_46675 = (state_46690[(2)]);
var inst_46676 = cljs.core.get.call(null,inst_46675,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_46677 = cljs.core.comp.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.meta);
var inst_46678 = cljs.core.map.call(null,inst_46677,inst_46676);
var inst_46679 = ui.views.common.drawer.layout.call(null,inst_46678,inst_46650);
var inst_46680 = cljs.core.nth.call(null,inst_46679,(0),null);
var inst_46681 = cljs.core.nth.call(null,inst_46679,(1),null);
var inst_46682 = inst_46627.call(null,inst_46652,inst_46680,inst_46681);
var inst_46683 = (function (){var vec__46623 = inst_46653;
var offsets = inst_46681;
var map__46622 = inst_46648;
var children = inst_46676;
var parent_key = ".drawer";
var child_keys = inst_46678;
var ___$1 = inst_46654;
var vec__46625 = inst_46679;
var prev_width = inst_46652;
var choreography = inst_46682;
var parent_node = inst_46649;
var max_width = inst_46680;
var callbacks = inst_46651;
var choreograph_fn = inst_46627;
var map__46624 = inst_46675;
var nodes = inst_46650;
return ((function (vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn){
return (function (){
if(cljs.core.not_EQ_.call(null,max_width,prev_width)){
var G__46704_46749 = move(parent_key);
G__46704_46749.set("transform",ui.views.common.drawer.translate_3d.call(null,(- max_width),(0)));

G__46704_46749.duration((250));

G__46704_46749.delay((((max_width > prev_width))?(0):(100)));

G__46704_46749.ease("snap");

G__46704_46749.end();

} else {
}

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn){
return (function (item_key,item_node,cb,p__46705){
var map__46706 = p__46705;
var map__46706__$1 = ((((!((map__46706 == null)))?((((map__46706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46706):map__46706);
var initial = cljs.core.get.call(null,map__46706__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var final$ = cljs.core.get.call(null,map__46706__$1,new cljs.core.Keyword(null,"final","final",1157881357));
var duration = cljs.core.get.call(null,map__46706__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__46706__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var ease = cljs.core.get.call(null,map__46706__$1,new cljs.core.Keyword(null,"ease","ease",-1427802543),"snap");
if(cljs.core.truth_(initial)){
(item_node["style"]["transform"] = initial);

(item_node["offsetLeft"]);
} else {
}

var G__46708 = move([cljs.core.str("."),cljs.core.str(item_key)].join(''));
G__46708.set("transform",final$);

G__46708.duration(duration);

G__46708.delay(delay);

G__46708.ease(ease);

G__46708.end(cb);

return G__46708;
});})(vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn))
,child_keys,cljs.core.map.call(null,((function (vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__46618_SHARP_){
return cljs.core.get.call(null,nodes,p1__46618_SHARP_);
});})(vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),cljs.core.map.call(null,((function (vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__46619_SHARP_){
return cljs.core.get.call(null,callbacks,p1__46619_SHARP_);
});})(vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),choreography));
});
;})(vec__46623,offsets,map__46622,children,parent_key,child_keys,___$1,vec__46625,prev_width,choreography,parent_node,max_width,callbacks,choreograph_fn,map__46624,nodes,inst_46654,inst_46650,inst_46651,inst_46648,inst_46653,inst_46627,inst_46649,inst_46652,inst_46675,inst_46676,inst_46677,inst_46678,inst_46679,inst_46680,inst_46681,inst_46682,state_val_46691,c__20987__auto__,state,animate_chan,child_fn))
})();
var inst_46684 = reagent.core.next_tick.call(null,inst_46683);
var inst_46685 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-width","prev-width",92230696),inst_46680);
var state_46690__$1 = (function (){var statearr_46709 = state_46690;
(statearr_46709[(17)] = inst_46685);

(statearr_46709[(18)] = inst_46684);

return statearr_46709;
})();
var statearr_46710_46750 = state_46690__$1;
(statearr_46710_46750[(2)] = null);

(statearr_46710_46750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (6))){
var state_46690__$1 = state_46690;
var statearr_46711_46751 = state_46690__$1;
(statearr_46711_46751[(2)] = false);

(statearr_46711_46751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (17))){
var state_46690__$1 = state_46690;
var statearr_46712_46752 = state_46690__$1;
(statearr_46712_46752[(2)] = true);

(statearr_46712_46752[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (3))){
var inst_46688 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46690__$1,inst_46688);
} else {
if((state_val_46691 === (12))){
var inst_46628 = (state_46690[(8)]);
var state_46690__$1 = state_46690;
var statearr_46713_46753 = state_46690__$1;
(statearr_46713_46753[(2)] = inst_46628);

(statearr_46713_46753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (2))){
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46690__$1,(4),animate_chan);
} else {
if((state_val_46691 === (19))){
var inst_46667 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
var statearr_46714_46754 = state_46690__$1;
(statearr_46714_46754[(2)] = inst_46667);

(statearr_46714_46754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (11))){
var inst_46628 = (state_46690[(8)]);
var inst_46645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46628);
var state_46690__$1 = state_46690;
var statearr_46715_46755 = state_46690__$1;
(statearr_46715_46755[(2)] = inst_46645);

(statearr_46715_46755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (9))){
var state_46690__$1 = state_46690;
var statearr_46716_46756 = state_46690__$1;
(statearr_46716_46756[(2)] = false);

(statearr_46716_46756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (5))){
var inst_46628 = (state_46690[(8)]);
var inst_46633 = inst_46628.cljs$lang$protocol_mask$partition0$;
var inst_46634 = (inst_46633 & (64));
var inst_46635 = inst_46628.cljs$core$ISeq$;
var inst_46636 = (inst_46634) || (inst_46635);
var state_46690__$1 = state_46690;
if(cljs.core.truth_(inst_46636)){
var statearr_46717_46757 = state_46690__$1;
(statearr_46717_46757[(1)] = (8));

} else {
var statearr_46718_46758 = state_46690__$1;
(statearr_46718_46758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (14))){
var inst_46655 = (state_46690[(7)]);
var inst_46660 = inst_46655.cljs$lang$protocol_mask$partition0$;
var inst_46661 = (inst_46660 & (64));
var inst_46662 = inst_46655.cljs$core$ISeq$;
var inst_46663 = (inst_46661) || (inst_46662);
var state_46690__$1 = state_46690;
if(cljs.core.truth_(inst_46663)){
var statearr_46719_46759 = state_46690__$1;
(statearr_46719_46759[(1)] = (17));

} else {
var statearr_46720_46760 = state_46690__$1;
(statearr_46720_46760[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (16))){
var inst_46670 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
if(cljs.core.truth_(inst_46670)){
var statearr_46721_46761 = state_46690__$1;
(statearr_46721_46761[(1)] = (20));

} else {
var statearr_46722_46762 = state_46690__$1;
(statearr_46722_46762[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (10))){
var inst_46640 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
var statearr_46723_46763 = state_46690__$1;
(statearr_46723_46763[(2)] = inst_46640);

(statearr_46723_46763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (18))){
var state_46690__$1 = state_46690;
var statearr_46724_46764 = state_46690__$1;
(statearr_46724_46764[(2)] = false);

(statearr_46724_46764[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (8))){
var state_46690__$1 = state_46690;
var statearr_46725_46765 = state_46690__$1;
(statearr_46725_46765[(2)] = true);

(statearr_46725_46765[(1)] = (10));


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
var statearr_46729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46729[(0)] = ui$views$common$drawer$state_machine__20967__auto__);

(statearr_46729[(1)] = (1));

return statearr_46729;
});
var ui$views$common$drawer$state_machine__20967__auto____1 = (function (state_46690){
while(true){
var ret_value__20968__auto__ = (function (){try{while(true){
var result__20969__auto__ = switch__20966__auto__.call(null,state_46690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20969__auto__;
}
break;
}
}catch (e46730){if((e46730 instanceof Object)){
var ex__20970__auto__ = e46730;
var statearr_46731_46766 = state_46690;
(statearr_46731_46766[(5)] = ex__20970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46767 = state_46690;
state_46690 = G__46767;
continue;
} else {
return ret_value__20968__auto__;
}
break;
}
});
ui$views$common$drawer$state_machine__20967__auto__ = function(state_46690){
switch(arguments.length){
case 0:
return ui$views$common$drawer$state_machine__20967__auto____0.call(this);
case 1:
return ui$views$common$drawer$state_machine__20967__auto____1.call(this,state_46690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$0 = ui$views$common$drawer$state_machine__20967__auto____0;
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$1 = ui$views$common$drawer$state_machine__20967__auto____1;
return ui$views$common$drawer$state_machine__20967__auto__;
})()
;})(switch__20966__auto__,c__20987__auto__,state,animate_chan,child_fn))
})();
var state__20989__auto__ = (function (){var statearr_46732 = f__20988__auto__.call(null);
(statearr_46732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20987__auto__);

return statearr_46732;
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
var G__46768__delegate = function (p__46733){
var map__46734 = p__46733;
var map__46734__$1 = ((((!((map__46734 == null)))?((((map__46734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46734):map__46734);
var children = cljs.core.get.call(null,map__46734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.drawer.transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"drawer"], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__46734,map__46734__$1,children,state,animate_chan,child_fn){
return (function (child){
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,child));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_fn,key,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(map__46734,map__46734__$1,children,state,animate_chan,child_fn))
,children))], null)], null);
};
var G__46768 = function (var_args){
var p__46733 = null;
if (arguments.length > 0) {
var G__46769__i = 0, G__46769__a = new Array(arguments.length -  0);
while (G__46769__i < G__46769__a.length) {G__46769__a[G__46769__i] = arguments[G__46769__i + 0]; ++G__46769__i;}
  p__46733 = new cljs.core.IndexedSeq(G__46769__a,0);
} 
return G__46768__delegate.call(this,p__46733);};
G__46768.cljs$lang$maxFixedArity = 0;
G__46768.cljs$lang$applyTo = (function (arglist__46770){
var p__46733 = cljs.core.seq(arglist__46770);
return G__46768__delegate(p__46733);
});
G__46768.cljs$core$IFn$_invoke$arity$variadic = G__46768__delegate;
return G__46768;
})()
;})(state,animate_chan,child_fn))
], null));
});

ui.views.common.drawer.drawer.cljs$lang$maxFixedArity = (0);

ui.views.common.drawer.drawer.cljs$lang$applyTo = (function (seq46620){
return ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46620));
});

//# sourceMappingURL=drawer.js.map?rel=1478933242859