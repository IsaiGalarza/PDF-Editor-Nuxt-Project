(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1085:function(e,t,n){var content=n(1228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("34f44279",content,!0,{sourceMap:!1})},1227:function(e,t,n){"use strict";n(1085)},1228:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,"*[data-v-1109ca68] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-1109ca68] .el-dialog__header{padding-bottom:20px}*[data-v-1109ca68] .el-dialog__footer,*[data-v-1109ca68] .el-dialog__header{text-align:left!important}*[data-v-1109ca68] .el-dialog__body{background:#fcfcfd}*[data-v-1109ca68] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},1362:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n(3),c=(n(18),n(7),n(0)),l=n(43),d=c.default.extend({name:"DeleteBillingInformationModal",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,packageId:void 0,errorMessage:"",loading:!1,proceedToNextFunction:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=event)||void 0===n||n.preventDefault(),!e.loading){t.next=3;break}return t.abrupt("return");case 3:return e.loading=!0,e.errorMessage="",t.next=7,e.$axios.get("/packages/?userId=".concat(e.$auth.user.id)).then((function(t){var n=Object(o.a)(t.data,1)[0];e.proceedToNextFunction=!0,e.packageId=n.id})).catch((function(e){console.log(e)}));case 7:if(e.proceedToNextFunction){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,e.$axios.get("/cards/?userId=".concat(e.$auth.user.id)).then((function(t){var n=Object(o.a)(t.data.data,1)[0];e.packageId=n.id,Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.delete("/cards/".concat(e.packageId)).then(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$notify.success({title:"Package Action",message:"Card deleted successfully"});case 2:e.$nuxt.refresh();case 3:case"end":return t.stop()}}),t)})))).catch((function(){e.$notify.error({title:"Package Action",message:"Oops, error occured"})}));case 2:case"end":return t.stop()}}),t)})))(),e.$emit("success"),e.closeModal()})).catch((function(t){var n="";n=t&&t.response&&t.response.data&&t.response.data.message?t.response.data.message:"Server not reachable",e.$notify.error({title:"Delete Package",message:n}),e.errorMessage=n})).finally((function(){e.loading=!1}));case 11:case"end":return t.stop()}}),t)})))()}}}),f=(n(1227),n(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Are you sure?")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center font-medium max-w-[300px] mx-auto mb-6 whitespace-normal"},[e._v("\n    You want to delete your billing information from Paperdaz?\n  ")]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:e.loading},on:{click:function(t){return e.closeModal()}}},[e._v("\n      Cancel\n    ")]),e._v(" "),t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center"},[e._v("\n        Delete\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"1109ca68",null);t.default=component.exports}}]);