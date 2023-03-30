"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7781],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),k=i,c=d["".concat(m,".").concat(k)]||d[k]||u[k]||l;return t?a.createElement(c,r(r({ref:n},s),{},{components:t})):a.createElement(c,r({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const l={slug:"/nodejs-commonjs",sidebar_label:"CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb"},r="\u3010Node.js\u3011CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb",o={unversionedId:"technology/javascript/nodejs/nodejs-commonjs",id:"technology/javascript/nodejs/nodejs-commonjs",title:"\u3010Node.js\u3011CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb",description:"\u30a4\u30f3\u30dd\u30fc\u30c8",source:"@site/notes/technology/javascript/nodejs/nodejs-commonjs.md",sourceDirName:"technology/javascript/nodejs",slug:"/nodejs-commonjs",permalink:"/notes/nodejs-commonjs",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/nodejs/nodejs-commonjs.md",tags:[],version:"current",frontMatter:{slug:"/nodejs-commonjs",sidebar_label:"CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb"},sidebar:"tutorialSidebar",previous:{title:"node \u30b3\u30de\u30f3\u30c9",permalink:"/notes/nodejs-cli"},next:{title:"ECMAScript \u30e2\u30b8\u30e5\u30fc\u30eb",permalink:"/notes/nodejs-esmodule"}},m={},p=[{value:"\u30a4\u30f3\u30dd\u30fc\u30c8",id:"\u30a4\u30f3\u30dd\u30fc\u30c8",level:2},{value:"\u4f9d\u5b58\u89e3\u6c7a\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u4f9d\u5b58\u89e3\u6c7a\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5",id:"\u30ad\u30e3\u30c3\u30b7\u30e5",level:3},{value:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30e9\u30c3\u30d1\u30fc",id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30e9\u30c3\u30d1\u30fc",level:3},{value:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b9\u30b3\u30fc\u30d7",id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b9\u30b3\u30fc\u30d7",level:2},{value:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",id:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",level:2},{value:"\u95a2\u6570\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\uff08substack \u30d1\u30bf\u30fc\u30f3\uff09",id:"\u95a2\u6570\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8substack-\u30d1\u30bf\u30fc\u30f3",level:3},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",level:3},{value:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4",level:4},{value:"\u30e1\u30a4\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"\u30e1\u30a4\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",level:2},{value:"\u5916\u90e8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u5916\u90e8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodejscommonjs-\u30e2\u30b8\u30e5\u30fc\u30eb"},"\u3010Node.js\u3011CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb"),(0,i.kt)("h2",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8"},"\u30a4\u30f3\u30dd\u30fc\u30c8"),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"require(id)")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u306b\u306f\u3001ES \u30e2\u30b8\u30e5\u30fc\u30eb\uff08\u62e1\u5f35\u5b50 ",(0,i.kt)("inlineCode",{parentName:"p"},".mjs"),"\uff09\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u8272\u3005\u306a\u30a4\u30f3\u30dd\u30fc\u30c8 (src/main.js)"',title:'"\u4f8b\uff1a\u8272\u3005\u306a\u30a4\u30f3\u30dd\u30fc\u30c8','(src/main.js)"':!0},"/*\n.\n\u251c\u2500\u2500 node_modules\n\u2502    \u2514\u2500\u2500 express\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n     \u251c\u2500\u2500 foo.js\n     \u2514\u2500\u2500 lib\n     \u2502    \u2514\u2500\u2500 index.js\n     \u2514\u2500\u2500 main.js\n*/\n\n// \u30b3\u30a2\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\nconst fs = require('fs');\nconst http = require('node:http');  // \u30b3\u30a2\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u3042\u308b\u3053\u3068\u306e\u660e\u793a\n\n// \u30d5\u30a1\u30a4\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\nconst foo = require('./foo.js');\nconst lib = require('./lib');  // ./lib/index.js\nconst {version} = require('../package.json');\n\n// \u30d1\u30c3\u30b1\u30fc\u30b8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\nconst express = require('express');\n")),(0,i.kt)("h3",{id:"\u4f9d\u5b58\u89e3\u6c7a\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u4f9d\u5b58\u89e3\u6c7a\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,i.kt)("p",null,"CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f9d\u5b58\u89e3\u6c7a\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3001\u6b21\u306e\u6bb5\u968e\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u30b3\u30a2\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,i.kt)("p",{parentName:"li"},"\u6307\u5b9a\u3055\u308c\u305f ",(0,i.kt)("em",{parentName:"p"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u304c Node \u306e\u30b3\u30a2\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u8abf\u3079\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u30d5\u30a1\u30a4\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,i.kt)("p",{parentName:"li"},"\u30b3\u30a2\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u63a2\u3057\u307e\u3059\u3002",(0,i.kt)("em",{parentName:"p"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \u304b\u3089\u59cb\u307e\u308b\u5834\u5408\u306f\u7d76\u5bfe\u30d1\u30b9\u3068\u3057\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"./")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"../")," \u304b\u3089\u59cb\u307e\u308b\u5834\u5408\u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u8d77\u70b9\u3068\u3057\u305f\u76f8\u5bfe\u30d1\u30b9\u3067\u89e3\u91c8\u3055\u308c\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u30d1\u30b1\u30fc\u30b8\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u306e\u958b\u59cb\u6587\u5b57\u5217\u304c\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"./"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"../")," \u306e\u3046\u3061\u3044\u305a\u308c\u3067\u3082\u306a\u3044\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"require")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4e0b\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u63a2\u3057\u307e\u3059\u3002\u305d\u308c\u3067\u3082\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u3001\u518d\u5e30\u7684\u3088\u308a\u4e0a\u4f4d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u691c\u7d22\u3057\u3066\u3044\u304d\u307e\u3059\u3002"))),(0,i.kt)("p",null,"\u66f4\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u30d1\u30c3\u30b1\u30fc\u30b8\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3057\u3066\u306f\u3001\u6b21\u306e\u30eb\u30fc\u30eb\u306b\u3088\u308a\u30d5\u30a1\u30a4\u30eb\u3092\u7279\u5b9a\u3057\u307e\u3059\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u3055\u308c\u305f ",(0,i.kt)("em",{parentName:"li"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308c\u3070\u305d\u308c\u3092\u3001\u7121\u3051\u308c\u3070 ",(0,i.kt)("inlineCode",{parentName:"li"},".js")," \u82e5\u3057\u304f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},".json"),"\u3001\u66f4\u306b\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},".node")," \u3092\u88dc\u5b8c\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30ed\u30fc\u30c9\u3092\u8a66\u307f\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u3055\u308c\u305f ",(0,i.kt)("em",{parentName:"li"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u3042\u308c\u3070\u3001\u305d\u306e\u914d\u4e0b\u306b ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," \u304c\u5b58\u5728\u3059\u308b\u304b\u3092\u8abf\u3079\u307e\u3059\u3002\u5b58\u5728\u3059\u308c\u3070\u3001\u305d\u306e\u4e2d\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},'"main"')," \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u540d")," \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u914d\u4e0b\u306b ",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u304c\u3042\u308c\u3070\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002")),(0,i.kt)("h3",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5"},"\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u6700\u521d\u306b\u30ed\u30fc\u30c9\u3055\u308c\u305f\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u540c\u4e00\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e2\u56de\u76ee\u4ee5\u964d\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"require(id)")," \u306f\u5b9f\u884c\u3055\u308c\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,i.kt)("admonition",{title:"\u4f5c\u6210\u3055\u308c\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u95a2\u3059\u308b\u6ce8\u610f\u4e8b\u9805",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u540c\u3058 ",(0,i.kt)("inlineCode",{parentName:"p"},"require('foo')")," \u3067\u3082\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f \u7570\u306a\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u6271\u308f\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"li"},"\u3064\u307e\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u306b\u540c\u3058\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3057\u305f\u3068\u3057\u3066\u3082\u3001\u89e3\u6c7a\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u7570\u306a\u308c\u3070\u3001\u5225\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4f5c\u6210\u3055\u308c\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u3092\u533a\u5225\u3057\u306a\u3044\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u307e\u305f\u306f OS \u3067\u306f\u3001\u89e3\u6c7a\u3055\u308c\u305f\u7570\u306a\u308b\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u540c\u4e00\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u3059\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u305d\u308c\u3089\u3092\u7570\u306a\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u6271\u3044\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u3048\u3070\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"require('foo')")," \u3068 ",(0,i.kt)("inlineCode",{parentName:"p"},"require('FOO')")," \u306f\u5225\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002")))),(0,i.kt)("p",null,"\u3082\u3057\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u30b3\u30fc\u30c9\u3092\u8907\u6570\u56de\u5b9f\u884c\u3055\u305b\u305f\u3044\u5834\u5408\u3001\u95a2\u6570\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3066\u3001\u305d\u306e\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30e9\u30c3\u30d1\u30fc"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u30e9\u30c3\u30d1\u30fc"),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30b3\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u524d\u306b\u3001Node.js \u306f\u3001\u6b21\u306e\u95a2\u6570\u30e9\u30c3\u30d1\u30fc\u3067\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e9\u30c3\u30d7\u3057\u307e\u3059\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="CommonJS \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u95a2\u6570\u30e9\u30c3\u30d1\u30fc"',title:'"CommonJS','\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u95a2\u6570\u30e9\u30c3\u30d1\u30fc"':!0},"(function(exports, require, module, __filename, __dirname) {\n  // Module code actually lives in here\n});\n")),(0,i.kt)("h2",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b9\u30b3\u30fc\u30d7"},"\u30e2\u30b8\u30e5\u30fc\u30eb\u30b9\u30b3\u30fc\u30d7"),(0,i.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3054\u3068\u306b\u306f\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u30b9\u30b3\u30fc\u30d7\u306b\u9589\u3058\u3089\u308c\u305f\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u898b\u3048\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u307e\u3059\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__dirname")," \u2013 \u73fe\u5728\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__filename")," \u2013 \u73fe\u5728\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exports")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"li"},"module.exports"),"\u3000\u3078\u306e\u53c2\u7167\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module")," \u2013 \u73fe\u5728\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u53c2\u7167\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exports")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u516c\u958b\u3059\u308b\u30e1\u30f3\u30d0\u30fc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5b8c\u5168\u306b\u89e3\u6c7a\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u8b58\u5225\u5b50\u3002\u901a\u5e38\u3001\u3053\u308c\u306f\u5b8c\u5168\u306b\u89e3\u6c7a\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u540d\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPreloading")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u304c Node.js \u30d7\u30ea\u30ed\u30fc\u30c9\u30d5\u30a7\u30fc\u30ba\u4e2d\u306b\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loaded")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u5834\u5408\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u691c\u7d22\u30d1\u30b9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require(id)")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"li"},"require()")," \u304c\u5143\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u305f\u304b\u306e\u3088\u3046\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require(id)")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u95a2\u6570\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chache")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main")," \u2013 Node.js \u30d7\u30ed\u30bb\u30b9\u306e\u8d77\u52d5\u6642\u306b\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a8\u30f3\u30c8\u30ea\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8868\u3059",(0,i.kt)("inlineCode",{parentName:"li"},"Module")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolve(request[, options])")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u30d5\u30a1\u30a4\u30eb\u306e\u691c\u7d22\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths(request)")," \u2013 \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u89e3\u6c7a\u4e2d\u306b\u691c\u7d22\u3055\u308c\u305f\u30d1\u30b9\u3002")))))),(0,i.kt)("h2",{id:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"},"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"),(0,i.kt)("h3",{id:"\u95a2\u6570\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8substack-\u30d1\u30bf\u30fc\u30f3"},"\u95a2\u6570\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\uff08substack \u30d1\u30bf\u30fc\u30f3\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"substack \u30d1\u30bf\u30fc\u30f3"),"\u306f\u3001\u4e3b\u3068\u306a\u308b\u95a2\u6570\u306e\u307f\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001\u305d\u306e\u95a2\u6570\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u526f\u6b21\u7684\u306a\u6a5f\u80fd\u3092\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u3067\u3059\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1asubstack \u30d1\u30bf\u30fc\u30f3"',title:'"\u4f8b\uff1asubstack','\u30d1\u30bf\u30fc\u30f3"':!0},"/* logger.js */\n\n// \u4e3b\u3068\u306a\u308b\u95a2\u6570\nmodule.exports = (message) => {\n  console.log(`\u6982\u8981\uff1a${message}`);\n};\n\n// \u526f\u6b21\u7684\u306a\u95a2\u6570\nmodule.exports.verbose = (message) => {\n  console.log(`\u8a73\u7d30\uff1a${message}`);\n};\n\n/* main.js */\nconst logger = require('./logger');\nlogger('\u4e00\u822c\u60c5\u5831\u63d0\u4f9b\u30e1\u30c3\u30bb\u30fc\u30b8');\nlogger.verbose('\u8a73\u7d30\u60c5\u5831\u63d0\u4f9b\u30e1\u30c3\u30bb\u30fc\u30b8');\n")),(0,i.kt)("h3",{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1anew \u547c\u3073\u51fa\u3057\u3067\u3057\u304b\u6a5f\u80fd\u3057\u306a\u3044\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"',title:'"\u4f8b\uff1anew','\u547c\u3073\u51fa\u3057\u3067\u3057\u304b\u6a5f\u80fd\u3057\u306a\u3044\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"':!0},"class Logger {\n  constructor(name) {\n    this.name = name;\n  }\n\n  log(message) {\n    console.log(`[${this.name}] ${message}`);\n  }\n\n  info(message) {\n    this.log(`\u6982\u8981\uff1a${message}`);\n  }\n\n  verbose(message) {\n    this.log(`\u8a73\u7d30\uff1a${message}`);\n  }\n}\n\nmodule.exports = Logger;\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"new")," \u6f14\u7b97\u5b50\u306b\u3088\u308b\u547c\u3073\u51fa\u3057\u3068\u95a2\u6570\u547c\u3073\u51fa\u3057\u306e\u4e21\u65b9\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u95a2\u6570\u547c\u3073\u51fa\u3057\u3067\u3082\u6a5f\u80fd\u3059\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"',title:'"\u4f8b\uff1a\u95a2\u6570\u547c\u3073\u51fa\u3057\u3067\u3082\u6a5f\u80fd\u3059\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"'},"function Logger(name) {\n  // new \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\n  if(!new.target) {\n    return new Logger(name);\n  }\n  // new \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u5834\u5408\n  this.name = name;\n}\n\nLogger.prototype.log = function(message) {\n  console.log(`[${this.name}] ${message}`);\n};\n\nLogger.prototype.info = function(message) {\n  this.log(`\u6982\u8981: ${message}`);\n};\n\nLogger.prototype.verbose = function(message) {\n  this.log(`\u8a73\u7d30: ${message}`);\n};\n\nmodule.exports = Logger;\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"new.target")),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new.target"},(0,i.kt)("inlineCode",{parentName:"a"},"new.target"))," \u306f\u64ec\u4f3c\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3001\u95a2\u6570\u3084\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u304c new \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u691c\u51fa\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," \u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u3084\u95a2\u6570\u306e\u4e2d\u3067\u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"new.target")," \u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u3084\u95a2\u6570\u3078\u306e\u53c2\u7167\u3092\u8fd4\u3057\u307e\u3059\u3002\u901a\u5e38\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u306e\u5834\u5408\u3001 new.target \u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\uff0d\uff0dMDN \u3088\u308a\u5f15\u7528")))),(0,i.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"},"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require()")," \u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4ed5\u7d44\u307f\u3092\u5229\u7528\u3057\u3066\u3001\u7570\u306a\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u9593\u3067\u72b6\u614b\u3092\u5171\u6709\u53ef\u80fd\u3067\u3059\u3002\u6b21\u306e\u30b3\u30fc\u30c9\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," \u3068\u3044\u3046\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8" {14}',title:'"\u4f8b\uff1a\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"',"{14}":!0},"/* logger.js */\nclass Logger {\n  constructor(name) {\n    this.count = 0;\n    this.name = name;\n  }\n  \n  log(message) {\n    this.count++;\n    console.log(`[${this.name}] ${message}`);\n  }\n}\n\nmodule.exports = new Logger('DEFAULT');\n\n/* main.js */\nconst logger = require('./logger');\nlogger.log('This is an informational message.');\n")),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u308b\u305f\u3081\u3001logger\u30e2\u30b8\u30e5\u30fc\u30eb\u3092require\u3059\u308b\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u540c\u3058\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u53c2\u7167\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u3001\u72b6\u614b\uff08\u3053\u3053\u3067\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),"\uff09\u3092\u5171\u6709\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9805",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u3053\u308c\u306f\u5f93\u6765\u304b\u3089\u3042\u308b Singleton \u30d1\u30bf\u30fc\u30f3\u3068\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u4e00\u70b9\u6c17\u3092\u3064\u3051\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u306e\u306f\u3001Node \u306b\u304a\u3044\u3066\u306f\u540c\u3058\u30e2\u30b8\u30e5\u30fc\u30eb\u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," \u3057\u3066\u3082\u305d\u308c\u3089\u304c\u540c\u4e00\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3042\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u306a\u3044\u70b9\u3067\u3059\u3002")),(0,i.kt)("h4",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4" {4}',title:'"\u4f8b\uff1a\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4"',"{4}":!0},"/* patcher.js */\n\n// \u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ed\u30fc\u30c9\u3057\u3066\u3001\u65b0\u3057\u3044\u30e1\u30bd\u30c3\u30c9\u3092\u8ffd\u52a0\u3059\u308b\nrequier('./logger').customMessage = () => console.log('This is a new functionality.');\n\n/* main.js */\nrequire('./patcher');\nconst logger = require('./logger');\nlogger.customMessage();\n")),(0,i.kt)("h2",{id:"\u30e1\u30a4\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9"},"\u30e1\u30a4\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9"),(0,i.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u304c Node.js \u304b\u3089\u76f4\u63a5\u5b9f\u884c\u3055\u308c\u308b\u5834\u5408\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"require.main")," \u306f\u305d\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"require.main === module")," \u3092\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u76f4\u63a5\u5b9f\u884c\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1arequire.main"',title:'"\u4f8b\uff1arequire.main"'},"/* foo.js */\nif (require.main === module) {\n  // \u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001`node foo.js` \u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u307e\u3057\u305f\u3002\n} else {\n  // \u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3057\u305f\u3002\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5916\u90e8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u5916\u90e8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest/docs/api/"},"Node.js API"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest/docs/api/modules.html"},"Modules: CommonJS modules"))))))}u.isMDXComponent=!0}}]);