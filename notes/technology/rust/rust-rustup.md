---
slug: /rust-rustup
sidebar_label: rustup
---

# 【Rust】rustup

> [`rustup`](https://rust-lang.github.io/rustup/) は、Rust 言語のツールチェーン管理ツールです。

## コンセプト

- [⇣：チャネル](#channels)
- [⇣：ツールチェーン](#toolchains)
- [⇣：コンポーネント](#components)
- [⇣：プロファイル](#profiles)
- [⇣：プロキシ](#proxies)

### チャネル {#channels}

Rust は、3つの異なる「_チャネル_」－－stable、beta、nightly－－にリリースされます。`rustup` は、さまざまなチャネルをインストールし、それらを最新の状態に保ち、それらを簡単に切り替えるのに役立ちます。

### ツールチェーン {#toolchains}

多くの `rustup` コマンドは、「ツールチェーン」－－Rust コンパイラ（`rustc`）及びその関連ツール（`cargo` など）の完全なインストール－－を処理します。Rust エンジニアは、必要に応じて、異なるツールチェーンを切り替えて開発を行うことができます。

```text title="ツールチェーンの形式"
<channel>[-<date>][-<host>]

<channel>       = stable|beta|nightly|<major.minor>|<major.minor.patch>
<date>          = YYYY-MM-DD
<host>          = <target-triple>
```

:::tip nightly ツールチェーンの操作
 
- _nightly ツールチェーンの入手_
  - ```bash title="インストールした全ツールチェーンを確認する"
    $ rustup toolchain list
    ```
  - ```bash title="Rust コンパイラの nightly ツールチェーンをインストールする"
    $ rustup toolchain install nightly
    ```
- _デフォルトツールチェーン_
  - ```bash title="Rust コンパイラの デフォルトツールチェーンを nightly に変更する"
    $ rustup default nightly
    ```
  - ```bash title="Rust コンパイラの デフォルトツールチェーンを stable に戻す"
    $ rustup default stable
    ```
- _プロジェクトでのツールチェーン_
  - ```bash title="あるプロジェクトで使用するべきツールチェーンとして nightly 版に固定する"
    $ cd ~/projects/some-project-needs-nightly
    $ rustup override set nightly
    ```
  - ```bash title="あるプロジェクトで使用するべきツールチェーンとしてセットされたオーバーライドを削除する"
    $ cd ~/projects/some-project-needs-nightly
    $ rustup override unset
    ```

:::

### コンポーネント {#components}

各ツールチェーンはいくつかの「コンポーネント」で構成されており、そのうちいくつかは必須－－`rustc` のように－－であり、またいくつかはオプション－－`clippy` のように－－です。

すべてのコンポーネントがすべてのツールチェーンで使用できるわけではありません－－特に nightly チャネルでは注意が必要です。－－すべてのコンポーネントのステータスは、[rustup-component-history](https://rust-lang.github.io/rustup-components-history/) のページで確認できます。

#### コンポーネントの管理

コンポーネントの管理には `rustup component` コマンドを使用します。

:::tip コンポーネント操作の例

- ```bash title="使用可能でインストールされているコンポーネントのリストを表示する"
  $ rustup component list
  ```
- ```bash title="ツールチェーンをインストールする時にコンポーネントを追加する"
  $ rustup toolchain install nightly --component rust-docs
  ```
- ```bash title="インストール済みのツールチェーンにコンポーネントを追加する"
  $ rustup component add rust-docs
  ```

:::

#### 使用可能なコンポーネント

- [`rustc`](/notes/rust-rustc) – Rust コンパイラ。
- [`cargo`](/notes/rust-cargo) – パッケージマネージャーおよびビルドツール。
- [`rustfmt`](https://github.com/rust-lang/rustfmt) – コードを自動的にフォーマットするためのツール。
- [`rust-std`](https://doc.rust-lang.org/std/) – Rust 標準ライブラリです。`rust-std-x86_64-pc-windows-msvc` など、`rustc` がサポートするターゲットごとに個別の `rust-std` コンポーネントがあります。詳細については、[クロスコンパイル](https://rust-lang.github.io/rustup/cross-compilation.html) の章を参照してください。
- `rust-docs` – Rust ドキュメントのローカルコピーです。`rustup doc` コマンドを使用して、ブラウザでドキュメントを開きます。その他のオプションについては、`rustup doc --help` を実行してください。
- [`rls`](https://github.com/rust-lang/rls) – エディターと IDE のサポートを提供する言語サーバー。
- [`clippy`](https://github.com/rust-lang/rust-clippy) – よくある間違いや文体の選択をさらにチェックする lint ツール。
- [`miri`](https://github.com/rust-lang/miri/) – 未定義動作をチェックするために使用できる実験的な Rust インタープリタ。
- `rust-src` – Rust標準ライブラリのソースコードのローカルコピーです。これは、RLS などの一部のツールで使用して、標準ライブラリ内の関数のオートコンプリートを提供できます－－Miri は Rust の通訳です。－－また、Cargo の実験的な [build-std](https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#build-std) 機能により、標準ライブラリをローカルで再構築できます。
- `rust-analysis` – RLS などのツールで使用される標準ライブラリに関するメタデータ。
- `rust-mingw` – これには、`x86_64-pc-windows-gnu` プラットフォームで構築するためのリンカとプラットフォームライブラリが含まれています。
- `llvm-tools-preview` – [LLVM](https://llvm.org/) ツールのコレクションを含む実験的なコンポーネントです。
- `rustc-dev` – このコンポーネントには、コンパイラがライブラリとして含まれています。ほとんどのユーザーはこれを必要としません。Clippy に変更を加えるなど、コンパイラにリンクするツールの開発にのみ必要です。

### プロファイル {#profiles}

「プロファイル」は、新しい Rust ツールチェーンのインストール中にダウンロードすることを選択できる**コンポーネントのグループ**です。次のものがあります：

| プロファイル     | 含まれるコンポーネント                                                    | 主な用途                                                              |
|------------|----------------------------------------------------------------|-------------------------------------------------------------------|
| `minimal`  | `rustc`, `rust-std`, `cargo`                                   | ローカルドキュメントを使用しない場合や **CI**                                        |
| `default`  | `rustc`, `rust-std`, `cargo`, `rust-docs`, `rustfmt`, `clippy` | デフォルトであり、一般的に利用されます。                                              |
| `complete` | `rustup` を通じて利用可能なすべてのコンポーネント                                  | メタデータに含まれるすべてのコンポーネントが含まれているため、ほとんどの場合失敗するため、これは絶対に**使用しない**で下さい。 |

```bash title="コマンドの例：プロファイルを minimal に変更する"
rustup set profile minimal
```

### プロキシ {#proxies}

`rustup` は、一般的な Rust ツールに多数のラッパーを提供します。これらはプロキシと呼ばれ、さまざまなコンポーネントによって提供されるコマンドを表します。

プロキシのリストは現在、`rustup` で静的であり、次のとおりです：

- `rustc` – Rust プログラミング言語用のコンパイラであり、プロジェクト自体によって提供され、`rustc` コンポーネントから提供されます。
- `rustdoc` – `rustc` コンポーネントで配布されるツールであり、Rust プロジェクトのドキュメントを生成するのに役立ちます。
- `cargo` – Rust パッケージの依存関係をダウンロードし、パッケージをコンパイルし、配布可能なパッケージを作成して、crates.io（Rust コミュニティのパッケージレジストリ）にアップロードする Rust パッケージマネージャーです。それは `cargo` コンポーネントから来ています。
- `rust-lldb`, `rust-gdb` – それぞれ `lldb` デバッガーと `gdb` デバッガーの単純なラッパーです。ラッパーは、Rust 値のきれいな表示を可能にし、スクリプトインターフェイスを使用してデバッガーにいくつかの便利な機能を追加します。
- `rls` – Rust IDE 統合ツールの一部です。これは、言語サーバープロトコルを実装して、IDE および Visual Studio Code、ViM、Emacs などのエディターが編集中の Rust コードのセマンティクスにアクセスできるようにします。これは `rls` コンポーネントに由来します。
- `cargo-clippy`, `lippy-driver` – 一般的な間違いやスタイルの選択に対する追加のチェックを提供する `clippy` linting ツールに関連しており、`clippy` コンポーネントに由来します。
- `cargo-miri` – Rust の中間レベル中間表現（MIR）の実験的なインタープリターであり、`miri` コンポーネントに由来します。

## オーバーライド

`rustup` は、`rustc` などのインストールされたコマンドの1つが実行されたときに、使用するツールチェーンを自動的に決定します。使用するツールチェーンを制御およびオーバーライドするには、いくつかの方法があります：

1. `cargo +beta` など、コマンドラインで使用されるツールチェーンオーバーライドの省略形。
2. `RUSTUP_TOOLCHAIN` 環境変数。
3. `rustup override` コマンドで設定されたディレクトリオーバーライド。
4. `rust-toolchain.toml` ファイル。
5. デフォルトのツールチェーン。

ツールチェーンは、指定された最初のツールチェーンを使用して、上記の順序で選択されます。ただし、例外が1つあります。ディレクトリのオーバーライドと `rust-toolchain.toml` ファイルも、現在のディレクトリに近いため優先されます。つまり、これら2つのオーバーライド方法は、ディレクトリツリーをファイルシステムルートに向かって上に移動することで検出され、現在のディレクトリに近い `rust-toolchain.toml` ファイルが、遠くにあるディレクトリオーバーライドよりも優先されます。

どのツールチェーンがアクティブであるかを確認するには、`rustup show` を使用します。

### ツールチェーンオーバーライドの省略形

`rustup`　ツールチェーンプロキシは、特定のツールチェーンを使用するように直接指示できます。これは、さまざまなツールチェーンをテストすることが多い開発者にとって便利です。ツールチェーン内の `cargo`、`rustc`、またはその他のツールの最初の引数が `+` で始まる場合、それは `rustup` ツールチェーン名として解釈され、そのツールチェーンが優先されます。

```bash
$ cargo +beta test
```

### ディレクトリオーバーライド

ディレクトリには、`rustup` オーバーライドを使用して独自の Rust ツールチェーンを割り当てることができます。ディレクトリにオーバーライドがある場合、そのディレクトリまたはその子ディレクトリの1つで `rustc` または `cargo` が実行されると、オーバーライドツールチェーンが呼び出されます。尚、ディレクトリごとのオーバーライドは、`rustup` のホームディレクトリにある構成ファイルに保存されます。

:::tip オーバーライド操作コマンドの例

- ```bash title="アクティブなツールチェーンを表示する"
  $ rustup show
  ```
- ```bash title="ディレクトリで特定の nightly を使用する"
  $ rustup override set nightly-2014-12-18
  ```
- ```bash title="ディレクトリで特定の stable を使用する"
  $ rustup override set 1.0.0
  ```
- ```bash title="オーバーライドを削除してデフォルトのツールチェーンを再度使用する"
  $ rustup override unset
  ```

:::

### ツールチェーンファイル

一部のプロジェクトは、Rust の特定のリリースに「固定」されており、この情報をソースリポジトリに反映させたいと考えています。これは、リリースアーカイブからのリビジョンにピン留めされる nightly 専用ソフトウェアの場合に最もよく見られます。

このような場合、ツールチェーンは、プロジェクトのディレクトリで `rust-toolchain.toml` または `rust-toolchain` というファイルに名前を付けることができます。両方のファイルがディレクトリに存在する場合、下位互換性のために後者が使用されます。ファイルは TOML 形式を使用し、次のレイアウトになっています：

```toml
[toolchain]
channel = "nightly-2020-07-10"
components = [ "rustfmt", "rustc-dev" ]
targets = [ "wasm32-unknown-unknown", "thumbv2-none-eabi" ]
profile = "minimal"
```

`[toolchain]` セクションは必須であり、少なくとも1つのプロパティを指定する必要があります。`chanel` と `path` は相互に排他的です。

下位互換性のために、`rust-toolchain` ファイルは、TOML エンコーディングなしでツールチェーン名のみを含むレガシー形式もサポートしています－－例えば `nightly-2021-01-21`。－－この場合、ファイルは US-ASCII でエンコードする必要があります（Windowsを使用している場合は、エンコードを確認し、BOM で始まらないことを確認してください）。従来の形式は、`rust-toolchain.toml` ファイルでは使用できません。

:::info `rustup` をアップグレードする必要があるケース

次のエラーが表示された場合（`rustc`、`cargo`、またはその他のコマンドを実行している場合）：

```
error: invalid channel name '[toolchain]' in '/PATH/TO/DIRECTORY/rust-toolchain'
```

－－これは、1.23.0 より前の `rustup` を実行していて、`rust-toolchain` ファイルで新しい TOML エンコーディングを使用するプロジェクトと対話しようとしていることを意味します。`rustup` を 1.23.0+ にアップグレードする必要があります。

:::

`rust-toolchain.toml`/`rust-toolchain` ファイルは、ソース管理にチェックインするのに適しています。

これらのファイルで名付けられたツールチェーンは、一般的な `rustup` ツールチェーンよりも制限された形式を持ち、「stable」、「beta」、「nightly」の3つのリリースチャネル名、「1.0.0」などの Rust バージョン番号、「nightly-2017-01-01」などのアーカイブ日付（オプション）のみを含むことができます。カスタムツールチェーンやホスト固有のツールチェーンに名前を付けることはできません。カスタムローカルツールチェーンを使用するには、代わりに `path ツールチェーンを使用することができます：

```toml
[toolchain]
path = "/path/to/local/toolchain"
```

`path` ディレクティブはローカルツールチェーンに直接名前を付けるため、`components`、`targets`、`profile` などの他のオプションは効果がありません。`path` はすでに特定のツールチェーンを指しているため、`chanel` と `path` は相互に排他的です。相対パスは、`rust-toolchain.toml` ファイルの場所を基準にして解決されます。

### デフォルトツールチェーン

他のオーバーライドが設定されていない場合は、グローバルなデフォルトのツールチェーンが使用されます。このデフォルトは、`rustup`　がインストールされている場合に選択できます。

- ```bash title="現在のデフォルトを確認する"
  $ rustup default
  ```
- ```bash title="デフォルトを nightly に変更する"
  $ rustup default nightly
  ```
- ```bash title="デフォルトを stable に戻す"
  $ rustup default stable
  ```

## クロスコンパイル

Rust は[非常に多くのプラットフォームに対応しています](https://doc.rust-lang.org/nightly/rustc/platform-support.html) 。Rust プロジェクトは、これらのプラットフォームの多くで、標準ライブラリのバイナリリリースを公開しており、いくつかのプラットフォームでは、フルコンパイラも公開しています。

ツールチェーンを最初にインストールするとき、`rustup` は、ホストプラットフォームの標準ライブラリ、つまり、現在実行しているアーキテクチャとオペレーティングシステムのみをインストールします。他のプラットフォームにコンパイルするには、他のターゲットプラットフォームをインストールする必要があります。これは、`rustup target add`コマンドを使用して実行されます：

:::note Android をターゲトにした例

```bash title="例：Android ターゲットを追加する"
$ rustup target add arm-linux-androideabi
info: downloading component 'rust-std' for 'arm-linux-androideabi'
info: installing component 'rust-std' for 'arm-linux-androideabi'
```

`arm-linux-androideabi` ターゲットがインストールされている場合、`cargo build --target=arm-linux-androideabi` のように、`--target` フラグを渡すことで、Cargo を使用して Android 用にビルドできます。

:::

`rustup target add` は、特定のターゲットの Rust 標準ライブラリのみをインストールすることに注意してください。通常、クロスコンパイルに必要な他のツール、特にリンカがあります。例えば、Android にクロスコンパイルするには、[Android NDK](https://developer.android.com/tools/sdk/ndk/index.html) をインストールする必要があります。将来的には、`rustup` はNDKコンポーネントのインストールも支援する予定です。

デフォルトのツールチェーンではないツールチェーンのターゲットをインストールするには、次のように `rustup target add` の `--toolchain` 引数を使用します：

```bash
$ rustup target add --toolchain <toolchain> <target>...
```

利用可能なターゲットのリストを表示するには、`rustup target list` を実行します。以前に追加されたターゲットを削除するには、`rustup target remove` を使用します。

## コマンド例集

- ```bash title="デフォルトのツールチェーンを最新の nightly に設定する"
  $ rustup default nightly
  ```
- ```bash title="デフォルトのプロファイルを設定する"
  $ rustup set profile minimal
  ```
- ```bash title="アクティブなツールチェーンで利用可能なすべてのターゲットを一覧表示する"
  $ rustup target list
  ```
- ```bash title="Androidターゲットをインストールする"
  $ rustup target add arm-linux-androideabi
  ```
- ```bash title="Androidターゲットを削除する"
  $ rustup target remove arm-linux-androideabi
  ```
- ```bash title="アクティブなツールチェーンに関係なく、nightly 実行する"
  $ rustup run nightly rustc foo.rs
  ```
- ```bash title="nightly コンパイラを実行する簡単な方法"
  $ rustc +nightly foo.rs
  ```
- ```bash title="nightly コンパイラ用に構成されたシェルを実行する"
  $ rustup run nightly bash
  ```
- ```bash title="Windowsでは、GNU の代わりに MSVC ツールチェーンを使用する"
  $ rustup default stable-msvc
  ```
- ```bash title="現在のディレクトリには、特定の日付からの nightly を使用する"
  $ rustup override set nightly-2015-04-01
  ```
- ```bash title="既存のインストールをシンボリックリンクしてカスタムツールチェーンをインストールする"
  $ rustup toolchain link my-toolchain "C:\RustInstallation"
  ```
- ```bash title="現在のディレクトリで使用されるツールチェーンを表示する"
  $ rustup show
  ```
- ```bash title="特定のツールチェーンをアンインストールする"
  $ rustup toolchain uninstall nightly
  ```
- ```bash title="サブコマンド（toolchain など）のヘルプページを表示する"
  $ rustup toolchain help
  ```
- ```bash title="（Unix 限定）特定のコマンド（cargo など）のマニュアルページを表示する"
  $ rustup man cargo
  ```

## コマンドリファレンス

<details>
<summary><code>rustup --help</code></summary>

```
rustup 1.24.3 (ce5817a94 2021-05-31)
Rust のツールチェーンインストーラ

USAGE:
    rustup [FLAGS] [+toolchain] <SUBCOMMAND>

FLAGS:
    -v, --verbose    詳細出力を有効にする
    -q, --quiet      進行状況出力を無効にする
    -h, --help       ヘルプ情報を表示する
    -V, --version    バージョン情報を表示する

ARGS:
    <+toolchain>    オーバーライドを設定するためのリリースチャネル（例：+stable）またはカスタムツールチェーン

SUBCOMMANDS:
    show           アクティブでインストールされているツールチェーンまたはプロファイルを表示する
    update         Rust ツールチェーンと rustup を更新する
    check          Rust ツールチェーンと rustup の更新を確認する
    default        デフォルトのツールチェーンを設定する
    toolchain      インストール されているツールチェーンを変更またはクエリする
    target         ツールチェーンでサポートされているターゲットを変更する
    component      ツールチェーンにインストールされているコンポーネントを変更する
    override       ディレクトリツールチェーンのオーバーライドを変更する
    run            特定のツールチェーン用に構成された環境でコマンドを実行する
    which          特定のコマンドに対して実行されるバイナリを表示する
    doc            現在のツールチェーンのドキュメントを開く
    man            特定のコマンドのマニュアルページを表示する
    self           rustup インストールを変更する
    set            rustup 設定を変更する
    completions    シェルのタブ補完スクリプトを生成する
    help           このメッセージまたは指定されたサブコマンドのヘルプを表示する

DISCUSSION:
    Rustup は、公式リリースチャネルから Rust プログラミング言語をインストールします。
    これにより、安定版、ベータ版、および nightly のコンパイラを簡単に切り替えて、最新の状態に保つことができます。
    一般的なプラットフォーム用の標準ライブラリのバイナリビルドを使用すると、クロスコンパイルが簡単になります。

    Rust を初めて使用する場合は、`rustup doc--book` を実行して Rust を学習することを検討してください。
```

</details>

### `show`

<details>
<summary><code>rustup show --help</code></summary>

```
rustup-show 
アクティブでインストールされているツールチェーンまたはプロファイルを表示する

USAGE:
    rustup show [SUBCOMMAND]

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    active-toolchain    アクティブなツールチェーンを表示する
    home                RUSTUP_HOME の計算値を表示する
    profile             現在のプロファイルを表示する
    keys                既知の PGP キーを表示する
    help                このメッセージまたは指定されたサブコマンドのヘルプを出力する

DISCUSSION:
    アクティブなツールチェーンの名前と `rustc` のバージョンを表示します。

    アクティブなツールチェーンに追加のコンパイルターゲットのサポートがインストールされている場合は、それらも一覧表示されます。

    複数のツールチェーンがインストールされている場合は、インストールされているすべてのツールチェーンも一覧表示されます。
```

</details>

### `update`

<details>
<summary><code>rustup update --help</code></summary>

```
rustup-update 
Rust ツールチェーンと rustup を更新する

USAGE:
    rustup update [FLAGS] [toolchain]...

FLAGS:
        --force             一部のコンポーネントが欠落している場合でも、強制的に更新する
        --force-non-host    エミュレーターを必要とするツールチェーンをインストールする。
                            https://github.com/rust-lang/rustup/wiki/Non-host-toolchains
                            を参照されたし
    -h, --help              ヘルプ情報を表示する
        --no-self-update    `rustup update` コマンドを実行する時に自己更新をしない

ARGS:
    <toolchain>...    「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                      詳細については、`rustup help toolchain` を参照されたし

DISCUSSION:
    ツールチェーンが指定されていない場合、`update` コマンドは、インストールされている各ツールチェーンを
    公式リリースチャネルから更新してから、rustup 自体を更新します。

    ツールチェーン引数が指定されている場合、`update` はそのツールチェーンを更新します。
    これは `rustup toolchain install` と同じです。
```

</details>

### `check`

<details>
<summary><code>rustup check --help</code></summary>

```
rustup-check 
Rust ツールチェーンと rustup の更新を確認する

USAGE:
    rustup check

FLAGS:
    -h, --help    ヘルプ情報を表示する
```

</details>

### `default`

<details>
<summary><code>rustup default --help</code></summary>

```
rustup-default 
デフォルトのツールチェーンを設定する

USAGE:
    rustup default [toolchain]

FLAGS:
    -h, --help    ヘルプ情報を表示する

ARGS:
    <toolchain>    「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                   詳細については、`rustup help toolchain` を参照されたし

DISCUSSION:
    デフォルトのツールチェーンを指定されたものに設定します。
    ツールチェーンがまだインストールされていない場合は、最初にインストールされます。
```

</details>

### `toolchain`

<details>
<summary><code>rustup toolchain --help</code></summary>

```
rustup-toolchain 
インストールされているツールチェーンを変更またはクエリする

USAGE:
    rustup toolchain <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    list         インストールされているツールチェーンを一覧表示する
    install      特定のツールチェーンをインストールまたは更新する
    uninstall    ツールチェーンをアンインストールする
    link         ディレクトリにシンボリックリンクしてカスタムツールチェーンを作成する
    help         このメッセージまたは指定されたサブコマンドのヘルプを表示する

DISCUSSION:
    多くの `rustup` コマンドは、Rust コンパイラの単一インストールである *ツールチェーン* を処理します。
    `rustup` は複数のタイプのツールチェーンをサポートしています。
    最も基本的なトラックは公式リリースチャンネルです：「stable」、「beta」、「nightly」。
    ただし、`rustup` は、公式アーカイブ、代替ホストプラットフォーム、およびローカルビルドから
    ツールチェーンをインストールすることもできます。

    標準リリースチャネルのツールチェーン名の形式は次のとおりです：

        <channel>[-<date>][-<host>]

        <channel>       = stable|beta|nightly|<major.minor>|<major.minor.patch>
        <date>          = YYYY-MM-DD
        <host>          = <target-triple>

    「channel」は、名前付きリリースチャネル、`1.42` などのメジャーおよびマイナーバージョン番号、または「1.42.0」などの
    完全に指定されたバージョン番号です。
    `nightly-2014-12-18` のように、オプションでチャネル名にアーカイブ日付を追加できます。
    この場合、ツールチェーンはその日付のアーカイブからダウンロードされます。

    ホストはターゲットトリプルとして指定できます。これは、32ビットコンパイラを64ビットプラットフォームにインストールする場合、
    または [MSVCベースのツールチェーン] を Windows にインストールする場合に最も役立ちます。例えば：

        $ rustup toolchain install stable-x86_64-pc-windows-msvc

    便宜上、ターゲットトリプルの省略された要素が推測されるため、上記のように記述できます：

        $ rustup toolchain install stable-msvc

    `rustup default` コマンドを使用して、1つのコマンドで目的のツールチェーンをデフォルトとしてインストールおよび
    設定できます：

        $ rustup default stable-msvc

    rustup は、Rust 自体の開発によく使用される対称化されたローカルツールチェーンビルドを管理することもできます。
    詳細については、`rustup toolchain help link` を参照してください。
```

</details>

### `target`

<details>
<summary><code>rustup target --help</code></summary>

```
rustup-target 
ツールチェーンでサポートされているターゲットを変更する

USAGE:
    rustup target <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    list      インストール済みで利用可能なターゲットのリスト
    add       Rust ツールチェーンにターゲットを追加する
    remove    Rust ツールチェーンからターゲットを削除する
    help      このメッセージまたは指定されたサブコマンドのヘルプを表示する
```

</details>

### `component`

<details>
<summary><code>rustup component --help</code></summary>

```
rustup-component 
ツールチェーンにインストールされているコンポーネントを変更する

USAGE:
    rustup component <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    list      インストールされているコンポーネントと使用可能なコンポーネントのリスト
    add       Rust ツールチェーンにコンポーネントを追加する
    remove    Rust ツールチェーンからコンポーネントを削除する
    help      このメッセージまたは指定されたサブコマンドのヘルプを表示する
```

</details>

### `override`

<details>
<summary><code>rustup override --help</code></summary>

```
rustup-override 
ディレクトリツールチェーンのオーバーライドを変更する

USAGE:
    rustup override <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    list     ディレクトリツールチェーンのオーバーライドを一覧表示する
    set      ディレクトリのオーバーライドツールチェーンを設定する
    unset    ディレクトリのオーバーライドツールチェーンを削除する
    help     このメッセージまたは指定されたサブコマンドのヘルプを表示する

DISCUSSION:
    オーバーライドは、特定のディレクトリで実行するときに特定のツールチェーンを使用するように Rustup を構成します。

    ディレクトリには、`rustup override` を使用して独自の Rust ツールチェーンを割り当てることができます。
    ディレクトリにオーバーライドがある場合、そのディレクトリまたはその子ディレクトリの1つで
    `rustc` または `cargo` が実行されると、オーバーライドツールチェーンが呼び出されます。

    特定の nightly に固定するには：

        $ rustup override set nightly-2014-12-18

    または特定の安定したリリース：

        $ rustup override set 1.0.0

    アクティブなツールチェーンを表示するには、`rustup show` を使用します。
    オーバーライドを削除してデフォルトのツールチェーンを再度使用するには、`rustup override unset` を使用します。
```

</details>

### `run`

<details>
<summary><code>rustup run --help</code></summary>

```
rustup-run 
特定のツールチェーン用に構成された環境でコマンドを実行する

USAGE:
    rustup run [FLAGS] <toolchain> <command>...

FLAGS:
    -h, --help       ヘルプ情報を表示する
        --install    必要に応じて、要求されたツールチェーンをインストールする

ARGS:
    <toolchain>     「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                    詳細については、`rustup help toolchain` を参照されたし
    <command>...    

DISCUSSION:
    指定されたツールチェーンを使用するように環境を構成してから、指定されたプログラムを実行します。
    コマンドは、rustc や cargo だけでなく、任意のプログラムにすることができます。
    これは、オーバーライドを設定せずに任意のツールチェーンをテストするために使用できます。

    `rustup` によって明示的にプロキシされたコマンド（`rustc` や `cargo` など）にも、これの省略形があります。
    ツールチェーンは、最初の引数として `+toolchain` を使用して設定できます。これらは同等です：

        $ cargo +nightly build

        $ rustup run nightly cargo build
```

</details>

### `which`

<details>
<summary><code>rustup which --help</code></summary>

```
rustup-which 
特定のコマンドに対して実行されるバイナリを表示する

USAGE:
    rustup which [OPTIONS] <command>

FLAGS:
    -h, --help    ヘルプ情報を表示する

OPTIONS:
        --toolchain <toolchain>    「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                                   詳細については、`rustup help toolchain` を参照されたし

ARGS:
    <command>    
```

</details>

### `doc`

<details>
<summary><code>rustup doc --help</code></summary>

```
rustup-doc 
現在のツールチェーンのドキュメントを開く

USAGE:
    rustup doc [FLAGS] [OPTIONS] [topic]

FLAGS:
        --alloc              The Rust core allocation and collections library
        --book               The Rust Programming Language book
        --cargo              The Cargo Book
        --core               The Rust Core Library
        --edition-guide      The Rust Edition Guide
        --embedded-book      The Embedded Rust Book
    -h, --help               ヘルプ情報を表示する
        --nomicon            The Dark Arts of Advanced and Unsafe Rust Programming
        --path               ドキュメントへのパスのみを表示する
        --proc_macro         A support library for macro authors when defining new macros
        --reference          The Rust Reference
        --rust-by-example    A collection of runnable examples that illustrate various Rust
                             concepts and standard
                             libraries
        --rustc              The compiler for the Rust programming language
        --rustdoc            Rust プロジェクトのドキュメントを生成する
        --std                Standard library API documentation
        --test               rustc に組み込まれているユニットテストおよび
                             マイクロベンチマークフレームワークのサポートコード
        --unstable-book      The Unstable Book

OPTIONS:
        --toolchain <toolchain>    「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                                   詳細については、`rustup help toolchain` を参照されたし

ARGS:
    <topic>    「core」、「fn」、「usize」、「eprintln！」、「core::arch」、「alloc::format!」、「std::fs」、
               「std::fs::read_dir」、「std::io::Bytes」、「std::iter::Sum」、「std:: io::error::Result」
               などのトピック...

DISCUSSION:
    現在アクティブなツールチェーンのドキュメントをデフォルトのブラウザで開きます。

    デフォルトでは、ドキュメントの index が開きます。さまざまなフラグを使用して、特定のドキュメントを開きます。
```

</details>

### `man`

<details>
<summary><code>rustup man --help</code></summary>

```
rustup-man 
特定のコマンドのマニュアルページを表示する

USAGE:
    rustup man [OPTIONS] <command>

FLAGS:
    -h, --help    ヘルプ情報を表示する

OPTIONS:
        --toolchain <toolchain>    「stable」、「nightly」、「1.8.0」などのツールチェーン名。
                                   詳細については、 `rustup help toolchain` を参照されたし

ARGS:
    <command>    
```

</details>

### `self`

<details>
<summary><code>rustup self --help</code></summary>

```
rustup-self 
rustupインストールを変更する

USAGE:
    rustup self <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    update          rustup のアップデートをダウンロードしてインストールする
    uninstall       rustup をアンインストールする。
    upgrade-data    内部データ形式をアップグレードする。
    help            このメッセージまたは指定されたサブコマンドのヘルプを表示する
```

</details>

### `set`

<details>
<summary><code>rustup set --help</code></summary>

```
rustup-set 
rustup の設定を変更する

USAGE:
    rustup set <SUBCOMMAND>

FLAGS:
    -h, --help    ヘルプ情報を表示する

SUBCOMMANDS:
    auto-self-update    rustup 自動自己更新モード
    default-host        指定されていない場合にツールチェーンを識別するために使用されるトリプル
    help                このメッセージまたは指定されたサブコマンドのヘルプを表示する
    profile             インストールされているデフォルトのコンポーネント
```

</details>

### `completions`

<details>
<summary><code>rustup completions --help</code></summary>

```
rustup-completions 
シェルのタブ補完スクリプトを生成する

USAGE:
    rustup completions [ARGS]

FLAGS:
    -h, --help    ヘルプ情報を表示する

ARGS:
    <shell>       [possible values: zsh, bash, fish, powershell, elvish]
    <command>     [possible values: rustup, cargo]

DISCUSSION:
    Bash、Fish、Zsh、または PowerShell のタブ補完を有効にします。
    スクリプトは `stdout`に出力され、選択したファイルに出力をリダイレクトできます。
    ファイルを配置する場所は、使用しているシェルとオペレーティングシステムによって異なります。
    特定の構成によって、これらのスクリプトを配置する必要がある場所も決まる場合があります。

    Unix および同様のオペレーティングシステム（GNU/Linuxなど）でサポートされている3つのシェルの一般的な設定を次に示します。

    BASH:

    完了ファイルは通常、システム全体のコマンドの場合は `/etc/bash_completion.d/` に保存されますが、
    ユーザー固有のコマンドの場合は `~/.local/share/bash-completion/completions` に保存できます。
    次のコマンドを実行します：

        $ mkdir -p ~/.local/share/bash-completion/completions
        $ rustup completions bash >> ~/.local/share/bash-completion/completions/rustup

    これにより、完了スクリプトがインストールされます。
    変更を有効にするには、シェルセッションからログアウトして再度ログインする必要がある場合があります。

    BASH (macOS/Homebrew):

    Homebrew は bash 補完ファイルを Homebrew ディレクトリ内に保存します。
    `bash-completion` brew 式をインストールした状態で、次のコマンドを実行します：

        $ mkdir -p $(brew --prefix)/etc/bash_completion.d
        $ rustup completions bash > \
        $(brew --prefix)/etc/bash_completion.d/rustup.bash-completion

    FISH:

    Fish の完成ファイルは通常、`$HOME/.config/fish/completions` に保存されます。次のコマンドを実行します：

        $ mkdir -p ~/.config/fish/completions
        $ rustup completions fish > ~/.config/fish/completions/rustup.fish

    これにより、完了スクリプトがインストールされます。
    変更を有効にするには、シェルセッションからログアウトして再度ログインする必要がある場合があります。

    ZSH:

    ZSH 補完は通常、`$fpath` 変数にリストされている任意のディレクトリに保存されます。これらの補完を使用するには、
    生成されたスクリプトをこれらのディレクトリの1つに追加するか、独自のスクリプトをこのリストに追加する必要があります。

    使用するディレクトリがわからない場合は、カスタムディレクトリを追加するのが最も安全な方法です。
    最初にディレクトリを作成します。この例では、`$HOME` ディレクトリ内に隠しディレクトリを作成します：

        $ mkdir ~/.zfunc

    次に、 `compinit` の直前の `.zshrc` に次の行を追加します：

        fpath+=~/.zfunc

    これで、次のコマンドを使用して completions スクリプトをインストールできます：

        $ rustup completions zsh > ~/.zfunc/_rustup

    次に、ログアウトして再度ログインするか、単に

        $ exec zsh

    を実行して新しい補完を有効にする必要があります。

    CUSTOM LOCATIONS:

    または、$HOME 内のカスタムディレクトリなど、選択した場所にこれらのファイルを保存することもできます。
    そのためには、ログインスクリプト内に `source` などの適切なディレクティブを追加する必要があります。
    このようなディレクティブを追加する方法については、シェルのドキュメントを参照してください。

    POWERSHELL:

    PowerShell completion スクリプトには PowerShell v5.0+ が必要です
    （Windows 10に付属していますが、Windows 7 または 8.1 では個別にダウンロードできます）。

    まず、プロファイルがすでに設定されているかどうかを確認します

        PS C:\> Test-Path $profile

    上記のコマンドが `False` を返す場合は、次を実行します

        PS C:\> New-Item -path $profile -type file -force

    次に、`$profile` で提供されるファイルを開きます（`New-Item` コマンドを使用した場合は
     `${env:USERPROFILE}\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` になります）

    次に、完了ファイルをプロファイルに保存するか、別のファイルに保存してプロファイル内でソースします。
    完了をプロファイルに保存するには、次を使用します：

        PS C:\> rustup completions powershell >> \
        ${env:USERPROFILE}\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

    CARGO:

    Rustup は、`cargo` の完了スクリプトを生成することもできます。`rustup` によって出力されるスクリプトは、
    デフォルトのツールチェーンで配布される完了スクリプトをソースします。
    現在、すべてのシェルがサポートされているわけではありません。現在サポートされているシェルの例を次に示します。

    BASH:

        $ rustup completions bash cargo >> ~/.local/share/bash-completion/completions/cargo

    ZSH:

        $ rustup completions zsh cargo > ~/.zfunc/_cargo
```

</details>

### `help`

<details>
<summary><code>rustup help help</code></summary>

```
rustup-help 
このメッセージまたは指定されたサブコマンドのヘルプを出力する

USAGE:
    rustup help [subcommand]...

ARGS:
    <subcommand>...    ヘルプメッセージを表示するサブコマンド
```

</details>

## 関連する外部リンク


