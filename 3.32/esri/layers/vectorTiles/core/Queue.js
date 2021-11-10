// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/Queue",["require","exports"],function(c,d){return function(){function b(a){this._items=[];this._itemSet=new Set;this._peeker=function(a){return a[0]};this._length=0;a&&a.peeker&&(this._peeker=a.peeker)}Object.defineProperty(b.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0});b.prototype.clear=function(){this._itemSet.clear();this._length=this._items.length=0};b.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)};
b.prototype.push=function(a){this.contains(a)||this._add(a)};b.prototype.contains=function(a){return 0<this._length&&this._itemSet.has(a)};b.prototype.pop=function(){if(0!==this._length){var a=this.peek();this._remove(a);return a}};b.prototype.remove=function(a){this.contains(a)&&this._remove(a)};b.prototype._add=function(a){this._items.push(a);this._itemSet.add(a);this._length++};b.prototype._remove=function(a){this._itemSet.delete(a);this._items.splice(this._items.indexOf(a),1);this._length--};
return b}()});