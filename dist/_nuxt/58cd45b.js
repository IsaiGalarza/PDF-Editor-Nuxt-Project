(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1003:function(e,t,o){var content=o(1126);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("3f5f498c",content,!0,{sourceMap:!1})},1125:function(e,t,o){"use strict";o(1003)},1126:function(e,t,o){var n=o(15)((function(i){return i[1]}));n.push([e.i,"*[data-v-bee880aa] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-bee880aa] .el-dialog__header{padding-bottom:20px}*[data-v-bee880aa] .el-dialog__footer,*[data-v-bee880aa] .el-dialog__header{text-align:left!important}*[data-v-bee880aa] .el-dialog__body{background:#fcfcfd}*[data-v-bee880aa] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},e.exports=n},1160:function(e,t,o){"use strict";o.r(t);o(22),o(44),o(7);var n=o(0),l=o(43),d=(o(4),n.default.extend({name:"RemoveCompanyFile",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{},visible:{type:Boolean,default:!1}},filters:{removeExtension:function(e){return null==e?void 0:e.replace(/\.[^\/.]+$/,"")}},data:function(){return{showModal:!1,errorMessage:"",fileInfo:{},loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)},userFile:function(){this.fileInfo=this.userFile}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",this.$axios.$delete("/files/".concat(this.fileInfo.id)).then((function(e){t.$notify.success({title:"File",message:"Deleted successfully"}),t.$emit("updateVisibility",!1),t.$nuxt.refresh(),t.$emit("refresh")})).catch((function(e){t.$notify.error({title:"Package",message:"Unable to delete file"})})).finally((function(){t.loading=!1})))}}})),r=(o(1125),o(1)),component=Object(r.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Are you sure?")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center block font-medium max-w-[290px] mx-auto mb-0 whitespace-none"},[e._v("\n   You want to remove\n    ")]),t("div",{staticClass:"font-semibold text-paperdazgreen-500 uppercase block text-center mb-6"},[e._v("\n      "+e._s(e._f("removeExtension")(e.fileInfo.fileName))+"\n    ")]),e._v(" "),t("p"),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:e.loading},on:{click:function(t){return e.closeModal()}}},[e._v("\n      Cancel\n    ")]),e._v(" "),t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center"},[e._v("\n        Delete\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"bee880aa",null);t.default=component.exports}}]);