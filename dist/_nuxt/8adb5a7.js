(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1120:function(t,e,n){"use strict";n(994)},1121:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-9e6b36c6] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9e6b36c6] .el-dialog__header{padding-bottom:20px}*[data-v-9e6b36c6] .el-dialog__footer,*[data-v-9e6b36c6] .el-dialog__header{text-align:left!important}*[data-v-9e6b36c6] .el-dialog__body{background:#fcfcfd}*[data-v-9e6b36c6] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1160:function(t,e,n){"use strict";n.r(e);n(43),n(30),n(36),n(7),n(54),n(24),n(55);var o=n(6),r=n(0),c=n(42),l=(n(287),n(202));n(744);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=r.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:c.default,CheckedFillIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object},verificationEmail:{type:String,default:""}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var t=this;this.$axios.$post("/verify",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({action:"resendToken"},this.verificationInfo)).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})}))}}}),v=f,h=(n(1120),n(1)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Sign up")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[t._v("\n    Verify your email address\n  ")]),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("\n    A verification email has been sent to"),e("br"),t._v(" "),e("b",{staticClass:"font-semibold text-paperdazgreen-400"},[t._v(t._s(t.verificationEmail))]),e("br"),t._v("\n    Please follow the instructions in the email to complete registration"),e("br"),t._v("\n    If you did not see the email, "),e("br"),t._v(" "),e("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:t.reSendVerification}},[t._v("\n      click here\n    ")]),t._v("\n    and we will resend it\n  ")])])}),[],!1,null,"9e6b36c6",null);e.default=component.exports},748:function(t,e){},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},757:function(t,e){},994:function(t,e,n){var content=n(1121);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4aea7339",content,!0,{sourceMap:!1})}}]);