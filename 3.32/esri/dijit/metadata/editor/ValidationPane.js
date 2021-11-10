// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/templates/ValidationPane.html":'\x3cdiv class\x3d"gxeValidationPane" style\x3d"display:none;"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv class\x3d"gxeClickableText" style\x3d"display:none;"\r\n      data-dojo-attach-point\x3d"clearNode" \r\n      data-dojo-attach-event\x3d"onclick: _onClearClick"\r\n      \x3e${i18nBase.validationPane.clearMessages}\x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeValidationPrompt" style\x3d"display:none;"\r\n      data-dojo-attach-point\x3d"promptNode" \r\n      \x3e${i18nBase.validationPane.prompt}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeContent" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/ValidationPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../base/Templated ../base/ValidationMessage dojo/text!./templates/ValidationPane.html ../../../kernel".split(" "),function(a,f,g,e,h,c,k,l,m,n,p){a=a([l],{editor:null,templateString:n,postCreate:function(){this.inherited(arguments)},_addChild:function(b,d,c){var a=h.create("div",{},this.containerNode);new m({message:b,inputWidget:d,isValid:c,
validationPane:this},a)},addWarning:function(b,d){this._addChild(b,d);this._toggleClear(!0);this._toggleVisibility(!0);this.editor&&this.editor.editDocumentPane&&e.add(this.editor.editDocumentPane.domNode,"gxeRepairMode")},clearMessages:function(){g.forEach(this.getChildren(),function(b){b._isGxeValidationMessage&&b.destroyRecursive(!1)});this._toggleClear(!1);this._toggleVisibility(!1);try{this.containerNode.scrollTop=0}catch(b){}},_onClearClick:function(b){this.clearMessages()},_toggleClear:function(b){var d=
this.clearNode,a=this.promptNode;b?(c.set(d,"display","inline-block"),c.set(a,"display","inline-block")):(c.set(d,"display","none"),c.set(a,"display","none"))},_toggleVisibility:function(b){var a=this.domNode;b?c.set(a,"display","block"):c.set(a,"display","none");this.editor&&this.editor.editDocumentPane&&(e.remove(this.editor.editDocumentPane.domNode,"gxeRepairMode"),this.editor.resizeDocument(this.editor.editDocumentPane))},whenComplete:function(){this.editor&&this.editor.editDocumentPane&&e.contains(this.editor.editDocumentPane.domNode,
"gxeRepairMode")&&this.editor.resizeDocument(this.editor.editDocumentPane)}});k("extend-esri")&&f.setObject("dijit.metadata.editor.ValidationPane",a,p);return a});