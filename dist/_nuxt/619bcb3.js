(window.webpackJsonp=window.webpackJsonp||[]).push([[296,31,35,96,169,178,260],{1005:function(t,e,n){var content=n(1125);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("11c49c62",content,!0,{sourceMap:!1})},1065:function(t,e,n){var content=n(1183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4dcfb04e",content,!0,{sourceMap:!1})},1124:function(t,e,n){"use strict";n(1005)},1125:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"*[data-v-23dfde70] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-23dfde70] .el-dialog__header{padding-bottom:20px}*[data-v-23dfde70] .el-dialog__footer,*[data-v-23dfde70] .el-dialog__header{text-align:left!important}*[data-v-23dfde70] .el-dialog__body{background:#fcfcfd}*[data-v-23dfde70] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},t.exports=r},1133:function(t,e,n){"use strict";n(4)},1158:function(t,e,n){"use strict";n.r(e);n(417);var r=n(0),o=n(43),l=r.default.extend({name:"maxInviteModal",components:{SpinnerDottedIcon:o.default},model:{prop:"visible",event:"updateVisibility"},props:{file:{},teamMembers:{type:Number},visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,folder:{},loading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},file:function(){this.folder=this.file}},mounted:function(){this.folder=this.file},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),c=(n(1124),n(1)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}}},[e("p",{staticClass:"text-center block font-medium max-w-[290px] mx-auto mb-6 whitespace-none break-normal"},[t._v("\n    You have reached\n    "),e("span",{staticClass:"font-semibold text-paperdazgreen-500 uppercase"},[t._v(t._s(t.teamMembers?t.teamMembers:"")+" team Members")]),t._v("\n    in your plan. Do you want to upgrade?\n  ")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return t.$nuxt.$router.push("/settings?tab=billing")}}},[t._v("\n      Yes\n      "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-red-500",attrs:{disabled:t.loading},on:{click:function(e){return t.closeModal()}}},[e("span",{staticClass:"inline-flex gap-1 items-center"},[t._v("\n        No\n      ")])])])])}),[],!1,null,"23dfde70",null);e.default=component.exports},1182:function(t,e,n){"use strict";n(1065)},1183:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"*[data-v-6f868437] .el-dialog{width:830px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-6f868437] .el-dialog__header{padding-bottom:20px;border-bottom:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer{border-top:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer,*[data-v-6f868437] .el-dialog__header{text-align:left!important}*[data-v-6f868437] .el-dialog__body{background:#fcfcfd}*[data-v-6f868437] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),r.locals={},t.exports=r},1345:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(18),n(31),n(7),n(0)),l=(n(418),n(43)),c=o.default.extend({name:"InviteTeamMemberModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!0},reachLimit:{type:Boolean}},data:function(){return{showModal:!1,email:"",access:"",teamInviteLink:"",isLoading:!1}},watch:{visible:function(t){this.showModal=t,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},methods:{copyTeamLink:function(){navigator.clipboard.writeText(this.teamInviteLink),this.$notify.info({message:"Copied"})},sendInviteLink:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.reachLimit){e.next=3;break}return t.$emit("maxpopup"),e.abrupt("return");case 3:if(!t.isLoading){e.next=5;break}return e.abrupt("return");case 5:return t.isLoading=!0,n={action:"invite_link",emails:[t.email],link:t.teamInviteLink},e.next=9,t.$axios.$post("/request",n).then((function(){t.$notify.success({message:"Invite sent successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Invite sent failed"})})).finally((function(){t.isLoading=!1}));case 9:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)}},components:{SpinnerDottedIcon:l.default}}),d=(n(1182),n(1)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"font-semibold text-xl text-gray-800 pt-4"},[t._v("\n      Invite Team Member\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.sendInviteLink.apply(null,arguments)}}},[e("div",[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-[1fr,max-content] items-center gap-3 mb-8"},[e("div",[e("label",{staticClass:"block font-medium mb-3",attrs:{for:""}},[t._v("Email Address")]),t._v(" "),e("el-input",{attrs:{disabled:t.isLoading,placeholder:"Email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("div")])]),t._v(" "),e("p",{staticClass:"mt-10 font-medium mb-3"},[t._v("Use invite link")]),t._v(" "),e("div",{staticClass:"px-3 py-2 bg-paperdazgreen-400 flex items-center h-16"},[e("p",{staticClass:"bg-white h-full mr-3 flex-1 truncate flex items-center px-2 text-sm"},[e("span",{staticClass:"truncate"},[t._v(t._s(t.teamInviteLink))])]),t._v(" "),e("button",{staticClass:"bg-paperdazgreen-700 text-white px-5 h-full",on:{click:function(e){return e.preventDefault(),t.copyTeamLink.apply(null,arguments)}}},[t._v("Copy")])]),t._v(" "),e("div",{staticClass:"py-3 grid place-items-center"},[e("button",{staticClass:"shadow-lg w-full bg-paperdazgreen-400 rounded-lg text-white h-12 max-w-[450px] flex justify-center items-center",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isLoading,type:"submit"}},[t._v("\n        INVITE\n        "),t.isLoading?e("SpinnerDottedIcon",{staticClass:"animate-spin ml-2",attrs:{width:"20",height:"20"}}):t._e()],1)])])])}),[],!1,null,"6f868437",null);e.default=component.exports},1885:function(t,e,n){t.exports=n.p+"img/Link_t.3ec4b6c.svg"},1975:function(t,e,n){"use strict";n.r(e);n(31);var r=n(3),o=(n(7),n(18),n(0)),l=n(1155),c=n(1342),d=n(1345),m=n(60),f=(n(683),n(660)),h=n(655),v=n(671),x=n(34),w=(n(203),n(672)),_=n(708),M=(n(1133),n(1158)),C=(n(418),n(758)),y=n(43),k=n(4),T=n(42),I=n(682),P=o.default.extend({components:{TopDetailsCardContainer:c.default,LeavesDetailsContainer:l.default,EllipsisIconVerticalIcon:f.default,SearchIcon:x.default,UserPlusIcon:_.default,InviteTeamMemberModal:d.default,ArrowDownIcon:m.default,MaxInviteModal:M.default,FilePagination:C.default,SpinnerDottedIcon:y.default,LedgerIcon:I.default},name:"TeamsPage",layout:"dashboard",data:function(){return{activeTab:"ledger",showInviteTeamMemberModal:!1,searchParam:"",showMaxInvite:!1,show:!1,returnedTeamMember:0,teamMembers:[],totalMembers:null,teamSpinner:!0,updateTeamSpiunner:!1,reachTeamLimit:!1,totalTeamMembers:null,teamSearch:"",tabs:[{label:"Ledger",key:"ledger",count:896,action:"ledger",icon:h.default},{label:"Completed",key:"completed",count:25,action:"complete",icon:v.default},{label:"Confirmed",key:"confirmed",count:25,action:"confirm",icon:w.default},{label:"Signed",key:"signed",count:25,action:"sign",icon:h.default}]}},asyncData:function(t){var e=t.store;t.$axios,t.$auth;e.commit("SET_PAGE_NAME",{name:"Team"})},computed:{canUserInvite:function(){return this.totalMembers>=this.totalTeamMembers},userType:function(){return k.a}},mounted:function(){this.getTeamMember(this.returnedTeamMember,this.teamSearch),this.getUserSubscription()},methods:{setPage:function(t){this.teamSpinner=!0,this.returnedTeamMember=t},setStatus:function(t,e){var n=this;this.updateTeamSpiunner=!0,this.$axios.$patch("/users/".concat(t),{status:e}).then((function(){n.getTeamMember(n.returnedTeamMember)}))},getUserSubscription:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.$get("/subscriptions/?userId=".concat(t.$auth.user.id)).then((function(e){t.totalTeamMembers=e.data[0].teamMembers})).catch((function(){t.reachTeamLimit=!0}));case 1:case"end":return e.stop()}}),e)})))()},setTeamAccess:function(t,e){var n=this;this.updateTeamSpiunner=!0,this.$axios.$patch("/users/".concat(t),{teamAccess:e}).then((function(){n.getTeamMember(n.returnedTeamMember)}))},getTeamMember:function(t,e){var n=this;this.$axios.$get("/users?teamId=".concat(this.$auth.user.id,"&$sort[createdAt]=-1&$skip=").concat(t,"&firstName[$like]=").concat(e||"","%")).then((function(t){n.teamMembers=t.data,n.totalMembers=t.total})).catch((function(){n.$notify.error({title:"teams",message:"Error, could not get teams"})})).finally((function(){n.teamSpinner=!1,n.updateTeamSpiunner=!1}))},MaxInviteFunc:function(){this.showMaxInvite=!0},getStatusClass:function(t){switch(t.toLowerCase()){case"active":return"text-white bg-paperdazgreen-400";case"pending":return"text-white bg-[#5078B5]";default:return"text-white bg-[#909090]"}}},beforeMount:function(){this.$auth.user.status==T.a.EXPIRED&&(this.$notify.error({message:"Your subscription is expired, go to billing to renew"}),this.$nuxt.$router.push("/dashboard"))},watch:{"$auth.user":function(){this.getTeamMember(this.returnedTeamMember,this.teamSearch),this.getUserSubscription()},returnedTeamMember:function(){this.getTeamMember(this.returnedTeamMember,this.teamSearch)},teamSearch:function(){this.getTeamMember(this.returnedTeamMember,this.teamSearch)}}}),L=n(1),component=Object(L.a)(P,(function(){var t,e=this,r=e._self._c;e._self._setupProxy;return r("main",{},[r("top-details-card-container",{staticClass:"mb-5",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}}),e._v(" "),r("div",{staticClass:"flex items-center flex-wrap gap-4 justify-between mb-6 max-sm:px-4"},[r("h5",{staticClass:"text-lg font-semibold text-[#272727]"},[e._v("Team Members { "+e._s(null===(t=e.teamMembers)||void 0===t?void 0:t.length)+" } ")]),e._v(" "),r("div",{staticClass:"text-white flex items-center"},[r("form",{staticClass:"w-full xs:max-w-[280px] text-xs font-medium flex items-center relative justify-end mr-2",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),t.preventDefault()}}},[r("span",{staticClass:"el-dropdown-link",class:[e.show?"left-roll":"no-roll"]},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.teamSearch,expression:"teamSearch"}],staticClass:"search-input text-black h-10 pl-4 mr-2 bg-transparent flex-1 border border-paperdazgreen-300 rounded-tl-lg rounded-bl-lg focus:border-paperdazgreen-700 outline-none",attrs:{type:"text",placeholder:"Search Files"},domProps:{value:e.teamSearch},on:{input:function(t){t.target.composing||(e.teamSearch=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"transition duration-0 hover:duration-150 transition duration-0 hover:duration-150",on:{click:function(t){e.show=!e.show}}},[r("img",{attrs:{src:n(1885),alt:""}})])]),e._v(" "),r("button",{staticClass:"circle circle-18 bg-paperdazgreen-400 text-[1.5rem] hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150",on:{click:function(t){e.showInviteTeamMemberModal=!0}}},[e._v("\n        +\n        ")])])]),e._v(" "),r("div",{staticClass:"rounded-2xl bg-white overflow-x-auto custom-scrollbar relative"},[e.teamSpinner||e.updateTeamSpiunner?r("div",{staticClass:"w-full grid place-items-center h-full h-min-[300px] absolute top-0 left-0 z-30",class:[e.updateTeamSpiunner?"bg-transparent":"bg-white"]},[r("SpinnerDottedIcon",{staticClass:"animate-spin"})],1):e._e(),e._v(" "),0===e.teamMembers.length?r("div",{staticClass:"w-full h-[200px] grid place-items-center text-[17px] font-normal"},[e._v("\n      You have no team member\n    ")]):r("table",{staticClass:"custom-table"},[e._m(0),e._v(" "),r("tbody",{staticClass:"text-[#505050]"},e._l(e.teamMembers,(function(t,i){return r("tr",{key:i},[r("td",[r("div",{staticClass:"flex items-center gap-3"},[r("span",{staticClass:"p-0.5 border border-paperdazgreen-400",class:[t.role==e.userType.PAID?"rounded-md w-9 h-9":"circle circle-17"]},[r("img",{class:[t.role==e.userType.PAID?"w-full h-full rounded-md":"w-full h-full rounded-full"],attrs:{src:(t||{}).profilePicture||"/img/placeholder_picture.png",alt:""}})]),e._v(" "),r("span",{staticClass:"text-sm"},[e._v(e._s("".concat(t.firstName," ").concat(t.lastName)))])])]),e._v(" "),r("td",[e._v("\n            "+e._s(t.email)+"\n          ")])])})),0)])]),e._v(" "),r("FilePagination",{attrs:{totalFile:e.totalMembers},on:{setPage:e.setPage}}),e._v(" "),r("invite-team-member-modal",{attrs:{reachLimit:e.canUserInvite},on:{maxpopup:e.MaxInviteFunc},model:{value:e.showInviteTeamMemberModal,callback:function(t){e.showInviteTeamMemberModal=t},expression:"showInviteTeamMemberModal"}}),e._v(" "),r("max-invite-modal",{attrs:{teamMembers:e.totalTeamMembers},model:{value:e.showMaxInvite,callback:function(t){e.showMaxInvite=t},expression:"showMaxInvite"}})],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",{staticClass:"text-[#414142]"},[e("tr",[e("th",{staticClass:"text-left font-[500]"},[t._v("Member")]),t._v(" "),e("th",{staticClass:"text-center font-[500] right"},[t._v("Email")])])])}],!1,null,null,null);e.default=component.exports},660:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"EllipsisIconVerticalIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"4",height:"17",viewBox:"0 0 4 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("ellipse",{attrs:{cx:"1.99991",cy:"1.70001",rx:"1.99991",ry:"1.70001"}}),t._v(" "),e("ellipse",{attrs:{cx:"1.99991",cy:"8.50079",rx:"1.99991",ry:"1.70001"}}),t._v(" "),e("ellipse",{attrs:{cx:"1.99991",cy:"15.2996",rx:"1.99991",ry:"1.70001"}})])}),[],!1,null,null,null);e.default=component.exports},683:function(t,e,n){"use strict";n.r(e);var r={},o=n(1),component=Object(o.a)(r,(function(){var t=this._self._c;return t("svg",{staticClass:"fill-current",attrs:{width:"20",height:"21",viewBox:"0 0 20 21",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2677:1311)"}},[t("path",{attrs:{d:"M19.9284 5.47032C19.9177 5.36223 19.8756 5.25375 19.8017 5.16351C19.7731 5.12861 20.0651 5.42289 15.444 0.801742C15.3338 0.691583 15.1843 0.633751 15.0384 0.633789C14.6907 0.633789 2.42726 0.633789 2.08088 0.633789C1.13245 0.633789 0.36084 1.4054 0.36084 2.35383V18.484C0.36084 19.4325 1.13245 20.2041 2.08088 20.2041H18.2111C19.1595 20.2041 19.9311 19.4325 19.9311 18.484C19.9312 4.56367 19.9327 5.51428 19.9284 5.47032ZM13.5479 1.78049V5.52636C13.5479 5.8425 13.2907 6.09971 12.9745 6.09971H12.2483V1.78049H13.5479ZM11.1016 1.78049V6.09971H5.78857C5.47243 6.09971 5.21522 5.8425 5.21522 5.52636V1.78049H11.1016ZM13.5479 12.9034H5.21522V12.1772C5.21522 11.8611 5.47243 11.6038 5.78857 11.6038H12.9745C13.2907 11.6038 13.5479 11.8611 13.5479 12.1772V12.9034ZM5.21522 19.0574V14.0501H13.5479V19.0574H5.21522ZM18.7845 18.484C18.7845 18.8002 18.5273 19.0574 18.2111 19.0574H14.6946C14.6946 18.3099 14.6946 13.0293 14.6946 12.1772C14.6946 11.2288 13.923 10.4572 12.9745 10.4572H5.78857C4.84014 10.4572 4.06853 11.2288 4.06853 12.1772V19.0574H2.08092C1.76478 19.0574 1.50757 18.8002 1.50757 18.484V2.35383C1.50757 2.03769 1.76478 1.78049 2.08092 1.78049H4.06853V5.52636C4.06853 6.47479 4.84014 7.2464 5.78857 7.2464H12.9745C13.923 7.2464 14.6946 6.47479 14.6946 5.52636V1.78049H14.8011L18.7845 5.76388V18.484Z"}})])])}),[],!1,null,null,null);e.default=component.exports},708:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"UserPlusIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"stroke-current",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M20 8V14","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M23 11H17","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},740:function(t,e,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4d131c3c",content,!0,{sourceMap:!1})},758:function(t,e,n){"use strict";n.r(e);n(418);var r=n(60),o={name:"filePagination",props:{setPage:{type:Function},totalFile:{}},data:function(){return{returnedDataPage:0,eachPageTotal:10}},components:{ArrowDownIcon:r.default},methods:{buttonFilePage:function(t){this.returnedDataPage=this.eachPageTotal*(t-1),this.$emit("setPage",this.returnedDataPage)}},watch:{returnedDataPage:function(){}},computed:{availablePages:function(){return Math.floor(this.totalFile/this.eachPageTotal)>5?Math.floor(this.totalFile/this.eachPageTotal):Math.floor(this.totalFile/this.eachPageTotal)+2},arrayPages:function(){for(var t=[],i=1;i<this.availablePages;i++)t.push(i);return t}}},l=(n(759),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.totalFile>t.eachPageTotal?e("div",{staticClass:"grid place-items-center py-5"},[e("div",[e("paginate",{attrs:{"page-count":t.arrayPages.length+1,"click-handler":t.buttonFilePage,"prev-text":"&#8249;","next-text":"&#8250;","container-class":"paginate","page-class":"page-item"}})],1)]):t._e()}),[],!1,null,"b8bb5c98",null);e.default=component.exports},759:function(t,e,n){"use strict";n(740)},760:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".page-item[data-v-b8bb5c98]{background:red!important}.pagination-arrow-left[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(90deg)}.pagination-arrow-right[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(-90deg)}",""]),r.locals={},t.exports=r}}]);