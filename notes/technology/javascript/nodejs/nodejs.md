---
slug: /nodejs
sidebar_label: 入門
---

# Node.js

<figure class="inline-fle bg-black">

![](../../../../static/img/notes/nodejs.logo.svg)

</figure>

> About Node.js®
> 
> 非同期のイベント駆動型 JavaScript ランタイムとして、Node.js はスケーラブルなネットワークアプリケーションを構築するように設計されています。次の「hello world」の例では、多くの接続を同時に処理できます。接続するたびにコールバックが発生しますが、実行する作業がない場合、Node.js はスリープ状態になります。
> 
> ```js
> const http = require('http');
>
> const hostname = '127.0.0.1';
> const port = 3000;
>
> const server = http.createServer((req, res) => {
>   res.statusCode = 200;
>   res.setHeader('Content-Type', 'text/plain');
>   res.end('Hello World');
> });
>
> server.listen(port, hostname, () => {
>   console.log(`Server running at http://${hostname}:${port}/`);
> });
> ```
> 
> これは、OS スレッドが採用されている今日のより一般的な同時実行モデルとは対照的です。スレッドベースのネットワークは比較的非効率的で、使用するのが非常に困難です。さらに、Node.js のユーザーは、ロックがないため、プロセスがデッドロックする心配がありません。 Node.jsの関数が直接 I/O を実行することはほとんどないため、Node.js 標準ライブラリの同期メソッドを使用して I/O を実行する場合を除いて、プロセスがブロックされることはありません。何もブロックしないため、スケーラブルなシステムは Node.js で開発するのが非常に合理的です。
> 
> この言語の一部に慣れていない場合は、ブロッキングと非ブロッキングに関する完全な記事があります。

## 概要

Node.js は、JavaScript 実行環境であり、単一のスレッドで動作します。

### イベントループ

### アーキテクチャ

- [V8](https://v8.dev/) – Chrome で使われる JavaScript エンジン
- [libuv](https://nikhilm.github.io/uvbook/) – OS ごとに異なるイベント多重分離の実装を抽象化するとともに、リアクタパターンを実装を担当するI/Oエンジン
- バインディング – −libuv やその他の低レベルの機能をラップし JavaScript で利用できるようにするための抽象化レイヤー
- node-core – ハイレベルな Node の API を実装した JavaScript のライブラリ

## ツール

### Node.js 自体をバージョン管理するツール

- nodebrew
- nvm
- fnm
- asdf
- Volta

## 開発環境と実稼働環境

Node.js は、常に開発環境で実行されることを前提としており、`NODE_ENV=production` の環境変数をセットすることで、実稼働環境で実行していることを Node.js に通知することができます。

これには、具体的には次の方法があります：

- シェルで `export` する方法

  ```bash title="ターミナル"
  export NODE_ENV=production
  ```
  
  :::tip 読み込みの自動化

  上記のコマンドは、`.bash_profile` などのシェル構成ファイルに記述することで自動化することができます。

  :::

- アプリケーション初期化コマンドの前に環境変数を追加する方法

  ```bash title="ターミナル"
  NODE_ENV=production node app.js
  ```

この環境変数は、アプリケーション内では、`process.env.NODE_ENV` で取得することができます。例えば、このように：

```js title="例：開発／実稼働環境それぞれの条件処理" {1,8}
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true,
  }))
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}
```

## モジュールシステム

Node.js では、**CommonJS モジュール**と**ECMAScript モジュール**という2つの方式のモジュールシステムを採用しています。デフォルトでは、CommonJS モジュールを前提としますが、両方を混在させたり、ECMAScript モジュールに一本化させたりすることができます。

それぞれの詳細は別のドキュメントを参照してください：

- [CommonJS モジュールに関するドキュメント](nodejs-commonjs)
- [ECMAScript モジュールに関するドキュメント](nodejs-esmodule)

### CommonJS モジュールと ES モジュールの違い

- CommonJS モジュールは動的、ES モジュールは静的
- CommonJS モジュールは同期的、ES モジュールは非同期的
- CommonJS モジュールはデフォルトで非 strict モード（sloppy モード）、ES モジュールは常に strict モード
- CommonJS モジュールの `this` は `module.exports` を指し、ES モジュールの `this` は `undefined` になる

### CommonJS モジュールと ES モジュールの相互依存

#### CommonJS モジュールから ES モジュールをインポート

#### ES モジュールから CommonJS モジュールをインポート

## コールバック

### コールバックの指定方法

関数にコールバックを指定するには、必ず最後の引数とします。このように：

```js title="例：fs.readFile() のシグニチャ"
fs.readFile(filename, [options], callback);
```

引数 _`callback`_ は _`options`_ の有無にかかわらず、必ず最後の引数となります。こうするのは、コールバックをその場で（無名関数で）記述する場合に、後ろに引数がないほうが読みやすいからです。

### コールバック関数の定義方法；引数

コールバック関数が受け取る引数の内、第一引数はエラーオブジェクトとします（）。このように：

```js title="例：fs.readFile() におけるコールバック"
fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err)
    return
  }

  // no errors, process data
  console.log(data)
});
```

### コールバック関数の定義方法；エラーの伝番

コールバック関数のエラーの伝番は、`throw` 文で行うのではなく、コールバックでエラーオブジェクトを返すことで行います。このように：

```js title="例" {6,11}
const fs = require('fs');
function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if (err) {
      return callback(err); // ファイル読み込みエラーを通知して関数を抜ける
    }
    try {
      parsed = JSON.parse(data); // ファイルの中身を解パース析する
    } catch(err) {
      return callback(err); // 解析エラーを通知して関数を抜ける
    }
    callback(null, parsed); // エラーなし。処理結果（JSONデータ）を通知
  });
};
```

:::note 例外のキャッチ

上のコードの `fs.readFile()` のコールバックの中で、`JSON.parse()` の呼び出しは `try...catch` で囲まれています。こうしないと、例外がコールバック内で発生した場合、イベントループまで伝播し
てしまいます（次のコールバックには伝播しません）。

:::

## `EventEmitter`

Node のコアモジュールである [`events`](https://nodejs.org/api/events.html) モジュールにおいて [`EventEmitter`](https://nodejs.org/api/events.html#class-eventemitter) が定義されています。このクラスは、Node のコアモジュールやユーザランドのモジュールにおけるおオブザーバパターンを実装するための中核となります。

- [`EventEmmiter`](https://nodejs.org/api/events.html#class-eventemitter)
  - [`on(eventName, listener)`](https://nodejs.org/api/events.html#emitteroneventname-listener)

    特定のイベントに対してリスナー関数を登録します。[`addLister`](https://nodejs.org/api/events.html#emitteraddlistenereventname-listener) のエイリアスです。

  - [`once(eventName, listener)`](https://nodejs.org/api/events.html#emitteronceeventname-listener)

    `on` と同じですが、登録されるリスナーは一度しか呼び出されず、初回のイベント通知後に解除される点が異なります。

  - [`emit(eventName[, ...args])`](https://nodejs.org/api/events.html#emitteremiteventname-args)

    イベントを発行（`emit`）します。`emit` されたイベントは引数（`arg1, arg2, ...`）とともに、すべての登録済みリスナーに通知されます。

  - [`off(eventName, listener)`](https://nodejs.org/api/events.html#emitterremovelistenereventname-listener)

    指定されたリスナーを登録解除します。[`removeListener`](https://nodejs.org/api/events.html#emitterremovelistenereventname-listener) のエイリアスです。

  - [`removeAllListeners([eventName])`](https://nodejs.org/api/events.html#emitterremovealllistenerseventname)

    すべてのリスナー、または指定された `eventName` のリスナーを削除します。

  - [他...](https://nodejs.org/api/events.html)

- _特別な `eventName`_

  - [`'error'`](https://nodejs.org/api/events.html#error-events)

    `EventEmitter` インスタンス内でエラーが発生した場合、通常のアクションは「エラー」イベントが発行されることです。これらは、Node.js 内では特殊なケースとして扱われます。

  - [`'newListener'`](https://nodejs.org/api/events.html#event-newlistener)

    リスナーがリスナーの内部配列に追加される前に発行されます。

  - [`'removeListener'`](https://nodejs.org/api/events.html#event-removelistener)

    リスナーが削除された後に発行されます。

各メソッドは戻り値に自身のインスタンスを返すので、メソッドチェーンが可能です。

```js title="例：EventEmmiter の使用"
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
/**
 * この関数は次の3つのイベントを生成します：
 * 
 * - `fileread` – ファイルの読み込みが完了した時点で通知
 * - `found` – 指定のパターンがファイル中に見つかった場合に通知
 * - `error` - ファイルの読み込み時にエラーが発生した場合に通知
 */
