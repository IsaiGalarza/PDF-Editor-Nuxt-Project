(window.webpackJsonp=window.webpackJsonp||[]).push([[6,55,77,86,87],{1324:function(t,e,C){"use strict";C.r(e);var r=C(3),l=(C(18),C(32),C(8),C(33),C(681)),n=C(682),o=C(652),d=C(683),c=C(1389),f={components:{SingleLeafIcon:n.default,MultipleLeaf1Icon:l.default,TwoLeavesIcon:d.default,TreeIcon:o.default},data:function(){return{companyStaticData:[]}},computed:{user:function(){return this.$auth.user},getMAxLeaves:function(){if(!(this.companyStaticData.length<1))return this.companyStaticData.filter((function(t){return t.name==c.a.MAX_LEAVES}))[0].value},getLeavesPerFile:function(){if(!(this.companyStaticData.length<1))return this.companyStaticData.filter((function(t){return t.name==c.a.LEAVES_PER_FILE}))[0].value},getLeavesPerShare:function(){if(!(this.companyStaticData.length<1))return this.companyStaticData.filter((function(t){return t.name==c.a.LEAVES_PER_SHARE}))[0].value}},beforeMount:function(){this.getStaticSetting()},methods:{getStaticSetting:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.$get("/admin-settings").then((function(e){t.companyStaticData=e})).catch((function(t){}));case 1:case"end":return e.stop()}}),e)})))()}}},h=(C(1782),C(1)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"leaves-details-container text-xs sm:text-sm"},[e("div",[e("div",{staticClass:"inline-flex gap-2 whitespace-nowrap sm:gap-4 items-center"},[e("single-leaf-icon"),t._v(" "),e("span",{staticClass:"text-paperdazgray-500 font-medium"},[t._v(t._s((t.user||{}).totalLeavesEarned)+" leaves")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"inline-flex gap-2 whitespace-nowrap sm:gap-4 items-center"},[e("multiple-leaf-1-icon"),t._v(" "),e("span",{staticClass:"text-paperdazgray-500 font-medium"},[t._v(t._s(t.getLeavesPerFile)+" leaves per file")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"inline-flex gap-2 whitespace-nowrap sm:gap-4 items-center"},[e("two-leaves-icon"),t._v(" "),e("span",{staticClass:"text-paperdazgray-500 font-medium"},[t._v(t._s(t.getLeavesPerShare)+" leaves per share")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"inline-flex gap-2 whitespace-nowrap sm:gap-4 items-center"},[e("tree-icon"),t._v(" "),e("span",{staticClass:"text-paperdazgray-500 font-medium flex flex-col"},[e("span",[t._v(t._s(t.getMAxLeaves)+" leaves")]),t._v(" "),e("span",{staticClass:"whitespace-nowrap"},[t._v("Plant a tree in your honor")])])],1)])])}),[],!1,null,"6d07f6a2",null);e.default=component.exports},1389:function(t,e,C){"use strict";var r;!function(t){t.MAX_LEAVES="max_leaves",t.LEAVES_PER_FILE="leaves_per_file",t.LEAVES_PER_SHARE="leaves_per_share"}(r||(r={})),e.a=r},1599:function(t,e,C){var content=C(1783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,C(15).default)("322e6d37",content,!0,{sourceMap:!1})},1782:function(t,e,C){"use strict";C(1599)},1783:function(t,e,C){var r=C(14)((function(i){return i[1]}));r.push([t.i,".leaves-details-container[data-v-6d07f6a2]{display:flex;flex-wrap:wrap;border-radius:0.75rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem;}.leaves-details-container>*[data-v-6d07f6a2]{display:flex;flex:1 1 0%;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem;padding-top:1rem;padding-bottom:1rem;}@media (min-width: 640px){.leaves-details-container>*[data-v-6d07f6a2]{padding-top:0.5rem;padding-bottom:0.5rem;}}.leaves-details-container>*[data-v-6d07f6a2]{border-bottom:1px solid #e3e3e3;}.leaves-details-container>*[data-v-6d07f6a2]:last-child{border:none}@media screen and (min-width:640px){.leaves-details-container>*[data-v-6d07f6a2]{border-left-color:currentcolor;border-left-style:none;border-left-width:medium;border-bottom-color:currentcolor;border-bottom-style:none;border-bottom-width:medium;border-right-color:currentcolor;border-right-style:none;border-right-width:medium;border-top-color:currentcolor;border-top-style:none;border-top-width:medium;border-right-color:#e3e3e3;border-right-style:solid;border-right-width:1px}}",""]),r.locals={},t.exports=r},652:function(t,e,C){"use strict";C.r(e);var r={},l=C(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1171)"}},[e("path",{attrs:{d:"M25.7146 11.8304C26.4006 10.8694 26.8084 9.69624 26.8084 8.42552C26.8084 5.18232 24.1793 2.55324 20.9361 2.55324C20.8881 2.55324 20.8415 2.55927 20.7938 2.56047C19.792 1.02045 18.0591 0 16.0851 0C13.7951 0 11.8287 1.37244 10.9541 3.33795C7.44465 4.25473 4.85107 7.43724 4.85107 11.234C4.85107 13.3215 5.64056 15.2201 6.9288 16.6643C6.90656 16.8939 6.89355 17.1262 6.89355 17.3616C6.89355 21.3099 10.0942 24.5105 14.0425 24.5105C14.4728 24.5105 16.1866 24.4721 16.5956 24.3987L16.7687 22.6294C17.7802 23.1776 18.9387 23.4893 20.17 23.4893C24.1183 23.4893 27.3189 20.2886 27.3189 16.3403C27.3191 14.6297 26.7166 13.0608 25.7146 11.8304Z",fill:"#4CAF50"}}),t._v(" "),e("path",{attrs:{d:"M16.5957 21.8234C15.7764 22.0348 14.8691 22.0277 13.8995 21.5697C12.5863 20.9495 11.6347 19.6889 11.5059 18.2423C11.4552 17.6741 11.5227 17.1282 11.6846 16.6245C11.7483 16.4265 11.6663 16.2161 11.5055 16.0842C10.2502 15.0546 9.4468 13.4948 9.4468 11.7446C9.4468 9.47325 10.7974 7.52219 12.7374 6.6377C12.9399 6.5454 13.0704 6.34415 13.048 6.12279C13.0312 5.95635 13.0212 5.7879 13.0212 5.61693C13.0212 2.95675 14.8726 0.733752 17.3557 0.152807C16.9467 0.0578055 16.5232 0 16.0851 0C13.7951 0 11.8287 1.37244 10.9541 3.33795C7.44465 4.25473 4.85107 7.43724 4.85107 11.234C4.85107 13.3215 5.64056 15.2201 6.9288 16.6643C6.90656 16.8939 6.89356 17.1262 6.89356 17.3616C6.89356 21.3099 10.0942 24.5105 14.0425 24.5105C14.4728 24.5105 16.1866 24.4721 16.5956 24.3987V22.8383V21.8234H16.5957Z",fill:"#388E3C"}}),t._v(" "),e("path",{attrs:{d:"M15.5744 21.9572C15.558 21.9572 15.5422 21.955 15.5258 21.9548L15.0637 31.6593H18.1275L17.6753 22.1639C17.6591 21.8237 17.3186 21.5785 16.9999 21.6983C16.5563 21.8651 16.0764 21.9572 15.5744 21.9572Z",fill:"#AF6E5A"}}),t._v(" "),e("path",{attrs:{d:"M17.6753 22.1639C17.6591 21.8237 17.3186 21.5785 16.9999 21.6983C16.5563 21.8651 16.0764 21.9573 15.5744 21.9573C15.558 21.9573 15.5422 21.955 15.5258 21.9548L15.0637 31.6594H16.5956V23.3466C16.5956 23.1267 16.7363 22.9316 16.9448 22.8621L17.6967 22.6115L17.6753 22.1639Z",fill:"#965A50"}}),t._v(" "),e("path",{attrs:{d:"M19.149 32.1702H14.0426C13.7606 32.1702 13.532 31.9418 13.532 31.6596C13.532 31.3773 13.7606 31.1489 14.0426 31.1489H19.149C19.431 31.1489 19.6596 31.3773 19.6596 31.6596C19.6596 31.9418 19.431 32.1702 19.149 32.1702Z",fill:"#96BE4B"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2677:1171"}},[e("rect",{attrs:{width:"32.17",height:"32.17",fill:"white"}})])])])}),[],!1,null,null,null);e.default=component.exports},681:function(t,e,C){"use strict";C.r(e);var r={},l=C(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"33",height:"28",viewBox:"0 0 33 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.0263 27.8573C15.7805 27.8573 15.5809 27.6591 15.5791 27.4133C15.5791 26.728 15.5791 10.5906 24.3559 3.80484C24.5628 3.67019 24.8399 3.72875 24.9747 3.9354C25.0951 4.12044 25.0626 4.36579 24.8977 4.513C16.4735 11.0411 16.4703 27.2436 16.4703 27.4069C16.472 27.6537 16.2734 27.8556 16.0263 27.8573Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M18.4614 14.8339C18.4614 14.8339 19.5876 9.0011 25.8086 11.3087C25.8086 11.3087 22.8905 16.887 18.4614 14.8339Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M17.6385 14.831C17.6385 14.831 20.3282 9.52703 13.9763 7.59473C13.9763 7.59458 12.8667 13.783 17.6385 14.831Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M21.6338 7.93382C21.6338 7.93382 23.8664 3.23356 28.6383 6.55312C28.6284 6.55327 24.9304 10.6429 21.6338 7.93382Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M20.9254 7.75056C20.9254 7.75056 24.3688 3.83383 19.4076 0.808105C19.4076 0.808105 17.1099 5.81505 20.9254 7.75056Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M24.2156 4.38563C24.2156 4.38563 25.6941 -1.73432 32.17 1.02371C32.17 1.02386 28.8146 6.77505 24.2156 4.38563Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M16.1699 27.8477C16.3472 27.8149 16.4644 27.6449 16.4316 27.4674C16.4306 27.4614 16.4293 27.4554 16.4278 27.4495C16.3202 26.9468 13.722 15.1018 6.18875 11.5309C6.02109 11.4516 5.82086 11.5231 5.74156 11.6909C5.66226 11.8586 5.73382 12.0588 5.90163 12.1381C13.1479 15.5653 15.759 27.4626 15.759 27.5898C15.7901 27.7674 15.9591 27.8861 16.1366 27.8552C16.1435 27.8538 16.1504 27.8525 16.1572 27.8509L16.1699 27.8477Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M14.453 23.6536C14.453 23.6536 13.5586 18.8719 8.45044 20.7161C8.46037 20.7291 10.8235 25.3149 14.453 23.6536Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M15.1351 23.6562C15.1351 23.6562 12.958 19.3021 18.1674 17.7451C18.1676 17.7451 19.0488 22.8174 15.1351 23.6562Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M12.2889 18.6785C12.2889 18.6785 10.5361 14.5789 6.32568 17.2718C6.32568 17.2717 9.36762 20.8981 12.2889 18.6785Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M12.8927 18.5449C12.8927 18.5449 10.0629 15.0816 14.417 12.6436C14.417 12.6436 16.2252 17.0173 12.8927 18.5449Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M8.85539 14.1223C8.85539 14.1223 6.46276 11.0279 3.49268 14.2332C3.49238 14.2332 6.86423 16.6453 8.85539 14.1223Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M9.33834 13.8743C9.33834 13.8743 6.18205 11.5567 9.33834 8.53418C9.33834 8.53126 11.8418 11.8409 9.33834 13.8743Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M6.38107 11.9356C6.38107 11.9356 4.31485 7.69232 0 10.7344C0 10.7343 3.39785 14.4259 6.38107 11.9356Z",fill:"#65B54E"}}),t._v(" "),e("path",{attrs:{d:"M15.6019 21.819C15.9341 20.7707 16.4527 19.7912 17.1327 18.9272C16.6512 19.4765 16.237 20.0816 15.8989 20.729C15.9411 20.3985 15.9032 20.0624 15.7881 19.7498C15.9071 20.1236 15.914 20.5242 15.8076 20.9019C15.2574 21.9936 14.931 23.1844 14.8481 24.4042H15.1746C15.1877 23.613 15.3063 22.827 15.5271 22.0672H15.5532C15.9246 21.4177 16.5347 20.9387 17.2538 20.7322C16.5938 20.8927 16.0102 21.2766 15.6019 21.819V21.819Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M13.5065 22.6022H13.5261C13.2848 22.0584 12.8811 21.6021 12.3706 21.2966C12.8199 21.5986 13.1742 22.022 13.3923 22.5174C13.0301 22.2744 12.6516 22.0563 12.2597 21.8646L12.2793 21.845L11.1435 20.8364L12.1227 21.7863C11.4506 21.4649 10.7429 21.2237 10.0142 21.0682C10.8729 21.3003 11.6941 21.6541 12.4525 22.1193C11.7714 22.1437 11.0896 22.1045 10.4158 22.0017C11.1456 22.1545 11.8896 22.231 12.6353 22.2301C12.9612 22.4381 13.273 22.6669 13.5689 22.9155L11.2384 23.0167L13.7158 23.0396C14.1558 23.4176 14.5571 23.8385 14.9136 24.2962L15.1617 24.1004C14.6731 23.5352 14.1172 23.032 13.5065 22.6022V22.6022Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M12.9059 17.2812C12.9218 16.7952 12.9786 16.3117 13.0756 15.8353C13.2492 15.463 13.5346 15.154 13.8917 14.9508C13.5876 15.1014 13.3262 15.3257 13.1312 15.6036C13.2694 15.0163 13.4696 14.4451 13.7285 13.8999C13.5555 14.2158 13.404 14.5429 13.2749 14.8791C13.2996 14.6241 13.2556 14.3672 13.1476 14.1349C13.2878 14.4622 13.3008 14.8299 13.1834 15.1662C13.0135 15.652 12.8889 16.1523 12.8112 16.6611C12.688 16.3127 12.5374 15.9742 12.3608 15.6494C12.538 16.0178 12.6821 16.4013 12.7917 16.7951C12.6677 17.6195 12.6677 18.4578 12.7917 19.2822L13.0756 19.2267C12.958 18.6545 12.9021 18.0712 12.9091 17.4869C13.0775 16.9778 13.4255 16.5471 13.8883 16.276C13.4607 16.496 13.1157 16.8487 12.9059 17.2812V17.2812Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M12.9906 18.93C12.4412 18.523 11.8438 18.1853 11.2118 17.9247C10.8744 17.5467 10.456 17.2499 9.98778 17.0564C10.3931 17.2495 10.7541 17.5238 11.0485 17.8626C10.5724 17.6762 10.0811 17.5321 9.57959 17.4318L8.45345 16.7432L9.41646 17.396C8.87858 17.294 8.33194 17.245 7.78442 17.2491C8.64082 17.2835 9.48714 17.4474 10.2945 17.7355L8.90414 17.7812L10.5068 17.8205C11.3454 18.1373 12.1272 18.5881 12.8209 19.1555L12.9906 18.93Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M9.64184 14.4061C9.41796 13.9497 9.24373 13.4704 9.1228 12.9765C9.17859 12.6495 9.34435 12.3511 9.59292 12.1311C9.35501 12.3189 9.18078 12.5752 9.09345 12.8654C8.98026 12.3824 8.91674 11.8891 8.90403 11.3932C8.92637 10.876 9.1929 10.4 9.62213 10.1105C9.28141 10.3197 9.02656 10.6439 8.90403 11.0243C8.90403 10.9721 8.90403 10.9199 8.90403 10.8643C8.91878 10.4971 8.96128 10.1317 9.03138 9.771C8.955 10.0882 8.89848 10.4096 8.86168 10.734L8.65605 10.0812L8.84868 10.8155C8.81217 11.1809 8.80341 11.5488 8.82254 11.9155C8.73053 11.7128 8.59588 11.5324 8.42749 11.3867C8.61413 11.5665 8.75127 11.7914 8.82575 12.0395C8.87526 12.8943 9.07417 13.734 9.41314 14.5202L9.64184 14.4061Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M9.50793 14.1808C9.03446 13.9877 8.54215 13.8445 8.03903 13.7532H8.01289C7.7097 13.6992 7.4033 13.6634 7.09559 13.6456C6.55596 13.5981 6.02611 13.4726 5.52226 13.2734C5.86459 13.431 6.22225 13.5525 6.58969 13.6356C5.95572 13.644 5.32525 13.7317 4.71289 13.8969C4.9949 13.8366 5.28056 13.7942 5.56797 13.7695C5.3676 13.8313 5.18213 13.9336 5.02279 14.0698C5.28743 13.8734 5.60419 13.7599 5.93338 13.7434C6.45168 13.7187 6.97145 13.7481 7.48377 13.8316C6.96196 13.9479 6.47724 14.1923 6.07372 14.5433C6.56268 14.1653 7.15167 13.9385 7.76783 13.8905C8.33126 14.0018 8.87922 14.1802 9.39986 14.4225L9.50793 14.1808Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M5.23868 11.2046C4.61697 10.7422 3.92487 10.3829 3.18881 10.1406C3.81315 10.3686 4.39878 10.6912 4.92541 11.0969C4.48232 10.9555 4.02958 10.8466 3.57086 10.7705V10.7511H3.51537C2.86182 10.6435 2.19878 10.6074 1.53735 10.6435C2.1224 10.6416 2.70614 10.6973 3.28038 10.8099C2.73155 10.9405 2.1725 11.0224 1.60921 11.0547C2.24873 11.0537 2.88636 10.9869 3.51215 10.8557C3.78993 10.9129 4.06434 10.9848 4.33467 11.0709C3.89741 11.3249 3.39269 11.4389 2.88869 11.3973C3.42336 11.4701 3.96708 11.3681 4.43909 11.1067C4.7874 11.2251 5.12841 11.3634 5.46081 11.5213C4.75673 11.7984 4.01293 11.9627 3.2576 12.0078C4.06186 12.0047 4.85969 11.8658 5.61737 11.5964C6.08471 11.8279 6.52926 12.1021 6.94578 12.4157L7.12848 12.1676C6.53963 11.7716 5.90507 11.4483 5.23868 11.2046V11.2046Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M23.7554 12.5196C23.023 12.4831 22.2889 12.5138 21.5622 12.6111C22.3117 12.2207 23.102 11.9143 23.9187 11.6973C22.7752 11.9398 21.6748 12.3536 20.6548 12.9245C21.0262 12.5994 21.3752 12.2492 21.6993 11.8768C21.1267 12.4676 20.4918 12.9952 19.8061 13.4501C19.0023 13.9903 18.2727 14.6333 17.6355 15.3627L17.9358 15.6042C18.3545 15.0741 18.8221 14.5844 19.3328 14.142L22.4662 14.1095L19.5287 13.9855C20.0646 13.537 20.6405 13.1383 21.2486 12.7941C22.0723 12.6144 22.9126 12.5226 23.7554 12.5196V12.5196Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M17.4884 13.1008C17.6143 12.2531 17.579 11.3893 17.384 10.5548C17.5444 11.3256 17.5566 12.1198 17.4198 12.895C17.2207 12.3078 16.9762 11.737 16.6887 11.1879H16.7083L16.1892 9.18375L16.545 10.9037C16.1729 10.2405 15.7356 9.61633 15.2393 9.04004C15.9392 9.93821 16.4982 10.9374 16.8974 12.0037C16.2662 11.5293 15.7067 10.9665 15.2358 10.3325C15.7146 11.0582 16.305 11.7039 16.9853 12.2451C17.384 13.3758 17.5924 14.5647 17.602 15.7636H17.9904C17.9318 14.8594 17.763 13.9651 17.4884 13.1008V13.1008Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M26.9443 6.47119C26.4654 6.44723 25.9852 6.45921 25.5082 6.50697C25.8314 6.41043 26.1304 6.24701 26.3862 6.02721C26.0588 6.2841 25.669 6.44972 25.2569 6.50697V6.5299C24.9762 6.56568 24.6953 6.61139 24.4181 6.66688C24.0917 6.73874 23.7653 6.82695 23.4389 6.93137C23.7709 6.64994 24.0582 6.31989 24.2908 5.95215C24.001 6.3637 23.6394 6.71975 23.2234 7.00322C22.3624 7.29239 21.5445 7.6962 20.7917 8.20443L20.9974 8.47534C21.4345 8.14265 21.8996 7.84881 22.3877 7.59733C23.1476 7.5246 23.9125 7.5246 24.6724 7.59733C24.0008 7.49509 23.3217 7.44807 22.6423 7.45712C23.2816 7.15102 23.951 6.91253 24.6398 6.74546C25.1987 6.68645 25.7631 6.78124 26.2719 7.01958C25.898 6.81862 25.4872 6.69638 25.0642 6.6606C25.6835 6.53705 26.3129 6.47352 26.9443 6.47119V6.47119Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M21.4022 3.9222C21.4352 4.61722 21.3535 5.31326 21.1606 5.9817C21.1095 5.36043 21.0002 4.74515 20.8342 4.14419C20.9509 3.54585 20.962 2.93159 20.8668 2.32931C20.9427 2.87317 20.9185 3.42624 20.7949 3.96134C20.6284 3.3887 20.4099 2.83257 20.1421 2.2998C20.5608 3.26252 20.8219 4.28643 20.9157 5.3321C20.6328 4.81219 20.402 4.26555 20.2271 3.70007C20.3947 4.35551 20.6345 4.99051 20.942 5.59323C21.0106 6.58004 20.9237 7.57124 20.6842 8.53074L21.0106 8.60902C21.1553 7.85646 21.2111 7.08973 21.1771 6.32432C21.4026 5.54503 21.479 4.72997 21.4022 3.9222V3.9222Z",fill:"#5FA348"}}),t._v(" "),e("path",{attrs:{d:"M29.4675 2.09097C28.9322 2.05519 28.3936 2.04848 27.8583 2.06483C28.5931 1.74427 29.3588 1.49935 30.143 1.33374C29.2399 1.47934 28.3564 1.72689 27.509 2.07155C27.2381 2.1824 26.9673 2.30332 26.7061 2.43374C27.0361 2.11653 27.3002 1.73711 27.4829 1.31738C27.2236 1.8446 26.8309 2.29456 26.3439 2.62301C25.2201 3.22033 24.1979 3.99129 23.3149 4.90771L23.6413 5.17863C24.1737 4.56218 24.7698 4.00414 25.4202 3.51388C26.1201 3.35878 26.8346 3.2767 27.5515 3.26911C26.9057 3.24078 26.2584 3.27466 25.6192 3.37032C26.2619 2.90371 26.9498 2.50238 27.6723 2.17247C28.2686 2.11244 28.8681 2.08528 29.4675 2.09097V2.09097Z",fill:"#5FA348"}})])}),[],!1,null,null,null);e.default=component.exports},682:function(t,e,C){"use strict";C.r(e);var r={},l=C(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1123)"}},[e("path",{attrs:{d:"M16.1909 7.10936C25.2857 6.10918 28.2413 0.355753 28.2509 0.355753C28.4001 0.0689662 28.7536 -0.0424683 29.0404 0.106754C29.185 0.182009 29.2917 0.314267 29.3347 0.471529C32.3577 10.7241 30.7079 17.7929 27.2379 21.9866C25.8945 23.6212 24.1738 24.9048 22.2241 25.7268C20.4281 26.4885 18.4785 26.8189 16.5318 26.6916C12.8044 26.4311 9.40191 24.4404 7.82286 20.8738C7.41828 19.9621 7.15682 18.9935 7.0478 18.002C6.82726 16.0147 7.21527 14.0073 8.16054 12.2453C9.17535 10.3652 10.7911 8.87953 12.7498 8.02592C13.8426 7.5444 15.0035 7.23526 16.1909 7.10936Z",fill:"#45B549"}}),t._v(" "),e("path",{attrs:{d:"M28.1867 0.57094C28.1947 0.247813 28.4631 -0.00777862 28.7862 0.000180974C29.1093 0.00814057 29.3649 0.276516 29.357 0.599643C29.3564 0.623442 29.3543 0.647079 29.3508 0.670636C29.3508 0.69958 28.8395 7.42423 22.2756 14.2293L22.2145 14.2936C20.6725 15.8753 18.9804 17.3035 17.1622 18.558L21.105 19.2913C21.4193 19.3671 21.6126 19.6833 21.5368 19.9975C21.4681 20.282 21.2 20.472 20.9088 20.4426L15.7632 19.4778C11.0711 22.4494 3.11791 25.1926 2.42325 31.6664C2.38024 31.9868 2.08565 32.2117 1.76526 32.1687C1.4603 32.1278 1.23912 31.8577 1.25906 31.5507C2.08879 23.7905 9.97443 21.7933 15.2937 18.4004L15.3677 18.3522C17.4905 17.0087 19.4569 15.4328 21.2304 13.6536L20.7641 9.03867C20.7211 8.71827 20.946 8.42369 21.2664 8.38067C21.5868 8.33766 21.8814 8.56254 21.9244 8.88293C21.9261 8.8962 21.9275 8.90954 21.9283 8.92289L22.2821 12.5055C27.7526 6.36296 28.1835 0.596668 28.1867 0.57094Z",fill:"#009549"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2677:1123"}},[e("rect",{attrs:{width:"32.174",height:"32.174",fill:"white"}})])])])}),[],!1,null,null,null);e.default=component.exports},683:function(t,e,C){"use strict";C.r(e);var r={},l=C(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1163)"}},[e("path",{attrs:{d:"M12.9326 4.61144C10.122 1.8023 4.62203 1.47656 0.730428 1.47656C0.327039 1.47656 0 1.8036 0 2.20699C0 6.10003 0.325738 11.6 3.13488 14.4106C4.45378 15.5853 6.17779 16.2008 7.94241 16.1271C9.76187 16.1988 11.5422 15.5864 12.9326 14.4106C15.0259 12.3158 15.4101 7.08902 12.9326 4.61144Z",fill:"#4CAF50"}}),t._v(" "),e("path",{attrs:{d:"M31.4396 4.36621C27.5466 4.36621 22.0466 4.69195 19.236 7.50109C16.7526 9.98449 17.1426 15.204 19.236 17.2988C20.6268 18.4748 22.4076 19.0871 24.2276 19.0152C25.9921 19.0888 27.7161 18.4733 29.0351 17.2988C31.8457 14.4882 32.17 8.98824 32.17 5.09513C32.1692 4.69236 31.8425 4.36621 31.4396 4.36621Z",fill:"#4CAF50"}}),t._v(" "),e("path",{attrs:{d:"M15.3386 30.6934C14.9352 30.6934 14.6082 30.3664 14.6082 29.963C14.6082 14.4711 8.92712 10.5839 6.7885 9.12159C6.53055 8.9569 6.2863 8.77174 6.05807 8.56796C5.7778 8.27783 5.78588 7.81542 6.07601 7.53515C6.35909 7.26172 6.80781 7.26172 7.09088 7.53515C7.25584 7.67463 7.43059 7.80206 7.61383 7.91642C9.51286 9.21505 13.9859 12.2755 15.5329 22.3141C16.7284 17.0658 20.2723 12.6594 25.1421 10.3662C25.515 10.1908 25.9601 10.3313 26.1647 10.6891C26.3494 11.0147 26.2353 11.4283 25.9097 11.6131C25.8975 11.6201 25.8851 11.6266 25.8725 11.6328L25.7542 11.6883C17.746 15.4528 16.0646 23.7035 16.0646 29.9631C16.0647 30.3647 15.7403 30.691 15.3386 30.6934Z",fill:"#388E3C"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2677:1163"}},[e("rect",{attrs:{width:"32.17",height:"32.17",fill:"white"}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);