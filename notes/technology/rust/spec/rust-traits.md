---
slug: /rust-traits
sidebar_label: トレイト
---

# 【Rust】トレイト

トレイトは、Rust におけるインターフェイス、もしくは抽象基底クラスのようなもので、型に対してメソッドの実装を保証する仕組みです。

## 基本

```rust title="トレイト定義の書き方"
pub trait MyTrait {
    // ...
}
```

```rust title="トレイト実装の書き方"
impl MyTrait for SomeType {
    // ...
}
```

### トレイトオブジェクト

あるトレイトを実装した何らかの値への参照を **トレイトオブジェクト** といいます。

変数のサイズはコンパイル時に決まっている必要がありますが、トレイトはあらゆる型に実装できるため、コンパイル時にサイズが決まりません。つまり、動的なサイズを持つ型なのです。そのため、トレイとオブジェクトは、

1. 具体的なインスタンスなどの、データへのポインタ
2. vtable（メソッド呼び出し名の関数ポインター） へのマップへのポインタ

という、2つのポインタを持つファットポインタとして、内部では管理されます。つまり、トレイトオブジェクトのメソッド呼び出しは、追加で間接参照が必要となることを意味します。

`dyn` キーワードは、トレイトオブジュエクトを通常の型参照と区別するためのプレフィックスです。このキーワードの使用には3つの形式があります：

- `&dyn Trait`
- `&mut dyn Trait`
- `Box<dyn Trait>`

:::note `dyn` を使わない記法

古い Rust のコードで、`&Trait` や `Box<Trait>` を見ることがあるかもしれません。これらは正しい構文ですが、既に旧式となっていて、`dyn` キーワードを加えることが強く推奨されています。

:::

:::note トレイトオブジェクトとジェネリクスの対比

|            | トレイトオブジェクト | ジェネリクス |
|------------|------------|--------|
| ディスパッチ     | 動的         | 静的     |
| ディスク空間の消費量 | 少ない        | 多い     |
| 実行速度       | 遅い         | 速い     |

:::

### トレイト境界

何らかのトレイト _`Trait`_ を実装する何らかの型 _`T`_ がある場合、「`T` が `Trait` というトレイト境界を持つ」という風に表現されます。

### 引数としてのトレイト

引数の中に、「あるトレイトを実装する何らかの型」を指定することができます。例えば：

