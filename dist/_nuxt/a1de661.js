<<<<<<< HEAD:dist/_nuxt/a1de661.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1365:function(t,n,e){"use strict";e.r(n);var o=e(63),r=(e(417),e(130),e(56),e(28),e(32),e(7),{props:{tool:Object,points:Array,showPublishModal:Boolean,id:Number,toolLength:Number,drawingStart:Boolean,mouseUp:Boolean,generatePDF:Boolean},data:function(){return{svgToImageData:""}},mounted:function(){},watch:{generatePDF:function(){this.generatePDF&&this.convertImage()}},methods:{convertImage:function(){var t=this,n=this.$refs.drawBox,img=new Image,e=(new XMLSerializer).serializeToString(n),canvas=document.createElement("canvas");img.onload=function(){canvas.width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0),t.svgToImageData=canvas.toDataURL("image/png")},img.src="data:image/svg+xml;base64,"+window.btoa(e)}},computed:{d:function(){var t=this.points.map((function(p,i){return i%2==0?"L".concat(p,","):"".concat(p)})).join(" ");return"M".concat(this.points[0],",").concat(this.points[1]).concat(t)},style:function(){var t,n;return{width:"".concat((this.width+2)*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleX)||1),"px"),height:"".concat((this.height+2)*((null===(n=this.tool)||void 0===n?void 0:n.pageScaleY)||1),"px"),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},x1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},x2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},viewBox:function(){var t=Math.min(this.x1,this.x2),n=Math.min(this.y1,this.y2);return"".concat(t-1.5," ").concat(n-1.5," ").concat(this.width+2," ").concat(this.height+2)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)}}}),c=e(1),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("svg",{ref:"drawBox",staticClass:"svg_element",style:t.style,attrs:{preserveAspectRatio:"none",viewBox:t.viewBox}},[n("path",{attrs:{svgToImage:t.svgToImageData,options:"draw",x:t.x1,y:t.y1,d:t.d,stroke:"#000",fill:"none"}})])}),[],!1,null,null,null);n.default=component.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1356:function(t,n,e){"use strict";e.r(n);var o=e(62),r=(e(417),e(129),e(56),e(27),e(32),e(7),{props:{tool:Object,points:Array,showPublishModal:Boolean,id:Number,toolLength:Number,drawingStart:Boolean,mouseUp:Boolean,generatePDF:Boolean},data:function(){return{svgToImageData:""}},mounted:function(){},watch:{generatePDF:function(){this.generatePDF&&this.convertImage()}},methods:{convertImage:function(){var t=this,n=this.$refs.drawBox,img=new Image,e=(new XMLSerializer).serializeToString(n),canvas=document.createElement("canvas");img.onload=function(){canvas.width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0),t.svgToImageData=canvas.toDataURL("image/png")},img.src="data:image/svg+xml;base64,"+window.btoa(e)}},computed:{d:function(){var t=this.points.map((function(p,i){return i%2==0?"L".concat(p,","):"".concat(p)})).join(" ");return"M".concat(this.points[0],",").concat(this.points[1]).concat(t)},style:function(){var t,n;return{width:"".concat((this.width+2)*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleX)||1),"px"),height:"".concat((this.height+2)*((null===(n=this.tool)||void 0===n?void 0:n.pageScaleY)||1),"px"),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},x1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},x2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},viewBox:function(){var t=Math.min(this.x1,this.x2),n=Math.min(this.y1,this.y2);return"".concat(t-1.5," ").concat(n-1.5," ").concat(this.width+2," ").concat(this.height+2)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)}}}),c=e(1),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("svg",{ref:"drawBox",staticClass:"svg_element",style:t.style,attrs:{preserveAspectRatio:"none",viewBox:t.viewBox}},[n("path",{attrs:{svgToImage:t.svgToImageData,options:"draw",x:t.x1,y:t.y1,d:t.d,stroke:"#000",fill:"none"}})])}),[],!1,null,null,null);n.default=component.exports}}]);
>>>>>>> fixed-ui:dist/_nuxt/b419663.js
