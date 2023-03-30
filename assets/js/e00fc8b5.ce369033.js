"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={slug:"/rust-recipe-wasm",sidebar_label:"WebAssembly"},i="\u3010Rust \u30ec\u30b7\u30d4\u3011WebAssembly",o={unversionedId:"technology/rust/recipes/rust-recipe-wasm",id:"technology/rust/recipes/rust-recipe-wasm",title:"\u3010Rust \u30ec\u30b7\u30d4\u3011WebAssembly",description:"\u30c4\u30fc\u30eb",source:"@site/notes/technology/rust/recipes/rust-recipe-wasm.md",sourceDirName:"technology/rust/recipes",slug:"/rust-recipe-wasm",permalink:"/notes/rust-recipe-wasm",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/recipes/rust-recipe-wasm.md",tags:[],version:"current",frontMatter:{slug:"/rust-recipe-wasm",sidebar_label:"WebAssembly"},sidebar:"tutorialSidebar",previous:{title:"\u30a8\u30e9\u30fc\u51e6\u7406",permalink:"/notes/rust-recipe-error-handling"},next:{title:"rustc",permalink:"/notes/rust-rustc"}},l={},c=[{value:"\u30c4\u30fc\u30eb",id:"\u30c4\u30fc\u30eb",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust-\u30ec\u30b7\u30d4webassembly"},"\u3010Rust \u30ec\u30b7\u30d4\u3011WebAssembly"),(0,a.kt)("h2",{id:"\u30c4\u30fc\u30eb"},"\u30c4\u30fc\u30eb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/wasm-pack/installer/"},(0,a.kt)("inlineCode",{parentName:"a"},"wasm-pack"))," \u2014 Rust \u306b\u304a\u3051\u308b WebAssembly (WASM) \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8fc5\u901f\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\u4e8b\u524d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rustwasm/create-wasm-app"},(0,a.kt)("inlineCode",{parentName:"a"},"create-wasm-app"))," \u2014 Rust \u3067\u751f\u6210\u3055\u308c\u305f WebAssembly \u3092\u542b\u3080 NPM \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u7528\u3057\u3001\u305d\u308c\u3089\u3092 Webpack \u306b\u30d0\u30f3\u30c9\u30eb\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e ",(0,a.kt)("inlineCode",{parentName:"li"},"npm init")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8")))))}u.isMDXComponent=!0}}]);