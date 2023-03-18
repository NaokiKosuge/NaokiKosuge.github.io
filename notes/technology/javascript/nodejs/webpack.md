---
slug: /webpack
sidebar_label: webpack
---

# webpack

:::note 想定

このドキュメントは、webpack 5 の利用に関するノートです。ローダーやプラグインの開発は対象外です。

:::

[webpack](https://webpack.js.org/) は、[Node.js](/notes/nodejs) で動作する JavaScript モジュールバンドラーです。（Rollup や Parcel といった）他のモジュールバンドラーよりも古くから存在し、最も実績があります。プラグインエコシステムが充実しており、高度な設定が可能な反面、複雑で難しい傾向があります。

## パッケージ
 
### コア

- [`webpack`](https://www.npmjs.com/package/webpack) – コアパッケージ
- [`webpack-cli`](https://www.npmjs.com/package/webpack-cli) – CLI パッケージ

### ローダー

> 🔗 [Loaders](https://webpack.js.org/loaders/)

ファイルを前処理します

- _ファイル_
  - [`val-loader`](https://webpack.js.org/loaders/val-loader) – コードをモジュールとして実行し、エクスポートをJSコードと見なします
  - [`ref-loader`](https://www.npmjs.com/package/ref-loader) – ファイル間の依存関係を手動で作成します
- _JSON_
  - [`cson-loader`](https://github.com/awnist/cson-loader) – [CSON](https://github.com/bevry/cson#what-is-cson) ファイルをロードしてトランスパイルします
- _トランスパイル_
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader) – Babel を使用して ES2015+ コードとトランスパイルを ES5 にロードします
  - [`buble-loader`](https://github.com/sairion/buble-loader) – Bublé を使用してES2015+ コードとトランスパイルを ES5 にロードします
  - [`traceur-loader`](https://github.com/jupl/traceur-loader) – [Traceur](https://github.com/google/traceur-compiler#readme) を使用して ES2015+ コードとトランスパイルを ES5 にロードします
  - [`ts-loader`](https://github.com/TypeStrong/ts-loader) – JavaScript のように TypeScript 2.0+ をロードします
  - [`coffee-loader`](https://webpack.js.org/loaders/coffee-loader) – JavaScript のように CoffeeScript をロードします
  - [`fengari-loader`](https://github.com/fengari-lua/fengari-loader/) – [fengari](https://fengari.io/) を使用して Lua コードをロードします
  - [`elm-webpack-loader`](https://github.com/elm-community/elm-webpack-loader) – JavaScript のように Elm をロードします
- _テンプレート_
  - [`html-loader`](https://webpack.js.org/loaders/html-loader) – HTML を文字列としてエクスポートし、静的リソースへの参照を必要とします
  - [`pug-loader`](https://github.com/pugjs/pug-loader) – Pug および Jade テンプレートをロードし、関数を返します
  - [`markdown-loader`](https://github.com/peerigon/markdown-loader) – マークダウンを HTML にコンパイルします
  - [`react-markdown-loader`](https://github.com/javiercf/react-markdown-loader) – `markdown-parse` パーサーを使用してマークダウンを React コンポーネントにコンパイルします
  - [`posthtml-loader`](https://github.com/posthtml/posthtml-loader) – PostHTML を使用して HTML ファイルをロードおよび変換します
  - [`handlebars-loader`](https://github.com/pcardune/handlebars-loader) – ハンドルバーを HTML にコンパイルします
  - [`markup-inline-loader`](https://github.com/asnowwolf/markup-inline-loader) – SVG/MathML ファイルを HTML にインライン化します。アイコンフォントを適用したり、CSS アニメーションを SVG に適用したりするときに便利です。
  - [`twig-loader`](https://github.com/zimmo-be/twig-loader) – Twig テンプレートをコンパイルし、関数を返します
  - [`remark-loader`](https://github.com/webpack-contrib/remark-loader) – 組み込みの画像解像度を使用して、コメントを介してマークダウンをロードします
- _スタイル_
  - [`style-loader`](https://webpack.js.org/loaders/style-loader) – モジュールのエクスポートをスタイルとして DOM に追加します
  - [`css-loader`](https://webpack.js.org/loaders/css-loader) – 解決されたインポートを含む CSS ファイルをロードし、CSS コードを返します
  - [`less-loader`](https://webpack.js.org/loaders/less-loader) – LESS ファイルをロードしてコンパイルします
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader) – SASS/SCSSファイルをロードしてコンパイルします
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader) – PostCSS を使用して CSS/SSS ファイルをロードおよび変換します
  - [`stylus-loader`](https://webpack.js.org/loaders/stylus-loader/) – スタイラスファイルをロードしてコンパイルします
- _フレームワーク_
  - [`vue-loader`](https://github.com/vuejs/vue-loader) – Vueコンポーネントをロードしてコンパイルします
  - [`angular2-template-loader`](https://github.com/TheLarkInn/angular2-template-loader) – Angular コンポーネントをロードしてコンパイルします
- [_その他_](https://webpack.js.org/awesome-webpack/#loaders)

### プラグイン

> 🔗 [Plugins](https://webpack.js.org/plugins/)

webpack に機能を追加します

- [`BannerPlugin`](https://webpack.js.org/plugins/banner-plugin) – 生成された各チャンクの上部にバナーを追加します
- [`CommonsChunkPlugin`](https://webpack.js.org/plugins/commons-chunk-plugin) – チャンク間で共有される共通モジュールを抽出します
- [`CompressionwebpackPlugin`](https://webpack.js.org/plugins/compression-webpack-plugin) – コンテンツエンコーディングで提供するアセットの圧縮バージョンを準備します
- [`ContextReplacementPlugin`](https://webpack.js.org/plugins/context-replacement-plugin) – `require` 式の推測されたコンテキストをオーバーライドします
- [`CopywebpackPlugin`](https://webpack.js.org/plugins/copy-webpack-plugin) – 個々のファイルまたはディレクトリ全体をビルドディレクトリにコピーします
- [`DefinePlugin`](https://webpack.js.org/plugins/define-plugin) – コンパイル時に構成されたグローバル定数を許可します
- [`DllPlugin`](https://webpack.js.org/plugins/dll-plugin) – ビルド時間を大幅に改善するためにバンドルを分割する
- [`EnvironmentPlugin`](https://webpack.js.org/plugins/environment-plugin) – `process.env` キーで `DefinePlugin` を使用するための省略形
- [`EslintwebpackPlugin`](https://webpack.js.org/plugins/eslint-webpack-plugin) – webpack 用の ESLint プラグイン
- [`HotModuleReplacementPlugin`](https://webpack.js.org/plugins/eslint-webpack-plugin) – ホットモジュール交換（HMR）を有効にします
- [`HtmlwebpackPlugin`](https://webpack.js.org/plugins/html-webpack-plugin) – バンドルを提供する HTML ファイルを簡単に作成します
- [`IgnorePlugin`](https://webpack.js.org/plugins/ignore-plugin) – バンドルから特定のモジュールを除外します
- [`LimitChunkCountPlugin`](https://webpack.js.org/plugins/limit-chunk-count-plugin) – チャンクをより適切に制御するために、チャンクの最小/最大制限を設定します
- [`MinChunkSizePlugin`](https://webpack.js.org/plugins/min-chunk-size-plugin) – チャンクサイズを指定された制限より上に保ちます
- [`MiniCssExtractPlugin`](https://webpack.js.org/plugins/mini-css-extract-plugin) – CSS を必要とするJSファイルごとに CSS ファイルを作成します
- [`NoEmitOnErrorsPlugin`](https://webpack.js.org/configuration/optimization/#optimizationemitonerrors) – コンパイルエラーがある場合は、emitting フェーズをスキップします
- [`NormalModuleReplacementPlugin`](https://webpack.js.org/plugins/normal-module-replacement-plugin) – 正規表現に一致するリソースを置き換えます
- [`NpmInstallwebpackPlugin`](https://webpack.js.org/plugins/install-webpack-plugin) – 開発中に不足している依存関係を自動インストールします
- [`ProgressPlugin`](https://webpack.js.org/plugins/progress-plugin) – コンパイルの進行状況を報告します
- [`ProvidePlugin`](https://webpack.js.org/plugins/provide-plugin) – `import`/`require` を使用せずにモジュールを使用します
- [`SourceMapDevToolPlugin`](https://webpack.js.org/plugins/source-map-dev-tool-plugin) – ソースマップのよりきめ細かい制御を可能にします
- [`EvalSourceMapDevToolPlugin`](https://webpack.js.org/plugins/eval-source-map-dev-tool-plugin) – 評価ソースマップのよりきめ細かい制御を可能にします
- [`TerserPlugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) – Terser を使用して、プロジェクトの JS を縮小します

## 始め方

1. インストール

  ```bash
  npm i -D webpack webpack-cli
  
  # 必要なローダーやプラグインもインストールします:
  npm i -D [lorder-or-plugin...]
  ```

2. 構成ファイルの作成

  ```bash title="webpack 構成ファイルを新規作成する"
  npx webpack init
  ```

4. スクリプトの登録

  ```json title="package.json"
  {
    "scripts": {
      "build": "webpack"
    }
  }
  ```

4. webpack 実行

  ```bash
  npm run build
  ```

### 参考；プロジェクトサンプル

以下に示すプロジェクトサンプルは TypeScript を使用した開発を想定しています。

```bash title="必要なパケージのインストール"
# webpack
npm i -D webpack webpack-cli webpack-merge
# TypeScript
npm i -D typescript ts-node @types/node @types/webpack
# webpack ローダーとその関連パッケージ
npm i -D ts-loader
```

```json title="package.json"
{
  "scripts": {
    "build": "webpack --node-env production"
  }
}
```

```ts title="webpack.common.ts"
import * as path from 'path';
import type { Configuration } from 'webpack';

// Babel
const babelOptions = {
  'presets': [
    'react',
    [
      'es2015',
      {
        'modules': false,
      }
    ],
    'es2016'
  ]
};

// webpack 共通構成
export const commonConfig: Configuration = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: 'main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          }, 
          'ts-loader',
        ],
      },
      // JavaScript
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ]
      },
      // Images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

export default (env) => commonConfig;
```

```ts title="webpack.dev.ts"
import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common.ts';

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
};
export default (env) => merge(common(env), devConfig);
```

```ts title="webpack.prod.ts
import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common.ts';

const prodConfig: Configuration = {
  mode: 'production',
};
export default (env) => merge(common(env), prodConfig);
```

## CLI

### 構文

```bash
webpack [command] [options]
```

### コマンド

<table>
<thead>
<tr>
<th>コマンド</th>
<th>使用法</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>build</code></td>
<td><code>build|bundle|b [entries...] [options]</code></td>
<td>webpackを実行します（デフォルトのコマンド、省略可能）。</td>
</tr>
<tr>
<td><code>configtest</code></td>
<td><code>configtest|t [config-path]</code></td>
<td>webpack構成を検証します。</td>
</tr>
<tr>
<td><code>help</code></td>
<td><code>help|h [command] [option]</code></td>
<td>コマンドとオプションのヘルプを表示します。</td>
</tr>
<tr>
<td><code>info</code></td>
<td><code>info|i [options]</code></td>
<td>システムに関する情報を出力します。</td>
</tr>
<tr>
<td><code>init</code></td>
<td><code>init|create|c|new|n [generation-path] [options]</code></td>
<td>新しいwebpackプロジェクトを初期化します。</td>
</tr>
<tr>
<td><code>loader</code></td>
<td><code>loader|l [output-path] [options]</code></td>
<td>ローダーを足場にします。</td>
</tr>
<tr>
<td><code>loader</code></td>
<td><code>loader|l [output-path] [options]</code></td>
<td>ローダーを足場にします。</td>
</tr>
<tr>
<td><code>plugin</code></td>
<td><code>plugin|p [output-path] [options]</code></td>
<td>プラグインを足場にします。</td>
</tr>
<tr>
<td><code>serve</code></td>
<td><code>serve|server|s [options]</code></td>
<td><code>webpack-dev-server</code>を実行します。</td>
</tr>
<tr>
<td><code>version</code></td>
<td><code>version|v [commands...]</code></td>
<td><code>webpack</code>、<code>webpack-cli</code>、<code>webpack-dev-server</code>のバージョン番号とコマンドを表示します。</td>
</tr>
<tr>
<td><code>watch</code></td>
<td><code>watch|w [entries...] [options]</code></td>
<td>webpack を実行し、ファイルの変更を監視します。</td>
</tr>
</tbody>
</table>

### ヘルプ

```
$ webpack -h
Usage: webpack [entries...] [options]
Alternative usage to run commands: webpack [command] [options]

The build tool for modern web applications.

Options:
  -c, --config <value...>                Provide path to a webpack configuration file e.g. ./webpack.config.js.
  --config-name <value...>               Name of the configuration to use.
  -m, --merge                            Merge two or more configurations using 'webpack-merge'.
  --env <value...>                       Environment passed to the configuration when it is a function.
  --node-env <value>                     Sets process.env.NODE_ENV to the specified value.
  --progress [value]                     Print compilation progress during build.
  -j, --json [value]                     Prints result as JSON or store it in a file.
  -d, --devtool <value>                  Determine source maps to use.
  --no-devtool                           Do not generate source maps.
  --entry <value...>                     The entry point(s) of your application e.g. ./src/main.js.
  --mode <value>                         Defines the mode to pass to webpack.
  --name <value>                         Name of the configuration. Used when loading multiple configurations.
  -o, --output-path <value>              Output location of the file generated by webpack e.g. ./dist/.
  --stats [value]                        It instructs webpack on how to treat the stats e.g. verbose.
  --no-stats                             Disable stats output.
  -t, --target <value...>                Sets the build target e.g. node.
  --no-target                            Negative 'target' option.
  -w, --watch                            Watch for files changes.
  --no-watch                             Do not watch for file changes.
  --watch-options-stdin                  Stop watching when stdin stream has ended.
  --no-watch-options-stdin               Do not stop watching when stdin stream has ended.

Global options:
  --color                                Enable colors on console.
  --no-color                             Disable colors on console.
  -v, --version                          Output the version number of 'webpack', 'webpack-cli' and 'webpack-dev-server' and commands.
  -h, --help [verbose]                   Display help for commands and options.

Commands:
  build|bundle|b [entries...] [options]  Run webpack (default command, can be omitted).
  configtest|t [config-path]             Validate a webpack configuration.
  help|h [command] [option]              Display help for commands and options.
  info|i [options]                       Outputs information about your system.
  serve|server|s [entries...]            Run the webpack dev server. To see all available options you need to install 'webpack-dev-server'.
  version|v [commands...]                Output the version number of 'webpack', 'webpack-cli' and 'webpack-dev-server' and commands.
  watch|w [entries...] [options]         Run webpack and watch for files changes.

To see list of all supported commands and options run 'webpack --help=verbose'.

webpack documentation: https://webpack.js.org/.
CLI documentation: https://webpack.js.org/api/cli/.
Made with ♥ by the webpack team.
```

## 構成ファイル

構成ファイルの名前は、デフォルトでは `webpack.config.{js|ts}` です。別の名前を使用する場合は、`--config` フラグで別名を指定します。

```js title="webpack.config.js の例"
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
```

主要なオプション：

- `mode`
- `entry`
- `output`
- `module`
- `resolve`

### `context`

構成からエントリポイントとローダーを解決するためのベースディレクトリ、絶対パス。

デフォルトでは、Node.js の現在の作業ディレクトリが使用されますが、構成で値を渡すことをお勧めします。これにより、構成がCWD（現在の作業ディレクトリ）から独立します。

```js title="例"
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  //...
};
```

### `entry`

webpack がバンドルの構築を開始する起点となるファイルを指定します。デフォルトでは現在のディレクトリが使用されますが、構成で値を渡すことをお勧めします。これにより、構成が CWD（現在の作業ディレクトリ）から独立します。

#### 文字列での指定（`string` または `string[]`）

シンプルな指定方法です。オプションを付けることができません。

```js title="例：文字列"
module.exports = {
  // 次の場合、チャンク名は「main」となる。
  entry: 'index.js',
};
```

#### オブジェクトでの指定

柔軟な指定方法で、1つ以上のエントリを指定でき、かつ合わせてオプションも指定できます。

```js title="例：エントリオブジェクト"
module.exports = {
  //...
  entry: {
    home: './home.js',
    shared: ['react', 'react-dom', 'redux', 'react-redux'],
    catalog: {
      import: './catalog.js',
      filename: 'pages/catalog.js',
      dependOn: 'shared',
    },
    personal: {
      import: './personal.js',
      filename: 'pages/[name][ext]',
      dependOn: 'shared',
      chunkLoading: 'jsonp',
      layer: 'name of layer', // set the layer for an entry point
    },
  },
};
```

- _`chunkName`_ – 任意のチャンク名（💡 `output` オプションで利用できます）
  - **`import`**: _エントリファイル_
  - `filename`: _ディスク上の出力ファイル名_
    > 指定されたパスは、ディスク上の場所を決定するために `output.path` オプションの値と結合されます。
  - `publicPath`: _ブラウザで参照される場合の出力ファイルのパブリックURLアドレス_ 
  - `dependOn`: _依存するチャンク名_
    > 複数ある場合は配列で指定します。
  - `asyncChunks`: _オンデマンドでロードされる非同期チャンクの作成の有無_
  - `chunkLoading`: _チャンクをロードするメソッド_
    > デフォルトで含まれるメソッドは、`jsonp` (web)，`import` (ESM)，`importScript` (WebWorker)，`require` (sync node.js)，`async-node` (async node.js)
  - `layer`: _レイヤー名_
  - `library`: _ライブラリのオプション_
  - `runtime`: _ランタイムチャンクの名前_
    > 設定すると、この名前のランタイムチャンクが作成されるか、既存のエントリポイントがランタイムとして使用されます。
  - `wasmLoading`: _[WebAssembly](/notes/wasm) をロードするメソッド_
    > デフォルトで含まれるメソッドは、`fetch` (web/WebWorker)，`async-node` (node.js)

#### 関数を指定する場合（動的エントリ）

関数が渡されると、すべての make イベントで呼び出されます。

- ```js title="例：同期関数"
  module.exports = {
    //...
    entry: () => './demo',
  };
  ```

- ```js title="例：非同期関数"
  module.exports = {
    //...
    entry: () => new Promise((resolve) => resolve(['./demo', './demo2'])),
  };
  ```

### `mode`

- `'production'` – デフォルト。`DefinePlugin` に対して、`process.env.NODE_ENV=production` を設定します。
- `'development'` – `DefinePlugin` に対して、`process.env.NODE_ENV=development` を設定します。
- `'none'`

#### モードの指定と検知

`webpack` コマンドを実行する際に、次のいずれかの方法でモードを指定することができます：

- `--node-env` フラグ – `process.env.NODE_ENV` と `mode` を設定します。
  > ```bash title="モードの指定"
  > webpack --node-env development
  > ```
  > ```js title="モードの検知（webpack.config.js）"
  > module.exports = (env, argv) => {
  >   const mode = argv.mode === 'development'
  >       ? 'development'  // `webpack --config development`
  >       : 'production';  // `webpack` or `webpack --config production`
  >   return { mode };
  > };
  > ```
- `--mode` フラグ – `mode` を設定します。指定しなかった場合、この値は `--node-env` を尊重します。
  > ```bash title="モードの指定"
  > webpack --mode development
  > ```
  > ```js title="モードの検知（webpack.config.js）"
  > module.exports = (env, argv) => {
  >   const mode = argv.mode === 'development'
  >       ? 'development'  // `webpack --config development`
  >       : 'production';  // `webpack` or `webpack --config production`
  >   return { mode };
  > };
  > ```
- 環境変数 `NODE_ENV` – `process.env.NODE_ENV` を設定します。
  > ```bash title="モードの指定"
  > NODE_ENV="development" webpack
  > ```
  > ```js title="モードの検知（webpack.config.js）"
  > const mode = require('process').env.NODE_ENV || 'production';
  > ```

### `output`

出力の方法と場所を指定します。

```js
module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
};
```

関数を使用して動的にファイル名を書き出すこともできます。

```js
module.exports = {
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    },
  },
};
```

主要なプロパティ：

- `filename`: _出力ファイルの名前_
  > チャンクレベルで使用できるテンプレート文字列:
  > 
  > | テンプレート          | 説明                                |
  > |-----------------|-----------------------------------|---------------------|
  > | `[id]`          | チャンクID                            |
  > | `[name]`        | 設定されている場合はチャンクの名前、それ以外の場合はチャンクのID |
  > | `[chunkhash]`   | チャンクハッシュ                          |
  > | `[contenthash]` | コンテンツハッシュ                         |
- `assetModuleFilename`: _アセットモジュールの出力ファイルの名前_
- `chunkFilename`: _非初期チャンクファイルの名前_
- `clean`: _エミットする前に出力ディレクトリをクリーンアップするか_

### `module`

プロジェクト内のさまざまなタイプのモジュールの扱われ方を決定します。

#### ルール (`module.rules`)

ルールオブジェクトのプロパティ：

- `test`: _ルール適用対象テスト_
- `type`: _モジュールタイプ_
  - `'asset/resource'` – 別のファイルを発行し、URL をエクスポートします。（従来は [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) が担当）
  - `'asset/inline'` – アセットのデータ URI (Base64) をエクスポートします。（従来は [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) が担当）
  - `'asset/source'` – アセットのソースコードをエクスポートします。プレーンテキストなどに利用します。（従来は [`raw-loader`](https://v4.webpack.js.org/loaders/raw-loader/) が担当）
  - `'asset'` – データ URI をエクスポートするか（`inline`）、別のファイルを発行するか（`resource`）を自動的に選択します。
  - _その他_ – `'javascript/auto' | 'javascript/dynamic' | 'javascript/esm' | 'json' | 'webassembly/sync' | 'webassembly/async'`
- `generator`: _アセットモジュールのためのジェネレーターオプション_
- `use`: _モジュールに適用される UseEntry の配列_
  > 各エントリは、使用するローダーを指定します。
  > ローダーは、複数のローダーを渡すことでチェーン化できます。ローダーは、右から左に（最後から最初に構成されて）適用されます。
  > ```js title="例：Role.use プロパティ" {7-24}
  > module.exports = {
  >   //...
  >   module: {
  >     rules: [
  >       {
  >         test: /\.s?css$/,
  >         use: [
  >           // 3番目に実行される
  >           'style-loader',
  >           // 2番目に実行される
  >           {
  >             loader: 'css-loader',
  >             options: {
  >               importLoaders: 1,
  >             },
  >           },
  >           // 1番目に実行される
  >           {
  >             loader: 'sass-loader',
  >             options: {
  >               sourceMap: true,
  >             },
  >           },
  >         ],
  >       },
  >     ],
  >   },
  > };
  > ```
- `exclude`: _除外条件_
- `include`: _含める条件_
- `loader`: _使用するローダー_
- `options`： _ローダーへ渡すオプション_

#### `module.generator`

ジェネレーターのオプションを1か所で構成することができます。

```js
module.exports = {
  module: {
    generator: {
      asset: {
        // Generator options for asset modules

        // Customize publicPath for asset modules, available since webpack 5.28.0
        publicPath: 'assets/',
      },
      'asset/inline': {
        // Generator options for asset/inline modules
      },
      'asset/resource': {
        // Generator options for asset/resource modules

        // Customize publicPath for asset/resource modules, available since webpack 5.28.0
        publicPath: 'assets/',
      },
      javascript: {
        // No generator options are supported for this module type yet
      },
      'javascript/auto': {
        // ditto
      },
      'javascript/dynamic': {
        // ditto
      },
      'javascript/esm': {
        // ditto
      },
      // others…
    },
  },
};
```

### `resolve`

モジュールの解決方法を指定します。

- `extensions`: _モジュールインポートの際に補完する拡張子_

### `plugins`

### `devServer`

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) を使用すると、アプリケーションをすばやく開発できます。

### `devtool`

ソースマップを生成するかどうかとその方法を制御します。

`production` 向けの推奨値：

- (none) or `false`
  > 最大のパフォーマンスを備えたプロダクションビルドに推奨される選択。
- `'source-map'`
  > 高品質の SourceMap を使用した本番ビルドに推奨される選択。
  > 完全な SourceMap は別のファイルとして発行されます。バンドルに参照コメントが追加されるため、開発ツールはそれを見つける場所を知ることができます。
- `'hidden-source-map'`
  > `source-map` と同じですが、バンドルに参照コメントを追加しません。 SourceMaps がエラーレポートからのエラースタックトレースをマップするだけで、ブラウザ開発ツール用に SourceMap を公開したくない場合に便利です。
- `'nosources-source-map'`
  > SourceMap は、sourcesContent を含まずに作成されます。すべてのソースコードを公開せずに、クライアントでスタックトレースをマップするために使用できます。ソースマップファイルを Web サーバーに展開できます。

`development` 向けの推奨値：

- `'eval'`
  > 最大のパフォーマンスを備えた開発ビルドに推奨される選択。
- `'eval-source-map'`
  > 高品質の SourceMap を使用した開発ビルドに推奨される選択。
- `'eval-cheap-source-map'`
  > `eval-source-map` と同様に、各モジュールは `eval()` で実行されます。列マッピングがなく、行番号のみをマッピングするため、「安価」です。
- `'eval-cheap-module-source-map'`
  > `eval-cheap-source-map` と同様に、この場合、ローダーからのソースマップが処理されてより良い結果が得られます。ただし、ローダーソースマップは、行ごとに1つのマッピングに簡略化されています。

### `target`

### `externals`

出力バンドルから依存関係を除外する方法を提供します。

### `performance`

特定のファイル制限を超えるアセットとエントリポイントを webpack が通知する方法を制御できます。

## Tips

### `development` と `production` で構成を分ける

これには、大きく分けて、次の2通りの方法があります。

- ⇣：[静的に構成を決定する方法](#static-configuration)
- ⇣：[動的に構成を決定する方法](#automatic-configuration)

:::tip 構成ファイルの合成

[`webpack-merge`](https://www.npmjs.com/package/webpack-merge) というツールを使えば、構成をマージすることができます。

:::

#### 【静的な構成ファイルの決定】<br />適用する構成ファイルを `--config` フラグで明示する方法 {#static-configuration}

```bash title="次のいずれかの方法で webpack を実行します"
# development を指定する場合
webpack --config webpack.dev.js
# production を指定する場合
webpack --config webpack.prod.js
````

#### 【動的な構成ファイルの決定】<br />次のいずれかの方法で、モードを指定し、`webpack.config.js` 内で検知して場合分けして対応する方法 {#automatic-configuration}

1. モードの指定

  > ```bash title="次のいずれかの方法で webpack を実行します"
  > # --node-env フラグ
  > webpack --node-env development/production
  > # --mode フラグ
  > webpack --mode development/production
  > # 環境変数 NODE_ENV
  > NODE_ENV="development/production" webpack
  > ```

2. モードの検知

   > ```js title="webpack.config.js"
   > const process = require('process');
   >
   > // NODE_ENV の検知
   > const NODE_ENV = process.env.NODE_ENV;
   >      
   > module.exports = (env, argv) => {
   >   // --node-env の検知
   >   const nodeEnv = argv['node-env'];
   >   // --mode の検知
   >   const mode = argv.mode;
   > };
   > ```
   
### 開発時にファイル監視を行う

webpack には、コードが変更されるたびに自動的にコンパイルするいくつかの方法が用意されています：

- ⇣ [監視モード](#watch-mode)
- ⇣ [webpack-dev-server](#webpack-dev-server)
- ⇣ [webpack-dev-middleware](#webpack-dev-middleware)

#### 監視モード {#watch-mode}

依存関係グラフ内のすべてのファイルの変更を「監視」するように webpack に指示できます。これらのファイルの1つが更新されると、コードが再コンパイルされるため、フルビルドを手動で実行する必要はありません。

```json title="package.json"
{
  "scripts": {
    "watch": "webpack --watch"
  }
}
```

:::tip Tip

唯一の欠点は、変更を確認するためにブラウザを更新する必要があることです。それが自動的に行われるともっといいので、まさにそれを行う [`webpack-dev-server`](#webpack-dev-server) を試してみましょう。

:::

#### `webpack-dev-server`

`webpack-dev-server` は、基本的な Web サーバーとライブリロードを使用する機能を提供します。

:::tip Tips

`webpack-dev-server` はコンパイル後、出力ファイルを一切書きません。その代わり、バンドルファイルをメモリ上に保持し、サーバのルートパスにマウントされた実ファイルであるかのように提供します。もしあなたのページが別のパスにバンドルファイルを見つけることを期待するなら、開発サーバーの設定にある `devMiddleware.publicPath` オプションでこれを変更することができます。

```js title="webpack.config.js"
module.exports = {
  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/publicPathForDevServe',
      serverSideRender: true,
      writeToDisk: true,
    },
  },
};
```

:::

```bash title="インストール"
npm i -D webpack-dev-server
```

```js title="webpack.config.js"
module.exports = {
  // ...
  devServer: {
    static: './dist',
  },
};
```

```json title="package.json"
{
  "scripts": {
    "start": "webpack serve --open"
  },
}
```

#### `webpack-dev-middleware`

`webpack-dev-middleware` は webpack で処理されたファイルをサーバに出力するためのラッパーです。これは内部的には `webpack-dev-server` で使用されていますが、必要に応じてよりカスタムなセットアップができるように別パッケージとして提供されています。

```bash title="インストール"
npm i -D express webpavk-dev-midleware
```

```js title="webpack.config.js"
module.exports = {
  // ...
  output: {
    // ...
    publicPath: '/',
  },
};
```

```js title="server.js"
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

```package.json
{
  "scripts": {
    "server": "node server.js"
  }
}
```

### コード分割

> 🔗 [Code Splitting | webpack](https://webpack.js.org/guides/code-splitting/)

コードを複数のバンドルに分割し、オンデマンドまたは並列で読み込むことができます。これには、次の3つのアプローチがあります：

- 🔗 [**エントリポイント**](https://webpack.js.org/guides/code-splitting/#entry-points)
  > 複数のエントリポイントを構成してコードを手動で分割します。
- 🔗 [**重複の防止**](https://webpack.js.org/guides/code-splitting/#prevent-duplication)
  > エントリ構成の `dependOn` または [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) を使用して、重複排除とチャンクの分割を行います。
- 🔗 [**動的インポート**](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
  > モジュール内の `import()` 構文または `require.ensure()` を介してコードを分割します。

### バンドル分析

> 🔗 [Bundle Analysis](https://webpack.js.org/guides/code-splitting/#bundle-analysis)

コードの分割を開始したら、出力を分析して、モジュールがどこに到達したかを確認すると便利です。次のツールがあります：

- [`webpack-chart`](https://alexkuz.github.io/webpack-chart/) – 円グラフ
- [`webpack-visualizer`](https://chrisbateman.github.io/webpack-visualizer/) – スペースを占有しているモジュールと重複している可能性のあるモジュールを確認
- [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) – インタラクティブなズーム可能なツリーマップ
- [`webpack bundle optimize helper`](https://webpack.jakoblind.no/optimize) – バンドルサイズを縮小のための実用的な提案
- [`bundle-stats`](https://github.com/bundle-stats/bundle-stats) – バンドルレポート（バンドルサイズ、アセット、モジュール）の生成

## リンク集

- [構成オプションのリスト](https://webpack.js.org/configuration/#options)
- [CLI API](https://webpack.js.org/api/cli/)
- [ローダー](https://webpack.js.org/loaders/)
- [プラグイン](https://webpack.js.org/plugins/)
