(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1091:function(t,e,n){var content=n(1249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1b7223db",content,!0,{sourceMap:!1})},1248:function(t,e,n){"use strict";n(1091)},1249:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".line[data-v-49c9200c]{width:100%;height:100%;background-color:#000}",""]),o.locals={},t.exports=o},1382:function(t,e,n){"use strict";n.r(e);n(278),n(35);var o={props:{x1:Number,y1:Number,x2:Number,y2:Number,tool:Object,generatePDF:Boolean},data:function(){return{svgToImageData:""}},watch:{generatePDF:function(){this.generatePDF&&this.convertImage()}},methods:{convertImage:function(){var t=this,e=this.$refs.highlightBox,img=new Image,n=(new XMLSerializer).serializeToString(e),canvas=document.createElement("canvas");img.onload=function(){canvas.width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0),t.svgToImageData=canvas.toDataURL("image/png")},img.src="data:image/svg+xml;base64,"+window.btoa(n)}},computed:{d:function(){return"M".concat(this.x1||0,",").concat(this.y1||0,"L").concat(this.x2||0,",").concat(this.y1||0,"L").concat(this.x2||0,",").concat(this.y2||0,"L").concat(this.x1||0,",").concat(this.y2||0)},style:function(){var t;return{width:"".concat(this.width*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleX)||1),"px")}},viewBox:function(){var t=Math.min(this.x1,this.x2),e=this.y2<this.y1?this.y2:this.y1;return"".concat(t||0," ").concat(e||0," ").concat(this.width||0," ").concat(this.height||0)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)}}},c=(n(1248),n(1)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("svg",{ref:"highlightBox",style:t.style,attrs:{preserveAspectRatio:"none",viewBox:t.viewBox}},[e("path",{staticStyle:{fill:"rgb(255, 255, 0)",opacity:"0.4","stroke-width":"0"},attrs:{options:"draw",svgToImage:t.svgToImageData,x:t.x1,y:t.y1,y2:t.y2,x2:t.x2,d:t.d,"stroke-linecap":"round"}})])}),[],!1,null,"49c9200c",null);e.default=component.exports}}]);