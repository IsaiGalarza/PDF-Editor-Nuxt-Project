(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1724:function(t,e,r){"use strict";r(417);var o=r(1893),n=r.n(o),h={props:{text:{type:String,required:!0},size:{type:Number,required:!1,default:256},color:{type:String,required:!1,default:"#000"},bgColor:{type:String,required:!1,default:"#FFF"},errorLevel:{type:String,validator:function(t){return"L"===t||"M"===t||"Q"===t||"H"===t},required:!1,default:"H"}},watch:{text:function(){this.clear(),this.makeCode(this.text)}},data:function(){return{qrCode:{}}},mounted:function(){this.qrCode=new n.a(this.$el,{text:this.text,width:this.size,height:this.size,colorDark:this.color,colorLight:this.bgColor,correctLevel:n.a.CorrectLevel[this.errorLevel]})},methods:{clear:function(){this.qrCode.clear()},makeCode:function(text){this.qrCode.makeCode(text)}}},l=r(1),component=Object(l.a)(h,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.a=component.exports},1893:function(t,e,r){(function(t){var e;!function(){function t(data){this.mode=o.MODE_8BIT_BYTE,this.data=data,this.parsedData=[];for(var i=0,t=this.data.length;i<t;i++){var e=[],code=this.data.charCodeAt(i);code>65536?(e[0]=240|(1835008&code)>>>18,e[1]=128|(258048&code)>>>12,e[2]=128|(4032&code)>>>6,e[3]=128|63&code):code>2048?(e[0]=224|(61440&code)>>>12,e[1]=128|(4032&code)>>>6,e[2]=128|63&code):code>128?(e[0]=192|(1984&code)>>>6,e[1]=128|63&code):e[0]=code,this.parsedData.push(e)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function r(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var i=0,e=this.parsedData.length;i<e;i++)t.put(this.parsedData[i],8)}},r.prototype={addData:function(data){var e=new t(data);this.dataList.push(e),this.dataCache=null},isDark:function(t,col){if(t<0||this.moduleCount<=t||col<0||this.moduleCount<=col)throw new Error(t+","+col);return this.modules[t][col]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[o][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,col){for(var e=-1;e<=7;e++)if(!(t+e<=-1||this.moduleCount<=t+e))for(var r=-1;r<=7;r++)col+r<=-1||this.moduleCount<=col+r||(this.modules[t+e][col+r]=0<=e&&e<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var e=C.getLostPoint(this);(0==i||t>e)&&(t=e,pattern=i)}return pattern},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var h=1*n,col=0;col<this.modules[n].length;col++){var l=1*col;this.modules[n][col]&&(o.beginFill(0,100),o.moveTo(l,h),o.lineTo(l+1,h),o.lineTo(l+1,h+1),o.lineTo(l,h+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=C.getPatternPosition(this.typeNumber),i=0;i<t.length;i++)for(var e=0;e<t.length;e++){var r=t[i],col=t[e];if(null==this.modules[r][col])for(var o=-2;o<=2;o++)for(var n=-2;n<=2;n++)this.modules[r+o][col+n]=-2==o||2==o||-2==n||2==n||0==o&&0==n}},setupTypeNumber:function(t){for(var e=C.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var r=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=r}for(i=0;i<18;i++){r=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=r}},setupTypeInfo:function(t,e){for(var data=this.errorCorrectLevel<<3|e,r=C.getBCHTypeInfo(data),i=0;i<15;i++){var o=!t&&1==(r>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(data,t){for(var e=-1,r=this.moduleCount-1,o=7,n=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var h=0;h<2;h++)if(null==this.modules[r][col-h]){var l=!1;n<data.length&&(l=1==(data[n]>>>o&1)),C.getMask(t,r,col-h)&&(l=!l),this.modules[r][col-h]=l,-1==--o&&(n++,o=7)}if((r+=e)<0||this.moduleCount<=r){r-=e,e=-e;break}}}},r.PAD0=236,r.PAD1=17,r.createData=function(t,e,o){for(var n=y.getRSBlocks(t,e),h=new L,i=0;i<o.length;i++){var data=o[i];h.put(data.mode,4),h.put(data.getLength(),C.getLengthInBits(data.mode,t)),data.write(h)}var l=0;for(i=0;i<n.length;i++)l+=n[i].dataCount;if(h.getLengthInBits()>8*l)throw new Error("code length overflow. ("+h.getLengthInBits()+">"+8*l+")");for(h.getLengthInBits()+4<=8*l&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(!1);for(;!(h.getLengthInBits()>=8*l||(h.put(r.PAD0,8),h.getLengthInBits()>=8*l));)h.put(r.PAD1,8);return r.createBytes(h,n)},r.createBytes=function(t,e){for(var r=0,o=0,n=0,h=new Array(e.length),l=new Array(e.length),f=0;f<e.length;f++){var d=e[f].dataCount,c=e[f].totalCount-d;o=Math.max(o,d),n=Math.max(n,c),h[f]=new Array(d);for(var i=0;i<h[f].length;i++)h[f][i]=255&t.buffer[i+r];r+=d;var m=C.getErrorCorrectPolynomial(c),_=new D(h[f],m.getLength()-1).mod(m);l[f]=new Array(m.getLength()-1);for(i=0;i<l[f].length;i++){var v=i+_.getLength()-l[f].length;l[f][i]=v>=0?_.get(v):0}}var w=0;for(i=0;i<e.length;i++)w+=e[i].totalCount;var data=new Array(w),y=0;for(i=0;i<o;i++)for(f=0;f<e.length;f++)i<h[f].length&&(data[y++]=h[f][i]);for(i=0;i<n;i++)for(f=0;f<e.length;f++)i<l[f].length&&(data[y++]=l[f][i]);return data};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},h=0,l=1,f=2,d=3,c=4,m=5,_=6,v=7,C={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var t=data<<10;C.getBCHDigit(t)-C.getBCHDigit(C.G15)>=0;)t^=C.G15<<C.getBCHDigit(t)-C.getBCHDigit(C.G15);return(data<<10|t)^C.G15_MASK},getBCHTypeNumber:function(data){for(var t=data<<12;C.getBCHDigit(t)-C.getBCHDigit(C.G18)>=0;)t^=C.G18<<C.getBCHDigit(t)-C.getBCHDigit(C.G18);return data<<12|t},getBCHDigit:function(data){for(var t=0;0!=data;)t++,data>>>=1;return t},getPatternPosition:function(t){return C.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,i,e){switch(t){case h:return(i+e)%2==0;case l:return i%2==0;case f:return e%3==0;case d:return(i+e)%3==0;case c:return(Math.floor(i/2)+Math.floor(e/3))%2==0;case m:return i*e%2+i*e%3==0;case _:return(i*e%2+i*e%3)%2==0;case v:return(i*e%3+(i+e)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var a=new D([1],0),i=0;i<t;i++)a=a.multiply(new D([1,w.gexp(i)],0));return a},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var col=0;col<e;col++){for(var n=0,h=t.isDark(o,col),l=-1;l<=1;l++)if(!(o+l<0||e<=o+l))for(var f=-1;f<=1;f++)col+f<0||e<=col+f||0==l&&0==f||h==t.isDark(o+l,col+f)&&n++;n>5&&(r+=3+n-5)}for(o=0;o<e-1;o++)for(col=0;col<e-1;col++){var d=0;t.isDark(o,col)&&d++,t.isDark(o+1,col)&&d++,t.isDark(o,col+1)&&d++,t.isDark(o+1,col+1)&&d++,0!=d&&4!=d||(r+=3)}for(o=0;o<e;o++)for(col=0;col<e-6;col++)t.isDark(o,col)&&!t.isDark(o,col+1)&&t.isDark(o,col+2)&&t.isDark(o,col+3)&&t.isDark(o,col+4)&&!t.isDark(o,col+5)&&t.isDark(o,col+6)&&(r+=40);for(col=0;col<e;col++)for(o=0;o<e-6;o++)t.isDark(o,col)&&!t.isDark(o+1,col)&&t.isDark(o+2,col)&&t.isDark(o+3,col)&&t.isDark(o+4,col)&&!t.isDark(o+5,col)&&t.isDark(o+6,col)&&(r+=40);var c=0;for(col=0;col<e;col++)for(o=0;o<e;o++)t.isDark(o,col)&&c++;return r+=10*(Math.abs(100*c/e/e-50)/5)}},w={glog:function(t){if(t<1)throw new Error("glog("+t+")");return w.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return w.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)w.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)w.EXP_TABLE[i]=w.EXP_TABLE[i-4]^w.EXP_TABLE[i-5]^w.EXP_TABLE[i-6]^w.EXP_TABLE[i-8];for(i=0;i<255;i++)w.LOG_TABLE[w.EXP_TABLE[i]]=i;function D(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function y(t,e){this.totalCount=t,this.dataCount=e}function L(){this.buffer=[],this.length=0}D.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var r=0;r<t.getLength();r++)e[i+r]^=w.gexp(w.glog(this.get(i))+w.glog(t.get(r)));return new D(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=w.glog(this.get(0))-w.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=w.gexp(w.glog(t.get(i))+e);return new D(r,0).mod(t)}},y.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],y.getRSBlocks=function(t,e){var r=y.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var h=r[3*i+0],l=r[3*i+1],f=r[3*i+2],d=0;d<h;d++)n.push(new y(l,f));return n},y.getRsBlockTable=function(t,e){switch(e){case n.L:return y.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return y.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return y.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return y.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},L.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var A=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function E(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var B=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,o=t.getModuleCount();Math.floor(e.width/o),Math.floor(e.height/o);function n(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);return r}this.clear();var svg=n("svg",{viewBox:"0 0 "+String(o)+" "+String(o),width:"100%",height:"100%",fill:e.colorLight});svg.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(svg),svg.appendChild(n("rect",{fill:e.colorLight,width:"100%",height:"100%"})),svg.appendChild(n("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var h=0;h<o;h++)for(var col=0;col<o;col++)if(t.isDark(h,col)){var l=n("use",{x:String(h),y:String(col)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),svg.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),k="svg"===document.documentElement.tagName.toLowerCase()?B:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,o=t.getModuleCount(),n=Math.floor(e.width/o),h=Math.floor(e.height/o),l=['<table style="border:0;border-collapse:collapse;">'],f=0;f<o;f++){l.push("<tr>");for(var col=0;col<o;col++)l.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+h+"px;background-color:"+(t.isDark(f,col)?e.colorDark:e.colorLight)+';"></td>');l.push("</tr>")}l.push("</table>"),r.innerHTML=l.join("");var d=r.childNodes[0],c=(e.width-d.offsetWidth)/2,m=(e.height-d.offsetHeight)/2;c>0&&m>0&&(d.style.margin=m+"px "+c+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.setProperty("display","block","important"),this._elCanvas.style.setProperty("display","none","important")}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(image,t,o,n,h,l,f,d,c){if("nodeName"in image&&/img/i.test(image.nodeName))for(var i=arguments.length-1;i>=1;i--)arguments[i]=arguments[i]*e;else void 0===d&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function o(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var o=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return o.onabort=n,o.onerror=n,o.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var n=function(t,e){this._bIsPainted=!1,this._android=E(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.setProperty("display","none","important"),this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,r=this._oContext,o=this._htOption,n=t.getModuleCount(),h=o.width/n,l=o.height/n,f=Math.round(h),d=Math.round(l);e.style.setProperty("display","none","important"),this.clear();for(var c=0;c<n;c++)for(var col=0;col<n;col++){var m=t.isDark(c,col),_=col*h,v=c*l;r.strokeStyle=m?o.colorDark:o.colorLight,r.lineWidth=1,r.fillStyle=m?o.colorDark:o.colorLight,r.fillRect(_,v,h,l),r.strokeRect(Math.floor(_)+.5,Math.floor(v)+.5,f,d),r.strokeRect(Math.ceil(_)-.5,Math.ceil(v)-.5,f,d)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&o.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}();function M(t,e){for(var r=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),i=0,h=A.length;i<=h;i++){var l=0;switch(e){case n.L:l=A[i][0];break;case n.M:l=A[i][1];break;case n.Q:l=A[i][2];break;case n.H:l=A[i][3]}if(o<=l)break;r++}if(r>A.length)throw new Error("Too long data");return r}e=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.H},"string"==typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(k=B),this._android=E(),this._el=t,this._oQRCode=null,this._oDrawing=new k(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},e.prototype.makeCode=function(t){this._oQRCode=new r(M(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},e.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},e.prototype.clear=function(){this._oDrawing.clear()},e.CorrectLevel=n}(),t&&t.exports&&(t.exports=e)}).call(this,r(425)(t))}}]);