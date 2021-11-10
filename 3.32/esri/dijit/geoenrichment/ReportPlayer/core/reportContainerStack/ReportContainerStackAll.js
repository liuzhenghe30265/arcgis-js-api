// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ReportContainerStackAll.html":'\x3cdiv class\x3d"esriGEReportPlayer_reportContainerStackAll"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"waitingNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"emptyPlaceholder" class\x3d"reportContainerStackAll_emptyPlaceholder"\x3e${nls.infographicEmpty}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fillerContainer" class\x3d"reportContainerStackAll_zoomFillerContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"scalableContainer" class\x3d"reportContainerStackAll_zoomScalableContainer"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"groupLabelsContainerFiller" class\x3d"reportContainerStackAll_groupLabelsContainerFiller"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"innerContainersDiv" class\x3d"reportContainerStackAll_innerContainersDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"groupLabelsContainer" class\x3d"reportContainerStackAll_groupLabelsContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStackAll","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when dojo/on dojo/query dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin ./_ScrollSupport ./_ZoomSupport ./_HiddenContentSupport ./utils/MobileGesturesUtil ./utils/ComparisonSectionProcessor ../supportClasses/DocumentOptions ./supportClasses/BenchmarkController ./supportClasses/AreaToolbarBuilder ../../dataProvider/supportClasses/areas/AnalysisAreaUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/WaitingUtil esri/dijit/geoenrichment/utils/async/AsyncQueue dojo/text!../templates/ReportContainerStackAll.html dojo/i18n!esri/nls/jsapi".split(" "),
function(m,h,n,p,q,f,r,t,u,v,w,x,y,z,A,B,C,k,D,E,d,F,G,H,I,l){l=l.geoenrichment.dijit.ReportPlayer.ReportContainerStackAll;var e={_reportID:null,_settings:null,_globalSettings:{},getSettings:function(a){a=a.dynamicReportInfo.reportObject;this._reportID===a.reportID&&this._settings||(this._settings=h.mixin({},this._globalSettings),this._settings.scale=a.defaultComparisonZoom?Number(a.defaultComparisonZoom):void 0);this._reportID=a.reportID;return h.clone(this._settings)},saveSettings:function(a,b){this._reportID=
a.dynamicReportInfo.reportObject.reportID;this._settings=b;this._globalSettings.splitPanels=!!b.splitPanels;this._globalSettings.hideBackgroundImage=!!b.hideBackgroundImage},_benchmarkIndex:0,getBenchmarkIndex:function(){return this._benchmarkIndex},saveBenchmarkIndex:function(a){this._benchmarkIndex=a}};return m([u,v,w,x,y],{templateString:I,nls:l,isReportContainerStackAll:!0,viewModel:null,theme:null,parentWidget:null,renderOptions:null,documentOptions:null,_reportContainers:null,_pendingJsons:null,
_benchmarkController:null,_hiddenAreas:null,postCreate:function(){var a=this;this.inherited(arguments);this.renderOptions=h.mixin({center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},this.renderOptions);this.documentOptions={};this._reportContainers={};this._pendingJsons=[];this._hiddenAreas={};this._benchmarkController=new C({areaIndex:e.getBenchmarkIndex(),onChanged:function(){e.saveBenchmarkIndex(a._benchmarkController.getAreaIndex());a._updateInnerContainers({keepZoom:!0})}});this.own(this._benchmarkController);
this.viewModel.registerBenchmarkController(this._benchmarkController);d.hide(this.waitingNode);this._updateEmptyState();E.isMobileDevice()&&z.enableMobileGestures(this);q(this.domNode,"scroll",function(){a._updateLabelsPosition()})},resize:function(a,b){this.domNode.style.width=a?a+"px":"auto";this.domNode.style.height=b?b+"px":"auto"},setMaxWidth:function(a){this.domNode.style.maxWidth=a+"px"},setMaxHeight:function(a){this.domNode.style.maxHeight=a+"px"},_maxPanelWidth:null,getCurrentPageDim:function(){return{w:this._maxPanelWidth,
h:1E6}},_calcMaxPanelSize:function(){this._maxPanelWidth=0;var a=this.getInnerContainers({noHidden:!0});a.length&&(a.forEach(function(a){this._maxPanelWidth+=a.getCurrentPageDim().w},this),this._maxPanelWidth+=30*(a.length-1))},notifyShown:function(){this._isFromJSONBeingCollectedFlag||this._isFromJSONBeingAppliedFlag||(this._pendingJsons.length?this._canApplyJson()&&(this._fromJSONFinal(),this.onPendingDataApplied()):this.getInnerContainers().forEach(function(a){a.notifyShown()}))},_isFromJSONBeingCollectedFlag:!1,
_isFromJSONBeingAppliedFlag:!1,fromJson:function(a,b){this._isFromJSONBeingCollectedFlag=!b.isFinalArea;a._index=b.analysisAreaIndex;this._pendingJsons.push(a);return b.isFinalArea&&this._canApplyJson()&&this._fromJSONFinal()},_canApplyJson:function(){return d.isNodeInLayout(this.domNode)},_fromJSONFinal:function(){var a=this;this._isFromJSONBeingAppliedFlag=!0;this._pendingJsons.sort(function(a,c){return a._index-c._index});return H.executeFunctions(this._pendingJsons.map(function(b){return function(){a._createInnerContainer(b,
b._index)}}),100).then(function(){a._pendingJsons.length=0;return a._refresh().then(function(){a._isFromJSONBeingAppliedFlag=!1})})},_createInnerContainer:function(a,b){var c=t.create("div",{"class":"innerContainerRoot"},this.innerContainersDiv),g=this.viewModel.layoutBuilder.createElement("reportContainerStack",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:b,isVertical:!0,isScalable:!1,canShowEmptyState:!1,sectionJsonsProcessor:A.getProcessor(this),hideBackgroundImage:this.getComparisonSettings().hideBackgroundImage},
c);g.__root=c;this._reportContainers[b]=g;a=g.fromJson(a);this._refresh();return a},_isBeingUpdatedPromise:!1,_pendingUpdateParams:null,_updateInnerContainers:function(a){a=a||{};var b=this;if(this._isBeingUpdatedPromise)return this._pendingUpdateParams=a,this._isBeingUpdatedPromise;this._pendingUpdateParams=null;return this._isBeingUpdatedPromise=this._showWaiting(n(this.getInnerContainers().map(function(b){return b.refresh(a)})).then(function(){b._doRefresh({keepZoom:a.keepZoom})}).then(function(){a.rebuildStack&&
d.isNodeInLayout(b.domNode)&&b.notifyShown();b._isBeingUpdatedPromise=null;if(b._pendingUpdateParams)return b._updateInnerContainers(b._pendingUpdateParams);b.emitZoomChangedEvent()}))},_refresh:function(){this.domNode.style.opacity="0.001";return F.invoke(this,"_doRefresh").then(function(){this.domNode.style.opacity=""}.bind(this))},_doRefresh:function(a){a=a||{};this.getInnerContainers().forEach(function(a){a.__root.parentNode===this.innerContainersDiv&&this.innerContainersDiv.removeChild(a.__root)},
this);this.getInnerContainers({noHidden:!0}).forEach(function(a,c){this.innerContainersDiv.appendChild(a.__root)},this);this._calcMaxPanelSize();this._updateEmptyState();this._updateGroupLabels();!a.keepZoom&&this.setBestZoom();this._syncFillerContainer();this._syncBenchmarkForVisibleAreas()},_updateGroupLabels:function(){var a=this;this.groupLabelsContainer.innerHTML="";var b=D.groupAreas({analysisAreas:this.viewModel.dynamicReportInfo.analysisAreas,combinedAreasInfo:this.viewModel.dynamicReportInfo.combinedAreasInfo,
filter:function(b){return!a._hiddenAreas[b.index]}});k.sanitize(a);b.groupInfos.forEach(function(c){k.buildGroupToolbar(c,{reportContainer:a,elementSize:a.getInnerContainers()[0].getCurrentPageDim().w,groupLabelsContainer:a.groupLabelsContainer,gap:30,showGroupLabels:!b.isOnlyAreasInOnlyGroup,numVisibleAreas:a.getVisibleAreas().length,benchmarkController:a._benchmarkController,onRemoveArea:function(b){a._benchmarkController.getAreaIndex()===b.index&&a._benchmarkController.setAreaIndex(-1);var c={};
c[b.index]=!1;a.setAreasVisibilityState(c,{append:!0,canSwitchToSingleView:!0})}})});this._updateLabelsPosition()},_updateEmptyState:function(){var a=this.getInnerContainers({noHidden:!0}),a=!a.length||a.some(function(a){return a.isEmpty()});d[a?"show":"hide"](this.emptyPlaceholder);d[a?"hide":"show"](this.groupLabelsContainer);this.fillerContainer.style.opacity=a?"0.001":""},_syncFillerContainer:function(){this.inherited(arguments);this._updateLabelsPosition();this.documentOptions={pagesize:B.combineCustomSizeString(this.scalableContainer.clientWidth,
this.scalableContainer.clientHeight,"px"),orientation:"landscape",left:10,right:10,top:0,bottom:0}},_updateLabelsPosition:function(){this.groupLabelsContainer.style.top=this.domNode.scrollTop+"px";this.groupLabelsContainer.style.display="none";this.groupLabelsContainer.style.width=this.domNode.scrollWidth-26+"px";this.groupLabelsContainer.style.display="";f(".innerContainerRoot_groupLabelContainer",this.groupLabelsContainer).forEach(function(a){a._unscaledWidth=a._unscaledWidth||a.clientWidth;a.style.width=
a._unscaledWidth*this.getZoomInfo().scale+"px"},this);f(".innerContainerRoot_areaLabelContainer",this.groupLabelsContainer).forEach(function(a){a._unscaledWidth=a._unscaledWidth||a.clientWidth;a.style.width=a._unscaledWidth*this.getZoomInfo().scale+"px";r[a.clientWidth<a.children[0].children[0].clientWidth+150?"add":"remove"](a,"isCompactView")},this);this.groupLabelsContainerFiller.style.height=this.groupLabelsContainer.clientHeight/this.getZoomInfo().scale+"px"},getAreasVisibilityState:function(){var a=
{};this.viewModel.dynamicReportInfo.analysisAreas.forEach(function(b){a[b.index]=!b.hidden&&!this._hiddenAreas[b.index]},this);return a},setAreasVisibilityState:function(a,b){function c(){return g.viewModel.dynamicReportInfo.analysisAreas.map(function(a){return!a.hidden&&!g._hiddenAreas[a.index]})}b=b||{};var g=this,d=c();a=a||{};var e={},f;for(f in a)e[f]=!a[f];b.append?h.mixin(this._hiddenAreas,e):this._hiddenAreas=e;this._doRefresh();c().forEach(function(a,b){a&&a!==d[b]&&g._reportContainers[b].refresh()});
if(b.canSwitchToSingleView&&1>=this.getInnerContainers({noHidden:!0}).length)this.onSwitchToSingleAreaView();else this._syncBenchmarkForVisibleAreas()},_syncBenchmarkForVisibleAreas:function(){var a=1<this.getVisibleAreas().length;!(0<=this._benchmarkController.getAreaIndex())||this.getAreasVisibilityState()[this._benchmarkController.getAreaIndex()]&&a||this._benchmarkController.setAreaIndex(-1)},getComparisonSettings:function(){return e.getSettings(this.viewModel)},setComparisonSettings:function(a){var b=
h.mixin({splitPanels:!1},this.getComparisonSettings());e.saveSettings(this.viewModel,a);this._benchmarkController.setNoTextLimit(a.splitPanels);return this._updateInnerContainers({rebuildStack:!0,hideBackgroundImage:this.getComparisonSettings().hideBackgroundImage,keepZoom:b.splitPanels===a.splitPanels})},getInnerContainers:function(a){var b=a&&a.noHidden;a=Object.keys(this._reportContainers);a.sort();var c=[];a.forEach(function(a){b&&this._hiddenAreas[a]||c.push(this._reportContainers[a])},this);
return c},getSections:function(){var a=[];this.getInnerContainers().forEach(function(b){a=a.concat(b.infographicPage.getSections())});return a},_sectionToInfographicPage:function(a){var b;this.getInnerContainers().some(function(c){if(-1!==c.infographicPage.getSections().indexOf(a))return b=c.infographicPage,!0});return b},getNumberOfPages:function(){return 1},getVisibleAreas:function(){return this.viewModel.dynamicReportInfo.analysisAreas.filter(function(a){return!a.hidden&&!this._hiddenAreas[a.index]},
this)},getVisualState:function(){return{type:"reportContainerStackAll",comparisonSettings:this.getComparisonSettings(),hiddenAreas:h.clone(this._hiddenAreas),innerContainers:this.getInnerContainers().map(function(a){return a.getVisualState()}),benchmarkAreaIndex:this._benchmarkController.getAreaIndex()}},setVisualState:function(a){var b=this;if(a&&a.innerContainers)return this._hiddenAreas=a.hiddenAreas||{},this._benchmarkController.setAreaIndex(a.benchmarkAreaIndex),p(this.setComparisonSettings(a.comparisonSettings),
function(){var c=b.getInnerContainers();a.innerContainers.forEach(function(a,b){c[b]&&c[b].setVisualState(a)})})},_isPrinted:!1,setPrinted:function(a){a=(this._isPrinted=a)?this.viewModel.getDocumentDefaultStyles().color:"";this.groupLabelsContainer.style.color=a;for(var b=f(".innerContainerRoot_groupLabelUnderline",this.domNode),c=0;c<b.length;c++)b[c].style.borderLeftColor=a,b[c].style.borderTopColor=a,b[c].style.borderRightColor=a},_showWaiting:function(a){var b=this;this.fillerContainer.style.opacity=
"0.001";this.groupLabelsContainer.style.opacity="0.001";this.waitingNode.style.position="absolute";this.waitingNode.style.height=this.domNode.clientHeight+"px";this.waitingNode.style.width=this.domNode.clientWidth+"px";this.waitingNode.style.left=this.domNode.scrollLeft+"px";this.waitingNode.style.top=this.domNode.scrollTop+"px";d.show(this.waitingNode);return G.showProgressPromise(this.waitingNode,a,{progressClass:"esriGEReportPlayerProgress"}).then(function(){d.hide(b.waitingNode);b.fillerContainer.style.opacity=
"";b.groupLabelsContainer.style.opacity=""})},onPendingDataApplied:function(){},onSwitchToSingleAreaView:function(){},destroy:function(){k.sanitize(this);this.getInnerContainers().forEach(function(a){a.destroy()});this._reportContainers=null;this.inherited(arguments)}})});