(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1212:function(t,e,r){var content=r(1453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7a2e50c6",content,!0,{sourceMap:!1})},1452:function(t,e,r){"use strict";r(1212)},1453:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".profile-tab[data-v-2b635701]::-webkit-scrollbar{display:none}",""]),n.locals={},t.exports=n},1718:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ProfileTab",model:{prop:"currentTab",event:"update-tab"},props:{currentTab:{type:String,default:""},tabs:{type:Array,default:function(){return[{label:"Account",value:"account"},{label:"Change Password",value:"change-password"}]}}},data:function(){return{}},methods:{setSettingTab:function(t){this.$nuxt.$router.push("/settings?tab=".concat(t)),this.$emit("update-tab",t)}},watch:{"$route.query.tab":function(){this.setSettingTab(this.$route.query.tab)}}}),o=(r(1452),r(1)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"profile-tab flex items-center overflow-x-auto overflow-y-hidden sm:border-b border-gray-200 custom-scrollbar w-full md:w-6/12 bg-white rounded-lg"},t._l(t.tabs,(function(r,i){return e("div",{key:i,staticClass:"w-6/12 py-3 cursor-pointer text-center sm:rounded-lg text-sm sm:text-base",class:[t.currentTab==r.value?"bg-paperdazgreen-300 text-white":"bg-transparent text-black"],on:{click:function(e){return t.setSettingTab(r.value)}}},[t._v("\n    "+t._s(r.label)+"\n  ")])})),0)}),[],!1,null,"2b635701",null);e.default=component.exports}}]);