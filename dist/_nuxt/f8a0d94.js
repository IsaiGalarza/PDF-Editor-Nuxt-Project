(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1316:function(e,t,o){var content=o(1592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("7e83cce4",content,!0,{sourceMap:!1})},1591:function(e,t,o){"use strict";o(1316)},1592:function(e,t,o){var n=o(15)((function(i){return i[1]}));n.push([e.i,".heart-icon[data-v-4c5c41b6]{transition:.3s}.scale-out[data-v-4c5c41b6]{transform:scale(1.4)}",""]),n.locals={},e.exports=n},1769:function(e,t,o){"use strict";o.r(t);o(76),o(35),o(91);var n=o(64),l=o(203),r=o(61),c=o(283),h=o(156),d={name:"searchShare",components:{HeartOutlineIcon:n.default,ShareIcon:l.default,ShareOutlineIcon:r.default,ShareFilesModal:c.default,QrcodeShare:h.default},props:{link:String,file:{type:Object},showShareIcon:{type:Boolean,default:!1},showLikeIcon:{type:Boolean,default:!0}},data:function(){return{fillHeartColor:"none",toggleHeartColor:!0,favouriteFileId:null,favouriteFileLoaded:!1,showShareCompanyFiles:!1,showQrcodeFiles:!1}},watch:{file:function(){this.getFavouriteFile()}},mounted:function(){this.getFavouriteFile()},computed:{user:function(){return this.$auth.user},isExistFavouriteData:function(){return this.favouriteFileLoaded}},methods:{animateElement:function(e){this.$auth.loggedIn&&(e.classList.add("scale-out"),setTimeout((function(){e.classList.remove("scale-out")}),300))},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},showShareCompanyFilesFunc:function(){this.showShareCompanyFiles=!0},setFileFavourite:function(){var e=this;this.$auth.loggedIn&&(this.animateElement(this.$refs.heart),this.file&&("none"==this.fillHeartColor?this.$axios.$post("/favourites",{fileId:this.file.id}).then((function(t){e.fillHeartColor="#77C360",e.favouriteFileId=t.id,e.getFavouriteFile()})):this.$axios.$delete("/favourites/".concat(this.favouriteFileId)).then((function(){e.fillHeartColor="none",e.getFavouriteFile()}))))},getFavouriteFile:function(){var e,t,o=this;this.$auth.loggedIn&&this.file&&this.$axios.$get("/favourites/?fileId=".concat(this.file.id,"&userId=").concat(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id)).then((function(e){var t;e.data.length>0&&(o.fillHeartColor="#77C360"),o.favouriteFileId=null===(t=e.data[0])||void 0===t?void 0:t.id,o.favouriteFileLoaded=!0}))},shareInDevice:function(){navigator.share?navigator.share({title:"Paperdaz",url:this.link}).then((function(){})).catch((function(e){})):console.log("Browser doesn't support this API !")}}},f=(o(1591),o(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"self-center flex items-center"},[t("button",{on:{click:e.showShareCompanyFilesFunc}},[t("ShareOutlineIcon")],1),e._v(" "),t("ShareFilesModal",{attrs:{userFile:e.file},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.file},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}})],1)}),[],!1,null,"4c5c41b6",null);t.default=component.exports}}]);