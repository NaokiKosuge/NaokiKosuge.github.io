---
slug: /reactivex
sidebar_label: ReactiveX
---

# 【デザインパターン】ReactiveX

[ReactiveX](https://reactivex.io/) は、リアクティブ・プログラミングとして知られる観測可能なストリームを用いた非同期プログラミングのための API です。「Observer パターン」、「イテレーターパターン」、「関数型プログラミング」のアイデアから成っています。

## コンセプト

- [⇣ Observable](#observable) – データを取得・変換する仕組み
- [⇣ Operators](#operators)
- [⇣ Single](#single)
- [⇣ Subject](#subject)
- [⇣ Scheduler](#scheduler)

### Observable

> 🔗 [ReactiveX - Observable](https://reactivex.io/documentation/observable.html)

**Observable**－"stream" とも呼ばれる－は、パブリッシャーとサブスクライバー間でメッセージを渡すためのサポートを提供します。

#### Observable の形態

- **Hot Observable** は、作成されるとすぐにアイテムの発行を開始します。
- **Cold Observable** は、Observer から購読されてからアイテムの発行を開始します。
- **Connectable Observable** は、Connect メソッドが呼び出されたらアイテムの発行を開始します。

### Observer

**Observer**－"subscriber", "watcher", "reactor" などとも呼ばれる－は、 Observable を購読 (subscribe) し、通知を受け取る度にハンドラーを実行することができます。

#### subscribe

`Observer` の `subscribe` メソッドは、Observer を Observable に接続する方法です。3つのサブセット元に実行されます。

- `onNext` – Observable によって発行されたアイテムをパラメーターとして受け取ります。
- `onError` – エラー発生に反応します。以後 `onNext` や `onCompleted` は呼び出されません。
- `onCompleted` – エラーが発生しなかった場合に、最後に呼び出されます。

#### unsubscribe

`Observer` の `unsubscribe` メソッドは Observable の購読を解除します。

### Operators

> 🔗 [ReactiveX - Operators](https://reactivex.io/documentation/operators.html)

**オペレーター** は Observable を操作するためのユーティリティです。数多くのオペレータが用意されています。特に Observable を返すオペレーターはメソッドチェーンを行うことができます。

### Single

> 🔗 [ReactiveX - Single](https://reactivex.io/documentation/single.html)

**Single** は Observable のバリアントで、一部の ReactiveX 実装に用意されています。

Single の subscribe は Observable とは異なり、2つのサブセットを元に実行されます。

- `onSuccess`
- `onError`

そして、一度これらのうち1つを呼び出すと、サブスクリプションは終了します。

### Subject

> 🔗 [ReactiveX - Subject](https://reactivex.io/documentation/subject.html)

**Subject** は、Observer と Observable の両方の性質を持ち、ブリッジまたはプロキシとして機能します。

Subject には次の4つの種類があり、実装によって用意されているものが異なる場合があります：

- AsyncSubject – Observer は、AsyncSubject 側の `onCompleted` が呼ばれた直後に発行された値のみ受け取ります。
- BehaviorSubject – Observer は、購読開始時点から直前の値以降に BehaviorSubject によって発行された値を受け取ります。
- PublishSubject – Observer は、購読開始時点以降に発行された値を `onNext` で受け取ります。
- ReplaySubject – Observer は、いつ購読するかに関係なく、ReplaySubject によって発行されたすべての値を受け取ります。

### Scheduler

> 🔗 [ReactiveX - Scheduler](https://reactivex.io/documentation/scheduler.html)

**Scheduler** は、マルチスレッド環境下に有用です。Observableのカスケードの処理の実行場所と時間を自在に制御することができます。

## ReactiveX の実装一覧

> 🔗 [ReactiveX - Languages](https://reactivex.io/languages.html)

- Java: [RxJava](https://github.com/ReactiveX/RxJava)
- JavaScript: [RxJS](https://rxjs.dev/)
- C#: [Rx.Net](https://github.com/dotnet/reactive)
- C#(Unity): UniRx
- Scala: [RxScala](https://reactivex.io/rxscala/)
- Clojure: [RxClojure](https://github.com/ReactiveX/RxClojure)
- C++: [RxCpp](https://github.com/Reactive-Extensions/RxCpp)
- Lua: [RxLua](https://github.com/bjornbytes/RxLua)
- Ruby: [Rx.rb](https://github.com/Reactive-Extensions/Rx.rb)
- Python: [RxPY](https://github.com/ReactiveX/RxPY)
- Go: [RxGo](https://github.com/ReactiveX/RxGo)
- Groovy: [RxGroovy](https://github.com/ReactiveX/RxGroovy)
- JRuby: [RxJRuby](https://github.com/ReactiveX/RxJRuby)
- Kotlin: [RxKotlin](https://github.com/ReactiveX/RxKotlin)
- Swift: [RxSwift](https://github.com/ReactiveX/RxSwift)
- PHP: [RxPHP](https://github.com/ReactiveX/RxPHP)
- Elixir: [reaxive](https://github.com/alfert/reaxive)
- Dart: [RxDart](https://pub.dev/packages/rxdart)
- [RxNetty](https://github.com/ReactiveX/RxNetty)
- [RxAndroid](https://github.com/ReactiveX/RxAndroid)
- [RxCocoa](https://github.com/kzaher/RxSwift)
