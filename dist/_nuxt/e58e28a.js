(window.webpackJsonp=window.webpackJsonp||[]).push([[150,20,33,83,227,244],{1042:function(e,t,r){e.exports=r.p+"img/payment.b585f29.png"},1043:function(e,t,r){var content=r(1391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("9850a490",content,!0,{sourceMap:!1})},1390:function(e,t,r){"use strict";r(1043)},1391:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,"form[data-v-584c3477]{border-radius:0.75rem;border-width:4px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));padding:1.5rem;width:100%;max-width:580px;margin:0 auto;box-shadow:0 4px 4px rgba(0,0,0,.25)}.input-label[data-v-584c3477]{display:block;font-size:0.875rem;line-height:1.25rem;font-weight:700}.input-label+*[data-v-584c3477]{margin-top:0.25rem}.form-group[data-v-584c3477]:not(:last-child){margin-bottom:1.25rem}",""]),n.locals={},e.exports=n},1630:function(e,t,r){"use strict";r.r(t);r(33);var n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"grid mb-10"},[t("label",{staticClass:"input-label font-bold",attrs:{for:""}},[e._v("\n            Credit Card\n            "),t("img",{staticClass:"float-right inline w-[134px]",attrs:{src:r(1042)}})])])}],o=(r(37),r(28),r(32),r(48),r(21),r(49),r(6)),c=r(3),l=(r(25),r(55),r(129),r(205),r(419),r(415),r(8),r(77),r(18),r(0)),d=r(126),m=r(43),f=(r(702),r(734)),v=(r(38),r(733)),h=r(821);r(4);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=l.default.extend({components:{SpinnerDottedIcon:m.default,MessageAlertWidget:f.default,PackageCard:h.default},name:"PackagePaymentTab",data:function(){return{loading:!1,errorMessage:"",cardNumberWithDashes:"",name:"",cvv:"",cardId:void 0,expirationDateWithSlashes:"",companyName:"",createFlage:!0}},props:{stagingPackageInfo:{type:Object,default:function(){return{}}},packages:{type:Array,default:function(){return[]}}},beforeMount:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!e.$auth.loggedIn&&e.notLoggedIn();case 1:case"end":return t.stop()}}),t)})))()},computed:w(w({},Object(d.e)(["setPackage","createPackage"])),{},{packageData:function(){var e=this.setPackage,t=e.name,r=e.paperlink,n=e.teamMembers,o=(e.monthlyPrice,e.id),c=e.isMonthly,l=(e.userId,e.yearlyPrice,e.publicProfile),d=e.companyLedger,m=(e.activationCode,e.cc),f=e.companyName,v=e.companyEmail;return this.createPackage&&1==this.createPackage?{plan:c?"monthly":"yearly",action:"subscribe",companyName:f,companyEmail:v,custom:{name:t,paperlink:r,teamMembers:n,publicProfile:l,companyLedger:d,cc:m}}:0==this.createPackage?{packageId:o,action:"subscribe",companyName:f,companyEmail:v,plan:c?"monthly":"yearly"}:void 0},cardNumber:function(){return this.cardNumberWithDashes.replace(/-+/g,"")},expirationDateString:function(){return this.expirationDateWithSlashes.split("/").join("")||""},expYear:function(){return this.expirationDateString.split("").splice(2,4).join("")},expMonth:function(){return this.expirationDateString.split("").splice(0,2).join("")},stagingPackage:function(){return this.$store.state.setPackage}}),methods:{notLoggedIn:function(){localStorage.setItem("package-not-loggedin",JSON.stringify(this.setPackage)),localStorage.setItem("create-package-not-loggedin",this.createPackage),this.$nuxt.$router.push("/register")},inputCardNumber:function(e){if(!(e.length>19)){var t=e.replace(/(-+)|([^0-9]+)/g,"");this.cardNumberWithDashes=(t.match(/.{1,4}/g)||[]).join("-")}},inputExpirationDate:function(e){var t=e.replace(/\/+|[^0-9]+/g,"");if(!(t.length>4)){2===t.length&&(Number(t)>12&&(t="0"+t),0==Number(t)&&(t="01")),4==t.length&&0==Number(t.substring(2,4))&&(t=t.substring(0,2)+"01");var r=(t.match(/.{1,2}/g)||[]).join("/");this.expirationDateWithSlashes=r}},updateCard:function(e,data){var t=this;return this.$axios.$patch("/card/".concat(e),data).catch((function(e){var r="";r=e&&e.response&&e.response.data&&e.response.data.message?e.response.data.message:"Server not reachable",t.errorMessage=r,t.loading=!1}))},submit:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null==e||e.preventDefault(),t.expYear&&t.expMonth&&!isNaN(t.cvv)){r.next=4;break}return t.errorMessage="Please review the inputed information",r.abrupt("return");case 4:if(!t.loading){r.next=6;break}return r.abrupt("return");case 6:return(t.$auth.user||{id:""}).id,data={card_holder_name:t.name,card_number:t.cardNumber,exp_year:t.expYear,exp_month:t.expMonth,cvv:t.cvv},t.loading=!0,t.errorMessage="",n=!1,r.next=13,t.$axios.$post("/cards",data).then((function(e){var r=e.id;t.cardId=r,n=!0})).catch(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.response,t.errorMessage=Object(v.a)(n),t.loading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 13:if(n){r.next=16;break}return t.loading=!1,r.abrupt("return");case 16:t.$axios.$post("/subscriptions",w(w({},t.packageData),{},{companyName:t.companyName,createFlage:!0,cardId:t.cardId})).then(Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$notify.success({title:"Package Subscription",message:"You have successfully subscribed for this package"}),setTimeout((function(){t.$nuxt.$router.push("/dashboard"),t.$store.commit("SET_CONGRAT_SUCCESS")}),1e3);case 2:case"end":return e.stop()}}),e)})))).catch(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.response,t.errorMessage=Object(v.a)(n),e.next=4,t.$axios.$delete("/cards/".concat(t.cardId));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.loading=!1}));case 17:case"end":return r.stop()}}),r)})))()}},mounted:function(){}}),_=x,k=(r(1390),r(1)),component=Object(k.a)(_,(function(){var e,t=this,r=t._self._c;t._self._setupProxy;return r("div",{},[r("div",{staticClass:"flex flex-wrap w-full justify-center"},[r("div",{staticClass:"w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-3"},[r("package-card",{staticClass:"package-card-check-width",style:{"--count":1},attrs:{edited:!1,create:!1,"show-bottom-button":"",stagingPackage:t.stagingPackage,disableStart:!0},on:{"bottom-button-clicked":function(e){return t.$emit("next-tab",e)}}})],1),t._v(" "),r("div",{staticClass:"w-full sm:w-full md:w-2/3 lg:w-2/3"},[r("form",{on:{submit:t.submit}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label font-bold",attrs:{for:""}},[t._v("Create business Name\n          ")]),t._v(" "),r("el-input",{attrs:{disabled:t.loading,placeholder:"Name Surname",required:""},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}})],1),t._v(" "),r("div",{staticClass:"h-1 bg-black"}),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),t._m(0),t._v(" "),t.errorMessage?r("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Name of card holder")]),t._v(" "),r("el-input",{attrs:{disabled:t.loading,placeholder:"Name Surname",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Card Number")]),t._v(" "),r("el-input",{attrs:{disabled:t.loading,placeholder:"0000-0000-0000-0000",value:t.cardNumberWithDashes,required:""},on:{input:t.inputCardNumber}})],1),t._v(" "),r("div",{staticClass:"grid gap-5 grid-cols-2"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Expiration Date")]),t._v(" "),r("el-input",{attrs:{disabled:t.loading,placeholder:"MM/YY",required:"",value:t.expirationDateWithSlashes},on:{input:t.inputExpirationDate}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"input-label",attrs:{for:""}},[t._v("CVC")]),t._v(" "),r("el-input",{attrs:{disabled:t.loading,placeholder:"000",required:"",type:"password",maxlength:"3"},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)]),t._v(" "),r("div",{staticClass:"grid place-items-center mt-6"},[r("button",{staticClass:"rounded-lg bg-paperdazgreen-400 shadow text-sm h-10 px-6 disabled:bg-opacity-50 w-full",attrs:{disabled:t.loading}},[r("span",{staticClass:"inline-flex items-center gap-3"},[r("span",[t._v("Pay "+t._s("yearly"==(null===(e=this.packageData)||void 0===e?void 0:e.plan)?(t.stagingPackage||{}).yearlyPrice:(t.stagingPackage||{}).monthlyPrice))]),t._v(" "),r("transition",{attrs:{name:"fade",duration:100}},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[r("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])],1)])])])}),n,!1,null,"584c3477",null);t.default=component.exports},646:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"ExclamationIcon"}),o=r(1),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},647:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"CheckIcon"}),o=r(1),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},649:function(e,t,r){"use strict";r.r(t);var n=r(0).default.extend({name:"TickIcon"}),o=r(1),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);t.default=component.exports},731:function(e,t,r){var content=r(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("15d61284",content,!0,{sourceMap:!1})},733:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(87),r(88);function n(e){var t,r,n,o,c,l,d,m,f,v;console.log("error-handler",e);var h=(null===(r=null===(t=e)||void 0===t?void 0:t.data)||void 0===r?void 0:r.errors[0])||(null===(o=null===(n=e)||void 0===n?void 0:n.data)||void 0===o?void 0:o.message);return console.log("error-handler",h),(null===(c=(null==h?void 0:h.message)||h)||void 0===c?void 0:c.includes("email"))?"Email already exists":(null===(l=(null==h?void 0:h.message)||h)||void 0===l?void 0:l.includes("phone"))?"Phone number already exists":(null===(d=(null==h?void 0:h.message)||h)||void 0===d?void 0:d.includes("Invalid login"))?"Email or password is Incorrect":null==h?"Network error":(null===(m=(null==h?void 0:h.message)||h)||void 0===m?void 0:m.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(f=(null==h?void 0:h.message)||h)||void 0===f?void 0:f.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(v=(null==h?void 0:h.message)||h)||void 0===v?void 0:v.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},734:function(e,t,r){"use strict";r.r(t);var n=r(6),o=r(0),c=r(647),l=r(646),d=r(43),m=r(89),f=o.default.extend({components:{ExclamationIcon:l.default,CheckIcon:c.default,TimesIcon:m.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),v=(r(737),r(1)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(n.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message}),e._v(" "),e._t("action")],2)])}),[],!1,null,"9893bda6",null);t.default=component.exports},737:function(e,t,r){"use strict";r(731)},738:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,".message-alert-widget.info[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-9893bda6]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-9893bda6]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-9893bda6]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-9893bda6]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),n.locals={},e.exports=n},758:function(e,t,r){var content=r(824);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("595ac7a6",content,!0,{sourceMap:!1})},821:function(e,t,r){"use strict";r.r(t);r(33),r(27),r(28),r(86),r(37),r(32),r(8),r(48),r(21),r(49);var n,o=r(6),c=(r(279),r(0)),l=r(649);!function(e){e.YEARLY="yearly",e.MONTHLY="monthly"}(n||(n={}));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=c.default.extend({name:"PackageCard",components:{TickIcon:l.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var e,t=this.$refs.packagename.textContent.trim(),r=this.isMonthly;""!=t&&(e=m(m({},this.stagingPackage),{},{name:t,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",e),this.$store.commit("PACKAGE_CREATE",this.create)),this.$emit("bottom-button-clicked",{stagingPackageNew:e,isMonthly:r})}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var e;return this.promoted=null===(e=this.stagingPackage)||void 0===e?void 0:e.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),v=(r(823),r(1)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 min-h-[547px] h-[100%]"},[t("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:e.edited}},[e._v("\n    "+e._s((e.stagingPackage||{}).name)+"\n  ")]),e._v(" "),t("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[e.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[t("span",[e._v("$\n      "),t("span",{staticClass:"text-5xl font-medium"},[e._v(e._s(e.isMonthly?(e.stagingPackage||{}).monthlyPrice:(e.stagingPackage||{}).yearlyPrice))]),e._v("\n      /"+e._s(e.isMonthly?"mo":"yr"))])]),e._v(" "),t("div",{staticClass:"px-5 py-4"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[t("span",{staticClass:"mr-2"},[e._v("Monthly")]),e._v(" "),t("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[e.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(t){e.isMonthly=!e.isMonthly}}},[t("span",{staticClass:"circle circle-12",class:[e.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),e._v(" "),t("span",{staticClass:"text-paperdazgray-300"},[e._v("Yearly")])]),e._v(" "),t("ul",{staticClass:"package-list"},[t("li",{},[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).paperlink)+" Paperlink files")])]),e._v(" "),t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).teamMembers)+" Team members ")])]),e._v(" "),t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).cc)+" CC Flow ")])]),e._v(" "),e._l(e.stagingPackage.features,(function(r){return t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[e._v("\n           "+e._s(r.title)+" ")])])}))],2)]),e._v(" "),e.disableStart?e._e():t("div",{staticClass:"grid place-items-center"},[t("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:e.disableStart},on:{click:e.setPackageData}},[e._v("\n      Start Now\n    ")])])])}),[],!1,null,"32be86da",null);t.default=component.exports},823:function(e,t,r){"use strict";r(758)},824:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,".no-outline[data-v-32be86da]{outline:none!important}.package-list[data-v-32be86da]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-32be86da]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-32be86da]>:first-child{width:40px}.package-list li[data-v-32be86da]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-32be86da]:last-child{margin-bottom:0px}.promoted-banner[data-v-32be86da]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),n.locals={},e.exports=n}}]);