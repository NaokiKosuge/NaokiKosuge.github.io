"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,f=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={slug:"/singleton-pattern",sidebar_label:"\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3"},a="\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3",l={unversionedId:"engineering/design-pattern/singleton-pattern",id:"engineering/design-pattern/singleton-pattern",title:"\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3",description:"\u89e3\u8aac",source:"@site/notes/engineering/design-pattern/singleton-pattern.md",sourceDirName:"engineering/design-pattern",slug:"/singleton-pattern",permalink:"/notes/singleton-pattern",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/engineering/design-pattern/singleton-pattern.md",tags:[],version:"current",frontMatter:{slug:"/singleton-pattern",sidebar_label:"\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3"},sidebar:"tutorialSidebar",previous:{title:"ReactiveX",permalink:"/notes/reactivex"},next:{title:"\u30d5\u30a3\u30fc\u30c9",permalink:"/notes/feed"}},s={},c=[{value:"\u89e3\u8aac",id:"\u89e3\u8aac",level:2},{value:"\u5b9f\u88c5",id:"\u5b9f\u88c5",level:2},{value:"TypeScript",id:"typescript",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3"},"\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3"),(0,i.kt)("h2",{id:"\u89e3\u8aac"},"\u89e3\u8aac"),(0,i.kt)("h2",{id:"\u5b9f\u88c5"},"\u5b9f\u88c5"),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1-14}","{1-14}":!0},"class Singleton {\n  private static instance: Singleton;\n  private constructor() {\n    // do something construct...\n  }\n  static getInstance() {\n    if (!Singleton.instance) {\n      Singleton.instance = new Singleton();\n      // ... any one time initialization goes here ...\n    }\n    return Singleton.instance;\n  }\n  someMethod() { }\n}\n\nlet something = new Singleton(); // Error: constructor of 'Singleton' is private.\n\nlet instance = Singleton.getInstance(); // do something with the instance...\n")))}u.isMDXComponent=!0}}]);