(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1309:function(t,e,n){var content=n(1563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("bb0dba46",content,!0,{sourceMap:!1})},1562:function(t,e,n){"use strict";n(1309)},1563:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-268fb651] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-268fb651] .el-dialog__header{padding-bottom:20px}*[data-v-268fb651] .el-dialog__footer,*[data-v-268fb651] .el-dialog__header{text-align:left!important}*[data-v-268fb651] .el-dialog__body{background:#fcfcfd}*[data-v-268fb651] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1737:function(t,e,n){"use strict";n.r(e);n(25),n(48);var o=n(0),l=n(42),d=(n(78),n(974),n(418),n(417),n(745),n(4),n(59),n(202)),c=o.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),r=(n(1562),n(1)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"text-center font-semibold text-xl"})]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"flex justify-center pb-2"},[e("CheckedFillIcon",{attrs:{width:"70"}})],1),t._v(" "),e("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px] break-normal"},[t._v("File "+t._s("".concat((t.file.fileAction+"ed").replace("ee","e")))+", a copy sent to "),e("span",{staticClass:"text-paperdazgreen-300"},[t._v(t._s(t.file.user.firstName)+" "+t._s(t.file.user.lastName))]),t._v(" another sent to your email.")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:t.loading},on:{click:function(e){return t.closeModal()}}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n        Ok\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"268fb651",null);e.default=component.exports},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},757:function(t,e){},758:function(t,e){},974:function(t,e,n){"use strict";n(278),n(416),n(76),n(27),n(7),n(24)}}]);