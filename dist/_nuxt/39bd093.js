(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1068:function(t,e,o){var content=o(1183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5bdaad14",content,!0,{sourceMap:!1})},1182:function(t,e,o){"use strict";o(1068)},1183:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,"*[data-v-1a9152ca] .el-dialog{padding-top:50px;padding-bottom:50px;width:416px!important;max-width:95%!important;position:relative!important;overflow:hidden;background:linear-gradient(180deg,#e4f3e0,#fff);border:5px solid #77b550;box-shadow:0 4px 4px rgba(0,0,0,.4);border-radius:16px}*[data-v-1a9152ca] .el-dialog__header{padding-bottom:20px;text-align:center}*[data-v-1a9152ca] .el-dialog__footer,*[data-v-1a9152ca] .el-dialog__header{text-align:left!important}*[data-v-1a9152ca] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1351:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(42),d=(o(78),o(974),o(418),o(417),o(744),o(4),o(59),o(202)),c=n.default.extend({name:"CongratulationsModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:d.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),r=(o(1182),o(1)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"text-center font-semibold text-xl"},[t._v("\n      Congratulations!\n    ")])]},proxy:!0}])},[t._v(" "),e("p",{staticClass:"pb-3"},[t._v("Your business account has been created.")]),t._v(" "),e("p",[t._v(" To switch between multiple accounts, simply click on your profile icon in the top right hand corner.")])])}),[],!1,null,"1a9152ca",null);e.default=component.exports},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){},756:function(t,e){},757:function(t,e){},758:function(t,e){},974:function(t,e,o){"use strict";o(278),o(416),o(76),o(27),o(7),o(24)}}]);