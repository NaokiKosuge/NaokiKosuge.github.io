---
slug: /rust-crate-anyhow
sidebar_label: anyhow
---

# 【Rust】クレート `anyhow`

[`anyhow`](https://docs.rs/anyhow) は、エラーに関するライブラリで、**異なる型のエラーを簡単にまとめることができます。

## 公開メンバー

- _再エクスポート_
  - `format_err` — [`anyhow`](https://docs.rs/anyhow/*/anyhow/macro.anyhow.html) マクロの別名エクスポート
- _マクロ_
  - [`anyhow`](https://docs.rs/anyhow/*/anyhow/macro.anyhow.html) — 文字列または `anyhow` でないエラーからアドホックエラーを作成します。
  - [`bail`](https://docs.rs/anyhow/*/anyhow/macro.bail.html) — エラーで早期にリターンします。
  - [`ensure`](https://docs.rs/anyhow/*/anyhow/macro.ensure.html) — 条件が満たされない場合、エラーで早期にリターンします。
- _構造体_
  - [`Chain`](https://docs.rs/anyhow/*/anyhow/struct.Chain.html) — ソースエラーのチェーンのイテレータ。
  - [`Error`](https://docs.rs/anyhow/*/anyhow/struct.Error.html) — エラータイプ、動的エラータイプのラッパー。
- _トレイト_
  - [`Context`](https://docs.rs/anyhow/*/anyhow/trait.Context.html) — `Result` のコンテキストメソッドを提供します。
- _型定義_
  - [`Result`](https://docs.rs/anyhow/*/anyhow/type.Result.html) — `Result<T, Error>`

## Tips

### `Result` の変更

```rust
use anyhow::{Context, Result};
```

このようにすることで、標準の `Result` が `anyhow::Result` へと拡張されます。標準との違いは、

- `Result<T, E>` 型が `Result<T, E = Error>` となり、エラーにデフォルトが追加される。
- `Result` に `.context()` メソッドが加わる。
- `Result` に `.with_context()` メソッドが加わる。

### エラー値を追加する

２種類のコンテキストメソッドによりエラー値を追加します：

- `.context()` — エラー値を受け取ります。
- `.with_context()` — エラー値を返す関数を受け取ります。

### エラーをリターンする

その場でエラーをリターンするための２種類のマクロがあります：

- `bail!()` — エラー値を受け取り、そのままエラーを返します。

  ```rust 
  if !has_permission(user, resource) {
    bail!("{} へのアクセスが拒否されました", resource);
  }
  ```

- `ensure!()` — 条件とエラー値を受け取り、条件に合えばエラーを返します。

  ```rust
  ensure!(user == 0, "user 0 のみが許可されています");
  ```