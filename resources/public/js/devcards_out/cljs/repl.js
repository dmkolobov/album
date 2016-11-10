// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35432_35446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35433_35447 = null;
var count__35434_35448 = (0);
var i__35435_35449 = (0);
while(true){
if((i__35435_35449 < count__35434_35448)){
var f_35450 = cljs.core._nth.call(null,chunk__35433_35447,i__35435_35449);
cljs.core.println.call(null,"  ",f_35450);

var G__35451 = seq__35432_35446;
var G__35452 = chunk__35433_35447;
var G__35453 = count__35434_35448;
var G__35454 = (i__35435_35449 + (1));
seq__35432_35446 = G__35451;
chunk__35433_35447 = G__35452;
count__35434_35448 = G__35453;
i__35435_35449 = G__35454;
continue;
} else {
var temp__4657__auto___35455 = cljs.core.seq.call(null,seq__35432_35446);
if(temp__4657__auto___35455){
var seq__35432_35456__$1 = temp__4657__auto___35455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35432_35456__$1)){
var c__19654__auto___35457 = cljs.core.chunk_first.call(null,seq__35432_35456__$1);
var G__35458 = cljs.core.chunk_rest.call(null,seq__35432_35456__$1);
var G__35459 = c__19654__auto___35457;
var G__35460 = cljs.core.count.call(null,c__19654__auto___35457);
var G__35461 = (0);
seq__35432_35446 = G__35458;
chunk__35433_35447 = G__35459;
count__35434_35448 = G__35460;
i__35435_35449 = G__35461;
continue;
} else {
var f_35462 = cljs.core.first.call(null,seq__35432_35456__$1);
cljs.core.println.call(null,"  ",f_35462);

var G__35463 = cljs.core.next.call(null,seq__35432_35456__$1);
var G__35464 = null;
var G__35465 = (0);
var G__35466 = (0);
seq__35432_35446 = G__35463;
chunk__35433_35447 = G__35464;
count__35434_35448 = G__35465;
i__35435_35449 = G__35466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18843__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35467)))?cljs.core.second.call(null,arglists_35467):arglists_35467));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35437 = null;
var count__35438 = (0);
var i__35439 = (0);
while(true){
if((i__35439 < count__35438)){
var vec__35440 = cljs.core._nth.call(null,chunk__35437,i__35439);
var name = cljs.core.nth.call(null,vec__35440,(0),null);
var map__35441 = cljs.core.nth.call(null,vec__35440,(1),null);
var map__35441__$1 = ((((!((map__35441 == null)))?((((map__35441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35441):map__35441);
var doc = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35468 = seq__35436;
var G__35469 = chunk__35437;
var G__35470 = count__35438;
var G__35471 = (i__35439 + (1));
seq__35436 = G__35468;
chunk__35437 = G__35469;
count__35438 = G__35470;
i__35439 = G__35471;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35436);
if(temp__4657__auto__){
var seq__35436__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35436__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__35436__$1);
var G__35472 = cljs.core.chunk_rest.call(null,seq__35436__$1);
var G__35473 = c__19654__auto__;
var G__35474 = cljs.core.count.call(null,c__19654__auto__);
var G__35475 = (0);
seq__35436 = G__35472;
chunk__35437 = G__35473;
count__35438 = G__35474;
i__35439 = G__35475;
continue;
} else {
var vec__35443 = cljs.core.first.call(null,seq__35436__$1);
var name = cljs.core.nth.call(null,vec__35443,(0),null);
var map__35444 = cljs.core.nth.call(null,vec__35443,(1),null);
var map__35444__$1 = ((((!((map__35444 == null)))?((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35444):map__35444);
var doc = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35476 = cljs.core.next.call(null,seq__35436__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__35436 = G__35476;
chunk__35437 = G__35477;
count__35438 = G__35478;
i__35439 = G__35479;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1478297203439