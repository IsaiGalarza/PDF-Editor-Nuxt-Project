/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{782:function(t,e,o){o(5)({target:"Math",stat:!0},{trunc:o(420)})},952:function(t,e,o){"use strict";class n{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class h{constructor(t,e,o,n,h,r){this.startPoint=t,this.control2=e,this.control1=o,this.endPoint=n,this.startWidth=h,this.endWidth=r}static fromPoints(t,e){const o=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new h(t[1],o,n,t[2],e.start,e.end)}static calculateControlPoints(t,e,o){const h=t.x-e.x,r=t.y-e.y,c=e.x-o.x,l=e.y-o.y,d=(t.x+e.x)/2,v=(t.y+e.y)/2,_=(e.x+o.x)/2,m=(e.y+o.y)/2,w=Math.sqrt(h*h+r*r),x=Math.sqrt(c*c+l*l),y=x/(w+x),f=_+(d-_)*y,E=m+(v-m)*y,M=e.x-f,P=e.y-E;return{c1:new n(d+M,v+P),c2:new n(_+M,m+P)}}length(){let t,e,o=0;for(let i=0;i<=10;i+=1){const n=i/10,h=this.point(n,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this.point(n,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const n=h-t,c=r-e;o+=Math.sqrt(n*n+c*c)}t=h,e=r}return o}point(t,e,o,n,h){return e*(1-t)*(1-t)*(1-t)+3*o*(1-t)*(1-t)*t+3*n*(1-t)*t*t+h*t*t*t}}class r{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let o,n,h,r=0,c=null;const l=()=>{r=Date.now(),c=null,o=t.apply(n,h),c||(n=null,h=[])};return function(...d){const v=Date.now(),_=e-(v-r);return n=this,h=d,_<=0||_>e?(c&&(clearTimeout(c),c=null),r=v,o=t.apply(n,h),c||(n=null,h=[])):c||(c=window.setTimeout(l,_)),o}}(r.prototype._strokeUpdate,this.throttle):r.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},o){const image=new Image,n=e.ratio||window.devicePixelRatio||1,h=e.width||this.canvas.width/n,r=e.height||this.canvas.height/n;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,h,r),o&&o()},image.onerror=t=>{o&&o(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,o=t.clientY,n=this._createPoint(e,o),h=this._data[this._data.length-1],r=h.points,c=r.length>0&&r[r.length-1],l=!!c&&n.distanceTo(c)<=this.minDistance,d=h.color;if(!c||!c||!l){const t=this._addPoint(n);c?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:n}),r.push({time:n.time,x:n.x,y:n.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new n(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),o=h.fromPoints(e,t);return e.shift(),o}return null}_calculateCurveWidths(t,e){const o=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(o),h={end:n,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=n,h}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,o){const n=this._ctx;n.moveTo(t,e),n.arc(t,e,o,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const o=this._ctx,n=e.endWidth-e.startWidth,h=2*Math.floor(e.length());o.beginPath(),o.fillStyle=t;for(let i=0;i<h;i+=1){const t=i/h,o=t*t,r=o*t,u=1-t,c=u*u,l=c*u;let d=l*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*u*o*e.control2.x,d+=r*e.endPoint.x;let v=l*e.startPoint.y;v+=3*c*t*e.control1.y,v+=3*u*o*e.control2.y,v+=r*e.endPoint.y;const _=Math.min(e.startWidth+r*n,this.maxWidth);this._drawCurveSegment(d,v,_)}o.closePath(),o.fill()}_drawDot({color:t,point:e}){const o=this._ctx,n="function"==typeof this.dotSize?this.dotSize():this.dotSize;o.beginPath(),this._drawCurveSegment(e.x,e.y,n),o.closePath(),o.fillStyle=t,o.fill()}_fromData(t,e,o){for(const h of t){const{color:t,points:r}=h;if(r.length>1)for(let o=0;o<r.length;o+=1){const h=r[o],c=new n(h.x,h.y,h.time);this.penColor=t,0===o&&this._reset();const l=this._addPoint(c);l&&e({color:t,curve:l})}else this._reset(),o({color:t,point:r[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),o=this.canvas.width/e,n=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const o=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",o),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),o="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",o.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${o} ${n}" width="${o}" height="${n}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=r}}]);