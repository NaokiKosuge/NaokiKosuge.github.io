---
slug: /eslint
sidebar_label: ESLint
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESLint

[ESLint](https://eslint.org/) は、コードの一貫性を高め、バグを回避することを目的として、ECMAScript / JavaScript コードで見つかったパターンを識別してレポートするためのツールです。

## 始め方

1. インストール
  > ```bash
  > npm install eslint --save-dev
  > # or
  > yarn add eslint --dev
  > ```
  >
2. 構成ファイルを作成
  > ```bash
  > npx eslint --init
  > # or
  > yarn run eslint --init
  > ```
  >
  > また必要に応じて、`eslintignore` ファイルを作成します。
  >
3. ESLint を実行
  > ```bash
  > npx eslint .eslintrc.js
  > # or
  > yarn run eslint yourfile.js
  > ```
  > スクリプトを登録しておくと便利です:
  > ```json title="package.json"
  > {
  >   "scripts": {
  >     "lint": "eslint"
    }
  > }
  > ```

## 構成ファイル

### 構成ファイルの形式

ESLint の構成は、次のいずれかで作成します。

- eslintrc ファイル

  `eslint --init` を実行すると、対話の後、`.eslintrc.{js|yml|json}` が作成されます。

- `package.json`

  `eslintConfig` フィールドに構成を定義します。

例:

<Tabs>
<TabItem value="JavaScript" default={true}>

```js title=".eslintrc.js"
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
  },
};
```

</TabItem>
<TabItem value="JSON">

  ```json title=".eslintrc.json"
  {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "@typescript-eslint"
    ],
    "rules": {
    }
  }
  ```

</TabItem>
<TabItem value="YAML">

```yaml title=".eslintrc.yml"
env:
  browser: true
  es2021: true
  node: true
extends:
  - plugin:react/recommended
  - airbnb
parser: @typescript-eslint/parser
parserOption:
  ecmaFeature:
    jsx: true
  ecmaVersion: 12
  sourceType: module
plugins:
  - react
  - @typescript-eslint
rules:
```

</TabItem>

<TabItem value="package.json">

  ```json title="package.json"
  {
    "eslintConfig": {
      "env": {
        "browser": true,
        "es2021": true,
        "node": true
      },
      "extends": [
        "plugin:react/recommended",
        "airbnb"
      ],
      "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "ecmaFeatures": {
            "jsx": true
          },
        "ecmaVersion": 12,
        "sourceType": "module"
      },
      "plugins": [
        "react",
        "@typescript-eslint"
      ],
      "rules": {
      }
    }
  }
  ```

</TabItem>
</Tabs>

### カスケード

構成は、対象のファイルの場所に基づいて機能します。

## 構成オプション

### `extends`

`extends` では、構成ファイルの継承元を指定します:

```js
module.exports = {
  plugins: [
    'react'
  ],
  extends: [
    // ビルトインを指定
    'eslint:recommended',
    'eslint:all',
    // ローカルへの指定
    './node_modules/coding-standard/eslintDefaults.js',
    // npm パッケージを指定
    'eslint-config-airbnb',
    // プラグインからの構成を使用
    `plugin:react/recommended`
  ]
};
```

:::tip 有名な共有可能構成

- `eslint:recommended`

公式が推奨するルールセット

- `eslint:all`

全ての標準ルールをオンにする

- [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base)

Airbnb の共有可能構成

- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)

Airbnb の React 向け共有可能構成

