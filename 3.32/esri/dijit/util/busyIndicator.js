// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/util/busyIndicator","dijit/registry dojo/_base/lang dojo/_base/window dojo/dom dojo/dom-construct dojox/widget/Standby require".split(" "),function(d,e,f,c,g,h,k){var b={_defaultStandbyParams:{image:k.toUrl("../images/loading-throb.gif"),color:"#fff",opacity:.75,duration:200},create:function(a){if(a=this._normalizeParams(a))return a=new h(b._toStandbyParams(a)),g.place(a.domNode,f.doc.body),b._createHandle(a)},_normalizeParams:function(a){if(a){if(a.target)return a;if("string"===
typeof a){var b=d.byId(a);a=b?b.domNode:c.byId(a)}else a=a.domNode?a.domNode:c.byId(a);if(a)return{target:a}}},_toStandbyParams:function(a){a.imageUrl&&(a.image=a.imageUrl);a.backgroundColor&&(a.color=a.backgroundColor);a.backgroundOpacity&&(a.opacity=a.backgroundOpacity);a.fadeDuration&&(a.duration=a.fadeDuration);return e.mixin({},b._defaultStandbyParams,a)},_createHandle:function(a){return{show:function(){a&&a.show()},hide:function(){a&&a.hide()},destroy:function(){a&&(a.destroy(),a=null)}}}};
return b});