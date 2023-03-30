"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,b=g["".concat(c,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/bloc-pattern",sidebar_label:"BLoC \u30d1\u30bf\u30fc\u30f3"},i="BLoC \u30d1\u30bf\u30fc\u30f3",l={unversionedId:"engineering/design-pattern/bloc-pattern",id:"engineering/design-pattern/bloc-pattern",title:"BLoC \u30d1\u30bf\u30fc\u30f3",description:"BLoC (Business Logic Component) \u30d1\u30bf\u30fc\u30f3 \u306f\u3001Dart Conf 2018 \u3067 Google \u306b\u3088\u3063\u3066\u521d\u3081\u3066\u767a\u8868\u3055\u308c\u305f\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u5f53\u6642\u3001Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30e2\u30d0\u30a4\u30eb \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306a\u3069\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u95a2\u4fc2\u306a\u304f\u307e\u3063\u305f\u304f\u540c\u3058\u30b3\u30fc\u30c9\u3092\u518d\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u8003\u6848\u3055\u308c\u307e\u3057\u305f\u3002",source:"@site/notes/engineering/design-pattern/bloc-pattern.md",sourceDirName:"engineering/design-pattern",slug:"/bloc-pattern",permalink:"/notes/bloc-pattern",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/engineering/design-pattern/bloc-pattern.md",tags:[],version:"current",frontMatter:{slug:"/bloc-pattern",sidebar_label:"BLoC \u30d1\u30bf\u30fc\u30f3"},sidebar:"tutorialSidebar",previous:{title:"\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3",permalink:"/notes/design-pattern"},next:{title:"ReactiveX",permalink:"/notes/reactivex"}},c={},p=[{value:"\u30b3\u30a2\u30b3\u30f3\u30bb\u30d7\u30c8",id:"\u30b3\u30a2\u30b3\u30f3\u30bb\u30d7\u30c8",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bloc-\u30d1\u30bf\u30fc\u30f3"},"BLoC \u30d1\u30bf\u30fc\u30f3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BLoC (",(0,o.kt)("strong",{parentName:"p"},"B"),"usiness ",(0,o.kt)("strong",{parentName:"p"},"Lo"),"gic ",(0,o.kt)("strong",{parentName:"p"},"C"),"omponent) \u30d1\u30bf\u30fc\u30f3 \u306f\u3001Dart Conf 2018 \u3067 Google \u306b\u3088\u3063\u3066\u521d\u3081\u3066\u767a\u8868\u3055\u308c\u305f\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u5f53\u6642\u3001Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30e2\u30d0\u30a4\u30eb \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306a\u3069\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u95a2\u4fc2\u306a\u304f\u307e\u3063\u305f\u304f\u540c\u3058\u30b3\u30fc\u30c9\u3092\u518d\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u8003\u6848\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u2013\u2013",(0,o.kt)("a",{parentName:"p",href:"https://www.didierboelens.com/2018/08/reactive-programming-streams-bloc/#the-bloc-pattern"},"Reactive Programing - Streams - BLoC (didierboelens.com)"))),(0,o.kt)("h2",{id:"\u30b3\u30a2\u30b3\u30f3\u30bb\u30d7\u30c8"},"\u30b3\u30a2\u30b3\u30f3\u30bb\u30d7\u30c8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f ",(0,o.kt)("strong",{parentName:"li"},"\u30b7\u30f3\u30af")," \u3092\u4ecb\u3057\u3066 BLoC \u306b ",(0,o.kt)("strong",{parentName:"li"},"\u30a4\u30d9\u30f3\u30c8")," \u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001",(0,o.kt)("strong",{parentName:"li"},"\u30b9\u30c8\u30ea\u30fc\u30e0")," \u3092\u4ecb\u3057\u3066 BLoC \u304b\u3089\u901a\u77e5\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u305d\u308c\u3089\u306f\u3001BLoC \u306b\u3088\u3063\u3066\u5b9f\u88c5\u3055\u308c\u308b\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u3068\u306f\u7121\u95a2\u4fc2\u3067\u3059\u3002")),(0,o.kt)("figure",{class:"inline-flex bg-white"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BLoC Pattern",src:n(6503).Z,width:"561",height:"331"}))))}u.isMDXComponent=!0},6503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/streams_bloc-083165250acc523227f8881443c35712.png"}}]);