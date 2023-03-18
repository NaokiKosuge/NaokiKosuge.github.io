---
slug: /dart
sidebar_label: Dart
---

# Dart

## Dart プロジェクト

### 命名規則

### `analysis_options.yaml`

### `pubspec.yml`

> すべての pub パッケージは、その依存関係を指定できるように、いくつかのメタデータを必要とします。他の人と共有されるPubパッケージは、ユーザーがそれらを発見できるように、他の情報も提供する必要があります。このすべてのメタデータはパッケージの pubspec に入ります: YAML 言語で書かれた `pubspec.yaml` というファイルです。
>
> 🔗 [The pubspec file | Dart](https://dart.dev/tools/pub/pubspec)

### `pubspeck.lock`

- **ライブラリパッケージの場合、**`pubspec.lock` ファイルをコミットしないでください。
- **アプリケーションパッケージの場合、**`pubspec.lock` ファイルをコミットすることをお勧めします。

## 例外とエラーの種類

- [`Eception`](https://api.dart.dev/stable/dart-core/Exception-class.html)
  - [`DeferredLoadException`](https://api.dart.dev/stable/dart-async/DeferredLoadException-class.html) – 遅延ライブラリの読み込みに失敗した場合にスローされます。
  - [`FormatException`](https://api.dart.dev/stable/dart-core/FormatException-class.html) – 文字列またはその他のデータが予期された形式を持たず、解析または処理できない場合にスローされる例外。
  - [`IntegerDivisionByZeroException`](https://api.dart.dev/stable/dart-core/IntegerDivisionByZeroException-class.html)
  - [`IOException`](https://api.dart.dev/stable/dart-io/IOException-class.html) – IO 関連のすべての例外の基本クラス。
  - [`IsolateSpawnException`](https://api.dart.dev/stable/dart-isolate/IsolateSpawnException-class.html) – isolate を作成できない場合にスローされます。
  - [`TimeoutException`](https://api.dart.dev/stable/dart-async/TimeoutException-class.html) – 非同期の結果を待っている間にスケジュールされたタイムアウトが発生するとスローされます。
- [`Error`](https://api.dart.dev/stable/dart-core/Error-class.html)
  - [`AbstractClassInstantiationError`](https://api.dart.dev/stable/2.1.1/dart-core/AbstractClassInstantiationError-class.html) – 抽象クラスをインスタンス化しようとしたときにスローされるエラー。
  - [`ArgumentError`](https://api.dart.dev/stable/dart-core/ArgumentError-class.html) – 関数に受け入れられない引数が渡されたときにスローされるエラー。
  - [`AssertionError`](https://api.dart.dev/stable/dart-core/AssertionError-class.html) – assert ステートメントが失敗したときに、ランタイム システムによってスローされるエラー。
  - [`AsyncError`](https://api.dart.dev/stable/dart-async/AsyncError-class.html) – エラーとスタック トレースのペア。 [`Zone.errorCallback`](https://api.dart.dev/stable/dart-async/Zone/errorCallback.html) によって返されます。
  - [`CastError`](https://api.dart.dev/stable/dart-core/CastError-class.html) – キャスト操作が失敗したときにランタイム システムによってスローされるエラー。
  - [`ConcurrentModificationError`](https://api.dart.dev/stable/dart-core/ConcurrentModificationError-class.html) – 反復中にコレクションが変更されたときに発生するエラー。
  - [`CyclicInitializationError`](https://api.dart.dev/stable/dart-core/CyclicInitializationError-class.html) – 遅延初期化された変数を初期化できない場合にスローされるエラー。
  - [`FallThroughError`](https://api.dart.dev/stable/dart-core/FallThroughError-class.html) – コントロールが switch ケースの最後に到達したときにスローされるエラー。
  - [`JsonUnsupportedObjectError`](https://api.dart.dev/stable/dart-convert/JsonUnsupportedObjectError-class.html) – オブジェクトをシリアライズできない場合、JSON シリアライゼーションによってスローされるエラー。
  - [`NoSuchMethodError`](https://api.dart.dev/stable/dart-core/NoSuchMethodError-class.html) – `Object` の `noSuchMethod` のデフォルト実装によってスローされるエラー。
  - [`NullThrownError`](https://api.dart.dev/stable/dart-core/NullThrownError-class.html) – `null` をスローしようとするとエラーがスローされます。
  - [`OutOfMemoryError`](https://api.dart.dev/stable/dart-core/OutOfMemoryError-class.html)
  - [`RemoteError`](https://api.dart.dev/stable/2.1.1/dart-isolate/RemoteError-class.html) – 別の isolate からのエラーの説明。
  - [`StackOverflowError`](https://api.dart.dev/stable/dart-core/StackOverflowError-class.html)
  - [`StateError`](https://api.dart.dev/stable/dart-core/StateError-class.html) – オブジェクトの現在の状態では、操作は許可されませんでした。
  - [`UnimplementedError`](https://api.dart.dev/stable/dart-core/UnimplementedError-class.html) – まだ実装されていない操作によってスローされます。
  - [`UnsupportedError`](https://api.dart.dev/stable/dart-core/UnsupportedError-class.html) – この操作はオブジェクトによって許可されていません。

## テスト

### matcher

### モック

---

## リンク

### コア

- [Dart](https://dart.dev/)
  -[Dart API docs](https://api.dart.dev/)
- [DartPad](https://dartpad.dev/)
- [pub.dev](https://pub.dev/)
- [Awesome Flutter](https://github.com/Solido/awesome-flutter)

## パッケージ

### 開発ツール

- [`rps`](https://pub.dev/packages/rps) – `pubspec.yaml` ファイルからスクリプトを定義して使用する

### 基本

- [`oauth2`](https://pub.dev/packages/oauth2)
- [`http`](https://pub.dev/packages/http) – HTTP リクエストを作成するための構成可能な Future ベースのライブラリ。
- [`url_launcher`](https://pub.dev/packages/url_launcher) – URL を起動するための Flutter プラグイン。
- [`flex_color_scheme`](https://pub.dev/packages/flex_color_scheme)
- [`shelf_cors_headers`](https://pub.dev/packages/shelf_cors_headers) – CORS

### アーキテクチャ

- [`rxdart`](https://pub.dev/packages/rxdart)

### コードジェネレーター

- [`json_serializable`](https://pub.dev/packages/rjson_serializablexdart)
- [`freezed`](https://pub.dev/packages/freezed)

### データベース

- [`sqfentity`](https://pub.dev/packages/sqfentity) – SQLite (`sqflite`) ORM
- [`sqflite`](https://pub.dev/packages/sqflite) – SQLite
- [`drift`](https://pub.dev/packages/drift) – リアクティブな SQLite

### 特定のサービス

- [`github`](https://pub.dev/packages/github)
- Google
  - [`googleapis`](https://pub.dev/packages/googleapis) – Google API にアクセスするための生成された Dart ライブラリ。
  - [`googleapis_auth`](https://pub.dev/packages/googleapis_auth) – Google OAuth2
  - [`google_sign_in`](https://pub.dev/packages/google_sign_in)
  - [`extension_google_sign_in_as_googleapis_auth`](https://pub.dev/packages/extension_google_sign_in_as_googleapis_auth) – `google_sign_in` プラグインと `googleapis` パッケージ間のブリッジ
