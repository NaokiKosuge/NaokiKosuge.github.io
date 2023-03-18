---
slug: /reactnative
sidebar_label: React Native
---

# React Native

## 開発環境の構築

> 🔗 [Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup)

- ⇣ [Expo CLI](#expo-cli) – ウェブ開発者向け
- ⇣ [React Native CLI](#react-native-cli) – モバイル開発者向け
- ⇣ [Snack](#snack) – 手軽に Expo で試行したい方向け

### Expo CLI

> 🔗 [Expo](https://expo.dev/)

Expo CLI を使用すると、開発環境を構築することなく、物理デバイス上で React Native アプリを実行することができます。

```bash title="Expo CLI による React Native プロジェクトの開始"
npm i -g expo-cli
expo init AwesomeProject
# → 使用するテンプレートを選択します。
cd AwesomeProject
npm start
```

更に、実機確認のために、iOS デバイスまたは Android デバイスに Expo クライアントアプリをインストールします。

:::caution 警告

Expo を使用してプロジェクトを作成するときにネイティブコードをビルドしないため、Expo クライアントアプリで使用可能な React Native API とコンポーネント以外のカスタムネイティブモジュールを含めることはできません。

いずれは自分自身のネイティブコードを含める必要があるとわかっている場合でも、Expo は良い方法です。その場合、独自のネイティブビルドを作成するために、最終的には「イジェクト」する必要があります。イジェクトした場合、プロジェクトでの作業を継続するには「React Native CLI」が必要になります。

:::

### React Native CLI

- 既存のネイティブアプリに React Native を統合する
- アプリにネイティブモジュールが必要なことがわかっている

－－このような場合、React Native CLI を利用することが推奨されます。この方法を採用する場合、Xcode のインストールや Android 開発環境の構築が必要となります。

iOS と Android のどちらで開発を行うかによって方法が異なります。また、開発 OS (macOS/Windows/Linux) によっても方法が異なるため、注意が必要です。

以降は、**macOS** における手順となります。

#### 依存関係のインストール

- iOS 開発
  > 必然的に開発 OS は **macOS** となります。
  > 
  > 「Node」、「[Watchman](https://facebook.github.io/watchman)」、「React Native CLI」、「Xcode」、「[CocoaPods](https://cocoapods.org/)」が必要となります：
  > ```bash title="依存関係のインストール"
  > brew install node
  > brew install watchman
  > sudo gem install cocoapods
  > # React Native CLI は npx を使用して実行します：
  > npx react-native <command>
  > ```
  > Xcode は、コマンドラインツールが必要になります。これには、Xcodeを開き、メニューから **Preferences...** ≫ **Locations** ≫ **Command Line Tools** → ドロップダウンから選択します。
- Android 開発
  > 1. [Android Studio](https://developer.android.com/studio?hl=ja) をインストールします。
  > 2. Android Studio から `Android 11 (R)` SDK をインストールします。更に、`Android 11 (R)` の詳細から `Intel x86 Atom_64 System Image` または `Google APIs Intel x86 Atom System Image` をインストールします。
  > 3. `ANDROID_HOME` 環境変数を構成します。`~/.zshrc` 等に次の内容を追加します：
  >
  >   ```bash
  >   export ANDROID_HOME=$HOME/Library/Android/sdk
  >   export PATH=$PATH:$ANDROID_HOME/emulator
  >   export PATH=$PATH:$ANDROID_HOME/tools
  >   export PATH=$PATH:$ANDROID_HOME/tools/bin
  >   export PATH=$PATH:$ANDROID_HOME/platform-tools
  >   ```


#### 新しいアプリケーションの作成

```bash title="React Native CLI による新規アプリの作成方法"
npx react-native init AwesomeProject
# TypeScript を使用する場合：
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

#### 【Android】デバイスの準備

- **物理デバイスを使用する場合**は、デバイスをコンピューターに USB ケーブルで接続します。
- **仮想デバイスを使用する場合**は、[Android Studio](https://developer.android.com/studio?hl=ja) の AVD を使用します。
  > :::info 新しい AVD の作成方法
  > **Create Virtual Device...** ≫ リストから任意の電話を選択し、**次へ** ≫ R API レベル30 の画像を選択し、**次へ** ≫ **完了**
  > :::

#### React Native アプリの実行

1. Metro バンドラーを起動
  > ```bash
  > npx react-native start
  > ```
2. アプリケーションを開始
  > ```bash
  > npx react-native run-ios
  > ```

### Snack

[Snack](https://snack.expo.dev/) は、ウェブ上で Expo が利用できるサービスです。

## Expo

> 🔗 [docs.expo.dev](https://docs.expo.dev/)

### ワークフロー

> 🔗 [Workflows - Expo Documentation](https://docs.expo.dev/introduction/managed-vs-bare/)

Expo を使用した開発には、2つのアプローチがあります：

- **Managed workflow**
  > JavaScript を使用した開発で Expo のツールとサービスで全てを処理します。ネイティブモジュールが必要になった場合、`eject` を行うことで、"Bare workflow" に以降することができます。
- **Bare workflow**
  > 任意の Expo ライブラリとサービスと共に、ネイティブ iOS (Xcode) または Android (Android Studio) で開発を行います。

### CLI

`expo-cli` は、React Native プロジェクトの設定と公開を行うためのコマンドラインユーティリティです。

```bash title="インストール"
npm i -g expo-cli
```

<details>
<summary>

```bash
expo --help
```

</summary>

```
  Usage: expo [command] [options]

  Options:
  
    -V, --version                     output the version number
    --non-interactive                 Fail, if an interactive prompt would be required to continue.
    -h, --help                        output usage information
  
  Commands:

    init [name]                       Create a new Expo project
    start [path]                      Start a local dev server for the app
    start:web [path]                  Start a Webpack dev server for the web app
    export [path]                     Export the static files of the app for hosting it on a web server
    install [packages...]             Install a module or other package to a project
    run:android [path]                Run the Android app binary locally
    run:ios [path]                    Run the iOS app binary locally
    send [path]                       Share the project's URL to an email address

    login                             Login to an Expo account
    logout                            Logout of an Expo account
    register                          Sign up for a new Expo account
    whoami                            Return the currently authenticated account

    client:install:ios                Install Expo Go for iOS on the simulator
    client:install:android            Install Expo Go for Android on a connected device or emulator

    config [path]                     Show the project config
    doctor [path]                     Diagnose issues with the project
    upgrade [sdk-version]             Upgrade the project packages and config for the given SDK version

    customize:web [path]              Eject the default web files for customization
    prebuild [path]                   Create native iOS and Android project files before building natively.
                                      Learn more: https://docs.expo.dev/workflow/customizing/

    publish [path]                    Deploy a project to Expo hosting
    publish:set [path]                Specify the channel to serve a published release
    publish:rollback [path]           Undo an update to a channel
    publish:history [path]            Log the project's releases
    publish:details [path]            Log details of a published release

    build:web [path]                  Build the web app for production

    credentials:manager [path]        Manage your credentials
    fetch:ios:certs [path]            Download the project's iOS standalone app signing credentials
    fetch:android:keystore [path]     Download the project's Android keystore
    fetch:android:hashes [path]       Compute and log the project's Android key hashes
    fetch:android:upload-cert [path]  Download the project's Android keystore

    push:android:upload [path]        Upload an FCM key for Android push notifications
    push:android:show [path]          Log the value currently in use for FCM notifications for this project
    push:android:clear [path]         Delete a previously uploaded FCM credential

    url [path]                        Log a URL for opening the project in Expo Go
    url:ipa [path]                    Log the download URL for the standalone iOS binary
    url:apk [path]                    Log the download URL for the standalone Android binary

    webhooks [path]                   List all webhooks for a project
    webhooks:add [path]               Add a webhook to a project
    webhooks:remove [path]            Delete a webhook
    webhooks:update [path]            Update an existing webhook

    build:ios [path]                  Superseded by eas build in eas-cli
    build:android [path]              Superseded by eas build in eas-cli
    build:status [path]               Superseded by eas build:list in eas-cli
    eject [path]                      Superseded by expo prebuild
    upload:android [path]             Superseded by eas submit in eas-cli
    upload:ios [path]                 Superseded by eas submit in eas-cli
    client:ios [path]                 Superseded by Expo Dev Clients

  Run a command with --help for more info 💡
    $ expo start --help
```

</details>

#### ビルド

```bash
expo build:android
expo build:ios
```

### 構成 (`app.json`)

### Expo SDK

Expo ライブラリのセット

### クライアントアプリ (Expo Go)

### Expo Application Service (EAS)

> 🔗 [Expo Application Service (EAS)](https://expo.dev/ease)

EAS は、Expo のクラウドサービスです。

## コアコンポーネント

> 🔗 [Core Components and APIs・React Native](https://reactnative.dev/docs/components-and-apis)

### 基本コンポーネント

- `<View>`
- `<Text>`
- `<Image>`
- `<TextInput>`
- `<ScrollView>`
- `<StyleSheet>`

### ユーザーインターフェース

- `<Button>`
- `<Switch>`

### リストビュー

- `<FlatList>`
- `<SectionList>`

### Android コンポーネント

- `<BackHandler>`
- `<DrawerLayoutAndroid>`
- `<PermissionsAndroid>`
- `<ToastAndroid>`

### iOS コンポーネント

- `<ActionSheetIOS>`

### その他

- `<ActivityIndicator>`
- `<Alert>`
- `<Animated>`
- `<Dimensions>`
- `<KeyboardAvoidingView>`
- `<Linking>`
- `<Modal>`
- `<PixelRatio>`
- `<RefreshControl>`
- `<StatusBar>`

## コミュニティコンポーネント

- [React Native Element](https://github.com/react-native-community/react-native-elements)
- [NativeBase](https://github.com/GeekyAnts/NativeBase)

## Tips

### プロジェクト構成例

> 🔗 [Project Structure](https://www.reactnative.express/app/project_structure)

- 小規模プロジェクト
  > ```
  > MyApp/
  > ├── components/
  > │    ├── Avatar.jsx
  > │    ├── Button.jsx
  > │    └── List.jsx
  > └── App.jsx
  > ```
- 中規模プロジェクト
  > ```text title="コンポーネント構造"
  > MyApp/
  > ├── components/
  > │    ├── buttons/
  > │    │    ├── RoundButton.jsx
  > │    │    └── SquareButton.jsx
  > │    ├── cards/
  > │    │    ├── ArticleCard.jsx
  > │    │    ├── ImageCard.jsx
  > │    │    └── VideoCard.jsx
  > │    ├── Avatar.jsx
  > │    └── List.jsx
  > ├── containers/
  > │    ├── CardList.jsx
  > │    ├── UserProfile.jsx
  > │    └── RelatedTweets.jsx
  > ├── screens/
  > │    ├── Feed.jsx
  > │    ├── Search.jsx
  > │    ├── Post.jsx
  > │    ├── Reply.jsx
  > │    ├── Profile.jsx
  > │    └── Settings.jsx
  > ├── navigation/
  > │    ├── RootStackNavigator.jsx
  > │    └── ProfileTabNavigator.jsx
  > └── App.js
  > ```
  > ```text title="共通カテゴリーの構造"
  > MyApp/
  > ├── api/
  > │    ├── twitter.js
  > │    ├── facebook.js
  > │    └── instagram.js
  > ├── assets/
  > │    ├── app-icon.png
  > │    └── splash-screen.png
  > ├── hooks/
  > │    ├── useInterval.js
  > │    └── useLogin.js
  > ├── reducers/
  > │    ├── posts.js
  > │    ├── users.js
  > │    └── tweets.js
  > ├── theme/
  > │    ├── colors.js
  > │    ├── textStyles.js
  > │    └── spacing.js
  > ├── utils/
  > │    ├── generateUuid.js
  > │    └── formatCurrency.js
  > └── ...
  > ```
- 大規模プロジェクト
  > ```
  > MyApp/
  > ├── modules/
  > │    ├── accounts/
  > │    │    ├── components/
  > │    │    │    ├── UserProfile.jsx
  > │    │    │    └── LoginInput.jsx
  > │    │    ├── screens/
  > │    │    │    ├── Profile.jsx
  > │    │    │    ├── Login.jsx
  > │    │    │    └── Deactivate.jsx
  > │    │    ├── utils/
  > │    │    │    └── formatAccountName.js
  > │    │    └── App.js
  > │    ├── growth/
  > │    │    ├── components
  > │    │    ├── screens
  > │    │    ├── utils
  > │    │    └── App.js
  > │    ├── privacy/
  > │    │    ├── components/
  > │    │    ├── screens/
  > │    │    ├── utils/
  > │    │    └── App.jsx
  > │    └── shared/
  > │         ├── components
  > │         │    ├── Avatar.jsx
  > │         │    ├── Button.jsx
  > │         │    └── List.jsx
  > │         └── utils/
  > │               └── format.js
  > └── App.jsx
  > ```

### プラットフォーム固有のコードを書く

#### `Platform` モジュールの利用

- [`Platform.OS`](https://reactnative.dev/docs/platform#os) では、現在の OS を表す文字列を取得することができます。
- [`Platform.select()`](https://reactnative.dev/docs/platform#select) を使用すると、switch 文のように、プラットフォームに応じた値を選択するロジックを組むことができます。
- [`Platform.Version`](https://reactnative.dev/docs/platform#version) から OS のバージョン情報が得られます。

#### プラットフォームごとのファイル拡張子を用意する

- iOS: `*.ios.js`
- Android: `*.android.js`

```js title="【例】"
import BigButton from './BigButton';
// → `BigButton.ios.js` or `BigButton.android.js` will be imported.
```

### `react-navigation` によるナビゲーション

> 🔗 [React Navigation](https://reactnavigation.org/)

```tsx title="【例】App.tsx"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

- ナビゲーションコンテナー: `<NavigationContainer>`
  > ナビゲーションの状態を格納するコンポーネント
- ナビゲーター: `Stack.Navigator`/`Drawer.Navigator`/`Tabs.Navigator`
- スクリーン: `Stack.Screen`/`Drawer.Screen`/`Tabs.Screen`

#### ナビゲーションの手順

1. ナビゲーターの作成
   > ```tsx
   > import { createStackNavigator } from '@react-navigation/stack';
   >
   > type RootParamList = {
   >   Screen1: undefined
   >   Screen2: { paramA: string }
   >   Screen3: { paramB: string; paramC: number }
   > };
   >
   > const Root = createStackNavigator<RootParamList>();
   > ```
2. スクリーンコンポーネントの作成
   > ```tsx
   > import { StackScreenProps } from '@react-navigation/stack';
   >
   > type Screen1Props = StackScreenProps<RootParamList, 'Screen1'>;
   >
   > const Screen1 = ({ navigation, route }: Screen1Props) => {
   >   return <Text>Screen1</Text>
   > };
   > ```
3. レンダー
   > ```tsx
   > import { NavigationContainer } from '@react-navigation/native';
   > 
   > // ...
   >
   > const App = () => {
   >   return (
   >     <NavigationContainer>
   >       <Root.Navigator>
   >         <Root.Screen name="Screen1" component={Screen1} />
   >         <Root.Screen name="Screen2" component={Screen2} />
   >         <Root.Screen name="Screen3" component={Screen3} />
   >       </Root.Navigator>
   >     </NavigationContainer>
   >   );
   > };
   > ```

#### ナビゲーションメソッド

ナビゲーションを実行するには、ナビゲーターに応じて次のメソッドを呼び出します：

- Stack: `push`
- Tabs: `navigate`
- Drawer: `openDrawer`

#### フック

スクリーンではないコンポーネント（ナビゲーターの直接の子孫）の場合、フックを使用してナビゲーションにアクセスし、オブジェクトをルーティングできます：

```tsx
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Screen1 = () => {
  const navigation = useNavigation<StackNavigationProp<RootParamList, 'Screen1'>>();
  const route = useRoute<RouteProp<RootParamList, 'Screen1'>>();

  // ...
};
```

### コンポーネントスタイル

1. 【オプション】`StyleSheet.create()` でスタイルを作成
2. コンポーネントの `style` プロパティに適用

:::caution React Native における Flexbox

- `flexDirection` のデフォルトは `row` ではなく `column`
- `alignContent` のデフォルトは `stretch` ではなく `flex-start`
- `flexShrink` のデフォルトは `1` ではなく `0`
- `flex` パラメータは1つの数値のみをサポートしています。

:::

```tsx title="【例】コンポーネントスタイル"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
```

### アニメーション

[`Animated`](https://reactnative.dev/docs/animated) API を使用すると、コンポーネントスタイルをアニメーション化できます。

`Animated` API には、4つの基本的なパートに分かれています：

- [`Animated.Value`](https://reactnative.dev/docs/animatedvalue) – スタイルで使用する数値のラッピング
- `Animated.View`, `Animated.Text`, ... – アニメーションスタイルをサポートするコンポーネント
- [`Animated.timing`](https://reactnative.dev/docs/animated#timing), [`Animated.spring`](https://reactnative.dev/docs/animated#spring), ... – アニメーションタイプ
- [`.start()`](https://reactnative.dev/docs/animated#start) – アニメーションの開始

特に高性能である必要があるアニメーションの場合、[`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated) を検討することをお勧めします。

### ジェスチャー

[`PanResponder`](https://reactnative.dev/docs/panresponder) コンポーネントを使用すると、高度なタッチイベントを処理することができます。

更に高度なジェスチャハンドリングを行いたい場合、[`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler) ライブラリが役立ちます。

## ストレージ

### 非機密データ

Web の LocalStorage に相当する [Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) を使用します。

### 機密データ

React Native には、機密データを保存する方法はバンドルされていません。ただし、Android および iOS プラットフォーム用の既存のソリューションがあります。

- iOS: [キーチェーンサービス](https://developer.apple.com/documentation/security/keychain_services)
- Android: [EncryptedSharedPreferences](https://developer.android.com/topic/security/data)

## リンク

- [React Native Directory](https://reactnative.directory/)
  > React Native アプリのパッケージを見つけるためのインタラクティブなディレクトリ。
- [Who's using React Native? · React Native](https://reactnative.dev/showcase)
  > React Native を採用した有名なアプリのリスト
- [GitHubのサンプルアプリのセット](https://github.com/ReactNativeNews/React-Native-Apps)
  > **オープンソース** React Native アプリ
- [React Native Express](https://www.reactnative.express/)
  > React Native の非公式オールインワンガイド

### 関連ツール

- [Expo](https://docs.expo.io/)
  > React Native のツールとサービスのフレームワークであり、Xcode や AndroidStudio に触れることなく React Native アプリを構築できるようにすることに重点を置いています。
- [Snack](https://snack.expo.dev/)
  > Web ブラウザで直接 React Native を試すことができるサイト
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) – `react-test-renderer` の上で、より良いテストの実践を促すような形で、軽いユーティリティ関数を提供します。
- [Hermes](https://hermesengine.dev/) – React Native 用に最適化された JavaScript エンジン
- [React-Native-Apps](https://github.com/ReactNativeNews/React-Native-Apps)
  > オープンソースのReact Nativeアプリだけを集めたショーケース

### ボイラープレート

- [React Native Template - TypeScript](https://github.com/AmitM30/react-native-typescript-boilerplate) – React Native Navigation + Redux + Airbnb TSLint で TypeScript を使用したボイラープレート

### 関連 npm パッケージ

- [React](https://ja.reactjs.org/)
  - `react`
  - `react-dom`
- [React Native](https://reactnative.dev/)
  - `react-native`
  - `react-native-safe-area-context`
  - `react-native-screens`
  - `react-native-web`
- [React Navigation](https://reactnavigation.org/)
  - `@react-navigation/bottom-tabs`
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
- [React Native Navigation](https://wix.github.io/react-native-navigation/#/)
- [Native Navigation](http://airbnb.io/native-navigation/)
- [Expo](https://docs.expo.dev/)
  - `@expo/vector-icons`
  - `@react-native-async-storage/async-storage`
  - `expo` – Expo コア
  - _`expo-*`_ – 多数の Expo SDK。一覧は、[Expo API Reference](https://docs.expo.dev/versions/latest/) を参照されたし
- [React Native WebView](https://www.npmjs.com/package/react-native-webview) – ReactNative用の最新のクロスプラットフォームWebView
- [React Native for Windows + macOS](https://microsoft.github.io/react-native-windows/) – Microsoft による
- [`react-native-config`](https://www.npmjs.com/package/react-native-config) – OS、Android、および Windows をサポートする React Native の JavaScript コードに構成変数を公開するモジュール。 
- [`react-native-dotenv`](https://www.npmjs.com/package/react-native-dotenv) – `import` ステートメントを使用して環境変数をロードします。
- `react-native-maps`
- `react-native-nfc-manager`
- `react-native-reanimate`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-status-bar-height`
- `react-native-vector-icons` または、Expo を使用する場合、`@expo/vector-icons`
- `@react-native-community/masked-view`
- [@react-native-async-storage/async-storage,
  ](https://www.npmjs.com/package/@react-native-async-storage/async-storage) – React native のための、非同期で**暗号化されていない** Key-Value ストアモジュール
- テスト
  - [Detox](https://github.com/wix/detox/) – E2E テストライブラリ
  - [Appium](http://appium.io/)
- 型定義
  - `@types/react-native`
- UI
  - [React Native Paper](https://reactnativepaper.com/) – Material You をサポートした UI ライブラリ
