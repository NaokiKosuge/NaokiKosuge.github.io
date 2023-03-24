"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={slug:"/javascript-async-function",sidebar_label:"async-await"},i="\u3010JavaScript\u3011\u975e\u540c\u671f\u95a2\u6570",o={unversionedId:"technology/javascript/spec/javascript-async-function",id:"technology/javascript/spec/javascript-async-function",title:"\u3010JavaScript\u3011\u975e\u540c\u671f\u95a2\u6570",description:"\u975e\u540c\u671f\u95a2\u6570\u306f async \u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u5ba3\u8a00\u3055\u308c\u3001\u305d\u306e\u4e2d\u3067 await \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002async \u304a\u3088\u3073 await \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30d7\u30ed\u30df\u30b9\u30d9\u30fc\u30b9\u306e\u975e\u540c\u671f\u306e\u52d5\u4f5c\u3092\u3001\u30d7\u30ed\u30df\u30b9\u30c1\u30a7\u30fc\u30f3\u3092\u660e\u793a\u7684\u306b\u69cb\u6210\u3059\u308b\u5fc5\u8981\u306a\u304f\u3001\u3088\u308a\u3059\u3063\u304d\u308a\u3068\u3057\u305f\u65b9\u6cd5\u3067\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/notes/technology/javascript/spec/javascript-async-function.md",sourceDirName:"technology/javascript/spec",slug:"/javascript-async-function",permalink:"/notes/javascript-async-function",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/spec/javascript-async-function.md",tags:[],version:"current",frontMatter:{slug:"/javascript-async-function",sidebar_label:"async-await"},sidebar:"tutorialSidebar",previous:{title:"Yarn",permalink:"/notes/yarnpkg"},next:{title:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc",permalink:"/notes/javascript-generator"}},c={},p=[{value:"<code>async</code>",id:"async",level:2},{value:"<code>await</code>",id:"await",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript\u975e\u540c\u671f\u95a2\u6570"},"\u3010JavaScript\u3011\u975e\u540c\u671f\u95a2\u6570"),(0,r.kt)("p",null,"\u975e\u540c\u671f\u95a2\u6570\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u5ba3\u8a00\u3055\u308c\u3001\u305d\u306e\u4e2d\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"async")," \u304a\u3088\u3073 ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30d7\u30ed\u30df\u30b9\u30d9\u30fc\u30b9\u306e\u975e\u540c\u671f\u306e\u52d5\u4f5c\u3092\u3001\u30d7\u30ed\u30df\u30b9\u30c1\u30a7\u30fc\u30f3\u3092\u660e\u793a\u7684\u306b\u69cb\u6210\u3059\u308b\u5fc5\u8981\u306a\u304f\u3001\u3088\u308a\u3059\u3063\u304d\u308a\u3068\u3057\u305f\u65b9\u6cd5\u3067\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u975e\u540c\u671f\u30b3\u30fc\u30c9\u3092\u30b9\u30c6\u30c3\u30d7\u30aa\u30fc\u30d0\u30fc\u3057\u306a\u3044\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u306e\u30c7\u30d0\u30c3\u30b0\u306f\u56f0\u96e3\u3067\u3059\u3002\u30b3\u30f3\u30d1\u30a4\u30e9\u306b\u3068\u3063\u3066\u306f\u540c\u671f\u30b3\u30fc\u30c9\u3068\u540c\u3058\u3067\u3042\u308b\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"await")," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3053\u308c\u304c\u975e\u5e38\u306b\u7c21\u5358\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"async"},(0,r.kt)("inlineCode",{parentName:"h2"},"async")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"async")," \u304c\u4ed8\u4e0e\u3055\u308c\u305f\u95a2\u6570\u306f\u3001\u305d\u308c\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u3067\u30e9\u30c3\u30d7\u3055\u308c\u305f\u304b\u306e\u3088\u3046\u306b\u632f\u308b\u821e\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u975e\u540c\u671f\u95a2\u6570\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u3057\u305f\u5834\u5408\u3001\u305d\u308c\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.resolve()")," \u304c\u8fd4\u3055\u308c\u305f\u304b\u306e\u69d8\u306b\u632f\u308b\u821e\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u975e\u540c\u671f\u95a2\u6570\u3067\u4f8b\u5916\u304c\u767a\u751f\u3057\u3001\u6355\u6349\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u305d\u308c\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.reject()")," \u304c\u8fd4\u3055\u308c\u305f\u304b\u306e\u69d8\u306b\u632f\u308b\u821e\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u306f\uff08\u307b\u307c\uff09\u540c\u7b49\u3067\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u975e\u540c\u671f\u95a2\u6570\uff08\u30a2\u30ed\u30fc\u95a2\u6570\uff09"',title:'"\u4f8b\uff1a\u975e\u540c\u671f\u95a2\u6570\uff08\u30a2\u30ed\u30fc\u95a2\u6570\uff09"'},"const aFunction = async () => {\n  return 'test';\n}\n\naFunction().then(alert); // This will alert 'test'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1aPromise \u3092\u8fd4\u3059\u540c\u671f\u95a2\u6570\uff08\u30a2\u30ed\u30fc\u95a2\u6570\uff09"',title:'"\u4f8b\uff1aPromise','\u3092\u8fd4\u3059\u540c\u671f\u95a2\u6570\uff08\u30a2\u30ed\u30fc\u95a2\u6570\uff09"':!0},"const aFunction = () => {\n  return Promise.resolve('test');\n}\n\naFunction().then(alert); // This will alert 'test'\n")))),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30ed\u30fc\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u300c",(0,r.kt)("inlineCode",{parentName:"p"},"function")," \u5ba3\u8a00\u300d\u3084\u300c",(0,r.kt)("inlineCode",{parentName:"p"},"function")," \u5f0f\u300d\u306b\u304a\u3044\u3066\u3082\u540c\u69d8\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"await"},(0,r.kt)("inlineCode",{parentName:"h2"},"await")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"await")," \u5f0f\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"async")," \u95a2\u6570\u306e\u4e2d\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u975e\u540c\u671f\u95a2\u6570\u3092\u542b\u3080\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u3092\u540c\u671f\u7684\u306b\u6271\u3046\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6b21\u306e2\u3064\u306e\u30b3\u30fc\u30c9\u306f\u540c\u7b49\u3067\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1aPrmoise \u30c1\u30a7\u30fc\u30f3"',title:'"\u4f8b\uff1aPrmoise','\u30c1\u30a7\u30fc\u30f3"':!0},"const getFirstUserData = () => {\n  return fetch('/users.json') // get users list\n    .then(response => response.json()) // parse JSON\n    .then(users => users[0]) // pick first user\n    .then(user => fetch(`/users/${user.name}`)) // get user data\n    .then(userResponse => userResponse.json()) // parse JSON\n}\n  \ngetFirstUserData();\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1aasync-await"',title:'"\u4f8b\uff1aasync-await"'},"const getFirstUserData = async () => {\n  const response = await fetch('/users.json'); // get users list\n  const users = await response.json(); // parse JSON\n  const user = users[0]; // pick first user\n  const userResponse = await fetch(`/users/${user.name}`); // get user data\n  const userData = await userResponse.json(); // parse JSON\n  return userData;\n}\n\ngetFirstUserData();\n")))))}u.isMDXComponent=!0}}]);