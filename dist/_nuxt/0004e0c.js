<<<<<<< HEAD:dist/_nuxt/0004e0c.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1177:function(t,e,o){var content=o(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("4fe3b152",content,!0,{sourceMap:!1})},1411:function(t,e,o){"use strict";o(1177)},1412:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-e7b066ee] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-e7b066ee] .el-dialog__header{padding-bottom:20px}*[data-v-e7b066ee] .el-dialog__footer,*[data-v-e7b066ee] .el-dialog__header{text-align:left!important}*[data-v-e7b066ee] .el-dialog__body{background:#fcfcfd}*[data-v-e7b066ee] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1660:function(t,e,o){"use strict";o.r(e);var n=o(6),l=(o(7),o(0)),d=o(43),r=l.default.extend({name:"change-user-email",components:Object(n.a)({SpinnerDottedIcon:d.default},"SpinnerDottedIcon",d.default),model:{prop:"visible",event:"updateVisibility"},props:{modalMessageError:{type:String},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,updateEmailInput:"",isLoading:!1}},watch:{visible:function(t){this.showModal=t,this.isLoading=!1},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.isLoading=!0,this.$axios.$post("/verify",{action:"resendToken",email:this.updateEmailInput}).then((function(t){e.$notify.success({message:"Message sent to email successfully"}),e.closeModal()})).catch((function(){e.$notify.error({message:"Failed to send"})})).finally((function(){e.isLoading=!1}))}}}),c=(o(1411),o(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Email")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{on:{submit:t.onSubmit}},[e("p",{staticClass:"text-red-700 font-normal text-[13px] w-full text-center pb-2"},[t._v(t._s(t.modalMessageError))]),t._v(" "),e("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.updateEmailInput,expression:"updateEmailInput"}],staticClass:"w-full py-4 px-4 border-[1px] border-paperdazgrey-500 rounded-md",attrs:{type:"email",required:"",placeholder:"Enter email"},domProps:{value:t.updateEmailInput},on:{input:function(e){e.target.composing||(t.updateEmailInput=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] shadow-md text-white rounded-lg bg-paperdazgreen-400",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isLoading}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n       Resend verification email\n       "),e("SpinnerDottedIcon",{staticClass:"animate-spin",class:[t.isLoading?"inline-block":"hidden"],attrs:{width:"20",height:"20"}})],1)])])])])}),[],!1,null,"e7b066ee",null);e.default=component.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1168:function(t,e,o){var content=o(1402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("4fe3b152",content,!0,{sourceMap:!1})},1401:function(t,e,o){"use strict";o(1168)},1402:function(t,e,o){var n=o(14)((function(i){return i[1]}));n.push([t.i,"*[data-v-e7b066ee] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-e7b066ee] .el-dialog__header{padding-bottom:20px}*[data-v-e7b066ee] .el-dialog__footer,*[data-v-e7b066ee] .el-dialog__header{text-align:left!important}*[data-v-e7b066ee] .el-dialog__body{background:#fcfcfd}*[data-v-e7b066ee] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1652:function(t,e,o){"use strict";o.r(e);var n=o(6),l=(o(7),o(0)),d=o(43),r=l.default.extend({name:"change-user-email",components:Object(n.a)({SpinnerDottedIcon:d.default},"SpinnerDottedIcon",d.default),model:{prop:"visible",event:"updateVisibility"},props:{modalMessageError:{type:String},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,updateEmailInput:"",isLoading:!1}},watch:{visible:function(t){this.showModal=t,this.isLoading=!1},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.isLoading=!0,this.$axios.$post("/verify",{action:"resendToken",email:this.updateEmailInput}).then((function(t){e.$notify.success({message:"Message sent to email successfully"}),e.closeModal()})).catch((function(){e.$notify.error({message:"Failed to send"})})).finally((function(){e.isLoading=!1}))}}}),c=(o(1401),o(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Email")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{on:{submit:t.onSubmit}},[e("p",{staticClass:"text-red-700 font-normal text-[13px] w-full text-center pb-2"},[t._v(t._s(t.modalMessageError))]),t._v(" "),e("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.updateEmailInput,expression:"updateEmailInput"}],staticClass:"w-full py-4 px-4 border-[1px] border-paperdazgrey-500 rounded-md",attrs:{type:"email",required:"",placeholder:"Enter email"},domProps:{value:t.updateEmailInput},on:{input:function(e){e.target.composing||(t.updateEmailInput=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] shadow-md text-white rounded-lg bg-paperdazgreen-400",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isLoading}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n       Resend verification email\n       "),e("SpinnerDottedIcon",{staticClass:"animate-spin",class:[t.isLoading?"inline-block":"hidden"],attrs:{width:"20",height:"20"}})],1)])])])])}),[],!1,null,"e7b066ee",null);e.default=component.exports}}]);
>>>>>>> fixed-ui:dist/_nuxt/172c3c1.js
