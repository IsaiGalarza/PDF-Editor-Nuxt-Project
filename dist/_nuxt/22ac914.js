(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1063:function(t,n,e){"use strict";e(820)},1064:function(t,n,e){var o=e(19)((function(i){return i[1]}));o.push([t.i,".line[data-v-3ef35eca]{width:100%;height:100%;background-color:#000}",""]),o.locals={},t.exports=o},1345:function(t,n,e){"use strict";e.r(n);var o=e(62),r=e(3),c=(e(189),e(70),e(50),e(45),e(9),e(21),{props:{tool:Object,points:Array,showPublishModal:Boolean,generatePDF:Boolean},data:function(){return{svgToImageData:""}},mounted:function(){},watch:{generatePDF:function(){this.generatePDF&&this.svgToImage()}},methods:{svgToImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.svgToImageData="",e="",n.next=4,htmlToImage.toPng(t.$refs.drawBox).then((function(t){e=t})).catch((function(t){console.error("oops, something went wrong!",t)}));case 4:t.svgToImageData=e;case 5:case"end":return n.stop()}}),n)})))()}},head:function(){return{script:[{integrity:"sha512-IetiMzopsrb75HtZydIM8zRv1mlSmV42P0iZVT4sPHxDnhM0I9O8/75bFqlfWoCKTnDB+pFqvoQrlnkgUeShaA==",src:"/html-to-png/htmlToPng.js",crossorigin:"anonymous",referrerpolicy:"no-referrer"}]}},computed:{d:function(){var t=this.points.map((function(p,i){return i%2==0?"L".concat(p,","):"".concat(p)})).join("");return"M".concat(this.points[0],",").concat(this.points[1]).concat(t)},style:function(){return{width:"".concat(this.width,"px"),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},x1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y1:function(){return Math.min.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},x2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==0}))))},y2:function(){return Math.max.apply(Math,Object(o.a)(this.points.filter((function(t,i){return i%2==1}))))},viewBox:function(){var t=Math.min(this.x1,this.x2),n=this.y2<this.y1?this.y2:this.y1;return"".concat(t-5," ").concat(n-5," ").concat(this.width+10," ").concat(this.height+10)},width:function(){return Math.abs(this.x2-this.x1)},height:function(){return Math.abs(this.y2-this.y1)}}}),h=(e(1063),e(1)),component=Object(h.a)(c,(function(){var t=this,n=t._self._c;return n("svg",{ref:"drawBox",staticClass:"svg_element",style:t.style,attrs:{preserveAspectRatio:"none",viewBox:t.viewBox}},[n("path",{attrs:{svgToImage:t.svgToImageData,options:"draw",x:t.x1,y:t.y1,d:t.d,stroke:"#000",fill:"none"}})])}),[],!1,null,"3ef35eca",null);n.default=component.exports},820:function(t,n,e){var content=e(1064);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("cc85da6e",content,!0,{sourceMap:!1})}}]);