(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1e3:function(t,e,r){var o=r(128).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},1015:function(t,e,r){var content=r(1134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("693c5cb0",content,!0,{sourceMap:!1})},1133:function(t,e,r){"use strict";r(1015)},1134:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".profile-info-form label[data-v-5021e2d2]{margin-bottom:0.125rem;display:block;font-weight:500;color:#282533}.dropdown[data-v-5021e2d2]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-5021e2d2]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-5021e2d2]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-5021e2d2]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>div>li[data-v-5021e2d2]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;transition:.2s}.dd-image[data-v-5021e2d2]{transition:.2s}.dropdown>div:hover .dd-image[data-v-5021e2d2]{width:20px;height:20px;border-radius:50px}.dropdown>div>li[data-v-5021e2d2]:hover{padding-left:10px}.custom-input[data-v-5021e2d2]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-5021e2d2]{width:100%;text-align:left}",""]),o.locals={},t.exports=o},1162:function(t,e,r){"use strict";r.r(e);r(33);var o=r(3),n=r(6),c=(r(37),r(26),r(278),r(32),r(7),r(285),r(779),r(56),r(29),r(48),r(21),r(49),r(18),r(14)),d=r(758),l=(r(418),r(1026)),m=r(43),f=r(38),h=(r(1027),r(1028)),v=r(739),w=r(280);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=Object(c.a)(f.a).extend(Object(n.a)({name:"CompanyForm",components:{InputField:d.default,SpinnerDottedIcon:m.default,MessageAlertWidget:v.default},data:function(){return Object(n.a)({dropDownContent:[],setDropDown:!1,country:"",state:"",errorMessage:"",formData:{name:this.$auth.user.companyName,email:this.$auth.user.email,state:"",firstName:this.$auth.user.firstName,country:"",phone:"",timezone:""},countries:[],states:[],timezones:l.a,loading:!1},"errorMessage","")},props:{editingDetails:{type:Boolean,default:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCountries();case 2:return e.next=4,t.fetchStates();case 4:t.formData.state=t.$auth.user?t.$auth.user.state:"";case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},beforeMount:function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r,o=e[t];(null===(r=this.$auth)||void 0===r?void 0:r.user)[o]&&(this.formData[o]=this.$auth.user[o])}this.country=this.$auth.user.country,this.state=this.$auth.user.state},methods:{inputPhone:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},setCountryInfo:function(t){var e=this;this.country=t.target.textContent.trim().toLowerCase(),this.setDropDown=!1;try{var r=h.a.filter((function(t){return t.name.common.toLowerCase().startsWith(e.country)}))[0];this.formData.timezone=r.timezones[0],this.state=r.capital[0]}catch(t){this.state=""}},displayCountry:function(){var t=this;""!=this.country.trim()?(this.setDropDown=!0,this.dropDownContent=h.a.map((function(t){return t})).filter((function(e){return e.name.common.toLowerCase().startsWith(t.country)})).sort((function(a,b){return a.name.common.localeCompare(b.name.common)}))):this.setDropDown=!1},onSubmit:function(){var t,e,r=this;null===(t=event)||void 0===t||t.preventDefault();var n=y(y({},this.formData),{},{companyName:this.formData.name,country:this.country});if(!this.loading){var c=null===(e=this.$auth.user)||void 0===e?void 0:e.id;this.loading=!0,this.errorMessage="";try{this.$axios.$patch("/users/".concat(c),n).then(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.filterUsers(),r.$notify.success({title:"Data write",message:"Data updated successfully!"}),r.loading=!1,t.next=5,r.$nextTick();case 5:r.$emit("stop-editing");case 6:case"end":return t.stop()}}),t)}))))}catch(t){var d=t.response,l=Object(w.a)(d);this.errorMessage=l}}}},watch:{"$auth.user":function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r=e[t];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.formData.name=this.$auth.user.companyName}}},"mounted",(function(){}))),C=(r(1133),r(1)),component=Object(C.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("form",{ref:"form",staticClass:"profile-info-form grid grid-cols-1 gap-5",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"my-2 w-[100%] ml-[0%]",attrs:{message:t.errorMessage,type:"error"}}),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"mx-2 w-full"},[e("el-input",{staticClass:"pr-4 mb-4",attrs:{placeholder:"business name",type:"text",disabled:!t.editingDetails},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("div",{staticClass:"mx-2 w-full"},[e("el-input",{staticClass:"pr-4 mb-4",attrs:{placeholder:"Contact name",type:"text",disabled:!t.editingDetails},model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}})],1),t._v(" "),e("div",{staticClass:"mx-2 w-full"},[e("el-input",{staticClass:"pr-4 mb-4",attrs:{placeholder:"Email address",type:"text",disabled:!t.editingDetails},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("div",{staticClass:"mx-2 w-full"},[e("el-input",{staticClass:"pr-4 mb-4",attrs:{placeholder:"Contact number",disabled:!t.editingDetails,type:"phone"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editingDetails,expression:"editingDetails"}],staticClass:"flex items-center justify-center mt-2"},[e("button",{staticClass:"shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50",attrs:{disabled:!t.editingDetails||t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Update")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])])],1)}),[],!1,null,"5021e2d2",null);e.default=component.exports},998:function(t,e,r){var o=r(128).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},999:function(t,e,r){var o=r(128);t.exports=/MSIE|Trident/.test(o)}}]);