// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/utils/QueryUtil",["esri/dijit/geoenrichment/utils/ArrayUtil"],function(g){var e={getReportElements:function(a,b){for(var c=[],d=0;d<a.stackContainer.children.length;d++){var e=a.stackContainer.children[d];a.getElementParams(e,"isReportElement")&&c.push(e)}return b?c.filter(function(c){return(c=a.getElementSection(c))&&!!c[b]}):c},findLastContentElementBeforeFooter:function(a){var b;e.getReportElements(a).forEach(function(c){var d=
a.getElementSection(c);!d||d.isEmpty()||d.isPageFooter()||(b=c)});return b},getElementIndex:function(a,b){return e.getReportElements(a).indexOf(b)},getReportElementBySectionIndex:function(a,b){return e.getReportElements(a)[b]},getElementAfter:function(a,b){return e._getElementShift(a,b,1)},getElementBefore:function(a,b){return e._getElementShift(a,b,-1)},_getElementShift:function(a,b,c){a=e.getReportElements(a);b=a.indexOf(b);return-1===b?null:a[b+c]},getSectionPositionInfo:function(a,b){var c=0,
d;e.getReportElements(a).some(function(e){if(a.getElementSection(e)===b)return d=e,!0;c++});return{reportElement:d,index:d?c:-1}},getSectionsByType:function(a,b){var c=[];e.getReportElements(a,"getSectionType").forEach(function(d){(d=a.getElementSection(d))&&d.getSectionType()===b&&c.push(d)});return c},getSectionsByTypes:function(a,b){var c=[];b.forEach(function(b){c=c.concat(e.getSectionsByType(a,b))});return g.removeDuplicates(c)},getReportElementTable:function(a,b){return(a=a.getElementSection(b))&&
a.getLastTable&&a.getLastTable()},getReportElementByTable:function(a,b){var c;e.getReportElements(a).some(function(d){if(e.getReportElementTable(a,d)===b)return c=d,!0});return c},getTableAbove:function(a,b){var c,d;e.getReportElements(a).some(function(f){if(e.getReportElementTable(a,f)===b)return d=e.getReportElementTable(a,c),!0;c=f});return d}};return e});