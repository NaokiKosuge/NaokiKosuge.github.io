---
sidebar_position: 0
slug: /rust
sidebar_label: 入門
---

# Rust

<figure class="inline-flex bg-white">

![Rustロゴ](../../../static/img/notes/rust.logo-blk.svg)

</figure>

## 言語の特徴

- キャッチフレーズは「効率的で信頼できるソフトウェアを
  誰もがつくれる言語」。
- 「安全性」「速度」「並行性」に強みを持つ。
- 「コマンドライン」「WebAssembly」「ネットワーク」「組込み」の領域で活用可能。

## 採用事例

- Mozilla — Firefox の HTML レンダリングエンジンである Servo で利用。
- Dropbox — Python で書かれたコアサービスの同期エンジンを Rust で再構築した。
- Cloudflare — Cloudflare Workers で Rust がサポートされた。
- AWS — Firecracker
- Microsoft — Rust と WebAssembly で Krustlet を実装。
- Google — Fuchsia のライブラリで Rust を採用。

## エディション

Rust 言語のメージャーバージョンとも言えるのがエディションです。`Cargo.toml` ファイルでは、パッケージが使用するエディションを宣言します。

- Rust 2015
- Rust 2018
- Rust 2021

## ツールチェイン

一般的に、Rust のツールチェイン（`cargo`, `rustc`）は、`rustup` というツールでダウンロード及び管理されます。従って、コンピュータに Rust の環境を追加するには、`rustup` の[インストール手順](https://www.rust-lang.org/ja/tools/install) に従うことがベストプラクティスです。また、追加で [cargo-edit](https://github.com/killercup/cargo-edit) もインストールしておくと、Cargo が npm のような使い勝手となり、大変便利です。

Rust のツールチェイン：

- [`rustup`](/notes/rust-rustup) — Rust ツールチェインマネージャ。
- [`cargo`](/notes/rust-cargo) — Rust のパッケージマネージャ。
- [`rustc`](/notes/rust-rustc) — Rust のコンパイラ。

Rust のツールは全て `~/.cargo/bin` にインストールされます。

## crates.io

[crates.io](https://crates.io/) は、クレートのレジストリです。パッケージマネージャである [Cargo](/notes/rust-cargo) と連携します。

### docs.rs

[docs.rs](https://docs.rs/) は、クレートのオープンソースドキュメントホストです。[crates.io](https://crates.io/) に公開された全てのライブラリが文書化されています。

## 関連する外部リンク

- Rust 公式サイト［[rust-lang.org](https://www.rust-lang.org/ja/)］［[doc.rust-jp.rs](https://doc.rust-jp.rs/)］
  - _入門コース_
    - The Rust Programming Language（通称「the book」） ［[オリジナル](https://doc.rust-lang.org/book/)］［[日本語版](https://doc.rust-jp.rs/book-ja/)］ — Rust 入門書の決定版。
    - Rust by Example［[オリジナル](https://doc.rust-lang.org/stable/rust-by-example/)］［[日本語版](https://doc.rust-jp.rs/rust-by-example-ja/)］ — 動作するサンプルコードを中心に学べる入門書。
    - [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/) — Rust クックブック。
  - _高度_
    - [The Rust Reference](https://doc.rust-lang.org/reference/) — 言語リファレンス。
    - The Rustnomicon［[オリジナル](https://doc.rust-lang.org/nomicon/)］［[日本語版](https://doc.rust-jp.rs/rust-nomicon-ja/)］  — アンセーフな Rust コードを書くにあたって必要な知識。
    - [Asynchronous Programming in Rust](https://rust-lang.github.io/async-book) — Rust の非同期言語機能とライブラリを使用するための包括的なガイド。
  - Rust API Guidelines［[オリジナル](https://rust-lang.github.io/api-guidelines/)］［[日本語版](https://sinkuu.github.io/api-guidelines/)］ — Rust のための API デザイン上の推奨事項をまとめたもの。
  - _コアドキュメント_ 
    - [標準ライブラリドキュメント](https://doc.rust-lang.org/std/index.html)
    - The Edition Guide［[オリジナル](https://doc.rust-lang.org/edition-guide/index.html)］［[日本語版](https://doc.rust-jp.rs/edition-guide/)］ — エディションガイド。
    - [The Cargo Book](https://doc.rust-lang.org/cargo/)
    - [The rustup book](https://rust-lang.github.io/rustup/)
    - [The rustdoc book](https://doc.rust-lang.org/rustdoc/)
    - [The rustc book](https://doc.rust-lang.org/rustc/)
    - [Rust Compiler Error Index](https://doc.rust-lang.org/error-index.html)
    - [The Rust Unstable Book](https://doc.rust-lang.org/nightly/unstable-book/)
  - アプリケーションドメイン 
    - [Command Line Applications in Rust](https://rust-cli.github.io/book) — コマンドラインブック。
    - _WASM_
      - Rust and WebAssembly［[オリジナル](https://rustwasm.github.io/docs/book/)］［[日本語版](https://moshg.github.io/rustwasm-book-ja/)］ — WebAssembly ブック。
    - _組込みシステム_
      - [Embedded Rust documentation](https://docs.rust-embedded.org/) — 組込み Rust に関するリンク集。
      - The Embedded Rust Book［[オリジナル](https://doc.rust-lang.org/embedded-book)］［[日本語版](https://tomoyuki-nakabayashi.github.io/book/)］ — 組込みブック。
      - Discovery［[オリジナル](https://docs.rust-embedded.org/discovery/)］［[日本語版](https://tomoyuki-nakabayashi.github.io/discovery/)］ — Rustを使ったマイクロコントローラの組込みシステム入門コース。
      - [Embedded Rust Techniques](https://tomoyuki-nakabayashi.github.io/embedded-rust-techniques/) ※日本語版のみ — Rust で組込み／ベアメタルプログラミングするための小技を集めた本。
    - _その他_
      - [mdBook Documentation](https://rust-lang.github.io/mdBook/) – Markdownを使用して本を作成するためのRustクレートに関する本
  - [The Rust Playground](https://play.rust-lang.org) — Rust をオンラインページ上で手軽に試せるサイト。
- _クレート_
  - [Docs.rs](https://docs.rs/)
  - [crates.io](https://crates.io/) — クレートレジストリ。
  - [Lib.rs](https://lib.rs/) — Rust ライブラリとアプリケーションのリスト。
- _ブログ_
  - [Writing an OS in Rust](https://os.phil-opp.com/ja/) — Rust を使って OS を作ってみるチュートリアル。
  - [The Adventures of OS: Making a RISC-V Operating System using Rust](https://osblog.stephenmarz.com/) — Rust の RISC-V アーキテクチャを対象としたオペレーティングシステムを作成するチュートリアル。
- _その他_ 
  - [rustsec.org](https://rustsec.org/) — 公開された Rust クレートに対して提出されたセキュリティアドバイザリのリポジトリ。

## 書籍

以下に良質な市販の書籍を掲載します：

- [プログラミングRust 第2版（2022年1月19日、オライリー）](https://www.oreilly.co.jp/books/9784873119786/)
- [詳解Rustプログラミング（2021年11月17日、翔泳社）](https://www.seshop.com/product/detail/24815/)
- [並行プログラミング入門（2021年8月24日、オライリー）](https://www.oreilly.co.jp/books/9784873119595/)
