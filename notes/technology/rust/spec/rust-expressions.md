---
slug: /rust-expressions
sidebar_label: 式
---

# 【Rust】式

**式**は、**文**とは異なり、値があります。例えば、C 言語の `if` 文は、式ではないため、値を初期化するのには使えません。Rust の `if` 式は式なので、三項演算子のように値を初期化するのに使えます。

## `if`

```rust 
if condition1 {
    block1
} else if condition2 {
    block2
} else {
    block_n
}
```

## `if`-`let`

与えられた _`expr`_ が _`pattern`_ にマッチするなら _`block1`_ が実行され、マッチしなければ _`block2`_ が実行されます：

```rust 
if let pattern = expr {
    block1
} else {
    block2
}
```

## `match`

与えられた _`value`_ に対して、個々のパターンを上から順に適用していき、最初にパターンがマッチするとそれに対応する _`expr`_ が評価され、その時点で `match` 式は終了します。少なくとも1つのパターンがマッチしなければなりません：

```rust 
match value {
    pattern1 => expr1,
    ...
}
```

```rust 
match expr {
    pattern => { block1 }
    _ => { block2 }
}
```

## `while`

```rust 
while condition {
    block
}
```

## `while`-`let`

ループの各繰り返しの最初に _`expr`_ が _`pattern`_ にマッチするかを確かめ、マッチすれば _`block`_ が実行され、マッチしなければループから抜けます：

```rust 
while let pattern = expr {
    block
}
```

## `loop`

```rust 
loop {
    block
}
```

## `for`-`in`

```rust 
for pattern in condition {
    block
}
```

## `break`, `continue`

`break` 式と `continue` 式はループ式（`while`, `while-let`, `loop`, `for-in`）の中で用います。

- `break;`: 現在のループを中断する
- `break '<label>;`: ラベルが指すループを中断する
- `continue;`: 現在のループの次の回に飛ぶ
- `continue '<label>;`: ラベルが指すループの次の回に飛ぶ

## `return`

`return` 式は現在の関数から脱出し、値を呼び出し元に返します。