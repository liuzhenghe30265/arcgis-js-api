// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"dojox/xml/parser":function(){define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(c){c.getObject("xml.parser",!0,dojox);dojox.xml.parser.parse=function(e,h){var f=c.doc,l;h=h||"text/xml";if(e&&c.trim(e)&&"DOMParser"in c.global){l=(new DOMParser).parseFromString(e,h);e=l.documentElement;if("parsererror"==e.nodeName&&"http://www.mozilla.org/newlayout/xml/parsererror.xml"==e.namespaceURI){if(f=e.getElementsByTagNameNS("http://www.mozilla.org/newlayout/xml/parsererror.xml",
"sourcetext")[0])f=f.firstChild.data;throw Error("Error parsing text "+e.firstChild.data+" \n"+f);}return l}if("ActiveXObject"in c.global){f=function(c){return"MSXML"+c+".DOMDocument"};f=["Microsoft.XMLDOM",f(6),f(4),f(3),f(2)];c.some(f,function(c){try{l=new ActiveXObject(c)}catch(w){return!1}return!0});if(e&&l&&(l.async=!1,l.loadXML(e),e=l.parseError,0!==e.errorCode))throw Error("Line: "+e.line+"\nCol: "+e.linepos+"\nReason: "+e.reason+"\nError Code: "+e.errorCode+"\nSource: "+e.srcText);if(l)return l}else if(f.implementation&&
f.implementation.createDocument){if(e&&c.trim(e)&&f.createElement){h=f.createElement("xml");h.innerHTML=e;var y=f.implementation.createDocument("foo","",null);c.forEach(h.childNodes,function(c){y.importNode(c,!0)});return y}return f.implementation.createDocument("","",null)}return null};dojox.xml.parser.textContent=function(e,h){if(1<arguments.length)return dojox.xml.parser.replaceChildren(e,(e.ownerDocument||c.doc).createTextNode(h)),h;if(void 0!==e.textContent)return e.textContent;var f="";e&&c.forEach(e.childNodes,
function(c){switch(c.nodeType){case 1:case 5:f+=dojox.xml.parser.textContent(c);break;case 3:case 2:case 4:f+=c.nodeValue}});return f};dojox.xml.parser.replaceChildren=function(e,h){var f=[];c.isIE&&c.forEach(e.childNodes,function(c){f.push(c)});dojox.xml.parser.removeChildren(e);c.forEach(f,c.destroy);c.isArray(h)?c.forEach(h,function(c){e.appendChild(c)}):e.appendChild(h)};dojox.xml.parser.removeChildren=function(c){for(var e=c.childNodes.length;c.hasChildNodes();)c.removeChild(c.firstChild);return e};
dojox.xml.parser.innerXML=function(c){return c.innerXML?c.innerXML:c.xml?c.xml:"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(c):null};return dojox.xml.parser})},"esri/layers/WMTSLayerInfo":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(c,e,h,f){c=c(null,{declaredClass:"esri.layers.WMTSLayerInfo",identifier:null,tileMatrixSet:null,format:null,style:null,tileInfo:null,title:null,fullExtent:null,initialExtent:null,description:null,
dimension:null,constructor:function(c){c&&(this.title=c.title,this.tileMatrixSet=c.tileMatrixSet,this.format=c.format,this.style=c.style,this.tileInfo=c.tileInfo,this.fullExtent=c.fullExtent,this.initialExtent=c.initialExtent,this.identifier=c.identifier,this.description=c.description,this.dimension=c.dimension)}});h("extend-esri")&&e.setObject("layers.WMTSLayerInfo",c,f);return c})},"*noref":1}});
define("esri/layers/WMTSLayer","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/sniff dojox/xml/parser ../kernel ../lang ../request ../urlUtils ../WKIDUnitConversion ../SpatialReference ../geometry/Point ../geometry/Extent ../geometry/webMercatorUtils ./TiledMapServiceLayer ./TileInfo ./WMTSLayerInfo dojo/query".split(" "),function(c,e,h,f,l,y,D,w,E,F,z,A,B,C,G,H,I,J){e=e([H],{declaredClass:"esri.layers.WMTSLayer",copyright:null,extent:null,tileUrl:null,spatialReference:null,
tileInfo:null,constructor:function(a,b){this.version="1.0.0";this.tileUrl=this._url=a;this.serviceMode="RESTful";this._parseCapabilities=h.hitch(this,this._parseCapabilities);this._getCapabilitiesError=h.hitch(this,this._getCapabilitiesError);this._formatDictionary={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""};
b||(b={});if(b.serviceMode)if("KVP"===b.serviceMode||"RESTful"===b.serviceMode)this.serviceMode=b.serviceMode;else{console.error("WMTS mode could only be 'KVP' or 'RESTful'");return}this.customParameters=b.customParameters;this.customLayerParameters=b.customLayerParameters;this.layerInfo=new J;b.layerInfo&&(this.layerInfo=b.layerInfo,this._identifier=b.layerInfo.identifier,this._tileMatrixSetId=b.layerInfo.tileMatrixSet,b.layerInfo.format&&(this.format="image/"+b.layerInfo.format),this._style=b.layerInfo.style,
this.title=b.layerInfo.title,this._dimension=b.layerInfo.dimension,this._dimension2=b.layerInfo.dimension2);b.resourceInfo?(this.version=b.resourceInfo.version,b.resourceInfo.getTileUrl&&(this._url=this.tileUrl=b.resourceInfo.getTileUrl),this.copyright=b.resourceInfo.copyright,this.layerInfos=b.resourceInfo.layerInfos,this.customParameters=b.resourceInfo.customParameters||this.customParameters,this.customLayerParameters=b.resourceInfo.customLayerParameters||this.customLayerParameters,this._parseResourceInfo(),
this.loaded=!0,this.onLoad(this)):this._getCapabilities()},setActiveLayer:function(a){this.setVisibleLayer(a)},setVisibleLayer:function(a){this._setActiveLayer(a);this.refresh(!0)},setCustomParameters:function(a,b){this.customParameters=a;this.customLayerParameters=b;this.refresh(!0)},getTileUrl:function(a,b,d){a=this._levelToLevelValue[a];a=this.resourceUrls&&0<this.resourceUrls.length?this.resourceUrls[b%this.resourceUrls.length].template.replace(/\{Style\}/gi,this._style).replace(/\{TileMatrixSet\}/gi,
this._tileMatrixSetId).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,b).replace(/\{TileCol\}/gi,d).replace(/\{dimensionValue\}/gi,this._dimension).replace(/\{dimensionValue2\}/gi,this._dimension2):this.UrlTemplate.replace(/\{level\}/gi,a).replace(/\{row\}/gi,b).replace(/\{col\}/gi,d);a=this._appendCustomLayerParameters(a);a=this.addTimestampToURL(a);return F.addProxy(a)},getTileUrlTemplate:function(a){var b=a.identifier,d=a.tileMatrixSet,c=a.format,g=a.style,e=a.dimension,n=a.dimension2;b?
a=f.filter(this.layers,function(a){return a.identifier===b})[0]:(a=this.layers[0],b=this.layers[0].identifier);if(a){if(!c)c=a.formats[0];else if(!(-1===c.indexOf("image/")&&-1<f.indexOf(a.formats,c))&&(-1===c.indexOf("image/")&&(c="image/"+c),-1===f.indexOf(a.formats,c))){console.error("The layer doesn't support the format of "+c);this.onError(Error("The layer doesn't support the format of "+c));return}if(!g)g=a.styles[0];else if(-1===f.indexOf(a.styles,g)){console.error("The layer doesn't support the style of "+
g);this.onError(Error("The layer doesn't support the style of "+g));return}if(!e&&a.dimensions)e=a.dimensions[0];else if(-1===f.indexOf(a.dimensions,e)){console.error("The layer doesn't support the dimension of "+e);this.onError(Error("The layer doesn't support the dimension of "+e));return}if(!n&&a.dimensions2)n=a.dimensions2[0];else if(-1===f.indexOf(a.dimensions2,n)){console.error("The layer doesn't support the dimension of "+n);this.onError(Error("The layer doesn't support the dimension of "+
n));return}var h;if(d){if(h=f.filter(a.tileMatrixSetInfos,function(a){return a.tileMatrixSet===d})[0],!h){console.error("The tileMatrixSetId "+d+" is not supported by the layer of "+b);this.onError(Error("The tileMatrixSetId "+d+" is not supported by the layer of "+b));return}}else(h=f.filter(a.tileMatrixSetInfos,function(a){return"GoogleMapsCompatible"===a.tileMatrixSet})[0])||(h=a.tileMatrixSetInfos[0]),d=h.tileMatrixSet;return this._getTileUrlTemplate(b,d,c,g,e,n)}console.error("couldn't find the layer "+
b);this.onError(Error("couldn't find the layer "+b))},_getTileUrlTemplate:function(a,b,c,k,g,f){var d;a||(a=this._identifier);b||(b=this._tileMatrixSetId);c||(c=this.format);k||""===k||(k=this._style);if(this.resourceUrls&&0<this.resourceUrls.length)return d=this.resourceUrls[0].template,d.indexOf(".xxx")===d.length-4&&(d=d.slice(0,d.length-4)),d=d.replace(/\{Style\}/gi,k),d=d.replace(/\{TileMatrixSet\}/gi,b),d=d.replace(/\{TileMatrix\}/gi,"{level}"),d=d.replace(/\{TileRow\}/gi,"{row}"),d=d.replace(/\{TileCol\}/gi,
"{col}"),d=d.replace(/\{dimensionValue\}/gi,g),d=d.replace(/\{dimensionValue2\}/gi,f);"KVP"===this.serviceMode?d=this._url+"SERVICE\x3dWMTS\x26VERSION\x3d"+this.version+"\x26REQUEST\x3dGetTile\x26LAYER\x3d"+a+"\x26STYLE\x3d"+k+"\x26FORMAT\x3d"+c+"\x26TILEMATRIXSET\x3d"+b+"\x26TILEMATRIX\x3d{level}\x26TILEROW\x3d{row}\x26TILECOL\x3d{col}":"RESTful"===this.serviceMode&&(g="",this._formatDictionary[c.toLowerCase()]&&(g=this._formatDictionary[c.toLowerCase()]),d=this._url+a+"/"+k+"/"+b+"/{level}/{row}/{col}"+
g);return d},_parseResourceInfo:function(){var a=this.layerInfos,b,d;"KVP"===this.serviceMode&&(this._url+=-1<this._url.indexOf("?")?"":"?");for(d=0;d<a.length;d++)if(!(this._identifier&&a[d].identifier!==this._identifier||this.title&&a[d].title!==this.title||this._tileMatrixSetId&&a[d].tileMatrixSet!==this._tileMatrixSetId||this.format&&"image/"+a[d].format!==this.format||this._style&&a[d].style!==this._style)){h.mixin(this,{description:a[d].description,tileInfo:a[d].tileInfo,spatialReference:a[d].tileInfo.spatialReference,
fullExtent:a[d].fullExtent,initialExtent:a[d].initialExtent,_identifier:a[d].identifier,_tileMatrixSetId:a[d].tileMatrixSet,format:"image/"+a[d].format,_style:a[d].style});break}for(d=0;d<a.length;d++)b=a[d].tileInfo,96!==b.dpi&&(f.forEach(b.lods,function(a){a.scale=96*a.scale/b.dpi}),b.dpi=96),f.forEach(b.lods,function(c){c.resolution=this._getResolution(b.spatialReference.wkid,90.71428571428571*c.scale/96,a[d].tileMatrixSet)},this);this._setActiveLayer();this.UrlTemplate=this._getTileUrlTemplate();
this._levelToLevelValue=[];f.forEach(this.tileInfo.lods,function(a){this._levelToLevelValue[a.level]=a.levelValue?a.levelValue:a.level},this)},_getCapabilities:function(){var a;"KVP"===this.serviceMode?a=-1<this._url.indexOf("?")?this._url+"\x26request\x3dGetCapabilities\x26service\x3dWMTS\x26version\x3d"+this.version:this._url+"?request\x3dGetCapabilities\x26service\x3dWMTS\x26version\x3d"+this.version:"RESTful"===this.serviceMode&&(a=this._url+"/"+this.version+"/WMTSCapabilities.xml");a=this._appendCustomParameters(a);
E({url:a,handleAs:"text",load:this._parseCapabilities,error:this._getCapabilitiesError})},_parseCapabilities:function(a){a=a.replace(/ows:/gi,"");a=y.parse(a);var b=c.query("Contents",a)[0];if(b){var d=c.query("OperationsMetadata",a)[0],k=c.query("[name\x3d'GetTile']",d)[0],d=this._url,k=c.query("Get",k),g,e=!1,n,h;for(g=0;g<k.length;g++){var x=c.query("Constraint",k[g])[0];if(!x||this._getTagWithChildTagValue("AllowedValues","Value",this.serviceMode,x)){d=k[g].attributes[0].nodeValue;e=!0;break}else if(!x||
this._getTagWithChildTagValue("AllowedValues","Value","RESTful",x))n=k[g].attributes[0].nodeValue;else if(!x||this._getTagWithChildTagValue("AllowedValues","Value","KVP",x))h=k[g].attributes[0].nodeValue}e||("KVP"===this.serviceMode&&n?(d=n,this.serviceMode="RESTful"):"RESTful"===this.serviceMode&&h&&(d=h,this.serviceMode="KVP"));-1===d.indexOf("/1.0.0/")&&"RESTful"===this.serviceMode&&(d+="/");"KVP"===this.serviceMode&&(d+=-1<d.indexOf("?")?"":"?");this._url=d;this.copyright=this._getTagValues("Capabilities\x3eServiceIdentification\x3eAccessConstraints",
a)[0];n=c.query("Layer",b);var p,q=[];this.layers=[];f.forEach(n,function(a){p=this._getTagValues("Identifier",a)[0];q.push(p);this.layers.push(this._getWMTSLayerInfo(p,a,b))},this);this._setActiveLayer();this.loaded=!0;this.onLoad(this)}else console.error("The WMTS capabilities XML is not valid"),this.onError(Error("The WMTS capabilities XML is not valid"))},_setActiveLayer:function(a){a||(a={});a.identifier&&(this._identifier=a.identifier);a.tileMatrixSet&&(this._tileMatrixSetId=a.tileMatrixSet);
a.format&&(this.format=a.format);a.style&&(this._style=a.style);a.dimension&&(this._dimension=a.dimension);a.dimension2&&(this._dimension2=a.dimension2);if(this.layers)if(this._identifier?a=f.filter(this.layers,function(a){return a.identifier===this._identifier},this)[0]:(a=this.layers[0],this._identifier=this.layers[0].identifier),a){if(this.format){if(-1===this.format.indexOf("image/")&&(this.format="image/"+this.format),-1===f.indexOf(a.formats,this.format)){console.error("The layer doesn't support the format of "+
this.format);this.onError(Error("The layer doesn't support the format of "+this.format));return}}else this.format=a.formats[0],-1===this.format.indexOf("image/")&&(this.format="image/"+this.format);if(!this._style)this._style=a.styles[0];else if(-1===f.indexOf(a.styles,this._style)){console.error("The layer doesn't support the style of "+this._style);this.onError(Error("The layer doesn't support the style of "+this._style));return}if(!this._dimension&&a.dimensions)this._dimension=a.dimensions[0];
else if(-1===f.indexOf(a.dimensions,this._dimension)){console.error("The layer doesn't support the dimension of "+this._dimension);this.onError(Error("The layer doesn't support the dimension of "+this._dimension));return}if(!this._dimension2&&a.dimensions2)this._dimension2=a.dimensions2[0];else if(-1===f.indexOf(a.dimensions2,this._dimension2)){console.error("The layer doesn't support the dimension of "+this._dimension2);this.onError(Error("The layer doesn't support the dimension of "+this._dimension2));
return}var b;if(this._tileMatrixSetId){if(b=f.filter(a.tileMatrixSetInfos,function(a){return a.tileMatrixSet===this._tileMatrixSetId},this)[0],!b){console.error("The tileMatrixSetId "+this._tileMatrixSetId+" is not supported by the layer of "+this._identifier);this.onError(Error("The tileMatrixSetId "+this._tileMatrixSetId+" is not supported by the layer of "+this._identifier));return}}else(b=f.filter(a.tileMatrixSetInfos,function(a){return"GoogleMapsCompatible"===a.tileMatrixSet})[0])||(b=a.tileMatrixSetInfos[0]),
this._tileMatrixSetId=b.tileMatrixSet;this.description=a.description;this.title=a.title;this.spatialReference=b.tileInfo.spatialReference;this.tileInfo=b.tileInfo;this._levelToLevelValue=[];f.forEach(this.tileInfo.lods,function(a){this._levelToLevelValue[a.level]=a.levelValue?a.levelValue:a.level},this);102100===this.spatialReference.wkid||102113===this.spatialReference.wkid?this.fullExtent=this.initialExtent=G.geographicToWebMercator(a.gcsExtent):4326===this.spatialReference.wkid?this.fullExtent=
this.initialExtent=a.gcsExtent:(this.fullExtent=b.fullExtent,this.initialExtent=b.initialExtent);this.resourceUrls=a.resourceUrls;this.UrlTemplate=this._getTileUrlTemplate();this.layerInfo={identifier:this._identifier,tileMatrixSet:this._tileMatrixSetId,format:this.format,style:this._style,fullExtent:this.fullExtent,initialExtent:this.initialExtent,tileInfo:this.tileInfo,title:this.title,description:this.description}}else console.error("couldn't find the layer "+this._identifier),this.onError(Error("couldn't find the layer "+
this._identifier))},_getWMTSLayerInfo:function(a,b,d){var k=this._getTagValues("Abstract",b)[0],g=this._getTagValues("Title",b)[0],e=c.query("WGS84BoundingBox",b)[0],n=e?this._getTagValues("LowerCorner",e)[0].split(" "):["-180","-90"],h=e?this._getTagValues("UpperCorner",e)[0].split(" "):["180","90"],e=parseFloat(n[0]),n=parseFloat(n[1]),x=parseFloat(h[0]),h=parseFloat(h[1]),e=new C(e,n,x,h,new A({wkid:4326})),h=this._getTagValues("Identifier",c.query("Style",b)[0]),p=this._getTagValues("Identifier",
c.query("Dimension",b)[0]),q=this._getTagValues("Default",c.query("Dimension",b)[0])||this._getTagValues("Value",c.query("Dimension",b)[0]),l=1<c.query("Dimension",b).length?this._getTagValues("Identifier",c.query("Dimension",b)[1]):[],t=1<c.query("Dimension",b).length?this._getTagValues("Default",c.query("Dimension",b)[1])||this._getTagValues("Value",c.query("Dimension",b)[1]):[],n=this._getTagValues("Format",b);d=this._getLayerMatrixInfos(b,d);a={identifier:a,tileMatrixSetInfos:d,formats:n,styles:h,
title:g,description:k,gcsExtent:e,dimensions:q,dimensions2:t};b=c.query("ResourceURL",b);var r=[],m;f.forEach(b,function(a){m=a.getAttribute("template");if(p&&q&&p[0]&&q[0])if(-1<m.indexOf("{"+p+"}"))m=m.replace("{"+p+"}","{dimensionValue}");else{var b=m.toLowerCase().indexOf("{"+p[0].toLowerCase()+"}");-1<b&&(m=m.substring(0,b)+"{dimensionValue}"+m.substring(b+p[0].length+2))}l&&t&&l[0]&&t[0]&&(-1<m.indexOf("{"+l+"}")?m=m.replace("{"+l+"}","{dimensionValue2}"):(b=m.toLowerCase().indexOf("{"+l[0].toLowerCase()+
"}"),-1<b&&(m=m.substring(0,b)+"{dimensionValue2}"+m.substring(b+l[0].length+2))));r.push({template:m,format:a.getAttribute("format"),resourceType:a.getAttribute("resourceType")})});r&&0<r.length&&(a.resourceUrls=r);return a},_getLayerMatrixInfos:function(a,b){var c,k=[];this._allMatrixInfos||(this._allMatrixInfos=[]);var g=this._getTagValues("TileMatrixSet",a);if(g&&0!==g.length)return f.forEach(g,function(d){var g;if(0<this._allMatrixInfos.length)for(c=0;c<this._allMatrixInfos.length;c++)if(this._allMatrixInfos[c].tileMatrixSet==
d){g=this._allMatrixInfos[c];break}g||(g=this._getLayerMatrixInfo(d,a,b),this._allMatrixInfos.push(g));k.push(g)},this),k},_getLayerMatrixInfo:function(a,b,d){var k,g,e,f,h=[];b=this._getTagWithChildTagValue("TileMatrixSetLink","TileMatrixSet",a,b);var l=this._getTagValues("TileMatrix",b),p=this._getTagWithChildTagValue("TileMatrixSet","Identifier",a,d),q=this._getTagValues("SupportedCRS",p)[0];k=parseInt(q.split(":").pop(),10);if(900913==k||3857==k)k=102100;if(-1<q.toLowerCase().indexOf("crs84")||
-1<q.toLowerCase().indexOf("crs:84"))k=4326,f=!0;else if(-1<q.toLowerCase().indexOf("crs83")||-1<q.toLowerCase().indexOf("crs:83"))k=4269,f=!0;else if(-1<q.toLowerCase().indexOf("crs27")||-1<q.toLowerCase().indexOf("crs:27"))k=4267,f=!0;var w=new A({wkid:k}),t=c.query("TileMatrix",p)[0];d=parseInt(this._getTagValues("TileWidth",t)[0],10);b=parseInt(this._getTagValues("TileHeight",t)[0],10);g=this._getTagValues("TopLeftCorner",t)[0].split(" ");var r=g[0],m=g[1];1<r.split("E").length&&(g=r.split("E"),
r=g[0]*Math.pow(10,g[1]));1<m.split("E").length&&(g=m.split("E"),m=g[0]*Math.pow(10,g[1]));var r=parseFloat(r),m=parseFloat(m),y=f&&4326===k&&90===r&&-180===m;for(g=0;g<this._flippingAxisForWkids.length;g++)if(q.split(":").pop()>=this._flippingAxisForWkids[g][0]&&q.split(":").pop()<=this._flippingAxisForWkids[g][1]||4326===k&&(!f||y)){4326===k&&90<r&&(r="90");e=new B(m,r,w);break}g===this._flippingAxisForWkids.length&&(e=new B(r,m,w));if(0===l.length)for(l=c.query("TileMatrix",p),g=0;g<l.length;g++)f=
this._getLodFromTileMatrix(l[g],k,g,a),h.push(f);else for(g=0;g<l.length;g++)f=this._getTagWithChildTagValue("TileMatrix","Identifier",l[g],p),f=this._getLodFromTileMatrix(f,k,g,a),h.push(f);k=c.query("BoundingBox",p)[0];var u,v;k&&(u=this._getTagValues("LowerCorner",k)[0].split(" "),v=this._getTagValues("UpperCorner",k)[0].split(" "));u&&1<u.length&&v&&1<v.length?(t=parseFloat(u[0]),k=parseFloat(u[1]),u=parseFloat(v[0]),v=parseFloat(v[1])):(u=this._getTagValues("MatrixWidth",t)[0],k=this._getTagValues("MatrixHeight",
t)[0],t=e.x,v=e.y,u=t+u*b*h[0].resolution,k=v-k*d*h[0].resolution);v=u=new C(t,k,u,v,w);e=new I({dpi:96,spatialReference:w,format:this.format,rows:d,cols:b,origin:e,lods:h});return{tileMatrixSet:a,fullExtent:v,initialExtent:u,tileInfo:e}},_getCapabilitiesError:function(a){console.error("Failed to get capabilities xml");this.onError(a)},_getLodFromTileMatrix:function(a,b,c,e){var d=this._getTagValues("Identifier",a)[0];a=this._getTagValues("ScaleDenominator",a)[0];1<a.split("E").length?(a=a.split("E"),
a=a[0]*Math.pow(10,a[1])):a=parseFloat(a);b=this._getResolution(b,a,e);return{level:c,levelValue:d,scale:1.058267716535433*a,resolution:b}},_getResolution:function(a,b,c){a=w.isDefined(z[a])?z.values[z[a]]:"default028mm"===c?6370997*Math.PI/180:6378137*Math.PI/180;return 7*b/25E3/a},_getTag:function(a,b){return(a=c.query(a,b))&&0<a.length?a[0]:null},_getTagValues:function(a,b){var d=[];a=a.split("\x3e");var e;e=c.query(a[0],b)[0];if(1<a.length){for(b=1;b<a.length-1;b++)e=c.query(a[b],e)[0];b=c.query(a[a.length-
1],e)}else b=c.query(a[0],b);b&&0<b.length&&f.forEach(b,function(a){9>l("ie")?d.push(a.childNodes.length?a.childNodes[0].nodeValue:""):d.push(a.textContent)});return d},_getAttributeValues:function(a,b,d){a=c.query(a,d);var e=[];a&&0<a.length&&f.forEach(a,function(a){e.push(a.getAttribute(b))});return e},_getTagWithChildTagValue:function(a,b,d,e){e=e.childNodes;var f,h;for(h=0;h<e.length;h++)if(-1<e[h].nodeName.indexOf(a)&&(9>l("ie")?w.isDefined(c.query(b,e[h])[0])&&(f=c.query(b,e[h])[0].childNodes[0].nodeValue):
w.isDefined(c.query(b,e[h])[0])&&(f=c.query(b,e[h])[0].textContent),f===d||d.split(":")&&f===d.split(":")[1]))return e[h]},_appendCustomParameters:function(a){var b;if(this.customParameters)for(b in this.customParameters)a+=(-1===a.indexOf("?")?"?":"\x26")+b+"\x3d"+encodeURIComponent(this.customParameters[b]);return a},_appendCustomLayerParameters:function(a){var b,c;if(this.customLayerParameters||this.customParameters)for(b in c=h.clone(this.customParameters||{}),h.mixin(c,this.customLayerParameters||
{}),c)a+=(-1===a.indexOf("?")?"?":"\x26")+b+"\x3d"+encodeURIComponent(c[b]);return a},_flippingAxisForWkids:[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],
[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],
[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],
[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]]});l("extend-esri")&&h.setObject("layers.WMTSLayer",e,D);return e});