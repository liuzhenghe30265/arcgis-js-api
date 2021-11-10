// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/SpriteSource","require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper dojo/Deferred ../../kernel ../../request ../../core/promiseUtils ../../core/urlUtils".split(" "),function(r,t,u,v,n,l,p,m,q){return function(){function d(a,f){this.baseURL=a;this.devicePixelRatio=f;this._isRetina=!1;this._spritesData={};this.height=this.width=this.image=null;this.loadStatus="not-loaded"}Object.defineProperty(d.prototype,"spriteNames",
{get:function(){var a=[],f;for(f in this._spritesData)a.push(f);a.sort();return a},enumerable:!0,configurable:!0});d.prototype.getSpriteInfo=function(a){return this._spritesData[a]};d.prototype.load=function(){var a=this;this.loadStatus="loading";return this.baseURL?this._loadSprites().then(function(){a.loadStatus="loaded";return a}).catch(function(f){a.loadStatus="failed";return a}):m.resolve(this)};d.prototype._loadSprites=function(){var a=this;this._isRetina=1.15<this.devicePixelRatio?!0:!1;var f=
this.baseURL,d=this._isRetina?"@2x":"";return p(f+d+".json",{callbackParamName:"callback",responseType:"json"}).then(function(h){var g=Object.keys(h.data);if(!g||0===g.length||1===g.length&&"_ssl"===g[0])return m.resolve(null);a._spritesData=h.data;var k=new n,c=new Image;c.crossOrigin="anonymous";c.onload=function(){c.onload=null;a.width=c.width;a.height=c.height;var b=document.createElement("canvas");b.width=c.width;b.height=c.height;b=b.getContext("2d");b.drawImage(c,0,0,c.width,c.height);for(var b=
b.getImageData(0,0,c.width,c.height),b=new Uint8Array(b.data),d,e=0;e<b.length;e+=4)d=b[e+3]/255,b[e]*=d,b[e+1]*=d,b[e+2]*=d;a.image=b;k.resolve()};c.onerror=function(){console.log("Failed to load sprites!");a._spritesData=null;k.reject()};h=""+f+d+".png";l.id&&(g=l.id.findCredential(h))&&g.token&&(h+="?token\x3d"+g.token);c.src=q.addProxy(h);return k})};return d}()});