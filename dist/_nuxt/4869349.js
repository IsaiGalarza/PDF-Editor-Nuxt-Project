(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1328:function(e,t,n){var content=n(1589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("e2681cb0",content,!0,{sourceMap:!1})},1588:function(e,t,n){"use strict";n(1328)},1589:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,".color-white[data-v-4423bbe8]{fill:#fff!important}*[data-v-4423bbe8] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-4423bbe8] .el-dialog__header{padding-bottom:20px}*[data-v-4423bbe8] .el-dialog__footer,*[data-v-4423bbe8] .el-dialog__header{text-align:left!important}*[data-v-4423bbe8] .el-dialog__body{background:#fcfcfd}*[data-v-4423bbe8] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},1752:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(18),n(91),n(35),n(7),n(0)),l=n(42),c=n(65),d=n(66),f=n(67),h=n(204),m=n(205),w=n(208),v=n(206),x=n(157),y=(n(418),r.default.extend({name:"edit-company-folder",components:{SpinnerDottedIcon:l.default,FacebookIcon:c.default,TwitterIcon:d.default,EnvelopeIcon:f.default,PlusIcon:h.default,LinkIcon:m.default,EnvelopeIconShare:w.default,QrcodeIcon:v.default,QrcodeShare:x.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{type:Object},userInfo:{type:Object},link:{type:String},visible:{type:Boolean,default:!1}},data:function(){return{showQrcodeFiles:!1,folderTextareaData:"",showModal:!1,showQrcode:!1,email:"",loading:!1,twiterLink:"",inputs:[{value:""}],generateFileProperty:{},proceedToRequest:!0,generatedFile:{}}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)},userFile:function(){}},mounted:function(){this.showModal=this.visible},computed:{qrcodeLink:function(){return this.link},emailWithLink:function(){return null==this.link}},methods:{addEmailinputs:function(){this.inputs.push({value:""})},setTwitterShare:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.patch("/files/".concat(e.userFile.id),{shared:"twitter"});case 2:return t.next=4,e.$emit("refresh");case 4:window.open(e.link||"https://twitter.com/intent/tweet?url=".concat(window.location.origin,"/pdf/").concat(e.userFile.paperLink));case 5:case"end":return t.stop()}}),t)})))()},setFacebookShare:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.patch("/files/".concat(e.userFile.id),{shared:"facebook"});case 2:e.$emit("refresh"),window.open(e.link||"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.origin,"/pdf/").concat(e.userFile.paperLink)),e.$emit("refresh");case 5:case"end":return t.stop()}}),t)})))()},setLinkCopy:function(){navigator.clipboard.writeText(this.link),this.$notify.success({message:"copied successfully"})},showQrcodeFileFuncEmit:function(){this.$emit("qrLoad"),this.$emit("updateVisibility",!1)},closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null==e||e.preventDefault(),t.loading=!0,r={action:"invite_link",emails:[t.email],link:"".concat(window.location.origin,"/").concat(null===(o=t.userInfo)||void 0===o?void 0:o.businessPage)},t.$_server.post("/request",r).then((function(e){t.$notify.success({title:"Request",message:"Request sent Successfully"}),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.$nuxt.refresh(),t.folderTextareaData="",t.inputs=[0]})).catch((function(e){t.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()}}})),k=(n(1588),n(1)),component=Object(k.a)(y,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Share")]),e._v(" "),t("div",{staticClass:"w-full text-center font-semibold py-2 pt-3 text-paperdazgreen-250"})]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("form",{ref:"form"},[t("div",{staticClass:"text-centerfont-medium flex justify-between item mx-auto mb-4 whitespace-none"},[t("p",{staticClass:"w-full"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"py-2 focus:border-paperdazgray-500 px-4 w-full mb-2 rounded-md border-[1px] border-paperdazgray-500",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-full text-white rounded shadow bg-paperdazgreen-400",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n           Send\n           "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])]),e._v(" "),t("div",{staticClass:"w-full flex justify-around pt-6 items-center py-4"},[t("button",{staticClass:"w-[40%] flex bg-paperdazgray-300/20 items-center py-2 px-2 rounded",on:{click:e.setLinkCopy}},[t("link-icon",{staticClass:"cursor-pointer",attrs:{width:"20",height:"20",color:"rgb(96,98,102)"}}),e._v(" "),t("abbr",{staticClass:"pl-2"},[e._v("Copy link")])],1),e._v(" "),t("button",{staticClass:"w-[40%] flex bg-paperdazgray-300/20 items-center py-2 px-2 rounded",on:{click:function(t){e.showQrcode=!0}}},[t("qrcode-icon",{staticClass:"cursor-pointer",attrs:{width:"20",height:"20"}}),e._v(" "),t("abbr",{staticClass:"pl-2"},[e._v("Open QR")])],1)]),e._v(" "),t("QrcodeShare",{attrs:{link:e.qrcodeLink},model:{value:e.showQrcode,callback:function(t){e.showQrcode=t},expression:"showQrcode"}})],1)}),[],!1,null,"4423bbe8",null);t.default=component.exports}}]);