---
slug: /flutter
sidebar_label: Flutter
---

# Flutter

## リンク

### コア

- [Flutter](https://flutter.dev/)
- [API docs](https://api.flutter.dev/)
- [`flutter` CLI](https://docs.flutter.dev/reference/flutter-cli)
- [FlutterFire](https://firebase.flutter.dev/) – Flutter の公式 Firebase プラグイン

### ウィジェット

- [Widget catalog](https://docs.flutter.dev/development/ui/widgets)
- [Flutter Gallery](https://gallery.flutter.dev/)

### サンプル

- [Flutter Samples](https://flutter.github.io/samples/)
- [Flutter Architecture Samples](https://fluttersamples.com/) – 様々な形の TODO アプリ
- [暗黙のアニメーション](https://docs.flutter.dev/codelabs/implicit-animations) – [`ImplicitlyAnimatedWidget`](https://api.flutter.dev/flutter/widgets/ImplicitlyAnimatedWidget-class.html) の使い方
- [gskinner team](https://github.com/gskinnerTeam)
  - [Flutter Folio](https://github.com/gskinnerTeam/flutter-folio) – iOS、Android、MacOS、Windows、Linux、Webをターゲットに、Flutterがいかに素晴らしいマルチプラットフォーム体験を提供できるかを紹介するデモアプリです。[gskinner](https://gskinner.com/) と Google の協力で作られたFlutter Folioは、ユーザーの期待、入力デバイス、各プラットフォームのイディオムを意図的に考慮し、どのデバイスでも違和感なく動作することを保証しています。
  - [adaptive_app_demos](https://github.com/gskinnerTeam/flutter-adaptive-demo) – アダプティブ アプリ開発手法のデモ コード
  - [Flokk](https://github.com/gskinnerTeam/flokk) – GitHub および Twitter と統合された最新の Google コンタクト マネージャー
  - [Wonderous](https://github.com/gskinnerTeam/flutter-wonderous-app)
- [Flutter Weather App Example](https://github.com/bizz84/open_weather_example_flutter) – [Flutter App Architecture: The Repository Pattern](https://codewithandrea.com/articles/flutter-repository-pattern/) のチュートリアルと連動する、Riverpod を活用したサンプルプロジェクト。

### チュートリアル

その他のチュートリアル：

- [Google Codelabs](https://codelabs.developers.google.com/?product=flutter)
- [codewithandrea.com](https://codewithandrea.com/)
- Medium
  - [x] [Flutter インスペクターでレイアウトの問題をデバッグする方法 (Medium)](https://medium.com/flutter/how-to-debug-layout-issues-with-the-flutter-inspector-87460a7b9db)

### その他

- [NaokiKosuge's gist](https://gist.github.com/NaokiKosuge/6f7bc8165d49b94bfadca1a7f2bc01f1)
- [fvm | Flutter Version Management](https://fvm.app/) – Flutter SDK バージョン管理ツール
- ブログ
  - [Flutter Project Structure: Feature-first or Layer-first?](https://codewithandrea.com/articles/flutter-project-structure/) – プロジェクトの構成に迷った際に参考になります。
  - [Flutter x Clean Architecture](https://itnext.io/flutter-clean-architecture-b53ce9e19d5a)
  
## パッケージ

### 基本

- [`webview_flutter`](https://pub.dev/packages/webview_flutter) – WebView ウィジェット
- [`path_provider`](https://pub.dev/packages/path_provider) – ファイルシステムでよく使用される場所を見つけるための Flutter プラグイン。
- [`go_router`](https://gorouter.dev/) – 宣言型ルーティング（[日本語ドキュメント](https://github.com/csells/go_router/blob/main/docs/ja/index.mdx)）
- [`flutter_animate`](https://pub.dev/packages/flutter_animate) – アニメーション強化

### データベース

- [`floor](https://pub.dev/packages/floor)
- [Isar](https://isar.dev/ja/)

### プラットフォーム最適化

- [`split_view`](https://pub.dev/packages/split_view) – 画面の分割

### アプリ状態管理

- [`provider`](https://pub.dev/packages/provider) – [`InheritedWidget` クラス](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html) のラッパー。
- [Riverpod](https://riverpod.dev/ja/) – リアクティブ・キャッシングとデータバインディングを実現するフレームワーク
    > - 🔗 [Simple app state management](https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple) – `provider` と `ChangeNotifier` の使用に関して例を公開している Flutter 公式の状態管理ドキュメント。
    > - 🔗 [provider_sample](https://github.com/brianegan/flutter_architecture_samples/tree/master/change_notifier_provider) – `provider` と `ChangeNotifier` を使用したアプリの実装に関するコード例
- [Bloc](https://bloclibrary.dev/#/jp/)
- [MobX](https://mobx.netlify.app/)

### ストレージ

- [`shared_preferences`](https://pub.dev/packages/shared_preferences) – プラットフォーム固有の永続的ストレージをラップします。

### アプリ内課金

> Note:  iOS, Android ともに課金テストのみを目的としたアプリでは審査を通過しません。

- [`in_app_purchase`](https://pub.dev/packages/in_app_purchase)
- [`flutter_in_app_purchase`](https://pub.dev/packages/flutter_inapp_purchase)
- [`purchases_flutter`](https://pub.dev/packages/purchases_flutter)

## ウィジェット

## Flutter プロジェクト

### プロジェクト初期化時の構成

```
/
├── android
│   ├── app
│   │   ├── build.gradle : アプリケーションのビルド設定
│   │   └── src
│   │   ├── debug : デバッグビルド用の設定
│   │   ├── main
│   │   │   ├── AndroidManifest.xml : Androidの設定
│   │   │   ├── java : プラグインなどによるJavaのコード
│   │   │   ├── kotlin : Androidのネイティブ実装
│   │   │   └── res : 文字列・アイコンなどを設定
│   │   └── profile : プロフィールビルド用の設定
│   └── build.gradle : すべてのモジュールの依存関係を記述
├── build : (ビルド済みのファイルが自動的に生成)
├── ios
│   ├── Flutter
│   │   ├── Debug.xcconfig : デバッグビルド用の設定
│   │   └── Release.xcconfig : リリースビルド時の設定
│   ├── Runner
│   │   ├── AppDelegate.swift : iOSのネイティブ実装
│   │   ├── Assets.xcassets
│   │   │   ├── AppIcon.appiconset : アイコンを設定
│   │   │   └── LaunchImage.imageset : スプラッシュ画像
│   │   ├── Base.lproj
│   │   │   ├── LaunchScreen.storyboard : スプラッシュ
│   │   │   └── Main.storyboard : iOSのストーリーボード
│   │   └── Info.plist : アプリケーションの設定ファイル
│   └── Runner.xcworkspace : Xcodeではこちらを開きます
├── lib : Flutterのコードを書きます
│   └── main.dart : Flutterで最初に実行されるコード
├── analysis_options.yaml : Dart における静的解析のルールを記述
├── pubspec.yaml : バージョンやFlutterやDartのパッケージを記述
├── test : 自動テストを記述
└── web : Flutter Web用の設定
```

### プロジェクトタイプ

- アプリケーション
- プラグイン
- パッケージ
- モジュール
- スケルトン

## テスト

- 単体テストファイルはプロジェクトルートに `test` ディレクトリにを配置し格納していきます。

### CI (GitHub Actions)

```yaml title="ワークフローの例"
name: Test

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  test:
    runs-on: macos-latest

    steps:
    - uses: actions/checkout@v1
    - name: Install Flutter
      uses: subosito/flutter-action@v1.3.2
    - name: Install app dependencies
      run: flutter pub get
    - name: Test app
      run: flutter test --coverage
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v1
      with:
        token: ${{ secrets.CODECOV_TOKEN }}
        file: coverage/lcov.info

```

## Tips

### Xcode シミュレータのデバイスのフォルダを Finder で表示する

1. デバイスのIDを調べる
   ```bash
   xcrun simctl list | grep 'Booted'
   ```
   ```text title="出力結果の例"
       iPhone 14 Pro Max (5E8E8B62-5B35-448C-ACDD-C6E060A23AF1) (Booted)
   ```
2. Finder で `/Users/$USER/Library/Developer/CoreSimulator/Devices/{デバイスID}` を開く
