(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1068:function(e,t,o){var content=o(1235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("5aadd6f4",content,!0,{sourceMap:!1})},1234:function(e,t,o){"use strict";o(1068)},1235:function(e,t,o){var n=o(15)((function(i){return i[1]}));n.push([e.i,"input[data-v-19bba63e]{border:.5px solid #e9e9e9;background-color:transparent;border-radius:4px}",""]),n.locals={},e.exports=n},1370:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(18),o(279),{props:{scale:Number,elemScale:Number,generatePDF:Boolean,tool:Object,responsiveToolDim:Object},data:function(){return{svgToImageData:""}},watch:{},computed:{style:function(){return{width:"".concat(11*(this.elemScale||1)*this.responsiveToolDim.width,"px"),height:"".concat(11*(this.elemScale||1)*this.responsiveToolDim.height,"px")}}},methods:{svgToImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.svgToImageData="",o="",t.next=4,htmlToImage.toPng(e.$refs.tickbox).then((function(e){o=e})).catch((function(e){console.error("oops, something went wrong!",e)}));case 4:e.svgToImageData=o;case 5:case"end":return t.stop()}}),t)})))()}}}),c=(o(1234),o(1)),component=Object(c.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"text-field tool"},[e("svg",{ref:"tickbox",style:this.style,attrs:{viewBox:"0 0 22 21",fill:"black",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{svgToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa1JREFUSEvFl+ExBEEQhb+LABnIgAwQASJwMiACREAGTgZE4C4CRIAIkIF6WzNXXX2zu71qZ3XV/Tim502/fv1mbsY/xWwi3G3gGHgDXoU5BbBAn4H9VOQ5sJgC+DFVm8l9AOa1gS+AW9fOI2BZE1jUvjjQG+C6Zo/VV4HuGuAVcJi/16rY9/UnHeK7JvAcuC/11f5t7IrVV42OqM6x7mtNYJnDXltfawFLrVdmc/VVDHyU3HEsqqVWUWzjFJDIijEWsKf4CTjpugfGAPYUfyaK16PTRbUG/Sz1Q14aDeW9941OG7CS5TJ5BBaAbpBIaK0OnKOX4rxQVJeEsQQkji66fF6nin0Vucf+5FonwegmaQPX4Q7MhkWjiKi6BC5QgTevBhO+txte3Ncnr+qSz5bA/SEHVatDlcapD1wi/HIV7fToYYOAtjkW+B2wZTJy5bJBe/s0T5k+atvEVcoTgATkweW9+eGmvE5rjIgrCm7XSVT2CgwXHrHMUuWDDWMI1XZtyWT0/8ukhXCl1rmiSaEnTXSzCNV2L6t2/RyxIotiNuuGAitHrqWPFP/n+AUe81UfyAqaIQAAAABJRU5ErkJggg==",options:"fill",d:"M8.7883 20.5956C9.4535 21.2689 10.9351 21.0457 11.0946 19.987C12.0871 13.4143 17.0534 7.8694 20.8116 2.64442C21.8536 1.19652 19.4576 -0.178944 18.4291 1.25172C14.9947 6.02588 10.6661 11.0495 8.97269 16.8427C7.03751 14.865 5.09452 12.9061 2.92406 11.1682C1.5495 10.0672 -0.416737 12.0069 0.972637 13.1195C3.80049 15.3846 6.2443 18.0259 8.7883 20.5956Z",fill:"black"}})])])}),[],!1,null,"19bba63e",null);t.default=component.exports}}]);