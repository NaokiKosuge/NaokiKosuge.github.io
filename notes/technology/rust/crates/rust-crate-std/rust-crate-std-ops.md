---
slug: /rust-crate-std-ops
sidebar_label: std::ops
---

# 【Rust】標準ライブラリ `std::ops`

> [`std::ops`](https://doc.rust-lang.org/std/ops/) は、特定の演算子をオーバーロードできるトレイトを提供します。

これらのトレイトの一部はプレリュードによってインポートされるため、すべての Rust プログラムで使用できます。トレイトに裏打ちされたオペレーターのみがオーバーロードできます。たとえば、加算演算子（`+`）は、[`Add`](https://doc.rust-lang.org/std/ops/trait.Add.html) トレイトを介してオーバーロードできますが、代入演算子（`=`）にはバッキングトレイトがないため、そのセマンティクスをオーバーロードする方法はありません。さらに、このモジュールは、新しいオペレーターを作成するためのメカニズムを提供しません。トレイトのないオーバーロードまたはカスタム演算子が必要な場合は、マクロまたはコンパイラプラグインを調べて、Rust の構文を拡張する必要があります。

演算子のトレイトの実装は、通常の意味と演算子の優先順位を念頭に置いて、それぞれのコンテキストで驚くべきことではありません。たとえば、[`Mul`](https://doc.rust-lang.org/std/ops/trait.Mul.html) を実装する場合、操作は乗算にある程度類似している必要があります（そして、結合法則などの期待されるプロパティを共有します）。

`&&` と `||` に注意してください演算子は短絡します。つまり、結果に寄与する場合にのみ、第2オペランドを評価します。この動作はトレイトによって強制できないため、`&&` および `||` オーバーロード可能な演算子としてはサポートされていません。

演算子の多くは、オペランドを値で取得します。組み込み型を含む非ジェネリックコンテキストでは、これは通常問題ではありません。ただし、ジェネリックコードでこれらの演算子を使用する場合、演算子に値を使用させるのではなく、値を再利用する必要がある場合は注意が必要です。 1つのオプションは、時々 [`clone`](https://doc.rust-lang.org/std/clone/trait.Clone.html#tymethod.clone) を使用することです。別のオプションは、参照用の追加の演算子実装を提供するために必要な型に依存することです。たとえば、加算をサポートすることになっているユーザー定義型 `T` の場合、`T` と `&T` の両方にトレイト `Add<T>` と `Add<&T>` を実装して、不要なクローンを作成せずにジェネリックコードを記述できるようにします。

- _構造体_
  - [`Range`](https://doc.rust-lang.org/std/ops/struct.Range.html) – 下を含み上を含む（半開きの）範囲（`start..end`）。
  - [`RangeFrom`](https://doc.rust-lang.org/std/ops/struct.RangeFrom.html) – 範囲は、以下（`start..`）を含む範囲でのみ制限されます。
  - [`RangeFull`](https://doc.rust-lang.org/std/ops/struct.RangeFull.html) – 無制限の範囲（`..`）。
  - [`RangeInclusive`](https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html) – 上下を包括的に制限する範囲（`start..= end`）。
  - [`RangeTo`](https://doc.rust-lang.org/std/ops/struct.RangeTo.html) – 排他的に上（..end）に限定される範囲。
  - [`RangeToInclusive`](https://doc.rust-lang.org/std/ops/struct.RangeToInclusive.html) – 上（`.. =end`）のみを含む範囲。
- _列挙型_
  - [`GeneratorState`](https://doc.rust-lang.org/std/ops/enum.GeneratorState.html) [実験的] – ジェネレータの再開の結果。
  - [`Bound`](https://doc.rust-lang.org/std/ops/enum.Bound.html) – キーの範囲のエンドポイント。
  - [`ControlFlow`](https://doc.rust-lang.org/std/ops/enum.ControlFlow.html) – 操作を早期に終了するか、通常どおり続行するかを指示するために使用されます。
- _トレイト_
  - [`CoerceUnsized`](https://doc.rust-lang.org/std/ops/trait.CoerceUnsized.html) [実験的] – これがポインタまたはラッパーであることを示すトレイト。ポインティに対してサイズ変更を実行できます。
  - [`DispatchFromDyn`](https://doc.rust-lang.org/std/ops/trait.DispatchFromDyn.html) [実験的] – これは、オブジェクトの安全性のために使用され、メソッドのレシーバー型をディスパッチできることを確認します。
  - [`FromResidual`](https://doc.rust-lang.org/std/ops/trait.FromResidual.html) [実験的] – どの残差をどの [`crate::ops::Try`](https://doc.rust-lang.org/std/ops/trait.Try.html) 型に変換できるかを指定するために使用されます。
  - [`Generator`](https://doc.rust-lang.org/std/ops/trait.Generator.html) [実験的] – 組み込みのジェネレータ型によって実装されるトレイト。
  - [`Try`](https://doc.rust-lang.org/std/ops/trait.Try.html) [実験的] – `?` 演算子と `try {}` ブロック。
  - [`Add`](https://doc.rust-lang.org/std/ops/trait.Add.html) – 加算演算子 `+`。
  - [`AddAssign`](https://doc.rust-lang.org/std/ops/trait.AddAssign.html) – 加算代入演算子 `+=`。
  - [`BitAnd`](https://doc.rust-lang.org/std/ops/trait.BitAnd.html) – ビットごとの AND 演算子 `&`。
  - [`BitAndAssign`](https://doc.rust-lang.org/std/ops/trait.BitAndAssign.html) – ビットごとの AND 代入演算子 `&=`。
  - [`BitOr`](https://doc.rust-lang.org/std/ops/trait.BitOr.html) – ビットごとの OR 演算子 `|`。
  - [`BitOrAssign`](https://doc.rust-lang.org/std/ops/trait.BitOrAssign.html) – ビットごとの OR 代入演算子 `|=`。
  - [`BitXor`](https://doc.rust-lang.org/std/ops/trait.BitXor.html) – ビット単位の XOR 演算子 `^`。
  - [`BitXorAssign`](https://doc.rust-lang.org/std/ops/trait.BitXorAssign.html) – ビット単位のXOR代入演算子 `^=`。
  - [`Deref`](https://doc.rust-lang.org/std/ops/trait.Deref.html) – `*v` などの不変の間接参照操作に使用されます。
  - [`DerefMut`](https://doc.rust-lang.org/std/ops/trait.DerefMut.html) – `*v = 1;` のように、可変の間接参照操作に使用されます。
  - [`Div`](https://doc.rust-lang.org/std/ops/trait.Div.html) – 除算演算子 `/`。
  - [`DivAssign`](https://doc.rust-lang.org/std/ops/trait.DivAssign.html) – 除算代入演算子 `/=`。
  - [`Drop`](https://doc.rust-lang.org/std/ops/trait.Drop.html) – デストラクタ内のカスタムコード。
  - [`Fn`](https://doc.rust-lang.org/std/ops/trait.Fn.html) – 不変のレシーバーを使用する呼び出し演算子のバージョン。
  - [`FnMut`](https://doc.rust-lang.org/std/ops/trait.FnMut.html) – 可変レシーバーを使用する呼び出し演算子のバージョン。
  - [`FnOnce`](https://doc.rust-lang.org/std/ops/trait.FnOnce.html) – 値による受信者を受け取る呼び出し演算子のバージョン。
  - [`Index`](https://doc.rust-lang.org/std/ops/trait.Index.html) – 不変のコンテキストでのインデックス作成操作（`container[index]`）に使用されます。
  - [`IndexMut`](https://doc.rust-lang.org/std/ops/trait.IndexMut.html) – 可変のコンテキストでのインデックス作成操作（`container[index]`）に使用されます。
  - [`Mul`](https://doc.rust-lang.org/std/ops/trait.Mul.html) – 乗算演算子 `*`。
  - [`MulAssign`](https://doc.rust-lang.org/std/ops/trait.MulAssign.html) – 乗算代入演算子 `*=`。
  - [`Neg`](https://doc.rust-lang.org/std/ops/trait.Neg.html) – 単項否定演算子 `-`。
  - [`Not`](https://doc.rust-lang.org/std/ops/trait.Not.html) – 単項論理否定演算子 `!`。
  - [`RangeBounds`](https://doc.rust-lang.org/std/ops/trait.RangeBounds.html) – `RangeBounds` は、`..`、`a..`、`..b`、`..=c`、`d..e`、`f..=g` などの範囲構文によって生成される Rust の組み込み範囲タイプによって実装されます。
  - [`Rem`](https://doc.rust-lang.org/std/ops/trait.Rem.html) – 剰余演算子 `%`。
  - [`RemAssign`](https://doc.rust-lang.org/std/ops/trait.RemAssign.html) – 剰余代入演算子 `%=`。
  - [`Shl`](https://doc.rust-lang.org/std/ops/trait.Shl.html) – 左シフト演算子 `<<`。このトレイトは複数の右側型を持つすべての整数型に実装されているため、Rust の型チェッカーは `_ << _` に対して特別な処理を行い、整数演算の結果型を左側のオペランドの型に設定することに注意してください。つまり、`<< b` と `a.shl(b)` は、評価の観点からは同じですが、型推論に関しては異なります。
  - [`ShlAssign`](https://doc.rust-lang.org/std/ops/trait.ShlAssign.html) – 左シフト代入演算子 `<<=`。
  - [`Shr`](https://doc.rust-lang.org/std/ops/trait.Shr.html) – 右シフト演算子 `>>`。このトレイトは複数の右側型を持つすべての整数型に実装されているため、Rust の型チェッカーは `_ >> _` に対して特別な処理を行い、整数演算の結果型を左側のオペランドの型に設定することに注意してください。つまり、`>> b`と `a.shr(b)` は、評価の観点からは同じですが、型推論に関しては異なります。
  - [`ShrAssign`](https://doc.rust-lang.org/std/ops/trait.ShrAssign.html) – 右シフト代入演算子 `>>=`。
  - [`Sub`](https://doc.rust-lang.org/std/ops/trait.Sub.html) – 減算演算子 `-`。
  - [`SubAssign`](https://doc.rust-lang.org/std/ops/trait.SubAssign.html) – 減算代入演算子 `-=`。

## 例

この例では、[`Add`](https://doc.rust-lang.org/std/ops/trait.Add.html) と [`Sub`](https://doc.rust-lang.org/std/ops/trait.Sub.html) を実装する `Point` 構造体を作成し、2つの `Point` の加算と減算を示します。

```rust
use std::ops::{Add, Sub};

#[derive(Debug, Copy, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Self {x: self.x + other.x, y: self.y + other.y}
    }
}

impl Sub for Point {
    type Output = Self;

    fn sub(self, other: Self) -> Self {
        Self {x: self.x - other.x, y: self.y - other.y}
    }
}

assert_eq!(Point {x: 3, y: 3}, Point {x: 1, y: 0} + Point {x: 2, y: 3});
assert_eq!(Point {x: -1, y: -3}, Point {x: 1, y: 0} - Point {x: 2, y: 3});
```

実装例については、各トレイトのドキュメントを参照してください。

`Fn`、`FnMut`、および `FnOnce` トレイトは、関数のように呼び出すことができる型によって実装されます。`Fn` は `&self` を取り、`FnMut` は `&mut self` を取り、`FnOnce` は `self` を取ります。これらは、インスタンスで呼び出すことができる3種類のメソッド（参照による呼び出し、可変参照による呼び出し、および値による呼び出し）に対応します。これらのトレイトの最も一般的な使用法は、関数またはクロージャを引数として取る高レベルの関数への境界として機能することです。

- ```rust title="例：Fn をパラメータとして使用"
  fn call_with_one<F>(func: F) -> usize
      where F: Fn(usize) -> usize
  {
      func(1)
  }
  
  let double = |x| x * 2;
  assert_eq!(call_with_one(double), 2);
  ```

- ```rust title="例：FnMut をパラメータとして使用"
  fn do_twice<F>(mut func: F)
      where F: FnMut()
  {
      func();
      func();
  }
  
  let mut x: usize = 1;
  {
      let add_two_to_x = || x += 2;
      do_twice(add_two_to_x);
  }
  
  assert_eq!(x, 5);
  ```

- ```rust title="例：FnOnce をパラメータとして使用"
  fn consume_with_relish<F>(func: F)
      where F: FnOnce() -> String
  {
      // `func` はキャプチャされた変数を消費するため、複数回実行することはできません
      println!("Consumed: {}", func());
  
      println!("Delicious!");
  
      // もう一度 `func()` を呼び出そうとすると、`func` に対して `移動された値の使用` エラーがスローされます。
  }
  
  let x = String::from("x");
  let consume_and_return_x = move || x;
  consume_with_relish(consume_and_return_x);
  
  // この時点で `consume_and_return_x` を呼び出すことはできなくなりました
  ```
