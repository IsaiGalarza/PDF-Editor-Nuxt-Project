(window.webpackJsonp=window.webpackJsonp||[]).push([[146,23,32,61,74,76,79,95],{1980:function(t,e,n){"use strict";n.r(e);var l=n(0),r=n(655),o=n(255),C=n(68),c=n(66),d=n(101),f=n(710),x=n(656),h=n(711),w=n(102),v=n(67),_=n(103),L=n(709),m=n(713),H=n(712),V=l.default.extend({name:"LandingPageUpload",components:{CloudIcon:r.default,FacebookIcon:c.default,LinkedInIcon:d.default,ReditIcon:w.default,EnvelopeIcon:C.default,TwitterIcon:v.default,WhatsappIcon:_.default,NotAllowedTrafficIcon:f.default,PenIcon:x.default,DocumentIcon:o.default,PrinterIcon:h.default,DownloadIcon:L.default,UploadIcon:m.default,ScannerIcon:H.default},data:function(){return{notAllowedFields:[{icon:"pen-icon",text:"No Pen"},{icon:"document-icon",text:"No Paper"},{icon:"printer-icon",text:"No Printer"},{icon:"download-icon",text:"No Download"},{icon:"upload-icon",text:"No Upload"},{icon:"scanner-icon",text:"No Scanner"}]}}}),I=n(1),component=Object(I.a)(V,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"bg-gradient-to-t from-[rgba(119,195,96,0.1)] to-[rgba(119,195,96,0.2)]",attrs:{id:"upload-file-section"}},[t._m(0),t._v(" "),e("div",{staticClass:"py-20 cursor-pointer",on:{click:function(e){return t.$nuxt.$router.push("/dashboard")}}},[e("div",{staticClass:"container"},[e("div",{staticClass:"shadow-lg rounded-2xl bg-white px-4 py-16"},[e("div",{staticClass:"mt-2 mb-14 mx-auto px-4 py-16 flex flex-col items-center border-2 border-paperdazgreen-300 border-dashed rounded-2xl max-w-3xl"},[e("span",{staticClass:"circle circle-46 bg-paperdazgreen-300 text-white"},[e("cloud-icon",{attrs:{width:"47",height:"47"}})],1)]),t._v(" "),e("div",{staticClass:"grid max-w-3xl mx-auto gap-4",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))"}},t._l(t.notAllowedFields,(function(n,i){return e("div",{key:i,staticClass:"flex items-center gap-3 sm:gap-5"},[e("div",{staticClass:"h-16 w-16 rounded-lg bg-white border border-paperdazgray-200 flex items-center justify-center relative text-paperdazgreen-300"},[e(n.icon,{tag:"component"}),t._v(" "),e("not-allowed-traffic-icon",{staticClass:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"})],1),t._v(" "),e("span",[t._v(t._s(n.text))])])})),0)])])])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white"},[e("div",{staticClass:"container py-14"},[e("h1",{staticClass:"font-bold text-4xl text-center mb-2"},[t._v("\n        Click to upload files to create a Paperlink\n      ")]),t._v(" "),e("p",{staticClass:"font-semibold text-center text-sm text-paperdazgray-300 mx-auto max-w-md mb-6"},[t._v("\n        Complete a file here then share our mission on one social media\n        platform!\n      ")])])])}],!1,null,null,null);e.default=component.exports},655:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"CloudIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",viewBox:"0 0 47 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M38.224 13.1247C37.7214 10.1383 36.2427 7.41286 33.9812 5.3446C31.4684 3.0444 28.2017 1.77832 24.7997 1.77832C22.1709 1.77832 19.6097 2.53217 17.4158 3.95288C15.5892 5.13198 14.0718 6.72666 12.9991 8.60162C12.5352 8.51464 12.0519 8.46631 11.5687 8.46631C7.46117 8.46631 4.11717 11.8103 4.11717 15.9178C4.11717 16.4494 4.17516 16.9616 4.27181 17.4642C1.61401 19.3971 0 22.5092 0 25.8242C0 28.5013 0.995467 31.1011 2.81244 33.1597C4.67773 35.2666 7.14223 36.5134 9.77104 36.6583C9.80003 36.6583 9.81936 36.6583 9.84836 36.6583H18.16C18.8849 36.6583 19.4648 36.0784 19.4648 35.3536C19.4648 34.6287 18.8849 34.0488 18.16 34.0488H9.88702C5.93414 33.8072 2.60948 30.0476 2.60948 25.8145C2.60948 23.0794 4.07852 20.5279 6.44637 19.1458C6.99726 18.8269 7.22922 18.16 7.01659 17.5608C6.8233 17.0389 6.72665 16.488 6.72665 15.8985C6.72665 13.231 8.90121 11.0565 11.5687 11.0565C12.1389 11.0565 12.6995 11.1531 13.2213 11.3464C13.8592 11.5784 14.5647 11.2884 14.8547 10.6795C16.662 6.84264 20.5665 4.36847 24.8094 4.36847C30.5115 4.36847 35.2183 8.64028 35.7595 14.3038C35.8175 14.8934 36.2621 15.3669 36.8419 15.4636C41.1427 16.1981 44.3901 20.1703 44.3901 24.7031C44.3901 29.5064 40.6112 33.6816 35.9528 34.0392H28.8299C28.105 34.0392 27.5251 34.6191 27.5251 35.3439C27.5251 36.0688 28.105 36.6487 28.8299 36.6487H36.0011C36.0301 36.6487 36.0591 36.6487 36.0978 36.6487C39.0455 36.436 41.7999 35.083 43.8489 32.8214C45.8881 30.5792 46.9996 27.6991 46.9996 24.7031C46.9899 19.2811 43.2883 14.4584 38.224 13.1247Z"}}),t._v(" "),e("path",{attrs:{d:"M31.333 27.0608C31.8453 26.5486 31.8453 25.7271 31.333 25.2148L24.4227 18.3046C24.1811 18.0629 23.8429 17.918 23.5046 17.918C23.1663 17.918 22.8281 18.0533 22.5864 18.3046L15.6762 25.2148C15.1639 25.7271 15.1639 26.5486 15.6762 27.0608C15.9274 27.3121 16.2657 27.4474 16.5943 27.4474C16.9229 27.4474 17.2612 27.3218 17.5125 27.0608L22.1999 22.3734V43.9161C22.1999 44.6409 22.7797 45.2208 23.5046 45.2208C24.2295 45.2208 24.8093 44.6409 24.8093 43.9161V22.3734L29.4967 27.0608C29.9993 27.573 30.8208 27.573 31.333 27.0608Z"}})])}),[],!1,null,null,null);e.default=component.exports},656:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"PenIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M18.9115 4.7064C19.2385 5.0325 19.2385 5.56081 18.9115 5.88697L6.53124 17.2117L4.79584 18.7991L2.35704 16.364L3.94702 14.6314L14.0038 3.67283L13.6286 3.29784L8.88162 8.03745C8.71847 8.20033 8.45353 8.20033 8.29038 8.03745L8.22549 7.97267C8.06234 7.80978 8.06234 7.54527 8.22549 7.38238L14.7752 0.843927C14.9387 0.68104 15.2033 0.68104 15.3668 0.843927L15.4317 0.908378C15.5949 1.07127 15.5949 1.33578 15.4317 1.49866L14.5159 2.41297L14.8521 2.74903L15.2905 2.27169C15.6168 1.94559 16.146 1.94559 16.473 2.27169L18.9115 4.7064ZM0.769531 19.9744L1.18093 20.3859L4.50958 18.9627L2.19428 16.6512L0.769531 19.9744ZM18.5079 0.0351562L19.8829 1.40798L18.9051 0.431762L17.0658 2.26779L19.0303 4.22914L20.8697 2.39278L21.2456 2.7681C21.2456 2.76843 21.3711 0.306439 18.5079 0.0351562Z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},709:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"DownloadIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.33646 15.3225C9.42352 15.4094 9.52687 15.4784 9.64061 15.5254C9.75436 15.5724 9.87627 15.5967 9.99939 15.5967C10.1225 15.5967 10.2444 15.5724 10.3582 15.5254C10.4719 15.4784 10.5753 15.4094 10.6623 15.3225L14.1978 11.7928C14.3736 11.6172 14.4724 11.3792 14.4724 11.1309C14.4724 10.8827 14.3736 10.6446 14.1978 10.4691C14.022 10.2936 13.7836 10.195 13.5349 10.195C13.2863 10.195 13.0478 10.2936 12.872 10.4691L10.9369 12.4011L10.9369 2.18109C10.9369 1.93285 10.8381 1.69478 10.6623 1.51926C10.4865 1.34373 10.248 1.24512 9.99939 1.24512C9.75075 1.24512 9.51229 1.34373 9.33648 1.51926C9.16066 1.69478 9.06189 1.93285 9.06189 2.18109L9.06189 12.4011L7.12677 10.4691C6.95096 10.2936 6.7125 10.195 6.46386 10.195C6.21522 10.195 5.97677 10.2936 5.80095 10.4691C5.62514 10.6446 5.52637 10.8827 5.52637 11.1309C5.52637 11.3792 5.62514 11.6172 5.80095 11.7928L9.33646 15.3225Z"}}),t._v(" "),e("path",{attrs:{d:"M18.125 9.35645C17.8764 9.35645 17.6379 9.45506 17.4621 9.63058C17.2863 9.80611 17.1875 10.0442 17.1875 10.2924L17.1875 17.4682L2.8125 17.4682L2.8125 10.2924C2.8125 10.0442 2.71373 9.80611 2.53791 9.63058C2.3621 9.45506 2.12364 9.35645 1.875 9.35645C1.62636 9.35645 1.3879 9.45506 1.21209 9.63058C1.03627 9.80611 0.9375 10.0442 0.9375 10.2924L0.9375 17.7802C0.9375 18.1939 1.10212 18.5907 1.39515 18.8832C1.68817 19.1758 2.0856 19.3401 2.5 19.3401L17.5 19.3401C17.9144 19.3401 18.3118 19.1758 18.6049 18.8832C18.8979 18.5907 19.0625 18.1939 19.0625 17.7802L19.0625 10.2924C19.0625 10.0442 18.9637 9.80611 18.7879 9.63058C18.6121 9.45506 18.3736 9.35645 18.125 9.35645Z"}})])}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"NotAllowedTrafficIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"38",height:"39",viewBox:"0 0 38 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_3327_1557)"}},[t("path",{attrs:{d:"M-8.30516e-07 19.474C-1.28844e-06 29.933 8.52317 38.4431 19 38.4431C24.0793 38.4431 28.8514 36.471 32.4378 32.89C36.0247 29.3086 38 24.5451 38 19.474C38 9.0142 29.4768 0.504882 19 0.504882C13.9207 0.504882 9.14862 2.47697 5.56215 6.05799C1.9753 9.63863 -6.08491e-07 14.4029 -8.30516e-07 19.474ZM3.16666 19.474C3.16666 15.7799 4.42452 12.2815 6.7369 9.46612L29.0242 31.7172C26.2042 34.0258 22.7001 35.2816 19 35.2816C10.2696 35.2816 3.16666 28.1902 3.16666 19.474ZM34.8333 19.474C34.8333 23.1673 33.5755 26.6665 31.2631 29.4811L8.97583 7.23083C11.7958 4.92221 15.2999 3.6664 19 3.6664C27.7304 3.6664 34.8333 10.7578 34.8333 19.474Z"}})])])}),[],!1,null,null,null);e.default=component.exports},711:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"PrinterIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_3327_1616)"}},[e("path",{attrs:{d:"M18.1543 4.25293V3.22168C18.1543 1.44471 16.7086 -0.000976562 14.9316 -0.000976562H7.02539C5.24842 -0.000976562 3.80273 1.44471 3.80273 3.22168V4.25293H18.1543Z"}}),t._v(" "),e("path",{attrs:{d:"M5.0918 13.7061V18.9482V20.0654V20.71C5.0918 21.4219 5.66891 21.999 6.38086 21.999H15.5762C16.2881 21.999 16.8652 21.4219 16.8652 20.71V20.0654V18.9482V13.7061H5.0918ZM12.6973 19.2061H9.25977C8.90381 19.2061 8.61523 18.9175 8.61523 18.5615C8.61523 18.2056 8.90381 17.917 9.25977 17.917H12.6973C13.0532 17.917 13.3418 18.2056 13.3418 18.5615C13.3418 18.9175 13.0532 19.2061 12.6973 19.2061ZM12.6973 16.4561H9.25977C8.90381 16.4561 8.61523 16.1675 8.61523 15.8115C8.61523 15.4556 8.90381 15.167 9.25977 15.167H12.6973C13.0532 15.167 13.3418 15.4556 13.3418 15.8115C13.3418 16.1675 13.0532 16.4561 12.6973 16.4561Z"}}),t._v(" "),e("path",{attrs:{d:"M18.7559 5.54199H3.24414C1.46717 5.54199 0.0214844 6.98768 0.0214844 8.76465V13.9209C0.0214844 15.6979 1.46717 17.1436 3.24414 17.1436H3.80273V13.7061H3.41602C3.06006 13.7061 2.77148 13.4175 2.77148 13.0615C2.77148 12.7056 3.06006 12.417 3.41602 12.417H4.44727H17.5098H18.541C18.897 12.417 19.1855 12.7056 19.1855 13.0615C19.1855 13.4175 18.897 13.7061 18.541 13.7061H18.1543V17.1436H18.7559C20.5328 17.1436 21.9785 15.6979 21.9785 13.9209V8.76465C21.9785 6.98768 20.5328 5.54199 18.7559 5.54199ZM5.47852 9.58105H3.41602C3.06006 9.58105 2.77148 9.29248 2.77148 8.93652C2.77148 8.58057 3.06006 8.29199 3.41602 8.29199H5.47852C5.83447 8.29199 6.12305 8.58057 6.12305 8.93652C6.12305 9.29248 5.83447 9.58105 5.47852 9.58105Z"}})])])}),[],!1,null,null,null);e.default=component.exports},712:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"ScannerIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M20.2373 9.39181L5.83494 2.07324L5.25095 3.22244L19.6533 10.541C20.3057 10.8725 20.7109 11.533 20.7109 12.2648V13.4759H0V16.6986C0 18.4756 1.44568 19.9213 3.22266 19.9213H22V12.2648C22 11.0452 21.3246 9.9443 20.2373 9.39181ZM3.86719 17.558C3.39255 17.558 3.00781 17.1732 3.00781 16.6986C3.00781 16.224 3.39255 15.8392 3.86719 15.8392C4.34182 15.8392 4.72656 16.224 4.72656 16.6986C4.72656 17.1732 4.34182 17.558 3.86719 17.558Z"}}),t._v(" "),e("path",{attrs:{d:"M17.7031 11.3311H3.22266V12.6201H17.7031V11.3311Z"}})])}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"UploadIcon"}),r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_3327_1579)"}},[e("path",{attrs:{d:"M14.8451 5.21277L10.4701 0.212773C10.3513 0.0777734 10.1801 -0.000976562 10.0001 -0.000976562C9.82008 -0.000976562 9.64883 0.0777734 9.53008 0.212773L5.15508 5.21277C4.99383 5.39777 4.95383 5.65902 5.05633 5.88277C5.15758 6.10527 5.38008 6.24902 5.62508 6.24902H8.12508V14.374C8.12508 14.719 8.40508 14.999 8.75008 14.999H11.2501C11.5951 14.999 11.8751 14.719 11.8751 14.374V6.24902H14.3751C14.6201 6.24902 14.8426 6.10652 14.9438 5.88277C15.0451 5.65902 15.0076 5.39652 14.8451 5.21277Z"}}),t._v(" "),e("path",{attrs:{d:"M16.875 13.749V17.499H3.125V13.749H0.625V18.749C0.625 19.4403 1.185 19.999 1.875 19.999H18.125C18.8162 19.999 19.375 19.4403 19.375 18.749V13.749H16.875Z"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);