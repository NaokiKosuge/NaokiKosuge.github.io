---
slug: /rust-recipe-cli
sidebar_label: コマンドラインプログラム
---

# 【Rust レシピ】コマンドラインプログラム

## 引数解析

利用するライブラリ：

- [`structopt`](https://docs.rs/structopt) — 解析する引数を扱うための構造体を定義する。
- [`clap`](https://docs.rs/clap) — 引数解析処理を行う。

## ANSI エスケープコード出力

:::tip ANSI 端末におけるテキストフォーマットの制御

利用するライブラリ：

- [`ansi_term`](https://docs.rs/ansi_term) — ANSI 端末でテキストフォーマットを制御する

```rust
use ansi_term::{Color, Style};

fn main() {
    // カラーテキスト
    println!("{}", Color::Black.paint("黒色テキスト"));
    println!("{}", Color::Red.paint("赤色テキスト"));
    println!("{}", Color::Yellow.paint("黄色テキスト"));
    println!("{}", Color::Blue.paint("青色テキスト"));
    println!("{}", Color::Purple.paint("紫色テキスト"));
    println!("{}", Color::Cyan.paint("シアン色テキスト"));
    println!("{}", Color::White.paint("白色テキスト"));
    println!("{}", Color::Fixed(123).paint("0〜255から選んだ色番号テキスト"));
    println!("{}", Color::RGB(127, 127, 127).paint("24-bit RGB で指定した色のテキスト"));
    
    // テキストスタイル
    println!("{}", Style::new().bold().paint("太字テキスト"));
    println!("{}", Style::new().italic().paint("イタリック体テキスト"));
    println!("{}", Style::new().underline().paint("下線付きテキスト"));
    println!("{}", Style::new().blink().paint("点滅テキスト"));
}
```

:::

## Cargo を使った実行パスのインストール

:::tip `cargo-install` でコマンドをコンピュータにインストールする

`cargo-install` を使用して、作成したバイナリクレートをコンピュータのコマンドとして使用できるようにすることができます。実行ファイルは、（デフォルトでは）`~/.cargo/bin/` にインストールされ、そちらのパスが環境変数 `PATH` に登録されることで、コマンドが利用できるようになります。

次の手順によりコマンドが使用可能となります：

1. 実行バイナリのファイル名（コマンドとしてタイプする名前）を決める。

   → `Cargo.toml` の `[package]` 内の `name` フィールドを修正します。

   ```toml title="Cargo.toml"
   [package]
   name = "<コマンド>"
   ```
   
2. バイナリクレートをインストールする。

   ```bash
   cargo install --path .
   ```

:::