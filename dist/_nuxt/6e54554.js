(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1096:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAbCAYAAACeA7ShAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgBvZS/SwJhGMef9+4gyyANITK6zCCiLVptkKDFwanB7aB/oKUfWzbmEtQcWQ0tDTm0BGKYjTY0SDWoGZkNgUH2Ayp7Xks5z/d+5B194eXunvd5P+9z3/e5I8tJqQoWiQML9f8wt10Eb8+Ybp4ABhQYCdWu2YtLMFUZrUg+TMGmh4LMe5aIsjUC3hA4bS5wd4vg7HAxFxUrBXj7eIHicwGOsvuNeItnpcot+AZmQEv0QKjSpVRTvAWWfkjBK+46OzoHNqGLCaNV7WY2IPd01RRnepZ5PIe9zCaoic4pQaowPdmETmZcFdZvH1SbUj0Y1aYddvz0FPUwfhPDc8fWEIMw2efDjcS/we7x2M/ujpu8ObjegnghBuO9E8w1xNJfEJLKlGZ2oAtlDj6B1pynT20PXP+FHG7NH80j0I+BQ2hPJ+8Iohwijy6eSisYCBul4OuFI1PR1fozUSYsJCWJI7COtw4NSrnKkfmIb3tHHias3KWE5AEeEjjrYYBqttTsUYj5BWj42PCHtY5ZmVx1H5X+MGHYtDnQlwdo++hI+E00It08ged53SSj+gZTPpeLclBarwAAAABJRU5ErkJggg=="},1097:function(t,o,e){var content=e(1255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("78905c18",content,!0,{sourceMap:!1})},1254:function(t,o,e){"use strict";e(1097)},1255:function(t,o,e){var n=e(15)((function(i){return i[1]}));n.push([t.i,"input[data-v-7fe8f3ff]{border:.5px solid #e9e9e9;background-color:transparent;border-radius:4px}.toolTip[data-v-7fe8f3ff]{position:absolute;left:100%;bottom:calc(100% - 4px);background-color:#ff0;border-radius:2px;font-size:10px;color:red;font-weight:600;padding:3px 6px 8px;-webkit-clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,19% 75%,0 99%,0 75%);clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,19% 75%,0 99%,0 75%)}",""]),n.locals={},t.exports=n},1387:function(t,o,e){"use strict";e.r(o);e(278),e(7),e(24),e(76),e(27),e(88);var n={data:function(){return{isModalActive:!1,confirmStar:!1,isFirstAction:!1,isActionIndex:null}},props:{scale:Number,file:{type:Object,required:!0}},mounted:function(){this.checkToolIndex()},computed:{style:function(){return{width:"".concat(18*(this.scale||1),"px"),height:"".concat(24*(this.scale||1),"px")}},notBtn:function(){return this.notClass},isCreator:function(){try{var t,o,e,n,r,c;return this.file.userId==(null===(t=this.$auth)||void 0===t||null===(o=t.user)||void 0===o?void 0:o.id)||(null===(e=this.$auth)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.teamAccess)==TeamAccess.COMPANY_FILE&&(null===(r=this.$auth)||void 0===r||null===(c=r.user)||void 0===c?void 0:c.teamId)==this.file.userId}catch(t){return!1}}},methods:{checkToolIndex:function(){var t=this,o=document.querySelectorAll(".annot-button");Array.from(o).forEach((function(element,o){element==t.$refs.annotbutton&&0==o&&(t.isFirstAction=!0)&&(t.isActionIndex=o)}))},overHandler:function(){this.isModalActive=!0},leaveHandler:function(){this.isModalActive=!1},confirmStarAction:function(){var t=this;(this.$auth.loggedIn||this.$store.getters.getFillAsGuest)&&(this.$store.commit("CLICK_TOOL_ACTION",this.isActionIndex),!this.isCreator&&(this.confirmStar=!0),this.$BUS.$emit("scrollToSignInitial"),this.notClass="",setTimeout((function(){t.$BUS.$emit("scroll-to-tools")}),200))}},watch:{confirmStar:function(){this.$BUS.$emit("scroll-to-tools")},"$store.getters.getClickAction":function(){this.checkToolIndex()}}},r=(e(1254),e(1)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"text-field tool",attrs:{attr:"star",elemFill:t.confirmStar},on:{click:t.confirmStarAction}},[t.confirmStar?o("svg",{style:t.style,attrs:{viewBox:"0 0 37 36",fill:"black",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{options:"fill",d:"M36.9676 13.9046C36.8894 13.6713 36.6821 13.5012 36.4324 13.4658L24.4516 11.7717L19.0937 1.20887C18.9825 0.988492 18.752 0.849304 18.5003 0.849304C18.2487 0.849304 18.0175 0.988492 17.9069 1.20887L12.5484 11.7723L0.567584 13.4664C0.317902 13.5019 0.111268 13.6713 0.0324561 13.9052C-0.0450315 14.1379 0.0192104 14.3943 0.200015 14.5651L8.87002 22.7875L6.82289 34.3981C6.7805 34.6397 6.88249 34.8839 7.08582 35.0283C7.29046 35.1739 7.56134 35.1926 7.7832 35.0772L18.5003 29.5961L29.2161 35.0772C29.3128 35.1269 29.4195 35.1513 29.5248 35.1513C29.6619 35.1513 29.7983 35.1101 29.9142 35.0283C30.1182 34.8839 30.2202 34.6397 30.1771 34.3981L28.1307 22.7881L36.8007 14.5651C36.9808 14.393 37.0457 14.1372 36.9676 13.9046Z",fill:"#84C870"}})]):t._e(),t._v(" "),t.confirmStar?t._e():o("img",{staticClass:"annot-button",staticStyle:{width:"18px"},attrs:{src:e(1096)}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.confirmStar,expression:"!confirmStar"}],staticClass:"toolTip hidden"},[t._v("Require")])])}),[],!1,null,"7fe8f3ff",null);o.default=component.exports}}]);