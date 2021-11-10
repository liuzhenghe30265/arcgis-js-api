// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ReportContainer.html":'\x3cdiv class\x3d"esriGEReportPlayer_reportContainer esriGENonSelectable"\x3e\r\n    \x3cdiv\x3e\r\n        \x3cdiv class\x3d"horizontalRulerContainer" data-dojo-attach-point\x3d"horizontalRulerContainer"\x3e\r\n            \x3cdiv class\x3d"horizontalRuler" data-dojo-attach-point\x3d"horizontalRuler"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"mainContainer" class\x3d"reportContainer_mainContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"stackContainer" class\x3d"reportContainer_stackContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/dom-class dojo/dom-geometry dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin ../grid/valueField/ValueField ./utils/QueryUtil ./utils/SerializationManager ../supportClasses/DocumentOptions esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes dojo/text!../templates/ReportContainer.html".split(" "),
function(q,l,e,h,r,c,t,u,v,w,x,m,n,p,g,y){return q([t,u],{templateString:y,isReportContainer:!0,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,documentOptions:null,_sampleWatermarkDiv:null,queryUtil:w,serializationManager:null,postCreate:function(){this.inherited(arguments);this.serializationManager=(new this._getSerializationManagerClass)(this);this.updateLayout();this.setViewMode(g.PREVIEW_VALUES)},_getSerializationManagerClass:function(){return x},_sectionWidth:0,setDocumentOptions:function(a){this.documentOptions&&
l.mixin(this.documentOptions,a);this.updateLayout()},updateLayout:function(){if(this.documentOptions){this._sectionWidth=m.getPageBox(this.documentOptions).contentW;this._updateContainerSize();c.set(this.stackContainer,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px"});var a=this;this.getReportElements("setWidth").forEach(function(b){a.getElementSection(b).setWidth(a._getSectionWidth(),
{resizeContentToFit:!0,preserveRightOffset:!0});a.updateReportElement(b)})}},resizeReportElementContentToFitPageWidth:function(a){var b=a&&this.getElementSection(a);b&&b.setWidth(this._getSectionWidth(),{resizeContentToFit:!0,forceResize:!0});this.updateReportElement(a)},getCurrentPageDim:function(){return m.getPageBox(this.documentOptions)},_updateContainerSize:function(){c.set(this.stackContainer,"width",this._sectionWidth+(this._viewMode===g.EDIT?145:0)+"px");c.set(this.mainContainer,"height",
c.get(this.domNode,"height")+(this._viewMode===g.EDIT?-17:0)+"px")},_getSectionWidth:function(){return this._sectionWidth},resize:function(a,b){void 0!==a&&c.set(this.domNode,{width:a+"px",height:b+"px"});this._updateContainerSize()},getCanvasOffsets:function(){var a=c.get(this.domNode,"width"),b=c.get(this.stackContainer,"width")+r.getPadBorderExtents(this.stackContainer).w;return{l:Math.max(15,this.stackContainer.offsetLeft),r:Math.max(10,a-(this.stackContainer.offsetLeft+b))}},getFullWidth:function(){return Math.max(this.stackContainer.scrollWidth,
c.get(this.stackContainer,"width"))},getFullHeight:function(){return Math.max(this.stackContainer.scrollHeight,c.get(this.stackContainer,"height"))},addSection:function(a,b,d,c,f){var e=this._createSectionCell(a);this._createSection(a,b,e);a=this._createReportElement(a,e,d,c,b&&b.json,f);this.updateReportElement(a);return a},_createSection:function(a,b,d){b=b||{};b["class"]="reportContainer_Section";b.initialWidth=this._getSectionWidth();b.initialHeight="empty"===a?b.isSmallSize?100:200:void 0;b.viewModel=
this.viewModel;b.theme=this.theme;b.parentWidget=this;b.hasFixedLayout=!0;b.viewPortContainer=this.getScrollableContainer();b.currentFeatureIndex=this.currentFeatureIndex;b.initialViewMode=this._viewMode;"empty"===a?a=this.viewModel.layoutBuilder.createElement("emptySection",b,d.getContentContainerNode()):(a=this.viewModel.layoutBuilder.createElement("section",b,d.getContentContainerNode()),(b=this.documentOptions.backgroundColor||this.viewModel.getDocumentDefaultStyles(this.theme).backgroundColor)&&
c.set(a.domNode,"backgroundColor",b));d.setContent(a);return a},_getSectionCellClass:function(){return v},_getSectionCellParams:function(){return null},_createSectionCell:function(a){return(new this._getSectionCellClass)(l.mixin({sectionId:a,"class":"reportContainerCell"},this._getSectionCellParams()))},_createReportElement:function(a,b,d,c,f,g){f=e.create("div",{"class":"reportElement"});var k=this._getCellSection(b);a=f._fcPar={isReportElement:!0,sectionId:a,isEmpty:"empty"===a,cell:b,section:k,
coverElement:null,reportElementContent:e.create("div",{"class":"reportElementContent"},f)};e.place(f,d?d:this.stackContainer,d?c:void 0);this._createAdditionalElementsForReportElement(f);e.place(b.domNode,a.reportElementContent);this.isEmptyElement(d)&&!1!==g&&(this._removeSection(d),this._tryProvidingSmallEmpty(f));k.notifyShown&&k.notifyShown();return f},_createAdditionalElementsForReportElement:function(a){},updateReportElement:function(a){var b=this.getElementParams(a);this._sectionToSectionCell(b.cell);
this._sectionCellToSection(b.cell);this._updateChildrenViewMode(a)},_sectionCellToSection:function(a){this._getCellSection(a).setHeight(a.getHeight())},_sectionToSectionCell:function(a){var b=this._getCellSection(a);a.setWidth(b.getWidth());a.setMinHeight(b.hasTablesThatFitHeight()?20:b.getHeight());a.setHeight(b.getResizedHeight())},_tryProvidingSmallEmpty:function(a){var b=this;this.getReportElements().filter(function(a){return b.isEmptyElement(a)}).length||this.addSection(p.EMPTY,{isSmallSize:!0},
a,"after")},getElementHeight:function(a){return this.getElementCell(a).getHeight()},setElementHeight:function(a,b){var d=this.getElementCell(a);d.setHeight(b);this._sectionCellToSection(d);this.updateReportElement(a)},getElementParams:function(a,b){a=a&&a._fcPar;return b?a&&a[b]:a},getElementSection:function(a){return this.getElementParams(a,"section")},getElementSectionAt:function(a){return(a=this.getReportElements()[a])&&this.getElementSection(a)},getSectionPositionInfo:function(a){return this.queryUtil.getSectionPositionInfo(this,
a)},getElementCell:function(a){return this.getElementParams(a,"cell")},isEmptyElement:function(a){return!!this.getElementParams(a,"isEmpty")},isReportElement:function(a){return this.getElementParams(a)},_getCellSection:function(a){return a.content},scrollToElement:function(a){if(a)return this._animateScrolling(a.offsetTop-this.domNode.clientHeight/5)},_animateScrolling:function(a){this.getScrollableContainer().scrollTop=a},getScrollableContainer:function(){return this.mainContainer},getReportElements:function(a){return this.queryUtil.getReportElements(this,
a)},clear:function(a){var b=this;this.getReportElements().forEach(function(d){b._removeSection(d,!0===a)})},_removeSection:function(a,b){var d=this.getElementSection(a),c=this.getElementCell(a);a&&c&&(d&&d.destroy(),c.destroy(),delete a._fcPar,e.destroy(a),0===this.getReportElements().length&&!1!==b&&this.addSection(p.EMPTY))},removeSection:function(a){this._removeSection(a)},removeSectionAtIndex:function(a){this._removeSection(this.getReportElements()[a])},moveSection:function(a,b,d){if((a=this.getReportElements()[a])&&
a.parentNode){a.parentNode.removeChild(a);var c=this.getReportElements();c.length===b?e.place(a,c[c.length-1],"after"):e.place(a,this.getReportElements()[b],d)}},setHeight:function(a){c.set(this.mainContainer,"height",a+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._memoInViewElementsInfo(),a===g.EDIT?(h.add(this.domNode,"reportContainerEditMode"),h.remove(this.domNode,"reportContainerPreviewMode")):(h.remove(this.domNode,
"reportContainerEditMode"),h.add(this.domNode,"reportContainerPreviewMode")),a!==g.PREVIEW_VALUES||this.viewModel.dynamicReportInfo?n.hide(this._sampleWatermarkDiv):(this._sampleWatermarkDiv||(this._sampleWatermarkDiv=e.create("div",{"class":"sampleValuesWatermark"},this.stackContainer,"first")),n.show(this._sampleWatermarkDiv)),this._updateContainerSize(),this._updateChildrenViewMode(),this._adjustScrollForNewViewMode())},_updateChildrenViewMode:function(a){},_inViewElementsInfo:null,_memoInViewElementsInfo:function(){this._inViewElementsInfo=
null;if(!(1E3>this.mainContainer.scrollTop)){var a;this.getReportElements().some(function(b){if(b.offsetTop>this.mainContainer.scrollTop)return a=b,!0},this);a&&(this._inViewElementsInfo={scrollTop:this.mainContainer.scrollTop,offsetTop:a.offsetTop,elementInView:a})}},_adjustScrollForNewViewMode:function(){this._inViewElementsInfo&&(this.mainContainer.scrollTop+=this._inViewElementsInfo.elementInView.offsetTop-this.mainContainer.scrollTop-(this._inViewElementsInfo.offsetTop-this._inViewElementsInfo.scrollTop))},
notifyShown:function(){this.serializationManager.notifyShown()},fromJson:function(a){this.serializationManager.fromJson(a)},toJson:function(a){return this.serializationManager.toJson(a)},onPendingDataApplied:function(){},destroy:function(){this.clear();this.serializationManager=this.queryUtil=this.documentOptions=this.parentWidget=this.theme=this.viewModel=null;this.inherited(arguments)}})});