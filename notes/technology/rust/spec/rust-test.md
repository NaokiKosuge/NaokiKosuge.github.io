---
slug: /rust-test
sidebar_label: テスト
---

# 【Rust】テスト

## テストの判定

### アサーション

テストコードでは、3種類の **アサーションマクロ** を用いて値の確認を行います：

- [`asert!()`](https://doc.rust-lang.org/std/macro.assert.html) — 実行時にブール式が真であることを表明します。

  ```rust {2,6,10,14}
  // これらのアサーションのパニックメッセージは、指定された式の文字列化された値です。
  assert!(true);

  fn some_computation() -> bool { true } // 非常にシンプルな関数

  assert!(some_computation());
  
  // カスタムメッセージでアサート
  let x = true;
  assert!(x, "x は true ではありませんでした！");

  let a = 3;
  let b = 27;
  assert!(a + b == 30, "a = {}, b = {}", a, b);
  ```

- [`assert_eq!()`](https://doc.rust-lang.org/std/macro.assert_eq.html) — 2つの式が互いに等しいことを表明します。

  ```rust {3,5}
  let a = 3;
  let b = 1 + 2;
  assert_eq!(a, b);

  assert_eq!(a, b, "{} と {} で加算をテストしています", a, b);
  ```

- [`assert_ne!()`](https://doc.rust-lang.org/std/macro.assert_ne.html) — 2つの式が互いに等しくないことを表明します。

  ```rust {3,5}
  let a = 3;
  let b = 2;
  assert_ne!(a, b);

  assert_ne!(a, b, "値が等しくないことをテストしています");
  ```
  
### パニック

テストを失敗させる1つの方法は、`panic!` マクロを使うことです。

```rust {3}
#[test]
fn test() {
    panic!("このテストを失敗させる");
}
```

### `Result` 型

`Result` 型を用いてテストすることもできます

```rust
#[test]
fn it_works() -> Result<(), String> {
    if 2 + 2 == 4 {
        Ok(())
    } else {
        Err(String::from("「2+2」は「4」に等しくない"))
    }
}
```

## 属性

テストに関連した属性は4つあります：

- [`#[cfg(test)]`](https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg-attribute) — テスト時のみコンパイルします。

  ```rust {1}
  #[cfg(test)]
  mod tests {
      #[test]
      fn my_test() {
          // ...
      }
  }
  ```

- [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) — テストとして実行される関数をマークします。関数の戻り値は、`()` または `Result<(), E> where E: Error` である必要があります。

  ```rust {1}
  #[test]
  fn test_the_thing() -> io::Result<()> {
      let state = setup_the_thing()?; // expected to succeed
      do_the_thing(&state)?;          // expected to succeed
      Ok(())
  }
  ```

- [`#[ignore]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-ignore-attribute) — テスト機能を無効にします。

  ```rust {2}
  #[test]
  #[ignore = "まだ実装されていません"]
  fn mytest() {
    // …
  }
  ```

- [`#[should_panic]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-should_panic-attribute) — テストでパニックが発生する必要があることを示します。

  ```rust {3,10}
  // 関数内のコードがパニックしたら、テストを通過させます。
  #[test]
  #[should_panic]
  fn test_panic() {
      panic!("パニック発生！");
  }
  
  // こちらは、特定のパニックメッセージと一致するパニックが発生したら、テストを通過させます。
  #[test]
  #[should_panic(expected = "パニック発生！")]
  fn test _panic_with_message() {
      panic!("パニック発生！")
  }
  ```

## テスト体系

Rust におけるテストは、 **単体テスト** と **結合テスト**、そして **ドクテスト** に分けられます。

### 単体テスト

単体テストの目的は、残りのコードから切り離して各単位のコードをテストし、 コードが想定通り、動いたり動いていなかったりする箇所を迅速に特定することです。

```rust title="単体テストの例（src/lib.rs）"
pub fn add_two(a: i32) -> i32 {
    internal_adder(a, 2)
}

fn internal_adder(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    // 公開関数のテスト
    #[test]
    fn external() {
        assert_eq!(5, add_two(3));
    }

    // 非公開関数のテスト
    use super::*;
    #[test]
    fn internal() {
        assert_eq!(4, internal_adder(2, 2));
    }
}
```

- 単体テストは、テスト対象となるコードと共に、`src` ディレクトリの各ファイルに置きます。
- そして、各ファイルに、条件付きコンパイルの属性 `#[cfg(test)]` で注釈された `tests` モジュールを作り、`#[test]` で注釈されたテスト関数を含ませます。
- 非公開関数をテストするかはプロジェクトの方針次第ですが、行う場合は、`use super::*` でメンバーをインポートする必要があります。

### 結合テスト

結合テストの目的は、ライブラリのいろんな部分が共同で正常に動作しているかをテストすることです。そのため、テストはライブラリの外部で行います。

```rust title="結合テストの例（tests/integration_test.rs）"
extern crate adder;

#[test]
fn it_adds_two() {
    assert_eq!(4, adder::add_two(2));
}
```

- 結合テストは、ライブラリの外部から公開 API をテストするため、`src` ディレクトリの隣に `tests` ディレクトリを作成し、その中にテストファイルを作成します。
- `tests` ディレクトリの各ファイルはそれぞれが個別のクレートであるため、ファイル冒頭で `extern crate` でテスト対象ライブラリをインポートします。
- テストコードは、`#[test]` で注釈されたテスト関数を作成し、その中に記述します。

### ドクテスト

ドクテストは、ドクコメント内に書かれた Rust コードがテストされる仕組みです。

```rust title="ドクテストの例（src/lib.rs）" {5-6,10}
use std::ops::Range;

/// 2つの Range に重なる部分があれば true を返す。
///
///     assert_eq!(ranges::overlap(0..7, 3..10), true);
///     assert_eq!(ranges::overlap(1..5, 101..105), false);
///
/// どちらかの範囲が空であれば、重なっていないことにする。
///
///     assert_eq!(ranges::overlap(0..0, 0..10), false);
///
pub fn overlap(r1: Range<usize>, r2: Range<usize>) -> bool {
    r1.start < r1.end && r2.start < r2.end &&
        r1.start < r2.end && r2.start < r1.end
}
```

#### ドキュメントには表示しないコード

ドクコメントを元に生成されたドキュメントに表示させたくないコードラインあある場合、行頭に `#` を付けます。これにより、ドクテストではコードが実行されますが、ドキュメントには表示されません。

```rust {3-5}
/// 太陽を光らせて、指定された時間だけ、シミュレーションを実行する。
///
/// # use fern_sim::Terrarium;
/// # use std::time::Duration;
/// # let mut tm = Terrarium::new();
/// tm.apply_sunlight(Duration::from_secs(60));
///
pub fn apply_sunlight(&mut self, time: Duration) {
    /* 省略 */
}
```

#### コードブロックをコンパイルするが実行しない

コードブロック例をコンパイルするが実行しないようにするには、フェンスコードブロックに `no_run` 属性を付けて指定します。

``` rust {3-6}
/// すべてのローカルなテラリウムをオンラインギャラリーにアップロードする
///
/// ```no_run
/// let mut session = fern_sim::connect();
/// session.upload_all();
/// ```
pub fn upload_all(&mut self) {
    /* 省略 */
}
```

#### コードブロックをコンパイルしない

コードブロック例をコンパイルしないようにするには、フェンスコードブロックに `ignore` を付けて指定します。そもそも Rust コードではない場合は、その言語の名前か、`text` を付けて指定します。

``` rust {3-6}
/// すべてのローカルなテラリウムをオンラインギャラリーにアップロードする
///
/// ```ignore
/// let mut session = fern_sim::connect();
/// session.upload_all();
/// ```
pub fn upload_all(&mut self) {
    /* 省略 */
}
```

## テストの実行

`cargo test` コマンドでプロジェクトにあるテストが全て実行されます。

```text title="例：テストコマンドの実行" {1}
$ cargo test
   Compiling adder v0.1.0 (file:///projects/adder)
    Finished test [unoptimized + debuginfo] target(s) in 0.57s
     Running target/debug/deps/adder-92948b65e88960b4

running 1 test
test tests::it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

   Doc-tests adder

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```