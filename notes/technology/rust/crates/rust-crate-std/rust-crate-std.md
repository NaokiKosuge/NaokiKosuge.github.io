---
sidebar_position: 0
slug: /rust-crate-std
sidebar_label: std
---

# 【Rust】標準ライブラリ `std`

:::note 公式ドキュメント

このドキュメントは、大半が https://doc.rust-lang.org/std/index.html の内容を日本語で記載したものです。

:::

<details>
<summary>標準ライブラリのツアー</summary>

**<u>コンテナとコレクション</u>**

[`option`](https://doc.rust-lang.org/std/option/index.html) モジュールと [`result`](https://doc.rust-lang.org/std/result/index.html) モジュールは、オプションのエラー処理の型である [`Option<T>`](https://doc.rust-lang.org/std/option/enum.Option.html) と [`Result<T, E>`](https://doc.rust-lang.org/std/result/enum.Result.html) を定義します。 [`iter`](https://doc.rust-lang.org/std/iter/index.html) モジュールは、Rust のイテレータートレイトである [`Iterator`](https://doc.rust-lang.org/std/iter/trait.Iterator.html) を定義します。これは、[`for`](https://doc.rust-lang.org/book/ch03-05-control-flow.html#looping-through-a-collection-with-for) ループと連携してコレクションにアクセスします。

標準ライブラリは、メモリの連続した領域を処理するための3つの一般的な方法を公開しています：

- [`Vec<T>`](https://doc.rust-lang.org/std/vec/struct.Vec.html) - 実行時にサイズ変更可能なヒープ割り当てベクトル。
- [`[T; N]`](https://doc.rust-lang.org/1.55.0/std/primitive.array.html) - コンパイル時に固定サイズのインライン配列。
- [`[T]`](https://doc.rust-lang.org/1.55.0/std/primitive.slice.html) - ヒープに割り当てられているかどうかに関係なく、他の種類の連続したストレージに動的にサイズ設定されたスライス。

**スライス**は、ある種のポインターを介してのみ処理できるため、次のような多くのフレーバーがあります：

- `&[T]` - 共有スライス
- `&mut [T]` - 可変スライス
- [`Box<[T]>`](https://doc.rust-lang.org/std/boxed/index.html) - 所有スライス

UTF-8 文字列スライスである [`str`](https://doc.rust-lang.org/1.55.0/std/primitive.str.html) はプリミティブ型であり、標準ライブラリはそのための多くのメソッドを定義しています。 Rust の [`str`](https://doc.rust-lang.org/1.55.0/std/primitive.str.html) は通常、不変の参照としてアクセスされます：`&str`。文字列の作成と変更には、所有する [`String`](https://doc.rust-lang.org/std/string/struct.String.html) を使用します。

文字列に変換するには、[`format!`](https://doc.rust-lang.org/std/macro.format.html) マクロを使用し、文字列からの変換には、[`FromStr`](https://doc.rust-lang.org/std/str/trait.FromStr.html) トレイトを使用します。

データは、<q>参照カウントボックス</q> である [`Rc`](https://doc.rust-lang.org/std/rc/struct.Rc.html) 型に配置することで共有でき、さらに　[`Cell`](https://doc.rust-lang.org/std/cell/struct.Cell.html) または [`RefCell`](https://doc.rust-lang.org/std/cell/struct.RefCell.html) に含まれている場合は、変更および共有できます。同様に、並行設定では、同じ効果を得るために、<q>原子参照カウントボックス</q> である [`Arc`](https://doc.rust-lang.org/std/sync/struct.Arc.html) を [`Mutex`](https://doc.rust-lang.org/std/sync/struct.Mutex.html) とペアにするのが一般的です。

[`collections`](https://doc.rust-lang.org/std/collections/index.html) モジュールは、マップ、セット、リンクリスト、および一般的な [`HashMap<K, V>`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) を含むその他の一般的なコレクション型を定義します。

---

**<u>プラットフォームの抽象化と I/O</u>**

基本的なデータ型に加えて、標準ライブラリは主に、一般的なプラットフォーム、特にWindowsとUnixの派生物の違いを抽象化することに関係しています。

ファイル、TCP、UDP などの一般的な型の I/O は、[`io`](https://doc.rust-lang.org/std/io/index.html)、[`fs`](https://doc.rust-lang.org/std/fs/index.html)、および [`net`](https://doc.rust-lang.org/std/net/index.html) モジュールで定義されています。

[`thread`](https://doc.rust-lang.org/std/thread/index.html) モジュールには、Rust のスレッド抽象化が含まれています。[`sync`](https://doc.rust-lang.org/std/sync/index.html) には、メッセージパッシング用のチャネル型を含む [`atomic`](https://doc.rust-lang.org/std/sync/atomic/index.html) や [`mpsc`](https://doc.rust-lang.org/std/sync/mpsc/index.html) など、さらにプリミティブな共有メモリ型が含まれています。

</details>

## Prelude

> Rust には、標準ライブラリにさまざまなものが含まれています。ただし、使用したものをすべて手動でインポートする必要がある場合は、非常に冗長になります。しかし、プログラムが決して使用しない多くのものをインポートすることも良くありません。バランスをとる必要があります。
> 
> Prelude は、Rust がすべての Rust プログラムに自動的にインポートするもののリストです。可能な限り小さく保ち、ほとんどすべての Rust プログラムで使用されるもの、特に特性に焦点を当てています。

即ち、Prelude とは、`use` を用いて明示的にインポートする必要のない、標準ライブラリのアイテムです。

<details>
<summary>Prelude 一覧</summary>

- `std::marker::{Copy, Send, Sized, Sync, Unpin}`——型の基本的なプロパティを示すマーカートレイト
- `std::ops::{Drop, Fn, FnMut, FnOnce}`——デストラクタとオーバーロードの両方のさまざまな操作。
- `std::mem::drop`——値を明示的に削除するための便利な関数。
- `std::boxed::Box`——ヒープに値を割り当てる方法。
- `std::borrow::ToOwned`——借用型から所有型を作成するためのジェネリックメソッドである `to_owned` を定義する変換トレイト。
- `std::clone::Clone`——`clone` を定義するユビキタストレイト、値のコピーを生成する方法。
- `std::cmp::{PartialEq, PartialOrd, Eq, Ord}`——比較演算子を実装し、特性の範囲でよく見られる比較トレイト。
- `std::convert::{AsRef, AsMut, Into, From}`——オーバーロードされたメソッドを作成するために精通したAPI作成者によって使用される一般的な変換
- `std::default::Default`——デフォルト値を持つ型。
- `std::iter::{Iterator, Extend, IntoIterator, DoubleEndedIterator, ExactSizeIterator}`——さまざまな種類のイテレータ。
- `std::option::Option::{self, Some, None}`——値の有無を表す型。このタイプは非常に一般的に使用されているため、そのバリアントもエクスポートされます。
- `std::result::Result::{self, Ok, Err}`——成功または失敗する可能性のある関数の型。`Option` と同様に、そのバリアントもエクスポートされます。
- `std::string::{String, ToString}`——ヒープに割り当てられた文字列。
- `std::vec::Vec`——成長可能なヒープ割り当てベクタ。
- 【rust_2021 限定】`std::convert::{TryFrom, TryInto}`
- 【rust_2021 限定】`std::iter::FromIterator`

</details>

## プリミティブ型

| プリミティブ型 | 説明 |
| --- | --- |
| [`array`](https://doc.rust-lang.org/std/primitive.array.html) | `[T; N]` で示される固定サイズの配列。 |
| [`bool`](https://doc.rust-lang.org/std/primitive.bool.html) | ブール型。 |
| [`char`](https://doc.rust-lang.org/std/primitive.char.html) | 文字型。 |
| [`f32`](https://doc.rust-lang.org/std/primitive.f32.html) | 32ビット浮動小数点型（具体的には、IEEE 754-2008で定義されている「binary32」型）。 |
| [`f64`](https://doc.rust-lang.org/std/primitive.f64.html) | 64ビット浮動小数点型（具体的には、IEEE 754-2008で定義されている「binary64」型）。 |
| [`fn`](https://doc.rust-lang.org/std/primitive.fn.html) | `fn（usize）-> bool` のような関数ポインタ。 |
| [`i8`](https://doc.rust-lang.org/std/primitive.i8.html) | 8ビットの符号付き整数型。 |
| [`i16`](https://doc.rust-lang.org/std/primitive.i16.html) | 16ビットの符号付き整数型。 |
| [`i32`](https://doc.rust-lang.org/std/primitive.i32.html) | 32ビットの符号付き整数型。 |
| [`i64`](https://doc.rust-lang.org/std/primitive.i64.html) | 64ビットの符号付き整数型。 |
| [`i128`](https://doc.rust-lang.org/std/primitive.i128.html) | 128ビットの符号付き整数型。 |
| [`isize`](https://doc.rust-lang.org/std/primitive.isize.html) | ポインタサイズの符号付き整数型。 |
| [`pointer`](https://doc.rust-lang.org/std/primitive.pointer.html) | 生の安全でないポインタ、`*const T`、および `*mut T`。 |
| [`reference`](https://doc.rust-lang.org/std/primitive.reference.html) | 共有および変更可能な参照。 |
| [`slice`](https://doc.rust-lang.org/std/primitive.slice.html) | 連続したシーケンスへの動的なサイズのビュー（`[T]`）。ここで連続しているとは、すべての要素が隣接する要素から同じ距離になるように要素が配置されていることを意味します。 |
| [`str`](https://doc.rust-lang.org/std/primitive.str.html) | 文字列スライス。 |
| [`tuple`](https://doc.rust-lang.org/std/primitive.tuple.html) | 有限の異種シーケンス `(T, U, ..)`。 |
| [`u8`](https://doc.rust-lang.org/std/primitive.u8.html) | 8ビットの符号なし整数型。 |
| [`u16`](https://doc.rust-lang.org/std/primitive.u16.html) | 16ビットの符号なし整数型。 |
| [`u32`](https://doc.rust-lang.org/std/primitive.u32.html) | 32ビットの符号なし整数型。 |
| [`u64`](https://doc.rust-lang.org/std/primitive.u64.html) | 64ビットの符号なし整数型。 |
| [`u128`](https://doc.rust-lang.org/std/primitive.u128.html) | 128ビットの符号なし整数型。 |
| [`unit`](https://doc.rust-lang.org/std/primitive.unit.html) | `()` 型。「ユニット」とも呼ばれます。 |
| [`usize`](https://doc.rust-lang.org/std/primitive.usize.html) | ポインタサイズの符号なし整数型。 |

## モジュール（`std::*`）

| モジュール | 説明 |
| --- | --- |
| [`alloc`](https://doc.rust-lang.org/std/alloc/index.html) | メモリ割り当てAPI。 |
| [`any`](https://doc.rust-lang.org/std/any/index.html) | このモジュールは `Any` トレイトを実装します。これにより、ランタイムリフレクションを通じて `'static` 型の動的型付けが可能になります。 |
| [`array`](https://doc.rust-lang.org/std/array/index.html) | 固定長配列のヘルパー関数と型。 |
| [`ascii`](https://doc.rust-lang.org/std/ascii/index.html) | ASCII 文字列および文字の操作。 |
| [`borrow`](https://doc.rust-lang.org/std/borrow/index.html) | 借用したデータを操作するためのモジュール。 |
| [`boxed`](https://doc.rust-lang.org/std/boxed/index.html) | ヒープ割り当て用のポインター型。 |
| [`cell`](https://doc.rust-lang.org/std/cell/index.html) | 共有可能な可変コンテナ。 |
| [`char`](https://doc.rust-lang.org/std/char/index.html) | 文字型。 |
| [`clone`](https://doc.rust-lang.org/std/clone/index.html) | 「暗黙的にコピー」できないタイプのクローン特性。 |
| [`cmp`](https://doc.rust-lang.org/std/cmp/index.html) | 注文と比較のための機能。 |
| [`collections`](https://doc.rust-lang.org/std/collections/index.html) | コレクション型。 |
| [`convert`](https://doc.rust-lang.org/std/convert/index.html) | 型間の変換のトレイト。 |
| [`default`](https://doc.rust-lang.org/std/default/index.html) | 意味のあるデフォルト値を持つ可能性のある型のデフォルトトレイト。 |
| [`env`](https://doc.rust-lang.org/std/env/index.html) | プロセスの環境の検査と操作。 |
| [`error`](https://doc.rust-lang.org/std/error/index.html) | エラーを処理するためのトレイト。 |
| [`f32`](https://doc.rust-lang.org/std/f32/index.html) | `f32` 単精度浮動小数点型に固有の定数。 |
| [`f64`](https://doc.rust-lang.org/std/f64/index.html) | `f64` 倍精度浮動小数点型に固有の定数。 |
| [`ffi`](https://doc.rust-lang.org/std/ffi/index.html) | FFIバインディングに関連するユーティリティ。 |
| [`fmt`](https://doc.rust-lang.org/std/fmt/index.html) | `String` をフォーマットおよび印刷するためのユーティリティ。 |
| [`fs`](https://doc.rust-lang.org/std/fs/index.html) | ファイルシステムの操作。 |
| [`future`](https://doc.rust-lang.org/std/future/index.html) | 非同期値。 |
| [`hash`](https://doc.rust-lang.org/std/hash/index.html) | 一般的なハッシュのサポート。 |
| [`hint`](https://doc.rust-lang.org/std/hint/index.html) | コードの発行方法または最適化方法に影響を与えるコンパイラーへのヒント。ヒントは、コンパイル時または実行時です。 |
| [`io`](https://doc.rust-lang.org/std/io/index.html) | コア I/O 機能のトレイト、ヘルパー、および型定義。 |
| [`iter`](https://doc.rust-lang.org/std/iter/index.html) | 構成可能な外部イテレーション。 |
| [`marker`](https://doc.rust-lang.org/std/marker/index.html) | タイプの基本的なプロパティを表すプリミティブトレイトと型。 |
| [`mem`](https://doc.rust-lang.org/std/mem/index.html) | メモリを扱うための基本的な機能。 |
| [`net`](https://doc.rust-lang.org/std/net/index.html) | TCP/UDP 通信用のネットワークプリミティブ。 |
| [`num`](https://doc.rust-lang.org/std/num/index.html) | 数値の追加機能。 |
| [`ops`](https://doc.rust-lang.org/std/ops/index.html) | オーバーロード可能な演算子。 |
| [`option`](https://doc.rust-lang.org/std/option/index.html) | オプションの値。 |
| [`os`](https://doc.rust-lang.org/std/os/index.html) | OS固有の機能。 |
| [`panic`](https://doc.rust-lang.org/std/panic/index.html) | 標準ライブラリでのパニックサポート。 |
| [`path`](https://doc.rust-lang.org/std/path/index.html) | クロスプラットフォームのパス操作。 |
| [`pin`](https://doc.rust-lang.org/std/pin/index.html) | データをメモリ内のその場所に固定する型。 |
| [`prelude`](https://doc.rust-lang.org/std/prelude/index.html) | Rust の Prelude|
| [`primitive`](https://doc.rust-lang.org/std/primitive/index.html) | このモジュールは、プリミティブ型を再エクスポートして、他の宣言された型によってシャドウされる可能性のない使用を許可します。 |
| [`process`](https://doc.rust-lang.org/std/process/index.html) | プロセスを操作するためのモジュール。 |
| [`ptr`](https://doc.rust-lang.org/std/ptr/index.html) | raw ポインタを介してメモリを手動で管理します。 |
| [`rc`](https://doc.rust-lang.org/std/rc/index.html) | シングルスレッドの参照カウントポインタ。「Rc」は「Reference Counted」の略です。 |
| [`result`](https://doc.rust-lang.org/std/result/index.html) | `Result` 型でのエラー処理。 |
| [`slice`](https://doc.rust-lang.org/std/slice/index.html) | 連続したシーケンスへの動的なサイズのビュー、`[T]`。 |
| [`str`](https://doc.rust-lang.org/std/str/index.html) | Unicode 文字列スライス。 |
| [`string`](https://doc.rust-lang.org/std/string/index.html) | UTF-8 でエンコードされた拡張可能な文字列。 |
| [`sync`](https://doc.rust-lang.org/std/sync/index.html) | 便利な同期プリミティブ。 |
| [`task`](https://doc.rust-lang.org/std/task/index.html) | 非同期タスクを操作するための型とトレイト。 |
| [`thread`](https://doc.rust-lang.org/std/thread/index.html) | ネイティブスレッド。 |
| [`time`](https://doc.rust-lang.org/std/time/index.html) | 時間的定量化。 |
| [`vec`](https://doc.rust-lang.org/std/vec/index.html) | `Vec<T>` と記述された、ヒープに割り当てられたコンテンツを持つ連続した拡張可能な配列型。 |

## 標準マクロ

| マクロ | 説明 |
| --- | --- |
| [`assert`](https://doc.rust-lang.org/std/macro.assert.html) | 実行時にブール式が真であることを表明します。 |
| [`assert_eq`](https://doc.rust-lang.org/std/macro.assert_eq.html) | 2つの式が互いに等しいことを表明します（[`PartialEq`](https://doc.rust-lang.org/std/cmp/trait.PartialEq.html) を使用）。 |
| [`assert_ne`](https://doc.rust-lang.org/std/macro.assert_ne.html) | 2つの式が互いに等しくないことを表明します（[`PartialEq`](https://doc.rust-lang.org/std/cmp/trait.PartialEq.html) を使用）。 |
| [`cfg`](https://doc.rust-lang.org/std/macro.cfg.html) | コンパイル時に構成フラグのブール値の組み合わせを評価します。 |
| [`column`](https://doc.rust-lang.org/std/macro.column.html) | 呼び出された列番号に展開されます。 |
| [`compile_error`](https://doc.rust-lang.org/std/macro.compile_error.html) | 発生すると、指定されたエラーメッセージでコンパイルが失敗します。 |
| [`concat`](https://doc.rust-lang.org/std/macro.concat.html) | リテラルを静的な文字列スライスに連結します。 |
| [`dbg`](https://doc.rust-lang.org/std/macro.dbg.html) | 迅速でダーティなデバッグのために、指定された式の値を出力して返します。 |
| [`debug_assert`](https://doc.rust-lang.org/std/macro.debug_assert.html) | 実行時にブール式が真であることを表明します。 |
| [`debug_assert_eq`](https://doc.rust-lang.org/std/macro.debug_assert_eq.html) | 2つの式が互いに等しいことを表明します。 |
| [`debug_assert_ne`](https://doc.rust-lang.org/std/macro.debug_assert_ne.html) | 2つの式が互いに等しくないことを表明します。 |
| [`env`](https://doc.rust-lang.org/std/macro.env.html) | コンパイル時に環境変数を検査します。 |
| [`eprint`](https://doc.rust-lang.org/std/macro.eprint.html) | 標準エラーに出力します。 |
| [`eprintln`](https://doc.rust-lang.org/std/macro.eprintln.html) | 改行を使用して、標準エラーに出力します。 |
| [`file`](https://doc.rust-lang.org/std/macro.file.html) | 呼び出されたファイル名に展開されます。 |
| [`format`](https://doc.rust-lang.org/std/macro.format.html) | ランタイム式の補間を使用して文字列を作成します。 |
| [`format_args`](https://doc.rust-lang.org/std/macro.format_args.html) | 他の文字列フォーマットマクロのパラメータを作成します。 |
| [`include`](https://doc.rust-lang.org/std/macro.include.html) | コンテキストに応じて、ファイルを式またはアイテムとして解析します。 |
| [`include_bytes`](https://doc.rust-lang.org/std/macro.include_bytes.html) | バイト配列への参照としてファイルを含めます。 |
| [`include_str`](https://doc.rust-lang.org/std/macro.include_str.html) | UTF-8でエンコードされたファイルを文字列として含めます。 |
| [`is_x86_feature_detected`](https://doc.rust-lang.org/std/macro.is_x86_feature_detected.html) | CPU機能がx86 / x86-64プラットフォームで使用可能かどうかを実行時にテストするマクロ。 |
| [`line`](https://doc.rust-lang.org/std/macro.line.html) | 呼び出された行番号に展開されます。 |
| [`matches`](https://doc.rust-lang.org/std/macro.matches.html) | 指定された式が指定されたパターンのいずれかに一致するかどうかを返します。 |
| [`module_path`](https://doc.rust-lang.org/std/macro.module_path.html) | 現在のモジュールパスを表す文字列に展開されます。 |
| [`option_env`](https://doc.rust-lang.org/std/macro.option_env.html) | オプションで、コンパイル時に環境変数を検査します。 |
| [`panic`](https://doc.rust-lang.org/std/macro.panic.html) | 現在のスレッドをパニックにします。 |
| [`print`](https://doc.rust-lang.org/std/macro.print.html) | 標準出力に出力します。 |
| [`println`](https://doc.rust-lang.org/std/macro.println.html) | 改行を使用して、標準出力に出力します。 |
| [`stringify`](https://doc.rust-lang.org/std/macro.stringify.html) | その引数を文字列化します。 |
| [`thread_local`](https://doc.rust-lang.org/std/macro.thread_local.html) | 型 [`std::thread::LocalKey`](https://doc.rust-lang.org/std/thread/struct.LocalKey.html) の新しいスレッドローカルストレージキーを宣言します。 |
| [`todo`](https://doc.rust-lang.org/std/macro.todo.html) | 未完成のコードを示します。 |
| [`unimplemented`](https://doc.rust-lang.org/std/macro.unimplemented.html) | 「not implemented」というメッセージでパニックになり、実装されていないコードを示します。 |
| [`unreachable`](https://doc.rust-lang.org/std/macro.unreachable.html) | 到達不能コードを示します。 |
| [`vec`](https://doc.rust-lang.org/std/macro.vec.html) | 引数を含む [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) を作成します。 |
| [`write`](https://doc.rust-lang.org/std/macro.write.html) | フォーマットされたデータをバッファに書き込みます。 |
| [`writeln`](https://doc.rust-lang.org/std/macro.writeln.html) | 改行を追加して、フォーマットされたデータをバッファーに書き込みます。 |

## キーワード

| キーワード | 説明 |
| --- | --- |
| [`SelfTy`](https://doc.rust-lang.org/std/keyword.SelfTy.html) | [`trait`](https://doc.rust-lang.org/std/keyword.trait.html) または [`impl`](https://doc.rust-lang.org/std/keyword.impl.html) ブロック内の実装型、または型定義内の現在の型。 |
| [`as`](https://doc.rust-lang.org/std/keyword.as.html) | 型間でキャストするか、インポートの名前を変更します。 |
| [`async`](https://doc.rust-lang.org/std/keyword.async.html) | 現在のスレッドをブロックする代わりに [`Future`](https://doc.rust-lang.org/std/future/trait.Future.html) を返します。 |
| [`await`](https://doc.rust-lang.org/std/keyword.await.html) | [`Future`](https://doc.rust-lang.org/std/future/trait.Future.html) の結果の準備ができるまで、実行を一時停止します。 |
| [`break`](https://doc.rust-lang.org/std/keyword.break.html) | ループを早期に終了します。 |
| [`const`](https://doc.rust-lang.org/std/keyword.const.html) | コンパイル時の定数とコンパイル時の評価可能な関数。 |
| [`continue`](https://doc.rust-lang.org/std/keyword.continue.html) | ループの次の反復にスキップします。 |
| [`crate`](https://doc.rust-lang.org/std/keyword.crate.html) | Rust バイナリまたはライブラリ。 |
| [`dyn`](https://doc.rust-lang.org/std/keyword.dyn.html) | dyn は、[トレイトオブジェクト](https://doc.rust-lang.org/book/ch17-02-trait-objects.html) の型のプレフィックスです。 |
| [`else`](https://doc.rust-lang.org/std/keyword.else.html) | [`if`](https://doc.rust-lang.org/std/keyword.if.html) 条件が [`false`](https://doc.rust-lang.org/std/keyword.false.html) と評価されたときに評価する式。 |
| [`enum`](https://doc.rust-lang.org/std/keyword.enum.html) | いくつかのバリエーションのいずれかになり得るタイプ。 |
| [`extern`](https://doc.rust-lang.org/std/keyword.extern.html) | 外部コードにリンクするか、外部コードをインポートします。 |
| [`false`](https://doc.rust-lang.org/std/keyword.false.html) | 論理の**偽**を表す [`bool`](https://doc.rust-lang.org/1.55.0/std/primitive.bool.html) 型の値。 |
| [`fn`](https://doc.rust-lang.org/std/keyword.fn.html) | 関数または関数ポインタ。 |
| [`for`](https://doc.rust-lang.org/std/keyword.for.html) | [`in`](https://doc.rust-lang.org/std/keyword.in.html) を使用した反復、[`impl`](https://doc.rust-lang.org/std/keyword.impl.html) を使用したトレイトの実装、または [上位のトレイト境界](https://doc.rust-lang.org/reference/trait-bounds.html#higher-ranked-trait-bounds) （`for<'a>`）。 |
| [`if`](https://doc.rust-lang.org/std/keyword.if.html) | 条件が満たされている場合は、ブロックを評価します。 |
| [`impl`](https://doc.rust-lang.org/std/keyword..html) | 型にいくつかの機能を実装します。 |
| [`in`](https://doc.rust-lang.org/std/keyword.impl.html) | [`for`](https://doc.rust-lang.org/std/keyword.for.html) を使用して一連の値を繰り返し処理します。 |
| [`let`](https://doc.rust-lang.org/std/keyword.let.html) | 値を変数に束縛します。 |
| [`loop`](https://doc.rust-lang.org/std/keyword.loop.html) | 無期限にループします。 |
| [`match`](https://doc.rust-lang.org/std/keyword.match.html) | パターンマッチングに基づく制御フロー。 |
| [`mod`](https://doc.rust-lang.org/std/keyword.mod.html) | コードを [モジュール](https://doc.rust-lang.org/reference/items/modules.html) に編成します。 |
| [`move`](https://doc.rust-lang.org/std/keyword.move.html) | [クロージャ](https://doc.rust-lang.org/book/ch13-01-closures.html) の環境を価値によってキャプチャします。 |
| [`mut`](https://doc.rust-lang.org/std/keyword.mut.html) | 可変変数、参照、またはポインタ。 |
| [`pub`](https://doc.rust-lang.org/std/keyword.pub.html) | アイテムを他の人に見えるようにします。 |
| [`ref`](https://doc.rust-lang.org/std/keyword.ref.html) | パターンマッチング中に参照によって束縛します。 |
| [`return`](https://doc.rust-lang.org/std/keyword.return.html) | 関数から値を返します。 |
| [`self`](https://doc.rust-lang.org/std/keyword.self.html) | メソッドのレシーバー、または現在のモジュール。 |
| [`static`](https://doc.rust-lang.org/std/keyword.static.html) | 静的アイテムは、プログラムの全期間（`'static` 生存期間）にわたって有効な値です。 |
| [`struct`](https://doc.rust-lang.org/std/keyword.struct.html) | 他の型で構成される型。 |
| [`super`](https://doc.rust-lang.org/std/keyword.super.html) | 現在の [モジュール](https://doc.rust-lang.org/reference/items/modules.html) の親。 |
| [`trait`](https://doc.rust-lang.org/std/keyword.trait.html) | 型のグループに共通のインターフェース。 |
| [`true`](https://doc.rust-lang.org/std/keyword.true.html) | 論理の**真**を表す [`bool`](https://doc.rust-lang.org/1.55.0/std/primitive.bool.html) の値。 |
| [`type`](https://doc.rust-lang.org/std/keyword.type.html) | 既存の型のエイリアスを定義します。 |
| [`union`](https://doc.rust-lang.org/std/keyword.union.html) | Cスタイルの共用体に相当します。 |
| [`unsafe`](https://doc.rust-lang.org/std/keyword.unsafe.html) | 型システムで [メモリの安全性](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html) を検証できないコードまたはインターフェイス。 |
| [`use`](https://doc.rust-lang.org/std/keyword.use.html) | 他のクレートまたはモジュールからアイテムをインポートまたは名前変更します。 |
| [`where`](https://doc.rust-lang.org/std/keyword.where.html) | アイテムを使用するために維持する必要がある制約を追加します。 |
| [`while`](https://doc.rust-lang.org/std/keyword.while.html) | 条件が維持されている間にループします。 |
