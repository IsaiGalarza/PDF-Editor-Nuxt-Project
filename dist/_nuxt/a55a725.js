/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[149,152,153,154],{1022:function(t,e,n){"use strict";n(786)},1023:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-2ec95d11] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-2ec95d11] .el-dialog__header{padding:0}*[data-v-2ec95d11] .el-dialog__footer,*[data-v-2ec95d11] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-2ec95d11] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1024:function(t,e,n){"use strict";n(787)},1025:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.tab-container[data-v-2ec95d11]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-2ec95d11]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-2ec95d11]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-2ec95d11]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-2ec95d11]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),o.locals={},t.exports=o},773:function(t,e,n){"use strict";(function(t){var o=n(3),r=(n(31),n(285),n(7),n(22),n(44),n(77),n(33),n(59),n(26),n(28),n(90),n(93),n(29),n(18),n(14)),c=n(954),l=n(206),h=n.n(l),d=n(43);function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=Object(r.a)(c.a).extend({components:{SpinnerDottedIcon:d.default},name:"SignatureTypeBodyTab",data:function(){return{textValue:"",activeColor:"#000",loading:!1,loadingFont:!1,currentFont:"",fonts:[],updatedFontFamily:""}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.$refs.inputElement.focus(),t.changeFont=h.a.debounce(t.changeFont,300);case 4:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.user,t.textValue="".concat(n.firstName," ").concat(n.lastName),e.next=4,t.getFonts();case 4:case"end":return e.stop()}}),e)})))()},computed:{currentFontObject:function(){var t=this,e=this.fonts.find((function(e){return e.key==t.currentFont}));if(e)return e}},methods:{getFonts:function(){var e=this;return this.$axios.$get("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(t.env.GOOGLE_FONT_API_KEY||"AIzaSyAq0-u-PdIEZLvk8q6-9fIcPVG-8dtVfkc")).then((function(t){var n,o=function(t){var e=t,n={100:"thin",200:"extralight",300:"light",500:"medium",600:"semibold",700:"bold",800:"extrabold",900:"black"};for(var o in n)e=e.replace(o,"".concat(n[o],"-"));return e.replace(/-+$/,"")},r=f(t.items);try{for(r.s();!(n=r.n()).done;){var c=n.value,l=c.family;for(var h in c.files)e.fonts.push({family:"".concat(l," (").concat(o(h),")"),familyName:l,fontWeight:h,file:c.files[h].replace("http://","https://"),key:"".concat(l," ").concat(o(h))})}}catch(t){r.e(t)}finally{r.f()}var d="Dancing Script semibold";e.fonts.some((function(t){return t.key==d}))||(d=e.fonts.length>0?e.fonts[0].key:""),d&&(e.currentFont=d)}))},clear:function(){this.textValue=""},exportImage:function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d"),text=this.textValue,e=window.devicePixelRatio||1;if(t){t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"');var n=t.measureText(text),o=n.actualBoundingBoxLeft,r=n.actualBoundingBoxRight,c=n.actualBoundingBoxAscent,l=n.actualBoundingBoxDescent,h=n.fontBoundingBoxAscent,d=n.fontBoundingBoxDescent,f=n.width,v=5*Math.max(Math.abs(c)+Math.abs(l),(Math.abs(h)||0)+(Math.abs(d)||0));canvas.height=v;var m=2*Math.max(f,Math.abs(o)+r);canvas.width=m,t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"'),t.textBaseline="top",t.font="".concat(100*e,'px "').concat(this.updatedFontFamily,'"'),t.fillStyle=this.activeColor,t.fillText(text,m/4,v/4);var x=this.trimCanvas(canvas);this.$emit("export-image",x.toDataURL())}},changeFont:function(){var t=this;this.loadingFont=!0;var e=this.currentFontObject;if(e){var n=new FontFace(e.key,"url(".concat(e.file,")"));console.log(e,n),n.load().then((function(n){document.fonts.add(n),t.updatedFontFamily=e.key})).finally((function(){t.loadingFont=!1}))}}},watch:{currentFontObject:function(){this.changeFont()}}})}).call(this,n(156))},785:function(t,e,n){n(5)({target:"Math",stat:!0},{trunc:n(420)})},786:function(t,e,n){var content=n(1023);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("153d49ea",content,!0,{sourceMap:!1})},787:function(t,e,n){var content=n(1025);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("872ba740",content,!0,{sourceMap:!1})},954:function(t,e,n){"use strict";n(785);e.a={methods:{clear:function(){console.log("Clear method needs to be over-written")},exportImage:function(){console.log("exportImage method needs to be over-written")},trimCanvas2:function(canvas){if(canvas){var t=canvas.getContext("2d");if(t){for(var e=t.getImageData(0,0,canvas.width,canvas.height),n=e.data.length,o=null,r=null,c=null,l=null,h=0,d=0,i=0;i<n;i+=4)0!==e.data[i+3]&&(h=i/4%canvas.width,d=Math.trunc(i/4/canvas.width),null===o&&(o=d),(null===c||h<c)&&(c=h),(null===l||h>l)&&(l=h),(null===r||r<d)&&(r=d));if(null!=r){var f=(r=r||0)-(o=o||0)+20,v=(l=l||0)-(c=c||0)+20,m=t.getImageData(c,o,v,f);canvas.width=v,canvas.height=f,t.putImageData(m,10,10)}}}},trimCanvas:function(t){var e=t.getContext("2d"),n=document.createElement("canvas").getContext("2d");if(!e)return t;var i,o,r,c=e.getImageData(0,0,t.width,t.height),l=c.data.length,h={top:null,left:null,right:null,bottom:null};for(i=0;i<l;i+=4)0!==c.data[i+3]&&(o=i/4%t.width,r=~~(i/4/t.width),null===h.top&&(h.top=r),(null===h.left||o<h.left)&&(h.left=o),(null===h.right||h.right<o)&&(h.right=o),(null===h.bottom||h.bottom<r)&&(h.bottom=r));if(null!=h.bottom){var d=h.bottom-h.top,f=h.right-h.left,v=e.getImageData(h.left,h.top,f,d);return n?(n.canvas.width=f,n.canvas.height=d,n.putImageData(v,0,0),n.canvas):t}}}}},955:function(t,e,n){"use strict";class o{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,n,o,r,c){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=r,this.endWidth=c}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const r=t.x-e.x,c=t.y-e.y,l=e.x-n.x,h=e.y-n.y,d=(t.x+e.x)/2,f=(t.y+e.y)/2,v=(e.x+n.x)/2,m=(e.y+n.y)/2,x=Math.sqrt(r*r+c*c),w=Math.sqrt(l*l+h*h),y=w/(x+w),_=v+(d-v)*y,C=m+(f-m)*y,k=e.x-_,D=e.y-C;return{c1:new o(d+k,f+D),c2:new o(v+k,m+D)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-t,l=c-e;n+=Math.sqrt(o*o+l*l)}t=r,e=c}return n}point(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}class c{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let n,o,r,c=0,l=null;const h=()=>{c=Date.now(),l=null,n=t.apply(o,r),l||(o=null,r=[])};return function(...d){const f=Date.now(),v=e-(f-c);return o=this,r=d,v<=0||v>e?(l&&(clearTimeout(l),l=null),c=f,n=t.apply(o,r),l||(o=null,r=[])):l||(l=window.setTimeout(h,v)),n}}(c.prototype._strokeUpdate,this.throttle):c.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const image=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/o,c=e.height||this.canvas.height/o;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,c),n&&n()},image.onerror=t=>{n&&n(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,n=t.clientY,o=this._createPoint(e,n),r=this._data[this._data.length-1],c=r.points,l=c.length>0&&c[c.length-1],h=!!l&&o.distanceTo(l)<=this.minDistance,d=r.color;if(!l||!l||!h){const t=this._addPoint(o);l?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:o}),c.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new o(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(n),r={end:o,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=o,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,n=t*t,c=n*t,u=1-t,l=u*u,h=l*u;let d=h*e.startPoint.x;d+=3*l*t*e.control1.x,d+=3*u*n*e.control2.x,d+=c*e.endPoint.x;let f=h*e.startPoint.y;f+=3*l*t*e.control1.y,f+=3*u*n*e.control2.y,f+=c*e.endPoint.y;const v=Math.min(e.startWidth+c*o,this.maxWidth);this._drawCurveSegment(d,f,v)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,o),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const r of t){const{color:t,points:c}=r;if(c.length>1)for(let n=0;n<c.length;n+=1){const r=c[n],l=new o(r.x,r.y,r.time);this.penColor=t,0===n&&this._reset();const h=this._addPoint(l);h&&e({color:t,curve:h})}else this._reset(),n({color:t,point:c[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,o=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",n),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),n="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",n.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${n} ${o}" width="${n}" height="${o}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=c},961:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(18),n(14)),c=n(954),l=n(955),h=Object(r.a)(c.a).extend({name:"SignatureDrawBodyTab",data:function(){return{signaturePad:void 0}},mounted:function(){this.setupCanvases()},methods:{setupCanvases:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(canvas=t.$refs.signatureCanvas){e.next=5;break}return e.abrupt("return");case 5:t.signaturePad=new l.a(canvas,{minWidth:2,maxWidth:5}),window.addEventListener("resize",t.resizeCanvas),t.resizeCanvas();case 8:case"end":return e.stop()}}),e)})))()},resizeCanvas:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(o=Math.max(window.devicePixelRatio||1,1),canvas=t.$refs.signatureCanvas){e.next=6;break}return e.abrupt("return");case 6:canvas.width=canvas.offsetWidth*o,canvas.height=canvas.offsetHeight*o,null===(n=canvas.getContext("2d"))||void 0===n||n.scale(o,o);case 9:case"end":return e.stop()}}),e)})))()},clear:function(){this.signaturePad&&this.signaturePad.clear()},exportImage:function(){this.$emit("export-image",this.getImage())},getImage:function(){if(this.signaturePad){var canvas=this.$refs.signatureCanvas,t=this.trimCanvas(canvas);if(t)return t.toDataURL()}}},beforeDestroy:function(){try{window.removeEventListener("resize",this.resizeCanvas)}catch(t){}}}),d=n(1),component=Object(d.a)(h,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"grid place-items-center"},[t("div",{staticClass:"w-full mx-auto bg-white rounded"},[t("canvas",{ref:"signatureCanvas",staticClass:"border h-56 border-[#C4C4C4] w-full rounded"})])])}),[],!1,null,null,null);e.default=component.exports},969:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(18),n(285),n(7),n(0)),c=n(961),l=n(978),h=r.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:c.default},{label:"Type",value:"type",component:l.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return n=e.sent,e.next=5,n.blob();case 5:o=e.sent,(r=new FileReader).readAsDataURL(o),r.onloadend=function(){var e=r.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 3:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault)this.forceDisplaySrc=!1;else{var t=this.$refs.activeTabComponent;t&&t.clear()}},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),d=(n(1022),n(1024),n(1)),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(n){return e("button",{key:n.value,staticClass:"tab-button",class:{active:t.activeTab===n.value},on:{click:function(e){t.activeTab=n.value}}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"EDIT":"CLEAR")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault&&t.useDefaultButton,expression:"displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.displayDefault?"Signature":"Initial"))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"2ec95d11",null);e.default=component.exports},978:function(t,e,n){"use strict";n.r(e);n(56),n(32),n(7);var o=n(773).a,r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],ref:"inputElement",staticClass:"w-full bg-white border-b-2 border-paperdazgreen-400 cursor-text mt-2 py-3 px-5 rounded outline-none text-4xl sm:text-5xl caret-paperdazgreen-400 min-h-[110px]",style:{color:t.activeColor,fontFamily:"".concat(this.updatedFontFamily," !important")},attrs:{type:"text",id:"pdf-signature-type-input-box"},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-6 flex items-center gap-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentFont,expression:"currentFont"}],staticClass:"w-52 max-w-full py-2 px-1 rounded",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentFont=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("Select Font")]),t._v(" "),t._l(t.fonts,(function(n){return e("option",{key:n.key,domProps:{value:n.key}},[t._v("\n        "+t._s(n.family)+"\n      ")])}))],2),t._v(" "),e("transition",{attrs:{name:"fade",duration:"50"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loadingFont||t.$fetchState.pending,expression:"loadingFont || $fetchState.pending"}],staticClass:"animate-spin text-paperdazgreen-400"},[e("spinner-dotted-icon",{attrs:{height:"20",width:"20"}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);