// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.cards');
goog.require('cljs.core');
goog.require('ui.views.common.toolbar');
goog.require('ui.views.common.structure');
goog.require('reagent.core');
goog.require('re_com.core');
if(typeof ui.cards.actions !== 'undefined'){
} else {
ui.cards.actions = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"book","book",-918152214),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-book",new cljs.core.Keyword(null,"label","label",1718410804),"book"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cake","cake",633028020),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-cake",new cljs.core.Keyword(null,"label","label",1718410804),"cake"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cocktail","cocktail",1133769039),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-cocktail",new cljs.core.Keyword(null,"label","label",1718410804),"cocktail"], null)], null));
}
if(typeof ui.cards.model !== 'undefined'){
} else {
ui.cards.model = reagent.core.atom.call(null,new cljs.core.Keyword(null,"book","book",-918152214));
}
if(typeof ui.cards.menu_QMARK_ !== 'undefined'){
} else {
ui.cards.menu_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof ui.cards.sidebar_QMARK_ !== 'undefined'){
} else {
ui.cards.sidebar_QMARK_ = reagent.core.atom.call(null,false);
}
ui.cards.toggle_menu_BANG_ = (function ui$cards$toggle_menu_BANG_(){
return cljs.core.swap_BANG_.call(null,ui.cards.menu_QMARK_,cljs.core.not);
});
ui.cards.toggle_sidebar_BANG_ = (function ui$cards$toggle_sidebar_BANG_(){
return cljs.core.swap_BANG_.call(null,ui.cards.sidebar_QMARK_,cljs.core.not);
});
ui.cards.navigate_BANG_ = (function ui$cards$navigate_BANG_(p__40678){
var map__40681 = p__40678;
var map__40681__$1 = ((((!((map__40681 == null)))?((((map__40681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40681):map__40681);
var id = cljs.core.get.call(null,map__40681__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.reset_BANG_.call(null,ui.cards.model,id);
});
ui.cards.app_bar = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.toolbar,new cljs.core.Keyword(null,"nav-icon","nav-icon",-1454298860),"zmdi-menu",new cljs.core.Keyword(null,"nav-tooltip","nav-tooltip",1212937734),"Main menu",new cljs.core.Keyword(null,"title","title",636505583),"Hello, World",new cljs.core.Keyword(null,"actions","actions",-812656882),ui.cards.actions,new cljs.core.Keyword(null,"on-nav","on-nav",1358020715),ui.cards.toggle_menu_BANG_,new cljs.core.Keyword(null,"on-action","on-action",-894612848),ui.cards.toggle_sidebar_BANG_], null);
ui.cards.app_nav_bar = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.navbar,new cljs.core.Keyword(null,"actions","actions",-812656882),ui.cards.actions,new cljs.core.Keyword(null,"model","model",331153215),ui.cards.model,new cljs.core.Keyword(null,"on-change","on-change",-732046149),ui.cards.navigate_BANG_], null);
ui.cards.app_nav_menu = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.navmenu,new cljs.core.Keyword(null,"actions","actions",-812656882),ui.cards.actions,new cljs.core.Keyword(null,"model","model",331153215),ui.cards.model,new cljs.core.Keyword(null,"on-change","on-change",-732046149),ui.cards.navigate_BANG_], null)], null);
ui.cards.app_content = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_nav_bar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello, world"], null)], null)], null)], null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,ui.cards.app_bar),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"nav-bar","nav-bar",190676456)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nav-bar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),ui.cards.app_nav_bar], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nav-menu",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),ui.cards.app_nav_menu], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
ui.cards.main_structure = (function ui$cards$main_structure(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.main,new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908),ui.cards.app_bar,new cljs.core.Keyword(null,"side-nav","side-nav",1449518636),(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.menu_QMARK_))?ui.cards.app_nav_menu:null),new cljs.core.Keyword(null,"content","content",15833224),ui.cards.app_content,new cljs.core.Keyword(null,"right-nav","right-nav",-1158261400),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),"foobar"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.menu_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.cards.toggle_menu_BANG_], null):null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"layout",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.main_structure], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=cards.js.map?rel=1478383700197