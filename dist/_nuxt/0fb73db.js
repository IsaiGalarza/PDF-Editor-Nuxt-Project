(window.webpackJsonp=window.webpackJsonp||[]).push([[297,37,56,66,183],{1089:function(t,e,r){t.exports=r.p+"img/payment.b585f29.png"},1092:function(t,e,r){"use strict";r(980)},1093:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-9e6b36c6] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9e6b36c6] .el-dialog__header{padding-bottom:20px}*[data-v-9e6b36c6] .el-dialog__footer,*[data-v-9e6b36c6] .el-dialog__header{text-align:left!important}*[data-v-9e6b36c6] .el-dialog__body{background:#fcfcfd}*[data-v-9e6b36c6] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1141:function(t,e,r){"use strict";r.r(e);r(43),r(30),r(36),r(7),r(54),r(24),r(55);var n=r(6),o=r(0),c=r(42),l=(r(286),r(202));r(745);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m=o.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:c.default,CheckedFillIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object},verificationEmail:{type:String,default:""}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var t=this;this.$axios.$post("/verify",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({action:"resendToken"},this.verificationInfo)).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})}))}}}),f=m,v=(r(1092),r(1)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Sign up")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[t._v("\n    Verify your email address\n  ")]),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("\n    A verification email has been sent to"),e("br"),t._v(" "),e("b",{staticClass:"font-semibold text-paperdazgreen-400"},[t._v(t._s(t.verificationEmail))]),e("br"),t._v("\n    Please follow the instructions in the email to complete registration"),e("br"),t._v("\n    If you did not see the email, "),e("br"),t._v(" "),e("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:t.reSendVerification}},[t._v("\n      click here\n    ")]),t._v("\n    and we will resend it\n  ")])])}),[],!1,null,"9e6b36c6",null);e.default=component.exports},1172:function(t,e,r){var content=r(1425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6697d087",content,!0,{sourceMap:!1})},1173:function(t,e,r){var content=r(1427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("9850a490",content,!0,{sourceMap:!1})},1424:function(t,e,r){"use strict";r(1172)},1425:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"form[data-v-5aae71c1]{border-radius:0.75rem;border-width:4px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.5rem;width:100%;max-width:580px;margin:0 auto;box-shadow:0 4px 4px rgba(0,0,0,.25)}.input-label[data-v-5aae71c1]{display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500}.input-label+*[data-v-5aae71c1]{margin-top:0.25rem}.form-group[data-v-5aae71c1]:not(:last-child){margin-bottom:1.25rem}",""]),n.locals={},t.exports=n},1426:function(t,e,r){"use strict";r(1173)},1427:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"form[data-v-584c3477]{border-radius:0.75rem;border-width:4px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));padding:1.5rem;width:100%;max-width:580px;margin:0 auto;box-shadow:0 4px 4px rgba(0,0,0,.25)}.input-label[data-v-584c3477]{display:block;font-size:0.875rem;line-height:1.25rem;font-weight:700}.input-label+*[data-v-584c3477]{margin-top:0.25rem}.form-group[data-v-584c3477]:not(:last-child){margin-bottom:1.25rem}",""]),n.locals={},t.exports=n},1676:function(t,e,r){var content=r(1899);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("91f8a550",content,!0,{sourceMap:!1})},1707:function(t,e,r){"use strict";r.r(e);r(30),r(36),r(54),r(24),r(55);var n=r(3),o=r(6),c=(r(43),r(7),r(18),r(14)),l=r(651),d=r(42),m=r(741),f=(r(78),r(37)),v=r(280),h=r(127),w=r(1141);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(c.a)(f.a).extend({components:{CheckIcon:l.default,SpinnerDottedIcon:d.default,MessageAlertWidget:m.default,SignUpEmailVerify:w.default},name:"PackageBasicInfoTab",data:function(){return{checkTermsandCondition:!1,currentForm:"confirm",confirmEmail:!1,loading:!1,errorMessage:"",showEmailVerification:!1,verificationEmail:"",formData:{email:"",password:"",firstName:"",lastName:""},confirmPassword:"",edittingConfirmed:!1,confirmFormData:{firstName:"",lastName:"",email:""}}},beforeMount:function(){this.filterUsers(),this.initializeAuthUserData()},computed:y(y({},Object(h.e)(["setPackage","createPackage"])),{},{user:function(){return this.$auth.user},displayingForm:function(){return this.$auth.loggedIn||this.$nuxt.$router.push("/register?hasPackageId=".concat(this.setPackage.id)),alert(this.$auth.loggedIn?"confirm":this.currentForm),this.$auth.loggedIn?"confirm":this.currentForm}}),methods:{confirmCompanyEmailInDatabase:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/users/?email=".concat(t.confirmFormData.companyEmail)).then((function(e){0==e.data.total?(t.$store.commit("PACKAGE_INFO",y(y({},t.setPackage),{},{companyName:t.confirmFormData.companyName,companyEmail:t.confirmFormData.companyEmail})),t.confirmEmail=!0):t.errorMessage="Company email already exist."}));case 2:case"end":return e.stop()}}),e)})))()},checktermsAndCondition:function(t){this.checkTermsandCondition=t.target.checked},initializeAuthUserData:function(){if(this.$auth.loggedIn)for(var t=0,e=Object.keys(this.confirmFormData);t<e.length;t++){var r=e[t];this.confirmFormData[r]=(this.$auth.user||{})[r]}},verifyConfirmForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0,n=Object.keys(t.confirmFormData);case 1:if(!(r<n.length)){e.next=9;break}if(o=n[r],t.confirmFormData[o]){e.next=6;break}return t.errorMessage="All fields are required.",e.abrupt("return");case 6:r++,e.next=1;break;case 9:t.$emit("next-tab");case 10:case"end":return e.stop()}}),e)})))()},updateUserRecords:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),!this.loading){var r=this.$auth.user.id,o={firstName:this.confirmFormData.firstName,lastName:this.confirmFormData.lastName};this.loading=!0,this.errorMessage="",this.$axios.$patch("/users/".concat(r),o).then(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.filterUsers(),e.edittingConfirmed=!1,e.$notify.success({title:"Data write",message:"Data updated successfully!"});case 3:case"end":return t.stop()}}),t)})))).catch((function(t){var r=t.response,n=Object(v.a)(r);e.errorMessage=n})).finally((function(){e.loading=!1}))}},login:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",this.$auth.loginWith("local",{data:{email:this.formData.email,password:this.formData.password,strategy:"local"}}).then((function(t){e.loginUser(t),e.initializeAuthUserData(),e.$notify({title:"Authentication",message:"Logged in successfully"})})).catch((function(t){var r=t.response;e.errorMessage=Object(v.a)(r)})).finally((function(){e.loading=!1})))},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$notify({title:"Authentication",message:"Sucessfully logged out",type:"success"});case 3:case"end":return e.stop()}}),e)})))()},register:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),(!this.formData.password||this.formData.password===this.confirmPassword)&&!this.loading&&this.checkTermsandCondition){this.loading=!0,this.errorMessage="";var data={firstName:this.formData.firstName,lastName:this.formData.lastName,email:this.formData.email,password:this.formData.password};this.$axios.post("/users",data).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showEmailVerification=!0,e.verificationEmail=r.data.email,e.loading=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=t.response,n=Object(v.a)(r);e.errorMessage=n})).finally((function(){e.loading=!1}))}}},watch:{displayingForm:function(){this.errorMessage="",this.formData={email:"",password:"",firstName:"",lastName:""},this.confirmPassword="",this.edittingConfirmed=!1,this.confirmFormData={firstName:"",lastName:"",email:"",companyEmail:"",companyName:""}},"$auth.user":function(){this.initializeAuthUserData()}}}),C=_,k=(r(1424),r(1)),component=Object(k.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("transition",{attrs:{name:"fade",mode:"out-in"}},["register"==t.displayingForm?e("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Signup to Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("First Name")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,required:"",placeholder:"First Name"},model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Last Name")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"Last Name",required:""},model:{value:t.formData.lastName,callback:function(e){t.$set(t.formData,"lastName",e)},expression:"formData.lastName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{type:"email",disabled:t.loading,placeholder:"Email",required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Password")]),t._v(" "),e("el-input",{attrs:{placeholder:"Password",disabled:t.loading,required:"","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),e("el-input",{attrs:{placeholder:"Confirm Password",required:"",disabled:t.loading,"show-password":""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),e("small",{directives:[{name:"show",rawName:"v-show",value:t.formData.password&&t.confirmPassword&&t.confirmPassword!=t.formData.password,expression:"\n            formData.password &&\n            confirmPassword &&\n            confirmPassword != formData.password\n          "}],staticClass:"text-red-500"},[t._v("Passwords don't match")])],1),t._v(" "),e("div",{staticClass:"flex justify-between text-xs mb-10"},[e("div",{staticClass:"text-paperdazgray-400 font-medium flex items-center gap-2"},[e("input",{attrs:{id:"remember-me-checkbox",type:"checkbox",hidden:""},on:{input:t.checktermsAndCondition}}),t._v(" "),e("label",{staticClass:"cursor-pointer circle circle-8 text-white relative",attrs:{for:"remember-me-checkbox"}},[e("div",{staticClass:"overlay circle circle-18"}),t._v(" "),e("check-icon",{staticClass:"relative",staticStyle:{"z-index":"1"},attrs:{height:"8",width:"8"}})],1),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"remember-me-checkbox"}},[t._v("Accept\n            "),e("nuxt-link",{staticClass:"text-paperdazgreen-300",attrs:{to:"#"}},[t._v("terms and conditions")])],1)])]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-6"},[e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Sign up")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Already have an account?\n        "),e("button",{staticClass:"text-paperdazgreen-400 disabled:cursor-not-allowed",attrs:{type:"button",disabled:t.loading},on:{click:function(e){t.currentForm="login"}}},[t._v("\n          Login\n        ")])])],1):"login"==t.displayingForm?e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Login to Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,type:"email",placeholder:"Email",required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Password")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"Password",required:"","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),e("div",{staticClass:"flex justify-between text-xs mb-10"},[e("div",{staticClass:"text-paperdazgray-400 font-medium flex items-center gap-2"},[e("input",{attrs:{id:"remember-me-checkbox",type:"checkbox",hidden:""}}),t._v(" "),e("label",{staticClass:"cursor-pointer circle circle-8 text-white relative",attrs:{for:"remember-me-checkbox"}},[e("div",{staticClass:"overlay circle circle-18"}),t._v(" "),e("check-icon",{staticClass:"relative",staticStyle:{"z-index":"1"},attrs:{height:"8",width:"8"}})],1),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"remember-me-checkbox"}},[t._v("Stay signed in")])])]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-6"},[e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Login")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Don't have an account?\n        "),e("button",{staticClass:"text-paperdazgreen-400 disabled:cursor-not-allowed",attrs:{type:"button",disabled:t.loading},on:{click:function(e){t.currentForm="register"}}},[t._v("\n          Register\n        ")])])],1):"confirm"==t.displayingForm?e("form",{on:{submit:t.updateUserRecords}},[e("legend",{staticClass:"block text-center font-semibold mb-6"},[t._v("\n        Confirm details on Paperdaz\n      ")]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("First Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"First Name",required:"",disabled:!t.edittingConfirmed},model:{value:t.confirmFormData.firstName,callback:function(e){t.$set(t.confirmFormData,"firstName",e)},expression:"confirmFormData.firstName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Last Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"Last Name",required:"",disabled:!t.edittingConfirmed},model:{value:t.confirmFormData.lastName,callback:function(e){t.$set(t.confirmFormData,"lastName",e)},expression:"confirmFormData.lastName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{type:"email",placeholder:"Email",required:"",disabled:!0},model:{value:t.confirmFormData.email,callback:function(e){t.$set(t.confirmFormData,"email",e)},expression:"confirmFormData.email"}})],1),t._v(" "),e("div",{staticClass:"flex items-center justify-center gap-6 mt-6"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!t.edittingConfirmed,expression:"!edittingConfirmed"}],staticClass:"rounded-lg bg-gray-400 text-white shadow text-sm h-10 px-6 w-[100px]",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.edittingConfirmed=!0}}},[t._v("\n          Edit\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.edittingConfirmed,expression:"edittingConfirmed"}],staticClass:"rounded-lg bg-gray-400 text-white shadow text-sm h-10 px-6 w-[100px] disabled:bg-opacity-50 disabled:cursor-progress",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Save")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)]),t._v(" "),e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 w-[100px] px-6 disabled:cursor-not-allowed disabled:bg-opacity-50",attrs:{disabled:t.edittingConfirmed},on:{click:function(e){return e.preventDefault(),t.verifyConfirmForm.apply(null,arguments)}}},[t._v("\n          Next\n        ")])]),t._v(" "),e("p",{staticClass:"text-sm mt-5 text-center"},[t._v("\n        Use another account?\n        "),e("button",{staticClass:"text-red-700 disabled:cursor-not-allowed",attrs:{disabled:t.loading,type:"button"},on:{click:t.logout}},[t._v("\n          Logout\n        ")])])],1):t._e()]),t._v(" "),e("SignUpEmailVerify",{attrs:{verificationEmail:t.verificationEmail},model:{value:t.showEmailVerification,callback:function(e){t.showEmailVerification=e},expression:"showEmailVerification"}})],1)}),[],!1,null,"5aae71c1",null);e.default=component.exports},1708:function(t,e,r){"use strict";r.r(e);r(31);var n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid mb-10"},[e("label",{staticClass:"input-label font-bold",attrs:{for:""}},[t._v("\n            Credit Card\n            "),e("img",{staticClass:"float-right inline w-[134px]",attrs:{src:r(1089)}})])])}],o=(r(43),r(30),r(36),r(54),r(24),r(55),r(6)),c=r(3),l=(r(25),r(48),r(130),r(281),r(421),r(278),r(7),r(88),r(18),r(0)),d=r(127),m=r(42),f=(r(706),r(741)),v=(r(37),r(280)),h=r(1012);r(4);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=l.default.extend({components:{SpinnerDottedIcon:m.default,MessageAlertWidget:f.default,PackageCard:h.default},name:"PackagePaymentTab",data:function(){return{loading:!1,errorMessage:"",cardNumberWithDashes:"",name:"",cvv:"",cardId:void 0,expirationDateWithSlashes:"",companyName:"",createFlage:!0}},props:{stagingPackageInfo:{type:Object,default:function(){return{}}},packages:{type:Array,default:function(){return[]}}},beforeMount:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!t.$auth.loggedIn&&t.notLoggedIn();case 1:case"end":return e.stop()}}),e)})))()},computed:x(x({},Object(d.e)(["setPackage","createPackage"])),{},{packageData:function(){var t=this.setPackage,e=t.name,r=t.paperlink,n=t.teamMembers,o=(t.monthlyPrice,t.id),c=t.isMonthly,l=(t.userId,t.yearlyPrice,t.publicProfile),d=t.companyLedger,m=(t.activationCode,t.cc),f=t.companyName,v=t.companyEmail;return this.createPackage&&1==this.createPackage?{plan:c?"monthly":"yearly",action:"subscribe",companyName:f,companyEmail:v,custom:{name:e,paperlink:r,teamMembers:n,publicProfile:l,companyLedger:d,cc:m}}:0==this.createPackage?{packageId:o,action:"subscribe",companyName:f,companyEmail:v,plan:c?"monthly":"yearly"}:void 0},cardNumber:function(){return this.cardNumberWithDashes.replace(/-+/g,"")},expirationDateString:function(){return this.expirationDateWithSlashes.split("/").join("")||""},expYear:function(){return this.expirationDateString.split("").splice(2,4).join("")},expMonth:function(){return this.expirationDateString.split("").splice(0,2).join("")},stagingPackage:function(){return this.$store.state.setPackage}}),methods:{notLoggedIn:function(){localStorage.setItem("package-not-loggedin",JSON.stringify(this.setPackage)),localStorage.setItem("create-package-not-loggedin",this.createPackage),this.$nuxt.$router.push("/register")},inputCardNumber:function(t){if(!(t.length>19)){var e=t.replace(/(-+)|([^0-9]+)/g,"");this.cardNumberWithDashes=(e.match(/.{1,4}/g)||[]).join("-")}},inputExpirationDate:function(t){var e=t.replace(/\/+|[^0-9]+/g,"");if(!(e.length>4)){2===e.length&&(Number(e)>12&&(e="0"+e),0==Number(e)&&(e="01")),4==e.length&&0==Number(e.substring(2,4))&&(e=e.substring(0,2)+"01");var r=(e.match(/.{1,2}/g)||[]).join("/");this.expirationDateWithSlashes=r}},updateCard:function(t,data){var e=this;return this.$axios.$patch("/card/".concat(t),data).catch((function(t){var r="";r=t&&t.response&&t.response.data&&t.response.data.message?t.response.data.message:"Server not reachable",e.errorMessage=r,e.loading=!1}))},submit:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null==t||t.preventDefault(),e.expYear&&e.expMonth&&!isNaN(e.cvv)){r.next=4;break}return e.errorMessage="Please review the inputed information",r.abrupt("return");case 4:if(!e.loading){r.next=6;break}return r.abrupt("return");case 6:return(e.$auth.user||{id:""}).id,data={card_holder_name:e.name,card_number:e.cardNumber,exp_year:e.expYear,exp_month:e.expMonth,cvv:e.cvv},e.loading=!0,e.errorMessage="",n=!1,r.next=13,e.$axios.$post("/cards",data).then((function(t){var r=t.id;e.cardId=r,n=!0})).catch(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=r.response,e.errorMessage=Object(v.a)(n),e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 13:if(n){r.next=16;break}return e.loading=!1,r.abrupt("return");case 16:e.$axios.$post("/subscriptions",x(x({},e.packageData),{},{companyName:e.companyName,createFlage:!0,cardId:e.cardId})).then(Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$notify.success({title:"Package Subscription",message:"You have successfully subscribed for this package"}),setTimeout((function(){e.$nuxt.$router.push("/dashboard"),e.$store.commit("SET_CONGRAT_SUCCESS")}),1e3);case 2:case"end":return t.stop()}}),t)})))).catch(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.response,e.errorMessage=Object(v.a)(n),t.next=4,e.$axios.$delete("/cards/".concat(e.cardId));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.loading=!1}));case 17:case"end":return r.stop()}}),r)})))()}},mounted:function(){}}),_=y,C=(r(1426),r(1)),component=Object(C.a)(_,(function(){var t,e=this,r=e._self._c;e._self._setupProxy;return r("div",{},[r("div",{staticClass:"flex flex-wrap w-full justify-center"},[r("div",{staticClass:"w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-3"},[r("package-card",{staticClass:"package-card-check-width",style:{"--count":1},attrs:{edited:!1,create:!1,"show-bottom-button":"",stagingPackage:e.stagingPackage,disableStart:!0},on:{"bottom-button-clicked":function(t){return e.$emit("next-tab",t)}}})],1),e._v(" "),r("div",{staticClass:"w-full sm:w-full md:w-2/3 lg:w-2/3"},[r("form",{on:{submit:e.submit}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label font-bold",attrs:{for:""}},[e._v("Create business Name\n          ")]),e._v(" "),r("el-input",{attrs:{disabled:e.loading,placeholder:"Name Surname",required:""},model:{value:e.companyName,callback:function(t){e.companyName=t},expression:"companyName"}})],1),e._v(" "),r("div",{staticClass:"h-1 bg-black"}),e._v(" "),r("div",{staticClass:"h-4"}),e._v(" "),e._m(0),e._v(" "),e.errorMessage?r("message-alert-widget",{staticClass:"mb-7",attrs:{message:e.errorMessage,type:"error"}}):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Name of card holder")]),e._v(" "),r("el-input",{attrs:{disabled:e.loading,placeholder:"Name Surname",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Card Number")]),e._v(" "),r("el-input",{attrs:{disabled:e.loading,placeholder:"0000-0000-0000-0000",value:e.cardNumberWithDashes,required:""},on:{input:e.inputCardNumber}})],1),e._v(" "),r("div",{staticClass:"grid gap-5 grid-cols-2"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Expiration Date")]),e._v(" "),r("el-input",{attrs:{disabled:e.loading,placeholder:"MM/YY",required:"",value:e.expirationDateWithSlashes},on:{input:e.inputExpirationDate}})],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[e._v("CVC")]),e._v(" "),r("el-input",{attrs:{disabled:e.loading,placeholder:"000",required:"",type:"password",maxlength:"3"},model:{value:e.cvv,callback:function(t){e.cvv=t},expression:"cvv"}})],1)]),e._v(" "),r("div",{staticClass:"grid place-items-center mt-6"},[r("button",{staticClass:"rounded-lg bg-paperdazgreen-400 shadow text-sm h-10 px-6 disabled:bg-opacity-50 w-full",attrs:{disabled:e.loading}},[r("span",{staticClass:"inline-flex items-center gap-3"},[r("span",[e._v("Pay "+e._s("yearly"==(null===(t=this.packageData)||void 0===t?void 0:t.plan)?(e.stagingPackage||{}).yearlyPrice:(e.stagingPackage||{}).monthlyPrice))]),e._v(" "),r("transition",{attrs:{name:"fade",duration:100}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin"},[r("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])],1)])])])}),n,!1,null,"584c3477",null);e.default=component.exports},1898:function(t,e,r){"use strict";r(1676)},1899:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'.tab-indicator-container[data-v-4b9ad5c8]{position:relative;margin-left:auto;margin-right:auto;margin-bottom:5rem;display:flex;width:100%;max-width:600px;align-items:center;justify-content:space-between;--circle-size:60px}.tab-indicator-container.second[data-v-4b9ad5c8]:before,.tab-indicator-container.third[data-v-4b9ad5c8]:after{background:#77b550}.tab-indicator-container[data-v-4b9ad5c8]:before{left:calc(var(--circle-size) + 3px)}.tab-indicator-container[data-v-4b9ad5c8]:after,.tab-indicator-container[data-v-4b9ad5c8]:before{content:"";position:absolute;height:2px;width:calc(50% - var(--circle-size)*1.5 - 6px);background:#909090}.tab-indicator-container[data-v-4b9ad5c8]:after{left:calc(50% + var(--circle-size)/2 + 3px)}.tab-indicator-circle[data-v-4b9ad5c8]{position:relative;border-width:2px;--tw-border-opacity:1;border-color:rgb(144 144 144 / var(--tw-border-opacity));font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgb(144 144 144 / var(--tw-text-opacity))}.tab-indicator-circle.active[data-v-4b9ad5c8]{--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(119 181 80 / var(--tw-text-opacity))}.tab-indicator-circle .highlight[data-v-4b9ad5c8]{position:absolute;white-space:nowrap;font-size:0.75rem;line-height:1rem;top:calc(100% + 8px)}',""]),n.locals={},t.exports=n},2019:function(t,e,r){"use strict";r.r(e);r(278);var n=r(0),o=r(1707),c=r(1708),l=r(1992),d=r(682),m=r(683),f=r(69),footer=(r(78),r(425)),v=n.default.extend({components:{UserProfileSolidIcon:f.default,MailIcon:d.default,PaymentCardIcon:m.default,Footer:footer.default},name:"PackagesLandingPage",layout:"landing",auth:!1,data:function(){return{tabLevel:1,stagingPackageInfo:void 0,packages:[],name:void 0}},head:function(){return{script:[{src:"~/components/script/splide.min.js"}]}},mounted:function(){this.tabLevel=Number(this.$route.query.tablevel)},computed:{currentTabComponent:function(){switch(this.tabLevel){case 1:return this.$nuxt.$router.push("/package?tablevel=1"),l.default;case 2:return this.$nuxt.$router.push("/package?tablevel=2"),o.default;case 3:return this.$nuxt.$router.push("/package?tablevel=3"),c.default;default:return{render:function(t){return t("h1","Unknown tab")}}}}},methods:{nextTab:function(t){1==this.tabLevel&&(this.stagingPackageInfo=t),this.tabLevel+=2}},watch:{"$route.query.tablevel":function(){this.tabLevel=Number(this.$route.query.tablevel)}}}),h=(r(1898),r(1)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{},[e("section",{staticClass:"container pt-14 pb-24 bg-paperdazgreen-300"},[e("div",[e("keep-alive",[e(t.currentTabComponent,{tag:"component",attrs:{"staging-package-info":t.stagingPackageInfo,packages:t.packages,pagesCustom:"custom-package"},on:{"next-tab":function(e){return t.nextTab(e)}}})],1)],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,"4b9ad5c8",null);e.default=component.exports;installComponents(component,{Footer:r(425).default})},652:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ExclamationIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},682:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"MailIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"16",width:"16"}},[t("path",{attrs:{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}})])}),[],!1,null,null,null);e.default=component.exports},683:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"PaymentCardIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",viewBox:"0 0 42 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M37.5857 0.333374H4.25236C1.93986 0.333374 0.106527 2.18754 0.106527 4.50004L0.0856934 29.5C0.0856934 31.8125 1.93986 33.6667 4.25236 33.6667H37.5857C39.8982 33.6667 41.7524 31.8125 41.7524 29.5V4.50004C41.7524 2.18754 39.8982 0.333374 37.5857 0.333374ZM37.5857 29.5H4.25236V17H37.5857V29.5ZM37.5857 8.66671H4.25236V4.50004H37.5857V8.66671Z"}})])}),[],!1,null,null,null);e.default=component.exports},737:function(t,e,r){var content=r(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("15d61284",content,!0,{sourceMap:!1})},741:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(0),c=r(651),l=r(652),d=r(42),m=r(90),f=o.default.extend({components:{ExclamationIcon:l.default,CheckIcon:c.default,TimesIcon:m.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(743),r(1)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(n.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message}),t._v(" "),t._t("action")],2)])}),[],!1,null,"9893bda6",null);e.default=component.exports},743:function(t,e,r){"use strict";r(737)},744:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),n.locals={},t.exports=n},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},757:function(t,e){},758:function(t,e){},980:function(t,e,r){var content=r(1093);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4aea7339",content,!0,{sourceMap:!1})}}]);