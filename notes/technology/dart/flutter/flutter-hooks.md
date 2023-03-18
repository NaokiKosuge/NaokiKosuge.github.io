---
slug: /flutter-hooks
sidebar_label: Flutter フック
---

# Flutter フック

[Flutter Hooks](https://pub.dev/packages/flutter_hooks) は、React フックにインスパイアされたウィジェットのライフサイクルを管理するオブジェクトです。

## 導入

1. インストール
  ```bash
  flutter pub add flutter_hooks
  ```
1. インポート
  ```dart
  import 'package: flutter_hooks/flutter_hooks.dart';
  ```
1. 利用
  ```dart
  class Example extends HookWidget {
    const Example({Key? key, required this.duration})
        : super(key: key);
  
    final Duration duration;
  
    @override
    Widget build(BuildContext context) {
      final controller = useAnimationController(duration: duration);
      return Container();
    }
  }
  ```

## ウィジェット

フックは [`HookWidget`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/HookWidget-class.html) を継承したウィジェットのなかで利用することができます。

## 既存のフック

* プリミティブ
  * [`useEffect`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useEffect.html) – 副作用とオプションでそれらをキャンセルするのに役立ちます。
  * [`useState`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useState.html) – 変数を作成し、その変数を購読します。
  * [`useMemoized`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useMemoized.html) – 複合オブジェクトのインスタンスをキャッシュします。
  * [`useRef`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useRef.html) – 単一の可変プロパティを含むオブジェクトを作成します。
  * [`useCallback`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useCallback.html) – 関数インスタンスをキャッシュします。
  * [`useContext`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useContext.html) – `HookWidget` の `BuildContext` を取得します。
  * [`useValueChanged`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useValueChanged.html) – 値を監視し、その値が変更されるたびにコールバックをトリガーします。
* オブジェクトバインディング
  * [`useStream`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useStream.html) – `Stream` を購読し、その現在の状態を `AsyncSnapshot` として返します。
  * [`useStreamController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useStreamController.html) – 自動的に破棄される `StreamController` を作成します。
  * [`useFuture`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useFuture.html) – `Future` をサブスクライブし、現在の状態を `AsyncSnapshot` として返します。
* アニメーション関連
  * [`useSingleTickerProvider`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useSingleTickerProvider.html) – 単一使用の `TickerProvider` を作成します。
  * [`useAnimationController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useAnimationController.html) – 自動的に破棄される `AnimationController` を作成します。
  * [`useAnimation`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useAnimation.html) – `Animation` を購読し、その値を返します。
* リッスン運可能な関連
  * [`useListenable`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useListenable.html) – `Listenable` をサブスクライブし、リスナーが呼び出されるたびにビルドが必要としてウィジェットをマークします。
  * [`useListenableSelector`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useListenableSelector.html) – `useListenable` に似ていますが、UI の再構築をフィルタリングできます。
  * [`useValueNotifier`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useValueNotifier.html) – 自動的に破棄される `ValueNotifier` を作成します。
  * [`useValueListenable`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useValueListenable.html) – `ValueListenable` を購読し、その値を返します。
* その他
  * [`useReducer`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useReducer.html) – より複雑な状態の `useState` の代替。
  * [`usePrevious`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/usePrevious.html) – 以前のウィジェット `build` から `usePrevious` に呼び出された前の引数を返します。
  * [`useTextEditingController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useTextEditingController.html) – `TextEditingController` を作成します。
  * [`useFocusNode`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useFocusNode.html) – `FocusNode` を作成します。
  * [`useTabController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useTabController.html) – `TabController` を作成して破棄します。
  * [`useScrollController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useScrollController.html) – `ScrollController` を作成して破棄します。
  * [`usePageController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/usePageController.html) – `PageController` を作成して破棄します。
  * [`useAppLifecycleState`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useAppLifecycleState.html) – 現在の `AppLifecycleState` を返し、変更時にウィジェットを再構築します。
  * [`useOnAppLifecycleStateChange`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useOnAppLifecycleStateChange.html) – `AppLifecycleState` の変更をリッスンし、変更時にコールバックをトリガーします。
  * [`useTransformationController`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useTransformationController.html) – `TransformationController` を作成して破棄します。
  * [`useIsMounted`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useIsMounted.html) – フックの `State.mounted` に相当します。
  * [`useAutomaticKeepAlive`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useAutomaticKeepAlive.html) – フックの `AutomaticKeepAlive` ウィジェットに相当します。
  * [`useOnPlatformBrightnessChange`](https://pub.dev/documentation/flutter_hooks/latest/flutter_hooks/useOnPlatformBrightnessChange.html) – プラットフォームの明るさの変更をリッスンし、変更時にコールバックをトリガーします。

## カスタムフック

フックは**関数フック**と**クラスフック**の2通りを作成することができます。

### 関数フック

```dart title="【例】関数フック"
import 'package: flutter_hooks/flutter_hooks.dart';

ValueNotifier<T> useLoggedState<T>([T initialData]) {
  final result = useState<T>(initialData);
  useValueChanged(result.value, (_, __) {
    print(result.value);
  });
  return result;
}
```

### クラスフック

> フックが複雑になりすぎた場合は、Hook を継承したクラスに変換することができます - そして、`Hook.use` を使って使用することができます。
クラスとして、フックは `State` クラスに非常に似ていて、ウィジェットのライフサイクルや `initHook`, `dispose`, `setState` などのメソッドにアクセスできるようになります。
> 
> 通常は、クラスを関数の下に隠すことをお勧めします。

```dart title="【例】クラスフック"
import 'package: flutter_hooks/flutter_hooks.dart';

Result useMyHook() {
  return use(const _TimeAlive());
}

Result useMyHook() {
  return use(const _TimeAlive());
}

class _TimeAlive extends Hook<void> {
  const _TimeAlive();

  @override
  _TimeAliveState createState() => _TimeAliveState();
}

class _TimeAliveState extends HookState<void, _TimeAlive> {
  DateTime start;

  @override
  void initHook() {
    super.initHook();
    start = DateTime.now();
  }

  @override
  void build(BuildContext context) {}

  @override
  void dispose() {
    print(DateTime.now().difference(start));
    super.dispose();
  }
}
```
