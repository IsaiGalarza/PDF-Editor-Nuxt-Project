(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1305:function(t,e,n){var content=n(1557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("a9310242",content,!0,{sourceMap:!1})},1556:function(t,e,n){"use strict";n(1305)},1557:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-81b22690] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-81b22690] .el-dialog__header{padding-bottom:20px}*[data-v-81b22690] .el-dialog__footer,*[data-v-81b22690] .el-dialog__header{text-align:left!important}*[data-v-81b22690] .el-dialog__body{background:#fcfcfd}*[data-v-81b22690] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1717:function(t,e,n){"use strict";n.r(e);n(7),n(31),n(88);var o=n(0),l=n(43),r=(n(289),n(202)),d=(n(742),o.default.extend({name:"blockPrivateFile",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:r.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,isLoading:!1,loading:!1,newSaveData:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t,this.checkParamsPermission()},refuse:function(){(this.showModal||this.refuse)&&(this.showModal=!0)}},mounted:function(){this.showModal=this.visible,"private"===this.file.filePrivacy&&(sessionStorage.setItem("fileActionWhenSearch",this.file.fileAction),sessionStorage.setItem("companyNameWhenSearch",this.file.user.companyName))},methods:{checkParamsPermission:function(){var t,e,n=this;this.isLoading=!0,this.$axios.get("/permissions/?userId=".concat(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id,"&fileId=").concat(this.file.id)).then((function(t){var e,data=t.data;data.length<1||1==(null===(e=data[0])||void 0===e?void 0:e.isGranted)&&(n.refuse=!1,n.showModal=!1)})).catch((function(t){console.log(t)})).finally((function(){n.isLoading=!1}))},closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t=this;this.$auth.loggedIn&&(this.loading=!0,this.$axios.post("/permissions",{action:"request_permission",fileId:this.file.id}).then((function(e){t.$notify.success({title:"Permission",message:"string"==typeof e.data?e.data:"Request sent successful, you will recieve a notification if request granted"}),t.loading=!1,setTimeout((function(){}),2500)})).catch((function(e){t.$notify.error({title:"Permission",message:"Request failed"})})).finally((function(){t.loading=!1})))}}})),c=(n(1556),n(1)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Alert?")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("\n        These is a private file requires permission to view, Ask for\n        permission to be granted right to view\n    ")]),t._v(" "),t.$auth.loggedIn?t._e():e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal font-semibold"},[t._v("\n        Login or register to ask for permission\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] border border-red-600 rounded-lg shadow bg-white",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return t.closeModal()}}},[t._v("\n            Cancel")]),t._v("--\x3e\n        "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:t.isLoading},on:{click:t.onSubmit}},[e("span",{staticClass:"inline-flex gap-1 items-center"},[t._v("\n                "+t._s(t.isLoading?"checking permission....":"Ask permission")+"\n                "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)]),t._v("\n        --\x3e\n        "),t._v(" "),e("nuxt-link",{staticClass:"h-10 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 text-white rounded-lg shadow bg-paperdazgreen-400 px-3 flex items-center justify-center whitespace-nowrap w-[150px] text-xs max-w-[50%]",attrs:{to:"/login"}},[t._v("Log in")])],1)])}),[],!1,null,"81b22690",null);e.default=component.exports},746:function(t,e){},747:function(t,e){},748:function(t,e){},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){}}]);