---
slug: /rust-closure
sidebar_label: クロージャ
---

# 【Rust】クロージャ

クロージャは、変数に保存したり、引数として他の関数に渡すことのできる匿名関数です－－或いはラムダ関数とも呼ばれます。－－関数とは異なり、関数の中で定義され、そして呼び出されたスコープの値をキャプチャすることができます。

## 変数のキャプチャ

クロージャは、外側の関数に属するデータを使うことが出来ます。その際に、それら値の所有権を、**借用** するのか、**移動** するのかによって扱いが異なってきます。

### 所有権を借用するクロージャ

```rust
/// 何らかの統計情報でソート
fn sort_by_statistic(cities: &mut Vec<City>, stat: Statistic) {
    cities.sort_by_key(|city| -city.get_statistic(stat));
}
```

### 所有権を移動するクロージャ

`move` キーワードをつけることで、所有権を移動させます。

```rust
use std::thread;

fn start_sorting_thread(mut cities: Vec<City>, stat: Statistic)
    -> thread::JoinHandle<Vec<City>>
{
    let key_fn = move |city: &City| -> i64 { -city.get_statistic(stat) };
    thread::spawn(move || {
        cities.sort_by_key(key_fn);
        cities
    })
}
```

### キャプチャを使うためのガイドライン

- コンパイル時の衝突を減らすために [`Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html) トレイトを実装すること。
- 外部空間を起源とする値には、静的なライフタイムを持たせる必要がある。
- 生成されたサブスレッドは、親スレッドよりも長生きするかもしれないから、`move` キーワードで所有権をサブスレッドに渡すべき。

## クロージャの型

クロージャを表す型は3つあります：

- [`Fn()`](https://doc.rust-lang.org/std/ops/trait.Fn.html) — 環境から値を**不変で借用**します。
- [`FnMut()`](https://doc.rust-lang.org/std/ops/trait.FnMut.html) — 環境から値を**可変で借用**します。
- [`FnOnce()`](https://doc.rust-lang.org/std/ops/trait.FnOnce.html) — 環境から値の所有権を**移動**します。従って、1回しか呼び出せません。

`Fn()` は、`FnMut()` のサブトレイトとなっており、`FnMut()` は `FnOnce()` のサブトレイトとなっています。`Fn` は最も限定的で、最も強力な種類のクロージャです。`FnMut` と `FnOnce` はカテゴリとしては広く、利用方法が制限されるクロージャとなります。