(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1104:function(e,t,n){var content=n(1309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("d1aa811e",content,!0,{sourceMap:!1})},1308:function(e,t,n){"use strict";n(1104)},1309:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".box-shadow[data-v-fb60a948]{border-width:5px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));transition:.2s}",""]),r.locals={},e.exports=r},1387:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(18),n(278),n(290),{name:"side-pages-pdf",props:{pdf:{type:Object},slideDimentions:{type:Object},pageNum:{type:Number},activePage:{type:Boolean}},methods:{getPdfPages:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pdf.getPage(e.pageNum).then((function(t){var canvas=e.$refs.sideCanvas,n=canvas.getContext("2d"),r=t.getViewport({scale:.3});canvas.width=180,canvas.height=300,canvas.style.width="100%",canvas.style.height="100%",t.render({canvasContext:n,viewport:r})}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getPdfPages()},watch:{pdf:function(){this.getPdfPages()}}}),c=(n(1308),n(1)),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{ref:"sideCanvasContainer",staticClass:"text-sm cursor-pointer w-full p-2",class:[this.activePage?"box-shadow":""]},[e("canvas",{ref:"sideCanvas"})])}),[],!1,null,"fb60a948",null);t.default=component.exports}}]);