```rust title="例：引数としてのトレイト（impl-Trait 構文）"
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

というコードでは、「引数 `item` は、トレイト `Summary` を実装するあらゆる型への参照」を意味します。

これは、次の **トレイト境界構文** の糖衣構文です：

```rust title="例：引数としてのトレイト（トレイト境界構文）"
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}
```

#### 複数のトレイト境界

型パラメータに複数の機能を要求することも可能で、2つの構文があります：


- ```rust title="例1：通常の + 構文"
  fn run_query<M: Mapper + Serialize, R: Reducer + Serialize>(data: &DataSet, map: M, reduce: R) -> Results { 
    // ... 
  }
  ```

- ```rust title="例2：キーワード where を使った構文"
  fn run_query<M, R>(data: &DataSet, map: M, reduce: R) -> Result
      where M: Mapper + Serialize,
            R: Reducer + Serialize
  {
      // ...
  }
  ```

### 返り値としてのトレイト

`impl-Trait` 構文を使うと、「あるトレイトを実装する何らかの型」を返すことを指定することができます：

```rust title="例：返り値としてのトレイト（impl-Trait 構文）"
fn returns_summarizable() -> impl Summary {
    Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    }
}
```

### 制限

トレイトメソッドを使用するには、そのトレイトがスコープに入っている必要があります。

```rust title="エラー例：トレイトがスコープに入っていないことが原因"
let mut buf: Vec<u8> = vec![];
buf.write_all(b"hello)?;  // エラー：`write_all` というメソッドはない
```

```rust title="OK 例：トレイトがスコープに入っている" {1}
use std::io::Write;

let mut buf: Vec<u8> = vec![];
buf.write_all(b"hello)?;  // ok
```

また、**コヒーレンス**、特に **孤児のルール** と呼ばれる制限があり、外部のトレイトを外部の型に対して実装することはできません。

### サブトレイト

あるトレイトが他のトレイトの拡張であると宣言することができます。その場合、ベースとなるトレイトと共に実装されなければなりません。

```rust title="例：Visible のサブトレイト Creature の定義と実装"
struct Broom;

// クリーチャーは可視である。
trait Creature: Visible {
    // ...
}

impl Visible for Broom {
    // ...
}

impl Creature for Broom {
    // ...
}
```

### `Self`

トレイト内ではキーワード `Self` を型として使うことができ、**そのトレイトを実装した型** を表します。

### インスタンスメソッド

メソッドの第一引数を `&self`（または `&mut self`）とした場合、そのメソッドは、**インスタンスメソッド** となります。更に、トレイト定義の際に、インスタンスメソッドにシグニチャだけでなく実装も含めた場合は、**デフォルトメソッド** となります。

### スタティックメソッド

メソッドの第一引数を `&self`（または `&mut self`） としなかった場合、そのメソッドは、**スタティックメソッド** となります。更に、`Self` を返すシグニチャにした場合、そのメソッドは **コンストラクタ** となります（これは慣習的に `new` という名前が使われます）。

### トレイト境界を使用してメソッド実装を条件分けする

ジェネリックな型引数を持つ `impl` ブロックにトレイト境界を与えることで、 特定のトレイトを実装する型に対するメソッド実装を条件分けできます：

```rust title="例：トレイト境界によってジェネリックな型に対するメソッド実装を条件分けする"
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```

また、別のトレイトを実装するあらゆる型に対するトレイト実装を条件分けすることもできます。トレイト境界を満たすあらゆる型にトレイトを実装することは、**ブランケット実装** と呼ばれ、 Rust の標準ライブラリで広く使用されています：

```rust title="例：ブランケット実装"
// `Display` トレイトを実装したあらゆる型に対して `ToString` トレイトを実装する
impl<T: Display> ToString for T {
    // --snip--
}
```

---

## 標準ライブラリのトレイト

### `Display`

## ユーティリティトレイト

標準ライブラリに存在する特定のトレイトは、Rust コンパイラに認識されており、特別な役割を果たします。

- [`Drop`](#drop) — デストラクタ。
- [`Sized`](#sized) — コンパイル時にサイズが定まる型に対するマーカートレイト。
- [`Clone`](#clone) — 値をクローン可能な型
- [`Copy`](#copy) — 値の置かれたトレイトメモリをバイト単位でコピーすることでクローン可能である、ということを示すマーカートレイト。
- [`Deref`, `DerefMut`](#deref-derefmut) — スマートポインタ型のためのトレイト。
- [`Default`](#default) — デフォルト値を持つ型であることを示す。
- [`AsRef`, `AsMut`](#asref-asmut) — ある参照から別の参照へと変換するためのトレイト。
- [`Borrow`, `BorrowMut`](#borrow-borrowmut) — `AsRef`/`AsMut` と同様の変換トレイトだが、ハッシュ値が同じであること、順序、等価性が同じであることを保証する。
- [`From`, `Into`](#from-into) — ある型から別の型への変換トレイト。
- [`ToOwned`](#toowned) — 参照から所有されている値への変換トレイト。

### `Drop`

Rust では、ある値の所有者がいなくなると、デストラクタを実行し、値をドロップします。`Drop`（[`std::ops::Drop`](https://doc.rust-lang.org/std/ops/trait.Drop.html)）は、デストラクタをカスタマイズするためのトレイトです。

デストラクタは、次の2つのコンポーネントで構成されます。

- `Drop` が実装されている場合、その値に対して `Drop::drop` を呼び出す。
- 次に、その値の全てのフィールドに対して再帰的にデストラクタを呼び出す。

```rust title="Drop の定義"
/// デストラクタ内のカスタムコード。
pub trait Drop {
    /// この型のデストラクタを実行します。
    fn drop(&mut self);
}
```

`Drop` は、プレリュードに含まれているため、`use` 宣言する必要はありません。

### `Sized`

`Sized`（[`std::marker::Sized`](https://doc.rust-lang.org/std/marker/trait.Sized.html)）は、コンパイル時に値が既知の一定サイズの型であることを表すマーカートレイトです。

```rust title="Sized の定義"
/// コンパイル時に既知の一定サイズの型。
pub trait Sized {
    // Empty.
}
```

殆どの型は sized です。例えば、sized と、反対の unsized（正確には **動的サイズ決定型**）には、次のようなものがあります：

- _sized_
  - `u64` — 8バイト。
  - `(f32, f32, f32)` — 12バイト。
  - 何らかの列挙型 — 最大のヴァリアントを保持できるサイズ。
  - `Vec<T>` — `Vec<T>` は可変サイズのバッファをヒープ上に所有するが、Vec 値そのものはバッファへのポインタと容量と長さを持つ固定サイズ。
- _unsized_
  - 文字列スライス型 `str` — `&str` は固定サイズだが、`str` は固定サイズではない。
  - 配列スライス型 `[T]` — `&[T]` は固定サイズだが、`[T]` は固定サイズではない。

`struct S<T> { ... }` と書くと、Rust コンパイラは、暗黙的に `struct S<T: Sized> { ... }` と解釈します。このように制約させたくないのであれば、`struct S<T: ?Sized>` という専用の構文を使って明示する必要があります。これは、「`Sized` であってもそうでなくてもいい」という意味になります。

### `Clone`

`Clone`（[`std::clone::Clone`](https://doc.rust-lang.org/std/clone/trait.Clone.html)）は、自身のコピーを作ることができる型のトレイトです。このコピーはディープコピーであるため、時間とメモリの両方で高価である可能性があります。

```rust title="Clone の定義"
/// オブジェクトを明示的に複製する機能の一般的なトレイト。
pub trait Clone: Sized {
    /// 値のコピーを返します。
    fn clone(&self) -> Self;

    /// `source` からコピー割り当てを実行します。
    /// 
    /// `a.clone_from(&b)` は機能的には　`a = b.clone()` と同等ですが、
    /// 不要な割り当てを回避し `a` のリソースを再利用するためにオーバーライドできます。
    fn clone_from(&mut self, source: &Self) {
        *self = source.clone()
    }
}
```

### `Copy`

`Copy`（[`std::marker::Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html)）は、代入の際にムーブではなくコピーされる値を表すマーカートレイトです。

```rust title="Copy の定義"
/// ビットをコピーするだけで値を複製できる型。
pub trait Copy: Clone {
    // Empty.
}
```

### `Deref`, `DerefMut`

`Deref`（[`std::ops::Deref`](https://doc.rust-lang.org/std/ops/trait.Deref.html)）及び `DerefMut`（[`std::ops::DerefMut`](https://doc.rust-lang.org/std/ops/trait.DerefMut.html)）は、`*` や `.` などの参照解決演算子の動作をカスタマイズするためのトレイトです。

```rust title="Deref の定義"
/// * v`のような不変の逆参照操作に使用されます。
pub trait Deref {
    /// 逆参照後の結果の型。
    type Target: ?Sized;
    
    /// 値を逆参照します。
    fn deref(&self) -> &Self::Target;
}
```

```rust title="DerefMut の定義"
/// `* v = 1;`のように、可変の間接参照操作に使用されます。
pub trait DerefMut: Deref {
    /// 値を相互に逆参照します。
    fn deref_mut(&mut self) -> &mut Self::Target;
}
```

### `Default`

### `AsRef`, `AsMut`

### `Borrow`, `BorrowMut`

### `From`, `Into`

`From` と `Into` は、ある型から別の型への変換を表すトレイトです：

- `From` ([`std::convert::From`](https://doc.rust-lang.org/std/convert/trait.From.html))

  `From<T>` は、`T` から変換される具体的な方法を表します。

  ```rust title="From の定義"
  pub trait From<T>: Sized {
      fn from(_: T) -> Self;
  }
  ```

- `Into` ([`std::convert::Into`](https://doc.rust-lang.org/std/convert/trait.Into.html))

 `Into<T>` は、`T` へ変換される具体的な方法を表します。

`From` と `Into` はどちらもプレリュードに含まれています。

`From<T> for U` は、`Into<U> for T` を意味します。`From` を実装すると、標準ライブラリの包括的な実装のおかげで `Into` の実装が自動的に提供されます。実際、標準ライブラリではこの方法が多数用いられています（→[`From` 実装一覧](https://doc.rust-lang.org/std/convert/trait.From.html#implementors)）。`Into` を実装しても `From` は自動実装されません。

#### `From` の実装例

エラー処理を実行している間、独自のエラー型に対して `From` を実装すると便利なことがよくあります。根本的なエラー型を、根本的なエラー型をカプセル化する独自のカスタムエラー型に変換することで、根本的な原因に関する情報を失うことなく、単一のエラー型を返すことができます。**`?` 演算子は、`From` の実装時に自動的に提供される `Into<CliError>::into` を呼び出すことにより、基になるエラー型をカスタムエラー型に自動的に変換します。**次に、コンパイラは `Into` のどの実装を使用するかを推測します：

```rust title="例：From の実装により、異なるエラー型を1つのカスタムエラー型へ自動マッピングする"
use std::fs;
use std::io;
use std::num;

enum CliError {
    IoError(io::Error),
    ParseError(num::ParseIntError),
}

// [1]
impl From<io::Error> for CliError {
    fn from(error: io::Error) -> Self {
        CliError::IoError(error)
    }
}

// [2]
impl From<num::ParseIntError> for CliError {
    fn from(error: num::ParseIntError) -> Self {
        CliError::ParseError(error)
    }
}

fn open_and_parse_file(file_name: &str) -> Result<i32, CliError> {
    let mut contents = fs::read_to_string(&file_name)?;  // エラー時には [1] で処理される
    let num: i32 = contents.trim().parse()?;  // エラー時には [2] で処理される
    Ok(num)
}
```

### `ToOwned`


