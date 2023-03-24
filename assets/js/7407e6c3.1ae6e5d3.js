"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9398],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),h=o,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6311:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={slug:"/rust-crate-thiserror",sidebar_label:"thiserror"},i="\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 thiserror",s={unversionedId:"technology/rust/crates/rust-crate-thiserror",id:"technology/rust/crates/rust-crate-thiserror",title:"\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 thiserror",description:"thiserror \u306f\u3001\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001#[derive()] \u5c5e\u6027\u3067\u7c21\u5358\u306b\u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u3092\u5b9f\u88c5\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3082\u306e\u3067\u3059\u3002",source:"@site/notes/technology/rust/crates/rust-crate-thiserror.md",sourceDirName:"technology/rust/crates",slug:"/rust-crate-thiserror",permalink:"/notes/rust-crate-thiserror",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/crates/rust-crate-thiserror.md",tags:[],version:"current",frontMatter:{slug:"/rust-crate-thiserror",sidebar_label:"thiserror"},sidebar:"tutorialSidebar",previous:{title:"anyhow",permalink:"/notes/rust-crate-anyhow"},next:{title:"url",permalink:"/notes/rust-crate-url"}},c={},l=[{value:"\u5165\u9580",id:"\u5165\u9580",level:2}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rust\u30af\u30ec\u30fc\u30c8-thiserror"},"\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 ",(0,o.kt)("inlineCode",{parentName:"h1"},"thiserror")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/thiserror"},(0,o.kt)("inlineCode",{parentName:"a"},"thiserror"))," \u306f\u3001\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"#[derive()]")," \u5c5e\u6027\u3067\u7c21\u5358\u306b\u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u3092\u5b9f\u88c5\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3082\u306e\u3067\u3059\u3002")),(0,o.kt)("p",null,"\u516c\u958b\u30e1\u30f3\u30d0\u30fc\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u306a\u3057")),(0,o.kt)("h2",{id:"\u5165\u9580"},"\u5165\u9580"))}p.isMDXComponent=!0}}]);