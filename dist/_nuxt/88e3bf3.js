(window.webpackJsonp=window.webpackJsonp||[]).push([[141,23],{1031:function(e,t,r){"use strict";r.r(t);r(7);var o=r(3),n=(r(18),r(43),r(31),r(88),r(0)),l=r(42),d=r(656),c=(r(78),r(290),n.default.extend({name:"UploadDocumentModal",components:{SpinnerDottedIcon:l.default,CloudIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},folder:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,isDraggedOver:!1,dragErrorMessage:""}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{moveToFolder:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(Object.keys(t.folder).length<1)){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.$axios.$patch("/files/".concat(e),{folderId:t.folder.id}).then((function(){t.$notify.success({title:"",message:"File moved successful"})}));case 4:t.$emit("resetUserFolder");case 5:case"end":return r.stop()}}),r)})))()},uploadDocument:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=new FormData).append("upload",e,e.name),o.append("type","file"),o.append("userId",t.$auth.user.id),n=t.$notify.info({title:"File Upload",message:"File uploading ...",duration:6e4}),r.next=7,t.$_server.post("/files",o).then((function(e){var r;t.$store.commit("SET_UPLOAD_STATE",!0),t.$notify.success({title:"File Upload",message:"File uploaded successfully"}),t.$nuxt.$router.push("/pdf/".concat(null===(r=e.data)||void 0===r?void 0:r.paperLink))})).catch((function(e){var r;t.$notify.error({title:"File Upload",message:(null==e||null===(r=e.response)||void 0===r?void 0:r.data)||e.message})})).finally((function(){n.close()}));case 7:case"end":return r.stop()}}),r)})))()},dragover:function(e){e.preventDefault(),this.isDraggedOver=!0,this.dragErrorMessage=""},dragleave:function(){this.isDraggedOver=!1,this.dragErrorMessage=""},drop:function(e){var t;e.preventDefault(),this.isDraggedOver=!1;var r=null===(t=e.dataTransfer)||void 0===t?void 0:t.files[0];r&&("application/pdf"===r.type?this.uploadDocument(r):this.dragErrorMessage="File type not supported. Upload pdf.")},uploadDocumentFromInput:function(e){var t,r=e.currentTarget;if(r){var o=null!==(t=r.files)&&void 0!==t&&t.length?r.files[0]:void 0;o&&this.uploadDocument(o)}},closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",setTimeout((function(){t.loading=!1,Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))(),t.closeModal()}),1e3))}}})),f=(r(998),r(1)),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}}},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),t("div",{ref:"dropArea",staticClass:"cursor-pointer mt-2 mx-auto px-4 py-8 flex flex-col items-center border-2 border-paperdazgreen-300 bg-white rounded-2xl max-w-3xl",class:[e.isDraggedOver?"border-solid":"border-dashed"],on:{click:function(t){return e.$refs.uploadFileInput.click()},dragover:function(t){return t.preventDefault(),e.dragover.apply(null,arguments)},dragleave:e.dragleave,drop:function(t){return t.preventDefault(),e.drop.apply(null,arguments)}}},[t("span",{staticClass:"circle circle-46 bg-paperdazgreen-300 text-white"},[t("cloud-icon",{attrs:{width:"47",height:"47"}})],1),e._v(" "),t("p",{staticClass:"text-base font-semibold"},[e.isDraggedOver?t("span",[e._v(" Drop Here! ")]):t("span",[e._v("Click to Upload or Drag and Drop File Here!")])]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.dragErrorMessage,expression:"dragErrorMessage"}],staticClass:"text-red-600 text-xs mt-2"},[e._v("\n      "+e._s(e.dragErrorMessage)+"\n    ")])]),e._v(" "),t("input",{ref:"uploadFileInput",attrs:{type:"file",accept:"application/pdf,application/vnd.ms-excel",hidden:""},on:{change:e.uploadDocumentFromInput}})])}),[],!1,null,"ae391d90",null);t.default=component.exports},656:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"CloudIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",viewBox:"0 0 47 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M38.224 13.1247C37.7214 10.1383 36.2427 7.41286 33.9812 5.3446C31.4684 3.0444 28.2017 1.77832 24.7997 1.77832C22.1709 1.77832 19.6097 2.53217 17.4158 3.95288C15.5892 5.13198 14.0718 6.72666 12.9991 8.60162C12.5352 8.51464 12.0519 8.46631 11.5687 8.46631C7.46117 8.46631 4.11717 11.8103 4.11717 15.9178C4.11717 16.4494 4.17516 16.9616 4.27181 17.4642C1.61401 19.3971 0 22.5092 0 25.8242C0 28.5013 0.995467 31.1011 2.81244 33.1597C4.67773 35.2666 7.14223 36.5134 9.77104 36.6583C9.80003 36.6583 9.81936 36.6583 9.84836 36.6583H18.16C18.8849 36.6583 19.4648 36.0784 19.4648 35.3536C19.4648 34.6287 18.8849 34.0488 18.16 34.0488H9.88702C5.93414 33.8072 2.60948 30.0476 2.60948 25.8145C2.60948 23.0794 4.07852 20.5279 6.44637 19.1458C6.99726 18.8269 7.22922 18.16 7.01659 17.5608C6.8233 17.0389 6.72665 16.488 6.72665 15.8985C6.72665 13.231 8.90121 11.0565 11.5687 11.0565C12.1389 11.0565 12.6995 11.1531 13.2213 11.3464C13.8592 11.5784 14.5647 11.2884 14.8547 10.6795C16.662 6.84264 20.5665 4.36847 24.8094 4.36847C30.5115 4.36847 35.2183 8.64028 35.7595 14.3038C35.8175 14.8934 36.2621 15.3669 36.8419 15.4636C41.1427 16.1981 44.3901 20.1703 44.3901 24.7031C44.3901 29.5064 40.6112 33.6816 35.9528 34.0392H28.8299C28.105 34.0392 27.5251 34.6191 27.5251 35.3439C27.5251 36.0688 28.105 36.6487 28.8299 36.6487H36.0011C36.0301 36.6487 36.0591 36.6487 36.0978 36.6487C39.0455 36.436 41.7999 35.083 43.8489 32.8214C45.8881 30.5792 46.9996 27.6991 46.9996 24.7031C46.9899 19.2811 43.2883 14.4584 38.224 13.1247Z"}}),e._v(" "),t("path",{attrs:{d:"M31.333 27.0608C31.8453 26.5486 31.8453 25.7271 31.333 25.2148L24.4227 18.3046C24.1811 18.0629 23.8429 17.918 23.5046 17.918C23.1663 17.918 22.8281 18.0533 22.5864 18.3046L15.6762 25.2148C15.1639 25.7271 15.1639 26.5486 15.6762 27.0608C15.9274 27.3121 16.2657 27.4474 16.5943 27.4474C16.9229 27.4474 17.2612 27.3218 17.5125 27.0608L22.1999 22.3734V43.9161C22.1999 44.6409 22.7797 45.2208 23.5046 45.2208C24.2295 45.2208 24.8093 44.6409 24.8093 43.9161V22.3734L29.4967 27.0608C29.9993 27.573 30.8208 27.573 31.333 27.0608Z"}})])}),[],!1,null,null,null);t.default=component.exports},780:function(e,t,r){var content=r(999);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("0580aa55",content,!0,{sourceMap:!1})},998:function(e,t,r){"use strict";r(780)},999:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,"*[data-v-ae391d90] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-ae391d90] .el-dialog__header{padding-bottom:20px;display:none}*[data-v-ae391d90] .el-dialog__footer,*[data-v-ae391d90] .el-dialog__header{text-align:left!important;background:#dbe9d2}*[data-v-ae391d90] .el-dialog__body{background:#dbe9d2}*[data-v-ae391d90] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o}}]);