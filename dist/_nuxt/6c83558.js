(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1070:function(t,e,o){var content=o(1239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e8a91b7c",content,!0,{sourceMap:!1})},1238:function(t,e,o){"use strict";o(1070)},1239:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".line[data-v-e868ae7c]{width:100%;height:100%;background-color:#000}",""]),n.locals={},t.exports=n},1376:function(t,e,o){"use strict";o.r(e);o(279),o(35);var n={props:{x1:Number,y1:Number,x2:Number,y2:Number,tool:Object,generatePDF:Boolean,responsiveToolDim:Object},data:function(){return{svgToImageData:""}},watch:{generatePDF:function(){this.generatePDF&&this.convertImage()}},methods:{convertImage:function(){var t=this,e=this.$refs.highlightBox,img=new Image,o=(new XMLSerializer).serializeToString(e),canvas=document.createElement("canvas");img.onload=function(){canvas.width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0),t.svgToImageData=canvas.toDataURL("image/png")},img.src="data:image/svg+xml;base64,"+window.btoa(o)}},computed:{d:function(){return"M".concat(this.x1||0,",").concat(this.y1||0,"L").concat(this.x2||0,",").concat(this.y1||0,"L").concat(this.x2||0,",").concat(this.y2||0,"L").concat(this.x1||0,",").concat(this.y2||0)},style:function(){var t;return{width:"".concat(this.width*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleX)||1),"px")}},viewBox:function(){var t=Math.min(this.x1,this.x2),e=this.y2<this.y1?this.y2:this.y1;return"".concat(t||0," ").concat(e||0," ").concat(this.width||0," ").concat(this.height||0)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)*this.responsiveToolDim.height}}},c=(o(1238),o(1)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{ref:"highlightBox",style:t.style,attrs:{preserveAspectRatio:"none",viewBox:t.viewBox}},[e("path",{staticStyle:{fill:"rgb(255, 255, 0)",opacity:"0.4","stroke-width":"0"},attrs:{options:"draw",svgToImage:t.svgToImageData,x:t.x1,y:t.y1,y2:t.y2,x2:t.x2,d:t.d,"stroke-linecap":"round"}})])}),[],!1,null,"e868ae7c",null);e.default=component.exports}}]);