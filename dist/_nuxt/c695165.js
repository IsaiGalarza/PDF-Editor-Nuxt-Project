(window.webpackJsonp=window.webpackJsonp||[]).push([[164,22,88,243],{1070:function(t,e,r){var content=r(1188);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3953243c",content,!0,{sourceMap:!1})},1171:function(t,e,r){"use strict";var c=r(158),n=r(159),o=(r(278),r(26),r(55),r(37),r(417),new(function(){function t(){Object(c.a)(this,t)}return Object(n.a)(t,[{key:"getNameInitials",value:function(t){var e=(t=t.trim()||"").charAt(0),r=t.replace(/\s+/g," ").split(" ")||[];return r.length>1&&(e+=r[1].charAt(0)),e.toUpperCase()}},{key:"formatPrice",value:function(t,e){var r={style:"currency",currency:"USD",minimumFractionDigits:2};return e&&(Object.keys(e)||[]).length>0&&Object.assign(r,e),new Intl.NumberFormat("en-US",r).format(Number(t))}}]),t}()));e.a=o},1187:function(t,e,r){"use strict";r(1070)},1188:function(t,e,r){var c=r(15)((function(i){return i[1]}));c.push([t.i,".no-outline[data-v-54e6d4e1]{outline:none!important}.package-list[data-v-54e6d4e1]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-54e6d4e1]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-54e6d4e1]>:first-child{width:40px}.package-list li[data-v-54e6d4e1]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-54e6d4e1]:last-child{margin-bottom:0px}.promoted-banner[data-v-54e6d4e1]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),c.locals={},t.exports=c},1347:function(t,e,r){"use strict";r.r(e);r(33),r(28),r(29),r(89),r(37),r(32),r(7),r(48),r(21),r(49);var c=r(6),n=(r(278),r(0)),o=r(651);r(766);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=n.default.extend({name:"PackageCard",components:{TickIcon:o.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var t,e=this.$refs.packagename.textContent.trim();this.isMonthly;""!=e&&(t=m(m({},this.stagingPackage),{},{name:e,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",t),this.$store.commit("PACKAGE_CREATE",this.create)),this.$nuxt.$router.push("/register")}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),f=(r(1187),r(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 min-h-[547px] h-[100%]"},[e("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n    "+t._s((t.stagingPackage||{}).name)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(t.stagingPackage||{}).monthlyPrice:(t.stagingPackage||{}).yearlyPrice))]),t._v("\n      /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Monthly")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Yearly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).paperlink)+" Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).cc)+" CC Flow ")])]),t._v(" "),t._l(t.stagingPackage.features,(function(r){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[t._v("\n           "+t._s(r.title)+" ")])])}))],2)]),t._v(" "),t.disableStart?t._e():e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:t.disableStart},on:{click:t.setPackageData}},[t._v("\n      Pay Now\n    ")])])])}),[],!1,null,"54e6d4e1",null);e.default=component.exports},1670:function(t,e,r){"use strict";r.r(e);r(417),r(28),r(77);var c=r(6),n=r(3),o=(r(37),r(29),r(32),r(7),r(48),r(21),r(49),r(18),r(1347)),l=r(649),m=r(0),d=r(1171);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=m.default.extend({name:"SelectCustomPackage",components:{CheckIcon:l.default,CustomPackagecard:o.default},data:function(){return{settings:{custom_paperlink_price:2,custom_team_members_price:2,custom_cc_price:0,custom_public_profile_price:10,custom_company_ledger_price:0},customPackage:{name:"Custom",description:"Custom package",paperlink:1,teamMembers:0,cc:1,publicProfile:!0,companyLedger:!0}}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{totalCost:function(){return Number(this.settings.custom_paperlink_price)*Number(this.customPackage.paperlink)+Number(this.settings.custom_team_members_price)*Number(this.customPackage.teamMembers)+Number(this.settings.custom_cc_price)*Number(this.customPackage.cc)+(this.customPackage.publicProfile?Number(this.settings.custom_public_profile_price):0)+(this.customPackage.companyLedger?Number(this.settings.custom_company_ledger_price):0)},stagingPackage:function(){var t=h({},this.customPackage);return Object.assign(t,{monthlyPrice:this.totalCost,yearlyPrice:Math.floor(12*this.totalCost-12*this.totalCost*.2)}),t}},methods:{formatPrice:function(t){return d.a.formatPrice(Number(t))},createAndProceed:function(t){t.stagingPackage;var e=t.isMonthly,data=h({},this.customPackage);data.plan=e?"monthly":"yearly"}}}),_=r(1),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid md:grid-cols-[1fr,max-content] mb-12 gap-5"},[e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative bg-white text-[#505050]"},[e("div",{staticClass:"p-5 overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Paperlink")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_paperlink_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{step:1,size:"small",min:1,max:20},model:{value:t.customPackage.paperlink,callback:function(e){t.$set(t.customPackage,"paperlink",t._n(e))},expression:"customPackage.paperlink"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_paperlink_price)*Number(t.customPackage.paperlink)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Team Member")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_team_members_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{step:1,size:"small",min:0,max:20},model:{value:t.customPackage.teamMembers,callback:function(e){t.$set(t.customPackage,"teamMembers",t._n(e))},expression:"customPackage.teamMembers"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_team_members_price)*Number(t.customPackage.teamMembers)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("PWA Business Profile")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{type:"checkbox",hidden:"",id:"public-profile-checkbox",disabled:!0},domProps:{checked:Array.isArray(t.customPackage.publicProfile)?t._i(t.customPackage.publicProfile,null)>-1:t.customPackage.publicProfile},on:{change:function(e){var r=t.customPackage.publicProfile,c=e.target,n=!!c.checked;if(Array.isArray(r)){var o=t._i(r,null);c.checked?o<0&&t.$set(t.customPackage,"publicProfile",r.concat([null])):o>-1&&t.$set(t.customPackage,"publicProfile",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.customPackage,"publicProfile",n)}}}),t._v(" "),e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.customPackage.publicProfile?Number(t.settings.custom_public_profile_price):0))+"\n            ")])])])])]),t._v(" "),e("div",{staticClass:"border-t-2 border-paperdazgreen-400 py-4 px-10 text-lg font-bold flex justify-between"},[e("span",[t._v("Total Amount")]),t._v(" "),e("span",{staticClass:"text-[#606060]"},[t._v(t._s(t.formatPrice(t.totalCost)))])])]),t._v(" "),e("div",{staticClass:"md:min-w-[300px] lg:min-w-[320px] bg-white rounded-[20px] p-3"},[e("custom-packagecard",{staticClass:"w-full",attrs:{"show-bottom-button":"","staging-package":t.stagingPackage,edited:!0,create:!0,isLight:!0},on:{setName:t.setname,"bottom-button-clicked":function(e){return t.$emit("next-tab",e)}}})],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",{staticClass:"text-lg"},[e("th",{staticClass:"text-left"},[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Feature")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Price "),e("span",{staticClass:"text-xxs font-normal"},[t._v("/unit")])])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Quantity")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Amount")])])])])}],!1,null,null,null);e.default=component.exports},649:function(t,e,r){"use strict";r.r(e);var c=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(c,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},651:function(t,e,r){"use strict";r.r(e);var c=r(0).default.extend({name:"TickIcon"}),n=r(1),component=Object(n.a)(c,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},766:function(t,e,r){"use strict";var c;!function(t){t.YEARLY="yearly",t.MONTHLY="monthly"}(c||(c={}))}}]);