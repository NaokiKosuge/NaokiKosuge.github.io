---
slug: /rust-crate-and-module
sidebar_label: クレートとモジュール
---

# 【Rust】クレートとモジュール

## パッケージ

クレートをビルドし、テストし、共有することができる Cargo の機能を **パッケージ** と言います。

- 1個以上のクレートを持つ。
- 0〜1個のライブラリクレートを持つ。
- 0個以上のバイナリクレートを持つ。
- `Cargo.toml` ファイルにパッケージのメタ情報を記述する。

## クレート

**クレート** は、ライブラリか実行可能ファイルを生成する、木構造をしたモジュール群です。Rust コンパイラの開始点となるクレートのソースファイルのことを **クレートルート** と言います。

<dl>
<dt>

**バイナリクレート**
</dt>
<dd>

- 1つ目のクレートのルートは、`src/main.rs` であり、プロジェクトと同じクレート名となる。
- 2つ目以降のクレートは `src/bin/` に置くことで作成できる。

</dd>

<dt>

**ライブラリクレート**
</dt>
<dd>

- ライブラリクレートは、パッケージに最大で1つまで作成できる。
- クレートルートは、`src/lib.rs` であり、プロジェクトと同じクレート名となる。

</dd>
</dl>

### creates.io

## モジュール

モジュールは Rust の名前空間であり、Rust プログラムやライブラリを構成するアイテム（関数、型、定数、モジュールなど）を収めるコンテナです。

```rust 
mod spores {
    use cells::Cell;
    /// 成長したシダ植物から作られる細胞。シダ植物のライフサイクルの一環として、
    /// 風に乗って分散される。胞子（spore）は成長して、最大5mm程度の
    /// まったく別の主体である前葉体となる。前葉体は接合体を生成し、
    /// 接合体が新しいシダ植物に成長する（植物の生殖は複雑だ）。
    pub struct Spore {
        // ...
    }
    
    /// 減数分裂による胞子の生成をシミュレート
    pub fn produce_spore(factory: &mut Sporeangium) -> Spore {
        // ...
    }
    
    /// 遺伝子をミックスし減数分裂に備える（間期の一部）
    fn recombine(parent: &mut Cell) {
        // ...
    }
}
```

- モジュールは `mod module_name {...}` で定義する。
- モジュール内のアイテムは、デフォルトではプライベートだが、定義の際、`pub` キーワードを付けるとパブリックとなる。
- モジュールはネストすることができる。

### モジュールの複数ファイルへの分割

次のディレクトリ構成があるとします：

```
src/
  ├─ main.rs
  ├─ spores.rs
  └─ plant_structures/
       ├─ mod.rs
       ├─ leaves.rs
       ├─ roots.rs
       └─ stems.rs
```

`main.rs` から `plant_structures` モジュールを使用します：

```rust title="src/main.rs"
mod plant_structures;
// この時点で、「::plant_structures」が使用可能。

use plant_structures::{leaves, roots, stems};
// この時点で、「leaves」、「roots」、「stems」が使用可能。
```

`plant_structures` モジュールは、3つのサブモジュールからなり、`mod.rs` がそれらを束ねる役割を担います：

```rust title="src/plant_structures/mod.rs"
pub mod leaves;
pub mod roots;
pub mod stems;
```

:::note 外部モジュールの宣言

`mod mod_name;` とモジュール宣言したとき、コンパイラは、`mod_name.rs` または `mod_name/mod.rs` を関連付けます。これらは片方のみ存在する必要があり、どちらも存在しないことも両方存在することもコンパイルエラーとなります。

:::

### プレリュード

Rust コンパイラは、すべてのモジュールにおいて `use std::prelude::v1::*;` が宣言されているように振る舞います。これは、**標準のプレリュード** と呼ばれ、`Vec` や `Result` などが明示的にインポートすることなく使えることの原因です。

これに関連して、モジュール名に `prelude` の名前をつけたものを **非標準のプレリュード** といいます。これは、`*` でインポートして欲しいことを示す慣習であり、あくまでも自動的にインポートされるのは標準のプレリュードだけです。

### アクセス制御

モジュール内のアイテムは、より上位の階層へはデフォルトで非公開となりますが、`pub`キーワードを付けることで公開にすることができます。

注意点として、構造体（`struct`）は構造体そのものとフィールドはそれぞれの公開設定があるのに対し、列挙型（`enum`）は列挙型そのもののみにしかアクセス設定がないということです（つまりヴァリアントに `pub` キーワードは付けられません）:

```rust
mod back_of_house {
    // 公開構造体
    pub struct Breakfast {
        // 公開フィールド
        pub toast: String,
        // 非公開フィールド
        seasonal_fruit: String,
    }
    
    // 公開列挙型
    pub enum Appetizer {
        Soup,
        Salad,
    }
}
```

### パスの種類

- **絶対パス**：クレートの名前か `crate` という文字列を使うことで、クレートルートを起点とする。
- **相対パス**：`self`（現在のモジュール）、`super`（親モジュール） または「今のモジュール内の識別子」を使うことで、現在のモジュールを起点とする。

### パスをスコープに持ち込む

- パスをローカルにインポートする（`use`）

  ```rust
  mod fron_of_house {
      pub mod hosting {
          pub fn add_to_wailist(){}
      }
  }

  use crate::front_of_house::hosting;
  // NOTE: 慣例的に、use を使う際は、モジュールまでの指定に留めます。
  // そうすることで、関数を呼び出す際、「::」を記述することになり、
  // ローカルで定義されていないことを明らかにできます。
  // ただし、構造体や列挙型など大文字で始まるものについてはフルパスで記述することも慣習としてあります。

  pub fn eat_at_restaurunt() {
      hosting::add_to_waitlist();
      hosting::add_to_waitlist();
      hosting::add_to_waitlist();
  }
  ```

- 新しい名前を与える（`as`）

  ```rust
  use std::fmt::Result;
  use std::io::Result as IoResult;
  
  fn function1() -> Result {
      // --snip--
      Ok(())
  }
  
  fn function2() -> IoResult<()> {
      // --snip--
      Ok(())
  }
  ```

- 名前を再公開する（`pub use`）

  ```rust
  mod front_of_house {
      pub mod hosting {
          pub fn add_to_waitlist() {}
      }
  }
  
  pub use crate::front_of_house::hosting;
  
  pub fn eat_at_restaurant() {
      hosting::add_to_waitlist();
      hosting::add_to_waitlist();
      hosting::add_to_waitlist();
  }
  ```

- パスをまとめる

  ```rust
  use std::{self, Write, comp::Ordering};
  // これは、以下と等しい...
  //   use rust-rust-crates-rust-crate-std;
  //   use rust-rust-crates-rust-crate-std::Write;
  //   use rust-rust-crates-rust-crate-std::comp::Ordering;
  ```

- glob 演算子

  ```rust
  use std::collections::*;
  ```

### モジュールを複数ファイルに分割する

```rust title="src/lib.rs"
// モジュールの定義内容は、
// 「front_of_house.rs」または「front_of_house/mod.rs」にあることを知らせる。
mod front_of_house;

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
    hosting::add_to_waitlist();
}
```
- ```rust title="src/front_of_house.rs"
  pub mod hosting {
      pub fn add_to_waitlist() {}
  }
  ```
- ```rust title=src/foront_of_house/mod.rs
  pub mod hosting {
      pub fn add_to_waitlist() {}
  }
  ```