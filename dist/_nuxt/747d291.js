(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1088:function(t,e,o){"use strict";o(931)},1089:function(t,e,o){var n=o(14)((function(i){return i[1]}));n.push([t.i,".line[data-v-7f911d60]{width:100%;height:100%;background-color:#000}",""]),n.locals={},t.exports=n},1346:function(t,e,o){"use strict";o.r(e);o(415),o(27);var n={props:{x1:Number,y1:Number,x2:Number,y2:Number,tool:Object,showPublishModal:Boolean,id:Number,toolLength:Number,lineStart:Boolean,drawingStart:Boolean,mouseUp:Boolean,generatePDF:Boolean},mounted:function(){},watch:{generatePDF:function(){this.generatePDF&&this.convertImage()}},data:function(){return{svgToImageData:""}},methods:{convertImage:function(){var t=this,e=this.$refs.lineBox,img=new Image,o=(new XMLSerializer).serializeToString(e),canvas=document.createElement("canvas");img.onload=function(){canvas.width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0,img.width,img.height),t.svgToImageData=canvas.toDataURL("image/png")},img.src="data:image/svg+xml;base64,"+window.btoa(o)}},computed:{style:function(){var t,e;return{width:"".concat((this.width+10)*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleX)||1),"px"),height:"".concat((this.height+10)*((null===(e=this.tool)||void 0===e?void 0:e.pageScaleY)||1),"px")}},viewBox:function(){var t=0,e=0;return this.x1&&this.x2&&this.y1&&this.y2&&(t=this.x2<this.x1?this.x2-3:this.x1-3,e=Math.min(this.y1,this.y2)-3),"".concat(t," ").concat(e," ").concat((this.width||0)+10," ").concat((this.height||0)+10)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)},d:function(){var t=0,e=0,o=0,n=0;return this.x1&&this.x2&&this.y1&&this.y2&&(t=this.y2,e=this.x1,o=this.y1,n=this.x2),"M".concat(e,",").concat(o,"L").concat(n,",").concat(t)}}},h=(o(1088),o(1)),component=Object(h.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{ref:"lineBox",style:t.style,attrs:{viewBox:t.viewBox,fill:"black",type:"DrawLine"}},[e("path",{staticStyle:{stroke:"rgb(0, 0, 0)","stroke-width":"3"},attrs:{svgToImage:t.svgToImageData,options:"fill",x:t.x1,y:t.y1,y2:t.y2,x2:t.x2,length:t.x2,d:t.d,"stroke-linecap":"round",type:"DrawLine"}})])}),[],!1,null,"7f911d60",null);e.default=component.exports},931:function(t,e,o){var content=o(1089);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("5917a119",content,!0,{sourceMap:!1})}}]);