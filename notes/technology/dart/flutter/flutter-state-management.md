---
slug: /flutter-state-management
sidebar_label: 状態管理手法
---

# 【Flutter】状態管理手法

## 参考リンク

- 🔗 [List of state management approaches | Flutter](https://docs.flutter.dev/development/data-and-backend/state-mgmt/options)
- 🔗 [Flutter Architecture Samples](https://fluttersamples.com/) – アプリアーキテクチャのギャラリー

## Flutter の状態管理手法の変遷



## `StatefulWidget` ウィジェットを使った状態管理

* ウィジェットは [`StatefulWidget` クラス](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) を継承して作成しますが、状態は別で [`State`](https://api.flutter.dev/flutter/widgets/State-class.html) を継承して作成します。`StatefulWidget` の `createState()` で状態のインスタンスを返すことでこれらを関連付けます。
* 具体的な状態は、`State` のプライベートメンバーフィールドで表現します。
* 状態の取得は、このメンバーにアクセスすることで行います。
* 状態の更新は、`State` の `setState()` メソッドで行います。そうすることで、サブツリーに変更が通知されます。

```dart title="例"
// 👇 ウィジェット
class Bird extends StatefulWidget {
  const Bird({
    Key? key,
    this.color = const Color(0xFFFFE306),
    this.child,
  }) : super(key: key);

  final Color color;
  final Widget? child;

  @override
  State<Bird> createState() => _BirdState();
}

// 👇 状態クラス
class _BirdState extends State<Bird> {
  double _size = 1.0;  // 👈 具体的な状態

  void grow() {
    setState(() { _size += 0.1; });  // 👈 状態の更新
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: widget.color,
      transform: Matrix4.diagonal3Values(_size, _size, 1.0),
      child: widget.child,
    );
  }
}
```

## Provider

Provider は、[`InheritedWidget` クラス](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html) を使った状態管理実装で、Scoped Model パターンを活用しています。

- インストール
  ```bash
  flutter pub add provider
  ```
- インポート
  ```dart
  import 'package:provider/provider.dart';
  ```
- **モデル**は状態を表すクラスです。
- **Provider** ウィジェットによりモデルをウィジェットツリーに提供します。
- ツリー内で、`Consumer` ウィジェットによりモデルの内容を取得できます。

### 主な Provider の種類

> 🔗 [Making sense of all those Flutter Providers (Medium)](https://medium.com/flutter-community/making-sense-all-of-those-flutter-providers-e842e18f45dd)

- `Provider`
- `FutureProvider`
  > `FutureProvider` は基本的に [`FutureBuilder`](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html) ウィジェットのラッパーです。UI に表示するための初期データを渡し、提供したい値の Future を提供します。FutureProvider は Future が完了するのを待ち、Consumers にウィジェットを再構築するよう通知します。
- `StreamProvider`
  > `StreamProvider` は基本的に [`StreamBuilder`](https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html) のラッパーです。ストリームを提供すると、ストリームにイベントが発生したときに Consumer が再構築されます。
- `ChangeNotifierProvider`
  > モデル オブジェクトの変更をリッスンします。モデルは `ChangeNotifier` ミックスインを使用するか継承する必要があります。`notifyListeners()` で変更を通知します。
  > 
- `MultiProvider`
  > 複数の Provider を束ねます。
- `ProxyProvider`
  > `ProxyProvider` は、あるプロバイダから値を受け取り、それを別のプロバイダに注入できるようにします。

## Riverpod

Provider からインスパイアされた状態管理フレームワーク。

### 特徴

- [Provider](#provider) からインスパイアを受けている。
- `BuildContext` を使用ししておらず、Flutter に依存せずに利用可能。

### リンク

- [Riverpod 公式](https://riverpod.dev/ja/)
- 記事
  - [AsyncValueWidget: a reusable Flutter widget to work with AsyncValue (using Riverpod)](https://codewithandrea.com/articles/async-value-widget-riverpod/)

#### インストール

:::info Riverpod パッケージ

- 🔗 [`riverpod`](https://pub.dev/packages/riverpod)
- 🔗 [`flutter_riverpod`](https://pub.dev/packages/flutter_riverpod)
- 🔗 [`hooks_riverpod`](https://pub.dev/packages/hooks_riverpod)

:::

- ```bash title="フック利用あり"
  flutter pub add flutter_hooks hooks_riverpod
  ```
- ```bash title="フック利用なし"
  flutter pub add flutter_riverpod
  ```

#### インポート

- ```dart title="フック利用あり"
  import 'package:hooks_riverpod/hooks_riverpod.dart';
  ```
- ```dart title="フック利用なし"
  import 'package:flutter_riverpod/flutter_riverpod.dart';
  ```

#### 利用方法

1. 必要なだけ プロバイダ を作成
2. アプリ全体を `ProviderScope` で囲う
3. Riverpod 専用ウィジェットクラスからウィジェットを作成
4. `ref` オブジェクトを取得してプロバイダを利用

:::info 使用例

<details><summary>Hello World の表示例</summary>

```dart
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

// 👇 プロバイダ
final helloWorldProvider = Provider((_) => 'Hello world');

void main() {
  runApp(
    // 👇 プロバイダ スコープ
    ProviderScope(
      child: MyApp(),
    ),
  );
}

// 👇 ウィジェット
class MyApp extends HookConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // 👇 ref を監視し値を取得
    final String value = ref.watch(helloWorldProvider);

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Example')),
        body: Center(
          child: Text(value),
        ),
      ),
    );
  }
}
```

</details>

[Riverpod のサイト](https://riverpod.dev/ja/docs/getting_started) に多数のサンプルコードへのリンクがあります。サイドバーから次の項目を探してください：

- 使用例（公式）
- 使用例（サードパーティ）

:::

### `ProviderScope`

プロバイダをウィジェットで利用するには、アプリ全体を `ProviderScope` ウィジェットで囲む必要があります：

```dart
void main() {
  runApp(
    // 👇
    ProviderScope(
      child: MyApp(),
    ),
  );
}
```

#### `ProviderObserver`

[`ProviderObserver`](https://pub.dev/documentation/riverpod/latest/riverpod/ProviderObserver-class.html) は、ProviderContainer 内で起こる変化に、次のメソッドで反応します：

- `didAddProvider` – プロバイダが初期化されるたびに呼び出されます。
- `didDisposeProvider` – プロバイダが破棄されるたびに呼び出されます。
- `didUpdateProvider` – プロバイダが変更通知を送信するたびに呼び出されます。

```dart  title="【例】ProviderObserver　の全体像"
class MyObserver extends ProviderObserver {
  @override
  void didAddProvider(
    ProviderBase provider,
    Object? previousValue,
    Object? newValue,
    ProviderContainer container,
  ) -> void {/* ... */}
  
  @override
  didDisposeProvider(
    ProviderBase provider,
    ProviderContainer containers,
  ) -> void {/* ... */}
  
  @override
  didUpdateProvider(
    ProviderBase provider,
    Object? previousValue,
    Object? newValue,
    ProviderContainer container,
  ) -> void { /* ... */ }
}

void main() {
  runApp(ProviderScope(
    observers: [MyObserver()],
    child: const MyApp(),
  ));
}

class MyApp extends StatelessWidget { /* ... */ }
```

### ウィジェット

Riverpod に対応するためには、専用のクラスを継承してウィジェットを作成する必要があります。これにり、ウィジェットから `ref` を取得することができるようになります。

- [**`ConsumerWidget`**](https://pub.dev/documentation/flutter_riverpod/latest/flutter_riverpod/ConsumerWidget-class.html)

  [`StatelessWidget`](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) の代わりに使用する。（[🔗 例](https://riverpod.dev/ja/docs/concepts/reading#statelesswidget-%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB-consumerwidget-%E3%82%92%E7%B6%99%E6%89%BF%E3%81%99%E3%82%8B)）

- [**`ConsumerStatefulWidget`**](https://pub.dev/documentation/flutter_riverpod/latest/flutter_riverpod/ConsumerState-class.html) + [**`ConsumerState`**](https://pub.dev/documentation/flutter_riverpod/latest/flutter_riverpod/ConsumerStatefulWidget-class.html)

  [`StatefulWidget`](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) + [`State`](https://api.flutter.dev/flutter/widgets/State-class.html) の代わりに使用する。（[🔗 例](https://riverpod.dev/ja/docs/concepts/reading#statefulwidgetstate-%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB-consumerstatefulwidgetconsumerstate-%E3%82%92%E7%B6%99%E6%89%BF%E3%81%99%E3%82%8B)）

- [**`HookConsumerWidget`**](https://pub.dev/documentation/hooks_riverpod/latest/hooks_riverpod/HookConsumerWidget-class.html)

  [`HookWidget`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/HookWidget-class.html) の代わりに使用する。（[🔗 例](https://riverpod.dev/ja/docs/concepts/reading#hookwidget-%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB-hookconsumerwidget-%E3%82%92%E7%B6%99%E6%89%BF%E3%81%99%E3%82%8B)）

- [**`StatefulHookConsumerWidget`**](https://pub.dev/documentation/hooks_riverpod/latest/hooks_riverpod/StatefulHookConsumerWidget-class.html)

  [`HookWidget`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/HookWidget-class.html) ([`StatefulWidget`](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) ライフサイクル使用) の代わりに使用する。（[🔗 例](https://riverpod.dev/ja/docs/concepts/reading#hookwidget-%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB-statefulhookconsumerwidget-%E3%82%92%E7%B6%99%E6%89%BF%E3%81%99%E3%82%8B)）

### プロバイダ

プロバイダは、状態をラップするためのオブジェクトであり、その監視を可能にします。

```dart title="【例】プロバイダの作成"
final myProvider = Provider((ref) {
  return MyValue();
});
```

#### プロバイダの種類

- [`Provider`](https://riverpod.dev/ja/docs/providers/provider) – 基本のプロバイダ
- [`StateProvider`](https://riverpod.dev/ja/docs/providers/state_provider) – 外部から変更が可能な状態を公開するプロバイダ
- [`FutureProvider`](https://riverpod.dev/ja/docs/providers/future_provider) – 非同期操作が可能な `Provider`
- [`StreamProvider`](https://riverpod.dev/ja/docs/providers/stream_provider) –  `FutureProvider` の `Stream` 版
- [`StateNotifierProvider`](https://riverpod.dev/ja/docs/providers/state_notifier_provider) 
- [`ChangeNotifierProvider`](https://pub.dev/documentation/flutter_riverpod/latest/flutter_riverpod/ChangeNotifierProvider-class.html) – 【非推奨】[`ChangeNotifier`](https://pub.dev/documentation/state_notifier/latest/state_notifier/ChangeNotifier-class.html) を Flutter で利用するためのプロバイダ

#### プロバイダ修飾子

- [`.autoDispose`](https://riverpod.dev/ja/docs/concepts/modifiers/auto_dispose) – プロバイダの監視が終わったタイミングで、プロバイダに自動でステートを破棄させる
- [`.family`](https://riverpod.dev/ja/docs/concepts/modifiers/family) – プロバイダ外部の値を用いてプロバイダを作成する

```dart title="【例】プロバイダ修飾子の使用"
//                                 👇          👇
final userProvider = FutureProvider.autoDispose.family<User, int>((ref, userId) async {
  return fetchUser(userId);
});
```

### `ref`

`ref` はプロバイダを利用するためのオブジェクトです。`ref` はウィジェットもしくはプロバイダから取得することができます。

#### `ref` の取得方法

- プロバイダからの取得
  ```dart title="例"
  //                        👇
  final provider = Provider((ref) {
    final repository = ref.watch(repositoryProvider);
  
    return SomeValue(repository);
  });
  ```
- ウィジェットからの取得
  ```dart title="例"
  class HomeView extends ConsumerWidget {
    const HomeView({Key? key}) : super(key: key);
  
    @override                      // 👇
    Widget build(BuildContext context, WidgetRef ref) {
      final counter = ref.watch(counterProvider);
  
      return Text('$counter');
    }
  }
  ```
  
#### ref の使用方法

`ref` の使い方は3通り：

- `ref.watch(provider)` – プロバイダの値を取得した上で、その変化を監視する。
- `ref.listen(provider, callback)` – プロバイダの値を監視し、値が変化するたびにコールバック関数を呼び出す。
- `ref.read(provider)` – プロバイダのその時点での状態を取得

## 🚧 BLoC パターン

> ℹ️ BLoC = **B**usiness **Lo**gic **C**omponent

:::note 資料

- [Reactive Programming - Streams -BLoC](https://www.didierboelens.com/2018/08/reactive-programming-streams-bloc/) では、BLoC の概念を ReactiveX の背景から分かりやすく解説しています。

:::

### 概要

#### インストール

:::info Bloc パッケージ

- 🔗[`flutter_bloc`](https://pub.dev/packages/flutter_bloc) – Flutter ウィジェット
- 🔗[`replay_bloc`](https://pub.dev/packages/replay_bloc) – undo/redo を追加する拡張機能

:::

```bash
flutter pub add flutter_bloc
```

#### インポート

```dart
import 'package:flutter_bloc/flutter_bloc.dart';
```

### キーコンセプト

- Event – Bloc への入力です。
- State - Bloc の出力です。アプリケーションの状態の一部を表します。
- Transition – ある状態から別の状態への変化。「現在の状態」「イベント」「次の状態」で構成されます。

#### Cubit


### `lib` ディレクトリの構成

- `lib/`
  - `api/`
  - `blocs/`
  - `models/`
  - `pages/`
  - `widgets/`
  - `main.dart`

## Redux

概要：

- インストール
  ```bash
  flutter pub add redux
  ```
- インポート
  ```dart
  import 'package:redux/redux.dart';
  ```
