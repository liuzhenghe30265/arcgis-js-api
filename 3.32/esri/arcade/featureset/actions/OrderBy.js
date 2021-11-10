// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var l=function(d,c){l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,g){c.__proto__=g}||function(c,g){for(var d in g)g.hasOwnProperty(d)&&(c[d]=g[d])};return l(d,c)};return function(d,c){function k(){this.constructor=d}l(d,c);d.prototype=null===c?Object.create(c):(k.prototype=c.prototype,new k)}}();
define("esri/arcade/featureset/actions/OrderBy","require exports ../../languageUtils ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../../polyfill/promiseUtils".split(" "),function(l,d,c,k,g,p,m){var n=function(d){function e(a){var b=d.call(this,a)||this;b._orderbyclause=null;b.declaredClass="esri.arcade.featureset.actions.OrderBy";b._maxProcessing=100;b._orderbyclause=a.orderbyclause;b._parent=a.parentfeatureset;return b}__extends(e,d);e.prototype._getSet=function(a){var b=this;
return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",null,null,b._orderbyclause,a)}).then(function(h){b._checkCancelled(a);b._wset=h;return b._wset}):m.resolve(this._wset)};e.prototype.manualOrderSet=function(a,b){var h=this;return this.getIdColumnDictionary(a,[],-1,b).then(function(a){h._orderbyclause.order(a);for(var b=new g([],[],!0,null),f=0;f<a.length;f++)b._known.push(a[f].id);return b})};e.prototype.getIdColumnDictionary=function(a,b,h,d){var e=this;if(h<
a._known.length-1){var f=this._maxQueryRate();if("GETPAGES"===a._known[h+1])return c.tick(this._parent._expandPagedSet(a,f,0,0,d)).then(function(){return e.getIdColumnDictionary(a,b,h,d)});for(var f=h+1,g=[];f<a._known.length&&"GETPAGES"!==a._known[f];)g.push(a._known[f]),f++;h+=g.length;return c.tick(this._parent._getFeatureBatch(g,d)).then(function(f){e._checkCancelled(d);for(var c=0;c<f.length;c++){var g=f[c];b.push({id:g.attributes[e.objectIdField],feature:g})}return e.getIdColumnDictionary(a,
b,h,d)})}return 0<a._candidates.length?c.tick(this._refineSetBlock(a,this._maxProcessingRate(),d)).then(function(){e._checkCancelled(d);return e.getIdColumnDictionary(a,b,h,d)}):m.resolve(b)};e.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};e.prototype._getFeatures=function(a,b,d,c){return this._parent._getFeatures(a,b,d,c)};e.prototype._featureFromCache=function(a){if(void 0===this._featureCache[a]){var b=this._parent._featureFromCache(a);return void 0===b?void 0:null===
b?null:this._featureCache[a]=b}return this._featureCache[a]};e.prototype._fetchAndRefineFeatures=function(){return m.reject(Error("Fetch and Refine should not be called in this featureset"))};e.prototype._getFilteredSet=function(a,b,d,c,e){var f=this;return this._ensureLoaded().then(function(){return f._parent._getFilteredSet(a,b,d,null===c?f._orderbyclause:c,e)}).then(function(a){f._checkCancelled(e);var c;c=new g(a._candidates.slice(0),a._known.slice(0),a._ordered,f._clonePageDefinition(a.pagesDefinition));
var h=!0;0<a._candidates.length&&(h=!1);return!1===c._ordered?f.manualOrderSet(c,e).then(function(a){!1!==h||null===b&&null===d||(a=new g(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,f._clonePageDefinition(a.pagesDefinition)));return a}):c})};return e}(k);k._featuresetFunctions.orderBy=function(c){return""===c?this:new n({parentfeatureset:this,orderbyclause:new p(c)})};return n});