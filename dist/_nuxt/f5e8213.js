(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1112:function(t,e,r){t.exports=r.p+"img/payment.b585f29.png"},1167:function(t,e,r){var content=r(1393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4ff439ab",content,!0,{sourceMap:!1})},1392:function(t,e,r){"use strict";r(1167)},1393:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-74eb81b6] .el-dialog{width:450px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-74eb81b6] .el-dialog__header{padding-bottom:20px}*[data-v-74eb81b6] .el-dialog__footer,*[data-v-74eb81b6] .el-dialog__header{text-align:left!important}*[data-v-74eb81b6] .el-dialog__body{background:#fcfcfd}*[data-v-74eb81b6] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.group-label[data-v-74eb81b6]{display:flex;align-items:center;justify-content:space-between;padding-top:0.5rem;padding-bottom:0.5rem}",""]),n.locals={},t.exports=n},1677:function(t,e,r){"use strict";r.r(e);r(33),r(22),r(44),r(130),r(284),r(31),r(7),r(106),r(421),r(278);var n=r(0),o=r(43),l=n.default.extend({name:"InsufficientCreditModal",components:{SpinnerDottedIcon:o.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,cardNumberWithDashes:"",card_name:"",cvv:"",cardId:void 0,expirationDateWithSlashes:"",card:{}}},watch:{visible:function(t){this.showModal=t,t&&this.getCard()},showModal:function(t){this.$emit("updateVisibility",t)}},computed:{cardPayload:function(){return{card_holder_name:this.card_name,cvv:this.cvv,exp_month:this.expMonth,exp_year:this.expYear,card_number:this.cardNumber}},subscriptionPayload:function(){return{isUpdate:!0,packageName:this.packageInfo.name,paperlink:this.packageInfo.paperlink,teamMembers:this.packageInfo.teamMembers,plan:this.packageInfo.isMonthly?"monthly":"yearly"}},packageInfo:function(){var t,e;return null===(t=this.$store)||void 0===t||null===(e=t.getters)||void 0===e?void 0:e.getPackageInfo},cardNumber:function(){return this.cardNumberWithDashes.replace(/-+/g,"")},expirationDateString:function(){return this.expirationDateWithSlashes.split("/").join("")||""},expYear:function(){return this.expirationDateString.split("").splice(2,4).join("")},expMonth:function(){return this.expirationDateString.split("").splice(0,2).join("")}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},getCard:function(){var t=this;try{this.$_server("cards/?userId=".concat(this.$auth.user.id)).then((function(e){t.card=e.data.data[0],console.log(t.card),t.card_name=t.card.card_holder_name,t.cvv=t.card.cvv,t.inputCardNumber(t.card.card_number),t.inputExpirationDate("".concat(t.card.exp_month).concat(t.card.exp_year))}))}catch(t){}},patchCard:function(){var t=this;this.loading=!0;try{this.$_server.patch("/cards/".concat(this.card.id),this.cardPayload).then((function(){return t.patchSubscription()}))}catch(t){this.errorMessage=this.$_ErrorHandler(t)}},patchSubscription:function(){try{this.$_server.patch("/subscriptions/".concat(this.$auth.user.subscriptionId),this.subscriptionPayload)}catch(e){var t=e.response;this.errorMessage=this.$_ErrorHandler(t)}finally{this.loading=!1,this.closeModal()}},inputCardNumber:function(t){if(!(t.length>19)){var e=t.toString().replace(/(-+)|([^0-9]+)/g,"");this.cardNumberWithDashes=(e.match(/.{1,4}/g)||[]).join("-")}},inputExpirationDate:function(t){var e=t.replace(/\/+|[^0-9]+/g,"");if(!(e.length>4)){2===e.length&&(Number(e)>12&&(e="0"+e),0==Number(e)&&(e="01")),4==e.length&&0==Number(e.substring(2,4))&&(e=e.substring(0,2)+"01");var r=(e.match(/.{1,2}/g)||[]).join("/");this.expirationDateWithSlashes=r}}}}),c=(r(1392),r(1)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}}},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),e("div",[e("div",{staticClass:"w-full bg-white rounded shadow-lg"},[e("div",{staticClass:"w-full p-3"},[e("form",{},[e("div",{staticClass:"form-group group-label"},[e("label",[t._v("Total due")]),t._v(" "),e("label",{staticClass:"text-xl",attrs:{for:""}},[t._v("$\n              "+t._s(t.packageInfo.isMonthly?t.packageInfo.monthlyPrice:t.packageInfo.yearlyPrice)+"/\n              "),e("abbr",{staticClass:"text-xs"},[t._v(t._s(t.packageInfo.isMonthly?"monthly":"yearly"))])])]),t._v(" "),e("div",{staticClass:"h-[1px] bg-gray-300"}),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),e("div",{staticClass:"grid mb-10"},[e("label",{staticClass:"font-bold flex items-center justify-between",attrs:{for:""}},[t._v("\n              Credit Card\n              "),e("img",{staticClass:"float-right inline w-[134px]",attrs:{src:r(1112)}})])]),t._v(" "),t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Name of card holder")]),t._v(" "),e("el-input",{attrs:{placeholder:"Name Surname",required:""},model:{value:t.card_name,callback:function(e){t.card_name=e},expression:"card_name"}})],1),t._v(" "),e("div",{staticClass:"form-group mb-3"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Card Number")]),t._v(" "),e("el-input",{ref:"cardNumber",attrs:{placeholder:"0000-0000-0000-0000",value:t.cardNumberWithDashes,required:""},on:{input:t.inputCardNumber}})],1),t._v(" "),e("div",{staticClass:"grid gap-5 grid-cols-2"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Expiration Date")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"MM/YY",required:"",value:t.expirationDateWithSlashes},on:{input:t.inputExpirationDate}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("CVC")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading,placeholder:"000",required:"",type:"password",maxlength:"3"},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)]),t._v(" "),e("div",{staticClass:"w-full flex justify-center mt-5"},[e("button",{staticClass:"w-10/12 py-2 rounded-md bg-paperdazgreen-300 text-white flex items-center justify-center",class:[t.loading?"opacity-50":"opacity-100"],attrs:{disabled:t.loading},on:{click:t.patchCard}},[t._v("\n            Pay\n            "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"text-white animate-spin ml-1",attrs:{width:"20"}})],1)])],1)])])])])}),[],!1,null,"74eb81b6",null);e.default=component.exports}}]);