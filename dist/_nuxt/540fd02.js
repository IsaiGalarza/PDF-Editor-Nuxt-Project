(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1386:function(t,o,e){"use strict";e.r(o);e(278);var l={props:{scale:Number,value:String,tool:Object},mounted:function(){console.log({tool:this.tool})},methods:{},computed:{scaleDiff:function(){return 30*(this.scale||1)-30},style:function(){var t,o;return{height:"".concat(30*((null===(t=this.tool)||void 0===t?void 0:t.pageScaleY)||1),"px"),maxHeight:"".concat(30*((null===(o=this.tool)||void 0===o?void 0:o.pageScaleY)||1),"px"),objectFit:"contain"}}},watch:{scale:function(){}}},c=e(1),component=Object(c.a)(l,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"tool"},[t.value?o("img",{style:t.style,attrs:{scaleDiff:t.scaleDiff,src:t.value,alt:""}}):t._e()])}),[],!1,null,null,null);o.default=component.exports}}]);