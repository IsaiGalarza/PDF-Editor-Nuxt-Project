(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1047:function(t,e,o){"use strict";o(829)},1048:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-8dec69a4] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-8dec69a4] .el-dialog__header{padding-bottom:20px}*[data-v-8dec69a4] .el-dialog__footer,*[data-v-8dec69a4] .el-dialog__header{text-align:left!important}*[data-v-8dec69a4] .el-dialog__body{background:#fcfcfd}*[data-v-8dec69a4] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1112:function(t,e,o){"use strict";o.r(e);o(278);var n=o(0),l=o(42),d=n.default.extend({name:"maxInviteModal",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{totalFile:{type:Number},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,folder:{},loading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),r=(o(1047),o(1)),component=Object(r.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Oops")])]},proxy:!0}])},[t._v(" "),e("p",{staticClass:"text-center block font-medium max-w-[290px] mx-auto mb-6 break-normal break-normal"},[t._v("\n    You have reached\n    "),e("span",{staticClass:"font-semibold text-paperdazgreen-500 uppercase"},[t._v(t._s(t.totalFile)+" paperlink")]),t._v("\n    in your plan. Do you want to upgrade?\n  ")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:t.loading},on:{click:function(e){return t.closeModal()}}},[e("span",{staticClass:"inline-flex gap-1 items-center"},[t._v("\n        Not yet\n      ")])]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return t.$nuxt.$router.push("/settings")}}},[t._v("\n    Yes\n    "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])}),[],!1,null,"8dec69a4",null);e.default=component.exports},829:function(t,e,o){var content=o(1048);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("6776aac6",content,!0,{sourceMap:!1})}}]);