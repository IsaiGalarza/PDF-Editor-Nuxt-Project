(window.webpackJsonp=window.webpackJsonp||[]).push([[282,22,37,273],{1659:function(t,e,r){var content=r(1868);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("c3683434",content,!0,{sourceMap:!1})},1867:function(t,e,r){"use strict";r(1659)},1868:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'.card-left[data-v-cee0d40c]{position:relative;min-height:100px;width:100%;padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem;box-shadow:0 8.66781px 15.6021px 8.66781px rgba(0,0,0,.25)}.card-left[data-v-cee0d40c]:after{content:"";position:absolute;height:8px;width:100%;top:0;left:0;background:#e6af23}.contac-input[data-v-cee0d40c]{height:60px;width:100%;border-radius:17px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;box-shadow:0 2px 4px rgba(0,0,0,.1)}.contac-input[data-v-cee0d40c]:focus{border-color:#e6af23!important}.outline-btn[data-v-cee0d40c]{width:100%;border-radius:50px;border-width:1px;--tw-border-opacity:1;border-color:rgb(230 175 35 / var(--tw-border-opacity));padding-top:1rem;padding-bottom:1rem;font-weight:800;--tw-text-opacity:1;color:rgb(230 175 35 / var(--tw-text-opacity))}.outline-btn-sm[data-v-cee0d40c]{border-radius:10px;border-width:1px;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1.5rem;padding-right:1.5rem}',""]),n.locals={},t.exports=n},1990:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(3),c=(r(25),r(416),r(7),r(43),r(30),r(36),r(54),r(24),r(55),r(18),r(42)),l=r(741),d=r(14),m=r(26);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(d.a)(m.a).extend({name:"ContactUsPage",layout:"dashboard",auth:!1,components:{SpinnerDottedIcon:c.default,MessageAlertWidget:l.default},head:function(){return{script:[{hid:"tawk.to",src:"https://embed.tawk.to/61ee08389bd1f31184d8e4d8/1fq4t07bg",defer:!0}]}},data:function(){return{isLoading:!1,errorMessage:"",messageSent:!1,partner:{firstName:"",lastName:"",email:"",message:"",type:"customer"}}},methods:{mouseHover:function(t){},initiateChat:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{null===(e=Tawk_API)||void 0===e||e.toggle()}catch(t){}case 1:case"end":return t.stop()}}),t)})))()},onClear:function(){this.partner.firstName="",this.partner.lastName="",this.partner.email="",this.partner.message=""},onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,((n=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(t.partner.firstName.trim())||n.test(t.partner.lastName.trim()))&&(t.$refs.form.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),t.errorMessage="Name format not correct",r=!0),!r){e.next=5;break}return e.abrupt("return");case 5:if(!t.isLoading){e.next=7;break}return e.abrupt("return");case 7:return t.isLoading=!0,e.next=10,t.$axios.post("/customer-support",v({},t.partner)).then((function(){t.toggleToast({active:!0,msg:" Thank you!  We look forward to partnering  with you. "}),t.errorMessage="",t.partner.firstName="",t.partner.lastName="",t.partner.email="",t.partner.message="",t.messageSent=!0})).catch((function(e){t.errorMessage="Unable to register, try again later "})).finally((function(){t.isLoading=!1}));case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){try{document.querySelectorAll(".widget-visible")[0].style.display="block"}catch(t){}},beforeDestroy:function(){try{document.querySelectorAll(".widget-visible")[0].style.cssText="display: none !important"}catch(t){}}}),w=(r(1867),r(1)),component=Object(w.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 h-full mb-8"},[e("div",{staticClass:"flex flex-col items-center px-6 mb-8 md:mb-0"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"card-left flex flex-col items-center justify-center"},[e("p",{staticClass:"text-center text-[#414142] font-[800] text-[20px] mb-12"},[t._v("Chat with us")]),t._v(" "),t._m(2),t._v(" "),e("button",{staticClass:"outline-btn",on:{click:t.initiateChat}},[t._v("\n        INITIATE CHAT\n      ")])])]),t._v(" "),e("div",{staticClass:"px-4"},[e("div",{staticClass:"card-left py-8 h-full"},[e("p",{staticClass:"text-[#414142] text-[15px] mb-2 mt-4"},[t._v("CONTACT")]),t._v(" "),e("p",{staticClass:"text-[0.9rem] text-[#8E8E8E] mb-2 leading-6"},[t._v("\n        We will reply within 24 hours.\n      ")]),t._v(" "),e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.messageSent,expression:"messageSent"}],staticClass:"mb-8",attrs:{message:"Message sent ",type:"success"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.partner.firstName,expression:"partner.firstName"}],staticClass:"contac-input mb-8",attrs:{required:"",type:"text",placeholder:"First Name"},domProps:{value:t.partner.firstName},on:{input:function(e){e.target.composing||t.$set(t.partner,"firstName",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.partner.lastName,expression:"partner.lastName"}],staticClass:"contac-input mb-8",attrs:{required:"",type:"text",placeholder:"last Name"},domProps:{value:t.partner.lastName},on:{input:function(e){e.target.composing||t.$set(t.partner,"lastName",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.partner.email,expression:"partner.email"}],staticClass:"contac-input mb-8",attrs:{required:"",type:"text",placeholder:"Email"},domProps:{value:t.partner.email},on:{input:function(e){e.target.composing||t.$set(t.partner,"email",e.target.value)}}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.partner.message,expression:"partner.message"}],staticClass:"contac-input min-h-[100px]",attrs:{required:"",type:"text",placeholder:"Message"},domProps:{value:t.partner.message},on:{input:function(e){e.target.composing||t.$set(t.partner,"message",e.target.value)}}}),t._v(" "),e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"my-2 w-[80%] ml-[0%]",attrs:{message:t.errorMessage,type:"error"}}),t._v(" "),e("div",{staticClass:"flex mt-4 justify-end"},[e("button",{staticClass:"outline-btn-sm text-[#F93120] border-[#F93120] mr-4",on:{click:t.onClear}},[t._v("\n            Clear\n          ")]),t._v(" "),e("button",{staticClass:"outline-btn-sm text-white bg-[#77C360]",class:[t.isLoading?"opacity-60":"opacity-100"],attrs:{disabled:t.isLoading}},[e("span",{staticClass:"mr-2"},[t._v("Send")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin"},[e("SpinnerDottedIcon",{attrs:{height:"22",width:"22"}})],1)])],1)])],1)])])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"text-center text-[#414142] font-[800] text-[20px] mb-12"},[t._v("We look forward to "),e("br"),t._v(" hearing from you!")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6"},[t._v("\n      We strive to make the best Paperlink "),e("br"),t._v(" for everyone.\n      Drop us a note with any "),e("br"),t._v(" feedback, questions or concerns. "),e("br"),t._v("\n      We’d love to hear from you. Initiate a "),e("br"),t._v(" chat to talk to us 9am to 5pm PST.\n    ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"text-center text-[1rem] mb-16 text-[#8E8E8E] leading-6"},[t._v("\n        Our team is ready to answer any "),e("br"),t._v(" questions you may have.\n      ")])}],!1,null,"cee0d40c",null);e.default=component.exports},651:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"CheckIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ExclamationIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},737:function(t,e,r){var content=r(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("15d61284",content,!0,{sourceMap:!1})},741:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(0),c=r(651),l=r(652),d=r(42),m=r(90),f=o.default.extend({components:{ExclamationIcon:l.default,CheckIcon:c.default,TimesIcon:m.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(745),r(1)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(n.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message}),t._v(" "),t._t("action")],2)])}),[],!1,null,"9893bda6",null);e.default=component.exports},745:function(t,e,r){"use strict";r(737)},746:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),n.locals={},t.exports=n}}]);