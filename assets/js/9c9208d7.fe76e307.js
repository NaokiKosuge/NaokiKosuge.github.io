"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,k=b["".concat(p,".").concat(m)]||b[m]||s[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={slug:"/reactivex",sidebar_label:"ReactiveX"},i="\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011ReactiveX",o={unversionedId:"engineering/design-pattern/reactivex",id:"engineering/design-pattern/reactivex",title:"\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011ReactiveX",description:"ReactiveX \u306f\u3001\u30ea\u30a2\u30af\u30c6\u30a3\u30d6\u30fb\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u3057\u3066\u77e5\u3089\u308c\u308b\u89b3\u6e2c\u53ef\u80fd\u306a\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u7528\u3044\u305f\u975e\u540c\u671f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u305f\u3081\u306e API \u3067\u3059\u3002\u300cObserver \u30d1\u30bf\u30fc\u30f3\u300d\u3001\u300c\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30d1\u30bf\u30fc\u30f3\u300d\u3001\u300c\u95a2\u6570\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u300d\u306e\u30a2\u30a4\u30c7\u30a2\u304b\u3089\u6210\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/notes/engineering/design-pattern/reactivex.md",sourceDirName:"engineering/design-pattern",slug:"/reactivex",permalink:"/notes/reactivex",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/engineering/design-pattern/reactivex.md",tags:[],version:"current",frontMatter:{slug:"/reactivex",sidebar_label:"ReactiveX"},sidebar:"tutorialSidebar",previous:{title:"BLoC \u30d1\u30bf\u30fc\u30f3",permalink:"/notes/bloc-pattern"},next:{title:"\u30b7\u30f3\u30b0\u30eb\u30c8\u30f3",permalink:"/notes/singleton-pattern"}},p={},u=[{value:"\u30b3\u30f3\u30bb\u30d7\u30c8",id:"\u30b3\u30f3\u30bb\u30d7\u30c8",level:2},{value:"Observable",id:"observable",level:3},{value:"Observable \u306e\u5f62\u614b",id:"observable-\u306e\u5f62\u614b",level:4},{value:"Observer",id:"observer",level:3},{value:"subscribe",id:"subscribe",level:4},{value:"unsubscribe",id:"unsubscribe",level:4},{value:"Operators",id:"operators",level:3},{value:"Single",id:"single",level:3},{value:"Subject",id:"subject",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"ReactiveX \u306e\u5b9f\u88c5\u4e00\u89a7",id:"reactivex-\u306e\u5b9f\u88c5\u4e00\u89a7",level:2}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3reactivex"},"\u3010\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u3011ReactiveX"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/"},"ReactiveX")," \u306f\u3001\u30ea\u30a2\u30af\u30c6\u30a3\u30d6\u30fb\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u3057\u3066\u77e5\u3089\u308c\u308b\u89b3\u6e2c\u53ef\u80fd\u306a\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u7528\u3044\u305f\u975e\u540c\u671f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u305f\u3081\u306e API \u3067\u3059\u3002\u300cObserver \u30d1\u30bf\u30fc\u30f3\u300d\u3001\u300c\u30a4\u30c6\u30ec\u30fc\u30bf\u30fc\u30d1\u30bf\u30fc\u30f3\u300d\u3001\u300c\u95a2\u6570\u578b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u300d\u306e\u30a2\u30a4\u30c7\u30a2\u304b\u3089\u6210\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30b3\u30f3\u30bb\u30d7\u30c8"},"\u30b3\u30f3\u30bb\u30d7\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#observable"},"\u21e3 Observable")," \u2013 \u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u30fb\u5909\u63db\u3059\u308b\u4ed5\u7d44\u307f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#operators"},"\u21e3 Operators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#single"},"\u21e3 Single")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#subject"},"\u21e3 Subject")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#scheduler"},"\u21e3 Scheduler"))),(0,n.kt)("h3",{id:"observable"},"Observable"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/documentation/observable.html"},"ReactiveX - Observable"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Observable"),'\uff0d"stream" \u3068\u3082\u547c\u3070\u308c\u308b\uff0d\u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30b7\u30e3\u30fc\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u30fc\u9593\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6e21\u3059\u305f\u3081\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002'),(0,n.kt)("h4",{id:"observable-\u306e\u5f62\u614b"},"Observable \u306e\u5f62\u614b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hot Observable")," \u306f\u3001\u4f5c\u6210\u3055\u308c\u308b\u3068\u3059\u3050\u306b\u30a2\u30a4\u30c6\u30e0\u306e\u767a\u884c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cold Observable")," \u306f\u3001Observer \u304b\u3089\u8cfc\u8aad\u3055\u308c\u3066\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u306e\u767a\u884c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Connectable Observable")," \u306f\u3001Connect \u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u3089\u30a2\u30a4\u30c6\u30e0\u306e\u767a\u884c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"observer"},"Observer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Observer"),'\uff0d"subscriber", "watcher", "reactor" \u306a\u3069\u3068\u3082\u547c\u3070\u308c\u308b\uff0d\u306f\u3001 Observable \u3092\u8cfc\u8aad (subscribe) \u3057\u3001\u901a\u77e5\u3092\u53d7\u3051\u53d6\u308b\u5ea6\u306b\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'),(0,n.kt)("h4",{id:"subscribe"},"subscribe"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Observer")," \u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," \u30e1\u30bd\u30c3\u30c9\u306f\u3001Observer \u3092 Observable \u306b\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5\u3067\u3059\u30023\u3064\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u5143\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onNext")," \u2013 Observable \u306b\u3088\u3063\u3066\u767a\u884c\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError")," \u2013 \u30a8\u30e9\u30fc\u767a\u751f\u306b\u53cd\u5fdc\u3057\u307e\u3059\u3002\u4ee5\u5f8c ",(0,n.kt)("inlineCode",{parentName:"li"},"onNext")," \u3084 ",(0,n.kt)("inlineCode",{parentName:"li"},"onCompleted")," \u306f\u547c\u3073\u51fa\u3055\u308c\u307e\u305b\u3093\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onCompleted")," \u2013 \u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u3001\u6700\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("h4",{id:"unsubscribe"},"unsubscribe"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Observer")," \u306e ",(0,n.kt)("inlineCode",{parentName:"p"},"unsubscribe")," \u30e1\u30bd\u30c3\u30c9\u306f Observable \u306e\u8cfc\u8aad\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"operators"},"Operators"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/documentation/operators.html"},"ReactiveX - Operators"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u30aa\u30da\u30ec\u30fc\u30bf\u30fc")," \u306f Observable \u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3067\u3059\u3002\u6570\u591a\u304f\u306e\u30aa\u30da\u30ec\u30fc\u30bf\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u7279\u306b Observable \u3092\u8fd4\u3059\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u306f\u30e1\u30bd\u30c3\u30c9\u30c1\u30a7\u30fc\u30f3\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"single"},"Single"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/documentation/single.html"},"ReactiveX - Single"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Single")," \u306f Observable \u306e\u30d0\u30ea\u30a2\u30f3\u30c8\u3067\u3001\u4e00\u90e8\u306e ReactiveX \u5b9f\u88c5\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"Single \u306e subscribe \u306f Observable \u3068\u306f\u7570\u306a\u308a\u30012\u3064\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3092\u5143\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onSuccess")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError"))),(0,n.kt)("p",null,"\u305d\u3057\u3066\u3001\u4e00\u5ea6\u3053\u308c\u3089\u306e\u3046\u30611\u3064\u3092\u547c\u3073\u51fa\u3059\u3068\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306f\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"subject"},"Subject"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/documentation/subject.html"},"ReactiveX - Subject"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subject")," \u306f\u3001Observer \u3068 Observable \u306e\u4e21\u65b9\u306e\u6027\u8cea\u3092\u6301\u3061\u3001\u30d6\u30ea\u30c3\u30b8\u307e\u305f\u306f\u30d7\u30ed\u30ad\u30b7\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"Subject \u306b\u306f\u6b21\u306e4\u3064\u306e\u7a2e\u985e\u304c\u3042\u308a\u3001\u5b9f\u88c5\u306b\u3088\u3063\u3066\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AsyncSubject \u2013 Observer \u306f\u3001AsyncSubject \u5074\u306e ",(0,n.kt)("inlineCode",{parentName:"li"},"onCompleted")," \u304c\u547c\u3070\u308c\u305f\u76f4\u5f8c\u306b\u767a\u884c\u3055\u308c\u305f\u5024\u306e\u307f\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"BehaviorSubject \u2013 Observer \u306f\u3001\u8cfc\u8aad\u958b\u59cb\u6642\u70b9\u304b\u3089\u76f4\u524d\u306e\u5024\u4ee5\u964d\u306b BehaviorSubject \u306b\u3088\u3063\u3066\u767a\u884c\u3055\u308c\u305f\u5024\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"PublishSubject \u2013 Observer \u306f\u3001\u8cfc\u8aad\u958b\u59cb\u6642\u70b9\u4ee5\u964d\u306b\u767a\u884c\u3055\u308c\u305f\u5024\u3092 ",(0,n.kt)("inlineCode",{parentName:"li"},"onNext")," \u3067\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"ReplaySubject \u2013 Observer \u306f\u3001\u3044\u3064\u8cfc\u8aad\u3059\u308b\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001ReplaySubject \u306b\u3088\u3063\u3066\u767a\u884c\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u5024\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"scheduler"},"Scheduler"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/documentation/scheduler.html"},"ReactiveX - Scheduler"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scheduler")," \u306f\u3001\u30de\u30eb\u30c1\u30b9\u30ec\u30c3\u30c9\u74b0\u5883\u4e0b\u306b\u6709\u7528\u3067\u3059\u3002Observable\u306e\u30ab\u30b9\u30b1\u30fc\u30c9\u306e\u51e6\u7406\u306e\u5b9f\u884c\u5834\u6240\u3068\u6642\u9593\u3092\u81ea\u5728\u306b\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"reactivex-\u306e\u5b9f\u88c5\u4e00\u89a7"},"ReactiveX \u306e\u5b9f\u88c5\u4e00\u89a7"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://reactivex.io/languages.html"},"ReactiveX - Languages"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJava"},"RxJava")),(0,n.kt)("li",{parentName:"ul"},"JavaScript: ",(0,n.kt)("a",{parentName:"li",href:"https://rxjs.dev/"},"RxJS")),(0,n.kt)("li",{parentName:"ul"},"C#: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dotnet/reactive"},"Rx.Net")),(0,n.kt)("li",{parentName:"ul"},"C#(Unity): UniRx"),(0,n.kt)("li",{parentName:"ul"},"Scala: ",(0,n.kt)("a",{parentName:"li",href:"https://reactivex.io/rxscala/"},"RxScala")),(0,n.kt)("li",{parentName:"ul"},"Clojure: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxClojure"},"RxClojure")),(0,n.kt)("li",{parentName:"ul"},"C++: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Reactive-Extensions/RxCpp"},"RxCpp")),(0,n.kt)("li",{parentName:"ul"},"Lua: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bjornbytes/RxLua"},"RxLua")),(0,n.kt)("li",{parentName:"ul"},"Ruby: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Reactive-Extensions/Rx.rb"},"Rx.rb")),(0,n.kt)("li",{parentName:"ul"},"Python: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxPY"},"RxPY")),(0,n.kt)("li",{parentName:"ul"},"Go: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxGo"},"RxGo")),(0,n.kt)("li",{parentName:"ul"},"Groovy: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxGroovy"},"RxGroovy")),(0,n.kt)("li",{parentName:"ul"},"JRuby: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxJRuby"},"RxJRuby")),(0,n.kt)("li",{parentName:"ul"},"Kotlin: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxKotlin"},"RxKotlin")),(0,n.kt)("li",{parentName:"ul"},"Swift: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxSwift"},"RxSwift")),(0,n.kt)("li",{parentName:"ul"},"PHP: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxPHP"},"RxPHP")),(0,n.kt)("li",{parentName:"ul"},"Elixir: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/alfert/reaxive"},"reaxive")),(0,n.kt)("li",{parentName:"ul"},"Dart: ",(0,n.kt)("a",{parentName:"li",href:"https://pub.dev/packages/rxdart"},"RxDart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxNetty"},"RxNetty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ReactiveX/RxAndroid"},"RxAndroid")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kzaher/RxSwift"},"RxCocoa"))))}s.isMDXComponent=!0}}]);