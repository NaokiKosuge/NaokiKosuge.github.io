---
slug: /rust-custom-types
sidebar_label: カスタム型
---

# 【Rust】カスタム型

## 構造体

キーワード `struct` で作成することができる構造体は３種類あります：

- 名前付きフィールド型構造体（C言語スタイルの構造体）

  ```rust
  struct Rectangle {
    width: u32,
    height: u32,
  }
  ```

- タプル構造体

  ```rust
  struct Pair(i32, i32);
  ```

  - ユニット様構造体

    ```rust
    struct Nil;
    ```
    
### インスタンス

```rust 
// インスタンス化
let　mut rect1 = Rectangle {
    width: 30,
    height: 50,
};

// フィールドにアクセス
println!("{}", rect1.width);  // 30

// フィールドの値を変更
rect1.width = 40;
```

- インスタンスを生成する

  すべてのフィールドの値を指定する必要があります。

- 特定のフィールドにアクセスする

  ドット記法でアクセスします。インスタンスが可変であれば、代入して値を変更できます。

- フィールド初期化記法

  フィールドと変数が同名の時に使える省略記法です。

  ```rust 
  let width = 30;
  let height = 50;
  let mut rect = Rectangle {
      width,
      height,
  };
  ```
  
### メソッド

**メソッド**は、構造体インスタンス（または列挙型かトレイトオブジェクト）のコンテキストで定義される関数のようなものです。

```rust
// ↓：構造体 Rectangle に実装する
impl Rectangle {
  // ↓：面積を計算するメソッド
  fn area(&self) -> u32 {
    self.width * self.height
  }
}

fn main() {
  let rect1 = Rectangle { width: 30, height: 50 };
  
  println!(
    "The area of the rectangle is {} square pixels.",
    // ↓：メソッドの呼び出し
    rect1.area()
  );
}
```

- 定義方法

  `impl` ブロックの中で第1引数に `self` を持つ関数を定義します。

  - `self` のバリエーション

    | 第1引数 | 所有権 | 可変性 |
    | --- | --- | --- |
    | `self` | 移動 | 不変 |
    | `&self` | 借用 | 不変 |
    | `mut self` | 移動 | 可変 |
    | `&mut self` | 借用 | 可変 |

- 呼び出し方法

  `rect1.area()` のように、構造体インスタンスのコンテキスト上で呼び出します。

### 関連関数

**関連関数**は、他言語で言うところの「クラスメソッド」や「スタティックメソッド」に相当します。

```rust
// ↓：構造体 Rectangle に実装する
impl Rectangle {
  // ↓：関連関数
  fn new(width: u32, height: u32) -> Rectangle {
    Rectangle {
      width,
      height,
    }
  }
}

fn main() {
  // ↓：関連関数の呼び出し
  let rect1 = Rectangle::new(30, 50);
}
```

:::note Rust における `new()`

Rust には、他の多くのオブジェクト指向言語に備わっている `new` 演算子がありません。代わりに、関連関数 `new` を定義することで `new` 演算子と同様の役割を模倣する Rust コミュニティの慣習があります。

:::

## 列挙型

キーワード `enum` で作成することができる**列挙型**は、異なるものの中から1つを選ぶような型です。列挙型で列挙された値のことを、**ヴァリアント**または列挙子と呼びます。

### ヴァリアント

- C言語スタイルのヴァリアント

  C言語スタイルのヴァリアントは、メモリ上では整数として表現されます：

  - 整数値を省略

    ```rust
    enum Ordering {
        Less,     // 0
        Equal,    // 1
        Greater,  // 2
    }
    ```
  
  - 整数値を指定

    ```rust
    enum HttpStatus {
        Ok = 200,
        NotModified = 304,
        NotFound = 404,
    }
    ```

- タプル型ヴァリアント

  ```rust
  enum IpAddr {
      V4(u8, u8, u8, u8),
      V6(String),
  }
  ```
  
- 構造体型ヴァリアント

  ```rust {3}
  enum Message {
      Quit,
      Move { x: i32, y: i32 },
      Write(String),
      ChangeColor(i32, i32, i32),
  }
  ```

### メソッド

構造体と全く同様に、列挙型にもメソッドを実装することができます。

```rust title="例：列挙型にメソッドを実装する"
/// 時間単位
#[derive(Copy, Clone, Debug, PartialEq)]
pub enum TimeUnit {
    Seconds, Minutes, Hours, Days, Months, Years,
}

impl TimeUnit {
    /// 時間単位に対して複数形の名詞を返す。
    pub fn plural(self) -> &'static str {
        match self {
            TimeUnit::Seconds => "seconds",
            TimeUnit::Minutes => "minutes",
            TimeUnit::Hours => "hours",
            TimeUnit::Days => "days",
            TimeUnit::Months => "months",
            TimeUnit::Years => "years",
        }
    }
    
    /// 時間単位の単数形の名詞を返す。
    pub fn singular(self) -> &'static str {
        self.plural().trim_right_matches('s')
    }
}
```

## パターンマッチング

```rust title="例：match アームで列挙型を利用する"
/// HTTP ステータスコード
pub enum HttpStatus {
    Ok = 200,
    NotModified = 304,
    NotFound = 404,
}

/// HTTP ステータスコードから `HttpStatus` ヴァリアントを返す。
pub fn http_status_from_u32(code: u32) -> Option<HttpStatus> {
    match code {
        200 => Some(HttpStatus::Ok),
        304 => Some(HttpStatus::NotModified),
        404 => Some(HttpStatus::NotFound),
        _ => None,
    }
}
```

## 型エイリアス

```rust
type Table = HashMap<String, Vec<String>>;
```

## 定数

Rust には2種類の定数があり、いずれもグローバルスコープで宣言することができ、また、いずれも型を明示する必要があります。

- `const` - 不変の値（通常はこちらを使用する）。
- `static` - スタティックなライフタイムを持つミュータブル（`mut`）な値。

```rust
const THRESHOLD: i32 = 10;
static LANGUAGE: &str = "Rust";
```