const findPattern = (files, regex) => {
  const emitter = new EventEmitter();
  files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, content) => {
      if (err)
        return emitter.emit('error', err);
      emitter.emit('fileread', file);
      let match;
      if (match = content.match(regex))
        match.forEach(elem => emitter.emit('found', file, elem));
    });
  });
  return emitter;
}

// イベントの通知を受け取る側
findPattern(
  ['fileA.txt', 'fileB.json'],
  /hello \w+/g
)
  .on('fileread', (file) => console.log(`${file} was read.`))
  .on('found', (file, match) => console.log(`Matched ${match} in file ${file}`))
  .on('error', (err) => console.log(`Error emitted: ${err.message}`));
```

:::note `EventEmitter` におけるエラー

`EventEmitter` 内でエラーが発生した場合、`error` という名前の**特別な**イベントを `emmit` することが慣習となっています。`error` イベントには `Error` オブジェクトが引数として渡されます。

`EventEmitter` を利用する場合は、常に `error` イベントのリスナーを登録することを心がけましょう。Node はエラー発生時にリスナーが見つからない場合は、例外を `throw` してプログラムの実行を停止します。

:::

---

## 関連する外部リンク

- [公式サイト](https://nodejs.org/ja)
  - [ガイド](https://nodejs.org/ja/docs/guides/)
  - [API](https://nodejs.org/api/)
- [NodeSchool](https://nodeschool.io/ja/)
