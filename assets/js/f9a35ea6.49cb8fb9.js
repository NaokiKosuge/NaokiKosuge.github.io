"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(a),d=r,u=k["".concat(p,".").concat(d)]||k[d]||m[d]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={slug:"/electronjs",sidebar_label:"Electron"},o="Electron",i={unversionedId:"technology/javascript/nodejs/electronjs",id:"technology/javascript/nodejs/electronjs",title:"Electron",description:"Build cross-platform desktop apps with JavaScript, HTML, and CSS",source:"@site/notes/technology/javascript/nodejs/electronjs.md",sourceDirName:"technology/javascript/nodejs",slug:"/electronjs",permalink:"/notes/electronjs",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/javascript/nodejs/electronjs.md",tags:[],version:"current",frontMatter:{slug:"/electronjs",sidebar_label:"Electron"},sidebar:"tutorialSidebar",previous:{title:"Node.js \u306b\u95a2\u3059\u308b10\u306e\u53cd\u7701\u70b9",permalink:"/notes/design-mistakes-in-node"},next:{title:"ESLint",permalink:"/notes/eslint"}},p={},c=[{value:"Electron \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"electron-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u30e2\u30b8\u30e5\u30fc\u30eb",id:"\u30e2\u30b8\u30e5\u30fc\u30eb",level:2},{value:"\u30d7\u30ed\u30bb\u30b9\u30e2\u30c7\u30eb",id:"\u30d7\u30ed\u30bb\u30b9\u30e2\u30c7\u30eb",level:2},{value:"\u30d7\u30ea\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30d7\u30ea\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8",level:3},{value:"\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1",id:"\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1",level:3},{value:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b",id:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b",level:4},{value:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3059",id:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3059",level:4},{value:"\u30e1\u30a4\u30f3\u304b\u3089\u30ec\u30f3\u30c0\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b",id:"\u30e1\u30a4\u30f3\u304b\u3089\u30ec\u30f3\u30c0\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b",level:4},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9",level:2},{value:"\u95a2\u9023\u30d1\u30c3\u30b1\u30fc\u30b8",id:"\u95a2\u9023\u30d1\u30c3\u30b1\u30fc\u30b8",level:2},{value:"\u95a2\u9023\u30ea\u30f3\u30af",id:"\u95a2\u9023\u30ea\u30f3\u30af",level:2}],s={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"electron"},"Electron"),(0,r.kt)("figure",{class:"inline-flex"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9698).Z,width:"980",height:"150"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Build cross-platform desktop apps with JavaScript, HTML, and CSS")),(0,r.kt)("p",null,"Electron \u306e\u63a1\u7528\u4e8b\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VisualStudio Code")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode"},"\u30ea\u30dd\u30b8\u30c8\u30ea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.messenger.com/desktop"},"Facebook Messeanger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitch.com/"},"Twitch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://slack.com/"},"Slack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://figma.com/"},"Figma"))),(0,r.kt)("h2",{id:"electron-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"Electron \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"my-electron-app $ npm init -y\nmy-electron-app $ npm i -D electron\n")),(0,r.kt)("h2",{id:"\u30e2\u30b8\u30e5\u30fc\u30eb"},"\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u30e2\u30b8\u30e5\u30fc\u30eb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/app"},(0,r.kt)("inlineCode",{parentName:"a"},"app"))," \u2013 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30d9\u30f3\u30c8\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u5236\u5fa1\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/browser-window"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserWindow"))," \u2013 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a6\u30a4\u30f3\u30c9\u30a6\u3092\u4f5c\u6210\u3057\u7ba1\u7406\u3059\u308b"))),(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u30e2\u30b8\u30e5\u30fc\u30eb")),(0,r.kt)("h2",{id:"\u30d7\u30ed\u30bb\u30b9\u30e2\u30c7\u30eb"},"\u30d7\u30ed\u30bb\u30b9\u30e2\u30c7\u30eb"),(0,r.kt)("p",null,"Electron \u306f",(0,r.kt)("strong",{parentName:"p"},"\u30de\u30eb\u30c1\u30d7\u30ed\u30bb\u30b9"),"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u7d99\u627f\u3057\u3066\u3044\u307e\u3059\u3002\u30d7\u30ed\u30bb\u30b9\u306e\u7a2e\u985e\u306f2\u3064\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u30a2\u30d7\u30ea\u306f1\u3064\u306e\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u304c\u3042\u308a\u3001\u305d\u308c\u306f Node.js \u74b0\u5883\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u4e3b\u306a\u76ee\u7684\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u4f5c\u6210\u3068\u305d\u306e\u7ba1\u7406 \u2013 ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/browser-window"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserWindow"))," \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u5236\u5fa1 \u2013 ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/app"},(0,r.kt)("inlineCode",{parentName:"a"},"app"))," \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30cd\u30a4\u30c6\u30a3\u30d6 API \u306e\u4f7f\u7528 \u2013 \u30cd\u30a4\u30c6\u30a3\u30d6\u306a\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u6a5f\u80fd\u3092\u5236\u5fa1\u3059\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3001OS \u3068\u306e\u5bfe\u8a71\u3092\u884c\u3044\u307e\u3059\u3002 ")))),(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u30a6\u30a7\u30d6\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u62c5\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30a6\u30a7\u30d6\u6a19\u6e96\u306b\u5f93\u3063\u3066\u52d5\u4f5c\u3057\u3001Node.js \u306e API \u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002")))),(0,r.kt)("h3",{id:"\u30d7\u30ea\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8"},"\u30d7\u30ea\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8"),(0,r.kt)("p",null,"\u30d7\u30ea\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u5185\u3067\u30a6\u30a7\u30d6\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8aad\u307f\u8fbc\u307f\u958b\u59cb\u524d\u306b\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1"},"\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1\uff08IPC\uff09\u306f\u3001UI \u304b\u3089\u30cd\u30a4\u30c6\u30a3\u30d6 API \u3092\u547c\u3073\u51fa\u3057\u305f\u308a\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30e1\u30cb\u30e5\u30fc\u304b\u3089 Web \u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5909\u66f4\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u305f\u308a\u3059\u308b\u306a\u3069\u3001\u591a\u304f\u306e\u4e00\u822c\u7684\u306a\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u3059\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-main"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcMain"))," \u2013 \u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u3067\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u3066\u51e6\u7406\u9593\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-renderer"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcRenderer"))," \u2013 \u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u3067\u3001\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066\u540c\u671f/\u975e\u540c\u671f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/context-bridge"},(0,r.kt)("inlineCode",{parentName:"a"},"contextBridge"))," \u2013 \u30d7\u30ea\u30ed\u30fc\u30c9\u3067\u3001\u5206\u96e2\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u9593\u306b\u3001\u5b89\u5168\u3001\u53cc\u65b9\u5411\u3067\u540c\u671f\u3055\u308c\u305f\u30d6\u30ea\u30c3\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-main#ipcmainonchannel-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcMain.on"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrenderersendchannel-args"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcRenderer.send"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u5b9f\u969b\u306b\u306f\u3053\u308c\u306f\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u304b\u3089\u516c\u958b\u3055\u308c\u305f\u30d6\u30ea\u30c3\u30b8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3059\u306e\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ea\u30ed\u30fc\u30c9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api"},(0,r.kt)("inlineCode",{parentName:"a"},"contextBridge.exposeInMainWorld"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066 API \u3092\u516c\u958b\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3059"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u304b\u3089\u30e1\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3059"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-main#ipcmainhandlechannel-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcMain.handle"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u306e\u547c\u3073\u51fa\u3057\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrendererinvokechannel-args"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcRenderer.invoke"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u306e\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u5b9f\u969b\u306b\u306f\u3053\u308c\u306f\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u304b\u3089\u516c\u958b\u3055\u308c\u305f\u30d6\u30ea\u30c3\u30b8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3059\u306e\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ea\u30ed\u30fc\u30c9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api"},(0,r.kt)("inlineCode",{parentName:"a"},"contextBridge.exposeInMainWorld"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066 API \u3092\u516c\u958b\u3057\u307e\u3059\u3002")),(0,r.kt)("h4",{id:"\u30e1\u30a4\u30f3\u304b\u3089\u30ec\u30f3\u30c0\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b"},"\u30e1\u30a4\u30f3\u304b\u3089\u30ec\u30f3\u30c0\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/web-contents#contentssendchannel-args"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserWindow.webContents.send"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrendereronchannel-listener"},(0,r.kt)("inlineCode",{parentName:"a"},"ipcRenderer.on"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ea\u30ed\u30fc\u30c9: ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api"},(0,r.kt)("inlineCode",{parentName:"a"},"contextBridge.exposeInMainWorld"))," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ec\u30f3\u30c0\u30e9\u30fc\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066 API \u3092\u516c\u958b\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9"),(0,r.kt)("h2",{id:"\u95a2\u9023\u30d1\u30c3\u30b1\u30fc\u30b8"},"\u95a2\u9023\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron"},(0,r.kt)("inlineCode",{parentName:"a"},"electron"))," \u2013 Electorn \u30b3\u30a2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron-packager"},(0,r.kt)("inlineCode",{parentName:"a"},"electron-packager"))," \u2013 \u30d1\u30c3\u30b1\u30fc\u30b8\u30f3\u30b0")))),(0,r.kt)("h2",{id:"\u95a2\u9023\u30ea\u30f3\u30af"},"\u95a2\u9023\u30ea\u30f3\u30af"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/"},"Electron")," \u2013 Electron \u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/api/app"},"API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/ja/docs/latest/tutorial/examples"},"\u30b5\u30f3\u30d7\u30eb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/fiddle"},"Electron Fiddle")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.electronforge.io/"},"Electron Forge")," \u2013 \u201c\u6700\u65b0\u306e Electron \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3001\u516c\u958b\u3001\u304a\u3088\u3073\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u5b8c\u5168\u306a\u30c4\u30fc\u30eb\u3067\u3059\u3002\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/awesome-electron"},"Awesome Electron")," \u2013 Electron \u3067\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30ea\u30bd\u30fc\u30b9")))}m.isMDXComponent=!0},9698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/electron.logo-ac253b0588c8d745bdb619cf44205fe4.svg"}}]);