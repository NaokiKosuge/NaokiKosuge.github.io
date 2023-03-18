---
sidebar_position: 0
slug: /rust-cargo
sidebar_label: Cargo
---

# 【Rust】Cargo

[Cargo](https://github.com/rust-lang/cargo) は Rust パッケージマネージャーです。Rust のプロジェクトは Cargo によって管理します。

## インストール

Cargo は、一般的には [`rustup`](https://rustup.rs/) を使用してインストールします。

## 外部ツール

Cargo をインストールすると、いくつかのサブコマンドが使用できるようになりますが、追加でサーパーティー製のサブコマンドをインストールすることができます－－これには [`cargo install`](#install) コマンドを使用します。ツールは次のようなものがあります：

- [`rustfmt`](https://github.com/rust-lang/rustfmt) — サブコマンド `fmt` を追加します。これは、スタイルガイドラインに従って Rust コードをフォーマットします。
- [`rust-clippy`](https://github.com/rust-lang/rust-clippy) — サブコマンド `clippy` を追加します。これは、よくある間違いを見つけて、Rust コードを改善するための lint コレクションです。
- [`cargo-edit`](https://github.com/killercup/cargo-edit) — サブコマンド `add`、`rm`、`upgrade`、`set-version` を追加します。
- [`cargo-generate`](https://github.com/cargo-generate/cargo-generate) — サブコマンド `gen`/`generate` を追加します。既に存在している Git リポジトリをテンプレートとして利用して新しい Rust プロジェクトを迅速に立ち上げ、実行に移すことを助けてくれます。
- [`cargo-outdated`](https://github.com/kbknapp/cargo-outdated) — サブコマンド `outdated` を追加します。これは、依存クレートのアップデートを確認するものです。
- [`cargo-release`](https://github.com/crate-ci/cargo-release) — サブコマンド `release` を追加します。これは、crates.io への公開作業を便利にするものです。
- [`cargo-watch`](https://crates.io/crates/cargo-watch) — サブコマンド `watch` を追加します。これは、プロジェクトのファイル監視を行うためのものです。
- [`cargo-tarpaulin`](https://crates.io/crates/cargo-tarpaulin) — サブコマンド `tarpaulin` を追加します。コードカバレッジレポートツールです。
- [`cargo-profiler`](https://github.com/svenstaro/cargo-profiler) — サブコマンド `` を追加します。これは、プロファイラです。別途、[valgrind](https://www.valgrind.org/) をインストールしておく必要があります。
- [`hyperfine`](https://github.com/sharkdp/hyperfine) — ベンチマークツールです。サブコマンドは追加しませんが、Cargo でインストールすることができます。
- [`cargo-audit`](https://github.com/RustSec/rustsec/tree/main/cargo-audit)
- [`cargo-crev`](https://github.com/crev-dev/cargo-crev)
- [`cargo-fuzz`](https://rust-fuzz.github.io/book/cargo-fuzz.html)
- [`cargo-binutils`](https://github.com/rust-embedded/cargo-binutils) – Rust ツールチェーンに付属の LLVM ツールを呼び出すための Cargo サブコマンド（`nm`, `objcopy`, `objdump`, `size`, `strip`, ）を追加します。
- [`bootimage`](https://github.com/rust-osdev/bootimage) – Rust OS カーネルから起動可能なディスクイメージを作成するためのサブコマンド `bootimage` を追加します。

## パッケージ

```text title="例：パッケージレイアウト"
.
├── Cargo.lock
├── Cargo.toml
├── src/
│  ├── lib.rs
│  ├── main.rs
│  └── bin/
│       ├── named-executable.rs
│     ├── another-executable.rs
│     └── multi-file-executable/
│         ├── main.rs
│         └── some_module.rs
├── benches/
│  ├── large-input.rs
│  └── multi-file-bench/
│      ├── main.rs
│      └── bench_module.rs
├── examples/
│  ├── simple.rs
│  └── multi-file-example/
│      ├── main.rs
│      └── ex_module.rs
├── tests/
│   ├── some-integration-tests.rs
│   └── multi-file-test/
│       ├── main.rs
│       └── test_module.rs
└── target/
```

- `Cargo.toml` — cargo プロジェクトは、[`Cargo.toml`](rust-cargo-toml) というファイルで、パッケージのメタデータを管理します。
- `Cargo.lock` — すべての使用したクレートの正確なバージョンが書き込まれるファイル。
- `src/` — ソースコードを配置します。
  - デフォルトの実行可能ファイルは `src/main.rs` です。他の実行可能ファイルは `src/bin/` に配置できます。
  - デフォルトのライブラリファイルは `src/lib.rs` です。
- `benches/` — ベンチマークを配置します。
- `example/` — 例を配置します。コマンド `cargo run --example [name]` で指定の例を実行することができます。
- `tests/` — 統合テストを配置します。コマンド `cargo run --test [name]` で指定の例を実行することができます。
- `target/` — ビルド出力先。

## ワークスペース

**ワークスペース**を用いると、1つのプロジェクトでパッケージを複数に分けて開発することができます。

```text title="例：ワークスペースレイアウト"
.
├── Cargo.lock
├── Cargo.toml
├── add-one/
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs
├── adder/
│   ├── Cargo.toml
│   └── src/
│       └── main.rs
└── target/
```

ワークスペースの要点は次の通り：

- すべてのパッケージは、個別に `Cargo.lock` を作成せず、ワークスペースルートにある `Cargo.lock` を共有します。
- すべてのパッケージは、個別に出力ディレクトリを作成せず、ワークスペースルートにある `target` ディレクトリを共有します。
- ワークスペースにも `Cargo.toml` ファイルが含まれますが、各パッケージのものとは異なり、`[package]` セクションは無く、代わりに `[workspace]` セクションを持ちます。

## Cargo コマンド

<details>
<summary><code>cargo --help</code></summary>

```
Rust のパッケージマネージャー

USAGE:
    cargo [+toolchain] [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -V, --version                  バージョン情報を表示して終了する
        --list                     インストールされているコマンドを一覧表示する
        --explain <CODE>           `rustc --explain CODE` を実行する
    -v, --verbose                  詳細出力を使用する（-vv very verbose/build.rs output）
    -q, --quiet                    stdout に表示しない
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

一般的な Cargo サブコマンドは次の通りです
（全てのコマンドを見るには --list オプションを使用してください）:
    build, b    現在のパッケージをコンパイルする
    check, c    現在のパッケージを分析してエラーを報告するが、オブジェクトファイルは作成しない
    clean       対象のディレクトリを削除します
    doc         このパッケージとその依存関係のドキュメントを作成する
    new         新しい cargo パッケージを作成する
    init        既存のディレクトリに新しい cargo パッケージを作成する
    run, r      ローカルパッケージのバイナリまたは例を実行する
    test, t     テストを実行する
    bench       ベンチマークを実行する
    update      Cargo.lockにリストされている依存関係を更新する
    search      crates.io からパッケージを検索する
    publish     このパッケージをパッケージ化してレジストリにアップロードする
    install     Rust バイナリをインストールする。デフォルトの場所は $HOME/.cargo/bin
    uninstall   Rust バイナリをアンインストールします

特定のコマンドの詳細については、`cargo help <command>` を参照してください。
```

</details>

<details>
<summary><code>cargo --list</code></summary>

```
Installed Commands:
    b                    エイリアス: build
    bench                ローカルパッケージのすべてのベンチマークを実行する。
    build                ローカルパッケージとそのすべての依存関係をコンパイルする
    c                    エイリアス: check
    check                ローカルパッケージとそのすべての依存関係にエラーがないか確認する
    clean                cargo が生成したアーティファクトを削除する
    describe-future-incompatibilities 最終的にコンパイルを停止するクレートを報告する
    doc                  パッケージのドキュメントを作成する
    fetch                ネットワークからパッケージの依存関係を取得する
    fix                  rustc によって報告された lint 警告を自動的に修正する
    generate-lockfile    パッケージのロックファイルを生成する
    git-checkout         削除されたコマンド
    init                 既存のディレクトリに新しい cargo パッケージを作成する
    install              Rust バイナリをインストールする。デフォルトの場所は $HOME/.cargo/bin
    locate-project       Cargo.toml ファイルの場所の JSON 表現を表示する
    login                レジストリから API トークンをローカルに保存する。トークンが指定されていない場合、stdin から読み取られる。
    logout               ローカルにあるレジストリからの API トークンを削除する
    metadata             パッケージの解決された依存関係、オーバーライドを含む具体的な使用バージョンを機械可読形式で表示する
    new                  <path> に新しい cargo パッケージを作成する
    owner                レジストリでクレートの所有者を管理する
    package              ローカルパッケージを配布可能な tarball にアセンブルする
    pkgid                完全に修飾されたパッケージ仕様を表示する
    publish              パッケージをレジストリにアップロードする
    r                    エイリアス: run
    read-manifest        Cargo.toml マニフェストの JSON 表現を表示する。
    run                  ローカルパッケージのバイナリまたは例を実行する
    rustc                パッケージをコンパイルし、追加のオプションをコンパイラに渡す
    rustdoc              指定されたカスタムフラグを使用して、パッケージのドキュメントを作成する。
    search               crates.io でパッケージを検索する
    t                    エイリアス: test
    test                 すべてのユニットテストと統合テストを実行し、ローカルパッケージの例を作成する
    tree                 依存関係グラフのツリー表現を表示する
    uninstall            Rust バイナリを削除する
    update               ローカルロックファイルに記録されている依存関係を更新する
    vendor               プロジェクトのすべての依存関係をローカルでベンダーする
    verify-project       クレートマニフェストの正しさを確認する
    version              バージョン情報を表示する
    yank                 プッシュされたクレートをインデックスから削除する
    add
    clippy
    fmt
    miri
    rm
    set-version
    upgrade
```

</details>

以下は、Cargo サブコマンドです。...

### `build`, `b`

<details>
<summary><code>cargo build --help</code></summary>

```
cargo-build 
ローカルパッケージとそのすべての依存関係をコンパイルする

USAGE:
    cargo build [OPTIONS]

OPTIONS:
    -q, --quiet                      stdout に表示しない
    -p, --package <SPEC>...          ビルドするパッケージ（`cargo help pkgid` を参照）
        --all                        --workspace のエイリアス（非推奨）
        --workspace                  ワークスペースですべてのパッケージをビルドする
        --exclude <SPEC>...          ビルドからパッケージを除外する
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数
        --lib                        このパッケージのライブラリのみをビルドする
        --bin <NAME>...              指定されたバイナリのみをビルドする
        --bins                       すべてのバイナリをビルドする
        --example <NAME>...          指定された例のみを作成する
        --examples                   すべての例を作成する
        --test <NAME>...             指定されたテストターゲットのみをビルドする
        --tests                      すべてのテストを作成する
        --bench <NAME>...            指定されたベンチターゲットのみをビルドする
        --benches                    すべてのベンチを構築する
        --all-targets                すべてのターゲットを構築する
        --release                    最適化を使用して、リリースモードでアーティファクトをビルドする
        --profile <PROFILE-NAME>     指定されたプロファイルでアーティファクトを構築する
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効化する
        --no-default-features        `default` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --out-dir <PATH>             最終的なアーティファクトをこのディレクトリにコピーする（不安定）
        --manifest-path <PATH>       Cargo.toml へのパス
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
        --message-format <FMT>...    エラー形式
        --build-plan                 ビルドプランを JSON で出力する（不安定）
        --unit-graph                 ビルドグラフを JSON で出力する（不安定）
        --future-incompat-report     ビルドの最後に将来の非互換性レポートを出力する（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドする（不安定）
    -Z <FLAG>...                     cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

詳細については、`cargo help build` を実行してください。
```

</details>

### `check`, `c`

<details>
<summary><code>cargo check --help</code></summary>

```
cargo-check 
ローカルパッケージとそのすべての依存関係にエラーがないか確認する

USAGE:
    cargo check [OPTIONS]

OPTIONS:
    -q, --quiet                      stdout に表示しない
    -p, --package <SPEC>...          チェックするパッケージ
        --all                        --workspace のエイリアス（非推奨）
        --workspace                  ワークスペースですべてのパッケージをチェックする
        --exclude <SPEC>...          チェックからパッケージを除外する
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数
        --lib                        このパッケージのライブラリのみをチェックする
        --bin <NAME>...              指定されたバイナリのみをチェックする
        --bins                       すべてのバイナリをチェックする
        --example <NAME>...          指定された例のみをチェックする
        --examples                   すべての例をチェックする
        --test <NAME>...             指定されたテストターゲットのみをチェックする
        --tests                      すべてのテストをチェックする
        --bench <NAME>...            指定されたベンチターゲットのみをチェックする
        --benches                    すべてのベンチをチェックする
        --all-targets                すべてのターゲットをチェックする
        --release                    最適化を使用して、リリースモードでアーティファクトをチェックする
        --profile <PROFILE-NAME>     指定されたプロファイルでアーティファクトをチェックする
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効化する
        --no-default-features        `default` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にチェック
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>       Cargo.toml へのパス
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
        --message-format <FMT>...    エラー形式
        --unit-graph                 ビルドグラフを JSON で出力する（不安定）
        --future-incompat-report     ビルドの最後に将来の非互換性レポートを出力する（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドする（不安定）
    -Z <FLAG>...                     cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

詳細については、`cargo help check` を実行してください。
```

</details>

### `clean`

ローカルパッケージのアーティファクトを削除します。

<details>
<summary><code>cargo clean --help</code></summary>

```
cargo-clean 
cargo が過去に生成したアーティファクトを削除する

USAGE:
    cargo clean [OPTIONS]

OPTIONS:
    -q, --quiet                     stdout に出力されない
    -p, --package <SPEC>...         アーティファクトをクリーンアップするパッケージ
        --manifest-path <PATH>      Cargo.toml へのパス
        --target <TRIPLE>...        トリプルをターゲットにして出力をクリーンアップする
        --target-dir <DIRECTORY>    生成されたすべてのアーティファクトのディレクトリ
        --release                   リリースアーティファクトをクリーンアップするかどうか
        --profile <PROFILE-NAME>    指定されたプロファイルのアーティファクトをクリーンアップする
        --doc                       ドキュメントディレクトリだけをクリーンアップするかどうか
    -v, --verbose                   詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>              カラーリング: auto, always, never
        --frozen                    Cargo.lock とキャッシュが最新であることを要求する
        --locked                    Cargo.lock が最新であることを要求する
        --offline                   ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...     構成値をオーバーライドする（不安定）
    -Z <FLAG>...                    Cargo に対する不安定な（nightly-only）フラグ
                                    詳細については `cargo -Z help` を参照
    -h, --help                      ヘルプ情報を表示する

詳細については、`cargo help clean` を実行してください。
```

</details>

### `doc`

<details>
<summary><code>cargo doc --help</code></summary>

```
cargo-doc 
パッケージのドキュメントを作成する

USAGE:
    cargo doc [OPTIONS]

OPTIONS:
    -q, --quiet                      stdout に表示しない
        --open                       操作後にブラウザでドキュメントを開く
    -p, --package <SPEC>...          文書化するパッケージ
        --all                        --workspace のエイリアス（非推奨）
        --workspace                  ワークスペース内のすべてのパッケージを文書化する
        --exclude <SPEC>...          ビルドからパッケージを除外する
        --no-deps                    依存関係のドキュメントを作成しない
        --document-private-items     プライベートアイテムを文書化する
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数
        --lib                        このパッケージのライブラリのみを文書化する
        --bin <NAME>...              指定されたバイナリのみを文書化する
        --bins                       すべてのバイナリを文書化する
        --release                    最適化を使用して、リリースモードでアーティファクトをビルドする
        --profile <PROFILE-NAME>     指定されたプロファイルでアーティファクトを構築する
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効化する
        --no-default-features        `デフォルト` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>       Cargo.toml へのパス
        --message-format <FMT>...    エラー形式
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
        --unit-graph                 ビルドグラフを JSON で出力（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドする（不安定）
    -Z <FLAG>...                     Cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

詳細については、`cargo help doc` を実行してください。
```

</details>

### `new`

cargo パッケージを作成します。

<details>
<summary><code>cargo new --help</code></summary>

```
cargo-new
<path> に新しい cargo パッケージを作成する

USAGE:
    cargo new [OPTIONS] <path>

OPTIONS:
    -q, --quiet                    stdout に出力されない
        --registry <REGISTRY>      使用するレジストリ
        --vcs <VCS>                指定されたバージョン管理システムの新しいリポジトリを初期化するか、
                                   バージョン管理の初期化を行わず、グローバル構成をオーバーライドする
                                   [有効な値: git (デフォルト)|hg|pijul|fossil|none]
        --bin                      バイナリ（アプリケーション）テンプレートを使用する [デフォルト]
        --lib                      ライブラリテンプレートを使用する
        --edition <YEAR>           生成されたクレートに設定するエディション [可能な値：2015、2018、2021]
        --name <NAME>              結果のパッケージ名を設定する。デフォルトはディレクトリ名
    -v, --verbose                  詳細出力を使用する（-vv very verbose / build.rs output）
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   Cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

ARGS:
    <path>    

詳細については、`cargo help new` を実行してください。
```

</details>

### `init`

<details>
<summary><code>cargo init --help</code></summary>

```
cargo-init 
既存のディレクトリに新しい cargo パッケージを作成する

USAGE:
    cargo init [OPTIONS] [--] [path]

OPTIONS:
    -q, --quiet                    stdout に出力されない
        --registry <REGISTRY>      使用するレジストリ
        --vcs <VCS>                指定されたバージョン管理システムの新しいリポジトリを初期化するか、
                                   バージョン管理の初期化を行わず、グローバル構成をオーバーライドする
                                   [有効な値: git (デフォルト)|hg|pijul|fossil|none]
        --bin                      バイナリ（アプリケーション）テンプレートを使用する [デフォルト]
        --lib                      ライブラリテンプレートを使用する
        --edition <YEAR>           生成されたクレートに設定するエディション [可能な値：2015、2018、2021]
        --name <NAME>              結果のパッケージ名を設定する。デフォルトはディレクトリ名
    -v, --verbose                  詳細出力を使用する（-vv very verbose / build.rs output）
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   Cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

ARGS:
    <path>     [デフォルト: .]

詳細については、`cargo help init` を実行してください。
```

</details>

### `run`, `r`

ローカルパッケージのバイナリまたは例を実行します。

<details>
<summary><code>cargo run --help</code></summary>

```
cargo-run
ローカルパッケージのバイナリまたは例を実行する

USAGE:
    cargo run [OPTIONS] [--] [引数]...

OPTIONS:
    -q, --quiet                      stdout に出力されない
        --bin <NAME>...              実行するバイナリターゲットの名前
        --example <NAME>...          実行する例ターゲットの名前
    -p, --package <SPEC>             実行するターゲットを含むパッケージ
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数となる
        --release                    最適化を使用して、リリースモードでアーティファクトをビルドする
        --profile <PROFILE-NAME>     指定されたプロファイルでアーティファクトを構築する
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効にする
        --no-default-features        `default` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>       Cargo.toml へのパス
        --message-format <FMT>...    エラー形式
        --unit-graph                 ビルドグラフを JSON で出力（不安定）
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドする（不安定）
    -Z <FLAG>...                     Cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

ARGS:
    <args>...    

詳細については、`cargo help run` を実行してください。
```

</details>

### `test`, `t`

<details>
<summary><code>cargo test --help</code></summary>

```
cargo-test 
すべてのユニットテストと統合テストを実行し、ローカルパッケージの例を作成する

USAGE:
    cargo test [OPTIONS] [TESTNAME] [-- <args>...]

OPTIONS:
    -q, --quiet                      1行ではなく、テストごとに1文字を表示する
        --lib                        このパッケージのライブラリユニットテストのみをテストする
        --bin <NAME>...              指定されたバイナリのみをテストする
        --bins                       すべてのバイナリをテストする
        --example <NAME>...          指定された例のみをテストする
        --examples                   すべての例をテストする
        --test <NAME>...             指定されたテストターゲットのみをテストする
        --tests                      すべてのテストをテストする
        --bench <NAME>...            指定されたベンチターゲットのみをテストする
        --benches                    すべてのベンチをテストする
        --all-targets                すべてのターゲットをテストする
        --doc                        このライブラリのドキュメントのみをテストする
        --no-run                     コンパイルするが、テストは実行しない
        --no-fail-fast               失敗に関係なくすべてのテストを実行する
    -p, --package <SPEC>...          テストを実行するためのパッケージ
        --all                        --workspace のエイリアス（非推奨）
        --workspace                  ワークスペース内のすべてのパッケージをテストする
        --exclude <SPEC>...          パッケージをテストから除外する
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数
        --release                    最適化を使用して、リリースモードでアーティファクトをビルドする
        --profile <PROFILE-NAME>     指定されたプロファイルでアーティファクトを構築する
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効化する
        --no-default-features        `default` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>       Cargo.toml へのパス
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
        --message-format <FMT>...    エラー形式
        --unit-graph                 ビルドグラフを JSON で出力（不安定）
        --future-incompat-report     ビルドの最後に将来の非互換性レポートを出力します（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドします（不安定）
    -Z <FLAG>...                     Cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

ARGS:
    <TESTNAME>    指定した場合、名前にこの文字列を含むテストのみを実行する
    <args>...     テストバイナリの引数

詳細については、`cargo help test` を実行してください。
```

</details>

### `bench`

<details>
<summary><code>cargo bench --help</code></summary>

```
cargo-bench 
ローカルパッケージのすべてのベンチマークを実行する

USAGE:
    cargo bench [OPTIONS] [BENCHNAME] [-- <args>...]

OPTIONS:
    -q, --quiet                      stdout に表示しない
        --lib                        このパッケージのライブラリのみをベンチマークする
        --bin <NAME>...              指定されたバイナリのみをベンチマークする
        --bins                       すべてのバイナリのベンチマーク
        --example <NAME>...          指定された例のみをベンチマークする
        --examples                   すべての例のベンチマークする
        --test <NAME>...             指定されたテストターゲットのみをベンチマークする
        --tests                      すべてのテストをベンチマークする
        --bench <NAME>...            指定されたベンチターゲットのみをベンチマークする
        --benches                    すべてのベンチをベンチマークする
        --all-targets                すべてのターゲットをベンチマークする
        --no-run                     コンパイルするが、ベンチマークは実行しない
    -p, --package <SPEC>...          ベンチマークを実行するためのパッケージ
        --all                        --workspace のエイリアス（非推奨）
        --workspace                  ワークスペース内のすべてのパッケージをベンチマークする
        --exclude <SPEC>...          ベンチマークからパッケージを除外する
    -j, --jobs <N>                   並列ジョブの数。デフォルトはCPUの数
        --features <FEATURES>...     有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features               利用可能なすべてのフィーチャーを有効化する
        --no-default-features        `default` フィーチャーを有効にしない
        --target <TRIPLE>...         ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>     生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>       Cargo.toml へのパス
        --ignore-rust-version        パッケージ内の `rust-version` 仕様を無視する（不安定）
        --message-format <FMT>...    エラー形式
        --no-fail-fast               Run all benchmarks regardless of failure
        --unit-graph                 ビルドグラフを JSON で出力する（不安定）
    -v, --verbose                    詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>               カラーリング: auto, always, never
        --frozen                     Cargo.lock とキャッシュが最新であることを要求する
        --locked                     Cargo.lock が最新であることを要求する
        --offline                    ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...      構成値をオーバーライドする（不安定）
    -Z <FLAG>...                     cargo に対する不安定な（nightly-only）フラグ
                                     詳細については `cargo -Z help` を参照
    -h, --help                       ヘルプ情報を表示する

ARGS:
    <BENCHNAME>    指定した場合、名前にこの文字列を含むベンチのみを実行する
    <args>...      ベンチバイナリの引数

詳細については、`cargo help bench` を実行してください。
```

</details>

### `update`

<details>
<summary><code>cargo update --help</code></summary>

```
cargo-update 
ローカルロックファイルに記録されている依存関係を更新する

USAGE:
    cargo update [OPTIONS]

OPTIONS:
    -q, --quiet                    stdout に表示しない
    -w, --workspace                ワークスペースパッケージのみを更新する
    -p, --package <SPEC>...        更新するパッケージ
        --aggressive               -p とともに使用すると、SPEC のすべての依存関係も強制的に更新する
        --dry-run                  実際にロックファイルを書き込まない
        --precise <PRECISE>        -p とともに使用すると、単一の依存関係を正確に更新する
        --manifest-path <PATH>     Cargo.toml へのパス
    -v, --verbose                  詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

詳細については、`cargo help update` を実行してください。
```

</details>

### `search`

<details>
<summary><code>cargo search --help</code></summary>

```
cargo-search 
crates.io でパッケージを検索する

USAGE:
    cargo search [OPTIONS] [--] [query]...

OPTIONS:
    -q, --quiet                    stdout に表示しない
        --index <INDEX>            パッケージをアップロードするレジストリインデックス URL
        --limit <LIMIT>            結果の数を制限する（デフォルト：10、最大：100）
        --registry <REGISTRY>      使用するレジストリ
    -v, --verbose                  詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

ARGS:
    <query>...    

詳細については、`cargo help search` を実行してください。
```

</details>

### `publish`

<details>
<summary><code>cargo publish --help</code></summary>

```
cargo-publish 
パッケージをレジストリにアップロードする

USAGE:
    cargo publish [OPTIONS]

OPTIONS:
    -q, --quiet                     stdout に表示しない
        --index <INDEX>             パッケージをアップロードするレジストリインデックス URL
        --token <TOKEN>             アップロード時に使用するトークン
        --no-verify                 それらを構築することによって内容を確認しない
        --allow-dirty               ダーティな作業ディレクトリをパッケージ化できるようにする
        --target <TRIPLE>...        ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>    生成されたすべてのアーティファクトのディレクトリ
        --manifest-path <PATH>      Cargo.toml へのパス
        --features <FEATURES>...    有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features              利用可能なすべてのフィーチャーを有効化する
        --no-default-features       `default` フィーチャーを有効にしない
    -j, --jobs <N>                  並列ジョブの数。デフォルトはCPUの数
        --dry-run                   アップロードせずにすべてのチェックを実行する
        --registry <REGISTRY>       公開するレジストリ
    -v, --verbose                   詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>              カラーリング: auto, always, never
        --frozen                    Cargo.lock とキャッシュが最新であることを要求する
        --locked                    Cargo.lock が最新であることを要求する
        --offline                   ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...     構成値をオーバーライドする（不安定）
    -Z <FLAG>...                    cargo に対する不安定な（nightly-only）フラグ
                                    詳細については `cargo -Z help` を参照
    -h, --help                      ヘルプ情報を表示する

詳細については、`cargo help publish` を実行してください。
```

</details>

### `install`

<details>
<summary><code>cargo install --help</code></summary>

```
cargo-install 
Rustバイナリをインストールする。デフォルトの場所は $HOME/.cargo/bin

USAGE:
    cargo install [OPTIONS] [--] [crate]...

OPTIONS:
    -q, --quiet                     stdout に表示しない
        --version <VERSION>         インストールするバージョンを指定する
        --git <URL>                 指定されたクレートをインストールするための Git URL
        --branch <BRANCH>           git からインストールするときに使用するブランチ
        --tag <TAG>                 git からインストールするときに使用するタグ
        --rev <SHA>                 git からインストールするときに使用する特定のコミット
        --path <PATH>               インストールするローカルクレートへのファイルシステムパス
        --list                      インストールされているすべてのパッケージとそのバージョンを一覧表示する
    -j, --jobs <N>                  並列ジョブの数。デフォルトはCPUの数
    -f, --force                     既存のクレートまたはバイナリを強制的に上書きする
        --no-track                  追跡情報を保存しない
        --features <FEATURES>...    有効にするフィーチャーのスペースまたはカンマ区切りのリスト
        --all-features              利用可能なすべての機能を有効化する
        --no-default-features       `default` フィーチャーを有効にしない
        --profile <PROFILE-NAME>    指定されたプロファイルでアーティファクトをインストール
        --debug                     リリースモードではなくデバッグモードでビルドする
        --bin <NAME>...             指定されたバイナリのみをインストールする
        --bins                      すべてのバイナリをインストールする
        --example <NAME>...         指定された例のみをインストールする
        --examples                  すべての例をインストールする
        --target <TRIPLE>...        ターゲットトリプル用にビルド
        --target-dir <DIRECTORY>    生成されたすべてのアーティファクトのディレクトリ
        --root <DIR>                パッケージをインストールするディレクトリ
        --index <INDEX>             インストール元のレジストリインデックス
        --registry <REGISTRY>       使用するレジストリ
    -v, --verbose                   詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>              カラーリング: auto, always, never
        --frozen                    Cargo.lock とキャッシュが最新であることを要求する
        --locked                    Cargo.lock が最新であることを要求する
        --offline                   ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...     構成値をオーバーライドする（不安定）
    -Z <FLAG>...                    cargo に対する不安定な（nightly-only）フラグ
                                    詳細については `cargo -Z help` を参照
    -h, --help                      ヘルプ情報を表示する

ARGS:
    <crate>...    

詳細については、`cargo help install` を実行してください。
```

</details>

### `uninstall`

<details>
<summary><code>cargo uninstall --help</code></summary>

```
cargo-uninstall 
Rust バイナリを削除する

USAGE:
    cargo uninstall [OPTIONS] [--] [spec]...

OPTIONS:
    -q, --quiet                    stdout に表示しない
    -p, --package <SPEC>...        アンインストールするパッケージ
        --bin <NAME>...            バイナリ NAME のみをアンインストールする
        --root <DIR>               パッケージをアンインストールするディレクトリ
    -v, --verbose                  詳細出力を使用する（-vv very verbose/build.rs output）
        --color <WHEN>             カラーリング: auto, always, never
        --frozen                   Cargo.lock とキャッシュが最新であることを要求する
        --locked                   Cargo.lock が最新であることを要求する
        --offline                  ネットワークにアクセスせずに実行
        --config <KEY=VALUE>...    構成値をオーバーライドする（不安定）
    -Z <FLAG>...                   cargo に対する不安定な（nightly-only）フラグ
                                   詳細については `cargo -Z help` を参照
    -h, --help                     ヘルプ情報を表示する

ARGS:
    <spec>...    

詳細については、`cargo help uninstall` を実行してください。
```

</details>

---

### `add`

<details>
<summary><code>cargo add --help</code></summary>

```
cargo-add 0.8.0
Cargo.toml マニフェストファイルに依存関係を追加する

USAGE:
    cargo add [FLAGS] [OPTIONS] <crate>...

FLAGS:
        --allow-prerelease       crates.io からフェッチするときにプレリリースバージョンを含める（e.g. '0.6.0-alpha'）
    -B, --build                  ビルドの依存関係としてクレートを追加する
    -D, --dev                    開発の依存関係としてクレートを追加する
    -h, --help                   ヘルプ情報を表示する
        --no-default-features    追加された依存関係に `default-features = false` を設定する
        --offline                ネットワークにアクセスせずに実行
        --optional               オプションの依存関係として追加する（機能で使用するため）
    -q, --quiet                  成功した場合は出力を表示しない
    -s, --sort                   現在ソートされていない場合でも依存関係をソートする
    -V, --version                バージョン情報を表示する

OPTIONS:
        --branch <branch>           クレートをダウンロードする git ブランチを指定する
        --features <features>...    追加するフィーチャーのスペース区切りのリスト。
                                    機能を有効にする別のアプローチについては、`cargo-feature` ユーティリティのインストールを検討されたし
        --git <uri>                 クレートをダウンロードする git リポジトリを指定する
        --manifest-path <path>      依存関係を追加するマニフェストへのパス
        --path <path>               クレートをロードするパスを指定する
    -p, --package <pkgid>           この依存関係を追加するクレートのパッケージ ID
        --registry <registry>       使用するレジストリ
    -r, --rename <rename>           Cargo.toml の依存関係の名前を変更する
                                    （https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#renaming-dependencies-in-cargotoml）。
                                    単一の依存関係を指定する場合にのみ機能する
        --target <target>           指定されたターゲットプラットフォームへの依存関係として追加する
        --upgrade <method>          セマンティックバージョンアップグレードの方法を選択する。
                                    "none" (正確なバージョン, `=` 修飾子), "patch" (`~` 修飾子), "minor" (`^` 修飾子), "all" (`>=`), or "default" (修飾子なし) のいずれかである必要があります
                                    [デフォルト: default]  [可能な値: none, patch, minor, all, default]
        --vers <uri>                レジストリ（crates.io）から取得するバージョンを指定する。名前の一部としてバージョンを指定することもできます（e.g. `cargo add bitflags@0.3.2`）

ARGS:
    <crate>...    追加するクレート

このコマンドを使用すると、Cargo.toml マニフェストファイルに依存関係を追加できます。<crate> が github または gitlab リポジトリの URL、あるいはローカルパスの場合、`cargo add` は自動的にクレート名を取得し、
適切な `--git` または `--path` 値を設定しようとします。

Cargo は '1.2.3' のようなバージョンを '^ 1.2.3' として扱うことに注意してください（'^1.2.3' は '>=1.2.3' および '<2.0.0' として指定されます）。デフォルトでは、 `cargo add` は、crates.io レジストリが提案する形式であるため、この形式を使用します。
`cargo add` の1つの目標は、ワイルドカードの依存関係（バージョンを '*' に設定）を使用しないようにすることです。
```

</details>

### `rm`

<details>
<summary><code>cargo rm --help</code></summary>

```
cargo-rm 0.8.0
Cargo.toml マニフェストファイルから依存関係を削除する

USAGE:
    cargo rm [FLAGS] [OPTIONS] <crates>...

FLAGS:
    -B, --build      ビルドの依存関係としてクレートを削除する
    -D, --dev        開発の依存関係としてクレートを削除する
    -h, --help       ヘルプ情報を表示する
    -q, --quiet      成功した場合は出力を表示しない
    -V, --version    バージョン情報を表示する

OPTIONS:
        --manifest-path <path>    依存関係を削除するマニフェストへのパス
    -p, --package <pkgid>         この依存関係を削除するクレートのパッケージ ID

ARGS:
    <crates>...    削除するクレート
```

</details>

### `upgrade`

<details>
<summary><code>cargo upgrade --help</code></summary>

```
cargo-upgrade 0.8.0
ローカルマニフェストファイル（Cargo.toml など）で指定されているように依存関係をアップグレードする

USAGE:
    cargo upgrade [FLAGS] [OPTIONS] [--] [dependency]...

FLAGS:
        --all                 [deprecated in favor of `--workspace`]
        --allow-prerelease    crates.ioからフェッチするときに、プレリリースバージョンを含める (e.g. '0.6.0-alpha')
        --dry-run             変更を加えずに表示する
    -h, --help                ヘルプ情報を表示する
        --offline             ネットワークにアクセスせずに実行
        --skip-compatible     新しいバージョンが semver と互換性がない場合にのみ、依存関係を更新する
        --to-lockfile         すべてのパッケージをロックファイル内のバージョンにアップグレードする
    -V, --version             バージョン情報を表示する
        --workspace           ワークスペース内のすべてのパッケージをアップグレードする

OPTIONS:
        --exclude <exclude>...    除外し、アップグレードしないクレート
        --manifest-path <path>    アップグレードするマニフェストへのパス
    -p, --package <pkgid>         この依存関係を追加するクレートのパッケージ ID

ARGS:
    <dependency>...    アップグレードするクレート

このコマンドは、ローカルロックファイル（Cargo.lock）に記録されている依存関係のバージョンを更新する `cargo update` とは異なります。

`<dependency>` が指定されている場合、指定された依存関係のみがアップグレードされます。それぞれにアップグレードするバージョンは、`docopt@0.8.0` または `serde@>=0.9,<2.0` のように指定できます。

開発、ビルド、およびすべてのターゲットの依存関係もアップグレードされます。crates.io からの依存関係のみがサポートされています。Git/path の依存関係は無視されます。

`--workspace` フラグが指定されている場合、ワークスペース内のすべてのパッケージがアップグレードされます。`--workspace` フラグは、仮想マニフェストの存在下で提供される場合があります。

'--to-lockfile' フラグが指定されている場合、すべての依存関係は、Cargo.lock ファイルに記録されている現在ロックされているバージョンにアップグレードされます。
このフラグは、Cargo.lock ファイルが最新であることを必要とします。ロックファイルがない場合、またはロックファイルを更新する必要がある場合、cargo-upgrade のアップグレードはエラーで終了します。'
--to-lockfile' フラグが指定されている場合、ネットワークはアクセスされません。
```

</details>

### `set-version`

<details>
<summary><code>cargo set-version --help</code></summary>

```
cargo-set-version 0.8.0
ローカルマニフェストファイル（Cargo.toml など）でパッケージのバージョンを変更する

USAGE:
    cargo set-version [FLAGS] [OPTIONS] [--] [target]

FLAGS:
        --all          [deprecated in favor of `--workspace`]
        --dry-run      変更を加えずに表示する
    -h, --help         ヘルプ情報を表示する
    -V, --version      バージョン情報を出力する
        --workspace    ワークスペース内のすべてのパッケージを変更する

OPTIONS:
        --bump <bump>             マニフェストバージョンの増分 [可能な値: major, minor, patch, release, rc, beta, alpha]
        --exclude <exclude>...    除外し、変更しないクレート
        --manifest-path <path>    アップグレードするマニフェストへのパス
    -m, --metadata <metadata>     バージョンメタデータフィールドを指定します（e.g. ラップされたライブラリのバージョン）
    -p, --package <pkgid>         バージョンを変更するためのクレートのパッケージ ID

ARGS:
    <target>    マニフェストを変更するバージョン
```

</details>

## 関連する外部リンク

- [The Cargo Book](https://doc.rust-lang.org/cargo/)