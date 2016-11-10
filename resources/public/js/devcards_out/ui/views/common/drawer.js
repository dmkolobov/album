// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.common.drawer');
goog.require('cljs.core');
goog.require('re_com.core');
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
return resize.call(null);
});})(key,node))
));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_,child){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"drawer-child",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.Keyword(null,"child","child",623967545),child], null);
})], null));
});
ui.views.common.drawer.register_child = (function ui$views$common$drawer$register_child(state,key,node,callback){
return cljs.core.swap_BANG_.call(null,state,(function (p__61993){
var map__61994 = p__61993;
var map__61994__$1 = ((((!((map__61994 == null)))?((((map__61994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61994):map__61994);
var nodes = cljs.core.get.call(null,map__61994__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var callbacks = cljs.core.get.call(null,map__61994__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
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
var vec__61997 = keys__$1;
var key = cljs.core.nth.call(null,vec__61997,(0),null);
var keys_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__61997,(1));
var node = cljs.core.get.call(null,nodes,key);
var width = node.offsetWidth;
var height = node.offsetHeight;
var G__61998 = keys_SINGLEQUOTE_;
var G__61999 = (function (){var x__19204__auto__ = width;
var y__19205__auto__ = max_width;
return ((x__19204__auto__ > y__19205__auto__) ? x__19204__auto__ : y__19205__auto__);
})();
var G__62000 = (offset + height);
var G__62001 = cljs.core.conj.call(null,offsets,offset);
keys__$1 = G__61998;
max_width = G__61999;
offset = G__62000;
offsets = G__62001;
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
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,offset){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),ui.views.common.drawer.translate_3d.call(null,(0),offset),new cljs.core.Keyword(null,"final","final",1157881357),ui.views.common.drawer.translate_3d.call(null,(0),offset),new cljs.core.Keyword(null,"duration","duration",1444101068),(150),new cljs.core.Keyword(null,"delay","delay",-574225219),(((w >= pw))?(100):(0))], null);
}),offsets));
});
ui.views.common.drawer.animation_scale = (3);
ui.views.common.drawer.animate_BANG_ = (function ui$views$common$drawer$animate_BANG_(node,callback,p__62002){
var map__62005 = p__62002;
var map__62005__$1 = ((((!((map__62005 == null)))?((((map__62005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62005):map__62005);
var initial = cljs.core.get.call(null,map__62005__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var final$ = cljs.core.get.call(null,map__62005__$1,new cljs.core.Keyword(null,"final","final",1157881357));
var duration = cljs.core.get.call(null,map__62005__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__62005__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var ease = cljs.core.get.call(null,map__62005__$1,new cljs.core.Keyword(null,"ease","ease",-1427802543),"cubic-bezier(0.075, 0.82, 0.165, 1)");
if(cljs.core.truth_(initial)){
(node["style"]["transform"] = initial);

(node["offsetLeft"]);
} else {
}

(node["style"]["transition"] = [cljs.core.str("transform "),cljs.core.str((duration * ui.views.common.drawer.animation_scale)),cljs.core.str("ms "),cljs.core.str(ease),cljs.core.str(" "),cljs.core.str((delay * ui.views.common.drawer.animation_scale)),cljs.core.str("ms")].join(''));

(node["style"]["transform"] = final$);

if(cljs.core.truth_(callback)){
return callback.call(null);
} else {
return null;
}
});
ui.views.common.drawer.drawer = (function ui$views$common$drawer$drawer(var_args){
var args__19949__auto__ = [];
var len__19942__auto___62140 = arguments.length;
var i__19943__auto___62141 = (0);
while(true){
if((i__19943__auto___62141 < len__19942__auto___62140)){
args__19949__auto__.push((arguments[i__19943__auto___62141]));

var G__62142 = (i__19943__auto___62141 + (1));
i__19943__auto___62141 = G__62142;
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
var animate_chan = cljs.core.async.chan.call(null);
var child_fn = ui.views.common.drawer.drawer_child.call(null,cljs.core.partial.call(null,ui.views.common.drawer.register_child,state),cljs.core.partial.call(null,cljs.core.async.put_BANG_,animate_chan,ui.views.common.drawer.resize_sequence));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (state,animate_chan,child_fn){
return (function (this$){
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__,state,animate_chan,child_fn){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__,state,animate_chan,child_fn){
return (function (state_62094){
var state_val_62095 = (state_62094[(1)]);
if((state_val_62095 === (7))){
var inst_62032 = (state_62094[(2)]);
var state_62094__$1 = state_62094;
if(cljs.core.truth_(inst_62032)){
var statearr_62096_62143 = state_62094__$1;
(statearr_62096_62143[(1)] = (11));

} else {
var statearr_62097_62144 = state_62094__$1;
(statearr_62097_62144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (20))){
var inst_62044 = (state_62094[(7)]);
var inst_62061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62044);
var state_62094__$1 = state_62094;
var statearr_62098_62145 = state_62094__$1;
(statearr_62098_62145[(2)] = inst_62061);

(statearr_62098_62145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (1))){
var state_62094__$1 = state_62094;
var statearr_62099_62146 = state_62094__$1;
(statearr_62099_62146[(2)] = null);

(statearr_62099_62146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (24))){
var state_62094__$1 = state_62094;
var statearr_62100_62147 = state_62094__$1;
(statearr_62100_62147[(2)] = (150));

(statearr_62100_62147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (4))){
var inst_62017 = (state_62094[(8)]);
var inst_62016 = (state_62094[(2)]);
var inst_62017__$1 = cljs.core.deref.call(null,state);
var inst_62019 = (inst_62017__$1 == null);
var inst_62020 = cljs.core.not.call(null,inst_62019);
var state_62094__$1 = (function (){var statearr_62101 = state_62094;
(statearr_62101[(8)] = inst_62017__$1);

(statearr_62101[(9)] = inst_62016);

return statearr_62101;
})();
if(inst_62020){
var statearr_62102_62148 = state_62094__$1;
(statearr_62102_62148[(1)] = (5));

} else {
var statearr_62103_62149 = state_62094__$1;
(statearr_62103_62149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (15))){
var state_62094__$1 = state_62094;
var statearr_62104_62150 = state_62094__$1;
(statearr_62104_62150[(2)] = false);

(statearr_62104_62150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (21))){
var inst_62044 = (state_62094[(7)]);
var state_62094__$1 = state_62094;
var statearr_62105_62151 = state_62094__$1;
(statearr_62105_62151[(2)] = inst_62044);

(statearr_62105_62151[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (13))){
var inst_62044 = (state_62094[(7)]);
var inst_62042 = (state_62094[(10)]);
var inst_62037 = (state_62094[(11)]);
var inst_62037__$1 = (state_62094[(2)]);
var inst_62038 = cljs.core.get.call(null,inst_62037__$1,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869));
var inst_62039 = cljs.core.get.call(null,inst_62037__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var inst_62040 = cljs.core.get.call(null,inst_62037__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
var inst_62041 = cljs.core.get.call(null,inst_62037__$1,new cljs.core.Keyword(null,"prev-width","prev-width",92230696));
var inst_62042__$1 = reagent.core.argv.call(null,this$);
var inst_62043 = cljs.core.nth.call(null,inst_62042__$1,(0),null);
var inst_62044__$1 = cljs.core.nthnext.call(null,inst_62042__$1,(1));
var inst_62046 = (inst_62044__$1 == null);
var inst_62047 = cljs.core.not.call(null,inst_62046);
var state_62094__$1 = (function (){var statearr_62106 = state_62094;
(statearr_62106[(12)] = inst_62038);

(statearr_62106[(13)] = inst_62039);

(statearr_62106[(7)] = inst_62044__$1);

(statearr_62106[(10)] = inst_62042__$1);

(statearr_62106[(14)] = inst_62041);

(statearr_62106[(15)] = inst_62043);

(statearr_62106[(16)] = inst_62040);

(statearr_62106[(11)] = inst_62037__$1);

return statearr_62106;
})();
if(inst_62047){
var statearr_62107_62152 = state_62094__$1;
(statearr_62107_62152[(1)] = (14));

} else {
var statearr_62108_62153 = state_62094__$1;
(statearr_62108_62153[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (22))){
var inst_62038 = (state_62094[(12)]);
var inst_62039 = (state_62094[(13)]);
var inst_62042 = (state_62094[(10)]);
var inst_62041 = (state_62094[(14)]);
var inst_62043 = (state_62094[(15)]);
var inst_62040 = (state_62094[(16)]);
var inst_62037 = (state_62094[(11)]);
var inst_62016 = (state_62094[(9)]);
var inst_62064 = (state_62094[(2)]);
var inst_62065 = cljs.core.get.call(null,inst_62064,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_62066 = cljs.core.comp.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.meta);
var inst_62067 = cljs.core.map.call(null,inst_62066,inst_62065);
var inst_62068 = ui.views.common.drawer.layout.call(null,inst_62067,inst_62039);
var inst_62069 = cljs.core.nth.call(null,inst_62068,(0),null);
var inst_62070 = cljs.core.nth.call(null,inst_62068,(1),null);
var inst_62071 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-width","prev-width",92230696),inst_62069);
var inst_62072 = (function (){var vec__62014 = inst_62068;
var offsets = inst_62070;
var children = inst_62065;
var child_keys = inst_62067;
var vec__62012 = inst_62042;
var ___$1 = inst_62043;
var prev_width = inst_62041;
var choreography = inst_62016;
var parent_node = inst_62038;
var max_width = inst_62069;
var callbacks = inst_62040;
var map__62011 = inst_62037;
var nodes = inst_62039;
var map__62013 = inst_62064;
return ((function (vec__62014,offsets,children,child_keys,vec__62012,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__62011,nodes,map__62013,inst_62038,inst_62039,inst_62042,inst_62041,inst_62043,inst_62040,inst_62037,inst_62016,inst_62064,inst_62065,inst_62066,inst_62067,inst_62068,inst_62069,inst_62070,inst_62071,state_val_62095,c__21040__auto__,state,animate_chan,child_fn){
return (function (p1__62007_SHARP_){
return cljs.core.get.call(null,nodes,p1__62007_SHARP_);
});
;})(vec__62014,offsets,children,child_keys,vec__62012,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__62011,nodes,map__62013,inst_62038,inst_62039,inst_62042,inst_62041,inst_62043,inst_62040,inst_62037,inst_62016,inst_62064,inst_62065,inst_62066,inst_62067,inst_62068,inst_62069,inst_62070,inst_62071,state_val_62095,c__21040__auto__,state,animate_chan,child_fn))
})();
var inst_62073 = cljs.core.map.call(null,inst_62072,inst_62067);
var inst_62074 = (function (){var vec__62014 = inst_62068;
var offsets = inst_62070;
var children = inst_62065;
var child_keys = inst_62067;
var vec__62012 = inst_62042;
var ___$1 = inst_62043;
var prev_width = inst_62041;
var choreography = inst_62016;
var parent_node = inst_62038;
var max_width = inst_62069;
var callbacks = inst_62040;
var map__62011 = inst_62037;
var nodes = inst_62039;
var map__62013 = inst_62064;
return ((function (vec__62014,offsets,children,child_keys,vec__62012,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__62011,nodes,map__62013,inst_62038,inst_62039,inst_62042,inst_62041,inst_62043,inst_62040,inst_62037,inst_62016,inst_62064,inst_62065,inst_62066,inst_62067,inst_62068,inst_62069,inst_62070,inst_62071,inst_62072,inst_62073,state_val_62095,c__21040__auto__,state,animate_chan,child_fn){
return (function (p1__62008_SHARP_){
return cljs.core.get.call(null,callbacks,p1__62008_SHARP_);
});
;})(vec__62014,offsets,children,child_keys,vec__62012,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__62011,nodes,map__62013,inst_62038,inst_62039,inst_62042,inst_62041,inst_62043,inst_62040,inst_62037,inst_62016,inst_62064,inst_62065,inst_62066,inst_62067,inst_62068,inst_62069,inst_62070,inst_62071,inst_62072,inst_62073,state_val_62095,c__21040__auto__,state,animate_chan,child_fn))
})();
var inst_62075 = cljs.core.map.call(null,inst_62074,inst_62067);
var inst_62076 = inst_62016.call(null,inst_62041,inst_62069,inst_62070);
var inst_62077 = cljs.core.map.call(null,ui.views.common.drawer.animate_BANG_,inst_62073,inst_62075,inst_62076);
var inst_62078 = cljs.core.doall.call(null,inst_62077);
var inst_62079 = [new cljs.core.Keyword(null,"final","final",1157881357),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_62080 = (- inst_62069);
var inst_62081 = ui.views.common.drawer.translate_3d.call(null,inst_62080,(0));
var inst_62082 = (inst_62069 > inst_62041);
var state_62094__$1 = (function (){var statearr_62109 = state_62094;
(statearr_62109[(17)] = inst_62071);

(statearr_62109[(18)] = inst_62081);

(statearr_62109[(19)] = inst_62079);

(statearr_62109[(20)] = inst_62078);

return statearr_62109;
})();
if(cljs.core.truth_(inst_62082)){
var statearr_62110_62154 = state_62094__$1;
(statearr_62110_62154[(1)] = (23));

} else {
var statearr_62111_62155 = state_62094__$1;
(statearr_62111_62155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (6))){
var state_62094__$1 = state_62094;
var statearr_62112_62156 = state_62094__$1;
(statearr_62112_62156[(2)] = false);

(statearr_62112_62156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (25))){
var inst_62038 = (state_62094[(12)]);
var inst_62081 = (state_62094[(18)]);
var inst_62079 = (state_62094[(19)]);
var inst_62086 = (state_62094[(2)]);
var inst_62087 = [inst_62081,(150),inst_62086];
var inst_62088 = cljs.core.PersistentHashMap.fromArrays(inst_62079,inst_62087);
var inst_62089 = ui.views.common.drawer.animate_BANG_.call(null,inst_62038,null,inst_62088);
var state_62094__$1 = (function (){var statearr_62113 = state_62094;
(statearr_62113[(21)] = inst_62089);

return statearr_62113;
})();
var statearr_62114_62157 = state_62094__$1;
(statearr_62114_62157[(2)] = null);

(statearr_62114_62157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (17))){
var state_62094__$1 = state_62094;
var statearr_62115_62158 = state_62094__$1;
(statearr_62115_62158[(2)] = true);

(statearr_62115_62158[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (3))){
var inst_62092 = (state_62094[(2)]);
var state_62094__$1 = state_62094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62094__$1,inst_62092);
} else {
if((state_val_62095 === (12))){
var inst_62017 = (state_62094[(8)]);
var state_62094__$1 = state_62094;
var statearr_62116_62159 = state_62094__$1;
(statearr_62116_62159[(2)] = inst_62017);

(statearr_62116_62159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (2))){
var state_62094__$1 = state_62094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62094__$1,(4),animate_chan);
} else {
if((state_val_62095 === (23))){
var state_62094__$1 = state_62094;
var statearr_62117_62160 = state_62094__$1;
(statearr_62117_62160[(2)] = (0));

(statearr_62117_62160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (19))){
var inst_62056 = (state_62094[(2)]);
var state_62094__$1 = state_62094;
var statearr_62118_62161 = state_62094__$1;
(statearr_62118_62161[(2)] = inst_62056);

(statearr_62118_62161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (11))){
var inst_62017 = (state_62094[(8)]);
var inst_62034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62017);
var state_62094__$1 = state_62094;
var statearr_62119_62162 = state_62094__$1;
(statearr_62119_62162[(2)] = inst_62034);

(statearr_62119_62162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (9))){
var state_62094__$1 = state_62094;
var statearr_62120_62163 = state_62094__$1;
(statearr_62120_62163[(2)] = false);

(statearr_62120_62163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (5))){
var inst_62017 = (state_62094[(8)]);
var inst_62022 = inst_62017.cljs$lang$protocol_mask$partition0$;
var inst_62023 = (inst_62022 & (64));
var inst_62024 = inst_62017.cljs$core$ISeq$;
var inst_62025 = (inst_62023) || (inst_62024);
var state_62094__$1 = state_62094;
if(cljs.core.truth_(inst_62025)){
var statearr_62121_62164 = state_62094__$1;
(statearr_62121_62164[(1)] = (8));

} else {
var statearr_62122_62165 = state_62094__$1;
(statearr_62122_62165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (14))){
var inst_62044 = (state_62094[(7)]);
var inst_62049 = inst_62044.cljs$lang$protocol_mask$partition0$;
var inst_62050 = (inst_62049 & (64));
var inst_62051 = inst_62044.cljs$core$ISeq$;
var inst_62052 = (inst_62050) || (inst_62051);
var state_62094__$1 = state_62094;
if(cljs.core.truth_(inst_62052)){
var statearr_62123_62166 = state_62094__$1;
(statearr_62123_62166[(1)] = (17));

} else {
var statearr_62124_62167 = state_62094__$1;
(statearr_62124_62167[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (16))){
var inst_62059 = (state_62094[(2)]);
var state_62094__$1 = state_62094;
if(cljs.core.truth_(inst_62059)){
var statearr_62125_62168 = state_62094__$1;
(statearr_62125_62168[(1)] = (20));

} else {
var statearr_62126_62169 = state_62094__$1;
(statearr_62126_62169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (10))){
var inst_62029 = (state_62094[(2)]);
var state_62094__$1 = state_62094;
var statearr_62127_62170 = state_62094__$1;
(statearr_62127_62170[(2)] = inst_62029);

(statearr_62127_62170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (18))){
var state_62094__$1 = state_62094;
var statearr_62128_62171 = state_62094__$1;
(statearr_62128_62171[(2)] = false);

(statearr_62128_62171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62095 === (8))){
var state_62094__$1 = state_62094;
var statearr_62129_62172 = state_62094__$1;
(statearr_62129_62172[(2)] = true);

(statearr_62129_62172[(1)] = (10));


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
}
}
}
});})(c__21040__auto__,state,animate_chan,child_fn))
;
return ((function (switch__20928__auto__,c__21040__auto__,state,animate_chan,child_fn){
return (function() {
var ui$views$common$drawer$state_machine__20929__auto__ = null;
var ui$views$common$drawer$state_machine__20929__auto____0 = (function (){
var statearr_62133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62133[(0)] = ui$views$common$drawer$state_machine__20929__auto__);

(statearr_62133[(1)] = (1));

return statearr_62133;
});
var ui$views$common$drawer$state_machine__20929__auto____1 = (function (state_62094){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_62094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e62134){if((e62134 instanceof Object)){
var ex__20932__auto__ = e62134;
var statearr_62135_62173 = state_62094;
(statearr_62135_62173[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62174 = state_62094;
state_62094 = G__62174;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
ui$views$common$drawer$state_machine__20929__auto__ = function(state_62094){
switch(arguments.length){
case 0:
return ui$views$common$drawer$state_machine__20929__auto____0.call(this);
case 1:
return ui$views$common$drawer$state_machine__20929__auto____1.call(this,state_62094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$views$common$drawer$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = ui$views$common$drawer$state_machine__20929__auto____0;
ui$views$common$drawer$state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = ui$views$common$drawer$state_machine__20929__auto____1;
return ui$views$common$drawer$state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__,state,animate_chan,child_fn))
})();
var state__21042__auto__ = (function (){var statearr_62136 = f__21041__auto__.call(null);
(statearr_62136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_62136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__,state,animate_chan,child_fn))
);

return c__21040__auto__;
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
var G__62175__delegate = function (p__62137){
var map__62138 = p__62137;
var map__62138__$1 = ((((!((map__62138 == null)))?((((map__62138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62138):map__62138);
var children = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.drawer.transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"drawer"], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__62138,map__62138__$1,children,state,animate_chan,child_fn){
return (function (child){
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,child));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_fn,key,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(map__62138,map__62138__$1,children,state,animate_chan,child_fn))
,children))], null)], null);
};
var G__62175 = function (var_args){
var p__62137 = null;
if (arguments.length > 0) {
var G__62176__i = 0, G__62176__a = new Array(arguments.length -  0);
while (G__62176__i < G__62176__a.length) {G__62176__a[G__62176__i] = arguments[G__62176__i + 0]; ++G__62176__i;}
  p__62137 = new cljs.core.IndexedSeq(G__62176__a,0);
} 
return G__62175__delegate.call(this,p__62137);};
G__62175.cljs$lang$maxFixedArity = 0;
G__62175.cljs$lang$applyTo = (function (arglist__62177){
var p__62137 = cljs.core.seq(arglist__62177);
return G__62175__delegate(p__62137);
});
G__62175.cljs$core$IFn$_invoke$arity$variadic = G__62175__delegate;
return G__62175;
})()
;})(state,animate_chan,child_fn))
], null));
});

ui.views.common.drawer.drawer.cljs$lang$maxFixedArity = (0);

ui.views.common.drawer.drawer.cljs$lang$applyTo = (function (seq62009){
return ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62009));
});

//# sourceMappingURL=drawer.js.map?rel=1478769014796