- [`eslint-config-standard`](https://github.com/standard/eslint-config-standard)

JavaScript 標準スタイルの共有可能構成

- [`eslint-config-google`](https://github.com/google/eslint-config-google)

Google JavaScript スタイルガイドの共有可能構成

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

不要なルールや Prettier と競合する可能性のあるルールをすべてオフにする共有可能構成

:::

### `root`

ルート構成の場合は、`root: true` にすることで、カスケードの上位の検索が行われなくなります。

### `plugins`

プラグインは、ESLint の機能を拡張するもので、環境やルールを追加したり、JavaScript 以外のファイルを処理可能にすることもできます。

プラグインを指定するには、まず npm でプラグインをインストールし、`plugins` で指定します。

```js
module.exports = {
  plugins: [
    'node',  // eslint-plugin-node
    'react',
    '@typescript-eslint'
  ]
};
```

:::tip 有名な共有可能構成

- [`eslint-plugin-node`](https://www.npmjs.com/package/eslint-plugin-node)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
- [`@typescript-eslint`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)

:::

### `env`

`env` は、JavaScript の実行環境を指定します。

例:

```js
module.exports = {
  "env": {
    "browser": true,
    "node": true
  }
};
```

利用可能な環境は次のとおりです:

- `browser`: ブラウザのグローバル変数
- `node`: Node.js グローバル変数と Node.js スコープ
- `commonjs`: CommonJS グローバル変数と CommonJS スコープ（Browserify/WebPack）を使用するブラウザー専用コードにこれを使用する）
- `shared-node-browser`: Node.js とブラウザの両方に共通のグローバル
- `es6`: モジュールを除くすべての ECMAScript 6 機能を有効にする（これにより、ecmaVersion パーサーオプションが自動的に6に設定される）
- `es2017`: すべての ECMAScript2017 グローバルを追加し、ecmaVersion パーサーオプションを自動的に8に設定する
- `es2020`: すべての ECMAScript2020 グローバルを追加し、ecmaVersionパーサーオプションを自動的に11に設定する
- `es2021`: すべての ECMAScript2021 グローバルを追加し、ecmaVersion パーサーオプションを自動的に12に設定する
- `worker`: Web ワーカーのグローバル変数
- `amd`: [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 仕様に従って、グローバル変数として `require()` と `define()` を定義する
- `mocha`: すべてのMochaテストグローバル変数を追加する
- `jasmine`: バージョン1.3および2.0のすべての Jasmine テストグローバル変数を追加する
- `jest`: Jest グローバル変数
- `phantomjs`: PhantomJS グローバル変数
- `protractor`: 分度器のグローバル変数
- `qunit`: QUnit グローバル変数
- `jquery`: jQuery グローバル変数
- `prototypejs`: Prototype.jsグローバル変数
- `shelljs`: ShellJSグローバル変数
- `meteor`: 流星のグローバル変数
- `mongo`: MongoDBグローバル変数
- `applescript`: AppleScriptグローバル変数
- `nashorn`: Java 8Nashornグローバル変数
- `serviceworker`: ServiceWorkerのグローバル変数
- `atomtest`: アトムテストヘルパーグローバル
- `embertest`: Emberテストヘルパーグローバル
- `webextensions`: WebExtensionsグローバル
- `greasemonkey`: GreaseMonkeyグローバル

### `parser`

デフォルトでは、ESLint はパーサーとして [Espree](https://github.com/eslint/espree) を使用しますが、`parser` プロパティでこれを変更することができます:

```js
module.exports = {
  parser: 'esprima'
};
```

主なカスタムパーサー:

- [esprima](https://www.npmjs.com/package/esprima)
- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)

### `parserOptions`

デフォルトでは、ESLint は、ES5 構文を想定していますが、`parserOptions` を指定することで、ES2015+ や JSX などの他の構文を解析することができます:

```js
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
```

使用可能なオプション:

- `ecmaVersion`: ECMAScript バージョンの指定。`3`、`5` (デフォルト)、`2015` (`6`と同じ)、`2016` (`7`と同じ)、`2017` (`8`と同じ)、`2018` (`9`と同じ)、`2019` (`10`と同じ)、`2020` (`11`と同じ)、`2021` (`12`と同じ)、または `latest`
- `sourceType`: `'script'` (デフォルト) または `'module'` (ESモジュール)
- `ecmaFeatures`: 追加の言語機能
  - `globalReturn`
  - `impliedStrict`: グローバルな [Strict モード](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode) を有効にする
  - `jsx`: JSX を有効にする

### `rules`
ESLint には多数の組み込みルールが付属しており、プラグインを介してルールを追加できます。**構成コメント**または**構成ファイル**を使用して、プロジェクトで使用するルールを変更できます。ルール設定を変更するには、ルールIDを次のいずれかの値に設定する必要があります。

- `off`または`0`: ルールをオフにします
- `warn`または`1`: 警告としてルールをオンにします（終了コードには影響しません）
`error`または`2`: ルールをエラーとしてオンにします（トリガーされると終了コードは1になります）

#### 構成コメントの使用

```js
/* eslint eqeqeq: "off", curly: "error"
 * --
 * 2つ以上の連続した「-」の後、コメントを追加することができます。
 */
```

#### 構成ファイルの使用

構成ファイルで指定する場合は、`rules` プロパティで指定します:

```js
module.exports = {
  rules: {
    "curly": "error",
    "quotes": ["error", "double"],
    // プラグインで追加されたルール
    "plugin1/rule1": "error"
  }
};
```

:::info 組み込みのルール

組み込みのルールは [こちら](/notes/eslint-rules) に一覧を掲載しています。

:::

### `overrides`

グロブパターンに応じて構成を使い分けることができます:

```js
module.exports = {
  rules: {
    quotes: ['error', 'double']
  },
  overrides: [
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single']
      }
    }  
  ]
};
```

### `globals`

ESLint に対し、グローバル変数を宣言する必要がある場合があります。

#### 構成コメントの使用

```js
/* global var1, var2 */
```

```js
/* global var1:writable, var2:readonly */
```

#### 構成ファイルの使用

```js
module.exports = {
  globals: {
    var1: 'writable',
    var2: 'readonly',
    Promise: 'off'
  }
};
```

## コードの無視

### `.eslintignore` ファイル

プロジェクトのルートディレクトリに `.eslintignore` ファイルを作成することで、ESLint に無視するファイル/ディレクトリを指示できます。

- `.eslintignore` というファイルをプロジェクトルートの作成します。
- `node_modules/`、ドットファイル、ドットディレクトリは暗黙的に無視されるため、記述の必要は無い。
- その他、バージョン管理システム Git の　`.gitignore` と同様。

```
# 「#」から始まる行はコメントとして扱われます。
!.build
.build/*
!.build/test.js
```

### `package.json` の `eslintIgnore` プロパティ

ESLint が無視するファイル/ディレクトリは `package.json` で指示することもできます:

```json title="package.json" {8}
{
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```

## CLI

### インストール

```bash
npm i -D eslint
```

### 構文

```bash
eslint [options] [file|dir|glob]*
```

### 主要なオプション

#### `-h`, `--help`

ヘルプを表示します。

<details>
<summary>ヘルプの内容</summary>

```
eslint [options] file.js [file.js] [dir]

Basic configuration:
  --no-eslintrc                   Disable use of configuration from .eslintrc.*
  -c, --config path::String       Use this configuration, overriding .eslintrc.* config options if present
  --env [String]                  Specify environments
  --ext [String]                  Specify JavaScript file extensions
  --global [String]               Define global variables
  --parser String                 Specify the parser to be used
  --parser-options Object         Specify parser options
  --resolve-plugins-relative-to path::String  A folder where plugins should be resolved from, CWD by default

Specifying rules and plugins:
  --rulesdir [path::String]       Use additional rules from this directory
  --plugin [String]               Specify plugins
  --rule Object                   Specify rules

Fixing problems:
  --fix                           Automatically fix problems
  --fix-dry-run                   Automatically fix problems without saving the changes to the file system
  --fix-type Array                Specify the types of fixes to apply (problem, suggestion, layout)

Ignoring files:
  --ignore-path path::String      Specify path of ignore file
  --no-ignore                     Disable use of ignore files and patterns
  --ignore-pattern [String]       Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                         Lint code provided on <STDIN> - default: false
  --stdin-filename String         Specify filename to process STDIN as

Handling warnings:
  --quiet                         Report errors only - default: false
  --max-warnings Int              Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String             Use a specific output format - default: stylish
  --color, --no-color             Force enabling/disabling of color

Inline configuration comments:
  --no-inline-config              Prevent comments from changing config or rules
  --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives

Caching:
  --cache                         Only check changed files - default: false
  --cache-file path::String       Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String   Path to the cache file or directory
  --cache-strategy String         Strategy to use for detecting changed files in the cache - either: metadata or content - default: metadata

Miscellaneous:
  --init                          Run config initialization wizard - default: false
  --env-info                      Output execution environment information - default: false
  --no-error-on-unmatched-pattern  Prevent errors when pattern is unmatched
  --exit-on-fatal-error           Exit with exit code 2 in case of fatal error - default: false
  --debug                         Output debugging information
  -h, --help                      Show help
  -v, --version                   Output the version number
  --print-config path::String     Print the configuration for the given file

```
</details>

#### `--init`

初期化ウィザードを開始します。

#### `-f`, `--format`

コンソールの出力形式を指定します。

- `checkstyle`
- `codeframe`
- `compact`
- `html`
- `jslint`-xml
- `json`
- `junit`
- `stylish` (デフォルト)
- `table`
- `tap`
- `unix`
- `visualstudio`

それぞれの見え方については [公式ドキュメント](https://eslint.org/docs/user-guide/formatters/) を参照してください。

#### `--fix`

問題のあった箇所を修正し、問題は修正後の内容が出力されます。


## ESLint のルール一覧

- ✓: `"extends": "eslint:recommended"` がルールを有効にする

### 考えられるエラー

これらのルールは、JavaScriptコードで発生する可能性のある構文エラーまたは論理エラーに関連しています:

| 印 | プロパティ | 意味 |
| ---| --- | --- |
| ✓ | [`for-direction`](https://eslint.org/docs/rules/for-direction) | `for` ループのカウンターの方向を正す |
| ✓ | [`getter-return`](https://eslint.org/docs/rules/getter-return) | ゲッターで `return`ステートメントを強制する |
| ✓ | [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor) | `Promise` の非同期な エグゼキュータ関数を禁止する |
|   | [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop) | ループ内の `await` を禁止する |
| ✓ | [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero) | `-0` との比較を禁止する |
| ✓ | [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign) | 条件式で代入演算子を禁止する |
|   | [`no-console`](https://eslint.org/docs/rules/no-console) | `console`の使用を禁止する |
| ✓ | [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition) | 条件での定数式を禁止する |
| ✓ | [`no-control-regex`](https://eslint.org/docs/rules/no-control-regex) | 正規表現の制御文字を禁止する |
| ✓ | [`no-debugger`](https://eslint.org/docs/rules/no-debugger) | `debugger`の使用を禁止する |
| ✓ | [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args) | function`定義で重複する引数を禁止する |
| ✓ | [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if) | if-else-if チェーンで重複する条件を禁止する |
| ✓ | [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys) | オブジェクトリテラルで重複するキーを禁止する |
| ✓ | [`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case) | 重複するケースラベルを禁止する |
| ✓ | [`no-empty`](https://eslint.org/docs/rules/no-empty) | 空のブロックステートメントを禁止する |
| ✓ | [`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class) | 正規表現で空の文字クラスを禁止する |
| ✓ | [`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign) | `catch` 句での例外の再割り当てを禁止する |
| ✓ | [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast) | 不要なブールキャストを禁止する |
|   | [`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens) | 不要な括弧を禁止する |
| ✓ | [`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi) | 不要なセミコロンを禁止する |
| ✓ | [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign) | `function` 宣言の再割り当てを禁止する |
| ✓ | [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign) | インポートされたバインディングへの割り当てを禁止する |
| ✓ | [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations) | ネストされたブロックでの変数または `function` 宣言を禁止する |
| ✓ | [`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp) | `RegExp` コンストラクターで無効な正規表現文字列を禁止する |
| ✓ | [`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace) | 不規則な空白を禁止する |
|   | [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision) | 精度を失うリテラル数を禁止する |
| ✓ | [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class) | 文字クラス構文で複数のコードポイントを使用して作成された文字を禁止する |
| ✓ | [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls) | グローバルオブジェクトプロパティを関数として呼び出すことを禁止する |
|   | [`no-promise-executor-return`](https://eslint.org/docs/rules/no-promise-executor-return) | `Promise` エグゼキュータ関数からの戻り値を禁止する |
| ✓ | [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins) | 一部の `Object.prototype` メソッドをオブジェクトに直接呼び出すことを禁止する |
| ✓ | [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces) | 正規表現で複数のスペースを許可しない |
| ✓ | [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return) | セッターからの戻り値を禁止する |
| ✓ | [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays) | スパース配列を禁止する |
|   | [`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string) | 通常の文字列でのテンプレートリテラルプレースホルダー構文の禁止 |
| ✓ | [`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline) | 紛らわしい複数行の表現を禁止する |
| ✓ | [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable) | `return`、` throw`、`continue`、および `break` ステートメントの後に到達不能コードを禁止する |
|   | [`no-unreachable-loop`](https://eslint.org/docs/rules/no-unreachable-loop) | 1回の反復のみを許可する本体を持つループを禁止する |
| ✓ | [`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally) | `finally` ブロックの制御フローステートメントを禁止する |
| ✓ | [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation) | 関係演算子の左オペランドの否定を禁止する |
|   | [`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining) | `undefined` 値が許可されていないコンテキストでのオプションのチェーンの使用を禁止する |
|   | [`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference) | 正規表現での無駄な後方参照を禁止する |
|   | [`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates) | `await` または `yield` の使用により競合状態につながる可能性のある割り当てを許可しない |
| ✓ | [`use-isnan`](https://eslint.org/docs/rules/use-isnan) | `NaN` をチェックするときに `isNaN()` の呼び出しを要求する |
| ✓ | [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof) | `typeof` 式を有効な文字列と比較することを強制する |

### ベストプラクティス

これらのルールは、問題を回避するためのより良い方法に関連しています:

| 印 | プロパティ | 意味 |
| ---| --- | --- |
|   | [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs) | オブジェクトとクラスでゲッターとセッターのペアを適用する |
|   | [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return) | 配列メソッドのコールバックで `return` ステートメントを適用する |
|   | [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var) | 定義されているスコープ内で変数の使用を強制する |
|   | [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this) | クラスメソッドが `this` を利用するように強制する |
|   | [`complexity`](https://eslint.org/docs/rules/complexity) | プログラムで許可される最大の循環的複雑度を適用する |
|   | [`consistent-return`](https://eslint.org/docs/rules/consistent-return) | 常に値を指定するか、値を指定しない場合は、`return` ステートメントを必須とする |
|   | [`curly`](https://eslint.org/docs/rules/curly) | すべての制御ステートメントに一貫した中括弧スタイルを適用する |
|   | [`default-case`](https://eslint.org/docs/rules/default-case) | `switch` ステートメントに `default` ケースが必要 |
|   | [`default-case-last`](https://eslint.org/docs/rules/default-case-last) | `switch` ステートメントのデフォルト句を最後に強制する |
|   | [`default-param-last`](https://eslint.org/docs/rules/default-param-last) | デフォルトのパラメータを最後に強制する |
|   | [`dot-location`](https://eslint.org/docs/rules/dot-location) | ドットの前後に一貫した改行を適用する |
|   | [`dot-notation`](https://eslint.org/docs/rules/dot-notation) | 可能な限りドット表記を適用する |
|   | [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq) | `===` と `！==` の使用が必要です |
|   | [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs) | オブジェクトリテラルとクラスにグループ化されたアクセサペアを必要とする |
|   | [`guard-for-in`](https://eslint.org/docs/rules/guard-for-in) | `if` ステートメントを含めるには ` for-in` ループを必須とする |
|   | [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file) | ファイルごとに最大数のクラスを適用する |
|   | [`no-alert`](https://eslint.org/docs/rules/o-alert) | `alert`、`confirm`、および `prompt` の使用を禁止します 発信者なし |
|   | [`no-caller`](https://eslint.org/docs/rules/no-caller) | `arguments.caller` または `arguments.callee` の使用を禁止する |
| ✓ | [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations) | `case` 句での字句宣言を禁止する |
|   | [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return) | コンストラクターからの戻り値を禁止する |
|   | [`no-div-regex`](https://eslint.org/docs/rules/no-div-regex) | 正規表現の先頭で除算演算子を明示的に禁止する |
|   | [`no-else-return`](https://eslint.org/docs/rules/no-else-return) | `if` ステートメントの `return` ステートメントの後の `else` ブロックを禁止する |
|   | [`no-empty-function`](https://eslint.org/docs/rules/no-empty-function) | 空の関数を禁止する |
| ✓ | [`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern) | 空の破壊パターンを禁止する |
|   | [`no-eq-null`](https://eslint.org/docs/rules/no-eq-null) | 型チェック演算子なしで `null` 比較を禁止する |
|   | [`no-eval`](https://eslint.org/docs/rules/no-eval) | `eval()` の使用を禁止する |
|   | [`no-extend-native`](https://eslint.org/docs/rules/no-extend-native) | ネイティブタイプの拡張を禁止する |
|   | [`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind) | `.bind()` への不要な呼び出しを禁止する |
|   | [`no-extra-label`](https://eslint.org/docs/rules/no-extra-label) | 不要なラベルを禁止する |
| ✓ | [`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough) | `case` ステートメントのフォールスルーを禁止する |
|   | [`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal) | 数値リテラルの先頭または末尾の小数点を禁止する |
| ✓ | [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign) | ネイティブオブジェクトまたは読み取り専用グローバル変数への割り当てを禁止する |
|   | [`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion) | 速記型変換を禁止する |
|   | [`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals) | グローバルスコープでの宣言を禁止する |
|   | [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval) | `eval()` のようなメソッドの使用を禁止する |
|   | [`no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this) | クラスまたはクラスのようなオブジェクトの外部で `this` キーワードを禁止する |
|   | [`no-iterator`](https://eslint.org/docs/rules/no-iterator) | `__iterator__` プロパティの使用を禁止する |
|   | [`no-labels`](https://eslint.org/docs/rules/no-labels) | ラベル付きステートメントを禁止する |
|   | [`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks) | 不要なネストされたブロックを禁止する |
|   | [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func) | ループステートメント内に安全でない参照を含む関数宣言を禁止する |
|   | [`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers) | マジックナンバーを禁止する |
|   | [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces) | 複数のスペースを禁止する |
|   | [`no-multi-str`](https://eslint.org/docs/rules/no-multi-str) | 複数行の文字列を禁止する |
|   | [`no-new`](https://eslint.org/docs/rules/no-new) | 割り当てまたは比較以外の `new` 演算子を禁止する |
|   | [`no-new-func`](https://eslint.org/docs/rules/no-new-func) | `Function` オブジェクトで `new` 演算子を禁止する |
|   | [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers) | `String`、` Number`、および `Boolean` オブジェクトで `new` 演算子を禁止する |
|   | [`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape) | 文字列リテラルの `\ 8` および `\9` エスケープシーケンスを禁止する |
| ✓ | [`no-octal`](https://eslint.org/docs/rules/no-octal) | 8進リテラルを禁止する |
|   | [`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape) | 文字列リテラルの8進エスケープシーケンスを禁止する |
|   | [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign) | `function` パラメータの再割り当てを禁止する |
|   | [`no-proto`](https://eslint.org/docs/rules/no-proto) | `__proto__` プロパティの使用を禁止する |
| ✓ | [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare) | 変数の再宣言を禁止する |
|   | [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties) | 特定のオブジェクトの特定のプロパティを禁止する |
|   | [`no-return-assign`](https://eslint.org/docs/rules/no-return-assign) | `return` ステートメントで代入演算子を禁止する |
|   | [`no-return-await`](https://eslint.org/docs/rules/no-return-await) | 不要な `return await` を禁止する |
|   | [`no-script-url`](https://eslint.org/docs/rules/no-script-url) | `javascript:` のURLを禁止する |
| ✓ | [`no-self-assign`](https://eslint.org/docs/rules/no-self-assign) | 両側がまったく同じである割り当てを許可しない |
|   | [`no-self-compare`](https://eslint.org/docs/rules/no-self-compare) | 両側が完全に同じである場合の比較を許可しない |
|   | [`no-sequences`](https://eslint.org/docs/rules/no-sequences) | カンマ演算子を禁止する |
|   | [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal) | 例外としてリテラルをスローすることを禁止する |
|   | [`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition) | 変更されていないループ条件を禁止する |
|   | [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions) | 未使用の式を禁止する |
| ✓ | [`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels) | 未使用のラベルを禁止する |
|   | [`no-useless-call`](https://eslint.org/docs/rules/no-useless-call) | `.call()` および  `.apply()` への不要な呼び出しを禁止する |
| ✓ | [`no-useless-catch`](https://eslint.org/docs/rules/no-useless-catch) | 不要な `catch` 句を禁止する |
|   | [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat) | リテラルまたはテンプレートリテラルの不要な連結を禁止する |
| ✓ | [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape) | 不要なエスケープ文字を禁止する |
|   | [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return) | 冗長な `return` ステートメントを禁止する |
|   | [`no-void`](https://eslint.org/docs/rules/no-void) | `void` 演算子を禁止する |
|   | [`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments) | コメントで指定された警告用語を禁止する |
| ✓ | [`no-with`](https://eslint.org/docs/rules/no-with) | `with` ステートメントを禁止する |
|   | [`prefer-named-capture-group`](https://eslint.org/docs/rules/prefer-named-capture-group) | 正規表現で名前付きキャプチャグループを使用するように強制する |
|   | [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors) | `Promise` 拒否の理由として `Error` オブジェクトを使用することを必須とする |
|   | [`prefer-regex-literals`](https://eslint.org/docs/rules/prefer-regex-literals) | 正規表現リテラルを優先して、 `RegExp` コンストラクターの使用を禁止する |
|   | [`radix`](https://eslint.org/docs/rules/radix) | `parseInt()` を使用する場合は、基数引数の一貫した使用を強制します |
|   | [`require-await`](https://eslint.org/docs/rules/require-await) | `await` 式を持たない非同期関数を禁止する |
|   | [`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp) | `RegExp` で `u` フラグの使用を強制する |
|   | [`vars-on-top`](https://eslint.org/docs/rules/vars-on-top) | `var` 宣言をそれらを含むスコープの上部に配置することを必要とする |
|   | [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife) | 即時の `function` 呼び出しを括弧で囲むことを必要とする |
|   | [`yoda`](https://eslint.org/docs/rules/yoda) | 「ヨーダ」条件を要求または禁止する |

### Strict モード

これらのルールは、厳密モードディレクティブに関連しています:

| 印 | プロパティ | 意味 |
| ---| --- | --- |
|   | [`strict`](https://eslint.org/docs/rules/strict) | 厳密モードディレクティブを要求または禁止する |

### 変数

これらのルールは、変数宣言に関連しています:

| 印 | プロパティ | 意味 |
| ---| --- | --- |
|   | [`init-declarations`](https://eslint.org/docs/rules/init-declarations) | 変数宣言での初期化を要求または禁止する |
| ✓ | [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var) | 変数の削除を禁止する |
|   | [`no-label-var`](https://eslint.org/docs/rules/no-label-var) | 変数と名前を共有するラベルを禁止する |
|   | [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals) | 指定されたグローバル変数を禁止する |
|   | [`no-shadow`](https://eslint.org/docs/rules/no-shadow) | 外側のスコープで宣言された変数をシャドウイングすることから変数宣言を禁止する |
| ✓ | [`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names) | 識別子が制限された名前をシャドウイングすることを禁止する |
| ✓ | [`no-undef`](https://eslint.org/docs/rules/no-undef) | `/* global * /` コメントで言及されていない限り、宣言されていない変数の使用を禁止します |
|   | [`no-undef-init`](https://eslint.org/docs/rules/no-undef-init) | 変数を `undefined` に初期化することを禁止する |
|   | [`no-undefined`](https://eslint.org/docs/rules/no-undefined) | 識別子としての `undefined` の使用を禁止する |
| ✓ | [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars) | 未使用の変数を禁止する |
|   | [`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define) | 定義する前に変数の使用を禁止する |

### 文体の問題

これらのルールはスタイルガイドラインに関連しているため、非常に主観的です:

| 印 | プロパティ | 意味 |
| ---| --- | --- |
|   | [`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline) | 配列ブラケットを開いた後、閉じる前に改行を適用する |
|   | [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing) | 配列ブラケット内に一定の間隔を強制する |
|   | [`array-element-newline`](https://eslint.org/docs/rules/array-element-newline) | 各配列要素の後に改行を強制する |
|   | [`block-spacing`](https://eslint.org/docs/rules/block-spacing) | ブロックを開いた後、ブロックを閉じる前に、ブロック内のスペースを禁止または強制する |
|   | [`brace-style`](https://eslint.org/docs/rules/brace-style) | ブロックに一貫したブレーススタイルを適用する |
|   | [`camelcase`](https://eslint.org/docs/rules/camelcase) | キャメルケースの命名規則を適用する |
|   | [`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments) | コメントの最初の文字の大文字化を強制または禁止する |
|   | [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle) | 末尾のコンマを要求または禁止する |
|   | [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing) | カンマの前後に一貫した間隔を適用する |
|   | [`comma-style`](https://eslint.org/docs/rules/comma-style) | 一貫したコンマスタイルを適用する |
|   | [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing) | 計算されたプロパティブラケット内に一貫した間隔を適用する |
|   | [`consistent-this`](https://eslint.org/docs/rules/consistent-this) | 現在の実行コンテキストをキャプチャするときに一貫した命名を適用する |
|   | [`eol-last`](https://eslint.org/docs/rules/eol-last) | ファイルの終わりに改行を要求または禁止する |
|   | [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing) | 関数識別子とその呼び出しの間の間隔を要求または禁止する |
|   | [`func-name-matching`](https://eslint.org/docs/rules/func-name-matching) | 関数名は、それらが割り当てられている変数またはプロパティの名前と一致させることを必要とする |
|   | [`func-names`](https://eslint.org/docs/rules/func-names) | 名前付きの `function` 式を要求または禁止する |
|   | [`func-style`](https://eslint.org/docs/rules/func-style) | `function` 宣言または式のいずれかの一貫した使用を強制します |
|   | [`function-call-argument-newline`](https://eslint.org/docs/rules/function-call-argument-newline) | 関数呼び出しの引数間に改行を強制する |
|   | [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline) | 関数の括弧内に一貫した改行を適用する |
|   | [`id-denylist`](https://eslint.org/docs/rules/id-denylist) | 指定された識別子を禁止する |
|   | [`id-length`](https://eslint.org/docs/rules/id-length) | 識別子の最小長と最大長を適用する |
|   | [`id-match`](https://eslint.org/docs/rules/id-match) | 指定された正規表現に一致する識別子を必要とする |
|   | [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak) | 矢印関数本体の位置を強制する |
|   | [`indent`](https://eslint.org/docs/rules/indent) | 一貫したインデントを適用する |
|   | [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes) | JSX属性で二重引用符または一重引用符を一貫して使用するように強制する |
|   | [`key-spacing`](https://eslint.org/docs/rules/key-spacing) | オブジェクトリテラルプロパティのキーと値の間に一貫した間隔を適用する |
|   | [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing) | キーワードの前後に一貫した間隔を適用する |
|   | [`line-comment-position`](https://eslint.org/docs/rules/line-comment-position) | 行コメントの位置を強制する |
|   | [`linebreak-style`](https://eslint.org/docs/rules/linebreak-style) | 一貫した改行スタイルを適用する |
|   | [`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment) | コメントの周りに空行が必要 |
|   | [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members) | クラスメンバー間の空行を要求または禁止する |
|   | [`max-depth`](https://eslint.org/docs/rules/max-depth) | ブロックをネストできる最大の深さを適用する |
|   | [`max-len`](https://eslint.org/docs/rules/max-len) | 最大行長を適用する |
|   | [`max-lines`](https://eslint.org/docs/rules/max-lines) | ファイルごとに最大行数を適用する |
|   | [`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function) | 関数に最大行数のコードを適用する |
|   | [`max-nested-callbacks`](https://eslint.org/docs/rules/max-nested-callbacks) | コールバックをネストできる最大の深さを適用する |
|   | [`max-params`](https://eslint.org/docs/rules/max-params) | 関数定義に最大数のパラメーターを適用する |
|   | [`max-statements`](https://eslint.org/docs/rules/max-statements) | ファンクションブロックで許可されるステートメントの最大数を適用します |
|   | [`max-statements-per-line`](https://eslint.org/docs/rules/max-statements-per-line) | 1行に許可されるステートメントの最大数を適用する |
|   | [`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style) | 複数行コメントに特定のスタイルを適用する |
|   | [`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary) | 三元式のオペランド間に改行を強制する |
|   | [`new-cap`](https://eslint.org/docs/rulesnew-cap) | コンストラクター名は大文字で始めることを必要とする |
|   | [`new-parens`](https://eslint.org/docs/rules/new-parens) | 引数なしでコンストラクターを呼び出すときに、括弧を強制または禁止する |
|   | [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) | メソッドチェーンの各呼び出しの後に改行が必要です |
|   | [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor) | `Array` コンストラクタを禁止する |
|   | [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise) | ビット演算子を禁止する |
|   | [`no-continue`](https://eslint.org/docs/rules/no-continue) | `continue` ステートメントを禁止する |
|   | [`no-inline-comments`](https://eslint.org/docs/rules/no-inline-comments) | コード後のインラインコメントを禁止する |
|   | [`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if) | `else` ブロック内の唯一のステートメントとして `if` ステートメントを許可しない |
|   | [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators) | 混合二項演算子を禁止する |
| ✓ | [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs) | インデントのための混合スペースとタブを禁止する |
|   | [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign) | 連鎖代入式の使用を禁止する |
|   | [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines) | 複数の空行を禁止する |
|   | [`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition) | 否定された条件を許可しない |
|   | [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary) | ネストされた3進式を禁止する |
|   | [`no-new-object`](https://eslint.org/docs/rules/no-new-object) | `Object` コンストラクタを禁止する |
|   | [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus) | 単項演算子 `++` と `--` を禁止します |
|   | [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax) | 指定された構文を禁止する |
|   | [`no-tabs`](https://eslint.org/docs/rules/no-tabs) | すべてのタブを禁止する |
|   | [`no-ternary`](https://eslint.org/docs/rules/no-ternary) | 三項演算子を禁止する |
|   | [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces) | 行末の末尾の空白を禁止する |
|   | [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle) | 識別子にぶら下がっているアンダースコアを禁止する |
|   | [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary) | より単純な選択肢が存在する場合は、三項演算子を禁止する |
|   | [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property) | プロパティの前に空白を許可しない |
|   | [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position) | 単一行ステートメントの場所を強制する |
|   | [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline) | 中括弧を開いた後と閉じる前に、一貫した改行を適用する |
|   | [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing) | 中括弧内に一定の間隔を強制する |
|   | [`object-property-newline`](https://eslint.org/docs/rules/object-property-newline) | オブジェクトのプロパティを別々の行に配置するように強制する |
|   | [`one-var`](https://eslint.org/docs/rules/one-var) | 関数で一緒にまたは別々に宣言される変数を強制する |
|   | [`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line) | 変数宣言の前後に改行を要求または禁止する |
|   | [`operator-assignment`](https://eslint.org/docs/rules/operator-assignment) | 可能な場合は、代入演算子の省略形を要求または禁止する |
|   | [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak) | 演算子に一貫した改行スタイルを適用する |
|   | [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks) | ブロック内のパディングを要求または禁止する |
|   | [`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements) | ステートメント間のパディング行を要求または禁止する |
|   | [`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator) | `**` 演算子を優先して `Math.pow` の使用を禁止する |
|   | [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread) | オブジェクトリテラルを最初の引数として `Object.assign` を使用することを禁止し、代わりにオブジェクトスプレッドの使用を優先する |
|   | [`quote-props`](https://eslint.org/docs/rules/quote-props) | オブジェクトリテラルプロパティ名を引用符で囲むことを必要とする |
|   | [`quotes`](https://eslint.org/docs/rules/quotes) | バッククォート、二重引用符、または一重引用符のいずれかの一貫した使用を強制する |
|   | [`semi`](https://eslint.org/docs/rules/semi) | ASI の代わりにセミコロンを要求または禁止する |
|   | [`semi-spacing`](https://eslint.org/docs/rules/semi-spacing) | セミコロンの前後に一定の間隔を適用する |
|   | [`semi-style`](https://eslint.org/docs/rules/semi-style) | セミコロンの位置を強制する |
|   | [`sort-keys`](https://eslint.org/docs/rules/sort-keys) | オブジェクトキーをソートすることを必要とする |
|   | [`sort-vars`](https://eslint.org/docs/rules/sort-vars) | 同じ宣言ブロック内の変数をソートすることを必要とする |
|   | [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks) | ブロックの前に一定の間隔を強制する |
|   | [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) | `function` 定義の開き括弧の前に一貫した間隔を適用する |
|   | [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens) | 括弧内に一定の間隔を強制する |
|   | [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops) | 中置演算子の周りに間隔を必要とする |
|   | [`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops) | 単項演算子の前後に一貫した間隔を適用する |
|   | [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment) | コメント内の `//` または  `/*` の後に一貫した間隔を適用する |
|   | [`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing) | `switch` ステートメントのコロンの周りに間隔を強制する |
|   | [`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing) | テンプレートタグとそのリテラル間の間隔を要求または禁止する |
|   | [`unicode-bom`](https://eslint.org/docs/rules/unicode-bom) | Unicode バイト順マーク（BOM）を要求または禁止する |
|   | [`wrap-regex`](https://eslint.org/docs/rules/wrap-regex) |正規表現リテラルを括弧で囲むことを必要とする  |

### ECMAScript 6

これらのルールは、ES2015 とも呼ばれる ES6 に関連しています:

| 印   | プロパティ                                                                              | 意味                                                            |
|-----|------------------------------------------------------------------------------------|---------------------------------------------------------------|
|     | [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)               | 矢印関数本体の周りに中括弧を必要とする                                           |
|     | [`arrow-parens`](https://eslint.org/docs/rules/rrow-parens)                        | 矢印関数の引数を括弧で囲むことを必要とする                                         |
|     | [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)                     | 矢印関数の矢印の前後に一定の間隔を適用する                                         |
| ✓   | [`constructor-super`](https://eslint.org/docs/rules/constructor-super)             | コンストラクターで `super()` 呼び出しを必要とする                                |
|     | [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)   | ジェネレーター関数の `*` 演算子の周りに一貫した間隔を適用する                             |
| ✓   | [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)                 | クラスメンバーの再割り当てを禁止する                                            |
|     | [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)           | 比較と混同される可能性のある矢印関数を禁止する                                       |
| ✓   | [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)                 | `const` の変数再割り当てを禁止する                                         |
| ✓   | [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)     | 重複するクラスメンバーを禁止する                                              |
|     | [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)       | 重複するモジュールのインポートを禁止する                                          |
| ✓   | [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)                     | `Symbol`オブジェクトで `new` 演算子を禁止する                                |
|     | [`no-restricted-exports`](https://eslint.org/docs/rules/no-restricted-exports)     | エクスポートで指定された名前を禁止する                                           |
|     | [`no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports)     | `import` によってロードされたときに指定されたモジュールを禁止する                         |
| ✓   | [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)       | コンストラクターで `super()` を呼び出す前に、 `this` または `super` を禁止する         |
|     | [`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key) | オブジェクトとクラスで不要な計算プロパティキーを禁止する                                  |
|     | [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)   | 不要なコンストラクターを禁止する                                              |
|     | [`no-useless-rename`](https://eslint.org/docs/rules/o-useless-rename)              | インポート、エクスポート、および非構造化割り当ての名前を同じ名前に変更することを禁止する                  |
|     | [`no-var`](https://eslint.org/docs/rules/no-var)                                   | `var` の代わりに `let` または `const` を必要とする                          |
|     | [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)               | オブジェクトリテラルのメソッドとプロパティの省略構文を要求または禁止する                          |
|     | [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)     | コールバックにアロー関数を使用することを必要とする                                     |
|     | [`prefer-const`](https://eslint.org/docs/rules/prefer-const)                       | 宣言後に再割り当てされない変数には `const` 宣言を必要とする                            |
|     | [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)       | 配列やオブジェクトからの破棄が必要                                             |
|     | [`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals) | `parseInt()`と `Number.parseInt()` を禁止し、2進数、8進数、16進数のリテラルを優先する |
|     | [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)           | `arguments` の代わりにRESTパラメータを必要とする                              |
|     | [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)                     | `.apply()` の代わりにスプレッド演算子を必要とする                                |
|     | [`prefer-template`](https://eslint.org/docs/rules/prefer-template)                 | 文字列連結の代わりにテンプレートリテラルを必要とする                                    |
| ✓   | [`require-yield`](https://eslint.org/docs/rules/require-yield)                     | ジェネレータ関数には `yield` を必要とする                                     |
|     | [`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)         | REST演算子とSスプレッド演算子の間隔とそれらの式を適用する                               |
|     | [`sort-imports`](https://eslint.org/docs/rules/sort-imports)                       | モジュール内でソートされたインポート宣言を適用する                                     |
|     | [`symbol-description`](https://eslint.org/docs/rules/symbol-description)           | シンボルの説明が必要                                                    |
|     | [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)   | テンプレート文字列の埋め込み式の周囲に間隔を空ける必要がある、または許可しない                       |
|     | [`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)           | `yield *` 式の `*` の周りの間隔を要求または禁止する                             |

## プラグイン

ESLint では、追加のルール、環境、構成などを定義するサードパーティのプラグインを使用することができます。それは、`eslint-plugin-*` という形式のパッケージ名で提供されます。

- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) – React のフックのルールを適用します。

## エディターで ESLint を使う

エディターを ESLint を連携することで、ESLint の構成を対応するエディターの機能に反映させることができるので、エディターを使う際は必ず連携をしておきましょう。

### WebStorm

:::note

公式ガイドは [こちら](https://pleiades.io/help/webstorm/eslint.html#ws_eslint_configure_highlighting)

:::

WebStorm の ESLint 連携機能は次の事柄を前提とします:

- コンピューターに Node.js がインストールされていること
- プロジェクトで Node.js インタープリターが構成されていること

  **設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）を開き、**言語 & フレームワーク | Node.js と NPM** に移動します。**Node インタープリター**フィールドには、デフォルトのプロジェクト Node.js インタープリターが表示されます。

- ESLint とプラグインなどの関連パッケージがインストールされていること (`npm i -D eslint`)

#### ESLint を自動的に構成する

**設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）を開き、**言語 & フレームワーク | JavaScript | コード品質ツール | ESLint** に移動して、**自動 ESLint 構成**オプションを選択します。

#### ESLint を手動で構成する

**設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）で、**言語およびフレームワーク | JavaScript | コード品質ツール | ESLint** に移動し、**手動 ESLint 構成**を選択します。

#### ESLint のハイライトを構成する

デフォルトでは、WebStorm は ESLint 構成の重大度に基づいて、検出されたエラーと警告をマークします。もしデフォルトの代わりに別の重大度をを使用する場合、**設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）で、**エディター | インスペクション**から**JavaScript と TypeScript | コード品質ツール | ESLint**と進み、**構成ファイルのルール重要度を使用する**のチェックをオフにして代わりとなる重大度を選択します。

#### ESLint からコードスタイルをインポートする

WebStorm は、ESLint で構成されたルールをコードフォーマッターで利用します。

- 初にプロジェクトを開くと、WebStorm はプロジェクトの ESLint 設定からコードスタイルを自動的にインポートします。
- ESLint の設定が（手動またはバージョン管理から）更新されている場合は、それをエディターで開き、コンテキストメニューから **ESLint コードスタイルルールを適用する**を選択します。