//>>built
define("dojox/grid/enhanced/_Plugin","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/connect ../EnhancedGrid".split(" "),function(h,e,g,c,d){return g("dojox.grid.enhanced._Plugin",null,{name:"plugin",grid:null,option:{},_connects:[],_subscribes:[],privates:{},constructor:function(a,b){this.grid=a;this.option=b;this._connects=[];this._subscribes=[];this.privates=e.mixin({},dojox.grid.enhanced._Plugin.prototype);this.init()},init:function(){},onPreInit:function(){},
onPostInit:function(){},onStartUp:function(){},connect:function(a,b,f){a=d.connect(a,b,this,f);this._connects.push(a);return a},disconnect:function(a){c.some(this._connects,function(b,f,c){return b==a?(d.disconnect(a),c.splice(f,1),!0):!1})},subscribe:function(a,b){a=d.subscribe(a,this,b);this._subscribes.push(a);return a},unsubscribe:function(a){c.some(this._subscribes,function(b,c,e){return b==a?(d.unsubscribe(a),e.splice(c,1),!0):!1})},onSetStore:function(a){},destroy:function(){c.forEach(this._connects,
d.disconnect);c.forEach(this._subscribes,d.unsubscribe);delete this._connects;delete this._subscribes;delete this.option;delete this.privates}})});