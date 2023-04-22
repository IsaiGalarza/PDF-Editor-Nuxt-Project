(window.webpackJsonp=window.webpackJsonp||[]).push([[284,23,31,35,121,140,169,178,264],{1028:function(e,t,n){"use strict";n.r(t);n(7);var r=n(3),o=(n(18),n(37),n(33),n(88),n(0)),l=n(43),d=n(653),c=(n(78),n(292),o.default.extend({name:"UploadDocumentModal",components:{SpinnerDottedIcon:l.default,CloudIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},folder:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,isDraggedOver:!1,dragErrorMessage:""}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{moveToFolder:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(Object.keys(t.folder).length<1)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.$axios.$patch("/files/".concat(e),{folderId:t.folder.id}).then((function(){t.$notify.success({title:"",message:"File moved successful"})}));case 4:t.$emit("resetUserFolder");case 5:case"end":return n.stop()}}),n)})))()},uploadDocument:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=new FormData).append("upload",e,e.name),r.append("type","file"),r.append("userId",t.$auth.user.id),o=t.$notify.info({title:"File Upload",message:"File uploading ...",duration:6e4}),n.next=7,t.$_server.post("/files",r).then((function(e){var n;t.$store.commit("SET_UPLOAD_STATE",!0),t.$notify.success({title:"File Upload",message:"File uploaded successfully"}),t.$nuxt.$router.push("/pdf/".concat(null===(n=e.data)||void 0===n?void 0:n.paperLink))})).catch((function(e){var n;t.$notify.error({title:"File Upload",message:(null==e||null===(n=e.response)||void 0===n?void 0:n.data)||e.message})})).finally((function(){o.close()}));case 7:case"end":return n.stop()}}),n)})))()},dragover:function(e){e.preventDefault(),this.isDraggedOver=!0,this.dragErrorMessage=""},dragleave:function(){this.isDraggedOver=!1,this.dragErrorMessage=""},drop:function(e){var t;e.preventDefault(),this.isDraggedOver=!1;var n=null===(t=e.dataTransfer)||void 0===t?void 0:t.files[0];n&&("application/pdf"===n.type?this.uploadDocument(n):this.dragErrorMessage="File type not supported. Upload pdf.")},uploadDocumentFromInput:function(e){var t,n=e.currentTarget;if(n){var r=null!==(t=n.files)&&void 0!==t&&t.length?n.files[0]:void 0;r&&this.uploadDocument(r)}},closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",setTimeout((function(){t.loading=!1,Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))(),t.closeModal()}),1e3))}}})),f=(n(994),n(1)),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}}},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),t("div",{ref:"dropArea",staticClass:"cursor-pointer mt-2 mx-auto px-4 py-8 flex flex-col items-center border-2 border-paperdazgreen-300 bg-white rounded-2xl max-w-3xl",class:[e.isDraggedOver?"border-solid":"border-dashed"],on:{click:function(t){return e.$refs.uploadFileInput.click()},dragover:function(t){return t.preventDefault(),e.dragover.apply(null,arguments)},dragleave:e.dragleave,drop:function(t){return t.preventDefault(),e.drop.apply(null,arguments)}}},[t("span",{staticClass:"circle circle-46 bg-paperdazgreen-300 text-white"},[t("cloud-icon",{attrs:{width:"47",height:"47"}})],1),e._v(" "),t("p",{staticClass:"text-base font-semibold"},[e.isDraggedOver?t("span",[e._v(" Drop Here! ")]):t("span",[e._v("Click to Upload or Drag and Drop File Here!")])]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.dragErrorMessage,expression:"dragErrorMessage"}],staticClass:"text-red-600 text-xs mt-2"},[e._v("\n      "+e._s(e.dragErrorMessage)+"\n    ")])]),e._v(" "),t("input",{ref:"uploadFileInput",attrs:{type:"file",accept:"application/pdf,application/vnd.ms-excel",hidden:""},on:{change:e.uploadDocumentFromInput}})])}),[],!1,null,"ae391d90",null);t.default=component.exports},1065:function(e,t,n){var content=n(1183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("4dcfb04e",content,!0,{sourceMap:!1})},1120:function(e,t,n){"use strict";n(998)},1121:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".fab-button[data-v-835901ea]{bottom:4rem;right:1.25rem;display:inline-flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgb(132 200 112 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.fab-button[data-v-835901ea]{right:2.5rem;height:4rem;width:4rem}}.fab-button[data-v-835901ea]{border-radius:50%;transition:all .2s ease-in-out}.fab-button[data-v-835901ea]:hover{--tw-bg-opacity:1;background-color:rgb(166 228 128 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),r.locals={},e.exports=r},1122:function(e,t,n){"use strict";n(999)},1123:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,"*[data-v-bee880aa] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-bee880aa] .el-dialog__header{padding-bottom:20px}*[data-v-bee880aa] .el-dialog__footer,*[data-v-bee880aa] .el-dialog__header{text-align:left!important}*[data-v-bee880aa] .el-dialog__body{background:#fcfcfd}*[data-v-bee880aa] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},e.exports=r},1156:function(e,t,n){"use strict";n.r(t);var r={components:{PlusIcon:n(204).default},props:{relativeToParent:{type:Boolean,default:!1}}},o=(n(1120),n(1)),component=Object(o.a)(r,(function(){var e=this._self._c;return e("button",{staticClass:"fab-button",class:[this.relativeToParent?"absolute":"fixed"]},[e("plus-icon",{staticClass:"h-6 w-6 sm:h-8 sm:w-8"})],1)}),[],!1,null,"835901ea",null);t.default=component.exports},1157:function(e,t,n){"use strict";n.r(t);n(22),n(44),n(7);var r=n(0),o=n(43),l=(n(4),r.default.extend({name:"RemoveCompanyFile",components:{SpinnerDottedIcon:o.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{},visible:{type:Boolean,default:!1}},filters:{removeExtension:function(e){return null==e?void 0:e.replace(/\.[^\/.]+$/,"")}},data:function(){return{showModal:!1,errorMessage:"",fileInfo:{},loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)},userFile:function(){this.fileInfo=this.userFile}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault(),this.loading||(this.loading=!0,this.errorMessage="",this.$axios.$delete("/files/".concat(this.fileInfo.id)).then((function(e){t.$notify.success({title:"File",message:"Deleted successfully"}),t.$emit("updateVisibility",!1),t.$nuxt.refresh(),t.$emit("refresh")})).catch((function(e){t.$notify.error({title:"Package",message:"Unable to delete file"})})).finally((function(){t.loading=!1})))}}})),d=(n(1122),n(1)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Are you sure?")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center block font-medium max-w-[290px] mx-auto mb-0 whitespace-none"},[e._v("\n   You want to remove\n    ")]),t("div",{staticClass:"font-semibold text-paperdazgreen-500 uppercase block text-center mb-6"},[e._v("\n      "+e._s(e._f("removeExtension")(e.fileInfo.fileName))+"\n    ")]),e._v(" "),t("p"),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:e.loading},on:{click:function(t){return e.closeModal()}}},[e._v("\n      Cancel\n    ")]),e._v(" "),t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center"},[e._v("\n        Delete\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"bee880aa",null);t.default=component.exports},1182:function(e,t,n){"use strict";n(1065)},1183:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,"*[data-v-6f868437] .el-dialog{width:830px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-6f868437] .el-dialog__header{padding-bottom:20px;border-bottom:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer{border-top:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer,*[data-v-6f868437] .el-dialog__header{text-align:left!important}*[data-v-6f868437] .el-dialog__body{background:#fcfcfd}*[data-v-6f868437] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},e.exports=r},1346:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(18),n(31),n(7),n(0)),l=(n(418),n(43)),d=o.default.extend({name:"InviteTeamMemberModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!0},reachLimit:{type:Boolean}},data:function(){return{showModal:!1,email:"",access:"",teamInviteLink:"",isLoading:!1}},watch:{visible:function(e){this.showModal=e,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},methods:{copyTeamLink:function(){navigator.clipboard.writeText(this.teamInviteLink),this.$notify.info({message:"Copied"})},sendInviteLink:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.reachLimit){t.next=3;break}return e.$emit("maxpopup"),t.abrupt("return");case 3:if(!e.isLoading){t.next=5;break}return t.abrupt("return");case 5:return e.isLoading=!0,n={action:"invite_link",emails:[e.email],link:e.teamInviteLink},t.next=9,e.$axios.$post("/request",n).then((function(){e.$notify.success({message:"Invite sent successfully"}),e.closeModal()})).catch((function(){e.$notify.error({message:"Invite sent failed"})})).finally((function(){e.isLoading=!1}));case 9:case"end":return t.stop()}}),t)})))()},closeModal:function(){this.$emit("updateVisibility",!1)}},components:{SpinnerDottedIcon:l.default}}),c=(n(1182),n(1)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"font-semibold text-xl text-gray-800 pt-4"},[e._v("\n      Invite Team Member\n    ")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.sendInviteLink.apply(null,arguments)}}},[t("div",[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-[1fr,max-content] items-center gap-3 mb-8"},[t("div",[t("label",{staticClass:"block font-medium mb-3",attrs:{for:""}},[e._v("Email Address")]),e._v(" "),t("el-input",{attrs:{disabled:e.isLoading,placeholder:"Email",type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t("div")])]),e._v(" "),t("p",{staticClass:"mt-10 font-medium mb-3"},[e._v("Use invite link")]),e._v(" "),t("div",{staticClass:"px-3 py-2 bg-paperdazgreen-400 flex items-center h-16"},[t("p",{staticClass:"bg-white h-full mr-3 flex-1 truncate flex items-center px-2 text-sm"},[t("span",{staticClass:"truncate"},[e._v(e._s(e.teamInviteLink))])]),e._v(" "),t("button",{staticClass:"bg-paperdazgreen-700 text-white px-5 h-full",on:{click:function(t){return t.preventDefault(),e.copyTeamLink.apply(null,arguments)}}},[e._v("Copy")])]),e._v(" "),t("div",{staticClass:"py-3 grid place-items-center"},[t("button",{staticClass:"shadow-lg w-full bg-paperdazgreen-400 rounded-lg text-white h-12 max-w-[450px] flex justify-center items-center",class:[e.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:e.isLoading,type:"submit"}},[e._v("\n        INVITE\n        "),e.isLoading?t("SpinnerDottedIcon",{staticClass:"animate-spin ml-2",attrs:{width:"20",height:"20"}}):e._e()],1)])])])}),[],!1,null,"6f868437",null);t.default=component.exports},1956:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(3),l=(n(18),n(22),n(44),n(7),n(31),n(56),n(37),n(28),n(32),n(49),n(21),n(50),n(0)),d=n(1155),c=n(1343),f=n(1028),h=n(1346),v=(n(683),n(66)),m=n(63),x=n(655),w=n(671),C=n(34),_=(n(203),n(62)),y=n(672),F=n(132),k=n(1156),M=n(127),D=n(991),P=n(43),L=n(660),$=n(1157),I=n(282),O=n(157),S=n(4),j={computed:{appIsFreeUser:function(){var e;return(null===(e=this.$auth)||void 0===e?void 0:e.user.role)==S.a.FREE}},watch:{created:function(){},"$auth.user":function(){this.$auth.user.role!==S.a.FREE&&this.$nuxt.$router.push("/dashboard")}}},V=n(758),T=n(982),E=n(67),R=n(682);n(418);function H(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var U=l.default.extend({components:{TopDetailsCardContainer:c.default,LeavesDetailsContainer:d.default,SearchIcon:C.default,InviteTeamMemberModal:h.default,FacebookIcon:v.default,TrashCanIcon:F.default,FloatingActionButton:k.default,UploadDocumentModal:f.default,HeartOutlineIcon:m.default,ShareOutlineIcon:_.default,SpinnerDottedIcon:P.default,EllipsisIconVerticalIcon:L.default,RemoveCompanyFile:$.default,ShareFilesModal:I.default,QrcodeShare:O.default,FilePagination:V.default,EmptyFileLedger:T.default,TwitterIcon:E.default,LedgerIcon:R.default},name:"MyFilesPage",layout:"dashboard",mixins:[j],filters:{removeExtension:function(e){return null==e?void 0:e.replace(/\.[^\/.]+$/,"")}},data:function(){return{returnedDataPage:0,totalFile:null,activeTab:"ledger",showUploadDocumentModal:!1,showRemoveCompanyFiles:!1,showShareCompanyFiles:!1,showQrcodeFiles:!1,refresh:!1,show:!1,searchParam:"",spinner:!0,files:[],userFile:{},searchValue:"",socialType:"",tabs:[{label:"ledger",key:"ledger",action:"ledger",count:896,icon:R.default},{label:"completed",key:"completed",count:25,action:"complete",icon:w.default},{label:"confirmed",key:"confirmed",count:25,action:"confirm",icon:y.default},{label:"signed",key:"signed",count:25,action:"sign",icon:x.default}]}},mounted:function(){this.fetchFiles(this.returnedDataPage,this.searchValue)},asyncData:function(e){e.store.commit("SET_PAGE_NAME",{name:"My Files"})},methods:{displayShare:function(e){switch(e){case"facebook":return v.default;case"twitter":return E.default;default:return{render:function(e){return e("span","--")}}}},searchFiles:function(e){"Enter"===e.key&&(this.searchValue=e.target.value)},setPage:function(e){this.returnedDataPage=e},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},setRefresh:function(){this.refresh=!this.refresh},showRemoveCompanyFileFunc:function(e){this.userFile=e,this.showRemoveCompanyFiles=!0},showShareCompanyFileFunc:function(e){this.userFile=e,this.showShareCompanyFiles=!0},fetchFiles:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$get("/files?userId=".concat(n.$auth.user.id,"&fileName[$like]=").concat(t,"%&$skip=").concat(e,"&$sort[updatedAt]=-1"),{params:{isEditing:0}}).then((function(e){var t=e.data.map((function(e){return e}));n.files=t,n.$store.commit("ADD_USER",n.files),n.spinner=!1,n.totalFile=e.total})).finally((function(){n.spinner=!1}));case 2:case"end":return r.stop()}}),r)})))()},formatDateTime:function(e){return"".concat(D.a.getDateString(e),"  ").concat(D.a.getFormattedTime(e))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(M.e)(["filterUser","pdfUser"])),watch:{refresh:function(){this.$nuxt.refresh(),this.fetchFiles(this.returnedDataPage,this.searchValue)},returnedDataPage:function(){this.spinner=!0,this.fetchFiles(this.returnedDataPage,this.searchValue)},searchValue:function(){this.spinner=!0,this.fetchFiles(this.returnedDataPage,this.searchValue)},"$auth.user":function(){this.fetchFiles(this.returnedDataPage,this.searchValue)}}}),z=U,A=n(1),component=Object(A.a)(z,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("main",{staticClass:"mb-24"},[t("top-details-card-container",{staticClass:"mb-5",attrs:{tabs:e.tabs},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}}),e._v(" "),t("div",{staticClass:"flex items-center flex-wrap gap-4 justify-between mb-6 relative"},[t("h5",{staticClass:"text-lg font-semibold text-[#272727]"},[e._v("My Files")]),e._v(" "),t("div",{staticClass:"w-full xs:max-w-[280px] text-xs font-medium flex items-center relative justify-end"},[t("span",{staticClass:"el-dropdown-link",class:[e.show?"left-roll":"no-roll"]},[t("input",{staticClass:"search-input h-10 pl-4 mr-2 bg-transparent flex-1 border border-paperdazgreen-300 rounded-tl-lg rounded-bl-lg focus:border-paperdazgreen-700 outline-none",attrs:{type:"text",placeholder:"Search Files"},domProps:{value:e.searchParam},on:{keypress:e.searchFiles}})]),e._v(" "),t("button",{staticClass:"circle circle-18 bg-paperdazgreen-400 text-white",on:{click:function(t){e.show=!e.show}}},[t("search-icon",{attrs:{width:"16",height:"16",currentcolor:"white"}})],1)])]),e._v(" "),t("div",{staticClass:"rounded-2xl bg-white overflow-x-auto custom-scrollbar relative"},[e.spinner?t("div",{staticClass:"absolute z-10 w-full h-[100%] bg-white top-0 left-0 rounded-lg flex justify-center items-center"},[t("spinner-dotted-icon",{staticClass:"text-paperdazgreen-400 animate-spin"})],1):e._e(),e._v(" "),e.pdfUser<1&&""==e.searchValue?t("EmptyFileLedger",{staticClass:"h-min-[55vh]"}):t("table",{staticClass:"custom-table"},[t("thead",{staticClass:"text-[#414142]"},[t("tr",[t("th",{staticClass:"w-12 text-center fixed-col left"},[e._v("No")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("File Name")]),e._v(" "),t("th",{},[e._v("Action Request")]),e._v(" "),t("th",{},[e._v("Date & Time")]),e._v(" "),t("th",{staticClass:"w-28 text-center"},[e._v("Mission Shared")]),e._v(" "),t("th",{staticClass:"text-center fixed-col right"},[e._v("Action")])])]),e._v(" "),t("tbody",{staticClass:"text-[#505050]"},e._l(e.pdfUser,(function(n,i){return t("tr",{key:i},[t("td",{staticClass:"w-12 text-center fixed-col left"},[e._v(e._s(i+1+e.returnedDataPage))]),e._v(" "),t("td",[t("div",{staticClass:"flex items-center gap-3"},[t("span",{staticClass:"circle circle-17 p-0.5 border border-paperdazgreen-400"},[t("img",{staticClass:"circle",attrs:{src:(n.user||{}).profile_picture||"/img/placeholder_picture.png",alt:""}})]),e._v(" "),t("div",[t("p",{staticClass:"text-sm font-medium text-[#505050]"},[t("nuxt-link",{attrs:{to:"/pdf/".concat(n.paperLink)}},[e._v("\n                    "+e._s(e._f("removeExtension")(n.fileName))+"\n                  ")])],1),e._v(" "),t("p",{staticClass:"text-xs font-light text-[#727272]"},[e._v("\n                  "+e._s(n.userName)+"\n                ")])])])]),e._v(" "),t("td",{staticClass:"text-center"},[e._v(e._s(n.fileAction||"-"))]),e._v(" "),t("td",{staticClass:"text-sm text-center"},[e._v("\n            "+e._s(e.formatDateTime(n.updatedAt))+"\n          ")]),e._v(" "),t("td",{staticClass:"text-center"},[t("div",{staticClass:"grid place-items-center"},[t("button",{staticClass:"circle circle-17 bg-paperdazgreen-400 text-white"},[t(e.displayShare(n.shared),{tag:"component"})],1)])]),e._v(" "),t("td",{staticClass:"fixed-col right"},[t("div",{staticClass:"w-full h-full grid place-items-center text-red-600"},[t("el-dropdown",[t("button",{staticClass:"el-dropdown-link px-3 cursor-pointer"},[t("ellipsis-icon-vertical-icon",{staticStyle:{fill:"grey"}})],1),e._v(" "),t("el-dropdown-menu",{staticClass:"table-menu-dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},[t("ul",{staticClass:"min-w-[150px]"},[t("li",{staticClass:"dropdown-item"},[t("span",{on:{click:function(t){return e.showShareCompanyFileFunc(n)}}},[e._v("Share")])]),e._v(" "),t("li",{staticClass:"dropdown-item",on:{click:function(t){return e.showRemoveCompanyFileFunc(n)}}},[t("span",[e._v("Remove")])])])])],1)],1)])])})),0)])],1),e._v(" "),t("FilePagination",{attrs:{totalFile:e.totalFile},on:{setPage:e.setPage}}),e._v(" "),t("upload-document-modal",{model:{value:e.showUploadDocumentModal,callback:function(t){e.showUploadDocumentModal=t},expression:"showUploadDocumentModal"}}),e._v(" "),t("RemoveCompanyFile",{attrs:{userFile:e.userFile},on:{refresh:e.setRefresh},model:{value:e.showRemoveCompanyFiles,callback:function(t){e.showRemoveCompanyFiles=t},expression:"showRemoveCompanyFiles"}}),e._v(" "),t("share-files-modal",{attrs:{userFile:e.userFile},on:{refresh:e.setRefresh,qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.userFile},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}})],1)}),[],!1,null,null,null);t.default=component.exports},653:function(e,t,n){"use strict";n.r(t);var r=n(0).default.extend({name:"CloudIcon"}),o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",viewBox:"0 0 47 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M38.224 13.1247C37.7214 10.1383 36.2427 7.41286 33.9812 5.3446C31.4684 3.0444 28.2017 1.77832 24.7997 1.77832C22.1709 1.77832 19.6097 2.53217 17.4158 3.95288C15.5892 5.13198 14.0718 6.72666 12.9991 8.60162C12.5352 8.51464 12.0519 8.46631 11.5687 8.46631C7.46117 8.46631 4.11717 11.8103 4.11717 15.9178C4.11717 16.4494 4.17516 16.9616 4.27181 17.4642C1.61401 19.3971 0 22.5092 0 25.8242C0 28.5013 0.995467 31.1011 2.81244 33.1597C4.67773 35.2666 7.14223 36.5134 9.77104 36.6583C9.80003 36.6583 9.81936 36.6583 9.84836 36.6583H18.16C18.8849 36.6583 19.4648 36.0784 19.4648 35.3536C19.4648 34.6287 18.8849 34.0488 18.16 34.0488H9.88702C5.93414 33.8072 2.60948 30.0476 2.60948 25.8145C2.60948 23.0794 4.07852 20.5279 6.44637 19.1458C6.99726 18.8269 7.22922 18.16 7.01659 17.5608C6.8233 17.0389 6.72665 16.488 6.72665 15.8985C6.72665 13.231 8.90121 11.0565 11.5687 11.0565C12.1389 11.0565 12.6995 11.1531 13.2213 11.3464C13.8592 11.5784 14.5647 11.2884 14.8547 10.6795C16.662 6.84264 20.5665 4.36847 24.8094 4.36847C30.5115 4.36847 35.2183 8.64028 35.7595 14.3038C35.8175 14.8934 36.2621 15.3669 36.8419 15.4636C41.1427 16.1981 44.3901 20.1703 44.3901 24.7031C44.3901 29.5064 40.6112 33.6816 35.9528 34.0392H28.8299C28.105 34.0392 27.5251 34.6191 27.5251 35.3439C27.5251 36.0688 28.105 36.6487 28.8299 36.6487H36.0011C36.0301 36.6487 36.0591 36.6487 36.0978 36.6487C39.0455 36.436 41.7999 35.083 43.8489 32.8214C45.8881 30.5792 46.9996 27.6991 46.9996 24.7031C46.9899 19.2811 43.2883 14.4584 38.224 13.1247Z"}}),e._v(" "),t("path",{attrs:{d:"M31.333 27.0608C31.8453 26.5486 31.8453 25.7271 31.333 25.2148L24.4227 18.3046C24.1811 18.0629 23.8429 17.918 23.5046 17.918C23.1663 17.918 22.8281 18.0533 22.5864 18.3046L15.6762 25.2148C15.1639 25.7271 15.1639 26.5486 15.6762 27.0608C15.9274 27.3121 16.2657 27.4474 16.5943 27.4474C16.9229 27.4474 17.2612 27.3218 17.5125 27.0608L22.1999 22.3734V43.9161C22.1999 44.6409 22.7797 45.2208 23.5046 45.2208C24.2295 45.2208 24.8093 44.6409 24.8093 43.9161V22.3734L29.4967 27.0608C29.9993 27.573 30.8208 27.573 31.333 27.0608Z"}})])}),[],!1,null,null,null);t.default=component.exports},660:function(e,t,n){"use strict";n.r(t);var r=n(0).default.extend({name:"EllipsisIconVerticalIcon"}),o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"4",height:"17",viewBox:"0 0 4 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("ellipse",{attrs:{cx:"1.99991",cy:"1.70001",rx:"1.99991",ry:"1.70001"}}),e._v(" "),t("ellipse",{attrs:{cx:"1.99991",cy:"8.50079",rx:"1.99991",ry:"1.70001"}}),e._v(" "),t("ellipse",{attrs:{cx:"1.99991",cy:"15.2996",rx:"1.99991",ry:"1.70001"}})])}),[],!1,null,null,null);t.default=component.exports},683:function(e,t,n){"use strict";n.r(t);var r={},o=n(1),component=Object(o.a)(r,(function(){var e=this._self._c;return e("svg",{staticClass:"fill-current",attrs:{width:"20",height:"21",viewBox:"0 0 20 21",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1311)"}},[e("path",{attrs:{d:"M19.9284 5.47032C19.9177 5.36223 19.8756 5.25375 19.8017 5.16351C19.7731 5.12861 20.0651 5.42289 15.444 0.801742C15.3338 0.691583 15.1843 0.633751 15.0384 0.633789C14.6907 0.633789 2.42726 0.633789 2.08088 0.633789C1.13245 0.633789 0.36084 1.4054 0.36084 2.35383V18.484C0.36084 19.4325 1.13245 20.2041 2.08088 20.2041H18.2111C19.1595 20.2041 19.9311 19.4325 19.9311 18.484C19.9312 4.56367 19.9327 5.51428 19.9284 5.47032ZM13.5479 1.78049V5.52636C13.5479 5.8425 13.2907 6.09971 12.9745 6.09971H12.2483V1.78049H13.5479ZM11.1016 1.78049V6.09971H5.78857C5.47243 6.09971 5.21522 5.8425 5.21522 5.52636V1.78049H11.1016ZM13.5479 12.9034H5.21522V12.1772C5.21522 11.8611 5.47243 11.6038 5.78857 11.6038H12.9745C13.2907 11.6038 13.5479 11.8611 13.5479 12.1772V12.9034ZM5.21522 19.0574V14.0501H13.5479V19.0574H5.21522ZM18.7845 18.484C18.7845 18.8002 18.5273 19.0574 18.2111 19.0574H14.6946C14.6946 18.3099 14.6946 13.0293 14.6946 12.1772C14.6946 11.2288 13.923 10.4572 12.9745 10.4572H5.78857C4.84014 10.4572 4.06853 11.2288 4.06853 12.1772V19.0574H2.08092C1.76478 19.0574 1.50757 18.8002 1.50757 18.484V2.35383C1.50757 2.03769 1.76478 1.78049 2.08092 1.78049H4.06853V5.52636C4.06853 6.47479 4.84014 7.2464 5.78857 7.2464H12.9745C13.923 7.2464 14.6946 6.47479 14.6946 5.52636V1.78049H14.8011L18.7845 5.76388V18.484Z"}})])])}),[],!1,null,null,null);t.default=component.exports},740:function(e,t,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("4d131c3c",content,!0,{sourceMap:!1})},758:function(e,t,n){"use strict";n.r(t);n(418);var r=n(60),o={name:"filePagination",props:{setPage:{type:Function},totalFile:{}},data:function(){return{returnedDataPage:0,eachPageTotal:10}},components:{ArrowDownIcon:r.default},methods:{buttonFilePage:function(e){this.returnedDataPage=this.eachPageTotal*(e-1),this.$emit("setPage",this.returnedDataPage)}},watch:{returnedDataPage:function(){}},computed:{availablePages:function(){return Math.floor(this.totalFile/this.eachPageTotal)>5?Math.floor(this.totalFile/this.eachPageTotal):Math.floor(this.totalFile/this.eachPageTotal)+2},arrayPages:function(){for(var e=[],i=1;i<this.availablePages;i++)e.push(i);return e}}},l=(n(759),n(1)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.totalFile>e.eachPageTotal?t("div",{staticClass:"grid place-items-center py-5"},[t("div",[t("paginate",{attrs:{"page-count":e.arrayPages.length+1,"click-handler":e.buttonFilePage,"prev-text":"&#8249;","next-text":"&#8250;","container-class":"paginate","page-class":"page-item"}})],1)]):e._e()}),[],!1,null,"b8bb5c98",null);t.default=component.exports},759:function(e,t,n){"use strict";n(740)},760:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".page-item[data-v-b8bb5c98]{background:red!important}.pagination-arrow-left[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(90deg)}.pagination-arrow-right[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(-90deg)}",""]),r.locals={},e.exports=r},767:function(e,t,n){var content=n(970);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("0d7b12a9",content,!0,{sourceMap:!1})},778:function(e,t,n){var content=n(995);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("0580aa55",content,!0,{sourceMap:!1})},969:function(e,t,n){"use strict";n(767)},970:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".file-ledger-table[data-v-5a0da85a]{--background:#fff;width:100%;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;border-collapse:separate;border-spacing:0;}.file-ledger-table tr[data-v-5a0da85a]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));transition:all .2s ease-in-out;}.file-ledger-table tr.highlight[data-v-5a0da85a]{--background:rgba(233,254,219,0.46)}.file-ledger-table th[data-v-5a0da85a]{padding-top:2rem;padding-bottom:0.75rem;}@media (min-width: 640px){.file-ledger-table th[data-v-5a0da85a]{font-size:12px;}}@media (min-width: 768px){.file-ledger-table th[data-v-5a0da85a]{font-size:1rem;line-height:1.5rem;}}.file-ledger-table th[data-v-5a0da85a]{background:var(--background)}.file-ledger-table td[data-v-5a0da85a]{padding-top:0.75rem;padding-bottom:0.75rem;}@media (min-width: 640px){.file-ledger-table td[data-v-5a0da85a]{font-size:12px;}}@media (min-width: 768px){.file-ledger-table td[data-v-5a0da85a]{font-size:1rem;line-height:1.5rem;}}.file-ledger-table td[data-v-5a0da85a],.file-ledger-table th[data-v-5a0da85a]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));padding-left:0.5rem;padding-right:0.5rem;transition:all .2s ease-in-out;background:var(--background);}.file-ledger-table td[data-v-5a0da85a]:first-child,.file-ledger-table th[data-v-5a0da85a]:first-child{padding-left:1.25rem;}.file-ledger-table td[data-v-5a0da85a]:last-child,.file-ledger-table th[data-v-5a0da85a]:last-child{padding-right:1.25rem;}.file-ledger-table td.fixed-col[data-v-5a0da85a],.file-ledger-table th.fixed-col[data-v-5a0da85a]{position:sticky;background:#fff;background:var(--background);}.file-ledger-table td.fixed-col.left[data-v-5a0da85a],.file-ledger-table th.fixed-col.left[data-v-5a0da85a]{left:-.1px}.file-ledger-table td.fixed-col.right[data-v-5a0da85a],.file-ledger-table th.fixed-col.right[data-v-5a0da85a]{right:-.1px}",""]),r.locals={},e.exports=r},982:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(652),l=r.default.extend({components:{TreeIcon:o.default},props:{isPaidUser:Boolean},name:"EmptyFileLedger"}),d=(n(969),n(1)),component=Object(d.a)(l,(function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"bg-white rounded-3xl px-1 sm:px-5 py-0 sm:py-10 grid place-items-center text-[#272727] position-relative"},[t("span",{staticClass:"block w-full text-center py-4"},[e._v("\n     No file found\n  ")])])}],!1,null,"5a0da85a",null);t.default=component.exports},991:function(e,t,n){"use strict";var r=n(158),o=n(159),l=(n(31),n(77),function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getDateString",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Date(e);return n.toLocaleDateString("en-US",t)}},{key:"getFormattedTime",value:function(e){var t=new Date(e),n=t.getHours(),r=t.getMinutes(),o=n>=12?"PM":"AM";return"".concat("0".concat(n>=12?n%12:n).slice(-2),":").concat("0".concat(r).slice(-2)," ").concat(o)}}]),e}()),d=new l;t.a=d},994:function(e,t,n){"use strict";n(778)},995:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,"*[data-v-ae391d90] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-ae391d90] .el-dialog__header{padding-bottom:20px;display:none}*[data-v-ae391d90] .el-dialog__footer,*[data-v-ae391d90] .el-dialog__header{text-align:left!important;background:#dbe9d2}*[data-v-ae391d90] .el-dialog__body{background:#dbe9d2}*[data-v-ae391d90] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},e.exports=r},998:function(e,t,n){var content=n(1121);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("eb591dc8",content,!0,{sourceMap:!1})},999:function(e,t,n){var content=n(1123);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("3f5f498c",content,!0,{sourceMap:!1})}}]);