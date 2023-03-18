---
slug: /sass-cli
sidebar_label: CLI
---

# 【Sass】コマンドラインインターフェース（Dart Sass）

## モード

コマンドには２種類のモードがあり、いずれかでコマンド実行することができます：

- 1対1モード

  ```bash
  sass [options] <input.scss> [<output.css>]
  ```

  1対1モードでは、単一の入力ファイル（<em>`input.scss`</em>）が単一の出力場所（<em>`output.css`</em>）にコンパイルされます。出力場所が指定されない場合、コンパイルされたCSSが端末に出力されます。

- 多対多モード

  ```bash
  sass [options] [<input.scss>:<output.css>] [<input/>:<output/>]...
  ```

  多対多モードでは、1つ以上の入力ファイルを1つ以上の出力ファイルにコンパイルします。入力はコロンで出力から分離されます。また、ディレクトリ内のすべての Sass ファイルを別のディレクトリ内の同じ名前の CSS ファイルにコンパイルすることもできます。

  ```bash title="例：多対多モードによるコンパイル"
  # style.scss を style.css にコンパイルします。
  $ sass style.scss:style.css
  
  # light.scss と dark.scss を light.css と dark.css にコンパイルします。
  $ sass light.scss:light.css dark.scss:dark.css
  
  # themes/ 内のすべての Sass ファイルを public/css/ 内の CSS ファイルにコンパイルします。
  $ sass themes:public/css
  ```

## オプション

利用可能なオプションは以下の通りです。詳細は [公式ドキュメント](https://sass-lang.com/documentation/syntax/) を参照されたし。

- 入出力
  - `--stdin` — ファイル入力を標準入力から行う。
  - `--indented` — SCSS 構文ではなく、Sass 構文として解析する。
  - `--load-path`, `-I` — Sass がスタイルシートを検索するための追加のロードパスを追加する。
  - `--style`, `-s` — CSSの出力スタイル。値は、`expanded`（デフォルト）または `compressed`。
  - `--no-charset` — Sassに `@charset` 宣言または UTF-8 BOM を発行しないように指示する。
  - `--error-css` — コンパイル中にエラーが発生したときに CSS ファイルを発行するかどうかを Sass に指示する。
  - `--update` — 対応する CSS ファイルが生成されたよりも後に依存関係が変更されたスタイルシートのみをコンパイルする。また、スタイルシートを更新するときにステータスメッセージを出力する。
- ソースマップ
  - `--no-source-map` — ソースマップを生成しない。
  - `--source-map-urls` — ソースマップと 生成された CSS とのリンク方法。値は、`relative`（デフォルト）または `absolute`。
  - `--embed-source-map` — 生成されたCSSにソースマップファイルのコンテンツを埋め込む。
- 別のプション
  - `--watch`, `-w` — 、スタイルシートまたはその依存関係の変更を監視し、変更があればコンパイルを実行する。
  - `--poll` — `--watch` と共に使用することで、変更監視を OS に依存しないようにする。
  - `--stop-on-error` — 多対多モードにおいての利用を想定しており、エラーが検出されるとコンパイルを停止する。
  - `--interactive`, `-i` — インタラクティブモードで実行する。
  - `--color`, `-c` — 端末へはカラー表示する。
  - `--no-unicode` — エラーメッセージの一部として ASCII 文字を端末に送信する。
  - `--quiet`, `-q` — コンパイル時に警告を発しない。
  - `--quiet-deps` — 依存関係に起因する非推奨の警告を発行しない。`@warn` ルールや `@debug` ルールには影響しない。
  - `--trace` — エラーが発生したときに Dart または JavaScript スタックトレース全体を出力する。これは、エラーをデバッグするために Sass チームによって使用される。
  - `--help`, `-h` — ヘルプドキュメントを表示する。
  - `--version` — Sass のバージョンを表示する。