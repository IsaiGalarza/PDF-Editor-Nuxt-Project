(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1110:function(e,t,o){var content=o(1323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("5619b14b",content,!0,{sourceMap:!1})},1322:function(e,t,o){"use strict";o(1110)},1323:function(e,t,o){var n=o(15)((function(i){return i[1]}));n.push([e.i,"*[data-v-34afe836] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-34afe836] .el-dialog__header{padding-bottom:20px}*[data-v-34afe836] .el-dialog__footer,*[data-v-34afe836] .el-dialog__header{text-align:left!important}*[data-v-34afe836] .el-dialog__body{background:#fcfcfd}*[data-v-34afe836] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},e.exports=n},1400:function(e,t,o){"use strict";o.r(t);o(278),o(7);var n=o(0),l=o(42),d=n.default.extend({name:"maxInviteModal",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{fileId:{type:Number},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,folder:{},loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},DeleteFile:function(){var e=this;this.$BUS.$emit("is-deleted"),this.loading=!0,this.$axios.delete("/files/".concat(this.fileId)).then((function(){e.$nuxt.$router.push("/dashboard"),e.$notify.success({message:"File deleted successfully"}),e.closeModal()})).catch((function(){e.$notify.error({message:"Could not delete file"})})).finally((function(){loading=!1}))}}}),r=(o(1322),o(1)),component=Object(r.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}}},[t("p",{staticClass:"text-center block font-medium max-w-[290px] mx-auto mb-6 break-normal"},[e._v("\n   Are you sure you want to delete these file?\n  ")]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:e.loading},on:{click:function(t){return e.closeModal()}}},[t("span",{staticClass:"inline-flex gap-1 items-center"},[e._v("\n        Cancel\n      ")])]),e._v(" "),t("button",{staticClass:"disabled:bg-opacity-50 flex items-center justify-center disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:e.loading},on:{click:e.DeleteFile}},[e._v("\n    Yes  \n    "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])}),[],!1,null,"34afe836",null);t.default=component.exports}}]);