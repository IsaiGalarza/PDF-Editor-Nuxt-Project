(window.webpackJsonp=window.webpackJsonp||[]).push([[229,45,122],{1047:function(e,t,n){"use strict";n(964)},1048:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,".icon-container[data-v-d6c06af2]{display:flex}.icon-container button[data-v-d6c06af2]{margin-right:0em;display:flex;width:2rem;justify-content:center;font-size:20px}.arrow-icon[data-v-d6c06af2]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.search-container[data-v-d6c06af2]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.folder-search[data-v-d6c06af2]{width:160px;border-radius:0.375rem;border-width:1.3px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:6px;padding-bottom:6px;padding-left:0.5rem;padding-right:0.5rem;font-size:0.8rem}.heartTopIcon[data-v-d6c06af2]{position:absolute;left:7px;top:-0.25rem;display:grid;width:23px;place-items:center;border-radius:20px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:3px;padding-right:3px;padding-top:1.5px;padding-bottom:1.5px;padding-bottom:0;font-size:9px;font-weight:700;line-height:10px}.heart-icon[data-v-d6c06af2]{transition:.3s}.scale-out[data-v-d6c06af2]{transform:scale(1.4)}",""]),o.locals={},e.exports=o},1108:function(e,t,n){"use strict";n.r(t);n(31),n(278),n(88);var o=n(63),r=n(62),l=n(665),d=n(282),c=n(157),f=n(775),h={name:"sharefileoptions",components:{HeartOutlineIcon:o.default,ShareOutlineIcon:r.default,ForwardOutlineIcon:l.default,ShareFilesModal:d.default,QrcodeShare:c.default,RequestModal:f.default},data:function(){return{isHeart:!1,fillHeartColor:"none",showShareCompanyFiles:!1,showQrcodeFiles:!1,favouriteFileId:null,totalShared:null,showRequestModal:!1,refresh:!1}},props:{file:{}},computed:{isLoggedIn:function(){var e;return null===(e=this.$auth)||void 0===e?void 0:e.loggedIn},user:function(){var e;return(null===(e=this.$auth)||void 0===e?void 0:e.user)||{}}},methods:{shareInDevice:function(){navigator.share&&navigator.share({title:"Paperdaz",url:"".concat(window.location.origin,"/pdf/").concat(this.file.paperLink)}).then((function(){})).catch((function(e){}))},showRequestModalFunc:function(){this.showRequestModal=!0},getFavouriteFile:function(){var e,t,n,o=this;this.$axios.$get("/favourites/?fileId=".concat(null===(e=this.file)||void 0===e?void 0:e.id,"&userId=").concat(null===(t=this.user)||void 0===t?void 0:t.id)).then((function(e){var t;e.data.length>0&&(o.fillHeartColor="#77C360"),o.favouriteFileId=null===(t=e.data[0])||void 0===t?void 0:t.id})),this.$axios.$get("/favourites/?fileId=".concat(null===(n=this.file)||void 0===n?void 0:n.id)).then((function(e){o.totalShared=Number(e.total)}))},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0,this.showShareCompanyFiles=!1},showShareCompanyFilesFunc:function(){this.$auth.loggedIn?this.showShareCompanyFiles=!0:this.shareInDevice()},animateElement:function(e){e.classList.add("scale-out"),setTimeout((function(){e.classList.remove("scale-out")}),300)},setFileFavourite:function(){var e=this;this.animateElement(this.$refs.heart),"none"==this.fillHeartColor?this.$axios.$post("/favourites",{fileId:this.file.id}).then((function(t){e.fillHeartColor="#77C360",e.favouriteFileId=t.id,e.getFavouriteFile()})):this.$axios.$delete("/favourites/".concat(this.favouriteFileId)).then((function(){e.fillHeartColor="none",e.getFavouriteFile()}))},setRefresh:function(){this.refresh=!this.refresh}},mounted:function(){this.getFavouriteFile()}},v=(n(1047),n(1)),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-[#9D9D9D] flex items-right justify-end gap-2"},[t("button",{on:{click:e.showShareCompanyFilesFunc}},[t("share-outline-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("ShareFilesModal",{attrs:{userFile:e.file},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("RequestModal",{attrs:{userFile:e.file},on:{refresh:e.setRefresh,qrLoad:e.showQrcodeFileFunc},model:{value:e.showRequestModal,callback:function(t){e.showRequestModal=t},expression:"showRequestModal"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.file},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}})],1)}),[],!1,null,"d6c06af2",null);t.default=component.exports},665:function(e,t,n){"use strict";n.r(t);var o=n(0).default.extend({name:"ForwardOutlineIcon"}),r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_3848_18912)"}},[t("path",{attrs:{d:"M15.9373 18H2.06239C0.924629 18 0 17.0752 0 15.9376V5.06263C0 3.92487 0.924629 3.00024 2.06239 3.00024H4.68741C4.99791 3.00024 5.24991 3.25224 5.24991 3.56274C5.24991 3.87324 4.99791 4.12523 4.68741 4.12523H2.06239C1.54563 4.12523 1.12499 4.54587 1.12499 5.06263V15.9376C1.12499 16.4542 1.54563 16.875 2.06239 16.875H15.9373C16.4541 16.875 16.8748 16.4542 16.8748 15.9376V9.56259C16.8748 9.25209 17.1268 9.00009 17.4373 9.00009C17.7478 9.00009 17.9998 9.25209 17.9998 9.56259V15.9376C17.9998 17.0752 17.0751 18 15.9373 18Z"}}),e._v(" "),t("path",{attrs:{d:"M5.06167 11.9904C5.02047 11.9904 4.97914 11.9858 4.93794 11.9753C4.68374 11.9161 4.5 11.6985 4.5 11.4376V10.3126C4.5 6.28068 7.78049 3.0002 11.8124 3.0002H11.9999V0.562633C11.9999 0.333158 12.1394 0.126892 12.3524 0.04065C12.5646 -0.0447679 12.8083 0.00686729 12.9674 0.172622L17.8424 5.23507C18.0523 5.4526 18.0523 5.79757 17.8424 6.01509L12.9674 11.0775C12.8083 11.2433 12.5631 11.2944 12.3524 11.2095C12.1394 11.1233 11.9999 10.917 11.9999 10.6875V8.2501H11.1089C8.74947 8.2501 6.62913 9.56103 5.57473 11.6708C5.47791 11.8658 5.27467 11.9904 5.06167 11.9904ZM11.8124 4.12519C8.6624 4.12519 6.054 6.49135 5.67223 9.54002C7.03562 8.01912 8.99089 7.12511 11.1089 7.12511H12.5624C12.8729 7.12511 13.1249 7.37711 13.1249 7.68761V9.29256L16.6565 5.62508L13.1249 1.95761V3.56269C13.1249 3.87319 12.8729 4.12519 12.5624 4.12519H11.8124Z"}})]),e._v(" "),t("defs",[t("clipPath",{attrs:{id:"clip0_3848_18912"}},[t("rect",{attrs:{width:"18",height:"18",fill:"white"}})])])])}),[],!1,null,null,null);t.default=component.exports},745:function(e,t,n){var content=n(771);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("aca428b0",content,!0,{sourceMap:!1})},746:function(e,t){},747:function(e,t){},748:function(e,t){},749:function(e,t){},750:function(e,t){},751:function(e,t){},752:function(e,t){},753:function(e,t){},754:function(e,t){},755:function(e,t){},770:function(e,t,n){"use strict";n(745)},771:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,".color-white[data-v-6e86a2b4]{fill:#fff!important}*[data-v-6e86a2b4] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-6e86a2b4] .el-dialog__header{padding-bottom:20px}*[data-v-6e86a2b4] .el-dialog__footer,*[data-v-6e86a2b4] .el-dialog__header{text-align:left!important}*[data-v-6e86a2b4] .el-dialog__body{background:#fcfcfd}*[data-v-6e86a2b4] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.icons-container button[data-v-6e86a2b4]{display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(119 195 96 / 0.2)}",""]),o.locals={},e.exports=o},775:function(e,t,n){"use strict";n.r(t);n(28),n(32),n(49),n(50);var o=n(6),r=n(3),l=(n(18),n(7),n(21),n(59),n(26),n(279),n(37),n(31),n(0)),d=n(43),c=n(66),f=n(67),h=n(68),v=n(204),m=n(205),w=n(208),x=n(207),y=n(157);n(742),n(283);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=l.default.extend({name:"request-modal",components:{SpinnerDottedIcon:d.default,FacebookIcon:c.default,TwitterIcon:f.default,EnvelopeIcon:h.default,PlusIcon:v.default,LinkIcon:m.default,EnvelopeIconShare:w.default,QrcodeIcon:x.default,QrcodeShare:y.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{type:Object},visible:{type:Boolean,default:!1}},data:function(){return{showQrcodeFiles:!1,folderTextareaData:"",showModal:!1,loading:!1,twiterLink:"",inputs:[0],generateFileProperty:{},proceedToRequest:!0,generatedFile:{}}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{generateAndUploadPdf:function(){},addEmailinputs:function(){var e=!0;Array.from(this.$refs.form.elements).forEach((function(element){"email"!=element.type||element.value.trim()||(e=!1)})),e&&this.inputs.push(this.inputs.length)},showQrcodeFileFuncEmit:function(){this.$emit("qrLoad"),this.$emit("updateVisibility",!1)},closeModal:function(){this.$emit("updateVisibility",!1)},_generatePdf:function(e){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},uploadGeneratedFile:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(Object.keys(t.generateFileProperty).length<1)){n.next=2;break}return n.abrupt("return");case 2:return o={isEditing:!0,downloadLink:e.downloadLink,key:e.key,originalFileId:t.userFile.id,userId:t.$auth.user.id,fileAction:t.userFile.fileAction},n.next=5,t.$axios.$post("/files",F({},o)).then((function(e){t.generatedFile=e})).catch((function(e){t.proceedToRequest=!1}));case 5:case"end":return n.stop()}}),n)})))()},onSubmit:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null==e||e.preventDefault(),t.loading=!0,r={},l=[],Array.from(e.target.elements).forEach((function(element){"email"==element.type&&l.push(element.value)})),r=F(F({action:"referral_link"},r),{},{link:"".concat(window.location.origin,"/pdf/").concat(t.userFile.paperLink),fileId:t.userFile.id,emails:l,note:t.folderTextareaData,userId:null===(o=t.$auth.user)||void 0===o?void 0:o.id}),t.$axios.post("/request",r).then((function(e){console.log("request-res",e),t.$notify.success({title:"Request",message:"Request sent Successfully"}),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.$nuxt.refresh()})).catch((function(e){t.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){t.loading=!1}));case 7:case"end":return n.stop()}}),n)})))()}}}),k=(n(770),n(1)),component=Object(k.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Request")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("div",{staticClass:"text-centerfont-medium flex justify-between item mx-auto mb-4 whitespace-none"},[t("p",{staticClass:"w-[87%]"},e._l(e.inputs,(function(input){return t("input",{key:input,staticClass:"py-2 focus:border-paperdazgray-500 px-4 w-full mb-2 rounded-md border-[1px] border-paperdazgray-500",attrs:{required:"",type:"email",placeholder:"E-mail"}})})),0),e._v(" "),t("button",{staticClass:"w-[35px] h-[35px] rounded-full bg-paperdazgray-500 grid place-content-center",on:{click:function(t){return t.preventDefault(),e.addEmailinputs.apply(null,arguments)}}},[t("span",{staticClass:"text-white text-[30px]"},[e._v("+")])])]),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-4 whitespace-none"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.folderTextareaData,expression:"folderTextareaData"}],staticClass:"w-full py-2 px-4 focus:border-paperdazgray-500 outline-none rounded-md h-28 resize-none border-[1px] border-paperdazgray-500",attrs:{required:"",placeholder:"Note..."},domProps:{value:e.folderTextareaData},on:{input:function(t){t.target.composing||(e.folderTextareaData=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] text-white rounded-xl shadow bg-paperdazgreen-400",attrs:{disabled:e.loading}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n         Send\n          "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])])}),[],!1,null,"6e86a2b4",null);t.default=component.exports},964:function(e,t,n){var content=n(1048);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("6b382482",content,!0,{sourceMap:!1})}}]);