---
slug: /rust-pointer
sidebar_label: ポインタ
---

# 【Rust】いろいろなポインタ

- `*const T` と `*mut T`
- `Box<T>`
- `Rc<T>` と `Arc<T>`
- `Cell<T>` と `RefCell<T>`
- `Cow<T>`
- `String`
- `Vec<T>`
- `RawVec<T>`
- `Unique<T>`
- `Shared<T>`

## 独自のスマートポインタの構築

- `String` や `Box<T>` などの型や、ポインタフィールド `Vec<T>` の基礎となるのは、 `core::ptr::Unique` です。
- `Rc<T>` と `Arc<T>` の基礎である 1core::ptr::Shared` は、共有アクセスが求められる状況を処理できる。
- 相互に連結されたデータ構造を持つ場合、プログラムがシングルスレッドなら `std::rc::Weak`、マルチスレッドなら `std::arc::Weak` が役立つかもしれません。`Rc` および `Arc` の中のデータを、参照カウントをインクリメントせずにアクセスできます。これによって、ポインタの堂々巡りを防止できます。
- `Vec<T>` および `VecDeq<T>` の根底には、`alloc::raw_vec::RawVec` 型があります。これは、拡張可能な双方向キューで、所与の型のためにメモリの割り当てと解放を行う方法を知っています。
- `Cell<T>` と `RefCell<T>` の背後にあるのは `std::cell::UnsafeCell` 型です。自作の型に内部可変性を提供したいのなら、この実装は調べる価値があります。
