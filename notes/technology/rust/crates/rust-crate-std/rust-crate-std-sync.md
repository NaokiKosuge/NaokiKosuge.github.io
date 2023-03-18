---
slug: /rust-crate-std-sync
sidebar_label: std::sync
---

# 【Rust】標準ライブラリ `std::sync`

> [`std::sync`](https://doc.rust-lang.org/std/sync/) は、便利な同期プリミティブです。

- _モジュール_
  - [`atomic`](https://doc.rust-lang.org/std/sync/atomic/index.html) – 原子型
  - [`mpsc`](https://doc.rust-lang.org/std/sync/mpsc/index.html) – マルチプロデューサー、シングルコンシューマーの FIFO キュー通信プリミティブ。
- _構造体_
  - [`Arc`](https://doc.rust-lang.org/std/sync/struct.Arc.html) – スレッドセーフな参照カウントポインタ。「Arc」は「Atomically Reference Counted」の略です。
  - [`Barrier`](https://doc.rust-lang.org/std/sync/struct.Barrier.html) – バリアにより、複数のスレッドが計算の開始を同期できます。
  - [`BarrierWaitResult`](https://doc.rust-lang.org/std/sync/struct.BarrierWaitResult.html) – `BarrierWaitResult` は、[`Barrier`](https://doc.rust-lang.org/std/sync/struct.Barrier.html) 内のすべてのスレッドがランデブーしたときに [`Barrier::wait()`](https://doc.rust-lang.org/std/sync/struct.Barrier.html#method.wait) によって返されます。
  - [`Condvar`](https://doc.rust-lang.org/std/sync/struct.Condvar.html) – 条件変数
  - [`Mutex`](https://doc.rust-lang.org/std/sync/struct.Mutex.html) – 共有データの保護に役立つ相互排除プリミティブ
  - [`MutexGuard`](https://doc.rust-lang.org/std/sync/struct.MutexGuard.html) – ミューテックスの「スコープロック」の RAII 実装。この構造が削除されると（スコープから外れると）、ロックが解除されます。
  - [`Once`](https://doc.rust-lang.org/std/sync/struct.Once.html) – 1回限りのグローバル初期化を実行するために使用できる同期プリミティブ。 FFI または関連機能の1回限りの初期化に役立ちます。この型は、[`Once::new()`](https://doc.rust-lang.org/std/sync/struct.Once.html#method.new) でのみ作成できます。
  - [`OnceState`](https://doc.rust-lang.org/std/sync/struct.OnceState.html) – 状態は [`Once::call_once_force()`](https://doc.rust-lang.org/std/sync/struct.Once.html#method.call_once_force) のクロージャパラメータになりました。状態は、[`Once`](https://doc.rust-lang.org/std/sync/struct.Once.html) の毒状態を照会するために使用できます。
  - [`PoisonError`](https://doc.rust-lang.org/std/sync/struct.PoisonError.html) – ロックが取得されるたびに返される可能性のあるエラーの一種。
  - [`RwLock`](https://doc.rust-lang.org/std/sync/struct.RwLock.html) – リーダーライターロック
  - [`RwLockReadGuard`](https://doc.rust-lang.org/std/sync/struct.RwLockReadGuard.html) – ドロップされたときにロックの共有読み取りアクセスを解放するために使用される RAII 構造。
  - [`RwLockWriteGuard`](https://doc.rust-lang.org/std/sync/struct.RwLockWriteGuard.html) – ドロップされたときにロックの排他的書き込みアクセスを解放するために使用される RAII 構造。
  - [`WaitTimeoutResult`](https://doc.rust-lang.org/std/sync/struct.WaitTimeoutResult.html) – タイムアウトのために条件変数の時限待機が返されるかどうかを示す型。
  - [`Weak`](https://doc.rust-lang.org/std/sync/struct.Weak.html) – `Weak` は、管理された割り当てへの非所有参照を保持する [`Arc`](https://doc.rust-lang.org/std/sync/struct.Arc.html) のバージョンです。割り当てには、`Option<Arc<T>>` を返す `Weak` ポインターで [`upgrade`](https://doc.rust-lang.org/std/sync/struct.Weak.html#method.upgrade) を呼び出すことによってアクセスされます。
- _列挙型_
  - [`TryLockError`](https://doc.rust-lang.org/std/sync/enum.TryLockError.html) – [`Mutex`](https://doc.rust-lang.org/std/sync/struct.Mutex.html) の [`try_lock`](https://doc.rust-lang.org/std/sync/struct.Mutex.html#method.try_lock) メソッドまたは [`RwLock`](https://doc.rust-lang.org/std/sync/struct.RwLock.html) の [`try_read`](https://doc.rust-lang.org/std/sync/struct.RwLock.html#method.try_read) および [`try_write`](https://doc.rust-lang.org/std/sync/struct.RwLock.html#method.try_write) メソッドから、ロックを取得しようとしているときに発生する可能性のある、[`TryLockResult`](https://doc.rust-lang.org/std/sync/type.TryLockResult.html) に関連する可能性のあるエラーの列挙。
- _型定義_
  - [`LockResult`](https://doc.rust-lang.org/std/sync/type.LockResult.html) – ポイズニングされる可能性のあるロックメソッドの結果の型エイリアス。
  - [`TryLockResult`](https://doc.rust-lang.org/std/sync/type.TryLockResult.html) – ノンブロッキングロック方式の結果の型エイリアス。

## 同期の必要性

概念的には、Rust プログラムは、コンピューター上で実行される一連の操作です。プログラムで発生するイベントのタイムラインは、コード内の操作の順序と一致しています。

いくつかのグローバル静的変数を操作する次のコードについて考えてみます：

```rust
static mut A: u32 = 0;
static mut B: u32 = 0;
static mut C: u32 = 0;

fn main() {
    unsafe {
        A = 3;
        B = 4;
        A = A + B;
        C = B;
        println!("{} {} {}", A, B, C);
        C = A;
    }
}
```

メモリに格納されているいくつかの変数が変更され、加算が実行され、結果が `A` に格納され、変数 `C` が2回変更されたように見えます。

単一のスレッドのみが含まれる場合、結果は期待どおりです。`7 4 4` が表示されます。

舞台裏で何が起こるかについては、最適化が有効になっている場合、最終的に生成されるマシンコードはコードとは大きく異なる場合があります：

- `C = 4; A = 3; B = 4;` と書いたかのように、`C` への最初のストアは `A` または `B` へのストアの前に移動される可能性があります。
- `A + B` の `A` への割り当ては削除される可能性があります。これは、合計が表示されるまで一時的な場所に格納でき、グローバル変数が更新されることはないためです。
- 最終的な結果は、コンパイル時にコードを確認するだけで判断できるため、[定数畳み込み](https://en.wikipedia.org/wiki/Constant_folding) により、ブロック全体が単純な `println!("7 4 4")` に変わる可能性があります。

コンパイラは、最終的に最適化されたコードが実行されたときに、最適化されていないものと同じ結果を生成する限り、これらの最適化の任意の組み合わせを実行できます。

最近のコンピューターには [並行性](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) が伴うため、プログラムの実行順序に関する仮定はしばしば間違っています。グローバル変数にアクセスすると、コンパイラの最適化が無効になっている場合でも、非決定的な結果が生じる可能性があり、同期のバグが発生する可能性があります。

Rust の安全性が保証されているため、このモジュールで同期プリミティブを使用しないと仮定すると、グローバル（静的）変数にアクセスするには `unsafe` コードが必要になることに注意してください。

## アウトオブオーダー実行

命令は、さまざまな理由により、定義した順序とは異なる順序で実行される可能性があります：

- _**コンパイラー**による命令の並べ替え_

  コンパイラーが以前の時点で命令を発行できる場合、コンパイラーはそれを試みます。たとえば、CPUがメモリから値の [プリフェッチ](https://en.wikipedia.org/wiki/Cache_prefetching) を開始できるように、コードブロックの先頭でメモリの負荷を増やす場合があります。

  シングルスレッドのシナリオでは、これにより、シグナルハンドラーや特定の種類の低レベルコードを作成するときに問題が発生する可能性があります。この並べ替えを防ぐには、[コンパイラフェンス](https://doc.rust-lang.org/std/sync/atomic/fn.compiler_fence.html) を使用します。

- _命令を順不同で実行する**単一のプロセッサ**_

  最近の CPU は [スーパースカラー](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%82%B9%E3%82%AB%E3%83%A9%E3%83%BC) 実行が可能です。つまり、マシンコードがシーケンシャルプロセスを記述している場合でも、複数の命令が同時に実行される可能性があります。

  この種の並べ替えは、CPU によって透過的に処理されます。

- _複数のハードウェアスレッドを同時に実行する**マルチプロセッサ**システム_

  マルチスレッドのシナリオでは、2種類のプリミティブを使用して同期を処理できます：

  - メモリアクセスが他のCPUに正しい順序で表示されるようにするための [メモリフェンス](https://doc.rust-lang.org/std/sync/atomic/fn.fence.html)。
  - 同じメモリ位置への同時アクセスを保証するための [不可分操作](https://doc.rust-lang.org/std/sync/atomic/index.html) によって、未定義の動作が発生することはありません。

## 高レベルの同期オブジェクト

低レベルの同期プリミティブのほとんどは、エラーが発生しやすく、使用が不便です。そのため、標準ライブラリはいくつかの高レベルの同期オブジェクトも公開しています。

これらの抽象化は、低レベルのプリミティブから構築できます。効率を上げるために、標準ライブラリの同期オブジェクトは通常、オペレーティングシステムのカーネルの助けを借りて実装されます。カーネルは、ロックの取得時にスレッドがブロックされている間、スレッドを再スケジュールできます。

以下は、使用可能な同期オブジェクトの概要です：

- [`Arc`](https://doc.rust-lang.org/std/sync/struct.Arc.html): Atomically Reference-Counted ポインター。マルチスレッド環境で使用して、すべてのスレッドがデータの使用を終了するまで一部のデータの存続期間を延長できます。
- [`Barrier`](https://doc.rust-lang.org/std/sync/struct.Barrier.html): 複数のスレッドが互いに待機してプログラム内のポイントに到達してから、すべて一緒に実行を続行するようにします。
- [`Condvar`](https://doc.rust-lang.org/std/sync/struct.Condvar.html): 条件変数。イベントの発生を待機している間、スレッドをブロックする機能を提供します。
- [`mpsc`](https://doc.rust-lang.org/std/sync/mpsc/index.html): メッセージベースの通信に使用される、マルチプロデューサー、シングルコンシューマーキュー。余分なメモリをいくらか犠牲にして、軽量のスレッド間同期メカニズムを提供できます。
- [`Mutex`](https://doc.rust-lang.org/std/sync/struct.Mutex.html): 相互排除メカニズム。これにより、一度に最大1つのスレッドが一部のデータにアクセスできるようになります。
- [`Once`](https://doc.rust-lang.org/std/sync/struct.Once.html): グローバル変数のスレッドセーフな1回限りの初期化に使用されます。
- [`RwLock`](https://doc.rust-lang.org/std/sync/struct.RwLock.html): 一度に1人のライターのみを許可しながら、同時に複数のリーダーを許可する相互排除メカニズムを提供します。場合によっては、これはミューテックスよりも効率的です。
