(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1902:function(n,e,t){"use strict";t.r(e);var r=t(3),o=(t(18),t(43)),c=t(735),f=t.n(c),d={name:"permission",created:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.$route.query.permission,r=f.a.verify(t,"+Erqnl5F0JnIsW++d9U0BfwpJ6w="),n.$axios.post("/permissions",{fileId:r.data.fileId,userId:r.data.userId,fileOwnerId:r.data.userId,isGranted:!0}).then((function(e){n.$notify.success({message:"permisssion Granted"}),n.$router.push("/dashboard")})).catch((function(){n.$notify.error({message:"failed to grant permisssion"})}));case 3:case"end":return e.stop()}}),e)})))()},components:{SpinnerDottedIcon:o.default}},l=t(1),component=Object(l.a)(d,(function(){var n=this._self._c;return n("div",{staticClass:"w-[100vw] h-[100vh] flex justify-center items-center"},[n("SpinnerDottedIcon",{staticClass:"animate-spin"})],1)}),[],!1,null,"414b36f2",null);e.default=component.exports},739:function(n,e){},740:function(n,e){},741:function(n,e){},742:function(n,e){},743:function(n,e){},744:function(n,e){},745:function(n,e){},746:function(n,e){},747:function(n,e){},748:function(n,e){}}]);