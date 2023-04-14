(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1007:function(t,e,r){"use strict";r.r(e);r(37),r(28),r(32),r(8),r(48),r(21),r(49);var o=r(6),n=r(0),d=r(43),l=(r(286),r(202));r(737);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f=n.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:d.default,CheckedFillIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object},verificationEmail:{type:String,default:""}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var t=this;this.$axios.$post("/verify",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({action:"resendToken"},this.verificationInfo)).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})}))}}}),v=f,m=(r(966),r(1)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Sign up")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[t._v("\n    Verify your email address\n  ")]),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("\n    A verification email has been sent to"),e("br"),t._v(" "),e("b",{staticClass:"font-semibold text-paperdazgreen-400"},[t._v(t._s(t.verificationEmail))]),e("br"),t._v("\n    Please follow the instructions in the email to complete registration"),e("br"),t._v("\n    If you did not see the email, "),e("br"),t._v(" "),e("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:t.reSendVerification}},[t._v("\n      click here\n    ")]),t._v("\n    and we will resend it\n  ")])])}),[],!1,null,"9e6b36c6",null);e.default=component.exports},1620:function(t,e,r){var content=r(1814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("a4b72a38",content,!0,{sourceMap:!1})},1813:function(t,e,r){"use strict";r(1620)},1814:function(t,e,r){var o=r(14)((function(i){return i[1]}));o.push([t.i,".dropdown[data-v-4fcc8101]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.form-outer[data-v-4fcc8101]{background-color:#fff!important}.register-btn[data-v-4fcc8101]{background-color:#77b550!important}.dropdown[data-v-4fcc8101]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-4fcc8101]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-4fcc8101]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-4fcc8101]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-4fcc8101]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-4fcc8101]{width:100%;text-align:left}.error-wrapper[data-v-4fcc8101]{margin-top:0.5rem;margin-bottom:0.5rem;display:flex;flex-direction:row;align-items:center}.error-indicator[data-v-4fcc8101]{margin-right:0.5rem;height:10px;width:10px;overflow:hidden;border-radius:100%;padding:2px}",""]),o.locals={},t.exports=o},1926:function(t,e,r){"use strict";r.r(e);r(25);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-lg-6 md:order-1 order-2"},[e("div",{staticClass:"flex flex-col w-full h-full items-center mt-[30px]"},[e("img",{staticClass:"w-[300px]",attrs:{src:r(1559),alt:""}}),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"text-2xl text-[#8E8989] font-bold px-3 text-center"},[t._v("Thank you for "),e("br"),t._v("being\n                  "),e("br"),t._v("Responsible!!\n                ")])])])])}],n=(r(37),r(28),r(32),r(48),r(21),r(49),r(3)),d=r(6),l=(r(18),r(278),r(8),r(0)),c=r(646),f=r(43),v=r(111),m=r(755),h=r(736),w=r(871),x=r(38),y=r(735),_=r(647),P=r(1007),C=r(995),O=r(737),k=r.n(O);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=l.default.extend({name:"confirm-password",auth:!1,mixins:[x.a],components:Object(d.a)({SocialAuth:C.default,InputField:m.default,PasswordField:w.default,SvgIcon:v.default,CheckIcon:c.default,MessageAlertWidget:h.default,SpinnerDottedIcon:f.default,ExclamationIcon:_.default,SignUpEmailVerify:P.default},"SocialAuth",C.default),layout:"landing",data:function(){return{confirmPassword:void 0,setDropDown:!1,countrycode:"",country:"",dropDownContent:[],totalCountriesArray:[],isTeamLoggin:!1,teamMemberLinkMessage:"Already have an account?",showEmailVerification:!1,ConfirmedPassword:!1,verificationEmail:"",userParams:this.$route.query.verificationToken,decodedUserInfo:{},registered:!1,isFormValid:!1,user:{password:"",confirmPassword:"",action:"reset_password",token:"",isEmailVerified:!0},isLoading:!1,errorMessage:"",isRedirecting:!1,acceptTermsConditions:!1,charac:/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,number:/[0-9]/,alphabet:/[A-Za-z]/}},watch:{"user.password":function(){this.getIsFormValid(),this.checkPasswordStrength()},"user.confirmPassword":function(){this.getIsFormValid(),this.checkPasswordStrength()}},computed:{username:function(){var t=this.decodedUserInfo;return t.firstName+" "+t.lastName||""},isPasswordEqual:function(){var t,e;return 0!==(null===(t=this.user.password)||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.length)&&this.user.password==this.user.confirmPassword}},beforeRouteLeave:function(t,e,r){this.$auth.logout(),r()},mounted:function(){var t=k.a.verify(this.userParams,"+Erqnl5F0JnIsW++d9U0BfwpJ6w=");this.decodedUserInfo=E({},t.data),this.user.token=k.a.sign({data:this.decodedUserInfo.user_id},"+Erqnl5F0JnIsW++d9U0BfwpJ6w=")},methods:{checkPasswordStrength:function(){var t;this.charac.test(this.user.password)&&this.number.test(this.user.password)&&this.alphabet.test(this.user.password)&&(null===(t=this.user.password)||void 0===t?void 0:t.length)>8?this.ConfirmedPassword=!1:this.ConfirmedPassword=!0},getIsFormValid:function(){var t;this.charac.test(this.user.password)&&this.number.test(this.user.password)&&this.alphabet.test(this.user.password)&&(null===(t=this.user.password)||void 0===t?void 0:t.length)>8&&this.user.password===this.user.confirmPassword?this.isFormValid=!0:this.isFormValid=!1},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},termsConditionClick:function(t){t.target.checked?this.acceptTermsConditions=!0:this.acceptTermsConditions=!1},submit:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),!this.isLoading&&(this.isLoading=!0,this.errorMessage="",this.user.confirmPassword===this.user.password)){var r=this.user;r.newPassword=r.password,delete r.password,delete r.confirmPassword,this.$axios.$patch("/users/1",E({},r)).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$notify.success({title:"Password comfirm",message:"Password comfirm success"}),e.$nuxt.$router.push("/login");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=t.response,o=Object(y.a)(r);e.errorMessage=o,e.$notify.error({title:"Password comfirm",message:"Something went wrong, Please try again"})})).finally((function(){e.isLoading=!1}))}}}}),I=S,M=(r(1813),r(1)),component=Object(M.a)(I,(function(){var t,e,r=this,o=r._self._c;r._self._setupProxy;return o("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[o("div",{staticClass:"container py-20"},[o("div",{staticClass:"reset-pass-section"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("form",{staticClass:"col-lg-6 md:order-2 order-1",on:{submit:function(t){return t.preventDefault(),r.submit.apply(null,arguments)}}},[o("div",{staticClass:"left-form"},[o("div",{staticClass:"form form-outer shadow-2xl"},[o("div",{staticClass:"heading"},[o("h1",[r._v("Welcome Back!")]),r._v(" "),o("h3",{staticClass:"capitalize"},[r._v(r._s(r.username))])]),r._v(" "),o("h6",[r._v("Create a password")]),r._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[r._v("Password")]),r._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:r.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",disabled:r.isLoading||r.isRedirecting,required:"",placeholder:"Password"},domProps:{value:r.user.password},on:{input:function(t){t.target.composing||r.$set(r.user,"password",t.target.value)}}})]),r._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[r._v("Retype password")]),r._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:r.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",disabled:r.isLoading||r.isRedirecting,placeholder:"Password"},domProps:{value:r.user.confirmPassword},on:{input:function(t){t.target.composing||r.$set(r.user,"confirmPassword",t.target.value)}}}),r._v(" "),o("div",{},[o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.alphabet.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.alphabet.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                        Password must contain upper")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.number.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.number.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                        Password must contain number")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.charac.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.charac.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                        Password must contain symbol")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[(null===(t=this.user.password)||void 0===t?void 0:t.length)>8?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[(null===(e=this.user.password)||void 0===e?void 0:e.length)>8?"text-[green]":"text-[#808080b8]"]},[r._v("\n                        Password must be morethan 8 characters")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.isPasswordEqual?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.isPasswordEqual?"text-[green]":"text-[#808080b8]"]},[r._v("\n                        Password match")])])])]),r._v(" "),o("button",{staticClass:"register-btn h-10 w-full mt-6 text-white rounded-lg shadow px-5 text-sm",class:[r.isLoading?"cursor-progress opacity-60":"",r.isFormValid?"":"cursor-not-allowed opacity-60"],attrs:{disabled:!r.isFormValid}},[o("span",{staticClass:"inline-flex items-center gap-3"},[o("span",[r._v("Register")]),r._v(" "),o("transition",{attrs:{name:"fade",duration:100}},[o("span",{directives:[{name:"show",rawName:"v-show",value:r.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[o("spinner-dotted-icon",{attrs:{height:"22",width:"22",color:"white"}})],1)])],1)])])])]),r._v(" "),r._m(0)])])])]),r._v(" "),o("SignUpEmailVerify",{attrs:{verificationEmail:r.verificationEmail},model:{value:r.showEmailVerification,callback:function(t){r.showEmailVerification=t},expression:"showEmailVerification"}})],1)}),o,!1,null,"4fcc8101",null);e.default=component.exports},735:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(87),r(88);function o(t){var e,r,o,n,d,l,c,f,v,m;console.log("error-handler",t);var h=(null===(r=null===(e=t)||void 0===e?void 0:e.data)||void 0===r?void 0:r.errors[0])||(null===(n=null===(o=t)||void 0===o?void 0:o.data)||void 0===n?void 0:n.message);return console.log("error-handler",h),(null===(d=(null==h?void 0:h.message)||h)||void 0===d?void 0:d.includes("email"))?"Email already exists":(null===(l=(null==h?void 0:h.message)||h)||void 0===l?void 0:l.includes("phone"))?"Phone number already exists":(null===(c=(null==h?void 0:h.message)||h)||void 0===c?void 0:c.includes("Invalid login"))?"Email or password is Incorrect":null==h?"Network error":(null===(f=(null==h?void 0:h.message)||h)||void 0===f?void 0:f.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(v=(null==h?void 0:h.message)||h)||void 0===v?void 0:v.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(m=(null==h?void 0:h.message)||h)||void 0===m?void 0:m.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},841:function(t,e,r){var content=r(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4aea7339",content,!0,{sourceMap:!1})},966:function(t,e,r){"use strict";r(841)},967:function(t,e,r){var o=r(14)((function(i){return i[1]}));o.push([t.i,"*[data-v-9e6b36c6] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9e6b36c6] .el-dialog__header{padding-bottom:20px}*[data-v-9e6b36c6] .el-dialog__footer,*[data-v-9e6b36c6] .el-dialog__header{text-align:left!important}*[data-v-9e6b36c6] .el-dialog__body{background:#fcfcfd}*[data-v-9e6b36c6] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o}}]);