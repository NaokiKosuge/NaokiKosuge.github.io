---
slug: /rust-ownership
sidebar_label: 所有権
---

# 【Rust】所有権

## 所有権の確保とドロップ

```rust
fn print_padovan() {
    let mut padovan = vec![1, 1, 1];  // ここで確保
    for i in 3..10 {
        let next = padovan[i - 3] + padovan[i - 2];
        padovan.push(next);
    }
    println!("P(1..10) = {:?}", padovan);
}                                     // ここでドロップ
```

## 所有権の移動

Rust では、ほとんどすべての型が、変数への値の代入、関数への引数の受け渡し、関数からの返り値の返却の際にコピーされず、**移動**されます。受け渡し元は、値の所有権を受け渡し先に引き渡し、未初期化状態になります。以降、受け渡し先が値の生存期間を制御することになります。尚、Rust は、未初期化状態の値の使用はコンパイル時にエラーとなります。

```rust 
let s = vec!["udon".to_string(), "ramen".to_string(), "soba".to_string()];
let t = s;
// この時点では s は未初期化状態
let u = s;
// この時点では s, t は未初期化状態
```


:::note Copy 型

一部の型では、変数への値の代入、関数への引数の受け渡し、関数からの返り値の返却の際に移動されません。そのような型を **Copy 型**と呼びます。

構造体はデフォルトでは Copy 型ではありませんが、すべてのフィールドが Copy 型なのであれば、構造体も Copy 型にすることができます:

```rust {1}
#derive(Copy, Clone)
struct label { number: u32 };
```

:::