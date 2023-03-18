---
slug: /rust-cargo-toml
sidebar_label: Cargo.toml
---

# 【Rust】Cargo.toml

`Cargo.toml` は、Rust パッケージの**マニフェスト**の役割を持ちます。

<details>
<summary><code>Cargo.toml</code> の例</summary>

```toml title="例：cargo-init で作成される Cargo.toml"
[package]
name = "rust"
version = "0.1.0"
authors = ["NaokiKosuge <naokikosuge.ict@gmail.com>"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]

[[bin]]
name = "rust"
path = "main.rs"
```

</details>

## プロパティ

- `[package]` — パッケージを定義します。
  - `name` — パッケージの名前。
  - `version` — パッケージのバージョン。
  - `authors` — パッケージの作者。
  - `edition` — Rust エディション。
  - `description` — パッケージの説明。
  - `documentation` — パッケージドキュメントの URL。
  - `readme` — パッケージの README ファイルへのパス。
  - `homepage` — パッケージホームページの URL。
  - `repository` — パッケージソースリポジトリの URL。
  - `license` — パッケージライセンス。
  - `license-file` — ライセンスのテキストへのパス。
  - `keywords` — パッケージのキーワード。
  - `categories` — パッケージのカテゴリ。
  - `workspace` — パッケージのワークスペースへのパス。
  - `build` — パッケージビルドスクリプトへのパス。
  - `links` — パッケージがリンクしているネイティブライブラリの名前。
  - `exclude` — 公開時に除外するファイル。
  - `include` — 公開時に含めるファイル。
  - `publish` — パッケージの公開を防ぐために使用できます。
  - `metadata` — 外部ツールの追加設定。
  - `default-run` — `cargo-run` によって実行されるデフォルトのバイナリ。
  - `autobins` — バイナリ自動検出を無効にします。
  - `autoexamples` — 自動検出の例を無効にします。
  - `autotests` — テストの自動検出を無効にします。
  - `autobenches` — ベンチの自動検出を無効にします。
  - `resolver` — 使用する依存関係リゾルバーを設定します。
- 対象のテーブル
  - `[lib]` — ライブラリのターゲット設定。
  - `[[bin]]` — バイナリターゲット設定。
  - `[[example]]` — ターゲット設定の例。
  - `[[test]]` — ターゲット設定をテストします。
  - `[[bench]]` — ベンチマークターゲット設定。
- 依存関係テーブル
  - `[dependencies]` — crates.io にあるクレートの名前とバージョン
  - `[dev-dependencies]` — 例、テスト、およびベンチマークの依存関係。
  - `[build-dependencies]` — ビルドスクリプトの依存関係。
  - `[target]` — プラットフォーム固有の依存関係。
- `[badges]` — レジストリに表示するバッジ。
- `[features]` — 条件付きコンパイル機能。
- `[patch]` — 依存関係を上書きします。
- `[replace]` — 依存関係をオーバーライドします（非推奨）。
- `[profile]` — コンパイラの設定と最適化。
- `[workspace]` — ワークスペースの定義。

## 関連する外部リンク

- [The Cargo Book](https://doc.rust-lang.org/cargo/)
  - [The Manifest Format](https://doc.rust-lang.org/cargo/reference/manifest.html)