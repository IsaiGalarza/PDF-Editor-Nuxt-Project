(window.webpackJsonp=window.webpackJsonp||[]).push([[120,75,86],{1033:function(e,t,r){var content=r(1385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("1a5f208a",content,!0,{sourceMap:!1})},1384:function(e,t,r){"use strict";r(1033)},1385:function(e,t,r){var l=r(14)((function(i){return i[1]}));l.push([e.i,".file-ledger-table[data-v-0a3f78e7]{--background:#fff;width:100%;white-space:nowrap;}@media not all and (min-width: 640px){.file-ledger-table[data-v-0a3f78e7]{font-size:0.75rem;line-height:1rem;}}@media (min-width: 640px){.file-ledger-table[data-v-0a3f78e7]{font-size:1rem;line-height:1.5rem;}}.file-ledger-table[data-v-0a3f78e7]{border-collapse:separate;border-spacing:0;height:-moz-fit-content;height:fit-content;}.file-ledger-table tr[data-v-0a3f78e7]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));transition:all .2s ease-in-out;}.file-ledger-table tr.highlight[data-v-0a3f78e7]{--background:rgba(233,254,219,0.46)}@media not all and (min-width: 640px){.file-ledger-table th[data-v-0a3f78e7]{padding-top:1rem;padding-bottom:0.25rem;font-size:0.75rem;line-height:1rem;}}@media (min-width: 640px){.file-ledger-table th[data-v-0a3f78e7]{padding-top:2rem;padding-bottom:0.75rem;font-size:1rem;line-height:1.5rem;}}.file-ledger-table th[data-v-0a3f78e7]{background:var(--background)}.file-ledger-table td[data-v-0a3f78e7]{padding-top:0.75rem;padding-bottom:0.75rem;}@media not all and (min-width: 640px){.file-ledger-table td[data-v-0a3f78e7]{font-size:0.75rem;line-height:1rem;}}@media (min-width: 640px){.file-ledger-table td[data-v-0a3f78e7]{font-size:1rem;line-height:1.5rem;}}.file-ledger-table td[data-v-0a3f78e7],.file-ledger-table th[data-v-0a3f78e7]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));padding-left:0.25rem;padding-right:0.25rem;transition:all .2s ease-in-out;background:var(--background);}.file-ledger-table td[data-v-0a3f78e7]:first-child,.file-ledger-table th[data-v-0a3f78e7]:first-child{padding-left:1.25rem;}.file-ledger-table td[data-v-0a3f78e7]:last-child,.file-ledger-table th[data-v-0a3f78e7]:last-child{padding-right:1.25rem;}.file-ledger-table td.fixed-col[data-v-0a3f78e7],.file-ledger-table th.fixed-col[data-v-0a3f78e7]{position:sticky;background:#fff;background:var(--background);}.file-ledger-table td.fixed-col.left[data-v-0a3f78e7],.file-ledger-table th.fixed-col.left[data-v-0a3f78e7]{left:-.1px}.file-ledger-table td.fixed-col.right[data-v-0a3f78e7],.file-ledger-table th.fixed-col.right[data-v-0a3f78e7]{right:-.1px}",""]),l.locals={},e.exports=l},1627:function(e,t,r){"use strict";r.r(t);var l=r(6),n=r(3),o=(r(18),r(25),r(55),r(78),r(27),r(8),r(56),r(77),r(21),r(37),r(28),r(32),r(48),r(49),r(0)),c=r(126),d=r(661),f=r(34),h=r(652),m=r(906),v=r(203),C=r(43),w=r(65),x=r(62),F=r(282),_=r(155),P=r(759),y=r(4),O=r(658),k=r(204),T=(r(416),r(982)),$=r(942),U=r(983),A=r(896),S=r(60);r(206);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I=o.default.extend({components:{TreeIcon:h.default,FolderPlusIcon:O.default,PlusIcon:k.default,ScribbleIcon:d.default,SearchIcon:f.default,ShareIcon:v.default,SpinnerDottedIcon:C.default,HeartOutlineIcon:w.default,ShareOutlineIcon:x.default,ShareFilesModal:F.default,QrcodeShare:_.default,FilePagination:P.default,UploadDocumentModal:$.default,CreateCompanyFolder:T.default,CreateTeam:U.default,EmptyFileLedger:A.default},props:["searchContect"],filters:{removeExtension:function(e){return e.replace(/\.[^\/.]+$/,"")},initialFirstName:function(e){return null==e?void 0:e.charAt(0).toUpperCase()}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},data:function(){return{searchParam:"",totalFile:null,returnedDataPage:0,spinner:!0,show:!1,showQrcodeFiles:!1,showShareCompanyFiles:!1,userFile:{},userId:this.$auth.user.id,filterTitle:"",searchValue:"",showScribble:!1,files:[],fileProps:{},copyFiles:[],refresh:!1,highlightedFileId:void 0,scrollObserver:void 0,showUploadDocumentModal:!1,showCreateCompanyFolder:!1,showCreateTeam:!1,FileAction:S.a,debounceTimeout:null}},mounted:function(){this.handleFileHighlight(),this.handleShowingLedger(),this.tableScrollObserver(),this.fetchFiles(this.returnedDataPage,this.searchValue),console.log(this.pdfUser)},methods:{formatFileAction:function(e,t){var r=!1;switch((e||"").toLowerCase()){case S.a.COMPLETE:r=!0;break;case S.a.SIGNED:r=!0,t===S.a.COMPLETE?(e=S.a.SIGNED,r=!1):t===S.a.CONFIRM&&(e=S.a.CONFIRM);break;case S.a.CONFIRM:r=t!==S.a.COMPLETE;break;default:return""}return e=e.charAt(0).toUpperCase()+e.slice(1),r&&(e="e"===e.charAt(e.length-1)?e+"d":e+"ed"),e},showCreateCompanyFolderFunc:function(){this.showCreateCompanyFolder=!0},showUploadModalFunction:function(){this.showUploadDocumentModal=!0},setRefresh:function(){this.refresh=!this.refresh},resetUserFolder:function(){this.fileProps={}},resetUserFile:function(){this.userFile={}},showCreateTeamFunc:function(){this.showCreateTeam=!0},searchFiles:function(e){this.searchValue=e.target.value},ledgerFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=r.$auth.user.role!=y.a.PAID?"/ledger?userId=".concat(r.$auth.user.id,"&$sort[updatedAt]=-1&fileName[$like]=").concat(t,"%&$skip=").concat(e):"/ledger?fileOwnerId=".concat(r.$auth.user.id,"&$sort[updatedAt]=-1&fileName[$like]=").concat(t,"%&$skip=").concat(e),l.next=3,r.$axios.get(n).then((function(e){var t=[];e.data.data.map((function(e){var r,l;e.file&&(e.favourites=[],e.shared=null,e.fileAction=e.action,e.paperLink=(e.file||{}).paperLink,e.userName=(null===(r=e.fileOwner)||void 0===r?void 0:r.firstName)+" "+(null===(l=e.fileOwner)||void 0===l?void 0:l.lastName),t.push(e))})),r.files=t.length?t:[],r.$store.commit("ADD_USER",t),r.totalFile=e.data.total})).finally((function(){r.spinner=!1}));case 3:case"end":return l.stop()}}),l)})))()},fetchUserFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var n,o,c;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return c=(null===(n=r.$auth.user)||void 0===n?void 0:n.role)==y.a.TEAM?r.$auth.user.teamId:null===(o=r.$auth.user)||void 0===o?void 0:o.id,l.next=3,r.$axios.$get("/files?userId=".concat(c,"&fileName[$like]=").concat(t,"%&$skip=").concat(e,"&$sort[updatedAt]=-1"),{params:{isEditing:0}}).then((function(e){r.$emit("setUploadpaperlink",e.total);var t=e.data.map((function(e){return e}));r.files=t,r.$store.commit("ADD_USER",t),r.totalFile=e.total})).finally((function(){r.spinner=!1}));case 3:case"end":return l.stop()}}),l)})))()},setPage:function(e){this.returnedDataPage=e},showShareCompanyFilesFunc:function(data){this.userFile=data,this.showShareCompanyFiles=!0},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},fetchFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:r.isPaidUser,r.ledgerFiles(e,t);case 1:case"end":return l.stop()}}),l)})))()},handleFileHighlight:function(){var e=this;this.highlightedFileId=this.$nuxt.$route.query.highlight_file,setTimeout((function(){e.highlightedFileId=void 0}),2e4)},shareFile:function(e){var t=location.origin.replace(/\/+$/,"")+"/pdf/".concat(e.id);navigator.share({url:t,title:e.file_name})},tableScrollObserver:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.scrollObserver)try{e.scrollObserver.disconnect(),e.scrollObserver=void 0}catch(e){}r={root:e.$refs.ledgerContainer,rootMargin:"0px",threshold:1},l=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.remove("scrolled"):e.target.classList.add("scrolled")}))}),r),document.querySelectorAll(".fixed-col").forEach((function(e){l.observe(e)})),e.scrollObserver=l;case 9:case"end":return t.stop()}}),t)})))()},formatDateTime:function(e){return"".concat(m.a.getDateString(e),"  ").concat(m.a.getFormattedTime(e))},handleShowingLedger:function(){var e=this,t=this.$refs.ledgerContainer;if(t){new IntersectionObserver((function(r,l){r.forEach((function(r){r.target===t&&(r.isIntersecting?e.showScribble=!0:e.showScribble=!1)}))}),{root:null,threshold:.75,rootMargin:"0px"}).observe(t)}}},updated:function(){this.tableScrollObserver()},computed:E(E({},Object(c.e)(["filterUser","pdfUser"])),{},{userType:function(){return y.a},isPaidUser:function(){var e,t;switch(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.role){case y.a.PAID:case y.a.TEAM:return!0;case y.a.FREE:return!1}},mainUserLink:function(){var e,t;switch(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.role){case y.a.PAID:return(this.$auth.user||{}).id;case y.a.TEAM:return(this.$auth.user||{}).mainAccountId}(this.$auth.user||{}).id}}),watch:{"$auth.user":function(){var e=this;this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((function(){e.spinner=!0,e.fetchFiles(e.returnedDataPage,e.searchParam)}),500)},returnedDataPage:function(){var e=this;this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((function(){e.spinner=!0,e.fetchFiles(e.returnedDataPage,e.searchParam)}),500)},searchParam:function(){var e=this;this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((function(){e.spinner=!0,e.fetchFiles(e.returnedDataPage,e.searchParam)}),500)},refresh:function(){this.$nuxt.refresh(),this.fetchFiles(this.returnedDataPage,this.folderSearch),this.fetchFolder(this.returnedFolderPage,this.folderSearch)}}}),M=(r(1384),r(1)),component=Object(M.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"flex flex-col"},[t("div",{staticClass:"ledger-container bg-white rounded-2xl flex-1 min-h-[50vh] lg:min-h-[40vh] position-relative pt-4"},[t("div",{staticClass:"search-container"},[e.spinner?e._e():t("h3",{staticClass:"text-paperdazgray-700 font-semibold text-xl flex xs:items-center justify-between whitespace-nowrap px-3 mb-1",class:[e.isPaidUser?"flex-col sm:flex-row":"flex-row gap-2"]},[t("h5",{staticClass:"text-lg font-semibold text-[#272727] hidden sm:inline-flex items-center gap-2 sm:w-full",class:[e.isPaidUser?"mb-2":"mb-0"]},[e._v("\n          "+e._s(e.isPaidUser?"File Ledger":"Ledger")+"\n          "),t("a",{attrs:{href:"/public/profile/".concat(e.mainUserLink),target:"_blank"}},[e.isPaidUser?t("img",{staticClass:"lg:w-[30px] w-[20px]",attrs:{src:r(1293)}}):e._e()]),e._v(" "),e.isPaidUser?t("img",{staticClass:"cursor-pointer lg:w-[44px] w-[35px]",attrs:{src:r(1294)},on:{click:e.showCreateTeamFunc}}):e._e()]),e._v(" "),t("div",{staticClass:"text-xs font-medium flex justify-end items-center gap-2 relative w-full"},[t("span",{staticClass:"el-dropdown-link left-roll1 flex-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchParam,expression:"searchParam"}],staticClass:"search-input h-8 sm:h-10 transition bg-transparent ps-2 flex-1 border-[1px] border-paperdazgreen-400 rounded-lg focus:border-paperdazgreen-700 outline-none float-right sm:w-3/4 w-full",attrs:{type:"text",placeholder:"Search Files"},domProps:{value:e.searchParam},on:{input:function(t){t.target.composing||(e.searchParam=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"circle circle-16 sm:circle-18 bg-paperdazgreen-400 text-white hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150"},[t("search-icon",{attrs:{width:"16",height:"16",currentcolor:"white"}})],1)])])]),e._v(" "),t("div",{ref:"ledgerContainer",class:[(e.pdfUser||[]).length<=0||e.$fetchState.pending?"p-5 flex justify-center":"pb-4 overflow-x-auto custom-scrollbar"]},[e.spinner?t("div",{key:"1",staticClass:"p-6 flex justify-center items-center"},[t("spinner-dotted-icon",{staticClass:"text-paperdazgreen-400 animate-spin"})],1):t("table",{key:"3",ref:"fileLedgerTable",staticClass:"file-ledger-table"},[t("thead",{staticClass:"text-sm sm:text-base"},[t("tr",{staticClass:"text-left"},[t("th",{staticClass:"w-12 text-left fixed-col left"},[e._v("No")]),e._v(" "),t("th",{staticClass:"text-left !pl-5 sm:!pl-16"},[e._v("File Name")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v(e._s(e.isPaidUser?"Action":"Actions"))]),e._v(" "),e.isPaidUser?t("th",{staticClass:"text-center"},[e._v("Action By")]):e._e(),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Date & Time")]),e._v(" "),t("th",{staticClass:"fixed-col right text-right"})])]),e._v(" "),e.pdfUser.length&&!e.spinner?t("tbody",e._l(e.pdfUser,(function(r,i){var l,n;return t("tr",{key:r.id,class:{highlight:r.id==e.highlightedFileId}},[t("td",{staticClass:"text-left fixed-col left"},[e._v(e._s(i+1+e.returnedDataPage))]),e._v(" "),t("td",{staticClass:"text-center !pl-5 sm:!pl-16"},[t("div",{staticClass:"flex items-center gap-1.5"},[t("div",{staticClass:"border !border-paperdazgreen-300 p-0.5 hidden",class:[r.role==e.userType.PAID||e.$auth.user.role==e.userType.FREE?"sm:block rounded-md w-9 h-9":"sm:circle sm:circle-17"]},[(r.user||{}).profile_picture?t("img",{class:[r.role==e.userType.PAID||e.$auth.user.role==e.userType.FREE?"w-full h-full rounded-md":"w-full h-full rounded-full"],attrs:{src:(r.user||{}).profile_picture||"/img/placeholder_picture.png",alt:""}}):t("div",{staticClass:"text-paperdazgreen-300 h-[30px] leading-[30px]"},[e._v("\n                      "+e._s(e._f("initialFirstName")((r.fileOwner||{}).company_name))+"\n                    ")])]),e._v(" "),t("div",{staticClass:"max-sm:w-24"},[t("p",{staticClass:"max-sm:truncate max-sm:text-xs sm:text-base font-medium text-left sm:ml-1"},[t("nuxt-link",{staticClass:"w-full block",attrs:{to:"/pdf/".concat(r.paperLink)}},[e._v("\n                      "+e._s(e._f("removeExtension")(r.fileName))+"\n                    ")])],1),e._v(" "),t("div",{staticClass:"hidden sm:block"},[e.$auth.user.role==e.userType.FREE?t("a",{attrs:{href:"/public/profile/".concat(r.fileOwnerId||{}),target:"_blank"}},[t("p",{staticClass:"ml-1 max-sm:text-xs sm:text-base"},[e._v("\n                        "+e._s((r.user||{}).company_name)+"\n                      ")])]):t("p",{staticClass:"ml-1 max-sm:text-xs sm:text-base flex"},[e._v("\n                      "+e._s((r||{}).userName)+"\n                    ")])])])])]),e._v(" "),t("td",{staticClass:"text-sm text-center capitalize",class:r.fileAction===e.FileAction.COMPLETE?"text-paperdazgreen-400":r.fileAction===e.FileAction.SIGNED?"text-blue-400":r.fileAction===e.FileAction.CONFIRM?"text-purple-400":""},[e._v("\n              "+e._s((e.isPaidUser?r.fileAction:e.formatFileAction(r.file.fileAction,r.action))||"-")+"\n            ")]),e._v(" "),e.isPaidUser?t("td",{staticClass:"text-center"},[e._v("\n              "+e._s((null===(l=r.user)||void 0===l?void 0:l.firstName)+" "+(null===(n=r.user)||void 0===n?void 0:n.lastName))+"\n            ")]):e._e(),e._v(" "),t("td",{staticClass:"text-center whitespace-normal px-1"},[e._v("\n              "+e._s(e.formatDateTime(r.updatedAt))+"\n            ")]),e._v(" "),t("td",{staticClass:"fixed-col right"},[t("button",{staticClass:"cursor-pointer",on:{click:function(t){return e.showShareCompanyFilesFunc(r)}}},[t("share-outline-icon",{staticClass:"w-4 h-4"})],1)])])})),0):e._e()])])]),e._v(" "),e.pdfUser.length>10?t("FilePagination",{attrs:{totalFile:e.totalFile},on:{setPage:e.setPage}}):e._e(),e._v(" "),t("ShareFilesModal",{attrs:{userFile:e.userFile},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("CreateCompanyFolder",{attrs:{userFile:e.userFile},on:{refresh:e.setRefresh,resetUserFile:e.resetUserFile},model:{value:e.showCreateCompanyFolder,callback:function(t){e.showCreateCompanyFolder=t},expression:"showCreateCompanyFolder"}}),e._v(" "),t("upload-document-modal",{attrs:{folder:e.fileProps},on:{resetUserFolder:e.resetUserFolder},model:{value:e.showUploadDocumentModal,callback:function(t){e.showUploadDocumentModal=t},expression:"showUploadDocumentModal"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.userFile},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}}),e._v(" "),t("CreateTeam",{on:{refresh:e.setRefresh},model:{value:e.showCreateTeam,callback:function(t){e.showCreateTeam=t},expression:"showCreateTeam"}})],1)}),[],!1,null,"0a3f78e7",null);t.default=component.exports},652:function(e,t,r){"use strict";r.r(t);var l={},n=r(1),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2677:1171)"}},[t("path",{attrs:{d:"M25.7146 11.8304C26.4006 10.8694 26.8084 9.69624 26.8084 8.42552C26.8084 5.18232 24.1793 2.55324 20.9361 2.55324C20.8881 2.55324 20.8415 2.55927 20.7938 2.56047C19.792 1.02045 18.0591 0 16.0851 0C13.7951 0 11.8287 1.37244 10.9541 3.33795C7.44465 4.25473 4.85107 7.43724 4.85107 11.234C4.85107 13.3215 5.64056 15.2201 6.9288 16.6643C6.90656 16.8939 6.89355 17.1262 6.89355 17.3616C6.89355 21.3099 10.0942 24.5105 14.0425 24.5105C14.4728 24.5105 16.1866 24.4721 16.5956 24.3987L16.7687 22.6294C17.7802 23.1776 18.9387 23.4893 20.17 23.4893C24.1183 23.4893 27.3189 20.2886 27.3189 16.3403C27.3191 14.6297 26.7166 13.0608 25.7146 11.8304Z",fill:"#4CAF50"}}),e._v(" "),t("path",{attrs:{d:"M16.5957 21.8234C15.7764 22.0348 14.8691 22.0277 13.8995 21.5697C12.5863 20.9495 11.6347 19.6889 11.5059 18.2423C11.4552 17.6741 11.5227 17.1282 11.6846 16.6245C11.7483 16.4265 11.6663 16.2161 11.5055 16.0842C10.2502 15.0546 9.4468 13.4948 9.4468 11.7446C9.4468 9.47325 10.7974 7.52219 12.7374 6.6377C12.9399 6.5454 13.0704 6.34415 13.048 6.12279C13.0312 5.95635 13.0212 5.7879 13.0212 5.61693C13.0212 2.95675 14.8726 0.733752 17.3557 0.152807C16.9467 0.0578055 16.5232 0 16.0851 0C13.7951 0 11.8287 1.37244 10.9541 3.33795C7.44465 4.25473 4.85107 7.43724 4.85107 11.234C4.85107 13.3215 5.64056 15.2201 6.9288 16.6643C6.90656 16.8939 6.89356 17.1262 6.89356 17.3616C6.89356 21.3099 10.0942 24.5105 14.0425 24.5105C14.4728 24.5105 16.1866 24.4721 16.5956 24.3987V22.8383V21.8234H16.5957Z",fill:"#388E3C"}}),e._v(" "),t("path",{attrs:{d:"M15.5744 21.9572C15.558 21.9572 15.5422 21.955 15.5258 21.9548L15.0637 31.6593H18.1275L17.6753 22.1639C17.6591 21.8237 17.3186 21.5785 16.9999 21.6983C16.5563 21.8651 16.0764 21.9572 15.5744 21.9572Z",fill:"#AF6E5A"}}),e._v(" "),t("path",{attrs:{d:"M17.6753 22.1639C17.6591 21.8237 17.3186 21.5785 16.9999 21.6983C16.5563 21.8651 16.0764 21.9573 15.5744 21.9573C15.558 21.9573 15.5422 21.955 15.5258 21.9548L15.0637 31.6594H16.5956V23.3466C16.5956 23.1267 16.7363 22.9316 16.9448 22.8621L17.6967 22.6115L17.6753 22.1639Z",fill:"#965A50"}}),e._v(" "),t("path",{attrs:{d:"M19.149 32.1702H14.0426C13.7606 32.1702 13.532 31.9418 13.532 31.6596C13.532 31.3773 13.7606 31.1489 14.0426 31.1489H19.149C19.431 31.1489 19.6596 31.3773 19.6596 31.6596C19.6596 31.9418 19.431 32.1702 19.149 32.1702Z",fill:"#96BE4B"}})]),e._v(" "),t("defs",[t("clipPath",{attrs:{id:"clip0_2677:1171"}},[t("rect",{attrs:{width:"32.17",height:"32.17",fill:"white"}})])])])}),[],!1,null,null,null);t.default=component.exports},661:function(e,t,r){"use strict";r.r(t);var l={},n=r(1),component=Object(n.a)(l,(function(){var e=this._self._c;return e("svg",{staticClass:"fill-current",attrs:{width:"281",height:"214",viewBox:"0 0 281 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1355)"}},[e("path",{attrs:{d:"M240.28 173.309C198.871 205.688 123.773 191.009 109.658 145.481C109.44 144.888 109.258 144.272 109.103 143.646C108.407 140.842 110.632 138.196 113.503 137.87C152.846 133.398 190.924 115.461 196.223 90.9289C201.059 67.8088 168.979 58.3267 146.373 69.7781C121.103 82.6785 102.009 102.58 97.0286 125.188C96.5003 127.586 94.4657 129.428 92.0102 129.397C67.2831 129.09 44.0978 121.721 32.1821 103.079C11.0463 69.8534 45.9709 29.9914 89.0968 20.8773C93.6991 20.1354 92.0907 14.8696 87.4884 15.6115C28.3314 23.1066 -6.39897 79.8723 30.5114 118.002C44.1416 131.835 66.824 138.266 91.3102 138.865C93.9603 138.93 96.132 140.987 96.6037 143.595C100.779 166.689 124.615 186.419 153.685 195.916C189.637 207.536 224.259 197.391 247.465 178.276C251.235 175.266 244.02 170.664 240.28 173.309ZM133.621 90.8112C142.278 83.4101 153.53 75.1103 167.337 72.8846C180.641 70.6196 184.132 84.1099 184.177 89.9878C184.109 97.3256 176.57 103.345 169.646 107.945C156.585 117.224 136.219 124.73 115.103 127.982C111.79 128.492 109.069 125.532 110.2 122.377C114.372 110.736 123.52 99.9502 133.621 90.8112Z"}}),this._v(" "),e("path",{attrs:{d:"M264.012 159.559C249.959 158.461 235.348 158.054 221.598 159.55C215.993 160.213 218.074 165.883 223.652 165.585C234.807 164.988 246.322 166.254 257.334 167.482C256.462 172.186 255.561 177.256 254.186 181.921C252.898 185.492 248.957 190.692 251.683 194.576C253.046 196.519 255.555 196.715 258.122 196.181C264.287 194.827 264.885 187.163 266.203 183.227C268.221 176.776 269.207 170.612 269.72 164.042C269.891 161.854 267.023 159.794 264.012 159.559Z"}})])])}),[],!1,null,null,null);t.default=component.exports}}]);