(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1049:function(t,e,n){"use strict";n(828)},1050:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-0520dd43] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-0520dd43] .el-dialog__header{padding-bottom:20px}*[data-v-0520dd43] .el-dialog__footer,*[data-v-0520dd43] .el-dialog__header{text-align:left!important}*[data-v-0520dd43] .el-dialog__body{background:#fcfcfd}*[data-v-0520dd43] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},791:function(t,e,n){"use strict";var o=n(5),l=n(129).findIndex,d=n(161),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),d(r)},828:function(t,e,n){var content=n(1050);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("135ff2bf",content,!0,{sourceMap:!1})},987:function(t,e,n){"use strict";n.r(e);var o=n(63),l=(n(7),n(791),n(282),n(25),n(48),n(0)),d=n(42),r=l.default.extend({name:"PdfPapertagsModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,tag:"",description:"",tags:[],isLoading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},file:function(t){var e,n,o;this.tags=null!==(e=null===(n=this.file)||void 0===n||null===(o=n.tags)||void 0===o?void 0:o.split(","))&&void 0!==e?e:[]}},mounted:function(){this.showModal=this.visible},methods:{onSubmit:function(){var t,e=this;this.isLoading||(this.isLoading=!0,this.$axios.patch("/files/".concat(null===(t=this.file)||void 0===t?void 0:t.id),{action:"update_tag",tags:Object(o.a)(this.tags)}).then((function(){e.$notify.success({title:"file-tags",message:"Tags saved successful"}),e.$emit("updateVisibility",!1)})).catch((function(){e.$notify.error({title:"file-tags",message:"Tags not saved"})})).finally((function(){e.isLoading=!1})))},closeModal:function(){this.$emit("updateVisibility",!1)},removeItem:function(t){var e=this.tags.findIndex((function(e){return e==t}));e<0||this.tags.splice(e,1)},addItem:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.tags.findIndex((function(t){return t==e.tag}))>=0||!this.tag||(this.tag=String(this.tag).replace(/^#*(.+)/,"$1"),this.tags.push(this.tag),this.tag="")}},components:{SpinnerDottedIcon:d.default}}),c=(n(1049),n(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-2xl text-gray-800 pb-2"},[t._v("\n      Papertags\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("div",{staticClass:"max-w-[470px] mx-auto"},[e("form",{staticClass:"",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addItem.apply(null,arguments)}}},[e("div",{staticClass:"grid grid-cols-[1fr,min-content] items-center gap-3 mb-8"},[e("el-input",{attrs:{placeholder:"Papertag",type:"text",required:""},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),t._v(" "),e("button",{staticClass:"circle circle-18 bg-gray-600 text-white font-medium text-xl",attrs:{type:"submit"}},[t._v("\n          +\n        ")])],1)]),t._v(" "),e("div",{staticClass:"rounded-lg border border-gray-300 min-h-[200px] text-gray-700 p-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.tags.length>0,expression:"tags.length > 0"}],staticClass:"flex flex-wrap gap-4 flex-wrap"},t._l(t.tags,(function(em){return e("div",{key:em,staticClass:"p-2 flex items-center h-8 gap-1 rounded-full bg-gray-100 border border-gray-300 text-xs"},[t._v("\n          "+t._s(em)+"\n          "),e("button",{staticClass:"p-2 text-red-500 text-xl font-medium",on:{click:function(e){return t.removeItem(em)}}},[t._v("\n            ×\n          ")])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.tags.length,expression:"tags.length == 0"}],staticClass:"text-gray-400"},[t._v("\n        Add tags above\n      ")])]),t._v(" "),e("button",{staticClass:"w-full flex justify-center items-center mt-8 bg-paperdazgreen-400 rounded-lg text-white h-12",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{type:"submit",disabled:t.isLoading},on:{click:t.onSubmit}},[t._v("\n      Send\n      "),e("SpinnerDottedIcon",{staticClass:"ml-2 animate-spin",class:[t.isLoading?"inline-block":"hidden"],attrs:{width:"18",height:"18"}})],1)])])}),[],!1,null,"0520dd43",null);e.default=component.exports}}]);