(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1385:function(t,e,l){"use strict";l.r(e);l(278);var o={props:{scale:Number,value:String,tool:Object},mounted:function(){},methods:{},computed:{scaleDiff:function(){return 30*(this.scale||1)-30},style:function(){var t,e;return{height:"".concat(30*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleY)||1),"px"),maxHeight:"".concat(30*((null===(e=this.tool)||void 0===e?void 0:e.pageScaleY)||1),"px"),objectFit:"contain"}}},watch:{scale:function(){}}},c=l(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tool"},[t.value?e("img",{style:t.style,attrs:{scaleDiff:t.scaleDiff,src:t.value,alt:""}}):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);