"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(n),s=l,c=m["".concat(o,".").concat(s)]||m[s]||k[s]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={slug:"/rust-basic-types",sidebar_label:"\u57fa\u672c\u578b"},i="\u3010Rust\u3011\u57fa\u672c\u578b",p={unversionedId:"technology/rust/spec/rust-basic-types",id:"technology/rust/spec/rust-basic-types",title:"\u3010Rust\u3011\u57fa\u672c\u578b",description:"- \u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\uff3c",source:"@site/notes/technology/rust/spec/rust-basic-types.md",sourceDirName:"technology/rust/spec",slug:"/rust-basic-types",permalink:"/notes/rust-basic-types",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/spec/rust-basic-types.md",tags:[],version:"current",frontMatter:{slug:"/rust-basic-types",sidebar_label:"\u57fa\u672c\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u5c5e\u6027",permalink:"/notes/rust-attributes"},next:{title:"\u30af\u30ed\u30fc\u30b8\u30e3",permalink:"/notes/rust-closure"}},o={},d=[{value:"\u6a5f\u68b0\u8a9e\u578b",id:"\u6a5f\u68b0\u8a9e\u578b",level:2},{value:"\u6574\u6570\u578b",id:"\u6574\u6570\u578b",level:3},{value:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570 (<code>f32</code>|<code>f64</code>)",id:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570-f32f64",level:4},{value:"\u8ad6\u7406\u5024\u578b (<code>bool</code>)",id:"\u8ad6\u7406\u5024\u578b-bool",level:4},{value:"\u6587\u5b57 (<code>char</code>)",id:"\u6587\u5b57-char",level:4},{value:"\u30bf\u30d7\u30eb (<code>([types...])</code>)",id:"\u30bf\u30d7\u30eb-types",level:2},{value:"\u30dd\u30a4\u30f3\u30bf\u578b",id:"\u30dd\u30a4\u30f3\u30bf\u578b",level:2},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:3},{value:"Box",id:"box",level:3},{value:"raw \u30dd\u30a4\u30f3\u30bf",id:"raw-\u30dd\u30a4\u30f3\u30bf",level:4},{value:"\u914d\u5217",id:"\u914d\u5217",level:2},{value:"\u914d\u5217\u306e\u6697\u9ed9\u7684\u306a\u30b9\u30e9\u30a4\u30b9\u3078\u306e\u5909\u63db",id:"\u914d\u5217\u306e\u6697\u9ed9\u7684\u306a\u30b9\u30e9\u30a4\u30b9\u3078\u306e\u5909\u63db",level:3},{value:"\u30d9\u30af\u30bf",id:"\u30d9\u30af\u30bf",level:2},{value:"\u30d0\u30c3\u30d5\u30a1\u306e\u518d\u78ba\u4fdd",id:"\u30d0\u30c3\u30d5\u30a1\u306e\u518d\u78ba\u4fdd",level:3},{value:"\u30b9\u30e9\u30a4\u30b9",id:"\u30b9\u30e9\u30a4\u30b9",level:2},{value:"\u6587\u5b57\u5217\u578b",id:"\u6587\u5b57\u5217\u578b",level:2},{value:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb",id:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb",level:3},{value:"\u30d0\u30a4\u30c8\u6587\u5b57\u5217",id:"\u30d0\u30a4\u30c8\u6587\u5b57\u5217",level:3},{value:"<code>Rc</code> \u3068 <code>Arc</code>",id:"rc-\u3068-arc",level:2}],u={toc:d};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rust\u57fa\u672c\u578b"},"\u3010Rust\u3011\u57fa\u672c\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b"),"\uff3c")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rust \u306e\u57fa\u672c\u578b",src:n(1979).Z,width:"1536",height:"1474"})),(0,l.kt)("h2",{id:"\u6a5f\u68b0\u8a9e\u578b"},"\u6a5f\u68b0\u8a9e\u578b"),(0,l.kt)("h3",{id:"\u6574\u6570\u578b"},"\u6574\u6570\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5927\u304d\u3055"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b26\u53f7\u3042\u308a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b26\u53f7\u306a\u3057"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8-bit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i8")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16-bit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i16")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32-bit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i32")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"64-bit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i64")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"usize"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u6574\u6570\u30ea\u30c6\u30e9\u30eb\u8868\u8a18"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6574\u6570\u30ea\u30c6\u30e9\u30eb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10\u9032\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"98_222")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_"),"\u306f\u898b\u305f\u76ee\u3092\u533a\u5207\u308b\u3060\u3051")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16\u9032\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xfff")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x"),"\u304b\u3089\u59cb\u3081\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8\u9032\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0o77")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0o"),"\u304b\u3089\u59cb\u3081\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2\u9032\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b1111_0000")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b"),"\u304b\u3089\u59cb\u3081\u308b\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"_"),"\u306f\u898b\u305f\u76ee\u306e\u533a\u5207\u308a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30d0\u30a4\u30c8\uff08",(0,l.kt)("inlineCode",{parentName:"td"},"u8"),"\u306e\u307f\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b'A'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b"),"\u304b\u3089\u59cb\u3081\u30011\u6587\u5b57\u3092",(0,l.kt)("inlineCode",{parentName:"td"},"'"),"\u3067\u631f\u3080"))))),(0,l.kt)("h4",{id:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570-f32f64"},"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570 (",(0,l.kt)("inlineCode",{parentName:"h4"},"f32"),"|",(0,l.kt)("inlineCode",{parentName:"h4"},"f64"),")"),(0,l.kt)("h4",{id:"\u8ad6\u7406\u5024\u578b-bool"},"\u8ad6\u7406\u5024\u578b (",(0,l.kt)("inlineCode",{parentName:"h4"},"bool"),")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"\u6587\u5b57-char"},"\u6587\u5b57 (",(0,l.kt)("inlineCode",{parentName:"h4"},"char"),")"),(0,l.kt)("h2",{id:"\u30bf\u30d7\u30eb-types"},"\u30bf\u30d7\u30eb (",(0,l.kt)("inlineCode",{parentName:"h2"},"([types...])"),")"),(0,l.kt)("h2",{id:"\u30dd\u30a4\u30f3\u30bf\u578b"},"\u30dd\u30a4\u30f3\u30bf\u578b"),(0,l.kt)("h3",{id:"\u53c2\u7167"},"\u53c2\u7167"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("code",null,"&T")),(0,l.kt)("dd",null,"\u578b ",(0,l.kt)("code",null,"T")," \u306e\u5909\u66f4\u4e0d\u80fd\u306a\u53c2\u7167"),(0,l.kt)("dt",null,(0,l.kt)("code",null,"&mut T")),(0,l.kt)("dd",null,"\u578b ",(0,l.kt)("code",null,"T")," \u306e\u53ef\u5909\u53c2\u7167")),(0,l.kt)("h3",{id:"box"},"Box"),(0,l.kt)("p",null,"\u30d2\u30fc\u30d7\u4e0a\u306b\u5024\u3092\u78ba\u4fdd\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306fBox::new \u3092\u4f7f\u3046\u65b9\u6cd5\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let t = (12, "eggs");\nlet b = Box::new(t);  // \u30d2\u30fc\u30d7\u4e0a\u306b\u30bf\u30d7\u30eb\u3092\u78ba\u4fdd\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"t")," \u306e\u578b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"(i32, &str)")," \u306a\u306e\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u306e\u578b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"Box<(i32, &str)>")," \u3068\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Box::new()")," \u306f\u30bf\u30d7\u30eb\u3092\u683c\u7d0d\u3059\u308b\u306e\u306b\u5341\u5206\u306a\u30e1\u30e2\u30ea\u3092\u30d2\u30fc\u30d7\u4e0a\u306b\u78ba\u4fdd\u3057\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u304c\u4e8b\u524d\u306b\u30ea\u30bf\u30fc\u30f3\u306a\u3069\u3067",(0,l.kt)("strong",{parentName:"p"},"\u79fb\u52d5"),"\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u304c\u30b9\u30b3\u30fc\u30d7\u304b\u3089\u5916\u308c\u308b\u3068\u3001\u30e1\u30e2\u30ea\u306f\u5373\u5ea7\u306b\u89e3\u653e\u3055\u308c\u307e\u3059\u3002\u79fb\u52d5\u306f\u3001Rust \u304c\u30d2\u30fc\u30d7\u306b\u78ba\u4fdd\u3057\u305f\u5024\u3092\u51e6\u7406\u3059\u308b\u4e0a\u3067\u4e0d\u53ef\u6b20\u306a\u6a5f\u80fd\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"raw-\u30dd\u30a4\u30f3\u30bf"},"raw \u30dd\u30a4\u30f3\u30bf"),(0,l.kt)("p",null,"Rust \u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"*mut T")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"*const T")," \u3068\u3044\u3046 raw \u30dd\u30a4\u30f3\u30bf\u578b\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u5fb4\u306f\u6b21\u306e\u901a\u308a\u3067\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"raw \u30dd\u30a4\u30f3\u30bf\u306b\u3064\u3044\u3066\u306f\u3001Rust \u304c\u307e\u3063\u305f\u304f\u7ba1\u7406\u3057\u3066\u304f\u308c\u306a\u3044\u306e\u3067\u3001\u3053\u308c\u3092\u4f7f\u3046\u3053\u3068\u306f\u5b89\u5168\u3067\u306f\u306a\u3044\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u305d\u306e\u305f\u3081\u3001raw \u30dd\u30a4\u30f3\u30bf\u306e\u53c2\u7167\u89e3\u6c7a\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"unsafe")," \u30d6\u30ed\u30c3\u30af\u306e\u4e2d\u3067\u3057\u304b\u3067\u304d\u306a\u3044\u4ed5\u7d44\u307f\u3068\u306a\u3063\u3066\u3044\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unsafe")," \u30d6\u30ed\u30c3\u30af\u306e\u4e2d\u3067\u3082\u6b63\u3057\u304f\u66f8\u304b\u308c\u3066\u3044\u308c\u3070\u3001\u5b89\u5168\u6027\u304c\u4fdd\u8a3c\u3055\u308c\u308b\u3002")),(0,l.kt)("h2",{id:"\u914d\u5217"},"\u914d\u5217"),(0,l.kt)("p",null,"\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"[T; N]")," \u306f\u3001\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," \u500b\u306e\u5024\u306e\u914d\u5217\u3092\u8868\u3057\u307e\u3059\u3002\u914d\u5217\u306e\u30b5\u30a4\u30ba\u306f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u5b9a\u307e\u308a\u3001\u578b\u306e\u4e00\u90e8\u3068\u306a\u308a\u307e\u3059\u3002\u65b0\u3057\u3044\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u7e2e\u5c0f\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u521d\u671f\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u914d\u5217\u3092\u4f5c\u308b\u8a18\u6cd5\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// \u300c\u578b u32 \u304c 6\u500b\u300d\u3068\u3044\u3046\u914d\u5217\u306e\u578b\u3092\u660e\u793a\nlet lazy_caterer: [u32; 6] = [1, 2, 4, 7, 11, 16];\n// \u6697\u9ed9\u7684\u306a [&str; 3]\nlet taxonomy = ["Animalia", "Arthropoda", "Insecta"];\n// true \u3092 10000 \u500b\u542b\u3080\u914d\u5217\nlet mut sieve = [true; 10000];\n')),(0,l.kt)("h3",{id:"\u914d\u5217\u306e\u6697\u9ed9\u7684\u306a\u30b9\u30e9\u30a4\u30b9\u3078\u306e\u5909\u63db"},"\u914d\u5217\u306e\u6697\u9ed9\u7684\u306a\u30b9\u30e9\u30a4\u30b9\u3078\u306e\u5909\u63db"),(0,l.kt)("p",null,"\u914d\u5217\u306b\u3042\u308b\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u308b\u6709\u7528\u306a\u30e1\u30bd\u30c3\u30c9\u2014\u2014\u4f8b\u3048\u3070\u8981\u7d20\u306b\u5bfe\u3059\u308b\u7e70\u308a\u8fd4\u3057\u5b9f\u884c\u3001\u691c\u7d22\u3001\u30bd\u30fc\u30c8\u3001\u5024\u306e\u4e00\u62ec\u4ee3\u5165\u3001\u30d5\u30a3\u30eb\u30bf\u306a\u3069\u2014\u2014\u306f\u3001\u3059\u3079\u3066\u914d\u5217\u3067\u306f\u306a\u304f\u30b9\u30e9\u30a4\u30b9\u306e\u30e1\u30bd\u30c3\u30c9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002Rust \u306f\u3001\u30e1\u30bd\u30c3\u30c9\u63a2\u7d22\u6642\u306b\u3001\u914d\u5217\u3078\u306e\u53c2\u7167\u3092\u6697\u9ed9\u306b\u30b9\u30e9\u30a4\u30b9\u306b\u5909\u63db\u3059\u308b\u306e\u3067\u3001\u30b9\u30e9\u30a4\u30b9\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u914d\u5217\u306b\u5bfe\u3057\u3066\u76f4\u63a5\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let mut chaos = [3, 5, 4, 1, 2];\nchaos.sort();\nassert_eq!(chaos, [1, 2, 3, 4, 5]);\n")),(0,l.kt)("h2",{id:"\u30d9\u30af\u30bf"},"\u30d9\u30af\u30bf"),(0,l.kt)("p",null,"\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec<T>")," \u306f\u3001",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"T")," \u306e\u30d9\u30af\u30bf"),"\u3067\u3001\u52d5\u7684\u306b\u78ba\u4fdd\u3055\u308c\u308b\u4f38\u9577\u53ef\u80fd\u306a ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u578b\u306e\u5024\u306e\u5217\u3092\u8868\u3057\u307e\u3059\u3002\u30d9\u30af\u30bf\u306e\u8981\u7d20\u306f\u30d2\u30fc\u30d7\u4e0a\u306b\u53d6\u3089\u308c\u308b\u306e\u3067\u3001\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u4ed6\u306e\u30d9\u30af\u30bf\u3092\u3064\u306a\u3052\u305f\u308a\u3001\u8981\u7d20\u3092\u524a\u9664\u3057\u305f\u308a\u3057\u3066\u3001\u5927\u304d\u3055\u3092\u4efb\u610f\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// \u30de\u30af\u30ed\u3067\u4f5c\u6210\nlet mut v1 = vec![10, 20, 30, 40,];\n\n// \u914d\u5217\u30ea\u30c6\u30e9\u30eb\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\nlet mut v2 = vec![0; 2 * 3];\n\n// new \u3067\u4f5c\u6210\nlet mut v3 = Vec::new();\n\n// \u30a4\u30c6\u30ec\u30fc\u30bf\u304c\u751f\u6210\u3059\u308b\u5024\u304b\u3089\u4f5c\u6210\nlet mut v4: Vec<i32> = (0..5).collect();\n\n// \u8981\u7d20\u306e\u8ffd\u52a0\nv1.push(50);  // [10, 20, 30, 40, 50,]\n// \u8981\u7d20\u306e\u633f\u5165\nv1.insert(0, 5);  // [5, 10, 20, 30, 40, 50,]\n// \u7279\u5b9a\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u8981\u7d20\u3092\u524a\u9664\nv1.remove(0);  // [10, 20, 30, 40, 50,]\n// \u672b\u5c3e\u8981\u7d20\u306e\u53d6\u308a\u51fa\u3057\nlet fifty = v1.pop();  // 50\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Vec<T>")," \u306e\u69cb\u6210:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30d2\u30fc\u30d7\u4e0a\u306b\u30a2\u30ed\u30b1\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u8981\u7d20\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30dd\u30a4\u30f3\u30bf"),(0,l.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30d5\u30a1\u306b\u4fdd\u6301\u3067\u304d\u308b\u5bb9\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u73fe\u5728\u4fdd\u6301\u3057\u3066\u3044\u308b\u8981\u7d20\u6570")),(0,l.kt)("h3",{id:"\u30d0\u30c3\u30d5\u30a1\u306e\u518d\u78ba\u4fdd"},"\u30d0\u30c3\u30d5\u30a1\u306e\u518d\u78ba\u4fdd"),(0,l.kt)("p",null,"\u30d0\u30c3\u30d5\u30a1\u304c\u5bb9\u91cf\u306e\u4e0a\u9650\u306b\u9054\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u65b0\u305f\u306b\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u3088\u308a\u5927\u304d\u306a\u30d0\u30c3\u30d5\u30a1\uff08\u5143\u304b\u30892\u500d\u306e\u30b5\u30a4\u30ba\uff09\u304c\u78ba\u4fdd\u3055\u308c\u3001\u73fe\u5728\u306e\u8981\u7d20\u304c\u305d\u3061\u3089\u306b\u30b3\u30d4\u30fc\u3055\u308c\u3001\u30d9\u30af\u30bf\u306e\u30dd\u30a4\u30f3\u30bf\u3068\u5bb9\u91cf\u304c\u66f4\u65b0\u3055\u308c\u3066\u65b0\u3057\u3044\u30d0\u30c3\u30d5\u30a1\u3092\u6307\u3059\u3088\u3046\u306b\u306a\u308a\u3001\u53e4\u3044\u30d0\u30c3\u30d5\u30a1\u306f\u89e3\u653e\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30d9\u30af\u30bf\u304c\u5fc5\u8981\u3068\u3059\u308b\u8981\u7d20\u306e\u6570\u304c\u524d\u3082\u3063\u3066\u308f\u304b\u3063\u3066\u3044\u308b\u306a\u3089\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Vec::new")," \u3067\u306f\u306a\u304f ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec::with_capacity")," \u3092\u7528\u3044\u3066\u3001\u8981\u7d20\u3092\u3059\u3079\u3066\u4fdd\u6301\u3059\u308b\u306e\u306b\u5341\u5206\u5927\u304d\u306a\u30d0\u30c3\u30d5\u30a1\u3092\u6700\u521d\u304b\u3089\u7528\u610f\u3057\u3066\u3001\u30d9\u30af\u30bf\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3046\u3059\u308c\u3070\u30d0\u30c3\u30d5\u30a1\u306e\u7bc4\u56f2\u5185\u3067\u3042\u308c\u3070\u518d\u78ba\u4fdd\u306f\u884c\u308f\u308c\u307e\u305b\u3093:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let mut v = Vec::with_capacity(2);\nassert_eq!(v.len(), 0);\nassert_eq!(v.capacity(), 2);\nv.push(1);\nv.push(2);\nassert_eq!(v.len(), 2);\nassert_eq!(v.capacity(), 2);\nv.push(3);\nassert_eq!(v.len(), 3);\nassert_eq!(v.capacity(), 4);\n")),(0,l.kt)("h2",{id:"\u30b9\u30e9\u30a4\u30b9"},"\u30b9\u30e9\u30a4\u30b9"),(0,l.kt)("p",null,"\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"&[T]")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut [T]")," \u306f\u3001",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"T")," \u306e\u5171\u6709\u30b9\u30e9\u30a4\u30b9"),"\u304a\u3088\u3073 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"T")," \u306e\u53ef\u5909\u30b9\u30e9\u30a4\u30b9"),"\u3068\u547c\u3070\u308c\u3001\u914d\u5217\u3084\u30d9\u30af\u30bf\u306a\u3069\u306e\u4e00\u90e8\u306e\u9023\u7d9a\u3057\u305f\u8981\u7d20\u3078\u306e\u53c2\u7167\u3067\u3059\u3002\u6700\u521d\u306e\u8981\u7d20\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3068\u3001\u305d\u3053\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u8981\u7d20\u306e\u6570\u3092\u6301\u3063\u3066\u3044\u308b\u3068\u601d\u3048\u3070\u3044\u3044\u3067\u3059\u3002\u53ef\u5909\u30b9\u30e9\u30a4\u30b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut [T]")," \u3067\u306f\u3001\u8981\u7d20\u3092\u8aad\u307f\u51fa\u3059\u3053\u3068\u3082\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u4ed6\u306e\u30b9\u30ec\u30c3\u30c9\u3068\u5171\u6709\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u5171\u6709\u30b9\u30e9\u30a4\u30b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"&[T] "),"\u306f\u3001\u8907\u6570\u306e\u8aad\u307f\u51fa\u3057\u30b9\u30ec\u30c3\u30c9\u304c\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u8981\u7d20\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)("h2",{id:"\u6587\u5b57\u5217\u578b"},"\u6587\u5b57\u5217\u578b"),(0,l.kt)("h3",{id:"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb"},"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb"),(0,l.kt)("p",null,"\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u306f\u30c0\u30d6\u30eb\u30af\u30a9\u30fc\u30c8\u3067\u56f2\u307f\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// \u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u4f7f\u7528\nlet speech1 = "\\"Ouch!\\" said the well.\\n";\n\n// \u8907\u6570\u884c\u3067\u8a18\u8ff01\uff08\u6539\u884c\u3068\u5192\u982d\u306e\u30b9\u30da\u30fc\u30b9\u306f\u542b\u307e\u308c\u308b\uff09\nlet speech2 = "In the room the women come and go,\n    Singing of Mount Abora");\n    \n// \u8907\u6570\u884c\u3067\u8a18\u8ff02\uff08\u6539\u884c\u3068\u5192\u982d\u306e\u30b9\u30da\u30fc\u30b9\u306f\u524a\u9664\u3055\u308c\u308b\uff09\nlet speech3 = "It was a bright, cold day in April, and \\\n    there were four of us-\\\n    more or less.");\n\n// \u300craw string\u300d\nlet default_win_install_path = r"C:\\Program Files\\Gorillas";\nlet pattern = Regex::new(r"\\d+(\\.\\d+)*");\n\n// \u300c\u30cf\u30c3\u30b7\u30e5\u4ed8\u304d raw string\u300d\nprintln!(r###"\n  \u3053\u306e raw string \u306f \'r###\' \u3067\u59cb\u307e\u308b\u3002\n  \u3057\u305f\u304c\u3063\u3066\u3001\u5f15\u7528\u7b26\uff08\'"\'\uff09\u306e\u76f4\u5f8c\u306b\u7d9a\u304f\n  3\u3064\u306e\u30b7\u30e3\u30fc\u30d7 (\'###\') \u306b\u5230\u9054\u3059\u308b\u307e\u3067\u7d42\u4e86\u3057\u307e\u305b\u3093\u3002\n"###);\n')),(0,l.kt)("h3",{id:"\u30d0\u30a4\u30c8\u6587\u5b57\u5217"},"\u30d0\u30a4\u30c8\u6587\u5b57\u5217"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u3092\u5192\u982d\u306b\u4ed8\u3051\u305f\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u306f",(0,l.kt)("strong",{parentName:"p"},"\u30d0\u30a4\u30c8\u6587\u5b57\u5217"),"\u3068\u306a\u308a\u307e\u3059\u3002\u578b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"u8")," \u3067\u3059\u3002\u6587\u5b57\u306f\u3001ASCII \u6587\u5b57\u3068\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9 (\\xHH) \u3060\u3051\u3067\u66f8\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let method = b'GET'  // [u8; 3]\n")),(0,l.kt)("h2",{id:"rc-\u3068-arc"},(0,l.kt)("inlineCode",{parentName:"h2"},"Rc")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"h2"},"Arc")),(0,l.kt)("p",null,"Rust \u306f\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u306e\u30dd\u30a4\u30f3\u30bf\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," \u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u552f\u4e00\u306e\u9055\u3044\u306f\u6b21\u306e\u901a\u308a\u3067\u3059:"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("strong",null,(0,l.kt)("code",null,"Rc"))," (reference count)"),(0,l.kt)("dd",null,"\u9ad8\u901f\u3060\u304c\u30b9\u30ec\u30c3\u30c9\u5b89\u5168\u3067\u306a\u3044"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,(0,l.kt)("code",null,"Arc"))," (atomic reference count)"),(0,l.kt)("dd",null,"\u8907\u6570\u30b9\u30ec\u30c3\u30c9\u9593\u3067\u76f4\u63a5\u5171\u6709\u3057\u3066\u3082\u5b89\u5168")),(0,l.kt)("p",null,"\u3059\u3079\u3066\u306e\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u306b\u5bfe\u3057\u3066\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Rc<T>")," \u306e\u5024\u306f\u3001\u30d2\u30fc\u30d7\u4e0a\u306b\u78ba\u4fdd\u3055\u308c\u305f",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u3068\u305d\u308c\u306b\u4ed8\u968f\u3059\u308b\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u3092\u6307\u3059\u30dd\u30a4\u30f3\u30bf\u3068\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Rc<T>")," \u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u306e\u5024\u306f\u30b3\u30d4\u30fc\u3055\u308c\u305a\u3001\u540c\u3058\u3082\u306e\u3092\u6307\u3059\u30dd\u30a4\u30f3\u30bf\u304c\u4f5c\u3089\u308c\u3001\u53c2\u7167\u30ab\u30a6\u30f3\u30c8\u304c\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// \u3053\u308c\u3089\u3059\u3079\u3066\u306f\u540c\u3058\u53c2\u7167\u3067\u3042\u308b\nlet s: Rc<String> = Rc:new("shirataki".to_string());\nlet t = s.clone();\nlet u = t.clone();\n')))}k.isMDXComponent=!0},1979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rust.rust-type-list-66a316fd93a37f9d79d8af067aec6447.png"}}]);