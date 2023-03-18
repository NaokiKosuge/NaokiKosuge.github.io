---
slug: /rust-async
sidebar_label: 非同期処理
---

# 【Rust】非同期処理

## `Future` トレイト

`Future` トレイト（[`std::future::Future`](https://doc.rust-lang.org/std/future/trait.Future.html)）は、「まだ計算を終えていないかもしれない値」、即ち非同期計算を表します：

```rust title="Future の定義"
pub trait Future {
    /// 完了時に生成される値の型。
    type Output;

    /// future を最終的な値に解決しようとします。
    /// 値がまだ利用できない場合は、現在のタスクをウェイクアップ用に登録します。
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```

## `async`/`.await`

### `async`

非同期関数を作成するには、`async-fn` 構文を使用します：

```rust
async fn do_something() { /* ... */ }
```

`async` キーワードを付けて定義された関数を呼び出すと、_怠惰_であるため、同期的には処理が実行されず、非同期処理を表す `Future` タスクが返されます。

:::note NOTE

future と同様の概念は他のプログラミング言語にも存在し、例えば JavaScript では「`Promise`」が該当します。

:::

### `.await`

`async` ブロックまたは `async-fn` の中では、別の `async-fn` の出力など `Future` トレイトを実装する型の完了を待つことができます：

```rust title="例：.await の使用"
async fn learn_song() -> Song { /* ... */ }
async fn sing_song(song: Song) { /* ... */ }
async fn dance() { /* ... */ }

async fn learn_and_sing() {
    // 歌う前に、歌が習得されるまで待ってください。
    // ここでは、スレッドのブロックを防ぐために、`block_on` ではなく `.await` を使用します。
    // これにより、同時に `dance`を実行できます。
    let song = learn_song().await;
    sing_song(song).await;
}

async fn async_main() {
    let f1 = learn_and_sing();
    let f2 = dance();

    // `join!` は `.await` に似ていますが、同時に複数の future を待つことができます。
    // `learn_and_sing`の未来で一時的にブロックされた場合、`dance` の未来が現在のスレッドを引き継ぎます。 
    // `dance`がブロックされた場合、`learn_and_sing` が引き継ぐことができます。
    // 両方の future がブロックされている場合、`async_main` はブロックされ、エグゼキュータに譲ります。
    futures::join!(f1, f2);
}

fn main() {
    block_on(async_main());
}
```

:::note NOTE

`.await` は現在のスレッドをブロックしません。つまり、他の future の進行を止めることなく future の完了を待機することができます。

:::

## エグゼキューター

`Feature` タスクを実行するには、当該オブジェクトを**エグゼキューター**と呼ばれる関数に渡します：

```rust title="例：エグゼキューター block_on による future タスクの実行"
// `block_on` は、指定された future が完了するまで、現在のスレッドをブロックします。
// 他のエグゼキュータは、同じスレッドに複数の　future　をスケジュールするなど、より複雑な動作を提供します。
use futures::executor::block_on;

async fn hello_world() {
    println!("hello, world!");
}

fn main() {
    let future = hello_world(); // 何も表示されません
    block_on(future); // `future` が実行され、「hello, world!」が表示されます
}
```

:::note NOTE

`block_on()` は現在のスレッドをブロックします。つまり、future の完了を待機している間、他の future の進行は止まります。

:::

## 関連する外部リンク

- [Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/)