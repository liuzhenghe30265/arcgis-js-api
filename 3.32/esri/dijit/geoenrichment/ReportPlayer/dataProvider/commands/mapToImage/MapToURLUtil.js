// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/MapToURLUtil","require dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all dojo/dom-style esri/dijit/geoenrichment/utils/DataUtil esri/dijit/geoenrichment/utils/ImageInfoUtil esri/dijit/geoenrichment/utils/RegExpUtil esri/dijit/geoenrichment/utils/UrlUtil".split(" "),function(z,A,n,m,B,r,C,D,p,E){function F(){var a=new n;z("esri/tasks/PrintTask esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/layers/GraphicsLayer ./DotDensityToImageUtil ./LegendToLayerUtil".split(" "),
function(b,c,g,d,h,k){t=c;u=g;v=d;q=h;w=k;x=A(b,{returnJson:!1,mapName:null,_execute:function(){this.returnJson&&(this.printGp.submitJob=this.printGp.execute=function(a,b){a="data:application/json;base64,"+C.base64FromJson(a.Web_Map_as_JSON);b([{value:{url:a}}]);return(new n).resolve()});return this.inherited(arguments)},_getPrintDefinition:function(a,b){var c=this.inherited(arguments);this.returnJson&&this.mapName&&(c.title=this.mapName);console.log(c);return c},_createOperationalLayers:function(a,
b){var c=this.inherited(arguments);if(b.__legendLayerId){var l=c.filter(function(a){return a.id===b.__legendLayerId})[0];c.splice(c.indexOf(l),1);c.push(l)}return c},_createFeatureCollection:function(a,b,c,d){var k=this.inherited(arguments);this.returnJson&&k&&("esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass||"esri.layers.GraphicsLayer"===a.declaredClass)&&k.featureCollection.layers.forEach(function(b){b.layerDefinition.name=a.arcgisProps&&a.arcgisProps.title||
a._titleForLegend||a.name||a.id;b.layerDefinition.name=p.decodeXML(b.layerDefinition.name);b.layerDefinition.objectIdField="OBJECTID";b.layerDefinition.fields=[{name:"OBJECTID",type:"esriFieldTypeOID"}];var c={OBJECTID:1},k=/[^\w]/g,d;b.featureSet.features.forEach(function(a,g){a.attributes=a.attributes||{};a.attributes.OBJECTID=g+1+"";a.attributes.__nameField||(a.attributes.Name=p.decodeXML(a.attributes.Name||b.layerDefinition.name),d="Name");g=a.attributes.__fieldAliases;for(var h in a.attributes)if(0!==
h.indexOf("__")){var l=h,e=a.attributes[h];"string"===typeof e&&(e=p.decodeXML(e));var f=g&&g[h];(f=f&&f.replace(k,"_"))&&void 0===a.attributes[f]&&(a.attributes[f]=e,l=f);a.attributes.__nameField===h&&(d=l);c[h]||(c[h]=1,b.layerDefinition.fields.push({name:l,type:"string"===typeof e?"esriFieldTypeString":"esriFieldTypeDouble"}))}});b.layerDefinition.displayField=d});return k}});a.resolve()});return a.promise}var x,t,u,v,q,w,y,e={setPrintMapTaskUrl:function(a){y=a;E.registerCORS(a)},mapToURL:function(a,
b,c,g){var d=e._getUrlForMap(a);if(d)return d;d=F().then(function(){return e._replaceDotDensityLayersWithPictureMarkers(a).then(function(h){return m(b&&w.legendToGraphicsLayer(b,a,c),function(b){b&&a.addLayer(b);return m(e._runPrintTask(a,c,b,g),function(c){b&&a.removeLayer(b);e._rollbackReplacing(a,h);var d=new n;setTimeout(function(){d.resolve(c.url)},100);return d.promise})})})});e._putUrlToCache(a,d);return d},_replaceDotDensityLayersWithPictureMarkers:function(a){var b=[];for(i=0;i<a.graphicsLayerIds.length;i++)layer=
a.getLayer(a.graphicsLayerIds[i]),layer.loaded&&layer.visible&&q.isDotDensity(layer)&&b.push(e._createGraphicsLayerFromDotDensityLayer(i,layer,a));return B(b)},_createGraphicsLayerFromDotDensityLayer:function(a,b,c){return q.createPictureMarkersFromDotDensityLayer(b,c.extent,c).then(function(g){if(!g)return null;var d=new v;g.map(function(a){d.add(a)});c.addLayer(d,a);b.visible=!1;return{addedLayer:d,hiddenLayer:b}}).otherwise(function(a){console.log(a);return null})},_runPrintTask:function(a,b,c,
e){function d(){var d=new x(y);d.returnJson=e&&e.replaceWithJson;d.mapName=e&&e.mapName;var k=new t;k.map=a;var f=new u;f.exportOptions={width:3.125*r.get(b,"width"),height:3.125*r.get(b,"height"),dpi:300};f.format="png32";f.showAttribution=!1;f.forceFeatureAttributes=!0;f.__legendLayerId=c&&c.id;k.template=f;return d.execute(k)}return m(d(),function(a){return a},function(a){console.log(a);return m(d(),function(a){return a},function(a){console.log(a);return d()})})},_rollbackReplacing:function(a,
b){b.forEach(function(b){b&&b.addedLayer&&a.removeLayer(b.addedLayer);b&&b.hiddenLayer&&(b.hiddenLayer.visible=!0)})},urlToSrc:function(a,b){return b&&b.saveImagesAsDataUrl?D.getRemoteImageDataUrl(a,{sizeLimit:1500}):a}},f,G=0;e.enableCaching=function(){f={}};e.clearCaching=function(){f=null};e._putUrlToCache=function(a,b){f&&b&&(a.__mapToImageUtilKey=G++,f[a.__mapToImageUtilKey]=b)};e._getUrlForMap=function(a){return f&&f[a.__mapToImageUtilKey]};return e});