// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/BlankTemplateJsonUtil",["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","./TemplateJsonModificationUtil"],function(e,f){return{createBlankTemplate:function(a){var d={},b=a.documentOptions||e.getDefaultDocumentOptionsGraphicReport();b.pagesize=e.combineCustomSizeString(b.left+b.right+a.layout.numColumns*a.elementWidth,b.top+b.bottom+a.layout.numRows*a.elementHeight,"px");d.documentOptions=
b;for(var b={style:{width:a.layout.numColumns*a.elementWidth},data:{columns:[],data:[]}},c=0;c<a.layout.numColumns;c++)b.data.columns.push({field:"field"+c,style:{width:a.elementWidth}});for(c=0;c<a.layout.numRows;c++)b.data.data.push({style:{height:a.elementHeight},fieldInfos:{}});d.sectionsTables=[b];f.adjustDocumentOptions(d);return d}}});