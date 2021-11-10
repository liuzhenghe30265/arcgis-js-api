// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/DetectObjectsUsingDeepLearning",{toolDefine:"\u05d4\u05d2\u05d3\u05e8 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7",outputLayerName:"\u200e${layername}_detected",modelLabel:"\u05d1\u05d7\u05e8 \u05de\u05d5\u05d3\u05dc \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7 (deep learning) \u05d4\u05de\u05e9\u05de\u05e9 \u05dc\u05d6\u05d9\u05d4\u05d5\u05d9 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd",
modelArgsLabel:"\u05e6\u05d9\u05d9\u05df \u05d0\u05e8\u05d2\u05d5\u05de\u05e0\u05d8\u05d9\u05dd \u05dc\u05de\u05d5\u05d3\u05dc \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7",nameLabel:"\u05e9\u05dd",valueLabel:"\u05e2\u05e8\u05da",removeDuplicatesLable:"\u05d4\u05e1\u05e8 \u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05db\u05e4\u05d5\u05dc\u05d5\u05ea \u05de\u05d4\u05e4\u05dc\u05d8 (\u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05e0\u05dc\u05d9)",queryModelArgsMsg:"\u05de\u05d1\u05d5\u05e6\u05e2\u05ea \u05e9\u05d0\u05d9\u05dc\u05ea\u05d4 \u05e9\u05dc \u05d0\u05e8\u05d2\u05d5\u05de\u05e0\u05d8\u05d9\u05dd \u05dc\u05de\u05d5\u05d3\u05dc...",
nonMaxSuppressionLabel:"\u05d4\u05e0\u05d7\u05ea\u05ea \u05e2\u05e8\u05db\u05d9\u05dd \u05e9\u05d0\u05d9\u05e0\u05dd \u05de\u05e7\u05e1\u05d9\u05de\u05d5\u05dd",options:"\u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea",confidenceLabel:"\u05e9\u05d3\u05d4 \u05e6\u05d9\u05d5\u05df \u05d1\u05d9\u05d8\u05d7\u05d5\u05df",classValueLabel:"\u05e9\u05d3\u05d4 \u05e2\u05e8\u05da \u05e7\u05d1\u05d5\u05e6\u05d4",maxOverlapLabel:"\u05d9\u05d7\u05e1 \u05d7\u05e4\u05d9\u05e4\u05d4 \u05de\u05e7\u05e1\u05d9\u05de\u05d0\u05dc\u05d9\u05ea",
numberOnlyMsg:"\u05de\u05d5\u05ea\u05e8 \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05e8\u05e7 \u05e2\u05e8\u05db\u05d9\u05dd \u05e0\u05d5\u05de\u05e8\u05d9\u05d9\u05dd.",analysisLayerLabel:"\u05d1\u05d7\u05e8 \u05ea\u05de\u05d5\u05e0\u05d4 \u05d4\u05de\u05e9\u05de\u05e9\u05ea \u05dc\u05d6\u05d9\u05d4\u05d5\u05d9 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd",itemDescription:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05dc \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d4\u05e0\u05d5\u05e6\u05e8 \u05de\u05d6\u05d9\u05d4\u05d5\u05d9 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7 \u05e8\u05e1\u05d8\u05e8, \u05d6\u05d9\u05d4\u05d5\u05d9 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7, ${layername}",itemSnippet:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05dc \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d4\u05e0\u05d5\u05e6\u05e8 \u05de\u05d6\u05d9\u05d4\u05d5\u05d9 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7"});