"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,k=c["".concat(p,".").concat(h)]||c[h]||m[h]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/rust-crate-anyhow",sidebar_label:"anyhow"},i="\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 anyhow",o={unversionedId:"technology/rust/crates/rust-crate-anyhow",id:"technology/rust/crates/rust-crate-anyhow",title:"\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 anyhow",description:"anyhow \u306f\u3001\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001\u7570\u306a\u308b\u578b\u306e\u30a8\u30e9\u30fc\u3092\u7c21\u5358\u306b\u307e\u3068\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/notes/technology/rust/crates/rust-crate-anyhow.md",sourceDirName:"technology/rust/crates",slug:"/rust-crate-anyhow",permalink:"/notes/rust-crate-anyhow",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/crates/rust-crate-anyhow.md",tags:[],version:"current",frontMatter:{slug:"/rust-crate-anyhow",sidebar_label:"anyhow"},sidebar:"tutorialSidebar",previous:{title:"actix_web",permalink:"/notes/rust-crates-actix_web"},next:{title:"thiserror",permalink:"/notes/rust-crate-thiserror"}},p={},u=[{value:"\u516c\u958b\u30e1\u30f3\u30d0\u30fc",id:"\u516c\u958b\u30e1\u30f3\u30d0\u30fc",level:2},{value:"Tips",id:"tips",level:2},{value:"<code>Result</code> \u306e\u5909\u66f4",id:"result-\u306e\u5909\u66f4",level:3},{value:"\u30a8\u30e9\u30fc\u5024\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30a8\u30e9\u30fc\u5024\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\u30a8\u30e9\u30fc\u3092\u30ea\u30bf\u30fc\u30f3\u3059\u308b",id:"\u30a8\u30e9\u30fc\u3092\u30ea\u30bf\u30fc\u30f3\u3059\u308b",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rust\u30af\u30ec\u30fc\u30c8-anyhow"},"\u3010Rust\u3011\u30af\u30ec\u30fc\u30c8 ",(0,r.kt)("inlineCode",{parentName:"h1"},"anyhow")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/anyhow"},(0,r.kt)("inlineCode",{parentName:"a"},"anyhow"))," \u306f\u3001\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3001**\u7570\u306a\u308b\u578b\u306e\u30a8\u30e9\u30fc\u3092\u7c21\u5358\u306b\u307e\u3068\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u516c\u958b\u30e1\u30f3\u30d0\u30fc"},"\u516c\u958b\u30e1\u30f3\u30d0\u30fc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u518d\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format_err")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/macro.anyhow.html"},(0,r.kt)("inlineCode",{parentName:"a"},"anyhow"))," \u30de\u30af\u30ed\u306e\u5225\u540d\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u30de\u30af\u30ed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/macro.anyhow.html"},(0,r.kt)("inlineCode",{parentName:"a"},"anyhow"))," \u2014 \u6587\u5b57\u5217\u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"anyhow")," \u3067\u306a\u3044\u30a8\u30e9\u30fc\u304b\u3089\u30a2\u30c9\u30db\u30c3\u30af\u30a8\u30e9\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/macro.bail.html"},(0,r.kt)("inlineCode",{parentName:"a"},"bail"))," \u2014 \u30a8\u30e9\u30fc\u3067\u65e9\u671f\u306b\u30ea\u30bf\u30fc\u30f3\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/macro.ensure.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ensure"))," \u2014 \u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u306a\u3044\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3067\u65e9\u671f\u306b\u30ea\u30bf\u30fc\u30f3\u3057\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u69cb\u9020\u4f53"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/struct.Chain.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain"))," \u2014 \u30bd\u30fc\u30b9\u30a8\u30e9\u30fc\u306e\u30c1\u30a7\u30fc\u30f3\u306e\u30a4\u30c6\u30ec\u30fc\u30bf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/struct.Error.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Error"))," \u2014 \u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u3001\u52d5\u7684\u30a8\u30e9\u30fc\u30bf\u30a4\u30d7\u306e\u30e9\u30c3\u30d1\u30fc\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u30c8\u30ec\u30a4\u30c8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/trait.Context.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Context"))," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," \u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30bd\u30c3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u578b\u5b9a\u7fa9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/anyhow/*/anyhow/type.Result.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Result"))," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"Result<T, Error>"))))),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("h3",{id:"result-\u306e\u5909\u66f4"},(0,r.kt)("inlineCode",{parentName:"h3"},"Result")," \u306e\u5909\u66f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use anyhow::{Context, Result};\n")),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u6a19\u6e96\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," \u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"anyhow::Result")," \u3078\u3068\u62e1\u5f35\u3055\u308c\u307e\u3059\u3002\u6a19\u6e96\u3068\u306e\u9055\u3044\u306f\u3001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result<T, E>")," \u578b\u304c ",(0,r.kt)("inlineCode",{parentName:"li"},"Result<T, E = Error>")," \u3068\u306a\u308a\u3001\u30a8\u30e9\u30fc\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result")," \u306b ",(0,r.kt)("inlineCode",{parentName:"li"},".context()")," \u30e1\u30bd\u30c3\u30c9\u304c\u52a0\u308f\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Result")," \u306b ",(0,r.kt)("inlineCode",{parentName:"li"},".with_context()")," \u30e1\u30bd\u30c3\u30c9\u304c\u52a0\u308f\u308b\u3002")),(0,r.kt)("h3",{id:"\u30a8\u30e9\u30fc\u5024\u3092\u8ffd\u52a0\u3059\u308b"},"\u30a8\u30e9\u30fc\u5024\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"\uff12\u7a2e\u985e\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u308a\u30a8\u30e9\u30fc\u5024\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".context()")," \u2014 \u30a8\u30e9\u30fc\u5024\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".with_context()")," \u2014 \u30a8\u30e9\u30fc\u5024\u3092\u8fd4\u3059\u95a2\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"\u30a8\u30e9\u30fc\u3092\u30ea\u30bf\u30fc\u30f3\u3059\u308b"},"\u30a8\u30e9\u30fc\u3092\u30ea\u30bf\u30fc\u30f3\u3059\u308b"),(0,r.kt)("p",null,"\u305d\u306e\u5834\u3067\u30a8\u30e9\u30fc\u3092\u30ea\u30bf\u30fc\u30f3\u3059\u308b\u305f\u3081\u306e\uff12\u7a2e\u985e\u306e\u30de\u30af\u30ed\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bail!()")," \u2014 \u30a8\u30e9\u30fc\u5024\u3092\u53d7\u3051\u53d6\u308a\u3001\u305d\u306e\u307e\u307e\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'if !has_permission(user, resource) {\n  bail!("{} \u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u62d2\u5426\u3055\u308c\u307e\u3057\u305f", resource);\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ensure!()")," \u2014 \u6761\u4ef6\u3068\u30a8\u30e9\u30fc\u5024\u3092\u53d7\u3051\u53d6\u308a\u3001\u6761\u4ef6\u306b\u5408\u3048\u3070\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ensure!(user == 0, "user 0 \u306e\u307f\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u3059");\n')))))}m.isMDXComponent=!0}}]);