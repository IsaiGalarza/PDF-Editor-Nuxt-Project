(window.webpackJsonp=window.webpackJsonp||[]).push([[249,18,20,53,83,246,248],{1010:function(t,e,r){"use strict";r(781)},1011:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,'.profile-avatar[data-v-55e6e148]{position:relative}.profile-avatar[data-v-55e6e148]:before{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));content:"";position:absolute;inset:0;border-radius:50%;padding:2px;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}',""]),o.locals={},t.exports=o},1012:function(t,e,r){t.exports=r.p+"img/edit-icon.889145d.svg"},1033:function(t,e,r){"use strict";r.r(e);r(28);var o=r(3),n=(r(18),r(661)),l=r(662),c=r(663),d=r(740),f=r(38),h=r(14),v=Object(h.a)(f.a).extend({name:"FreeProductCard",components:{SingleLeafNoStalk:n.default,LocationIcon:l.default,CarmeraIcon:c.default,CropperImageUpload:d.default},data:function(){return{visibleUploadImageDialog:!1}},computed:{user:function(){return this.$auth.user},profilePhoto:function(){return this.$store.getters.profilePhoto}},methods:{uploadProfilePicture:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=t.target).files.length<1||n.files[0].size/1024/1024>2)){r.next=4;break}return e.$notify.error({message:"File size must be less than 2MB"}),r.abrupt("return");case 4:(l=new FormData).append("upload",n.files[0],"user-profile-picture.jpg"),l.append("type","profilePicture"),l.append("userId",e.user.id),e.$axios.$patch("/files",l).then(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.filterUsers();case 1:case"end":return t.stop()}}),t)})))).catch((function(){e.$notify.error({message:"Unable to upload profile picture"})}));case 9:case"end":return r.stop()}}),r)})))()}}}),m=(r(1010),r(1)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white rounded-2xl px-6 flex items-center justify-center"},[e("div",{staticClass:"flex flex-col items-center"},[e("p",{staticClass:"text-black text-center text-sm px-3.5 py-1.5 rounded-full mb-3"},[t._v("\n      Free Account\n    ")]),t._v(" "),e("div",{staticClass:"circle circle-50 rounded-full mx-auto mb-3 h-full p-1 cursor-pointer profile-avatar"},[e("img",{staticClass:"circle w-full h-full profilePhoto",attrs:{src:t.profilePhoto,alt:""}}),t._v(" "),e("div",{staticClass:"absolute w-[28px] h-[28px] flex justify-center items-center bg-paperdazgreen-400 rounded-full right-[4px] bottom-[4px]",on:{click:function(e){t.visibleUploadImageDialog=!0}}},[e("carmera-icon")],1)]),t._v(" "),e("p",{staticClass:"text-xl mb-1 capitalize"},[t._v("\n      "+t._s("".concat(t.user.firstName," ").concat(t.user.lastName))+"\n    ")])]),t._v(" "),e("cropper-image-upload",{attrs:{show:t.visibleUploadImageDialog},on:{visibleDialog:function(e){return t.visibleUploadImageDialog=e}}})],1)}),[],!1,null,"55e6e148",null);e.default=component.exports;installComponents(component,{CropperImageUpload:r(740).default})},1034:function(t,e,r){"use strict";r.r(e);r(28),r(81);var o=r(3),n=(r(18),r(664)),l=r(211),c=r(203),d=r(740),f=r(38),h=r(14),v=r(4),m=r(156),C=r(281),_=r(109),w=Object(h.a)(f.a).extend({name:"PaidProfileCard",components:{BarcodeIcon:n.default,ShareIcon:c.default,BuildingIcon:l.default,QrcodeShare:m.default,ShareFilesModal:C.default,CropperImageUpload:d.default,LetterAvatar:_.default},data:function(){return{showQrcode:!1,showShareCompany:!1,visibleUploadImageDialog:!1}},computed:{userFullName:function(){var t,e;return"".concat(null===(t=this.user)||void 0===t?void 0:t.firstName," ").concat(null===(e=this.user)||void 0===e?void 0:e.lastName)},profilePhoto:function(){return this.$store.getters.profilePhoto},user:function(){return this.$auth.user},link:function(){return"".concat(window.origin,"/public-profile/").concat(this.$auth.user.id)},userAccount:function(){switch(this.$auth.user.role){case v.a.PAID:return"PAID ACCOUNT";case v.a.TEAM:return"TEAM ACCOUNT"}},mainUserLink:function(){var t,e;switch(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.role){case v.a.PAID:return(this.$auth.user||{}).id;case v.a.TEAM:return(this.$auth.user||{}).mainAccountId}(this.$auth.user||{}).id}},methods:{showQrcodeFunc:function(){this.showQrcode=!0},showShareCompanyFunc:function(){this.showShareCompany=!0},PopUpFileInput:function(){try{var t;(null===(t=this.$refs)||void 0===t?void 0:t.profileInput).click()}catch(t){console.log(t)}},uploadProfilePicture:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=event.target).files.length<1||r.files[0].size/1024/1024>2)){t.next=4;break}return e.$notify.error({message:"File size must be less than 2MB"}),t.abrupt("return");case 4:(o=new FormData).append("upload",r.files[0],"user-profile-picture.jpg"),o.append("type","profilePicture"),o.append("userId",e.user.id),e.$axios.$patch("/files",o).then((function(){e.filterUsers()})).catch((function(){e.$notify.error({message:"Unable to upload profile picture"})}));case 9:case"end":return t.stop()}}),t)})))()}}}),V=r(1),component=Object(V.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white rounded-2xl"},[e("div",{staticClass:"rounded-2xl bg-white py-6 px-6 flex items-center justify-center"},[e("div",{staticClass:"flex flex-col items-center"},[e("h3",{staticClass:"uppercase text-paperdazgray-500 font-semibold text-center mb-4 text-xl"},[t._v("\n        "+t._s(t.userAccount)+"\n      ")]),t._v(" "),t.$auth.user.profilePicture?e("div",{staticClass:"w-40 h-40 mx-auto p-0.5 mb-2"},[e("div",{staticClass:"w-full h-full border-2 border-[#B7EF94] p-2 cursor-pointer rounded-lg",on:{click:function(e){t.visibleUploadImageDialog=!0}}},[e("img",{staticClass:"w-full h-full profilePhoto rounded-lg",attrs:{src:t.profilePhoto,alt:""}})])]):e("letter-avatar",{staticClass:"w-40 h-40 rounded-1 object-cover cursor-pointer mr-1 mb-2",staticStyle:{width:"160px",height:"160px","font-size":"70px"},attrs:{username:t.user.companyName||t.userFullName}}),t._v(" "),e("p",{staticClass:"text-lg font-semibold mb-2 capitalize"},[t._v("\n        "+t._s("".concat(t.user.firstName," ").concat(t.user.lastName))+"\n      ")])],1)]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"flex items-center py-2 px-3 shadow rounded-md w-9/12 mb-3",on:{click:function(e){t.visibleUploadImageDialog=!0}}},[e("img",{staticClass:"mr-3",attrs:{src:r(1012)}}),t._v("\n      "+t._s(t.$auth.user.profilePicture?"Edit":"Upload")+"\n    ")])]),t._v(" "),e("QrcodeShare",{attrs:{link:t.link},model:{value:t.showQrcode,callback:function(e){t.showQrcode=e},expression:"showQrcode"}}),t._v(" "),e("ShareFilesModal",{attrs:{link:t.link},model:{value:t.showShareCompany,callback:function(e){t.showShareCompany=e},expression:"showShareCompany"}}),t._v(" "),e("cropper-image-upload",{attrs:{show:t.visibleUploadImageDialog},on:{visibleDialog:function(e){return t.visibleUploadImageDialog=e}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CropperImageUpload:r(740).default})},1062:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(1033),l=r(1034),c=r(4),d=o.default.extend({name:"ProfileCard",components:{FreeProfileCard:n.default},data:function(){return{}},computed:{userType:function(){return this.$store.getters.userType},profileCardComponent:function(){switch(this.userType){case c.a.FREE:return n.default;case c.a.PAID:case c.a.TEAM:return l.default;default:return{render:function(t){return t("h1","Loading...")}}}}}}),f=r(1),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(t.profileCardComponent,{tag:"component",staticClass:"h-full"})],1)}),[],!1,null,null,null);e.default=component.exports},661:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"SingleLeafNoStalk"}),n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2308_1974)"}},[e("path",{attrs:{d:"M8.32066 0.185059C8.32066 0.185059 9.29721 2.57412 5.11189 4.17884C2.83769 5.05055 1.09097 7.28485 3.17656 10.7363C3.34928 9.19355 4.08989 5.79202 7.27449 5.01582C7.27449 5.01582 4.31045 6.12415 4.04862 11.1411C5.57166 11.355 9.14365 11.4986 10.2042 8.39886C11.6046 4.30336 8.32066 0.185059 8.32066 0.185059Z",fill:"#3A7F0D"}}),t._v(" "),e("path",{attrs:{d:"M4.05 11.1202C7.2833 9.82985 9.63592 6.80694 9.96061 3.19832C9.29962 1.41533 8.32066 0.185059 8.32066 0.185059C8.32066 0.185059 9.29721 2.57412 5.11189 4.17884C2.83769 5.05055 1.09097 7.28485 3.17656 10.7363C3.34928 9.19355 4.08989 5.79202 7.27449 5.01582C7.27431 5.01584 4.31909 6.12141 4.05 11.1202Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M2.85402 4.25834C3.02096 4.25834 3.15629 4.12301 3.15629 3.95608C3.15629 3.78914 3.02096 3.65381 2.85402 3.65381C2.68709 3.65381 2.55176 3.78914 2.55176 3.95608C2.55176 4.12301 2.68709 4.25834 2.85402 4.25834Z",fill:"#3A7F0D"}}),t._v(" "),e("path",{attrs:{d:"M3.80379 3.87027C3.92302 3.87027 4.01968 3.77361 4.01968 3.65437C4.01968 3.53514 3.92302 3.43848 3.80379 3.43848C3.68455 3.43848 3.58789 3.53514 3.58789 3.65437C3.58789 3.77361 3.68455 3.87027 3.80379 3.87027Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M3.60907 2.14295C3.90716 2.14295 4.14881 1.9013 4.14881 1.60322C4.14881 1.30513 3.90716 1.06348 3.60907 1.06348C3.31099 1.06348 3.06934 1.30513 3.06934 1.60322C3.06934 1.9013 3.31099 2.14295 3.60907 2.14295Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M5.27135 3.00658C5.36674 3.00658 5.44407 2.92925 5.44407 2.83385C5.44407 2.73846 5.36674 2.66113 5.27135 2.66113C5.17596 2.66113 5.09863 2.73846 5.09863 2.83385C5.09863 2.92925 5.17596 3.00658 5.27135 3.00658Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M6.71824 2.35885C6.99248 2.35885 7.2148 2.13653 7.2148 1.86229C7.2148 1.58804 6.99248 1.36572 6.71824 1.36572C6.444 1.36572 6.22168 1.58804 6.22168 1.86229C6.22168 2.13653 6.444 2.35885 6.71824 2.35885Z",fill:"#49A010"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2308_1974"}},[e("rect",{attrs:{width:"11.0541",height:"11.0541",fill:"white",transform:"translate(0.870117 0.185059)"}})])])])}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,r){"use strict";r.r(e);var o={name:"location-icon",props:["width"]},n=r(1),component=Object(n.a)(o,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"14",height:"16",viewBox:"0 0 14 16",fill:"none"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.17773 6.63956C1.18854 3.45912 3.77556 0.889619 6.956 0.900425C10.1364 0.91123 12.7059 3.49825 12.6951 6.67869V6.7439C12.656 8.81129 11.5016 10.7222 10.0864 12.2156C9.27707 13.0561 8.37324 13.8002 7.39295 14.433C7.13083 14.6598 6.74203 14.6598 6.47991 14.433C5.01854 13.4818 3.73594 12.2809 2.69078 10.8852C1.75925 9.66812 1.23036 8.19088 1.17773 6.65912L1.17773 6.63956Z",stroke:"#1400FF","stroke-width":"1.125","stroke-linecap":"round","stroke-linejoin":"round"}}),this._v(" "),t("circle",{attrs:{cx:"6.9355",cy:"6.74995",r:"1.84565",stroke:"#1400FF","stroke-width":"1.125","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,"196bb3cf",null);e.default=component.exports},663:function(t,e,r){"use strict";r.r(e);var o={name:"camera-icon",props:["width"]},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.6996 3.77147V3.77147C13.3888 3.77147 13.1071 3.5923 12.9746 3.3123C12.7355 2.80564 12.4313 2.15814 12.2513 1.80564C11.9855 1.28147 11.5546 0.976471 10.958 0.972305C10.948 0.971471 7.05464 0.971471 7.04464 0.972305C6.44797 0.976471 6.01797 1.28147 5.7513 1.80564C5.57214 2.15814 5.26797 2.80564 5.0288 3.3123C4.8963 3.5923 4.6138 3.77147 4.3038 3.77147V3.77147C2.64047 3.77147 1.29297 5.11897 1.29297 6.78147V11.7281C1.29297 13.3898 2.64047 14.7381 4.3038 14.7381H13.6996C15.3621 14.7381 16.7096 13.3898 16.7096 11.7281V6.78147C16.7096 5.11897 15.3621 3.77147 13.6996 3.77147Z",stroke:"white","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.3536 8.95831C6.35277 10.4191 7.54527 11.6141 9.0036 11.6133C10.4594 11.6116 11.6486 10.4216 11.6511 8.96414C11.6536 7.50081 10.4653 6.30831 9.00527 6.30664C7.53693 6.30498 6.34193 7.51748 6.3536 8.95831Z",stroke:"white","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M13.0861 7.00925C13.0056 7.00099 12.926 6.97998 12.837 6.94413C12.7379 6.90012 12.6521 6.84414 12.5692 6.75989C12.4203 6.60143 12.334 6.3942 12.334 6.18042C12.334 6.06686 12.3572 5.95431 12.4025 5.85235C12.448 5.74906 12.5018 5.66192 12.5991 5.56714C12.6732 5.50267 12.749 5.45079 12.8527 5.40512C13.1601 5.28331 13.5257 5.35609 13.7543 5.58452C13.8228 5.652 13.8804 5.73343 13.9124 5.80211L13.9314 5.8508C13.9774 5.95431 14.0007 6.06686 14.0007 6.18042C14.0007 6.39853 13.9155 6.60025 13.7574 6.76815C13.6208 6.90569 13.4414 6.99026 13.25 7.00926L13.1673 7.01335L13.0861 7.00925Z",fill:"white"}})])}),[],!1,null,"50ef2c1a",null);e.default=component.exports},664:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({name:"BarcodeIcon"}),n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0586 0V7.94115H26.9997V0H19.0586ZM25.4115 6.35292H20.6468V1.58823H25.4115V6.35292Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 3.17676H23.8226V4.76499H22.2344V3.17676Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 26.9997H26.9997V19.0586H19.0586V26.9997ZM20.6468 20.6468H25.4115V25.4115H20.6468V20.6468Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 22.2354H23.8226V23.8236H22.2344V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M0 26.9997H7.94115V19.0586H0V26.9997ZM1.58823 20.6468H6.35292V25.4115H1.58823V20.6468Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17578 22.2354H4.76401V23.8236H3.17578V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 25.4121H13.4999V27.0003H9.5293V25.4121Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 22.2354H11.9116V23.8236H9.5293V22.2354Z"}}),t._v(" "),e("path",{attrs:{d:"M4.76367 15.8828H6.3519V17.471H4.76367V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17646 15.8825H1.58823V12.7061H0V17.4707H3.17646V15.8825Z"}}),t._v(" "),e("path",{attrs:{d:"M25.4124 15.8825H23.8242V17.4707H27.0007V12.7061H25.4124V15.8825Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 15.8828H22.2351V17.471H19.0586V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 15.8828H17.4706V17.471H13.5V15.8828Z"}}),t._v(" "),e("path",{attrs:{d:"M15.0879 25.4121H17.4702V27.0003H15.0879V25.4121Z"}}),t._v(" "),e("path",{attrs:{d:"M15.8823 22.2351H13.5V23.8233H17.4706V19.0586H15.8823V22.2351Z"}}),t._v(" "),e("path",{attrs:{d:"M9.52958 20.6475H13.5002V19.0593H11.1178V15.8828H7.94141V17.471H9.52958V20.6475Z"}}),t._v(" "),e("path",{attrs:{d:"M15.0879 3.17676H17.4702V4.76499H15.0879V3.17676Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 9.5293H20.6468V11.1175H19.0586V9.5293Z"}}),t._v(" "),e("path",{attrs:{d:"M19.0586 12.7061H20.6468V14.2943H19.0586V12.7061Z"}}),t._v(" "),e("path",{attrs:{d:"M22.2344 14.294H23.8226V11.1175H26.9991V9.5293H22.2344V14.294Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 7.94077H15.8823V14.2937H17.4706V6.35254H13.5V7.94077Z"}}),t._v(" "),e("path",{attrs:{d:"M6.35352 14.2946H13.5006V12.7064H7.94175V11.1182H6.35352V14.2946Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17646 14.294H4.76469V9.5293H0V11.1175H3.17646V14.294Z"}}),t._v(" "),e("path",{attrs:{d:"M6.35352 6.35254H7.94174V9.529H6.35352V6.35254Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 9.5293H13.4999V11.1175H9.5293V9.5293Z"}}),t._v(" "),e("path",{attrs:{d:"M11.1175 4.76499H13.4999V3.17676H9.5293V7.94145H11.1175V4.76499Z"}}),t._v(" "),e("path",{attrs:{d:"M13.5 0H17.4706V1.58823H13.5V0Z"}}),t._v(" "),e("path",{attrs:{d:"M1.58823 1.58823H4.76469V0H0V4.76469H1.58823V1.58823Z"}}),t._v(" "),e("path",{attrs:{d:"M9.5293 0H11.9116V1.58823H9.5293V0Z"}}),t._v(" "),e("path",{attrs:{d:"M3.17578 4.76469H7.94047V0H6.35224V3.17646H3.17578V4.76469Z"}}),t._v(" "),e("path",{attrs:{d:"M0 6.35254H4.76469V7.94077H0V6.35254Z"}})])}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,r){var content=r(1011);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("22007a41",content,!0,{sourceMap:!1})}}]);