"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/rust-closure",sidebar_label:"\u30af\u30ed\u30fc\u30b8\u30e3"},l="\u3010Rust\u3011\u30af\u30ed\u30fc\u30b8\u30e3",o={unversionedId:"technology/rust/spec/rust-closure",id:"technology/rust/spec/rust-closure",title:"\u3010Rust\u3011\u30af\u30ed\u30fc\u30b8\u30e3",description:"\u30af\u30ed\u30fc\u30b8\u30e3\u306f\u3001\u5909\u6570\u306b\u4fdd\u5b58\u3057\u305f\u308a\u3001\u5f15\u6570\u3068\u3057\u3066\u4ed6\u306e\u95a2\u6570\u306b\u6e21\u3059\u3053\u3068\u306e\u3067\u304d\u308b\u533f\u540d\u95a2\u6570\u3067\u3059\uff0d\uff0d\u6216\u3044\u306f\u30e9\u30e0\u30c0\u95a2\u6570\u3068\u3082\u547c\u3070\u308c\u307e\u3059\u3002\uff0d\uff0d\u95a2\u6570\u3068\u306f\u7570\u306a\u308a\u3001\u95a2\u6570\u306e\u4e2d\u3067\u5b9a\u7fa9\u3055\u308c\u3001\u305d\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u306e\u5024\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/notes/technology/rust/spec/rust-closure.md",sourceDirName:"technology/rust/spec",slug:"/rust-closure",permalink:"/notes/rust-closure",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/spec/rust-closure.md",tags:[],version:"current",frontMatter:{slug:"/rust-closure",sidebar_label:"\u30af\u30ed\u30fc\u30b8\u30e3"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u578b",permalink:"/notes/rust-basic-types"},next:{title:"\u30b3\u30e1\u30f3\u30c8",permalink:"/notes/rust-comment"}},s={},u=[{value:"\u5909\u6570\u306e\u30ad\u30e3\u30d7\u30c1\u30e3",id:"\u5909\u6570\u306e\u30ad\u30e3\u30d7\u30c1\u30e3",level:2},{value:"\u6240\u6709\u6a29\u3092\u501f\u7528\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3",id:"\u6240\u6709\u6a29\u3092\u501f\u7528\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3",level:3},{value:"\u6240\u6709\u6a29\u3092\u79fb\u52d5\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3",id:"\u6240\u6709\u6a29\u3092\u79fb\u52d5\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3",level:3},{value:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3092\u4f7f\u3046\u305f\u3081\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3",id:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3092\u4f7f\u3046\u305f\u3081\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3",level:3},{value:"\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u578b",id:"\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u578b",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust\u30af\u30ed\u30fc\u30b8\u30e3"},"\u3010Rust\u3011\u30af\u30ed\u30fc\u30b8\u30e3"),(0,a.kt)("p",null,"\u30af\u30ed\u30fc\u30b8\u30e3\u306f\u3001\u5909\u6570\u306b\u4fdd\u5b58\u3057\u305f\u308a\u3001\u5f15\u6570\u3068\u3057\u3066\u4ed6\u306e\u95a2\u6570\u306b\u6e21\u3059\u3053\u3068\u306e\u3067\u304d\u308b\u533f\u540d\u95a2\u6570\u3067\u3059\uff0d\uff0d\u6216\u3044\u306f\u30e9\u30e0\u30c0\u95a2\u6570\u3068\u3082\u547c\u3070\u308c\u307e\u3059\u3002\uff0d\uff0d\u95a2\u6570\u3068\u306f\u7570\u306a\u308a\u3001\u95a2\u6570\u306e\u4e2d\u3067\u5b9a\u7fa9\u3055\u308c\u3001\u305d\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u306e\u5024\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u5909\u6570\u306e\u30ad\u30e3\u30d7\u30c1\u30e3"},"\u5909\u6570\u306e\u30ad\u30e3\u30d7\u30c1\u30e3"),(0,a.kt)("p",null,"\u30af\u30ed\u30fc\u30b8\u30e3\u306f\u3001\u5916\u5074\u306e\u95a2\u6570\u306b\u5c5e\u3059\u308b\u30c7\u30fc\u30bf\u3092\u4f7f\u3046\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u3001\u305d\u308c\u3089\u5024\u306e\u6240\u6709\u6a29\u3092\u3001",(0,a.kt)("strong",{parentName:"p"},"\u501f\u7528")," \u3059\u308b\u306e\u304b\u3001",(0,a.kt)("strong",{parentName:"p"},"\u79fb\u52d5")," \u3059\u308b\u306e\u304b\u306b\u3088\u3063\u3066\u6271\u3044\u304c\u7570\u306a\u3063\u3066\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u6240\u6709\u6a29\u3092\u501f\u7528\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3"},"\u6240\u6709\u6a29\u3092\u501f\u7528\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// \u4f55\u3089\u304b\u306e\u7d71\u8a08\u60c5\u5831\u3067\u30bd\u30fc\u30c8\nfn sort_by_statistic(cities: &mut Vec<City>, stat: Statistic) {\n    cities.sort_by_key(|city| -city.get_statistic(stat));\n}\n")),(0,a.kt)("h3",{id:"\u6240\u6709\u6a29\u3092\u79fb\u52d5\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3"},"\u6240\u6709\u6a29\u3092\u79fb\u52d5\u3059\u308b\u30af\u30ed\u30fc\u30b8\u30e3"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"move")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u3064\u3051\u308b\u3053\u3068\u3067\u3001\u6240\u6709\u6a29\u3092\u79fb\u52d5\u3055\u305b\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::thread;\n\nfn start_sorting_thread(mut cities: Vec<City>, stat: Statistic)\n    -> thread::JoinHandle<Vec<City>>\n{\n    let key_fn = move |city: &City| -> i64 { -city.get_statistic(stat) };\n    thread::spawn(move || {\n        cities.sort_by_key(key_fn);\n        cities\n    })\n}\n")),(0,a.kt)("h3",{id:"\u30ad\u30e3\u30d7\u30c1\u30e3\u3092\u4f7f\u3046\u305f\u3081\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3"},"\u30ad\u30e3\u30d7\u30c1\u30e3\u3092\u4f7f\u3046\u305f\u3081\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306e\u885d\u7a81\u3092\u6e1b\u3089\u3059\u305f\u3081\u306b ",(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/marker/trait.Copy.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Copy"))," \u30c8\u30ec\u30a4\u30c8\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7a7a\u9593\u3092\u8d77\u6e90\u3068\u3059\u308b\u5024\u306b\u306f\u3001\u9759\u7684\u306a\u30e9\u30a4\u30d5\u30bf\u30a4\u30e0\u3092\u6301\u305f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u3055\u308c\u305f\u30b5\u30d6\u30b9\u30ec\u30c3\u30c9\u306f\u3001\u89aa\u30b9\u30ec\u30c3\u30c9\u3088\u308a\u3082\u9577\u751f\u304d\u3059\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u304b\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"move")," \u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u6240\u6709\u6a29\u3092\u30b5\u30d6\u30b9\u30ec\u30c3\u30c9\u306b\u6e21\u3059\u3079\u304d\u3002")),(0,a.kt)("h2",{id:"\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u578b"},"\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u578b"),(0,a.kt)("p",null,"\u30af\u30ed\u30fc\u30b8\u30e3\u3092\u8868\u3059\u578b\u306f3\u3064\u3042\u308a\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/ops/trait.Fn.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Fn()"))," \u2014 \u74b0\u5883\u304b\u3089\u5024\u3092",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u5909\u3067\u501f\u7528"),"\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/ops/trait.FnMut.html"},(0,a.kt)("inlineCode",{parentName:"a"},"FnMut()"))," \u2014 \u74b0\u5883\u304b\u3089\u5024\u3092",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u5909\u3067\u501f\u7528"),"\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/ops/trait.FnOnce.html"},(0,a.kt)("inlineCode",{parentName:"a"},"FnOnce()"))," \u2014 \u74b0\u5883\u304b\u3089\u5024\u306e\u6240\u6709\u6a29\u3092",(0,a.kt)("strong",{parentName:"li"},"\u79fb\u52d5"),"\u3057\u307e\u3059\u3002\u5f93\u3063\u3066\u30011\u56de\u3057\u304b\u547c\u3073\u51fa\u305b\u307e\u305b\u3093\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Fn()")," \u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut()")," \u306e\u30b5\u30d6\u30c8\u30ec\u30a4\u30c8\u3068\u306a\u3063\u3066\u304a\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut()")," \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce()")," \u306e\u30b5\u30d6\u30c8\u30ec\u30a4\u30c8\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Fn")," \u306f\u6700\u3082\u9650\u5b9a\u7684\u3067\u3001\u6700\u3082\u5f37\u529b\u306a\u7a2e\u985e\u306e\u30af\u30ed\u30fc\u30b8\u30e3\u3067\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce")," \u306f\u30ab\u30c6\u30b4\u30ea\u3068\u3057\u3066\u306f\u5e83\u304f\u3001\u5229\u7528\u65b9\u6cd5\u304c\u5236\u9650\u3055\u308c\u308b\u30af\u30ed\u30fc\u30b8\u30e3\u3068\u306a\u308a\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);