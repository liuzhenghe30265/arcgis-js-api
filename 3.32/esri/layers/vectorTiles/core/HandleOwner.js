// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/HandleOwner","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Accessor ./Handles ./accessorSupport/decorators".split(" "),function(h,k,e,c,f,g,b){return function(d){function a(){var a=d.call(this)||this;a.handles=new g;return a}e(a,d);a.prototype.destroy=function(){this.handles.destroy()};c([b.property({readOnly:!0})],a.prototype,"handles",void 0);return a=c([b.subclass("esri.core.HandleOwner")],a)}(b.declared(f))});