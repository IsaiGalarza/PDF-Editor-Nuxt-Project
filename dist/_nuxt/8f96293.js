(window.webpackJsonp=window.webpackJsonp||[]).push([[304,22,37,39,104,274,275,277],{1021:function(t,e,r){"use strict";r(797)},1022:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".social-card[data-v-5bbea032]{display:flex;min-width:120px;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.social-card[data-v-5bbea032]:hover{--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},1086:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(18),r(0)),l=r(745),c=r.n(l),d=n.default.extend({created:function(){},data:function(){return{socialState:void 0}},methods:{socialSignIn:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,r.t0=t,r.next="facebook"===r.t0?4:"google"===r.t0?6:"twitter"===r.t0?8:10;break;case 4:return e.socialState=new e.$fireModule.auth.FacebookAuthProvider,r.abrupt("break",10);case 6:return e.socialState=new e.$fireModule.auth.GoogleAuthProvider,r.abrupt("break",10);case 8:return e.socialState=new e.$fireModule.auth.TwitterAuthProvider,r.abrupt("break",10);case 10:return r.next=12,e.$fire.auth.signInWithPopup(e.socialState);case 12:n=(n=r.sent).user._delegate.providerData[0],n={displayName:null===(o=n)||void 0===o?void 0:o.displayName,email:n.email,phoneNumber:n.phoneNumber,photoURL:n.photoURL,id:n.uid,provider:n.providerId.substring(0,n.providerId.indexOf("."))},l=c.a.sign(n,"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),window.location.assign("/login?token=".concat(l)),r.next=22;break;case 19:r.prev=19,r.t1=r.catch(0),console.log(r.t1);case 22:case"end":return r.stop()}}),r,null,[[0,19]])})))()}}}),f=(r(1021),r(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"flex flex-wrap gap-2 xs:gap-4 text-sm font-medium text-paperdazgray-400"},[e("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(e){return t.socialSignIn("facebook")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/facebook.png",alt:""}}),t._v(" "),e("span",[t._v("Facebook")])]),t._v(" "),e("div",{staticClass:"flex-1 social-card cursor-pointer",on:{click:function(e){return t.socialSignIn("google")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/google.png",alt:""}}),t._v(" "),e("span",[t._v("Google")])]),t._v(" "),e("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(e){return t.socialSignIn("twitter")}}},[e("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/twitter.png",alt:""}}),t._v(" "),e("span",[t._v("Twitter")])])])])}),[],!1,null,"5bbea032",null);e.default=component.exports},1196:function(t,e,r){var content=r(1444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("acbee3ac",content,!0,{sourceMap:!1})},1399:function(t,e,r){t.exports=r.p+"img/card2.918e816.png"},1443:function(t,e,r){"use strict";r(1196)},1444:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".input-field[data-v-44d37268]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-44d37268]:focus{outline:2px solid transparent;outline-offset:2px}.input-field.error[data-v-44d37268]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-44d37268]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-44d37268]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-44d37268]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}.input-field.error>input[data-v-44d37268]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error>input[data-v-44d37268]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}",""]),o.locals={},t.exports=o},1678:function(t,e,r){var content=r(1911);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3fe26825",content,!0,{sourceMap:!1})},1717:function(t,e,r){"use strict";r.r(e);r(35),r(77);var o=r(0),n=r(654),l=r(209),c=o.default.extend({name:"PasswordField",components:{EyeIcon:n.default,EyeSlashedIcon:l.default},props:{placeholder:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showAsError:{type:Boolean,default:!1}},data:function(){return{showPassword:!1,value:void 0,focus:!1}},watch:{value:function(t){this.$emit("input",t)}},mounted:function(){}}),d=(r(1443),r(1)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex border-[1px] items-center rounded px-2",class:[t.focus?"border-paperdazgray-500":"border-paperdazgray-200",t.showAsError?"error":""]},["checkbox"==(t.showPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"inputField",staticClass:"border border-white px-0 rounded focus:outline-none",attrs:{placeholder:t.placeholder,required:t.required,disabled:t.disabled,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{focus:function(e){t.focus=!0},focusout:function(e){t.focus=!1},change:function(e){var r=t.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&(t.value=r.concat([null])):l>-1&&(t.value=r.slice(0,l).concat(r.slice(l+1)))}else t.value=n}}}):"radio"==(t.showPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"inputField",staticClass:"border border-white px-0 rounded focus:outline-none",attrs:{placeholder:t.placeholder,required:t.required,disabled:t.disabled,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{focus:function(e){t.focus=!0},focusout:function(e){t.focus=!1},change:function(e){t.value=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"inputField",staticClass:"border border-white px-0 rounded focus:outline-none",attrs:{placeholder:t.placeholder,required:t.required,disabled:t.disabled,type:t.showPassword?"text":"password"},domProps:{value:t.value},on:{focus:function(e){t.focus=!0},focusout:function(e){t.focus=!1},input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),e("span",{staticClass:"cursor-pointer",class:{"text-paperdazgray-300":!t.showPassword},on:{click:function(e){t.showPassword=!t.showPassword}}},[t.showPassword?e("eye-icon"):e("eye-slashed-icon")],1)])}),[],!1,null,"44d37268",null);e.default=component.exports},1910:function(t,e,r){"use strict";r(1678)},1911:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".dropdown[data-v-4eea1353]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.form-outer[data-v-4eea1353]{background-color:#fff!important}.register-btn[data-v-4eea1353]{background-color:#77b550!important}.dropdown[data-v-4eea1353]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-4eea1353]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-4eea1353]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-4eea1353]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-4eea1353]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.error-wrapper[data-v-4eea1353]{margin-top:0.5rem;margin-bottom:0.5rem;display:flex;flex-direction:row;align-items:center}.error-indicator[data-v-4eea1353]{margin-right:0.5rem;height:10px;width:10px;overflow:hidden;border-radius:100%;padding:2px}.width-full[data-v-4eea1353]{width:100%;text-align:left}",""]),o.locals={},t.exports=o},2025:function(t,e,r){"use strict";r.r(e);r(25);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-lg-6 md:order-1 order-2"},[e("div",{staticClass:"flex flex-col w-full h-full items-center mt-[30px]"},[e("img",{staticClass:"w-[300px]",attrs:{src:r(1399),alt:""}}),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"text-2xl text-[#8E8989] font-bold px-3 text-center"},[t._v("Thank you for "),e("br"),t._v("being\n                  "),e("br"),t._v("Responsible!!\n                ")])])])])}],n=r(6),l=(r(416),r(7),r(43),r(30),r(36),r(54),r(24),r(55),r(0)),c=r(1086),d=r(651),f=r(652),w=r(42),v=r(112),h=r(90),x=r(759),m=r(740),y=r(1717);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C=l.default.extend({name:"CreateNewPasswordPage",auth:"guest",components:{SocialAuth:c.default,InputField:x.default,PasswordField:y.default,SvgIcon:v.default,SpinnerDottedIcon:w.default,ExclamationIcon:f.default,MessageAlertWidget:m.default,CheckIcon:d.default,TimesIcon:h.default},layout:"landing",data:function(){return{decodedUserInfo:{},user:{password:"",passwordConfirmation:"",action:"reset_password",token:this.$route.query.token},isRedirecting:!1,isLoading:!1,errorMessage:"",charac:/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,number:/[0-9]/,alphabet:/[A-Za-z]/}},beforeMount:function(){this.$route.query.token||this.$nuxt.$router.push("/login")},computed:{isPasswordEqual:function(){var t,e;return 0!==(null===(t=this.user.password)||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.length)&&this.user.password==this.user.passwordConfirmation},getIsFormValid:function(){var t;return!!(this.charac.test(this.user.password)&&this.number.test(this.user.password)&&this.alphabet.test(this.user.password)&&(null===(t=this.user.password)||void 0===t?void 0:t.length)>8&&this.user.password===this.user.passwordConfirmation)},username:function(){this.decodedUserInfo;return localStorage.reset_user_mail},containsCapital:function(){return/[A-Z]+/g.test(this.user.password||"")},containsSmall:function(){return/[a-z]+/g.test(this.user.password||"")},containsSpecialCharacter:function(){return/[^a-zA-Z0-9]+/g.test(this.user.password||"")}},methods:{resetPassword:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),this.getIsFormValid)if(this.isLoading=!0,this.user.passwordConfirmation===this.user.password){var r=this.user;r.newPassword=r.password,delete r.password,delete r.passwordConfirmation,this.$axios.$patch("/users",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},r)).then((function(t){e.$nuxt.$router.push("/login")})).catch((function(t){t.response;e.errorMessage="Could not reset password"})).finally((function(){e.isLoading=!1}))}else this.errorMessage="Password does not match"}}}),k=C,P=(r(1910),r(1)),component=Object(P.a)(k,(function(){var t,e,r=this,o=r._self._c;r._self._setupProxy;return o("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[o("div",{staticClass:"container py-20"},[o("div",{staticClass:"reset-pass-section"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("form",{staticClass:"col-lg-6 md:order-2 order-1",on:{submit:function(t){return t.preventDefault(),r.resetPassword.apply(null,arguments)}}},[o("div",{staticClass:"left-form"},[o("div",{staticClass:"form form-outer shadow-2xl"},[o("div",{staticClass:"heading"},[o("h1",[r._v("Welcome Back!")]),r._v(" "),o("h3",{staticClass:"capitalize"},[r._v(r._s(r.username))])]),r._v(" "),o("h6",[r._v("Create a password")]),r._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[r._v("Password")]),r._v(" "),o("password-field",{attrs:{disabled:r.isLoading||r.isRedirecting,placeholder:"Password"},model:{value:r.user.password,callback:function(t){r.$set(r.user,"password",t)},expression:"user.password"}})],1),r._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[r._v("Retype password")]),r._v(" "),o("password-field",{attrs:{disabled:r.isLoading||r.isRedirecting,placeholder:"Confirm Password"},model:{value:r.user.passwordConfirmation,callback:function(t){r.$set(r.user,"passwordConfirmation",t)},expression:"user.passwordConfirmation"}})],1),r._v(" "),o("div",{},[o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.alphabet.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.alphabet.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                      Password must contain upper")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.number.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.number.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                      Password must contain number")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.charac.test(this.user.password)?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.charac.test(this.user.password)?"text-[green]":"text-[#808080b8]"]},[r._v("\n                      Password must contain symbol")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[(null===(t=this.user.password)||void 0===t?void 0:t.length)>8?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[(null===(e=this.user.password)||void 0===e?void 0:e.length)>8?"text-[green]":"text-[#808080b8]"]},[r._v("\n                      Password must be morethan 8 characters")])]),r._v(" "),o("div",{staticClass:"error-wrapper"},[o("div",{staticClass:"error-indicator",class:[r.isPasswordEqual?"bg-[green]":"bg-[#808080b8]"]}),r._v(" "),o("span",{staticClass:"text-[11px]",class:[r.isPasswordEqual?"text-[green]":"text-[#808080b8]"]},[r._v("\n                      Password match")])])]),r._v(" "),o("button",{staticClass:"register-btn h-10 w-full mt-6 text-white rounded-lg shadow px-5 text-sm disabled:bg-opacity-70",class:[r.getIsFormValid||!r.isLoading?"opacity-100 ":"opacity-40  "],attrs:{disabled:!r.getIsFormValid||r.isLoading}},[o("span",{staticClass:"inline-flex items-center gap-3"},[o("span",[r._v("Register")]),r._v(" "),o("transition",{attrs:{name:"fade",duration:100}},[o("span",{directives:[{name:"show",rawName:"v-show",value:r.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[o("spinner-dotted-icon",{attrs:{height:"22",width:"22",color:"white"}})],1)])],1)])])])]),r._v(" "),r._m(0)])])])])])}),o,!1,null,"4eea1353",null);e.default=component.exports},651:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"ExclamationIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},654:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"EyeIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 576 512"}},[t("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])}),[],!1,null,null,null);e.default=component.exports},737:function(t,e,r){var content=r(743);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("15d61284",content,!0,{sourceMap:!1})},740:function(t,e,r){"use strict";r.r(e);var o=r(6),n=r(0),l=r(651),c=r(652),d=r(42),f=r(90),w=n.default.extend({components:{ExclamationIcon:c.default,CheckIcon:l.default,TimesIcon:f.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(742),r(1)),component=Object(v.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(o.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message}),t._v(" "),t._t("action")],2)])}),[],!1,null,"9893bda6",null);e.default=component.exports},742:function(t,e,r){"use strict";r(737)},743:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),o.locals={},t.exports=o},748:function(t,e,r){var content=r(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("15b29c42",content,!0,{sourceMap:!1})},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},757:function(t,e){},758:function(t,e){},759:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"InputField",props:{showAsError:{type:Boolean,default:!1},type:{type:String,default:"text"}}}),n=(r(774),r(1)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("input",{staticClass:"input-field",class:{error:t.showAsError},attrs:{type:t.type,placeholder:""},on:{input:function(e){return t.$emit("input",e.currentTarget.value)}}})}),[],!1,null,"10238621",null);e.default=component.exports},774:function(t,e,r){"use strict";r(748)},775:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".input-field[data-v-10238621]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-10238621]:focus{--tw-border-opacity:1;border-color:rgb(65 65 66 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px}.input-field[data-v-10238621]:disabled{cursor:not-allowed}.input-field.error[data-v-10238621]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-10238621]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}",""]),o.locals={},t.exports=o},797:function(t,e,r){var content=r(1022);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("95ed67ce",content,!0,{sourceMap:!1})}}]);