(window.webpackJsonp=window.webpackJsonp||[]).push([[165,88],{1179:function(t,e,n){var content=n(1435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5769df59",content,!0,{sourceMap:!1})},1434:function(t,e,n){"use strict";n(1179)},1435:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".package-list[data-v-1231982d]{width:-moz-min-content;width:min-content;margin-left:auto;margin-right:auto;}.package-list li[data-v-1231982d]{margin-bottom:0.75rem;display:inline-grid;gap:0.75rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr;}.package-list li[data-v-1231982d]>:nth-child(2){color:#606060}.package-list li[data-v-1231982d]:last-child{margin-bottom:0px;}.promoted-banner[data-v-1231982d]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0;}",""]),o.locals={},t.exports=o},1718:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(656),c=o.default.extend({name:"SelectMainsPackage",components:{TickIcon:r.default},props:["packagecontent","keyId","link"],data:function(){return{pagecontent:[],popactive:!0,indexPop:!0,standardTag:!1,isMonthly:!0,showBottomButton:!0}},methods:{show:function(){}},beforeMount:function(){this.pagecontent=this.packagecontent,this.standardTag=this.pagecontent.promoted},mounted:function(){}}),l=(n(1434),n(1)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"single-package-special relative border-2 bg-white border-paperdazgreen-400 w-full mx-3 my-2 shadow-md rounded-2xl overflow-hidden shadow-paperdazgray-300 pb-5"},[e("h4",{staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold mt-8"},[t._v("\n      "+t._s(t.pagecontent.type)+" Promoted\n  ")]),t._v(" "),t.standardTag?e("div",{staticClass:"custom-card-tag bg-paperdazgreen-400 text-white"},[t._v("Popular")]):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.pagecontent.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("\n        $\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v("\n              "+t._s(t.pagecontent.price)+" \n      ")]),t._v("\n      /mon\n      ")])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Yeary")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"justify-end bg-paperdazgreen-300":"bg-paperdazgray-500"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Monthly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.paperlinkfiles)+"\n         Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.teammembers)+" \n        Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.ccflow)+"\n         CC Flow ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(" "+t._s(t.pagecontent.publicprofile)+"\n            Public Profile ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n         "+t._s(t.pagecontent.pdfcopy)+"\n        PDF copy of all files ")])])])]),t._v(" "),t.showBottomButton?e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 rounded-lg shadow h-9 px-5",on:{click:function(e){return t.$emit("bottom-button-clicked",{stagingPackage:t.stagingPackage,isMonthly:t.isMonthly})}}},[t._v("\n      Start Now\n    ")])]):t._e()])}),[],!1,null,"1231982d",null);e.default=component.exports},656:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({name:"TickIcon"}),r=n(1),component=Object(r.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports}}]);