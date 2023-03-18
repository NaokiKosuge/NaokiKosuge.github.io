---
slug: /rust-error-handling
sidebar_label: エラー処理
---

# 【Rust】エラー処理

エラーの分類:

- **回復可能なエラー**

  → [`Result<T, E>`](https://doc.rust-lang.org/std/result/enum.Result.html) 値を返す

- **回復不可能なエラー**

  → 実行を中止する [`panic!`](https://doc.rust-lang.org/std/macro.panic.html) マクロ

## `Result` で回復可能なエラー

Rust には例外はありません。失敗する可能性のある関数は、`Result` を返すことで、そのことを示します。

```rust title="Result 型"
pub enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

### 主要な `Result` メソッド

- [`is_ok()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_ok), [`is_err()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_err)

  成功したかエラーだったかを示す `bool` 値

- [`ok()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.ok)

  成功した場合の値を `Option<T>` として返す。成功していれば `Some(success_value`) が、失敗していれば `None` となる。エラー値は捨てられる。

- [`err()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.err)

  失敗した場合の値を `Option<E>` として返す。

- [`unwrap_or(default)`](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or)

  成功した場合には成功値を返す。失敗した場合には `default` を返し、エラー値を捨てる。

- [`unwrap_or_else(op)`](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or_else)

  `unwrap_or(default)` の `default` 値を関数またはクロージャで求める。

- [`unwrap()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap)

  成功した場合は成功値を返し、失敗した場合はパニックを起こす。

- [`expect(msg)`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect)

  成功した場合は成功値を返し、失敗した場合は指定したメッセージと共にパニックを起こす。

- [`as_ref()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_ref)

  `Result<T, E>` を `Result<&T, &E>` に変換する。

- [`as_mut()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_mut)

  `Result<T, E>` を `Result<&mut T, &mut E>` に変換する。

### エラー捕捉

```rust title="match 式によるエラー捕捉"
match get_weather(hometown) {
    Ok(report) => {
        display_weather(hometown, &report);
    }
    Err(err) => {
        println!("error querying the weather: {}", err);
        schedule_weather_retry();
    }
}
```

### エラーの伝搬（`?` 演算子）

`?` 演算子は、**`Result` を生成する任意の式** に追加して使用します。`?` の挙動は成功と失敗の場合分けとなります:

- **成功した場合**: `Result` を解いて成功値を取り出す。
- **失敗した場合**: 呼び出し元の関数からエラーを返す。つまりは責任を上位へと先送りにする。

使用例:

```rust 
let weather = get_weather(hometown)?;
```

これは、次の `match` 式に書き換えることができます:

```rust 
let weather = match get_weather(hometown) {
    Ok(success_value) => success_value,
    Err(err) => return Err(err),
};
```

:::info `?` 演算子は `try!` マクロの糖衣構文

