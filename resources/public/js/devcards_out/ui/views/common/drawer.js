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
cljs.core.println.call(null,"resized",key,Date.now());

return resize.call(null);
});})(key,node))
));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_,child){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"drawer-child",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.Keyword(null,"child","child",623967545),child], null);
})], null));
});
ui.views.common.drawer.register_child = (function ui$views$common$drawer$register_child(state,key,node,callback){
return cljs.core.swap_BANG_.call(null,state,(function (p__39129){
var map__39130 = p__39129;
var map__39130__$1 = ((((!((map__39130 == null)))?((((map__39130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39130):map__39130);
var nodes = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var callbacks = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
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
var vec__39133 = keys__$1;
var key = cljs.core.nth.call(null,vec__39133,(0),null);
var keys_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__39133,(1));
var node = cljs.core.get.call(null,nodes,key);
var width = node.offsetWidth;
var height = node.offsetHeight;
var G__39134 = keys_SINGLEQUOTE_;
var G__39135 = (function (){var x__19204__auto__ = width;
var y__19205__auto__ = max_width;
return ((x__19204__auto__ > y__19205__auto__) ? x__19204__auto__ : y__19205__auto__);
})();
var G__39136 = (offset + height);
var G__39137 = cljs.core.conj.call(null,offsets,offset);
keys__$1 = G__39134;
max_width = G__39135;
offset = G__39136;
offsets = G__39137;
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
ui.views.common.drawer.animate_BANG_ = (function ui$views$common$drawer$animate_BANG_(node,callback,p__39138){
var map__39141 = p__39138;
var map__39141__$1 = ((((!((map__39141 == null)))?((((map__39141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39141):map__39141);
var initial = cljs.core.get.call(null,map__39141__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var final$ = cljs.core.get.call(null,map__39141__$1,new cljs.core.Keyword(null,"final","final",1157881357));
var duration = cljs.core.get.call(null,map__39141__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__39141__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var ease = cljs.core.get.call(null,map__39141__$1,new cljs.core.Keyword(null,"ease","ease",-1427802543),"cubic-bezier(0.075, 0.82, 0.165, 1)");
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
ui.views.common.drawer.throttle_chan = (function ui$views$common$drawer$throttle_chan(c,ms){
var c_SINGLEQUOTE_ = cljs.core.async.chan.call(null);
var c__20987__auto___39191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20987__auto___39191,c_SINGLEQUOTE_){
return (function (){
var f__20988__auto__ = (function (){var switch__20966__auto__ = ((function (c__20987__auto___39191,c_SINGLEQUOTE_){
return (function (state_39178){
var state_val_39179 = (state_39178[(1)]);
if((state_val_39179 === (1))){
var state_39178__$1 = state_39178;
var statearr_39180_39192 = state_39178__$1;
(statearr_39180_39192[(2)] = null);

(statearr_39180_39192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39179 === (2))){
var state_39178__$1 = state_39178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39178__$1,(4),c);
} else {
if((state_val_39179 === (3))){
var inst_39176 = (state_39178[(2)]);
var state_39178__$1 = state_39178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39178__$1,inst_39176);
} else {
if((state_val_39179 === (4))){
var inst_39169 = (state_39178[(2)]);
var inst_39170 = cljs.core.async.put_BANG_.call(null,c_SINGLEQUOTE_,inst_39169);
var inst_39171 = cljs.core.async.timeout.call(null,ms);
var state_39178__$1 = (function (){var statearr_39181 = state_39178;
(statearr_39181[(7)] = inst_39170);

return statearr_39181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39178__$1,(5),inst_39171);
} else {
if((state_val_39179 === (5))){
var inst_39173 = (state_39178[(2)]);
var state_39178__$1 = (function (){var statearr_39182 = state_39178;
(statearr_39182[(8)] = inst_39173);

return statearr_39182;
})();
var statearr_39183_39193 = state_39178__$1;
(statearr_39183_39193[(2)] = null);

(statearr_39183_39193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__20987__auto___39191,c_SINGLEQUOTE_))
;
return ((function (switch__20966__auto__,c__20987__auto___39191,c_SINGLEQUOTE_){
return (function() {
var ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__ = null;
var ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____0 = (function (){
var statearr_39187 = [null,null,null,null,null,null,null,null,null];
(statearr_39187[(0)] = ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__);

(statearr_39187[(1)] = (1));

return statearr_39187;
});
var ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____1 = (function (state_39178){
while(true){
var ret_value__20968__auto__ = (function (){try{while(true){
var result__20969__auto__ = switch__20966__auto__.call(null,state_39178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20969__auto__;
}
break;
}
}catch (e39188){if((e39188 instanceof Object)){
var ex__20970__auto__ = e39188;
var statearr_39189_39194 = state_39178;
(statearr_39189_39194[(5)] = ex__20970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39195 = state_39178;
state_39178 = G__39195;
continue;
} else {
return ret_value__20968__auto__;
}
break;
}
});
ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__ = function(state_39178){
switch(arguments.length){
case 0:
return ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____0.call(this);
case 1:
return ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____1.call(this,state_39178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$0 = ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____0;
ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$1 = ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto____1;
return ui$views$common$drawer$throttle_chan_$_state_machine__20967__auto__;
})()
;})(switch__20966__auto__,c__20987__auto___39191,c_SINGLEQUOTE_))
})();
var state__20989__auto__ = (function (){var statearr_39190 = f__20988__auto__.call(null);
(statearr_39190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20987__auto___39191);

return statearr_39190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20989__auto__);
});})(c__20987__auto___39191,c_SINGLEQUOTE_))
);


return c_SINGLEQUOTE_;
});
ui.views.common.drawer.drawer = (function ui$views$common$drawer$drawer(var_args){
var args__19949__auto__ = [];
var len__19942__auto___39308 = arguments.length;
var i__19943__auto___39309 = (0);
while(true){
if((i__19943__auto___39309 < len__19942__auto___39308)){
args__19949__auto__.push((arguments[i__19943__auto___39309]));

var G__39310 = (i__19943__auto___39309 + (1));
i__19943__auto___39309 = G__39310;
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
return (function (state_39267){
var state_val_39268 = (state_39267[(1)]);
if((state_val_39268 === (7))){
var inst_39221 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39221)){
var statearr_39269_39311 = state_39267__$1;
(statearr_39269_39311[(1)] = (11));

} else {
var statearr_39270_39312 = state_39267__$1;
(statearr_39270_39312[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (20))){
var inst_39233 = (state_39267[(7)]);
var inst_39250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39233);
var state_39267__$1 = state_39267;
var statearr_39271_39313 = state_39267__$1;
(statearr_39271_39313[(2)] = inst_39250);

(statearr_39271_39313[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (1))){
var state_39267__$1 = state_39267;
var statearr_39272_39314 = state_39267__$1;
(statearr_39272_39314[(2)] = null);

(statearr_39272_39314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (4))){
var inst_39206 = (state_39267[(8)]);
var inst_39205 = (state_39267[(2)]);
var inst_39206__$1 = cljs.core.deref.call(null,state);
var inst_39208 = (inst_39206__$1 == null);
var inst_39209 = cljs.core.not.call(null,inst_39208);
var state_39267__$1 = (function (){var statearr_39273 = state_39267;
(statearr_39273[(8)] = inst_39206__$1);

(statearr_39273[(9)] = inst_39205);

return statearr_39273;
})();
if(inst_39209){
var statearr_39274_39315 = state_39267__$1;
(statearr_39274_39315[(1)] = (5));

} else {
var statearr_39275_39316 = state_39267__$1;
(statearr_39275_39316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (15))){
var state_39267__$1 = state_39267;
var statearr_39276_39317 = state_39267__$1;
(statearr_39276_39317[(2)] = false);

(statearr_39276_39317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (21))){
var inst_39233 = (state_39267[(7)]);
var state_39267__$1 = state_39267;
var statearr_39277_39318 = state_39267__$1;
(statearr_39277_39318[(2)] = inst_39233);

(statearr_39277_39318[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (13))){
var inst_39233 = (state_39267[(7)]);
var inst_39231 = (state_39267[(10)]);
var inst_39226 = (state_39267[(11)]);
var inst_39226__$1 = (state_39267[(2)]);
var inst_39227 = cljs.core.get.call(null,inst_39226__$1,new cljs.core.Keyword(null,"parent-node","parent-node",-605954869));
var inst_39228 = cljs.core.get.call(null,inst_39226__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var inst_39229 = cljs.core.get.call(null,inst_39226__$1,new cljs.core.Keyword(null,"callbacks","callbacks",71591310));
var inst_39230 = cljs.core.get.call(null,inst_39226__$1,new cljs.core.Keyword(null,"prev-width","prev-width",92230696));
var inst_39231__$1 = reagent.core.argv.call(null,this$);
var inst_39232 = cljs.core.nth.call(null,inst_39231__$1,(0),null);
var inst_39233__$1 = cljs.core.nthnext.call(null,inst_39231__$1,(1));
var inst_39235 = (inst_39233__$1 == null);
var inst_39236 = cljs.core.not.call(null,inst_39235);
var state_39267__$1 = (function (){var statearr_39278 = state_39267;
(statearr_39278[(7)] = inst_39233__$1);

(statearr_39278[(12)] = inst_39232);

(statearr_39278[(13)] = inst_39229);

(statearr_39278[(14)] = inst_39227);

(statearr_39278[(15)] = inst_39230);

(statearr_39278[(16)] = inst_39228);

(statearr_39278[(10)] = inst_39231__$1);

(statearr_39278[(11)] = inst_39226__$1);

return statearr_39278;
})();
if(inst_39236){
var statearr_39279_39319 = state_39267__$1;
(statearr_39279_39319[(1)] = (14));

} else {
var statearr_39280_39320 = state_39267__$1;
(statearr_39280_39320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (22))){
var inst_39232 = (state_39267[(12)]);
var inst_39229 = (state_39267[(13)]);
var inst_39227 = (state_39267[(14)]);
var inst_39230 = (state_39267[(15)]);
var inst_39228 = (state_39267[(16)]);
var inst_39231 = (state_39267[(10)]);
var inst_39205 = (state_39267[(9)]);
var inst_39226 = (state_39267[(11)]);
var inst_39253 = (state_39267[(2)]);
var inst_39254 = cljs.core.get.call(null,inst_39253,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_39255 = cljs.core.comp.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.meta);
var inst_39256 = cljs.core.map.call(null,inst_39255,inst_39254);
var inst_39257 = ui.views.common.drawer.layout.call(null,inst_39256,inst_39228);
var inst_39258 = cljs.core.nth.call(null,inst_39257,(0),null);
var inst_39259 = cljs.core.nth.call(null,inst_39257,(1),null);
var inst_39260 = (function (){var vec__39201 = inst_39231;
var map__39202 = inst_39253;
var offsets = inst_39259;
var vec__39203 = inst_39257;
var children = inst_39254;
var child_keys = inst_39256;
var ___$1 = inst_39232;
var prev_width = inst_39230;
var choreography = inst_39205;
var parent_node = inst_39227;
var max_width = inst_39258;
var callbacks = inst_39229;
var map__39200 = inst_39226;
var nodes = inst_39228;
return ((function (vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn){
return (function (){
ui.views.common.drawer.animate_BANG_.call(null,parent_node,null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"final","final",1157881357),ui.views.common.drawer.translate_3d.call(null,(- max_width),(0)),new cljs.core.Keyword(null,"duration","duration",1444101068),(150),new cljs.core.Keyword(null,"delay","delay",-574225219),(((max_width > prev_width))?(0):(100))], null));

return cljs.core.doall.call(null,cljs.core.map.call(null,ui.views.common.drawer.animate_BANG_,cljs.core.map.call(null,((function (vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__39196_SHARP_){
return cljs.core.get.call(null,nodes,p1__39196_SHARP_);
});})(vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),cljs.core.map.call(null,((function (vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn){
return (function (p1__39197_SHARP_){
return cljs.core.get.call(null,callbacks,p1__39197_SHARP_);
});})(vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn))
,child_keys),choreography.call(null,prev_width,max_width,offsets)));
});
;})(vec__39201,map__39202,offsets,vec__39203,children,child_keys,___$1,prev_width,choreography,parent_node,max_width,callbacks,map__39200,nodes,inst_39232,inst_39229,inst_39227,inst_39230,inst_39228,inst_39231,inst_39205,inst_39226,inst_39253,inst_39254,inst_39255,inst_39256,inst_39257,inst_39258,inst_39259,state_val_39268,c__20987__auto__,state,animate_chan,child_fn))
})();
var inst_39261 = reagent.core.next_tick.call(null,inst_39260);
var inst_39262 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-width","prev-width",92230696),inst_39258);
var state_39267__$1 = (function (){var statearr_39281 = state_39267;
(statearr_39281[(17)] = inst_39262);

(statearr_39281[(18)] = inst_39261);

return statearr_39281;
})();
var statearr_39282_39321 = state_39267__$1;
(statearr_39282_39321[(2)] = null);

(statearr_39282_39321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (6))){
var state_39267__$1 = state_39267;
var statearr_39283_39322 = state_39267__$1;
(statearr_39283_39322[(2)] = false);

(statearr_39283_39322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (17))){
var state_39267__$1 = state_39267;
var statearr_39284_39323 = state_39267__$1;
(statearr_39284_39323[(2)] = true);

(statearr_39284_39323[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (3))){
var inst_39265 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39267__$1,inst_39265);
} else {
if((state_val_39268 === (12))){
var inst_39206 = (state_39267[(8)]);
var state_39267__$1 = state_39267;
var statearr_39285_39324 = state_39267__$1;
(statearr_39285_39324[(2)] = inst_39206);

(statearr_39285_39324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (2))){
var state_39267__$1 = state_39267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39267__$1,(4),animate_chan);
} else {
if((state_val_39268 === (19))){
var inst_39245 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
var statearr_39286_39325 = state_39267__$1;
(statearr_39286_39325[(2)] = inst_39245);

(statearr_39286_39325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (11))){
var inst_39206 = (state_39267[(8)]);
var inst_39223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39206);
var state_39267__$1 = state_39267;
var statearr_39287_39326 = state_39267__$1;
(statearr_39287_39326[(2)] = inst_39223);

(statearr_39287_39326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (9))){
var state_39267__$1 = state_39267;
var statearr_39288_39327 = state_39267__$1;
(statearr_39288_39327[(2)] = false);

(statearr_39288_39327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (5))){
var inst_39206 = (state_39267[(8)]);
var inst_39211 = inst_39206.cljs$lang$protocol_mask$partition0$;
var inst_39212 = (inst_39211 & (64));
var inst_39213 = inst_39206.cljs$core$ISeq$;
var inst_39214 = (inst_39212) || (inst_39213);
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39214)){
var statearr_39289_39328 = state_39267__$1;
(statearr_39289_39328[(1)] = (8));

} else {
var statearr_39290_39329 = state_39267__$1;
(statearr_39290_39329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (14))){
var inst_39233 = (state_39267[(7)]);
var inst_39238 = inst_39233.cljs$lang$protocol_mask$partition0$;
var inst_39239 = (inst_39238 & (64));
var inst_39240 = inst_39233.cljs$core$ISeq$;
var inst_39241 = (inst_39239) || (inst_39240);
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39241)){
var statearr_39291_39330 = state_39267__$1;
(statearr_39291_39330[(1)] = (17));

} else {
var statearr_39292_39331 = state_39267__$1;
(statearr_39292_39331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (16))){
var inst_39248 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39248)){
var statearr_39293_39332 = state_39267__$1;
(statearr_39293_39332[(1)] = (20));

} else {
var statearr_39294_39333 = state_39267__$1;
(statearr_39294_39333[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (10))){
var inst_39218 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
var statearr_39295_39334 = state_39267__$1;
(statearr_39295_39334[(2)] = inst_39218);

(statearr_39295_39334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (18))){
var state_39267__$1 = state_39267;
var statearr_39296_39335 = state_39267__$1;
(statearr_39296_39335[(2)] = false);

(statearr_39296_39335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (8))){
var state_39267__$1 = state_39267;
var statearr_39297_39336 = state_39267__$1;
(statearr_39297_39336[(2)] = true);

(statearr_39297_39336[(1)] = (10));


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
var statearr_39301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = ui$views$common$drawer$state_machine__20967__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var ui$views$common$drawer$state_machine__20967__auto____1 = (function (state_39267){
while(true){
var ret_value__20968__auto__ = (function (){try{while(true){
var result__20969__auto__ = switch__20966__auto__.call(null,state_39267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20969__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__20970__auto__ = e39302;
var statearr_39303_39337 = state_39267;
(statearr_39303_39337[(5)] = ex__20970__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39338 = state_39267;
state_39267 = G__39338;
continue;
} else {
return ret_value__20968__auto__;
}
break;
}
});
ui$views$common$drawer$state_machine__20967__auto__ = function(state_39267){
switch(arguments.length){
case 0:
return ui$views$common$drawer$state_machine__20967__auto____0.call(this);
case 1:
return ui$views$common$drawer$state_machine__20967__auto____1.call(this,state_39267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$0 = ui$views$common$drawer$state_machine__20967__auto____0;
ui$views$common$drawer$state_machine__20967__auto__.cljs$core$IFn$_invoke$arity$1 = ui$views$common$drawer$state_machine__20967__auto____1;
return ui$views$common$drawer$state_machine__20967__auto__;
})()
;})(switch__20966__auto__,c__20987__auto__,state,animate_chan,child_fn))
})();
var state__20989__auto__ = (function (){var statearr_39304 = f__20988__auto__.call(null);
(statearr_39304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20987__auto__);

return statearr_39304;
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
var G__39339__delegate = function (p__39305){
var map__39306 = p__39305;
var map__39306__$1 = ((((!((map__39306 == null)))?((((map__39306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39306):map__39306);
var children = cljs.core.get.call(null,map__39306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.drawer.transition,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"drawer"], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__39306,map__39306__$1,children,state,animate_chan,child_fn){
return (function (child){
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,child));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_fn,key,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});})(map__39306,map__39306__$1,children,state,animate_chan,child_fn))
,children))], null)], null);
};
var G__39339 = function (var_args){
var p__39305 = null;
if (arguments.length > 0) {
var G__39340__i = 0, G__39340__a = new Array(arguments.length -  0);
while (G__39340__i < G__39340__a.length) {G__39340__a[G__39340__i] = arguments[G__39340__i + 0]; ++G__39340__i;}
  p__39305 = new cljs.core.IndexedSeq(G__39340__a,0);
} 
return G__39339__delegate.call(this,p__39305);};
G__39339.cljs$lang$maxFixedArity = 0;
G__39339.cljs$lang$applyTo = (function (arglist__39341){
var p__39305 = cljs.core.seq(arglist__39341);
return G__39339__delegate(p__39305);
});
G__39339.cljs$core$IFn$_invoke$arity$variadic = G__39339__delegate;
return G__39339;
})()
;})(state,animate_chan,child_fn))
], null));
});

ui.views.common.drawer.drawer.cljs$lang$maxFixedArity = (0);

ui.views.common.drawer.drawer.cljs$lang$applyTo = (function (seq39198){
return ui.views.common.drawer.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39198));
});

//# sourceMappingURL=drawer.js.map?rel=1478925811998