(window.webpackJsonp=window.webpackJsonp||[]).push([[279,141,142,143,144,145,148,150],{1143:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"LandingDivider"}),o=n(1),component=Object(o.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"h-6 bg-paperdazgreen-500"})}),[],!1,null,null,null);e.default=component.exports},1317:function(t,e,n){var content=n(1568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0c9480f8",content,!0,{sourceMap:!1})},1318:function(t,e,n){var content=n(1570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("577795f1",content,!0,{sourceMap:!1})},1319:function(t,e,n){var content=n(1572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c178a6fc",content,!0,{sourceMap:!1})},1567:function(t,e,n){"use strict";n(1317)},1568:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".slide-in{animation:flow-in 1s ease-in-out 1}@keyframes flow-in{0%{opacity:0}to{opacity:1}}",""]),r.locals={},t.exports=r},1569:function(t,e,n){"use strict";n(1318)},1570:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".img[data-v-4d6a7f61]{width:20%}.img[data-v-4d6a7f61]:first{align-self:end;transform:translateX(5px)}.img[data-v-4d6a7f61]:last-child{margin-left:-32px;margin-top:20px}@media screen and (max-width:450px){.img[data-v-4d6a7f61]:last-child{margin-top:40px}}.animation[data-v-4d6a7f61]{display:flex;align-items:flex-start;padding-top:83px}",""]),r.locals={},t.exports=r},1571:function(t,e,n){"use strict";n(1319)},1572:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,"*[data-v-59c1a251] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-59c1a251] .el-dialog__header{padding-bottom:20px}*[data-v-59c1a251] .el-dialog__footer,*[data-v-59c1a251] .el-dialog__header{text-align:left!important}*[data-v-59c1a251] .el-dialog__body{background:#fcfcfd}*[data-v-59c1a251] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.error-wrapper[data-v-59c1a251]{margin-top:0.5rem;margin-bottom:0.5rem;display:flex;flex-direction:row;align-items:center}.error-indicator[data-v-59c1a251]{margin-right:0.5rem;height:10px;width:10px;overflow:hidden;border-radius:100%;padding:2px}",""]),r.locals={},t.exports=r},1723:function(t,e,n){"use strict";n.r(e);n(88);var r=n(0).default.extend({name:"HeroPage",created:function(){var t=this;setInterval((function(){2===t.activeContent?t.activeContent=0:t.activeContent+=1}),3e3)},data:function(){return{activeContent:0,contents:[{article:"Perfect for small medical clinics to go paperless in minutes!",note:"20, 200, 2000 or more people can <br/>\n          complete a Paperlink for just $2.00"},{article:"Register, upload and Paperlink is created, no reason for not going paperless!",note:"20, 200, 2000 or more people can <br/>\n          complete a Paperlink for just $2.00"},{article:"Save time and money for everyone!",note:"20, 200, 2000 or more people can<br/> \n          complete a Paperlink for just $2.00"}]}}}),o=(n(1567),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container lg:py-20 sm:pb-15 sm:pt-10"},[e("div",{staticClass:"flex justify-between flex-wrap"},[e("div",{staticClass:"text-center sm:text-left md:w-6/12 sm:w-full"},[e("div",{staticClass:"max-w-[740px] flex flex-col justify-between w-full"},[t._l(t.contents,(function(content,n){return t.activeContent==n?e("div",{key:n,staticClass:"py-lg-4 py-2 slide-in relative"},[e("h1",{staticClass:"font-[500] text-3xl md:text-5xl leading-[42px] md:leading-[62px] text-white text-left"},[t._v("\n            "+t._s(content.article)+"\n          ")]),t._v(" "),e("div",{staticClass:"lg:my-12 mt-8 mb-4 font-medium lg:text-2xl text-left"},[e("p",{staticClass:"text-sm bg-paperdazgreen-500 inline-block p-3 text-white rounded",domProps:{innerHTML:t._s(content.note)}})])]):t._e()})),t._v(" "),e("div",{staticClass:"text-left"},[e("div",{staticClass:"w-[50%] flex items-center justify-between"},t._l(t.contents,(function(content,n){return e("button",{key:n,staticClass:"h-[7px] rounded-[30px]",class:[t.activeContent==n?"bg-white":"bg-white/50"],style:"width: ".concat(70/t.contents.length,"%"),on:{click:function(e){t.activeContent=n}}})})),0)])],2)]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"flex flex-col justify-between mt-2 mb-6"},[e("div",{staticClass:"py-lg-4 py-2 lg:inline-block"},[e("nuxt-link",{staticClass:"px-[110px] py-2 rounded-[15px] bg-white border-none outline-none inline-block",attrs:{to:"/package?tablevel=1"}},[t._v("\n        Register\n      ")])],1)])])}),[function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"h-fit sm:pt-0 pt-4 lg:w-6/12 sm:w-full md:text-right"},[t("img",{staticClass:"w-full md:w-[90%]",attrs:{src:"/img/hero_diplay.svg"}})])}],!1,null,null,null);e.default=component.exports},1724:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"LandingJoinSection"}),o=(n(1569),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"container flex"},[e("img",{staticClass:"img",staticStyle:{"margin-top":"80px"},attrs:{src:"/img/motion-first-part.svg",alt:""}}),t._v(" "),e("div",{staticClass:"animation flex-1"},[e("svg",{staticClass:"w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 550 102",fill:"none"}},[e("path",{attrs:{id:"path",d:"M1.58008 100.792C22.5217 60.8613 91.4514 -14.4219 199.638 3.89312C334.871 26.7869 414.733 96.0012 548.901 3.89312",stroke:"#487C38","stroke-width":"2.12965","stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":"5.32 5.32"}})]),t._v(" "),e("svg",{attrs:{id:"email",width:"35",height:"35",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0)"}},[e("path",{attrs:{d:"M10.1999 15.6288L8.55032 14.2462L5.95268 17.7586C5.94455 17.7697 5.93654 17.781 5.92919 17.7925C5.5717 18.3456 5.47498 18.907 5.65716 19.3728C5.81494 19.7769 6.16137 20.0664 6.6327 20.1877L6.63286 20.1878C6.85599 20.2452 7.10664 20.2648 7.37776 20.2458C7.39152 20.2449 7.40525 20.2435 7.41872 20.2417L11.7489 19.6635L11.3351 17.5512C11.2243 16.9865 10.6409 15.9984 10.1999 15.6288Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M27.8474 7.26331L12.3207 16.4313C12.4606 16.7366 12.5655 17.0362 12.6173 17.2996L14.0616 24.6695C14.2556 25.6595 14.7768 25.934 15.07 26.0095C15.3321 26.077 16.0088 26.1298 16.6329 25.1643L27.4858 8.37177C27.7291 7.99515 27.8513 7.61478 27.8474 7.26331Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M11.6585 15.3049L27.186 6.13642C27.0656 6.06796 26.9314 6.01406 26.7852 5.9764C26.5617 5.91886 26.311 5.89934 26.0399 5.91833L6.09434 7.31138C5.03906 7.3852 4.7163 7.90524 4.6178 8.20854C4.51927 8.512 4.47515 9.12244 5.28586 9.80175L11.0417 14.626C11.2471 14.7984 11.4588 15.0349 11.6585 15.3049Z",fill:"#77C360"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0"}},[e("rect",{attrs:{width:"22.3205",height:"22.3205",fill:"white",transform:"translate(6.53125 0.761719) rotate(14.4394)"}})])])])]),t._v(" "),e("img",{staticClass:"img",attrs:{src:"/img/motion-second-part.svg",alt:""}})]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container pt-20"},[e("h1",{staticClass:"font-bold text-4xl text-center mb-2"},[t._v("\n      Be SOCIAL RESPONSIBLE together\n    ")]),t._v(" "),e("p",{staticClass:"font-semibold text-center text-sm text-paperdazgray-300 mx-auto max-w-md mb-6"},[t._v("\n      Keep everyone safe and the world green!\n    ")])])},function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"flex -mt-5"},[t("img",{staticClass:"flex-1 w-full",attrs:{src:"/bg/bg.svg",alt:""}})])}],!1,null,"4d6a7f61",null);e.default=component.exports},1725:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"LandingPageInfo",data:function(){return{blocks:[{img:"/img/complete.svg",heading:"Complete",highlight:"Annotating tools to complete files"},{img:"/img/confirm.svg",heading:"Confirm",highlight:" Clients unique signature on every page"},{img:"/img/sign.svg",heading:"Sign",highlight:"Simple way to request signature"}]}}}),o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-gradient-to-b from-paperdazgreen-50 to-paperdazgreen-230 py-16 sm:py-20"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"font-bold text-4xl text-center mb-2"},[t._v("Three actions on Paperdaz")]),t._v(" "),e("p",{staticClass:"font-semibold text-center text-sm text-paperdazgray-300 mx-auto max-w-md mb-6"},[t._v("\n      Click on each to see how it works\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-6"},t._l(t.blocks,(function(n,i){return e("div",{key:i,staticClass:"px-8 py-9 rounded-2xl drop-shadow-[4px_4px_8px_rgba(0,0,0,0.3)] bg-white text-center flex-1"},[e("img",{staticClass:"object-contain w-72 h-56 max-w-full max-h-full mx-auto mb-1 min-w-[220px]",attrs:{src:n.img,alt:""}}),t._v(" "),e("p",{staticClass:"text-2xl mb-2 font-semibold"},[t._v(t._s(n.heading))]),t._v(" "),e("p",{staticClass:"text-paperdazgray-300"},[t._v("\n          "+t._s(n.highlight)+"\n        ")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},1726:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1143),l=r.default.extend({name:"LandingPageKeyFeatures",components:{LandingDivider:o.default},data:function(){return{fets:[{tag:"Paperdaz",des:"Direct Url link to every file",img:"Paperdaz_bg_white.svg"},{tag:"QR Code",des:"Simply scan to direct access to file",img:"QRCode_bg_white.svg"},{tag:"Papertag ",des:"Easy search with tag names for each file",img:"Papertag_bg_white.svg"},{tag:"Annotation Tools",des:"Type, Check, Line, Highlight, X, Circle, Draw, Signature, Name, Initials       ",img:"AutomationTool_bg_white.svg"},{tag:"Privacy Setting",des:"Public, Private, Do Not Post",img:"Privacy_bg_white.svg"},{tag:"Share & Request",des:"Easy  to share or send an action request",img:"ShareRequest_bg_white.svg"},{tag:"Transparency",des:"Copy of completed file will be sent to all users.",img:"Transparency_bg_white.svg"},{tag:"Security",des:"256-bit encryption to keep files secured",img:"Security_bg_white.svg"}]}}}),c=n(1),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{attrs:{id:"key-features-section"}},[e("div",{staticClass:"container py-20 content-center"},[e("h1",{staticClass:"font-bold text-4xl text-center mb-2"},[t._v("Key Features")]),t._v(" "),e("p",{staticClass:"font-semibold text-center text-sm text-paperdazgray-300 mx-auto max-w-md mb-6"},[t._v("\n      Paperdaz will replace paper\n    ")]),t._v(" "),e("div",{staticClass:"my-12 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-2 sm:gap-x-[6.5rem] gap-y-10"},t._l(t.fets,(function(n,i){return e("div",{key:i},[e("img",{staticClass:"mx-auto",attrs:{src:"/icons/keyfeatures/"+n.img,alt:""}}),t._v(" "),e("p",{staticClass:"mt-5 text-center font-semibold"},[t._v(t._s(n.tag))]),t._v(" "),e("p",{staticClass:"mt-3 text-center text-[13px] text-paperdazgray-400 font-medium"},[t._v("\n          "+t._s(n.des)+"\n        ")])])})),0)]),t._v(" "),e("landing-divider")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingDivider:n(1143).default})},1727:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1729),l=n(52),c=r.default.extend({name:"LandingPageQrScan",components:{LogoWithText:l.default,VueQrCode:o.a},data:function(){return{qrCodeData:(void 0,window.location.origin),qrCodeSize:200}}}),d=n(1),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"bg-gradient-to-t from-paperdazgreen-50 to-paperdazgreen-100",attrs:{id:"qr-scan-section"}},[e("div",{staticClass:"py-16"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"font-bold text-4xl text-center mb-12"},[t._v("Paperdaz Business Profile")]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-3"},[e("div",{staticClass:"drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] bg-white flex-1"},[e("div",{staticClass:"flex flex-col justify-center content-between"},[e("div",{staticClass:"px-8 py-8 bg-paperdazgreen-300 text-center"},[e("h3",{staticClass:"text-white font-bold mb-4 text-[38px]"},[t._v("Apple Dental")]),t._v(" "),e("div",{staticClass:"p-2 bg-white w-fit mx-auto"},[e("vue-qr-code",{attrs:{text:t.qrCodeData,size:t.qrCodeSize}})],1)]),t._v(" "),e("div",{staticClass:"pt-3 pb-4 md:pb-6 flex justify-center"},[e("logo-with-text",{staticClass:"mr-2 h-5 xs:h-6 sm:h-12 w-auto"})],1)])]),t._v(" "),e("div",{staticClass:"flex-1 px-3 md:px-6 lg:px-10 pb-5 pt-8 md:pb-8 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] bg-white text-center flex flex-col justify-between"},[e("div",[e("h4",{staticClass:"font-bold text-3xl mb-5"},[t._v("\n              Scan Apple Dental’s QR Code to see Business Paperdaz Files!\n            ")]),t._v(" "),t._m(0),t._v(" "),e("div",[e("p",{staticClass:"text-md mb-4 md:mb-10 font-[400] text-[20px]"},[t._v("\n                Simply register for a paid package, a QR code will be generated for each business account and for each Paperdaz file.\n              ")]),t._v(" "),e("div",{staticClass:"flex justify-center mt-3"},[e("button",{staticClass:"h-10 rounded-md shadow-md text-white bg-paperdazgreen-300 px-5 text-[13px] bg-paperdazgreen-300 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 text-white rounded shadow px-3 flex items-center justify-center whitespace-nowrap"},[e("nuxt-link",{staticClass:"hover:text-white",attrs:{to:"/packages/?type=default"}},[t._v("Paperdaz Your Business")])],1)])])])])])])]),t._v(" "),e("div",{staticClass:"h-[2px] bg-white w-full"})])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-md mt-5 mb-3 md:mb-7 font-[600]"},[t._v("\n              Your customer can simply scan QR code to access each file individually or all files at once on your "),e("span",{staticClass:"text-paperdazgreen-300"},[t._v("Business Paperdaz Files")]),t._v("!\n              ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoWithText:n(52).default})},1728:function(t,e,n){"use strict";n.r(e);n(26);var r=n(3),o=(n(18),n(278),n(7),n(0)),l=n(43),c=n(202),d=n(742),f=n.n(d),m=o.default.extend({name:"ResetPasswordModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},userInfo:{type:Object}},computed:{userPayload:function(){var t;return{token:f.a.sign({data:null===(t=this.userInfo.data)||void 0===t?void 0:t.user_id},"+Erqnl5F0JnIsW++d9U0BfwpJ6w="),action:"reset_password",isEmailVerified:!0,newPassword:this.password}},isPasswordEqual:function(){var t,e;return 0!==(null===(t=this.password)||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.length)&&this.password==this.confirm_pasword},getIsFormValid:function(){var t;return!!(this.charac.test(this.password)&&this.number.test(this.password)&&this.alphabet.test(this.password)&&(null===(t=this.password)||void 0===t?void 0:t.length)>8&&this.password===this.confirm_pasword)}},data:function(){return{password:"",email:"",confirm_pasword:"",showModal:!1,errorMessage:"",loading:!1,newSaveData:{},charac:/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,number:/[0-9]/,alphabet:/[A-Za-z]/,sendAction:null}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},userInfo:function(t){var e;this.email=null===(e=this.userInfo.data)||void 0===e?void 0:e.email}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getIsFormValid){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.$axios.$patch("/users/".concat(null===(n=t.userInfo.data)||void 0===n?void 0:n.user_id),t.userPayload).then((function(e){t.closeModal(),t.$nuxt.$router.push("/login?email=".concat(t.email))})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}));case 5:case"end":return e.stop()}}),e)})))()}}}),v=(n(1571),n(1)),component=Object(v.a)(m,(function(){var t,e,n=this,r=n._self._c;n._self._setupProxy;return r("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:n.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){n.showModal=t}},scopedSlots:n._u([{key:"title",fn:function(){return[r("span",{staticClass:"text-center text-xl block w-full"},[n._v("Create Password")])]},proxy:!0}])},[n._v(" "),r("div",{staticClass:"justify-center pb-2"},[r("el-input",{staticClass:"w-full",attrs:{placeholder:"user email",disabled:""},model:{value:n.email,callback:function(t){n.email=t},expression:"email"}}),n._v(" "),r("el-input",{staticClass:"w-full rounded-[100px] mt-3",attrs:{placeholder:"Create password",type:"password"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}}),n._v(" "),r("el-input",{staticClass:"w-full mt-3 mb-3",attrs:{placeholder:"Retype password",type:"password"},model:{value:n.confirm_pasword,callback:function(t){n.confirm_pasword=t},expression:"confirm_pasword"}}),n._v(" "),r("div",{},[r("div",{staticClass:"error-wrapper"},[r("div",{staticClass:"error-indicator",class:[n.alphabet.test(this.password)?"bg-[green]":"bg-[#808080b8]"]}),n._v(" "),r("span",{staticClass:"text-[11px]",class:[n.alphabet.test(this.password)?"text-[green]":"text-[#808080b8]"]},[n._v("\n          Password must contain upper")])]),n._v(" "),r("div",{staticClass:"error-wrapper"},[r("div",{staticClass:"error-indicator",class:[n.number.test(this.password)?"bg-[green]":"bg-[#808080b8]"]}),n._v(" "),r("span",{staticClass:"text-[11px]",class:[n.number.test(this.password)?"text-[green]":"text-[#808080b8]"]},[n._v("\n          Password must contain number")])]),n._v(" "),r("div",{staticClass:"error-wrapper"},[r("div",{staticClass:"error-indicator",class:[n.charac.test(this.password)?"bg-[green]":"bg-[#808080b8]"]}),n._v(" "),r("span",{staticClass:"text-[11px]",class:[n.charac.test(this.password)?"text-[green]":"text-[#808080b8]"]},[n._v("\n          Password must contain symbol")])]),n._v(" "),r("div",{staticClass:"error-wrapper"},[r("div",{staticClass:"error-indicator",class:[(null===(t=this.password)||void 0===t?void 0:t.length)>8?"bg-[green]":"bg-[#808080b8]"]}),n._v(" "),r("span",{staticClass:"text-[11px]",class:[(null===(e=this.password)||void 0===e?void 0:e.length)>8?"text-[green]":"text-[#808080b8]"]},[n._v("\n          Password must be morethan 8 characters")])]),n._v(" "),r("div",{staticClass:"error-wrapper"},[r("div",{staticClass:"error-indicator",class:[n.isPasswordEqual?"bg-[green]":"bg-[#808080b8]"]}),n._v(" "),r("span",{staticClass:"text-[11px]",class:[n.isPasswordEqual?"text-[green]":"text-[#808080b8]"]},[n._v("\n          Password match")])])]),n._v(" "),r("div",{staticClass:"w-full flex justify-center mt-5"},[r("button",{staticClass:"w-[80%] bg-paperdazgreen-300 text-white py-2 rounded flex items-center justify-center cursor-pointer",class:[n.getIsFormValid||!n.loading?"opacity-100":"opacity-40"],attrs:{disabled:!n.getIsFormValid||n.loading},on:{click:n.submit}},[n._v("\n        Continue\n        "),r("SpinnerDottedIcon",{directives:[{name:"show",rawName:"v-show",value:n.loading,expression:"loading"}],staticClass:"animate-spin ml-1",attrs:{width:"20",height:"20"}})],1)])],1)])}),[],!1,null,"59c1a251",null);e.default=component.exports},1975:function(t,e,n){"use strict";n.r(e);n(7),n(1892);var r,o,l,c,d=n(158),f=n(159),m=n(1941),v=n(1942),h=n(1894),x=n(1895),w=(n(28),n(88),n(48),n(1896)),_=n(1723),C=n(1724),y=n(1725),P=n(1726),k=n(1727),j=n(1143),L=n(1728),z=n(742),S=n.n(z);n(1899);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var O=(r=Object(w.Component)({layout:"landing",auth:!1,components:{HeroPage:_.default,LandingPageInfo:y.default,LandingPageQrScan:k.default,LandingPageKeyFeatures:P.default,LandingJoinSection:C.default,LandingDivider:j.default,ConfirmPassword:L.default}}),o=Object(w.Watch)("gsapReadyToSetup"),r((c=function(t){Object(m.a)(n,t);var e=I(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).beforeframe=!0,t.gsapLoaded=!1,t.motionPluginLoaded=!1,t}return Object(f.a)(n,[{key:"gsapReadyToSetup",get:function(){return this.gsapLoaded&&this.motionPluginLoaded}},{key:"data",value:function(){return{showConfirmPassword:!1,userDecodedInfo:{}}}},{key:"mounted",value:function(){var t,e,n;if("true"==sessionStorage.getItem("requestSentFlag")&&this.$notify({message:"Request has been sent."}),setTimeout((function(){sessionStorage.setItem("requestSentFlag",!1)}),300),null!==(t=this.$route.query)&&void 0!==t&&t.verificationToken){(null===(e=this.$route.query)||void 0===e?void 0:e.verificationToken)&&(this.showConfirmPassword=!0);var r=S.a.verify(null===(n=this.$route.query)||void 0===n?void 0:n.verificationToken,"+Erqnl5F0JnIsW++d9U0BfwpJ6w=");this.userDecodedInfo=r}}},{key:"head",value:function(){var t=this;return{title:"Paperdaz",script:[{hid:"gsap",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js",defer:!0,callback:function(){t.gsapLoaded=!0}},{hid:"gsap-motion-plugin",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/MotionPathPlugin.min.js",defer:!0,callback:function(){t.motionPluginLoaded=!0}}]}}},{key:"watchGsap",value:function(t){t&&(gsap.registerPlugin(MotionPathPlugin),gsap.to("#email",{duration:5,repeat:12,repeatDelay:2,ease:"power1.inOut",motionPath:{path:"#path",align:"#path",autoRotate:30,alignOrigin:[.5,.5],offsetY:-3}}))}}]),n}(w.Vue),Object(x.a)(c.prototype,"watchGsap",[o],Object.getOwnPropertyDescriptor(c.prototype,"watchGsap"),c.prototype),l=c))||l),M=O,R=n(1),component=Object(R.a)(M,(function(){var t=this,e=t._self._c;return e("div",{on:{click:function(t){}}},[e("div",{staticClass:"min-h-[60vh] grid place-items-center bg-paperdazgreen-300"},[e("hero-page"),t._v(" "),e("ConfirmPassword",{attrs:{userInfo:t.userDecodedInfo},model:{value:t.showConfirmPassword,callback:function(e){t.showConfirmPassword=e},expression:"showConfirmPassword"}})],1)])}),[],!1,null,null,null);e.default=component.exports},746:function(t,e){},747:function(t,e){},748:function(t,e){},749:function(t,e){},750:function(t,e){},751:function(t,e){},752:function(t,e){},753:function(t,e){},754:function(t,e){},755:function(t,e){}}]);