// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var t=function(g,l){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var g in n)n.hasOwnProperty(g)&&(l[g]=n[g])};return t(g,l)};return function(g,l){function u(){this.constructor=g}t(g,l);g.prototype=null===l?Object.create(l):(u.prototype=l.prototype,new u)}}();
define("esri/arcade/featureset/sources/FeatureSetRelated","require exports ../../../graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../polyfill/promiseUtils ../../../tasks/RelationshipQuery".split(" "),function(t,g,l,u,n,v,m,w){return function(g){function b(a){var c=g.call(this,a)||this;c.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";c._findObjectId=-1;c._requestStandardised=!1;c._removeGeometry=!1;c._overrideFields=null;c.featureObjectId=null;c.relatedLayer=
null;c.relationship=null;a.spatialReference&&(c.spatialReference=a.spatialReference);c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;c._findObjectId=a.objectId;c.featureObjectId=a.objectId;c.relationship=a.relationship;c.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&(c._removeGeometry=!1===a.includeGeometry);return c}__extends(b,g);b.prototype._maxQueryRate=function(){return v.defaultMaxRecords};b.prototype.end=function(){return this._layer};
b.prototype.optimisePagingFeatureQueries=function(a){};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=m.create(function(c,h){m.all([a._layer.load(),a.relatedLayer.load()]).then(function(){a._initialiseFeatureSet();c(a)},h)}));return this._loadPromise};b.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};b.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);
this.geometryType=this.relatedLayer.geometryType;this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var a=[],c=[],h=0,f=this.fields;h<f.length;h++){var b=f[h];if("oid"===b.type)a.push(b),c.push(b.name);else for(var d=0,e=this._overrideFields;d<e.length;d++)if(e[d].toLowerCase()===b.name.toLowerCase()){a.push(b);c.push(b.name);break}}this.fields=a;this._overrideFields=c}if(a=
this._layer.nativeCapabilities())this._databaseType=a.databaseType,this._requestStandardised=a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};b.prototype.databaseType=function(){var a=this;return this.relatedLayer.databaseType().then(function(){a._databaseType=a.relatedLayer._databaseType;return a._databaseType})};b.prototype.isTable=
function(){return this.relatedLayer.isTable()};b.prototype._isInFeatureSet=function(a){return v.IdState.InFeatureSet};b.prototype._transformSetWithIdChanges=function(a){};b.prototype._candidateIdTransform=function(a){return a};b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):m.resolve(this._wset)};b.prototype._changeFeature=function(a){for(var c={},b=0,f=this.fields;b<
f.length;b++){var p=f[b];c[p.name]=a.attributes[p.name]}return new l({geometry:!0===this._removeGeometry?null:a.geometry,attributes:c})};b.prototype._getFilteredSet=function(a,c,b,f,p){var d=this;return this.databaseType().then(function(e){if(d.isTable()&&c&&null!==a&&""!==a)return e=new n([],[],!0,null);e=d._layer.nativeCapabilities();if(!1===e.canQueryRelated)return e=new n([],[],!0,null);if(e.capabilities.queryRelated&&e.capabilities.queryRelated.supportsPagination)return d._getFilteredSetUsingPaging(a,
c,b,f,p);var h="",q=!1;null!==f&&e.capabilities&&e.capabilities.queryRelated&&!0===e.capabilities.queryRelated.supportsOrderBy&&(h=f.constructClause(),q=!0);var k=new w;k.objectIds=[d._findObjectId];var g=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]);k.outFields=g;k.relationshipId=d.relationship.id;k.definitionExpression="1\x3d1";g=!0;!0===d._removeGeometry&&(g=!1);k.returnGeometry=g;d._requestStandardised&&
(k.sqlFormat="standard");k.outSpatialReference=d.spatialReference;k.orderByFields=""!==h?h.split(","):null;return e.source.queryRelatedFeatures(k).then(function(e){d._checkCancelled(p);var h=e[d._findObjectId]?e[d._findObjectId].features:[];e=[];for(var f=0;f<h.length;f++)d._featureCache[h[f].attributes[d._layer.objectIdField]]=h[f],e.push(h[f].attributes[d._layer.objectIdField]);h=c&&null!==a&&""!==a;f=null!==b&&void 0!==b;return new n(h||f?e:[],h||f?[]:e,q,null)})})};b.prototype._fieldsIncludingObjectId=
function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var c=!1,b=0;b<a.length;b++)if(a[b].toUpperCase()===this.objectIdField.toUpperCase()){c=!0;break}!1===c&&a.push(this.objectIdField);return a};b.prototype._getFilteredSetUsingPaging=function(a,c,b,f,g){var d=this;try{var e="",h=!1,q=this._layer.nativeCapabilities();null!==f&&q&&q.capabilities.queryRelated&&!0===q.capabilities.queryRelated.supportsOrderBy&&(e=f.constructClause(),h=!0);return this.databaseType().then(function(f){f=
d._maxQueryRate();var k=q.capabilities.query.maxRecordCount;void 0!==k&&k<f&&(f=k);var k=c&&null!==a&&""!==a,p=null!==b&&void 0!==b,r=null,l=!0;!0===d._removeGeometry&&(l=!1);var m=null!==d._overrideFields?d._overrideFields:d._fieldsIncludingObjectId(d.relatedLayer.fields?d.relatedLayer.fields.map(function(a){return a.name}):["*"]),r=new n(k||p?["GETPAGES"]:[],k||p?[]:["GETPAGES"],h,{outFields:m.join(","),resultRecordCount:f,resultOffset:0,objectIds:[d._findObjectId],where:"1\x3d1",orderByFields:e,
returnGeometry:l,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});return d._expandPagedSet(r,f,0,0,g).then(function(){return r})})}catch(k){return m.reject(k)}};b.prototype._expandPagedSet=function(a,c,b,f,g){return this._expandPagedSetFeatureSet(a,c,b,f,g)};b.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,
orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};b.prototype._getPhysicalPage=function(a,c,b){var f=this;try{var h=a.pagesDefinition.internal.lastRetrieved,d=this._layer.nativeCapabilities(),e=new w;!0===this._requestStandardised&&(e.sqlFormat="standard");e.relationshipId=this.relationship.id;e.objectIds=a.pagesDefinition.objectIds;e.resultOffset=a.pagesDefinition.internal.lastRetrieved;e.resultRecordCount=a.pagesDefinition.resultRecordCount;e.outFields=a.pagesDefinition.outFields.split(",");e.definitionExpression=a.pagesDefinition.where;
e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return d.source.queryRelatedFeatures(e).then(function(c){f._checkCancelled(b);if(a.pagesDefinition.internal.lastRetrieved!==h)return 0;for(var e=c[f._findObjectId]?c[f._findObjectId].features:[],d=0;d<e.length;d++)a.pagesDefinition.internal.set[h+d]=e[d].attributes[f._layer.objectIdField];for(d=0;d<e.length;d++)f._featureCache[e[d].attributes[f._layer.objectIdField]]=
e[d];c=c[f._findObjectId]?!1===c[f._findObjectId].exceededTransferLimit:!0;e.length!==a.pagesDefinition.resultRecordCount&&c&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=h+e.length;return e.length})}catch(r){return m.reject(r)}};b.prototype._getFeatures=function(a,c,b,f){var h=this,d=[];-1!==c&&void 0===this._featureCache[c]&&d.push(c);var e=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,e))return this._expandPagedSet(a,e,0,0,f).then(function(d){return h._getFeatures(a,
c,b,f)});for(var e=0,g=a._lastFetchedIndex;g<a._known.length;g++){e++;e<=b&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[g]&&void 0===this._featureCache[a._known[g]]&&(a._known[g]!==c&&d.push(a._known[g]),d.length>b))break;if(e>=b&&0===d.length)break}return 0===d.length?m.resolve("success"):m.reject(Error("Unaccounted for Features. Not in Feature Collection"))};b.prototype._refineSetBlock=function(a,c,b){return m.resolve(a)};b.prototype._stat=function(a,c,b,f,g,d,e){return m.resolve({calculated:!1})};
b.prototype._canDoAggregates=function(a,c,b,f,g){return m.resolve(!1)};b.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};b.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()};b.prototype.queryAttachments=function(a,c,b,f){return this.relatedLayer.queryAttachments(a,c,b,f)};b.prototype.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};return b}(u)});