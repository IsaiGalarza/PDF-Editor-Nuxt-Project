(window.webpackJsonp=window.webpackJsonp||[]).push([[283,21,35,260],{1630:function(e,t,r){var content=r(1837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("27214194",content,!0,{sourceMap:!1})},1836:function(e,t,r){"use strict";r(1630)},1837:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,".input-label[data-v-36411cee]{margin-top:0.5rem;margin-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;font-size:0.75rem;line-height:1rem}.group-label[data-v-36411cee]{display:flex;align-items:center;justify-content:space-between;padding-top:0.5rem;padding-bottom:0.5rem}.dropdown[data-v-36411cee]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-36411cee]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-36411cee]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-36411cee]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-36411cee]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-36411cee]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-36411cee]{width:100%;text-align:left}.text-input[data-v-36411cee]{width:100%;border-radius:0.25rem;border-style:none;padding:8px;outline:2px solid transparent;outline-offset:2px}",""]),n.locals={},e.exports=n},1937:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"grid mb-10"},[t("label",{staticClass:"font-bold flex items-center justify-between",attrs:{for:""}},[e._v("\n              Credit Card\n              "),t("img",{staticClass:"float-right inline w-[134px]",attrs:{src:r(883)}})])])}],o=r(3),l=(r(18),r(33),r(25),r(55),r(129),r(280),r(8),r(419),r(415),r(0)),c=r(106),d=r.n(c),m=r(43),v=r(736),f=l.default.extend({name:"RegisterPage",auth:!1,layout:"landing",components:{SpinnerDottedIcon:m.default,MessageAlertWidget:v.default},data:function(){return{isLoading:!1,errorMessage:"",cardNumberWithDashes:"",card_name:"",cvv:"",cardId:void 0,expirationDateWithSlashes:"",companyName:"",business_name:"",contact_name:"",business_email:"",business_number:"",errorMessageUser:""}},computed:{checkFilledInput:function(){return this.business_email&&this.contact_name&&this.business_number&&this.business_name&&this.cardNumber&&this.card_name&&this.cvv},userPayload:function(){return{email:this.business_email,firstName:this.contact_name,lastName:"",phone:this.business_number,conpanyName:this.business_name}},cardPayload:function(){var e;return{card_holder_name:this.card_name,card_number:this.cardNumber,exp_month:this.expMonth,exp_year:this.expYear,cvv:this.cvv,userId:null===(e=this.$auth.user)||void 0===e?void 0:e.id}},subscriptionPayload:function(){var e,t=this.$store.getters.getPackageInfo,r=t.companyLedger,n=t.name,o=t.paperlink,l=t.publicProfile,c=t.teamMembers,d=t.cc;return{action:"subscribe",plan:t.isMonthly?"monthly":"yearly",custom:{companyLedger:r,name:n,paperlink:o,publicProfile:l,teamMembers:c,cc:d},userId:null===(e=this.$auth.user)||void 0===e?void 0:e.id}},packageInfo:function(){var e,t;return null===(e=this.$store)||void 0===e||null===(t=e.getters)||void 0===t?void 0:t.getPackageInfo},cardNumber:function(){return this.cardNumberWithDashes.replace(/-+/g,"")},expirationDateString:function(){return this.expirationDateWithSlashes.split("/").join("")||""},expYear:function(){return this.expirationDateString.split("").splice(2,4).join("")},expMonth:function(){return this.expirationDateString.split("").splice(0,2).join("")}},methods:{createCard:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/cards",e.cardPayload).then((function(){return e.createSubscription()})).catch((function(t){return e.errorMessage=t}));case 2:case"end":return t.stop()}}),t)})))()},createSubscription:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/subscriptions",e.subscriptionPayload).then((function(t){return e.toggleToast({msg:"Thank you for going paperless! We have sent a receipt with instructions to verify your email!",active:!0})})).catch((function(t){return e.errorMessage=t})).finally((function(){return e.isLoading=!1}));case 2:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,d.a.post("https://paperlink.app/api/users",e.userPayload).then((function(t){e.$auth.setUser(t.data),e.createCard()})).catch((function(t){return e.errorMessageUser=t}));case 3:case"end":return t.stop()}}),t)})))()},inputCardNumber:function(e){if(!(e.length>19)){var t=e.replace(/(-+)|([^0-9]+)/g,"");this.cardNumberWithDashes=(t.match(/.{1,4}/g)||[]).join("-")}},inputExpirationDate:function(e){var t=e.replace(/\/+|[^0-9]+/g,"");if(!(t.length>4)){2===t.length&&(Number(t)>12&&(t="0"+t),0==Number(t)&&(t="01")),4==t.length&&0==Number(t.substring(2,4))&&(t=t.substring(0,2)+"01");var r=(t.match(/.{1,2}/g)||[]).join("/");this.expirationDateWithSlashes=r}}},mounted:function(){console.log(">>>>>>>>",this.packageInfo)}}),h=(r(1836),r(1)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-paperdazgreen-300 pt-10"},[t("div",{staticClass:"flex flex-wrap p-3 justify-around items-center"},[t("div",{staticClass:"w-full sm:w-6/12 md:w-5/12"},[t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.errorMessageUser,expression:"errorMessageUser"}],staticClass:"my-2 w-[80%] ml-[0%]",attrs:{message:e.errorMessage,type:"error"}}),e._v(" "),t("p",{staticClass:"font-bold text-xl text-white"},[e._v("Account Information")]),e._v(" "),t("span",{staticClass:"text-xs mb-6 text-white"},[e._v("Enter the required information to continue")]),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.business_name,expression:"business_name"}],staticClass:"my-3 rounded text-input",attrs:{disabled:e.loading,placeholder:"Business name",required:""},domProps:{value:e.business_name},on:{input:function(t){t.target.composing||(e.business_name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.contact_name,expression:"contact_name"}],staticClass:"my-3 text-input",attrs:{disabled:e.loading,placeholder:"Contact name",required:""},domProps:{value:e.contact_name},on:{input:function(t){t.target.composing||(e.contact_name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business_email,expression:"business_email"}],staticClass:"my-3 text-input",attrs:{disabled:e.loading,placeholder:"Email address",required:""},domProps:{value:e.business_email},on:{input:function(t){t.target.composing||(e.business_email=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business_number,expression:"business_number"}],staticClass:"my-3 text-input",attrs:{disabled:e.loading,placeholder:"Contact number",required:""},domProps:{value:e.business_number},on:{input:function(t){t.target.composing||(e.business_number=t.target.value)}}})])],1),e._v(" "),t("div",{staticClass:"w-full sm:w-6/12 md:w-5/12 bg-white rounded shadow-lg"},[t("div",{staticClass:"w-full p-3"},[t("form",{},[t("div",{staticClass:"form-group group-label"},[t("label",[e._v("Total due")]),e._v(" "),t("label",{staticClass:"text-xl",attrs:{for:""}},[e._v("$\n              "+e._s(e.packageInfo.isMonthly?e.packageInfo.monthlyPrice:e.packageInfo.yearlyPrice)+"/\n              "),t("abbr",{staticClass:"text-xs"},[e._v(e._s(e.packageInfo.isMonthly?"monthly":"yearly"))])])]),e._v(" "),t("div",{staticClass:"h-[1px] bg-gray-300"}),e._v(" "),t("div",{staticClass:"h-4"}),e._v(" "),e._m(0),e._v(" "),e.errorMessage?t("message-alert-widget",{staticClass:"mb-7",attrs:{message:e.errorMessage,type:"error"}}):e._e(),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Name of card holder")]),e._v(" "),t("el-input",{attrs:{placeholder:"Name Surname",required:""},model:{value:e.card_name,callback:function(t){e.card_name=t},expression:"card_name"}})],1),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Card Number")]),e._v(" "),t("el-input",{attrs:{placeholder:"0000-0000-0000-0000",value:e.cardNumberWithDashes,required:""},on:{input:e.inputCardNumber}})],1),e._v(" "),t("div",{staticClass:"grid gap-5 grid-cols-2"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"input-label",attrs:{for:""}},[e._v("Expiration Date")]),e._v(" "),t("el-input",{attrs:{disabled:e.loading,placeholder:"MM/YY",required:"",value:e.expirationDateWithSlashes},on:{input:e.inputExpirationDate}})],1),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{staticClass:"input-label",attrs:{for:""}},[e._v("CVC")]),e._v(" "),t("el-input",{attrs:{disabled:e.loading,placeholder:"000",required:"",type:"password",maxlength:"3"},model:{value:e.cvv,callback:function(t){e.cvv=t},expression:"cvv"}})],1)])],1)])]),e._v(" "),t("div",{staticClass:"w-full flex justify-center mt-12"},[t("button",{staticClass:"w-[50%] sm:w-[320px] py-2 bg-white rounded flex justify-center items-center",class:[e.isLoading||!e.checkFilledInput?"opacity-60 cursor-not-allowed":"opacity-100"],attrs:{disabled:e.isLoading||!e.checkFilledInput},on:{click:e.submit}},[t("span",{staticClass:"mr-2"},[e._v("Next")]),e._v(" "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin ml-1",attrs:{height:"20",width:"20"}})],1)])])])}),n,!1,null,"36411cee",null);t.default=component.exports},646:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"CheckIcon"}),o=r(1),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},647:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"ExclamationIcon"}),o=r(1),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},732:function(e,t,r){var content=r(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("15d61284",content,!0,{sourceMap:!1})},736:function(e,t,r){"use strict";r.r(t);var n=r(6),o=r(0),l=r(646),c=r(647),d=r(43),m=r(89),v=o.default.extend({components:{ExclamationIcon:c.default,CheckIcon:l.default,TimesIcon:m.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),f=(r(739),r(1)),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(n.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message}),e._v(" "),e._t("action")],2)])}),[],!1,null,"9893bda6",null);t.default=component.exports},739:function(e,t,r){"use strict";r(732)},740:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),n.locals={},e.exports=n},883:function(e,t,r){e.exports=r.p+"img/payment.b585f29.png"}}]);