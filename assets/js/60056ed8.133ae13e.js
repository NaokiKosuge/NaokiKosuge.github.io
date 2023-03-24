"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6838],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>d});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(l),d=a,c=m["".concat(u,".").concat(d)]||m[d]||k[d]||r;return l?n.createElement(c,i(i({ref:t},s),{},{components:l})):n.createElement(c,i({ref:t},s))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},3801:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=l(7462),a=(l(7294),l(3905));const r={slug:"/design-mistakes-in-node",sidebar_label:"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9"},i="Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9",o={unversionedId:"technology/javascript/nodejs/design-mistakes-in-node",id:"technology/javascript/nodejs/design-mistakes-in-node",title:"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9",description:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u30012018\u5e746\u6708\u306b\u30d9\u30eb\u30ea\u30f3\u3067\u958b\u50ac\u3055\u308c\u305f JSConf EU \u3067\u767a\u8868\u3055\u308c\u305f\u8cc7\u6599 \u300eDesign Mistakes in Node\u300f\uff08Ryan Dahl \u8457\uff09 \u3092\u7ffb\u8a33\u3057\u305f\u3082\u306e\u3067\u3059\u3002",source:"@site/notes/technology/javascript/nodejs/design-mistakes-in-node.md",sourceDirName:"technology/javascript/nodejs",slug:"/design-mistakes-in-node",permalink:"/notes/design-mistakes-in-node",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/nodejs/design-mistakes-in-node.md",tags:[],version:"current",frontMatter:{slug:"/design-mistakes-in-node",sidebar_label:"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9"},sidebar:"tutorialSidebar",previous:{title:"Babel",permalink:"/notes/babeljs"},next:{title:"Electron",permalink:"/notes/electronjs"}},u={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4ee5\u6765\u3001\u91cd\u8981\u306a\u4f5c\u696d\u306b\u3088\u308a\u30ce\u30fc\u30c9\u306f\u6210\u9577\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002",id:"\u4ee5\u6765\u91cd\u8981\u306a\u4f5c\u696d\u306b\u3088\u308a\u30ce\u30fc\u30c9\u306f\u6210\u9577\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059",level:2},{value:"\u5f8c\u6094",id:"\u5f8c\u6094",level:2},{value:"Promise \u3092\u4f7f\u3044\u7d9a\u3051\u306a\u304b\u3063\u305f",id:"promise-\u3092\u4f7f\u3044\u7d9a\u3051\u306a\u304b\u3063\u305f",level:3},{value:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",level:3},{value:"\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0\uff08GYP\uff09",id:"\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0gyp",level:3},{value:"package.json",id:"packagejson",level:3},{value:"node_modules",id:"node_modules",level:3},{value:"\u62e1\u5f35\u5b50\u300c.js\u300d\u7121\u3057\u306e <code>require(&quot;module&quot;)</code>",id:"\u62e1\u5f35\u5b50js\u7121\u3057\u306e-requiremodule",level:3},{value:"index.js",id:"indexjs",level:3},{value:"Deno",id:"deno",level:2},{value:"Deno \u306e\u30b4\u30fc\u30eb",id:"deno-\u306e\u30b4\u30fc\u30eb",level:2},{value:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3-1",level:3},{value:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u7d20\u5316\u3059\u308b",id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u7d20\u5316\u3059\u308b",level:3},{value:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f TypeScript \u30b3\u30f3\u30d1\u30a4\u30e9\u3002",id:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f-typescript-\u30b3\u30f3\u30d1\u30a4\u30e9",level:3},{value:"\u6700\u5c0f\u9650\u306e\u30ea\u30f3\u30af\u3067\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u30921\u3064\u3060\u3051\u51fa\u8377\u3057\u307e\u3059",id:"\u6700\u5c0f\u9650\u306e\u30ea\u30f3\u30af\u3067\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u30921\u3064\u3060\u3051\u51fa\u8377\u3057\u307e\u3059",level:3},{value:"2018\u5e74\u3092\u6d3b\u7528\u3059\u308b",id:"2018\u5e74\u3092\u6d3b\u7528\u3059\u308b",level:3},{value:"\u305d\u306e\u4ed6",id:"\u305d\u306e\u4ed6",level:3}],s={toc:p};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-\u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9"},"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9"),(0,a.kt)("admonition",{title:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3064\u3044\u3066",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u30012018\u5e746\u6708\u306b\u30d9\u30eb\u30ea\u30f3\u3067\u958b\u50ac\u3055\u308c\u305f JSConf EU \u3067\u767a\u8868\u3055\u308c\u305f\u8cc7\u6599 ",(0,a.kt)("a",{parentName:"p",href:"https://tinyclouds.org/jsconf2018.pdf"},"\u300eDesign Mistakes in Node\u300f\uff08Ryan Dahl \u8457\uff09")," \u3092\u7ffb\u8a33\u3057\u305f\u3082\u306e\u3067\u3059\u3002"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/M3BM9TB-8yA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79c1\u306f Node \u3092\u958b\u767a\u3057\u3001\u521d\u671f\u306e\u958b\u767a\u7ba1\u7406\u3092\u884c\u3063\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u79c1\u306e\u76ee\u6a19\u306f\u3001",(0,a.kt)("strong",{parentName:"li"},"\u30a4\u30d9\u30f3\u30c8\u99c6\u52d5\u578b HTTP \u30b5\u30fc\u30d0\u30fc")," \u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u91cd\u70b9\u3092\u7f6e\u3044\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u306e\u7126\u70b9\u306f\u3001\u5f53\u6642\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9 JavaScript \u3092\u8ecc\u9053\u306b\u4e57\u305b\u308b\u305f\u3081\u306b\u3068\u3066\u3082\u91cd\u8981\u3067\u3042\u308b\u3053\u3068\u304c\u5224\u660e\u3057\u307e\u3057\u305f\u3002\u305d\u306e\u3068\u304d\u306f\u660e\u3089\u304b\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u304c\u3001\u30b5\u30fc\u30d0\u30fc\u5074\u306e JS \u304c\u6210\u529f\u3059\u308b\u305f\u3081\u306b\u30a4\u30d9\u30f3\u30c8\u30eb\u30fc\u30d7\u3092\u5fc5\u8981\u3068\u3057\u307e\u3057\u305f\u3002")),(0,a.kt)("p",null,"2012\u5e74\u3092\u904e\u304e\u305f\u9803\u3001Node \u306f\uff08\u591a\u304b\u308c\u5c11\u306a\u304b\u308c\uff09\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306a\u30ce\u30f3\u30d6\u30ed\u30c3\u30ad\u30f3\u30b0\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u76ee\u6a19\u3092\u9054\u6210\u3057\u305f\u3068\u611f\u3058\u307e\u3057\u305f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30a2\u306f\u591a\u304f\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\uff1aHTTP\u3001SSL\u3001\u2026"),(0,a.kt)("li",{parentName:"ul"},"Windows\uff08",(0,a.kt)("a",{parentName:"li",href:"http://tinyclouds.org/iocp-links.html"},"IOCP")," \u3092\u4f7f\u7528\uff09\u3001Linux\uff08epoll\uff09\u3001Mac\uff08kqueue\uff09\u3067\u52d5\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u3084\u3084\u5b89\u5b9a\u3057\u305f API \u3092\u5099\u3048\u305f\u6bd4\u8f03\u7684\u5c0f\u3055\u306a\u30b3\u30a2\u3002"),(0,a.kt)("li",{parentName:"ul"},"NPM \u3092\u4ecb\u3057\u305f\u5916\u90e8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u6210\u9577\u3059\u308b\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3002")),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u305d\u308c\u306f\u5927\u304d\u306a\u9593\u9055\u3044\u3067\u3057\u305f \u2014 \u3084\u308b\u3079\u304d\u3053\u3068\u304c\u305f\u304f\u3055\u3093\u6b8b\u3063\u3066\u3044\u307e\u3057\u305f..."),(0,a.kt)("h2",{id:"\u4ee5\u6765\u91cd\u8981\u306a\u4f5c\u696d\u306b\u3088\u308a\u30ce\u30fc\u30c9\u306f\u6210\u9577\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059"},"\u4ee5\u6765\u3001\u91cd\u8981\u306a\u4f5c\u696d\u306b\u3088\u308a\u30ce\u30fc\u30c9\u306f\u6210\u9577\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"npm\uff08\u5225\u540d\u300cIsaac\u300d\uff09\u306f\u30b3\u30a2\u30ce\u30fc\u30c9\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5206\u96e2\u3057\u3001\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3092\u5206\u6563\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"N-API \u306f\u7f8e\u3057\u304f\u30c7\u30b6\u30a4\u30f3\u3055\u308c\u305f\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0 API \u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"Ben Noordhuis \u3068 Bert Belder \u304c libuv \u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"Mikeal Rogers \u306f\u3001\u30ac\u30d0\u30ca\u30f3\u30b9\u3068\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3000\u3000\u3092\u7d44\u7e54\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"Fedor Indutny \u306f\u3001\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u5168\u4f53\u3001\u7279\u306b\u6697\u53f7\u901a\u8ca8\u306b\u591a\u5927\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u3066\u304d\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u306e\u4ed6\u591a\u6570\uff1aTJ Fontaine\u3001Rod Vagg\u3001Myles Borins\u3001Nathan Rajlich\u3001Dave Pacheco\u3001Robert Mustacchi\u3001Bryan Cantrill\u3001Igor Zinkovsky\u3001Aria Stewart\u3001Paul Querna\u3001FelixGeisend\xf6rfer\u3001Tim Caswell\u3001Guillermo Rauch\u3001Charlie Robbins\u3001Matt Ranney\u3001Rich Trott\u3001Michael Dawson\u3001James Snell")),(0,a.kt)("p",null,"Node \u3092\u518d\u3073\u76db\u3093\u306b\u4f7f\u3044\u59cb\u3081\u305f\u306e\u306f\u3053\u30536\u304b\u6708\u306e\u3053\u3068\u3067\u3059\u3002",(0,a.kt)("br",null),"\n\u6700\u8fd1\u3001\u79c1\u306e\u76ee\u6a19\u306f\u7570\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u52d5\u7684\u8a00\u8a9e\u306f\u3001\u79d1\u5b66\u8a08\u7b97\u306b\u9069\u3057\u305f\u30c4\u30fc\u30eb\u3067\u3042\u308a\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u8fc5\u901f\u306a1\u56de\u9650\u308a\u306e\u8a08\u7b97\u3092\u884c\u3044\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u305d\u3057\u3066 JavaScript \u306f\u6700\u9ad8\u306e\u52d5\u7684\u8a00\u8a9e\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3080\u3057\u308d\u3001Node\u306e\u3059\u3079\u3066\u306e\u75a3\u8d05\u306b\u3064\u3044\u3066\u6587\u53e5\u3092\u8a00\u3044\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\u30d0\u30b0\u306f\u3001\u3042\u306a\u305f\u304c\u30d0\u30b0\u306e\u8cac\u4efb\u8005\u3067\u3042\u308b\u5834\u5408\u307b\u3069\u660e\u767d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,a.kt)("br",null),"\n\u6642\u3005\u3001Node \u306f\u79c1\u306b\u3068\u3063\u3066\u9ed2\u677f\u306e\u91d8\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002",(0,a.kt)("br",null),"\n\u305d\u308c\u306f\u3068\u3066\u3082\u826f\u304b\u3063\u305f\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",{id:"\u5f8c\u6094"},"\u5f8c\u6094"),(0,a.kt)("h3",{id:"promise-\u3092\u4f7f\u3044\u7d9a\u3051\u306a\u304b\u3063\u305f"},"Promise \u3092\u4f7f\u3044\u7d9a\u3051\u306a\u304b\u3063\u305f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79c1\u306f ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/commit/7cd09874c666f0ce64b1d7776de74f55ff3e53ab"},"2009\u5e746\u6708")," \u306b Node \u306b Promise \u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u304c\u3001",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/commit/0485cc41d5c260458f590d249c073794047434fb"},"2010\u5e742\u6708")," \u306b\u611a\u304b\u306b\u3082\u305d\u308c\u3089\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"Promise \u306f\u3001async/await \u306b\u5fc5\u8981\u306a\u62bd\u8c61\u5316\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"Node \u3067 Promise \u3092\u7d71\u4e00\u7684\u306b\u4f7f\u7528\u3059\u308b\u3068\u3001\u6700\u7d42\u7684\u306a\u6a19\u6e96\u5316\u3068 async/await \u306e\u914d\u4fe1\u304c\u9ad8\u901f\u5316\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4eca\u65e5\u3001Node \u306e\u591a\u304f\u306e\u975e\u540c\u671f API \u306f\u3001\u3053\u308c\u304c\u539f\u56e0\u3067\u3072\u3069\u304f\u53e4\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V8 \u81ea\u4f53\u306f\u3001\u975e\u5e38\u306b\u512a\u308c\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u305d\u308c\u3092\u3069\u306e\u3088\u3046\u306b\u7dad\u6301\u3067\u304d\u308b\u304b\u3092\u3082\u3063\u3068\u8003\u3048\u3066\u3044\u305f\u3089\u3001Node \u306b\u306f\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u5229\u7528\u3067\u304d\u306a\u3044\u512a\u308c\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4fdd\u8a3c\u304c\u3042\u3063\u305f\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\uff1a\u30ea\u30f3\u30bf\u30fc\u304c\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u3068\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u5b8c\u5168\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0gyp"},"\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0\uff08GYP\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30b7\u30b9\u30c6\u30e0\u306f\u975e\u5e38\u306b\u96e3\u3057\u304f\u3001\u975e\u5e38\u306b\u91cd\u8981\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"V8\uff08Chrome \u7d4c\u7531\uff09\u304c GYP \u306e\u4f7f\u7528\u3092\u958b\u59cb\u3057\u3001Node \u30922\u3064\u306b\u5207\u308a\u66ff\u3048\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u306e\u5f8c\u3001Chrome \u306f GN \u7528\u306e GYP \u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002Node \u3092\u552f\u4e00\u306e GYP \u30e6\u30fc\u30b6\u30fc\u306e\u307e\u307e\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"GYP \u3082\u919c\u3044\u5185\u90e8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093 \u2014 V8\u306b\u30d0\u30a4\u30f3\u30c9\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u4eba\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u308c\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u3072\u3069\u3044\u7d4c\u9a13\u3067\u3059\u3002\u3053\u308c\u306f\u3001JSON \u3067\u306f\u306a\u304f\u3001Python \u306b\u3088\u308b JSON \u306e\u9069\u5fdc\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"GYP \u306e\u7d99\u7d9a\u7684\u306a\u4f7f\u7528\u306f\u3001Node \u30b3\u30a2\u306e\u304a\u305d\u3089\u304f\u6700\u5927\u306e\u969c\u5bb3\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u306b V8 \u3078\u306e C++ \u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306b\u6848\u5185\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u30b3\u30a2\u306e\u5916\u90e8\u95a2\u6570\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\uff08FFI\uff09\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u304f\u306e\u4eba\u304c\u65e9\u3044\u6bb5\u968e\u3067 FFI\uff08\u3064\u307e\u308a Cantrill\uff09\u306b\u79fb\u884c\u3059\u308b\u3053\u3068\u3092\u63d0\u6848\u3057\u307e\u3057\u305f\u304c\u3001\u6b8b\u5ff5\u306a\u304c\u3089\u79c1\u306f\u305d\u308c\u3089\u3092\u7121\u8996\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\uff08\u305d\u3057\u3066\u3001libuv \u304c autotools \u3092\u63a1\u7528\u3057\u305f\u3053\u3068\u306b\u975e\u5e38\u306b\u4e0d\u6e80\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\uff09")),(0,a.kt)("h3",{id:"packagejson"},"package.json"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Isaac \u306f\u3001NPM \u3067 package.json \u3092\u767a\u660e\u3057\u307e\u3057\u305f\uff08\u307b\u3068\u3093\u3069\u306e\u90e8\u5206\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u3057\u304b\u3057\u3001\u30ce\u30fc\u30c9\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"require()")," \u304c package.json \u30d5\u30a1\u30a4\u30eb\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},'"main"')," \u3092\u691c\u67fb\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u305d\u308c\u3092\u8a8d\u53ef\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u7d42\u7684\u306b\u3001Node \u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306b NPM \u3092\u542b\u3081\u305f\u305f\u3081\u3001\u30c7\u30d5\u30a1\u30af\u30c8\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u7528\u306b\u4e00\u5143\u5316\u3055\u308c\u305f\uff08\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306b\u5236\u5fa1\u3055\u308c\u305f\uff09\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u3042\u308b\u306e\u306f\u6b8b\u5ff5\u3067\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'require("somemodule")')," \u306f\u7279\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",(0,a.kt)("br",null),"\n\u305d\u308c\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u6240\u304c\u591a\u3059\u304e\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u3042\u306a\u305f\u306e javascript \u30d7\u30ed\u30b0\u30e9\u30e0"',title:'"\u3042\u306a\u305f\u306e',javascript:!0,'\u30d7\u30ed\u30b0\u30e9\u30e0"':!0},'require("somemodule")\n\n// Code that uses\n// somemodule\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "dependencies": {\n    "somemodule": "^0.0.1"\n  }\n  ...\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NPM \u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9   \u30ed\u30fc\u30ab\u30eb\u306e node_modules \u30d5\u30a9\u30eb\u30c0\n + ---------- +         + ---------- +\n + ---------- +         + ---------- +\n |            |         |            |\n | somemodule |         | somemodule |\n |            |         |            |\n + ---------- +         + ---------- |\n")),(0,a.kt)("p",null,"package.json \u3092\u8a31\u53ef\u3059\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u3057\u3066\u306e\u300c\u30e2\u30b8\u30e5\u30fc\u30eb\u300d\u306e\u6982\u5ff5\u304c\u751f\u307e\u308c\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u53b3\u5bc6\u306b\u5fc5\u8981\u306a\u62bd\u8c61\u5316\u3067\u306f\u306a\u304f\u3001Web \u4e0a\u306b\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"package.json \u306b\u306f\u3001\u3042\u3089\u3086\u308b\u7a2e\u985e\u306e\u4e0d\u8981\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002",(0,a.kt)("br",null),"\n\u30e9\u30a4\u30bb\u30f3\u30b9\uff1f\u30ea\u30dd\u30b8\u30c8\u30ea\uff1f\u8aac\u660e\uff1f",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u30dc\u30a4\u30e9\u30fc\u30d7\u30ec\u30fc\u30c8\u30ce\u30a4\u30ba"),"\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30a4\u30f3\u30dd\u30fc\u30c8\u6642\u306b\u76f8\u5bfe\u30d5\u30a1\u30a4\u30eb\u3068 URL \u306e\u307f\u304c\u4f7f\u7528\u3055\u308c\u305f\u5834\u5408\u3001\u30d1\u30b9\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u4f9d\u5b58\u95a2\u4fc2\u3092\u30ea\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u5b87\u5b99\u3067\u6700\u3082\u91cd\u3044\u7269\u4f53"',title:'"\u5b87\u5b99\u3067\u6700\u3082\u91cd\u3044\u7269\u4f53"'},"\u592a\u967d < \u4e2d\u6027\u5b50\u661f < \u30d6\u30e9\u30c3\u30af\u30db\u30fc\u30eb << node_modules\n")),(0,a.kt)("h3",{id:"node_modules"},"node_modules"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u89e3\u6c7a\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u975e\u5e38\u306b\u8907\u96d1\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30d9\u30f3\u30c0\u30fc\u5316\u3055\u308c\u305f\u3082\u306e\u306b\u306f\u5584\u610f\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f\n",(0,a.kt)("inlineCode",{parentName:"p"},"$NODE_PATH")," \u306f\u305d\u308c\u3092\u6392\u9664\u3057\u306a\u304b\u3063\u305f\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u306e\u30bb\u30de\u30f3\u30c6\u30a3\u30af\u30b9\u304b\u3089\u5927\u304d\u304f\u9038\u8131\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u308c\u306f\u79c1\u306e\u305b\u3044\u3067\u3059\u3001\u3054\u3081\u3093\u306a\u3055\u3044\u3002",(0,a.kt)("br",null),"\n\u6b8b\u5ff5\u306a\u304c\u3089\u3001\u4eca\u306f\u5143\u306b\u623b\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",{id:"\u62e1\u5f35\u5b50js\u7121\u3057\u306e-requiremodule"},"\u62e1\u5f35\u5b50\u300c.js\u300d\u7121\u3057\u306e ",(0,a.kt)("inlineCode",{parentName:"h3"},'require("module")')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5fc5\u8981\u306b\u660e\u78ba\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30d6\u30e9\u30a6\u30b6\u306e JavaScript \u304c\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u304b\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u30bf\u30b0\u306e src \u5c5e\u6027\u306e\u300c.js\u300d\u306f\u7701\u7565\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u30ed\u30fc\u30c0\u30fc\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u4f55\u3092\u610f\u56f3\u3057\u3066\u3044\u305f\u304b\u3092\u63a8\u6e2c\u3059\u308b\u305f\u3081\u306b\u3001\u8907\u6570\u306e\u5834\u6240\u3067\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306b\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"indexjs"},"index.js"),(0,a.kt)("p",null,"index.html \u304c\u3042\u3063\u305f\u306e\u3067\u304b\u308f\u3044\u3044\u3068\u601d\u3044\u307e\u3057\u305f..."),(0,a.kt)("p",null,"\u305d\u308c\u306f\u4e0d\u5fc5\u8981\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u8907\u96d1\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b package.json \u304c\u5fc5\u8981\u306b\u306a\u3063\u305f\u5f8c\u306f\u3001\u7279\u306b\u4e0d\u8981\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Node \u306b\u95a2\u3059\u308b\u79c1\u306e\u554f\u984c\u306f\u3001\u307b\u307c\u5b8c\u5168\u306b\u3001Node \u304c\u30e6\u30fc\u30b6\u30fc\u30b3\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u521d\u671f\u306e\u30a4\u30d9\u30f3\u30c8 I/O \u306b\u7126\u70b9\u3092\u5f53\u3066\u3066\u3044\u305f\u306e\u3068\u306f\u5bfe\u7167\u7684\u306b\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u30b7\u30b9\u30c6\u30e0\u306f\u672c\u8cea\u7684\u306b\u5f8c\u4ed8\u3051\u3067\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u3092\u5ff5\u982d\u306b\u7f6e\u3044\u3066\u3001\u79c1\u306f\u305d\u308c\u3092\u3088\u308a\u826f\u304f\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u9577\u3044\u9593\u8003\u3048\u3066\u304d\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u514d\u8cac\u4e8b\u9805"),"\uff1a\u79c1\u306f",(0,a.kt)("strong",{parentName:"p"},"\u975e\u5e38\u306b\u521d\u671f\u306e"),"\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u63d0\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u8896\u3092\u307e\u304f\u308a\u4e0a\u3052\u3066 lldb \u306b\u98db\u3073\u8fbc\u3080\u3053\u3068\u306b\u71b1\u5fc3\u3067\u306a\u3044\u9650\u308a\u3001",(0,a.kt)("strong",{parentName:"p"},"\u308f\u3056\u308f\u3056\u30d3\u30eb\u30c9\u3057\u3088\u3046\u3068\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044"),"\u3002"),(0,a.kt)("p",null,"\u305d\u3046\u306f\u8a00\u3063\u3066\u3082..."),(0,a.kt)("h2",{id:"deno"},"Deno"),(0,a.kt)("p",null,"Deno ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ry/deno"},"https://github.com/ry/deno")),(0,a.kt)("p",null,"V8 \u3067\u306e\u5b89\u5168\u306a TypeScript \u30e9\u30f3\u30bf\u30a4\u30e0"),(0,a.kt)("h2",{id:"deno-\u306e\u30b4\u30fc\u30eb"},"Deno \u306e\u30b4\u30fc\u30eb"),(0,a.kt)("h3",{id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3-1"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JavaScript \u304c\u5b89\u5168\u306a\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u3067\u3042\u308b\u3068\u3044\u3046\u4e8b\u5b9f\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u66f8\u304d\u8fbc\u307f\u30a2\u30af\u30bb\u30b9\u306a\u3057\u3067\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u306f\u30d5\u30e9\u30b0\u3092\u4ecb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u9078\u629e\u3067\u304d\u307e\u3059\uff1a--allow-net --allow-write"),(0,a.kt)("li",{parentName:"ul"},"\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u4fe1\u983c\u3067\u304d\u306a\u3044\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\uff08\u30ea\u30f3\u30bf\u30fc\u306a\u3069\uff09\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u610f\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u95a2\u6570\u3092 V8 \u306b\u30d0\u30a4\u30f3\u30c9\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u30b7\u30b9\u30c6\u30e0\u30b3\u30fc\u30eb\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u30d1\u30c3\u30b7\u30f3\u30b0\uff08protobuf \u30b7\u30ea\u30a2\u30eb\u5316\uff09\u306b\u3088\u3063\u3066\u884c\u308f\u308c\u307e\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"send")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"li"},"recv")," \u306e2\u3064\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u3053\u308c\u306b\u3088\u308a\u3001\u8a2d\u8a08\u304c\u7c21\u7d20\u5316\u3055\u308c\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u76e3\u67fb\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Deno Procces (Privileged)"',title:'"Deno',Procces:!0,'(Privileged)"':!0},"                                         + --------------------------------------- +\n                                         | V8 VM (Unprivileged)                    |\n                     + ---------- +      |     + ---------- +                      |\n[    Timers   ] <--\x3e |            |      |     |            | <--\x3e [   Timers    ] |\n                     |            |      |     |            |                      |\n[ File System ] <--\x3e | Dispatcher | <--------\x3e | Dispatcher | <--\x3e [ File System ] |\n                     |            |  Protobuf  |            |                      |\n[   Network   ] <--\x3e |            |      |     |            | <--\x3e [   Network   ] |\n                     + ---------- +      |     + ---------- +                      |\n                                         |           ^                             |\n                                         |           |                             |\n                                         |           v                             |\n                                         |     + ------------------------------- + |\n                                         |     |           TypeScript            | |\n                                         |     |            Compiler             | |\n                                         |     + ------------------------------- + |\n                                         + --------------------------------------- +\n")),(0,a.kt)("h3",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u7d20\u5316\u3059\u308b"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u7d20\u5316\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e2\u5b58\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u306e\u4e92\u63db\u6027\u306e\u8a66\u307f\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u306f\u76f8\u5bfeURL\u307e\u305f\u306f\u7d76\u5bfeURL\u306e\u307f\u3067\u3059\u3002\uff08",(0,a.kt)("a",{parentName:"li",href:"https://research.swtch.com/vgo-import"},"\u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0")," \u3092\u53c2\u7167\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { test } from "https://unpkg.com/deno_testing@0.0.5/testing.ts"\nimport { log } from "./util.ts"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u306f\u62e1\u5f35\u5b50\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30ea\u30e2\u30fc\u30c8 URL \u306f\u3001\u6700\u521d\u306e\u30ed\u30fc\u30c9\u6642\u306b\u7121\u671f\u9650\u306b\u30d5\u30a7\u30c3\u30c1\u304a\u3088\u3073\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"li"},"--reload")," \u30d5\u30e9\u30b0\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u3001\u30ea\u30bd\u30fc\u30b9\u304c\u518d\u5ea6\u30d5\u30a7\u30c3\u30c1\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30d9\u30f3\u30c9\u30ea\u30f3\u30b0\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f-typescript-\u30b3\u30f3\u30d1\u30a4\u30e9"},"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f TypeScript \u30b3\u30f3\u30d1\u30a4\u30e9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TS \u306f\u7d76\u5bfe\u306b\u7f8e\u3057\u3044\u3067\u3059\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u305d\u308c\u306f\u3064\u3044\u306b\u5b9f\u7528\u7684\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30bf\u30a4\u30d7\u3055\u308c\u305f\u8a00\u8a9e\u3092\u63d0\u4f9b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fc5\u901f\u306a\u30cf\u30c3\u30ad\u30f3\u30b0\u304b\u3089\u5927\u898f\u6a21\u3067\u9069\u5207\u306b\u69cb\u9020\u5316\u3055\u308c\u305f\u6a5f\u68b0\u307e\u3067\u3001\u30b3\u30fc\u30c9\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u62e1\u5f35\u3067\u304d\u307e\u3059\u3002"))),(0,a.kt)("li",{parentName:"ul"},"Deno \u306f TS \u30b3\u30f3\u30d1\u30a4\u30e9\u306b\u30d5\u30c3\u30af\u3057\u3066\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u89e3\u6c7a\u3068\u30d3\u30eb\u30c9\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u306e\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5909\u66f4\u3055\u308c\u3066\u3044\u306a\u3044 TS \u30d5\u30a1\u30a4\u30eb\u306f\u518d\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u306a\u3044\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u306e JS \u3082\u6a5f\u80fd\u3059\u308b\u306f\u305a\u3067\u3059\uff08\u305f\u3060\u3057\u3001TS \u306f JS \u306e\u30b9\u30fc\u30d1\u30fc\u30bb\u30c3\u30c8\u3067\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u306f\u7c21\u5358\u3067\u3059\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u901f\u8d77\u52d5\u306e\u305f\u3081\u306b V8 \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff08\u307e\u3060\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u306b\u306f\u3042\u308a\u307e\u305b\u3093\uff09")),(0,a.kt)("h3",{id:"\u6700\u5c0f\u9650\u306e\u30ea\u30f3\u30af\u3067\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u30921\u3064\u3060\u3051\u51fa\u8377\u3057\u307e\u3059"},"\u6700\u5c0f\u9650\u306e\u30ea\u30f3\u30af\u3067\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u30921\u3064\u3060\u3051\u51fa\u8377\u3057\u307e\u3059"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls -lh deno\n-rwxrwxr-x 1 ryan ryan 55M May 28 23:46 deno\n$ ldd deno\nlinux-vdso.so.1 => (0x00007ffc6797a000)\nlibpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f104fa47000)\nlibstdc++.so.6 => /usr/lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007f104f6c5000)\nlibm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f104f3bc000)\nlibgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007f104f1a6000)\nlibc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f104eddc000)\n/lib64/ld-linux-x86-64.so.2 (0x00007f104fc64000)\n")),(0,a.kt)("h3",{id:"2018\u5e74\u3092\u6d3b\u7528\u3059\u308b"},"2018\u5e74\u3092\u6d3b\u7528\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parcel \u3092\u4f7f\u7528\u3057\u3066 Node \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30d0\u30f3\u30c9\u30eb\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3092\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\uff08\u3053\u308c\u306f\u3001Node \u304c\u5b9f\u884c\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u304b\u3063\u305f\u3053\u3068\u3092\u5927\u5e45\u306b\u5358\u7d14\u5316\u3057\u305f\u3082\u306e\u3067\u3059\u3002\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u512a\u308c\u305f\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u304c\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30fc\u30c9\u306b\u5b58\u5728\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"EG \u306f HTTP\u306b\u3064\u3044\u3066\u5fc3\u914d\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4ed6\u306e\u8ab0\u304b\u304c\u3059\u3067\u306b\u305d\u308c\u3092\u6a5f\u80fd\u3055\u305b\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\uff08Node \u3067\u306f\u305d\u3046\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002Web \u30b5\u30fc\u30d0\u30fc\u306f100\uff05\u624b\u4f5c\u696d\u3067\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u73fe\u5728\u3001Deno \u306e\u975e JS \u90e8\u5206\u306f ",(0,a.kt)("strong",{parentName:"li"},"Go")," \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u304c\u5b8c\u6210\u3057\u305f\u306e\u3067\u3001\u79c1\u306f\u5b8c\u5168\u306b\u8ca9\u58f2\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u4ee3\u66ff\u6848\u3092\u7814\u7a76\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rust \u306f\u826f\u3044\u9078\u629e\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"C++ \u306f\u3001\u4ed6\u306e\u4eba\u304c Go \u307e\u305f\u306f Rust \u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u305f\u72ec\u81ea\u306e Denos \u3092\u69cb\u7bc9\u3067\u304d\u308b\u306e\u3067\u3042\u308c\u3070\u3001\u305d\u308c\u3067\u3082\u826f\u3044\u9078\u629e\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002")))))),(0,a.kt)("h3",{id:"\u305d\u306e\u4ed6"},"\u305d\u306e\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672a\u51e6\u7406\u306e Promise \u3067\u306f\u5e38\u306b\u3059\u3050\u306b\u6b7b\u306b\u307e\u3059\u3002",(0,a.kt)("br",null),"\n\uff08\u3081\u3061\u3083\u304f\u3061\u3083\u3053\u308c\u306f Node \u306b\u306f\u5f53\u3066\u306f\u307e\u308a\u307e\u305b\u3093\u3002\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"await")," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\uff08\u307e\u3060\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6a5f\u80fd\u304c\u91cd\u8907\u3059\u308b\u30d6\u30e9\u30a6\u30b6\u4e92\u63db\u3002")),(0,a.kt)("p",null,"Deno ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ry/deno"},"https://github.com/ry/deno"),(0,a.kt)("br",null),"\n\u751f\u5f8c\u308f\u305a\u304b1\u30f6\u6708\u3067\u3059\u3002\u3042\u307e\u308a\u4f7f\u3048\u307e\u305b\u3093\u3002",(0,a.kt)("br",null),"\n\u3067\u3082\u4eca\u306e\u3068\u3053\u308d\u30c7\u30b6\u30a4\u30f3\u306b\u306f\u6e80\u8db3\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u30b3\u30e1\u30f3\u30c8\uff1f \u8cea\u554f\uff1f \u61f8\u5ff5\uff1f",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"mailto:ry@tinyclouds.org"},"ry@tinyclouds.org")),(0,a.kt)("small",null,"\u3053\u308c\u3089\u306e\u30b9\u30e9\u30a4\u30c9\uff1ahttp://tinyclouds.org/jsconf2018.pdf"))}k.isMDXComponent=!0}}]);