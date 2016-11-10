// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.views.fullscreen');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('ui.views.common.toolbar');
goog.require('ui.views.common.sidebar');
ui.views.fullscreen.return_button = (function ui$views$fullscreen$return_button(on_close){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-arrow-left",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Photos",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null);
});
ui.views.fullscreen.fullscreen_view = (function ui$views$fullscreen$fullscreen_view(var_args){
var args__19919__auto__ = [];
var len__19912__auto___23031 = arguments.length;
var i__19913__auto___23032 = (0);
while(true){
if((i__19913__auto___23032 < len__19912__auto___23031)){
args__19919__auto__.push((arguments[i__19913__auto___23032]));

var G__23033 = (i__19913__auto___23032 + (1));
i__19913__auto___23032 = G__23033;
continue;
} else {
}
break;
}

var argseq__19920__auto__ = ((((0) < args__19919__auto__.length))?(new cljs.core.IndexedSeq(args__19919__auto__.slice((0)),(0),null)):null);
return ui.views.fullscreen.fullscreen_view.cljs$core$IFn$_invoke$arity$variadic(argseq__19920__auto__);
});

ui.views.fullscreen.fullscreen_view.cljs$core$IFn$_invoke$arity$variadic = (function (p__23028){
var map__23029 = p__23028;
var map__23029__$1 = ((((!((map__23029 == null)))?((((map__23029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23029):map__23029);
var content = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"content","content",15833224));
var actions = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var sidebar = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"sidebar","sidebar",35784458));
var on_close = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.sidebar.sidebar_split,new cljs.core.Keyword(null,"class","class",-2030961996),"fullscreen",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.base_toolbar,new cljs.core.Keyword(null,"class","class",-2030961996),"fullscreen-toolbar",new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.fullscreen.return_button,on_close], null),new cljs.core.Keyword(null,"right-content","right-content",-2003362022),actions], null),content], null)], null),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),sidebar], null);
});

ui.views.fullscreen.fullscreen_view.cljs$lang$maxFixedArity = (0);

ui.views.fullscreen.fullscreen_view.cljs$lang$applyTo = (function (seq23027){
return ui.views.fullscreen.fullscreen_view.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23027));
});

//# sourceMappingURL=fullscreen.js.map?rel=1478388950913