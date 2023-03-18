---
slug: /rust-unsafe
sidebar_label: unsafe
---

# 【Rust】unsafe

## `unsafe` ブロック

- `unsafe { ... }`
- 関数 — (例) `unsafe fn foo { ... }`
- トレイト — (例) `unsafe trait Foo { ... }`
- 実装 — (例) `unsafe impl Foo for i32 { ... }`

## `unsafe` 内で許可されること

- [生ポインタを参照外しすること](#unsafe-raw-pointer)
- [unsafe な関数やメソッドを呼びぶこと](#unsafe-fn)
- [可変で静的な変数にアクセスしたり変更すること](#unsafe-static)
- [unsafe なトレイトを実行すること](#unsafe-trait)

### 生ポインタを参照外しすること {#unsafe-raw-pointer}

Rust における生ポインタには2つの型があります：

- 不変な生ポインタ — `*const T` で表記される。
- 可変な生ポインタ — `*mut T` で表記される。

生ポインタの生成は `unsafe` ブロックの外でも行えますが、参照外しは `unsafe` ブロック内でしか許可されていません。

```rust title="例：unsafe ブロック内で生ポインタを参照外しする"
let mut num = 5;

let r1 = &num as *const i32;
let r2 = &mut num as *mut i32;

unsafe {
    println!("r1 is: {}", *r1);
    println!("r2 is: {}", *r2);
}
```

:::note NOTE

`*const T` 及び `*mut T` の `*` は**参照外し演算子**ではありません。

:::

### unsafe な関数やメソッドを呼ぶこと {#unsafe-fn}

- _関数やメソッドを `unsafe` とすることで、`unsafe` ブロックの内側で呼ばれることを強制できます。_

  ```rust title="例：unsafe にした関数の呼び出し"
  unsafe fn dangerous() {}

  // ok
  unsafe {
      dangerous();
  }

  // error
  dangerous();
  ```

  ここで注意点があります。関数が unsafe なコードを含んでいるだけで `unsafe` をマークする必要があることにはなりません。関数内で、unsafe なコードが `unsafe` ブロックで囲まれていれば、別の `unsafe` ブロックは必要ないのです：

  ```rust title="例：split_at_mut 関数の実装で unsafe コードを使用する"
  use std::slice;
  
  fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
      let len = slice.len();
      let ptr = slice.as_mut_ptr();

      assert!(mid <= len);
  
      unsafe {
          (slice::from_raw_parts_mut(ptr, mid),
           slice::from_raw_parts_mut(ptr.offset(mid as isize), len - mid))
      }
  }
  ```

- _他の言語で書かれたコードも `unsafe` ブロック内で呼び出す必要があります。_

  C言語など、他の言語で定義された関数は `extern` キーワードで宣言をして使用します。

  ```rust title="例：C言語で定義された extern 関数を宣言し、呼び出す"
  extern "C" {
      fn abs(input: i32) -> i32;
  }
  
  fn main() {
      unsafe {
          println!("-3 の絶対値は、Cによると {}", abs(-3));
      }
  }
  ```
  
  :::tip 他の言語から Rust の関数を呼び出す

  unsafe のトピックではありませんが、関数定義の際に `extern` キーワードと <abbr title="application binary interface">ABI</abbr> を追加することで、他の言語に Rust の関数を呼ばせるインターフェイスを生成することができます。この際、[`#[no_mangle]`](https://doc.rust-lang.org/reference/abi.html#the-no_mangle-attribute) 注釈を追加して Rust コンパイラに関数名をマングルしないように指示する必要もあります。

  ```rust
  #[no_mangle]
  pub extern "C" fn call_from_c() {
      println!("C から Rust 関数を呼び出したばかり！");
  }
  ```

  :::

### 可変で静的な変数にアクセスしたり変更すること {#unsafe-static}

Rust では、グローバル変数は、**static**（静的）変数と呼ばれます。静的変数は、`'static` ライフタイムの参照のみ格納でき、可変（`static`）と不変（`static mut`）の2つがあります。そして、宣言時には型を注釈する必要があります。

グローバルにアクセス可能な可変データがあると、データ競合がないことを保証するのは難しく、そのため、Rust は可変な静的変数を unsafe と考えます。

```rust title="例：可変な静的変数を読んだり書き込んだりするのは unsafe である"
static mut COUNTER: u32 = 0;

fn add_to_count(inc: u32) {
    // 書き込み
    unsafe {
        COUNTER += inc;
    }
}

fn main() {
    add_to_count(3);

    // 読み込み
    unsafe {
        println!("COUNTER: {}", COUNTER);
    }  
}
```

:::note 定数と静的変数の違い

- _`const` と `static`_

  不変な静的変数の値は固定されたメモリアドレスになるのに対して、定数の値は使用される度にデータを複製させることができます。

- _`const` と `static mut`_

  定数は常に不変ですが、静的変数は可変にもなります。尚、可変な静的変数にアクセスし変更することは、 unsafe です。

:::

### unsafe なトレイトを実行すること {#unsafe-trait}

`trait` の前に `unsafe` キーワードを追加し、トレイトの実装も `unsafe` でマークすることで、トレイトが unsafe であることを宣言できます。

```rust title="例：unsafe なトレイトを定義して実装する"
unsafe trait Foo {}

unsafe impl Foo for i32 {}
```