疑問符演算子 `?` は、`try!` マクロ（[`std::try`](https://doc.rust-lang.org/std/macro.try.html)）の代わりに追加されました。現在では、このマクロは**非推奨**となっています。

:::

## パニック時の動作

- デフォルトではパニック時にはスタックが巻き戻される。
- コンパイル時に `-C panic=abort` を指定すると、パニックが怒った際にスタックが巻き戻されなくなる。
- 1つ目のパニックを巻き戻している最中に、`.drop()` メソッドで2つ目のパニックが起きた場合には、致命的な状態とみなされ、Rust は巻き戻しを中止して、プロセス全体を強制終了する。

---

## Tips

### 複数のエラー型を返す；トレイトオブジェクトでまとめる

```rust title="例：複数のエラー型に対応するため、戻り値でトレイトオブジェクトを使う"
use std::fs::File;
use std::error::Error;
use std::net::Ipv6Addr;

fn main() -> Result<(), Box<dyn Error>> {
    let _f = File::open("invisible.txt")?;  // エラー型は std::io::Error
    let _localhost = "::1"
        .parse::<Ipv6Addr>()?;  // エラー型は std::net::AddrParseError
    Ok(())
}
```

#### コードの解説

1. `?` 演算子は、`Result<T, E>` を返す関数の中でしか使用できない。
2. 関数の中で複数種類のエラー型が返る可能性がある場合は、1の場合ではコンパイルが通らない。
3. そのため、関数の戻り値の型を `Result<T, Box<dyn E>>` に変更する。
4. ここで、トレイトオブジェクト（`dyn E`）を `Box` でラップする理由は、そのサイズが、実行時に遭遇した状況に依存しており、コンパイル時には不明であるからである。

#### 問題点

トレイトオブジェクトを使うことは、**型消去**とも呼ばれており、Rust は、上流で発生したエラー（上例の場合だと `Error` と `AddrParseError`）の違いを意識しなくなります。

### 複数のエラー型を返す；列挙型でのラップ

```rust
use std::error;
use std::fmt;
use std::fs::File;
use std::io;
use std::net::{AddrParseError, Ipv6Addr};

// [1] [2]
#[derive(Debug)]
enum UpstreamError {
    IO(io::Error),
    Parsing(AddrParseError),
}

// [3]
impl fmt::Display for UpstreamError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

// [4]
impl error::Error for UpstreamError {/* デフォルトの実装に任せるので空白にします。 */}

fn main() -> Result<(), UpstreamError> {
    let _f = File::open("invisible.txt")
        // [5]
        .map_err(UpstreamError::IO)?;  // io::Error を UpstreamError::IO にマップ
    let _localhost = "::1"
        .parse::<Ipv6Addr>()
        // [5]
        .map_err(UpstreamError::Parsing)?;  // AddrParseError を UpstreamError::Parsing にマップ
    Ok(())
}
```

#### コードの解説

1. 上流のエラーをバリアントとして含む列挙型を定義する。
2. その列挙型定義に `#[derive(Debug)]` 注釈を付ける。
3. [`Display`](https://doc.rust-lang.org/std/fmt/trait.Display.html) を実装する。
4. [`Error`](https://doc.rust-lang.org/stable/std/error/trait.Error.html) を実装する。但し、[`Debug`](https://doc.rust-lang.org/std/fmt/trait.Debug.html) と [`Display`](https://doc.rust-lang.org/std/fmt/trait.Display.html) を実装した後だから、その実装は、殆どタグで付いてくる。
5. コードで [`map_err()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_err) を使うことで、上流のエラーを独自の「多目的エラー型」に変換できる。

:::tip `map_err()` の呼び出しを省くために、`std::convert::From` を実装する

[`map_error()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_err) でエラー型をマップさせる代わりに、予め [`From`](https://doc.rust-lang.org/std/convert/trait.From.html) を実装しておくことで、エラー型のマッピングを省略させることができます。この方法は、下流のプログラマへの負担が軽減されるため、ライブラリ制作で特に有用です：

```rust title="代案：独自のラッパーによるエラー型のために std::convert::From を実装する" {24-36}
use std::error;
use std::fmt;
use std::fs::File;
use std::io;
use std::net::{AddrParseError, Ipv6Addr};

// [1] [2]
#[derive(Debug)]
enum UpstreamError {
  IO(io::Error),
  Parsing(AddrParseError),
}

// [3]
impl fmt::Display for UpstreamError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

// [4]
impl error::Error for UpstreamError {/* デフォルトの実装に任せるので空白にします。 */}

// [5']
impl From<io::IOError> for UpstreamError {
    fn from(error: io::Error) -> Self {
        UpstreamError::IO(error)
    }
}

// [5']
impl From<net::AddrParseError> for UpstreamError {
    fn from(error: net::AddrParseError) -> Self {
        UpstreamError::Parsing(error)
    }
}

fn main() -> Result<(), UpstreamError> {
    let _f = File::open("invisible.txt")?;
    let _localhost = "::1".parse::<Ipv6Addr>()?;
    Ok(())
}
```

:::

## エラー処理に特化したライブラリ

- [`anyhow`](/notes/rust-crate-anyhow)
- [`thiserror`](/notes/rust-crate-thiserror)