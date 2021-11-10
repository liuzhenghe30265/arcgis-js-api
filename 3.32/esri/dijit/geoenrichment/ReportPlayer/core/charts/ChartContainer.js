// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ChartContainer.html":'\x3cdiv class\x3d"esriGEReportPlayer_chartContainer esriGENonSelectable"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"chartLabel" class\x3d"chartContainer_chartLabel TrimWithEllipses"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"noDataPlaceHolder" class\x3d"esriGENoDataPlaceHolder"\x3e\r\n        \x3cdiv class\x3d"esriGENoDataPlaceHolderLabel"\x3e${nls.noChartData}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"chartNormalViewDiv"\x3e\r\n        \x3cdiv class\x3d"chartContainer_chartContainerWithAxis" data-dojo-attach-point\x3d"chartContainerWithAxis"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"chartContainerDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableContainerDiv"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendContainerDiv" class\x3d"chartContainer_legendContainer"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"comparisonSelectBlock" class\x3d"chartContainer_comparisonSelectBlock"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"comparisonLabel" class\x3d"chartContainer_comparisonLabel"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"comparisonSelectDiv" class\x3d"chartContainer_comparisonSelectDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"errorDiv" class\x3d"esriGEReportPlayerPanelErrorMessage"\x3e${nls.chartLoadError}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"missingVariablesDiv" class\x3d"chartContainer_missingVariablesMessage"\x3e${nls.chartContainerMissingVariables}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/ChartContainer","require dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred dojo/dom-class dojo/dom-construct dojo/dom-style esri/dijit/geoenrichment/when dijit/_WidgetBase dijit/_TemplatedMixin ./_ChartLegendSupport ./_ChartEventSupport ./_ChartComparisonSupport ./utils/ChartTypes ./utils/ChartSorting ./utils/ChartJsonUtil ./utils/builder/ChartPlots ./utils/ChartFilterUtil esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/WaitingUtil ../sections/dynamicSettings/supportClasses/FilterUtil dojo/text!../templates/ChartContainer.html dojo/i18n!esri/nls/jsapi ../../_devConfig".split(" "),
function(F,t,h,u,m,v,f,c,G,H,I,J,K,g,L,M,k,w,N,e,O,P,Q,R,S,n,q){function T(){if(a)return a.promise;var a=new u;F("dojox/charting/Chart dojox/charting/action2d/Magnify ./utils/action2d/Highlight ./utils/builder/ChartBuilder ./utils/ChartCalculator ./utils/ChartStyleUtil ./tooltips/ChartTooltip ./iconRendering/IconRenderer ./textRendering/TextRenderer ./tableViewRendering/TableViewRenderer".split(" "),function(b,d,c,e,f,g,h,k,m,n){x=b;y=d;z=c;l=e;p=f;A=g;B=h;r=k;C=m;D=n;E=t(x,{_renderPlotBackground:function(a,
b,d,c){this.theme.plotarea.backgroundImageData?this.surface.createImage({src:this.theme.plotarea.backgroundImageData,x:b.l-1,y:b.t-1,width:d+2,height:c+2}):this.inherited(arguments)}});a.resolve()});return a.promise}n=n.geoenrichment.dijit.ReportPlayer.ChartContainer;var E,x,y,z,l,p,A,B,r,C,D;return t([G,H,I,J,K],{templateString:S,nls:n,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,immediateRender:!1,chartTheme:null,enableAxisLabelsAutoTilt:!1,isEditMode:!1,chart:null,_currentSeries:null,
_iconRenderer:null,_textRenderer:null,_tableViewRenderer:null,_tableViewInfo:null,_renderChartPendingFlag:!1,postCreate:function(){this.inherited(arguments);this._showError(!1);e.hide(this.missingVariablesDiv);this.viewModel.isGraphicStyle&&m.add(this.domNode,"graphicReportChart");m.add(this.domNode,this.viewModel.isLightDocumentTheme(this.theme)?"light":"dark");this._showEmptyView(!1)},_currentSeriesItems:null,_currentSeriesItemsUnfiltered:null,_originalSeriesItems:null,_currentVisualProperties:null,
_currentChartType:null,_currentComparisonInfo:null,_isMultiFeatureChart:null,_initPromise:null,_firstRenderPromise:null,_hasPresetFilter:null,updateChart:function(a){var b=this;this._destroyChart();if(a)return this._checkForMissingVariables(a),this._currentChartType=a.type,this._currentSeriesItems=(this._isMultiFeatureChart=a.isMultiFeatureChart)?M.getSeriesItemsForMultiFeatureChart(a.type,a.seriesItems,this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.fieldData.areaData):a.seriesItems,
this._originalSeriesItems=a.seriesItems&&a.seriesItems.slice(),this._currentVisualProperties=a.visualProperties,this._currentComparisonInfo=a.comparisonInfo,f.set(this.domNode,{width:this._currentVisualProperties.width+"px",height:this._currentVisualProperties.height+"px"}),this.domNode.style.backgroundColor=this._currentVisualProperties.panelBackgroundColor||"",e.hide(this.chartLabel),this._initPromise=T().then(function(){b.domNode&&(b._initChartComparisonSelect(),b._updateLabels(),b._createChart(),
b._addPlotEventListeners(),b._createLegend())}),this._firstRenderPromise=c(this._initPromise,function(){var a=b._currentVisualProperties.filter;b._hasPresetFilter=!!a;return!a||a.ranges&&!b.viewModel.dynamicReportInfo?b._updateSeries():c(b.getFilterRanges(),function(d){d=d.map(function(b){var d=R.filterData(b.dataArray,a);return{fieldName:b.fieldName,min:d[0],max:d[d.length-1]}});return b._setFilterRanges(d)})}),Q.showProgressPromise(this.domNode,this._initPromise)},getRenderPromise:function(){return this._firstRenderPromise},
_checkForMissingVariables:function(a){var b=a.seriesItems.some(function(a){return a.points.some(function(a){return a.fieldInfo&&a.fieldInfo.isMissing})});e[b?"show":"hide"](this.missingVariablesDiv);b&&(this.missingVariablesDiv.style.top=(a.visualProperties.height-this.missingVariablesDiv.clientHeight)/2+"px")},isMultiFeatureChart:function(){return this._isMultiFeatureChart},getLegendNode:function(){return this.legendContainerDiv},getChartSeries:function(){return this._currentSeries},_updateLabels:function(){this.chartLabel.innerHTML=
this._currentVisualProperties.title.text;e[this.chartLabel.innerHTML?"show":"hide"](this.chartLabel);this.chartLabel.style.textAlign=this._currentVisualProperties.title.align;this.chartLabel.style.marginTop=(this._currentVisualProperties.title.verticalShift||0)+"px";var a=h.mixin({},this.viewModel.getChartDefaultStyles(this.theme).titleStyle,this._currentVisualProperties.title.style);delete a.backgroundColor;f.set(this.chartLabel,A.getStyleObjWithUnits(a))},_createChart:function(){var a=v.create("div",
{"class":"chartContainerDiv_innerChartNode"},this.chartContainerDiv),b=new E(a,{margins:this._getChartMargins()});this.chart=b;b.setTheme(this.chartTheme);l.getChartBuilder(this._currentChartType).configureChart({chart:b,seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,chartType:this._currentChartType,comparisonInfo:this._currentComparisonInfo,themeSettings:this.viewModel.getChartDefaultStyles(this.theme),viewModel:this.viewModel,currentFeatureIndex:this.currentFeatureIndex});
if(this.viewModel.dynamicReportInfo||q.charts.enableEffects)this._currentChartType===g.PIE&&new y(b,k.PRIMARY,{scale:1.03}),k.getWorkingPlots(b).forEach(function(a,c){0===c||this._getComparisonChartType();new z(b,a)},this);this._setChartTooltip()},_getChartMargins:function(){function a(a){return"number"===typeof b._currentVisualProperties[a]?b._currentVisualProperties[a]:10}var b=this;return{t:a("marginTop"),r:a("marginRight"),b:a("marginBottom"),l:a("marginLeft")}},_setChartTooltip:function(){k.getWorkingPlots(this.chart).forEach(function(a,
b){b=0===b?this._currentChartType:this._getComparisonChartType();a=new B(this.chart,a,{duration:50});a.showStatistics=!!this.viewModel.dynamicReportInfo||q.charts.showStatisticsInTooltips;a.setChartType(b)},this)},_destroyChart:function(){this._levelLineBuilder&&this._levelLineBuilder.hideLevelLine();this.chartContainerDiv&&v.empty(this.chartContainerDiv);this.chart&&this.chart.destroy();this.chart=null;this._destroyLegend()},_updateSeries:function(){var a=this;this._removeSeries();if(this.chart){if(!this._currentSeriesItems)return this.resize();
this._seriesTotalStats={};this._currentSeries=l.getChartBuilder(this._currentChartType).calcSeries({chart:this.chart,chartType:this._currentChartType,isMultiFeatureChart:this._isMultiFeatureChart,viewModel:this.viewModel,themeSettings:this.viewModel.getChartDefaultStyles(this.theme),seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,currentFeatureIndex:this.currentFeatureIndex,plotStats:this._seriesTotalStats,excludedSeriesHash:this._excludedSeriesHash,sorting:this._sorting||
this._currentVisualProperties.sorting,comparisonInfo:this._currentComparisonInfo,comparisonFeatureAttributes:this._getComparisonFeatureAttributes()});var b=l.checkSeriesAreValid(this._currentSeries);this._showError(!b);var d;b&&(this._currentSeries.forEach(function(b){a._excludedSeriesHash[b.name]||a.chart.addSeries(b.name,b.data,b.params)}),d=this.resize());return c(d,function(){a.onContentUpdated()})}},_removeSeries:function(){var a=this;this._currentSeries=this._currentSeries||[];this._currentSeries.forEach(function(b){a.chart.removeSeries(b.name)});
this._currentSeries.length=0},_chartWidth:0,_chartHeight:0,_resizedFlag:!1,_resizeDfd:null,_pendingResizeObj:!1,resize:function(a,b,d){if(this._currentVisualProperties)return void 0!==a&&f.set(this.domNode,{width:a+"px",height:b+"px"}),c(this._initPromise,function(){if(e.isNodeInLayout(this.domNode))return void 0!==a&&p.resizeVisualProperties(this._currentVisualProperties,a,b),this._resizedFlag||(this.domNode.style.opacity="0"),this._resizeDfd=this._resizeDfd||new u,d||this.immediateRender?this._doResizeChart():
O.invoke(this,"_doResizeChart",50);this._pendingResizeObj={width:a,height:b,immediate:d}}.bind(this))},_doResizeChart:function(){var a=this;if(this.chart){this._resizedFlag||(this.domNode.style.opacity="1");this._resizedFlag=!0;this._updateLegend();var b=p.calcChartDimentions(this,{visualProps:this._currentVisualProperties,comparisonInfo:this._currentComparisonInfo,chartType:this._currentChartType,maxIconSize:r.AXIS_ICON_MAX_SIZE,numPoints:this._currentSeries[0]?this._currentSeries[0].data.length:
0}),d=b.w,b=b.h;if(this.enableAxisLabelsAutoTilt&&this.viewModel.isGraphicStyle&&g.hasAxis(this._currentChartType)&&!g.isXAxisVertical(this._currentChartType)){var c=p.calcAxisLabelsAutoTilt(d,this._currentSeries,this._currentVisualProperties,this.viewModel.getChartDefaultStyles(this.theme));this.chart.getAxis("x").opt.rotation=c?-c:-this._currentVisualProperties.xAxis.labelsAngle}this._chartWidth=d;this._chartHeight=b;this._adjustErrorMessage();if(this._tableViewInfo)this._refreshTableView(),this._renderChartPendingFlag=
!0;else{try{this.chart&&(this.chart.isPreRenderMode=g.isColumnBarLike(this._currentChartType),this.chart.resize(this._chartWidth,this._chartHeight),this.chart.dirty&&this.chart.render(),g.isColumnBarLike(this._currentChartType)&&(l.getChartBuilder(this._currentChartType).updateBarSize({chart:this.chart,chartType:this._currentChartType,isMultiFeatureChart:this._isMultiFeatureChart,currentFeatureIndex:this.currentFeatureIndex,viewModel:this.viewModel,seriesItems:this._currentSeriesItems,visualProperties:this._currentVisualProperties,
chartSize:this.chart.plotArea[g.isColumnLike(this._currentChartType)?"width":"height"],excludedSeriesHash:this._excludedSeriesHash,comparisonInfo:this._currentComparisonInfo,numComparisonFeatures:this._getNumComparisonFeatures()}),l.getChartBuilder(this._currentChartType).prettifyColumnBarYAxis({totalStat:this._seriesTotalStats,chart:this.chart,chartType:this._currentChartType,chartSeries:this._currentSeries,themeSettings:this.viewModel.getChartDefaultStyles(this.theme),visualProperties:this._currentVisualProperties,
chartSize:this.chart.plotArea[g.isColumnLike(this._currentChartType)?"height":"width"],viewModel:this.viewModel})),this.chart.isPreRenderMode=!1,this.chart.dirty&&this.chart.render())}catch(U){console.log(U)}return N.delay(function(){a._updateLegend();a._updateIcons();a._updateTexts();a._resizeDfd&&a._resizeDfd.resolve();a._resizeDfd=null;a.onRendered()})}}},notifyShown:function(){var a=this;return c(this._initPromise,function(){e.isNodeInLayout(a.domNode)&&c(a._pendingResizeObj&&a.resize(a._pendingResizeObj.width,
a._pendingResizeObj.height,a._pendingResizeObj.immediate),function(){a._pendingResizeObj=null;a.viewModel.isAnimationAllowed()&&k.getWorkingPlots(a.chart).forEach(function(b,c){a.chart.getPlot(b).renderAnimation&&a.chart.getPlot(b).renderAnimation()})})})},onRendered:function(){},_getIconRendererClass:function(){return r},_updateIcons:function(){this._iconRenderer||(this._iconRenderer=(new this._getIconRendererClass)(),this.own(this._iconRenderer),this._iconRenderer.setViewMode(this._viewMode));this._iconRenderer.renderIcons({viewModel:this.viewModel,
theme:this.theme,parentWidget:this,chartType:this._currentChartType,iconNode:this.chartContainerWithAxis,chartW:this._chartWidth,chartH:this._chartHeight,visualProperties:this._currentVisualProperties,comparisonInfo:this._currentComparisonInfo,chart:this.chart})},_getTextRendererClass:function(){return C},_updateTexts:function(){this._textRenderer||(this._textRenderer=(new this._getTextRendererClass)(),this._textRenderer.currentFeatureIndex=this.currentFeatureIndex,this.own(this._textRenderer),this._textRenderer.setViewMode(this._viewMode));
this._textRenderer.renderTexts({viewModel:this.viewModel,theme:this.theme,parentWidget:this,textNode:this.chartContainerWithAxis,chartW:this._chartWidth,chartH:this._chartHeight,visualProperties:this._currentVisualProperties,chart:this.chart})},_viewMode:null,setViewMode:function(a){if(this._viewMode!==a)return this._viewMode=a,c(this._initPromise,function(){this._iconRenderer&&this._iconRenderer.setViewMode(a);this._textRenderer&&this._textRenderer.setViewMode(a);this._tableViewRenderer&&this._tableViewRenderer.setViewMode(a)}.bind(this))},
_showError:function(a){q.emulateErrors.contentErrors&&(a=!0);e[a?"show":"hide"](this.errorDiv);e[a?"hide":"show"](this.chartNormalViewDiv)},_adjustErrorMessage:function(){this.errorDiv.style.paddingTop=f.get(this.domNode,"height")/2-20+"px"},_sorting:null,getSorting:function(){return this._sorting},sortChart:function(a){this._sorting=a&&a!==L.NONE?a:null;return c(this._initPromise,function(){this._updateSeries()}.bind(this))},_filterStats:null,_numShownElements:null,_filterRanges:null,canFilterAreas:function(){return this._isMultiFeatureChart&&
!!this._getGeoenrichment()},canFilterVariables:function(){return g.canFilterVariables(this._currentChartType,this._isMultiFeatureChart)},getFilterRanges:function(){return this.canFilterAreas()||this.canFilterVariables()?c(this._initPromise,function(){this.canFilterAreas()?this._filterStats=this._getGeoenrichment().collectFilterRangesStats():this._filterStats=w.collectStatsForVariables(this._currentChartType,this._currentSeriesItemsUnfiltered||this._currentSeriesItems,this._currentVisualProperties,
this.viewModel,this.currentFeatureIndex);return this._filterStats.filterRanges}.bind(this)):this._filterStats=null},setFilterRanges:function(a){this._hasPresetFilter=!1;return this._setFilterRanges(a)},_setFilterRanges:function(a){this._filterRanges=a;return c(this._initPromise,function(){this._currentSeriesItemsUnfiltered&&(this._currentSeriesItems=this._currentSeriesItemsUnfiltered,this._currentSeriesItemsUnfiltered=null);this._currentSeriesItemsUnfiltered=this._currentSeriesItems;var b=w.filterSeriesItems(this._currentChartType,
this._currentSeriesItems,this._currentVisualProperties,a,this.viewModel,this.currentFeatureIndex,this.canFilterAreas());this._currentSeriesItems=b.seriesItems;this._numShownElements=b.numShownElements;var c;this.canFilterAreas()&&this._setFilterRangesForComparison(a)?this._numShownElements+=this._getGeoenrichment().getAllGeographyAttributes().length:c=this._updateSeries();this._showEmptyView(!this._numShownElements);return c}.bind(this))},getNumElementsTotal:function(){return this._filterStats&&(this.canFilterAreas()?
this._filterStats.numAreasTotal:this._filterStats.numVariablesTotal)||0},getNumElementsShown:function(){return"number"===typeof this._numShownElements?this._numShownElements:this.getNumElementsTotal()},_showEmptyView:function(a){e[a?"hide":"show"](this.chartNormalViewDiv);e[a?"show":"hide"](this.noDataPlaceHolder);a&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&f.set(this.noDataPlaceHolder,"paddingTop",(f.get(this.domNode,"height")-f.get(this.noDataPlaceHolder,
"height"))/2+"px")},chartToTable:function(a){return c(this._initPromise,function(){this._removeTable();this._setIsTableView(a);e.hide([this.chartContainerDiv,this.legendContainerDiv]);for(var b=0;b<this.chartContainerWithAxis.children.length;b++){var c=this.chartContainerWithAxis.children[b];c!==this.tableContainerDiv&&e.hide(c)}this._tableViewRenderer||(this._tableViewRenderer=new D,this.own(this._tableViewRenderer),this._tableViewRenderer.setViewMode(this._viewMode));return this._refreshTableView(!0)}.bind(this))},
_refreshTableView:function(a){return this._tableViewRenderer.renderTableForChart({chartType:this._currentChartType,isMultiFeatureChart:this._isMultiFeatureChart,viewModel:this.viewModel,theme:this.theme,parentWidget:this,tableNode:this.tableContainerDiv,width:f.get(this.domNode,"width"),height:this._chartHeight,chartSeries:this._currentSeries,visualProperties:this._currentVisualProperties,hasComparison:!!this._currentComparisonInfo,chart:this.chart,showAnimation:a,tableViewInfo:this._tableViewInfo})},
tableToChart:function(){if(this._tableViewInfo)return c(this._initPromise,function(){this._removeTable();if(this._renderChartPendingFlag)return this._renderChartPendingFlag=!1,c(this.resize(),this.notifyShown.bind(this));this.notifyShown()}.bind(this))},_removeTable:function(){this._setIsTableView(null);e.show([this.chartContainerDiv,this.legendContainerDiv]);for(var a=0;a<this.chartContainerWithAxis.children.length;a++)e.show(this.chartContainerWithAxis.children[a]);this._tableViewRenderer&&this._tableViewRenderer.destroyTable()},
_setIsTableView:function(a){this._tableViewInfo=a;m[this._tableViewInfo?"add":"remove"](this.domNode,"isChartDataInTableView");this._updateComparisonLabel()},getVisualState:function(){return{type:"chart",sorting:this.getSorting(),hasPresetFilter:this._hasPresetFilter,filterRanges:this._filterRanges&&h.clone(this._filterRanges),comparisonAttributes:this._comparisonAttributes,additionalAttributes:this._additionalAttributes&&this._additionalAttributes.slice(),tableViewInfo:this._tableViewInfo&&h.clone(this._tableViewInfo),
tableViewRenderer:this._tableViewRenderer&&this._tableViewRenderer.getVisualState(),excludedSeriesHash:this._excludedSeriesHash&&h.clone(this._excludedSeriesHash)}},setVisualState:function(a){if(a){this._excludedSeriesHash=a.excludedSeriesHash;var b=this;return c(this._initPromise,function(){return c(b._resizeDfd&&b._resizeDfd.promise,function(){return c(a.sorting&&b.sortChart(a.sorting),function(){return c(a.filterRanges&&b.setFilterRanges(a.filterRanges),function(){a.additionalAttributes&&(b._additionalAttributes=
a.additionalAttributes);return c(a.comparisonAttributes&&b._setComparisonAttributes(a.comparisonAttributes),function(){return c(a.tableViewInfo&&b.chartToTable(a.tableViewInfo),function(){return b._tableViewRenderer&&b._tableViewRenderer.setVisualState(a.tableViewRenderer)})})})})})})}},isMouseOver:function(a){return P.isMouseOver(this.domNode,{event:a})||this.comparisonSelect&&this.comparisonSelect.isMouseOver(a)},getWidth:function(){return this._currentVisualProperties.width},getHeight:function(){return this._currentVisualProperties.height},
onContentUpdated:function(){},destroy:function(){this._destroyChart();this.inherited(arguments)}})});