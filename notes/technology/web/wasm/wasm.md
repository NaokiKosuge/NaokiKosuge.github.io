---
sidebar_position: 0
slug: /wasm
sidebar_label: WebAssembly
---

# WebAssembly

<figure>

![](../../../../static/img/notes/wasm.webassembly.svg)

</figure>

**WebAssembly** はスタックマシン用の**仮想命令セットアーキテクチャ**（Virtual ISA）です。JavaScript を補完、並行して動作するように設計されています。その名前とは裏腹に、Web を前提としているわけではなく、Web ブラウザ以外でも利用することができます。

:::info ISA

<abbr title="Instruction Set Architecture">ISA</abbr> とは、特定のマシンで実行することを目的として設計された<strong>バイナリフォーマット</strong>のことです。

:::

## 2つのファイル形式；WAT と WASM

互いに1対1で対応する2つの _ファイル形式_ があります：

- [WAT](/notes/wasm-wat)

  WebAssembly のテキスト表現で、拡張子 `.wat` が－－場合によっては `.wast` も－－使われます。

- WASM

  WebAssembly のバイナリ表現で、拡張子 `.wasm` が使われます。

## `WebAssembly` API (JavaScript)

[`WebAssembly`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) は JavaScript のオブジェクトで、 WebAssembly に関するすべての機能の名前空間の役割をします。

- `WebAssembly` – WebAssembly 名前空間
  - _コンストラクタープロパティ_
    - `CompileError()` – デコードや検証の間のエラー型
    - `Global()` – グローバル変数のインスタンスを表す新しい `Global` オブジェクト
    - `Instance()` – **ステートフル**で、実行可能な WebAssembly.Module のインスタンス
    - `LinkError()` – モジュールの初期化時に発生したエラー型
    - `Memory()` – 生のバイト列のメモリー
    - `Module()` – コンパイルされた**ステートレス**な WebAssembly コード
    - `RuntimeError()` – WebAssembly がトラップを指定するたびに例外として発生するエラー型
    - `Table()` – 関数の参照を格納する WebAssembly Table を表す配列風の構造
  - _静的メソッド_
    - `instantiate()` – WebAssembly コードをコンパイル、インスタンス化する
    - `instantiateStreaming()` – ソースのストリームから直接 WebAssembly モジュールをコンパイル、インスタンス化する
    - `compile()` – WebAssembly バイナリコードから ` WebAssembly.Module` へとコンパイルする
    - `compileStreaming()` – WebAssembly ソースのストリームから直接 `WebAssembly.Module` へとコンパイルする
    - `validate()` – WebAssembly バイナリコードの型付き配列から有効な WebAssembly コードか検証する

### コードサンプル

```ts title="例：.wasm モジュールを読み込み、コンパイルし、インスタンス化する"
// WASM バイナリコード
const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
  3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
  5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
  128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
  105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
  65, 42, 11
]);

// WASM モジュール (ステートレス)
const wasmModule = new WebAssembly.Module(wasmCode);

// WASM モジュールインスタンス (ステートフル)
const wasmInstance = new WebAssembly.Instance(wasmModule);

// WASM モジュールインスタンスからエクスポートされた関数
const main = wasmInstance.exports.main as CallableFunction;
console.log(main().toString());
```

## 組み込み環境

WebAssembly はハードウェアで直接実行するものではないため、WebAssembly モジュールの読み込みと初期化を制御するホスト環境に WebAssembly バイナリを組み込む必要があります。これには次のようなものがあります：

- Web ブラウザ
- <abbr title="WebAssembly System Interface">WASI</abbr> – WebAssembly アプリケーションのランタイム仕様。
 
  - [wasmtime](https://wasmtime.dev/) – Mozilla Foundation 製。
- VSCode の [WebAssembly](　https://marketplace.visualstudio.com/items?itemName=dtsvet.vscode-wasm) 拡張機能
- Node.js の [wat-wasm](https://www.npmjs.com/package/wat-wasm/) モジュール

## WABT

[<abbr title="The WebAssembly Binary Toolkit">WABT</abbr>](https://github.com/webassembly/wabt) は、WebAssembly 用ツールスイートです：

- [wat2wasm](https://webassembly.github.io/wabt/doc/wat2wasm.1.html) – WebAssembly テキスト形式から WebAssembly バイナリ形式に変換します
- [wasm2wat](https://webassembly.github.io/wabt/doc/wasm2wat.1.html) – wat2wasm の逆で、バイナリ形式からテキスト形式（`.wat` とも呼ばれます）に変換し直します
- [wasm-objdump](https://webassembly.github.io/wabt/doc/wasm-objdump.1.html) – wasm バイナリに関する情報を出力します。objdump に似ています。
- [wasm-interp](https://webassembly.github.io/wabt/doc/wasm-interp.1.html) – スタックベースのインタープリターを使用して、WebAssembly バイナリファイルをデコードして実行します
- [wasm-decompile](https://webassembly.github.io/wabt/doc/wasm-decompile.1.html) – wasm バイナリを読み取り可能な C のような構文に逆コンパイルします。
- [wat-desugar](https://webassembly.github.io/wabt/doc/wat-desugar.1.html) – スペックインタープリター（S式、フラット構文、または混合）でサポートされている `.wat` テキスト形式を解析し、「正規の」フラット形式を出力します
- [wasm2c](https://webassembly.github.io/wabt/doc/wasm2c.1.html) – WebAssembly バイナリファイルを C ソースとヘッダーに変換します
- [wasm-strip](https://webassembly.github.io/wabt/doc/wasm-strip.1.html) – WebAssembly バイナリファイルのセクションを削除します
- [wasm-validate](https://webassembly.github.io/wabt/doc/wasm-validate.1.html) – WebAssembly バイナリ形式のファイルを検証します
- [wast2json](https://webassembly.github.io/wabt/doc/wast2json.1.html) – wasm 仕様テスト形式のファイルを JSON ファイルおよび関連する wasm バイナリファイルに変換します
- [wasm-opcodecnt](https://webassembly.github.io/wabt/doc/wasm-opcodecnt.1.html) – 命令のオペコード使用量をカウントする
- [spectest-interp](https://webassembly.github.io/wabt/doc/spectest-interp.1.html) – Spectest JSON ファイルを読み取り、インタープリターでそのテストを実行します

## 開発言語

- [rust-wasm](https://rustwasm.github.io/docs/book/introduction.html) – Rust
- [Emscripten](https://emscripten.org/) – C/C++
- [AssemblyScript](https://www.assemblyscript.org/) – A TypeScript-like language for WASM

## 関連する外部リンク

- [webassembly.org](https://webassembly.org/)
- [WebAssembly · GitHub](https://github.com/WebAssembly)
  - [wabt](https://github.com/WebAssembly/wabt) – WebAssembly 用ツールスイート
- [WebAssembly | MDN](https://developer.mozilla.org/ja/docs/WebAssembly) – Mozilla による開発者向けリファレンスドキュメント
- [WebAssembly Working Group](https://www.w3.org/wasm/) – W3C ワーキンググループ
  - [WEBASSEMBLY COMMUNITY GROUP](https://www.w3.org/community/webassembly/) – コミュニティグループ