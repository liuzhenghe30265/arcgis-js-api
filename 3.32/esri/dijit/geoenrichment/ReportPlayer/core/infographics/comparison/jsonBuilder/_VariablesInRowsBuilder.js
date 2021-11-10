// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/jsonBuilder/_VariablesInRowsBuilder",["dojo/_base/lang","./_Util","../../../sections/SectionTypes"],function(e,q,v){function r(a,c,g,w){var d=e.clone(g);d.field+="_"+w;c.push(d);a.style.width+=d.style.width;a.data.data.forEach(function(a,c){a.style.fields[d.field]=e.clone(a.style.fields[g.field]);(c=a.fieldInfos[g.field])&&(a.fieldInfos[d.field]=e.clone(c))});return d}return{buildForVariablesInRows:function(a,c,g){var e=c.thisAreas,
d=c.shownGeographiesInGroup,h=[],x=c.groups,l=[],m=[],t=[],n=[],f=[];a.data.columns.forEach(function(c,b){0<b&&delete a.data.data[0][c.field]});f.push(a.data.columns.shift());for(var y=a.data.columns.length-g.numLevels,p=[],u=0;u<y;u++)p.push(a.data.columns.shift());e.forEach(function(c,b){if(c){var d=p[b%p.length];h.push(c);0===b?(f.push(d),d.currentFeatureIndex=b):r(a,f,d,"thisArea"+b).currentFeatureIndex=b}});a.data.columns.forEach(function(c,b){if(b=d[b]){h.push(b);n.push(b);b=b.StdGeographyLevel;
var e=g.additionalColumnsCache[b],k=x[b];l.push(k);f.push(c);e&&e.forEach(function(b){var d=k.cache[b];d&&(h.push(d.attributes),n.push(d.attributes),l.push({label:k.label,levelId:k.levelId,isRemovable:!0,additionalFeatureId:b,features:[d]}),r(a,f,c,b))})}});a.data.columns=f;if(1===f.length)return null;a.data.columns.forEach(function(c,b){if(0===b){var d=a.data.columns[1];a.data.data.forEach(function(a,b){if(0!==b){m.push({label:a[c.field],points:[]});var e=a.fieldInfos[d.field];t.push({label:a[c.field],
name:e.name,decimals:e.decimals,formatFunction:function(a){return q.valueFormatFunction(a,e)}})}})}else{var e=h[b-1];c.__attributes=e;a.data.data.forEach(function(a,b){0!==b&&m[b-1].points.push({label:e.StdGeographyName,value:q.setValueToGridData(e,a,c.field)})})}});return{sectionJson:{type:v.DETAILS,stack:[a]},groups:l,chartSeriesItems:m,fields:t,ranges:c.ranges,numThisAreas:c.numThisAreas,numAreasTotal:c.numAreasTotal,numAreasShown:c.numAreasShown,geographiesInTable:n,allGeographies:c.allGeographies}}}});