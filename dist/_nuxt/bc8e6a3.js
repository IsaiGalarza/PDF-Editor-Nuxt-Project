(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1003:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(43),r=o(202),d=n.default.extend({name:"pdfNotLoggedIn",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:r.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},tools:{type:Array}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{login:function(){this.$store.commit("SET_PDF_EXIT",!0),this.$nuxt.$router.push("/login")},register:function(){this.$store.commit("SET_PDF_EXIT",!0),this.$nuxt.$router.push("/register")},closeModal:function(){this.$emit("updateVisibility",!1),this.$emit("confirmExistFileManager",!1)}}}),c=(o(1232),o(1)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Not logged-in")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("Do you want to access paperdaz annotations? Kindly login or register ")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-paperdazgreen-500 border border-paperdazgreen-500 rounded-lg shadow bg-white",attrs:{type:"button"},on:{click:t.login}},[t._v("\n      Login\n    ")]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-paperdazgreen-500 border border-paperdazgreen-500 rounded-lg shadow bg-white",attrs:{disabled:t.loading},on:{click:t.register}},[t._v("\n        register\n    ")])])])}),[],!1,null,"2ee5c405",null);e.default=component.exports},1232:function(t,e,o){"use strict";o(934)},1233:function(t,e,o){var n=o(14)((function(i){return i[1]}));n.push([t.i,"*[data-v-2ee5c405] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-2ee5c405] .el-dialog__header{padding-bottom:20px}*[data-v-2ee5c405] .el-dialog__footer,*[data-v-2ee5c405] .el-dialog__header{text-align:left!important}*[data-v-2ee5c405] .el-dialog__body{background:#fcfcfd}*[data-v-2ee5c405] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},934:function(t,e,o){var content=o(1233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("7ab911d4",content,!0,{sourceMap:!1})}}]);