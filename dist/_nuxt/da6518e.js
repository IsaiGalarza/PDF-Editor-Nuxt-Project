(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1371:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(18),o(279),{props:{scale:Number,elemScale:Number,generatePDF:Boolean,tool:Object},computed:{style:function(){return{width:"".concat(11*(this.elemScale||1),"px"),height:"".concat(11*(this.elemScale||1),"px")}}},watch:{},data:function(){return{svgToImageData:""}},methods:{svgToImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.svgToImageData="",o="",t.next=4,htmlToImage.toPng(e.$refs.crossbox).then((function(e){o=e})).catch((function(e){console.error("oops, something went wrong!",e)}));case 4:e.svgToImageData=o;case 5:case"end":return t.stop()}}),t)})))()}}}),c=o(1),component=Object(c.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"tool"},[e("svg",{ref:"crossbox",style:this.style,attrs:{viewBox:"0 0 19 19",fill:"black",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{svgToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAR1JREFUSEu119ERwjAIBmA6mW6iTma7iaN5eEHRC/BDsC/2jPIdaULJRp/rSkQnIrqp7zpvdyJ6EBF/0jYiM3of9zzQjXPMy4jPsXeGNSoZduIalfg3hmcD/IMO3Ip9yFT/AzdRnmWBJUN5DnpRVTJ3Ub249LNdxUN0Bq9mDqEWXMVh1IOzeAqNYBRPowgc4bwrZovxGIXJLLl6O3l12cpq9p8QRTOOtprGITQLe9POYzDaDacqHPqMo2zTbzUUziwuKHME9vYpZ1qq7RGMFIfSK9WDETTaaua0W3AGLeEzuIKm8V94BU3hSOuTqkhDDxdc1OxVUChzr71dQUPcaug7UA9/NfR86dNEJzrD30cYGWT8HHUOXrcQjH0d2p4VnGYebW62SwAAAABJRU5ErkJggg==",options:"fill",d:"M19 17.0864L17.0864 19L9.5 11.4136L1.91357 19L0 17.0864L7.58643 9.5L0 1.91357L1.91357 0L9.5 7.58643L17.0864 0L19 1.91357L11.4136 9.5L19 17.0864Z",fill:"black"}})])])}),[],!1,null,"3ed01956",null);t.default=component.exports}}]);