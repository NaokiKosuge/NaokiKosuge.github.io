"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"/javascript-iterator",sidebar_label:"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc"},i="\u3010JavaScript\u3011\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc",l={unversionedId:"technology/javascript/spec/javascript-iterator",id:"technology/javascript/spec/javascript-iterator",title:"\u3010JavaScript\u3011\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc",description:"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u306f\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u53cd\u5fa9\u53ef\u80fd\u6027\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3067\u3059\u3002for/of \u30eb\u30fc\u30d7\u3084 ... \u30b9\u30d7\u30ec\u30c3\u30c9\u6f14\u7b97\u5b50\u3067\u306f\u3001\u5185\u90e8\u7684\u306b\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u304c\u5229\u7528\u3055\u308c\u307e\u3059\u3002",source:"@site/notes/technology/javascript/spec/javascript-iterator.md",sourceDirName:"technology/javascript/spec",slug:"/javascript-iterator",permalink:"/notes/javascript-iterator",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/spec/javascript-iterator.md",tags:[],version:"current",frontMatter:{slug:"/javascript-iterator",sidebar_label:"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc"},sidebar:"tutorialSidebar",previous:{title:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc",permalink:"/notes/javascript-generator"},next:{title:"Promise",permalink:"/notes/javascript-promise"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc"},"\u3010JavaScript\u3011\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc"),(0,a.kt)("p",null,"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u306f\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u53cd\u5fa9\u53ef\u80fd\u6027\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3067\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"for/of")," \u30eb\u30fc\u30d7\u3084 ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," \u30b9\u30d7\u30ec\u30c3\u30c9\u6f14\u7b97\u5b50\u3067\u306f\u3001\u5185\u90e8\u7684\u306b\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u304c\u5229\u7528\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53cd\u5fa9\u53ef\u80fd\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",{parentName:"li"},"\u53cd\u5fa9\u53ef\u80fd\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3001\u53cd\u5fa9\u51e6\u7406\u3092\u884c\u3046\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"[Symbol.iterator]()")," \u304c\u547c\u3073\u51fa\u3055\u308c\u3001\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u53cd\u5fa9\u53ef\u80fd\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"',title:'"\u53cd\u5fa9\u53ef\u80fd\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"'},"interface Iterable<T> {\n  [Symbol.iterator](): Iterator<T>;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53cd\u5fa9\u51e6\u7406"),(0,a.kt)("p",{parentName:"li"},"\u4e00\u9023\u306e\u53cd\u5fa9\u51e6\u7406\u904e\u7a0b\u306e\u5185\u3001\u500b\u3005\u306e\u51e6\u7406\u306f\u3001\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u6301\u3064 ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3053\u3068\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3070\u308c\u308b\u5ea6\u306b\u53cd\u5fa9\u7d50\u679c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u308a\u307e\u3059\u3002\u53cd\u5fa9\u51e6\u7406\u904e\u7a0b\u306e\u9014\u4e2d\u3067\u7d42\u4e86\u3059\u308b\u6642\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"return()")," \u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"throw()")," \u30e1\u30bd\u30c3\u30c9\u3067\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u308b\u30b7\u30b0\u30ca\u30eb\u3092\u9001\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30d7\u30ed\u30c8\u30b3\u30eb"',title:'"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30d7\u30ed\u30c8\u30b3\u30eb"'},"interface Iterator {\n  next(): IteratorResult;\n  return?(): IteratorResult;\n  throw?(): IteratorResult;\n}\ninterface Iterator<T, TReturn = any> {\n  next(...args: []): IteratorResult<T, TReturn>;\n  return?(value?: TReturn): IteratorResult<T, TReturn>;\n  throw?(e?: any): IteratorResult<T, TReturn>;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53cd\u5fa9\u7d50\u679c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",{parentName:"li"},"\u53cd\u5fa9\u7d50\u679c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u5024\u3067\u3042\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"done")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u6700\u5f8c\u306e\u5024\u304c\u6d88\u8cbb\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u8868\u3059\u30d5\u30e9\u30b0\u3067\u3059\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u53cd\u5fa9\u7d50\u679c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"',title:'"\u53cd\u5fa9\u7d50\u679c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"'},"type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;\n\ninterface IteratorYieldResult<TYield> {\n  done?: false;\n  value: TYield;\n}\n\ninterface IteratorReturnResult<TReturn> {\n  done: true;\n  value: TReturn;\n}\n")))))}u.isMDXComponent=!0}}]);