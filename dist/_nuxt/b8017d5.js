(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1104:function(t,e,n){var content=n(1311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("702c302a",content,!0,{sourceMap:!1})},1310:function(t,e,n){"use strict";n(1104)},1311:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-494b16e0] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-494b16e0] .el-dialog__header{padding-bottom:20px}*[data-v-494b16e0] .el-dialog__footer,*[data-v-494b16e0] .el-dialog__header{text-align:left!important}*[data-v-494b16e0] .el-dialog__body{background:#fcfcfd}*[data-v-494b16e0] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1386:function(t,e,n){"use strict";n.r(e);n(28),n(89),n(37),n(32),n(48),n(49);var o=n(6),r=(n(7),n(21),n(59),n(25),n(0)),l=n(43);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=r.default.extend({name:"PdfShareModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,email:"",description:"",emails:[1],loading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},addEmails:function(){this.emails.push(this.emails.length)},onSubmit:function(t){var e,n,o=this;null==t||t.preventDefault(),this.loading=!0;var r={},l=[];Array.from(t.target.elements).forEach((function(element){"email"==element.type&&l.push(element.value)})),r=c(c({},r),{},{action:"share_file",editedFileLink:(null===(e=this.file)||void 0===e?void 0:e.downloadLink)||"",fileId:(null===(n=this.file)||void 0===n?void 0:n.id)||"",emails:l,note:this.description||""}),this.$axios.$post("/request",r).then((function(t){o.$notify.success({title:"Request",message:"Request sent Successfully"}),o.$emit("updateVisibility",!1),o.$emit("refresh"),o.$nuxt.refresh(),o.description="",o.emails=[0]})).catch((function(t){o.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){o.loading=!1}))}},components:{SpinnerDottedIcon:l.default}}),h=(n(1310),n(1)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-2xl text-gray-800 pb-2"},[t._v("\n      Share\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{staticClass:"max-w-[470px] mx-auto",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"grid grid-cols-[1fr,min-content] items-center gap-3 mb-8"},[e("div",t._l(t.emails,(function(n){return e("input",{key:t.email,staticClass:"my-1 p-3 w-full border-[1px] border-grey rounded-[7px] outline-green resize-none",attrs:{placeholder:"Email",type:"email",required:""}})})),0),t._v(" "),e("div",{staticClass:"circle circle-18 bg-gray-600 text-white font-medium text-xl cursor-pointer",on:{click:t.addEmails}},[t._v("\n        +\n      ")])]),t._v(" "),e("el-input",{staticClass:"resize-none",attrs:{type:"textarea",rows:6,placeholder:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),e("div",{staticClass:"flex justify-around pt-5"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[100%] text-white rounded-md shadow bg-paperdazgreen-400",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n       Send\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])],1)])}),[],!1,null,"494b16e0",null);e.default=component.exports}}]);