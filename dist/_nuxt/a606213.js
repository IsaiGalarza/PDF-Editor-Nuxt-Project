(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1026:function(e,t,o){"use strict";o(819)},1027:function(e,t,o){var n=o(14)((function(i){return i[1]}));n.push([e.i,"*[data-v-11a65b66] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-11a65b66] .el-dialog__header{padding-bottom:20px}*[data-v-11a65b66] .el-dialog__footer,*[data-v-11a65b66] .el-dialog__header{text-align:left!important}*[data-v-11a65b66] .el-dialog__body{background:#fcfcfd}*[data-v-11a65b66] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},e.exports=n},1097:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(18),o(37),o(7),o(278),o(0)),l=o(43),d=r.default.extend({name:"create-company-folder",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},visible:{type:Boolean,default:!1},userFile:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",folderName:"",loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},moveCompanyFiles:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(0!==Object.keys(t.userFile).length){o.next=2;break}return o.abrupt("return");case 2:t.$axios.$patch("/files/".concat(t.userFile.id),{folderId:e}).then((function(){t.$notify.success({title:"File",message:"Moved successfully"}),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.$emit("resetUserFile")})).catch((function(e){t.$notify.error({title:"Package",message:"Unable to move file"})})).finally((function(){t.loading=!1}));case 3:case"end":return o.stop()}}),o)})))()},onSubmit:function(){var e,t=this;if(null===(e=event)||void 0===e||e.preventDefault(),!(this.folderName.trim().length<1||this.loading)){this.loading=!0,this.errorMessage="";var o={name:this.folderName};this.$axios.$post("/folders",o).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$notify.success({title:"Folder",message:"Folder created successfully"}),e.next=3,t.moveCompanyFiles(o.id);case 3:t.$emit("resetUserFile"),t.$nuxt.refresh(),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.folderName="";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$notify.error({title:"Folder",message:"Unable to created Folder"})})).finally((function(){t.loading=!1}))}}}}),c=d,f=(o(1026),o(1)),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Create Folder")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.folderName,expression:"folderName"}],staticClass:"w-full py-2 px-4 border-[1px] border-paperdazgrey-200 rounded-md",attrs:{placeholder:"Enter Folder Name"},domProps:{value:e.folderName},on:{input:function(t){t.target.composing||(e.folderName=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[90%] shadow-md text-white rounded-[1rem] shadow bg-paperdazgreen-300",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n       Create\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"11a65b66",null);t.default=component.exports},819:function(e,t,o){var content=o(1027);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("b3b4bf28",content,!0,{sourceMap:!1})}}]);