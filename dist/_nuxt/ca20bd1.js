(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1008:function(t,e,n){"use strict";n(785)},1009:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-2ec95d11] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-2ec95d11] .el-dialog__header{padding:0}*[data-v-2ec95d11] .el-dialog__footer,*[data-v-2ec95d11] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-2ec95d11] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1010:function(t,e,n){"use strict";n(786)},1011:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.tab-container[data-v-2ec95d11]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-2ec95d11]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-2ec95d11]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-2ec95d11]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-2ec95d11]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),o.locals={},t.exports=o},1081:function(t,e,n){var content=n(1299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3bf149f8",content,!0,{sourceMap:!1})},1298:function(t,e,n){"use strict";n(1081)},1299:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-63f9470f] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-63f9470f] .el-dialog__header{padding-bottom:20px}*[data-v-63f9470f] .el-dialog__footer,*[data-v-63f9470f] .el-dialog__header{text-align:left!important}*[data-v-63f9470f] .el-dialog__body{background:#fcfcfd}*[data-v-63f9470f] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1326:function(t,e,n){"use strict";n.r(e);n(25),n(48),n(35),n(78),n(43),n(30),n(54),n(24),n(55);var o=n(6),r=n(3),l=(n(18),n(36),n(7),n(279),n(76),n(42)),c=n(770),d=n(14),f=(n(1022),n(202)),h=n(59),v=n(420),m=n(421),x=n(798),w=n(834),y=(n(1342),n(976)),_=n.n(y),C=n(977),k=n.n(C);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I=Object(d.a)(c.a).extend({name:"PublishPdfModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:f.default,DrawOrTypeModal:x.default,AddToPageDrawOrType:w.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},tools:{type:Array},file:{type:Object},startGeneratePdf:{type:Function},successFileFunction:{type:Function},trackSubmitTools:{type:Function}},computed:{signature:function(){var t;return(null===(t=this.$auth.user)||void 0===t?void 0:t.signatureURL)||k.a},initial:function(){var t;return(null===(t=this.$auth.user)||void 0===t?void 0:t.initialURL)||_.a},pdfOffsetY:function(){return this.$store.state.pdfOffset_y*this.$store.state.pdfScale},pdfOffsetX:function(){return this.$store.state.pdfOffset_x*this.$store.state.pdfScale},ledgerInfo:function(){var t,e,n,o,r,l,c,d;return{userId:null!==(t=null===(e=this.$auth)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.id)&&void 0!==t?t:this.file.userId,fileName:null===(o=this.file)||void 0===o?void 0:o.fileName,action:null===(r=this.file)||void 0===r?void 0:r.fileAction,fileId:null===(l=this.file)||void 0===l?void 0:l.id,fileOwnerId:null===(c=this.file)||void 0===c?void 0:c.userId,fileOwner:0,isGuest:!(null===(d=this.$store.getters)||void 0===d||!d.getFillAsGuest)}},isSign:function(){return this.file.fileAction==h.a.SIGNED},isConfirm:function(){return String(this.file.fileAction).toLowerCase()===h.a.CONFIRM},isCreator:function(){var t,e,n,o,r,l;return!this.$store.getters.getFrombusinessPage&&(this.file.userId==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)||(null===(n=this.$auth)||void 0===n||null===(o=n.user)||void 0===o?void 0:o.teamAccess)==m.a.COMPANY_FILE&&(null===(r=this.$auth)||void 0===r||null===(l=r.user)||void 0===l?void 0:l.teamId)==this.file.userId)},signLabel:function(){var t,e,n,o=new Date;return"P".concat(this.convertToDoubleString(o.getUTCMonth()+1)).concat(this.convertToDoubleString(o.getUTCDate())).concat(this.convertToDoubleString(o.getFullYear())).concat(this.convertToDoubleString(o.getUTCHours())).concat(this.convertToDoubleString(o.getUTCMinutes())).concat(null===(t=(null===(e=this.$auth.user)||void 0===e?void 0:e.firstName)||"")||void 0===t?void 0:t.charAt(0)).concat(((null===(n=this.$auth.user)||void 0===n?void 0:n.lastName)||"").charAt(0)).toUpperCase()},confirmAnnotation:function(){var t,e,n,o,r,l,c,d,f=new Date;return{signaturePath:null!==(t=this.$store.getters.getUserSignature)&&void 0!==t?t:null===(e=this.$auth)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.signatureURL,text:"P".concat(f.getFullYear()).concat(this.convertToDoubleString(f.getUTCDate())).concat(this.convertToDoubleString(f.getUTCDay())).concat(this.convertToDoubleString(f.getUTCHours())).concat(this.convertToDoubleString(f.getUTCMinutes())).concat(null===(o=(null===(r=this.$auth.user)||void 0===r?void 0:r.firstName)||"")||void 0===o?void 0:o.charAt(0)).concat(null===(l=(null===(c=this.$auth.user)||void 0===c?void 0:c.lastName)||"")||void 0===l?void 0:l.charAt(0)).toUpperCase(),fileAction:null===(d=this.file)||void 0===d?void 0:d.fileAction}}},data:function(){return{showModal:!1,isLoading:!1,base64:null,proceedToSendEmail:!1,generatedPdf:{},showInitialModal:!1,nonUserRecieveEmail:!1,externalGuestEmail:void 0}},watch:{"$store.getters.getUserSignature":function(){this.showInitialModal=!1,this.isConfirm&&this.onSubmit()},visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},"$auth.user":function(){var t,e;this.convertImageToBase64(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.signatureURL)}},mounted:function(){this.showModal=this.visible},methods:{imageExportedLocal:function(image,t){this.$BUS.$emit("signature-update",image),this.imageExported(image,t)},confirmCheckedTools:function(){return this.tools.filter((function(t,e){return 0==t.isChecked})).length>0},convertToDoubleString:function(t){return Number(t)<10?"0".concat(t):t},convertImageToBase64:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return o=n.sent,n.next=5,o.blob();case 5:r=n.sent,(l=new FileReader).readAsDataURL(r),l.onloadend=function(){var t=l.result;e.base64=t};case 9:case"end":return n.stop()}}),n)})))()},addToLedger:function(){var t=this;this.$_server.post("/ledger",T({},this.ledgerInfo)).then((function(){t.proceedToSendEmail=!0,t.publishAsGuest()})).catch((function(){t.$notify.error({message:"Error occcured, could not send file"})}))},appendConfirmSign:function(){},confirmAllSignAndInitials:function(){var t,e,n,o;return(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)==(null===(n=this.file)||void 0===n?void 0:n.userId)||Object(v.a)(null===(o=this.file)||void 0===o?void 0:o.downloadLink)[0].data.filter((function(t){return t.hasOwnProperty("uploaded")&&null==t.uploaded})).length<1},confirmRequest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$_server.post("/pdf-generator",T({},Object(v.a)({downloadLink:null===(n=t.file)||void 0===n?void 0:n.downloadLink,file:t.confirmAnnotation,pdfOffset_y:t.pdfOffsetY,pdfOffset_x:t.pdfOffsetX,signLabel:t.signLabel})[0])).then((function(e){t.generatedPdf=e.data,t.addToLedger()})).catch((function(){})).finally((function(){t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},otherRequest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$_server.post("/pdf-generator",T({},Object(v.a)({downloadLink:null===(n=t.file)||void 0===n?void 0:n.downloadLink,pdfOffset_y:t.pdfOffsetY,pdfOffset_x:t.pdfOffsetX,signLabel:t.signLabel})[0])).then((function(e){t.addToLedger(),t.generatedPdf=e.data})).catch((function(){t.$notify.error({message:"Error occcured, could not save file"})})).finally((function(){t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},sendPdfToEmail:function(t){var e,n,o,r,l,c,d=this,f={email:this.externalGuestEmail,action:"owner"==t?null===(e=this.file)||void 0===e?void 0:e.fileAction:"shareFileToGuest",userId:null!==(n=null===(o=this.$auth)||void 0===o||null===(r=o.user)||void 0===r?void 0:r.id)&&void 0!==n?n:0,editedFileLink:null===(l=this.generatedPdf)||void 0===l?void 0:l.downloadLink,fileId:null===(c=this.file)||void 0===c?void 0:c.id};try{this.$_server.post("/request",f).then((function(){var t,e;d.$store.commit("SET_PDF_EXIT",!0),d.toggleToast({active:!0,msg:"Thank you for completing a Paperlink!"}),d.$store.commit("SET_FILE_SIGNATURE",null),d.$store.commit("SET_FILE_INITIAL",null),d.$store.commit("UN_SET_AGREE_SIGN"),d.$auth.loggedIn&&d.isCreator?d.$nuxt.$router.push("/paperlink-pages"):d.$nuxt.$router.push("/".concat(null===(t=d.file)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.businessPage))}))}catch(t){this.$notify.error({title:"Request",message:"Request Failed"})}finally{this.closeModal(),this.isLoading=!1,this.proceedToSendEmail=!1}},allowLoadingAllAnnotations:function(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))},publishAsGuest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.proceedToSendEmail){e.next=15;break}e.t0=null===(n=t.file)||void 0===n?void 0:n.fileAction,e.next=e.t0===h.a.CONFIRM?4:e.t0===h.a.SIGNED?7:e.t0===h.a.COMPLETE?10:13;break;case 4:return e.next=6,t.confirmRequest();case 6:return e.abrupt("break",13);case 7:return e.next=9,t.otherRequest();case 9:return e.abrupt("break",13);case 10:return e.next=12,t.otherRequest();case 12:return e.abrupt("break",13);case 13:e.next=17;break;case 15:t.sendPdfToEmail("owner"),t.sendPdfToEmail("guest");case 17:case"end":return e.stop()}}),e)})))()},publishAsCreator:function(){var t,e,n,o=this,r=this.tools.filter((function(t){return 1!=t.isDeleted}));this.$axios.patch("/files/".concat(null===(t=this.file)||void 0===t?void 0:t.id),{fileAction:null===(e=this.file)||void 0===e?void 0:e.fileAction,annotaions:JSON.stringify(r),filePrivacy:null===(n=this.file)||void 0===n?void 0:n.filePrivacy}).then((function(){o.$notify.success({message:"File publish successfully"}),o.closeModal(),o.$store.commit("SET_PDF_EXIT",!0),o.$nuxt.$router.push("/paperlink-pages")})).catch((function(){o.$notify.error({message:"Error occcured, could not save file"})})).finally((function(){o.isLoading=!1}))},closeModal:function(){this.$emit("updateVisibility",!1)},successAction:function(){this.$emit("successFileFunction"),this.closeModal()},onSubmit:function(){var t,e,n=this;this.confirmAllSignAndInitials()?this.isCreator||null!==(t=this.$auth.user)&&void 0!==t&&t.signatureURL||this.$store.getters.getUserSignature||(null===(e=this.file)||void 0===e?void 0:e.fileAction)!=h.a.CONFIRM?(this.$emit("startGeneratePdf",!0),this.appendConfirmSign(),this.isLoading=!0,this.isCreator||this.proceedToSendEmail?this.publishAsCreator():(this.$notify.info({message:"Pdf generating.....",duration:7e3}),this.allowLoadingAllAnnotations(6e3).then((function(){n.publishAsGuest(),n.$emit("startGeneratePdf",!1)}))),this.$emit("trackSubmitTools",this.tools)):this.showInitialModal=!0:this.$notify.error({message:"Input all signs and initial to save"})}}}),E=(n(1298),n(1)),component=Object(E.a)(I,(function(){var t,e,n,o,r,l=this,c=l._self._c;l._self._setupProxy;return c("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:l.showModal,"close-on-click-modal":!1,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){l.showModal=t}},scopedSlots:l._u([{key:"title",fn:function(){return[l.isCreator?l._e():c("h4",{staticClass:"text-center font-semibold text-2xl text-gray-800 pb-2"},[l._v("\n      All Done?\n    ")])]},proxy:!0}])},[c("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[c("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return l.closeModal()}}},[c("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),l._v(" "),l._v(" "),l.nonUserRecieveEmail?c("div",[c("p",{staticClass:"w-full text-center"},[l._v("Enter email copy to be sent to.")]),l._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:l.externalGuestEmail,expression:"externalGuestEmail"}],staticClass:"py-2 w-full rounded my-3 border-[1px] border-gray-200 px-2",attrs:{type:"text",placeholder:"--Enter email--"},domProps:{value:l.externalGuestEmail},on:{input:function(t){t.target.composing||(l.externalGuestEmail=t.target.value)}}}),l._v(" "),c("p",{staticClass:"flex justify-center"},[c("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400 ml-1",attrs:{disabled:l.isLoading},on:{click:l.onSubmit}},[c("span",{staticClass:"inline-flex gap-1 items-center"},[l._v("\n          Send\n          "),c("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:l.isLoading,expression:"isLoading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])]):c("div",[l.isConfirm?c("div",{staticClass:"flex justify-center pb-2"},[c("CheckedFillIcon",{attrs:{width:"90"}})],1):l._e(),l._v(" "),l.isCreator?c("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 mb-6 text-[16px] break-normal"},[l._v("Publish file as\n      "),c("span",{staticClass:"capitalize"},[l._v("\n        "+l._s(l.file.fileAction+" & "+l.file.filePrivacy.replace("p","P")+"?"))])]):l._e(),l._v(" "),!l.isCreator&&l.$auth.loggedIn?c("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px] mb-6"},[l._v("\n      If so, we will send a copy to your email.\n    ")]):l._e(),l._v(" "),c("div",{staticClass:"flex justify-around mt-0"},[c("button",{staticClass:"h-10 text-xs w-[150px] max-w-[50%] rounded-lg shadow border-[#D9251E] mr-1",class:l.isConfirm?"bg-zinc-500 border-[0px] text-white":"bg-white border-[1px] text-[#D9251E]",attrs:{type:"button",disabled:l.isLoading},on:{click:function(t){return l.closeModal()}}},[l._v("\n        "+l._s(l.isCreator?"Cancel":"Back")+"\n      ")]),l._v(" "),c("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400 ml-1",attrs:{disabled:l.isLoading},on:{click:l.onSubmit}},[c("span",{staticClass:"inline-flex gap-1 items-center"},[l._v("\n          Yes\n          "),c("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:l.isLoading,expression:"isLoading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])]),l._v(" "),!l.isCreator&&null!==(t=l.$store.getters)&&void 0!==t&&t.getFillAsGuest&&null!==(e=l.file)&&void 0!==e&&null!==(n=e.user)&&void 0!==n&&n.allowCopy?c("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px] pt-4"},[c("input",{directives:[{name:"model",rawName:"v-model",value:l.nonUserRecieveEmail,expression:"nonUserRecieveEmail"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(l.nonUserRecieveEmail)?l._i(l.nonUserRecieveEmail,null)>-1:l.nonUserRecieveEmail},on:{change:function(t){var e=l.nonUserRecieveEmail,n=t.target,o=!!n.checked;if(Array.isArray(e)){var r=l._i(e,null);n.checked?r<0&&(l.nonUserRecieveEmail=e.concat([null])):r>-1&&(l.nonUserRecieveEmail=e.slice(0,r).concat(e.slice(r+1)))}else l.nonUserRecieveEmail=o}}}),l._v(" Click here if\n      you want a copy\n    ")]):l._e()]),l._v(" "),c("draw-or-type-modal",{attrs:{src:(null===(o=l.$auth)||void 0===o||null===(r=o.user)||void 0===r?void 0:r.signatureURL)||" ","use-default-button":""},on:{"image-exported":function(t){return l.imageExportedLocal(t,!0)}},model:{value:l.showInitialModal,callback:function(t){l.showInitialModal=t},expression:"showInitialModal"}})],1)}),[],!1,null,"63f9470f",null);e.default=component.exports},770:function(t,e,n){"use strict";var o=n(3),r=(n(18),n(7),n(805),n(806),n(807),n(808),n(809),n(810),n(811),n(812),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(37));e.a={data:function(){return{fetchDataSign:{},fetchDataInitial:{}}},mounted:function(){this.getUserSignatureToBlob()},mixins:[r.a],methods:{getUserSignatureToBlob:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null===(o=null===(n=t.$auth)||void 0===n?void 0:n.user)||void 0===o?void 0:o.signatureURL).then((function(t){return t.blob()}));case 2:return t.fetchDataSign=e.sent,e.next=5,fetch(null===(l=null===(r=t.$auth)||void 0===r?void 0:r.user)||void 0===l?void 0:l.initialURL).then((function(t){return t.blob()}));case 5:t.fetchDataInitial=e.sent;case 6:case"end":return e.stop()}}),e)})))()},dataURIToBlob:function(t){var e=t.split(",");if(!(e.length<1)){for(var n=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),o=e[0].split(":")[1].split(";")[0],r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return new Blob([r],{type:o})}},imageExported:function(image,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.dataURIToBlob(image).size!=e.fetchDataSign.size){n.next=4;break}return n.abrupt("return");case 4:if(e.dataURIToBlob(image).size!=e.fetchDataInitial.size){n.next=6;break}return n.abrupt("return");case 6:if((c=new FormData).append("upload",e.dataURIToBlob(image)),c.append("type",t?"signature":"initial"),c.append("userId",null===(l=null===(r=e.$auth||{})||void 0===r?void 0:r.user)||void 0===l?void 0:l.id),t?e.$store.commit("SET_FILE_SIGNATURE",image):e.$store.commit("SET_FILE_INITIAL",image),e.$auth.loggedIn){n.next=13;break}return n.abrupt("return");case 13:e.$axios.$post("/files",c).then(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.filterUsers();case 2:e.$notify.success({title:t?"Signature":"Initials",message:"Your ".concat(t?"signature":"initials"," has been uploaded")});case 3:case"end":return n.stop()}}),n)})))).catch((function(n){e.$notify.error({title:t?"Signature":"Initials",message:n.message||"Error uploading ".concat(t?"signature":"initials")})}));case 14:case"end":return n.stop()}}),n)})))()}}}},785:function(t,e,n){var content=n(1009);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("153d49ea",content,!0,{sourceMap:!1})},786:function(t,e,n){var content=n(1011);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("872ba740",content,!0,{sourceMap:!1})},834:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(18),n(284),n(7),n(0)),l=n(799),c=n(973),d=r.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:l.default},{label:"Type",value:"type",component:c.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return n=e.sent,e.next=5,n.blob();case 5:o=e.sent,(r=new FileReader).readAsDataURL(o),r.onloadend=function(){var e=r.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 3:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault)this.forceDisplaySrc=!1;else{var t=this.$refs.activeTabComponent;t&&t.clear()}},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),f=(n(1008),n(1010),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(n){return e("button",{key:n.value,staticClass:"tab-button",class:{active:t.activeTab===n.value},on:{click:function(e){t.activeTab=n.value}}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"EDIT":"CLEAR")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault&&t.useDefaultButton,expression:"displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.displayDefault?"Signature":"Initial"))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"2ec95d11",null);e.default=component.exports},976:function(t,e,n){t.exports=n.p+"img/initials.2253fb2.png"},977:function(t,e,n){t.exports=n.p+"img/sign.10a8143.png"}}]);