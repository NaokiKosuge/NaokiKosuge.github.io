---
slug: /rust-generics
sidebar_label: ジェネリクス
---

# 【Rust】ジェネリクス

> **ジェネリクス**は、具体型や他のプロパティの抽象的な代役です。

## いろいろな場面でのジェネリクス

### 関数定義

```rust
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}
```

### 構造体定義

```rust
struct Point<T> {
    x: T,
    y: T,
}
```

### 列挙型定義

```rust
enum Option<T> {
    Some(T),
    None,
}
```

### メソッド定義

```rust
impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}
```

### トレイト定義

```rust
pub trait Mul<RHS> {
    type Output;

    fn mul(self, rhs: RHS) -> Self::Output;
}
```
