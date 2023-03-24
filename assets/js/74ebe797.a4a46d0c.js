"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(n),s=l,g=k["".concat(p,".").concat(s)]||k[s]||d[s]||i;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const i={slug:"/git-branch-strategy",sidebar_label:"\u30d6\u30e9\u30f3\u30c1\u6226\u7565"},r="\u3010git\u3011\u30d6\u30e9\u30f3\u30c1\u6226\u7565",o={unversionedId:"environment/git/git-branch-strategy",id:"environment/git/git-branch-strategy",title:"\u3010git\u3011\u30d6\u30e9\u30f3\u30c1\u6226\u7565",description:"- GitHub Flow \u2014 \u30c7\u30d7\u30ed\u30a4\u3092\u4e2d\u5fc3\u306b\u3057\u305f\u958b\u767a\u30b9\u30bf\u30a4\u30eb",source:"@site/notes/environment/git/git-branch-strategy.md",sourceDirName:"environment/git",slug:"/git-branch-strategy",permalink:"/notes/git-branch-strategy",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/environment/git/git-branch-strategy.md",tags:[],version:"current",frontMatter:{slug:"/git-branch-strategy",sidebar_label:"\u30d6\u30e9\u30f3\u30c1\u6226\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u9580",permalink:"/notes/git"},next:{title:"\u4e00\u822c\u7684\u306a\u30b3\u30de\u30f3\u30c9",permalink:"/notes/git-commands"}},p={},u=[{value:"GitHub Flow",id:"github-flow",level:2},{value:"\u30d6\u30e9\u30f3\u30c1",id:"\u30d6\u30e9\u30f3\u30c1",level:3},{value:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",id:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",level:3},{value:"\u9069\u3057\u305f\u30b1\u30fc\u30b9",id:"\u9069\u3057\u305f\u30b1\u30fc\u30b9",level:3},{value:"git-flow",id:"git-flow",level:2},{value:"\u30d6\u30e9\u30f3\u30c1",id:"\u30d6\u30e9\u30f3\u30c1-1",level:3},{value:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",id:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc-1",level:3},{value:"<code>git-flow</code> \u30b3\u30de\u30f3\u30c9",id:"git-flow-\u30b3\u30de\u30f3\u30c9",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:4},{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:4},{value:"Getting started",id:"getting-started",level:4},{value:"\u9069\u3057\u305f\u30b1\u30fc\u30b9",id:"\u9069\u3057\u305f\u30b1\u30fc\u30b9-1",level:3}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"git\u30d6\u30e9\u30f3\u30c1\u6226\u7565"},"\u3010git\u3011\u30d6\u30e9\u30f3\u30c1\u6226\u7565"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#github-flow"},"GitHub Flow")," \u2014 \u30c7\u30d7\u30ed\u30a4\u3092\u4e2d\u5fc3\u306b\u3057\u305f\u958b\u767a\u30b9\u30bf\u30a4\u30eb"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#git-flow"},"git-flow")," \u2014 \u30ea\u30ea\u30fc\u30b9\u4e2d\u5fc3\u306e\u958b\u767a\u30b9\u30bf\u30a4\u30eb")),(0,l.kt)("h2",{id:"github-flow"},"GitHub Flow"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/Gab-km/3705015"},"GitHub Flow")," \u306f\u3001\u30c7\u30d7\u30ed\u30a4\u3092\u4e2d\u5fc3\u3068\u3057\u305f\u30b7\u30f3\u30d7\u30eb\u306a\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u3042\u308a\u3001GitHub \u793e\u304c\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1"},"\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u2014 \u5e38\u306b\u30c7\u30d7\u30ed\u30a4\u53ef\u80fd\u306a\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<descriptively-name>")," \u2014 \u65b0\u3057\u3044\u4f55\u304b\u306b\u53d6\u308a\u7d44\u3080\u969b\u306b\u3001\u8aac\u660e\u7684\u306a\u540d\u524d\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u304b\u3089\u5206\u5c90\u3057\u3066\u4f5c\u6210\u3059\u308b\uff08\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"new-oauth2-scopes"),"\uff09")),(0,l.kt)("h3",{id:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"},"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u30d6\u30e9\u30f3\u30c1\u306e\u3082\u306e\u306f\u4f55\u3067\u3042\u308c\u30c7\u30d7\u30ed\u30a4\u53ef\u80fd\u3067\u3042\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u3057\u3044\u4f55\u304b\u306b\u53d6\u308a\u7d44\u3080\u969b\u306f\u3001\u8aac\u660e\u7684\u306a\u540d\u524d\u306e\u30d6\u30e9\u30f3\u30c1\u3092 ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u304b\u3089\u4f5c\u6210\u3059\u308b\uff08\u4f8b: new-oauth2-scopes\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u6210\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306b\u30ed\u30fc\u30ab\u30eb\u3067\u30b3\u30df\u30c3\u30c8\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u540c\u3058\u540d\u524d\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u3082\u5b9a\u671f\u7684\u306b\u4f5c\u696d\u5185\u5bb9\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3084\u52a9\u8a00\u304c\u6b32\u3057\u3044\u6642\u3001\u30d6\u30e9\u30f3\u30c1\u3092\u30de\u30fc\u30b8\u3057\u3066\u3082\u3088\u3044\u3068\u601d\u3063\u305f\u3068\u304d\u306f\u3001 \u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8 \u3092\u4f5c\u6210\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u8ab0\u304b\u304c\u30ec\u30d3\u30e5\u30fc\u3092\u3057\u3066\u6a5f\u80fd\u306bOK\u3092\u51fa\u3057\u3066\u304f\u308c\u305f\u3089\u3001\u3042\u306a\u305f\u306f\u30b3\u30fc\u30c9\u3092 ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u3078\u30de\u30fc\u30b8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30de\u30fc\u30b8\u3092\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u3078\u30d7\u30c3\u30b7\u30e5\u3057\u305f\u3089\u3001\u76f4\u3061\u306b\u30c7\u30d7\u30ed\u30a4\u3092\u3059\u308b")),(0,l.kt)("h3",{id:"\u9069\u3057\u305f\u30b1\u30fc\u30b9"},"\u9069\u3057\u305f\u30b1\u30fc\u30b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Web \u30a2\u30d7\u30ea\u306a\u3069\u3001\u5358\u4e00\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u307f\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u6e08\u307f\u3001\u304b\u3064\u660e\u793a\u7684\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3092\u884c\u308f\u306a\u3044\u958b\u767a"),(0,l.kt)("li",{parentName:"ul"},"\u77ed\u3044\u9593\u9694\u3067\u983b\u7e41\u306b\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3046\u958b\u767a")),(0,l.kt)("h2",{id:"git-flow"},"git-flow"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},"git-flow")," \u306f\u3001\u30ea\u30ea\u30fc\u30b9\u4e2d\u5fc3\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u3001",(0,l.kt)("a",{parentName:"p",href:"https://nvie.com/about/"}," VincentDriessen \u6c0f")," \u306b\u3088\u3063\u30662010\u5e74\u306b\u8003\u6848\u3055\u308c\u307e\u3057\u305f\u3002"),(0,l.kt)("h3",{id:"\u30d6\u30e9\u30f3\u30c1-1"},"\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"feature/<name>")," \u2014 \u4eca\u5f8c\u306e\u30ea\u30ea\u30fc\u30b9\u307e\u305f\u306f\u9060\u3044\u5c06\u6765\u306e\u30ea\u30ea\u30fc\u30b9\u306e\u65b0\u6a5f\u80fd\u3092\u958b\u767a\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"develop")," \u2014 \u6b21\u306e\u30ea\u30ea\u30fc\u30b9\u306b\u5411\u3051\u3066\u6700\u65b0\u306e\u958b\u767a\u5909\u66f4\u304c\u63d0\u4f9b\u3055\u308c\u305f\u72b6\u614b\u3092\u5e38\u306b\u53cd\u6620\u3057\u3066\u3044\u308b\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release/<vX.X.X>")," \u2014 \u65b0\u3057\u3044\u672c\u756a\u30ea\u30ea\u30fc\u30b9\u306e\u6e96\u5099\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master")," \u2014 \u5e38\u306b\u672c\u756a\u74b0\u5883\u306e\u72b6\u614b\u3092\u53cd\u6620\u3057\u3066\u3044\u308b\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hotfix/<name>")," \u2014 \u672c\u756a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u91cd\u5927\u306a\u30d0\u30b0\u3092\u3059\u3050\u306b\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306e\u30d6\u30e9\u30f3\u30c1")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d6\u30e9\u30f3\u30c1"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u5c90\u5143"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30de\u30fc\u30b8\u5148"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"develop")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"develop"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"develop")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"master")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc-1"},"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1222).Z,width:"1150",height:"1524"})),(0,l.kt)("h3",{id:"git-flow-\u30b3\u30de\u30f3\u30c9"},(0,l.kt)("inlineCode",{parentName:"h3"},"git-flow")," \u30b3\u30de\u30f3\u30c9"),(0,l.kt)("p",null,"git-flow \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f\u3001\u5c02\u7528\u306e git \u306e\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30b3\u30de\u30f3\u30c9\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306b\u304a\u3051\u308b\u64cd\u4f5c\u3092\u7c21\u6f54\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"Mac\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nvie/gitflow/wiki/Installation"},"Installation \xb7 nvie/gitflow Wiki")," \u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u4f7f\u3044\u65b9\uff1agit-flow \u30b3\u30de\u30f3\u30c9"',title:'"\u4f7f\u3044\u65b9\uff1agit-flow','\u30b3\u30de\u30f3\u30c9"':!0},"git flow <subcommand>\n")),(0,l.kt)("p",null,"\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"init")," \u2014 \u30d6\u30e9\u30f3\u30c1\u30e2\u30c7\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3001\u65b0\u3057\u3044 git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"feature")," \u2014 feature \u30d6\u30e9\u30f3\u30c1\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release")," \u2014 release \u30d6\u30e9\u30f3\u30c1\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hotfix")," \u2014 hotfix \u30d6\u30e9\u30f3\u30c1\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"support")," \u2014 support \u30d6\u30e9\u30f3\u30c1\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")," \u2014 \u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,l.kt)("h4",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"\u57fa\u672c\u7684\u306a\u6d41\u308c\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html"},"git-flow cheatsheet")," \u3067\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u9069\u3057\u305f\u30b1\u30fc\u30b9-1"},"\u9069\u3057\u305f\u30b1\u30fc\u30b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u660e\u793a\u7684\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3055\u308c\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u8907\u6570\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5b9f\u969b\u306b\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408")))}d.isMDXComponent=!0},1222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git.git-model@2x-7c44416894d064af9c20c3bc56c643e5.png"}}]);