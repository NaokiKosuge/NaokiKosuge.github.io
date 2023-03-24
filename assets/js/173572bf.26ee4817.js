"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>o});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),k=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=k(e.components);return n.createElement(m.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=k(a),o=l,s=d["".concat(m,".").concat(o)]||d[o]||N[o]||r;return a?n.createElement(s,i(i({ref:t},u),{},{components:a})):n.createElement(s,i({ref:t},u))}));function o(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const r={slug:"/rust-types",sidebar_label:"\u578b"},i="\u3010Rust\u3011\u578b",p={unversionedId:"technology/rust/spec/rust-types",id:"technology/rust/spec/rust-types",title:"\u3010Rust\u3011\u578b",description:"Rust \u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u3059\u3079\u3066\u306e\u5909\u6570\u3001\u30a2\u30a4\u30c6\u30e0\u3001\u304a\u3088\u3073\u5024\u306b\u306f\u578b\u304c\u3042\u308a\u307e\u3059\u3002\u5024\u306e\u578b\u306f\u3001\u5024\u3092\u4fdd\u6301\u3059\u308b\u30e1\u30e2\u30ea\u306e\u89e3\u91c8\u3068\u3001\u5024\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u64cd\u4f5c\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/notes/technology/rust/spec/rust-types.md",sourceDirName:"technology/rust/spec",slug:"/rust-types",permalink:"/notes/rust-types",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/spec/rust-types.md",tags:[],version:"current",frontMatter:{slug:"/rust-types",sidebar_label:"\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u30c8\u30ec\u30a4\u30c8",permalink:"/notes/rust-traits"},next:{title:"unsafe",permalink:"/notes/rust-unsafe"}},m={},k=[{value:"\u30d6\u30fc\u30eb\u578b",id:"\u30d6\u30fc\u30eb\u578b",level:2},{value:"\u6570\u5024\u578b",id:"\u6570\u5024\u578b",level:2},{value:"\u6574\u6570\u578b",id:"\u6574\u6570\u578b",level:3},{value:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b",id:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u578b",id:"\u30c6\u30ad\u30b9\u30c8\u578b",level:2},{value:"Never \u578b",id:"never-\u578b",level:2},{value:"\u30bf\u30d7\u30eb\u578b",id:"\u30bf\u30d7\u30eb\u578b",level:2},{value:"\u914d\u5217\u578b",id:"\u914d\u5217\u578b",level:2},{value:"\u30b9\u30e9\u30a4\u30b9\u578b",id:"\u30b9\u30e9\u30a4\u30b9\u578b",level:2},{value:"\u69cb\u9020\u4f53\u578b",id:"\u69cb\u9020\u4f53\u578b",level:2},{value:"\u30bf\u30d7\u30eb\u69cb\u9020\u4f53\u578b",id:"\u30bf\u30d7\u30eb\u69cb\u9020\u4f53\u578b",level:3},{value:"\u30e6\u30cb\u30c3\u30c8\u30e9\u30a4\u30af\u69cb\u9020\u4f53\u578b",id:"\u30e6\u30cb\u30c3\u30c8\u30e9\u30a4\u30af\u69cb\u9020\u4f53\u578b",level:3},{value:"\u5217\u6319\u578b",id:"\u5217\u6319\u578b",level:2},{value:"\u5171\u7528\u4f53\u578b",id:"\u5171\u7528\u4f53\u578b",level:2},{value:"\u95a2\u6570\u30a2\u30a4\u30c6\u30e0\u578b",id:"\u95a2\u6570\u30a2\u30a4\u30c6\u30e0\u578b",level:2},{value:"\u30af\u30ed\u30fc\u30b8\u30e3\u578b",id:"\u30af\u30ed\u30fc\u30b8\u30e3\u578b",level:2},{value:"\u53c2\u7167\u578b",id:"\u53c2\u7167\u578b",level:2},{value:"Raw \u30dd\u30a4\u30f3\u30bf\u578b",id:"raw-\u30dd\u30a4\u30f3\u30bf\u578b",level:2},{value:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u578b",id:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u578b",level:2},{value:"\u30c8\u30ec\u30a4\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b",id:"\u30c8\u30ec\u30a4\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b",level:2},{value:"Impl \u30c8\u30ec\u30a4\u30c8\u578b",id:"impl-\u30c8\u30ec\u30a4\u30c8\u578b",level:2}],u={toc:k};function N(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rust\u578b"},"\u3010Rust\u3011\u578b"),(0,l.kt)("p",null,"Rust \u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u3059\u3079\u3066\u306e\u5909\u6570\u3001\u30a2\u30a4\u30c6\u30e0\u3001\u304a\u3088\u3073\u5024\u306b\u306f\u578b\u304c\u3042\u308a\u307e\u3059\u3002\u5024\u306e\u578b\u306f\u3001\u5024\u3092\u4fdd\u6301\u3059\u308b\u30e1\u30e2\u30ea\u306e\u89e3\u91c8\u3068\u3001\u5024\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u64cd\u4f5c\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u7d44\u307f\u8fbc\u307f\u578b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u578b\u3067\u306f\u30a8\u30df\u30e5\u30ec\u30fc\u30c8\u3067\u304d\u306a\u3044\u91cd\u8981\u306a\u65b9\u6cd5\u3067\u3001\u8a00\u8a9e\u306b\u7dca\u5bc6\u306b\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u578b\u306e\u6a5f\u80fd\u306f\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u578b\u306e\u5206\u985e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%83%96%E3%83%BC%E3%83%AB%E5%9E%8B"},"\u8ad6\u7406\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%95%B0%E5%80%A4%E5%9E%8B"},"\u6570\u5024\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E5%9E%8B"},"\u30c6\u30ad\u30b9\u30c8\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#never-%E5%9E%8B"},"Never \u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30b7\u30fc\u30b1\u30f3\u30b9\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%82%BF%E3%83%97%E3%83%AB%E5%9E%8B"},"\u30bf\u30d7\u30eb\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%85%8D%E5%88%97%E5%9E%8B"},"\u914d\u5217\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%B9%E5%9E%8B"},"\u30b9\u30e9\u30a4\u30b9\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%A7%8B%E9%80%A0%E4%BD%93%E5%9E%8B"},"\u69cb\u9020\u4f53\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%88%97%E6%8C%99%E5%9E%8B"},"\u5217\u6319\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%85%B1%E7%94%A8%E4%BD%93%E5%9E%8B"},"\u5171\u7528\u4f53\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u95a2\u6570\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%96%A2%E6%95%B0%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E5%9E%8B"},"\u95a2\u6570\u30a2\u30a4\u30c6\u30e0\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%B8%E3%83%A3%E5%9E%8B"},"\u30af\u30ed\u30fc\u30b8\u30e3\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30dd\u30a4\u30f3\u30bf\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8F%82%E7%85%A7%E5%9E%8B"},"\u53c2\u7167\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#raw-%E3%83%9D%E3%82%A4%E3%83%B3%E3%82%BF"},"Raw \u30dd\u30a4\u30f3\u30bf\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%96%A2%E6%95%B0%E3%83%9D%E3%82%A4%E3%83%B3%E3%82%BF"},"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"\u30c8\u30ec\u30a4\u30c8\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%83%88%E3%83%AC%E3%82%A4%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"},"\u30c8\u30ec\u30a4\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#impl-%E3%83%88%E3%83%AC%E3%82%A4%E3%83%88"},"Impl \u30c8\u30ec\u30a4\u30c8\u578b"))))),(0,l.kt)("h2",{id:"\u30d6\u30fc\u30eb\u578b"},"\u30d6\u30fc\u30eb\u578b"),(0,l.kt)("p",null,"\u8ad6\u7406\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," \u306f\u3001\u771f\u507d\u5024\u3092\u8868\u3059\u578b\u3067\u3001\u305d\u306e\u5024\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff08\u771f\uff09\u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uff08\u507d\uff09\u306e\u3044\u305a\u308c\u304b\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="\u4f8b\uff1a\u30d6\u30fc\u30eb\u8868\u73fe"',title:'"\u4f8b\uff1a\u30d6\u30fc\u30eb\u8868\u73fe"'},"let a: bool = true;\nlet b: bool = false;\n")),(0,l.kt)("h2",{id:"\u6570\u5024\u578b"},"\u6570\u5024\u578b"),(0,l.kt)("p",null,"\u6570\u5024\u578b\u306f\u3001\u6574\u6570\u578b\u3068\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b\u306b\u5206\u3051\u3089\u308c\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u6574\u6570\u578b"},"\u6574\u6570\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b26\u53f7\u306a\u3057"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u5024"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u5024"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u8")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2^8-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u16")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2^16-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u32")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2^32-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u64")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2^64-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"u128")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2^128-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"usize")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u30de\u30b7\u30f3\u4f9d\u5b58")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b26\u53f7\u3042\u308a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0f\u5024"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u5024"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i8")),(0,l.kt)("td",{parentName:"tr",align:null},"-(2^7)"),(0,l.kt)("td",{parentName:"tr",align:null},"2^7-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i16")),(0,l.kt)("td",{parentName:"tr",align:null},"-(2^15)"),(0,l.kt)("td",{parentName:"tr",align:null},"2^15-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i32")),(0,l.kt)("td",{parentName:"tr",align:null},"-(2^31)"),(0,l.kt)("td",{parentName:"tr",align:null},"2^31-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i64")),(0,l.kt)("td",{parentName:"tr",align:null},"-(2^63)"),(0,l.kt)("td",{parentName:"tr",align:null},"2^63-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"i128")),(0,l.kt)("td",{parentName:"tr",align:null},"-(2^127)"),(0,l.kt)("td",{parentName:"tr",align:null},"2^127-1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u30de\u30b7\u30f3\u4f9d\u5b58")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"\u30de\u30b7\u30f3\u4f9d\u5b58")),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"usize")," \u578b\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30dd\u30a4\u30f3\u30bf\u578b\u3068\u540c\u3058\u30d3\u30c3\u30c8\u6570\u306e\u7b26\u53f7\u306a\u3057\u6574\u6570\u578b\u3067\u3059\u3002\u30d7\u30ed\u30bb\u30b9\u5185\u306e\u3059\u3079\u3066\u306e\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isize")," \u578b\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30dd\u30a4\u30f3\u30bf\u578b\u3068\u540c\u3058\u30d3\u30c3\u30c8\u6570\u306e\u7b26\u53f7\u4ed8\u304d\u6574\u6570\u578b\u3067\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u914d\u5217\u30b5\u30a4\u30ba\u306e\u7406\u8ad6\u4e0a\u306e\u4e0a\u9650\u306f\u3001\u6700\u5927 ",(0,l.kt)("inlineCode",{parentName:"p"},"isize")," \u5024\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"isize")," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u914d\u5217\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u9593\u306e\u5dee\u3092\u8a08\u7b97\u3057\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30d0\u30a4\u30c8\u3092\u3001\u7d42\u4e86\u5f8c\u306e1\u30d0\u30a4\u30c8\u3068\u3068\u3082\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b"},"\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b"),(0,l.kt)("p",null,"IEEE 754-2008 \u306e\u300cbinary32\u300d\u304a\u3088\u3073\u300cbinary64\u300d\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b\u306f\u3001\u305d\u308c\u305e\u308c ",(0,l.kt)("inlineCode",{parentName:"p"},"f32")," \u304a\u3088\u3073 ",(0,l.kt)("inlineCode",{parentName:"p"},"f64")," \u3067\u3059\u3002"),(0,l.kt)("h2",{id:"\u30c6\u30ad\u30b9\u30c8\u578b"},"\u30c6\u30ad\u30b9\u30c8\u578b"),(0,l.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u578b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"char")," \u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u3067\u3001\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"char")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"char")," \u578b\u306e\u5024\u306f\u3001Unicode \u30b9\u30ab\u30e9\u30fc\u5024\uff08\u3064\u307e\u308a\u3001\u30b5\u30ed\u30b2\u30fc\u30c8\u3067\u306f\u306a\u3044\u30b3\u30fc\u30c9\u30dd\u30a4\u30f3\u30c8\uff09\u3067\u3042\u308a\u30010x0000\u301c0xD7FF \u307e\u305f\u306f 0xE000\u301c0x10FFFF \u306e\u7bc4\u56f2\u306e32\u30d3\u30c3\u30c8\u7b26\u53f7\u306a\u3057\u30ef\u30fc\u30c9\u3068\u3057\u3066\u8868\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u7bc4\u56f2\u5916\u306e\u6587\u5b57\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3001\u5373\u6642\u306e\u672a\u5b9a\u7fa9\u52d5\u4f5c\u3067\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"[char]")," \u306f\u3001\u4e8b\u5b9f\u4e0a\u3001\u9577\u30551\u306e UCS-4/UTF-32 \u6587\u5b57\u5217\u3067\u3059\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"str")),(0,l.kt)("p",{parentName:"li"},"\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u306e\u5024\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"[u8]")," \u3068\u540c\u3058\u65b9\u6cd5\u3067\u8868\u3055\u308c\u30018\u30d3\u30c3\u30c8\u306e\u7b26\u53f7\u306a\u3057\u30d0\u30a4\u30c8\u306e\u30b9\u30e9\u30a4\u30b9\u3067\u3059\u3002\u305f\u3060\u3057\u3001Rust \u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u306b\u3064\u3044\u3066\u8ffd\u52a0\u306e\u4eee\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u3067\u52d5\u4f5c\u3059\u308b\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u305d\u3053\u306b\u3042\u308b\u30c7\u30fc\u30bf\u304c\u6709\u52b9\u306a UTF-8 \u3067\u3042\u308b\u3053\u3068\u3092\u4eee\u5b9a\u3057\u3066\u4fdd\u8a3c\u3057\u307e\u3059\u3002\u975e UTF-8 \u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3068\u3001\u73fe\u5728\u307e\u305f\u306f\u5c06\u6765\u3001\u672a\u5b9a\u7fa9\u52d5\u4f5c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"str")," \u306f\u52d5\u7684\u306a\u30b5\u30a4\u30ba\u306e\u578b\u3067\u3042\u308b\u305f\u3081\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"&str")," \u306a\u3069\u306e\u30dd\u30a4\u30f3\u30bf\u578b\u3092\u4ecb\u3057\u3066\u306e\u307f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3067\u304d\u307e\u3059\u3002"))),(0,l.kt)("h2",{id:"never-\u578b"},"Never \u578b"),(0,l.kt)("p",null,"Never \u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," \u306f\u3001\u5024\u306e\u7121\u3044\u578b\u3067\u3042\u308a\u3001\u6c7a\u3057\u3066\u5b8c\u4e86\u3057\u306a\u3044\u8a08\u7b97\u306e\u7d50\u679c\u3092\u8868\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30bf\u30d7\u30eb\u578b"},"\u30bf\u30d7\u30eb\u578b"),(0,l.kt)("p",null,"\u30bf\u30d7\u30eb\u578b\u306f\u30010\u500b\u4ee5\u4e0a\u306e\u4efb\u610f\u306e\u578b\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u6210\u308b\u56fa\u5b9a\u30b5\u30a4\u30ba\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u30bf\u30d7\u30eb\u578b\u306e\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"()")," \u2014 \u30e6\u30cb\u30c3\u30c8\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(f64, f64)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(String, i32)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(i32, String)")," \u2014 \u524d\u306e\u4f8b\u3068\u306f\u7570\u306a\u308b\u30bf\u30a4\u30d7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(i32, f64, Vec<String>, Option<bool>)"))),(0,l.kt)("h2",{id:"\u914d\u5217\u578b"},"\u914d\u5217\u578b"),(0,l.kt)("p",null,"\u914d\u5217\u578b\u306f\u3001\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," \u500b\u306e\u56fa\u5b9a\u30b5\u30a4\u30ba\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"[T; N]")," \u3068\u8868\u73fe\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30b9\u30e9\u30a4\u30b9\u578b"},"\u30b9\u30e9\u30a4\u30b9\u578b"),(0,l.kt)("p",null,"\u30b9\u30e9\u30a4\u30b9\u306f\u3001\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u306e\u8981\u7d20\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3078\u306e\u300c\u30d3\u30e5\u30fc\u300d\u3092\u8868\u3059\u52d5\u7684\u306b\u30b5\u30a4\u30ba\u8a2d\u5b9a\u3055\u308c\u305f\u578b\u3067\u3059\u3002\u30b9\u30e9\u30a4\u30b9\u578b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]")," \u3068\u8a18\u8ff0\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30b9\u30e9\u30a4\u30b9\u578b\u306f\u901a\u5e38\u3001\u30dd\u30a4\u30f3\u30bf\u578b\u3092\u4ecb\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&[T]"),"\uff1a\u300c\u5171\u6709\u30b9\u30e9\u30a4\u30b9\u300d\u3002\u300c\u30b9\u30e9\u30a4\u30b9\u300d\u3068\u547c\u3070\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u6307\u3057\u793a\u3059\u30c7\u30fc\u30bf\u3092\u6240\u6709\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u308c\u3092 ",(0,l.kt)("em",{parentName:"li"},"\u501f\u7528")," \u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&mut [T]"),"\uff1a\u300c\u53ef\u5909\u30b9\u30e9\u30a4\u30b9\u300d\u3002\u6307\u3059\u30c7\u30fc\u30bf\u3092\u53ef\u5909\u7684\u306b\u501f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Box<[T]>"),"\uff1a\u300c\u30dc\u30c3\u30af\u30b9\u5316\u3055\u308c\u305f\u30b9\u30e9\u30a4\u30b9\u300d")),(0,l.kt)("h2",{id:"\u69cb\u9020\u4f53\u578b"},"\u69cb\u9020\u4f53\u578b"),(0,l.kt)("p",null,"\u69cb\u9020\u4f53\u578b\u306f\u30010\u500b\u4ee5\u4e0a\u306e\u4efb\u610f\u306e\u578b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5916\u90e8\u306b\u5bfe\u3059\u308b\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30bf\u30d7\u30eb\u69cb\u9020\u4f53\u578b"},"\u30bf\u30d7\u30eb\u69cb\u9020\u4f53\u578b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u30bf\u30d7\u30eb\u69cb\u9020\u4f53"),"\u578b\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u533f\u540d\u3067\u3042\u308b\u3053\u3068\u3092\u9664\u3044\u3066\u3001\u69cb\u9020\u4f53\u578b\u3068\u540c\u3058\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"\u30e6\u30cb\u30c3\u30c8\u30e9\u30a4\u30af\u69cb\u9020\u4f53\u578b"},"\u30e6\u30cb\u30c3\u30c8\u30e9\u30a4\u30af\u69cb\u9020\u4f53\u578b"),(0,l.kt)("p",null,"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u305f\u306a\u3044\u69cb\u9020\u4f53\u578b\u3082\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u5217\u6319\u578b"},"\u5217\u6319\u578b"),(0,l.kt)("p",null,"\u5217\u6319\u578b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u5024\u3092\u5217\u6319\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002\u5217\u6319\u3055\u308c\u305f\u5024\u3092 ",(0,l.kt)("strong",{parentName:"p"},"\u30f4\u30a1\u30ea\u30a2\u30f3\u30c8")," \u3068\u547c\u3073\u3001\u305d\u308c\u3089\u5168\u3066\u306e\u306e\u30f4\u30a1\u30ea\u30a2\u30f3\u30c8\u304c\u5217\u6319\u578b\u306e\u3068\u308a\u3046\u308b\u5024\u3068\u8a00\u3048\u307e\u3059\u3002\u5404\u30f4\u30a1\u30ea\u30a2\u30f3\u30c8\u306b\u306f\u3001\u30c7\u30fc\u30bf\u3092\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u308c\u306f\u30f4\u30a1\u30ea\u30a2\u30f3\u30c8\u3054\u3068\u7570\u306a\u308b\u69cb\u9020\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u5171\u7528\u4f53\u578b"},"\u5171\u7528\u4f53\u578b"),(0,l.kt)("p",null,"\u5171\u7528\u4f53\u578b\u306f\u3001\u69cb\u9020\u4f53\u578b\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u540c\u3058\u9818\u57df\u3092\u3068\u308a\u307e\u3059\u3002\u5373\u3061\u3001\u5024\u306f\u3044\u305a\u308c\u304b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u578b\u3068\u306a\u308a\u307e\u3059\u3002\u9818\u57df\u30b5\u30a4\u30ba\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u4e2d\u3067\u6700\u5927\u306e\u30b5\u30a4\u30ba\u3092\u78ba\u4fdd\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u95a2\u6570\u30a2\u30a4\u30c6\u30e0\u578b"},"\u95a2\u6570\u30a2\u30a4\u30c6\u30e0\u578b"),(0,l.kt)("h2",{id:"\u30af\u30ed\u30fc\u30b8\u30e3\u578b"},"\u30af\u30ed\u30fc\u30b8\u30e3\u578b"),(0,l.kt)("h2",{id:"\u53c2\u7167\u578b"},"\u53c2\u7167\u578b"),(0,l.kt)("h2",{id:"raw-\u30dd\u30a4\u30f3\u30bf\u578b"},"Raw \u30dd\u30a4\u30f3\u30bf\u578b"),(0,l.kt)("h2",{id:"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u578b"},"\u95a2\u6570\u30dd\u30a4\u30f3\u30bf\u578b"),(0,l.kt)("h2",{id:"\u30c8\u30ec\u30a4\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b"},"\u30c8\u30ec\u30a4\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b"),(0,l.kt)("h2",{id:"impl-\u30c8\u30ec\u30a4\u30c8\u578b"},"Impl \u30c8\u30ec\u30a4\u30c8\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"impl Trait")," \u306f\u3001\u7279\u5b9a\u306e\u30c8\u30ec\u30a4\u30c8\u3092\u5b9f\u88c5\u3059\u308b\u540d\u524d\u306e\u306a\u3044\u5177\u4f53\u7684\u306a\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5f15\u6570\u306e\u4f4d\u7f6e\uff08\u95a2\u6570\u306e\u533f\u540d\u578b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066\u6a5f\u80fd\u3067\u304d\u308b\u5834\u6240\uff09\u3068\u8fd4\u308a\u5024\u306e\u4f4d\u7f6e\uff08\u62bd\u8c61\u306e\u8fd4\u308a\u578b\u3068\u3057\u3066\u6a5f\u80fd\u3067\u304d\u308b\u5834\u6240\uff09\u306e2\u7a2e\u985e\u306e\u5834\u6240\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="\u4f8b\uff1aImpl-Trait"',title:'"\u4f8b\uff1aImpl-Trait"'},"trait Trait {}\n\n// \u5f15\u6570\u306e\u4f4d\u7f6e\uff1a\u533f\u540d\u578b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\nfn foo(arg: impl Trait) {\n}\n\n// \u8fd4\u308a\u5024\u306e\u4f4d\u7f6e\uff1a\u62bd\u8c61\u623b\u308a\u30bf\u30a4\u30d7\nfn bar() -> impl Trait {\n}\n")))}N.isMDXComponent=!0}}]);