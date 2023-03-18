---
slug: /nodejs-commonjs
sidebar_label: CommonJS モジュール
---

# 【Node.js】CommonJS モジュール

## インポート

モジュールをインポートするには、`require(id)` を使用します。`id` には、ES モジュール（拡張子 `.mjs`）を指定することはできません。

```js title="例：色々なインポート (src/main.js)"
/*
.
├── node_modules
│    └── express
├── package-lock.json
├── package.json
└── src
     ├── foo.js
     └── lib
     │    └── index.js
     └── main.js
*/

// コアモジュールのインポート
const fs = require('fs');
const http = require('node:http');  // コアモジュールであることの明示

// ファイルモジュールのインポート
const foo = require('./foo.js');
const lib = require('./lib');  // ./lib/index.js
const {version} = require('../package.json');

// パッケージモジュールのインポート
const express = require('express');
```

### 依存解決のアルゴリズム

CommonJS モジュールの依存解決のアルゴリズムは、次の段階に分かれています：

1. コアモジュール

  指定された _モジュール名_ が Node のコアモジュールか調べます。

2. ファイルモジュール

  コアモジュールに見つからなかった場合、ローカルファイルシステムを探します。_モジュール名_ が `/` から始まる場合は絶対パスとして、`./` または `../` から始まる場合は、 `require` を呼び出しているファイルを起点とした相対パスで解釈されます。

3. パケージモジュール

  _モジュール名_ の開始文字列が、 `/`、`./`、`../` のうちいずれでもない場合、`require` を呼び出しているファイルと同じディレクトリの下の `node_modules` ディレクトリを探します。それでも見つからなかった場合は、再帰的より上位のディレクトリを検索していきます。

更に、ファイルモジュールとパッケージモジュールに関しては、次のルールによりファイルを特定します：

1. 指定された _モジュール名_ のファイルがあればそれを、無ければ `.js` 若しくは `.json`、更には `.node` を補完してファイルをロードを試みます。
2. 指定された _モジュール名_ のディレクトリがあれば、その配下に `package.json` が存在するかを調べます。存在すれば、その中の `"main"` プロパティで指定されたファイルをロードします。
3. _モジュール名_ のディレクトリ配下に `index.js` があればロードします。

### キャッシュ

モジュールは最初にロードされた後にキャッシュされます。つまり、同一モジュールへの2回目以降の `require(id)` は実行されないということです。

:::caution 作成されるキャッシュに関する注意事項

- 同じ `require('foo')` でも、場合によっては 異なるモジュールとして扱われることがあります。

  つまり、`id` に同じ文字列を指定したとしても、解決されたファイル名が異なれば、別のキャッシュが作成されということです。

- 大文字と小文字を区別しないファイルシステムまたは OS では、解決された異なるファイル名が同一のファイルを指すことがありますが、キャッシュはそれらを異なるモジュールとして扱います。

  例えば、`require('foo')` と `require('FOO')` は別のモジュールとして扱われます。

:::

もし、モジュールにコードを複数回実行させたい場合、関数をエクスポートして、その関数を呼び出します。

### モジュールラッパー

モジュールのコードが実行される前に、Node.js は、次の関数ラッパーでモジュールをラップします：

```js title="CommonJS モジュールの関数ラッパー"
(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```

## モジュールスコープ

それぞれのモジュールごとには、モジュールスコープに閉じられたグローバルに見えるオブジェクトが定義されます：

- `__dirname` – 現在のモジュールのディレクトリ名。
- `__filename` – 現在のモジュールのファイル名。
- `exports` – `module.exports`　への参照。
- `module` – 現在のモジュールへの参照。
  - `children`
  - `exports` – モジュールが公開するメンバー
  - `filename` – モジュールの完全に解決されたファイル名。
  - `id` – モジュールの識別子。通常、これは完全に解決されたファイル名です。
  - `isPreloading` – モジュールが Node.js プリロードフェーズ中に実行されている場合は `true`。
  - `loaded` – モジュールのロードが完了した場合は `true`。
  - `path` – モジュールのディレクトリ名。
  - `paths` – モジュールの検索パス。
  - `require(id)` – `require()` が元のモジュールから呼び出されたかのようにモジュールをロードする方法を提供します。
