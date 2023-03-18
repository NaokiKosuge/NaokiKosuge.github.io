---
slug: /rust-macros
sidebar_label: マクロ
---

# 【Rust】マクロ

マクロは、端的に言うと「Rust コードを記述する Rust コード」です。これは言語拡張であり、_メタプログラミング_として知られています。

マクロは一見すると関数に似ていますが、動作機構は全く異なっており、関数には無い特徴があります：

- 可変調の引数を取れる。（`println!()` が良い例です）
- コンパイラがコードの意味を解釈する前に展開される。故に、関数とは異なり、定義される前に呼び出すことは出来ない。
- マクロを呼び出す際は、マクロ名の後に `!` を付ける。


マクロの種類：

- [宣言的マクロ](#宣言的マクロ)
- 手続き的マクロ
  - [`derive` マクロ](#derive-マクロ)
  - [属性マクロ](#属性風マクロ)
  - [関数風マクロ](#関数風マクロ)

## 宣言的マクロ

**宣言的マクロ**は、宣言的な方法で構文拡張を定義することができます。パターンマッチングを行い、マッチしたコードを他のコードで置き換えます。

### 定義

宣言的マクロの定義には、`macro_rules` を使用します。

```rust title="実装例：vec!マクロ定義の簡略化されたバージョン"
#[macro_export]
macro_rules! vec {
    ( $( $x:expr ),* ) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    };
}
```

## 手続的マクロ

手続的マクロは、コードを入力として受け取り、そのコードに対して作用し、出力としてコードを生成します。手続マクロは、「`derive` マクロ」「属性マクロ」「関数風マクロ」の３種類があり、定義はいずれも、それ専用のクレート内に置かれる必要があります。

## `derive` マクロ

`derive` マクロは、`#[derive()]` 属性への入力とするマクロで、`struct` や `enum` への修飾を可能にします。

### 定義

`derive` マクロの定義には [`proc_macro_derive`](https://doc.rust-lang.org/reference/procedural-macros.html#derive-macros) 属性を使用します。

```rust title="例：derive マクロの定義"
#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    // ...
}
```

```rust title="例：derive マクロの利用"
use 

#[derive(HelloMacro)]
struct Pancakes;
```

## 属性マクロ

属性マクロは、新しい属性を作ることができるマクロです。

### 定義

属性マクロの定義には [`proc_macro_attribute`](https://doc.rust-lang.org/reference/procedural-macros.html#attribute-macros) を使用します。

```rust title="例：属性マクロ route の定義"
#[proc_macro_attribute]
pub fn route(attr: TokenStream, item: TokenStream) -> TokenStream {
    // ...
}

#[route(GET, "/")]
fn index() {
    // ...
}
```

## 関数風マクロ

関数風マクロは、関数呼び出しのように見えるマクロです。

### 定義

関数風マクロの定義には [`proc_macro`](https://doc.rust-lang.org/reference/procedural-macros.html#function-like-procedural-macros) 属性を使用します。

```rust title="例：関数風マクロ sql の定義"
#[proc_macro]
pub fn sql(input: TokenStream) -> TokenStream {
    // ...
}

let sql = sql!(SELECT * FROM posts WHERE id=1);
```

## 標準マクロ

標準ライブラリのプレリュードには、[標準マクロ](/notes/rust-crate-std#標準マクロ)が含まれていて、それらは明示的なインポートなしに使用することができます。

## 関連する外部リンク

- [マクロ - The Rust Programming Language](https://doc.rust-jp.rs/book-ja/ch19-06-macros.html)
- [Macros - The Rust Reference](https://doc.rust-lang.org/reference/macros.html)
- [The Little Book of Rust Macros](https://danielkeep.github.io/tlborm/book)