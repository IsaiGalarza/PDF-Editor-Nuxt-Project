(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1039:function(t,e,o){var content=o(1168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("3193e781",content,!0,{sourceMap:!1})},1167:function(t,e,o){"use strict";o(1039)},1168:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".color-white[data-v-24181b6e]{fill:#fff!important}*[data-v-24181b6e] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-24181b6e] .el-dialog__header{padding-bottom:20px}*[data-v-24181b6e] .el-dialog__footer,*[data-v-24181b6e] .el-dialog__header{text-align:left!important}*[data-v-24181b6e] .el-dialog__body{background:#fcfcfd}*[data-v-24181b6e] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.icons-container button[data-v-24181b6e]{display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(119 195 96 / 0.2)}",""]),n.locals={},t.exports=n},1342:function(t,e,o){"use strict";o.r(e);o(88);var n=o(0).default.extend({name:"request-sent-notification",components:{},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,companyName:sessionStorage.getItem("companyNameWhenSearch"),fileAction:sessionStorage.getItem("fileActionWhenSearch")}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible,setTimeout((function(){sessionStorage.setItem("companyNameWhenSearch",""),sessionStorage.setItem("fileActionWhenSearch","")}),2e3)},computed:{},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),l=(o(1167),o(1)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}}},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),e("form",{ref:"form"},[e("div",{staticClass:"text-centerfont-medium flex justify-between item mx-auto mb-4 whitespace-none"},[e("h2",{staticClass:"text-[25px] text-center"},[t._v("Request sent to "+t._s(this.companyName)+" to "+t._s(this.fileAction))])])])])}),[],!1,null,"24181b6e",null);e.default=component.exports}}]);