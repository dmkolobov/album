// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.cards');
goog.require('cljs.core');
goog.require('ui.views.common.structure');
goog.require('ui.views.common.data');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('reagent.ratom');
goog.require('cljs_time.extend');
goog.require('ui.views.common.images');
goog.require('ui.views.common.toolbar');
goog.require('cljs_time.core');
goog.require('ui.views.common.drawer');
if(typeof ui.cards.test_images !== 'undefined'){
} else {
ui.cards.test_images = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/fire_pit.jpg",((1024) / (683))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/good_deal.jpg",((826) / (826))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/see_saw.jpg",((1024) / (1536))], null)], null));
}
ui.cards.test_images_small = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/jackhammer.jpg",((200) / (200))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/death_truck.jpg",((200) / (150))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/fix/fire_stick.jpg",((133) / (200))], null)], null);
ui.cards.framed_image = (function ui$cards$framed_image(path,aspect,frame_size){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"photo-frame shadow-1",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(frame_size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(frame_size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.image,path,aspect], null)], null);
});
ui.cards.frames = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(250),(500)], null);
ui.cards.framed_gallery = (function ui$cards$framed_gallery(images){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"16px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,(function (p__39347){
var vec__39348 = p__39347;
var path = cljs.core.nth.call(null,vec__39348,(0),null);
var aspect = cljs.core.nth.call(null,vec__39348,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"16px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,((function (vec__39348,path,aspect){
return (function (p1__39344_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.framed_image,path,aspect], null),p1__39344_SHARP_);
});})(vec__39348,path,aspect))
,ui.cards.frames)], null);
}),images)], null);
});
ui.cards.app_gallery = (function ui$cards$app_gallery(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Oversized",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.framed_gallery,cljs.core.deref.call(null,ui.cards.test_images)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Undersized",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.framed_gallery,ui.cards.test_images_small], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"responsive-images","responsive-images",-519551079)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"responsive-images",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_gallery], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
ui.cards.test_image = (function ui$cards$test_image(size){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.images.image,"img/fix/fire_pit.jpg",((1024) / (683))], null)], null);
});
if(typeof ui.cards.actions !== 'undefined'){
} else {
ui.cards.actions = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"slideshow","slideshow",286250871),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-slideshow",new cljs.core.Keyword(null,"label","label",1718410804),"book"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cake","cake",633028020),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-cake",new cljs.core.Keyword(null,"label","label",1718410804),"cake"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cocktail","cocktail",1133769039),new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-cocktail",new cljs.core.Keyword(null,"label","label",1718410804),"cocktail"], null)], null));
}
if(typeof ui.cards.page_model !== 'undefined'){
} else {
ui.cards.page_model = reagent.core.atom.call(null,new cljs.core.Keyword(null,"book","book",-918152214));
}
if(typeof ui.cards.menu_QMARK_ !== 'undefined'){
} else {
ui.cards.menu_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof ui.cards.slideshow_QMARK_ !== 'undefined'){
} else {
ui.cards.slideshow_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof ui.cards.info_QMARK_ !== 'undefined'){
} else {
ui.cards.info_QMARK_ = reagent.core.atom.call(null,false);
}
ui.cards.toggle_menu_BANG_ = (function ui$cards$toggle_menu_BANG_(){
return cljs.core.swap_BANG_.call(null,ui.cards.menu_QMARK_,cljs.core.not);
});
ui.cards.toggle_slideshow_BANG_ = (function ui$cards$toggle_slideshow_BANG_(){
return cljs.core.swap_BANG_.call(null,ui.cards.slideshow_QMARK_,cljs.core.not);
});
ui.cards.toggle_info_BANG_ = (function ui$cards$toggle_info_BANG_(){
return cljs.core.swap_BANG_.call(null,ui.cards.info_QMARK_,cljs.core.not);
});
ui.cards.navigate_BANG_ = (function ui$cards$navigate_BANG_(p__39349){
var map__39352 = p__39349;
var map__39352__$1 = ((((!((map__39352 == null)))?((((map__39352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39352):map__39352);
var id = cljs.core.get.call(null,map__39352__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.reset_BANG_.call(null,ui.cards.page_model,id);
});
ui.cards.app_bar = (function ui$cards$app_bar(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.toolbar,new cljs.core.Keyword(null,"nav-icon","nav-icon",-1454298860),"zmdi-menu",new cljs.core.Keyword(null,"nav-tooltip","nav-tooltip",1212937734),"Main menu",new cljs.core.Keyword(null,"title","title",636505583),"Hello, World",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"slideshow","slideshow",286250871),new cljs.core.Keyword(null,"label","label",1718410804),"slideshow",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-slideshow"], null)], null),new cljs.core.Keyword(null,"on-nav","on-nav",1358020715),ui.cards.toggle_menu_BANG_,new cljs.core.Keyword(null,"on-action","on-action",-894612848),(function (p1__39354_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39354_SHARP_),new cljs.core.Keyword(null,"slideshow","slideshow",286250871))){
return ui.cards.toggle_slideshow_BANG_.call(null);
} else {
return null;
}
})], null);
});
ui.cards.app_nav_bar = (function ui$cards$app_nav_bar(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.navbar,new cljs.core.Keyword(null,"actions","actions",-812656882),ui.cards.actions,new cljs.core.Keyword(null,"model","model",331153215),ui.cards.page_model,new cljs.core.Keyword(null,"on-change","on-change",-732046149),ui.cards.navigate_BANG_], null);
});
ui.cards.app_nav_menu = (function ui$cards$app_nav_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.navmenu,new cljs.core.Keyword(null,"actions","actions",-812656882),ui.cards.actions,new cljs.core.Keyword(null,"model","model",331153215),ui.cards.page_model,new cljs.core.Keyword(null,"on-change","on-change",-732046149),ui.cards.navigate_BANG_], null)], null);
});
ui.cards.app_content = (function ui$cards$app_content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,cljs.core.deref.call(null,ui.cards.slideshow_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_nav_bar], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.test_image,(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.slideshow_QMARK_))?(600):(200))], null)], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_bar], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"nav-bar","nav-bar",190676456)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nav-bar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_nav_bar], null)], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nav-menu",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_nav_menu], null)], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
ui.cards.date_time__GT_model = (function ui$cards$date_time__GT_model(date_time){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),date_time.getFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(date_time.getMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),date_time.getDate(),new cljs.core.Keyword(null,"hour","hour",-555989214),date_time.getHours(),new cljs.core.Keyword(null,"minute","minute",-642875969),date_time.getMinutes()], null);
});
ui.cards.model__GT_date_time = (function ui$cards$model__GT_date_time(p__39355){
var map__39358 = p__39355;
var map__39358__$1 = ((((!((map__39358 == null)))?((((map__39358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39358):map__39358);
var year = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute));
});
ui.cards.my_date = reagent.core.atom.call(null,(new goog.date.DateTime()));
ui.cards.set_date_BANG_ = (function ui$cards$set_date_BANG_(p1__39360_SHARP_){
return cljs.core.reset_BANG_.call(null,ui.cards.my_date,ui.cards.model__GT_date_time.call(null,p1__39360_SHARP_));
});
ui.cards.date = (function ui$cards$date(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.data.date_field,new cljs.core.Keyword(null,"class","class",-2030961996),"white",new cljs.core.Keyword(null,"model","model",331153215),reagent.ratom.make_reaction.call(null,(function (){
cljs.core.println.call(null,"creating date state");

return ui.cards.date_time__GT_model.call(null,cljs.core.deref.call(null,ui.cards.my_date));
})),new cljs.core.Keyword(null,"on-change","on-change",-732046149),ui.cards.set_date_BANG_], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"date-form","date-form",332480335)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"date-form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
ui.cards.slideshow_bar = (function ui$cards$slideshow_bar(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.toolbar.toolbar,new cljs.core.Keyword(null,"class","class",-2030961996),"translucent",new cljs.core.Keyword(null,"nav-icon","nav-icon",-1454298860),"zmdi-close",new cljs.core.Keyword(null,"nav-tooltip","nav-tooltip",1212937734),"Photos",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"label","label",1718410804),"Info",new cljs.core.Keyword(null,"icon","icon",1679606541),"zmdi-info"], null)], null),new cljs.core.Keyword(null,"on-nav","on-nav",1358020715),ui.cards.toggle_slideshow_BANG_,new cljs.core.Keyword(null,"on-action","on-action",-894612848),(function (p1__39361_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39361_SHARP_),new cljs.core.Keyword(null,"info","info",-317069002))){
return ui.cards.toggle_info_BANG_.call(null);
} else {
return null;
}
})], null);
});
ui.cards.main_structure = (function ui$cards$main_structure(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.structure.main,new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908),(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.slideshow_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.slideshow_bar], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_bar], null)),new cljs.core.Keyword(null,"side-nav","side-nav",1449518636),(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.menu_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_nav_menu], null):null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.app_content], null),new cljs.core.Keyword(null,"right-nav","right-nav",-1158261400),(cljs.core.truth_((function (){var and__18861__auto__ = cljs.core.deref.call(null,ui.cards.slideshow_QMARK_);
if(cljs.core.truth_(and__18861__auto__)){
return cljs.core.deref.call(null,ui.cards.info_QMARK_);
} else {
return and__18861__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null)], null)], null):null),new cljs.core.Keyword(null,"attr","attr",-604132353),(cljs.core.truth_(cljs.core.deref.call(null,ui.cards.menu_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ui.cards.toggle_menu_BANG_], null):null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"layout",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.main_structure], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui.cards","ui.cards",210389004),new cljs.core.Keyword(null,"drawer","drawer",-1346127858)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"drawer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-test","div.drawer-test",1808961637),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"700px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.views.common.drawer.drawer,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"k1"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"k2"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"k3"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"k4"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.cards.date], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"k5"], null))], null)], null)], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=cards.js.map?rel=1478925812186