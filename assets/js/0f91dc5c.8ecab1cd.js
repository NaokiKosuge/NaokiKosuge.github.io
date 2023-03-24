"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(a),c=l,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||n;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const n={slug:"/flutter",sidebar_label:"Flutter"},i="Flutter",p={unversionedId:"technology/dart/flutter/flutter",id:"technology/dart/flutter/flutter",title:"Flutter",description:"\u30ea\u30f3\u30af",source:"@site/notes/technology/dart/flutter/flutter.md",sourceDirName:"technology/dart/flutter",slug:"/flutter",permalink:"/notes/flutter",draft:!1,editUrl:"https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/notes/technology/dart/flutter/flutter.md",tags:[],version:"current",frontMatter:{slug:"/flutter",sidebar_label:"Flutter"},sidebar:"tutorialSidebar",previous:{title:"Dart",permalink:"/notes/dart"},next:{title:"Flutter \u30d5\u30c3\u30af",permalink:"/notes/flutter-hooks"}},u={},o=[{value:"\u30ea\u30f3\u30af",id:"\u30ea\u30f3\u30af",level:2},{value:"\u30b3\u30a2",id:"\u30b3\u30a2",level:3},{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",level:3},{value:"\u30b5\u30f3\u30d7\u30eb",id:"\u30b5\u30f3\u30d7\u30eb",level:3},{value:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",level:3},{value:"\u305d\u306e\u4ed6",id:"\u305d\u306e\u4ed6",level:3},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8",id:"\u30d1\u30c3\u30b1\u30fc\u30b8",level:2},{value:"\u57fa\u672c",id:"\u57fa\u672c",level:3},{value:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",level:3},{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6700\u9069\u5316",id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6700\u9069\u5316",level:3},{value:"\u30a2\u30d7\u30ea\u72b6\u614b\u7ba1\u7406",id:"\u30a2\u30d7\u30ea\u72b6\u614b\u7ba1\u7406",level:3},{value:"\u30b9\u30c8\u30ec\u30fc\u30b8",id:"\u30b9\u30c8\u30ec\u30fc\u30b8",level:3},{value:"\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1",id:"\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1",level:3},{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8-1",level:2},{value:"Flutter \u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"flutter-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u521d\u671f\u5316\u6642\u306e\u69cb\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u521d\u671f\u5316\u6642\u306e\u69cb\u6210",level:3},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7",level:3},{value:"\u30c6\u30b9\u30c8",id:"\u30c6\u30b9\u30c8",level:2},{value:"CI (GitHub Actions)",id:"ci-github-actions",level:3},{value:"Tips",id:"tips",level:2},{value:"Xcode \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30d5\u30a9\u30eb\u30c0\u3092 Finder \u3067\u8868\u793a\u3059\u308b",id:"xcode-\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30d5\u30a9\u30eb\u30c0\u3092-finder-\u3067\u8868\u793a\u3059\u308b",level:3}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flutter"},"Flutter"),(0,l.kt)("h2",{id:"\u30ea\u30f3\u30af"},"\u30ea\u30f3\u30af"),(0,l.kt)("h3",{id:"\u30b3\u30a2"},"\u30b3\u30a2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://flutter.dev/"},"Flutter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.flutter.dev/"},"API docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/reference/flutter-cli"},(0,l.kt)("inlineCode",{parentName:"a"},"flutter")," CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://firebase.flutter.dev/"},"FlutterFire")," \u2013 Flutter \u306e\u516c\u5f0f Firebase \u30d7\u30e9\u30b0\u30a4\u30f3")),(0,l.kt)("h3",{id:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/development/ui/widgets"},"Widget catalog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gallery.flutter.dev/"},"Flutter Gallery"))),(0,l.kt)("h3",{id:"\u30b5\u30f3\u30d7\u30eb"},"\u30b5\u30f3\u30d7\u30eb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://flutter.github.io/samples/"},"Flutter Samples")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fluttersamples.com/"},"Flutter Architecture Samples")," \u2013 \u69d8\u3005\u306a\u5f62\u306e TODO \u30a2\u30d7\u30ea"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/codelabs/implicit-animations"},"\u6697\u9ed9\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/ImplicitlyAnimatedWidget-class.html"},(0,l.kt)("inlineCode",{parentName:"a"},"ImplicitlyAnimatedWidget"))," \u306e\u4f7f\u3044\u65b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gskinnerTeam"},"gskinner team"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gskinnerTeam/flutter-folio"},"Flutter Folio")," \u2013 iOS\u3001Android\u3001MacOS\u3001Windows\u3001Linux\u3001Web\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3001Flutter\u304c\u3044\u304b\u306b\u7d20\u6674\u3089\u3057\u3044\u30de\u30eb\u30c1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4f53\u9a13\u3092\u63d0\u4f9b\u3067\u304d\u308b\u304b\u3092\u7d39\u4ecb\u3059\u308b\u30c7\u30e2\u30a2\u30d7\u30ea\u3067\u3059\u3002",(0,l.kt)("a",{parentName:"li",href:"https://gskinner.com/"},"gskinner")," \u3068 Google \u306e\u5354\u529b\u3067\u4f5c\u3089\u308c\u305fFlutter Folio\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u671f\u5f85\u3001\u5165\u529b\u30c7\u30d0\u30a4\u30b9\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a4\u30c7\u30a3\u30aa\u30e0\u3092\u610f\u56f3\u7684\u306b\u8003\u616e\u3057\u3001\u3069\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u3082\u9055\u548c\u611f\u306a\u304f\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gskinnerTeam/flutter-adaptive-demo"},"adaptive_app_demos")," \u2013 \u30a2\u30c0\u30d7\u30c6\u30a3\u30d6 \u30a2\u30d7\u30ea\u958b\u767a\u624b\u6cd5\u306e\u30c7\u30e2 \u30b3\u30fc\u30c9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gskinnerTeam/flokk"},"Flokk")," \u2013 GitHub \u304a\u3088\u3073 Twitter \u3068\u7d71\u5408\u3055\u308c\u305f\u6700\u65b0\u306e Google \u30b3\u30f3\u30bf\u30af\u30c8 \u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gskinnerTeam/flutter-wonderous-app"},"Wonderous")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bizz84/open_weather_example_flutter"},"Flutter Weather App Example")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"https://codewithandrea.com/articles/flutter-repository-pattern/"},"Flutter App Architecture: The Repository Pattern")," \u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3068\u9023\u52d5\u3059\u308b\u3001Riverpod \u3092\u6d3b\u7528\u3057\u305f\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3002")),(0,l.kt)("h3",{id:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"),(0,l.kt)("p",null,"\u305d\u306e\u4ed6\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codelabs.developers.google.com/?product=flutter"},"Google Codelabs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codewithandrea.com/"},"codewithandrea.com")),(0,l.kt)("li",{parentName:"ul"},"Medium",(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://medium.com/flutter/how-to-debug-layout-issues-with-the-flutter-inspector-87460a7b9db"},"Flutter \u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u554f\u984c\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u65b9\u6cd5 (Medium)"))))),(0,l.kt)("h3",{id:"\u305d\u306e\u4ed6"},"\u305d\u306e\u4ed6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/NaokiKosuge/6f7bc8165d49b94bfadca1a7f2bc01f1"},"NaokiKosuge's gist")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fvm.app/"},"fvm | Flutter Version Management")," \u2013 Flutter SDK \u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30c4\u30fc\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codewithandrea.com/articles/flutter-project-structure/"},"Flutter Project Structure: Feature-first or Layer-first?")," \u2013 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210\u306b\u8ff7\u3063\u305f\u969b\u306b\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://itnext.io/flutter-clean-architecture-b53ce9e19d5a"},"Flutter x Clean Architecture"))))),(0,l.kt)("h2",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8"},"\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,l.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/webview_flutter"},(0,l.kt)("inlineCode",{parentName:"a"},"webview_flutter"))," \u2013 WebView \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/path_provider"},(0,l.kt)("inlineCode",{parentName:"a"},"path_provider"))," \u2013 \u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3067\u3088\u304f\u4f7f\u7528\u3055\u308c\u308b\u5834\u6240\u3092\u898b\u3064\u3051\u308b\u305f\u3081\u306e Flutter \u30d7\u30e9\u30b0\u30a4\u30f3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gorouter.dev/"},(0,l.kt)("inlineCode",{parentName:"a"},"go_router"))," \u2013 \u5ba3\u8a00\u578b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\uff08",(0,l.kt)("a",{parentName:"li",href:"https://github.com/csells/go_router/blob/main/docs/ja/index.mdx"},"\u65e5\u672c\u8a9e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/flutter_animate"},(0,l.kt)("inlineCode",{parentName:"a"},"flutter_animate"))," \u2013 \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5f37\u5316")),(0,l.kt)("h3",{id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/floor"},"`floor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://isar.dev/ja/"},"Isar"))),(0,l.kt)("h3",{id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6700\u9069\u5316"},"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6700\u9069\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/split_view"},(0,l.kt)("inlineCode",{parentName:"a"},"split_view"))," \u2013 \u753b\u9762\u306e\u5206\u5272")),(0,l.kt)("h3",{id:"\u30a2\u30d7\u30ea\u72b6\u614b\u7ba1\u7406"},"\u30a2\u30d7\u30ea\u72b6\u614b\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/provider"},(0,l.kt)("inlineCode",{parentName:"a"},"provider"))," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html"},(0,l.kt)("inlineCode",{parentName:"a"},"InheritedWidget")," \u30af\u30e9\u30b9")," \u306e\u30e9\u30c3\u30d1\u30fc\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://riverpod.dev/ja/"},"Riverpod")," \u2013 \u30ea\u30a2\u30af\u30c6\u30a3\u30d6\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30c7\u30fc\u30bf\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u5b9f\u73fe\u3059\u308b\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple"},"Simple app state management")," \u2013 ",(0,l.kt)("inlineCode",{parentName:"li"},"provider")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"li"},"ChangeNotifier")," \u306e\u4f7f\u7528\u306b\u95a2\u3057\u3066\u4f8b\u3092\u516c\u958b\u3057\u3066\u3044\u308b Flutter \u516c\u5f0f\u306e\u72b6\u614b\u7ba1\u7406\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/brianegan/flutter_architecture_samples/tree/master/change_notifier_provider"},"provider_sample")," \u2013 ",(0,l.kt)("inlineCode",{parentName:"li"},"provider")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"li"},"ChangeNotifier")," \u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u306b\u95a2\u3059\u308b\u30b3\u30fc\u30c9\u4f8b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://bloclibrary.dev/#/jp/"},"Bloc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mobx.netlify.app/"},"MobX"))),(0,l.kt)("h3",{id:"\u30b9\u30c8\u30ec\u30fc\u30b8"},"\u30b9\u30c8\u30ec\u30fc\u30b8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/shared_preferences"},(0,l.kt)("inlineCode",{parentName:"a"},"shared_preferences"))," \u2013 \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u56fa\u6709\u306e\u6c38\u7d9a\u7684\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u30e9\u30c3\u30d7\u3057\u307e\u3059\u3002")),(0,l.kt)("h3",{id:"\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1"},"\u30a2\u30d7\u30ea\u5185\u8ab2\u91d1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note:  iOS, Android \u3068\u3082\u306b\u8ab2\u91d1\u30c6\u30b9\u30c8\u306e\u307f\u3092\u76ee\u7684\u3068\u3057\u305f\u30a2\u30d7\u30ea\u3067\u306f\u5be9\u67fb\u3092\u901a\u904e\u3057\u307e\u305b\u3093\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/in_app_purchase"},(0,l.kt)("inlineCode",{parentName:"a"},"in_app_purchase"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/flutter_inapp_purchase"},(0,l.kt)("inlineCode",{parentName:"a"},"flutter_in_app_purchase"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/purchases_flutter"},(0,l.kt)("inlineCode",{parentName:"a"},"purchases_flutter")))),(0,l.kt)("h2",{id:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8-1"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,l.kt)("h2",{id:"flutter-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},"Flutter \u30d7\u30ed\u30b8\u30a7\u30af\u30c8"),(0,l.kt)("h3",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u521d\u671f\u5316\u6642\u306e\u69cb\u6210"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u521d\u671f\u5316\u6642\u306e\u69cb\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 build.gradle : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u8a2d\u5b9a\n\u2502   \u2502   \u2514\u2500\u2500 src\n\u2502   \u2502   \u251c\u2500\u2500 debug : \u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u7528\u306e\u8a2d\u5b9a\n\u2502   \u2502   \u251c\u2500\u2500 main\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 AndroidManifest.xml : Android\u306e\u8a2d\u5b9a\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 java : \u30d7\u30e9\u30b0\u30a4\u30f3\u306a\u3069\u306b\u3088\u308bJava\u306e\u30b3\u30fc\u30c9\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 kotlin : Android\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u5b9f\u88c5\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 res : \u6587\u5b57\u5217\u30fb\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u3092\u8a2d\u5b9a\n\u2502   \u2502   \u2514\u2500\u2500 profile : \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u30d3\u30eb\u30c9\u7528\u306e\u8a2d\u5b9a\n\u2502   \u2514\u2500\u2500 build.gradle : \u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u8a18\u8ff0\n\u251c\u2500\u2500 build : (\u30d3\u30eb\u30c9\u6e08\u307f\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210)\n\u251c\u2500\u2500 ios\n\u2502   \u251c\u2500\u2500 Flutter\n\u2502   \u2502   \u251c\u2500\u2500 Debug.xcconfig : \u30c7\u30d0\u30c3\u30b0\u30d3\u30eb\u30c9\u7528\u306e\u8a2d\u5b9a\n\u2502   \u2502   \u2514\u2500\u2500 Release.xcconfig : \u30ea\u30ea\u30fc\u30b9\u30d3\u30eb\u30c9\u6642\u306e\u8a2d\u5b9a\n\u2502   \u251c\u2500\u2500 Runner\n\u2502   \u2502   \u251c\u2500\u2500 AppDelegate.swift : iOS\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u5b9f\u88c5\n\u2502   \u2502   \u251c\u2500\u2500 Assets.xcassets\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 AppIcon.appiconset : \u30a2\u30a4\u30b3\u30f3\u3092\u8a2d\u5b9a\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 LaunchImage.imageset : \u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u753b\u50cf\n\u2502   \u2502   \u251c\u2500\u2500 Base.lproj\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 LaunchScreen.storyboard : \u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Main.storyboard : iOS\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\n\u2502   \u2502   \u2514\u2500\u2500 Info.plist : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\n\u2502   \u2514\u2500\u2500 Runner.xcworkspace : Xcode\u3067\u306f\u3053\u3061\u3089\u3092\u958b\u304d\u307e\u3059\n\u251c\u2500\u2500 lib : Flutter\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059\n\u2502   \u2514\u2500\u2500 main.dart : Flutter\u3067\u6700\u521d\u306b\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\n\u251c\u2500\u2500 analysis_options.yaml : Dart \u306b\u304a\u3051\u308b\u9759\u7684\u89e3\u6790\u306e\u30eb\u30fc\u30eb\u3092\u8a18\u8ff0\n\u251c\u2500\u2500 pubspec.yaml : \u30d0\u30fc\u30b8\u30e7\u30f3\u3084Flutter\u3084Dart\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8a18\u8ff0\n\u251c\u2500\u2500 test : \u81ea\u52d5\u30c6\u30b9\u30c8\u3092\u8a18\u8ff0\n\u2514\u2500\u2500 web : Flutter Web\u7528\u306e\u8a2d\u5b9a\n")),(0,l.kt)("h3",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30e9\u30b0\u30a4\u30f3"),(0,l.kt)("li",{parentName:"ul"},"\u30d1\u30c3\u30b1\u30fc\u30b8"),(0,l.kt)("li",{parentName:"ul"},"\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u30b9\u30b1\u30eb\u30c8\u30f3")),(0,l.kt)("h2",{id:"\u30c6\u30b9\u30c8"},"\u30c6\u30b9\u30c8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5358\u4f53\u30c6\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30eb\u30fc\u30c8\u306b ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3092\u914d\u7f6e\u3057\u683c\u7d0d\u3057\u3066\u3044\u304d\u307e\u3059\u3002")),(0,l.kt)("h3",{id:"ci-github-actions"},"CI (GitHub Actions)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u4f8b"',title:'"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u4f8b"'},"name: Test\n\non:\n  push:\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]\n\njobs:\n  test:\n    runs-on: macos-latest\n\n    steps:\n    - uses: actions/checkout@v1\n    - name: Install Flutter\n      uses: subosito/flutter-action@v1.3.2\n    - name: Install app dependencies\n      run: flutter pub get\n    - name: Test app\n      run: flutter test --coverage\n    - name: Upload coverage to Codecov\n      uses: codecov/codecov-action@v1\n      with:\n        token: ${{ secrets.CODECOV_TOKEN }}\n        file: coverage/lcov.info\n\n")),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("h3",{id:"xcode-\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30d5\u30a9\u30eb\u30c0\u3092-finder-\u3067\u8868\u793a\u3059\u308b"},"Xcode \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30d0\u30a4\u30b9\u306e\u30d5\u30a9\u30eb\u30c0\u3092 Finder \u3067\u8868\u793a\u3059\u308b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u30c7\u30d0\u30a4\u30b9\u306eID\u3092\u8abf\u3079\u308b",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl list | grep 'Booted'\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u51fa\u529b\u7d50\u679c\u306e\u4f8b"',title:'"\u51fa\u529b\u7d50\u679c\u306e\u4f8b"'},"    iPhone 14 Pro Max (5E8E8B62-5B35-448C-ACDD-C6E060A23AF1) (Booted)\n"))),(0,l.kt)("li",{parentName:"ol"},"Finder \u3067 ",(0,l.kt)("inlineCode",{parentName:"li"},"/Users/$USER/Library/Developer/CoreSimulator/Devices/{\u30c7\u30d0\u30a4\u30b9ID}")," \u3092\u958b\u304f")))}m.isMDXComponent=!0}}]);