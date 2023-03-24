"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={slug:"/rust-reference",sidebar_label:"\u53c2\u7167"},o="\u3010Rust\u3011\u53c2\u7167",u={unversionedId:"technology/rust/spec/rust-reference",id:"technology/rust/spec/rust-reference",title:"\u3010Rust\u3011\u53c2\u7167",description:"\u53c2\u7167\u306f\u3001\u6240\u6709\u6a29\u3092\u6301\u305f\u306a\u3044\u30dd\u30a4\u30f3\u30bf\u578b\u3067\u3001\u53c2\u7167\u5148\u306e\u751f\u5b58\u671f\u9593\u306b\u4f55\u306e\u5f71\u97ff\u3082\u4e0e\u3048\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u3042\u308b\u5024\u306b\u5bfe\u3059\u308b\u53c2\u7167\u3092\u4f5c\u308b\u3053\u3068\u3092\u501f\u7528\u3068\u3044\u3044\u307e\u3059\u3002\u53c2\u7167\u306f\u6b21\u306e2\u7a2e\u985e\u304c\u3042\u308a\u307e\u3059:",source:"@site/notes/technology/rust/spec/rust-reference.md",sourceDirName:"technology/rust/spec",slug:"/rust-reference",permalink:"/notes/rust-reference",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/spec/rust-reference.md",tags:[],version:"current",frontMatter:{slug:"/rust-reference",sidebar_label:"\u53c2\u7167"},sidebar:"tutorialSidebar",previous:{title:"\u30dd\u30a4\u30f3\u30bf",permalink:"/notes/rust-pointer"},next:{title:"\u30c6\u30b9\u30c8",permalink:"/notes/rust-test"}},i={},p=[{value:"\u53c2\u7167\u306e\u30eb\u30fc\u30eb",id:"\u53c2\u7167\u306e\u30eb\u30fc\u30eb",level:2},{value:"\u53c2\u7167\u306e\u4ee3\u5165",id:"\u53c2\u7167\u306e\u4ee3\u5165",level:3},{value:"\u53c2\u7167\u3078\u306e\u53c2\u7167",id:"\u53c2\u7167\u3078\u306e\u53c2\u7167",level:3},{value:"\u53c2\u7167\u306e\u6bd4\u8f03",id:"\u53c2\u7167\u306e\u6bd4\u8f03",level:3},{value:"\u4eee\u5f15\u6570\u3068\u3057\u3066\u53c2\u7167\u3092\u53d7\u3051\u53d6\u308b\u5834\u5408\u306e\u751f\u5b58\u671f\u9593",id:"\u4eee\u5f15\u6570\u3068\u3057\u3066\u53c2\u7167\u3092\u53d7\u3051\u53d6\u308b\u5834\u5408\u306e\u751f\u5b58\u671f\u9593",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rust\u53c2\u7167"},"\u3010Rust\u3011\u53c2\u7167"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u7167"),"\u306f\u3001\u6240\u6709\u6a29\u3092\u6301\u305f\u306a\u3044\u30dd\u30a4\u30f3\u30bf\u578b\u3067\u3001\u53c2\u7167\u5148\u306e\u751f\u5b58\u671f\u9593\u306b\u4f55\u306e\u5f71\u97ff\u3082\u4e0e\u3048\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u3042\u308b\u5024\u306b\u5bfe\u3059\u308b\u53c2\u7167\u3092\u4f5c\u308b\u3053\u3068\u3092",(0,l.kt)("strong",{parentName:"p"},"\u501f\u7528"),"\u3068\u3044\u3044\u307e\u3059\u3002\u53c2\u7167\u306f\u6b21\u306e2\u7a2e\u985e\u304c\u3042\u308a\u307e\u3059:"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("strong",null,"\u5171\u6709\u53c2\u7167")),(0,l.kt)("dd",null,"\u53c2\u7167\u5148\u3092\u8aad\u3080\u3053\u3068\u306f\u3067\u304d\u308b\u304c\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u79fb\u52d5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u306a\u3044\u3002\u3057\u304b\u3057\u3001\u3042\u308b\u5024\u306b\u5bfe\u3059\u308b\u5171\u6709\u53c2\u7167\u306f\u3001\u540c\u6642\u306b\u3044\u304f\u3089\u3067\u3082\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,l.kt)("code",null,"&e")," \u306f\u3001\u5024 ",(0,l.kt)("code",null,"e"),"\u306b\u5bfe\u3059\u308b\u5171\u6709\u53c2\u7167\u3092\u8fd4\u3059\u3002",(0,l.kt)("code",null,"e")," \u306e\u578b\u304c ",(0,l.kt)("code",null,"T")," \u3067\u3042\u308c\u3070\u3001",(0,l.kt)("code",null,"&e")," \u306e\u578b\u306f ",(0,l.kt)("code",null,"&T")," \u3068\u306a\u308b\u3002 \u5171\u6709\u53c2\u7167\u306f Copy \u578b\u3067\u3042\u308b\u3002"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"\u53ef\u5909\u53c2\u7167")),(0,l.kt)("dd",null,"\u5024\u3092\u8aad\u307f\u51fa\u3059\u3053\u3068\u3082\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d \u308b\u3002\u3057\u304b\u3057\u3001\u540c\u3058\u5024\u306b\u5bfe\u3059\u308b\u53ef\u5909\u53c2\u7167\u3068\u3001\u4ed6\u306e\u53c2\u7167\uff08\u5171\u6709\u53c2\u7167\u3067\u3082\u53ef\u5909\u53c2\u7167\u3067\u3082\uff09\u3068\u306f\u540c\u6642\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002",(0,l.kt)("code",null,"&mut e")," \u306f\u3001\u5024 ",(0,l.kt)("code",null,"e")," \u306b\u5bfe\u3059\u308b\u53ef\u5909\u53c2\u7167\u3092\u8fd4\u3059\u3002\u3053\u306e\u53c2\u7167\u306e\u578b\u306f  ",(0,l.kt)("code",null,"&mut T")," \u3068\u306a\u308b\u3002\u53ef\u5909\u53c2\u7167\u306fCopy \u578b\u3067\u306f\u306a\u3044\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// \u3010\u5171\u6709\u53c2\u7167\u3011\nlet mut x = 10;\nlet r1 = &x;\nlet r2 = &x;     // OK: \u8907\u6570\u306e\u5171\u6709\u53c2\u7167\u306f\u53ef\u80fd\nx += 10;         // ERROR: x \u306f\u501f\u7528\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u4ee3\u5165\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\nlet m = &mut x;  // ERROR: x \u306f\u65e2\u306b\u5171\u6709\u53c2\u7167\u3068\u3057\u3066\u501f\u7528\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\n                 // \u53ef\u5909\u53c2\u7167\u3068\u3057\u3066\u501f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\n\n// \u3010\u53ef\u5909\u53c2\u7167\u3011\nlet mut y = 20;\nlet m1 = &mut y;\nlet m2 = &mut y;  // ERROR: \u53ef\u5909\u53c2\u7167\u306f1\u5ea6\u3057\u304b\u501f\u7528\u3067\u304d\u306a\u3044\nlet z = y;        // ERROR: y \u306f\u53ef\u5909\u3067\u501f\u7528\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4f7f\u3048\u306a\u3044\n")),(0,l.kt)("h2",{id:"\u53c2\u7167\u306e\u30eb\u30fc\u30eb"},"\u53c2\u7167\u306e\u30eb\u30fc\u30eb"),(0,l.kt)("h3",{id:"\u53c2\u7167\u306e\u4ee3\u5165"},"\u53c2\u7167\u306e\u4ee3\u5165"),(0,l.kt)("p",null,"\u53c2\u7167\u3078\u4ee3\u5165\u3059\u308b\u3068\u3001\u53c2\u7167\u306f\u65b0\u3057\u3044\u5024\u3092\u6307\u3059\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 10;\nlet y =20;\nlet mut r = &x;\n// \u3053\u306e\u6642\u70b9\u3067 r \u306f x \u3092\u6307\u3059\nr = &y;\n// \u3053\u306e\u6642\u70b9\u3067 r \u306f y \u3092\u6307\u3059\n")),(0,l.kt)("h3",{id:"\u53c2\u7167\u3078\u306e\u53c2\u7167"},"\u53c2\u7167\u3078\u306e\u53c2\u7167"),(0,l.kt)("p",null,"\u53c2\u7167\u3078\u306e\u53c2\u7167\u306f\u5024\u307e\u3067\u9061\u308a\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point { x: i32, y: i32 }\nlet point = Point { x: 1000, y: 729 };\nlet r: &Point = &point;\nlet rr: &&Point = &r;\nlet rrr: &&&Point = &rr;\n// rrr.y \u306f 729 \u3067\u3042\u308b\n")),(0,l.kt)("h3",{id:"\u53c2\u7167\u306e\u6bd4\u8f03"},"\u53c2\u7167\u306e\u6bd4\u8f03"),(0,l.kt)("p",null,"\u53c2\u7167\u3092\u6bd4\u8f03\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"=="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">=")," \u306a\u3069\uff09\u3059\u308b\u969b\u306f\u3001\u53c2\u7167\u5143\u306e\u30a2\u30c9\u30ec\u30b9\u3067\u306f\u306a\u304f\u6700\u7d42\u7684\u306a\u53c2\u7167\u5148\u306e\u5024\u304c\u6bd4\u8f03\u3055\u308c\u307e\u3059\u3002\u53c2\u7167\u5143\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u6bd4\u8f03\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"std::ptr::eq()")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u4eee\u5f15\u6570\u3068\u3057\u3066\u53c2\u7167\u3092\u53d7\u3051\u53d6\u308b\u5834\u5408\u306e\u751f\u5b58\u671f\u9593"},"\u4eee\u5f15\u6570\u3068\u3057\u3066\u53c2\u7167\u3092\u53d7\u3051\u53d6\u308b\u5834\u5408\u306e\u751f\u5b58\u671f\u9593"),(0,l.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"STASH")," \u306e\u751f\u5b58\u671f\u9593\u304c\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u306e\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"p")," \u306e\u751f\u5b58\u671f\u9593\u3082\u30b0\u30ed\u30fc\u30d0\u30eb\u3067\u306a\u3051\u308c\u3070\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"STASH")," \u306f\u3076\u3089\u4e0b\u304c\u308a\u30dd\u30a4\u30f3\u30bf\u3068\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"static mut STASH: &i32 = &128;\nfn f(p: &i32) {\n    unsafe {  // \u53ef\u5909\u306a static \u306b\u5bfe\u3057\u3066\u306f unsafe \u30d6\u30ed\u30c3\u30af\u304b\u3089\u3057\u304b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\n        STASH = p;\n    }\n}\n")),(0,l.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3067\u306f\u3001\u95a2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," \u306e\u5b9a\u7fa9\u306e\u969b\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," \u306e\u751f\u5b58\u671f\u9593\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u9650\u5b9a\u3059\u308b\u3053\u3068\u3092\u660e\u793a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{2}","{2}":!0},"static mut STASH: &i32 = &128;\nfn f(p: &'static i32) {\n    unsafe {  // \u53ef\u5909\u306a static \u306b\u5bfe\u3057\u3066\u306f unsafe \u30d6\u30ed\u30c3\u30af\u304b\u3089\u3057\u304b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\n        STASH = p;\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fn f<'a>(p: &'a T) { ... }")," \u3068\u3059\u308b\u3053\u3068\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"p")," \u306f\u3001\u300c\u4efb\u610f\u306e\u751f\u5b58\u671f\u9593 ",(0,l.kt)("inlineCode",{parentName:"p"},"'a"),"\uff08\u300ctick A\u300d\u3068\u767a\u97f3\u3059\u308b\uff09\u3092\u6301\u3064 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u3078\u306e\u53c2\u7167\u3092\u306b\u9650\u5b9a\u3059\u308b\u3053\u3068\u3092\u660e\u793a\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);