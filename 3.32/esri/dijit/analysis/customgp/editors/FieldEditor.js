// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/editors/FieldEditor.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode" class\x3d"fullSpread"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode" class\x3d"left ${cssClass.layerChooseCtr}"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/editors/FieldEditor","dojo/_base/declare dojo/Deferred dojo/Evented dojo/_base/lang dojo/on dojo/json dijit/_TemplatedMixin ../BaseEditor dijit/form/Select ../../utils ../../AnalysisRegistry dojo/text!./FieldEditor.html".split(" "),function(e,n,f,b,p,d,g,h,k,l,c,m){return e([h,g,f],{templateString:m,editorName:"FieldEditor",cssClass:{featureSetSelect:"fullSpread esriAnalysisSelect",layerChooseCtr:"one-width"},analysisLayer:null,field:null,dependencyParam:null,
constructor:function(a){this.inherited(arguments);a.cssClass&&b.mixin(this.cssClass,a.cssClass);this.watch("analysisLayer",b.hitch(this,this._handleLayerChange));this.watch("dependencyParam",b.hitch(this,this._handleDepParamChange))},postCreate:function(){this.inherited(arguments);this.fieldsSelect=new k({"class":this.cssClass.featureSetSelect});this.fieldsSelect.placeAt(this.layerChooseNode)},_handleFieldChange:function(){},_handleLayerChange:function(){if(this.analysisLayer&&this.fieldsSelect){var a=
{selectWidget:this.fieldsSelect,layer:this.analysisLayer,allowSelectLabel:!1,allowNumericType:!0,allowDateType:!0,allowStringType:!0};this.param&&this.param.filter&&this.param.filter.list&&(a.allowStringType=-1!==this.param.filter.list.indexOf(c.FieldTypes.String),a.allowNumericType=-1!==this.param.filter.list.indexOf(c.FieldTypes.Integer),a.allowDateType=-1!==this.param.filter.list.indexOf(c.FieldTypes.Date));l.addAttributeOptions(a)}},_handleDepParamChange:function(){this.dependencyParam&&this.fieldsSelect&&
"GPString"===this.dependencyParam.dataType&&this.value&&this.fieldsSelect.addOption({label:this.value.alias||this.value.name,value:this.value.name})},getGPValue:function(){var a=this.analysisLayer&&this.analysisLayer.fields.filter(function(a){return a.name===this.fieldsSelect.get("value")},this),b="";a&&0<a.length?b=d.stringify(a[0]):"GPString"===this.dependencyParam.dataType&&this.fieldsSelect.get("value")===this.value.name&&(b=d.stringify(this.value));return this.wrapValueToDeferred(b)},_setAnalysisLayerAttr:function(a){this._set("analysisLayer",
a)},_setDependencyParamAttr:function(a){this._set("dependencyParam",a)}})});