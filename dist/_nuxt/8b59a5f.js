(window.webpackJsonp=window.webpackJsonp||[]).push([[233,44,80,235],{1055:function(t,e,r){"use strict";r(967)},1056:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".name-container[data-v-75858566]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.empty-content[data-v-75858566]{display:inline-block;text-align:center}.empty-content b[data-v-75858566]{margin-bottom:0.5rem;display:block;width:100%;text-align:center;font-size:17px}.empty-content button[data-v-75858566]{border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2rem;padding-right:2rem;font-size:15px;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.empty-container[data-v-75858566]{display:flex;height:300px;width:100%;align-items:center;justify-content:center}.font-family[data-v-75858566]{font-family:inherit!important}",""]),o.locals={},t.exports=o},1058:function(t,e,r){"use strict";r.r(e);var o={},n=(r(1055),r(1)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white mt-5 rounded-lg overflow-hidden font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Folders / file")])]),t._v(" "),e("div",{staticClass:"empty-container"},[e("div",{staticClass:"empty-content"},[e("b",[t._v("Your public profile is empty")]),t._v(" "),e("button",[t._v("Turn files to paperlink")])])])])}],!1,null,"75858566",null);e.default=component.exports},1134:function(t,e,r){t.exports=r.p+"img/OpenedFolder.c3b224d.svg"},1314:function(t,e,r){var content=r(1567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("ecf25c84",content,!0,{sourceMap:!1})},1566:function(t,e,r){"use strict";r(1314)},1567:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".folder-search[data-v-2aaeb019]{width:170px;border-radius:0.375rem;border-width:1.3px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:6px;padding-bottom:6px;padding-left:0.5rem;padding-right:0.5rem;font-size:13px}.search-container[data-v-2aaeb019]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.name-container[data-v-2aaeb019]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.search-icon[data-v-2aaeb019]{margin-left:0.5rem;margin-right:0.5rem;display:flex;height:28px;width:28px;align-items:center;justify-content:center;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}[data-v-2aaeb019]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-2aaeb019]::-webkit-scrollbar-thumb{background-color:#77c360;width:5px;border-radius:50px;cursor:pointer}[data-v-2aaeb019]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity))}.folder-box-container[data-v-2aaeb019]{display:flex;width:100%;border-bottom-width:1.5px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem}.font-family[data-v-2aaeb019]{font-family:inherit}.arrow-icon[data-v-2aaeb019]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}",""]),o.locals={},t.exports=o},1728:function(t,e,r){"use strict";r.r(e);var o=r(25),n=r(64),l=(r(32),r(7),r(80),r(81),r(34)),c=r(667),d=r(213),f=r(680),h=r(60),w=r(1058),x={name:"rofile-folder",components:{SearchIcon:l.default,FolderIcon:d.default,ScribbleIcon:c.default,FolderSolidIcon:f.default,ArrowDownIcon:h.default,EmptyFileFolder:w.default},data:function(){return{flipContainer:!0,contentFolder:[],show:!1,userContent:{folder:[{id:1,foldername:"azudi-folder",totalfiles:102},{id:2,foldername:"Jayz-branch",totalfiles:102},{id:1,foldername:"Crazy-folder",totalfiles:102},{id:1,foldername:"program-Men",totalfiles:102}]}}},mounted:function(){this.contentFolder=Object(n.a)(this.userContent.folder)},methods:{filterList:function(){var t=this.userContent.folder,e=this.$refs.searchFolder.value.toLowerCase();"object"==Object(o.a)(t)&&t.length>0&&(this.contentFolder=t.filter((function(t){return t.foldername.toLowerCase().includes(e)})))}}},v=(r(1566),r(1)),component=Object(v.a)(x,(function(){var t=this,e=t._self._c;return e("section",[t.userContent.folder.length>0?e("div",{staticClass:"bg-white mt-3 rounded-xl font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Folders")]),t._v(" "),e("div",{staticClass:"search-container"},[e("input",{ref:"searchFolder",staticClass:"folder-search",class:[t.show?"left-roll":"no-roll"],attrs:{type:"text",placeholder:"search folder..."}}),t._v(" "),e("button",{staticClass:"search-icon",on:{click:t.filterList}},[e("search-icon",{attrs:{currentcolor:"white",width:"16",height:"16"}})],1),t._v(" "),e("button",{staticClass:"arrow-icon",on:{click:function(e){t.flipContainer=!t.flipContainer}}},[e("ArrowDownIcon",{class:[t.flipContainer?"rotate-0 transition":"rotate-180 transition"],attrs:{width:"16",height:"16"}})],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.flipContainer,expression:"flipContainer"}],staticClass:"flex flex-wrap justify-center pl-3 max-h-[120px] overflow-y-scroll"},t._l(t.contentFolder,(function(o,n){return e("div",{key:n,staticClass:"folder-box-container"},[e("img",{staticClass:"w-5",attrs:{src:r(1134)}}),t._v(" "),e("label",{staticClass:"text-[0.88rem] font-[500] pl-2"},[e("nuxt-link",{attrs:{to:"../profile-folder/"+o.foldername}},[t._v(t._s(o.foldername))])],1)])})),0)]):t._e()])}),[],!1,null,"2aaeb019",null);e.default=component.exports},667:function(t,e,r){"use strict";r.r(e);var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;return t("svg",{staticClass:"fill-current",attrs:{width:"281",height:"214",viewBox:"0 0 281 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2677:1355)"}},[t("path",{attrs:{d:"M240.28 173.309C198.871 205.688 123.773 191.009 109.658 145.481C109.44 144.888 109.258 144.272 109.103 143.646C108.407 140.842 110.632 138.196 113.503 137.87C152.846 133.398 190.924 115.461 196.223 90.9289C201.059 67.8088 168.979 58.3267 146.373 69.7781C121.103 82.6785 102.009 102.58 97.0286 125.188C96.5003 127.586 94.4657 129.428 92.0102 129.397C67.2831 129.09 44.0978 121.721 32.1821 103.079C11.0463 69.8534 45.9709 29.9914 89.0968 20.8773C93.6991 20.1354 92.0907 14.8696 87.4884 15.6115C28.3314 23.1066 -6.39897 79.8723 30.5114 118.002C44.1416 131.835 66.824 138.266 91.3102 138.865C93.9603 138.93 96.132 140.987 96.6037 143.595C100.779 166.689 124.615 186.419 153.685 195.916C189.637 207.536 224.259 197.391 247.465 178.276C251.235 175.266 244.02 170.664 240.28 173.309ZM133.621 90.8112C142.278 83.4101 153.53 75.1103 167.337 72.8846C180.641 70.6196 184.132 84.1099 184.177 89.9878C184.109 97.3256 176.57 103.345 169.646 107.945C156.585 117.224 136.219 124.73 115.103 127.982C111.79 128.492 109.069 125.532 110.2 122.377C114.372 110.736 123.52 99.9502 133.621 90.8112Z"}}),this._v(" "),t("path",{attrs:{d:"M264.012 159.559C249.959 158.461 235.348 158.054 221.598 159.55C215.993 160.213 218.074 165.883 223.652 165.585C234.807 164.988 246.322 166.254 257.334 167.482C256.462 172.186 255.561 177.256 254.186 181.921C252.898 185.492 248.957 190.692 251.683 194.576C253.046 196.519 255.555 196.715 258.122 196.181C264.287 194.827 264.885 187.163 266.203 183.227C268.221 176.776 269.207 170.612 269.72 164.042C269.891 161.854 267.023 159.794 264.012 159.559Z"}})])])}),[],!1,null,null,null);e.default=component.exports},680:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"FolderSolidIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("rect",{attrs:{width:"30",height:"30",fill:"url(#pattern0)"}}),t._v(" "),e("defs",[e("pattern",{attrs:{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}},[e("use",{attrs:{"xlink:href":"#image0_3848_19071",transform:"scale(0.0333333)"}})]),t._v(" "),e("image",{attrs:{id:"image0_3848_19071",width:"30",height:"30","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABPklEQVRIie3SsUrDQBjA8f93Ci2+ggri7gtE8wQ+g1gHO3YSdBEyCBoQXO2gYFdBNApOKthJJ0VQKI4OZiyIikg+h2jaNNUpScH2v91xfD+OOxj035P2xfLl/CwiVWC0y8k71My59u5tGrDpGL7dFQVQpiA4cC5KxTTg+I3rJU1jaDJ9QrTsztROf3bMX8fTS8ZUTbV9JycYBMZ7AnfWM7j/EoCV+sKaoktAIWPvHXTTtfdWDYCilRxQgCJIBb4/l8BNDmiYhFZ4YxEvN1fVi2Ax5jA3GD2O4A1r5xHkIQf3ft2uNSI4TI+yVkVbRgQbE2T+zoFp/aUILliTV8Bzhq4/Mj1xnYAdcQIVPckQ9hxxggQMoGqye2eN/6EY/Dn0cobQTB0Vmh/Dr+e/wlvW/htoGfBTZH1RFsPZg/qpL4z0WxxCKWZhAAAAAElFTkSuQmCC"}})])])}),[],!1,null,null,null);e.default=component.exports},967:function(t,e,r){var content=r(1056);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6277c4a4",content,!0,{sourceMap:!1})}}]);