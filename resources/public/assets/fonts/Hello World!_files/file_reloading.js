// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18843__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18843__auto__){
return or__18843__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18843__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34207_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34207_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34212 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34213 = null;
var count__34214 = (0);
var i__34215 = (0);
while(true){
if((i__34215 < count__34214)){
var n = cljs.core._nth.call(null,chunk__34213,i__34215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34216 = seq__34212;
var G__34217 = chunk__34213;
var G__34218 = count__34214;
var G__34219 = (i__34215 + (1));
seq__34212 = G__34216;
chunk__34213 = G__34217;
count__34214 = G__34218;
i__34215 = G__34219;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34212);
if(temp__4657__auto__){
var seq__34212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34212__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__34212__$1);
var G__34220 = cljs.core.chunk_rest.call(null,seq__34212__$1);
var G__34221 = c__19654__auto__;
var G__34222 = cljs.core.count.call(null,c__19654__auto__);
var G__34223 = (0);
seq__34212 = G__34220;
chunk__34213 = G__34221;
count__34214 = G__34222;
i__34215 = G__34223;
continue;
} else {
var n = cljs.core.first.call(null,seq__34212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34224 = cljs.core.next.call(null,seq__34212__$1);
var G__34225 = null;
var G__34226 = (0);
var G__34227 = (0);
seq__34212 = G__34224;
chunk__34213 = G__34225;
count__34214 = G__34226;
i__34215 = G__34227;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34266_34273 = cljs.core.seq.call(null,deps);
var chunk__34267_34274 = null;
var count__34268_34275 = (0);
var i__34269_34276 = (0);
while(true){
if((i__34269_34276 < count__34268_34275)){
var dep_34277 = cljs.core._nth.call(null,chunk__34267_34274,i__34269_34276);
topo_sort_helper_STAR_.call(null,dep_34277,(depth + (1)),state);

var G__34278 = seq__34266_34273;
var G__34279 = chunk__34267_34274;
var G__34280 = count__34268_34275;
var G__34281 = (i__34269_34276 + (1));
seq__34266_34273 = G__34278;
chunk__34267_34274 = G__34279;
count__34268_34275 = G__34280;
i__34269_34276 = G__34281;
continue;
} else {
var temp__4657__auto___34282 = cljs.core.seq.call(null,seq__34266_34273);
if(temp__4657__auto___34282){
var seq__34266_34283__$1 = temp__4657__auto___34282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34266_34283__$1)){
var c__19654__auto___34284 = cljs.core.chunk_first.call(null,seq__34266_34283__$1);
var G__34285 = cljs.core.chunk_rest.call(null,seq__34266_34283__$1);
var G__34286 = c__19654__auto___34284;
var G__34287 = cljs.core.count.call(null,c__19654__auto___34284);
var G__34288 = (0);
seq__34266_34273 = G__34285;
chunk__34267_34274 = G__34286;
count__34268_34275 = G__34287;
i__34269_34276 = G__34288;
continue;
} else {
var dep_34289 = cljs.core.first.call(null,seq__34266_34283__$1);
topo_sort_helper_STAR_.call(null,dep_34289,(depth + (1)),state);

var G__34290 = cljs.core.next.call(null,seq__34266_34283__$1);
var G__34291 = null;
var G__34292 = (0);
var G__34293 = (0);
seq__34266_34273 = G__34290;
chunk__34267_34274 = G__34291;
count__34268_34275 = G__34292;
i__34269_34276 = G__34293;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34270){
var vec__34272 = p__34270;
var x = cljs.core.nth.call(null,vec__34272,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34272,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34272,x,xs,get_deps__$1){
return (function (p1__34228_SHARP_){
return clojure.set.difference.call(null,p1__34228_SHARP_,x);
});})(vec__34272,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34306 = cljs.core.seq.call(null,provides);
var chunk__34307 = null;
var count__34308 = (0);
var i__34309 = (0);
while(true){
if((i__34309 < count__34308)){
var prov = cljs.core._nth.call(null,chunk__34307,i__34309);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34310_34318 = cljs.core.seq.call(null,requires);
var chunk__34311_34319 = null;
var count__34312_34320 = (0);
var i__34313_34321 = (0);
while(true){
if((i__34313_34321 < count__34312_34320)){
var req_34322 = cljs.core._nth.call(null,chunk__34311_34319,i__34313_34321);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34322,prov);

var G__34323 = seq__34310_34318;
var G__34324 = chunk__34311_34319;
var G__34325 = count__34312_34320;
var G__34326 = (i__34313_34321 + (1));
seq__34310_34318 = G__34323;
chunk__34311_34319 = G__34324;
count__34312_34320 = G__34325;
i__34313_34321 = G__34326;
continue;
} else {
var temp__4657__auto___34327 = cljs.core.seq.call(null,seq__34310_34318);
if(temp__4657__auto___34327){
var seq__34310_34328__$1 = temp__4657__auto___34327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34310_34328__$1)){
var c__19654__auto___34329 = cljs.core.chunk_first.call(null,seq__34310_34328__$1);
var G__34330 = cljs.core.chunk_rest.call(null,seq__34310_34328__$1);
var G__34331 = c__19654__auto___34329;
var G__34332 = cljs.core.count.call(null,c__19654__auto___34329);
var G__34333 = (0);
seq__34310_34318 = G__34330;
chunk__34311_34319 = G__34331;
count__34312_34320 = G__34332;
i__34313_34321 = G__34333;
continue;
} else {
var req_34334 = cljs.core.first.call(null,seq__34310_34328__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34334,prov);

var G__34335 = cljs.core.next.call(null,seq__34310_34328__$1);
var G__34336 = null;
var G__34337 = (0);
var G__34338 = (0);
seq__34310_34318 = G__34335;
chunk__34311_34319 = G__34336;
count__34312_34320 = G__34337;
i__34313_34321 = G__34338;
continue;
}
} else {
}
}
break;
}

var G__34339 = seq__34306;
var G__34340 = chunk__34307;
var G__34341 = count__34308;
var G__34342 = (i__34309 + (1));
seq__34306 = G__34339;
chunk__34307 = G__34340;
count__34308 = G__34341;
i__34309 = G__34342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34306);
if(temp__4657__auto__){
var seq__34306__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34306__$1)){
var c__19654__auto__ = cljs.core.chunk_first.call(null,seq__34306__$1);
var G__34343 = cljs.core.chunk_rest.call(null,seq__34306__$1);
var G__34344 = c__19654__auto__;
var G__34345 = cljs.core.count.call(null,c__19654__auto__);
var G__34346 = (0);
seq__34306 = G__34343;
chunk__34307 = G__34344;
count__34308 = G__34345;
i__34309 = G__34346;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34306__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34314_34347 = cljs.core.seq.call(null,requires);
var chunk__34315_34348 = null;
var count__34316_34349 = (0);
var i__34317_34350 = (0);
while(true){
if((i__34317_34350 < count__34316_34349)){
var req_34351 = cljs.core._nth.call(null,chunk__34315_34348,i__34317_34350);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34351,prov);

var G__34352 = seq__34314_34347;
var G__34353 = chunk__34315_34348;
var G__34354 = count__34316_34349;
var G__34355 = (i__34317_34350 + (1));
seq__34314_34347 = G__34352;
chunk__34315_34348 = G__34353;
count__34316_34349 = G__34354;
i__34317_34350 = G__34355;
continue;
} else {
var temp__4657__auto___34356__$1 = cljs.core.seq.call(null,seq__34314_34347);
if(temp__4657__auto___34356__$1){
var seq__34314_34357__$1 = temp__4657__auto___34356__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34314_34357__$1)){
var c__19654__auto___34358 = cljs.core.chunk_first.call(null,seq__34314_34357__$1);
var G__34359 = cljs.core.chunk_rest.call(null,seq__34314_34357__$1);
var G__34360 = c__19654__auto___34358;
var G__34361 = cljs.core.count.call(null,c__19654__auto___34358);
var G__34362 = (0);
seq__34314_34347 = G__34359;
chunk__34315_34348 = G__34360;
count__34316_34349 = G__34361;
i__34317_34350 = G__34362;
continue;
} else {
var req_34363 = cljs.core.first.call(null,seq__34314_34357__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34363,prov);

var G__34364 = cljs.core.next.call(null,seq__34314_34357__$1);
var G__34365 = null;
var G__34366 = (0);
var G__34367 = (0);
seq__34314_34347 = G__34364;
chunk__34315_34348 = G__34365;
count__34316_34349 = G__34366;
i__34317_34350 = G__34367;
continue;
}
} else {
}
}
break;
}

