// Compiled by ClojureScript 1.8.40 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."], true, false),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__24021){
var map__24025 = p__24021;
var map__24025__$1 = ((((!((map__24025 == null)))?((((map__24025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24025):map__24025);
var args = map__24025__$1;
var on_change = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__24027 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__18873__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__24027,external_model_value);
} else {
return G__24027;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__24028,event){
var map__24032 = p__24028;
var map__24032__$1 = ((((!((map__24032 == null)))?((((map__24032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);
var state = map__24032__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__24034 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__24034) {
case "input-text-blurred":
var and__18861__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__18861__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__18861__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__18873__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__24036,event){
var map__24040 = p__24036;
var map__24040__$1 = ((((!((map__24040 == null)))?((((map__24040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24040):map__24040);
var state = map__24040__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__24040__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__24042 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__24042) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__24044,new_value){
var map__24047 = p__24044;
var map__24047__$1 = ((((!((map__24047 == null)))?((((map__24047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var state = map__24047__$1;
var on_change = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__24049,suggestion){
var map__24053 = p__24049;
var map__24053__$1 = ((((!((map__24053 == null)))?((((map__24053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24053):map__24053);
var state = map__24053__$1;
var suggestion_to_string = cljs.core.get.call(null,map__24053__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__24055 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__24055,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__24055;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__24056,index){
var map__24060 = p__24056;
var map__24060__$1 = ((((!((map__24060 == null)))?((((map__24060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24060):map__24060);
var state = map__24060__$1;
var suggestions = cljs.core.get.call(null,map__24060__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__24062 = state;
var G__24062__$1 = cljs.core.assoc.call(null,G__24062,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__24062__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__24062__$1,suggestion):G__24062__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__24062__$2,suggestion);
} else {
return G__24062__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__24063,index){
var map__24066 = p__24063;
var map__24066__$1 = ((((!((map__24066 == null)))?((((map__24066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24066):map__24066);
var state = map__24066__$1;
var suggestions = cljs.core.get.call(null,map__24066__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__24068){
var map__24072 = p__24068;
var map__24072__$1 = ((((!((map__24072 == null)))?((((map__24072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24072):map__24072);
var state = map__24072__$1;
var suggestion_active_index = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__24074 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__24074,suggestion_active_index);
} else {
return G__24074;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__24075){
var map__24079 = p__24075;
var map__24079__$1 = ((((!((map__24079 == null)))?((((map__24079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24079):map__24079);
var state = map__24079__$1;
var suggestions = cljs.core.get.call(null,map__24079__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__24079__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__24081 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__24081,re_com.typeahead.wrap.call(null,((function (){var or__18873__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__24081;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__24082){
var map__24086 = p__24082;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var state = map__24086__$1;
var suggestions = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__24088 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__24088,re_com.typeahead.wrap.call(null,((function (){var or__18873__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__24088;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__24090 = state;
var G__24090__$1 = re_com.typeahead.clear_suggestions.call(null,G__24090)
;
var G__24090__$2 = cljs.core.assoc.call(null,G__24090__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__24090__$2,null);
} else {
return G__24090__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__24091){
var map__24095 = p__24091;
var map__24095__$1 = ((((!((map__24095 == null)))?((((map__24095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24095):map__24095);
var state = map__24095__$1;
var input_text = cljs.core.get.call(null,map__24095__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__24095__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__24097 = state;
if(cljs.core.truth_((function (){var and__18861__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__18861__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__18861__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__24097,input_text);
} else {
return G__24097;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__24098_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__24098_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__21040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto__){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto__){
return (function (state_24148){
var state_val_24149 = (state_24148[(1)]);
if((state_val_24149 === (1))){
var state_24148__$1 = state_24148;
var statearr_24150_24165 = state_24148__$1;
(statearr_24150_24165[(2)] = null);

(statearr_24150_24165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (2))){
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24148__$1,(4),c_search);
} else {
if((state_val_24149 === (3))){
var inst_24146 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24148__$1,inst_24146);
} else {
if((state_val_24149 === (4))){
var inst_24134 = (state_24148[(7)]);
var inst_24134__$1 = (state_24148[(2)]);
var inst_24135 = cljs.core.deref.call(null,state_atom);
var inst_24136 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_24135);
var inst_24137 = cljs.core._EQ_.call(null,"",inst_24134__$1);
var state_24148__$1 = (function (){var statearr_24151 = state_24148;
(statearr_24151[(8)] = inst_24136);

(statearr_24151[(7)] = inst_24134__$1);

return statearr_24151;
})();
if(inst_24137){
var statearr_24152_24166 = state_24148__$1;
(statearr_24152_24166[(1)] = (5));

} else {
var statearr_24153_24167 = state_24148__$1;
(statearr_24153_24167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (5))){
var inst_24139 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_24148__$1 = state_24148;
var statearr_24154_24168 = state_24148__$1;
(statearr_24154_24168[(2)] = inst_24139);

(statearr_24154_24168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (6))){
var inst_24136 = (state_24148[(8)]);
var inst_24134 = (state_24148[(7)]);
var inst_24141 = re_com.typeahead.search_data_source_BANG_.call(null,inst_24136,state_atom,inst_24134);
var state_24148__$1 = state_24148;
var statearr_24155_24169 = state_24148__$1;
(statearr_24155_24169[(2)] = inst_24141);

(statearr_24155_24169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (7))){
var inst_24143 = (state_24148[(2)]);
var state_24148__$1 = (function (){var statearr_24156 = state_24148;
(statearr_24156[(9)] = inst_24143);

return statearr_24156;
})();
var statearr_24157_24170 = state_24148__$1;
(statearr_24157_24170[(2)] = null);

(statearr_24157_24170[(1)] = (2));


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
});})(c__21040__auto__))
;
return ((function (switch__20928__auto__,c__21040__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24161[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____1 = (function (state_24148){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_24148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object)){
var ex__20932__auto__ = e24162;
var statearr_24163_24171 = state_24148;
(statearr_24163_24171[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24172 = state_24148;
state_24148 = G__24172;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__ = function(state_24148){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____1.call(this,state_24148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto__))
})();
var state__21042__auto__ = (function (){var statearr_24164 = f__21041__auto__.call(null);
(statearr_24164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto__);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto__))
);

return c__21040__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__24177 = cljs.core.deref.call(null,state_atom);
var map__24177__$1 = ((((!((map__24177 == null)))?((((map__24177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24177):map__24177);
var state = map__24177__$1;
var input_text = cljs.core.get.call(null,map__24177__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__24177__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__24177,map__24177__$1,state,input_text,c_input){
return (function (p1__24173_SHARP_){
var G__24179 = p1__24173_SHARP_;
var G__24179__$1 = cljs.core.assoc.call(null,G__24179,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__24179__$1,new_text);
} else {
return G__24179__$1;
}
});})(map__24177,map__24177__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__24183 = cljs.core._EQ_;
var expr__24184 = event.which;
if(cljs.core.truth_(pred__24183.call(null,goog.events.KeyCodes.UP,expr__24184))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__24183.call(null,goog.events.KeyCodes.DOWN,expr__24184))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__24183.call(null,goog.events.KeyCodes.ENTER,expr__24184))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__24183.call(null,goog.events.KeyCodes.ESC,expr__24184))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__24183.call(null,goog.events.KeyCodes.TAB,expr__24184))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__19949__auto__ = [];
var len__19942__auto___24206 = arguments.length;
var i__19943__auto___24207 = (0);
while(true){
if((i__19943__auto___24207 < len__19942__auto___24206)){
args__19949__auto__.push((arguments[i__19943__auto___24207]));

var G__24208 = (i__19943__auto___24207 + (1));
i__19943__auto___24207 = G__24208;
continue;
} else {
}
break;
}

var argseq__19950__auto__ = ((((0) < args__19949__auto__.length))?(new cljs.core.IndexedSeq(args__19949__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__19950__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__24188){
var map__24189 = p__24188;
var map__24189__$1 = ((((!((map__24189 == null)))?((((map__24189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);
var args = map__24189__$1;
var data_source = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__24191 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__24191__$1 = ((((!((map__24191 == null)))?((((map__24191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24191):map__24191);
var state = map__24191__$1;
var c_search = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__24209__delegate = function (p__24193){
var map__24194 = p__24193;
var map__24194__$1 = ((((!((map__24194 == null)))?((((map__24194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24194):map__24194);
var args__$1 = map__24194__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__24196 = cljs.core.deref.call(null,state_atom);
var map__24196__$1 = ((((!((map__24196 == null)))?((((map__24196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24196):map__24196);
var state__$1 = map__24196__$1;
var suggestions = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__24196__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__18873__auto__ = width;
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__18873__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__18873__auto__)){
return or__18873__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__19653__auto__ = ((function (map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__24198(s__24199){
return (new cljs.core.LazySeq(null,((function (map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__24199__$1 = s__24199;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24199__$1);
if(temp__4657__auto__){
var s__24199__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24199__$2)){
var c__19651__auto__ = cljs.core.chunk_first.call(null,s__24199__$2);
var size__19652__auto__ = cljs.core.count.call(null,c__19651__auto__);
var b__24201 = cljs.core.chunk_buffer.call(null,size__19652__auto__);
if((function (){var i__24200 = (0);
while(true){
if((i__24200 < size__19652__auto__)){
var vec__24204 = cljs.core._nth.call(null,c__19651__auto__,i__24200);
var i = cljs.core.nth.call(null,vec__24204,(0),null);
var s = cljs.core.nth.call(null,vec__24204,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__24201,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__24200,selected_QMARK_,vec__24204,i,s,c__19651__auto__,size__19652__auto__,b__24201,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__24200,selected_QMARK_,vec__24204,i,s,c__19651__auto__,size__19652__auto__,b__24201,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__24200,selected_QMARK_,vec__24204,i,s,c__19651__auto__,size__19652__auto__,b__24201,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__24186_SHARP_){
p1__24186_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__24200,selected_QMARK_,vec__24204,i,s,c__19651__auto__,size__19652__auto__,b__24201,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__24210 = (i__24200 + (1));
i__24200 = G__24210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24201),re_com$typeahead$iter__24198.call(null,cljs.core.chunk_rest.call(null,s__24199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24201),null);
}
} else {
var vec__24205 = cljs.core.first.call(null,s__24199__$2);
var i = cljs.core.nth.call(null,vec__24205,(0),null);
var s = cljs.core.nth.call(null,vec__24205,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__24205,i,s,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__24205,i,s,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__24205,i,s,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__24186_SHARP_){
p1__24186_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__24205,i,s,s__24199__$2,temp__4657__auto__,map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__24198.call(null,cljs.core.rest.call(null,s__24199__$2)));
}
} else {
return null;
}
break;
}
});})(map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__24196,map__24196__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__24194,map__24194__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__19653__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__24209 = function (var_args){
var p__24193 = null;
if (arguments.length > 0) {
var G__24211__i = 0, G__24211__a = new Array(arguments.length -  0);
while (G__24211__i < G__24211__a.length) {G__24211__a[G__24211__i] = arguments[G__24211__i + 0]; ++G__24211__i;}
  p__24193 = new cljs.core.IndexedSeq(G__24211__a,0);
} 
return G__24209__delegate.call(this,p__24193);};
G__24209.cljs$lang$maxFixedArity = 0;
G__24209.cljs$lang$applyTo = (function (arglist__24212){
var p__24193 = cljs.core.seq(arglist__24212);
return G__24209__delegate(p__24193);
});
G__24209.cljs$core$IFn$_invoke$arity$variadic = G__24209__delegate;
return G__24209;
})()
;
;})(map__24191,map__24191__$1,state,c_search,c_input,state_atom,input_text_model,map__24189,map__24189__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq24187){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24187));
});
/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__21040__auto___24371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21040__auto___24371,out){
return (function (){
var f__21041__auto__ = (function (){var switch__20928__auto__ = ((function (c__21040__auto___24371,out){
return (function (state_24338){
var state_val_24339 = (state_24338[(1)]);
if((state_val_24339 === (7))){
var inst_24297 = (state_24338[(2)]);
var state_24338__$1 = state_24338;
var statearr_24340_24372 = state_24338__$1;
(statearr_24340_24372[(2)] = inst_24297);

(statearr_24340_24372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (1))){
var inst_24292 = null;
var state_24338__$1 = (function (){var statearr_24341 = state_24338;
(statearr_24341[(7)] = inst_24292);

return statearr_24341;
})();
var statearr_24342_24373 = state_24338__$1;
(statearr_24342_24373[(2)] = null);

(statearr_24342_24373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (4))){
var state_24338__$1 = state_24338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24338__$1,(7),in$);
} else {
if((state_val_24339 === (15))){
var inst_24323 = (state_24338[(2)]);
var state_24338__$1 = (function (){var statearr_24343 = state_24338;
(statearr_24343[(8)] = inst_24323);

return statearr_24343;
})();
var statearr_24344_24374 = state_24338__$1;
(statearr_24344_24374[(2)] = null);

(statearr_24344_24374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (13))){
var inst_24313 = (state_24338[(9)]);
var inst_24325 = cljs.core._EQ_.call(null,inst_24313,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_24338__$1 = state_24338;
if(inst_24325){
var statearr_24345_24375 = state_24338__$1;
(statearr_24345_24375[(1)] = (16));

} else {
var statearr_24346_24376 = state_24338__$1;
(statearr_24346_24376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (6))){
var inst_24301 = (state_24338[(10)]);
var inst_24300 = (state_24338[(2)]);
var inst_24301__$1 = cljs.core.async.timeout.call(null,ms);
var inst_24307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24308 = [in$,inst_24301__$1];
var inst_24309 = (new cljs.core.PersistentVector(null,2,(5),inst_24307,inst_24308,null));
var state_24338__$1 = (function (){var statearr_24347 = state_24338;
(statearr_24347[(10)] = inst_24301__$1);

(statearr_24347[(11)] = inst_24300);

return statearr_24347;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24338__$1,(8),inst_24309);
} else {
if((state_val_24339 === (17))){
var state_24338__$1 = state_24338;
var statearr_24348_24377 = state_24338__$1;
(statearr_24348_24377[(2)] = null);

(statearr_24348_24377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (3))){
var inst_24336 = (state_24338[(2)]);
var state_24338__$1 = state_24338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24338__$1,inst_24336);
} else {
if((state_val_24339 === (12))){
var inst_24300 = (state_24338[(11)]);
var state_24338__$1 = state_24338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24338__$1,(15),out,inst_24300);
} else {
if((state_val_24339 === (2))){
var inst_24292 = (state_24338[(7)]);
var inst_24294 = (inst_24292 == null);
var state_24338__$1 = state_24338;
if(cljs.core.truth_(inst_24294)){
var statearr_24349_24378 = state_24338__$1;
(statearr_24349_24378[(1)] = (4));

} else {
var statearr_24350_24379 = state_24338__$1;
(statearr_24350_24379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (11))){
var inst_24333 = (state_24338[(2)]);
var inst_24292 = inst_24333;
var state_24338__$1 = (function (){var statearr_24351 = state_24338;
(statearr_24351[(7)] = inst_24292);

return statearr_24351;
})();
var statearr_24352_24380 = state_24338__$1;
(statearr_24352_24380[(2)] = null);

(statearr_24352_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (9))){
var inst_24311 = (state_24338[(12)]);
var inst_24317 = cljs.core.nth.call(null,inst_24311,(0),null);
var inst_24318 = cljs.core.nth.call(null,inst_24311,(1),null);
var state_24338__$1 = (function (){var statearr_24353 = state_24338;
(statearr_24353[(13)] = inst_24318);

return statearr_24353;
})();
var statearr_24354_24381 = state_24338__$1;
(statearr_24354_24381[(2)] = inst_24317);

(statearr_24354_24381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (5))){
var inst_24292 = (state_24338[(7)]);
var state_24338__$1 = state_24338;
var statearr_24355_24382 = state_24338__$1;
(statearr_24355_24382[(2)] = inst_24292);

(statearr_24355_24382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (14))){
var inst_24331 = (state_24338[(2)]);
var state_24338__$1 = state_24338;
var statearr_24356_24383 = state_24338__$1;
(statearr_24356_24383[(2)] = inst_24331);

(statearr_24356_24383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (16))){
var inst_24312 = (state_24338[(14)]);
var state_24338__$1 = state_24338;
var statearr_24357_24384 = state_24338__$1;
(statearr_24357_24384[(2)] = inst_24312);

(statearr_24357_24384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (10))){
var inst_24301 = (state_24338[(10)]);
var inst_24313 = (state_24338[(9)]);
var inst_24320 = cljs.core._EQ_.call(null,inst_24313,inst_24301);
var state_24338__$1 = state_24338;
if(inst_24320){
var statearr_24358_24385 = state_24338__$1;
(statearr_24358_24385[(1)] = (12));

} else {
var statearr_24359_24386 = state_24338__$1;
(statearr_24359_24386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (18))){
var inst_24329 = (state_24338[(2)]);
var state_24338__$1 = state_24338;
var statearr_24360_24387 = state_24338__$1;
(statearr_24360_24387[(2)] = inst_24329);

(statearr_24360_24387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24339 === (8))){
var inst_24313 = (state_24338[(9)]);
var inst_24311 = (state_24338[(12)]);
var inst_24311__$1 = (state_24338[(2)]);
var inst_24312 = cljs.core.nth.call(null,inst_24311__$1,(0),null);
var inst_24313__$1 = cljs.core.nth.call(null,inst_24311__$1,(1),null);
var inst_24314 = cljs.core._EQ_.call(null,inst_24313__$1,in$);
var state_24338__$1 = (function (){var statearr_24361 = state_24338;
(statearr_24361[(9)] = inst_24313__$1);

(statearr_24361[(12)] = inst_24311__$1);

(statearr_24361[(14)] = inst_24312);

return statearr_24361;
})();
if(inst_24314){
var statearr_24362_24388 = state_24338__$1;
(statearr_24362_24388[(1)] = (9));

} else {
var statearr_24363_24389 = state_24338__$1;
(statearr_24363_24389[(1)] = (10));

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
}
});})(c__21040__auto___24371,out))
;
return ((function (switch__20928__auto__,c__21040__auto___24371,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__20929__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__20929__auto____0 = (function (){
var statearr_24367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24367[(0)] = re_com$typeahead$debounce_$_state_machine__20929__auto__);

(statearr_24367[(1)] = (1));

return statearr_24367;
});
var re_com$typeahead$debounce_$_state_machine__20929__auto____1 = (function (state_24338){
while(true){
var ret_value__20930__auto__ = (function (){try{while(true){
var result__20931__auto__ = switch__20928__auto__.call(null,state_24338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20931__auto__;
}
break;
}
}catch (e24368){if((e24368 instanceof Object)){
var ex__20932__auto__ = e24368;
var statearr_24369_24390 = state_24338;
(statearr_24369_24390[(5)] = ex__20932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24391 = state_24338;
state_24338 = G__24391;
continue;
} else {
return ret_value__20930__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__20929__auto__ = function(state_24338){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__20929__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__20929__auto____1.call(this,state_24338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__20929__auto____0;
re_com$typeahead$debounce_$_state_machine__20929__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__20929__auto____1;
return re_com$typeahead$debounce_$_state_machine__20929__auto__;
})()
;})(switch__20928__auto__,c__21040__auto___24371,out))
})();
var state__21042__auto__ = (function (){var statearr_24370 = f__21041__auto__.call(null);
(statearr_24370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21040__auto___24371);

return statearr_24370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21042__auto__);
});})(c__21040__auto___24371,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1478582018668