(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1151:function(e,t){},1334:function(e,t){},1335:function(e,t){},1336:function(e,t){},1337:function(e,t){},1338:function(e,t){},1582:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(18),n(278),n(1150)),c=(n(1239),n(61)),l={props:{scale:Number,pageNumber:Number,pdf:Object,handlePanning:Function,onCLickSinglePageOuter:Function,onMouseMoveOnPages:Function,setPageHeight:Function,setPageWidth:Function,file:Object,confirmDone:Function,isCreator:Boolean},data:function(){return{scaleZ:2,currentPage:1}},mounted:function(){this.getPage(),document.getElementsByClassName("pdf-editor-view")[0].addEventListener("scroll",this.onScroll)},computed:{isConfirm:function(){return String(this.file.fileAction).toLowerCase()===c.a.CONFIRM}},methods:{getPage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,canvas,o,r,c,l,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pdf.getPage(e.pageNumber);case 2:n=t.sent,console.log("pdf-details",n),e.$store.commit("SET_PDF_OFFSET_Y",n.view[1]),e.$store.commit("SET_PDF_OFFSET_X",n.view[0]),e.$store.commit("SET_PDF_OFFSET_W",n.view[2]),e.$store.commit("SET_PDF_OFFSET_H",n.view[3]),canvas=e.$refs.canvas,o=canvas.getContext("2d"),r=window.devicePixelRatio||1,c=o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,l=r/c,d=n.getViewport({scale:e.scaleZ}),n.getViewport({scale:e.$refs.PdfPage.clientWidth/d.width}),f=d,canvas.width=f.width*l,canvas.height=f.height*l,e.$emit("setPageHeight",canvas.height),canvas.style.width="100%",canvas.style.height="100%",o.setTransform(l,0,0,l,0,0),n.render({canvasContext:o,viewport:d}),e.renderAnnotation(n),e.$emit("setPageWidth",{width:canvas.width,height:canvas.height});case 25:case"end":return t.stop()}}),t)})))()},renderAnnotation:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.$refs.annotationLayer,n.next=3,e.getAnnotations();case 3:return c=n.sent,l=e.getViewport({scale:1}),d=e.getViewport({scale:t.$refs.PdfPage.clientWidth/l.width}),n.next=8,r.AnnotationLayer.render({viewport:d.clone({dontFlip:!0}),div:o,page:e,annotations:c,renderInteractiveForms:!0});case 8:case"end":return n.stop()}}),n)})))()},onScroll:function(){var e=document.getElementsByClassName("pdf-editor-view")[0];e.scrollTop+e.getBoundingClientRect().height+5>=e.scrollHeight&&this.isConfirm&&(e.removeEventListener("scroll",this.onScroll),this.$store.commit("SET_PDF_PAGE_BOTTOM"))}}},d=n(1),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{ref:"PdfPage",staticClass:"pdf-page"},[t("div",{ref:"annotationLayer",staticClass:"annotationLayer"}),e._v(" "),t("canvas",{ref:"canvas",staticClass:"pdf-canvas",on:{click:function(t){return e.onCLickSinglePageOuter(t,e.pageNumber)}}})])}),[],!1,null,"0f38a289",null);t.default=component.exports}}]);