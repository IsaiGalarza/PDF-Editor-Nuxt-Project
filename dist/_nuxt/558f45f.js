(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1666:function(t,e,o){var content=o(1878);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("dfd575d0",content,!0,{sourceMap:!1})},1877:function(t,e,o){"use strict";o(1666)},1878:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".header[data-v-6e1eaf1e]{margin-bottom:0.375rem;font-size:1.5rem;line-height:2rem;font-weight:600;--tw-text-opacity:1;color:rgb(119 181 80 / var(--tw-text-opacity))}@media (min-width: 1024px){.header[data-v-6e1eaf1e]{margin-bottom:0.5rem;font-size:1.875rem;line-height:2.25rem}}.body[data-v-6e1eaf1e]{font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}@media (min-width: 1024px){.body[data-v-6e1eaf1e]{font-size:1rem;line-height:1.5rem}}.card-containers[data-v-6e1eaf1e]{padding-top:2.25rem;padding-bottom:2.25rem;--col-counts:1;display:grid;grid-template-columns:repeat(var(--col-counts),1fr);gap:24px}@media only screen and (min-width:768px){.card-containers[data-v-6e1eaf1e]{padding-top:5rem;padding-bottom:5rem;--col-counts:3}}@media only screen and (min-width:1024px){.card-containers[data-v-6e1eaf1e]{gap:32px}}.contact-us-card[data-v-6e1eaf1e]{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--accent-color:#e6af23;--scaling-factor:1.05;border:1px solid rgba(0,0,0,.17);border-top:3px solid var(--accent-color);max-width:100%;transition:all .3s ease-in-out;background:#fff;transform:scale(1);display:flex;flex-direction:column;align-items:stretch;position:relative;z-index:1;padding:32px 16px}@media only screen and (min-width:768px){.contact-us-card[data-v-6e1eaf1e]{--scaling-factor:1.2;box-shadow:0 10px 18px 10px rgba(75,75,75,.15)}}.contact-us-card .card-header[data-v-6e1eaf1e]{margin-bottom:2rem;text-align:center;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}.contact-us-card .body[data-v-6e1eaf1e]{margin-bottom:1.5rem;text-align:center;font-weight:400;flex:1;font-size:13px}.contact-us-card>.button[data-v-6e1eaf1e]{height:2.5rem;width:100%;border-radius:9999px;font-size:0.875rem;line-height:1.25rem;font-weight:600;color:var(--accent-color);border:1px solid var(--accent-color);transition:all .3s ease-in-out}.contact-us-card.active[data-v-6e1eaf1e]{--accent-color:#77b550;transform:scale(var(--scaling-factor));z-index:2}.contact-us-card.active>.button[data-v-6e1eaf1e]{color:#fff;background:var(--accent-color)}",""]),n.locals={},t.exports=n},2003:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"relative shadow"},[e("div",{staticClass:"px-5 text-center text-black absolute inline-block transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"},[e("h4",{staticClass:"text-4xl lg:text-5xl font-semibold whitespace-nowrap"},[e("span",{staticClass:"text-paperdazgreen-400"},[t._v("Contact")]),t._v("\n        Us\n      ")]),t._v(" "),e("p",{staticClass:"text-[#414142] font-medium"},[t._v("\n        Have any questions? We'd love to hear from you.\n      ")])]),t._v(" "),e("img",{staticClass:"w-full max-w-full max-h-80 min-h-[250px] object-cover",attrs:{src:o(990),alt:""}})])}],r=o(0).default.extend({name:"ContactUsPage",layout:"landing",auth:!1,head:function(){return{script:[{hid:"tawk.to",src:"https://embed.tawk.to/61ee08389bd1f31184d8e4d8/1fq4t07bg",defer:!0}]}},data:function(){return{currentActiveCard:2,cards:[{id:1,heading:"Partnership",content:"Let's strategically partner to keep everyone SAFE while reducing carbon footprint in the world we live in.",buttonText:"CONTACT US",command:"partners"},{id:2,heading:"FAQ's & Support",content:"Our support team is spread across the globe to give you answers fast. We also have answers ready for many freuqntly asked questions.",buttonText:"VISIT FAQ's",command:"faq"},{id:3,heading:"Chat with us",content:"Our team is ready to answer any questions you may have.",buttonText:"INITIATE CHAT",command:"tawk"}]}},methods:{mouseHover:function(t){},handleCommand:function(t){switch(String(t).toLowerCase()){case"faq":this.$nuxt.$router.push("/faq");break;case"partners":this.$nuxt.$router.push("/partners");break;case"tawk":try{var e;null===(e=Tawk_API)||void 0===e||e.toggle()}catch(t){}}}},mounted:function(){try{document.querySelectorAll(".widget-visible")[0].style.display="block"}catch(t){}},beforeDestroy:function(){try{document.querySelectorAll(".widget-visible")[0].style.cssText="display: none !important"}catch(t){}}}),c=(o(1877),o(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"container card-containers"},t._l(t.cards,(function(o){return e("article",{key:o.id,staticClass:"contact-us-card",class:{active:o.id===t.currentActiveCard},on:{mouseover:function(e){t.currentActiveCard=o.id},mouseleave:function(e){t.currentActiveCard=2}}},[e("header",[e("h4",{staticClass:"card-header"},[t._v(t._s(o.heading))])]),t._v(" "),e("div",{staticClass:"body"},[t._v("\n        "+t._s(o.content)+"\n      ")]),t._v(" "),e("button",{staticClass:"button",on:{click:function(e){return t.handleCommand(o.command||"")}}},[t._v("\n        "+t._s(o.buttonText)+"\n      ")])])})),0)])}),n,!1,null,"6e1eaf1e",null);e.default=component.exports},990:function(t,e,o){t.exports=o.p+"img/world_map.9924acd.svg"}}]);