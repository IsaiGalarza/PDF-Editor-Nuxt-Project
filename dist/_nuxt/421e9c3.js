(window.webpackJsonp=window.webpackJsonp||[]).push([[167,22,37,183,276],{1116:function(t,e,r){"use strict";r(993)},1117:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-9e6b36c6] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9e6b36c6] .el-dialog__header{padding-bottom:20px}*[data-v-9e6b36c6] .el-dialog__footer,*[data-v-9e6b36c6] .el-dialog__header{text-align:left!important}*[data-v-9e6b36c6] .el-dialog__body{background:#fcfcfd}*[data-v-9e6b36c6] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1156:function(t,e,r){"use strict";r.r(e);r(43),r(30),r(36),r(7),r(54),r(24),r(55);var o=r(6),n=r(0),l=r(42),c=(r(287),r(202));r(743);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m=n.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object},verificationEmail:{type:String,default:""}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var t=this;this.$axios.$post("/verify",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({action:"resendToken"},this.verificationInfo)).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})}))}}}),f=m,v=(r(1116),r(1)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Sign up")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[t._v("\n    Verify your email address\n  ")]),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("\n    A verification email has been sent to"),e("br"),t._v(" "),e("b",{staticClass:"font-semibold text-paperdazgreen-400"},[t._v(t._s(t.verificationEmail))]),e("br"),t._v("\n    Please follow the instructions in the email to complete registration"),e("br"),t._v("\n    If you did not see the email, "),e("br"),t._v(" "),e("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:t.reSendVerification}},[t._v("\n      click here\n    ")]),t._v("\n    and we will resend it\n  ")])])}),[],!1,null,"9e6b36c6",null);e.default=component.exports},1185:function(t,e,r){var content=r(1433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6697d087",content,!0,{sourceMap:!1})},1432:function(t,e,r){"use strict";r(1185)},1433:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,"form[data-v-5aae71c1]{border-radius:0.75rem;border-width:4px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.5rem;width:100%;max-width:580px;margin:0 auto;box-shadow:0 4px 4px rgba(0,0,0,.25)}.input-label[data-v-5aae71c1]{display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500}.input-label+*[data-v-5aae71c1]{margin-top:0.25rem}.form-group[data-v-5aae71c1]:not(:last-child){margin-bottom:1.25rem}",""]),o.locals={},t.exports=o},1704:function(t,e,r){"use strict";r.r(e);r(30),r(36),r(54),r(24),r(55);var o=r(3),n=r(6),l=(r(43),r(7),r(18),r(14)),c=r(651),d=r(42),m=r(741),f=(r(78),r(37)),v=r(280),h=r(127),w=r(1156);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(l.a)(f.a).extend({components:{CheckIcon:c.default,SpinnerDottedIcon:d.default,MessageAlertWidget:m.default,SignUpEmailVerify:w.default},name:"PackageBasicInfoTab",data:function(){return{checkTermsandCondition:!1,currentForm:"confirm",confirmEmail:!1,loading:!1,errorMessage:"",showEmailVerification:!1,verificationEmail:"",formData:{email:"",password:"",firstName:"",lastName:""},confirmPassword:"",edittingConfirmed:!1,confirmFormData:{firstName:"",lastName:"",email:""}}},beforeMount:function(){this.filterUsers(),this.initializeAuthUserData()},computed:y(y({},Object(h.e)(["setPackage","createPackage"])),{},{user:function(){return this.$auth.user},displayingForm:function(){return this.$auth.loggedIn||this.$nuxt.$router.push("/register?hasPackageId=".concat(this.setPackage.id)),alert(this.$auth.loggedIn?"confirm":this.currentForm),this.$auth.loggedIn?"confirm":this.currentForm}}),methods:{confirmCompanyEmailInDatabase:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/users/?email=".concat(t.confirmFormData.companyEmail)).then((function(e){0==e.data.total?(t.$store.commit("PACKAGE_INFO",y(y({},t.setPackage),{},{companyName:t.confirmFormData.companyName,companyEmail:t.confirmFormData.companyEmail})),t.confirmEmail=!0):t.errorMessage="Company email already exist."}));case 2:case"end":return e.stop()}}),e)})))()},checktermsAndCondition:function(t){this.checkTermsandCondition=t.target.checked},initializeAuthUserData:function(){if(this.$auth.loggedIn)for(var t=0,e=Object.keys(this.confirmFormData);t<e.length;t++){var r=e[t];this.confirmFormData[r]=(this.$auth.user||{})[r]}},verifyConfirmForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0,o=Object.keys(t.confirmFormData);case 1:if(!(r<o.length)){e.next=9;break}if(n=o[r],t.confirmFormData[n]){e.next=6;break}return t.errorMessage="All fields are required.",e.abrupt("return");case 6:r++,e.next=1;break;case 9:t.$emit("next-tab");case 10:case"end":return e.stop()}}),e)})))()},updateUserRecords:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),!this.loading){var r=this.$auth.user.id,n={firstName:this.confirmFormData.firstName,lastName:this.confirmFormData.lastName};this.loading=!0,this.errorMessage="",this.$axios.$patch("/users/".concat(r),n).then(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.filterUsers(),e.edittingConfirmed=!1,e.$notify.success({title:"Data write",message:"Data updated successfully!"});case 3:case"end":return t.stop()}}),t)})))).catch((function(t){var r=t.response,o=Object(v.a)(r);e.errorMessage=o})).finally((function(){e.loading=!1}))}},login:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",this.$auth.loginWith("local",{data:{email:this.formData.email,password:this.formData.password,strategy:"local"}}).then((function(t){e.loginUser(t),e.initializeAuthUserData(),e.$notify({title:"Authentication",message:"Logged in successfully"})})).catch((function(t){var r=t.response;e.errorMessage=Object(v.a)(r)})).finally((function(){e.loading=!1})))},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$notify({title:"Authentication",message:"Sucessfully logged out",type:"success"});case 3:case"end":return e.stop()}}),e)})))()},register:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),(!this.formData.password||this.formData.password===this.confirmPassword)&&!this.loading&&this.checkTermsandCondition){this.loading=!0,this.errorMessage="";var data={firstName:this.formData.firstName,lastName:this.formData.lastName,email:this.formData.email,password:this.formData.password};this.$axios.post("/users",data).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showEmailVerification=!0,e.verificationEmail=r.data.email,e.loading=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=t.response,o=Object(v.a)(r);e.errorMessage=o})).finally((function(){e.loading=!1}))}}},watch:{displayingForm:function(){this.errorMessage="",this.formData={email:"",password:"",firstName:"",lastName:""},this.confirmPassword="",this.edittingConfirmed=!1,this.confirmFormData={firstName:"",lastName:"",email:"",companyEmail:"",companyName:""}},"$auth.user":function(){this.initializeAuthUserData()}}}),C=_,D=(r(1432),r(1)),component=Object(D.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("transition",{attrs:{name:"fade",mode:"out-in"}},["register"==t.displayingForm?e("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Signup to Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("First Name")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,required:"",placeholder:"First Name"},model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Last Name")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"Last Name",required:""},model:{value:t.formData.lastName,callback:function(e){t.$set(t.formData,"lastName",e)},expression:"formData.lastName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{type:"email",disabled:t.loading,placeholder:"Email",required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Password")]),t._v(" "),e("el-input",{attrs:{placeholder:"Password",disabled:t.loading,required:"","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),e("el-input",{attrs:{placeholder:"Confirm Password",required:"",disabled:t.loading,"show-password":""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:t.formData.password&&t.confirmPassword&&t.confirmPassword!=t.formData.password,expression:"\n            formData.password &&\n            confirmPassword &&\n            confirmPassword != formData.password\n          "}],staticClass:"text-red-500"},[t._v("Passwords don't match")])],1),t._v(" "),e("div",{staticClass:"flex justify-between text-xs mb-10"},[e("div",{staticClass:"text-paperdazgray-400 font-medium flex items-center gap-2"},[e("input",{attrs:{id:"remember-me-checkbox",type:"checkbox",hidden:""},on:{input:t.checktermsAndCondition}}),t._v(" "),e("label",{staticClass:"cursor-pointer circle circle-8 text-white relative",attrs:{for:"remember-me-checkbox"}},[e("div",{staticClass:"overlay circle circle-18"}),t._v(" "),e("check-icon",{staticClass:"relative",staticStyle:{"z-index":"1"},attrs:{height:"8",width:"8"}})],1),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"remember-me-checkbox"}},[t._v("Accept\n            "),e("nuxt-link",{staticClass:"text-paperdazgreen-300",attrs:{to:"#"}},[t._v("terms and conditions")])],1)])]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-6"},[e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Sign up")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Already have an account?\n        "),e("button",{staticClass:"text-paperdazgreen-400 disabled:cursor-not-allowed",attrs:{type:"button",disabled:t.loading},on:{click:function(e){t.currentForm="login"}}},[t._v("\n          Login\n        ")])])],1):"login"==t.displayingForm?e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Login to Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,type:"email",placeholder:"Email",required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Password")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"Password",required:"","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),e("div",{staticClass:"flex justify-between text-xs mb-10"},[e("div",{staticClass:"text-paperdazgray-400 font-medium flex items-center gap-2"},[e("input",{attrs:{id:"remember-me-checkbox",type:"checkbox",hidden:""}}),t._v(" "),e("label",{staticClass:"cursor-pointer circle circle-8 text-white relative",attrs:{for:"remember-me-checkbox"}},[e("div",{staticClass:"overlay circle circle-18"}),t._v(" "),e("check-icon",{staticClass:"relative",staticStyle:{"z-index":"1"},attrs:{height:"8",width:"8"}})],1),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"remember-me-checkbox"}},[t._v("Stay signed in")])])]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-6"},[e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Login")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Don't have an account?\n        "),e("button",{staticClass:"text-paperdazgreen-400 disabled:cursor-not-allowed",attrs:{type:"button",disabled:t.loading},on:{click:function(e){t.currentForm="register"}}},[t._v("\n          Register\n        ")])])],1):"confirm"==t.displayingForm?e("form",{on:{submit:t.updateUserRecords}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Confirm details on Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("First Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"First Name",required:"",disabled:!t.edittingConfirmed},model:{value:t.confirmFormData.firstName,callback:function(e){t.$set(t.confirmFormData,"firstName",e)},expression:"confirmFormData.firstName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Last Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"Last Name",required:"",disabled:!t.edittingConfirmed},model:{value:t.confirmFormData.lastName,callback:function(e){t.$set(t.confirmFormData,"lastName",e)},expression:"confirmFormData.lastName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{type:"email",placeholder:"Email",required:"",disabled:!0},model:{value:t.confirmFormData.email,callback:function(e){t.$set(t.confirmFormData,"email",e)},expression:"confirmFormData.email"}})],1),t._v(" "),e("div",{staticClass:"flex items-center justify-center gap-6 mt-6"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!t.edittingConfirmed,expression:"!edittingConfirmed"}],staticClass:"rounded-lg bg-gray-400 text-white shadow text-sm h-10 px-6 w-[100px]",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.edittingConfirmed=!0}}},[t._v("\n          Edit\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.edittingConfirmed,expression:"edittingConfirmed"}],staticClass:"rounded-lg bg-gray-400 text-white shadow text-sm h-10 px-6 w-[100px] disabled:bg-opacity-50 disabled:cursor-progress",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Save")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)]),t._v(" "),e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 w-[100px] px-6 disabled:cursor-not-allowed disabled:bg-opacity-50",attrs:{disabled:t.edittingConfirmed},on:{click:function(e){return e.preventDefault(),t.verifyConfirmForm.apply(null,arguments)}}},[t._v("\n          Next\n        ")])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Use another account?\n        "),e("button",{staticClass:"text-red-700 disabled:cursor-not-allowed",attrs:{disabled:t.loading,type:"button"},on:{click:t.logout}},[t._v("\n          Logout\n        ")])])],1):t._e()]),t._v(" "),e("SignUpEmailVerify",{attrs:{verificationEmail:t.verificationEmail},model:{value:t.showEmailVerification,callback:function(e){t.showEmailVerification=e},expression:"showEmailVerification"}})],1)}),[],!1,null,"5aae71c1",null);e.default=component.exports},651:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"ExclamationIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},737:function(t,e,r){var content=r(745);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("15d61284",content,!0,{sourceMap:!1})},741:function(t,e,r){"use strict";r.r(e);var o=r(6),n=r(0),l=r(651),c=r(652),d=r(42),m=r(90),f=n.default.extend({components:{ExclamationIcon:c.default,CheckIcon:l.default,TimesIcon:m.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(744),r(1)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(o.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message}),t._v(" "),t._t("action")],2)])}),[],!1,null,"9893bda6",null);e.default=component.exports},744:function(t,e,r){"use strict";r(737)},745:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),o.locals={},t.exports=o},747:function(t,e){},748:function(t,e){},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},993:function(t,e,r){var content=r(1117);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4aea7339",content,!0,{sourceMap:!1})}}]);