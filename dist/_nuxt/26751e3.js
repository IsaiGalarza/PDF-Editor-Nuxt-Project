(window.webpackJsonp=window.webpackJsonp||[]).push([[280,22,37,39,105,265,266,267],{1027:function(e,t,o){"use strict";o.r(t);o(31),o(77);var r=o(0),l=o(654),n=o(209),c=r.default.extend({name:"PasswordField",components:{EyeIcon:l.default,EyeSlashedIcon:n.default},props:{placeholder:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showAsError:{type:Boolean,default:!1}},data:function(){return{showPassword:!1,value:void 0,focus:!1}},watch:{value:function(e){this.$emit("input",e)}},mounted:function(){}}),d=(o(987),o(1)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"input-field flex items-center",class:[e.focus?"border-paperdazgray-500":"border-paperdazgray-200",e.showAsError?"error":""]},["checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){var o=e.value,r=t.target,l=!!r.checked;if(Array.isArray(o)){var n=e._i(o,null);r.checked?n<0&&(e.value=o.concat([null])):n>-1&&(e.value=o.slice(0,n).concat(o.slice(n+1)))}else e.value=l}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:e.showPassword?"text":"password"},domProps:{value:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),t("span",{staticClass:"cursor-pointer",class:{"text-paperdazgray-300":!e.showPassword},on:{click:function(t){e.showPassword=!e.showPassword}}},[e.showPassword?t("eye-icon"):t("eye-slashed-icon")],1)])}),[],!1,null,"347ad17a",null);t.default=component.exports},1117:function(e,t,o){"use strict";o(990)},1118:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,".social-card[data-v-5bbea032]{display:flex;min-width:120px;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.social-card[data-v-5bbea032]:hover{--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}",""]),r.locals={},e.exports=r},1142:function(e,t,o){"use strict";o.r(t);var r=o(3),l=(o(18),o(0)),n=o(742),c=o.n(n),d=l.default.extend({created:function(){},data:function(){return{socialState:void 0}},methods:{socialSignIn:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,l,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:o.prev=0,o.t0=e,o.next="facebook"===o.t0?4:"google"===o.t0?6:"twitter"===o.t0?8:10;break;case 4:return t.socialState=new t.$fireModule.auth.FacebookAuthProvider,o.abrupt("break",10);case 6:return t.socialState=new t.$fireModule.auth.GoogleAuthProvider,o.abrupt("break",10);case 8:return t.socialState=new t.$fireModule.auth.TwitterAuthProvider,o.abrupt("break",10);case 10:return o.next=12,t.$fire.auth.signInWithPopup(t.socialState);case 12:l=(l=o.sent).user._delegate.providerData[0],l={displayName:null===(r=l)||void 0===r?void 0:r.displayName,email:l.email,phoneNumber:l.phoneNumber,photoURL:l.photoURL,id:l.uid,provider:l.providerId.substring(0,l.providerId.indexOf("."))},n=c.a.sign(l,"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),window.location.assign("/login?token=".concat(n)),o.next=22;break;case 19:o.prev=19,o.t1=o.catch(0),console.log(o.t1);case 22:case"end":return o.stop()}}),o,null,[[0,19]])})))()}}}),f=(o(1117),o(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"flex flex-wrap gap-2 xs:gap-4 text-sm font-medium text-paperdazgray-400"},[t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("facebook")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/facebook.png",alt:""}}),e._v(" "),t("span",[e._v("Facebook")])]),e._v(" "),t("div",{staticClass:"flex-1 social-card cursor-pointer",on:{click:function(t){return e.socialSignIn("google")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/google.png",alt:""}}),e._v(" "),t("span",[e._v("Google")])]),e._v(" "),t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("twitter")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/twitter.png",alt:""}}),e._v(" "),t("span",[e._v("Twitter")])])])])}),[],!1,null,"5bbea032",null);t.default=component.exports},1651:function(e,t,o){var content=o(1856);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("06b15dc2",content,!0,{sourceMap:!1})},1855:function(e,t,o){"use strict";o(1651)},1856:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,"#remember-me-checkbox:not(:checked)+label[data-v-5f3de622]{--tw-bg-opacity:1;background-color:rgb(148 148 148 / var(--tw-bg-opacity))}#remember-me-checkbox:not(:checked)+label .overlay[data-v-5f3de622]{background-color:rgb(148 148 148 / var(--tw-bg-opacity));--tw-bg-opacity:0.2}#remember-me-checkbox:checked+label[data-v-5f3de622]{--tw-bg-opacity:1;background-color:rgb(119 195 96 / var(--tw-bg-opacity))}#remember-me-checkbox:checked+label .overlay[data-v-5f3de622]{opacity:1;background-color:rgb(119 195 96 / var(--tw-bg-opacity));--tw-bg-opacity:0.2}#remember-me-checkbox+label[data-v-5f3de622]{z-index:2;}#remember-me-checkbox+label .overlay[data-v-5f3de622]{z-index:-1;opacity:0;position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}#remember-me-checkbox+label:hover .overlay[data-v-5f3de622]{opacity:1}",""]),r.locals={},e.exports=r},1968:function(e,t,o){"use strict";o.r(t);o(7);var r=o(0),l=o(1142),n=o(649),c=o(650),d=o(43),f=o(112),v=o(761),w=o(739),h=o(1027),m=r.default.extend({name:"LoginPage",auth:"guest",components:{SocialAuth:l.default,InputField:v.default,PasswordField:h.default,SvgIcon:f.default,SpinnerDottedIcon:d.default,ExclamationIcon:c.default,MessageAlertWidget:w.default,CheckIcon:n.default},layout:"landing",data:function(){return{user:{email:void 0,action:"forgot_password"},isLoading:!1,alertMessage:{isSuccess:!1,message:""}}},mounted:function(){this.user.email=this.$store.getters.getSaveEmailExist},methods:{onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.user.email&&!this.isLoading&&(this.isLoading=!0,this.alertMessage.message="",this.$_server.post("/users",this.user).then((function(e){var o;t.alertMessage.isSuccess=!0,t.alertMessage.message=null==e||null===(o=e.data)||void 0===o?void 0:o.message,localStorage.removeItem("redirect_paperdaz_path"),localStorage.removeItem("paperdaz_userID"),localStorage.removeItem("main_user_paperdaz_token"),localStorage.setItem("reset_user_mail",t.user.email)})).catch((function(e){var o=e.response;console.log("Forget"),console.log("Forget"),t.alertMessage.isSuccess=!1,t.alertMessage.message=o.data.message||"unable to reset password"})).finally((function(){t.isLoading=!1})))}}}),x=(o(1855),o(1)),component=Object(x.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[t("div",{staticClass:"container py-20"},[t("div",{staticClass:"w-full max-w-lg mx-auto bg-white shadow-2xl rounded-xl px-6 py-10"},[t("h4",{staticClass:"text-[24px] font-medium mb-2"},[e._v("Forgot your password?")]),e._v(" "),t("p",{staticClass:"text-gray-500 text-[14px] mb-8"},[e._v("\n        Fear not. We'll email you instructions to reset your password.\n      ")]),e._v(" "),t("form",{staticClass:"text-sm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.alertMessage.message,expression:"alertMessage.message"}],staticClass:"mb-8",attrs:{message:e.alertMessage.message,type:e.alertMessage.isSuccess?"success":"error"}}),e._v(" "),t("div",{staticClass:"mb-2"},[t("label",{staticClass:"mb-2 block text-sm font-medium text-gray-500",attrs:{for:""}},[e._v("EMAIL")]),e._v(" "),t("el-input",{attrs:{disabled:e.isLoading,type:"email",placeholder:"Your email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),t("div",{staticClass:"flex flex-col items-center"},[t("button",{staticClass:"h-10 rounded-lg shadow px-5 text-white text-sm bg-paperdazgreen-300 disabled:bg-opacity-70",class:[e.isLoading?"cursor-progress":""],attrs:{disabled:e.isLoading}},[t("span",{staticClass:"inline-flex items-center gap-3"},[t("span",[e._v("Reset Password")]),e._v(" "),t("transition",{attrs:{name:"fade",duration:100}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])],1)])])])}),[],!1,null,"5f3de622",null);t.default=component.exports},649:function(e,t,o){"use strict";o.r(t);var r=o(0).default.extend({name:"CheckIcon"}),l=o(1),component=Object(l.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},650:function(e,t,o){"use strict";o.r(t);var r=o(0).default.extend({name:"ExclamationIcon"}),l=o(1),component=Object(l.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},654:function(e,t,o){"use strict";o.r(t);var r=o(0).default.extend({name:"EyeIcon"}),l=o(1),component=Object(l.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 576 512"}},[e("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])}),[],!1,null,null,null);t.default=component.exports},736:function(e,t,o){var content=o(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("15d61284",content,!0,{sourceMap:!1})},739:function(e,t,o){"use strict";o.r(t);var r=o(6),l=o(0),n=o(649),c=o(650),d=o(43),f=o(90),v=l.default.extend({components:{ExclamationIcon:c.default,CheckIcon:n.default,TimesIcon:f.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),w=(o(743),o(1)),component=Object(w.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(r.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message}),e._v(" "),e._t("action")],2)])}),[],!1,null,"9893bda6",null);t.default=component.exports},743:function(e,t,o){"use strict";o(736)},744:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),r.locals={},e.exports=r},746:function(e,t){},747:function(e,t){},748:function(e,t){},749:function(e,t){},750:function(e,t){},751:function(e,t){},752:function(e,t){},753:function(e,t){},754:function(e,t){},755:function(e,t){},761:function(e,t,o){"use strict";o.r(t);var r=o(0).default.extend({name:"InputField",props:{showAsError:{type:Boolean,default:!1},type:{type:String,default:"text"}}}),l=(o(950),o(1)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("input",{staticClass:"input-field",class:{error:e.showAsError},attrs:{type:e.type,placeholder:""},on:{input:function(t){return e.$emit("input",t.currentTarget.value)}}})}),[],!1,null,"10238621",null);t.default=component.exports},762:function(e,t,o){var content=o(951);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("15b29c42",content,!0,{sourceMap:!1})},776:function(e,t,o){var content=o(988);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("6b9503c8",content,!0,{sourceMap:!1})},950:function(e,t,o){"use strict";o(762)},951:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,".input-field[data-v-10238621]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-10238621]:focus{--tw-border-opacity:1;border-color:rgb(65 65 66 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px}.input-field[data-v-10238621]:disabled{cursor:not-allowed}.input-field.error[data-v-10238621]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-10238621]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-10238621]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}",""]),r.locals={},e.exports=r},987:function(e,t,o){"use strict";o(776)},988:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,".input-field[data-v-347ad17a]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-347ad17a]:focus{outline:2px solid transparent;outline-offset:2px}.input-field.error[data-v-347ad17a]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}.input-field.error>input[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error>input[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}",""]),r.locals={},e.exports=r},990:function(e,t,o){var content=o(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("95ed67ce",content,!0,{sourceMap:!1})}}]);