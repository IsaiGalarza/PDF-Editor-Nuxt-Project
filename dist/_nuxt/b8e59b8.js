/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[195,152],{1008:function(t,e,o){"use strict";o(785)},1009:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-2ec95d11] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-2ec95d11] .el-dialog__header{padding:0}*[data-v-2ec95d11] .el-dialog__footer,*[data-v-2ec95d11] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-2ec95d11] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1010:function(t,e,o){"use strict";o(786)},1011:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'.tab-container[data-v-2ec95d11]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-2ec95d11]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-2ec95d11]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-2ec95d11]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-2ec95d11]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),n.locals={},t.exports=n},1074:function(t,e,o){var content=o(1250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1a16c91c",content,!0,{sourceMap:!1})},1248:function(t,e,o){t.exports=o.p+"img/initial_tag.a7154aa.svg"},1249:function(t,e,o){"use strict";o(1074)},1250:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".absolute-image[data-v-14afa1a5]{transition:.25s;max-width:200px;height:auto;position:absolute;top:0px;left:5%;opacity:1}.toolTip[data-v-14afa1a5]{position:absolute;left:100%;bottom:calc(100% - 4px);background-color:#ff0;border-radius:2px;font-size:10px;color:red;font-weight:600;padding:3px 6px 8px;-webkit-clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,19% 75%,0 99%,0 75%);clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,19% 75%,0 99%,0 75%)}",""]),n.locals={},t.exports=n},1383:function(t,e,o){"use strict";o.r(e);o(43),o(30),o(36),o(54),o(55);var n=o(3),r=o(6),l=(o(18),o(279),o(7),o(24),o(77),o(27),o(76),o(834)),c=o(770),h=o(14),d=(o(421),o(127)),f=o(798),v=o(59);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y,x=Object(h.a)(c.a).extend({props:{scale:Number,file:Object,completed:String,setInitialSignType:Function,tool:Object,isCreator:Boolean,responsiveDim:Object,responsiveToolDim:Object},computed:w(w({},Object(d.e)(["loadedPdfFile"])),{},{isOwner:function(){var t,e;return this.file.userId==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)},theInitial:function(){var t;return null===(t=this.$store.getters)||void 0===t?void 0:t.getUserInitial},isSign:function(){return String(this.file.fileAction).toLowerCase()===v.a.SIGNED},isAgreedSign:function(){return this.$store.state.agreeSign},isComplete:function(){return String(this.file.fileAction).toLowerCase()===v.a.COMPLETE},uploaded:function(){var t,e;switch(this.$auth.loggedIn){case!0:return null!==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.initialURL)&&!this.isCreator;case!1:return!1}},style:function(){var t;return{width:"".concat(70*this.responsiveDim.width,"px"),height:"".concat(20*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleY)||1)*this.responsiveDim.height,"px")}}}),data:function(){return{showInitialModal:!1,initial:null,initialimgDisplay:!1,completedImgData:null,isFirstAction:!1}},components:{AddToPageDrawOrType:l.default,DrawOrTypeModal:f.default},methods:{checkToolIndex:function(){var t=this,e=document.querySelectorAll(".annot-button");Array.from(e).forEach((function(element,e){element==t.$refs.annotbutton&&0==e&&(t.isFirstAction=!0)}))},selectIsCreatorDisplay:function(){this.setInitialImgDisplay()},popUpIfNoinitial:function(){!this.theInitial&&!this.isCreator&&this.setInitialSignType("initial")},changeInitialToBase64:function(t){var e,o,n,r,l,c,h=this,d=function(t){return fetch(t).then((function(t){return t.blob()})).then((function(t){return new Promise((function(e,o){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.onerror=o,n.readAsDataURL(t)}))}))};t&&((null===(l=this.$auth)||void 0===l||null===(c=l.user)||void 0===c?void 0:c.initialURL)&&d(t).then((function(t){h.completedImgData=t})));(null===(e=this.$auth)||void 0===e||null===(o=e.user)||void 0===o?void 0:o.initialURL)&&d(null===(n=this.$auth)||void 0===n||null===(r=n.user)||void 0===r?void 0:r.initialURL).then((function(t){h.initial=t}))},imageExportedLocal:function(image,t){this.$BUS.$emit(t?"signature-update":"initials-update",image),this.imageExported(image,t)},popInitial:function(){!this.isCreator&&(this.initialimgDisplay=!0),!this.isCreator&&this.$auth.loggedIn&&(this.uploaded||(this.showInitialModal=!0))},setInitialImgDisplay:function(){(this.$auth.loggedIn||this.$store.getters.getFillAsGuest||!this.theInitial)&&(this.initialimgDisplay=!0,!this.theInitial&&this.setInitialSignType("initial"))}},mounted:function(){this.changeInitialToBase64(),this.completed&&this.changeInitialToBase64(this.completed),!this.initialimgDisplay&&!this.isCreator&&this.tool.justMounted&&this.popUpIfNoinitial()},watch:{initialimgDisplay:function(){var t=this;this.theInitial&&setTimeout((function(){t.$BUS.$emit("scroll-to-tools")}),100)},theInitial:function(){this.$BUS.$emit("scroll-to-tools")},"$auth.user.initialURL":(y=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.changeInitialToBase64();case 1:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})}}),_=x,D=(o(1249),o(1)),component=Object(D.a)(_,(function(){var t,e=this,n=e._self._c;e._self._setupProxy;return n("div",[e.completed?n("img",{staticClass:"absolute-image",attrs:{src:e.completedImgData,width:"".concat(60*(e.tool.justMounted?e.responsiveToolDim.width:e.responsiveDim.width),"px")}}):e._e(),e._v(" "),!e.initialimgDisplay&&e.isCreator?n("img",{ref:"annotbutton",staticClass:"annot-button",class:[!e.$auth.loggedIn||e.initialimgDisplay||e.isCreator?" ":"puls",1!==e.isAgreedSign&&e.isSign?"pointer-events-none":""],attrs:{src:o(979),attr:"initial",elemFill:e.uploaded&&e.initialimgDisplay,uploaded:e.uploaded,width:18*((null===(t=e.tool)||void 0===t?void 0:t.pageScaleY)||1)*e.responsiveToolDim.width}}):e._e(),e._v(" "),e.initialimgDisplay||e.isCreator||e.tool.justMounted?e.theInitial&&!e.isCreator?n("img",{attrs:{width:"".concat(60*e.responsiveToolDim.width,"px"),src:e.theInitial}}):e._e():n("img",{ref:"annotbutton",staticClass:"annot-button",class:[!e.$auth.loggedIn||e.initialimgDisplay||e.isCreator?" ":"puls",1!==e.isAgreedSign&&e.isSign?"pointer-events-none":""],attrs:{src:o(1248),attr:"initial",elemFill:e.initialimgDisplay,uploaded:e.uploaded,width:"".concat(43*e.responsiveDim.width,"px")},on:{click:e.selectIsCreatorDisplay}})])}),[],!1,null,"14afa1a5",null);e.default=component.exports},770:function(t,e,o){"use strict";var n=o(3),r=(o(18),o(7),o(805),o(806),o(807),o(808),o(809),o(810),o(811),o(812),o(813),o(814),o(815),o(816),o(817),o(818),o(819),o(820),o(821),o(822),o(823),o(824),o(825),o(826),o(827),o(828),o(829),o(37));e.a={data:function(){return{fetchDataSign:{},fetchDataInitial:{}}},mounted:function(){this.getUserSignatureToBlob()},mixins:[r.a],methods:{getUserSignatureToBlob:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null===(n=null===(o=t.$auth)||void 0===o?void 0:o.user)||void 0===n?void 0:n.signatureURL).then((function(t){return t.blob()}));case 2:return t.fetchDataSign=e.sent,e.next=5,fetch(null===(l=null===(r=t.$auth)||void 0===r?void 0:r.user)||void 0===l?void 0:l.initialURL).then((function(t){return t.blob()}));case 5:t.fetchDataInitial=e.sent;case 6:case"end":return e.stop()}}),e)})))()},dataURIToBlob:function(t){var e=t.split(",");if(!(e.length<1)){for(var o=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),n=e[0].split(":")[1].split(";")[0],r=new Uint8Array(o.length),i=0;i<o.length;i++)r[i]=o.charCodeAt(i);return new Blob([r],{type:n})}},imageExported:function(image,t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.dataURIToBlob(image).size!=e.fetchDataSign.size){o.next=4;break}return o.abrupt("return");case 4:if(e.dataURIToBlob(image).size!=e.fetchDataInitial.size){o.next=6;break}return o.abrupt("return");case 6:return(c=new FormData).append("upload",e.dataURIToBlob(image)),c.append("type",t?"signature":"initial"),c.append("userId",null===(l=null===(r=e.$auth||{})||void 0===r?void 0:r.user)||void 0===l?void 0:l.id),t?e.$store.commit("SET_FILE_SIGNATURE",image):e.$store.commit("SET_FILE_INITIAL",image),o.abrupt("return");case 14:e.$axios.$post("/files",c).then(Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.filterUsers();case 2:e.$notify.success({title:t?"Signature":"Initials",message:"Your ".concat(t?"signature":"initials"," has been uploaded")});case 3:case"end":return o.stop()}}),o)})))).catch((function(o){e.$notify.error({title:t?"Signature":"Initials",message:o.message||"Error uploading ".concat(t?"signature":"initials")})}));case 15:case"end":return o.stop()}}),o)})))()}}}},784:function(t,e,o){o(5)({target:"Math",stat:!0},{trunc:o(422)})},785:function(t,e,o){var content=o(1009);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("153d49ea",content,!0,{sourceMap:!1})},786:function(t,e,o){var content=o(1011);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("872ba740",content,!0,{sourceMap:!1})},795:function(t,e,o){"use strict";class n{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,o,n,r,l){this.startPoint=t,this.control2=e,this.control1=o,this.endPoint=n,this.startWidth=r,this.endWidth=l}static fromPoints(t,e){const o=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],o,n,t[2],e.start,e.end)}static calculateControlPoints(t,e,o){const r=t.x-e.x,l=t.y-e.y,c=e.x-o.x,h=e.y-o.y,d=(t.x+e.x)/2,f=(t.y+e.y)/2,v=(e.x+o.x)/2,m=(e.y+o.y)/2,w=Math.sqrt(r*r+l*l),y=Math.sqrt(c*c+h*h),x=y/(w+y),_=v+(d-v)*x,D=m+(f-m)*x,C=e.x-_,A=e.y-D;return{c1:new n(d+C,f+A),c2:new n(v+C,m+A)}}length(){let t,e,o=0;for(let i=0;i<=10;i+=1){const n=i/10,r=this.point(n,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(n,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const n=r-t,c=l-e;o+=Math.sqrt(n*n+c*c)}t=r,e=l}return o}point(t,e,o,n,r){return e*(1-t)*(1-t)*(1-t)+3*o*(1-t)*(1-t)*t+3*n*(1-t)*t*t+r*t*t*t}}class l{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let o,n,r,l=0,c=null;const h=()=>{l=Date.now(),c=null,o=t.apply(n,r),c||(n=null,r=[])};return function(...d){const f=Date.now(),v=e-(f-l);return n=this,r=d,v<=0||v>e?(c&&(clearTimeout(c),c=null),l=f,o=t.apply(n,r),c||(n=null,r=[])):c||(c=window.setTimeout(h,v)),o}}(l.prototype._strokeUpdate,this.throttle):l.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},o){const image=new Image,n=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/n,l=e.height||this.canvas.height/n;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,l),o&&o()},image.onerror=t=>{o&&o(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,o=t.clientY,n=this._createPoint(e,o),r=this._data[this._data.length-1],l=r.points,c=l.length>0&&l[l.length-1],h=!!c&&n.distanceTo(c)<=this.minDistance,d=r.color;if(!c||!c||!h){const t=this._addPoint(n);c?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:n}),l.push({time:n.time,x:n.x,y:n.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new n(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),o=r.fromPoints(e,t);return e.shift(),o}return null}_calculateCurveWidths(t,e){const o=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(o),r={end:n,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=n,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,o){const n=this._ctx;n.moveTo(t,e),n.arc(t,e,o,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const o=this._ctx,n=e.endWidth-e.startWidth,r=2*Math.floor(e.length());o.beginPath(),o.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,o=t*t,l=o*t,u=1-t,c=u*u,h=c*u;let d=h*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*u*o*e.control2.x,d+=l*e.endPoint.x;let f=h*e.startPoint.y;f+=3*c*t*e.control1.y,f+=3*u*o*e.control2.y,f+=l*e.endPoint.y;const v=Math.min(e.startWidth+l*n,this.maxWidth);this._drawCurveSegment(d,f,v)}o.closePath(),o.fill()}_drawDot({color:t,point:e}){const o=this._ctx,n="function"==typeof this.dotSize?this.dotSize():this.dotSize;o.beginPath(),this._drawCurveSegment(e.x,e.y,n),o.closePath(),o.fillStyle=t,o.fill()}_fromData(t,e,o){for(const r of t){const{color:t,points:l}=r;if(l.length>1)for(let o=0;o<l.length;o+=1){const r=l[o],c=new n(r.x,r.y,r.time);this.penColor=t,0===o&&this._reset();const h=this._addPoint(c);h&&e({color:t,curve:h})}else this._reset(),o({color:t,point:l[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),o=this.canvas.width/e,n=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const o=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",o),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),o="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",o.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${o} ${n}" width="${o}" height="${n}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=l},834:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(18),o(284),o(7),o(0)),l=o(799),c=o(973),h=r.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:l.default},{label:"Type",value:"type",component:c.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return o=e.sent,e.next=5,o.blob();case 5:n=e.sent,(r=new FileReader).readAsDataURL(n),r.onloadend=function(){var e=r.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 3:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault)this.forceDisplaySrc=!1;else{var t=this.$refs.activeTabComponent;t&&t.clear()}},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),d=(o(1008),o(1010),o(1)),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(o){return e("button",{key:o.value,staticClass:"tab-button",class:{active:t.activeTab===o.value},on:{click:function(e){t.activeTab=o.value}}},[t._v("\n        "+t._s(o.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"EDIT":"CLEAR")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault&&t.useDefaultButton,expression:"displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.displayDefault?"Signature":"Initial"))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"2ec95d11",null);e.default=component.exports},979:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA7CAYAAADii3NbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgB7Zo9S8NAHId/FwviC6goiAhSdRDc1FERsji5OLrlG1gXFZc6iTp1drF+DRfr2+jbIrpoEURUxAgOFqzxrqhEPW2b/v82gXvg6CVp4eF42lwhQIQQc9vOhXyNI/xkLUQII8uFkeXCyHJhZLkwslwYWS4iJRsDMUPtI+hu6sO5e4qD2z1QQio73DmG8Z7JwlxJKyiFSTNQK+qno7ELlJDKXjyefTm+froEJaQZ7F1t4OH5Dh0NXTh/PP0hXynkX7CT+8PC4IBUtr91EOO9k5/Hq8dLcHP3oIJUti5Wj5baNnBh7mBcGFkujCwXRpYLI8uFkeWCdCOzf7NbGFxEa2U9ARcewo/0tPCCCTnJyIEQj0zuBbb4EJ/ZcZLyYAEhw/OQWhlNT6u58F+Y2XISwkJSTptRbTy4niUSKyNr6x+nxPf3zG46cdRgU16Jo1p4yNbkMbFop4/8p3/8Gizb6SzysOU0g+qQyeUx8F1UIf761H937O9Tx5+yin/pWNOnjqKyCtaOf+lTR0l3MMaOf+1TR0kr64eq42J96ihbVlFRxyX2qSOQrCJQx2X0qSPwritAx2X1qSPwyvop1nGQPnWQyCq0HVfQpw4yWcWXjivsUweprOJdOCn7nE7ZaReEiPkdZ+o1DFvCIsg/M27s1UMCEXiuSyaQjVkCqais7BsWq8PB4yOK3AAAAABJRU5ErkJggg=="}}]);