var G__34368 = cljs.core.next.call(null,seq__34306__$1);
var G__34369 = null;
var G__34370 = (0);
var G__34371 = (0);
seq__34306 = G__34368;
chunk__34307 = G__34369;
count__34308 = G__34370;
i__34309 = G__34371;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34376_34380 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34377_34381 = null;
var count__34378_34382 = (0);
var i__34379_34383 = (0);
while(true){
if((i__34379_34383 < count__34378_34382)){
var ns_34384 = cljs.core._nth.call(null,chunk__34377_34381,i__34379_34383);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34384);

var G__34385 = seq__34376_34380;
var G__34386 = chunk__34377_34381;
var G__34387 = count__34378_34382;
var G__34388 = (i__34379_34383 + (1));
seq__34376_34380 = G__34385;
chunk__34377_34381 = G__34386;
count__34378_34382 = G__34387;
i__34379_34383 = G__34388;
continue;
} else {
var temp__4657__auto___34389 = cljs.core.seq.call(null,seq__34376_34380);
if(temp__4657__auto___34389){
var seq__34376_34390__$1 = temp__4657__auto___34389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34376_34390__$1)){
var c__19654__auto___34391 = cljs.core.chunk_first.call(null,seq__34376_34390__$1);
var G__34392 = cljs.core.chunk_rest.call(null,seq__34376_34390__$1);
var G__34393 = c__19654__auto___34391;
var G__34394 = cljs.core.count.call(null,c__19654__auto___34391);
var G__34395 = (0);
seq__34376_34380 = G__34392;
chunk__34377_34381 = G__34393;
count__34378_34382 = G__34394;
i__34379_34383 = G__34395;
continue;
} else {
var ns_34396 = cljs.core.first.call(null,seq__34376_34390__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34396);

var G__34397 = cljs.core.next.call(null,seq__34376_34390__$1);
var G__34398 = null;
var G__34399 = (0);
var G__34400 = (0);
seq__34376_34380 = G__34397;
chunk__34377_34381 = G__34398;
count__34378_34382 = G__34399;
i__34379_34383 = G__34400;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18843__auto__ = goog.require__;
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34401__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34402__i = 0, G__34402__a = new Array(arguments.length -  0);
while (G__34402__i < G__34402__a.length) {G__34402__a[G__34402__i] = arguments[G__34402__i + 0]; ++G__34402__i;}
  args = new cljs.core.IndexedSeq(G__34402__a,0);
} 
return G__34401__delegate.call(this,args);};
G__34401.cljs$lang$maxFixedArity = 0;
G__34401.cljs$lang$applyTo = (function (arglist__34403){
var args = cljs.core.seq(arglist__34403);
return G__34401__delegate(args);
});
G__34401.cljs$core$IFn$_invoke$arity$variadic = G__34401__delegate;
return G__34401;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34405 = cljs.core._EQ_;
var expr__34406 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34405.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34406))){
var path_parts = ((function (pred__34405,expr__34406){
return (function (p1__34404_SHARP_){
return clojure.string.split.call(null,p1__34404_SHARP_,/[\/\\]/);
});})(pred__34405,expr__34406))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34405,expr__34406){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34408){if((e34408 instanceof Error)){
var e = e34408;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34408;

}
}})());
});
;})(path_parts,sep,root,pred__34405,expr__34406))
} else {
if(cljs.core.truth_(pred__34405.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34406))){
return ((function (pred__34405,expr__34406){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34405,expr__34406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34405,expr__34406))
);

return deferred.addErrback(((function (deferred,pred__34405,expr__34406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34405,expr__34406))
);
});
;})(pred__34405,expr__34406))
} else {
return ((function (pred__34405,expr__34406){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34405,expr__34406))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34409,callback){
var map__34412 = p__34409;
var map__34412__$1 = ((((!((map__34412 == null)))?((((map__34412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34412):map__34412);
var file_msg = map__34412__$1;
var request_url = cljs.core.get.call(null,map__34412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34412,map__34412__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34412,map__34412__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__){
return (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (7))){
var inst_34432 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34438_34458 = state_34436__$1;
(statearr_34438_34458[(2)] = inst_34432);

(statearr_34438_34458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (1))){
var state_34436__$1 = state_34436;
var statearr_34439_34459 = state_34436__$1;
(statearr_34439_34459[(2)] = null);

(statearr_34439_34459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (4))){
var inst_34416 = (state_34436[(7)]);
var inst_34416__$1 = (state_34436[(2)]);
var state_34436__$1 = (function (){var statearr_34440 = state_34436;
(statearr_34440[(7)] = inst_34416__$1);

return statearr_34440;
})();
if(cljs.core.truth_(inst_34416__$1)){
var statearr_34441_34460 = state_34436__$1;
(statearr_34441_34460[(1)] = (5));

} else {
var statearr_34442_34461 = state_34436__$1;
(statearr_34442_34461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (6))){
var state_34436__$1 = state_34436;
var statearr_34443_34462 = state_34436__$1;
(statearr_34443_34462[(2)] = null);

(statearr_34443_34462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (3))){
var inst_34434 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34436__$1,inst_34434);
} else {
if((state_val_34437 === (2))){
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34436__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34437 === (11))){
var inst_34428 = (state_34436[(2)]);
var state_34436__$1 = (function (){var statearr_34444 = state_34436;
(statearr_34444[(8)] = inst_34428);

return statearr_34444;
})();
var statearr_34445_34463 = state_34436__$1;
(statearr_34445_34463[(2)] = null);

(statearr_34445_34463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (9))){
var inst_34422 = (state_34436[(9)]);
var inst_34420 = (state_34436[(10)]);
var inst_34424 = inst_34422.call(null,inst_34420);
var state_34436__$1 = state_34436;
var statearr_34446_34464 = state_34436__$1;
(statearr_34446_34464[(2)] = inst_34424);

(statearr_34446_34464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (5))){
var inst_34416 = (state_34436[(7)]);
var inst_34418 = figwheel.client.file_reloading.blocking_load.call(null,inst_34416);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34436__$1,(8),inst_34418);
} else {
if((state_val_34437 === (10))){
var inst_34420 = (state_34436[(10)]);
var inst_34426 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34420);
var state_34436__$1 = state_34436;
var statearr_34447_34465 = state_34436__$1;
(statearr_34447_34465[(2)] = inst_34426);

(statearr_34447_34465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (8))){
var inst_34422 = (state_34436[(9)]);
var inst_34416 = (state_34436[(7)]);
var inst_34420 = (state_34436[(2)]);
var inst_34421 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34422__$1 = cljs.core.get.call(null,inst_34421,inst_34416);
var state_34436__$1 = (function (){var statearr_34448 = state_34436;
(statearr_34448[(9)] = inst_34422__$1);

(statearr_34448[(10)] = inst_34420);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34422__$1)){
var statearr_34449_34466 = state_34436__$1;
(statearr_34449_34466[(1)] = (9));

} else {
var statearr_34450_34467 = state_34436__$1;
(statearr_34450_34467[(1)] = (10));

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
});})(c__23496__auto__))
;
return ((function (switch__23384__auto__,c__23496__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23385__auto__ = null;
var figwheel$client$file_reloading$state_machine__23385__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34454[(0)] = figwheel$client$file_reloading$state_machine__23385__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var figwheel$client$file_reloading$state_machine__23385__auto____1 = (function (state_34436){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_34436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__23388__auto__ = e34455;
var statearr_34456_34468 = state_34436;
(statearr_34456_34468[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_34436;
state_34436 = G__34469;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23385__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23385__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23385__auto____0;
figwheel$client$file_reloading$state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23385__auto____1;
return figwheel$client$file_reloading$state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__))
})();
var state__23498__auto__ = (function (){var statearr_34457 = f__23497__auto__.call(null);
(statearr_34457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_34457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__))
);

return c__23496__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34470,callback){
var map__34473 = p__34470;
var map__34473__$1 = ((((!((map__34473 == null)))?((((map__34473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34473):map__34473);
var file_msg = map__34473__$1;
var namespace = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34473,map__34473__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34473,map__34473__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34475){
var map__34478 = p__34475;
var map__34478__$1 = ((((!((map__34478 == null)))?((((map__34478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34478):map__34478);
var file_msg = map__34478__$1;
var namespace = cljs.core.get.call(null,map__34478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18831__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18831__auto__){
var or__18843__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18843__auto__)){
return or__18843__auto__;
} else {
var or__18843__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18843__auto____$1)){
return or__18843__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18831__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34480,callback){
var map__34483 = p__34480;
var map__34483__$1 = ((((!((map__34483 == null)))?((((map__34483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34483):map__34483);
var file_msg = map__34483__$1;
var request_url = cljs.core.get.call(null,map__34483__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23496__auto___34571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto___34571,out){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto___34571,out){
return (function (state_34553){
var state_val_34554 = (state_34553[(1)]);
if((state_val_34554 === (1))){
var inst_34531 = cljs.core.nth.call(null,files,(0),null);
var inst_34532 = cljs.core.nthnext.call(null,files,(1));
var inst_34533 = files;
var state_34553__$1 = (function (){var statearr_34555 = state_34553;
(statearr_34555[(7)] = inst_34533);

(statearr_34555[(8)] = inst_34532);

(statearr_34555[(9)] = inst_34531);

return statearr_34555;
})();
var statearr_34556_34572 = state_34553__$1;
(statearr_34556_34572[(2)] = null);

(statearr_34556_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (2))){
var inst_34536 = (state_34553[(10)]);
var inst_34533 = (state_34553[(7)]);
var inst_34536__$1 = cljs.core.nth.call(null,inst_34533,(0),null);
var inst_34537 = cljs.core.nthnext.call(null,inst_34533,(1));
var inst_34538 = (inst_34536__$1 == null);
var inst_34539 = cljs.core.not.call(null,inst_34538);
var state_34553__$1 = (function (){var statearr_34557 = state_34553;
(statearr_34557[(10)] = inst_34536__$1);

(statearr_34557[(11)] = inst_34537);

return statearr_34557;
})();
if(inst_34539){
var statearr_34558_34573 = state_34553__$1;
(statearr_34558_34573[(1)] = (4));

} else {
var statearr_34559_34574 = state_34553__$1;
(statearr_34559_34574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (3))){
var inst_34551 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34553__$1,inst_34551);
} else {
if((state_val_34554 === (4))){
var inst_34536 = (state_34553[(10)]);
var inst_34541 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34536);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34553__$1,(7),inst_34541);
} else {
if((state_val_34554 === (5))){
var inst_34547 = cljs.core.async.close_BANG_.call(null,out);
var state_34553__$1 = state_34553;
var statearr_34560_34575 = state_34553__$1;
(statearr_34560_34575[(2)] = inst_34547);

(statearr_34560_34575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (6))){
var inst_34549 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34561_34576 = state_34553__$1;
(statearr_34561_34576[(2)] = inst_34549);

(statearr_34561_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (7))){
var inst_34537 = (state_34553[(11)]);
var inst_34543 = (state_34553[(2)]);
var inst_34544 = cljs.core.async.put_BANG_.call(null,out,inst_34543);
var inst_34533 = inst_34537;
var state_34553__$1 = (function (){var statearr_34562 = state_34553;
(statearr_34562[(12)] = inst_34544);

(statearr_34562[(7)] = inst_34533);

return statearr_34562;
})();
var statearr_34563_34577 = state_34553__$1;
(statearr_34563_34577[(2)] = null);

(statearr_34563_34577[(1)] = (2));


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
});})(c__23496__auto___34571,out))
;
return ((function (switch__23384__auto__,c__23496__auto___34571,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____0 = (function (){
var statearr_34567 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34567[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__);

(statearr_34567[(1)] = (1));

return statearr_34567;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____1 = (function (state_34553){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_34553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e34568){if((e34568 instanceof Object)){
var ex__23388__auto__ = e34568;
var statearr_34569_34578 = state_34553;
(statearr_34569_34578[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_34553;
state_34553 = G__34579;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__ = function(state_34553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____1.call(this,state_34553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto___34571,out))
})();
var state__23498__auto__ = (function (){var statearr_34570 = f__23497__auto__.call(null);
(statearr_34570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto___34571);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto___34571,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34580,opts){
var map__34584 = p__34580;
var map__34584__$1 = ((((!((map__34584 == null)))?((((map__34584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34584):map__34584);
var eval_body__$1 = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18831__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18831__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18831__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34586){var e = e34586;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34587_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34592){
var vec__34593 = p__34592;
var k = cljs.core.nth.call(null,vec__34593,(0),null);
var v = cljs.core.nth.call(null,vec__34593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34594){
var vec__34595 = p__34594;
var k = cljs.core.nth.call(null,vec__34595,(0),null);
var v = cljs.core.nth.call(null,vec__34595,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34599,p__34600){
var map__34847 = p__34599;
var map__34847__$1 = ((((!((map__34847 == null)))?((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34847):map__34847);
var opts = map__34847__$1;
var before_jsload = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34848 = p__34600;
var map__34848__$1 = ((((!((map__34848 == null)))?((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34848):map__34848);
var msg = map__34848__$1;
var files = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34848__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23497__auto__ = (function (){var switch__23384__auto__ = ((function (c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35001){
var state_val_35002 = (state_35001[(1)]);
if((state_val_35002 === (7))){
var inst_34863 = (state_35001[(7)]);
var inst_34862 = (state_35001[(8)]);
var inst_34865 = (state_35001[(9)]);
var inst_34864 = (state_35001[(10)]);
var inst_34870 = cljs.core._nth.call(null,inst_34863,inst_34865);
var inst_34871 = figwheel.client.file_reloading.eval_body.call(null,inst_34870,opts);
var inst_34872 = (inst_34865 + (1));
var tmp35003 = inst_34863;
var tmp35004 = inst_34862;
var tmp35005 = inst_34864;
var inst_34862__$1 = tmp35004;
var inst_34863__$1 = tmp35003;
var inst_34864__$1 = tmp35005;
var inst_34865__$1 = inst_34872;
var state_35001__$1 = (function (){var statearr_35006 = state_35001;
(statearr_35006[(7)] = inst_34863__$1);

(statearr_35006[(8)] = inst_34862__$1);

(statearr_35006[(9)] = inst_34865__$1);

(statearr_35006[(11)] = inst_34871);

(statearr_35006[(10)] = inst_34864__$1);

return statearr_35006;
})();
var statearr_35007_35093 = state_35001__$1;
(statearr_35007_35093[(2)] = null);

(statearr_35007_35093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (20))){
var inst_34905 = (state_35001[(12)]);
var inst_34913 = figwheel.client.file_reloading.sort_files.call(null,inst_34905);
var state_35001__$1 = state_35001;
var statearr_35008_35094 = state_35001__$1;
(statearr_35008_35094[(2)] = inst_34913);

(statearr_35008_35094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (27))){
var state_35001__$1 = state_35001;
var statearr_35009_35095 = state_35001__$1;
(statearr_35009_35095[(2)] = null);

(statearr_35009_35095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (1))){
var inst_34854 = (state_35001[(13)]);
var inst_34851 = before_jsload.call(null,files);
var inst_34852 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34853 = (function (){return ((function (inst_34854,inst_34851,inst_34852,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34596_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34596_SHARP_);
});
;})(inst_34854,inst_34851,inst_34852,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34854__$1 = cljs.core.filter.call(null,inst_34853,files);
var inst_34855 = cljs.core.not_empty.call(null,inst_34854__$1);
var state_35001__$1 = (function (){var statearr_35010 = state_35001;
(statearr_35010[(14)] = inst_34852);

(statearr_35010[(15)] = inst_34851);

(statearr_35010[(13)] = inst_34854__$1);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_35011_35096 = state_35001__$1;
(statearr_35011_35096[(1)] = (2));

} else {
var statearr_35012_35097 = state_35001__$1;
(statearr_35012_35097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (24))){
var state_35001__$1 = state_35001;
var statearr_35013_35098 = state_35001__$1;
(statearr_35013_35098[(2)] = null);

(statearr_35013_35098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (39))){
var inst_34955 = (state_35001[(16)]);
var state_35001__$1 = state_35001;
var statearr_35014_35099 = state_35001__$1;
(statearr_35014_35099[(2)] = inst_34955);

(statearr_35014_35099[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (46))){
var inst_34996 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35015_35100 = state_35001__$1;
(statearr_35015_35100[(2)] = inst_34996);

(statearr_35015_35100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (4))){
var inst_34899 = (state_35001[(2)]);
var inst_34900 = cljs.core.List.EMPTY;
var inst_34901 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34900);
var inst_34902 = (function (){return ((function (inst_34899,inst_34900,inst_34901,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34597_SHARP_){
var and__18831__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34597_SHARP_);
if(cljs.core.truth_(and__18831__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34597_SHARP_));
} else {
return and__18831__auto__;
}
});
;})(inst_34899,inst_34900,inst_34901,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34903 = cljs.core.filter.call(null,inst_34902,files);
var inst_34904 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34905 = cljs.core.concat.call(null,inst_34903,inst_34904);
var state_35001__$1 = (function (){var statearr_35016 = state_35001;
(statearr_35016[(12)] = inst_34905);

(statearr_35016[(17)] = inst_34901);

(statearr_35016[(18)] = inst_34899);

return statearr_35016;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35017_35101 = state_35001__$1;
(statearr_35017_35101[(1)] = (16));

} else {
var statearr_35018_35102 = state_35001__$1;
(statearr_35018_35102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (15))){
var inst_34889 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35019_35103 = state_35001__$1;
(statearr_35019_35103[(2)] = inst_34889);

(statearr_35019_35103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (21))){
var inst_34915 = (state_35001[(19)]);
var inst_34915__$1 = (state_35001[(2)]);
var inst_34916 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34915__$1);
var state_35001__$1 = (function (){var statearr_35020 = state_35001;
(statearr_35020[(19)] = inst_34915__$1);

return statearr_35020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35001__$1,(22),inst_34916);
} else {
if((state_val_35002 === (31))){
var inst_34999 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35001__$1,inst_34999);
} else {
if((state_val_35002 === (32))){
var inst_34955 = (state_35001[(16)]);
var inst_34960 = inst_34955.cljs$lang$protocol_mask$partition0$;
var inst_34961 = (inst_34960 & (64));
var inst_34962 = inst_34955.cljs$core$ISeq$;
var inst_34963 = (inst_34961) || (inst_34962);
var state_35001__$1 = state_35001;
if(cljs.core.truth_(inst_34963)){
var statearr_35021_35104 = state_35001__$1;
(statearr_35021_35104[(1)] = (35));

} else {
var statearr_35022_35105 = state_35001__$1;
(statearr_35022_35105[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (40))){
var inst_34976 = (state_35001[(20)]);
var inst_34975 = (state_35001[(2)]);
var inst_34976__$1 = cljs.core.get.call(null,inst_34975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34977 = cljs.core.get.call(null,inst_34975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34978 = cljs.core.not_empty.call(null,inst_34976__$1);
var state_35001__$1 = (function (){var statearr_35023 = state_35001;
(statearr_35023[(21)] = inst_34977);

(statearr_35023[(20)] = inst_34976__$1);

return statearr_35023;
})();
if(cljs.core.truth_(inst_34978)){
var statearr_35024_35106 = state_35001__$1;
(statearr_35024_35106[(1)] = (41));

} else {
var statearr_35025_35107 = state_35001__$1;
(statearr_35025_35107[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (33))){
var state_35001__$1 = state_35001;
var statearr_35026_35108 = state_35001__$1;
(statearr_35026_35108[(2)] = false);

(statearr_35026_35108[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (13))){
var inst_34875 = (state_35001[(22)]);
var inst_34879 = cljs.core.chunk_first.call(null,inst_34875);
var inst_34880 = cljs.core.chunk_rest.call(null,inst_34875);
var inst_34881 = cljs.core.count.call(null,inst_34879);
var inst_34862 = inst_34880;
var inst_34863 = inst_34879;
var inst_34864 = inst_34881;
var inst_34865 = (0);
var state_35001__$1 = (function (){var statearr_35027 = state_35001;
(statearr_35027[(7)] = inst_34863);

(statearr_35027[(8)] = inst_34862);

(statearr_35027[(9)] = inst_34865);

(statearr_35027[(10)] = inst_34864);

return statearr_35027;
})();
var statearr_35028_35109 = state_35001__$1;
(statearr_35028_35109[(2)] = null);

(statearr_35028_35109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (22))){
var inst_34918 = (state_35001[(23)]);
var inst_34923 = (state_35001[(24)]);
var inst_34919 = (state_35001[(25)]);
var inst_34915 = (state_35001[(19)]);
var inst_34918__$1 = (state_35001[(2)]);
var inst_34919__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34918__$1);
var inst_34920 = (function (){var all_files = inst_34915;
var res_SINGLEQUOTE_ = inst_34918__$1;
var res = inst_34919__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34918,inst_34923,inst_34919,inst_34915,inst_34918__$1,inst_34919__$1,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34598_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34598_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34918,inst_34923,inst_34919,inst_34915,inst_34918__$1,inst_34919__$1,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34921 = cljs.core.filter.call(null,inst_34920,inst_34918__$1);
var inst_34922 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34923__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34922);
var inst_34924 = cljs.core.not_empty.call(null,inst_34923__$1);
var state_35001__$1 = (function (){var statearr_35029 = state_35001;
(statearr_35029[(23)] = inst_34918__$1);

(statearr_35029[(24)] = inst_34923__$1);

(statearr_35029[(25)] = inst_34919__$1);

(statearr_35029[(26)] = inst_34921);

return statearr_35029;
})();
if(cljs.core.truth_(inst_34924)){
var statearr_35030_35110 = state_35001__$1;
(statearr_35030_35110[(1)] = (23));

} else {
var statearr_35031_35111 = state_35001__$1;
(statearr_35031_35111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (36))){
var state_35001__$1 = state_35001;
var statearr_35032_35112 = state_35001__$1;
(statearr_35032_35112[(2)] = false);

(statearr_35032_35112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (41))){
var inst_34976 = (state_35001[(20)]);
var inst_34980 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34981 = cljs.core.map.call(null,inst_34980,inst_34976);
var inst_34982 = cljs.core.pr_str.call(null,inst_34981);
var inst_34983 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34982)].join('');
var inst_34984 = figwheel.client.utils.log.call(null,inst_34983);
var state_35001__$1 = state_35001;
var statearr_35033_35113 = state_35001__$1;
(statearr_35033_35113[(2)] = inst_34984);

(statearr_35033_35113[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (43))){
var inst_34977 = (state_35001[(21)]);
var inst_34987 = (state_35001[(2)]);
var inst_34988 = cljs.core.not_empty.call(null,inst_34977);
var state_35001__$1 = (function (){var statearr_35034 = state_35001;
(statearr_35034[(27)] = inst_34987);

return statearr_35034;
})();
if(cljs.core.truth_(inst_34988)){
var statearr_35035_35114 = state_35001__$1;
(statearr_35035_35114[(1)] = (44));

} else {
var statearr_35036_35115 = state_35001__$1;
(statearr_35036_35115[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (29))){
var inst_34918 = (state_35001[(23)]);
var inst_34923 = (state_35001[(24)]);
var inst_34919 = (state_35001[(25)]);
var inst_34955 = (state_35001[(16)]);
var inst_34921 = (state_35001[(26)]);
var inst_34915 = (state_35001[(19)]);
var inst_34951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34954 = (function (){var all_files = inst_34915;
var res_SINGLEQUOTE_ = inst_34918;
var res = inst_34919;
var files_not_loaded = inst_34921;
var dependencies_that_loaded = inst_34923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34955,inst_34921,inst_34915,inst_34951,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34953){
var map__35037 = p__34953;
var map__35037__$1 = ((((!((map__35037 == null)))?((((map__35037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35037):map__35037);
var namespace = cljs.core.get.call(null,map__35037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34955,inst_34921,inst_34915,inst_34951,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34955__$1 = cljs.core.group_by.call(null,inst_34954,inst_34921);
var inst_34957 = (inst_34955__$1 == null);
var inst_34958 = cljs.core.not.call(null,inst_34957);
var state_35001__$1 = (function (){var statearr_35039 = state_35001;
(statearr_35039[(28)] = inst_34951);

(statearr_35039[(16)] = inst_34955__$1);

return statearr_35039;
})();
if(inst_34958){
var statearr_35040_35116 = state_35001__$1;
(statearr_35040_35116[(1)] = (32));

} else {
var statearr_35041_35117 = state_35001__$1;
(statearr_35041_35117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (44))){
var inst_34977 = (state_35001[(21)]);
var inst_34990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34977);
var inst_34991 = cljs.core.pr_str.call(null,inst_34990);
var inst_34992 = [cljs.core.str("not required: "),cljs.core.str(inst_34991)].join('');
var inst_34993 = figwheel.client.utils.log.call(null,inst_34992);
var state_35001__$1 = state_35001;
var statearr_35042_35118 = state_35001__$1;
(statearr_35042_35118[(2)] = inst_34993);

(statearr_35042_35118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (6))){
var inst_34896 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35043_35119 = state_35001__$1;
(statearr_35043_35119[(2)] = inst_34896);

(statearr_35043_35119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (28))){
var inst_34921 = (state_35001[(26)]);
var inst_34948 = (state_35001[(2)]);
var inst_34949 = cljs.core.not_empty.call(null,inst_34921);
var state_35001__$1 = (function (){var statearr_35044 = state_35001;
(statearr_35044[(29)] = inst_34948);

return statearr_35044;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_35045_35120 = state_35001__$1;
(statearr_35045_35120[(1)] = (29));

} else {
var statearr_35046_35121 = state_35001__$1;
(statearr_35046_35121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (25))){
var inst_34919 = (state_35001[(25)]);
var inst_34935 = (state_35001[(2)]);
var inst_34936 = cljs.core.not_empty.call(null,inst_34919);
var state_35001__$1 = (function (){var statearr_35047 = state_35001;
(statearr_35047[(30)] = inst_34935);

return statearr_35047;
})();
if(cljs.core.truth_(inst_34936)){
var statearr_35048_35122 = state_35001__$1;
(statearr_35048_35122[(1)] = (26));

} else {
var statearr_35049_35123 = state_35001__$1;
(statearr_35049_35123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (34))){
var inst_34970 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
if(cljs.core.truth_(inst_34970)){
var statearr_35050_35124 = state_35001__$1;
(statearr_35050_35124[(1)] = (38));

} else {
var statearr_35051_35125 = state_35001__$1;
(statearr_35051_35125[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (17))){
var state_35001__$1 = state_35001;
var statearr_35052_35126 = state_35001__$1;
(statearr_35052_35126[(2)] = recompile_dependents);

(statearr_35052_35126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (3))){
var state_35001__$1 = state_35001;
var statearr_35053_35127 = state_35001__$1;
(statearr_35053_35127[(2)] = null);

(statearr_35053_35127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (12))){
var inst_34892 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35054_35128 = state_35001__$1;
(statearr_35054_35128[(2)] = inst_34892);

(statearr_35054_35128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (2))){
var inst_34854 = (state_35001[(13)]);
var inst_34861 = cljs.core.seq.call(null,inst_34854);
var inst_34862 = inst_34861;
var inst_34863 = null;
var inst_34864 = (0);
var inst_34865 = (0);
var state_35001__$1 = (function (){var statearr_35055 = state_35001;
(statearr_35055[(7)] = inst_34863);

(statearr_35055[(8)] = inst_34862);

(statearr_35055[(9)] = inst_34865);

(statearr_35055[(10)] = inst_34864);

return statearr_35055;
})();
var statearr_35056_35129 = state_35001__$1;
(statearr_35056_35129[(2)] = null);

(statearr_35056_35129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (23))){
var inst_34918 = (state_35001[(23)]);
var inst_34923 = (state_35001[(24)]);
var inst_34919 = (state_35001[(25)]);
var inst_34921 = (state_35001[(26)]);
var inst_34915 = (state_35001[(19)]);
var inst_34926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34928 = (function (){var all_files = inst_34915;
var res_SINGLEQUOTE_ = inst_34918;
var res = inst_34919;
var files_not_loaded = inst_34921;
var dependencies_that_loaded = inst_34923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34926,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34927){
var map__35057 = p__34927;
var map__35057__$1 = ((((!((map__35057 == null)))?((((map__35057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35057):map__35057);
var request_url = cljs.core.get.call(null,map__35057__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34926,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34929 = cljs.core.reverse.call(null,inst_34923);
var inst_34930 = cljs.core.map.call(null,inst_34928,inst_34929);
var inst_34931 = cljs.core.pr_str.call(null,inst_34930);
var inst_34932 = figwheel.client.utils.log.call(null,inst_34931);
var state_35001__$1 = (function (){var statearr_35059 = state_35001;
(statearr_35059[(31)] = inst_34926);

return statearr_35059;
})();
var statearr_35060_35130 = state_35001__$1;
(statearr_35060_35130[(2)] = inst_34932);

(statearr_35060_35130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (35))){
var state_35001__$1 = state_35001;
var statearr_35061_35131 = state_35001__$1;
(statearr_35061_35131[(2)] = true);

(statearr_35061_35131[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (19))){
var inst_34905 = (state_35001[(12)]);
var inst_34911 = figwheel.client.file_reloading.expand_files.call(null,inst_34905);
var state_35001__$1 = state_35001;
var statearr_35062_35132 = state_35001__$1;
(statearr_35062_35132[(2)] = inst_34911);

(statearr_35062_35132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (11))){
var state_35001__$1 = state_35001;
var statearr_35063_35133 = state_35001__$1;
(statearr_35063_35133[(2)] = null);

(statearr_35063_35133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (9))){
var inst_34894 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35064_35134 = state_35001__$1;
(statearr_35064_35134[(2)] = inst_34894);

(statearr_35064_35134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (5))){
var inst_34865 = (state_35001[(9)]);
var inst_34864 = (state_35001[(10)]);
var inst_34867 = (inst_34865 < inst_34864);
var inst_34868 = inst_34867;
var state_35001__$1 = state_35001;
if(cljs.core.truth_(inst_34868)){
var statearr_35065_35135 = state_35001__$1;
(statearr_35065_35135[(1)] = (7));

} else {
var statearr_35066_35136 = state_35001__$1;
(statearr_35066_35136[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (14))){
var inst_34875 = (state_35001[(22)]);
var inst_34884 = cljs.core.first.call(null,inst_34875);
var inst_34885 = figwheel.client.file_reloading.eval_body.call(null,inst_34884,opts);
var inst_34886 = cljs.core.next.call(null,inst_34875);
var inst_34862 = inst_34886;
var inst_34863 = null;
var inst_34864 = (0);
var inst_34865 = (0);
var state_35001__$1 = (function (){var statearr_35067 = state_35001;
(statearr_35067[(7)] = inst_34863);

(statearr_35067[(32)] = inst_34885);

(statearr_35067[(8)] = inst_34862);

(statearr_35067[(9)] = inst_34865);

(statearr_35067[(10)] = inst_34864);

return statearr_35067;
})();
var statearr_35068_35137 = state_35001__$1;
(statearr_35068_35137[(2)] = null);

(statearr_35068_35137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (45))){
var state_35001__$1 = state_35001;
var statearr_35069_35138 = state_35001__$1;
(statearr_35069_35138[(2)] = null);

(statearr_35069_35138[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (26))){
var inst_34918 = (state_35001[(23)]);
var inst_34923 = (state_35001[(24)]);
var inst_34919 = (state_35001[(25)]);
var inst_34921 = (state_35001[(26)]);
var inst_34915 = (state_35001[(19)]);
var inst_34938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34940 = (function (){var all_files = inst_34915;
var res_SINGLEQUOTE_ = inst_34918;
var res = inst_34919;
var files_not_loaded = inst_34921;
var dependencies_that_loaded = inst_34923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34938,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34939){
var map__35070 = p__34939;
var map__35070__$1 = ((((!((map__35070 == null)))?((((map__35070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35070):map__35070);
var namespace = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34938,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34941 = cljs.core.map.call(null,inst_34940,inst_34919);
var inst_34942 = cljs.core.pr_str.call(null,inst_34941);
var inst_34943 = figwheel.client.utils.log.call(null,inst_34942);
var inst_34944 = (function (){var all_files = inst_34915;
var res_SINGLEQUOTE_ = inst_34918;
var res = inst_34919;
var files_not_loaded = inst_34921;
var dependencies_that_loaded = inst_34923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34938,inst_34940,inst_34941,inst_34942,inst_34943,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34918,inst_34923,inst_34919,inst_34921,inst_34915,inst_34938,inst_34940,inst_34941,inst_34942,inst_34943,state_val_35002,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34945 = setTimeout(inst_34944,(10));
var state_35001__$1 = (function (){var statearr_35072 = state_35001;
(statearr_35072[(33)] = inst_34943);

(statearr_35072[(34)] = inst_34938);

return statearr_35072;
})();
var statearr_35073_35139 = state_35001__$1;
(statearr_35073_35139[(2)] = inst_34945);

(statearr_35073_35139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (16))){
var state_35001__$1 = state_35001;
var statearr_35074_35140 = state_35001__$1;
(statearr_35074_35140[(2)] = reload_dependents);

(statearr_35074_35140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (38))){
var inst_34955 = (state_35001[(16)]);
var inst_34972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34955);
var state_35001__$1 = state_35001;
var statearr_35075_35141 = state_35001__$1;
(statearr_35075_35141[(2)] = inst_34972);

(statearr_35075_35141[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (30))){
var state_35001__$1 = state_35001;
var statearr_35076_35142 = state_35001__$1;
(statearr_35076_35142[(2)] = null);

(statearr_35076_35142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (10))){
var inst_34875 = (state_35001[(22)]);
var inst_34877 = cljs.core.chunked_seq_QMARK_.call(null,inst_34875);
var state_35001__$1 = state_35001;
if(inst_34877){
var statearr_35077_35143 = state_35001__$1;
(statearr_35077_35143[(1)] = (13));

} else {
var statearr_35078_35144 = state_35001__$1;
(statearr_35078_35144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (18))){
var inst_34909 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
if(cljs.core.truth_(inst_34909)){
var statearr_35079_35145 = state_35001__$1;
(statearr_35079_35145[(1)] = (19));

} else {
var statearr_35080_35146 = state_35001__$1;
(statearr_35080_35146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (42))){
var state_35001__$1 = state_35001;
var statearr_35081_35147 = state_35001__$1;
(statearr_35081_35147[(2)] = null);

(statearr_35081_35147[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (37))){
var inst_34967 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35082_35148 = state_35001__$1;
(statearr_35082_35148[(2)] = inst_34967);

(statearr_35082_35148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (8))){
var inst_34862 = (state_35001[(8)]);
var inst_34875 = (state_35001[(22)]);
var inst_34875__$1 = cljs.core.seq.call(null,inst_34862);
var state_35001__$1 = (function (){var statearr_35083 = state_35001;
(statearr_35083[(22)] = inst_34875__$1);

return statearr_35083;
})();
if(inst_34875__$1){
var statearr_35084_35149 = state_35001__$1;
(statearr_35084_35149[(1)] = (10));

} else {
var statearr_35085_35150 = state_35001__$1;
(statearr_35085_35150[(1)] = (11));

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
});})(c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23384__auto__,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____0 = (function (){
var statearr_35089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35089[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__);

(statearr_35089[(1)] = (1));

return statearr_35089;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____1 = (function (state_35001){
while(true){
var ret_value__23386__auto__ = (function (){try{while(true){
var result__23387__auto__ = switch__23384__auto__.call(null,state_35001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23387__auto__;
}
break;
}
}catch (e35090){if((e35090 instanceof Object)){
var ex__23388__auto__ = e35090;
var statearr_35091_35151 = state_35001;
(statearr_35091_35151[(5)] = ex__23388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35152 = state_35001;
state_35001 = G__35152;
continue;
} else {
return ret_value__23386__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__ = function(state_35001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____1.call(this,state_35001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23385__auto__;
})()
;})(switch__23384__auto__,c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23498__auto__ = (function (){var statearr_35092 = f__23497__auto__.call(null);
(statearr_35092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23496__auto__);

return statearr_35092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23498__auto__);
});})(c__23496__auto__,map__34847,map__34847__$1,opts,before_jsload,on_jsload,reload_dependents,map__34848,map__34848__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23496__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35155,link){
var map__35158 = p__35155;
var map__35158__$1 = ((((!((map__35158 == null)))?((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35158):map__35158);
var file = cljs.core.get.call(null,map__35158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35158,map__35158__$1,file){
return (function (p1__35153_SHARP_,p2__35154_SHARP_){
if(cljs.core._EQ_.call(null,p1__35153_SHARP_,p2__35154_SHARP_)){
return p1__35153_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35158,map__35158__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35164){
var map__35165 = p__35164;
var map__35165__$1 = ((((!((map__35165 == null)))?((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var match_length = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35160_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35160_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35167 = [];
var len__19912__auto___35170 = arguments.length;
var i__19913__auto___35171 = (0);
while(true){
if((i__19913__auto___35171 < len__19912__auto___35170)){
args35167.push((arguments[i__19913__auto___35171]));

var G__35172 = (i__19913__auto___35171 + (1));
i__19913__auto___35171 = G__35172;
continue;
} else {
}
break;
}

var G__35169 = args35167.length;
switch (G__35169) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35167.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35174_SHARP_,p2__35175_SHARP_){
return cljs.core.assoc.call(null,p1__35174_SHARP_,cljs.core.get.call(null,p2__35175_SHARP_,key),p2__35175_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35176){
var map__35179 = p__35176;
var map__35179__$1 = ((((!((map__35179 == null)))?((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var f_data = map__35179__$1;
var file = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35181,files_msg){
var map__35188 = p__35181;
var map__35188__$1 = ((((!((map__35188 == null)))?((((map__35188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35188):map__35188);
var opts = map__35188__$1;
var on_cssload = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35190_35194 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35191_35195 = null;
var count__35192_35196 = (0);
var i__35193_35197 = (0);
while(true){
if((i__35193_35197 < count__35192_35196)){
var f_35198 = cljs.core._nth.call(null,chunk__35191_35195,i__35193_35197);
figwheel.client.file_reloading.reload_css_file.call(null,f_35198);

var G__35199 = seq__35190_35194;
var G__35200 = chunk__35191_35195;
var G__35201 = count__35192_35196;
var G__35202 = (i__35193_35197 + (1));
seq__35190_35194 = G__35199;
chunk__35191_35195 = G__35200;
count__35192_35196 = G__35201;
i__35193_35197 = G__35202;
continue;
} else {
var temp__4657__auto___35203 = cljs.core.seq.call(null,seq__35190_35194);
if(temp__4657__auto___35203){
var seq__35190_35204__$1 = temp__4657__auto___35203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35190_35204__$1)){
var c__19654__auto___35205 = cljs.core.chunk_first.call(null,seq__35190_35204__$1);
var G__35206 = cljs.core.chunk_rest.call(null,seq__35190_35204__$1);
var G__35207 = c__19654__auto___35205;
var G__35208 = cljs.core.count.call(null,c__19654__auto___35205);
var G__35209 = (0);
seq__35190_35194 = G__35206;
chunk__35191_35195 = G__35207;
count__35192_35196 = G__35208;
i__35193_35197 = G__35209;
continue;
} else {
var f_35210 = cljs.core.first.call(null,seq__35190_35204__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35210);

var G__35211 = cljs.core.next.call(null,seq__35190_35204__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__35190_35194 = G__35211;
chunk__35191_35195 = G__35212;
count__35192_35196 = G__35213;
i__35193_35197 = G__35214;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35188,map__35188__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35188,map__35188__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478297203134