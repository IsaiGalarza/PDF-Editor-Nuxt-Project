(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{1053:function(t,e,r){var content=r(1402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("18100bd8",content,!0,{sourceMap:!1})},1401:function(t,e,r){"use strict";r(1053)},1402:function(t,e,r){var n=r(14)((function(i){return i[1]}));n.push([t.i,".profile-tab[data-v-40932626]::-webkit-scrollbar{display:none}",""]),n.locals={},t.exports=n},1636:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ProfileTab",model:{prop:"currentTab",event:"update-tab"},props:{currentTab:{type:String,default:""},tabs:{type:Array,default:function(){return[{label:"Account",value:"account"},{label:"Change Password",value:"change-password"},{label:"Signature/Initials",value:"signature-initials"}]}}},data:function(){return{}},methods:{setSettingTab:function(t){this.$nuxt.$router.push("/settings?tab=".concat(t)),this.$emit("update-tab",t)}},watch:{"$route.query.tab":function(){this.setSettingTab(this.$route.query.tab)}}}),o=(r(1401),r(1)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"profile-tab flex items-center overflow-x-auto overflow-y-hidden sm:border-b border-gray-200 custom-scrollbar"},t._l(t.tabs,(function(r,i){return e("div",{key:i,staticClass:"h-9 lg:h-10 sm:border-b-2 sm:font-semibold cursor-pointer text-sm sm:text-base lg:text-lg whitespace-nowrap flex items-center justify-center px-3 px-sm-0 rounded-full sm:rounded-none",class:[t.currentTab==r.value?"bg-paperdazgray-800 text-white/100 sm:bg-transparent sm:border-paperdazgreen-300 sm:text-paperdazgreen-300":"bg-white/100 text-paperdazgray-900 sm:bg-transparent sm:border-transparent",i!==t.tabs.length-1?"mr-2 sm:mr-8":"",0===i?"ms-2 sm:ms-0":"ms-0",r.hidden?"hidden":""],on:{click:function(e){return t.setSettingTab(r.value)}}},[t._v("\n    "+t._s(r.label)+"\n  ")])})),0)}),[],!1,null,"40932626",null);e.default=component.exports}}]);