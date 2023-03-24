"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.createContext({}),k=function(e){var t=l.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=k(e.components);return l.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),N=k(n),u=a,s=N["".concat(m,".").concat(u)]||N[u]||d[u]||i;return n?l.createElement(s,p(p({ref:t},o),{},{components:n})):l.createElement(s,p({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=N;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:a,p[1]=r;for(var k=2;k<i;k++)p[k]=n[k];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}N.displayName="MDXCreateElement"},8948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>k});var l=n(7462),a=(n(7294),n(3905));const i={slug:"/npmjs",sidebar_label:"npm"},p="npm",r={unversionedId:"technology/javascript/nodejs/npmjs",id:"technology/javascript/nodejs/npmjs",title:"npm",description:"package.json",source:"@site/notes/technology/javascript/nodejs/npmjs.md",sourceDirName:"technology/javascript/nodejs",slug:"/npmjs",permalink:"/notes/npmjs",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/nodejs/npmjs.md",tags:[],version:"current",frontMatter:{slug:"/npmjs",sidebar_label:"npm"},sidebar:"tutorialSidebar",previous:{title:"ECMAScript \u30e2\u30b8\u30e5\u30fc\u30eb",permalink:"/notes/nodejs-esmodule"},next:{title:"PostCSS",permalink:"/notes/postcss"}},m={},k=[{value:"<code>package.json</code>",id:"packagejson",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3",id:"\u30d0\u30fc\u30b8\u30e7\u30f3",level:3},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306e\u63a5\u982d\u8f9e\u3068\u30ad\u30fc\u30ef\u30fc\u30c9",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306e\u63a5\u982d\u8f9e\u3068\u30ad\u30fc\u30ef\u30fc\u30c9",level:4},{value:"\u30ec\u30b8\u30b9\u30c8\u30ea",id:"\u30ec\u30b8\u30b9\u30c8\u30ea",level:2},{value:"\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b\u624b\u9806",id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b\u624b\u9806",level:3},{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08<code>npm install</code>\uff09",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30ebnpm-install",level:3},{value:"\u5b9f\u884c\u53ef\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5b9f\u884c\uff08<code>npx</code>\uff09",id:"\u5b9f\u884c\u53ef\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5b9f\u884cnpx",level:3}],o={toc:k};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npm"},"npm"),(0,a.kt)("figure",{class:"inline-flex bg-white"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3158).Z,width:"540",height:"210"}))),(0,a.kt)("h2",{id:"packagejson"},(0,a.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,a.kt)("h3",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3"},"\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/ja/"},"\u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0 2.0.0")," \u306b\u5f93\u3063\u305f\u66f8\u5f0f\u3067\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u306e\u66f8\u5f0f"',title:'"\u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u306e\u66f8\u5f0f"'},"<\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3>.<\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3>.<\u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3>[-<\u30d7\u30ec\u30ea\u30ea\u30fc\u30b9\u8b58\u5225\u5b50>]\n")),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3")),(0,a.kt)("dd",null,"\u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u4e92\u63db\u6027\u306e\u306a\u3044\uff08\u7834\u58ca\u7684\u306a\uff09\u5909\u66f4\u304c\u52a0\u3048\u3089\u308c\u305f\u3068\u304d"),(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3")),(0,a.kt)("dd",null,"\u4e92\u63db\u6027\u3092\u4fdd\u3063\u305f\u307e\u307e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u305f\u3068\u304d"),(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3")),(0,a.kt)("dd",null,"\u4e92\u63db\u6027\u3092\u4fdd\u3063\u305f\u307e\u307e\u4e0d\u5177\u5408\u3092\u4fee\u6b63\u3057\u305f\u3068\u304d"),(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u30d7\u30ec\u30ea\u30ea\u30fc\u30b9\u8b58\u5225\u5b50")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0-alpha"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0-alpha.1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0-0.3.7"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0-x.7.z.92")))),(0,a.kt)("admonition",{title:"\u958b\u767a\u521d\u671f\u306e\u30d0\u30fc\u30b8\u30e7\u30f3",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30bc\u30ed\u306e\u5834\u5408\u3001\u305d\u308c\u306f\u9ad8\u901f\u958b\u767a\u3092\u610f\u5473\u3057\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u4e0d\u5b89\u5b9a\u306a\u72b6\u614b\u3067\u3059\u3002\u958b\u767a\u958b\u59cb\u6642\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"0.1.0")," \u304b\u3089\u306f\u3058\u3081\u3001\u6b63\u5f0f\u7248\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0")," \u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u308b\u307e\u3067\u306f\u3001\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9806\u6b21\u4e0a\u3052\u3066\u3044\u304f\u3068\u3044\u3044\u3067\u3057\u3087\u3046\u3002")),(0,a.kt)("h4",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306e\u63a5\u982d\u8f9e\u3068\u30ad\u30fc\u30ef\u30fc\u30c9"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306e\u63a5\u982d\u8f9e\u3068\u30ad\u30fc\u30ef\u30fc\u30c9"),(0,a.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u3092\u3059\u308b\u969b\u3001\u63a5\u982d\u8f9e\u3092\u4ed8\u3051\u308b\u3053\u3068\u3067\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u7bc4\u56f2\u3092\u6307\u5b9a\u3057\u307e\u3059\uff1a"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("code",null,"^")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u30ad\u30e3\u30ec\u30c3\u30c8\u300c",(0,a.kt)("inlineCode",{parentName:"p"},"^"),"\u300d\u306f\u3001\u4e92\u63db\u6027\u3092\u793a\u3057\u307e\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8868\u30593\u3064\u306e\u6570\u5b57\uff08",(0,a.kt)("em",{parentName:"p"},"\u30e1\u30b8\u30e3\u30fc"),"\u3001",(0,a.kt)("em",{parentName:"p"},"\u30de\u30a4\u30ca\u30fc"),"\u3001",(0,a.kt)("em",{parentName:"p"},"\u30d1\u30c3\u30c1"),"\uff09\u306e\u3046\u3061\u3001\u6700\u3082\u5de6\u5074\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u3067\u306a\u3044\u6570\u5b57\u304c\u66f4\u65b0\u3055\u308c\u308b\u307e\u3067\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u4f9d\u5b58\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u2026"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"^2.6.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=2.6.3 <3.0.0"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"^0.6.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=0.6.3 <0.7.0"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"^0.0.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=0.0.3 <0.0.4"')," \u306e\u610f\u5473\u3002"))),(0,a.kt)("dt",null,(0,a.kt)("code",null,"~")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u30c1\u30eb\u30c0\u300c",(0,a.kt)("inlineCode",{parentName:"p"},"~"),"\u300d\u306f\u3001\u30d1\u30c3\u30c1\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u66f4\u65b0\u306e\u7bc4\u56f2\u5185\u306b\u4f9d\u5b58\u3092\u9650\u5b9a\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u2026"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"~1.2.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=1.2.3 <1.3.0"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"~0.2.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=0.2.3 <0.3.0"')," \u306e\u610f\u5473\u3002"))),(0,a.kt)("dt",null,(0,a.kt)("code",null,"||")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u30bb\u30c3\u30c8\u3092\u7d44\u307f\u5408\u308f\u305b\u307e\u3059\u3002\u4f8b\u3048\u3070 ",(0,a.kt)("inlineCode",{parentName:"p"},'"< 2.1 || > 2.6"'))),(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u6bd4\u8f03\u6f14\u7b97\u5b50")),(0,a.kt)("dd",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},">"),", ",(0,a.kt)("inlineCode",{parentName:"p"},">="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"="))),(0,a.kt)("dt",null,(0,a.kt)("code",null,"-")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u3055\u307e\u3056\u307e\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u53d7\u3051\u5165\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070 ",(0,a.kt)("inlineCode",{parentName:"p"},'"1.1.0 - 2.6.2"'))),(0,a.kt)("dt",null,(0,a.kt)("em",null,"\u63a5\u982d\u8f9e\u306a\u3057")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u63a5\u982d\u8f9e\u3092\u4ed8\u3051\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u6307\u5b9a\u5185\u5bb9\u3068\u53b3\u5bc6\u306b\u4e00\u81f4\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3001\u305d\u306e\u5834\u5408\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u304c\u88dc\u5b8c\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u2026"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"2.6.3"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'"2.6.3"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"1.1"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=1.1.0 <1.2.0"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"1"')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=1.0.0 <2.0.0"')," \u306e\u610f\u5473\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'""')," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},'">=0.0.0"')," \u306e\u610f\u5473\u3002"))),(0,a.kt)("dt",null,"\u30ad\u30fc\u30ef\u30fc\u30c9 ",(0,a.kt)("code",null,"latest")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,a.kt)("h2",{id:"\u30ec\u30b8\u30b9\u30c8\u30ea"},"\u30ec\u30b8\u30b9\u30c8\u30ea"),(0,a.kt)("h3",{id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b\u624b\u9806"},"\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b\u624b\u9806"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"npm \u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b"),(0,a.kt)("li",{parentName:"ol"},"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f5c\u308b"),(0,a.kt)("li",{parentName:"ol"},"\u5b9f\u88c5\u3059\u308b"),(0,a.kt)("li",{parentName:"ol"},"README \u3092\u66f8\u304f"),(0,a.kt)("li",{parentName:"ol"},"\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u6c7a\u3081\u308b"),(0,a.kt)("li",{parentName:"ol"},"\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u516c\u958b\u5bfe\u8c61\u3068\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u5b9a\u3059\u308b"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm publish")," \u30b3\u30de\u30f3\u30c9\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b")),(0,a.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm")," \u2013 JavaScript \u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access")," \u2013 \u516c\u958b\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30af\u30bb\u30b9\u30ec\u30d9\u30eb\u3092\u8a2d\u5b9a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"adduser")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"audit")," \u2013 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u76e3\u67fb\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bin")," \u2013 npm bin \u30d5\u30a9\u30eb\u30c0\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bugs")," \u2013 Web \u30d6\u30e9\u30a6\u30b6\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30b0\u3092\u5831\u544a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cache")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u64cd\u4f5c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ci")," \u2013 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30ea\u30fc\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"completion")," \u2013 npm\u306e\u30bf\u30d6\u88dc\u5b8c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," \u2013 npm \u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dedupe")," \u2013 \u91cd\u8907\u3092\u6e1b\u3089\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deprecate")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5ec3\u6b62\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"diff")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea diff \u30b3\u30de\u30f3\u30c9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dist-tag")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u914d\u5e03\u30bf\u30b0\u3092\u5909\u66f4\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs")," \u2013 Web \u30d6\u30e9\u30a6\u30b6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doctor")," \u2013 npm \u74b0\u5883\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edit")," \u2013 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u7de8\u96c6\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec")," \u2013 npm \u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"explain")," \u2013 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"explore")," \u2013 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"find-dupes")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u30c4\u30ea\u30fc\u3067\u91cd\u8907\u3092\u898b\u3064\u3051\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fund")," \u2013 \u8cc7\u91d1\u8abf\u9054\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"help")," \u2013 npm \u30d8\u30eb\u30d7\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u691c\u7d22\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"help-search")," \u2013 npm \u3067\u30d8\u30eb\u30d7\u3092\u53d6\u5f97"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hook")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u30d5\u30c3\u30af\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"init")," \u2013 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install-ci-test")," \u2013 ]\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30ea\u30fc\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install-test")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"link")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u30d5\u30a9\u30eb\u30c0\u3092\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logout")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ls")," \u2013 \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30b9\u30c8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"org")," \u2013 \u7d44\u7e54\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"outdated")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u53e4\u304f\u306a\u3063\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u6240\u6709\u8005\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pack")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089 tarball \u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ping")," \u2013 npm \u30ec\u30b8\u30b9\u30c8\u30ea\u306b ping \u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pkg")," \u2013 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u3092\u7ba1\u7406\u3057\u307e\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix")," \u2013 \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prune")," \u2013 \u7121\u95a2\u4fc2\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"publish")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rebuild")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u518d\u69cb\u7bc9\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo")," \u2013 \u30d6\u30e9\u30a6\u30b6\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u30ea\u30dd\u30b8\u30c8\u30ea\u30da\u30fc\u30b8\u3092\u958b\u304f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restart")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u518d\u8d77\u52d5\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root")," \u2013 npm \u30eb\u30fc\u30c8\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run-script")," \u2013 \u4efb\u610f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u691c\u7d22\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set-script")," \u2013 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30bf\u30b9\u30af\u3092\u8a2d\u5b9a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shrinkwrap")," \u2013 \u516c\u958b\u306e\u305f\u3081\u306b\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30ed\u30c3\u30af\u30c0\u30a6\u30f3\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"star")," \u2013 \u304a\u6c17\u306b\u5165\u308a\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u30de\u30fc\u30af\u3092\u4ed8\u3051\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stars")," \u2013 \u304a\u6c17\u306b\u5165\u308a\u3068\u3057\u3066\u30de\u30fc\u30af\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u958b\u59cb\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stop")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u505c\u6b62\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"team")," \u2013 \u7d44\u7e54\u30c1\u30fc\u30e0\u3068\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c6\u30b9\u30c8\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"token")," \u2013 \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u7ba1\u7406\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uninstall")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unpublish")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unstar")," \u2013 \u304a\u6c17\u306b\u5165\u308a\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u524a\u9664\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30d0\u30f3\u30d7"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"view")," \u2013 \u30ec\u30b8\u30b9\u30c8\u30ea\u60c5\u5831\u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whoami")," \u2013 npm\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u8868\u793a\u3059\u308b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx")," \u2013 npm\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b")),(0,a.kt)("h3",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30ebnpm-install"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff08",(0,a.kt)("inlineCode",{parentName:"h3"},"npm install"),"\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u57fa\u3065\u3044\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6307\u5b9a\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i <package1> [package2...]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6307\u5b9a\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D <package1> [package2...]\n")))),(0,a.kt)("h3",{id:"\u5b9f\u884c\u53ef\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5b9f\u884cnpx"},"\u5b9f\u884c\u53ef\u80fd\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5b9f\u884c\uff08",(0,a.kt)("inlineCode",{parentName:"h3"},"npx"),"\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u3042\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5b9f\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx <package>[@version] [args...]\n")),(0,a.kt)("admonition",{parentName:"li",title:"\u3000\u88dc\u8db3",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," \u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u306a\u3044\u5834\u5408\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u3001\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u307e\u305f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"npx"),"\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"))))))}d.isMDXComponent=!0},3158:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU0MHB4IiBoZWlnaHQ9IjIxMHB4IiB2aWV3Qm94PSIwIDAgMTggNyI+DQo8cGF0aCBmaWxsPSIjQ0IzODM3IiBkPSJNMCwwaDE4djZIOXYxSDVWNkgwVjB6IE0xLDVoMlYyaDF2M2gxVjFIMVY1eiBNNiwxdjVoMlY1aDJWMUg2eiBNOCwyaDF2Mkg4VjJ6IE0xMSwxdjRoMlYyaDF2M2gxVjJoMXYzaDFWMUgxMXoiLz4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMSw1IDMsNSAzLDIgNCwyIDQsNSA1LDUgNSwxIDEsMSAiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02LDF2NWgyVjVoMlYxSDZ6IE05LDRIOFYyaDFWNHoiLz4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTEsMSAxMSw1IDEzLDUgMTMsMiAxNCwyIDE0LDUgMTUsNSAxNSwyIDE2LDIgMTYsNSAxNyw1IDE3LDEgIi8+DQo8L3N2Zz4NCg=="}}]);