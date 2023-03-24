"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>N,kt:()=>u});var s=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var n=s.createContext({}),L=function(e){var t=s.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):M(M({},t),e)),a},N=function(e){var t=L(e.components);return s.createElement(n.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},r=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,n=e.parentName,N=w(e,["components","mdxType","originalType","parentName"]),r=L(a),u=i,b=r["".concat(n,".").concat(u)]||r[u]||m[u]||l;return a?s.createElement(b,M(M({ref:t},N),{},{components:a})):s.createElement(b,M({ref:t},N))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,M=new Array(l);M[0]=r;var w={};for(var n in t)hasOwnProperty.call(t,n)&&(w[n]=t[n]);w.originalType=e,w.mdxType="string"==typeof e?e:i,M[1]=w;for(var L=2;L<l;L++)M[L]=a[L];return s.createElement.apply(null,M)}return s.createElement.apply(null,a)}r.displayName="MDXCreateElement"},3127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>M,default:()=>m,frontMatter:()=>l,metadata:()=>w,toc:()=>L});var s=a(7462),i=(a(7294),a(3905));const l={sidebar_position:0,slug:"/wasm",sidebar_label:"WebAssembly"},M="WebAssembly",w={unversionedId:"technology/web/wasm/wasm",id:"technology/web/wasm/wasm",title:"WebAssembly",description:"WebAssembly \u306f\u30b9\u30bf\u30c3\u30af\u30de\u30b7\u30f3\u7528\u306e\u4eee\u60f3\u547d\u4ee4\u30bb\u30c3\u30c8\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\uff08Virtual ISA\uff09\u3067\u3059\u3002JavaScript \u3092\u88dc\u5b8c\u3001\u4e26\u884c\u3057\u3066\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u540d\u524d\u3068\u306f\u88cf\u8179\u306b\u3001Web \u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001Web \u30d6\u30e9\u30a6\u30b6\u4ee5\u5916\u3067\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/notes/technology/web/wasm/wasm.md",sourceDirName:"technology/web/wasm",slug:"/wasm",permalink:"/notes/wasm",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/web/wasm/wasm.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/wasm",sidebar_label:"WebAssembly"},sidebar:"tutorialSidebar",previous:{title:"Web",permalink:"/notes/web"},next:{title:"AssemblyScript",permalink:"/notes/assemblyscript"}},n={},L=[{value:"2\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\uff1bWAT \u3068 WASM",id:"2\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0fwat-\u3068-wasm",level:2},{value:"<code>WebAssembly</code> API (JavaScript)",id:"webassembly-api-javascript",level:2},{value:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb",id:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb",level:3},{value:"\u7d44\u307f\u8fbc\u307f\u74b0\u5883",id:"\u7d44\u307f\u8fbc\u307f\u74b0\u5883",level:2},{value:"WABT",id:"wabt",level:2},{value:"\u958b\u767a\u8a00\u8a9e",id:"\u958b\u767a\u8a00\u8a9e",level:2},{value:"\u95a2\u9023\u3059\u308b\u5916\u90e8\u30ea\u30f3\u30af",id:"\u95a2\u9023\u3059\u308b\u5916\u90e8\u30ea\u30f3\u30af",level:2}],N={toc:L};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,s.Z)({},N,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webassembly"},"WebAssembly"),(0,i.kt)("figure",null,(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6733).Z,width:"303",height:"157"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WebAssembly")," \u306f\u30b9\u30bf\u30c3\u30af\u30de\u30b7\u30f3\u7528\u306e",(0,i.kt)("strong",{parentName:"p"},"\u4eee\u60f3\u547d\u4ee4\u30bb\u30c3\u30c8\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\uff08Virtual ISA\uff09\u3067\u3059\u3002JavaScript \u3092\u88dc\u5b8c\u3001\u4e26\u884c\u3057\u3066\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u540d\u524d\u3068\u306f\u88cf\u8179\u306b\u3001Web \u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001Web \u30d6\u30e9\u30a6\u30b6\u4ee5\u5916\u3067\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{title:"ISA",type:"info"},(0,i.kt)("abbr",{title:"Instruction Set Architecture"},"ISA")," \u3068\u306f\u3001\u7279\u5b9a\u306e\u30de\u30b7\u30f3\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u8a2d\u8a08\u3055\u308c\u305f",(0,i.kt)("strong",null,"\u30d0\u30a4\u30ca\u30ea\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),"\u306e\u3053\u3068\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"2\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0fwat-\u3068-wasm"},"2\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\uff1bWAT \u3068 WASM"),(0,i.kt)("p",null,"\u4e92\u3044\u306b1\u5bfe1\u3067\u5bfe\u5fdc\u3059\u308b2\u3064\u306e ",(0,i.kt)("em",{parentName:"p"},"\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f")," \u304c\u3042\u308a\u307e\u3059\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/notes/wasm-wat"},"WAT")),(0,i.kt)("p",{parentName:"li"},"WebAssembly \u306e\u30c6\u30ad\u30b9\u30c8\u8868\u73fe\u3067\u3001\u62e1\u5f35\u5b50 ",(0,i.kt)("inlineCode",{parentName:"p"},".wat")," \u304c\uff0d\uff0d\u5834\u5408\u306b\u3088\u3063\u3066\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},".wast")," \u3082\uff0d\uff0d\u4f7f\u308f\u308c\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WASM"),(0,i.kt)("p",{parentName:"li"},"WebAssembly \u306e\u30d0\u30a4\u30ca\u30ea\u8868\u73fe\u3067\u3001\u62e1\u5f35\u5b50 ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," \u304c\u4f7f\u308f\u308c\u307e\u3059\u3002"))),(0,i.kt)("h2",{id:"webassembly-api-javascript"},(0,i.kt)("inlineCode",{parentName:"h2"},"WebAssembly")," API (JavaScript)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly"},(0,i.kt)("inlineCode",{parentName:"a"},"WebAssembly"))," \u306f JavaScript \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3001 WebAssembly \u306b\u95a2\u3059\u308b\u3059\u3079\u3066\u306e\u6a5f\u80fd\u306e\u540d\u524d\u7a7a\u9593\u306e\u5f79\u5272\u3092\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WebAssembly")," \u2013 WebAssembly \u540d\u524d\u7a7a\u9593",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CompileError()")," \u2013 \u30c7\u30b3\u30fc\u30c9\u3084\u691c\u8a3c\u306e\u9593\u306e\u30a8\u30e9\u30fc\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Global()")," \u2013 \u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8868\u3059\u65b0\u3057\u3044 ",(0,i.kt)("inlineCode",{parentName:"li"},"Global")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instance()")," \u2013 ",(0,i.kt)("strong",{parentName:"li"},"\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb"),"\u3067\u3001\u5b9f\u884c\u53ef\u80fd\u306a WebAssembly.Module \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LinkError()")," \u2013 \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u521d\u671f\u5316\u6642\u306b\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory()")," \u2013 \u751f\u306e\u30d0\u30a4\u30c8\u5217\u306e\u30e1\u30e2\u30ea\u30fc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Module()")," \u2013 \u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f",(0,i.kt)("strong",{parentName:"li"},"\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9"),"\u306a WebAssembly \u30b3\u30fc\u30c9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeError()")," \u2013 WebAssembly \u304c\u30c8\u30e9\u30c3\u30d7\u3092\u6307\u5b9a\u3059\u308b\u305f\u3073\u306b\u4f8b\u5916\u3068\u3057\u3066\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Table()")," \u2013 \u95a2\u6570\u306e\u53c2\u7167\u3092\u683c\u7d0d\u3059\u308b WebAssembly Table \u3092\u8868\u3059\u914d\u5217\u98a8\u306e\u69cb\u9020"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u9759\u7684\u30e1\u30bd\u30c3\u30c9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instantiate()")," \u2013 WebAssembly \u30b3\u30fc\u30c9\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instantiateStreaming()")," \u2013 \u30bd\u30fc\u30b9\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u304b\u3089\u76f4\u63a5 WebAssembly \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compile()")," \u2013 WebAssembly \u30d0\u30a4\u30ca\u30ea\u30b3\u30fc\u30c9\u304b\u3089 ",(0,i.kt)("inlineCode",{parentName:"li"}," WebAssembly.Module")," \u3078\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compileStreaming()")," \u2013 WebAssembly \u30bd\u30fc\u30b9\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u304b\u3089\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"li"},"WebAssembly.Module")," \u3078\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validate()")," \u2013 WebAssembly \u30d0\u30a4\u30ca\u30ea\u30b3\u30fc\u30c9\u306e\u578b\u4ed8\u304d\u914d\u5217\u304b\u3089\u6709\u52b9\u306a WebAssembly \u30b3\u30fc\u30c9\u304b\u691c\u8a3c\u3059\u308b")))))),(0,i.kt)("h3",{id:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb"},"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u4f8b\uff1a.wasm \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"',title:'"\u4f8b\uff1a.wasm','\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"':!0},"// WASM \u30d0\u30a4\u30ca\u30ea\u30b3\u30fc\u30c9\nconst wasmCode = new Uint8Array([\n  0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,\n  3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,\n  5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,\n  128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,\n  105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,\n  65, 42, 11\n]);\n\n// WASM \u30e2\u30b8\u30e5\u30fc\u30eb (\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9)\nconst wasmModule = new WebAssembly.Module(wasmCode);\n\n// WASM \u30e2\u30b8\u30e5\u30fc\u30eb\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9 (\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb)\nconst wasmInstance = new WebAssembly.Instance(wasmModule);\n\n// WASM \u30e2\u30b8\u30e5\u30fc\u30eb\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u305f\u95a2\u6570\nconst main = wasmInstance.exports.main as CallableFunction;\nconsole.log(main().toString());\n")),(0,i.kt)("h2",{id:"\u7d44\u307f\u8fbc\u307f\u74b0\u5883"},"\u7d44\u307f\u8fbc\u307f\u74b0\u5883"),(0,i.kt)("p",null,"WebAssembly \u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3067\u76f4\u63a5\u5b9f\u884c\u3059\u308b\u3082\u306e\u3067\u306f\u306a\u3044\u305f\u3081\u3001WebAssembly \u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u3068\u521d\u671f\u5316\u3092\u5236\u5fa1\u3059\u308b\u30db\u30b9\u30c8\u74b0\u5883\u306b WebAssembly \u30d0\u30a4\u30ca\u30ea\u3092\u7d44\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Web \u30d6\u30e9\u30a6\u30b6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("abbr",{title:"WebAssembly System Interface"},"WASI")," \u2013 WebAssembly \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u4ed5\u69d8\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasmtime.dev/"},"wasmtime")," \u2013 Mozilla Foundation \u88fd\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VSCode \u306e ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dtsvet.vscode-wasm"},"WebAssembly")," \u62e1\u5f35\u6a5f\u80fd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Node.js \u306e ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wat-wasm/"},"wat-wasm")," \u30e2\u30b8\u30e5\u30fc\u30eb"))),(0,i.kt)("h2",{id:"wabt"},"WABT"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/webassembly/wabt"},(0,i.kt)("abbr",{title:"The WebAssembly Binary Toolkit"},"WABT"))," \u306f\u3001WebAssembly \u7528\u30c4\u30fc\u30eb\u30b9\u30a4\u30fc\u30c8\u3067\u3059\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wat2wasm.1.html"},"wat2wasm")," \u2013 WebAssembly \u30c6\u30ad\u30b9\u30c8\u5f62\u5f0f\u304b\u3089 WebAssembly \u30d0\u30a4\u30ca\u30ea\u5f62\u5f0f\u306b\u5909\u63db\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm2wat.1.html"},"wasm2wat")," \u2013 wat2wasm \u306e\u9006\u3067\u3001\u30d0\u30a4\u30ca\u30ea\u5f62\u5f0f\u304b\u3089\u30c6\u30ad\u30b9\u30c8\u5f62\u5f0f\uff08",(0,i.kt)("inlineCode",{parentName:"li"},".wat")," \u3068\u3082\u547c\u3070\u308c\u307e\u3059\uff09\u306b\u5909\u63db\u3057\u76f4\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-objdump.1.html"},"wasm-objdump")," \u2013 wasm \u30d0\u30a4\u30ca\u30ea\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u51fa\u529b\u3057\u307e\u3059\u3002objdump \u306b\u4f3c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-interp.1.html"},"wasm-interp")," \u2013 \u30b9\u30bf\u30c3\u30af\u30d9\u30fc\u30b9\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001WebAssembly \u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-decompile.1.html"},"wasm-decompile")," \u2013 wasm \u30d0\u30a4\u30ca\u30ea\u3092\u8aad\u307f\u53d6\u308a\u53ef\u80fd\u306a C \u306e\u3088\u3046\u306a\u69cb\u6587\u306b\u9006\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wat-desugar.1.html"},"wat-desugar")," \u2013 \u30b9\u30da\u30c3\u30af\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\uff08S\u5f0f\u3001\u30d5\u30e9\u30c3\u30c8\u69cb\u6587\u3001\u307e\u305f\u306f\u6df7\u5408\uff09\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b ",(0,i.kt)("inlineCode",{parentName:"li"},".wat")," \u30c6\u30ad\u30b9\u30c8\u5f62\u5f0f\u3092\u89e3\u6790\u3057\u3001\u300c\u6b63\u898f\u306e\u300d\u30d5\u30e9\u30c3\u30c8\u5f62\u5f0f\u3092\u51fa\u529b\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm2c.1.html"},"wasm2c")," \u2013 WebAssembly \u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u3092 C \u30bd\u30fc\u30b9\u3068\u30d8\u30c3\u30c0\u30fc\u306b\u5909\u63db\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-strip.1.html"},"wasm-strip")," \u2013 WebAssembly \u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u524a\u9664\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-validate.1.html"},"wasm-validate")," \u2013 WebAssembly \u30d0\u30a4\u30ca\u30ea\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u691c\u8a3c\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wast2json.1.html"},"wast2json")," \u2013 wasm \u4ed5\u69d8\u30c6\u30b9\u30c8\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092 JSON \u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u95a2\u9023\u3059\u308b wasm \u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/wasm-opcodecnt.1.html"},"wasm-opcodecnt")," \u2013 \u547d\u4ee4\u306e\u30aa\u30da\u30b3\u30fc\u30c9\u4f7f\u7528\u91cf\u3092\u30ab\u30a6\u30f3\u30c8\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.github.io/wabt/doc/spectest-interp.1.html"},"spectest-interp")," \u2013 Spectest JSON \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u53d6\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u3067\u305d\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059")),(0,i.kt)("h2",{id:"\u958b\u767a\u8a00\u8a9e"},"\u958b\u767a\u8a00\u8a9e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/book/introduction.html"},"rust-wasm")," \u2013 Rust"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://emscripten.org/"},"Emscripten")," \u2013 C/C++"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.assemblyscript.org/"},"AssemblyScript")," \u2013 A TypeScript-like language for WASM")),(0,i.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u5916\u90e8\u30ea\u30f3\u30af"},"\u95a2\u9023\u3059\u308b\u5916\u90e8\u30ea\u30f3\u30af"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"webassembly.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly"},"WebAssembly \xb7 GitHub"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/wabt"},"wabt")," \u2013 WebAssembly \u7528\u30c4\u30fc\u30eb\u30b9\u30a4\u30fc\u30c8"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ja/docs/WebAssembly"},"WebAssembly | MDN")," \u2013 Mozilla \u306b\u3088\u308b\u958b\u767a\u8005\u5411\u3051\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/wasm/"},"WebAssembly Working Group")," \u2013 W3C \u30ef\u30fc\u30ad\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/community/webassembly/"},"WEBASSEMBLY COMMUNITY GROUP")," \u2013 \u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30b0\u30eb\u30fc\u30d7")))))}m.isMDXComponent=!0},6733:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDIuNjkgMTU3LjAzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMzkzOTM5OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICM2NTRmZjA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0aXRsZT53ZWItYXNzZW1ibHktbG9nbzwvdGl0bGU+CiAgPGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+CiAgICA8ZyBpZD0iTm90Y2hfLV9QdXJwbGUiIGRhdGEtbmFtZT0iTm90Y2ggLSBQdXJwbGUiPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNywxNTYuNjhIMjIuNDFsLTQuMzQtMTUuMjRxLS4yOC0xLS43LTIuODh0LS41MS0yLjYxcS0uMTgsMS4xMi0uNTcsMi45dC0uNjYsMi42NmwtNC4yMywxNS4xN0g2Ljg3bC0zLjMtMTIuOEwuMjEsMTMxLjEySDQuNDhMOC4xMywxNDZhNjQuMjQsNjQuMjQsMCwwLDEsMS4yMiw2LjMzcS4xOS0xLjQ5LjU4LTMuMzJ0LjctM2w0LjE2LTE0LjkzaDQuMTRsNC4yNywxNWE1Ni4xMiw1Ni4xMiwwLDAsMSwxLjI5LDYuMjJBNDUuNTgsNDUuNTgsMCwwLDEsMjUuNzUsMTQ2bDMuNjQtMTQuODZoNC4yM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxKSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0LjkxLDE1Ni42OEg0MC40NlYxMzEuMTJINTQuOTF2My41M0g0NC42M3Y3aDkuNjN2My41SDQ0LjYzdjhINTQuOTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02My42NiwxMzEuMTJoNy41OXE1LjI4LDAsNy42MywxLjU0YTUuMzksNS4zOSwwLDAsMSwyLjM1LDQuODYsNS44OSw1Ljg5LDAsMCwxLTEuMTUsMy43Miw1LjE2LDUuMTYsMCwwLDEtMy4zMiwxLjg3di4xN2E2LjYsNi42LDAsMCwxLDQsMiw2LjA2LDYuMDYsMCwwLDEsMS4yNyw0LDYuNTYsNi41NiwwLDAsMS0yLjQsNS4zOSwxMC4zNCwxMC4zNCwwLDAsMS02LjY5LDEuOTVINjMuNjZabTQuMTgsMTAuNTZoNGE2Ljg4LDYuODgsMCwwLDAsMy44My0uODNBMy4xOCwzLjE4LDAsMCwwLDc2Ljg5LDEzOGEyLjgzLDIuODMsMCwwLDAtMS4zLTIuNiw4LjE0LDguMTQsMCwwLDAtNC4xMy0uOEg2Ny44NFptMCwzLjM5djguMDloNC40NGE2LjU0LDYuNTQsMCwwLDAsNC0xQTMuNzEsMy43MSwwLDAsMCw3Ny41NywxNDlhMy4zNywzLjM3LDAsMCwwLTEuMzYtMyw3LjIyLDcuMjIsMCwwLDAtNC4xNC0xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEpIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA4Ljg3LDE1Ni42OGwtMy4xOC04LjEzSDk1LjQ0bC0zLjE1LDguMTNoLTNMOTkuMzksMTMxaDIuNWwxMC4wNSwyNS42NlptLTQuMTEtMTAuOC0zLTcuOTJxLS41OC0xLjUtMS4xOS0zLjY5QTMzLjI0LDMzLjI0LDAsMCwxLDk5LjUsMTM4bC0zLDcuOTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzUuMjUsMTQ5Ljg4YTYuMjcsNi4yNywwLDAsMS0yLjQ1LDUuMjYsMTAuNjEsMTAuNjEsMCwwLDEtNi42NCwxLjg5LDE2LjY0LDE2LjY0LDAsMCwxLTctMS4xN1YxNTNhMTguMzMsMTguMzMsMCwwLDAsMy40MywxLDE4LDE4LDAsMCwwLDMuNjcuMzgsNy40MSw3LjQxLDAsMCwwLDQuNDgtMS4xMywzLjcsMy43LDAsMCwwLDEuNS0zLjE0LDQsNCwwLDAsMC0uNTMtMi4xOCw1LDUsMCwwLDAtMS43OC0xLjU3LDI0LjkyLDI0LjkyLDAsMCwwLTMuOC0xLjYyLDEyLjE0LDEyLjE0LDAsMCwxLTUuMS0zLDYuNjgsNi42OCwwLDAsMS0xLjUzLTQuNTYsNS42Nyw1LjY3LDAsMCwxLDIuMjItNC43LDkuMjMsOS4yMywwLDAsMSw1Ljg3LTEuNzUsMTcuMzEsMTcuMzEsMCwwLDEsNywxLjRsLS45MywyLjU5YTE1Ljg0LDE1Ljg0LDAsMCwwLTYuMTUtMS4zMyw2LDYsMCwwLDAtMy42OSwxLDMuMzQsMy4zNCwwLDAsMC0xLjMzLDIuODEsNC4zMSw0LjMxLDAsMCwwLC40OSwyLjE4LDQuNiw0LjYsMCwwLDAsMS42NSwxLjU2LDIwLjQ4LDIwLjQ4LDAsMCwwLDMuNTYsMS41NywxNC4wOCwxNC4wOCwwLDAsMSw1LjUzLDMuMDhBNi4wNSw2LjA1LDAsMCwxLDEzNS4yNSwxNDkuODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjAuMjcsMTQ5Ljg4YTYuMjcsNi4yNywwLDAsMS0yLjQ1LDUuMjYsMTAuNjEsMTAuNjEsMCwwLDEtNi42NCwxLjg5LDE2LjY0LDE2LjY0LDAsMCwxLTctMS4xN1YxNTNhMTguMzMsMTguMzMsMCwwLDAsMy40MywxLDE4LDE4LDAsMCwwLDMuNjcuMzgsNy40MSw3LjQxLDAsMCwwLDQuNDgtMS4xMywzLjcsMy43LDAsMCwwLDEuNS0zLjE0LDQsNCwwLDAsMC0uNTMtMi4xOCw1LDUsMCwwLDAtMS43OC0xLjU3LDI0LjkyLDI0LjkyLDAsMCwwLTMuOC0xLjYyLDEyLjE0LDEyLjE0LDAsMCwxLTUuMS0zLDYuNjgsNi42OCwwLDAsMS0xLjUzLTQuNTYsNS42Nyw1LjY3LDAsMCwxLDIuMjItNC43LDkuMjMsOS4yMywwLDAsMSw1Ljg3LTEuNzUsMTcuMzEsMTcuMzEsMCwwLDEsNywxLjRsLS45MywyLjU5YTE1Ljg0LDE1Ljg0LDAsMCwwLTYuMTUtMS4zMyw2LDYsMCwwLDAtMy42OSwxLDMuMzQsMy4zNCwwLDAsMC0xLjMzLDIuODEsNC4zMSw0LjMxLDAsMCwwLC40OSwyLjE4LDQuNiw0LjYsMCwwLDAsMS42NSwxLjU2LDIwLjQ4LDIwLjQ4LDAsMCwwLDMuNTYsMS41NywxNC4wOCwxNC4wOCwwLDAsMSw1LjUzLDMuMDhBNi4wNSw2LjA1LDAsMCwxLDE2MC4yNywxNDkuODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODUuMTEsMTU2LjY4SDE3MC44N1YxMzEuMTJoMTQuMjV2Mi42NEgxNzMuODRWMTQyaDEwLjU5djIuNjJIMTczLjg0VjE1NGgxMS4yOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxKSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwNy40NiwxNTYuNjgsMTk4Ljc5LDEzNGgtLjE0cS4yNCwyLjY5LjI1LDYuNHYxNi4yNmgtMi43NFYxMzEuMTJoNC40OGw4LjA5LDIxLjA4aC4xNEwyMTcsMTMxLjEyaDQuNDR2MjUuNTZoLTNWMTQwLjIxcTAtMi44My4yNS02LjE1aC0uMTRsLTguNzQsMjIuNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzMuODQsMTMxLjEyaDcuMjJxNS4wOSwwLDcuMzYsMS41MmE1LjM3LDUuMzcsMCwwLDEsMi4yNyw0LjgxLDUuNTUsNS41NSwwLDAsMS0xLjI3LDMuNzUsNi4xLDYuMSwwLDAsMS0zLjcsMS45MXYuMTdxNS44MiwxLDUuODIsNi4xMmE2LjU3LDYuNTcsMCwwLDEtMi4zMiw1LjM1LDkuODYsOS44NiwwLDAsMS02LjQ4LDEuOTJoLTguOTJabTMsMTAuOTRoNC44OWE4LDgsMCwwLDAsNC41My0xLDMuODEsMy44MSwwLDAsMCwxLjM4LTMuMzMsMy4zNywzLjM3LDAsMCwwLTEuNTQtMy4xLDkuNjEsOS42MSwwLDAsMC00LjktMWgtNC4zN1ptMCwyLjUydjkuNTZoNS4zM2E3LjU5LDcuNTksMCwwLDAsNC42Ni0xLjIsNC40Miw0LjQyLDAsMCwwLDEuNTYtMy43NSw0LDQsMCwwLDAtMS42LTMuNSw4LjU1LDguNTUsMCwwLDAtNC44Ny0xLjEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEpIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjYyLjQxLDE1Ni42OFYxMzEuMTJoM1YxNTRoMTEuMjh2Mi42OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxKSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI5Mi44NiwxNDMuOWw2LjgyLTEyLjc4aDMuMjJsLTguNTMsMTUuNjR2OS45MWgtM3YtOS43N2wtOC41MS0xNS43OWgzLjI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEpIi8+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Imljb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE2My43NiwwYzAsLjE5LDAsLjM4LDAsLjU4YTEyLjM0LDEyLjM0LDAsMCwxLTI0LjY4LDBjMC0uMiwwLS4zOSwwLS41OEg5Ny42NFYxMDcuNjJIMjA1LjI2VjBaTTE0OSw5Ni4xbC01LjI0LTI1LjkzaC0uMDlMMTM4LDk2LjFoLTcuMjJMMTIyLjYsNThoNy4xM2w0Ljg4LDI1LjkzaC4wOUwxNDAuNTgsNThoNi42N2w1LjI4LDI2LjI1aC4wOUwxNTguMTksNThoN0wxNTYuMSw5Ni4xWm0zOS4yNiwwLTIuNDMtOC40OEgxNzNsLTEuODcsOC40OEgxNjRMMTczLjIyLDU4aDExLjI1bDExLjIxLDM4LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yMSkiLz4KICAgICAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTc3LjMgNjcuMzkgMTc0LjE5IDgxLjM3IDE4My44NyA4MS4zNyAxODAuMyA2Ny4zOSAxNzcuMyA2Ny4zOSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"}}]);