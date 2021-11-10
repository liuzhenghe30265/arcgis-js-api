//>>built
define("dojox/mvc/_atBindingMixin","dojo/_base/array dojo/_base/lang dojo/_base/declare dojo/has dojo/Stateful ./resolve ./sync".split(" "),function(t,p,n,f,v,u,w){function x(a){var b;try{b=require("dijit/registry")}catch(d){return}for(a=a.domNode&&a.domNode.parentNode;a;){if(a=b.getEnclosingWidget(a)){var c=a._relTargetProp||"target";if((p.isFunction(a.get)?a.get(c):a[c])||c in a.constructor.prototype)return a}a=a&&a.domNode.parentNode}}function l(a,b,c,d,n){function m(){h.Two&&h.Two.unwatch();delete h.Two;
var g=e&&(p.isFunction(e.get)?e.get(l):e[l]),k=u(a,g),g=u(c,g);f("mvc-bindings-log-api")&&(!k||/^rel:/.test(a)&&!e)&&q(a,b);f("mvc-bindings-log-api")&&(!g||/^rel:/.test(c)&&!e)&&q(c,d);k&&g&&(!/^rel:/.test(a)&&!/^rel:/.test(c)||e)&&(k.set&&k.watch||"*"!=b?null==b?(p.isFunction(g.set)?g.set(d,k):g[d]=k,f("mvc-bindings-log-api")&&console.log("dojox/mvc/_atBindingMixin set "+k+" to: "+y(g,d))):h.Two=w(k,b,g,d,n):f("mvc-bindings-log-api")&&q(a,b))}var h={},e=x(c),l=e&&e._relTargetProp||"target";m();if(e&&
/^rel:/.test(a)||/^rel:/.test(c)&&p.isFunction(e.set)&&p.isFunction(e.watch))h.rel=e.watch(l,function(a,b,c){b!==c&&(f("mvc-bindings-log-api")&&console.log("Change in relative data binding target: "+e),m())});var r={};r.unwatch=r.remove=function(){for(var a in h)h[a]&&h[a].unwatch(),delete h[a]};return r}var y=f("mvc-bindings-log-api")?function(a,b){return[a._setIdAttr||!a.declaredClass?a:a.declaredClass,b].join(":")}:"",q=f("mvc-bindings-log-api")?function(a,b){console.warn(b+" could not be resolved"+
("string"==typeof a?" with "+a:"")+".")}:"",m={dataBindAttr:"data-mvc-bindings",_dbpostscript:function(a,b){b=this._refs=(a||{}).refs||{};for(var c in a)if("dojox.mvc.at"==(a[c]||{}).atsignature){var d=a[c];delete a[c];b[c]=d}var d=new v,f=this;d.toString=function(){return"[Mixin value of widget "+f.declaredClass+", "+(f.id||"NO ID")+"]"};d.canConvertToLoggable=!0;this._startAtWatchHandles(d);for(c in b)void 0!==d[c]&&((a=a||{})[c]=d[c]);this._stopAtWatchHandles()},_startAtWatchHandles:function(a){this.canConvertToLoggable=
!0;var b=this._refs;if(b){var c=this._atWatchHandles=this._atWatchHandles||{};this._excludes=null;for(var d in b)b[d]&&"*"!=d&&(c[d]=l(b[d].target,b[d].targetProp,a||this,d,{bindDirection:b[d].bindDirection,converter:b[d].converter,equals:b[d].equalsCallback}));"dojox.mvc.at"==(b["*"]||{}).atsignature&&(c["*"]=l(b["*"].target,b["*"].targetProp,a||this,"*",{bindDirection:b["*"].bindDirection,converter:b["*"].converter,equals:b["*"].equalsCallback}))}},_stopAtWatchHandles:function(){for(var a in this._atWatchHandles)this._atWatchHandles[a].unwatch(),
delete this._atWatchHandles[a]},_setAtWatchHandle:function(a,b){if("ref"==a)throw Error(this+": 1.7 ref syntax used in conjunction with 1.8 dojox/mvc/at syntax, which is not supported.");var c=this._atWatchHandles=this._atWatchHandles||{};c[a]&&(c[a].unwatch(),delete c[a]);this._excludes=this[a]=null;this._started?c[a]=l(b.target,b.targetProp,this,a,{bindDirection:b.bindDirection,converter:b.converter,equals:b.equalsCallback}):this._refs[a]=b},_setBind:function(a){a=eval("({"+a+"})");for(var b in a){var c=
a[b];"dojox.mvc.at"!=(c||{}).atsignature?console.warn(b+" in "+dataBindAttr+" is not a data binding handle."):this._setAtWatchHandle(b,c)}},_getExcludesAttr:function(){if(this._excludes)return this._excludes;var a=[],b;for(b in this._atWatchHandles)"*"!=b&&a.push(b);return a},_getPropertiesAttr:function(){if(this.constructor._attribs)return this.constructor._attribs;var a=["onClick"].concat(this.constructor._setterAttrs);t.forEach(["id","excludes","properties","ref","binding"],function(b){b=t.indexOf(a,
b);0<=b&&a.splice(b,1)});return this.constructor._attribs=a}};m[m.dataBindAttr]="";n=n("dojox/mvc/_atBindingMixin",null,m);n.mixin=m;return n});