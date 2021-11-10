// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/WMSLayerInfo":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel"],function(n,l,p,m,g){n=n(null,{declaredClass:"esri.layers.WMSLayerInfo",name:null,title:null,description:null,extent:null,legendURL:null,subLayers:[],allExtents:[],spatialReferences:[],queryable:!1,showPopup:!1,constructor:function(f){f&&(this.name=f.name,this.title=f.title,this.description=f.description,this.extent=f.extent,this.legendURL=f.legendURL,this.subLayers=
f.subLayers?f.subLayers:[],this.allExtents=f.allExtents?f.allExtents:[],this.spatialReferences=f.spatialReferences?f.spatialReferences:[],this.queryable=!!f.queryable,this.showPopup=!!f.showPopup)},clone:function(){var f={name:this.name,title:this.title,description:this.description,legendURL:this.legendURL},g;this.extent&&(f.extent=this.extent.getExtent());f.subLayers=[];p.forEach(this.subLayers,function(g){f.subLayers.push(g.clone())});f.allExtents=[];for(g in this.allExtents)g=parseInt(g,10),isNaN(g)||
(f.allExtents[g]=this.allExtents[g].getExtent());f.spatialReferences=[];p.forEach(this.spatialReferences,function(g){f.spatialReferences.push(g)});f.queryable=this.queryable;f.showPopup=this.showPopup;return f}});m("extend-esri")&&l.setObject("layers.WMSLayerInfo",n,g);return n})},"*noref":1}});
define("esri/layers/WMSLayer","require dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/sniff ../config ../graphic ../kernel ../request ../urlUtils ../dijit/PopupTemplate ../SpatialReference ../geometry/Extent ../geometry/Point ./DynamicMapServiceLayer ./WMSLayerInfo dojo/query".split(" "),function(n,l,p,m,g,f,x,y,z,u,r,A,t,q,C,v,B){p=p([v],{declaredClass:"esri.layers.WMSLayer",_CRS_TO_EPSG:{84:4326,83:4269,27:4267},_REVERSED_LAT_LONG_RANGES:[[4001,4999],[2044,2045],[2081,
2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,
27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],_WEB_MERCATOR:[102100,3857,102113,900913],_WORLD_MERCATOR:[3395,54004],allExtents:[],version:null,constructor:function(a,b){var c=r.urlToObject(a);c.query&&(c.query.version||c.query.Version||c.query.VERSION)&&(this.version=c.query.version||c.query.Version||c.query.VERSION);this.url=a=this._stripParameters(a,"version service request bbox format height width layers srs crs styles transparent bgcolor exceptions time elevation sld wfs".split(" "));
this._url=r.urlToObject(a);this._getCapabilitiesURL=a;this._initLayer=m.hitch(this,this._initLayer);this._parseCapabilities=m.hitch(this,this._parseCapabilities);this._getCapabilitiesError=m.hitch(this,this._getCapabilitiesError);b?(this.customParameters=b.customParameters,this.customLayerParameters=b.customLayerParameters,this.imageFormat=this._getImageFormat(b.format),this.imageTransparency=!1!==b.transparent,this.visibleLayers=b.visibleLayers?b.visibleLayers:[],this.version=b.version||this.version,
b.resourceInfo?this._readResourceInfo(b.resourceInfo):this._getCapabilities()):(this.imageFormat="image/png",this.imageTransparency=!0,this.visibleLayers=[],this._getCapabilities());this._blankImageURL=n.toUrl("../images/pixel.png");this.extentProcessor=this._createExtentProcessor(0);this._createChildLayer()},setVisibleLayers:function(a){this.visibleLayers=(a=this._checkVisibleLayersList(a))?a:[];this.refresh(!0)},setImageFormat:function(a){this.imageFormat=this._getImageFormat(a);this.refresh(!0)},
setImageTransparency:function(a){this.imageTransparency=a;this.refresh(!0)},setCustomParameters:function(a,b){this.customParameters=a;this.customLayerParameters=b;this.refresh(!0)},refresh:function(){this._refreshTS=Date.now();this.inherited(arguments);this._childLayer&&this._childLayer.refresh.apply(this._childLayer,arguments)},getImageUrl:function(a,b,c,d){if(this.visibleLayers&&0!==this.visibleLayers.length){a=this._getImageParams(a,b,c);a=this._mixinCustomLayerParameters(a);b=this.getMapURL;var e;
b+=-1===b.indexOf("?")?"?":"";for(e in a)a.hasOwnProperty(e)&&(b+="?"===b.substring(b.length-1,b.length)?"":"\x26",b+=e+"\x3d"+a[e]);b=this.addTimestampToURL(b);d(r.addProxy(b))}else d(this._blankImageURL)},_setMap:function(a,b,c){var d=this.inherited(arguments);a.wrapAround180?this._childLayer&&(this.suspended&&this._childLayer.suspend(),this._childLayer._setMap(a,d)):this._childLayer=this.extentProcessor=null;return d},_unsetMap:function(a,b){this._childLayer&&this._childLayer._unsetMap(a,this._div);
this.inherited(arguments)},onSuspend:function(){this.inherited(arguments);this._childLayer&&this._childLayer.suspend()},onResume:function(){this.inherited(arguments);this._childLayer&&this._childLayer.resume()},_createChildLayer:function(){this._childLayer=new v(null,{extentProcessor:this._createExtentProcessor(1)});this._childLayer._isChildLayer=!0;this._childLayer.getImageUrl=m.hitch(this,this.getImageUrl);this._childLayer.loaded=!0},_createExtentProcessor:function(a){return m.hitch(this,this._extentProcessor,
a)},_extentProcessor:function(a,b){var c=b.extent,d=b.width,e=0;if(c){b=c.getWidth()/d;var g=c.bisect(),c=g.extents,k=c[a];k&&(d=g.marginLeft/b,e=0===a?d:d+c[0].getWidth()/b,d=Math.ceil(k.getWidth()/b),e=Math.ceil(e));c=k}return{extent:c,width:d,marginLeft:e}},_getImageParams:function(a,b,c){var d=a.spatialReference.wkid;-1===g.indexOf(this.spatialReferences,d)&&a.spatialReference.latestWkid&&(d=a.spatialReference.latestWkid);if(g.some(this._WEB_MERCATOR,function(a){return a==d})){var e=g.filter(this.spatialReferences,
function(a){return g.some(this._WEB_MERCATOR,function(b){return b==a})},this);0===e.length&&(e=g.filter(this.spatialReferences,function(a){return g.some(this._WORLD_MERCATOR,function(b){return b==a})},this));d=0<e.length?e[0]:this._WEB_MERCATOR[1]}this.spatialReferences=g.filter(this.spatialReferences,function(a){return a!==d});this.spatialReferences.unshift(d);var e=a.xmin,f=a.xmax,k=a.ymin;a=a.ymax;var h={SERVICE:"WMS",REQUEST:"GetMap"};h.FORMAT=this.imageFormat;h.TRANSPARENT=this.imageTransparency?
"TRUE":"FALSE";h.STYLES="";h.VERSION=this.version;h.LAYERS=this.visibleLayers?this.visibleLayers.toString():null;h.WIDTH=b;h.HEIGHT=c;this.maxWidth<b&&(h.WIDTH=this.maxWidth);this.maxHeight<c&&(h.HEIGHT=this.maxHeight);b=d?d:NaN;isNaN(b)||("1.3.0"==this.version?h.CRS="EPSG:"+b:h.SRS="EPSG:"+b);"1.3.0"==this.version&&this._useLatLong(b)?h.BBOX=k+","+e+","+a+","+f:h.BBOX=e+","+k+","+f+","+a;return h},_initLayer:function(a,b){this.spatialReference=new t(this.extent.spatialReference);this.initialExtent=
new q(this.extent);this.fullExtent=new q(this.extent);this.visibleLayers=this._checkVisibleLayersList(this.visibleLayers);var c=m.hitch(this,function(){this.loaded=!0;this.onLoad(this);var a=this._loadCallback;a&&(delete this._loadCallback,a(this))});f("chrome")?(a=x.defaults.io,b="with-credentials"===a.useCors?r.canUseXhr(this.getMapURL,!0):-1,(a=-1<b?a.corsEnabledServers[b]:null)&&a.withCredentials?u({url:this.getMapURL,handleAs:"text",content:{SERVICE:"WMS",REQUEST:"GetMap"}}).addBoth(function(){c()}):
c()):c()},_readResourceInfo:function(a){a.extent?a.layerInfos?(this.extent=a.extent,this.allExtents[0]=a.extent,this.layerInfos=a.layerInfos,this.description=a.description?a.description:"",this.copyright=a.copyright?a.copyright:"",this.title=a.title?a.title:"",this.getMapURL=a.getMapURL?a.getMapURL:this._getCapabilitiesURL,this.getFeatureInfoURL=a.getFeatureInfoURL,this.featureInfoFormat=a.featureInfoFormat,this.version=a.version?a.version:"1.3.0",this.maxWidth=a.maxWidth?a.maxWidth:5E3,this.maxHeight=
a.maxHeight?a.maxHeight:5E3,this.spatialReferences=a.spatialReferences?a.spatialReferences:[],this.imageFormat=this._getImageFormat(a.format),this.setScaleRange(a.minScale,a.maxScale),this.customLayerParameters=a.customLayerParameters||this.customLayerParameters,this.customParameters=a.customParameters||this.customParameters,this._initLayer()):this._errorHandler(Error("esri.layers.WMSLayer: unable to find the 'layerInfos' property in resourceInfo")):this._errorHandler(Error("esri.layers.WMSLayer: Unable to find the 'extent' property in resourceInfo."))},
_getCapabilities:function(a){var b=this._url.query?this._url.query:{};b.SERVICE="WMS";b.REQUEST="GetCapabilities";this.version&&(b.VERSION=this.version);var b=this._mixinCustomParameters(b),c=this._url.path+"?",d;for(d in b)b.hasOwnProperty(d)&&(c+="?"==c.substring(c.length-1,c.length)?"":"\x26",c+=d+"\x3d"+b[d]);u({url:c,handleAs:a||"xml",headers:{"Content-Type":null},load:this._parseCapabilities,error:this._getCapabilitiesError},{usePost:!1})},_parseCapabilities:function(a,b){var c;if(a){if("text"===
b.handleAs){try{c=(new DOMParser).parseFromString(a,"application/xml")}catch(D){}c&&!c.getElementsByTagName("parsererror").length||this._errorHandler(Error("GetCapabilities request for "+this._getCapabilitiesURL+" failed. (XML Parse error.)"))}else c=a;var d=this;this.version=this._getAttributeValue("WMS_Capabilities","version",c,null);this.version||(this.version=this._getAttributeValue("WMT_MS_Capabilities","version",c,"1.3.0"));a=this._getTag("Service",c);this.title=this._getTagValue("Title",a,
"");this.title||(this.title=this._getTagValue("Name",a,""));this.copyright=this._getTagValue("AccessConstraints",a,"");this.description=this._getTagValue("Abstract",a,"");this.maxWidth=parseInt(this._getTagValue("MaxWidth",a,5E3),10);this.maxHeight=parseInt(this._getTagValue("MaxHeight",a,5E3),10);if(a=this._getTag("Layer",c)){var e=this._getLayerInfo(a),f=0,k=null;a=this._getTag("Capability",c);g.forEach(a.childNodes,function(a){"Layer"==a.nodeName&&(0===f?k=a:(1===f&&e.name&&(e.name="",e.subLayers=
[],e.subLayers.push(this._getLayerInfo(k))),e.subLayers.push(this._getLayerInfo(a))),f++)},this);if(e&&(this.layerInfos=e.subLayers,this.layerInfos&&0!==this.layerInfos.length||(this.layerInfos=[e]),this.extent=e.extent,this.extent||(e.extent=new q(this.layerInfos[0].extent.toJson()),this.extent=e.extent),this.allExtents=e.allExtents,this.allExtents&&this.allExtents.length||(e.allExtents=[],g.forEach(this.layerInfos[0].allExtents,function(a,b){a&&(e.allExtents[b]=new q(a.toJson()))}),this.allExtents=
e.allExtents),this.spatialReferences=e.spatialReferences,!this.spatialReferences.length&&0<this.layerInfos.length)){var h=function(a){var b;for(b=0;b<a.subLayers.length;b++){var c=a.subLayers[b],d=c.spatialReferences;!d.length&&c.subLayers&&0<c.subLayers.length&&(d=h(c));if(d.length)return d}return[]};for(a=0;a<this.layerInfos.length&&(b=this.layerInfos[a],this.spatialReferences=this.layerInfos[0].spatialReferences,!this.spatialReferences.length&&b.subLayers&&0<b.subLayers.length&&(this.spatialReferences=
h(b)),!this.spatialReferences.length);a++);}a=function(a){return(a=l.query("DCPType",d._getTag(a,c)))&&0<a.length&&(a=l.query("HTTP",a[0]))&&0<a.length&&(a=l.query("Get",a[0]))&&0<a.length&&(a=d._getAttributeValue("OnlineResource","xlink:href",a[0],null))?(a.indexOf("\x26")===a.length-1&&(a=a.substring(0,a.length-1)),d._stripParameters(a,["service","request"])):null};b=function(a){var b=[];0===l.query("Operation",c).length?g.forEach(l.query("Format",d._getTag(a,c)),function(a){b.push(a.text?a.text:
a.textContent)}):(g.forEach(l.query("Operation",c),function(c){c.getAttribute("name")===a&&g.forEach(l.query("Format",c),function(a){b.push(a.text?a.text:a.textContent)})}),b.length||g.forEach(l.query("Format",d._getTag(a,c)),function(a){b.push(a.text?a.text:a.textContent)}));return b};this.getMapURL=a("GetMap")||this._getCapabilitiesURL;this.getMapFormats=b("GetMap");this.getMapFormats.length&&!g.some(this.getMapFormats,function(a){return-1<a.indexOf(this.imageFormat)},this)&&(this.imageFormat=this.getMapFormats[0]);
if(this.getFeatureInfoURL=a("GetFeatureInfo"))this.getFeatureInfoFormats=b("GetFeatureInfo"),-1<g.indexOf(this.getFeatureInfoFormats,"text/html")?this.featureInfoFormat="text/html":-1<g.indexOf(this.getFeatureInfoFormats,"text/plain")&&(this.featureInfoFormat="text/plain");if(!this.featureInfoFormat){var w=function(a){if(a&&(a.queryable=!1,a.subLayers))for(var b=0;b<a.subLayers.length;b++)w(a.subLayers[b])};w(e)}this._initLayer()}else this._errorHandler(Error("esri.layers.WMSLayer: Response does not contain any layers."))}else"xml"===
b.handleAs?this._getCapabilities("text"):this._errorHandler(Error("GetCapabilities request for "+this._getCapabilitiesURL+" failed. (Response is null.)"))},_getCapabilitiesError:function(a){a&&a.message&&(a.message="GetCapabilities request for "+this._getCapabilitiesURL+" failed. ("+a.message+")");this._errorHandler(a)},_getLayerInfo:function(a){if(!a)return null;var b=new B;b.name="";b.title="";b.description="";b.allExtents=[];b.spatialReferences=[];b.queryable="1"===a.getAttribute("queryable");
b.subLayers=[];var c=this._getTag("LatLonBoundingBox",a);c&&(b.allExtents[0]=this._getExtent(c,4326));var d=this._getTag("EX_GeographicBoundingBox",a),e;d&&(e=new q(0,0,0,0,new t({wkid:4326})),e.xmin=parseFloat(this._getTagValue("westBoundLongitude",d,0)),e.ymin=parseFloat(this._getTagValue("southBoundLatitude",d,0)),e.xmax=parseFloat(this._getTagValue("eastBoundLongitude",d,0)),e.ymax=parseFloat(this._getTagValue("northBoundLatitude",d,0)),b.allExtents[0]=e);c||d||(e=new q(-180,-90,180,90,new t({wkid:4326})),
b.allExtents[0]=e);b.extent=b.allExtents[0];var f=-1<g.indexOf(["1.0.0","1.1.0","1.1.1"],this.version)?"SRS":"CRS";g.forEach(a.childNodes,function(a){if("Name"==a.nodeName)b.name=(a.text?a.text:a.textContent)||"";else if("Title"==a.nodeName)b.title=(a.text?a.text:a.textContent)||"";else if("Abstract"==a.nodeName)b.description=(a.text?a.text:a.textContent)||"";else if("BoundingBox"==a.nodeName){var c=a.getAttribute(f);c&&0===c.indexOf("EPSG:")?(c=parseInt(c.substring(5),10),0===c||isNaN(c)||(a="1.3.0"==
this.version?this._getExtent(a,c,this._useLatLong(c)):this._getExtent(a,c),b.allExtents[c]=a,b.extent||(b.extent=a))):c&&0===c.indexOf("CRS:")?(c=parseInt(c.substring(4),10),0===c||isNaN(c)||(this._CRS_TO_EPSG[c]&&(c=this._CRS_TO_EPSG[c]),b.allExtents[c]=this._getExtent(a,c))):(c=parseInt(c,10),0===c||isNaN(c)||(b.allExtents[c]=this._getExtent(a,c)))}else if(a.nodeName==f)a=(a.text?a.text:a.textContent).split(" "),g.forEach(a,function(a){a=-1<a.indexOf(":")?parseInt(a.split(":")[1],10):parseInt(a,
10);0===a||isNaN(a)||(this._CRS_TO_EPSG[a]&&(a=this._CRS_TO_EPSG[a]),-1==g.indexOf(b.spatialReferences,a)&&b.spatialReferences.push(a))},this);else if("Style"!=a.nodeName||b.legendURL)"Layer"===a.nodeName&&b.subLayers.push(this._getLayerInfo(a));else if(a=this._getTag("LegendURL",a))if(a=this._getTag("OnlineResource",a))b.legendURL=a.getAttribute("xlink:href")},this);b.title=b.title||b.name;return b},_getImageFormat:function(a){switch(a?a.toLowerCase():""){case "jpg":return"image/jpeg";case "bmp":return"image/bmp";
case "gif":return"image/gif";case "svg":return"image/svg+xml";default:return"image/png"}},getImageFormat:function(){switch(this.imageFormat?this.imageFormat.toLowerCase():""){case "image/jpeg":return"jpg";case "image/bmp":return"bmp";case "image/gif":return"gif";case "image/svg+xml":return"svg";default:return"png"}},_getExtent:function(a,b,c){var d;if(a){d=new q;var e=parseFloat(a.getAttribute("minx")),g=parseFloat(a.getAttribute("miny")),f=parseFloat(a.getAttribute("maxx"));a=parseFloat(a.getAttribute("maxy"));
c?(d.xmin=isNaN(g)?-1*Number.MAX_VALUE:g,d.ymin=isNaN(e)?-1*Number.MAX_VALUE:e,d.xmax=isNaN(a)?Number.MAX_VALUE:a,d.ymax=isNaN(f)?Number.MAX_VALUE:f):(d.xmin=isNaN(e)?-1*Number.MAX_VALUE:e,d.ymin=isNaN(g)?-1*Number.MAX_VALUE:g,d.xmax=isNaN(f)?Number.MAX_VALUE:f,d.ymax=isNaN(a)?Number.MAX_VALUE:a);d.spatialReference=new t({wkid:b})}return d},_useLatLong:function(a){var b,c;for(c=0;c<this._REVERSED_LAT_LONG_RANGES.length;c++){var d=this._REVERSED_LAT_LONG_RANGES[c];if(a>=d[0]&&a<=d[1]){b=!0;break}}return b},
_getTag:function(a,b){return(a=l.query(a,b))&&0<a.length?a[0]:null},_getTagValue:function(a,b,c){return(a=l.query(a,b))&&0<a.length?a[0].text?a[0].text:a[0].textContent:c},_getAttributeValue:function(a,b,c,d){return(a=l.query(a,c))&&0<a.length?a[0].getAttribute(b):d},_checkVisibleLayersList:function(a){if(a&&0<a.length&&this.layerInfos&&0<this.layerInfos.length&&"number"==typeof a[0]){var b=[];g.forEach(a,function(a){a<this.layerInfos.length&&b.push(this.layerInfos[a].name)},this);a=b}return a},_stripParameters:function(a,
b){a=r.urlToObject(a);var c,d=[];for(c in a.query)a.query.hasOwnProperty(c)&&-1===g.indexOf(b,c.toLowerCase())&&d.push(c+"\x3d"+a.query[c]);return a.path+(d.length?"?"+d.join("\x26"):"")},_getPopupGraphic:function(a,b){var c=this.visibleLayers;if(!c||0===c.length)return null;var d=this._popupGraphic;d||(d=new A({title:this.title||"",description:'\x3cdiv style\x3d"position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;"\x3e\x3ciframe src\x3d"{QUERY_URL}" width\x3d"250" height\x3d"147" frameborder\x3d"0" marginwidth\x3d"0" marginheight\x3d"0" style\x3d"position:absolute;top:0;left:0;width:100%;height:100%;border:0;background:url(\''+
n.toUrl("../dijit/images/loading-throb.gif")+"') transparent center no-repeat;\" onload\x3d\"(event.target || event.srcElement).style.background \x3d 'none';\"\x3e\x3c/iframe\x3e\x3c/div\x3e"}),d=this._popupGraphic=new y(null,null,{},d),d._layer=this);var e=function(a){var b=[];if(a&&(a.queryable&&a.showPopup&&a.name&&b.push(a.name),a.subLayers))for(var c=0;c<a.subLayers.length;c++){var d=e(a.subLayers[c]);d.length&&(b=b.concat(d))}return b},f=e({subLayers:this.layerInfos}),f=g.filter(f,function(a){return-1<
g.indexOf(c,a)});if(f.length){var k=this.getFeatureInfoURL;a=this._getImageParams(a.extent,a.width,a.height);a=this._mixinCustomLayerParameters(a);a.REQUEST="GetFeatureInfo";a.INFO_FORMAT=this.featureInfoFormat;a.QUERY_LAYERS=f.join();a.FEATURE_COUNT=25;"1.3.0"===this.version?(a.I=Math.round(b.x),a.J=Math.round(b.y)):(a.X=Math.round(b.x),a.Y=Math.round(b.y));var k=k+(-1===k.indexOf("?")?"?":""),h;for(h in a)a.hasOwnProperty(h)&&(k+="?"===k.substring(k.length-1,k.length)?"":"\x26",k+=h+"\x3d"+a[h]);
d.attributes.QUERY_URL=k;return d}return null},_mixinCustomParameters:function(a){if(this.customParameters)for(var b in this.customParameters)a[b]=encodeURIComponent(this.customParameters[b]);return a},_mixinCustomLayerParameters:function(a){if(this.customLayerParameters||this.customParameters){var b=m.clone(this.customParameters||{});m.mixin(b,this.customLayerParameters||{});for(var c in b)"styles"===c.toLowerCase()&&delete a.STYLES,a[c]=encodeURIComponent(b[c])}return a}});f("extend-esri")&&m.setObject("layers.WMSLayer",
p,z);return p});