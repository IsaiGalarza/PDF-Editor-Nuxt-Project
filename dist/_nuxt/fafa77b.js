(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1080:function(e,t,o){var content=o(1414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("e77c3b0e",content,!0,{sourceMap:!1})},1413:function(e,t,o){"use strict";o(1080)},1414:function(e,t,o){var l=o(14)((function(i){return i[1]}));l.push([e.i,".heart-icon[data-v-148abba8]{transition:.3s}.scale-out[data-v-148abba8]{transform:scale(1.4)}",""]),l.locals={},e.exports=l},1644:function(e,t,o){"use strict";o.r(t);o(77),o(27),o(79);var l=o(65),n=o(203),r=o(62),c=o(282),h=o(155),d={name:"ShareFolder",components:{HeartOutlineIcon:l.default,ShareIcon:n.default,ShareOutlineIcon:r.default,ShareFilesModal:c.default,QrcodeShare:h.default},props:{link:String,folder:{type:Object},showShareIcon:{type:Boolean,default:!1}},data:function(){return{fillHeartColor:"none",toggleHeartColor:!0,favouriteFileId:null,showShareCompanyFiles:!1,showQrcodeFiles:!1}},watch:{folder:function(){this.getFavouriteFile()}},mounted:function(){},computed:{user:function(){return this.$auth.user}},methods:{animateElement:function(e){this.$auth.loggedIn&&(e.classList.add("scale-out"),setTimeout((function(){e.classList.remove("scale-out")}),300))},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},showShareCompanyFilesFunc:function(){this.showShareCompanyFiles=!0},setFileFavourite:function(){var e=this;this.$auth.loggedIn&&(this.animateElement(this.$refs.heart),this.folder&&("none"==this.fillHeartColor?this.$axios.$post("/favourites",{folderId:this.folder.id}).then((function(t){e.fillHeartColor="#77C360",e.favouriteFileId=t.id,e.getFavouriteFile()})):this.$axios.$delete("/favourites/".concat(this.favouriteFileId)).then((function(){e.fillHeartColor="none",e.getFavouriteFile()}))))},getFavouriteFile:function(){var e,t,o=this;this.$auth.loggedIn&&this.folder&&this.$axios.$get("/favourites/?folderId=".concat(this.folder.id,"&userId=").concat(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id)).then((function(e){var t;e.data.length>0&&(o.fillHeartColor="#77C360"),o.favouriteFileId=null===(t=e.data[0])||void 0===t?void 0:t.id}))},shareInDevice:function(){navigator.share?navigator.share({title:"Paperdaz",url:this.link}).then((function(){})).catch((function(e){})):console.log("Browser doesn't support this API !")}}},f=(o(1413),o(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"self-center flex items-center"},[e.$auth.loggedIn&&e.showShareIcon?t("button",{staticClass:"mr-1.5 pr-1.5 border-[#EBEBEB] border-r flex",on:{click:e.setFileFavourite}},[t("span",{ref:"heart",staticClass:"inline-block heart-icon"},[t("heart-outline-icon",{attrs:{fillColor:e.toggleHeartColor?e.fillHeartColor:"rgb(119,181,80)",width:"22",height:"22"}})],1)]):e._e(),e._v(" "),t("button",{on:{click:e.showShareCompanyFilesFunc}},[t("ShareOutlineIcon")],1),e._v(" "),t("ShareFilesModal",{attrs:{userFile:e.folder},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.folder},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}})],1)}),[],!1,null,"148abba8",null);t.default=component.exports}}]);