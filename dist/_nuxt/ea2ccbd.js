/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[153,152],{784:function(t,e,n){n(5)({target:"Math",stat:!0},{trunc:n(420)})},953:function(t,e,n){"use strict";n(784);e.a={methods:{clear:function(){console.log("Clear method needs to be over-written")},exportImage:function(){console.log("exportImage method needs to be over-written")},trimCanvas2:function(canvas){if(canvas){var t=canvas.getContext("2d");if(t){for(var e=t.getImageData(0,0,canvas.width,canvas.height),n=e.data.length,o=null,r=null,h=null,c=null,l=0,d=0,i=0;i<n;i+=4)0!==e.data[i+3]&&(l=i/4%canvas.width,d=Math.trunc(i/4/canvas.width),null===o&&(o=d),(null===h||l<h)&&(h=l),(null===c||l>c)&&(c=l),(null===r||r<d)&&(r=d));if(null!=r){var v=(r=r||0)-(o=o||0)+20,m=(c=c||0)-(h=h||0)+20,_=t.getImageData(h,o,m,v);canvas.width=m,canvas.height=v,t.putImageData(_,10,10)}}}},trimCanvas:function(t){var e=t.getContext("2d"),n=document.createElement("canvas").getContext("2d");if(!e)return t;var i,o,r,h=e.getImageData(0,0,t.width,t.height),c=h.data.length,l={top:null,left:null,right:null,bottom:null};for(i=0;i<c;i+=4)0!==h.data[i+3]&&(o=i/4%t.width,r=~~(i/4/t.width),null===l.top&&(l.top=r),(null===l.left||o<l.left)&&(l.left=o),(null===l.right||l.right<o)&&(l.right=o),(null===l.bottom||l.bottom<r)&&(l.bottom=r));if(null!=l.bottom){var d=l.bottom-l.top,v=l.right-l.left,m=e.getImageData(l.left,l.top,v,d);return n?(n.canvas.width=v,n.canvas.height=d,n.putImageData(m,0,0),n.canvas):t}}}}},954:function(t,e,n){"use strict";class o{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,n,o,r,h){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=r,this.endWidth=h}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const r=t.x-e.x,h=t.y-e.y,c=e.x-n.x,l=e.y-n.y,d=(t.x+e.x)/2,v=(t.y+e.y)/2,m=(e.x+n.x)/2,_=(e.y+n.y)/2,f=Math.sqrt(r*r+h*h),w=Math.sqrt(c*c+l*l),x=w/(f+w),y=m+(d-m)*x,C=_+(v-_)*x,E=e.x-y,M=e.y-C;return{c1:new o(d+E,v+M),c2:new o(m+E,_+M)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),h=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-t,c=h-e;n+=Math.sqrt(o*o+c*c)}t=r,e=h}return n}point(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}class h{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let n,o,r,h=0,c=null;const l=()=>{h=Date.now(),c=null,n=t.apply(o,r),c||(o=null,r=[])};return function(...d){const v=Date.now(),m=e-(v-h);return o=this,r=d,m<=0||m>e?(c&&(clearTimeout(c),c=null),h=v,n=t.apply(o,r),c||(o=null,r=[])):c||(c=window.setTimeout(l,m)),n}}(h.prototype._strokeUpdate,this.throttle):h.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const image=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/o,h=e.height||this.canvas.height/o;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,h),n&&n()},image.onerror=t=>{n&&n(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,n=t.clientY,o=this._createPoint(e,n),r=this._data[this._data.length-1],h=r.points,c=h.length>0&&h[h.length-1],l=!!c&&o.distanceTo(c)<=this.minDistance,d=r.color;if(!c||!c||!l){const t=this._addPoint(o);c?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:o}),h.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new o(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(n),r={end:o,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=o,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,n=t*t,h=n*t,u=1-t,c=u*u,l=c*u;let d=l*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*u*n*e.control2.x,d+=h*e.endPoint.x;let v=l*e.startPoint.y;v+=3*c*t*e.control1.y,v+=3*u*n*e.control2.y,v+=h*e.endPoint.y;const m=Math.min(e.startWidth+h*o,this.maxWidth);this._drawCurveSegment(d,v,m)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,o),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const r of t){const{color:t,points:h}=r;if(h.length>1)for(let n=0;n<h.length;n+=1){const r=h[n],c=new o(r.x,r.y,r.time);this.penColor=t,0===n&&this._reset();const l=this._addPoint(c);l&&e({color:t,curve:l})}else this._reset(),n({color:t,point:h[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,o=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",n),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),n="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",n.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${n} ${o}" width="${n}" height="${o}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=h},960:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(18),n(14)),h=n(953),c=n(954),l=Object(r.a)(h.a).extend({name:"SignatureDrawBodyTab",data:function(){return{signaturePad:void 0}},mounted:function(){this.setupCanvases()},methods:{setupCanvases:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(canvas=t.$refs.signatureCanvas){e.next=5;break}return e.abrupt("return");case 5:t.signaturePad=new c.a(canvas,{minWidth:2,maxWidth:5}),window.addEventListener("resize",t.resizeCanvas),t.resizeCanvas();case 8:case"end":return e.stop()}}),e)})))()},resizeCanvas:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(o=Math.max(window.devicePixelRatio||1,1),canvas=t.$refs.signatureCanvas){e.next=6;break}return e.abrupt("return");case 6:canvas.width=canvas.offsetWidth*o,canvas.height=canvas.offsetHeight*o,null===(n=canvas.getContext("2d"))||void 0===n||n.scale(o,o);case 9:case"end":return e.stop()}}),e)})))()},clear:function(){this.signaturePad&&this.signaturePad.clear()},exportImage:function(){this.$emit("export-image",this.getImage())},getImage:function(){if(this.signaturePad){var canvas=this.$refs.signatureCanvas,t=this.trimCanvas(canvas);if(t)return t.toDataURL()}}},beforeDestroy:function(){try{window.removeEventListener("resize",this.resizeCanvas)}catch(t){}}}),d=n(1),component=Object(d.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"grid place-items-center"},[t("div",{staticClass:"w-full mx-auto bg-white rounded"},[t("canvas",{ref:"signatureCanvas",staticClass:"border h-56 border-[#C4C4C4] w-full rounded"})])])}),[],!1,null,null,null);e.default=component.exports}}]);