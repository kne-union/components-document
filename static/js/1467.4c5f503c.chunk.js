(self.webpackChunk_kne_components_components_document=self.webpackChunk_kne_components_components_document||[]).push([[1467,3848],{5024:e=>{e.exports=function(e,t){var r=e.endsWith("/");return r&&!t?e.substr(0,e.length-1):!r&&t?e+"/":e}},31467:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createWithRemoteLoader:()=>S,default:()=>R,getOrLoadRemote:()=>_,getPublicPath:()=>A,loadComponent:()=>h,loadModule:()=>j,parseToken:()=>g,preset:()=>b,useLoader:()=>x,withRemoteLoader:()=>L});var o=r(5024),n=r.n(o),a=r(22555),u=r.n(a),s=r(33097),l=r.n(s),i=r(73884),c=r.n(i);var p=r(19853),f=r.n(p),m=r(34677),d=r.n(m);const v={remotes:{},remoteEntryFileName:"remoteEntry.js",error:null,fallback:null},b=e=>Object.assign(v,e),g=e=>{const{url:t,remote:r,version:o}=(e=>{const t=(e=>{const t=e.match(/^(.*):.+/);return t&&t[1]?n()(t[1]):null})(e);if(!t)return{url:null,remote:null,version:null};const{addressList:r,origin:o}=(()=>{if(/^https?:\/\//.test(t)){const e=window.document.createElement("a");return e.href=t,{addressList:e.pathname.split("/").filter((e=>!!e)),origin:e.origin}}return{addressList:t.split("/").filter((e=>!!e)),origin:null}})();return 1===r.length?{url:/^https?:\/\//.test(t)?o:null,remote:r[0],version:null}:2===r.length&&/^https?:\/\//.test(t)?{url:o,remote:r[0],version:r[1]}:{url:/^https?:\/\//.test(t)?o:null,remote:r[r.length-2],version:r[r.length-1]}})(e),a=(e=>{const t=e.replace(/^.*:/,""),[r,o]=t.split("@").map((e=>{const[t,r]=e.split(".");return{name:t,propName:r}})),n={moduleName:r.name,modulePropName:r.propName};return o&&Object.assign(n,{subModuleName:o.name,subModulePropName:o.propName}),n})(e);return{url:t,remote:r,version:o,module:a}},_=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return new Promise(((n,a)=>{if(window[e])n();else{const l=document.querySelector('[data-webpack="'.concat(e,'"]')),i=async o=>{o.setAttribute("data-status","success"),window[e].__initialized||(t&&r.S[t]&&await window[e].init(r.S[t]),window[e].__initialized=!0),n()},c=(e,t)=>{t.parentNode.removeChild(t),a(e.message)};if(l){if("success"===l.getAttribute("data-status"))return void i(l);l.addEventListener("load",(()=>{i(l)})),l.addEventListener("error",(e=>{c(e,l)}))}else if(o){var u=document,s=u.createElement("script");s.type="text/javascript",s.setAttribute("data-webpack","".concat(e)),s.async=!0,s.addEventListener("error",(e=>{c(e,s)})),s.addEventListener("load",(()=>{i(s)})),s.src=o,u.getElementsByTagName("head")[0].appendChild(s)}else a("Cannot Find Remote ".concat(e," to inject"))}}))},h=(e,t,r,o)=>async()=>{await _(e,t,o);const n=window[e];return(await n.get(r))()},y=e=>{let{url:t,remote:r,version:o,tpl:a}=e;const s=u()(a||"{{url}}/{{remote}}/{{version}}",{interpolate:/{{([\s\S]+?)}}/g});return n()(s({url:n()(t||""),remote:r||"",version:o||""}))},j=e=>{const t=v.remotes,r=v.remoteEntryFileName,o=g(e),{url:a,remote:u}=((e,t)=>{const r=e=>y(Object.assign({},e,{tpl:l()(t,"[".concat(e.remote||"default","].tpl"))}));return e.url&&e.remote&&e.version?{url:r({url:e.url,remote:e.remote,version:e.version}),remote:e.remote+"_"+e.version}:e.url&&e.remote?{url:r({url:e.url,remote:e.remote}),remote:e.remote}:e.remote&&t[e.remote]&&e.version?{url:r({url:t[e.remote].url,remote:t[e.remote].remote,version:e.version}),remote:t[e.remote].remote+"_"+e.version}:e.remote&&t[e.remote]&&t[e.remote].defaultVersion?{url:r({url:t[e.remote].url,remote:t[e.remote].remote,version:t[e.remote].defaultVersion}),remote:t[e.remote].remote+"_"+t[e.remote].defaultVersion}:e.remote&&t[e.remote]?{url:r({url:t[e.remote].url,remote:t[e.remote].remote}),remote:t[e.remote].remote}:t.default.defaultVersion?{url:r({url:t.default.url,remote:t.default.remote,version:t.default.defaultVersion}),remote:t.default.remote+"_"+t.default.defaultVersion}:{url:r({url:t.default.url,remote:t.default.remote}),remote:t.default.remote}})(o,t);return h((e=>e.replace(/[-/.@]/g,"_"))(u),"default","./"+o.module.moduleName,n()(a)+"/"+r)().then((e=>{const t=((e,t)=>e.subModuleName&&e.subModulePropName?t[e.subModuleName][e.subModulePropName]:e.subModuleName?t[e.subModuleName]:!e.subModuleName&&e.modulePropName?t.default[e.modulePropName]:t.default)(o.module,e);return{default:t}}))},w=new Map,x=e=>{let{modules:t,onLoadComplete:r}=e;const[o,n]=(0,i.useState)(!t.every((e=>w.has(e)))),[a,u]=(0,i.useState)(!1),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=(0,i.useRef)(e);return t||(r.current=e),(0,i.useCallback)((function(){return r.current&&r.current(...arguments)}),[])}(r),[l,c]=(0,i.useState)((()=>o?[]:t.map((e=>w.get(e))))),p=(0,i.useRef)(l);return p.current=l,(0,i.useEffect)((()=>{Promise.all(t.map((async e=>{if(w.has(e))return w.get(e);const{default:t}=await j(e);return w.set(e,t),t}))).then((e=>(s&&s(e),f()(p.current,e)||c(e),n(!1),e)),(e=>{console.error(e),u(!0)}))}),[t]),{loading:o,error:a,remoteModules:l}};function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}const N=["modules","remoteError","onLoadComplete","fallback"],L=e=>(0,i.forwardRef)(((t,r)=>{let{modules:o,remoteError:n,onLoadComplete:a,fallback:u}=t,s=E(t,N);const{loading:l,error:i,remoteModules:p}=x({modules:o,onLoadComplete:a});return l?u||v.fallback:i?n||v.error:c().createElement(e,O({},s,{ref:r,remoteModules:p}))})),S=e=>t=>{const r=L(t);return(0,i.forwardRef)(((t,o)=>c().createElement(r,O({},d()({},e,t),{ref:o}))))},k=["remoteModules"],M=["module"],P=L((0,i.forwardRef)(((e,t)=>{let{remoteModules:r}=e,o=E(e,k);const[n]=r;return c().createElement(n,O({},o,{ref:t}))}))),R=(0,i.forwardRef)(((e,t)=>{let{module:r}=e,o=E(e,M);const n=(0,i.useMemo)((()=>[r]),[r]);return c().createElement(P,O({},o,{modules:n,ref:t}))})),A=(e,t)=>{const{remotes:r,version:o}=Object.assign({},{remotes:v.remotes},t),n=e&&r[e]||r.default,a=o||n.defaultVersion;return y({url:n.url,remote:n.remote,version:a,tpl:n.tpl})}},18902:(e,t,r)=>{var o=r(64816),n=r(86179),a=r(46704);function u(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new o;++t<r;)this.add(e[t])}u.prototype.add=u.prototype.push=n,u.prototype.has=a,e.exports=u},9812:(e,t,r)=>{var o=r(56552).Symbol;e.exports=o},50149:e=>{e.exports=function(e,t){for(var r=-1,o=null==e?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}},52587:e=>{e.exports=function(e,t){for(var r=-1,o=null==e?0:e.length;++r<o;)if(t(e[r],r,e))return!0;return!1}},16913:(e,t,r)=>{var o=r(9812),n=r(34552),a=r(16095),u=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?n(e):a(e)}},26989:(e,t,r)=>{var o=r(16399),n=r(22761);e.exports=function e(t,r,a,u,s){return t===r||(null==t||null==r||!n(t)&&!n(r)?t!==t&&r!==r:o(t,r,a,u,e,s))}},16399:(e,t,r)=>{var o=r(5538),n=r(43668),a=r(69987),u=r(45752),s=r(26924),l=r(54052),i=r(44543),c=r(51268),p="[object Arguments]",f="[object Array]",m="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,v,b,g){var _=l(e),h=l(t),y=_?f:s(e),j=h?f:s(t),w=(y=y==p?m:y)==m,x=(j=j==p?m:j)==m,O=y==j;if(O&&i(e)){if(!i(t))return!1;_=!0,w=!1}if(O&&!w)return g||(g=new o),_||c(e)?n(e,t,r,v,b,g):a(e,t,y,r,v,b,g);if(!(1&r)){var E=w&&d.call(e,"__wrapped__"),N=x&&d.call(t,"__wrapped__");if(E||N){var L=E?e.value():e,S=N?t.value():t;return g||(g=new o),b(L,S,r,v,g)}}return!!O&&(g||(g=new o),u(e,t,r,v,b,g))}},72037:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},38541:(e,t,r)=>{var o=r(9812),n=r(50149),a=r(54052),u=r(19841),s=o?o.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return n(t,e)+"";if(u(t))return l?l.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},86983:(e,t,r)=>{var o=r(50149);e.exports=function(e,t){return o(t,(function(t){return e[t]}))}},58114:e=>{e.exports=function(e,t){return e.has(t)}},91499:(e,t,r)=>{var o=r(93211),n=Object.prototype,a=n.hasOwnProperty;e.exports=function(e,t,r,u){return void 0===e||o(e,n[r])&&!a.call(u,r)?t:e}},43668:(e,t,r)=>{var o=r(18902),n=r(52587),a=r(58114);e.exports=function(e,t,r,u,s,l){var i=1&r,c=e.length,p=t.length;if(c!=p&&!(i&&p>c))return!1;var f=l.get(e),m=l.get(t);if(f&&m)return f==t&&m==e;var d=-1,v=!0,b=2&r?new o:void 0;for(l.set(e,t),l.set(t,e);++d<c;){var g=e[d],_=t[d];if(u)var h=i?u(_,g,d,t,e,l):u(g,_,d,e,t,l);if(void 0!==h){if(h)continue;v=!1;break}if(b){if(!n(t,(function(e,t){if(!a(b,t)&&(g===e||s(g,e,r,u,l)))return b.push(t)}))){v=!1;break}}else if(g!==_&&!s(g,_,r,u,l)){v=!1;break}}return l.delete(e),l.delete(t),v}},69987:(e,t,r)=>{var o=r(9812),n=r(22929),a=r(93211),u=r(43668),s=r(54160),l=r(52074),i=o?o.prototype:void 0,c=i?i.valueOf:void 0;e.exports=function(e,t,r,o,i,p,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!p(new n(e),new n(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var m=s;case"[object Set]":var d=1&o;if(m||(m=l),e.size!=t.size&&!d)return!1;var v=f.get(e);if(v)return v==t;o|=2,f.set(e,t);var b=u(m(e),m(t),o,i,p,f);return f.delete(e),b;case"[object Symbol]":if(c)return c.call(e)==c.call(t)}return!1}},45752:(e,t,r)=>{var o=r(59395),n=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,u,s){var l=1&r,i=o(e),c=i.length;if(c!=o(t).length&&!l)return!1;for(var p=c;p--;){var f=i[p];if(!(l?f in t:n.call(t,f)))return!1}var m=s.get(e),d=s.get(t);if(m&&d)return m==t&&d==e;var v=!0;s.set(e,t),s.set(t,e);for(var b=l;++p<c;){var g=e[f=i[p]],_=t[f];if(a)var h=l?a(_,g,f,t,e,s):a(g,_,f,e,t,s);if(!(void 0===h?g===_||u(g,_,r,a,s):h)){v=!1;break}b||(b="constructor"==f)}if(v&&!b){var y=e.constructor,j=t.constructor;y==j||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof j&&j instanceof j||(v=!1)}return s.delete(e),s.delete(t),v}},95694:(e,t,r)=>{var o=r(72037)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=o},22410:e=>{var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},37105:(e,t,r)=>{var o="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=o},34552:(e,t,r)=>{var o=r(9812),n=Object.prototype,a=n.hasOwnProperty,u=n.toString,s=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),r=e[s];try{e[s]=void 0;var o=!0}catch(l){}var n=u.call(e);return o&&(t?e[s]=r:delete e[s]),n}},54160:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,o){r[++t]=[o,e]})),r}},16095:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},98514:e=>{e.exports=/<%-([\s\S]+?)%>/g},48886:e=>{e.exports=/<%([\s\S]+?)%>/g},28742:e=>{e.exports=/<%=([\s\S]+?)%>/g},56552:(e,t,r)=>{var o=r(37105),n="object"==typeof self&&self&&self.Object===Object&&self,a=o||n||Function("return this")();e.exports=a},86179:e=>{e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},46704:e=>{e.exports=function(e){return this.__data__.has(e)}},52074:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}},17671:(e,t,r)=>{var o=r(96614),n=r(84570),a=r(30474),u=n((function(e,t,r,n){o(t,a(t),e,n)}));e.exports=u},8668:(e,t,r)=>{var o=r(31170),n=r(55647),a=r(75031),u=n((function(e,t){try{return o(e,void 0,t)}catch(r){return a(r)?r:new Error(r)}}));e.exports=u},12358:(e,t,r)=>{var o=r(95694),n=r(41069),a=/[&<>"']/g,u=RegExp(a.source);e.exports=function(e){return(e=n(e))&&u.test(e)?e.replace(a,o):e}},54052:e=>{var t=Array.isArray;e.exports=t},19853:(e,t,r)=>{var o=r(26989);e.exports=function(e,t){return o(e,t)}},75031:(e,t,r)=>{var o=r(16913),n=r(22761),a=r(12322);e.exports=function(e){if(!n(e))return!1;var t=o(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!a(e)}},22761:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},19841:(e,t,r)=>{var o=r(16913),n=r(22761);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==o(e)}},22555:(e,t,r)=>{var o=r(17671),n=r(8668),a=r(86983),u=r(91499),s=r(22410),l=r(75031),i=r(60929),c=r(28673),p=r(28742),f=r(13754),m=r(41069),d=/\b__p \+= '';/g,v=/\b(__p \+=) '' \+/g,b=/(__e\(.*?\)|\b__t\)) \+\n'';/g,g=/[()=,{}\[\]\/\s]/,_=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,h=/($^)/,y=/['\n\r\u2028\u2029\\]/g,j=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var w=f.imports._.templateSettings||f;r&&i(e,t,r)&&(t=void 0),e=m(e),t=o({},t,w,u);var x,O,E=o({},t.imports,w.imports,u),N=c(E),L=a(E,N),S=0,k=t.interpolate||h,M="__p += '",P=RegExp((t.escape||h).source+"|"+k.source+"|"+(k===p?_:h).source+"|"+(t.evaluate||h).source+"|$","g"),R=j.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(P,(function(t,r,o,n,a,u){return o||(o=n),M+=e.slice(S,u).replace(y,s),r&&(x=!0,M+="' +\n__e("+r+") +\n'"),a&&(O=!0,M+="';\n"+a+";\n__p += '"),o&&(M+="' +\n((__t = ("+o+")) == null ? '' : __t) +\n'"),S=u+t.length,t})),M+="';\n";var A=j.call(t,"variable")&&t.variable;if(A){if(g.test(A))throw new Error("Invalid `variable` option passed into `_.template`")}else M="with (obj) {\n"+M+"\n}\n";M=(O?M.replace(d,""):M).replace(v,"$1").replace(b,"$1;"),M="function("+(A||"obj")+") {\n"+(A?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(x?", __e = _.escape":"")+(O?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+M+"return __p\n}";var C=n((function(){return Function(N,R+"return "+M).apply(void 0,L)}));if(C.source=M,l(C))throw C;return C}},13754:(e,t,r)=>{var o=r(12358),n={escape:r(98514),evaluate:r(48886),interpolate:r(28742),variable:"",imports:{_:{escape:o}}};e.exports=n},41069:(e,t,r)=>{var o=r(38541);e.exports=function(e){return null==e?"":o(e)}}}]);
//# sourceMappingURL=1467.4c5f503c.chunk.js.map