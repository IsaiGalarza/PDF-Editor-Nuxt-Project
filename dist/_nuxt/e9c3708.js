(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{751:function(t,e,r){var content=r(763);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4d131c3c",content,!0,{sourceMap:!1})},759:function(t,e,r){"use strict";r.r(e);r(416);var n=r(61),o={name:"filePagination",props:{setPage:{type:Function},totalFile:{}},data:function(){return{returnedDataPage:0,eachPageTotal:10}},components:{ArrowDownIcon:n.default},methods:{buttonFilePage:function(t){this.returnedDataPage=this.eachPageTotal*(t-1),this.$emit("setPage",this.returnedDataPage)}},watch:{returnedDataPage:function(){}},computed:{availablePages:function(){return Math.floor(this.totalFile/this.eachPageTotal)>5?Math.floor(this.totalFile/this.eachPageTotal):Math.floor(this.totalFile/this.eachPageTotal)+2},arrayPages:function(){for(var t=[],i=1;i<this.availablePages;i++)t.push(i);return t}}},l=(r(762),r(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.totalFile>t.eachPageTotal?e("div",{staticClass:"grid place-items-center py-5"},[e("div",[e("paginate",{attrs:{"page-count":t.arrayPages.length+1,"click-handler":t.buttonFilePage,"prev-text":"&#8249;","next-text":"&#8250;","container-class":"paginate","page-class":"page-item"}})],1)]):t._e()}),[],!1,null,"b8bb5c98",null);e.default=component.exports},762:function(t,e,r){"use strict";r(751)},763:function(t,e,r){var n=r(14)((function(i){return i[1]}));n.push([t.i,".page-item[data-v-b8bb5c98]{background:red!important}.pagination-arrow-left[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(90deg)}.pagination-arrow-right[data-v-b8bb5c98]{height:2.25rem;min-width:36px;border-radius:0.25rem;padding-left:0.75rem;padding-right:0.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;transform:rotate(-90deg)}",""]),n.locals={},t.exports=n}}]);