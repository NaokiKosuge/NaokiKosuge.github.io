"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7218],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),h=o(a),d=r,c=h["".concat(i,".").concat(d)]||h[d]||u[d]||p;return a?n.createElement(c,s(s({ref:e},m),{},{components:a})):n.createElement(c,s({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,s=new Array(p);s[0]=h;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,s[1]=l;for(var o=2;o<p;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4139:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const p={slug:"/rust-crate-std-path",sidebar_label:"std::path"},s="\u3010Rust\u3011\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea std::path",l={unversionedId:"technology/rust/crates/rust-crate-std/rust-crate-std-path",id:"technology/rust/crates/rust-crate-std/rust-crate-std-path",title:"\u3010Rust\u3011\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea std::path",description:"std:path \u306f\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30d1\u30b9\u64cd\u4f5c\u306b\u95a2\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",source:"@site/notes/technology/rust/crates/rust-crate-std/rust-crate-std-path.md",sourceDirName:"technology/rust/crates/rust-crate-std",slug:"/rust-crate-std-path",permalink:"/notes/rust-crate-std-path",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/rust/crates/rust-crate-std/rust-crate-std-path.md",tags:[],version:"current",frontMatter:{slug:"/rust-crate-std-path",sidebar_label:"std::path"},sidebar:"tutorialSidebar",previous:{title:"std::ops",permalink:"/notes/rust-crate-std-ops"},next:{title:"std::sync",permalink:"/notes/rust-crate-std-sync"}},i={},o=[{value:"\u7c21\u5358\u306a\u4f7f\u3044\u65b9",id:"\u7c21\u5358\u306a\u4f7f\u3044\u65b9",level:2}],m={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rust\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea-stdpath"},"\u3010Rust\u3011\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea ",(0,r.kt)("inlineCode",{parentName:"h1"},"std::path")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/path/"},(0,r.kt)("inlineCode",{parentName:"a"},"std:path"))," \u306f\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30d1\u30b9\u64cd\u4f5c\u306b\u95a2\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3001\u30d1\u30b9\u3092\u62bd\u8c61\u7684\u306b\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"PathBuf")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"Path"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," \u306b\u985e\u4f3c\uff09\u306e2\u3064\u306e\u30bf\u30a4\u30d7\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30bf\u30a4\u30d7\u306f\u3001\u305d\u308c\u305e\u308c ",(0,r.kt)("inlineCode",{parentName:"p"},"OsString")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"OsStr")," \u306e\u8584\u3044\u30e9\u30c3\u30d1\u30fc\u3067\u3059\u3002\u3064\u307e\u308a\u3001\u30ed\u30fc\u30ab\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30d1\u30b9\u69cb\u6587\u306b\u5f93\u3063\u3066\u6587\u5b57\u5217\u3092\u76f4\u63a5\u51e6\u7406\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Path")," \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," \u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u8fd4\u3055\u308c\u308b\u69cb\u9020\u3092\u53cd\u5fa9\u51e6\u7406\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," \u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," \u306b\u89e3\u6790\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30d1\u30b9\u533a\u5207\u308a\u6587\u5b57\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),"\uff09\u9593\u306e\u30b5\u30d6\u30b9\u30c8\u30ea\u30f3\u30b0\u306b\u307b\u307c\u5bfe\u5fdc\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PathBuf")," \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u540c\u7b49\u306e\u30d1\u30b9\u3092\u518d\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e1\u30bd\u30c3\u30c9\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u6b63\u898f\u5316\u306b\u3088\u3063\u3066\u3001\u30d1\u30b9\u304c\u69cb\u6587\u7684\u306b\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u69cb\u9020\u4f53"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Ancestors.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Ancestors"))," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Path"))," \u3068\u305d\u306e\u7956\u5148\u306e\u30a4\u30c6\u30ec\u30fc\u30bf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Components.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Components"))," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Path"))," \u306e ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/enum.Component.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))," \u306b\u5bfe\u3059\u308b\u30a4\u30c6\u30ec\u30fc\u30bf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Display.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Display"))," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/macro.format.html"},(0,r.kt)("inlineCode",{parentName:"a"},"format!"))," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," \u3092\u4f7f\u7528\u3057\u3066\u30d1\u30b9\u3092\u5b89\u5168\u306b\u5370\u5237\u3059\u308b\u305f\u3081\u306e\u30d8\u30eb\u30d1\u30fc\u69cb\u9020\u4f53\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Iter.html"},(0,r.kt)("inlineCode",{parentName:"a"},"iter"))," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/ffi/struct.OsStr.html"},(0,r.kt)("inlineCode",{parentName:"a"},"OsStr"))," \u30b9\u30e9\u30a4\u30b9\u3068\u3057\u3066\u306e ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Path"))," \u306e ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/enum.Component.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))," \u306b\u5bfe\u3059\u308b\u30a4\u30c6\u30ec\u30fc\u30bf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Path"))," \u2014 \u30d1\u30b9\u306e\u30b9\u30e9\u30a4\u30b9\uff08",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/primitive.str.html"},(0,r.kt)("inlineCode",{parentName:"a"},"str"))," \u306b\u4f3c\u3066\u3044\u307e\u3059\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.PathBuf.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PathBuf"))," \u2014 \u6240\u6709\u3055\u308c\u305f\u53ef\u5909\u30d1\u30b9\uff08",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/string/struct.String.html"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," \u306b\u985e\u4f3c\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.PrefixComponent.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PrefixComponent"))," \u2014 Windows \u30d1\u30b9\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u305d\u306e\u672a\u89e3\u6790\u306e\u6587\u5b57\u5217\u8868\u73fe\u3092\u30e9\u30c3\u30d7\u3059\u308b\u69cb\u9020\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.StripPrefixError.html"},(0,r.kt)("inlineCode",{parentName:"a"},"StripPrefixError"))," \u2014 \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u3001",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/struct.Path.html#method.strip_prefix"},(0,r.kt)("inlineCode",{parentName:"a"},"Path::strip_prefix"))," \u304b\u3089\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3057\u305f\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u5217\u6319\u578b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/enum.Component.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))," \u2014 \u30d1\u30b9\u306e\u5358\u4e00\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/enum.Prefix.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Prefix"))," \u2014 Windows\u30d1\u30b9\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\uff08\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"C:")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"\\\\server\\share"),"\uff09\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u5b9a\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/constant.MAIN_SEPARATOR.html"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIN_SEPARATOR"))," \u2014 \u73fe\u5728\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30d1\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30e9\u30a4\u30de\u30ea\u30bb\u30d1\u30ec\u30fc\u30bf\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u95a2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/path/fn.is_separator.html"},(0,r.kt)("inlineCode",{parentName:"a"},"is_separator"))," \u2014 \u6587\u5b57\u304c\u73fe\u5728\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u30d1\u30b9\u533a\u5207\u308a\u6587\u5b57\u306e1\u3064\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u5225\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",{id:"\u7c21\u5358\u306a\u4f7f\u3044\u65b9"},"\u7c21\u5358\u306a\u4f7f\u3044\u65b9"),(0,r.kt)("p",null,"\u30d1\u30b9\u64cd\u4f5c\u306b\u306f\u3001\u30b9\u30e9\u30a4\u30b9\u304b\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u89e3\u6790\u3068\u3001\u65b0\u3057\u3044\u6240\u6709\u30d1\u30b9\u306e\u69cb\u7bc9\u306e\u4e21\u65b9\u304c\u542b\u307e\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d1\u30b9\u3092\u89e3\u6790\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"str")," \u30b9\u30e9\u30a4\u30b9\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," \u30b9\u30e9\u30a4\u30b9\u3092\u4f5c\u6210\u3057\u3001\u8cea\u554f\u3092\u958b\u59cb\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::path::Path;\nuse std::ffi::OsStr;\n\nlet path = Path::new("/tmp/foo/bar.txt");\n\nlet parent = path.parent();\nassert_eq!(parent, Some(Path::new("/tmp/foo")));\n\nlet file_stem = path.file_stem();\nassert_eq!(file_stem, Some(OsStr::new("bar")));\n\nlet extension = path.extension();\nassert_eq!(extension, Some(OsStr::new("txt")));\n')),(0,r.kt)("p",null,"\u30d1\u30b9\u3092\u4f5c\u6210\u307e\u305f\u306f\u5909\u66f4\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"PathBuf")," \u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::path::PathBuf;\n\n// This way works...\nlet mut path = PathBuf::from("c:\\\\");\n\npath.push("windows");\npath.push("system32");\n\npath.set_extension("dll");\n\n// ... but push is best used if you don\'t know everything up\n// front. If you do, this way is better:\nlet path: PathBuf = ["c:\\\\", "windows", "system32.dll"].iter().collect();\n')))}u.isMDXComponent=!0}}]);