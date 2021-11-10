// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/rasterProjectionHelper","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/sniff ../../../kernel ../../../geometry/Extent ../../../geometry/projection ../../../geometry/webMercatorUtils ../../../SpatialReference ../../../geometry/Point".split(" "),function(m,n,A,C,D,p,r,B,E,w){m={requirePE:function(a,b){return!(a.equals(b.spatialReference)||a._canProject(b))},load:function(){var a=new A;if(!this._loadPromise)if(r.isSupported())this._loadPromise=r.load();
else{var b=new A;b.reject("projection engine is not supported on this version of the browser, please try with a modern browser");this._loadPromise=b.promise}this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?a.resolve():this._loadPromise.isRejected()&&a.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(a),this._loadPromise.then(n.hitch(this,function(){this._pendingdfds.forEach(function(a){a.isFulfilled()||a.resolve()})}),n.hitch(this,function(){this._pendingdfds.forEach(function(a){a.isFulfilled()||
a.reject()})})));return a.promise},computeError:function(a,b){return[Math.abs((a[0]+a[4]+a[4*b.rows]+a[4*b.rows+4])/4-a[2*b.rows+2]),Math.abs((a[1]+a[5]+a[4*b.rows+1]+a[4*b.rows+5])/4-a[2*b.rows+3])]},project:function(a,b){if(!b||a.spatialReference.wkid===b.wkid)return a;var c=r.isLoaded()?r:B;"esri.geometry.Extent"===a.declaredClass?a=new p(a.toJson()):"esri.geometry.Point"===a.declaredClass&&(a=new w(a.toJson()));b=new E(b.toJson());(a=c.project(a,b))&&"esri.geometry.Extent"===a.declaredClass?a=
new p(a.toJson()):a&&"esri.geometry.Point"===a.declaredClass&&(a=new w(a.toJson()));return a},projectResolution:function(a,b,c){var f=c.xmin+(c.xmax-c.xmin)/2;c=c.ymin+(c.ymax-c.ymin)/2;a=new p(f,c,f+a.x,c+a.y,a.spatialReference);a=this.project(a,b);return new w(a.xmax-a.xmin,a.ymax-a.ymin,b)},getProjectionOffsetGrid:function(a,b,c,f,g,t){null==t&&(t=[32,32]);var h=a.xmin,k=a.ymin;f=a.xmax;g=a.ymax;var x=a.spatialReference,y=b.spatialReference,m=r.isLoaded()?r:B,q=b.spatialReference._getInfo(),n=
q&&q.valid[0],p=q&&q.valid[1],u=t[0]*c.x,e=t[1]*c.y;c={cols:Math.ceil((f-h)/u-.1)+1,rows:Math.ceil((g-k)/e-.1)+1};var d;a=[];var v,l;for(f=0;f<c.cols;f++)for(v=l,l=[],g=0;g<c.rows;g++)d=new w({x:h+u*f,y:k+e*g,spatialReference:x}),d=m.project(d,y),l.push(d),0<f&&q&&d.x<v[g].x&&(d.x+=p-n),a.push((d.x-b.xmin)/(b.xmax-b.xmin)),a.push((d.y-b.ymin)/(b.ymax-b.ymin));b=this.computeError(a,c);l=new Float32Array((c.cols-1)*(c.rows-1)*12);h=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]);k=new Float32Array([-1,
1,0,0,-1,1,1,0,0]);for(f=0;f<c.cols-1;f++)for(g=0;g<c.rows-1;g++){e=f*c.rows*2+2*g;x=a[e];y=a[e+1];m=a[e+2];q=a[e+3];e+=2*c.rows;n=a[e];p=a[e+1];u=a[e+2];v=a[e+3];d=0;for(var z=12*(g*(c.cols-1)+f),e=0;3>e;e++)l[z++]=h[d++]*x+h[d++]*m+h[d++]*u;for(e=d=0;3>e;e++)l[z++]=h[d++]*y+h[d++]*q+h[d++]*v;for(e=d=0;3>e;e++)l[z++]=k[d++]*x+k[d++]*n+k[d++]*u;for(e=d=0;3>e;e++)l[z++]=k[d++]*y+k[d++]*p+k[d++]*v}return{offsets:a,error:b,coefficients:l,spacing:t,size:[c.cols-1,c.rows-1]}}};C("extend-esri")&&n.setObject("layers.rasterLib.raster.rasterProjectionHelper",
m,D);return m});