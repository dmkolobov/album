// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35736 = cljs.core._EQ_;
var expr__35737 = (function (){var or__18843__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35740){if((e35740 instanceof Error)){
var e = e35740;
return false;
} else {
throw e35740;

}
}})();
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35736.call(null,"true",expr__35737))){
return true;
} else {
if(cljs.core.truth_(pred__35736.call(null,"false",expr__35737))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35737)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35742){if((e35742 instanceof Error)){
var e = e35742;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35742;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19919__auto__ = [];
var len__19912__auto___35744 = arguments.length;
var i__19913__auto___35745 = (0);
while(true){
if((i__19913__auto___35745 < len__19912__auto___35744)){
args__19919__auto__.push((arguments[i__19913__auto___35745]));

var G__35746 = (i__19913__auto___35745 + (1));
i__19913__auto___35745 = G__35746;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq35743){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35743));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35747){
var map__35750 = p__35747;
var map__35750__$1 = ((((!((map__35750 == null)))?((((map__35750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35750):map__35750);
var message = cljs.core.get.call(null,map__35750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18843__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18831__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18831__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18831__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23496__auto___35912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___35912,ch){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___35912,ch){
return (function (state_35881){
var state_val_35882 = (state_35881[(1)]);
if((state_val_35882 === (7))){
var inst_35877 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35883_35913 = state_35881__$1;
(statearr_35883_35913[(2)] = inst_35877);

(statearr_35883_35913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (1))){
var state_35881__$1 = state_35881;
var statearr_35884_35914 = state_35881__$1;
(statearr_35884_35914[(2)] = null);

(statearr_35884_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (4))){
var inst_35834 = (state_35881[(7)]);
var inst_35834__$1 = (state_35881[(2)]);
var state_35881__$1 = (function (){var statearr_35885 = state_35881;
(statearr_35885[(7)] = inst_35834__$1);

return statearr_35885;
})();
if(cljs.core.truth_(inst_35834__$1)){
var statearr_35886_35915 = state_35881__$1;
(statearr_35886_35915[(1)] = (5));

} else {
var statearr_35887_35916 = state_35881__$1;
(statearr_35887_35916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (15))){
var inst_35841 = (state_35881[(8)]);
var inst_35856 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35841);
var inst_35857 = cljs.core.first.call(null,inst_35856);
var inst_35858 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35857);
var inst_35859 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35858)].join('');
var inst_35860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35859);
var state_35881__$1 = state_35881;
var statearr_35888_35917 = state_35881__$1;
(statearr_35888_35917[(2)] = inst_35860);

(statearr_35888_35917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (13))){
var inst_35865 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35889_35918 = state_35881__$1;
(statearr_35889_35918[(2)] = inst_35865);

(statearr_35889_35918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (6))){
var state_35881__$1 = state_35881;
var statearr_35890_35919 = state_35881__$1;
(statearr_35890_35919[(2)] = null);

(statearr_35890_35919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (17))){
var inst_35863 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35891_35920 = state_35881__$1;
(statearr_35891_35920[(2)] = inst_35863);

(statearr_35891_35920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (3))){
var inst_35879 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35881__$1,inst_35879);
} else {
if((state_val_35882 === (12))){
var inst_35840 = (state_35881[(9)]);
var inst_35854 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35840,opts);
var state_35881__$1 = state_35881;
if(cljs.core.truth_(inst_35854)){
var statearr_35892_35921 = state_35881__$1;
(statearr_35892_35921[(1)] = (15));

} else {
var statearr_35893_35922 = state_35881__$1;
(statearr_35893_35922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (2))){
var state_35881__$1 = state_35881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35881__$1,(4),ch);
} else {
if((state_val_35882 === (11))){
var inst_35841 = (state_35881[(8)]);
var inst_35846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35847 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35841);
var inst_35848 = cljs.core.async.timeout.call(null,(1000));
var inst_35849 = [inst_35847,inst_35848];
var inst_35850 = (new cljs.core.PersistentVector(null,2,(5),inst_35846,inst_35849,null));
var state_35881__$1 = state_35881;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35881__$1,(14),inst_35850);
} else {
if((state_val_35882 === (9))){
var inst_35841 = (state_35881[(8)]);
var inst_35867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35868 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35841);
var inst_35869 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35868);
var inst_35870 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35869)].join('');
var inst_35871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35870);
var state_35881__$1 = (function (){var statearr_35894 = state_35881;
(statearr_35894[(10)] = inst_35867);

return statearr_35894;
})();
var statearr_35895_35923 = state_35881__$1;
(statearr_35895_35923[(2)] = inst_35871);

(statearr_35895_35923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (5))){
var inst_35834 = (state_35881[(7)]);
var inst_35836 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35837 = (new cljs.core.PersistentArrayMap(null,2,inst_35836,null));
var inst_35838 = (new cljs.core.PersistentHashSet(null,inst_35837,null));
var inst_35839 = figwheel.client.focus_msgs.call(null,inst_35838,inst_35834);
var inst_35840 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35839);
var inst_35841 = cljs.core.first.call(null,inst_35839);
var inst_35842 = figwheel.client.autoload_QMARK_.call(null);
var state_35881__$1 = (function (){var statearr_35896 = state_35881;
(statearr_35896[(8)] = inst_35841);

(statearr_35896[(9)] = inst_35840);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35842)){
var statearr_35897_35924 = state_35881__$1;
(statearr_35897_35924[(1)] = (8));

} else {
var statearr_35898_35925 = state_35881__$1;
(statearr_35898_35925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (14))){
var inst_35852 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35899_35926 = state_35881__$1;
(statearr_35899_35926[(2)] = inst_35852);

(statearr_35899_35926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (16))){
var state_35881__$1 = state_35881;
var statearr_35900_35927 = state_35881__$1;
(statearr_35900_35927[(2)] = null);

(statearr_35900_35927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (10))){
var inst_35873 = (state_35881[(2)]);
var state_35881__$1 = (function (){var statearr_35901 = state_35881;
(statearr_35901[(11)] = inst_35873);

return statearr_35901;
})();
var statearr_35902_35928 = state_35881__$1;
(statearr_35902_35928[(2)] = null);

(statearr_35902_35928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (8))){
var inst_35840 = (state_35881[(9)]);
var inst_35844 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35840,opts);
var state_35881__$1 = state_35881;
if(cljs.core.truth_(inst_35844)){
var statearr_35903_35929 = state_35881__$1;
(statearr_35903_35929[(1)] = (11));

} else {
var statearr_35904_35930 = state_35881__$1;
(statearr_35904_35930[(1)] = (12));

}

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
});})(c__23496__auto___35912,ch))
;
return ((function (switch__23384__auto__,c__23496__auto___35912,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____0 = (function (){
var statearr_35908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35908[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__);

(statearr_35908[(1)] = (1));

return statearr_35908;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____1 = (function (state_35881){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_35881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e35909){if((e35909 instanceof Object)){
var ex__23388__auto__ = e35909;
var statearr_35910_35931 = state_35881;
(statearr_35910_35931[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35932 = state_35881;
state_35881 = G__35932;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__ = function(state_35881){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____1.call(this,state_35881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23385__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___35912,ch))
})();
var state__23498__auto__ = (function (){var statearr_35911 = f__23497__auto__.call(null);
(statearr_35911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___35912);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___35912,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35933_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35933_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35940 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35940){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_35938 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35939 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35939;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35938;
}}catch (e35937){if((e35937 instanceof Error)){
var e = e35937;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35940], null));
} else {
var e = e35937;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35940))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35941){
var map__35948 = p__35941;
var map__35948__$1 = ((((!((map__35948 == null)))?((((map__35948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35948):map__35948);
var opts = map__35948__$1;
var build_id = cljs.core.get.call(null,map__35948__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35948,map__35948__$1,opts,build_id){
return (function (p__35950){
var vec__35951 = p__35950;
var map__35952 = cljs.core.nth.call(null,vec__35951,(0),null);
var map__35952__$1 = ((((!((map__35952 == null)))?((((map__35952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35952):map__35952);
var msg = map__35952__$1;
var msg_name = cljs.core.get.call(null,map__35952__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35951,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35951,map__35952,map__35952__$1,msg,msg_name,_,map__35948,map__35948__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35951,map__35952,map__35952__$1,msg,msg_name,_,map__35948,map__35948__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35948,map__35948__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35958){
var vec__35959 = p__35958;
var map__35960 = cljs.core.nth.call(null,vec__35959,(0),null);
var map__35960__$1 = ((((!((map__35960 == null)))?((((map__35960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35960):map__35960);
var msg = map__35960__$1;
var msg_name = cljs.core.get.call(null,map__35960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35959,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35962){
var map__35972 = p__35962;
var map__35972__$1 = ((((!((map__35972 == null)))?((((map__35972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35972):map__35972);
var on_compile_warning = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35972,map__35972__$1,on_compile_warning,on_compile_fail){
return (function (p__35974){
var vec__35975 = p__35974;
var map__35976 = cljs.core.nth.call(null,vec__35975,(0),null);
var map__35976__$1 = ((((!((map__35976 == null)))?((((map__35976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35976):map__35976);
var msg = map__35976__$1;
var msg_name = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35975,(1));
var pred__35978 = cljs.core._EQ_;
var expr__35979 = msg_name;
if(cljs.core.truth_(pred__35978.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35979))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35978.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35979))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35972,map__35972__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__,msg_hist,msg_names,msg){
return (function (state_36195){
var state_val_36196 = (state_36195[(1)]);
if((state_val_36196 === (7))){
var inst_36119 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36119)){
var statearr_36197_36243 = state_36195__$1;
(statearr_36197_36243[(1)] = (8));

} else {
var statearr_36198_36244 = state_36195__$1;
(statearr_36198_36244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (20))){
var inst_36189 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36199_36245 = state_36195__$1;
(statearr_36199_36245[(2)] = inst_36189);

(statearr_36199_36245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (27))){
var inst_36185 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36200_36246 = state_36195__$1;
(statearr_36200_36246[(2)] = inst_36185);

(statearr_36200_36246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (1))){
var inst_36112 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36112)){
var statearr_36201_36247 = state_36195__$1;
(statearr_36201_36247[(1)] = (2));

} else {
var statearr_36202_36248 = state_36195__$1;
(statearr_36202_36248[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (24))){
var inst_36187 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36203_36249 = state_36195__$1;
(statearr_36203_36249[(2)] = inst_36187);

(statearr_36203_36249[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (4))){
var inst_36193 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36195__$1,inst_36193);
} else {
if((state_val_36196 === (15))){
var inst_36191 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36204_36250 = state_36195__$1;
(statearr_36204_36250[(2)] = inst_36191);

(statearr_36204_36250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (21))){
var inst_36150 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36205_36251 = state_36195__$1;
(statearr_36205_36251[(2)] = inst_36150);

(statearr_36205_36251[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (31))){
var inst_36174 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36174)){
var statearr_36206_36252 = state_36195__$1;
(statearr_36206_36252[(1)] = (34));

} else {
var statearr_36207_36253 = state_36195__$1;
(statearr_36207_36253[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (32))){
var inst_36183 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36208_36254 = state_36195__$1;
(statearr_36208_36254[(2)] = inst_36183);

(statearr_36208_36254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (33))){
var inst_36172 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36209_36255 = state_36195__$1;
(statearr_36209_36255[(2)] = inst_36172);

(statearr_36209_36255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (13))){
var inst_36133 = figwheel.client.heads_up.clear.call(null);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(16),inst_36133);
} else {
if((state_val_36196 === (22))){
var inst_36154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36155 = figwheel.client.heads_up.append_message.call(null,inst_36154);
var state_36195__$1 = state_36195;
var statearr_36210_36256 = state_36195__$1;
(statearr_36210_36256[(2)] = inst_36155);

(statearr_36210_36256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (36))){
var inst_36181 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36211_36257 = state_36195__$1;
(statearr_36211_36257[(2)] = inst_36181);

(statearr_36211_36257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (29))){
var inst_36165 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36212_36258 = state_36195__$1;
(statearr_36212_36258[(2)] = inst_36165);

(statearr_36212_36258[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (6))){
var inst_36114 = (state_36195[(7)]);
var state_36195__$1 = state_36195;
var statearr_36213_36259 = state_36195__$1;
(statearr_36213_36259[(2)] = inst_36114);

(statearr_36213_36259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (28))){
var inst_36161 = (state_36195[(2)]);
var inst_36162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36163 = figwheel.client.heads_up.display_warning.call(null,inst_36162);
var state_36195__$1 = (function (){var statearr_36214 = state_36195;
(statearr_36214[(8)] = inst_36161);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(29),inst_36163);
} else {
if((state_val_36196 === (25))){
var inst_36159 = figwheel.client.heads_up.clear.call(null);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(28),inst_36159);
} else {
if((state_val_36196 === (34))){
var inst_36176 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(37),inst_36176);
} else {
if((state_val_36196 === (17))){
var inst_36141 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36215_36260 = state_36195__$1;
(statearr_36215_36260[(2)] = inst_36141);

(statearr_36215_36260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (3))){
var inst_36131 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36131)){
var statearr_36216_36261 = state_36195__$1;
(statearr_36216_36261[(1)] = (13));

} else {
var statearr_36217_36262 = state_36195__$1;
(statearr_36217_36262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (12))){
var inst_36127 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36218_36263 = state_36195__$1;
(statearr_36218_36263[(2)] = inst_36127);

(statearr_36218_36263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (2))){
var inst_36114 = (state_36195[(7)]);
var inst_36114__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36195__$1 = (function (){var statearr_36219 = state_36195;
(statearr_36219[(7)] = inst_36114__$1);

return statearr_36219;
})();
if(cljs.core.truth_(inst_36114__$1)){
var statearr_36220_36264 = state_36195__$1;
(statearr_36220_36264[(1)] = (5));

} else {
var statearr_36221_36265 = state_36195__$1;
(statearr_36221_36265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (23))){
var inst_36157 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36157)){
var statearr_36222_36266 = state_36195__$1;
(statearr_36222_36266[(1)] = (25));

} else {
var statearr_36223_36267 = state_36195__$1;
(statearr_36223_36267[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (35))){
var state_36195__$1 = state_36195;
var statearr_36224_36268 = state_36195__$1;
(statearr_36224_36268[(2)] = null);

(statearr_36224_36268[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (19))){
var inst_36152 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36152)){
var statearr_36225_36269 = state_36195__$1;
(statearr_36225_36269[(1)] = (22));

} else {
var statearr_36226_36270 = state_36195__$1;
(statearr_36226_36270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (11))){
var inst_36123 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36227_36271 = state_36195__$1;
(statearr_36227_36271[(2)] = inst_36123);

(statearr_36227_36271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (9))){
var inst_36125 = figwheel.client.heads_up.clear.call(null);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(12),inst_36125);
} else {
if((state_val_36196 === (5))){
var inst_36116 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36195__$1 = state_36195;
var statearr_36228_36272 = state_36195__$1;
(statearr_36228_36272[(2)] = inst_36116);

(statearr_36228_36272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (14))){
var inst_36143 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36143)){
var statearr_36229_36273 = state_36195__$1;
(statearr_36229_36273[(1)] = (18));

} else {
var statearr_36230_36274 = state_36195__$1;
(statearr_36230_36274[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (26))){
var inst_36167 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36195__$1 = state_36195;
if(cljs.core.truth_(inst_36167)){
var statearr_36231_36275 = state_36195__$1;
(statearr_36231_36275[(1)] = (30));

} else {
var statearr_36232_36276 = state_36195__$1;
(statearr_36232_36276[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (16))){
var inst_36135 = (state_36195[(2)]);
var inst_36136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36137 = figwheel.client.format_messages.call(null,inst_36136);
var inst_36138 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36139 = figwheel.client.heads_up.display_error.call(null,inst_36137,inst_36138);
var state_36195__$1 = (function (){var statearr_36233 = state_36195;
(statearr_36233[(9)] = inst_36135);

return statearr_36233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(17),inst_36139);
} else {
if((state_val_36196 === (30))){
var inst_36169 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36170 = figwheel.client.heads_up.display_warning.call(null,inst_36169);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(33),inst_36170);
} else {
if((state_val_36196 === (10))){
var inst_36129 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36234_36277 = state_36195__$1;
(statearr_36234_36277[(2)] = inst_36129);

(statearr_36234_36277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (18))){
var inst_36145 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36146 = figwheel.client.format_messages.call(null,inst_36145);
var inst_36147 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36148 = figwheel.client.heads_up.display_error.call(null,inst_36146,inst_36147);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(21),inst_36148);
} else {
if((state_val_36196 === (37))){
var inst_36178 = (state_36195[(2)]);
var state_36195__$1 = state_36195;
var statearr_36235_36278 = state_36195__$1;
(statearr_36235_36278[(2)] = inst_36178);

(statearr_36235_36278[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36196 === (8))){
var inst_36121 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36195__$1 = state_36195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36195__$1,(11),inst_36121);
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
});})(c__23496__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23384__auto__,c__23496__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____0 = (function (){
var statearr_36239 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36239[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__);

(statearr_36239[(1)] = (1));

return statearr_36239;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____1 = (function (state_36195){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_36195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e36240){if((e36240 instanceof Object)){
var ex__23388__auto__ = e36240;
var statearr_36241_36279 = state_36195;
(statearr_36241_36279[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36280 = state_36195;
state_36195 = G__36280;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__ = function(state_36195){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____1.call(this,state_36195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__,msg_hist,msg_names,msg))
})();
var state__23498__auto__ = (function (){var statearr_36242 = f__23497__auto__.call(null);
(statearr_36242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_36242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__,msg_hist,msg_names,msg))
);

return c__23496__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23496__auto___36343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___36343,ch){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___36343,ch){
return (function (state_36326){
var state_val_36327 = (state_36326[(1)]);
if((state_val_36327 === (1))){
var state_36326__$1 = state_36326;
var statearr_36328_36344 = state_36326__$1;
(statearr_36328_36344[(2)] = null);

(statearr_36328_36344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36327 === (2))){
var state_36326__$1 = state_36326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36326__$1,(4),ch);
} else {
if((state_val_36327 === (3))){
var inst_36324 = (state_36326[(2)]);
var state_36326__$1 = state_36326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36326__$1,inst_36324);
} else {
if((state_val_36327 === (4))){
var inst_36314 = (state_36326[(7)]);
var inst_36314__$1 = (state_36326[(2)]);
var state_36326__$1 = (function (){var statearr_36329 = state_36326;
(statearr_36329[(7)] = inst_36314__$1);

return statearr_36329;
})();
if(cljs.core.truth_(inst_36314__$1)){
var statearr_36330_36345 = state_36326__$1;
(statearr_36330_36345[(1)] = (5));

} else {
var statearr_36331_36346 = state_36326__$1;
(statearr_36331_36346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36327 === (5))){
var inst_36314 = (state_36326[(7)]);
var inst_36316 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36314);
var state_36326__$1 = state_36326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36326__$1,(8),inst_36316);
} else {
if((state_val_36327 === (6))){
var state_36326__$1 = state_36326;
var statearr_36332_36347 = state_36326__$1;
(statearr_36332_36347[(2)] = null);

(statearr_36332_36347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36327 === (7))){
var inst_36322 = (state_36326[(2)]);
var state_36326__$1 = state_36326;
var statearr_36333_36348 = state_36326__$1;
(statearr_36333_36348[(2)] = inst_36322);

(statearr_36333_36348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36327 === (8))){
var inst_36318 = (state_36326[(2)]);
var state_36326__$1 = (function (){var statearr_36334 = state_36326;
(statearr_36334[(8)] = inst_36318);

return statearr_36334;
})();
var statearr_36335_36349 = state_36326__$1;
(statearr_36335_36349[(2)] = null);

(statearr_36335_36349[(1)] = (2));


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
});})(c__23496__auto___36343,ch))
;
return ((function (switch__23384__auto__,c__23496__auto___36343,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23385__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23385__auto____0 = (function (){
var statearr_36339 = [null,null,null,null,null,null,null,null,null];
(statearr_36339[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23385__auto__);

(statearr_36339[(1)] = (1));

return statearr_36339;
});
var figwheel$client$heads_up_plugin_$_state_machine__23385__auto____1 = (function (state_36326){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_36326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e36340){if((e36340 instanceof Object)){
var ex__23388__auto__ = e36340;
var statearr_36341_36350 = state_36326;
(statearr_36341_36350[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36351 = state_36326;
state_36326 = G__36351;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23385__auto__ = function(state_36326){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23385__auto____1.call(this,state_36326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23385__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23385__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___36343,ch))
})();
var state__23498__auto__ = (function (){var statearr_36342 = f__23497__auto__.call(null);
(statearr_36342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___36343);

return statearr_36342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___36343,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_36372){
var state_val_36373 = (state_36372[(1)]);
if((state_val_36373 === (1))){
var inst_36367 = cljs.core.async.timeout.call(null,(3000));
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36372__$1,(2),inst_36367);
} else {
if((state_val_36373 === (2))){
var inst_36369 = (state_36372[(2)]);
var inst_36370 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36372__$1 = (function (){var statearr_36374 = state_36372;
(statearr_36374[(7)] = inst_36369);

return statearr_36374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36372__$1,inst_36370);
} else {
return null;
}
}
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____0 = (function (){
var statearr_36378 = [null,null,null,null,null,null,null,null];
(statearr_36378[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__);

(statearr_36378[(1)] = (1));

return statearr_36378;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____1 = (function (state_36372){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_36372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e36379){if((e36379 instanceof Object)){
var ex__23388__auto__ = e36379;
var statearr_36380_36382 = state_36372;
(statearr_36380_36382[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36383 = state_36372;
state_36372 = G__36383;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__ = function(state_36372){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____1.call(this,state_36372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23385__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_36381 = f__23497__auto__.call(null);
(statearr_36381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_36381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36384){
var map__36391 = p__36384;
var map__36391__$1 = ((((!((map__36391 == null)))?((((map__36391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36391):map__36391);
var ed = map__36391__$1;
var formatted_exception = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36393_36397 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36394_36398 = null;
var count__36395_36399 = (0);
var i__36396_36400 = (0);
while(true){
if((i__36396_36400 < count__36395_36399)){
var msg_36401 = cljs.core._nth.call(null,chunk__36394_36398,i__36396_36400);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36401);

var G__36402 = seq__36393_36397;
var G__36403 = chunk__36394_36398;
var G__36404 = count__36395_36399;
var G__36405 = (i__36396_36400 + (1));
seq__36393_36397 = G__36402;
chunk__36394_36398 = G__36403;
count__36395_36399 = G__36404;
i__36396_36400 = G__36405;
continue;
} else {
var temp__4657__auto___36406 = cljs.core.seq.call(null,seq__36393_36397);
if(temp__4657__auto___36406){
var seq__36393_36407__$1 = temp__4657__auto___36406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36393_36407__$1)){
var c__19654__auto___36408 = cljs.core.chunk_first.call(null,seq__36393_36407__$1);
var G__36409 = cljs.core.chunk_rest.call(null,seq__36393_36407__$1);
var G__36410 = c__19654__auto___36408;
var G__36411 = cljs.core.count.call(null,c__19654__auto___36408);
var G__36412 = (0);
seq__36393_36397 = G__36409;
chunk__36394_36398 = G__36410;
count__36395_36399 = G__36411;
i__36396_36400 = G__36412;
continue;
} else {
var msg_36413 = cljs.core.first.call(null,seq__36393_36407__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36413);

var G__36414 = cljs.core.next.call(null,seq__36393_36407__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__36393_36397 = G__36414;
chunk__36394_36398 = G__36415;
count__36395_36399 = G__36416;
i__36396_36400 = G__36417;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36418){
var map__36421 = p__36418;
var map__36421__$1 = ((((!((map__36421 == null)))?((((map__36421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36421):map__36421);
var w = map__36421__$1;
var message = cljs.core.get.call(null,map__36421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18831__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18831__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18831__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36429 = cljs.core.seq.call(null,plugins);
var chunk__36430 = null;
var count__36431 = (0);
var i__36432 = (0);
while(true){
if((i__36432 < count__36431)){
var vec__36433 = cljs.core._nth.call(null,chunk__36430,i__36432);
var k = cljs.core.nth.call(null,vec__36433,(0),null);
var plugin = cljs.core.nth.call(null,vec__36433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36435 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36429,chunk__36430,count__36431,i__36432,pl_36435,vec__36433,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36435.call(null,msg_hist);
});})(seq__36429,chunk__36430,count__36431,i__36432,pl_36435,vec__36433,k,plugin))
);
} else {
}

var G__36436 = seq__36429;
var G__36437 = chunk__36430;
var G__36438 = count__36431;
var G__36439 = (i__36432 + (1));
seq__36429 = G__36436;
chunk__36430 = G__36437;
count__36431 = G__36438;
i__36432 = G__36439;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36429);
if(temp__4657__auto__){
var seq__36429__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36429__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__36429__$1);
var G__36440 = cljs.core.chunk_rest.call(null,seq__36429__$1);
var G__36441 = c__19654__auto__;
var G__36442 = cljs.core.count.call(null,c__19654__auto__);
var G__36443 = (0);
seq__36429 = G__36440;
chunk__36430 = G__36441;
count__36431 = G__36442;
i__36432 = G__36443;
continue;
} else {
var vec__36434 = cljs.core.first.call(null,seq__36429__$1);
var k = cljs.core.nth.call(null,vec__36434,(0),null);
var plugin = cljs.core.nth.call(null,vec__36434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36429,chunk__36430,count__36431,i__36432,pl_36444,vec__36434,k,plugin,seq__36429__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36444.call(null,msg_hist);
});})(seq__36429,chunk__36430,count__36431,i__36432,pl_36444,vec__36434,k,plugin,seq__36429__$1,temp__4657__auto__))
);
} else {
}

var G__36445 = cljs.core.next.call(null,seq__36429__$1);
var G__36446 = null;
var G__36447 = (0);
var G__36448 = (0);
seq__36429 = G__36445;
chunk__36430 = G__36446;
count__36431 = G__36447;
i__36432 = G__36448;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36449 = [];
var len__19912__auto___36452 = arguments.length;
var i__19913__auto___36453 = (0);
while(true){
if((i__19913__auto___36453 < len__19912__auto___36452)){
args36449.push((arguments[i__19913__auto___36453]));

var G__36454 = (i__19913__auto___36453 + (1));
i__19913__auto___36453 = G__36454;
continue;
} else {
}
break;
}

var G__36451 = args36449.length;
switch (G__36451) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36449.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19919__auto__ = [];
var len__19912__auto___36460 = arguments.length;
var i__19913__auto___36461 = (0);
while(true){
if((i__19913__auto___36461 < len__19912__auto___36460)){
args__19919__auto__.push((arguments[i__19913__auto___36461]));

var G__36462 = (i__19913__auto___36461 + (1));
i__19913__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36457){
var map__36458 = p__36457;
var map__36458__$1 = ((((!((map__36458 == null)))?((((map__36458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36458):map__36458);
var opts = map__36458__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36456){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36456));
});

//# sourceMappingURL=client.js.map?rel=1478297204565