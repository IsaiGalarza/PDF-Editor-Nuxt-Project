<<<<<<< HEAD:dist/_nuxt/e156fad.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1077:function(t,e,n){var content=n(1210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4ead8ada",content,!0,{sourceMap:!1})},1078:function(t,e,n){var content=n(1212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1339cf2f",content,!0,{sourceMap:!1})},1209:function(t,e,n){"use strict";n(1077)},1210:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"*[data-v-352a6394] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-352a6394] .el-dialog__header{padding:0}*[data-v-352a6394] .el-dialog__footer,*[data-v-352a6394] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-352a6394] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},t.exports=r},1211:function(t,e,n){"use strict";n(1078)},1212:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,'.tab-container[data-v-352a6394]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-352a6394]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-352a6394]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-352a6394]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-352a6394]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),r.locals={},t.exports=r},771:function(t,e,n){"use strict";(function(t){var r=n(3),o=(n(28),n(284),n(7),n(26),n(55),n(77),n(33),n(59),n(24),n(29),n(89),n(92),n(30),n(18),n(14)),c=n(816),l=n(207),d=n.n(l),f=n(43);function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=Object(o.a)(c.a).extend({components:{SpinnerDottedIcon:f.default},name:"SignatureTypeBodyTab",data:function(){return{textValue:"",activeColor:"#000",loading:!1,loadingFont:!1,currentFont:"",fonts:[],updatedFontFamily:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.$refs.inputElement.focus(),t.changeFont=d.a.debounce(t.changeFont,300);case 4:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.user,t.textValue="".concat(n.firstName," ").concat(n.lastName),e.next=4,t.getFonts();case 4:case"end":return e.stop()}}),e)})))()},computed:{currentFontObject:function(){var t=this,e=this.fonts.find((function(e){return e.key==t.currentFont}));if(e)return e}},methods:{getFonts:function(){var e=this;return this.$axios.$get("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(t.env.GOOGLE_FONT_API_KEY||"AIzaSyAq0-u-PdIEZLvk8q6-9fIcPVG-8dtVfkc")).then((function(t){var n,r=function(t){var e=t,n={100:"thin",200:"extralight",300:"light",500:"medium",600:"semibold",700:"bold",800:"extrabold",900:"black"};for(var r in n)e=e.replace(r,"".concat(n[r],"-"));return e.replace(/-+$/,"")},o=h(t.items);try{for(o.s();!(n=o.n()).done;){var c=n.value,l=c.family;for(var d in c.files)e.fonts.push({family:"".concat(l," (").concat(r(d),")"),familyName:l,fontWeight:d,file:c.files[d].replace("http://","https://"),key:"".concat(l," ").concat(r(d))})}}catch(t){o.e(t)}finally{o.f()}var f="Dancing Script semibold";e.fonts.some((function(t){return t.key==f}))||(f=e.fonts.length>0?e.fonts[0].key:""),f&&(e.currentFont=f)}))},clear:function(){this.textValue=""},exportImage:function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d"),text=this.textValue,e=window.devicePixelRatio||1;if(t){t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"');var n=t.measureText(text),r=n.actualBoundingBoxLeft,o=n.actualBoundingBoxRight,c=n.actualBoundingBoxAscent,l=n.actualBoundingBoxDescent,d=n.fontBoundingBoxAscent,f=n.fontBoundingBoxDescent,h=n.width,m=5*Math.max(Math.abs(c)+Math.abs(l),(Math.abs(d)||0)+(Math.abs(f)||0));canvas.height=m;var v=2*Math.max(h,Math.abs(r)+o);canvas.width=v,t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"'),t.textBaseline="top",t.font="".concat(100*e,'px "').concat(this.updatedFontFamily,'"'),t.fillStyle=this.activeColor,t.fillText(text,v/4,m/4);var x=this.trimCanvas(canvas);this.$emit("export-image",x.toDataURL())}},changeFont:function(){var t=this;this.loadingFont=!0;var e=this.currentFontObject;if(e){var n=new FontFace(e.key,"url(".concat(e.file,")"));console.log(e,n),n.load().then((function(n){document.fonts.add(n),t.updatedFontFamily=e.key})).finally((function(){t.loadingFont=!1}))}}},watch:{currentFontObject:function(){this.changeFont()}}})}).call(this,n(201))},816:function(t,e,n){"use strict";n(782);e.a={methods:{clear:function(){console.log("Clear method needs to be over-written")},exportImage:function(){console.log("exportImage method needs to be over-written")},trimCanvas2:function(canvas){if(canvas){var t=canvas.getContext("2d");if(t){for(var e=t.getImageData(0,0,canvas.width,canvas.height),n=e.data.length,r=null,o=null,c=null,l=null,d=0,f=0,i=0;i<n;i+=4)0!==e.data[i+3]&&(d=i/4%canvas.width,f=Math.trunc(i/4/canvas.width),null===r&&(r=f),(null===c||d<c)&&(c=d),(null===l||d>l)&&(l=d),(null===o||o<f)&&(o=f));if(null!=o){var h=(o=o||0)-(r=r||0)+20,m=(l=l||0)-(c=c||0)+20,v=t.getImageData(c,r,m,h);canvas.width=m,canvas.height=h,t.putImageData(v,10,10)}}}},trimCanvas:function(t){var e=t.getContext("2d"),n=document.createElement("canvas").getContext("2d");if(!e)return t;var i,r,o,c=e.getImageData(0,0,t.width,t.height),l=c.data.length,d={top:null,left:null,right:null,bottom:null};for(i=0;i<l;i+=4)0!==c.data[i+3]&&(r=i/4%t.width,o=~~(i/4/t.width),null===d.top&&(d.top=o),(null===d.left||r<d.left)&&(d.left=r),(null===d.right||d.right<r)&&(d.right=r),(null===d.bottom||d.bottom<o)&&(d.bottom=o));if(null!=d.bottom){var f=d.bottom-d.top,h=d.right-d.left,m=e.getImageData(d.left,d.top,h,f);return n?(n.canvas.width=h,n.canvas.height=f,n.putImageData(m,0,0),n.canvas):t}}}}},820:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(18),n(284),n(7),n(0)),c=n(821),l=n(840),d=o.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},drawType:{type:String},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:c.default},{label:"Type",value:"type",component:l.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return n=e.sent,e.next=5,n.blob();case 5:r=e.sent,(o=new FileReader).readAsDataURL(r),o.onloadend=function(){var e=o.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 3:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault){var t=this.$refs.activeTabComponent;t&&t.clear()}else this.forceDisplaySrc=!1},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),f=(n(1209),n(1211),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault,expression:"displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(n){return e("button",{key:n.value,staticClass:"tab-button",class:{active:t.activeTab===n.value},on:{click:function(e){t.activeTab=n.value}}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"CLEAR":"EDIT")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault,expression:"displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault&&t.useDefaultButton,expression:"!displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.drawType))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"352a6394",null);e.default=component.exports},821:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(18),n(14)),c=n(816),l=n(817),d=Object(o.a)(c.a).extend({name:"SignatureDrawBodyTab",data:function(){return{signaturePad:void 0}},mounted:function(){this.setupCanvases()},methods:{setupCanvases:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(canvas=t.$refs.signatureCanvas){e.next=5;break}return e.abrupt("return");case 5:t.signaturePad=new l.a(canvas,{minWidth:2,maxWidth:5}),window.addEventListener("resize",t.resizeCanvas),t.resizeCanvas();case 8:case"end":return e.stop()}}),e)})))()},resizeCanvas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(r=Math.max(window.devicePixelRatio||1,1),canvas=t.$refs.signatureCanvas){e.next=6;break}return e.abrupt("return");case 6:canvas.width=canvas.offsetWidth*r,canvas.height=canvas.offsetHeight*r,null===(n=canvas.getContext("2d"))||void 0===n||n.scale(r,r);case 9:case"end":return e.stop()}}),e)})))()},clear:function(){this.signaturePad&&this.signaturePad.clear()},exportImage:function(){this.$emit("export-image",this.getImage())},getImage:function(){if(this.signaturePad){var canvas=this.$refs.signatureCanvas,t=this.trimCanvas(canvas);if(t)return t.toDataURL()}}},beforeDestroy:function(){try{window.removeEventListener("resize",this.resizeCanvas)}catch(t){}}}),f=n(1),component=Object(f.a)(d,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"grid place-items-center"},[t("div",{staticClass:"w-full mx-auto bg-white rounded"},[t("canvas",{ref:"signatureCanvas",staticClass:"border h-56 border-[#C4C4C4] w-full rounded"})])])}),[],!1,null,null,null);e.default=component.exports},840:function(t,e,n){"use strict";n.r(e);n(56),n(32),n(7);var r=n(771).a,o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],ref:"inputElement",staticClass:"w-full bg-white border-b-2 border-paperdazgreen-400 cursor-text mt-2 py-3 px-5 rounded outline-none text-4xl sm:text-5xl caret-paperdazgreen-400 min-h-[110px]",style:{color:t.activeColor,fontFamily:"".concat(this.updatedFontFamily," !important")},attrs:{type:"text",id:"pdf-signature-type-input-box"},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-6 flex items-center gap-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentFont,expression:"currentFont"}],staticClass:"w-52 max-w-full py-2 px-1 rounded",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentFont=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("Select Font")]),t._v(" "),t._l(t.fonts,(function(n){return e("option",{key:n.key,domProps:{value:n.key}},[t._v("\n        "+t._s(n.family)+"\n      ")])}))],2),t._v(" "),e("transition",{attrs:{name:"fade",duration:"50"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loadingFont||t.$fetchState.pending,expression:"loadingFont || $fetchState.pending"}],staticClass:"animate-spin text-paperdazgreen-400"},[e("spinner-dotted-icon",{attrs:{height:"20",width:"20"}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1069:function(t,e,n){var content=n(1200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4ead8ada",content,!0,{sourceMap:!1})},1070:function(t,e,n){var content=n(1202);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1339cf2f",content,!0,{sourceMap:!1})},1199:function(t,e,n){"use strict";n(1069)},1200:function(t,e,n){var r=n(14)((function(i){return i[1]}));r.push([t.i,"*[data-v-352a6394] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-352a6394] .el-dialog__header{padding:0}*[data-v-352a6394] .el-dialog__footer,*[data-v-352a6394] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-352a6394] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},t.exports=r},1201:function(t,e,n){"use strict";n(1070)},1202:function(t,e,n){var r=n(14)((function(i){return i[1]}));r.push([t.i,'.tab-container[data-v-352a6394]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-352a6394]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-352a6394]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-352a6394]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-352a6394]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),r.locals={},t.exports=r},766:function(t,e,n){"use strict";(function(t){var r=n(3),o=(n(27),n(284),n(7),n(25),n(55),n(78),n(33),n(59),n(24),n(28),n(89),n(92),n(29),n(18),n(16)),c=n(813),l=n(206),d=n.n(l),f=n(43);function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=Object(o.a)(c.a).extend({components:{SpinnerDottedIcon:f.default},name:"SignatureTypeBodyTab",data:function(){return{textValue:"",activeColor:"#000",loading:!1,loadingFont:!1,currentFont:"",fonts:[],updatedFontFamily:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.$refs.inputElement.focus(),t.changeFont=d.a.debounce(t.changeFont,300);case 4:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$auth.user,t.textValue="".concat(n.firstName," ").concat(n.lastName),e.next=4,t.getFonts();case 4:case"end":return e.stop()}}),e)})))()},computed:{currentFontObject:function(){var t=this,e=this.fonts.find((function(e){return e.key==t.currentFont}));if(e)return e}},methods:{getFonts:function(){var e=this;return this.$axios.$get("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat(t.env.GOOGLE_FONT_API_KEY||"AIzaSyAq0-u-PdIEZLvk8q6-9fIcPVG-8dtVfkc")).then((function(t){var n,r=function(t){var e=t,n={100:"thin",200:"extralight",300:"light",500:"medium",600:"semibold",700:"bold",800:"extrabold",900:"black"};for(var r in n)e=e.replace(r,"".concat(n[r],"-"));return e.replace(/-+$/,"")},o=h(t.items);try{for(o.s();!(n=o.n()).done;){var c=n.value,l=c.family;for(var d in c.files)e.fonts.push({family:"".concat(l," (").concat(r(d),")"),familyName:l,fontWeight:d,file:c.files[d].replace("http://","https://"),key:"".concat(l," ").concat(r(d))})}}catch(t){o.e(t)}finally{o.f()}var f="Dancing Script semibold";e.fonts.some((function(t){return t.key==f}))||(f=e.fonts.length>0?e.fonts[0].key:""),f&&(e.currentFont=f)}))},clear:function(){this.textValue=""},exportImage:function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d"),text=this.textValue,e=window.devicePixelRatio||1;if(t){t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"');var n=t.measureText(text),r=n.actualBoundingBoxLeft,o=n.actualBoundingBoxRight,c=n.actualBoundingBoxAscent,l=n.actualBoundingBoxDescent,d=n.fontBoundingBoxAscent,f=n.fontBoundingBoxDescent,h=n.width,m=5*Math.max(Math.abs(c)+Math.abs(l),(Math.abs(d)||0)+(Math.abs(f)||0));canvas.height=m;var v=2*Math.max(h,Math.abs(r)+o);canvas.width=v,t.font="".concat(100,'px "').concat(this.updatedFontFamily,'"'),t.textBaseline="top",t.font="".concat(100*e,'px "').concat(this.updatedFontFamily,'"'),t.fillStyle=this.activeColor,t.fillText(text,v/4,m/4);var x=this.trimCanvas(canvas);this.$emit("export-image",x.toDataURL())}},changeFont:function(){var t=this;this.loadingFont=!0;var e=this.currentFontObject;if(e){var n=new FontFace(e.key,"url(".concat(e.file,")"));console.log(e,n),n.load().then((function(n){document.fonts.add(n),t.updatedFontFamily=e.key})).finally((function(){t.loadingFont=!1}))}}},watch:{currentFontObject:function(){this.changeFont()}}})}).call(this,n(201))},813:function(t,e,n){"use strict";n(779);e.a={methods:{clear:function(){console.log("Clear method needs to be over-written")},exportImage:function(){console.log("exportImage method needs to be over-written")},trimCanvas2:function(canvas){if(canvas){var t=canvas.getContext("2d");if(t){for(var e=t.getImageData(0,0,canvas.width,canvas.height),n=e.data.length,r=null,o=null,c=null,l=null,d=0,f=0,i=0;i<n;i+=4)0!==e.data[i+3]&&(d=i/4%canvas.width,f=Math.trunc(i/4/canvas.width),null===r&&(r=f),(null===c||d<c)&&(c=d),(null===l||d>l)&&(l=d),(null===o||o<f)&&(o=f));if(null!=o){var h=(o=o||0)-(r=r||0)+20,m=(l=l||0)-(c=c||0)+20,v=t.getImageData(c,r,m,h);canvas.width=m,canvas.height=h,t.putImageData(v,10,10)}}}},trimCanvas:function(t){var e=t.getContext("2d"),n=document.createElement("canvas").getContext("2d");if(!e)return t;var i,r,o,c=e.getImageData(0,0,t.width,t.height),l=c.data.length,d={top:null,left:null,right:null,bottom:null};for(i=0;i<l;i+=4)0!==c.data[i+3]&&(r=i/4%t.width,o=~~(i/4/t.width),null===d.top&&(d.top=o),(null===d.left||r<d.left)&&(d.left=r),(null===d.right||d.right<r)&&(d.right=r),(null===d.bottom||d.bottom<o)&&(d.bottom=o));if(null!=d.bottom){var f=d.bottom-d.top,h=d.right-d.left,m=e.getImageData(d.left,d.top,h,f);return n?(n.canvas.width=h,n.canvas.height=f,n.putImageData(m,0,0),n.canvas):t}}}}},818:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(18),n(284),n(7),n(0)),c=n(819),l=n(831),d=o.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},drawType:{type:String},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:c.default},{label:"Type",value:"type",component:l.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return n=e.sent,e.next=5,n.blob();case 5:r=e.sent,(o=new FileReader).readAsDataURL(r),o.onloadend=function(){var e=o.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 3:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault){var t=this.$refs.activeTabComponent;t&&t.clear()}else this.forceDisplaySrc=!1},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),f=(n(1199),n(1201),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault,expression:"displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(n){return e("button",{key:n.value,staticClass:"tab-button",class:{active:t.activeTab===n.value},on:{click:function(e){t.activeTab=n.value}}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"CLEAR":"EDIT")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault,expression:"displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault&&t.useDefaultButton,expression:"!displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.drawType))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"352a6394",null);e.default=component.exports},819:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(18),n(16)),c=n(813),l=n(814),d=Object(o.a)(c.a).extend({name:"SignatureDrawBodyTab",data:function(){return{signaturePad:void 0}},mounted:function(){this.setupCanvases()},methods:{setupCanvases:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(canvas=t.$refs.signatureCanvas){e.next=5;break}return e.abrupt("return");case 5:t.signaturePad=new l.a(canvas,{minWidth:2,maxWidth:5}),window.addEventListener("resize",t.resizeCanvas),t.resizeCanvas();case 8:case"end":return e.stop()}}),e)})))()},resizeCanvas:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,canvas;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(r=Math.max(window.devicePixelRatio||1,1),canvas=t.$refs.signatureCanvas){e.next=6;break}return e.abrupt("return");case 6:canvas.width=canvas.offsetWidth*r,canvas.height=canvas.offsetHeight*r,null===(n=canvas.getContext("2d"))||void 0===n||n.scale(r,r);case 9:case"end":return e.stop()}}),e)})))()},clear:function(){this.signaturePad&&this.signaturePad.clear()},exportImage:function(){this.$emit("export-image",this.getImage())},getImage:function(){if(this.signaturePad){var canvas=this.$refs.signatureCanvas,t=this.trimCanvas(canvas);if(t)return t.toDataURL()}}},beforeDestroy:function(){try{window.removeEventListener("resize",this.resizeCanvas)}catch(t){}}}),f=n(1),component=Object(f.a)(d,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"grid place-items-center"},[t("div",{staticClass:"w-full mx-auto bg-white rounded"},[t("canvas",{ref:"signatureCanvas",staticClass:"border h-56 border-[#C4C4C4] w-full rounded"})])])}),[],!1,null,null,null);e.default=component.exports},831:function(t,e,n){"use strict";n.r(e);n(56),n(32),n(7);var r=n(766).a,o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],ref:"inputElement",staticClass:"w-full bg-white border-b-2 border-paperdazgreen-400 cursor-text mt-2 py-3 px-5 rounded outline-none text-4xl sm:text-5xl caret-paperdazgreen-400 min-h-[110px]",style:{color:t.activeColor,fontFamily:"".concat(this.updatedFontFamily," !important")},attrs:{type:"text",id:"pdf-signature-type-input-box"},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-6 flex items-center gap-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentFont,expression:"currentFont"}],staticClass:"w-52 max-w-full py-2 px-1 rounded",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentFont=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("Select Font")]),t._v(" "),t._l(t.fonts,(function(n){return e("option",{key:n.key,domProps:{value:n.key}},[t._v("\n        "+t._s(n.family)+"\n      ")])}))],2),t._v(" "),e("transition",{attrs:{name:"fade",duration:"50"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loadingFont||t.$fetchState.pending,expression:"loadingFont || $fetchState.pending"}],staticClass:"animate-spin text-paperdazgreen-400"},[e("spinner-dotted-icon",{attrs:{height:"20",width:"20"}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
>>>>>>> fixed-ui:dist/_nuxt/dc8d283.js
