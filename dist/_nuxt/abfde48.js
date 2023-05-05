(window.webpackJsonp=window.webpackJsonp||[]).push([[260,18,259],{1034:function(t,e,r){t.exports=r.p+"img/edit-icon.889145d.svg"},1091:function(t,e,r){"use strict";r.r(e);r(91);var o=r(3),n=(r(18),r(35),r(670)),l=r(211),d=r(203),c=r(774),h=r(37),m=r(14),f=r(4),v=r(156),H=r(283),V=r(83),M=Object(m.a)(h.a).extend({name:"PaidProfileCard",components:{BarcodeIcon:n.default,ShareIcon:d.default,BuildingIcon:l.default,QrcodeShare:v.default,ShareFilesModal:H.default,CropperImageUpload:c.default,LetterAvatar:V.default},data:function(){return{showQrcode:!1,showShareCompany:!1,visibleUploadImageDialog:!1,dateFormat:["dd-mm-yyyy","dd/mm/yyyy","dd/mm/yy","dd.mm.yyyy"],timeFormat:["h:MM TT","h:MM:ss TT","h:MM:ss TT Z","HH:MM:ss"]}},computed:{userFullName:function(){var t,e;return"".concat(null===(t=this.user)||void 0===t?void 0:t.firstName," ").concat(null===(e=this.user)||void 0===e?void 0:e.lastName)},profilePhoto:function(){return this.$store.getters.profilePhoto},user:function(){return this.$auth.user},link:function(){return"".concat(window.origin,"/public-profile/").concat(this.$auth.user.id)},userAccount:function(){switch(this.$auth.user.role){case f.a.PAID:return"PAID ACCOUNT";case f.a.TEAM:return"TEAM ACCOUNT"}},mainUserLink:function(){var t,e;switch(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.role){case f.a.PAID:return(this.$auth.user||{}).id;case f.a.TEAM:return(this.$auth.user||{}).mainAccountId}(this.$auth.user||{}).id}},methods:{onDateFormatSelected:function(t){this.$store.commit("SET_DATEFORMAT",t)},onTimeFormatSelected:function(t){this.$store.commit("SET_TIMEFORMAT",t)},showQrcodeFunc:function(){this.showQrcode=!0},showShareCompanyFunc:function(){this.showShareCompany=!0},PopUpFileInput:function(){try{var t;(null===(t=this.$refs)||void 0===t?void 0:t.profileInput).click()}catch(t){console.log(t)}},uploadProfilePicture:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=event.target).files.length<1||r.files[0].size/1024/1024>2)){t.next=4;break}return e.$notify.error({message:"File size must be less than 2MB"}),t.abrupt("return");case 4:(o=new FormData).append("upload",r.files[0],"user-profile-picture.jpg"),o.append("type","profilePicture"),o.append("userId",e.user.id),e.$axios.$patch("/files",o).then((function(){e.filterUsers()})).catch((function(){e.$notify.error({message:"Unable to upload profile picture"})}));case 9:case"end":return t.stop()}}),t)})))()}}}),w=r(1),component=Object(w.a)(M,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white py-3 min-h-[100px] rounded-2xl"},[e("div",{staticClass:"rounded-2xl bg-white py-6 px-6 flex items-center justify-center"},[e("div",{staticClass:"flex flex-col items-center"},[t.$auth.user.profilePicture?e("div",{staticClass:"w-40 h-40 mx-auto p-0.5 mb-2"},[e("div",{staticClass:"w-full h-full border-2 border-[#679b46] p-2 cursor-pointer rounded-lg",on:{click:function(e){t.visibleUploadImageDialog=!0}}},[e("img",{staticClass:"w-full h-full profilePhoto rounded-lg",attrs:{src:t.profilePhoto,alt:""}})])]):e("letter-avatar",{staticClass:"w-40 h-40 rounded-4 object-cover cursor-pointer mr-1 mb-2",staticStyle:{width:"120px",height:"120px","font-size":"70px"},attrs:{username:t.user.companyName||t.userFullName}})],1)]),t._v(" "),e("div",{staticClass:"flex mb-3 flex-col items-center justify-center"},[e("button",{staticClass:"flex items-center py-2 px-4 justify-center rounded-lg mb-5",staticStyle:{"box-shadow":"0px 0px 4px rgba(0, 0, 0, 0.25)"},on:{click:function(e){t.visibleUploadImageDialog=!0}}},[e("img",{staticClass:"mr-3",attrs:{src:r(1034)}}),t._v("\n      "+t._s(t.$auth.user.profilePicture?"Edit":"Upload")+"\n    ")]),t._v(" "),e("el-dropdown",{staticClass:"w-full",attrs:{trigger:"click"},on:{command:t.onDateFormatSelected}},[e("div",{staticClass:"flex w-full mb-4 items-center justify-center"},[e("button",{staticClass:"border-[1px] w-[85%] py-2.5 rounded-[10px] border-[#22252948] flex items-center justify-center text-[#22252948]"},[t._v("\n          Date format\n          "),e("img",{staticClass:"ml-4 scale-75",attrs:{src:r(804),alt:""}})])]),t._v(" "),e("el-dropdown-menu",{staticClass:"table-menu-dropdown-menu hidden sm:block",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.dateFormat,(function(r,o,n){return e("el-dropdown-item",{key:n,attrs:{command:r}},[e("p",[t._v(t._s(r))])])})),1)],1),t._v(" "),e("el-dropdown",{staticClass:"w-full",attrs:{trigger:"click"},on:{command:t.onTimeFormatSelected}},[e("div",{staticClass:"flex w-full mb-4 items-center justify-center"},[e("button",{staticClass:"border-[1px] w-[85%] py-2.5 rounded-[10px] border-[#22252948] flex items-center justify-center text-[#22252948]"},[t._v("\n          Time format\n          "),e("img",{staticClass:"ml-4 scale-75",attrs:{src:r(804),alt:""}})])]),t._v(" "),e("el-dropdown-menu",{staticClass:"table-menu-dropdown-menu hidden sm:block",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.timeFormat,(function(r,o,n){return e("el-dropdown-item",{key:n,attrs:{command:r}},[e("p",[t._v(t._s(r))])])})),1)],1)],1),t._v(" "),e("QrcodeShare",{attrs:{link:t.link},model:{value:t.showQrcode,callback:function(e){t.showQrcode=e},expression:"showQrcode"}}),t._v(" "),e("ShareFilesModal",{attrs:{link:t.link},model:{value:t.showShareCompany,callback:function(e){t.showShareCompany=e},expression:"showShareCompany"}}),t._v(" "),e("cropper-image-upload",{attrs:{show:t.visibleUploadImageDialog},on:{visibleDialog:function(e){return t.visibleUploadImageDialog=e}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CropperImageUpload:r(774).default})},1133:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(1091),l=(r(4),o.default.extend({name:"ProfileCard",components:{PaidProfileCard:n.default},data:function(){return{}},computed:{userType:function(){return this.$store.getters.userType},profileCardComponent:function(){return n.default}}})),d=r(1),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(t.profileCardComponent,{tag:"component",staticClass:"h-full"})],1)}),[],!1,null,null,null);e.default=component.exports},670:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"BarcodeIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0586 0V7.94115H26.9997V0H19.0586ZM25.4115 6.35292H20.6468V1.58823H25.4115V6.35292Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 3.17676H23.8226V4.76499H22.2344V3.17676Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 26.9997H26.9997V19.0586H19.0586V26.9997ZM20.6468 20.6468H25.4115V25.4115H20.6468V20.6468Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 22.2354H23.8226V23.8236H22.2344V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M0 26.9997H7.94115V19.0586H0V26.9997ZM1.58823 20.6468H6.35292V25.4115H1.58823V20.6468Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17578 22.2354H4.76401V23.8236H3.17578V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 25.4121H13.4999V27.0003H9.5293V25.4121Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 22.2354H11.9116V23.8236H9.5293V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M4.76367 15.8828H6.3519V17.471H4.76367V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17646 15.8825H1.58823V12.7061H0V17.4707H3.17646V15.8825Z"}}),t._v(" "),e("path",{attrs:{d:"M25.4124 15.8825H23.8242V17.4707H27.0007V12.7061H25.4124V15.8825Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 15.8828H22.2351V17.471H19.0586V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 15.8828H17.4706V17.471H13.5V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M15.0879 25.4121H17.4702V27.0003H15.0879V25.4121Z"}}),t._v(" "),e("path",{attrs:{d:"M15.8823 22.2351H13.5V23.8233H17.4706V19.0586H15.8823V22.2351Z"}}),t._v(" "),e("path",{attrs:{d:"M9.52958 20.6475H13.5002V19.0593H11.1178V15.8828H7.94141V17.471H9.52958V20.6475Z"}}),t._v(" "),e("path",{attrs:{d:"M15.0879 3.17676H17.4702V4.76499H15.0879V3.17676Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 9.5293H20.6468V11.1175H19.0586V9.5293Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 12.7061H20.6468V14.2943H19.0586V12.7061Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 14.294H23.8226V11.1175H26.9991V9.5293H22.2344V14.294Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 7.94077H15.8823V14.2937H17.4706V6.35254H13.5V7.94077Z"}}),t._v(" "),e("path",{attrs:{d:"M6.35352 14.2946H13.5006V12.7064H7.94175V11.1182H6.35352V14.2946Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17646 14.294H4.76469V9.5293H0V11.1175H3.17646V14.294Z"}}),t._v(" "),e("path",{attrs:{d:"M6.35352 6.35254H7.94174V9.529H6.35352V6.35254Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 9.5293H13.4999V11.1175H9.5293V9.5293Z"}}),t._v(" "),e("path",{attrs:{d:"M11.1175 4.76499H13.4999V3.17676H9.5293V7.94145H11.1175V4.76499Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 0H17.4706V1.58823H13.5V0Z"}}),t._v(" "),e("path",{attrs:{d:"M1.58823 1.58823H4.76469V0H0V4.76469H1.58823V1.58823Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 0H11.9116V1.58823H9.5293V0Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17578 4.76469H7.94047V0H6.35224V3.17646H3.17578V4.76469Z"}}),t._v(" "),e("path",{attrs:{d:"M0 6.35254H4.76469V7.94077H0V6.35254Z"}})])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjEwMDcgMTUuMDk4TDAuMTc5NDU1IDEuMDgwOTRMMTQuNzExMiAwLjkxMTIwMkw3LjYxMDA3IDE1LjA5OFoiIGZpbGw9IiNDNEM0QzQiLz4KPC9zdmc+Cg=="}}]);