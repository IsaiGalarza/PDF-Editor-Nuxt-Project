(window.webpackJsonp=window.webpackJsonp||[]).push([[291,22,37,39,105,113,272,273,274],{1033:function(e,t,r){"use strict";r.r(t);r(35),r(77);var o=r(0),n=r(657),l=r(209),c=o.default.extend({name:"PasswordField",components:{EyeIcon:n.default,EyeSlashedIcon:l.default},props:{placeholder:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showAsError:{type:Boolean,default:!1}},data:function(){return{showPassword:!1,value:void 0,focus:!1}},watch:{value:function(e){this.$emit("input",e)}},mounted:function(){}}),d=(r(992),r(1)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"input-field flex items-center",class:[e.focus?"border-paperdazgray-500":"border-paperdazgray-200",e.showAsError?"error":""]},["checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){var r=e.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.value=r.concat([null])):l>-1&&(e.value=r.slice(0,l).concat(r.slice(l+1)))}else e.value=n}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:e.showPassword?"text":"password"},domProps:{value:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),t("span",{staticClass:"cursor-pointer",class:{"text-paperdazgray-300":!e.showPassword},on:{click:function(t){e.showPassword=!e.showPassword}}},[e.showPassword?t("eye-icon"):t("eye-slashed-icon")],1)])}),[],!1,null,"347ad17a",null);t.default=component.exports},1122:function(e,t,r){"use strict";r(995)},1123:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".social-card[data-v-5bbea032]{display:flex;min-width:120px;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.social-card[data-v-5bbea032]:hover{--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}",""]),o.locals={},e.exports=o},1148:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(18),r(0)),l=r(744),c=r.n(l),d=n.default.extend({created:function(){},data:function(){return{socialState:void 0}},methods:{socialSignIn:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,r.t0=e,r.next="facebook"===r.t0?4:"google"===r.t0?6:"twitter"===r.t0?8:10;break;case 4:return t.socialState=new t.$fireModule.auth.FacebookAuthProvider,r.abrupt("break",10);case 6:return t.socialState=new t.$fireModule.auth.GoogleAuthProvider,r.abrupt("break",10);case 8:return t.socialState=new t.$fireModule.auth.TwitterAuthProvider,r.abrupt("break",10);case 10:return r.next=12,t.$fire.auth.signInWithPopup(t.socialState);case 12:n=(n=r.sent).user._delegate.providerData[0],n={displayName:null===(o=n)||void 0===o?void 0:o.displayName,email:n.email,phoneNumber:n.phoneNumber,photoURL:n.photoURL,id:n.uid,provider:n.providerId.substring(0,n.providerId.indexOf("."))},l=c.a.sign(n,"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),window.location.assign("/login?token=".concat(l)),r.next=22;break;case 19:r.prev=19,r.t1=r.catch(0),console.log(r.t1);case 22:case"end":return r.stop()}}),r,null,[[0,19]])})))()}}}),f=(r(1122),r(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"flex flex-wrap gap-2 xs:gap-4 text-sm font-medium text-paperdazgray-400"},[t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("facebook")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/facebook.png",alt:""}}),e._v(" "),t("span",[e._v("Facebook")])]),e._v(" "),t("div",{staticClass:"flex-1 social-card cursor-pointer",on:{click:function(t){return e.socialSignIn("google")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/google.png",alt:""}}),e._v(" "),t("span",[e._v("Google")])]),e._v(" "),t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("twitter")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/twitter.png",alt:""}}),e._v(" "),t("span",[e._v("Twitter")])])])])}),[],!1,null,"5bbea032",null);t.default=component.exports},1186:function(e,t,r){var content=r(1431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5a713fa2",content,!0,{sourceMap:!1})},1430:function(e,t,r){"use strict";r(1186)},1431:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,"*[data-v-6aed3933] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-6aed3933] .el-dialog__header{padding-bottom:20px}*[data-v-6aed3933] .el-dialog__footer,*[data-v-6aed3933] .el-dialog__header{text-align:left!important}*[data-v-6aed3933] .el-dialog__body{background:#fcfcfd}*[data-v-6aed3933] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},1666:function(e,t,r){var content=r(1882);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("1ea61b5a",content,!0,{sourceMap:!1})},1694:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(7),r(0)),l=r(42),c=n.default.extend({name:"change-user-email",components:Object(o.a)({SpinnerDottedIcon:l.default},"SpinnerDottedIcon",l.default),model:{prop:"visible",event:"updateVisibility"},props:{modalMessageError:{type:String},visible:{type:Boolean,default:!1},email:{type:String}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,updateEmailInput:"",isLoading:!1}},watch:{visible:function(e){this.showModal=e,this.isLoading=!1,this.updateEmailInput=this.email},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.isLoading=!0,this.$axios.$post("/verify",{action:"resendToken",email:this.updateEmailInput}).then((function(e){t.$notify.success({message:"Message sent to email successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Failed to send"})})).finally((function(){t.isLoading=!1}))}}}),d=(r(1430),r(1)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Email")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("form",{on:{submit:e.onSubmit}},[t("p",{staticClass:"text-red-700 font-normal text-[13px] w-full text-center pb-2"},[e._v(e._s(e.modalMessageError))]),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.updateEmailInput,expression:"updateEmailInput"}],staticClass:"w-full py-2 px-2 border-[1px] border-paperdazgrey-500 rounded-md",attrs:{type:"email",required:"",placeholder:"Enter email"},domProps:{value:e.updateEmailInput},on:{input:function(t){t.target.composing||(e.updateEmailInput=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] shadow-md text-white rounded-lg bg-paperdazgreen-400",class:[e.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:e.isLoading}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n       Resend verification email\n       "),t("SpinnerDottedIcon",{staticClass:"animate-spin",class:[e.isLoading?"inline-block":"hidden"],attrs:{width:"20",height:"20"}})],1)])])])])}),[],!1,null,"6aed3933",null);t.default=component.exports},1881:function(e,t,r){"use strict";r(1666)},1882:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,"#remember-me-checkbox:not(:checked)+label[data-v-3381302f]{--tw-bg-opacity:1;background-color:rgb(148 148 148 / var(--tw-bg-opacity))}#remember-me-checkbox:not(:checked)+label .overlay[data-v-3381302f]{background-color:rgb(148 148 148 / var(--tw-bg-opacity));--tw-bg-opacity:0.2}#remember-me-checkbox:checked+label[data-v-3381302f]{--tw-bg-opacity:1;background-color:rgb(119 195 96 / var(--tw-bg-opacity))}#remember-me-checkbox:checked+label .overlay[data-v-3381302f]{opacity:1;background-color:rgb(119 195 96 / var(--tw-bg-opacity));--tw-bg-opacity:0.2}#remember-me-checkbox+label[data-v-3381302f]{z-index:2;}#remember-me-checkbox+label .overlay[data-v-3381302f]{z-index:-1;opacity:0;position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}#remember-me-checkbox+label:hover .overlay[data-v-3381302f]{opacity:1}",""]),o.locals={},e.exports=o},1998:function(e,t,r){"use strict";r.r(t);r(30),r(36),r(54),r(24),r(55);var o=r(6),n=r(3),l=(r(18),r(79),r(80),r(43),r(31),r(25),r(428),r(7),r(35),r(88),r(0)),c=r(1148),d=r(651),f=r(652),m=r(42),v=r(112),h=r(764),w=r(741),x=r(1033),y=r(744),k=r.n(y),_=r(37),C=r(280),I=r(1694),footer=r(422);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S=l.default.extend({name:"LoginPage",auth:"guest",mixins:[_.a],components:{SocialAuth:c.default,InputField:h.default,PasswordField:x.default,SvgIcon:v.default,SpinnerDottedIcon:m.default,ExclamationIcon:f.default,MessageAlertWidget:w.default,CheckIcon:d.default,ChangeUserEmail:I.default,Footer:footer.default},layout:"landing",data:function(){return{user:{email:this.$route.query.email?this.$route.query.email:void 0,password:void 0,strategy:"local"},isLoading:!1,errorMessage:"",showUpdateEmail:!1,teamData:{},socialData:{},modalMessageError:"",socialIsSignIn:void 0,loginAsTeam:Object.keys(this.$route.query).includes("teamId"),isRedirecting:!1,socialUser:void 0,isEmailVerified:!1,checkingEmailVerified:!1}},asyncData:function(e){var t=e.query,r=(e.$config,e.env.ENCRYPTION_KEY),o=t.token,n=void 0,l="";if(t.error&&(l=decodeURI(t.error||"")),o)try{if((n=k.a.verify(o,r)).name||(n.name={givenName:"",familyName:"",middleName:""}),(!n.name.givenName||!n.name.familyName)&&n.displayName){var c=n.displayName.split(/\s+/);n.name.givenName=c[0],n.name.familyName=c[c.length-1]}}catch(e){l=e.message||"Invalid token."}var d=!!n;return l&&(d=!1),{socialUser:n,isLoading:d,errorMessage:l,encryptionKey:r}},mounted:function(){this.socialLogin(),this.confirmIsEmailVerified();var e=this.$route.query.email?this.$route.query.email:void 0;this.user.email=e},methods:{confirmIsEmailVerified:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.query.verificationToken){t.next=3;break}return t.abrupt("return");case 3:return e.checkingEmailVerified=!0,t.next=6,e.$axios.$post("/verify",{action:"verifyEmail",token:r}).then((function(){e.$notify.success({title:"",message:"Email verified"})})).catch((function(){e.$notify.error({title:"",message:"verification failed"})})).finally((function(){e.checkingEmailVerified=!1}));case 6:case"end":return t.stop()}}),t)})))()},checkEmailValidity:function(data){null==data.email&&window.location.assign("/login?error=Oops, email is required")},updateSocialDataEmail:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.socialData.email=e,console.log("updated-password",t.socialData),r.next=5,t.RegisterGottenSocialUser(t.socialData);case 5:return r.next=7,t.getSocialUser(t.socialData.socialId);case 7:case"end":return r.stop()}}),r)})))()},loginInSocialUser:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.user.email=data.email,e.user.password=data.secret+data.socialId,console.log("about to log in these user"),t.next=6,e.login();case 6:case"end":return t.stop()}}),t)})))()},getSocialUser:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.get("/users/?email=".concat(t,"&socialId=").concat(e)).then((function(e){console.log(e);var data=e.data.data;r.socialIsSignIn=data.length>0,r.socialIsSignIn&&r.loginInSocialUser(data[0])})).catch((function(){r.socialIsSignIn=void 0}));case 2:case"end":return o.stop()}}),o)})))()},RegisterGottenSocialUser:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.checkEmailValidity(data),t.next=3,e.$axios.$post("/users",M(M({},data),{},{isSocial:!0})).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){var r=t.response;e.errorMessage=Object(C.a)(r),e.errorMessage.includes("Email")&&window.location.assign("/login?error=Email cannot be use, User exists already")})).finally((function(){e.isLoading=!1}));case 3:case"end":return t.stop()}}),t)})))()},socialLogin:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.socialUser&&e.socialUser.provider){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!1,e.socialUser.provider,data={socialId:e.socialUser.id,firstName:e.socialUser.name.givenName,lastName:e.socialUser.name.familyName,email:e.socialUser.email,profilePicture:e.socialUser.photoURL,socialLogin:e.socialUser.provider},e.socialData=data,console.log("xxxxxxxxxxxxxxxxxxxxxxxx-social",e.socialData),t.next=9,e.getSocialUser(e.socialData.socialId,e.socialData.email);case 9:if(!e.socialIsSignIn){t.next=11;break}return t.abrupt("return");case 11:return t.next=13,e.RegisterGottenSocialUser(e.socialData);case 13:return t.next=15,e.getSocialUser(e.socialData.socialId,e.socialData.email);case 15:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===event||void 0===event||event.preventDefault(),!e.isLoading&&!e.isRedirecting){t.next=3;break}return t.abrupt("return");case 3:e.checkEmailValidity(e.user),e.isLoading=!0,e.errorMessage="",e.isRedirecting=!1,e.$auth.loginWith("local",{data:e.user}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=(o=r.data.user).isEmailVerified&&o.isEmailVerified){t.next=7;break}return t.next=4,e.$auth.logout();case 4:return e.isLoading=!1,e.isEmailVerified=!0,t.abrupt("return");case 7:return t.next=9,e.loginUser(r);case 9:e.isRedirecting=!0,setTimeout((function(){var t=JSON.parse(localStorage.getItem("isGuest"));console.log(t),(null==t?void 0:t.isGuest)?e.$nuxt.$router.push(t.path):e.$nuxt.$router.push("/paperlink-files")}),2e3);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r=t.response,o=Object(C.a)(r);e.errorMessage=o})).finally((function(){e.isLoading=!1}));case 8:case"end":return t.stop()}}),t)})))()}},watch:{}}),O=S,j=(r(1881),r(1)),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-paperdazgreen-300"},[t("div",{staticClass:"container py-20"},[t("div",{staticClass:"w-full max-w-md mx-auto bg-white shadow-2xl rounded-xl pt-6 pb-10"},[e.isEmailVerified?t("div",{staticClass:"flex items-center text-[13px] w-full bg-red-500 text-white rounded-md py-3 p-2 mb-5"},[t("exclamation-icon",{attrs:{width:"18",height:"18"}}),e._v(" "),t("span",{staticClass:"inline-block pl-2"},[e._v("\n          Email is not verified, "),t("b",{staticClass:"underline"},[t("button",{on:{click:function(t){e.showUpdateEmail=!0}}},[e._v("Click to resend")])])])],1):e._e(),e._v(" "),t("p",{staticClass:"text-center text-[1.3rem] text-[#5FA348]"},[e._v("PaperLink Console")]),e._v(" "),t("hr",{staticClass:"my-4 bg-[#80808037]"}),e._v(" "),t("form",{staticClass:"text-sm px-6",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"mb-8",attrs:{message:e.errorMessage,type:"error"}}),e._v(" "),t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.isRedirecting,expression:"isRedirecting"}],staticClass:"mb-8",attrs:{message:"Please wait, redirecting",type:"success",isLoading:!0}}),e._v(" "),t("div",{staticClass:"mb-6"},[t("label",{staticClass:"mb-2 block",attrs:{for:""}},[e._v("Email")]),e._v(" "),t("input-field",{attrs:{showAsError:!!e.errorMessage,disabled:e.isLoading||e.isRedirecting,type:"email",placeholder:"example@email.com",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),t("div",{staticClass:"mb-10"},[t("label",{staticClass:"mb-2 block",attrs:{for:""}},[e._v("Password")]),e._v(" "),t("password-field",{attrs:{showAsError:!!e.errorMessage,disabled:e.isLoading||e.isRedirecting,required:"",placeholder:"xxxxxxxxxxxxxxxxxxxx"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),t("div",{staticClass:"flex justify-between text-xs mb-10"},[t("div",{staticClass:"text-paperdazgray-400 font-medium flex items-center gap-2"},[t("input",{attrs:{id:"remember-me-checkbox",type:"checkbox",hidden:""}}),e._v(" "),t("label",{staticClass:"cursor-pointer circle circle-8 text-white relative",attrs:{for:"remember-me-checkbox"}},[t("div",{staticClass:"overlay circle circle-18"}),e._v(" "),t("check-icon",{staticClass:"relative",staticStyle:{"z-index":"1"},attrs:{height:"8",width:"8"}})],1),e._v(" "),t("label",{staticClass:"cursor-pointer",attrs:{for:"remember-me-checkbox"}},[e._v("Remember me")])]),e._v(" "),t("nuxt-link",{staticClass:"text-[#FF7373]",attrs:{to:"/forgot-password"}},[e._v("Forgot Password")])],1),e._v(" "),t("div",{staticClass:"flex w-full flex-col items-center"},[t("button",{staticClass:"h-10 w-[80%] rounded-lg shadow px-5 text-white text-sm bg-paperdazgreen-300 disabled:bg-opacity-70",class:[e.isLoading?"cursor-progress":""],attrs:{disabled:e.isLoading||e.checkingEmailVerified}},[t("span",{staticClass:"inline-flex items-center gap-3"},[t("span",[e._v("Sign in")]),e._v(" "),t("transition",{attrs:{name:"fade",duration:100}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])],1)])]),e._v(" "),t("ChangeUserEmail",{attrs:{modalMessageError:e.modalMessageError},on:{updateSocialDataEmail:e.updateSocialDataEmail},model:{value:e.showUpdateEmail,callback:function(t){e.showUpdateEmail=t},expression:"showUpdateEmail"}}),e._v(" "),t("Footer")],1)}),[],!1,null,"3381302f",null);t.default=component.exports;installComponents(component,{Footer:r(422).default})},651:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},652:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"ExclamationIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},657:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"EyeIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 576 512"}},[e("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])}),[],!1,null,null,null);t.default=component.exports},737:function(e,t,r){var content=r(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("15d61284",content,!0,{sourceMap:!1})},741:function(e,t,r){"use strict";r.r(t);var o=r(6),n=r(0),l=r(651),c=r(652),d=r(42),f=r(90),m=n.default.extend({components:{ExclamationIcon:c.default,CheckIcon:l.default,TimesIcon:f.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(745),r(1)),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(o.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message}),e._v(" "),e._t("action")],2)])}),[],!1,null,"9893bda6",null);t.default=component.exports},745:function(e,t,r){"use strict";r(737)},746:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),o.locals={},e.exports=o},749:function(e,t){},750:function(e,t){},751:function(e,t){},752:function(e,t){},753:function(e,t){},754:function(e,t){},755:function(e,t){},756:function(e,t){},757:function(e,t){},758:function(e,t){},764:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"InputField",props:{showAsError:{type:Boolean,default:!1},type:{type:String,default:"text"}}}),n=(r(818),r(1)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("input",{staticClass:"input-field",class:{error:e.showAsError},attrs:{type:e.type,placeholder:""},on:{input:function(t){return e.$emit("input",t.currentTarget.value)}}})}),[],!1,null,"10238621",null);t.default=component.exports},765:function(e,t,r){var content=r(819);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("15b29c42",content,!0,{sourceMap:!1})},778:function(e,t,r){var content=r(993);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("6b9503c8",content,!0,{sourceMap:!1})},818:function(e,t,r){"use strict";r(765)},819:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-10238621]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-10238621]:focus{--tw-border-opacity:1;border-color:rgb(65 65 66 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px}.input-field[data-v-10238621]:disabled{cursor:not-allowed}.input-field.error[data-v-10238621]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-10238621]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}",""]),o.locals={},e.exports=o},992:function(e,t,r){"use strict";r(778)},993:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-347ad17a]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-347ad17a]:focus{outline:2px solid transparent;outline-offset:2px}.input-field.error[data-v-347ad17a]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}.input-field.error>input[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error>input[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}",""]),o.locals={},e.exports=o},995:function(e,t,r){var content=r(1123);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("95ed67ce",content,!0,{sourceMap:!1})}}]);