(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1657:function(t,e,r){var content=r(1873);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("579bf43a",content,!0,{sourceMap:!1})},1872:function(t,e,r){"use strict";r(1657)},1873:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".dropdown[data-v-1394c7ca]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.form-outer[data-v-1394c7ca]{background-color:#fff!important}.register-btn[data-v-1394c7ca]{background-color:#77b550!important}.dropdown[data-v-1394c7ca]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-1394c7ca]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-1394c7ca]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-1394c7ca]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-1394c7ca]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-1394c7ca]{width:100%;text-align:left}",""]),o.locals={},t.exports=o},1976:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-lg-6 md:order-1 order-2"},[e("div",{staticClass:"flex flex-col w-full h-full items-center mt-[30px]"},[e("img",{staticClass:"w-[300px]",attrs:{src:r(1584),alt:""}}),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"text-2xl text-[#8E8989] font-bold px-3 text-center"},[t._v("Thank you for "),e("br"),t._v("being "),e("br"),t._v("Responsible!!")])])])])}],n=r(6),d=(r(22),r(7),r(37),r(28),r(32),r(49),r(21),r(50),r(0)),c=r(1143),l=r(650),f=r(651),w=r(43),v=r(112),m=r(91),h=r(762),x=r(740),C=r(1028);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _=d.default.extend({name:"CreateNewPasswordPage",auth:"guest",components:{SocialAuth:c.default,InputField:h.default,PasswordField:C.default,SvgIcon:v.default,SpinnerDottedIcon:w.default,ExclamationIcon:f.default,MessageAlertWidget:x.default,CheckIcon:l.default,TimesIcon:m.default},layout:"landing",data:function(){return{decodedUserInfo:{},user:{password:void 0,passwordConfirmation:void 0,action:"reset_password",token:this.$route.query.token},isRedirecting:!1,isLoading:!1,errorMessage:""}},beforeMount:function(){this.$route.query.token||this.$nuxt.$router.push("/login")},computed:{username:function(){this.decodedUserInfo;return localStorage.reset_user_mail},containsCapital:function(){return/[A-Z]+/g.test(this.user.password||"")},containsSmall:function(){return/[a-z]+/g.test(this.user.password||"")},containsSpecialCharacter:function(){return/[^a-zA-Z0-9]+/g.test(this.user.password||"")}},methods:{resetPassword:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),this.isLoading=!0,this.user.passwordConfirmation===this.user.password){var r=this.user;r.newPassword=r.password,delete r.password,delete r.passwordConfirmation,this.$axios.$patch("/users",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},r)).then((function(t){e.$nuxt.$router.push("/login")})).catch((function(t){t.response;e.errorMessage="Could not reset password"})).finally((function(){e.isLoading=!1}))}else this.errorMessage="Password does not match"}}}),P=_,O=(r(1872),r(1)),component=Object(O.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[e("div",{staticClass:"container py-20"},[e("div",{staticClass:"reset-pass-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col-lg-6 md:order-2 order-1",on:{submit:function(e){return e.preventDefault(),t.resetPassword.apply(null,arguments)}}},[e("div",{staticClass:"left-form"},[e("div",{staticClass:"form form-outer shadow-2xl"},[e("div",{staticClass:"heading"},[e("h1",[t._v("Welcome Back!")]),t._v(" "),e("h3",{staticClass:"capitalize"},[t._v(t._s(t.username))])]),t._v(" "),e("h6",[t._v("Create a password")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",disabled:t.isLoading||t.isRedirecting,required:"",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Retype password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.passwordConfirmation,expression:"user.passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password",disabled:t.isLoading||t.isRedirecting,placeholder:"Password"},domProps:{value:t.user.passwordConfirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"passwordConfirmation",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"register-btn h-10 w-full mt-6 text-white rounded-lg shadow px-5 text-sm disabled:bg-opacity-70",class:[t.isLoading?"cursor-progress":""],attrs:{disabled:t.isLoading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Register")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22",color:"white"}})],1)])],1)])])])]),t._v(" "),t._m(0)])])])])])}),o,!1,null,"1394c7ca",null);e.default=component.exports}}]);