(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1371:function(t,e,o){"use strict";o.r(e);var r=o(3),n=(o(18),o(278),{props:{scale:Number,elemScale:Number,generatePDF:Boolean,tool:Object},computed:{style:function(){return{width:"".concat(13*(this.elemScale||1),"px"),height:"".concat(13*(this.elemScale||1),"px"),fill:"black"}}},watch:{},data:function(){return{svgToImageData:""}},methods:{svgToImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.svgToImageData="",o="",e.next=4,htmlToImage.toPng(t.$refs.dotbox).then((function(t){o=t})).catch((function(t){console.error("oops, something went wrong!",t)}));case 4:t.svgToImageData=o;case 5:case"end":return e.stop()}}),e)})))()}}}),c=o(1),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"tool"},[t("svg",{ref:"dotbox",style:this.style,attrs:{viewBox:"0 0 24 24",fill:"black"}},[t("path",{attrs:{options:"dot",svgToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAZVJREFUWEfdmD8yBUEQh793BDICF1DlBCISCRkSAglOICEkcQJPIiBBRiIhcgJVLiAg4wrqV7WrtsbOm+l9s16XzXa3t/vb/jPdMwOcXwPnfPx7wClgEVgA5gDd6/oC3oAX4Lm67xSsrh7cAnaApUyrT8AFcJUp/yNmBRTYKTBjNVTJfwAHFtBcQIXuDNjoCBZ+dgPs54Q+B1D59TCG12L/JG+uVHka/e8UYF9wNVASchSgwvrag+dCbwlyPhbuUYDXBXMulbrKyc02oRigqvUypbXw++226o4Bvv9BaNtCPRs+bAOchPdqrl9ebAN8NHSIwlFGHWe5qTQEVOV+lrZq1DfdrOgQcBW4MyosLb4G3NdKQ8BD4Li0RaO+I+AkBjgEdo0KS4ufA3sxQC2Y66UtGvXdNhtEGGL3gO5D7L5I3C8z7hdqFZzrVidA98OCIF2PW5PyomlgFaTrkV+A7jdNgnS97ax7fF+QyT2xAFIb9xrS9dFHc1pye3gUjnRuj99CULcHmMYhubt4bpF0tzDml+4BvwGpVFYpgkx7hgAAAABJRU5ErkJggg==",d:"M 22 12 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 a 10 10 0 0 0 10 -10"}})])])}),[],!1,null,"dc3d2228",null);e.default=component.exports}}]);