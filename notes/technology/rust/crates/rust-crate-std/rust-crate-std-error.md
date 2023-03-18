---
slug: /rust-crate-std-error
sidebar_label: std::error
---

# 【Rust】標準ライブラリ `std::error`

[`std::error`](https://doc.rust-lang.org/stable/std/error/) は、エラーを処理するためのトレイトを提供します。

- _構造体_
  - [`Chain`](https://doc.rust-lang.org/stable/std/error/struct.Chain.html) [実験的] — [`Error`](https://doc.rust-lang.org/stable/std/error/trait.Error.html) とそのソースに対するイテレータ。
- _トレイト_
  - [`Error`](https://doc.rust-lang.org/stable/std/error/trait.Error.html) — `Error` は、エラー値、つまり [`Result<T, E>`](https://doc.rust-lang.org/stable/std/result/enum.Result.html) の型 `E` の値に対する基本的な期待を表すトレイトです。