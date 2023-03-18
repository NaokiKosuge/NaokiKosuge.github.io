---
slug: /rust-attributes
sidebar_label: 属性
---

# 【Rust】属性

:::note このドキュメントについて

このドキュメントの大半の内容は、[リファレンス](https://doc.rust-lang.org/reference/attributes.html) の内容を記載しています。

:::

> 属性は、名前、規則、言語、およびコンパイラのバージョンに従って解釈される、一般的な自由形式のメタデータです。

```rust title="属性のいくつかの例"
// 囲んでいるモジュールまたはクレートに適用される一般的なメタデータ。
#![crate_type = "lib"]

// 単体テストとしてマークされた関数
#[test]
fn test_foo() {
    /* ... */
}

// 条件付きでコンパイルされたモジュール
#[cfg(target_os = "linux")]
mod bar {
    /* ... */
}

// 警告/エラーを抑制するために使用されるlint属性
#[allow(non_camel_case_types)]
type int8_t = i8;

// 内部属性は関数全体に適用されます。
fn some_unused_variables() {
  #![allow(unused_variables)]

  let x = ();
  let y = ();
  let z = ();
}
```

## 属性の構文

<dl>
<dt>内部属性</dt>
<dd>

内部属性は、<code>#\![<em>Attr</em>]</code> で示され、**属性が宣言されているアイテム**に適用される。

</dd>

<dt>外部属性</dt>
<dd>

外部属性は、<code>#[<em>Attr</em>]</code> で示され、**属性に続くもの**に適用される。

</dd>
</dl>

## 属性の種類

- 組込属性
- マクロ属性
- マクロヘルパー属性を導出する
- ツール属性

## 属性の適用先

- すべてのアイテム宣言は外部属性を受け入れるが、外部ブロック、関数、実装、およびモジュールは内部属性を受け入れる。
- ほとんどのステートメントは外部属性を受け入れる。
- ブロック式は外部属性と内部属性を受け入れるが、それらが式ステートメントの外部式または別のブロック式の最終式である場合に限られる。
- 列挙型（`enum`）バリアントと構造体（`struct`）および共用体（`union`）フィールドは外部属性を受け入れる。
- `match` 式のアームは外部属性を受け入れる。
- ジェネリックパラメーターは外部属性を受け入れる。
- 式は限られた状況で外部属性を受け入れる。
- 関数、クロージャ、および関数のポインタパラメーターは外部属性を受け入れる。これには、関数ポインタおよび外部ブロックで `...` で示される可変個引数パラメータの属性が含まれる。

## 属性の一覧

### 組み込み属性

- _条件付きコンパイル_
  - [`cfg`](https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg-attribute) — 条件付きコンパイルを制御します。
  - [`cfg_attr`](https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg_attr-attribute) — 条件付きで属性が含まれます。
- _テスト_
  - [`test`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) — 関数をテストとしてマークします。
  - [`ignore`](https://doc.rust-lang.org/reference/attributes/testing.html#the-ignore-attribute) — テスト機能を無効にします。
  - [`shoud_panic`](https://doc.rust-lang.org/reference/attributes/testing.html#the-should_panic-attribute) — テストでパニックが発生する必要があることを示します。
- _導出_
  - [`derive`](https://doc.rust-lang.org/reference/attributes/derive.html) — トレイトの自動実装。
  - [`automatically_derived`](https://doc.rust-lang.org/reference/attributes/derive.html#the-automatically_derived-attribute) — `derive` によって作成された実装のマーカー。
- _マクロ_
  - [`macro_export`](https://doc.rust-lang.org/reference/macros-by-example.html#path-based-scope) — クロスクレートで使用するために `macro_rules` マクロをエクスポートします。
  - [`macro_use`](https://doc.rust-lang.org/reference/macros-by-example.html#the-macro_use-attribute) — マクロの可視性を拡張するか、他のクレートからマクロをインポートします。
  - [`proc_macro`](https://doc.rust-lang.org/reference/procedural-macros.html#function-like-procedural-macros) — 関数風マクロを定義します。
  - [`proc_macro_derive`](https://doc.rust-lang.org/reference/procedural-macros.html#derive-macros) — `derive` マクロを定義します。
  - [`proc_macro_attribute`](https://doc.rust-lang.org/reference/procedural-macros.html#attribute-macros) — 属性マクロを定義します。
- _診断_
  - [`allow`, `warn`, `deny`, `forbid`](https://doc.rust-lang.org/reference/attributes/diagnostics.html#lint-check-attributes) — デフォルトの lint レベルを変更します。
  - [`deprecated`](https://doc.rust-lang.org/reference/attributes/diagnostics.html#the-deprecated-attribute) — 非推奨通知を生成します。
  - [`must_use`](https://doc.rust-lang.org/reference/attributes/diagnostics.html#the-must_use-attribute) — 未使用の値の lint を生成します。
- _ABI、リンク、シンボル、および FFI_
  - [`link`](https://doc.rust-lang.org/reference/items/external-blocks.html#the-link-attribute) — externブロックとリンクするネイティブライブラリを指定します。
  - [`link_name`](https://doc.rust-lang.org/reference/items/external-blocks.html#the-link_name-attribute) — `extern` ブロック内の関数または統計のシンボルの名前を指定します。
  - [`no_link`](https://doc.rust-lang.org/reference/items/extern-crates.html#the-no_link-attribute) — 外部クレートのリンクを防ぎます。
  - [`repr`](https://doc.rust-lang.org/reference/type-layout.html#representations) — タイプのレイアウトを制御します。
  - [`crate_type`](https://doc.rust-lang.org/reference/linkage.html) — クレートのタイプ（ライブラリ、実行可能ファイルなど）を指定します。
  - [`no_main`](https://doc.rust-lang.org/reference/crates-and-source-files.html#the-no_main-attribute) — `main` シンボルの放出を無効にします。
  - [`export_name`](https://doc.rust-lang.org/reference/abi.html#the-export_name-attribute) — 関数または静的のエクスポートされたシンボル名を指定します。
  - [`link_section`](https://doc.rust-lang.org/reference/abi.html#the-link_section-attribute) — 関数または静的に使用するオブジェクトファイルのセクションを指定します。
  - [`no_mangle`](https://doc.rust-lang.org/reference/abi.html#the-no_mangle-attribute) — シンボル名のエンコードを無効にします。
  - [`used`](https://doc.rust-lang.org/reference/abi.html#the-used-attribute) — コンパイラに静的アイテムを出力オブジェクトファイルに保持するように強制します。
  - [`crate_name`](https://doc.rust-lang.org/reference/crates-and-source-files.html#the-crate_name-attribute) — クレート名を指定します。
- _コード生成_
  - [`inline`](https://doc.rust-lang.org/reference/attributes/codegen.html#the-inline-attribute) — インラインコードのヒント。
  - [`cold`](https://doc.rust-lang.org/reference/attributes/codegen.html#the-cold-attribute) — 関数が呼び出される可能性が低いことをヒントします。
  - [`no_buildins`](https://doc.rust-lang.org/reference/attributes/codegen.html#the-no_builtins-attribute) — 特定の組み込み関数の使用を無効にします。
  - [`target_feature`](https://doc.rust-lang.org/reference/attributes/codegen.html#the-target_feature-attribute) — プラットフォーム固有のコード生成を構成します。
  - [`track_caller`](https://doc.rust-lang.org/reference/attributes/codegen.html#the-track_caller-attribute) — 親の呼び出し場所を `std::panic::Location::caller()` に渡します。
- _ドキュメンテーション_
  - `doc` — ドキュメントを指定します。
- _プレリュード_
  - [`no_std`](https://doc.rust-lang.org/reference/names/preludes.html#the-no_std-attribute) — プレリュードから `std` を削除します。
  - [`no_implicit_prelude`](https://doc.rust-lang.org/reference/names/preludes.html#the-no_implicit_prelude-attribute) — モジュール内のプレリュードルックアップを無効にします。
- _モジュール_
  -[`path`](https://doc.rust-lang.org/reference/items/modules.html#the-path-attribute) — モジュールのファイル名を指定します。
- _制限_
  - [`recursion_limit`](https://doc.rust-lang.org/reference/attributes/limits.html#the-recursion_limit-attribute) — 特定のコンパイル時の最大再帰制限を設定します。
  - [`type_length_limit`](https://doc.rust-lang.org/reference/attributes/limits.html#the-type_length_limit-attribute) — ポリモーフィック型の最大サイズを設定します。
- _ランタイム_
  - [`panic_handler`](https://doc.rust-lang.org/reference/runtime.html#the-panic_handler-attribute) — パニックを処理する機能を設定します。
  - [`global_allocator`](https://doc.rust-lang.org/reference/runtime.html#the-global_allocator-attribute) — グローバルメモリアロケータを設定します。
  - [`windows_subsystem`](https://doc.rust-lang.org/reference/runtime.html#the-windows_subsystem-attribute) — リンクする Windows サブシステムを指定します。
- _フューチャー_
  - `feature` — 不安定または実験的なコンパイラ機能を有効にするために使用されます。
- _型システム_
  - [`non_exehaustive`](https://doc.rust-lang.org/reference/attributes/type_system.html#the-non_exhaustive-attribute) — タイプに将来さらにフィールド/バリアントが追加されることを示します。

### ツール属性

- _`rustfmt`_
  - [`rustfmt::skip`](https://github.com/rust-lang/rustfmt#tips) – `rustfmt` ツールに次の要素をフォーマットしないように指示します。
  - [`rustfmt::skip::macros`](https://github.com/rust-lang/rustfmt#tips) – `rustfmt` ツールにマクロをフォーマットしないように指示します。
  - [`rustfmt::skip::attributes`](https://github.com/rust-lang/rustfmt#tips) – `rustfmt` ツールに属性をフォーマットしないように指示します。
- _`clippy`_
  - [`clippy::cyclomatic_complexity`]

## Tips

### 条件付きコンパイル

- [⇣：構成オプションの設定](#set-configuration-options)
- [⇣：`cfg` 属性](#the-cfg-attribute)
- [⇣：`cfg_attr` 属性](#the-cfg_attr-attribute)
- [⇣：`cfg!` マクロ](#the-cfg-macro)

#### 構成オプションの設定 {#set-configuration-options}

どの構成オプションが設定されるかは、クレートのコンパイル中に**静的**に決定されます。特定のオプションは、コンパイルに関するデータに基づいてコンパイラが設定します。他のオプションは任意に設定され、コードの外部でコンパイラに渡される入力に基づいて設定されます。コンパイル中のクレートのソースコード内から構成オプションを設定することはできません（`cfg!` マクロは読み取り専用であり、構成オプションの値を変更するものではありません）。

- `target_arch` — ターゲットの CPU アーキテクチャで一度設定された Key-Value オプション。

  値の例：

  - `"x86"`
  - `"x86_64"`
  - `"mips"`
  - `"powerpc"`
  - `"powerpc64"`
  - `"arm"`
  - `"aarch64"`

- `target_feature` — 現在のコンパイルターゲットで使用可能な各プラットフォーム機能に設定された Key-Value オプション。 

  値の例：

  - `"avx"`
  - `"avx2"`
  - `"crt-static"`
  - `"rdrand"`
  - `"sse"`
  - `"sse2"`
  - `"sse4.1"`

- `target_os` — ターゲットのオペレーティングシステムで一度設定された Key-Value オプション。

  値の例：

  - `"windows"`
  - `"macos"`
  - `"ios"`
  - `"linux"`
  - `"android"`
  - `"freebsd"`
  - `"dragonfly"`
  - `"openbsd"`
  - `"netbsd"`

- `target_family` — ターゲットが一般的に分類されるオペレーティングシステムまたはアーキテクチャのファミリなど、ターゲットのより一般的な説明を提供する Key-Value オプション。

  値の例：

  - `"unix"`
  - `"windows"`
  - `"wasm"`

- `unix`, `windows` — `unix` は `target_family = "unix"` が設定されている場合に設定され、`windows` は `target_family = "windows"` が設定されている場合に設定されます。

- `target_env` — 使用する ABI または libc に関する情報でターゲットプラットフォームに関するさらに明確な情報が設定された Key-Value オプションセット。

  値の例：

  - `""`
  - `"gnu"`
  - `"msvc"`
  - `"sgx"`

- `target_endian` — ターゲットのCPUのエンディアンに応じて `"little"` か `"big"` のどちらかの値を一度に設定します。

- `target_pointer_width` — Key-Value オプションは、ターゲットのポインタ幅をビット単位で一度だけ設定します。

  値の例：

  - `"16"`
  - `"32"`
  - `"64"`

- `target_vendor` — ターゲットのベンダで一度だけ設定された Key-Value オプション。

  値の例：

  - `"apple"`
  - `"fortanix"`
  - `"pc"`
  - `"unknown"`

- `test` — テストハーネスのコンパイル時に有効になります。`--test` フラグを用いて `rustc` が実行されます。

- `debug_assertions` — 最適化なしでコンパイルする場合、デフォルトで有効になります。これは、開発では追加のデバッグコードを有効にするために使用できますが、本番環境では使用できません。

- `proc_macro` — コンパイルされるクレートが `proc_macro` クレートタイプでコンパイルされるときに設定されます。

#### 条件付きコンパイルの形式；`cfg` 属性 {#the-cfg-attribute}

```rust title="例：cfg 属性の使用"
// この関数は、macOS 用にコンパイルするときにのみビルドに含まれます
#[cfg(target_os = "macos")]
fn macos_only() {
    // ...
}

// この関数は、foo または bar のいずれかが定義されている場合にのみ含まれます
#[cfg(any(foo, bar))]
fn needs_foo_or_bar() {
    // ...
}

// この関数は、32ビットアーキテクチャを備えたunixishOS用にコンパイルする場合にのみ含まれます
#[cfg(all(unix, target_pointer_width = "32"))]
fn on_32bit_unix() {
    // ...
}

// この関数は、foo が定義されていない場合にのみ含まれます
#[cfg(not(foo))]
fn needs_not_foo() {
  // ...
}
```

#### 条件付きコンパイルの形式；`cfg_attr` 属性 {#the-cfg_attr-attribute}

`cfg_attr` 属性は、条件付きの `cfg` 属性です。

```rust title="例1：cfg_attr 属性の使用"
#[cfg_attr(target_os = "linux", path = "linux.rs")]
#[cfg_attr(windows, path = "windows.rs")]
mod os;
```

```rust title="例2：cfg_attr 属性の使用"
#[cfg_attr(feature = "magic", sparkles, crackles)]
fn bewitched() {}

// `magic` 機能フラグが有効になっている場合、上記は次のように展開されます。
#[sparkles]
#[crackles]
fn bewitched() {}
```

#### `cfg!` マクロ {#the-cfg-macro}

組み込みの `cfg!` マクロは、単一の構成述語を取り込んで、述語が真の場合は `true` リテラルに評価され、偽の場合は `false` のリテラルに評価されます。

```rust title="例：cfg! マクロの使用"
let machine_kind = if cfg!(unix) {
    "unix"
} else if cfg!(windows) {
    "windows"
} else {
    "unknown"
};

println!("I'm running on a {} machine!", machine_kind);
```

### トレイトの自動実装

`derive` 属性を使用すると、任意のデータ構造－－構造体または列挙型－－に対してトレイトを自動実装できます。

```rust title="例：一般的なトレイトの自動実装"
#[derive(Copy, Clone, Debug, PartialEq)]
struct Point {
    x: f64,
    y: f64,
}
```

:::info `#[derive(...)]` で指定可能なプリリュードに含まれるトレイト：

- [`Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html)
- [`Clone`](https://doc.rust-lang.org/std/clone/trait.Clone.html)
- [`Debug`](https://doc.rust-lang.org/std/fmt/trait.Debug.html)

  Rust 標準の `?` フォーマットを自動実装します。

- [`Default`](https://doc.rust-lang.org/std/default/trait.Default.html)

  `Default` トレイトは、全てのフィールドが `Default` を実装する型からのみ導出できます。

- [`PartialEq`](https://doc.rust-lang.org/std/cmp/trait.PartialEq.html)

  **反同値関係**の決定方法を自動実装します。これは、`==` 及び `!=` による演算の処理方法の定義です。

  構造体から導出した場合は、全てのフィールドが等しい場合に同値であり、1つでも異なるフィールドがある場合は同値ではありません
  
  列挙型から導出した場合は、同じバリアントの場合に同値であり、異なるバリアント場合は同値ではありません。

  - [`Eq`](https://doc.rust-lang.org/std/cmp/trait.Eq.html)

    **同値**関係の決定方法を自動実装します。これは、`==` 及び `!=` による演算の処理方法の定義です。

- [`PartialOrd`](https://doc.rust-lang.org/std/cmp/trait.PartialOrd.html)

  半順序関係の決定方法を自動実装します。これは、 `<`、`>`、`<=`、`>=` による演算の処理方法の定義です。

  構造体から導出した場合は、構造体のメンバーの上から下への宣言順序に基づいて辞書式順序が生成されます。

  列挙型から導出した場合は、バリアントは上から下への判別順序で並べ替えられます。

  - [`Ord`](https://doc.rust-lang.org/std/cmp/trait.Ord.html)

    全順序関係の決定方法を自動実装します。

    構造体から導出した場合、構造体のメンバーの上から下への宣言順序に基づいて辞書式順序が生成されます。

    列挙型から導出した場合、バリアントは上から下への判別順序で並べ替えられます。これは、上部のバリアントが下部のバリアントよりも少ないことを意味します。

:::  

### lint チェックの制御

lint チェックは、到達不能コードや省略されたドキュメントなど、潜在的に望ましくないコーディングパターンに名前を付けます。 _lint_ 属性は、[MetaListPaths](https://doc.rust-lang.org/reference/attributes.html#meta-item-attribute-syntax) 構文を使用して、属性が適用されるエンティティの lint レベルを変更するために、lint 名のリストを指定することを _許可_ (`allow`)、_警告_ (`warn`)、_拒否_ (`dany`)、および _禁止_ (`forbid`) します。`forbid` 以外は、重ねがけで前の設定をオーバーライドすることができます。

- `allow(C)` は `C` のチェックをオーバーライドして、違反が報告されないようにします。
- `warn(C)` は、`C` の違反について警告しますが、コンパイルを続行します。
- `deny(C)` は、`C` の違反に遭遇した後、エラーを通知します。
- `forbid(C)` は `deny(C)` と同じですが、後でリントレベルをオーバーライドすることも禁止します。

:::info lint 一覧

上記の `C` の部分で指定可能な lint の一覧は、「[Lint listing - The rust book](https://doc.rust-lang.org/rustc/lints/listing/index.html)」の各サブページを参照して下さい。

:::

```rust title="例：lint レベルの変更"
pub mod m1 {
    // 欠落しているドキュメントはここでは無視されます
    #[allow(missing_docs)]
    pub fn undocumented_one() -> i32 { 1 }

    // ドキュメントがない場合は、ここで警告が表示されます
    #[warn(missing_docs)]
    pub fn undocumented_too() -> i32 { 2 }

    // ドキュメントがない場合は、ここでエラーが発生します
    #[deny(missing_docs)]
    pub fn undocumented_end() -> i32 { 3 }
}
```

#### lint グループ

関連する lint のレベルを一緒に調整できるように、lint を名前付きグループに編成することができます。名前付きグループを使用することは、そのグループ内の lint をリストすることと同じです。

```rust title="例：lint グループ"
// これにより、`unused` グループのすべてのリントが許可されます。
#[allow(unused)]
// これは、unused グループの `unused_must_use` lintをオーバーライドして拒否します。
#[deny(unused_must_use)]
fn example() {
    // `unused_variables` lint は `unused` グループにあるため、これは警告を生成しません。
    let x = 1;
    // 結果が未使用であり、`unused_must_use` が `deny` としてマークされているため、これはエラーを生成します。
    std::fs::remove_file("some_file"); // ERROR: unused `Result` that must be used
}
```

:::info lint グループ一覧

- `warning` — 警告を発行するように設定されているすべての lint
- `future-incompatible` — 将来の互換性の問題があるコードを検出するリント
- `nonstandard-style` — 標準の命名規則への違反
- `rust-2018-compatibility` — 2015年版から2018年にコードを移行するために使用される lint
- `rust-2018-idioms` — Rust 2018 の慣用的な機能に向けてあなたを微調整するための lint
- `rust-2021-compatibility` — lint は2018年版から2021年にコードを移行するために使用されました
- `unused`— 宣言されているが使用されていないもの、または過剰な構文を検出する lint

→詳細は「[Lint Groups - The rustc book](https://doc.rust-lang.org/rustc/lints/groups.html)」を参照してください。

:::

#### ツール lint 属性

ツール lint を使用すると、スコープ付き lint を使用して、特定のツール––`rustc` は現在、[`clippy`](https://github.com/rust-lang/rust-clippy) と [`rustdoc`](https://doc.rust-lang.org/rustdoc/lints.html) のツール lint を認識しています––の lint を許可 (`allow`)、警告 (`warn`)、拒否 (`deny`)、または禁止 (`forbid`) できます。

ツール lint は、関連するツールがアクティブな場合にのみチェックされます。 `allow` などの lint 属性が存在しないツール lint を参照している場合、コンパイラは、ツールを使用するまで存在しない lint について警告しません。それ以外の点では、通常の lint 属性と同じように機能します。

```rust title="例：Clippy のツール lint 属性を使用"
// `pedantic` の clippy lint グループ全体を警告するように設定します
#![warn(clippy::pedantic)]
// `filter_map` clippy lint からの警告抑止
#![allow(clippy::filter_map)]

fn main() {
    // ...
}

// silence the `cmp_nan` clippy lint just for this function
#[allow(clippy::cmp_nan)]
fn foo() {
    // ...
}
```

### アイテムを「非推奨」としてマークする

`deprecated` 属性を使うと、アイテムを「非推奨」としてマークできます。`deprecated` 属性は、任意のアイテム（トレイト、列挙型バリアント、構造体フィールド、外部ブロックアイテム、またはマクロ定義）に適用できます。トレイト実装項目には適用できません。モジュールや実装などの他のアイテムを含むアイテムに適用されると、すべての子アイテムは非推奨属性を継承します。

`deprecated` 属性にはいくつかの形式があります：

- `deprecated` — 一般的なメッセージを発行します。
- `deprecated = "<message>"` – 指定された文字列を非推奨メッセージに含めます：
  - `since` — アイテムが非推奨になったときのバージョン番号を指定します。 `rustc` は現在文字列を解釈しませんが、[Clippy](https://github.com/rust-lang/rust-clippy) などの外部ツールが値の有効性をチェックする場合があります。
  - `note` — 非推奨メッセージに含める必要のある文字列を指定します。これは通常、非推奨と推奨される代替案についての説明を提供するために使用されます。

```rust
#[deprecated(since = "5.2", note = "foo was rarely used. Users should instead use bar")]
pub fn foo() {}

pub fn bar() {}
```

[RFC](https://github.com/rust-lang/rfcs/blob/master/text/1270-deprecation.md) には、動機と詳細が含まれています。

### 値が使用されることを強制する

`must_use` 属性は、値が「使用されていない」場合に診断警告を発行するために使用されます。これは、ユーザー定義の複合型（構造体、列挙型、および共用体）、関数、およびトレイトに適用できます。

一方、`unused_must_use` は、「`must_used` が付与されたアイテムの値が使用されていないこと」を示す lint チェック項目です。

`must_use` 属性には `#[must_use = "examplemessage"]` などの [MetaNameValueStr](https://doc.rust-lang.org/reference/attributes.html#meta-item-attribute-syntax) 構文を使用したメッセージを含めることができます。警告と一緒にメッセージが表示されます。

- ユーザー定義の複合型で使用される場合、式ステートメントの式がその型を持っていると、`unused_must_use` lint に違反します。

  ```rust 
  #[must_use]
  struct MustUse {
      // some fields
  }
  
  // `unused_must_use` lint に違反します。
  MustUse::new();
  ```

- 関数で使用するときに、式ステートメントの式がその関数の呼び出し式である場合、`unused_must_use` lint に違反します。

  ```rust 
  #[must_use]
  fn five() -> i32 { 5i32 }
  
  // `unused_must_use` lint に違反します。
  five();
  ```

- トレイト宣言で使用される場合、そのトレイトの `impl trait` を返す関数への式ステートメントの呼び出し式は、`unused_must_use` lintに違反します。

  ```rust 
  #[must_use]
  trait Critical {}
  impl Critical for i32 {}
  
  fn get_critical() -> impl Critical {
      4i32
  }
  
  // `unused_must_use` lint に違反します。
  get_critical();
  ```

- トレイト宣言の関数で使用される場合、この動作は、呼び出し式がトレイトの実装からの関数である場合にも適用されます。

  ```rust 
  trait Trait {
      #[must_use]
      fn use_me(&self) -> i32;
  }
  
  impl Trait for i32 {
      fn use_me(&self) -> i32 { 0i32 }
  }
  
  // `unused_must_use` lint に違反します。
  5i32.use_me();
  ```

- トレイト実装の関数で使用される場合、属性は何もしません。

:::note Note

値を含む些細な _no-op_ 式は、lint に違反しません。たとえば、`Drop` を実装しない型で値をラップしてからその型を使用しない場合や、使用されないブロック式の最終式になる場合があります。

```rust 
#[must_use]
fn five() -> i32 { 5i32 }

// これらはいずれも `unused_must_use` lint に違反していません。
(five(),);
Some(five());
{ five() };
if true { five() } else { 0i32 };
match true {
    _ => five()
};
```

:::

:::note Note

使用する必要のある値が意図的に破棄される場合は、パターンが `_` の `let` ステートメントを使用するのが慣用的です。

```rust 
#[must_use]
fn five() -> i32 { 5i32 }

// `used_must_uselint` に違反しません。
let _ = five();
```

:::
