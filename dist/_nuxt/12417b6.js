(window.webpackJsonp=window.webpackJsonp||[]).push([[116,7,117,118],{738:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(8),r(24),r(29),r(996),r(420),r(781),r(782),r(783),r(784),r(785),r(786),r(787),r(788),r(789),r(790),r(791),r(792),r(793),r(794),r(795),r(796),r(797),r(798),r(799),r(800),r(801),r(802),r(803),r(804),r(805),r(105),r(18),r(38)),l=r(16),c=r(865),d=r(871),x=r(872),m=r(287),h=Object(l.a)(n.a).extend({name:"cropper-image-upload",components:{Cropper:c.a,VerticalButtons:d.default,SquareButton:x.default,ballloader:m.default},data:function(){return{dialogVisible:!1,imageUpload:!1,image:{src:null,type:null},size:{width:null,height:null},windowWidth:0}},props:{show:{type:Boolean,default:!1}},emits:["visibleDialog"],mounted:function(){},created:function(){this.windowWidth=window.innerWidth,window.addEventListener("resize",this.onWindowResizeHandle)},destroyed:function(){window.removeEventListener("resize",this.onWindowResizeHandle)},methods:{boundaries:function(e){var t=e.cropper;e.imageSize;return{width:t.clientWidth,height:t.clientHeight}},updateSize:function(e){var t=e.coordinates;this.size.width=Math.round(t.width),this.size.height=Math.round(t.height)},saveImage:function(){var e=this;this.$refs.cropper.getResult().canvas.toBlob((function(t){e.uploadProfilePicture(t)}),this.image.type)},uploadProfilePicture:function(image){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.imageUpload=!0,(r=new FormData).append("upload",image,"user-profile-picture.jpg"),r.append("type","profilePicture"),r.append("userId",e.user.id),t.next=7,e.$axios.$patch("/files",r).then((function(t){e.$emit("visibleDialog",!1),e.imageUpload=!1,e.reset(),e.filterUsers()})).catch((function(t){console.log({err:t}),e.imageUpload=!1,e.$notify.error({message:"Unable to upload profile picture"})}));case 7:case"end":return t.stop()}}),t)})))()},loadImage:function(e){var t=this,r=e.target.files;if(r&&r[0]){this.image.src&&URL.revokeObjectURL(this.image.src);var o=URL.createObjectURL(r[0]),n=new FileReader;n.onload=function(e){t.image={src:o,type:t.getMimeType(e.target.result,r[0].type)}},n.readAsArrayBuffer(r[0])}},zoom:function(e){this.$refs.cropper.zoom(e)},move:function(e){"left"===e?this.$refs.cropper.move(-this.size.width/4):"right"===e?this.$refs.cropper.move(this.size.width/4):"top"===e?this.$refs.cropper.move(0,-this.size.height/4):"bottom"===e&&this.$refs.cropper.move(0,this.size.height/4)},reset:function(){this.image={src:null,type:null};var input=this.$refs.file2;input.type="text",input.type="file"},getMimeType:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=new Uint8Array(e).subarray(0,4),header="",i=0;i<r.length;i++)header+=r[i].toString(16);switch(header){case"89504e47":return"image/png";case"47494638":return"image/gif";case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":return"image/jpeg";default:return t}},onWindowResizeHandle:function(e){this.windowWidth=e.target.innerWidth}},computed:{user:function(){var e;return null===(e=this.$auth)||void 0===e?void 0:e.user},width:function(){return this.windowWidth>800?"50%":"90%"}}}),f=h,L=(r(829),r(1)),component=Object(L.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("ballloader",{directives:[{name:"show",rawName:"v-show",value:e.imageUpload,expression:"imageUpload"}]}),e._v(" "),t("el-dialog",{attrs:{visible:e.show,id:"profile-image-cropper",title:"Profile Image",width:e.width,"before-close":function(){return e.$emit("visibleDialog",!1)}},on:{"update:visible":function(t){e.show=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("span",{staticClass:"dialog-footer"},[t("el-button",{on:{click:function(t){return e.$emit("visibleDialog",!1)}}},[e._v("Cancel")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.saveImage}},[e._v(" Upload ")])],1)]},proxy:!0}])},[t("div",[t("div",{staticClass:"upload-example__cropper-wrapper"},[t("cropper",{ref:"cropper",staticClass:"upload-example__cropper",attrs:{"stencil-size":{width:140,height:140},"stencil-props":{handlers:{},movable:!1,resizable:!1,aspectRatio:1},transitions:!0,"image-restriction":"stencil","default-boundaries":e.boundaries,src:e.image.src},on:{change:e.updateSize}}),e._v(" "),t("vertical-buttons",[t("square-button",{attrs:{title:"Zoom In"},on:{click:function(t){return e.zoom(2)}}},[t("img",{attrs:{src:r(885)}})]),e._v(" "),t("square-button",{attrs:{title:"Zoom Out"},on:{click:function(t){return e.zoom(.5)}}},[t("img",{attrs:{src:r(886)}})]),e._v(" "),t("square-button",{attrs:{title:"Move Top"},on:{click:function(t){return e.move("top")}}},[t("img",{attrs:{src:r(887)}})]),e._v(" "),t("square-button",{attrs:{title:"Move Left"},on:{click:function(t){return e.move("left")}}},[t("img",{attrs:{src:r(888)}})]),e._v(" "),t("square-button",{attrs:{title:"Move Right"},on:{click:function(t){return e.move("right")}}},[t("img",{attrs:{src:r(889)}})]),e._v(" "),t("square-button",{attrs:{title:"Move Bottom"},on:{click:function(t){return e.move("bottom")}}},[t("img",{attrs:{src:r(890)}})])],1),e._v(" "),t("div",{staticClass:"upload-example__reset-button",attrs:{title:"Reset Image"},on:{click:function(t){return e.reset()}}},[t("img",{attrs:{src:r(891)}})]),e._v(" "),e.image.type?t("div",{staticClass:"upload-example__file-type"},[e._v("\n          "+e._s(e.image.type)+"\n        ")]):e._e()],1),e._v(" "),t("div",{staticClass:"upload-example__buttons-wrapper"},[t("button",{staticClass:"upload-example__button",on:{click:function(t){return e.$refs.file2.click()}}},[t("input",{ref:"file2",attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.loadImage(t)}}}),e._v("\n          Browse image\n        ")])])])])],1)}),[],!1,null,null,null);t.default=component.exports},770:function(e,t,r){var content=r(848);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("4931e11f",content,!0,{sourceMap:!1})},771:function(e,t,r){var content=r(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("697448a7",content,!0,{sourceMap:!1})},820:function(e,t,r){var content=r(892);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("bebf4a74",content,!0,{sourceMap:!1})},829:function(e,t,r){"use strict";r(820)},847:function(e,t,r){"use strict";r(770)},848:function(e,t,r){var o=r(14)((function(i){return i[1]}));o.push([e.i,".vertical-buttons{position:absolute;left:10px;top:50%;transform:translateY(-50%)}",""]),o.locals={},e.exports=o},849:function(e,t,r){"use strict";r(771)},850:function(e,t,r){var o=r(14)((function(i){return i[1]}));o.push([e.i,".square-button{background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;height:42px;width:42px;margin-bottom:10px;cursor:pointer;transition:background .5s}.square-button:hover{background:#000}",""]),o.locals={},e.exports=o},871:function(e,t,r){"use strict";r.r(t);r(847);var o=r(1),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"vertical-buttons"},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},872:function(e,t,r){"use strict";r.r(t);r(849);var o=r(1),component=Object(o.a)({},(function(){var e=this;return(0,e._self._c)("div",e._b({staticClass:"square-button",on:{click:function(t){return e.$emit("click",t)}}},"div",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},885:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE0LjggMTZjLS4zIDAtLjYtLjEtLjktLjRsLTMuMy0zLjNjLTEuMS44LTIuNSAxLjItMy44IDEuMi0zLjggMC02LjgtMy02LjgtNi43QzAgMyAzIDAgNi44IDBjMy43IDAgNi44IDMgNi44IDYuOCAwIDEuNC0uNCAyLjctMS4yIDMuOGwzLjMgMy4zYy4yLjIuNC41LjQuOS0uMS43LS42IDEuMi0xLjMgMS4yem0tOC0xMy41Yy0yLjQgMC00LjMgMS45LTQuMyA0LjNzMS45IDQuMyA0LjMgNC4zIDQuMy0xLjkgNC4zLTQuMy0yLTQuMy00LjMtNC4zeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik05IDUuOEg3LjhWNC41YzAtLjItLjEtLjMtLjMtLjNINi4xYy0uMiAwLS4zLjEtLjMuM3YxLjNINC41Yy0uMiAwLS4zLjEtLjMuM3YxLjRjMCAuMi4xLjMuMy4zaDEuM1Y5YzAgLjIuMS4zLjMuM2gxLjRjLjIgMCAuMy0uMS4zLS4zVjcuOEg5Yy4yIDAgLjMtLjEuMy0uM1Y2LjFjMC0uMi0uMS0uMy0uMy0uM3oiLz48L3N2Zz4="},886:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE0LjggMTZjLS4zIDAtLjYtLjEtLjktLjRsLTMuMy0zLjNjLTEuMS44LTIuNSAxLjItMy44IDEuMi0zLjggMC02LjgtMy02LjgtNi43QzAgMyAzIDAgNi44IDBjMy43IDAgNi44IDMgNi44IDYuOCAwIDEuNC0uNCAyLjctMS4yIDMuOGwzLjMgMy4zYy4yLjIuNC41LjQuOS0uMS43LS42IDEuMi0xLjMgMS4yem0tOC0xMy41Yy0yLjQgMC00LjMgMS45LTQuMyA0LjNzMS45IDQuMyA0LjMgNC4zIDQuMy0xLjkgNC4zLTQuMy0yLTQuMy00LjMtNC4zeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik05LjMgNy41YzAgLjItLjEuMy0uMy4zSDQuNWMtLjIgMC0uMy0uMS0uMy0uM1Y2LjFjMC0uMi4xLS4zLjMtLjNIOWMuMiAwIC4zLjEuMy4zdjEuNHoiLz48L3N2Zz4="},887:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyLjEgOC45bC0uNC40Yy0uMS4xLS4zLjItLjUuMnMtLjQtLjEtLjUtLjJMOS4xIDcuN3YzLjljMCAuNC0uMy42LS43LjZoLS44Yy0uNCAwLS43LS4yLS43LS42VjcuN0w1LjMgOS4zYy0uMS4xLS4zLjItLjUuMnMtLjQtLjEtLjUtLjJsLS40LS40Yy0uMS0uMi0uMi0uMy0uMi0uNXMuMS0uNC4yLS41bDMuNi0zLjZjLjEtLjIuMy0uMi41LS4ycy40LjEuNS4ybDMuNiAzLjZjLjEuMS4yLjMuMi41cy0uMS4zLS4yLjV6Ii8+PC9zdmc+"},888:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTguNyA0bC40LjRjLjEuMS4yLjMuMi41cy0uMS40LS4yLjVMNy41IDcuMWgzLjljLjQgMCAuNi4zLjYuN3YuN2MwIC40LS4yLjctLjYuN0g3LjVsMS42IDEuNmMuMS4xLjIuMy4yLjVzLS4xLjQtLjIuNWwtLjQuNGMtLjEuMS0uMy4yLS41LjJzLS40LS4xLS41LS4yTDQuMSA4LjZjLS4xLS4xLS4yLS4zLS4yLS41cy4xLS40LjItLjVMNy43IDRjLjEtLjEuMy0uMi41LS4ycy40LjEuNS4yeiIvPjwvc3ZnPg=="},889:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMyAxMi4ybC0uNC0uNGMtLjEtLjEtLjItLjMtLjItLjVzLjEtLjQuMi0uNWwxLjYtMS42SDQuNmMtLjQgMC0uNi0uMy0uNi0uN3YtLjdjMC0uNC4yLS43LjYtLjdoMy45TDYuOSA1LjRjLS4yLS4xLS4zLS4zLS4zLS41cy4xLS40LjItLjVsLjUtLjRjLjEtLjEuMy0uMi41LS4ycy4zLjEuNS4ybDMuNiAzLjZjLjEuMS4yLjMuMi41cy0uMS40LS4yLjVsLTMuNiAzLjZjLS4xLjEtLjMuMi0uNS4ycy0uNCAwLS41LS4yeiIvPjwvc3ZnPg=="},890:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMuOSA3LjRsLjQtLjRjLjEtLjEuMy0uMi41LS4ycy40IDAgLjUuMmwxLjYgMS42VjQuN2MwLS40LjMtLjYuNy0uNmguN2MuNCAwIC43LjIuNy42djMuOUwxMC43IDdjLjEtLjEuMy0uMi41LS4ycy40LjEuNS4ybC40LjRjLjEuMS4yLjMuMi41cy0uMS40LS4yLjVMOC41IDEyYy0uMS4xLS4zLjItLjUuMnMtLjQtLjEtLjUtLjJMMy45IDguNGMtLjEtLjEtLjItLjMtLjItLjVzLjEtLjQuMi0uNXoiLz48L3N2Zz4="},891:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMy45IiB2aWV3Qm94PSIyODkuNyA0MTQgMTYgMTMuOSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMwNS41IDQxOS44aC0yYy0uNi0zLjMtMy40LTUuOC02LjgtNS44LTMuOCAwLTYuOSAzLjEtNi45IDYuOXMzLjEgNi45IDYuOSA2LjljMS43IDAgMy4zLS42IDQuNi0xLjdsLTEuNC0xLjhjLS44LjgtMS45IDEuMi0zLjEgMS4yLTIuNSAwLTQuNi0yLjEtNC42LTQuNnMyLjEtNC42IDQuNi00LjZjMi4xIDAgMy45IDEuNSA0LjUgMy41aC0yYy0uMyAwLS4zLjItLjIuNGwzLjEgMy44Yy4yLjIuNC4yLjYgMGwzLjEtMy44Yy0uMS0uMy0uMi0uNC0uNC0uNHoiLz48L3N2Zz4="},892:function(e,t,r){var o=r(14)((function(i){return i[1]}));o.push([e.i,'.vue-advanced-cropper{text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;max-height:100%;max-width:100%;direction:ltr}.vue-advanced-cropper__stretcher{pointer-events:none;position:relative;max-width:100%;max-height:100%}.vue-advanced-cropper__image{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;transform-origin:center;max-width:none!important}.vue-advanced-cropper__background,.vue-advanced-cropper__foreground{opacity:1;background:#000;transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}.vue-advanced-cropper__foreground{opacity:.5}.vue-advanced-cropper__boundaries{opacity:1;transform:translate(-50%,-50%);position:absolute;left:50%;top:50%}.vue-advanced-cropper__cropper-wrapper{width:100%;height:100%}.vue-advanced-cropper__image-wrapper{overflow:hidden;position:absolute;width:100%;height:100%}.vue-advanced-cropper__stencil-wrapper{position:absolute}.vue-rectangle-stencil{box-sizing:border-box}.vue-rectangle-stencil,.vue-rectangle-stencil__preview{position:absolute;height:100%;width:100%}.vue-rectangle-stencil--movable{cursor:move}.vue-circle-stencil{position:absolute;height:100%;width:100%;box-sizing:content-box;cursor:move}.vue-circle-stencil__preview{border-radius:50%;position:absolute;width:100%;height:100%}.vue-circle-stencil--movable{cursor:move}.vue-handler-wrapper{position:absolute;transform:translate(-50%,-50%);width:30px;height:30px}.vue-handler-wrapper__draggable{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.vue-handler-wrapper--west-north{cursor:nw-resize}.vue-handler-wrapper--north{cursor:n-resize}.vue-handler-wrapper--east-north{cursor:ne-resize}.vue-handler-wrapper--east{cursor:e-resize}.vue-handler-wrapper--east-south{cursor:se-resize}.vue-handler-wrapper--south{cursor:s-resize}.vue-handler-wrapper--west-south{cursor:sw-resize}.vue-handler-wrapper--west{cursor:w-resize}.vue-handler-wrapper--disabled{cursor:auto}.vue-line-wrapper{background:0 0;position:absolute;display:flex;align-items:center;justify-content:center}.vue-line-wrapper--north,.vue-line-wrapper--south{height:12px;width:100%;left:0;transform:translateY(-50%)}.vue-line-wrapper--north{top:0;cursor:n-resize}.vue-line-wrapper--south{top:100%;cursor:s-resize}.vue-line-wrapper--east,.vue-line-wrapper--west{width:12px;height:100%;transform:translateX(-50%);top:0}.vue-line-wrapper--east{left:100%;cursor:e-resize}.vue-line-wrapper--west{left:0;cursor:w-resize}.vue-line-wrapper--disabled{cursor:auto}.vue-bounding-box{position:relative;height:100%;width:100%}.vue-bounding-box__handler{position:absolute}.vue-bounding-box__handler--west-north{left:0;top:0}.vue-bounding-box__handler--north{left:50%;top:0}.vue-bounding-box__handler--east-north{left:100%;top:0}.vue-bounding-box__handler--east{left:100%;top:50%}.vue-bounding-box__handler--east-south{left:100%;top:100%}.vue-bounding-box__handler--south{left:50%;top:100%}.vue-bounding-box__handler--west-south{left:0;top:100%}.vue-bounding-box__handler--west{left:0;top:50%}.vue-draggable-area{position:relative}.vue-preview-result{overflow:hidden;box-sizing:border-box;position:absolute;height:100%;width:100%}.vue-preview-result__wrapper{position:absolute}.vue-preview-result__image{pointer-events:none;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform-origin:center;max-width:none!important}.vue-simple-handler{display:block;background:#fff;height:10px;width:10px}.vue-preview{overflow:hidden;box-sizing:border-box;position:relative}.vue-preview--fill,.vue-preview__wrapper{width:100%;height:100%;position:absolute}.vue-preview__image{pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform-origin:center;max-width:none!important}.vue-simple-line{background:0 0;transition:border .5s;border:0 solid hsla(0,0%,100%,.3)}.vue-simple-line--north,.vue-simple-line--south{height:0;width:100%}.vue-simple-line--east,.vue-simple-line--west{height:100%;width:0}.vue-simple-line--east{border-right-width:1px}.vue-simple-line--west{border-left-width:1px}.vue-simple-line--south{border-bottom-width:1px}.vue-simple-line--north{border-top-width:1px}.vue-simple-line--hover{opacity:1;border-color:#fff}.custom-block.details{display:block;position:relative;border-radius:2px;margin:1.6em 0;padding:1.6em;background-color:#eee}.custom-block.details h4{margin-top:0}.custom-block.details figure:last-child,.custom-block.details p:last-child{margin-bottom:0;padding-bottom:0}.custom-block.details summary{outline:none;cursor:pointer}.arrow{display:inline-block;width:0;height:0}.arrow.up{border-bottom:6px solid #ccc}.arrow.down,.arrow.up{border-left:4px solid transparent;border-right:4px solid transparent}.arrow.down{border-top:6px solid #ccc}.arrow.right{border-left:6px solid #ccc}.arrow.left,.arrow.right{border-top:4px solid transparent;border-bottom:4px solid transparent}.arrow.left{border-right:6px solid #ccc}.example-wrapper{position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid #eee;margin-top:20px;margin-bottom:20px}.example-wrapper--no-border{border:none}.example-wrapper__icon{opacity:.5;position:absolute;top:0;right:-32px;height:16px;display:flex;cursor:pointer;transition:.5s}.example-wrapper__icon:hover{opacity:1}@media screen and (max-width:1090px){.example-wrapper__icon{right:-24px}}.blurred-background-cropper .cropper-wrapper{overflow:hidden;position:relative;height:400px;background:#000}.blurred-background-cropper .cropper-background{background:none}.blurred-background-cropper .image-background{position:absolute;width:calc(100% + 20px);height:calc(100% + 20px);left:-10px;top:-10px;background-size:cover;background-position:50%;filter:blur(5px)}.circle-cropper{width:100%;background:#222}.circle-cropper__preview{border:1px solid hsla(0,0%,100%,.15)}.custom-restrictions-example .panel{border:1px solid #ddd;color:#000;display:flex;padding:20px;background:#fafafa}.custom-restrictions-example .panel__left{width:100%;padding-right:30px}.custom-restrictions-example .panel__right{display:flex;align-items:stretch;flex-direction:column}.custom-restrictions-example .input{margin-bottom:8px}.custom-restrictions-example .input__control{padding:4px;width:100%;color:#000;font:inherit;font-size:15px;border:1px solid #aaa}.custom-restrictions-example .input__label{display:block;font-size:11px;margin-bottom:3px}.custom-restrictions-example .custom-restrictions-cropper{width:100%;max-height:500px;border:1px solid #eee}.custom-restrictions-example .button{width:120px;margin-top:15px;color:#fff;font-size:16px;padding:17px 20px;text-align:center;background:#1f8255;cursor:pointer;transition:background .5s;font-weight:400;height:100%;display:flex;align-items:center;justify-content:center}.custom-restrictions-example .button:hover{background:#26a069;text-decoration:none!important}.custom-restrictions-example .button input{display:none}.customize-preview-example .preview{border:2px dashed hsla(0,0%,100%,.45)}.default-transforms-example{margin-top:20px;margin-bottom:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.default-transforms-example__cropper{border:1px solid #eee;min-height:300px;max-height:500px;width:100%}.default-transforms-example__cropper-wrapper{position:relative}.default-transforms-example__buttons-wrapper{display:flex;justify-content:center;margin-top:17px}.default-transforms-example .input__control{padding:8px;width:100%;border:none;color:#000;font:inherit;font-size:15px}.default-transforms-example .input__label{display:block;font-size:11px;margin-bottom:5px}.default-transforms-example .button{width:160px;margin-top:15px;display:block;color:#fff;font-size:16px;padding:10px 20px;text-align:center;background:#1f8255;cursor:pointer;transition:background .5s;font-weight:400;border:none}.default-transforms-example .button:hover{background:#26a069;text-decoration:none!important}.default-transforms-example .button input{display:none}.default-transforms-example .panel{color:#fff;display:flex;align-items:flex-end;padding:20px;background:#3fb37f}.default-transforms-example .panel__left{width:100%;padding-right:30px}.default-visible-area-example{height:500px}.events-example .cropper-wrapper{position:relative;background:#282c34;overflow:hidden;min-height:300px;display:flex;align-items:center}.events-example .cropper-wrapper__loading{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.events-example__input-wrapper{padding:10px}.events-example input{display:block;background:#fff;border-radius:6px;border:1px solid #eee;padding:8px 16px;outline:none;width:100%;text-overflow:ellipsis}.results__wrapper{display:flex;position:absolute;right:15px;bottom:15px;border:1px dashed hsla(0,0%,100%,.5)}.results__coordinates{background:rgba(0,0,0,.8);padding:5px;font-size:10px;color:#fff;pointer-events:none}@media (max-width:721px){.results__coordinates{display:none}}.results__coordinates-title{font-weight:700}.results__coordinates-title,.results__coordinates-value{margin-top:2px;margin-bottom:2px}.results__preview{width:107px;height:107px;opacity:.8;pointer-events:none}.results__preview img{width:100%;height:100%}.vertical-buttons{position:absolute;left:10px;top:50%;transform:translateY(-50%)}.square-button{background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;height:42px;width:42px;margin-bottom:10px;cursor:pointer;transition:background .5s}.square-button:hover{background:#000}.adjust-stencil-example{height:500px;position:relative}.adjust-stencil-example__adjust{background:rgba(0,0,0,.7);padding:10px 20px;position:absolute;left:20px;top:20px;color:#fff}.getting-result-example,.getting-result-second-example{position:relative}.getting-result-second-example .crop-button{display:flex;justify-content:center;margin-top:10px;position:absolute;left:50%;top:-10px;transform:translateX(-50%);background:rgba(0,0,0,.8);padding:5px 20px;transition:background .5s;color:#fff;font-size:16px;cursor:pointer}.getting-result-second-example .crop-button:hover{background:rgba(63,179,127,.9)}.cropper{height:600px;background:#222}.image-restriction-example .panel{color:#fff;display:flex;align-items:flex-end;padding:20px;background:#3fb37f}.image-restriction-example .panel__left{width:100%;padding-right:30px}.image-restriction-example .input__control{padding:8px;width:100%;border:none;color:#000;font:inherit;font-size:15px}.image-restriction-example .input__label{display:block;font-size:11px;margin-bottom:5px}.image-restriction-example .image-restriction-cropper{width:100%;max-height:500px;border:1px solid #eee}.image-restriction-example .button{width:120px;margin-top:15px;display:block;color:#fff;font-size:16px;padding:10px 20px;text-align:center;background:#1f8255;cursor:pointer;transition:background .5s;font-weight:400}.image-restriction-example .button:hover{background:#26a069;text-decoration:none!important}.image-restriction-example .button input{display:none}.image-restriction-example .cropper{height:600px}.manipulate-image-example .coordinates-cropper{max-height:500px;background:#000}.manipulate-image-example .size-info{color:#fff;position:absolute;font-size:10px;right:10px;bottom:10px;opacity:.5}.news-adjust-stencil{min-height:200px}.news-adjust-stencil__adjust{background:rgba(0,0,0,.7);padding:10px 20px;position:absolute;left:20px;top:20px;color:#fff}.news-borders-image-restriction{max-height:600px;background:#000}.news-borders-image-restriction__cropper{height:600px}.news-borders-image-restriction__settings{background:rgba(0,0,0,.7);padding:10px 20px;position:absolute;left:20px;top:20px;color:#fff;border:1px solid hsla(0,0%,100%,.2)}.preview-result-example{display:flex}.preview-result-example__cropper{width:300px}.preview-result-example__previews{margin-left:32px}.preview-result-example__preview{border-radius:50%;overflow:hidden;margin-top:24px;margin-bottom:24px;width:100px;height:100px}.preview-result-example__preview--small{width:60px;height:60px}.preview-result-example__preview-image{width:100%}.preview-result-example__button{position:absolute;left:16px;bottom:0}.refresh-example .container{width:100%;height:400px;position:relative}.refresh-example .cropper{width:100%;height:100%}.refresh-example .box{position:absolute}.refresh-example .line{border-color:rgba(63,179,127,.5)}.refresh-example .handler{background:#3fb37f}.resize-result-example .panel{border:1px solid #ddd;color:#000;display:flex;padding:20px;background:#fafafa}.resize-result-example .panel__left{width:100%;padding-right:30px}.resize-result-example .panel__right{display:flex;align-items:stretch;flex-direction:column}.resize-result-example .input{margin-bottom:8px}.resize-result-example .input__control{padding:4px;width:100%;color:#000;font:inherit;font-size:15px;border:1px solid #aaa}.resize-result-example .input__label{display:block;font-size:11px;margin-bottom:3px}.resize-result-example .resize-result-cropper{width:100%;max-height:500px;border:1px solid #eee}.resize-result-example .button{width:120px;margin-top:15px;color:#fff;font-size:16px;padding:17px 20px;text-align:center;background:#1f8255;cursor:pointer;transition:background .5s;font-weight:400;height:100%;display:flex;align-items:center;justify-content:center}.resize-result-example .button:hover{background:#26a069;text-decoration:none!important}.resize-result-example .button input{display:none}.rotate-image-example .cropper{max-height:500px}.twitter-cropper{height:521px}.twitter-cropper__background,.twitter-cropper__foreground{background-color:#edf2f4}.twitter-cropper__stencil{border:5px solid #1da1f2}.types-classic-cropper--small-height{max-height:400px}.types-hybrid-cropper{max-height:500px;background:#000}.types-hybrid-cropper--small-height{max-height:350px}.types-classic-cropper{max-height:500px;background:#000}.types-classic-cropper--small-height{max-height:300px}.upload-example{margin-top:20px;margin-bottom:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.upload-example__cropper{border:1px solid #eee;min-height:325px;max-height:360px;width:100%}.upload-example__cropper-wrapper{position:relative}.upload-example__reset-button{position:absolute;right:20px;bottom:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;height:42px;width:42px;background:rgba(63,179,127,.7);transition:background .5s}.upload-example__reset-button:hover{background:#3fb37f}.upload-example__buttons-wrapper{display:flex;justify-content:center;margin-top:17px}.upload-example__button{border:none;outline:solid transparent;color:#fff;font-size:16px;padding:10px 20px;background:#3fb37f;cursor:pointer;transition:background .5s;margin:0 16px}.upload-example__button:focus,.upload-example__button:hover{background:#38d890}.upload-example__button input{display:none}.upload-example__file-type{position:absolute;top:20px;right:20px;background:#0d0d0d;border-radius:5px;padding:0 10px 2px;font-size:12px;color:#fff}.upload-to-server-example .upload-example-cropper{border:1px solid #eee;min-height:300px;max-height:500px;width:100%}.upload-to-server-example .cropper-wrapper{position:relative}.upload-to-server-example .reset-button{position:absolute;right:20px;bottom:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;height:42px;width:42px;background:rgba(63,179,127,.7);transition:background .5s}.upload-to-server-example .reset-button:hover{background:#3fb37f}.upload-to-server-example .button-wrapper{display:flex;justify-content:center;margin-top:17px}.upload-to-server-example .button{color:#fff;font-size:16px;padding:10px 20px;background:#3fb37f;cursor:pointer;transition:background .5s;width:100%;text-align:center}.upload-to-server-example .button:hover{background:#38d890}.upload-to-server-example .button input{display:none}.circle-example,.common-example{background:#000}.common-example__stencil{background:#fff}.common-example__stencil:after,.common-example__stencil:before{content:"";opacity:.3;position:absolute;pointer-events:none;z-index:1}.common-example__stencil:after{border-left:1px dashed #eee;border-right:1px dashed #eee;width:33%;height:100%;transform:translateX(-50%);left:50%;top:0}.common-example__stencil:before{border-top:1px dashed #eee;border-bottom:1px dashed #eee;height:33%;width:100%;transform:translateY(-50%);top:50%;left:0}.common-example__preview{opacity:.9}.common-example__preview:after{content:"+";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);opacity:.5;color:#fff}.common-example__line{border-color:#fff}.common-example__handler{width:5px;height:5px;background:#fff;opacity:.75}.home-example-wrapper{border-top:3px solid #3fb37f;position:relative;overflow:hidden}.home-example-wrapper__code-link{cursor:pointer;position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;right:0;top:0;background:rgba(63,179,127,.9);width:50px;height:47px;padding-bottom:3px}.home-button{border-radius:5px;box-shadow:0 3px 6px 0 rgba(2,3,3,.18);transition:box-shadow .5s;background:#3fb37f;display:flex;text-align:left;align-items:center;padding:9px 21px 9px 14px;color:#fff}#profile-image-cropper .el-dialog__body{padding:10px 20px!important}',""]),o.locals={},e.exports=o}}]);