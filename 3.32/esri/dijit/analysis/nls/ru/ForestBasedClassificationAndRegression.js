// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/ForestBasedClassificationAndRegression",{modifiedTitle:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u0435\u0441\u0430 \u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f - ${goal}",train:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",trainAndPredict:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437",selectGoal:"\u0427\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",
trainGoal:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",trainAndPredictGoal:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",
inFeaturesLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0439 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",variablePredictLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",categorical:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439\u043d\u043e\u0435",chooseExplanatoryField:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439",
chooseFeaturesToPredict:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0439 \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f",chooseExplainMatch:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439",
options:"\u041e\u043f\u0446\u0438\u0438",advancedForestOptions:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438 \u043b\u0435\u0441\u0430",numberOfTrees:"\u0427\u0438\u0441\u043b\u043e \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432",minimumLeafSize:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043b\u0438\u0441\u0442\u0430",maximumTreeDepth:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430",
sampleSize:"\u0414\u0430\u043d\u043d\u044b\u0435, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 (%)",randomVariables:"\u0427\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445",variableConstraintMsg:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u0436\u0434\u0443 1 \u0438 \u0447\u0438\u0441\u043b\u043e\u043c \u043e\u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445.",
validationOptions:"\u041e\u043f\u0446\u0438\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",percentageForValidation:"\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0438\u0437 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 (%)",outputLayerName:"FBCR ${inFeaturesName}",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u0435\u0441\u0430 \u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f ${goal}.",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430, \u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u0435\u0441\u0430 \u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f, ${inFeaturesName}, ${goal}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u0435\u0441\u0430 \u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 (${goal}."});