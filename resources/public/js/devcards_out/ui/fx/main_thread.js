// Compiled by ClojureScript 1.8.40 {}
goog.provide('ui.fx.main_thread');
goog.require('cljs.core');
goog.require('re_frame.core');
if(typeof ui.fx.main_thread.electron !== 'undefined'){
} else {
ui.fx.main_thread.electron = require("electron");
}
if(typeof ui.fx.main_thread.ipc !== 'undefined'){
} else {
ui.fx.main_thread.ipc = ui.fx.main_thread.electron.ipcRenderer;
}
ui.fx.main_thread.thread_calls = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ui.fx.main_thread.ipc.on("open-files:response",(function (event,args){
var id = cljs.core.js__GT_clj.call(null,args.id);
var files = cljs.core.js__GT_clj.call(null,args.files);
var on_open = cljs.core.get.call(null,cljs.core.deref.call(null,ui.fx.main_thread.thread_calls),id);
cljs.core.swap_BANG_.call(null,ui.fx.main_thread.thread_calls,cljs.core.dissoc,id);

return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_open,files));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("main-thread","open-files","main-thread/open-files",1383449517),(function (p__25315){
var map__25316 = p__25315;
var map__25316__$1 = ((((!((map__25316 == null)))?((((map__25316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25316):map__25316);
var on_open = cljs.core.get.call(null,map__25316__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var call_id = [cljs.core.str(cljs.core.gensym.call(null))].join('');
cljs.core.swap_BANG_.call(null,ui.fx.main_thread.thread_calls,cljs.core.assoc,call_id,on_open);

return ui.fx.main_thread.ipc.send("open-files",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["id",call_id], null)));
}));

//# sourceMappingURL=main_thread.js.map?rel=1478388957045