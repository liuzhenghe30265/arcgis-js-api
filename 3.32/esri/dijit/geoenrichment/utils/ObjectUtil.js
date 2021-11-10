// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ObjectUtil",["dojo/number"],function(g){var c={};Math.log10=Math.log10||function(a){return Math.log(a)*Math.LOG10E};c.populateObject=function(a,b,f){function e(a,b){function d(d){var c=a[d],k=b[d],m=c&&"object"===typeof c;void 0!==c&&(void 0===k?b[d]=c:k&&"object"===typeof k&&m?e(c,k):f&&(m?(k=b[d]={},e(c,k)):b[d]=a[d]))}if(a&&b&&!(Array.isArray(a)&&!Array.isArray(b)||Array.isArray(b)&&!Array.isArray(a)))if(Array.isArray(a))a.forEach(function(a,b){d(b)});else for(var c in a)d(c)}
e(b,a);return a};c.filterByPattern=function(a,b){function f(a,b,e){for(var d in a){var c=a[d],h=b[d];if(Array.isArray(c)){var g=c[0];if(h&&Array.isArray(h)){var n=e[d]=[];h.forEach(function(a){if(a&&"object"===typeof a){var b=Array.isArray(a)?[]:{};f(g,a,b);n.push(b)}})}}else if("object"===typeof c){if(h&&"object"===typeof h){var l=e[d]={};f(c,h,l)}}else void 0!==h&&(e[d]=h)}}var e={};f(b,a,e);return e};c.traverseObject=function(a,b){for(var f in a){var e=a[f];b(e);e&&"object"===typeof e&&c.traverseObject(e,
b)}};c.copyOwnJsonProperties=function(a,b,f){b=b||{};for(var e in a){var d=a[e];a.hasOwnProperty(e)&&"function"!=typeof d&&(d&&"object"==typeof d&&f&&(d=f(e,d)),void 0!==d&&(b[e]=d))}return b};c.removeUndefinedProperties=function(a){a&&Object.keys(a).forEach(function(b){void 0===a[b]&&delete a[b]});return a};c.getValue=function(a,b){if("string"!==typeof b)return a;b=b.split(".");for(var f=0;f<b.length;f++)a=a&&a[b[f]];return a};c.setValue=function(a,b,f){if("string"===typeof b&&(b=b.split("."),b.length)){for(var e=
0;e<b.length-1;e++)a=a&&a[b[e]];a&&(a[b[b.length-1]]=f)}};c.isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};c.roundNumber=function(a,b){return"number"!==typeof a?a:parseFloat(a.toFixed(void 0!==b?b:0))};c.getBestPrecision=function(a){return 0===a?0:Math.max(0,Math.round(Math.log10(3E3/Math.abs(a))))};c.getPlaces=function(a,b){function f(b,f){var c=a.indexOf(b,e);if(0>c)return d;b=a.charAt(c+b.length);return!b||0>f.indexOf(b)?d:c-e}a=+a;if(isNaN(a))return-1;a+="";var e=a.indexOf(".")+
1,d=e?a.length-e:0;if(2>=d||!b)return d;b=0;if(!+a.substr(0,e-1))for(;"0"===a.charAt(e);)e++,b++,d--;for(var c=d-1;2<=c;c--){var g=Math.min(f("000000000000000".substr(0,c),"01234"),f("999999999999999".substr(0,c),"56789"));if(g!==d){d=g;break}}return d+b};c.formatNumber=function(a,b){b="number"===typeof b?{places:b}:b||{};var f=b.places,c={};0<=f?c.places=f:f=-1;a=g.format(a,c);if(b.noSeparator){void 0===l&&(l=g.format(9999,{places:0}).replace(/9/g,""));var c=l,d;if(c)for(;0<=(d=a.indexOf(c));)a=
a.substr(0,d)+a.substr(d+1)}if(b.preserveTrailingZeroes||0>=f||!a)return a;for(b=a.length;0<f&&"0"==a.charAt(b-1);)b--,--f||b--;return a.substr(0,b)};c.formatNumberAsCurrency=function(a,b,f){return b?b.split(";")[0>a?1:0].replace("0",c.formatNumber(Math.abs(a),f)):c.formatNumber(a,f)};var l;c.parseNumber=function(a,b,c,e){if(""===a)return"undefined"!==typeof c?c:NaN;if(null==a||"string"!==typeof a&&isNaN(a))return NaN;a=String(a);if(!a.trim())return void 0!==c?c:NaN;c=g.parse(a,{strict:e});isNaN(c)&&
a.trim().length&&(c=e?g.parse(a,{strict:e,locale:"en-US"}):Number(a));return isNaN(c)||void 0===b||0>b?c:g.round(c,b)};c.parsePercentOrCurrency=function(a,b,f,e,d){"string"===typeof a&&(a=a.replace("%",""),b&&(b=b.split(";")[0].replace("0",""),a=a.replace(b,"")));return c.parseNumber(a,f,e,d)};c.compareEqual=function(a,b,c){return void 0===c?a===b:Number(Number(a).toFixed(c))===Number(Number(b).toFixed(c))};return c});