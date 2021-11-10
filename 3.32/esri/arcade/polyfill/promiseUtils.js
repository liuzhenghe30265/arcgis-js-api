// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/arcade/polyfill/promiseUtils",["require","exports","dojo/Deferred","dojo/promise/all"],function(q,c,g,n){function f(a,b){var d=new g(b);a(function(a){return p(a).then(d.resolve)},d.reject);return d.promise}function k(a){if(a){if("function"!==typeof a.forEach){var b=Object.keys(a),d=b.map(function(b){return a[b]});return k(d).then(function(a){var d={};b.forEach(function(b,e){return d[b]=a[e]});return d})}var e=null;return f(function(b,d){var l=[],c=a.length;0===c&&b(l);a.forEach(function(a){var m=
{promise:a};l.push(m);a.then(function(a){m.value=a}).catch(function(a){m.error=a}).then(function(){--c;0===c&&(e?d(Error("AbortError")):b(l))})})},function(b){e=b||"Invocation cancellation";a.forEach(function(a){return a.cancel(b)})})}}function h(a){void 0===a&&(a=void 0);var b=new g;b.resolve(a);return b.promise}function p(a){return a&&"function"===typeof a.then?a:h(a)}Object.defineProperty(c,"__esModule",{value:!0});c.all=function(a){return n(a)};c.filter=function(a,b){var d=a.slice();return n(a.map(function(a,
d){return b(a,d)})).then(function(a){return d.filter(function(b,d){return a[d]})})};c.create=f;c.createDeferred=function(a){var b=null;a=f(function(a,e){b={resolve:a,reject:e}},a);b.promise=a;b.cancel=function(){b.reject(Error("AbortError"))};return b};c.eachAlways=k;c.eachAlwaysValues=function(a){return k(a).then(function(a){return a.filter(function(a){return!!a.value}).map(function(a){return a.value})})};c.first=function(a){return a&&a.length?f(function(b,d){for(var e=0;e<a.length;e++)a[e].then(b,
d)}):h()};c.reject=function(a){var b=new g;b.reject(a);return b.promise};c.resolve=h;c.after=function(a,b){void 0===b&&(b=void 0);var d=0;return f(function(e){d=setTimeout(function(){e(b)},a)},function(){d&&(clearTimeout(d),d=0)})};c.timeout=function(a,b,d){var e=0,c=new g(a.cancel);a.then(function(a){c.isFulfilled()||(c.resolve(a),e&&(clearTimeout(e),e=0))});a.catch(function(a){c.isFulfilled()||(c.reject(a),e&&(clearTimeout(e),e=0))});e=setTimeout(function(){c.reject(d||Error("promiseUtils:timeout"))},
b);return c.promise};c.wrapCallback=function(a){var b=!1;return f(function(){a(function(a){b||h(a)})},function(){return b=!0})};c.isPromiseLike=function(a){return a&&"function"===typeof a.then};c.when=p;c.createResolver=function(a){var b,d;a=f(function(a,c){b=a;d=c},a);var c=function(a){b(a)};c.resolve=function(a){return b(a)};c.reject=function(a){return d(a)};c.promise=a;return c}});