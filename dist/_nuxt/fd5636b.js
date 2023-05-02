(window.webpackJsonp=window.webpackJsonp||[]).push([[14,22,88,164,165,254,258],{1012:function(t,e,r){"use strict";r.r(e);r(31),r(35),r(30),r(89),r(43),r(36),r(7),r(54),r(24),r(55);var n=r(6),o=(r(416),r(0)),c=r(653);r(768);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.default.extend({name:"PackageCard",components:{TickIcon:c.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var t,e=this.$refs.packagename.textContent.trim(),r=this.isMonthly;""!=e&&(t=d(d({},this.stagingPackage),{},{name:e,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",t),this.$store.commit("PACKAGE_CREATE",this.create)),this.$emit("bottom-button-clicked",{stagingPackageNew:t,isMonthly:r})}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),f=(r(993),r(1)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 min-h-[547px] h-[100%]"},[e("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n    "+t._s((t.stagingPackage||{}).name)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(t.stagingPackage||{}).monthlyPrice:(t.stagingPackage||{}).yearlyPrice))]),t._v("\n      /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Monthly")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Yearly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).paperlink)+" Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).cc)+" CC Flow ")])]),t._v(" "),t._l(t.stagingPackage.features,(function(r){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[t._v("\n           "+t._s(r.title)+" ")])])}))],2)]),t._v(" "),t.disableStart?t._e():e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:t.disableStart},on:{click:t.setPackageData}},[t._v("\n      Start Now\n    ")])])])}),[],!1,null,"32be86da",null);e.default=component.exports},1043:function(t,e,r){var content=r(1175);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2345c921",content,!0,{sourceMap:!1})},1154:function(t,e,r){"use strict";var n=r(157),o=r(158),c=(r(416),r(25),r(48),r(43),r(278),new(function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,[{key:"getNameInitials",value:function(t){var e=(t=t.trim()||"").charAt(0),r=t.replace(/\s+/g," ").split(" ")||[];return r.length>1&&(e+=r[1].charAt(0)),e.toUpperCase()}},{key:"formatPrice",value:function(t,e){var r={style:"currency",currency:"USD",minimumFractionDigits:2};return e&&(Object.keys(e)||[]).length>0&&Object.assign(r,e),new Intl.NumberFormat("en-US",r).format(Number(t))}}]),t}()));e.a=c},1174:function(t,e,r){"use strict";r(1043)},1175:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".no-outline[data-v-4458bc14]{outline:none!important}.package-list[data-v-4458bc14]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-4458bc14]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-4458bc14]>:first-child{width:40px}.package-list li[data-v-4458bc14]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-4458bc14]:last-child{margin-bottom:0px}.promoted-banner[data-v-4458bc14]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),n.locals={},t.exports=n},1176:function(t,e,r){var content=r(1431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5769df59",content,!0,{sourceMap:!1})},1345:function(t,e,r){"use strict";r.r(e);r(31),r(35),r(30),r(89),r(43),r(36),r(7),r(54),r(24),r(55);var n=r(6),o=(r(416),r(0)),c=r(653);r(768);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.default.extend({name:"PackageCard",components:{TickIcon:c.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var t,e=this.$refs.packagename.textContent.trim();this.isMonthly;""!=e&&(t=d(d({},this.stagingPackage),{},{name:e,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",t),this.$store.commit("PACKAGE_CREATE",this.create)),this.$nuxt.$router.push("/register")}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),f=(r(1174),r(1)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 min-h-[547px] h-[100%]"},[e("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n    "+t._s((t.stagingPackage||{}).name)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(t.stagingPackage||{}).monthlyPrice:(t.stagingPackage||{}).yearlyPrice))]),t._v("\n      /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Monthly")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Yearly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).paperlink)+" Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("Paperlink Business Page ")])]),t._v(" "),t._l(t.stagingPackage.features,(function(r){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[t._v("\n           "+t._s(r.title)+" ")])])}))],2)]),t._v(" "),t.disableStart?t._e():e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:t.disableStart},on:{click:t.setPackageData}},[t._v("\n      Pay Now\n    ")])])])}),[],!1,null,"4458bc14",null);e.default=component.exports},1430:function(t,e,r){"use strict";r(1176)},1431:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".package-list[data-v-1231982d]{width:-moz-min-content;width:min-content;margin-left:auto;margin-right:auto;}.package-list li[data-v-1231982d]{margin-bottom:0.75rem;display:inline-grid;gap:0.75rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr;}.package-list li[data-v-1231982d]>:nth-child(2){color:#606060}.package-list li[data-v-1231982d]:last-child{margin-bottom:0px;}.promoted-banner[data-v-1231982d]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0;}",""]),n.locals={},t.exports=n},1678:function(t,e,r){var content=r(1901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7358f32a",content,!0,{sourceMap:!1})},1712:function(t,e,r){"use strict";r.r(e);r(278),r(35),r(77);var n=r(6),o=r(3),c=(r(43),r(30),r(36),r(7),r(54),r(24),r(55),r(18),r(1345)),l=r(651),d=r(0),m=r(1154);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=d.default.extend({name:"SelectCustomPackage",components:{CheckIcon:l.default,CustomPackagecard:c.default},data:function(){return{settings:{custom_paperlink_price:2,custom_team_members_price:2,custom_cc_price:0,custom_public_profile_price:10,custom_company_ledger_price:0},customPackage:{name:"Custom",description:"Custom package",paperlink:1,teamMembers:0,cc:1,publicProfile:!0,companyLedger:!0}}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{totalCost:function(){return Number(this.settings.custom_paperlink_price)*Number(this.customPackage.paperlink)+Number(this.settings.custom_team_members_price)*Number(this.customPackage.teamMembers)+Number(this.settings.custom_cc_price)*Number(this.customPackage.cc)+(this.customPackage.publicProfile?Number(this.settings.custom_public_profile_price):0)+(this.customPackage.companyLedger?Number(this.settings.custom_company_ledger_price):0)},stagingPackage:function(){var t=h({},this.customPackage);return Object.assign(t,{monthlyPrice:this.totalCost,yearlyPrice:Math.floor(12*this.totalCost-12*this.totalCost*.2)}),t}},methods:{formatPrice:function(t){return m.a.formatPrice(Number(t))},createAndProceed:function(t){t.stagingPackage;var e=t.isMonthly,data=h({},this.customPackage);data.plan=e?"monthly":"yearly"}}}),y=r(1),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid md:grid-cols-[1fr,max-content] mb-12 gap-5"},[e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative bg-white text-[#505050]"},[e("div",{staticClass:"p-5 overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Paperlink")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_paperlink_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{step:1,size:"small",min:1,max:20},model:{value:t.customPackage.paperlink,callback:function(e){t.$set(t.customPackage,"paperlink",t._n(e))},expression:"customPackage.paperlink"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_paperlink_price)*Number(t.customPackage.paperlink)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Team Member")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_team_members_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{step:1,size:"small",min:1,max:20},model:{value:t.customPackage.teamMembers,callback:function(e){t.$set(t.customPackage,"teamMembers",t._n(e))},expression:"customPackage.teamMembers"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_team_members_price)*Number(t.customPackage.teamMembers)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Paperlink Business Page")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{type:"checkbox",hidden:"",id:"public-profile-checkbox",disabled:!0},domProps:{checked:Array.isArray(t.customPackage.publicProfile)?t._i(t.customPackage.publicProfile,null)>-1:t.customPackage.publicProfile},on:{change:function(e){var r=t.customPackage.publicProfile,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&t.$set(t.customPackage,"publicProfile",r.concat([null])):c>-1&&t.$set(t.customPackage,"publicProfile",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.customPackage,"publicProfile",o)}}}),t._v(" "),e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.customPackage.publicProfile?Number(t.settings.custom_public_profile_price):0))+"\n            ")])])])])]),t._v(" "),e("div",{staticClass:"border-t-2 border-paperdazgreen-400 py-4 px-10 text-lg font-bold flex justify-between"},[e("span",[t._v("Total Amount")]),t._v(" "),e("span",{staticClass:"text-[#606060]"},[t._v(t._s(t.formatPrice(t.totalCost)))])])]),t._v(" "),e("div",{staticClass:"md:min-w-[300px] lg:min-w-[320px] bg-white rounded-[20px] p-3"},[e("custom-packagecard",{staticClass:"w-full",attrs:{"show-bottom-button":"","staging-package":t.stagingPackage,edited:!0,create:!0,isLight:!0},on:{setName:t.setname,"bottom-button-clicked":function(e){return t.$emit("next-tab",e)}}})],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",{staticClass:"text-lg"},[e("th",{staticClass:"text-left"},[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Feature")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Price "),e("span",{staticClass:"text-xxs font-normal"},[t._v("/unit")])])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Quantity")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Amount")])])])])}],!1,null,null,null);e.default=component.exports},1713:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(653),c=n.default.extend({name:"SelectMainsPackage",components:{TickIcon:o.default},props:["packagecontent","keyId","link"],data:function(){return{pagecontent:[],popactive:!0,indexPop:!0,standardTag:!1,isMonthly:!0,showBottomButton:!0}},methods:{show:function(){}},beforeMount:function(){this.pagecontent=this.packagecontent,this.standardTag=this.pagecontent.promoted},mounted:function(){}}),l=(r(1430),r(1)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"single-package-special relative border-2 bg-white border-paperdazgreen-400 w-full mx-3 my-2 shadow-md rounded-2xl overflow-hidden shadow-paperdazgray-300 pb-5"},[e("h4",{staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold mt-8"},[t._v("\n      "+t._s(t.pagecontent.type)+" Promoted\n  ")]),t._v(" "),t.standardTag?e("div",{staticClass:"custom-card-tag bg-paperdazgreen-400 text-white"},[t._v("Popular")]):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.pagecontent.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("\n        $\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v("\n              "+t._s(t.pagecontent.price)+" \n      ")]),t._v("\n      /mon\n      ")])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Yeary")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"justify-end bg-paperdazgreen-300":"bg-paperdazgray-500"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Monthly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.paperlinkfiles)+"\n         Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.teammembers)+" \n        Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.ccflow)+"\n         CC Flow ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(" "+t._s(t.pagecontent.publicprofile)+"\n            Public Profile ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n         "+t._s(t.pagecontent.pdfcopy)+"\n        PDF copy of all files ")])])])]),t._v(" "),t.showBottomButton?e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 rounded-lg shadow h-9 px-5",on:{click:function(e){return t.$emit("bottom-button-clicked",{stagingPackage:t.stagingPackage,isMonthly:t.isMonthly})}}},[t._v("\n      Start Now\n    ")])]):t._e()])}),[],!1,null,"1231982d",null);e.default=component.exports},1900:function(t,e,r){"use strict";r(1678)},1901:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".scroll-container[data-v-de7b46c0]{display:block;width:100%;overflow-y:hidden;overflow-x:scroll;white-space:nowrap;padding-top:1.5rem;padding-bottom:1.5rem}.scroll-container div[data-v-de7b46c0]{margin-left:0.75rem;margin-right:0.75rem;display:inline-block;white-space:normal}@media (min-width: 425px){.scroll-container div[data-v-de7b46c0]{width:300px}}.packages-container[data-v-de7b46c0]{margin-bottom:3rem;display:flex;flex-direction:column;gap:3rem;padding-top:3rem;padding-bottom:3rem}@media (min-width: 640px){.packages-container[data-v-de7b46c0]{flex-direction:row;gap:2rem}}@media (min-width: 768px){.packages-container[data-v-de7b46c0]{gap:3rem}}.packages-container[data-v-de7b46c0]{padding-left:0.75rem;padding-right:0.75rem}@media only screen and (min-width:640px){.packages-container .package-card-check-width[data-v-de7b46c0]{min-width:calc(50% - 16px);scroll-snap-align:start}}@media only screen and (min-width:768px){.packages-container .package-card-check-width[data-v-de7b46c0]{min-width:calc(50% - 24px);scroll-snap-align:start}}@media only screen and (min-width:1024px){.packages-container .package-card-check-width[data-v-de7b46c0]{min-width:calc(33.33333% - 32px)}}[data-v-de7b46c0]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-de7b46c0]::-webkit-scrollbar-thumb{background-color:transparent;width:5px;border-radius:50px;cursor:pointer}.mySwiper[data-v-de7b46c0]{overflow-x:hidden;white-space:nowrap}.swiper-slide[data-v-de7b46c0]{display:inline-block;margin-left:1rem;margin-right:1rem;white-space:normal}.swiper-button-prev[data-v-de7b46c0]{position:absolute;top:calc(50% - 20px);left:-5px;z-index:19}.swiper-button-next[data-v-de7b46c0]{position:absolute;top:calc(50% - 20px);right:30px;z-index:19}",""]),n.locals={},t.exports=n},1996:function(t,e,r){"use strict";r.r(e);r(36),r(7),r(780),r(24),r(88),r(31);var n=r(0),o=r(1012),c=(r(208),r(60)),l=r(651),d=r(1712),m=r(1713),f={package:[{price:15,type:"Strarter",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!1},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0},{price:13,type:"Standard",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:2,publicprofile:3,pdfcopy:3,promoted:!1},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0}]},h=r(285),v=r.n(h),y=n.default.extend({components:{PackageCard:o.default,ArrowDownIcon:c.default,CheckIcon:l.default,SelectCustomPackage:d.default,SelectMainPackage:m.default},name:"SelectPackageTab",data:function(){return{creatingCustomPackage:!1,promotionCode:void 0,pages:this.packages,packagecontent:f.package,overflow:void 0,initialWidth:0,showNav:!1,showNext:!0,showPrev:!1}},computed:{showPagination:function(){return this.orderedPackages.length>1},orderedPackages:function(){var t=(this.packages||[]).filter((function(t){return!t.visibility}));return t.sort((function(a,b){return a.monthly_price-b.monthly_price})),this.pagesDefault?t:this.pagesCustom?t.filter((function(t){return"default"!==t.type})):void 0}},props:{packages:{type:Array,default:function(){return[]}},pagesDefault:{type:String,default:""},pagesCustom:{type:String,default:""}},methods:{scaleCenterPackage:function(t,e){var r=document.querySelectorAll(t);document.querySelector(e);r.forEach((function(element){}))},syncAllElemHeight:function(t,e){setTimeout((function(){var r=document.querySelectorAll(t),n=document.querySelector(e).clientHeight;r.forEach((function(element){element.style.height=n-48+"px"}))}),20)},sendPackageCode:function(t){var e=this.$refs.packagecode.value;this.$emit("setparams",e)}},mounted:function(){var t=this.$route.query.name;this.creatingCustomPackage=!("default-package"==t),window.onresize=function(){v()(".mySwiper")&&(this.initialWidth=0),v()(".mySwiper").animate({scrollLeft:this.initialWidth},500)}},watch:{}}),k=(r(1900),r(1)),component=Object(k.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{key:"creating"},[e("p",{staticClass:"text-white text-center pb-4"},[t._v("Pay annually and get a 20% discount ")]),t._v(" "),e("select-custom-package",{on:{"next-tab":function(e){return t.$emit("next-tab",e)}}})],1)])}),[],!1,null,"de7b46c0",null);e.default=component.exports},651:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"CheckIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},653:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"TickIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},768:function(t,e,r){"use strict";var n;!function(t){t.YEARLY="yearly",t.MONTHLY="monthly"}(n||(n={}))},779:function(t,e,r){var content=r(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("595ac7a6",content,!0,{sourceMap:!1})},780:function(t,e,r){"use strict";var n=r(5),o=r(9),c=r(92),l=r(57),d=r(63),m=r(424),f=r(21),h=r(8),v=r(423),y=r(287),k=r(995),_=r(996),w=r(159),x=r(997),P=[],C=o(P.sort),O=o(P.push),j=h((function(){P.sort(void 0)})),M=h((function(){P.sort(null)})),z=y("sort"),S=!h((function(){if(w)return w<70;if(!(k&&k>3)){if(_)return!0;if(x)return x<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)P.push({k:t+r,v:e})}for(P.sort((function(a,b){return b.v-a.v})),r=0;r<P.length;r++)t=P[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:j||!M||!z||!S},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(S)return void 0===t?C(e):C(e,t);var r,n,o=[],h=d(e);for(n=0;n<h;n++)n in e&&O(o,e[n]);for(v(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<h;)m(e,n++);return e}})},993:function(t,e,r){"use strict";r(779)},994:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".no-outline[data-v-32be86da]{outline:none!important}.package-list[data-v-32be86da]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-32be86da]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-32be86da]>:first-child{width:40px}.package-list li[data-v-32be86da]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-32be86da]:last-child{margin-bottom:0px}.promoted-banner[data-v-32be86da]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),n.locals={},t.exports=n},995:function(t,e,r){var n=r(128).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},996:function(t,e,r){var n=r(128);t.exports=/MSIE|Trident/.test(n)},997:function(t,e,r){var n=r(128).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]}}]);