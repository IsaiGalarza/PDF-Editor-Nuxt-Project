(window.webpackJsonp=window.webpackJsonp||[]).push([[11,52,62,63,87,139,140],{1003:function(t,e,n){var content=n(1125);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("44222b84",content,!0,{sourceMap:!1})},1067:function(t,e,n){var content=n(1181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0e250cb4",content,!0,{sourceMap:!1})},1124:function(t,e,n){"use strict";n(1003)},1125:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".details-card[data-v-6fad6ad9]{display:flex;cursor:pointer;flex-direction:column;align-items:center;justify-content:center;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;}@media (min-width: 640px){.details-card[data-v-6fad6ad9]{flex-direction:row;align-items:center;justify-content:space-between;border-radius:1rem;padding-left:1rem;padding-right:1rem;padding-top:0.875rem;padding-bottom:0.875rem;}}.details-card[data-v-6fad6ad9]{border:.97221px solid rgba(119,181,80,.15);transition:all .3s ease-in-out;}.details-card.active[data-v-6fad6ad9],.details-card[data-v-6fad6ad9]:hover{--tw-bg-opacity:1;background-color:rgb(119 195 96 / var(--tw-bg-opacity));}.details-card.active *[data-v-6fad6ad9],.details-card:hover *[data-v-6fad6ad9]{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.icon-container[data-v-6fad6ad9]{display:inline-flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:0.25rem;background-color:rgb(238 247 236 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.375rem;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity));}@media (min-width: 640px){.icon-container[data-v-6fad6ad9]{height:3rem;width:3rem;border-radius:0.375rem;padding:0px;}}",""]),r.locals={},t.exports=r},1161:function(t,e,n){"use strict";n.r(e);n(43),n(30),n(54),n(24),n(55);var r=n(6),l=(n(7),n(27),n(28),n(56),n(36),n(0)),o=n(1162),c=n(127),d=n(59),f=(n(4),n(654)),C=n(670),h=n(661),v=n(662);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w=l.default.extend({components:{TopDetailsCard:o.default,NoteAndPenIconVue:f.default,LedgerIcon:C.default,PageIconVue:h.default,TickCircleIconVue:v.default},props:{activeTab:{type:String,default:""}},model:{prop:"activeTab",event:"updateActiveTab"},data:function(){return{topDetail:[],labels:[{label:"ledger",params:"",key:"ledger",action:"",count:896,icon:C.default},{label:"completed",key:"completed",count:25,params:"complete",action:"complete",icon:h.default},{label:"signed",key:"signed",count:25,params:"sign",action:"sign",icon:f.default},{label:"confirmed",key:"confirmed",count:25,params:"confirm",action:"confirm",icon:v.default}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.e)(["originalPdfFiles"])),watch:{topDetail:function(t){console.log(t)},"$auth.user":function(){this.getTopContainerDetails()}},mounted:function(){this.getTopContainerDetails()},methods:{getTopContainerDetails:function(){var t,e,n,r,l,o,c,d,f=this,C=this.$axios.get("/ledger?userId=".concat(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)),h=this.$axios.get("/ledger?userId=".concat(null===(n=this.$auth)||void 0===n||null===(r=n.user)||void 0===r?void 0:r.id,"&action=complete")),v=this.$axios.get("/ledger?userId=".concat(null===(l=this.$auth)||void 0===l||null===(o=l.user)||void 0===o?void 0:o.id,"&action=sign")),m=this.$axios.get("/ledger?userId=".concat(null===(c=this.$auth)||void 0===c||null===(d=c.user)||void 0===d?void 0:d.id,"&action=confirm"));try{Promise.all([C,h,v,m]).then((function(t){f.topDetail=t.map((function(t,e){var n,r;return{total:null==t||null===(n=t.data)||void 0===n?void 0:n.total,label:f.labels[e].label,action:f.labels[e].action,icon:f.labels[e].icon,key:null===(r=f.labels[e])||void 0===r?void 0:r.key}}))}))}catch(t){t.response}},isFilterActions:function(t){switch(t){case d.a.LEDGER:return(this.originalPdfFiles||[]).length;case d.a.SHARED:return(this.originalPdfFiles||[]).filter((function(t){return null!=(null==t?void 0:t.shared)})).length;case d.a.SAVED:return(this.originalPdfFiles||[]).filter((function(t){return(null==t?void 0:t.favourites.length)>0})).length;default:return(this.originalPdfFiles||[]).filter((function(e){return(null==e?void 0:e.fileAction)==t})).length}},searchFilter:function(t,label,e){this.$emit("updateActiveTab",t),this.$store.commit("FILTER_USERs",label),this.$store.commit("SET_LEDGER_PARAMS",e),this.$router.push("file-ledger")}}}),_=w,x=(n(1180),n(1)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"small-details-card-container grid-cols-4 px-3 px-sm-0"},t._l(t.topDetail,(function(n,i){return e("top-details-card",{key:i,attrs:{isActive:n.key===t.activeTab},nativeOn:{click:function(e){return t.searchFilter(n.key,n.action,n.action)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e(n.icon,{tag:"component"})]},proxy:!0},{key:"count",fn:function(){return[t._v(t._s(n.total))]},proxy:!0},{key:"name",fn:function(){return[t._v(t._s(n.label))]},proxy:!0}],null,!0)})})),1)}),[],!1,null,"568b91a9",null);e.default=component.exports},1162:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(654),o=r.default.extend({components:{NoteAndPenIcon:l.default},props:{isActive:{type:Boolean,default:!1}}}),c=(n(1124),n(1)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"details-card",class:{active:t.isActive}},[e("span",{staticClass:"icon-container"},[t._t("icon",(function(){return[e("note-and-pen-icon")]}))],2),t._v(" "),e("div",{staticClass:"text-content inline-flex flex-col justify-between items-center sm:items-end mt-2"},[e("span",{staticClass:"font-bold text-xl sm:text-2xl"},[t._t("count",(function(){return[t._v("800")]}))],2),t._v(" "),e("span",{staticClass:"font-medium text-paperdazgray-400 text-xxs sm:text-xs capitalize"},[t._t("name",(function(){return[t._v("Ledger")]}))],2)])])}),[],!1,null,"6fad6ad9",null);e.default=component.exports},1180:function(t,e,n){"use strict";n(1067)},1181:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".small-details-card-container[data-v-568b91a9]{gap:0.75rem}@media (min-width: 1024px){.small-details-card-container[data-v-568b91a9]{gap:1rem}}.small-details-card-container[data-v-568b91a9]{display:grid}",""]),r.locals={},t.exports=r},654:function(t,e,n){"use strict";n.r(e);var r={name:"NoteAndPenIcon"},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"fill-current",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1203)"}},[e("path",{attrs:{d:"M15.8115 15.4245C15.6059 15.4245 15.4393 15.5912 15.4393 15.7967V22.5905H4.47752V19.4887C4.47752 19.2831 4.31086 19.1164 4.1053 19.1164H1.00347V1.00176H15.4393V7.79551C15.4393 8.00108 15.6059 8.16773 15.8115 8.16773C16.0171 8.16773 16.1837 8.00108 16.1837 7.79551V0.629544C16.1837 0.423979 16.0171 0.257324 15.8115 0.257324H0.631253C0.425688 0.257324 0.259033 0.423979 0.259033 0.629544V19.4887C0.259033 19.5011 0.259678 19.5135 0.260919 19.5258C0.261812 19.5349 0.263351 19.5436 0.264889 19.5525C0.265435 19.5556 0.265733 19.5588 0.266329 19.562C0.268413 19.5724 0.271093 19.5826 0.274021 19.5927C0.274468 19.5942 0.274716 19.5957 0.275163 19.5972C0.278289 19.6075 0.282012 19.6175 0.285982 19.6274C0.286528 19.6287 0.286925 19.6301 0.287471 19.6314C0.291342 19.6408 0.295808 19.6499 0.300424 19.6588C0.301367 19.6607 0.302111 19.6626 0.303104 19.6644C0.307521 19.6727 0.312484 19.6806 0.317546 19.6885C0.319035 19.6908 0.320375 19.6933 0.321913 19.6957C0.326926 19.7032 0.332484 19.7103 0.337993 19.7174C0.339929 19.7199 0.341616 19.7225 0.343601 19.7249C0.351344 19.7343 0.359483 19.7434 0.368069 19.7519L3.84197 23.2258C3.85055 23.2344 3.85959 23.2426 3.86901 23.2504C3.87145 23.2523 3.87408 23.254 3.87651 23.256C3.88361 23.2615 3.89075 23.267 3.89825 23.272C3.90058 23.2736 3.90306 23.2749 3.90544 23.2764C3.91333 23.2814 3.92127 23.2864 3.92956 23.2909C3.93135 23.2918 3.93328 23.2926 3.93512 23.2935C3.9441 23.2982 3.95319 23.3026 3.96252 23.3065C3.96386 23.307 3.96525 23.3074 3.96654 23.3079C3.97641 23.3119 3.98644 23.3156 3.99671 23.3187C3.9982 23.3192 3.99974 23.3195 4.00123 23.3199C4.0113 23.3229 4.02153 23.3255 4.03195 23.3276C4.03507 23.3283 4.0383 23.3285 4.04143 23.3291C4.05026 23.3306 4.05904 23.3321 4.06808 23.333C4.08039 23.3343 4.09279 23.3349 4.10525 23.3349H15.8114C16.017 23.3349 16.1837 23.1683 16.1837 22.9627V15.7967C16.1837 15.5912 16.0171 15.4245 15.8115 15.4245ZM3.73308 22.0641L1.52984 19.8609H3.73308V22.0641Z"}}),t._v(" "),e("path",{attrs:{d:"M13.3294 20.3572C13.5349 20.3572 13.7016 20.1906 13.7016 19.985C13.7016 19.7794 13.5349 19.6128 13.3294 19.6128H10.1332C9.92764 19.6128 9.76099 19.7794 9.76099 19.985C9.76099 20.1906 9.92764 20.3572 10.1332 20.3572H13.3294Z"}}),t._v(" "),e("path",{attrs:{d:"M13.329 3.73096H3.11172C2.90616 3.73096 2.7395 3.89761 2.7395 4.10318C2.7395 4.30874 2.90616 4.4754 3.11172 4.4754H13.329C13.5346 4.4754 13.7013 4.30874 13.7013 4.10318C13.7013 3.89761 13.5346 3.73096 13.329 3.73096Z"}}),t._v(" "),e("path",{attrs:{d:"M13.329 5.7168H3.11172C2.90616 5.7168 2.7395 5.88345 2.7395 6.08902C2.7395 6.29458 2.90616 6.46123 3.11172 6.46123H13.329C13.5346 6.46123 13.7013 6.29458 13.7013 6.08902C13.7013 5.88345 13.5346 5.7168 13.329 5.7168Z"}}),t._v(" "),e("path",{attrs:{d:"M13.329 7.70166H3.11172C2.90616 7.70166 2.7395 7.86832 2.7395 8.07388C2.7395 8.27944 2.90616 8.4461 3.11172 8.4461H13.329C13.5346 8.4461 13.7013 8.27944 13.7013 8.07388C13.7013 7.86832 13.5346 7.70166 13.329 7.70166Z"}}),t._v(" "),e("path",{attrs:{d:"M13.7013 10.0592C13.7013 9.85367 13.5346 9.68701 13.329 9.68701H3.11172C2.90616 9.68701 2.7395 9.85367 2.7395 10.0592C2.7395 10.2648 2.90616 10.4314 3.11172 10.4314H13.329C13.5346 10.4314 13.7013 10.2648 13.7013 10.0592Z"}}),t._v(" "),e("path",{attrs:{d:"M11.9339 12.0441C11.9339 11.8385 11.7673 11.6719 11.5617 11.6719H3.11172C2.90616 11.6719 2.7395 11.8385 2.7395 12.0441C2.7395 12.2497 2.90616 12.4163 3.11172 12.4163H11.5617C11.7673 12.4163 11.9339 12.2497 11.9339 12.0441Z"}}),t._v(" "),e("path",{attrs:{d:"M3.11172 13.6577C2.90616 13.6577 2.7395 13.8244 2.7395 14.0299C2.7395 14.2355 2.90616 14.4022 3.11172 14.4022H8.22041C8.42597 14.4022 8.59263 14.2355 8.59263 14.0299C8.59263 13.8244 8.42597 13.6577 8.22041 13.6577H3.11172Z"}}),t._v(" "),e("path",{attrs:{d:"M22.8347 4.7719C22.5117 4.44892 22.0818 4.271 21.624 4.271C21.1662 4.271 20.7363 4.44887 20.4133 4.77185L19.2552 5.92995H19.2552H19.2551L18.2025 6.98264H18.2024C18.2024 6.98269 18.2024 6.98269 18.2024 6.98269L10.6779 14.5073C10.6675 14.5177 10.658 14.5288 10.649 14.5401C10.6468 14.543 10.6447 14.5461 10.6424 14.5491C10.6357 14.5581 10.6294 14.5673 10.6237 14.5768C10.6226 14.5784 10.6214 14.5799 10.6204 14.5816L8.42828 18.3047C8.33573 18.4158 8.2854 18.5545 8.2854 18.7009C8.2854 18.8666 8.34992 19.0224 8.46709 19.1396C8.58427 19.2567 8.74005 19.3213 8.90577 19.3213C9.05217 19.3213 9.19084 19.2709 9.30196 19.1784L13.025 16.9863C13.0268 16.9852 13.0283 16.984 13.03 16.9829C13.0394 16.9772 13.0486 16.9709 13.0575 16.9643C13.0606 16.962 13.0637 16.9599 13.0666 16.9576C13.0779 16.9486 13.089 16.9392 13.0994 16.9287L20.6238 9.40425C20.6238 9.40425 20.6238 9.40425 20.6238 9.4042C20.6238 9.40415 20.6239 9.40415 20.6239 9.40415L21.6766 8.35141H21.6767H21.6767L22.8348 7.19336C23.5023 6.52575 23.5023 5.43947 22.8347 4.7719ZM20.3606 8.6146L18.992 7.24592L19.5184 6.71955L20.8871 8.08818L20.3606 8.6146ZM12.8362 16.1391L11.4675 14.7705L18.4656 7.77234L19.8343 9.14097L12.8362 16.1391ZM10.6868 17.4991L10.1076 16.9199L11.0179 15.3737L12.233 16.5887L10.6868 17.4991ZM9.27823 18.3284L9.71745 17.5825L10.0242 17.8892L9.27823 18.3284ZM22.3083 6.6669L21.4135 7.56176L20.0448 6.19314L20.9397 5.29822C21.1221 5.11583 21.3651 5.01539 21.6241 5.01539C21.883 5.01539 22.126 5.11583 22.3084 5.29822C22.4908 5.48061 22.5912 5.72364 22.5912 5.98256C22.5912 6.24148 22.4907 6.48456 22.3083 6.6669Z"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2677:1203"}},[e("rect",{attrs:{width:"23.0776",height:"23.0776",fill:"white",transform:"translate(0.258057 0.257324)"}})])])])}),[],!1,null,null,null);e.default=component.exports},661:function(t,e,n){"use strict";n.r(e);var r={},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"21",height:"27",viewBox:"0 0 21 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.28576 19C9.00843 19 8.74405 18.8892 8.56255 18.6953L6.27902 15.9951C5.93675 15.6291 5.8787 15.3087 6.27812 14.9951C6.67735 14.6811 7.05326 15.1289 7.39594 15.4951L9.28576 17.448L13.9402 11.4952C14.6712 10.5569 15.4363 11.0765 14.7021 12.0188L10.0606 18.6345C9.89034 18.8529 9.62004 18.9873 9.32768 18.9991C9.31356 18.9997 9.29968 19 9.28576 19Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M6 5H3V24H18V5H15",stroke:"#77B550","stroke-width":"0.5"}}),t._v(" "),e("path",{attrs:{d:"M14 1H7V6H14V1Z",stroke:"#77B550","stroke-width":"0.8"}}),t._v(" "),e("path",{attrs:{d:"M6 3H1V26H20V3H15",stroke:"#77B550","stroke-width":"0.8"}}),t._v(" "),e("path",{attrs:{d:"M12.5 2.5H8.5V4.5H12.5V2.5Z",stroke:"#77B550","stroke-width":"0.5"}})])}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,n){"use strict";n.r(e);var r={name:"TickCircleIcon"},l=n(1),component=Object(l.a)(r,(function(){var t=this._self._c;return t("svg",{staticClass:"fill-current",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2677:1249)"}},[t("path",{attrs:{d:"M11.7966 0.257324C5.41426 0.257324 0.257812 5.40782 0.257812 11.7961C0.257812 18.1844 5.40831 23.3349 11.7966 23.3349C18.1849 23.3349 23.3354 18.1844 23.3354 11.7961C23.3354 5.40782 18.1791 0.257324 11.7966 0.257324ZM11.7966 21.7921C6.2589 21.7921 1.8006 17.3338 1.8006 11.7961C1.8006 6.25837 6.25894 1.80007 11.7966 1.80007C17.3343 1.80007 21.7926 6.25837 21.7926 11.7961C21.7926 17.3338 17.3343 21.7921 11.7966 21.7921Z"}}),this._v(" "),t("path",{attrs:{d:"M17.3342 8.41146C17.0292 8.10634 16.5657 8.10634 16.2548 8.41141L10.3358 14.3304L7.33817 11.3328C7.03314 11.0278 6.56968 11.0278 6.2588 11.3328C5.95377 11.6379 5.95377 12.1013 6.2588 12.4122L9.79608 15.9495C9.94861 16.102 10.1011 16.1783 10.3358 16.1783C10.5646 16.1783 10.723 16.102 10.8755 15.9495L17.3342 9.49083C17.6392 9.1858 17.6392 8.72243 17.3342 8.41146Z"}})])])}),[],!1,null,null,null);e.default=component.exports},670:function(t,e,n){"use strict";n.r(e);var r={name:"ledgerIcon"},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_4864_7787)"}},[e("path",{attrs:{d:"M22.8824 5.09223L17.9457 0.155481C17.8461 0.0559499 17.7111 0 17.5703 0H4.14021C3.84703 0 3.60938 0.237654 3.60938 0.530834V26.117C3.60938 26.4102 3.84703 26.6479 4.14021 26.6479H22.5071C22.8002 26.6479 23.0379 26.4102 23.0379 26.117V5.46759C23.0379 5.32681 22.9819 5.19177 22.8824 5.09223ZM18.1011 1.81243L21.2255 4.93675H18.1011V1.81243ZM21.9762 25.5862H4.67104V1.06167H17.0395V5.46759C17.0395 5.76077 17.2772 5.99842 17.5703 5.99842H21.9762V25.5862Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M7.35115 9.23648H16.1364C16.4296 9.23648 16.6673 8.99882 16.6673 8.70564C16.6673 8.41246 16.4296 8.1748 16.1364 8.1748H7.35115C7.05797 8.1748 6.82031 8.41246 6.82031 8.70564C6.82031 8.99882 7.05797 9.23648 7.35115 9.23648Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M19.2949 11.6787H7.35115C7.05797 11.6787 6.82031 11.9164 6.82031 12.2095C6.82031 12.5027 7.05797 12.7404 7.35115 12.7404H19.2949C19.588 12.7404 19.8257 12.5027 19.8257 12.2095C19.8257 11.9164 19.588 11.6787 19.2949 11.6787Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M19.2949 15.1816H7.35115C7.05797 15.1816 6.82031 15.4193 6.82031 15.7125C6.82031 16.0057 7.05797 16.2433 7.35115 16.2433H19.2949C19.588 16.2433 19.8257 16.0057 19.8257 15.7125C19.8257 15.4193 19.588 15.1816 19.2949 15.1816Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M19.2949 18.6855H7.35115C7.05797 18.6855 6.82031 18.9232 6.82031 19.2164C6.82031 19.5096 7.05797 19.7472 7.35115 19.7472H19.2949C19.588 19.7472 19.8257 19.5096 19.8257 19.2164C19.8257 18.9232 19.588 18.6855 19.2949 18.6855Z",fill:"#77B550"}}),t._v(" "),e("path",{attrs:{d:"M18.1285 9.23648H19.2963C19.5895 9.23648 19.8272 8.99882 19.8272 8.70564C19.8272 8.41246 19.5895 8.1748 19.2963 8.1748H18.1285C17.8354 8.1748 17.5977 8.41246 17.5977 8.70564C17.5977 8.99882 17.8354 9.23648 18.1285 9.23648Z",fill:"#77B550"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_4864_7787"}},[e("rect",{attrs:{width:"26.6479",height:"26.6479",fill:"white"}})])])])}),[],!1,null,"311c2f94",null);e.default=component.exports}}]);