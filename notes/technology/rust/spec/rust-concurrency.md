---
slug: /rust-concurrency
sidebar_label: 並行性
---

# 【Rust】並行性

- スレッドを生成して、複数のコードを同時に走らせる方法
- チャンネルがスレッド間でメッセージを送るメッセージ受け渡し並行性
- 複数のスレッドが何らかのデータにアクセスする状態共有並行性
- 標準ライブラリが提供する型だけでなく、ユーザが定義した型に対してもRustの並行性の安全保証を拡張するSyncとSendトレイト

## スレッド

スレッドに関する機能は、標準ライブラリモジュール [`std::thread`](https://doc.rust-lang.org/std/thread/index.html) に収められています。


### 新しいスレッドを生成する

新しいスレッドは、[`thread::spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) 関数を使用して生成できます：

> ```rust title="std:thread::spawn のシグニチャ"
> pub fn spawn<F, T>(f: F) -> JoinHandle<T> 
> where
>     F: FnOnce() -> T,
>     F: Send + 'static,
>     T: Send + 'static, 
> ```

```rust title="例：スレッドの生成"
use std::thread;

thread::spawn(move || {
    // 何らかの処理
});
```

### 生成されたスレッドの終了を待機する

スレッドがいつ完了するかを知るには、[`spawn`](https://doc.rust-lang.org/std/thread/fn.spawn.html) の呼び出しによって返される [`JoinHandle`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html) オブジェクトをキャプチャする必要があります。これにより、呼び出し元は、生成されたスレッドの完了を待機できる [`join`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.join) メソッドが提供されます。

```rust title="例：スレッドの終了を待機する"
use std::thread;

let thread_join_handle = thread::spawn(move || {
    // 何らかの処理
});
// 何らかの処理
let res = thread_join_handle.join();
```

[`join`](https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.join) メソッドは [`thread::Result`](https://doc.rust-lang.org/std/thread/type.Result.html) を返します：

- [`Ok`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Ok) – 生成されたスレッドによって生成された最終値
- [`Err`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Err) – スレッドがパニックになった場合、`panic!` の呼び出しに与えられた値

### スレッドの親子関係

新しいスレッドを生成するスレッドと生成されるスレッドの間には親子関係がないことに注意してください。特に、スポーンスレッドがメインスレッドでない限り、スポーンスレッドはスポーンスレッドよりも長持ちする場合と長持ちしない場合があります。