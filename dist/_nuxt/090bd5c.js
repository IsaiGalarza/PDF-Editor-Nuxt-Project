(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1319:function(t,e,o){var content=o(1598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("6ce5ca78",content,!0,{sourceMap:!1})},1597:function(t,e,o){"use strict";o(1319)},1598:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-2c88b6db] .el-dialog{width:616px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-2c88b6db] .el-dialog__header{padding-bottom:20px}*[data-v-2c88b6db] .el-dialog__footer,*[data-v-2c88b6db] .el-dialog__header{text-align:left!important}*[data-v-2c88b6db] .el-dialog__body{background:#fcfcfd}*[data-v-2c88b6db] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1772:function(t,e,o){"use strict";o.r(e);o(31),o(418),o(7);var n=o(0),l=o(42),r=n.default.extend({name:"edit-company-folder",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},file:{type:Object},visible:{type:Boolean,default:!1},isCreator:{type:Boolean}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,folderInputData:"",folder:{}}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},file:function(){this.folder=this.file,this.folderInputData=(this.folder||{}).name}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t,e=this;null===(t=event)||void 0===t||t.preventDefault(),this.folderInputData.trim().length<1||this.loading||(this.loading=!0,this.errorMessage="",this.$axios.$patch("/folders/".concat(this.folder.id),{name:this.folderInputData}).then((function(t){e.$notify.success({title:"Folder",message:"Folder name changed successfully"}),e.$emit("updateVisibility",!1),e.$emit("refresh"),e.$nuxt.refresh()})).catch((function(t){e.$notify.error({title:"Folder",message:"Unable to change folder name"})})).finally((function(){e.loading=!1})))}}}),d=(o(1597),o(1)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isCreator?e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("File Name ")])]},proxy:!0}],null,!1,771804487)},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"py-3 text-center text-paperdazgreen-300"},[t._v("Private Access")]),t._v(" "),e("p",{staticClass:"border-[1px] border-paperdazgreen-300 rounded-md flex items-center p-[2px]"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.folderInputData,expression:"folderInputData"}],staticClass:"w-full py-2 px-4 rounded-md bg-transparent outline-none border-none",attrs:{placeholder:"Email"},domProps:{value:t.folderInputData},on:{input:function(e){e.target.composing||(t.folderInputData=e.target.value)}}}),t._v(" "),e("button",{staticClass:"px-3 py-2 bg-paperdazgreen-300 text-white rounded-md w-[150px]"},[t._v("Invite")])]),t._v(" "),e("div",{staticClass:"mt-10"},t._l([1,2,3,4,5,6],(function(o){return e("div",{key:t.index,staticClass:"flex items-center mb-4"},[e("div",{staticClass:"w-5/12"},[t._v("mai@yahoo.com")]),t._v(" "),e("div",{staticClass:"w-3/12"},[t._v("Janet Jackton")]),t._v(" "),e("div",{staticClass:"w-2/12"},[t._v("Pending")]),t._v(" "),e("div",{staticClass:"w-1/12 flex justify-end"},[e("button",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"14",viewBox:"0 0 18 14",fill:"none"}},[e("path",{attrs:{d:"M6.00016 11.1698L1.83016 6.99984L0.410156 8.40984L6.00016 13.9998L18.0002 1.99984L16.5902 0.589844L6.00016 11.1698Z",fill:"#75C05F"}})])])]),t._v(" "),e("div",{staticClass:"w-1/12 flex justify-end"},[e("button",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[e("path",{attrs:{d:"M13 1L1 13M1 1L13 13",stroke:"#FF7373","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])})),0)]):t._e()}),[],!1,null,"2c88b6db",null);e.default=component.exports}}]);