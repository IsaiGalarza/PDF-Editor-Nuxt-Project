(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1047:function(t,e,n){"use strict";n(828)},1048:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-60ded996] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-60ded996] .el-dialog__header{padding-bottom:20px}*[data-v-60ded996] .el-dialog__footer,*[data-v-60ded996] .el-dialog__header{text-align:left!important}*[data-v-60ded996] .el-dialog__body{background:#fcfcfd}*[data-v-60ded996] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},790:function(t,e,n){"use strict";var o=n(5),l=n(129).findIndex,r=n(161),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},828:function(t,e,n){var content=n(1048);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3a5cf888",content,!0,{sourceMap:!1})},987:function(t,e,n){"use strict";n.r(e);var o=n(63),l=n(3),r=(n(7),n(790),n(282),n(278),n(18),n(0)),c=n(42),d=r.default.extend({name:"PdfCCFlowModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,email:"",description:"",loading:!1,emails:[],subscriptions:{}}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/subscriptions?userId=".concat(localStorage.getItem("paperdaz_userID"))).then((function(e){t.subscriptions=e.data.data[0]})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},file:function(t){var e,n,o;this.emails=null!==(e=null===(n=this.file)||void 0===n||null===(o=n.cc)||void 0===o?void 0:o.split(","))&&void 0!==e?e:[]}},mounted:function(){this.showModal=this.visible},methods:{onSubmit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.loading||t.emails.length<1)){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.$axios.patch("/files/".concat(null===(n=t.file)||void 0===n?void 0:n.id),{action:"update_cc",cc:Object(o.a)(t.emails)}).then((function(e){t.$notify.success({title:"file",message:"carbon copy successful"}),t.closeModal()})).catch((function(e){t.$notify.error({title:"file",message:"carbon copy failled"})})).finally((function(){t.loading=!1}));case 5:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},removeItem:function(t){var e=this.emails.findIndex((function(e){return e==t}));e<0||this.emails.splice(e,1)},addItem:function(){var t,e=this;(null===(t=event)||void 0===t||t.preventDefault(),this.emails.length>Number(this.subscriptions.cc)-1)?this.$notify.info({message:"you have reached the max carbon copy members, go to billing to upgrade"}):this.emails.findIndex((function(t){return t==e.email}))>=0||!this.email||(this.emails.push(this.email),this.email="")}},components:{SpinnerDottedIcon:c.default}}),f=(n(1047),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-2xl text-gray-800 pb-2"},[t._v("\n      Carbon Copy Flow\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("div",{staticClass:"max-w-[470px] mx-auto"},[e("form",{staticClass:"",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addItem.apply(null,arguments)}}},[e("div",{staticClass:"grid grid-cols-[1fr,min-content] items-center gap-3 mb-8"},[e("el-input",{attrs:{placeholder:"Email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e("button",{staticClass:"circle circle-18 bg-gray-600 text-white font-medium text-xl",attrs:{type:"submit"}},[t._v("\n          +\n        ")])],1)]),t._v(" "),t._l(t.emails,(function(em){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.emails.length>0,expression:"emails.length > 0"}],key:em,staticClass:"p-4 my-2 flex items-center h-12 justify-between border-[1px] border-gray-500 rounded px-3 py-2"},[e("label",{staticClass:"w-full block"},[t._v(" "+t._s(em))]),t._v(" "),e("abbr",[e("button",{staticClass:"w-9 h-9 rounded-full justify-center items-center text-white text-3xl font-[100] bg-red-600",on:{click:function(e){return t.removeItem(em)}}},[t._v("\n        ×\n      ")])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.emails.length,expression:"emails.length == 0"}],staticClass:"p-4 text-gray-400"},[t._v("\n        Add emails above\n      ")]),t._v(" "),e("button",{staticClass:"w-full mt-8 flex justify-center items-center bg-paperdazgreen-400 rounded-lg text-white h-12",class:[t.loading?"opacity-40":"opacity-100"],attrs:{disabled:t.loading,type:"submit"},on:{click:t.onSubmit}},[t._v("\n      Send\n      "),t.loading?e("SpinnerDottedIcon",{staticClass:"animate-spin ml-2",attrs:{width:"20"}}):t._e()],1)],2)])}),[],!1,null,"60ded996",null);e.default=component.exports}}]);