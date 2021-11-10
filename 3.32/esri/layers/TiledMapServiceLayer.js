// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/layers/TiledMapServiceLayer","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/url dojo/dom-construct dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/dom dojox/collections/ArrayList dojox/gfx/matrix ../kernel ../config ../sniff ../domUtils ../tileUtils ../geometry/Point ../geometry/Rect ../geometry/Extent ./layer".split(" "),function(D,q,E,B,K,p,L,M,m,S,N,O,v,P,z,Q,G,A,C,T,R){D=D(R,{declaredClass:"esri.layers.TiledMapServiceLayer",constructor:function(a,
b){q.connect(this,"onLoad",this,"_initTiledLayer");this._lowestLevel=(this._displayLevels=b?b.displayLevels:null)?this._displayLevels[0]:0;this.resampling=b?b.resampling:void 0;this._resamplingTolerance=b?b.resamplingTolerance:null;this.exclusionAreas=b?b.exclusionAreas:null;a=E.hitch;this._addImage=a(this,this._addImage);this._tileLoadHandler=a(this,this._tileLoadHandler);this._tileErrorHandler=a(this,this._tileErrorHandler);this._popTile=a(this,this._popTile);this._cleanUpRemovedImages=a(this,this._cleanUpRemovedImages);
this._fireOnUpdateEvent=a(this,this._fireOnUpdateEvent);this._transitionEnd=a(this,this._transitionEnd);this._tileMapCallback=a(this,this._tileMapCallback)},opacity:1,isPNG32:!1,_multiple:1,isResampling:!1,_initTiledLayer:function(){var a=this.tileInfo,b=a.lods;this.resampling=null!=this.resampling?this.resampling:!1;this._tileW=a.width;this._tileH=a.height;var e=this.scales=[],c=this._displayLevels,d=-Infinity,f=Infinity,l=this.fullExtent,g=new A(l.xmin,l.ymax),l=new A(l.xmax,l.ymin),r=G.getContainingTileCoords,
k,h,m,t=b.length;for(m=0;m<t;m++)h=b[m],k=r(a,g,h),h.startTileRow=0>k.row?0:k.row,h.startTileCol=0>k.col?0:k.col,k=r(a,l,h),h.endTileRow=k.row,h.endTileCol=k.col,c&&-1===B.indexOf(c,h.level)||(e[m]=h.scale,d=h.scale>d?h.scale:d,f=h.scale<f?h.scale:f);-Infinity===d||this._hasMin||this.setMinScale(d);Infinity===f||this._hasMax||this.setMaxScale(f);this.setExclusionAreas(this.exclusionAreas);this._patchIE=6<=z("ie")&&7>z("ie")&&(this.isPNG32||"Mixed"===a.format)},isVisibleAtScale:function(a){return a?
R.prototype._isMapAtVisibleScale.call(this,a,!0):!1},_isMapAtVisibleScale:function(a){var b=this.inherited(arguments,[a,!0]);if(b){var e;e=this._map;var b=this.scales,c=e.getScale(),d=!1,f=e.width>e.height?e.width:e.height;for(e=0;e<b.length;e++)if(Math.abs(b[e]-c)/b[e]<1/f){d=!0;break}b=d}return b},_setMap:function(a,b,e,c){this.inherited(arguments);this._map=a;var d=this._div=p.create("div",null,b),f=a.__visibleDelta,l=q.connect,g=v._css.names,r={position:"absolute",width:a.width+"px",height:a.height+
"px",overflow:"visible"},k=P.defaults.map.zoomDuration;"css-transforms"===a.navigationMode?(r[g.transform]=v._css.translate(-f.x,-f.y),m.set(d,r),delete r[g.transform],r[g.transition]=g.transformName+" "+k+"ms ease",m.set(this._active=p.create("div",null,d),r),this._active._remove=0,this._passives=[]):(r.left=-f.x+"px",r.top=-f.y+"px",m.set(d,r));this._onResizeHandler_connect=l(a,"onResize",this,"_onResizeHandler");this._opacityChangeHandler_connect=l(this,"onOpacityChange",this,"_opacityChangeHandler");
f=this.tileInfo;l=f.spatialReference;g=l._getInfo();(this._wrap=a.wrapAround180&&l._isWrappable()&&Math.abs(g.origin[0]-f.origin.x)<=g.dx)&&G._addFrameInfo(f,g);this.setExclusionAreas(this.exclusionAreas);this.evaluateSuspension();if(this.suspended&&!a.loaded)var h=q.connect(a,"onLoad",this,function(){q.disconnect(h);h=null;this.setExclusionAreas(this.exclusionAreas);this.evaluateSuspension()});return d},_unsetMap:function(a,b){this.suspended||this._suspendImpl();p.destroy(this._div);this._map=this._div=
null;var e=q.disconnect;e(this._onResizeHandler_connect);e(this._opacityChangeHandler_connect);this.inherited(arguments)},onSuspend:function(){this.inherited(arguments);this._suspendImpl()},_suspendImpl:function(){Q.hide(this._div);clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();var a=this._tiles,b=this._tileIds,e=this._loadingList,c,d,f=q.disconnect,l=p.destroy;e&&0<e.count&&(e.forEach(function(b){if(c=a[b])f(c._onload_connect),f(c._onerror_connect),f(c._onabort_connect),
c._onload_connect=c._onerror_connect=c._onabort_connect=null}),e.clear(),this._fireUpdateEnd());this._removeList.clear();for(e=b.length-1;0<=e;e--)(c=(d=b[e])&&a[d])&&l(c);if("css-transforms"===this._map.navigationMode){b=this._active;d=this._passives;var g;this._noDom=0;for(e=d.length-1;0<=e;e--)g=d[e],g._endHandle&&f(g._endHandle),g._matrix=g._multiply=g._endHandle=null,g._marked=g._remove=0,d.splice(e,1),l(g);b._matrix=b._multiply=null;b._marked=b._remove=0}this._tileIds=this._tiles=this._tileBounds=
this._ct=this._loadingList=this._removeList=this._standby=null},onResume:function(){this.inherited(arguments);this._tileIds=[];this._tiles=[];this._tileBounds=[];this._ct=null;this._removeList=new N;this._loadingList=new N;Q.show(this._div);this._enableDrawConnectors();this._wakeTimer=this._wakeTimer||setTimeout(E.hitch(this,function(){this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD)}),0)},_enableDrawConnectors:function(){var a=this._map,b=q.connect;if("css-transforms"===
a.navigationMode){if(this._onScaleHandler_connect=b(a,"onScale",this,this._onScaleHandler),z("esri-mobile")){this._standby=[];var e=this,c=function(){e._noDom=1};this._onPanStartHandler_connect=b(a,"onPanStart",c);this._onZoomStartHandler_connect=b(a,"onZoomStart",c)}}else this._onZoomHandler_connect=b(a,"onZoom",this,"_onZoomHandler");this._onPanHandler_connect=b(a,"onPan",this,"_onPanHandler");this._onExtentChangeHandler_connect=b(a,"onExtentChange",this,"_onExtentChangeHandler")},_disableDrawConnectors:function(){var a=
q.disconnect;a(this._onPanHandler_connect);a(this._onZoomHandler_connect);a(this._onScaleHandler_connect);a(this._onExtentChangeHandler_connect);a(this._onPanStartHandler_connect);a(this._onZoomStartHandler_connect);this._onPanHandler_connect=this._onZoomHandler_connect=this._onScaleHandler_connect=this._onExtentChangeHandler_connect=this._onPanStartHandler_connect=this._onZoomStartHandler_connect=null},_onResizeHandler:function(a,b,e){a={width:b+"px",height:e+"px"};b=m.set;b(this._div,a);if("css-transforms"===
this._map.navigationMode)for(this._active&&b(this._active,a),e=this._passives.length-1;0<=e;e--)b(this._passives[e],a)},_onExtentChangeHandler:function(a,b,e,c){b=this._map;var d=this._standby,f;clearTimeout(this._wakeTimer);this._wakeTimer=null;if(!b._isPanningOrZooming()){if("css-transforms"===b.navigationMode){if(e)for(c=this._passives.length-1;0<=c;c--)f=this._passives[c],m.set(f,v._css.names.transition,"none"),f._marked?(this._passives.splice(c,1),f.parentNode&&f.parentNode.removeChild(f),p.destroy(f)):
0<f.childNodes.length&&(f._multiply=f._multiply?O.multiply(f._matrix,f._multiply):f._matrix);this._noDom=0;if(d&&d.length)for(c=d.length-1;0<=c;c--)f=d[c],m.set(f,"visibility","inherit"),this._popTile(f),d.splice(c,1)}this._fireUpdateStart();this._rrIndex=0;c=G.getCandidateTileInfo(b,this.tileInfo,a);a=b.__visibleDelta;if(!this._ct||c.lod.level!==this._ct.lod.level||e){f=c&&this._ct&&c.lod.level!==this._ct.lod.level;this._ct=c;var l=this._tiles,g=this._tileIds,r=this._tileBounds,k=this._removeList,
h,u=g.length;this._cleanUpRemovedImages();for(c=0;c<u;c++)d=g[c],h=l[d],r[d]=g[c]=null,"css-transforms"===b.navigationMode&&f&&h.parentNode&&b.fadeOnZoom&&(h._fadeOut=f,h.parentNode._remove++),k.add(h);e&&(this._tileIds=[],this._tiles=[],this._tileBounds=[])}c=a.x;e=a.y;"css-transforms"===b.navigationMode?(d={},d[v._css.names.transform]=v._css.translate(c,e),m.set(this._div,d)):m.set(this._div,{left:c+"px",top:e+"px"});this.__coords_dx=c;this.__coords_dy=e;this._updateImages(new C(0,0,a.width,a.height));
0===this._loadingList.count?(this._cleanUpRemovedImages(),this.onUpdate(),this._fireUpdateEnd()):this._fireOnUpdate=!0;e=this._tileW;l=this._tileH;a=new C(-a.x,-a.y,a.width,a.height);for(c=this._tileIds.length-1;0<=c;c--)(d=this._tileIds[c])?(f=this._tiles[d],g=M.getMarginBox(f),g=new C(g.l,g.t,e,l),"css-transforms"===b.navigationMode&&(g.x=f._left,g.y=f._top),a.intersects(g)?this._tileBounds[d]=g:(this._loadingList.contains(d)&&this._popTile(f),p.destroy(f),this._tileIds.splice(c,1),delete this._tileBounds[d],
delete this._tiles[d])):(this._tileIds.splice(c,1),delete this._tileBounds[d],delete this._tiles[d])}},_onPanHandler:function(a,b){a=this._map;b=a.__visibleDelta.offset(b.x,b.y);this.__coords_dx=this.__coords_dy=0;"css-transforms"===a.navigationMode?(a={},a[v._css.names.transform]=v._css.translate(b.x,b.y),m.set(this._div,a),z("esri-mobile")||this._updateImages({x:-b.x,y:-b.y,width:b.width,height:b.height})):(m.set(this._div,{left:b.x+"px",top:b.y+"px"}),this._updateImages({x:-b.x,y:-b.y,width:b.width,
height:b.height}));0<this._loadingList.count&&(this._fireUpdateStart(),this._fireOnUpdate=!0)},_onScaleHandler:function(a,b){var e,c={},d=v._css.names,f=this._map,l=P.defaults.map.zoomDuration;for(e=this._passives.length-1;0<=e;e--){var g=this._passives[e];0===g.childNodes.length?(this._passives.splice(e,1),p.destroy(g)):("none"===g.style[d.transition]&&m.set(g,d.transition,d.transformName+" "+l+"ms ease"),m.set(g,d.transition,b?"none":d.transformName+" "+l+"ms ease"),g._matrix=a,c[d.transform]=v._css.matrix(g._multiply?
O.multiply(a,g._multiply):a),m.set(g,c))}this._active&&0===this._active.childNodes.length||(m.set(this._active,d.transition,b?"none":d.transformName+" "+l+"ms ease"),this._active._matrix=a,c[d.transform]=v._css.matrix(this._active._matrix),m.set(this._active,c),this._passives.push(this._active),c={position:"absolute",width:f.width+"px",height:f.height+"px",overflow:"visible"},c[d.transition]=d.transformName+" "+l+"ms ease",m.set(this._active=p.create("div",null,this._div),c),this._active._remove=
0,f.fadeOnZoom&&p.place(this._active,this._div,"first"))},_onZoomHandler:function(a,b,e){a=M.getMarginBox(this._div);e=e.offset(-a.l,-a.t);this._previousScale&&1!==b||(this._previousScale=1);var c,d=this._tileW*b,f=this._tileH*b,l=this._tileBounds,g=this._tiles,r=this._previousScale,k=this._multiple,h=m.set,u,t;if((a=z("ie"))&&8>a)B.forEach(this._tileIds,function(a){t="";c=l[a];u=g[a].style.margin.split(" ");B.forEach(u,function(a){""!==t&&(t+=" ");a=parseFloat(a);t+=a/r*b+"px"});h(g[a],{left:c.x-
(d-c.width)*(e.x-c.x)/c.width+"px",top:c.y-(f-c.height)*(e.y-c.y)/c.height+"px",margin:1!==k&&-1===t.indexOf("NaN")?t:"",zoom:b})});else{var v=d*k,U=f*k,n,p;B.forEach(this._tileIds,function(a){t="";c=l[a];n=c.x-(d-c.width)*(e.x-c.x)/c.width;p=c.y-(f-c.height)*(e.y-c.y)/c.height;u=g[a].style.margin.split(" ");B.forEach(u,function(a){""!==t&&(t+=" ");a=parseFloat(a);t+=a/r*b+"px"});h(g[a],{left:n+"px",top:p+"px",margin:1!==k&&-1===t.indexOf("NaN")?t:"",width:v+"px",height:U+"px"})})}this._previousScale=
b},_updateImages:function(a){if(this._ct){var b,e=this._tileW,c=this._tileH,d=this._ct;b=d.lod;var d=d.tile,f=d.offsets,l=d.coords,g=l.row,l=l.col,m=b.level,k=this.opacity,h=this._tileIds,u=this._loadingList,t=this._addImage,p=this._map.id,v=this.id,n=a.x,q=a.y,z=b.startTileRow,A=b.endTileRow,D=b.startTileCol,E=b.endTileCol,G=B.indexOf,y,w,C=f.x-this.__coords_dx,H=f.y-this.__coords_dy;w=e-C+-a.x;var x=c-H+-a.y;y=Math.ceil;w=0<w?w%e:e-Math.abs(w)%e;x=0<x?x%c:c-Math.abs(x)%c;n=0<n?Math.floor((n+C)/
e):y((n-(e-C))/e);q=0<q?Math.floor((q+H)/c):y((q-(c-H))/c);H=n+y((a.width-w)/e);a=q+y((a.height-x)/c);var F,I,J;this._wrap&&(F=b._frameInfo,I=F[0],J=F[1],F=F[2]);for(x=n;x<=H;x++)for(n=q;n<=a;n++)y=g+n,w=l+x,this._wrap&&(w<J?(w%=I,w=w<J?w+I:w):w>F&&(w%=I)),!this._isExcluded(m,y,w)&&y>=z&&y<=A&&w>=D&&w<=E&&(b=p+"_"+v+"_tile_"+m+"_"+n+"_"+x,-1===G(h,b)&&(u.add(b),h.push(b),t(m,n,y,x,w,b,e,c,k,d,f)))}},_cleanUpRemovedImages:function(){var a=this._removeList,b=p.destroy,e,c=v._css.names;a.forEach(function(a){a._fadeOut||
(a.style.filter="",a.style.zoom=1,b(a))});if("css-transforms"===this._map.navigationMode)for(e=this._passives.length-1;0<=e;e--){var d=this._passives[e];0===d.childNodes.length?(this._passives.splice(e,1),b(d)):this._map.fadeOnZoom&&!d._marked&&d._remove===d.childNodes.length&&(d._marked=1,2048>v._css.getScaleFromMatrix(m.get(d,c.transform))?(m.set(d,c.transition,"opacity 0.65s"),m.set(d,"opacity",0),q.disconnect(d._endHandle),d._endHandle=q.connect(d,c.endEvent,this._transitionEnd)):this._transitionEnd({propertyName:"opacity",
target:d}))}a.clear()},_transitionEnd:function(a){var b=a.target;"opacity"===a.propertyName&&(q.disconnect(b._endHandle),b._endHandle=null,a=B.indexOf(this._passives,b),-1<a&&this._passives.splice(a,1),b.parentNode&&b.parentNode.removeChild(b),p.destroy(b))},_addImage:function(a,b,e,c,d,f,l,g,r,k,h){if(this._patchIE)k=this._tiles[f]=p.create("div"),k.id=f,L.add(k,"layerTile"),m.set(k,{left:l*c-h.x+"px",top:g*b-h.y+"px",width:l+"px",height:g+"px",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d'"+
this.getTileUrl(a,e,d)+"', sizingMethod\x3d'scale')"}),1>r&&m.set(k,"opacity",r),a=k.appendChild(p.create("div")),m.set(a,{opacity:0,width:l+"px",height:g+"px"}),this._div.appendChild(k),k=null,this._loadingList.remove(f),this._fireOnUpdateEvent();else{k=this._tiles[f]=p.create("img");var u=q.connect;k.id=f;k._uid=a+"_"+e+"_"+d;k.alt="";L.add(k,"layerTile");c=l*c-h.x;h=g*b-h.y;b=this._map;var t=v._css.names;l={width:l+"px",height:g+"px",visibility:"hidden"};"css-transforms"===b.navigationMode?(l[t.transform]=
v._css.translate(c,h),m.set(k,l),k._left=c,k._top=h):(l.left=c+"px",l.top=h+"px",m.set(k,l));1>r&&m.set(k,"opacity",r);k._onload_connect=u(k,"onload",this,"_tileLoadHandler");k._onerror_connect=u(k,"onerror",E.hitch(this,"_tileErrorHandler",e,d));k._onabort_connect=u(k,"onabort",this,"_tileAbortHandler");if(this.tileMap)this.tileMap.getTile(a,e,d,f,this._tileMapCallback);else if(f=this.getTileUrl(a,e,d,k))this._failedRequests&&this._failedRequests[f]?(m.set(k,this._failedRequests[f].css),k.src=this._failedRequests[f].src,
this._multiple=parseInt(this._failedRequests[f].css.width)/this._tileW,this.isResampling=1!==this._multiple):(this._multiple=1,this.isResampling=!1,k.src=f);"css-transforms"===b.navigationMode?this._active.appendChild(k):this._div.appendChild(k);k=null}},_tileMapCallback:function(a,b){var e;if(!this.suspended){e=this._tiles[b.id]||S.byId(b.id);var c=b.level+"_"+b.row+"_"+b.col;e&&e._uid===c?(this._multiple=2*(b.level-a.level)||1,this.isResampling=1!==this._multiple,b=this.tileMap.style(a,b),m.set(e,
b),e.src=this.getTileUrl(a.level,a.row,a.col)):this._popTile(b)}},getTileUrl:function(a,b,e){},refresh:function(){this.suspended||(this._refreshTS=Date.now(),this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD))},_popTile:function(a){var b=q.disconnect;b(a._onload_connect);b(a._onerror_connect);b(a._onabort_connect);a._onload_connect=a._onerror_connect=a._onabort_connect=null;this._loadingList.remove(a.id);this._fireOnUpdateEvent()},_tileLoadHandler:function(a){a=a.currentTarget;
this._noDom?this._standby.push(a):(m.set(a,"visibility","inherit"),this._popTile(a))},_tileAbortHandler:function(a){a=a.currentTarget;this.onError(Error("Unable to load tile: "+a.src));m.set(a,"visibility","hidden");this._popTile(a)},_tileErrorHandler:function(a,b,e){e=e.currentTarget;var c,d,f=!0;if(this.tileMap||!this.resampling)f=!1;else if(c=new K(e.src),c=c.path.split("/"),c=parseInt(c[c.length-3]),d=this._ct.lod.level-c+1,this._multiple=Math.pow(2,d),c===this._lowestLevel||0===this._resamplingTolerance||
this._resamplingTolerance&&Math.log(this._multiple)/Math.LN2>this._resamplingTolerance)f=!1;f?(this.isResampling=!0,this._resample(e,a,b)):(this.onError(Error("Unable to load tile: "+e.src)),m.set(e,"visibility","hidden"),this._popTile(e))},_resample:function(a,b,e){var c=(new K(a.src)).path.split("/"),d=this._multiple,f=parseInt(c[c.length-3])-1,l=parseInt(b/d),g=parseInt(e/d),c=e%d,r=b%d,l=this.getTileUrl(f,l,g);b=this.getTileUrl(f+Math.log(d)/Math.LN2,b,e);d={width:this._tileW*d+"px",height:this._tileH*
d+"px",margin:"-"+this._tileW*r+"px 0 0 "+("-"+this._tileH*c+"px")};this._failedRequests||(this._failedRequests={});this._failedRequests[b]={src:l,css:d};m.set(a,d);z("chrome")&&a.setAttribute("src",null);a.src=l},_fireOnUpdateEvent:function(){0===this._loadingList.count&&(this._cleanUpRemovedImages(),this._fireOnUpdate&&(this._fireOnUpdate=!1,this.onUpdate(),this._fireUpdateEnd()))},setOpacity:function(a){if(this.opacity!=a)this.onOpacityChange(this.opacity=a)},onOpacityChange:function(){},_opacityChangeHandler:function(a){var b=
m.set,e,c,d;if("css-transforms"===this._map.navigationMode){if(this._active)for(d=this._active.childNodes,e=d.length-1;0<=e;e--)b(d[e],"opacity",a);for(e=this._passives.length-1;0<=e;e--)for(d=this._passives[e].childNodes,c=d.length-1;0<=c;c--)b(d[c],"opacity",a)}else for(d=this._div.childNodes,e=d.length-1;0<=e;e--)b(d[e],"opacity",a)},setExclusionAreas:function(a){this.exclusionAreas=a;if(this.loaded&&this._map&&this._map.loaded){var b=this._map.spatialReference,e=this.tileInfo,c=e.origin,d=e.lods,
f=d[0].level,l=d[d.length-1].level,g,m,k,h,u,t,q,p,n;if(this.exclusionAreas&&this.exclusionAreas.length)for(this._exclusionsPerZoom=[],m=0,k=a.length;m<k;m++){if(g=a[m],(n=g.geometry)&&"extent"===n.type&&n.xmin<=n.xmax&&n.ymin<=n.ymax){if(!b.equals(n.spatialReference))if(b._canProject(n.spatialReference))b.isWebMercator()?(p=A.lngLatToXY(n.xmin,n.ymin),n=A.lngLatToXY(n.xmax,n.ymax)):(p=A.xyToLngLat(n.xmin,n.ymin,!0),n=A.xyToLngLat(n.xmax,n.ymax,!0)),n=new T(p[0],p[1],n[0],n[1],b);else continue;q=
-1;if(g.minZoom&&-1!==g.minZoom)q=g.minZoom;else if(g.minScale&&-1!==g.minScale)for(h=0,u=d.length;h<u;h++)if(d[h].scale<=g.minScale){q=d[h].level;break}q=Math.max(q,f);p=-1;if(g.maxZoom&&-1!==g.maxZoom)p=g.maxZoom;else if(g.maxScale&&-1!==g.maxScale)for(h=0,u=d.length;h<u;h++)if(d[h].scale<g.maxScale){p=d[h-1].level;break}else if(d[h].scale===g.maxScale){p=d[h].level;break}p=-1===p?l:Math.min(p,l);for(g=q;g<=p;g++){h=0;for(u=d.length;h<u;h++)if(d[h].level===g){t=d[h];break}t&&(this._exclusionsPerZoom[g]||
(this._exclusionsPerZoom[g]=[]),h=1/t.resolution/e.rows,u=1/t.resolution/e.cols,this._exclusionsPerZoom[g].push({rowFrom:Math.floor((c.y-n.ymax)*h),rowTo:Math.ceil((c.y-n.ymin)*h),colFrom:Math.floor((n.xmin-c.x)*u),colTo:Math.ceil((n.xmax-c.x)*u)}))}}}else this._exclusionsPerZoom=null;this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD)}},_isExcluded:function(a,b,e){var c,d,f;if(!this._exclusionsPerZoom)return!1;c=this._exclusionsPerZoom[a];if(!c)return!1;d=0;for(f=
c.length;d<f;d++)if(a=c[d],b>=a.rowFrom&&b<a.rowTo&&e>=a.colFrom&&e<a.colTo)return!0;return!1}});z("extend-esri")&&E.setObject("layers.TiledMapServiceLayer",D,v);return D});