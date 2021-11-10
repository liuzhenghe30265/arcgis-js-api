// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ReportContainerPagination.html":'\x3cdiv class\x3d"esriGEReportPlayer_reportContainerPagination"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"infographicPageDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"pageNavigatorDiv" class\x3d"reportContainerPagination_pageNavigatorDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"emptyPlaceholder" class\x3d"reportContainerPagination_emptyPlaceholder"\x3e${nls.infographicEmpty}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/ReportContainerPagination","dojo/_base/declare dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/PageNavigator ../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil ../themes/ReportThemes ./utils/KeyboardNavigationUtil ./utils/MobileGesturesUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DomUtil dojo/text!../templates/ReportContainerPagination.html dojo/i18n!esri/nls/jsapi".split(" "),
function(f,g,h,k,l,m,n,p,q,e,c,r,d){d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer;return f([h,k],{templateString:r,nls:d,isReportContainerPagination:!0,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!1,maxBulletsLimit:e.isMobileDevice()?6:10,documentOptions:null,infographicPage:null,pageNavigator:null,postCreate:function(){var a=this;this.inherited(arguments);this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPage",{viewModel:this.viewModel,
theme:this.theme,parentWidget:this,keepPagePosition:!1,renderBackgroundImage:!0,currentFeatureIndex:this.currentFeatureIndex,scaleSectionsToFit:this.scaleSectionsToFit,onResized:function(b){a.onResized(b)},onPageIndexChanged:function(b){a.pageNavigator.setCurrentPageIndex(b)}},this.infographicPageDiv);this.own(this.infographicPage);this.pageNavigator=(new l({showArrows:!1,getNumPages:function(){return a.infographicPage.getNumItems()},onPageChanged:function(b){a.showSlideAt(b)}})).placeAt(this.pageNavigatorDiv);
this.own(this.pageNavigator);this._setEmptyState(!1);e.isMobileDevice()?q.enableMobileGestures(this):p.setUpKeyboardNavigation(this)},resize:function(a,b){this.infographicPage.resize(a,b)},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},getCurrentSlideIndex:function(){return this.infographicPage.getCurrentPageIndex()},showSlideAt:function(a){this.infographicPage.setCurrentPageIndex(a)},
showNextSlide:function(){this.infographicPage.showNextPage()},showPreviousSlide:function(){this.infographicPage.showPreviousPage()},_pendingJson:null,fromJson:function(a){if(this._canApplyJson()){this._pendingJson=null;this.documentOptions=a.documentOptions;this.theme=this.infographicPage.theme=a.theme&&a.theme.id!==n.GRAPHIC?a.theme:null;a=m.collectSectionJsons(a,{backgroundForeground:!1,populateWithFloatingElementsBehind:!0,topFirst:1.8>this.documentOptions.revisionVersion});this._setEmptyState(!a.length);
var b=a.length>this.maxBulletsLimit;g[b?"add":"remove"](this.domNode,"hasCustomPaginationBullets");c[b?"show":"hide"](this.pageNavigatorDiv);return this.infographicPage.setItems(a).then(function(){this.pageNavigator.reset()}.bind(this))}this._pendingJson=a},_canApplyJson:function(){return c.isNodeInLayout(this.domNode)},_setEmptyState:function(a){c.hide([this.infographicPageDiv,this.emptyPlaceholder]);c.show(a?this.emptyPlaceholder:this.infographicPageDiv)},getPanelZoomScale:function(a){return this.infographicPage.getPanelScaleByNode(a)},
getVisualState:function(){return this.infographicPage.getVisualState()},setVisualState:function(a){return this.infographicPage.setVisualState(a)},onResized:function(a){},onPendingDataApplied:function(){}})});