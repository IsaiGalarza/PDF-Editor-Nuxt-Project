(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1307:function(t,e,o){var content=o(1563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("4e25761d",content,!0,{sourceMap:!1})},1562:function(t,e,o){"use strict";o(1307)},1563:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-c7a14552] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-c7a14552] .el-dialog__header{padding-bottom:20px}*[data-v-c7a14552] .el-dialog__footer,*[data-v-c7a14552] .el-dialog__header{text-align:left!important}*[data-v-c7a14552] .el-dialog__body{background:#fcfcfd}*[data-v-c7a14552] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1726:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(43),d=o(202),c=n.default.extend({name:"blockDoNotPost",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){t&&(this.showModal=t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),r=(o(1562),o(1)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Alert?")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("These is a donotpost file, cannot view these file")])])}),[],!1,null,"c7a14552",null);e.default=component.exports}}]);