(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1068:function(t,e,o){var content=o(1192);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("8ef50352",content,!0,{sourceMap:!1})},1191:function(t,e,o){"use strict";o(1068)},1192:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-9952b78a] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9952b78a] .el-dialog__header{padding-bottom:20px}*[data-v-9952b78a] .el-dialog__footer,*[data-v-9952b78a] .el-dialog__header{text-align:left!important}*[data-v-9952b78a] .el-dialog__body{background:#fcfcfd}*[data-v-9952b78a] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1349:function(t,e,o){"use strict";o.r(e);o(33),o(279),o(7);var n=o(0),l=o(43),d=n.default.extend({name:"edit-company-folder",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},file:{type:Object},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,folderInputData:"",folder:{}}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},file:function(){this.folder=this.file,this.folderInputData=(this.folder||{}).name}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.folderInputData.trim().length<1||this.loading||(this.loading=!0,this.errorMessage="",this.$axios.$patch("/folders/".concat(this.folder.id),{name:this.folderInputData}).then((function(t){e.$notify.success({title:"Folder",message:"Folder name changed successfully"}),e.$emit("updateVisibility",!1),e.$emit("refresh"),e.$nuxt.refresh()})).catch((function(t){e.$notify.error({title:"Folder",message:"Unable to change folder name"})})).finally((function(){e.loading=!1})))}}}),r=(o(1191),o(1)),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Edit Folder")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.folderInputData,expression:"folderInputData"}],staticClass:"w-full py-4 px-4 border-[1px] border-paperdazgrey-500 rounded-md",attrs:{placeholder:"Enter Folder Name"},domProps:{value:t.folderInputData},on:{input:function(e){e.target.composing||(t.folderInputData=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] shadow-md text-white rounded-lg bg-paperdazgreen-400",attrs:{disabled:t.loading},on:{click:t.onSubmit}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n       Update\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"9952b78a",null);e.default=component.exports}}]);