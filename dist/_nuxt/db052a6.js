/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{710:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,p){return t=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},t(e,p)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,l){return r=n()?Reflect.construct:function(e,n,r){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function o(e){return l(e)||c(e)||m(e)||d()}function l(e){if(Array.isArray(e))return f(e)}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h=Object.hasOwnProperty,y=Object.setPrototypeOf,v=Object.isFrozen,T=Object.getPrototypeOf,N=Object.getOwnPropertyDescriptor,A=Object.freeze,E=Object.seal,w=Object.create,S="undefined"!=typeof Reflect&&Reflect,x=S.apply,k=S.construct;x||(x=function(e,t,n){return e.apply(t,n)}),A||(A=function(e){return e}),E||(E=function(e){return e}),k||(k=function(e,t){return r(e,o(t))});var _=z(Array.prototype.forEach),O=z(Array.prototype.pop),D=z(Array.prototype.push),L=z(String.prototype.toLowerCase),R=z(String.prototype.toString),C=z(String.prototype.match),M=z(String.prototype.replace),I=z(String.prototype.indexOf),F=z(String.prototype.trim),U=z(RegExp.prototype.test),H=P(TypeError);function z(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return x(e,t,r)}}function P(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return k(e,n)}}function B(e,t,n){n=n||L,y&&y(e,null);for(var r=t.length;r--;){var element=t[r];if("string"==typeof element){var o=n(element);o!==element&&(v(t)||(t[r]=o),element=o)}e[element]=!0}return e}function j(object){var e,t=w(null);for(e in object)x(h,object,[e])&&(t[e]=object[e]);return t}function G(object,e){for(;null!==object;){var desc=N(object,e);if(desc){if(desc.get)return z(desc.get);if("function"==typeof desc.value)return z(desc.value)}object=T(object)}function t(element){return console.warn("fallback value for",element),null}return t}var W=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Y=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),$=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),K=A(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),V=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),J=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=A(["#text"]),html=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),svg=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),X=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Z=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Q=E(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ee=E(/<%[\w\W]*|[\w\W]*%>/gm),te=E(/\${[\w\W]*}/gm),ne=E(/^data-[\-\w.\u00B7-\uFFFF]/),re=E(/^aria-[\-\w]+$/),oe=E(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ae=E(/^(?:\w+script|data):/i),ie=E(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),le=E(/^html$/i),ce=function(){return"undefined"==typeof window?null:window},ue=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var l="dompurify"+(r?"#"+r:"");try{return t.createPolicy(l,{createHTML:function(html){return html},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+l+" could not be created."),null}};function se(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),n=function(e){return se(e)};if(n.version="2.4.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,l=t.document,c=t.DocumentFragment,m=t.HTMLTemplateElement,f=t.Node,d=t.Element,h=t.NodeFilter,y=t.NamedNodeMap,v=void 0===y?t.NamedNodeMap||t.MozNamedAttrMap:y,T=t.HTMLFormElement,N=t.DOMParser,E=t.trustedTypes,w=d.prototype,S=G(w,"cloneNode"),x=G(w,"nextSibling"),k=G(w,"childNodes"),z=G(w,"parentNode");if("function"==typeof m){var template=l.createElement("template");template.content&&template.content.ownerDocument&&(l=template.content.ownerDocument)}var P=ue(E,r),me=P?P.createHTML(""):"",fe=l,pe=fe.implementation,de=fe.createNodeIterator,he=fe.createDocumentFragment,ge=fe.getElementsByTagName,ye=r.importNode,be={};try{be=j(l).documentMode?l.documentMode:{}}catch(e){}var ve={};n.isSupported="function"==typeof z&&pe&&void 0!==pe.createHTMLDocument&&9!==be;var Te,Ne,Ae=Q,Ee=ee,we=te,Se=ne,xe=re,ke=ae,_e=ie,Oe=oe,De=null,Le=B({},[].concat(o(W),o(Y),o($),o(V),o(text))),Re=null,Ce=B({},[].concat(o(html),o(svg),o(X),o(Z))),Me=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Fe=null,Ue=!0,He=!0,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!1,We=!1,qe=!1,Ye=!1,$e=!0,Ke=!1,Ve="user-content-",Je=!0,Xe=!1,Ze={},Qe=null,et=B({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=B({},["audio","video","img","source","image","track"]),ot=null,at=B({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",lt="http://www.w3.org/2000/svg",ct="http://www.w3.org/1999/xhtml",ut=ct,st=!1,mt=null,ft=B({},[it,lt,ct],R),pt=["application/xhtml+xml","text/html"],ht="text/html",gt=null,yt=l.createElement("form"),bt=function(e){return e instanceof RegExp||e instanceof Function},vt=function(t){gt&&gt===t||(t&&"object"===e(t)||(t={}),t=j(t),Te=Te=-1===pt.indexOf(t.PARSER_MEDIA_TYPE)?ht:t.PARSER_MEDIA_TYPE,Ne="application/xhtml+xml"===Te?R:L,De="ALLOWED_TAGS"in t?B({},t.ALLOWED_TAGS,Ne):Le,Re="ALLOWED_ATTR"in t?B({},t.ALLOWED_ATTR,Ne):Ce,mt="ALLOWED_NAMESPACES"in t?B({},t.ALLOWED_NAMESPACES,R):ft,ot="ADD_URI_SAFE_ATTR"in t?B(j(at),t.ADD_URI_SAFE_ATTR,Ne):at,tt="ADD_DATA_URI_TAGS"in t?B(j(nt),t.ADD_DATA_URI_TAGS,Ne):nt,Qe="FORBID_CONTENTS"in t?B({},t.FORBID_CONTENTS,Ne):et,Ie="FORBID_TAGS"in t?B({},t.FORBID_TAGS,Ne):{},Fe="FORBID_ATTR"in t?B({},t.FORBID_ATTR,Ne):{},Ze="USE_PROFILES"in t&&t.USE_PROFILES,Ue=!1!==t.ALLOW_ARIA_ATTR,He=!1!==t.ALLOW_DATA_ATTR,ze=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=t.SAFE_FOR_TEMPLATES||!1,Be=t.WHOLE_DOCUMENT||!1,We=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,Ye=t.RETURN_TRUSTED_TYPE||!1,Ge=t.FORCE_BODY||!1,$e=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Je=!1!==t.KEEP_CONTENT,Xe=t.IN_PLACE||!1,Oe=t.ALLOWED_URI_REGEXP||Oe,ut=t.NAMESPACE||ct,t.CUSTOM_ELEMENT_HANDLING&&bt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Me.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&bt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Me.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Me.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(He=!1),qe&&(We=!0),Ze&&(De=B({},o(text)),Re=[],!0===Ze.html&&(B(De,W),B(Re,html)),!0===Ze.svg&&(B(De,Y),B(Re,svg),B(Re,Z)),!0===Ze.svgFilters&&(B(De,$),B(Re,svg),B(Re,Z)),!0===Ze.mathMl&&(B(De,V),B(Re,X),B(Re,Z))),t.ADD_TAGS&&(De===Le&&(De=j(De)),B(De,t.ADD_TAGS,Ne)),t.ADD_ATTR&&(Re===Ce&&(Re=j(Re)),B(Re,t.ADD_ATTR,Ne)),t.ADD_URI_SAFE_ATTR&&B(ot,t.ADD_URI_SAFE_ATTR,Ne),t.FORBID_CONTENTS&&(Qe===et&&(Qe=j(Qe)),B(Qe,t.FORBID_CONTENTS,Ne)),Je&&(De["#text"]=!0),Be&&B(De,["html","head","body"]),De.table&&(B(De,["tbody"]),delete Ie.tbody),A&&A(t),gt=t)},Tt=B({},["mi","mo","mn","ms","mtext"]),Nt=B({},["foreignobject","desc","title","annotation-xml"]),At=B({},["title","style","font","a","script"]),Et=B({},Y);B(Et,$),B(Et,K);var wt=B({},V);B(wt,J);var St=function(element){var e=z(element);e&&e.tagName||(e={namespaceURI:ut,tagName:"template"});var t=L(element.tagName),n=L(e.tagName);return!!mt[element.namespaceURI]&&(element.namespaceURI===lt?e.namespaceURI===ct?"svg"===t:e.namespaceURI===it?"svg"===t&&("annotation-xml"===n||Tt[n]):Boolean(Et[t]):element.namespaceURI===it?e.namespaceURI===ct?"math"===t:e.namespaceURI===lt?"math"===t&&Nt[n]:Boolean(wt[t]):element.namespaceURI===ct?!(e.namespaceURI===lt&&!Nt[n])&&!(e.namespaceURI===it&&!Tt[n])&&!wt[t]&&(At[t]||!Et[t]):!("application/xhtml+xml"!==Te||!mt[element.namespaceURI]))},xt=function(e){D(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=me}catch(t){e.remove()}}},kt=function(e,t){try{D(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){D(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Re[e])if(We||qe)try{xt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},_t=function(e){var t,n;if(Ge)e="<remove></remove>"+e;else{var r=C(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Te&&ut===ct&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=P?P.createHTML(e):e;if(ut===ct)try{t=(new N).parseFromString(o,Te)}catch(e){}if(!t||!t.documentElement){t=pe.createDocument(ut,"template",null);try{t.documentElement.innerHTML=st?"":o}catch(e){}}var body=t.body||t.documentElement;return e&&n&&body.insertBefore(l.createTextNode(n),body.childNodes[0]||null),ut===ct?ge.call(t,Be?"html":"body")[0]:Be?t.documentElement:body},Ot=function(e){return de.call(e.ownerDocument||e,e,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null,!1)},Dt=function(e){return e instanceof T&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof v)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Lt=function(object){return"object"===e(f)?object instanceof f:object&&"object"===e(object)&&"number"==typeof object.nodeType&&"string"==typeof object.nodeName},Rt=function(e,t,data){ve[e]&&_(ve[e],(function(e){e.call(n,t,data,gt)}))},Ct=function(e){var content;if(Rt("beforeSanitizeElements",e,null),Dt(e))return xt(e),!0;if(U(/[\u0080-\uFFFF]/,e.nodeName))return xt(e),!0;var t=Ne(e.nodeName);if(Rt("uponSanitizeElement",e,{tagName:t,allowedTags:De}),e.hasChildNodes()&&!Lt(e.firstElementChild)&&(!Lt(e.content)||!Lt(e.content.firstElementChild))&&U(/<[/\w]/g,e.innerHTML)&&U(/<[/\w]/g,e.textContent))return xt(e),!0;if("select"===t&&U(/<template/i,e.innerHTML))return xt(e),!0;if(!De[t]||Ie[t]){if(!Ie[t]&&It(t)){if(Me.tagNameCheck instanceof RegExp&&U(Me.tagNameCheck,t))return!1;if(Me.tagNameCheck instanceof Function&&Me.tagNameCheck(t))return!1}if(Je&&!Qe[t]){var r=z(e)||e.parentNode,o=k(e)||e.childNodes;if(o&&r)for(var i=o.length-1;i>=0;--i)r.insertBefore(S(o[i],!0),x(e))}return xt(e),!0}return e instanceof d&&!St(e)?(xt(e),!0):"noscript"!==t&&"noembed"!==t||!U(/<\/no(script|embed)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(content=e.textContent,content=M(content,Ae," "),content=M(content,Ee," "),content=M(content,we," "),e.textContent!==content&&(D(n.removed,{element:e.cloneNode()}),e.textContent=content)),Rt("afterSanitizeElements",e,null),!1):(xt(e),!0)},Mt=function(e,t,n){if($e&&("id"===t||"name"===t)&&(n in l||n in yt))return!1;if(He&&!Fe[t]&&U(Se,t));else if(Ue&&U(xe,t));else if(!Re[t]||Fe[t]){if(!(It(e)&&(Me.tagNameCheck instanceof RegExp&&U(Me.tagNameCheck,e)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(e))&&(Me.attributeNameCheck instanceof RegExp&&U(Me.attributeNameCheck,t)||Me.attributeNameCheck instanceof Function&&Me.attributeNameCheck(t))||"is"===t&&Me.allowCustomizedBuiltInElements&&(Me.tagNameCheck instanceof RegExp&&U(Me.tagNameCheck,n)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(n))))return!1}else if(ot[t]);else if(U(Oe,M(n,_e,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==I(n,"data:")||!tt[e])if(ze&&!U(ke,M(n,_e,"")));else if(n)return!1;return!0},It=function(e){return e.indexOf("-")>0},Ft=function(t){var r,o,l,c;Rt("beforeSanitizeAttributes",t,null);var m=t.attributes;if(m){var f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Re};for(c=m.length;c--;){var d=r=m[c],h=d.name,y=d.namespaceURI;if(o="value"===h?r.value:F(r.value),l=Ne(h),f.attrName=l,f.attrValue=o,f.keepAttr=!0,f.forceKeepAttr=void 0,Rt("uponSanitizeAttribute",t,f),o=f.attrValue,!f.forceKeepAttr&&(kt(h,t),f.keepAttr))if(U(/\/>/i,o))kt(h,t);else{Pe&&(o=M(o,Ae," "),o=M(o,Ee," "),o=M(o,we," "));var v=Ne(t.nodeName);if(Mt(v,l,o)){if(!Ke||"id"!==l&&"name"!==l||(kt(h,t),o=Ve+o),P&&"object"===e(E)&&"function"==typeof E.getAttributeType)if(y);else switch(E.getAttributeType(v,l)){case"TrustedHTML":o=P.createHTML(o);break;case"TrustedScriptURL":o=P.createScriptURL(o)}try{y?t.setAttributeNS(y,h,o):t.setAttribute(h,o),O(n.removed)}catch(e){}}}}Rt("afterSanitizeAttributes",t,null)}},Ut=function e(t){var n,r=Ot(t);for(Rt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Rt("uponSanitizeShadowNode",n,null),Ct(n)||(n.content instanceof c&&e(n.content),Ft(n));Rt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var body,l,m,d,h,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((st=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!Lt(o)){if("function"!=typeof o.toString)throw H("toString is not a function");if("string"!=typeof(o=o.toString()))throw H("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(Lt(o))return t.toStaticHTML(o.outerHTML)}return o}if(je||vt(y),n.removed=[],"string"==typeof o&&(Xe=!1),Xe){if(o.nodeName){var v=Ne(o.nodeName);if(!De[v]||Ie[v])throw H("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof f)1===(l=(body=_t("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?body=l:body.appendChild(l);else{if(!We&&!Pe&&!Be&&-1===o.indexOf("<"))return P&&Ye?P.createHTML(o):o;if(!(body=_t(o)))return We?null:Ye?me:""}body&&Ge&&xt(body.firstChild);for(var T=Ot(Xe?o:body);m=T.nextNode();)3===m.nodeType&&m===d||Ct(m)||(m.content instanceof c&&Ut(m.content),Ft(m),d=m);if(d=null,Xe)return o;if(We){if(qe)for(h=he.call(body.ownerDocument);body.firstChild;)h.appendChild(body.firstChild);else h=body;return Re.shadowroot&&(h=ye.call(r,h,!0)),h}var N=Be?body.outerHTML:body.innerHTML;return Be&&De["!doctype"]&&body.ownerDocument&&body.ownerDocument.doctype&&body.ownerDocument.doctype.name&&U(le,body.ownerDocument.doctype.name)&&(N="<!DOCTYPE "+body.ownerDocument.doctype.name+">\n"+N),Pe&&(N=M(N,Ae," "),N=M(N,Ee," "),N=M(N,we," ")),P&&Ye?P.createHTML(N):N},n.setConfig=function(e){vt(e),je=!0},n.clearConfig=function(){gt=null,je=!1},n.isValidAttribute=function(e,t,n){gt||vt({});var r=Ne(e),o=Ne(t);return Mt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ve[e]=ve[e]||[],D(ve[e],t))},n.removeHook=function(e){if(ve[e])return O(ve[e])},n.removeHooks=function(e){ve[e]&&(ve[e]=[])},n.removeAllHooks=function(){ve={}},n}return se()}()}}]);