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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__26338){
var map__26342 = p__26338;
var map__26342__$1 = ((((!((map__26342 == null)))?((((map__26342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26342):map__26342);
var args = map__26342__$1;
var on_change = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__26342__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__26344 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__18843__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__26344,external_model_value);
} else {
return G__26344;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__26345,event){
var map__26349 = p__26345;
var map__26349__$1 = ((((!((map__26349 == null)))?((((map__26349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26349):map__26349);
var state = map__26349__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26349__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__26349__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__26351 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__26351) {
case "input-text-blurred":
var and__18831__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__18831__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__18843__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__26353,event){
var map__26357 = p__26353;
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var state = map__26357__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__26359 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__26359) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__26361,new_value){
var map__26364 = p__26361;
var map__26364__$1 = ((((!((map__26364 == null)))?((((map__26364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26364):map__26364);
var state = map__26364__$1;
var on_change = cljs.core.get.call(null,map__26364__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__26366,suggestion){
var map__26370 = p__26366;
var map__26370__$1 = ((((!((map__26370 == null)))?((((map__26370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26370):map__26370);
var state = map__26370__$1;
var suggestion_to_string = cljs.core.get.call(null,map__26370__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__26372 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__26372,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__26372;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__26373,index){
var map__26377 = p__26373;
var map__26377__$1 = ((((!((map__26377 == null)))?((((map__26377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26377):map__26377);
var state = map__26377__$1;
var suggestions = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__26379 = state;
var G__26379__$1 = cljs.core.assoc.call(null,G__26379,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__26379__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__26379__$1,suggestion):G__26379__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__26379__$2,suggestion);
} else {
return G__26379__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__26380,index){
var map__26383 = p__26380;
var map__26383__$1 = ((((!((map__26383 == null)))?((((map__26383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26383):map__26383);
var state = map__26383__$1;
var suggestions = cljs.core.get.call(null,map__26383__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__26385){
var map__26389 = p__26385;
var map__26389__$1 = ((((!((map__26389 == null)))?((((map__26389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26389):map__26389);
var state = map__26389__$1;
var suggestion_active_index = cljs.core.get.call(null,map__26389__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26391 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__26391,suggestion_active_index);
} else {
return G__26391;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__26392){
var map__26396 = p__26392;
var map__26396__$1 = ((((!((map__26396 == null)))?((((map__26396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26396):map__26396);
var state = map__26396__$1;
var suggestions = cljs.core.get.call(null,map__26396__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26396__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26398 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26398,re_com.typeahead.wrap.call(null,((function (){var or__18843__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26398;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__26399){
var map__26403 = p__26399;
var map__26403__$1 = ((((!((map__26403 == null)))?((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var state = map__26403__$1;
var suggestions = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26405 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26405,re_com.typeahead.wrap.call(null,((function (){var or__18843__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26405;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__26407 = state;
var G__26407__$1 = re_com.typeahead.clear_suggestions.call(null,G__26407)
;
var G__26407__$2 = cljs.core.assoc.call(null,G__26407__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26407__$2,null);
} else {
return G__26407__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__26408){
var map__26412 = p__26408;
var map__26412__$1 = ((((!((map__26412 == null)))?((((map__26412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26412):map__26412);
var state = map__26412__$1;
var input_text = cljs.core.get.call(null,map__26412__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__26412__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__26414 = state;
if(cljs.core.truth_((function (){var and__18831__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__18831__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__18831__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__26414,input_text);
} else {
return G__26414;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__26415_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__26415_SHARP_);
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
var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_26465){
var state_val_26466 = (state_26465[(1)]);
if((state_val_26466 === (1))){
var state_26465__$1 = state_26465;
var statearr_26467_26482 = state_26465__$1;
(statearr_26467_26482[(2)] = null);

(statearr_26467_26482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (2))){
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26465__$1,(4),c_search);
} else {
if((state_val_26466 === (3))){
var inst_26463 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26465__$1,inst_26463);
} else {
if((state_val_26466 === (4))){
var inst_26451 = (state_26465[(7)]);
var inst_26451__$1 = (state_26465[(2)]);
var inst_26452 = cljs.core.deref.call(null,state_atom);
var inst_26453 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_26452);
var inst_26454 = cljs.core._EQ_.call(null,"",inst_26451__$1);
var state_26465__$1 = (function (){var statearr_26468 = state_26465;
(statearr_26468[(8)] = inst_26453);

(statearr_26468[(7)] = inst_26451__$1);

return statearr_26468;
})();
if(inst_26454){
var statearr_26469_26483 = state_26465__$1;
(statearr_26469_26483[(1)] = (5));

} else {
var statearr_26470_26484 = state_26465__$1;
(statearr_26470_26484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (5))){
var inst_26456 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_26465__$1 = state_26465;
var statearr_26471_26485 = state_26465__$1;
(statearr_26471_26485[(2)] = inst_26456);

(statearr_26471_26485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (6))){
var inst_26453 = (state_26465[(8)]);
var inst_26451 = (state_26465[(7)]);
var inst_26458 = re_com.typeahead.search_data_source_BANG_.call(null,inst_26453,state_atom,inst_26451);
var state_26465__$1 = state_26465;
var statearr_26472_26486 = state_26465__$1;
(statearr_26472_26486[(2)] = inst_26458);

(statearr_26472_26486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (7))){
var inst_26460 = (state_26465[(2)]);
var state_26465__$1 = (function (){var statearr_26473 = state_26465;
(statearr_26473[(9)] = inst_26460);

return statearr_26473;
})();
var statearr_26474_26487 = state_26465__$1;
(statearr_26474_26487[(2)] = null);

(statearr_26474_26487[(1)] = (2));


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
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____0 = (function (){
var statearr_26478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26478[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__);

(statearr_26478[(1)] = (1));

return statearr_26478;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____1 = (function (state_26465){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_26465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e26479){if((e26479 instanceof Object)){
var ex__23388__auto__ = e26479;
var statearr_26480_26488 = state_26465;
(statearr_26480_26488[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26489 = state_26465;
state_26465 = G__26489;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__ = function(state_26465){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____1.call(this,state_26465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_26481 = f__23497__auto__.call(null);
(statearr_26481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_26481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__26494 = cljs.core.deref.call(null,state_atom);
var map__26494__$1 = ((((!((map__26494 == null)))?((((map__26494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26494):map__26494);
var state = map__26494__$1;
var input_text = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__26494,map__26494__$1,state,input_text,c_input){
return (function (p1__26490_SHARP_){
var G__26496 = p1__26490_SHARP_;
var G__26496__$1 = cljs.core.assoc.call(null,G__26496,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26496__$1,new_text);
} else {
return G__26496__$1;
}
});})(map__26494,map__26494__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__26500 = cljs.core._EQ_;
var expr__26501 = event.which;
if(cljs.core.truth_(pred__26500.call(null,goog.events.KeyCodes.UP,expr__26501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__26500.call(null,goog.events.KeyCodes.DOWN,expr__26501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__26500.call(null,goog.events.KeyCodes.ENTER,expr__26501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__26500.call(null,goog.events.KeyCodes.ESC,expr__26501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__26500.call(null,goog.events.KeyCodes.TAB,expr__26501))){
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
var args__19919__auto__ = [];
var len__19912__auto___26523 = arguments.length;
var i__19913__auto___26524 = (0);
while(true){
if((i__19913__auto___26524 < len__19912__auto___26523)){
args__19919__auto__.push((arguments[i__19913__auto___26524]));

var G__26525 = (i__19913__auto___26524 + (1));
i__19913__auto___26524 = G__26525;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__26505){
var map__26506 = p__26505;
var map__26506__$1 = ((((!((map__26506 == null)))?((((map__26506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26506):map__26506);
var args = map__26506__$1;
var data_source = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__26508 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__26508__$1 = ((((!((map__26508 == null)))?((((map__26508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26508):map__26508);
var state = map__26508__$1;
var c_search = cljs.core.get.call(null,map__26508__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__26508__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__26526__delegate = function (p__26510){
var map__26511 = p__26510;
var map__26511__$1 = ((((!((map__26511 == null)))?((((map__26511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26511):map__26511);
var args__$1 = map__26511__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__26513 = cljs.core.deref.call(null,state_atom);
var map__26513__$1 = ((((!((map__26513 == null)))?((((map__26513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26513):map__26513);
var state__$1 = map__26513__$1;
var suggestions = cljs.core.get.call(null,map__26513__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__26513__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__26513__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__26513__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__18843__auto__ = width;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__18843__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__19623__auto__ = ((function (map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__26515(s__26516){
return (new cljs.core.LazySeq(null,((function (map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__26516__$1 = s__26516;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26516__$1);
if(temp__4657__auto__){
var s__26516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26516__$2)){
var c__19621__auto__ = cljs.core.chunk_first.call(null,s__26516__$2);
var size__19622__auto__ = cljs.core.count.call(null,c__19621__auto__);
var b__26518 = cljs.core.chunk_buffer.call(null,size__19622__auto__);
if((function (){var i__26517 = (0);
while(true){
if((i__26517 < size__19622__auto__)){
var vec__26521 = cljs.core._nth.call(null,c__19621__auto__,i__26517);
var i = cljs.core.nth.call(null,vec__26521,(0),null);
var s = cljs.core.nth.call(null,vec__26521,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__26518,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__26517,selected_QMARK_,vec__26521,i,s,c__19621__auto__,size__19622__auto__,b__26518,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__26517,selected_QMARK_,vec__26521,i,s,c__19621__auto__,size__19622__auto__,b__26518,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__26517,selected_QMARK_,vec__26521,i,s,c__19621__auto__,size__19622__auto__,b__26518,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__26503_SHARP_){
p1__26503_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__26517,selected_QMARK_,vec__26521,i,s,c__19621__auto__,size__19622__auto__,b__26518,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__26527 = (i__26517 + (1));
i__26517 = G__26527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26518),re_com$typeahead$iter__26515.call(null,cljs.core.chunk_rest.call(null,s__26516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26518),null);
}
} else {
var vec__26522 = cljs.core.first.call(null,s__26516__$2);
var i = cljs.core.nth.call(null,vec__26522,(0),null);
var s = cljs.core.nth.call(null,vec__26522,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__26522,i,s,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__26522,i,s,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__26522,i,s,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__26503_SHARP_){
p1__26503_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__26522,i,s,s__26516__$2,temp__4657__auto__,map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__26515.call(null,cljs.core.rest.call(null,s__26516__$2)));
}
} else {
return null;
}
break;
}
});})(map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__26513,map__26513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26511,map__26511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__19623__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__26526 = function (var_args){
var p__26510 = null;
if (arguments.length > 0) {
var G__26528__i = 0, G__26528__a = new Array(arguments.length -  0);
while (G__26528__i < G__26528__a.length) {G__26528__a[G__26528__i] = arguments[G__26528__i + 0]; ++G__26528__i;}
  p__26510 = new cljs.core.IndexedSeq(G__26528__a,0);
} 
return G__26526__delegate.call(this,p__26510);};
G__26526.cljs$lang$maxFixedArity = 0;
G__26526.cljs$lang$applyTo = (function (arglist__26529){
var p__26510 = cljs.core.seq(arglist__26529);
return G__26526__delegate(p__26510);
});
G__26526.cljs$core$IFn$_invoke$arity$variadic = G__26526__delegate;
return G__26526;
})()
;
;})(map__26508,map__26508__$1,state,c_search,c_input,state_atom,input_text_model,map__26506,map__26506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq26504){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26504));
});
/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__23496__auto___26688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___26688,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___26688,out){
return (function (state_26655){
var state_val_26656 = (state_26655[(1)]);
if((state_val_26656 === (7))){
var inst_26614 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26657_26689 = state_26655__$1;
(statearr_26657_26689[(2)] = inst_26614);

(statearr_26657_26689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (1))){
var inst_26609 = null;
var state_26655__$1 = (function (){var statearr_26658 = state_26655;
(statearr_26658[(7)] = inst_26609);

return statearr_26658;
})();
var statearr_26659_26690 = state_26655__$1;
(statearr_26659_26690[(2)] = null);

(statearr_26659_26690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (4))){
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26655__$1,(7),in$);
} else {
if((state_val_26656 === (15))){
var inst_26640 = (state_26655[(2)]);
var state_26655__$1 = (function (){var statearr_26660 = state_26655;
(statearr_26660[(8)] = inst_26640);

return statearr_26660;
})();
var statearr_26661_26691 = state_26655__$1;
(statearr_26661_26691[(2)] = null);

(statearr_26661_26691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (13))){
var inst_26630 = (state_26655[(9)]);
var inst_26642 = cljs.core._EQ_.call(null,inst_26630,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_26655__$1 = state_26655;
if(inst_26642){
var statearr_26662_26692 = state_26655__$1;
(statearr_26662_26692[(1)] = (16));

} else {
var statearr_26663_26693 = state_26655__$1;
(statearr_26663_26693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (6))){
var inst_26618 = (state_26655[(10)]);
var inst_26617 = (state_26655[(2)]);
var inst_26618__$1 = cljs.core.async.timeout.call(null,ms);
var inst_26624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26625 = [in$,inst_26618__$1];
var inst_26626 = (new cljs.core.PersistentVector(null,2,(5),inst_26624,inst_26625,null));
var state_26655__$1 = (function (){var statearr_26664 = state_26655;
(statearr_26664[(10)] = inst_26618__$1);

(statearr_26664[(11)] = inst_26617);

return statearr_26664;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26655__$1,(8),inst_26626);
} else {
if((state_val_26656 === (17))){
var state_26655__$1 = state_26655;
var statearr_26665_26694 = state_26655__$1;
(statearr_26665_26694[(2)] = null);

(statearr_26665_26694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (3))){
var inst_26653 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26655__$1,inst_26653);
} else {
if((state_val_26656 === (12))){
var inst_26617 = (state_26655[(11)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26655__$1,(15),out,inst_26617);
} else {
if((state_val_26656 === (2))){
var inst_26609 = (state_26655[(7)]);
var inst_26611 = (inst_26609 == null);
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26611)){
var statearr_26666_26695 = state_26655__$1;
(statearr_26666_26695[(1)] = (4));

} else {
var statearr_26667_26696 = state_26655__$1;
(statearr_26667_26696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (11))){
var inst_26650 = (state_26655[(2)]);
var inst_26609 = inst_26650;
var state_26655__$1 = (function (){var statearr_26668 = state_26655;
(statearr_26668[(7)] = inst_26609);

return statearr_26668;
})();
var statearr_26669_26697 = state_26655__$1;
(statearr_26669_26697[(2)] = null);

(statearr_26669_26697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (9))){
var inst_26628 = (state_26655[(12)]);
var inst_26634 = cljs.core.nth.call(null,inst_26628,(0),null);
var inst_26635 = cljs.core.nth.call(null,inst_26628,(1),null);
var state_26655__$1 = (function (){var statearr_26670 = state_26655;
(statearr_26670[(13)] = inst_26635);

return statearr_26670;
})();
var statearr_26671_26698 = state_26655__$1;
(statearr_26671_26698[(2)] = inst_26634);

(statearr_26671_26698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (5))){
var inst_26609 = (state_26655[(7)]);
var state_26655__$1 = state_26655;
var statearr_26672_26699 = state_26655__$1;
(statearr_26672_26699[(2)] = inst_26609);

(statearr_26672_26699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (14))){
var inst_26648 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26673_26700 = state_26655__$1;
(statearr_26673_26700[(2)] = inst_26648);

(statearr_26673_26700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (16))){
var inst_26629 = (state_26655[(14)]);
var state_26655__$1 = state_26655;
var statearr_26674_26701 = state_26655__$1;
(statearr_26674_26701[(2)] = inst_26629);

(statearr_26674_26701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (10))){
var inst_26630 = (state_26655[(9)]);
var inst_26618 = (state_26655[(10)]);
var inst_26637 = cljs.core._EQ_.call(null,inst_26630,inst_26618);
var state_26655__$1 = state_26655;
if(inst_26637){
var statearr_26675_26702 = state_26655__$1;
(statearr_26675_26702[(1)] = (12));

} else {
var statearr_26676_26703 = state_26655__$1;
(statearr_26676_26703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (18))){
var inst_26646 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26677_26704 = state_26655__$1;
(statearr_26677_26704[(2)] = inst_26646);

(statearr_26677_26704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (8))){
var inst_26628 = (state_26655[(12)]);
var inst_26630 = (state_26655[(9)]);
var inst_26628__$1 = (state_26655[(2)]);
var inst_26629 = cljs.core.nth.call(null,inst_26628__$1,(0),null);
var inst_26630__$1 = cljs.core.nth.call(null,inst_26628__$1,(1),null);
var inst_26631 = cljs.core._EQ_.call(null,inst_26630__$1,in$);
var state_26655__$1 = (function (){var statearr_26678 = state_26655;
(statearr_26678[(12)] = inst_26628__$1);

(statearr_26678[(9)] = inst_26630__$1);

(statearr_26678[(14)] = inst_26629);

return statearr_26678;
})();
if(inst_26631){
var statearr_26679_26705 = state_26655__$1;
(statearr_26679_26705[(1)] = (9));

} else {
var statearr_26680_26706 = state_26655__$1;
(statearr_26680_26706[(1)] = (10));

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
});})(c__23496__auto___26688,out))
;
return ((function (switch__23384__auto__,c__23496__auto___26688,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__23385__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__23385__auto____0 = (function (){
var statearr_26684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26684[(0)] = re_com$typeahead$debounce_$_state_machine__23385__auto__);

(statearr_26684[(1)] = (1));

return statearr_26684;
});
var re_com$typeahead$debounce_$_state_machine__23385__auto____1 = (function (state_26655){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_26655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object)){
var ex__23388__auto__ = e26685;
var statearr_26686_26707 = state_26655;
(statearr_26686_26707[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26708 = state_26655;
state_26655 = G__26708;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__23385__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__23385__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__23385__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__23385__auto____0;
re_com$typeahead$debounce_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__23385__auto____1;
return re_com$typeahead$debounce_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___26688,out))
})();
var state__23498__auto__ = (function (){var statearr_26687 = f__23497__auto__.call(null);
(statearr_26687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___26688);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___26688,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1478297181774