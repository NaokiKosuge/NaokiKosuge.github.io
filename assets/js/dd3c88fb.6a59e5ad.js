"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||b[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={slug:"/babeljs",sidebar_label:"Babel"},i="Babel",o={unversionedId:"technology/javascript/nodejs/babeljs",id:"technology/javascript/nodejs/babeljs",title:"Babel",description:"\ud83d\udd17 Babel \xb7 The compiler for next generation JavaScript",source:"@site/notes/technology/javascript/nodejs/babeljs.md",sourceDirName:"technology/javascript/nodejs",slug:"/babeljs",permalink:"/notes/babeljs",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/nodejs/babeljs.md",tags:[],version:"current",frontMatter:{slug:"/babeljs",sidebar_label:"Babel"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u9580",permalink:"/notes/nodejs"},next:{title:"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9",permalink:"/notes/design-mistakes-in-node"}},p={},s=[{value:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb",id:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb",level:2},{value:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e",id:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e",level:3},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3",id:"\u30d7\u30e9\u30b0\u30a4\u30f3",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u69cb\u6210\u65b9\u6cd5",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u69cb\u6210\u65b9\u6cd5",level:3},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u4e00\u89a7",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u4e00\u89a7",level:3},{value:"\u30d7\u30ea\u30bb\u30c3\u30c8",id:"\u30d7\u30ea\u30bb\u30c3\u30c8",level:2},{value:"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u69cb\u6210\u65b9\u6cd5",id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u69cb\u6210\u65b9\u6cd5",level:3},{value:"\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7",id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7",level:3}],c={toc:s};function b(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babel"},"Babel"),(0,r.kt)("figure",{class:"inline-flex"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3895).Z,width:"1638",height:"744"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel \xb7 The compiler for next generation JavaScript"))),(0,r.kt)("p",null,"Babel \u306f\u3001\u73fe\u5728\u304a\u3088\u3073\u53e4\u3044\u30d6\u30e9\u30a6\u30b6\u307e\u305f\u306f\u74b0\u5883\u3067 ECMAScript2015+ \u30b3\u30fc\u30c9\u3092\u4e0b\u4f4d\u4e92\u63db\u6027\u306e\u3042\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e JavaScript \u306b\u5909\u63db\u3059\u308b\u305f\u3081\u306b\u4e3b\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb"},"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("h3",{id:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e"},"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306e\u69cb\u6210",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306e\u8a2d\u5b9a\u306e\u305f\u3081\u306b\u3001Babel \u306f\u81ea\u52d5\u7684\u306b\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u691c\u7d22\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"babel.config.(json|js|cjs|mjs)"))))),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a1\u30a4\u30eb\u76f8\u5bfe\u306e\u69cb\u6210",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306e\u8a2d\u5b9a\u5024\u306e\u4e0a\u306b\u30de\u30fc\u30b8\u3055\u308c\u308b\u306e\u3067\u3001\u7279\u5b9a\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u305f\u3081\u306b\u6709\u7528\u306a\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".babelrc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".babelrc.(json|js|cjs|mjs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u306e ",(0,r.kt)("inlineCode",{parentName:"li"},'"babel"')," \u30ad\u30fc"))))),(0,r.kt)("h2",{id:"\u30d7\u30e9\u30b0\u30a4\u30f3"},"\u30d7\u30e9\u30b0\u30a4\u30f3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins"},"Plugins\u30fbBabel"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30d7\u30e9\u30b0\u30a4\u30f3"),"\u306f\u3001\u30b3\u30fc\u30c9\u3078\u306e\u5909\u63db\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092 Babel \u306b\u6307\u793a\u3059\u308b\u5c0f\u3055\u306a JavaScript \u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u69cb\u6210\u65b9\u6cd5"},"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u69cb\u6210\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "plugins": [\n    "babel-plugin-myPlugin",\n    "@babel/plugin-transform-runtime"\n  ],\n}\n')))),(0,r.kt)("h3",{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u4e00\u89a7"},"\u30d7\u30e9\u30b0\u30a4\u30f3\u4e00\u89a7"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins-list"},"Plugins List\u30fbBabel"))),(0,r.kt)("h2",{id:"\u30d7\u30ea\u30bb\u30c3\u30c8"},"\u30d7\u30ea\u30bb\u30c3\u30c8"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/presets"},"Presets\u30fbBabel"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30d7\u30ea\u30bb\u30c3\u30c8"),"\u306f\u3001\u4e8b\u524d\u306b\u6c7a\u5b9a\u3055\u308c\u305f\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30bb\u30c3\u30c8\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u69cb\u6210\u65b9\u6cd5"},"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u69cb\u6210\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "presets": [\n    [\n      "@babel/preset-env",\n      {\n        "useBuiltIns": "entry"\n      }\n    ]\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"babel --presets @babel/preset-typescript script.ts\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Node API"',title:'"Node','API"':!0},'require("@babel/core").transformSync("code", {\n  presets: ["@babel/preset-typescript"],\n});\n')))),(0,r.kt)("h3",{id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7"},"\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-env"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))," \u2013 \u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u306a\u308b\u74b0\u5883\u3067\u5fc5\u8981\u306a\u69cb\u6587\u5909\u63db (\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30d6\u30e9\u30a6\u30b6\u30dd\u30ea\u30d5\u30a3\u30eb) \u3092\u7d30\u304b\u304f\u7ba1\u7406\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u6700\u65b0\u306e JavaScript \u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30b9\u30de\u30fc\u30c8\u306a\u30d7\u30ea\u30bb\u30c3\u30c8\u3067\u3059\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "presets": [\n    [\n      "@babel/preset-env",\n      {\n        "targets": {\n          "edge": "17",\n          "firefox": "60",\n          "chrome": "67",\n          "safari": "11.1"\n        },\n        "useBuiltIns": "usage",\n        "corejs": "3.6.5"\n      }\n    ]\n  ]\n}\n')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-react"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/preset-react"))," \u2013 React"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-typescript"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/prefix-typescript"))," \u2013 TypeScript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-flow"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/preset-flow"))," \u2013 Flow")))}b.isMDXComponent=!0},3895:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/babeljs.logo-72a7e50a95c1269f22693377bb7af75f.svg"}}]);