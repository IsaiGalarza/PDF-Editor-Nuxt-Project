(window.webpackJsonp=window.webpackJsonp||[]).push([[169,56,66],{1674:function(t,e,c){var content=c(1931);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(16).default)("2574b8a1",content,!0,{sourceMap:!1})},1930:function(t,e,c){"use strict";c(1674)},1931:function(t,e,c){var r=c(15)((function(i){return i[1]}));r.push([t.i,'.tab-indicator-container[data-v-f86109c0]{position:relative;margin-left:auto;margin-right:auto;margin-bottom:5rem;display:flex;width:100%;max-width:600px;align-items:center;justify-content:space-between;--circle-size:60px}.tab-indicator-container.second[data-v-f86109c0]:before,.tab-indicator-container.third[data-v-f86109c0]:after{background:#77b550}.tab-indicator-container[data-v-f86109c0]:before{left:calc(var(--circle-size) + 3px)}.tab-indicator-container[data-v-f86109c0]:after,.tab-indicator-container[data-v-f86109c0]:before{content:"";position:absolute;height:2px;width:calc(50% - var(--circle-size)*1.5 - 6px);background:#909090}.tab-indicator-container[data-v-f86109c0]:after{left:calc(50% + var(--circle-size)/2 + 3px)}.tab-indicator-circle[data-v-f86109c0]{position:relative;border-width:2px;--tw-border-opacity:1;border-color:rgb(144 144 144 / var(--tw-border-opacity));font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgb(144 144 144 / var(--tw-text-opacity))}.tab-indicator-circle.active[data-v-f86109c0]{--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(119 181 80 / var(--tw-text-opacity))}.tab-indicator-circle .highlight[data-v-f86109c0]{position:absolute;white-space:nowrap;font-size:0.75rem;line-height:1rem;top:calc(100% + 8px)}',""]),r.locals={},t.exports=r},2e3:function(t,e,c){"use strict";c.r(e);c(278);var r=c(686),n=c(687),o=c(70),l={components:{MailIcon:r.default,PaymentCardIcon:n.default,UserProfileSolidIcon:o.default},props:["index","pages"],data:function(){return{tabLevel:null!=this&&this.index?Number(null==this?void 0:this.index):1}}},d=(c(1930),c(1)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return"packages"!=t.pages?e("div",{staticClass:"tab-indicator-container mt-12",class:{second:t.tabLevel>=2,third:t.tabLevel>=3}},[e("div",{staticClass:"tab-indicator-circle circle circle-30 font-medium",class:{active:t.tabLevel>=1}},[t._v("\n    $\n\n    "),e("span",{staticClass:"highlight"},[t._v("1. Select Package")])]),t._v(" "),e("div",{staticClass:"tab-indicator-circle circle circle-30",class:{active:t.tabLevel>=2}},[e("span",{staticClass:"highlight"},[t._v("2. Basic Info")]),t._v(" "),e("user-profile-solid-icon",{attrs:{height:"20",width:"20"}})],1),t._v(" "),e("div",{staticClass:"tab-indicator-circle circle circle-30",class:{active:t.tabLevel>=3}},[e("span",{staticClass:"highlight"},[t._v("3. Payment")]),t._v(" "),e("payment-card-icon",{attrs:{height:"20",width:"20"}})],1)]):t._e()}),[],!1,null,"f86109c0",null);e.default=component.exports},686:function(t,e,c){"use strict";c.r(e);var r=c(0).default.extend({name:"MailIcon"}),n=c(1),component=Object(n.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"16",width:"16"}},[t("path",{attrs:{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}})])}),[],!1,null,null,null);e.default=component.exports},687:function(t,e,c){"use strict";c.r(e);var r=c(0).default.extend({name:"PaymentCardIcon"}),n=c(1),component=Object(n.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",viewBox:"0 0 42 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M37.5857 0.333374H4.25236C1.93986 0.333374 0.106527 2.18754 0.106527 4.50004L0.0856934 29.5C0.0856934 31.8125 1.93986 33.6667 4.25236 33.6667H37.5857C39.8982 33.6667 41.7524 31.8125 41.7524 29.5V4.50004C41.7524 2.18754 39.8982 0.333374 37.5857 0.333374ZM37.5857 29.5H4.25236V17H37.5857V29.5ZM37.5857 8.66671H4.25236V4.50004H37.5857V8.66671Z"}})])}),[],!1,null,null,null);e.default=component.exports}}]);