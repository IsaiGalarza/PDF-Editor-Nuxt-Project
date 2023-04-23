(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1e3:function(t,e,n){"use strict";n(781)},1001:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,"*[data-v-819de3c0] .el-dialog{width:90% !important}@media (min-width: 640px){*[data-v-819de3c0] .el-dialog{width:550px !important}}@media (min-width: 768px){*[data-v-819de3c0] .el-dialog{width:620px !important}}*[data-v-819de3c0] .el-dialog{max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-819de3c0] .el-dialog__header{padding-bottom:20px}*[data-v-819de3c0] .el-dialog__footer,*[data-v-819de3c0] .el-dialog__header{text-align:left!important}*[data-v-819de3c0] .el-dialog__body{background:#fcfcfd}*[data-v-819de3c0] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1041:function(t,e,n){"use strict";n.r(e);n(36),n(22),n(44);var o=n(3),l=(n(18),n(7),n(0)),r=n(43),c=n(205),d=l.default.extend({name:"create-team",components:{SpinnerDottedIcon:r.default,LinkIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,teamMembers:{},totalMembers:null,email:""}},watch:{visible:function(t){this.showModal=t,t&&this.getTeamMember(0)},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{teamInviteLink:function(){return"".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)}},methods:{copyTeamLink:function(){navigator.clipboard.writeText(this.teamInviteLink),this.$notify.info({message:"Copied"})},sendInviteLink:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,n={action:"invite_link",emails:t.email,link:t.teamInviteLink},e.next=6,t.$axios.$post("/request",n).then((function(){t.$notify.success({message:"Invite sent successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Invite sent failed"})})).finally((function(){t.loading=!1}));case 6:case"end":return e.stop()}}),e)})))()},getTeamMember:function(t){var e=this;this.$axios.$get("/users?teamId=".concat(this.$auth.user.id,"&$sort[createdAt]=-1&$skip=").concat(t)).then((function(t){e.teamMembers=t.data,e.totalMembers=t.total})).catch((function(){e.$notify.error({title:"teams",message:"Error, could not get teams"})})).finally((function(){e.teamSpinner=!1,e.updateTeamSpiunner=!1}))},closeModal:function(){this.$emit("updateVisibility",!1)}}}),m=(n(1e3),n(1)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"font-semibold text-xl text-center"},[t._v("Add Member")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("div",{staticClass:"flex items-center font-medium mb-6 whitespace-none w-full"},[e("div",{staticClass:"border-[1px] flex justify-between border-paperdazgreen-300 rounded w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"search-input w-[35%] h-10 transition pl-4 border-r-0 bg-transparent flex-1 focus:border-r-0 outline-none",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("select",{staticClass:"h-10 border-l-0 bg-transparent text-[#878686] text-[12px] -ml-1 mr-2 outline-none text-right"},[e("option",{staticClass:"rounded w-[50px]"},[t._v("Manage Company Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v("Own Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v("Remove Files")])])]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[100px] shadow-md ml-3 text-white rounded bg-paperdazgreen-400",attrs:{disabled:t.loading},on:{click:t.sendInviteLink}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n        Invite\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])]),t._v(" "),e("p",{staticClass:"text-[18px] font-semibold mb-4"},[t._v("Copy link")]),t._v(" "),e("ul",[e("li",{staticClass:"flex justify-between mb-3 items-center"},[e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"p-0.5 border-[1px] border-paperdazgreen-400 circle circle-17"},[e("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),t._v(" "),e("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[e("span",{staticClass:"ml-2",attrs:{to:"pdf"}},[t._v("\n            "+t._s("".concat(this.$auth.user.companyName))+"\n          ")])])]),t._v(" "),e("span",{staticClass:"capitalize"},[t._v(" Owner ")])]),t._v(" "),t._l(t.teamMembers,(function(n){return e("li",{key:n.id,staticClass:"flex justify-between mb-3 items-center"},[e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"p-0.5 border-[1px] border-paperdazgreen-400 circle circle-17"},[e("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),t._v(" "),e("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[e("span",{staticClass:"ml-2",attrs:{to:"pdf"}},[t._v("\n            "+t._s("".concat(null==n?void 0:n.firstName," ").concat(null==n?void 0:n.lastName))+"\n          ")])])]),t._v(" "),e("span",{staticClass:"capitalize"},[t._v("\n        "+t._s("".concat(((null==n?void 0:n.teamAccess)||"").replace(/_/g," ")))+"\n      ")])])}))],2),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("div",{staticClass:"w-full text-left border-t-2 border-gray-200 py-3 mt-4"},[e("button",{staticClass:"flex items-center",on:{click:t.copyTeamLink}},[e("link-icon",{staticClass:"ml-2",attrs:{width:"21",height:"21",color:"rgb(59, 130, 246 )"}}),t._v("\n        copy link\n      ")],1)])])])}),[],!1,null,"819de3c0",null);e.default=component.exports},781:function(t,e,n){var content=n(1001);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("73b015f7",content,!0,{sourceMap:!1})}}]);