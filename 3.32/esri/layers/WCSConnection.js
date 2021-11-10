// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/WCSConnection","dojo/_base/declare dojo/_base/lang dojo/io-query dojo/has dojo/_base/Deferred dojo/DeferredList ../deferredUtils ../request ../kernel ./WCSCapabilities ./WCSCoverageDescription".split(" "),function(f,e,r,t,k,u,y,p,v,w,x){var q=function(b,c,d){var a;if(d)for(a=0;a<b.length;a++){if(b[a][d].toLowerCase()===c.toLowerCase())return b[a]}else for(a=0;a<b.length;a++)if(b[a].toLowerCase()===c.toLowerCase())return b[a]};f=f(null,{declaredClass:"esri.layers.WCSConnection",
url:null,supportedVersions:["1.0.0","1.1.0","1.1.1","2.0.1"],version:null,name:null,onlineResources:null,coverages:null,supportedFormats:null,profiles:null,supportedInterpolations:null,onConnected:null,constructor:function(b,c){if(b){var d=b.indexOf("?");-1<d&&d<=b.length-1?(this.optionalParameters=r.queryToObject(b.substring(d+1,b.length)),this.url=b.substring(0,d+1)):this.url=b}this.optionalParameters=this.optionalParameters||{};c&&e.mixin(this.optionalParameters,c);this.optionalParameters.version&&
(this.version=this.optionalParameters.version);var a=this.optionalParameters;Object.keys(a).forEach(function(b){a[b]||delete a[b]});this.connect=e.hitch(this,this.connect);this.url&&this.connect(this.version)},_getCapabilities:function(b){var c=new k,d=e.mixin({},this.optionalParameters);if(b)var a={version:b,AcceptVersions:b};var g=["service","request","coverageId","coverage","identifier"];Object.keys(d).forEach(function(a){g.some(function(b){return b.toLowerCase()===a.toLowerCase()})&&delete d[a]});
p({url:this.url,content:e.mixin({request:"GetCapabilities",service:"WCS"},d,a),handleAs:"xml"}).then(e.hitch(this,function(a){a=new w(a);c.resolve(a)}),function(a){c.reject(a)});return c.promise},_getCapabilitiesHelper:function(b){if(b)b=this._getCapabilities(b);else{var c=new k;b=c.promise;this._getCapabilities().then(e.hitch(this,function(b){!this.version&&-1<this.url.toLowerCase().indexOf("wcsserver")?1===b.supportedVersions.length&&"2.0.1"===b.supportedVersions[0]?this._getCapabilities().then(e.hitch(this,
function(a){c.resolve(a)}),e.hitch(this,function(a){c.reject(a)})):c.resolve(b):c.resolve(b)}),e.hitch(this,function(b){c.reject(b)}))}return b},_describeCoverage:function(){var b=new k,c=this.coverageId||this.optionalParameters.coverage||this.optionalParameters.coverageId||this.optionalParameters.identifiers||this.coverages.map(function(a){return a.id}).join(","),d=this.version,a={request:"DescribeCoverage",service:"WCS",version:d};switch(d){case "1.0.0":a=e.mixin(a,{coverage:c});break;case "1.1.0":case "1.1.1":case "1.1.2":a=
e.mixin(a,{identifiers:c});break;case "2.0.1":a=e.mixin(a,{coverageId:c})}var g=e.mixin({},this.optionalParameters),h=["service","request"];Object.keys(g).forEach(function(a){h.some(function(b){return b.toLowerCase()===a.toLowerCase()})&&delete g[a]});var f=p({url:this._onlineResources?this._onlineResources.describeCoverage:this.url,content:e.mixin(a,g),handleAs:"xml"});"2.0.1"===d&&(d=c,-1<c.indexOf(",")?d=c.split(",").map(function(a){return 0===a.toLowerCase().indexOf("coverage")?a.slice(8):a}).join(","):
0===c.toLowerCase().indexOf("coverage")&&(d=c.slice(8)),c=p({url:this._onlineResources?this._onlineResources.describeCoverage:this.url,content:e.mixin(a,g,{identifiers:d,version:"1.1.1"}),handleAs:"xml"}),f=new u([f,c]));f.then(e.hitch(this,function(a){var c;if("2.0.1"===this.version){if(c=a[0][0]&&a[0][1]?this._parseCoverageDescriptions(a[0][1],this.version):null,(a=a[1][0]&&a[1][1]?this._parseCoverageDescriptions(a[1][1],"1.1.1"):null)&&a.length){var d,e,g,f,h,k,l,m,n;for(l=0;l<c.length;l++)if(d=
c[l].multidimensionalInfo,e=a[l].multidimensionalInfo,d&&e)for(n=0;n<d.variables.length;n++)if(g=d.variables[n],f=q(e.variables,g.name,"name"))for(m=0;m<g.dimensions.length;m++)if(h=g.dimensions[m],k=q(f.dimensions,h.name,"name"))h.values=h.values||k.values,h.values&&(h.hasRegularIntervals=!1)}}else c=this._parseCoverageDescriptions(a,this.version);b.resolve(c)}),function(a){b.reject(a)});return b.promise},_parseCoverageDescriptions:function(b,c){var d,a=[];b="1.0.0"===c?b.getElementsByTagNameNS("*",
"CoverageOffering"):b.getElementsByTagNameNS("*","CoverageDescription");for(d=0;d<b.length;d++)a.push(new x(b[d],c));return a},connect:function(b){var c=new k(function(){return"cancelled"});this._connectPromise&&this._connectPromise.cancel();this.version=(b=b||this.version)||this.version;var d=function(a){c.reject(a);this._connectPromise=null;if(this.onConnectionFailed)this.onConnectionFailed(a)};this._getCapabilitiesHelper(b).then(e.hitch(this,function(a){if(!c.isCanceled()){this.supportedInterpolations=
a.supportedInterpolations;this.supportedVersions=a.supportedVersions;-1<this.url.toLowerCase().indexOf("wcsserver")?("2.0.1"===this.supportedVersions[0]&&1===this.supportedVersions.length&&(this.supportedVersions=["1.0.0","1.1.0","1.1.1","2.0.1"]),this.version=this.version||a.version||this.supportedVersions.reduce(function(a,b){return a>b?a:b})):this.version=this.version||"1.0.0";this.name=this.name||a.name;this.version=this.version||a.version;this.onlineResources=this.onlineResources||a.onlineResources;
this.coverages=this.coverages||a.coverages;if(void 0===this.coverages||null===this.coverages||0===this.coverages.length)throw"No valid coverages";this.supportedFormats=this.supportedFormats||a.supportedFormats;this.profiles=this.profiles||a.profiles;this._describeCoverage().then(e.hitch(this,function(a){if(!c.isCanceled())if(a){if(a.forEach(e.hitch(this,function(a){a.lonLatEnvelope=q(this.coverages,a.id,"id").lonLatEnvelope||a.lonLatEnvelope})),this.coverages=a,c.resolve(this),this._connectPromise=
null,this.onConnected)this.onConnected()}else d("cannot parse coverage descriptions")}),d)}}),d);return this._connectPromise=c.promise}});t("extend-esri")&&e.setObject("layers.WCSConnection",f,v);return f});