(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1227:function(e,t,n){var content=n(1466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("4dd9ed2a",content,!0,{sourceMap:!1})},1332:function(e,t){},1333:function(e,t){},1334:function(e,t){},1335:function(e,t){},1465:function(e,t,n){"use strict";n(1227)},1466:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,".page[data-v-54e95e0b]{width:100%;box-shadow:0 0 5px #000;animation:pageIn 1s ease;transition:all 1s ease,width .2s ease}.annotationLayer[data-v-54e95e0b]{width:100%;height:100%}",""]),o.locals={},e.exports=o},1602:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(18),n(278),n(1138)),c=(n(1226),n(59)),d={props:{scale:Number,pageNumber:Number,pdf:Object,handlePanning:Function,onCLickSinglePageOuter:Function,onMouseMoveOnPages:Function,setPageHeight:Function,setPageWidth:Function,file:Object,confirmDone:Function,isCreator:Boolean},data:function(){return{scaleZ:3,currentPage:1}},mounted:function(){this.getPage(),document.getElementsByClassName("pdf-editor-view")[0].addEventListener("scroll",this.onScroll)},computed:{isConfirm:function(){return String(this.file.fileAction).toLowerCase()===c.a.CONFIRM}},methods:{getPage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,canvas,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pdf.getPage(e.pageNumber);case 2:n=t.sent,console.log("pdf-details",n),e.$store.commit("SET_PDF_OFFSET_Y",n.view[1]),e.$store.commit("SET_PDF_OFFSET_X",n.view[0]),e.$store.commit("SET_PDF_OFFSET_W",n.view[2]),e.$store.commit("SET_PDF_OFFSET_H",n.view[3]),canvas=e.$refs.canvas,o=canvas.getContext("2d"),r=n.getViewport(5),canvas.height=r.height,canvas.width=r.width,canvas.classList.add("page"),n.render({canvasContext:o,viewport:r}).promise.then((function(){console.log("pdf is rendered")})),n.getTextContent().then((function(text){console.log(text)})),e.renderAnnotation(n),e.$emit("setPageWidth",{width:canvas.width,height:canvas.height});case 18:case"end":return t.stop()}}),t)})))()},renderAnnotation:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.$refs.annotationLayer,n.next=3,e.getAnnotations();case 3:return c=n.sent,d=e.getViewport({scale:1}),l=e.getViewport({scale:t.$refs.PdfPage.clientWidth/d.width}),n.next=8,r.AnnotationLayer.render({viewport:l.clone({dontFlip:!0}),div:o,page:e,annotations:c,renderInteractiveForms:!0});case 8:case"end":return n.stop()}}),n)})))()},onScroll:function(){var e=document.getElementsByClassName("pdf-editor-view")[0];e.scrollTop+e.getBoundingClientRect().height+5>=e.scrollHeight&&this.isConfirm&&(e.removeEventListener("scroll",this.onScroll),this.$store.commit("SET_PDF_PAGE_BOTTOM"))}}},l=(n(1465),n(1)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("div",{ref:"PdfPage",staticClass:"pdf-page"},[t("div",{ref:"annotationLayer",staticClass:"annotationLayer"}),e._v(" "),t("canvas",{ref:"canvas",staticClass:"pdf-canvas",on:{click:function(t){return e.onCLickSinglePageOuter(t,e.pageNumber)}}})])}),[],!1,null,"54e95e0b",null);t.default=component.exports}}]);