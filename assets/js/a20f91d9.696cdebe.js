"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={slug:"/javascript-generator",sidebar_label:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"},i="\u3010JavaScript\u3011\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc",o={unversionedId:"technology/javascript/spec/javascript-generator",id:"technology/javascript/spec/javascript-generator",title:"\u3010JavaScript\u3011\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc",description:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u57fa\u672c\u6a5f\u80fd\u306f\u3001\u8a08\u7b97\u51e6\u7406\u3092\u4e00\u6642\u7684\u306b\u4e2d\u6b62\u3057\u3001\u9014\u4e2d\u7d50\u679c\u3092\u751f\u6210\u3057\u3001\u5f8c\u307b\u3069\u8a08\u7b97\u3092\u518d\u958b\u3059\u308b\u3053\u3068\u3067\u3059\u3002",source:"@site/notes/technology/javascript/spec/javascript-generator.md",sourceDirName:"technology/javascript/spec",slug:"/javascript-generator",permalink:"/notes/javascript-generator",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/spec/javascript-generator.md",tags:[],version:"current",frontMatter:{slug:"/javascript-generator",sidebar_label:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"},sidebar:"tutorialSidebar",previous:{title:"async-await",permalink:"/notes/javascript-async-function"},next:{title:"\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc",permalink:"/notes/javascript-iterator"}},p={},c=[{value:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u5ba3\u8a00",id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u5ba3\u8a00",level:2},{value:"<code>yield</code> \u30ad\u30fc\u30ef\u30fc\u30c9",id:"yield-\u30ad\u30fc\u30ef\u30fc\u30c9",level:3},{value:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u5b9f\u884c",id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u5b9f\u884c",level:2},{value:"<code>next()</code> \u30e1\u30bd\u30c3\u30c9",id:"next-\u30e1\u30bd\u30c3\u30c9",level:3},{value:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u7d42\u4e86",id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u7d42\u4e86",level:2},{value:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc",id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"},"\u3010JavaScript\u3011\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"),(0,a.kt)("p",null,"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u57fa\u672c\u6a5f\u80fd\u306f\u3001\u8a08\u7b97\u51e6\u7406\u3092\u4e00\u6642\u7684\u306b\u4e2d\u6b62\u3057\u3001\u9014\u4e2d\u7d50\u679c\u3092\u751f\u6210\u3057\u3001\u5f8c\u307b\u3069\u8a08\u7b97\u3092\u518d\u958b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u95a2\u6570\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u7c21\u5358\u306b\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u7121\u9650\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"',title:'"\u4f8b\uff1a\u7121\u9650\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"'},'function* infinite() {\n  let index = 0;\n\n  while (true) {\n    yield index++;\n  }\n}\n\nconst generator = infinite(); // "Generator { }"\n\nconsole.log(generator.next().value); // 0\nconsole.log(generator.next().value); // 1\nconsole.log(generator.next().value); // 2\n// ...\n')),(0,a.kt)("h2",{id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u5ba3\u8a00"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u5ba3\u8a00"),(0,a.kt)("p",null,"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"function*")," \u5f0f\u3067\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1a\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u95a2\u6570\u5ba3\u8a00"',title:'"\u4f8b\uff1a\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u95a2\u6570\u5ba3\u8a00"'},"function* infinite() {\n  let index = 0;\n\n  while (true) {\n    yield index++;\n  }\n}\n")),(0,a.kt)("h3",{id:"yield-\u30ad\u30fc\u30ef\u30fc\u30c9"},(0,a.kt)("inlineCode",{parentName:"h3"},"yield")," \u30ad\u30fc\u30ef\u30fc\u30c9"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield"},(0,a.kt)("inlineCode",{parentName:"a"},"yield"))," \u30ad\u30fc\u30ef\u30fc\u30c9\u306f\u6b21\u306e\u3053\u3068\u3092\u884c\u3044\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u95a2\u6570\u306e\u5b9f\u884c\u3092\u4e00\u6642\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306e\u547c\u3073\u51fa\u3057\u5143\u306b ",(0,a.kt)("inlineCode",{parentName:"li"},"yield")," \u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u7d9a\u304f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u7248 ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," \u3068\u8003\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield#syntax"},(0,a.kt)("inlineCode",{parentName:"a"},"[rv] = yield [expression];"))," \u306e\u5f62\u5f0f"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"next()")," \u30e1\u30bd\u30c3\u30c9\u304b\u3089\u6e21\u3055\u308c\u305f\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield*"},(0,a.kt)("inlineCode",{parentName:"a"},"yield* expression;"))," \u306e\u5f62\u5f0f"),"\uff1a\u5225\u306e \u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc \u3084\u53cd\u5fa9\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u59d4\u4efb\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u5b9f\u884c"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u5b9f\u884c"),(0,a.kt)("p",null,"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"Generator")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u308a\u307e\u3059\u3002\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"next-\u30e1\u30bd\u30c3\u30c9"},(0,a.kt)("inlineCode",{parentName:"h3"},"next()")," \u30e1\u30bd\u30c3\u30c9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \u30e1\u30bd\u30c3\u30c9\u306f\u6b21\u306e\u3053\u3068\u3092\u884c\u3044\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3078\u5024\u3092\u9001\u308b\u3053\u3068"),(0,a.kt)("li",{parentName:"ul"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068"),(0,a.kt)("li",{parentName:"ul"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3057\u305f\u7d50\u679c\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="next() \u30e1\u30bd\u30c3\u30c9" {8-11}',title:'"next()','\u30e1\u30bd\u30c3\u30c9"':!0,"{8-11}":!0},'function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst g = gen(); // "Generator { }"\ng.next();      // "Object { value: 1, done: false }"\ng.next();      // "Object { value: 2, done: false }"\ng.next();      // "Object { value: 3, done: false }"\ng.next();      // "Object { value: undefined, done: true }"\n')),(0,a.kt)("h2",{id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u7d42\u4e86"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306e\u7d42\u4e86"),(0,a.kt)("p",null,"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3092\u7d42\u4e86\u3055\u305b\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"return()")," \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1areturn() \u30e1\u30bd\u30c3\u30c9" {10}',title:'"\u4f8b\uff1areturn()','\u30e1\u30bd\u30c3\u30c9"':!0,"{10}":!0},"function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst g = gen();\n\ng.next();        // { value: 1, done: false }\ng.return('foo'); // { value: \"foo\", done: true }\ng.next();        // { value: undefined, done: true }\n")),(0,a.kt)("h2",{id:"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc"},"\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f8b\uff1athrow() \u30e1\u30bd\u30c3\u30c9" {14}',title:'"\u4f8b\uff1athrow()','\u30e1\u30bd\u30c3\u30c9"':!0,"{14}":!0},"function* gen() {\n  while(true) {\n    try {\n       yield 42;\n    } catch(e) {\n      console.log('Error caught!');\n    }\n  }\n}\n\nconst g = gen();\ng.next();\n// { value: 42, done: false }\ng.throw(new Error('Something went wrong'));\n// \"Error caught!\"\n// { value: 42, done: false }\n")))}u.isMDXComponent=!0}}]);