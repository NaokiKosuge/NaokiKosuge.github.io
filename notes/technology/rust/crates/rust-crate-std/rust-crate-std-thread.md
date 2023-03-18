---
slug: /rust-crate-std-thread
sidebar_label: std::thread
---

# 【Rust】標準ライブラリ `std::thread`

- _構造体_
  - [`AccessError`](https://doc.rust-lang.org/std/thread/struct.AccessError.html) — [`LocalKey::try_with`](https://doc.rust-lang.org/std/thread/struct.LocalKey.html#method.try_with) によって返されたエラー。
  - [`Builder`](https://doc.rust-lang.org/std/thread/struct.Builder.html) — 新しいスレッドのプロパティを構成するために使用できるスレッドファクトリ。
  - [`JoinHandle`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html) — スレッドに参加するための所有されたアクセス許可（その終了時にブロック）。
  - [`LocalKey`](https://doc.rust-lang.org/std/thread/struct.LocalKey.html) — その内容を所有するスレッドローカルストレージキー。
  - [`Thread`](https://doc.rust-lang.org/std/thread/struct.Thread.html) — スレッドへのハンドル。
  - [`Threadid`](https://doc.rust-lang.org/std/thread/struct.ThreadId.html) — 実行中のスレッドの一意の識別子。
- _関数_
  - [`current`](https://doc.rust-lang.org/std/thread/fn.current.html) — それを呼び出すスレッドへのハンドルを取得します。
  - [`panicking`](https://doc.rust-lang.org/std/thread/fn.panicking.html) — パニックが原因で現在のスレッドが巻き戻されているかどうかを判別します。
  - [`park`](https://doc.rust-lang.org/std/thread/fn.park.html) — 現在のスレッドのトークンが使用可能になるまで、または使用可能になるまでブロックします。
  - [`park_timeout`](https://doc.rust-lang.org/std/thread/fn.park_timeout.html) — 現在のスレッドのトークンが使用可能になるか、指定された期間に達するまで、またはブロックします（誤ってウェイクアップする可能性があります）。
  - [`sleep`](https://doc.rust-lang.org/std/thread/fn.sleep.html) — 現在のスレッドを少なくとも指定された時間スリープ状態にします。
  - [`spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) — 新しいスレッドを生成し、[`JoinHandle`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html) を返します。
  - [`yield_now`](https://doc.rust-lang.org/std/thread/fn.yield_now.html) — 協力してタイムスライスを OS スケジューラに放棄します。
- _型定義_
  - [`Result`](https://doc.rust-lang.org/std/thread/type.Result.html) — スレッド専用の [`Result`](https://doc.rust-lang.org/std/result/enum.Result.html) 型。

## スレッドモデル

実行中の Rust プログラムは、それぞれが独自のスタックとローカル状態を持つネイティブ OS スレッドのコレクションで構成されています。スレッドには名前を付けることができ、低レベルの同期のための組み込みサポートを提供します。

スレッド間の通信は、[チャネル](https://doc.rust-lang.org/std/sync/mpsc/index.html)、Rust のメッセージパッシング型、および [他の形式のスレッド同期](https://doc.rust-lang.org/std/sync/index.html) と共有メモリデータ構造を介して行うことができます。特に、スレッドセーフであることが保証されている型は、アトミック参照カウントされたコンテナである [`Arc`](https://doc.rust-lang.org/std/sync/struct.Arc.html) を使用してスレッド間で簡単に共有されます。

Rust の致命的な論理エラーはスレッドパニックを引き起こします。その間、スレッドはスタックを巻き戻し、デストラクタを実行し、所有しているリソースを解放します。「try/catch」メカニズムとして意図されたものではありませんが、Rust のパニックは、[`catch_unwind`](https://doc.rust-lang.org/std/panic/fn.catch_unwind.html) でキャッチして（`panic=abort` しない限り）回復するか、[`resume_unwind`](https://doc.rust-lang.org/std/panic/fn.resume_unwind.html) で再開できます。パニックがキャッチされない場合、スレッドは終了しますが、オプションで、[`join`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.join) を使用して別のスレッドからパニックを検出できます。パニックがキャッチされずにメインスレッドがパニックになった場合、アプリケーションはゼロ以外の終了コードで終了します。

Rust プログラムのメインスレッドが終了すると、他のスレッドがまだ実行されている場合でも、プログラム全体がシャットダウンします。ただし、このモジュールは、スレッドの終了を自動的に待機するための便利な機能を提供します（つまり `join`）。

## スレッドを生成する

新しいスレッドは、[`thread::spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) 関数を使用して生成できます：

```rust 
use std::thread;

thread::spawn(move || {
    // ここでいくつかの処理
});
```

この例では、生成されたスレッドは「デタッチ」されています。つまり、生成されたスレッドがいつ完了するか、または終了するかをプログラムが学習する方法はありません。

スレッドが完了するタイミングを知るためには、[`spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) の呼び出しによって返される [`JoinHandle`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html) オブジェクトをキャプチャする必要があります。`JoinHandle` は、呼び出し元が `spawn` されたスレッドの完了を待つことができる `join` メソッドを提供しています：

```rust 
use std::thread;

let thread_join_handle = thread::spawn(move || {
    // ここでいくつかの処理
});
// ここでいくつかの処理
let res = thread_join_handle.join();
```

[`join`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.join) メソッドは、生成されたスレッドによって生成された最終値の [`Ok`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Ok、または、スレッドがパニックになった場合、 [`panic!`](https://doc.rust-lang.org/std/macro.panic.html) の呼び出しに与えられた値の `Err` を含む [`thread::Result`](https://doc.rust-lang.org/std/thread/type.Result.html) を返します。

新しいスレッドを生成するスレッドと生成されるスレッドの間には、親子関係がないことに注意してください。特に、スポーンされたスレッドは、スポーンスレッドがメインスレッドでない限り、スポーンスレッドよりも長生きする場合と存続しない場合があります。

## スレッドの構成

[`Builder`](https://doc.rust-lang.org/std/thread/struct.Builder.html) 型を介して生成される前に、新しいスレッドを構成できます。これにより、現在、スレッドの名前とスタックサイズを設定できます：

```rust 
use std::thread;

thread::Builder::new().name("thread1".to_string()).spawn(move || {
    println!("Hello, world!");
});
```

## `Thread` 型

スレッドは、次の2つの方法のいずれかで取得できる [`Thread`](https://doc.rust-lang.org/std/thread/struct.Thread.html) 型を介して表されます：

- たとえば、[`thread::spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) 関数を使用して新しいスレッドを生成し、[`JoinHandle`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html) で [`thread`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.thread) を呼び出す。
- [`thread::current`](https://doc.rust-lang.org/std/thread/fn.current.html) 関数を使用して、現在のスレッドを要求する。

[`thread::current`](https://doc.rust-lang.org/std/thread/fn.current.html) 関数は、このモジュールの API によって生成されていないスレッドでも使用できます。

## スレッドローカルストレージ

このモジュールは、Rust プログラム用のスレッドローカルストレージの実装も提供します。スレッドローカルストレージは、プログラム内の各スレッドが独自のコピーを持つグローバル変数にデータを格納する方法です。スレッドはこのデータを共有しないため、アクセスを同期する必要はありません。

スレッドローカルキーは、それに含まれる値を所有し、スレッドが終了するとその値を破棄します。スレッドローカルキーは、[`thread_local!`](https://doc.rust-lang.org/std/macro.thread_local.html) マクロで作成され、`'static`（借用したポインタを使用しない）な任意の値を含むことができます。このキーは、指定されたクロージャに値の共有参照を返すアクセサ関数 [`with`](https://doc.rust-lang.org/std/thread/struct.LocalKey.html#method.with) を提供します。スレッドローカルキーでは、値への共有アクセスのみが許可されています。これは、変更可能な借用が許可された場合、一意性を保証する方法がないためです。ほとんどの値は、[`Cell`](https://doc.rust-lang.org/std/cell/struct.Cell.html) 型や [`RefCell`](https://doc.rust-lang.org/std/cell/struct.RefCell.html) 型を使って内部での変更可能性を利用することになるでしょう。

## スレッドに名前を付ける

スレッドは、識別のために関連する名前を持つことができます。デフォルトでは、生成されたスレッドには名前が付いていません。スレッドの名前を指定するには、[`Builder`](https://doc.rust-lang.org/std/thread/struct.Builder.html) でスレッドを構築し、必要なスレッド名を [`Builder::name`](https://doc.rust-lang.org/std/thread/struct.Builder.html#method.name) に渡します。スレッド内からスレッド名を取得するには、[`Thread::name`](https://doc.rust-lang.org/std/thread/struct.Thread.html#method.name) を使用します。スレッドの名前が使われる例をいくつか挙げてみましょう。

- 名前付きスレッドでパニックが発生した場合、スレッド名がパニックメッセージに出力されます。
- スレッド名は、該当する場合にOSに提供されます（たとえば、Unix ライクなプラットフォームの `pthread_setname_np`）。

## スタックサイズ

生成されたスレッドのデフォルトのスタックサイズは 2MiB ですが、この特定のスタックサイズは将来変更される可能性があります。生成されたスレッドのスタックサイズを手動で指定するには、次の2つの方法があります：

- [`Builder`](https://doc.rust-lang.org/std/thread/struct.Builder.html) を使用してスレッドを構築し、目的のスタックサイズを [`Builder::stack_size`](https://doc.rust-lang.org/std/thread/struct.Builder.html#method.stack_size) に渡します。
- `RUST_MIN_STACK` 環境変数を、目的のスタックサイズ（バイト単位）を表す整数に設定します。 [`Builder::stack_size`](https://doc.rust-lang.org/std/thread/struct.Builder.html#method.stack_size) を設定すると、これが上書きされることに注意してください。

メインスレッドのスタックサイズは Rust によって決定されないことに注意してください。