- `require(id)` – モジュールのインポート関数。
  - `chache` – モジュールのキャッシュ。
  - `main` – Node.js プロセスの起動時にロードされたエントリスクリプトを表す`Module` オブジェクト。
  - `resolve(request[, options])` – モジュールファイルの検索。
    - `paths(request)` – リクエストの解決中に検索されたパス。

## エクスポート

### 関数のエクスポート（substack パターン）

**substack パターン**は、主となる関数のみをエクスポートし、その関数のプロパティとして副次的な機能を定義する方法です：

```js title="例：substack パターン"
/* logger.js */

// 主となる関数
module.exports = (message) => {
  console.log(`概要：${message}`);
};

// 副次的な関数
module.exports.verbose = (message) => {
  console.log(`詳細：${message}`);
};

/* main.js */
const logger = require('./logger');
logger('一般情報提供メッセージ');
logger.verbose('詳細情報提供メッセージ');
```

### コンストラクタのエクスポート

```js title="例：new 呼び出しでしか機能しないコンストラクタのエクスポート"
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  info(message) {
    this.log(`概要：${message}`);
  }

  verbose(message) {
    this.log(`詳細：${message}`);
  }
}

module.exports = Logger;
```

<details>
<summary><code>new</code> 演算子による呼び出しと関数呼び出しの両方をサポートするコンストラクタ</summary>

```js title="例：関数呼び出しでも機能するコンストラクタのエクスポート"
function Logger(name) {
  // new 演算子を使用して呼び出されなかった場合
  if(!new.target) {
    return new Logger(name);
  }
  // new 演算子を使用して呼び出された場合
  this.name = name;
}

Logger.prototype.log = function(message) {
  console.log(`[${this.name}] ${message}`);
};

Logger.prototype.info = function(message) {
  this.log(`概要: ${message}`);
};

Logger.prototype.verbose = function(message) {
  this.log(`詳細: ${message}`);
};

module.exports = Logger;
```

:::info `new.target`

> [`new.target`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new.target) は擬似プロパティで、関数やコンストラクターが new 演算子を使用して呼び出されたかどうかを検出することができます。 `new` 演算子を使用して呼び出されたコンストラクターや関数の中では、 `new.target` はコンストラクターや関数への参照を返します。通常の関数呼び出しの場合、 new.target は `undefined` になります。
>
> －－MDN より引用

:::

</details>

### インスタンスのエクスポート

`require()` のキャッシュの仕組みを利用して、異なるモジュール間で状態を共有可能です。次のコードは `Logger` というクラスのインスタンスをエクスポートしています：

```js title="例：インスタンスのエクスポート" {14}
/* logger.js */
class Logger {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }
  
  log(message) {
    this.count++;
    console.log(`[${this.name}] ${message}`);
  }
}

module.exports = new Logger('DEFAULT');

/* main.js */
const logger = require('./logger');
logger.log('This is an informational message.');
```

モジュールはキャッシュされるため、loggerモジュールをrequireするすべてのモジュールは同じインスタンスを参照します。その結果、状態（ここでは `count`）を共有できます。

:::caution 注意事項

これは従来からある Singleton パターンとよく似ていますが、一点気をつけないといけないのは、Node においては同じモジュールを `require` してもそれらが同一のインスタンスであることが保証されない点です。

:::

#### キャッシュ内のモジュールの変更

```js title="例：キャッシュ内のモジュールの変更" {4}
/* patcher.js */

// 他のモジュールをロードして、新しいメソッドを追加する
requier('./logger').customMessage = () => console.log('This is a new functionality.');

/* main.js */
require('./patcher');
const logger = require('./logger');
logger.customMessage();
```

## メインモジュールへのアクセス

ファイルが Node.js から直接実行される場合、`require.main` はそのモジュールに設定されます。つまり、`require.main === module` をテストすることで、ファイルが直接実行されたかどうかを判断できます。

```js title="例：require.main"
/* foo.js */
if (require.main === module) {
  // このファイルは、`node foo.js` によって実行されました。
} else {
  // このファイルは、他のファイルからインポートされました。
}
```
---

## 外部ドキュメント

- [Node.js API](https://nodejs.org/dist/latest/docs/api/)
  - [Modules: CommonJS modules](https://nodejs.org/dist/latest/docs/api/modules.html)