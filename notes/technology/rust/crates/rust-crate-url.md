---
slug: /rust-crate-url
sidebar_label: url
---

# 【Rust】クレート `url`

> [rust-url](https://docs.rs/url/latest/url/) は、Rust プログラミング言語の URL 標準の実装です。


- _再エクスポート_
  - [`form_urlencoded`](https://docs.rs/form_urlencoded/1.0.1/form_urlencoded/index.html) — HTML フォームで使用される `application/x-www-form-urlencoded` 構文のパーサーとシリアライザー。
- _構造体_
  - [`OpaqueOrigin`](https://docs.rs/url/latest/url/struct.OpaqueOrigin.html) — ファイルまたは他のスキームを持つ URL の不透明な識別子
  - [`ParseOptions`](https://docs.rs/url/latest/url/struct.ParseOptions.html) — URL パーサーの完全な構成。
  - [`PathSegmentsMut`](https://docs.rs/url/latest/url/struct.PathSegmentsMut.html) — ベースにできない URL のパスを操作するメソッドを公開します。
  - [`Url`](https://docs.rs/url/latest/url/struct.Url.html) — 解析された URL レコード。
  - [`UrlQuery`](https://docs.rs/url/latest/url/struct.UrlQuery.html) — `Url::query_pairs_mut` の実装の詳細。通常、直接使用されません。
- _列挙型_
  - [`Host`](https://docs.rs/url/latest/url/enum.Host.html) — URL のホスト名。
  - [`Origin`](https://docs.rs/url/latest/url/enum.Origin.html) — URL の発信元
  - [`ParseError`](https://docs.rs/url/latest/url/enum.ParseError.html) — 解析中に発生する可能性のあるエラー。
  - [`Position`](https://docs.rs/url/latest/url/enum.Position.html) — コンポーネントに基づいて URL 内の位置を示します。
  - [`SyntaxViolation`](https://docs.rs/url/latest/url/enum.SyntaxViolation.html) — 解析中に発生する可能性のある致命的ではない構文違反。
- _型定義_
  - [`EncodingOverride`]

## URL の解析とデータ構造

まず、URL の解析はさまざまな理由で失敗する可能性があるため、`Result` が返されます。

```rust
use url::{Url, ParseError};

assert!(Url::parse("http://[:::1]") == Err(ParseError::InvalidIpv6Address))
```

有効な URL を解析して、そのコンポーネントを見てみましょう。

```rust 
use url::{Url, Host, Position};
let issue_list_url = Url::parse(
    "https://github.com/rust-lang/rust/issues?labels=E-easy&state=open"
)?;


assert!(issue_list_url.scheme() == "https");
assert!(issue_list_url.username() == "");
assert!(issue_list_url.password() == None);
assert!(issue_list_url.host_str() == Some("github.com"));
assert!(issue_list_url.host() == Some(Host::Domain("github.com")));
assert!(issue_list_url.port() == None);
assert!(issue_list_url.path() == "/rust-lang/rust/issues");
assert!(issue_list_url.path_segments().map(|c| c.collect::<Vec<_>>()) ==
        Some(vec!["rust-lang", "rust", "issues"]));
assert!(issue_list_url.query() == Some("labels=E-easy&state=open"));
assert!(&issue_list_url[Position::BeforePath..] == "/rust-lang/rust/issues?labels=E-easy&state=open");
assert!(issue_list_url.fragment() == None);
assert!(!issue_list_url.cannot_be_a_base());
```

一部の URL は、ベースにできないと言われています。ユーザー名、パスワード、ホスト、またはポートがなく、「パス」はスラッシュで区切られたセグメントではなく、任意の文字列です：

```rust 
use url::Url;

let data_url = Url::parse("data:text/plain,Hello?World#")?;

assert!(data_url.cannot_be_a_base());
assert!(data_url.scheme() == "data");
assert!(data_url.path() == "text/plain,Hello");
assert!(data_url.path_segments().is_none());
assert!(data_url.query() == Some("World"));
assert!(data_url.fragment() == Some(""));
```

## Serde

`serde` 機能を有効にして、`url::Url` の `Deserialize` および `Serialize` 実装を含めます。

## ベース URL

多くのコンテキストでは、ベース URL に相対的な URL 参照が許可されています。

```html 
<link rel="stylesheet" href="../main.css">
```

解析された URL は絶対的なものであるため、相対 URL を解析するにはベースを指定する必要があります。

```rust
use url::{Url, ParseError};

assert!(Url::parse("../main.css") == Err(ParseError::RelativeUrlWithoutBase));
```

`Url` で `join` メソッドを使用して、それをベース URL として使用します：

```rust 
use url::Url;

let this_document = Url::parse("http://servo.github.io/rust-url/url/index.html")?;
let css_url = this_document.join("../main.css")?;
assert_eq!(css_url.as_str(), "http://servo.github.io/rust-url/main.css");
```

## Feature: `serde`

`serde` 機能を有効にすると、[`Url`](https://docs.rs/url/latest/url/struct.Url.html) は [`serde::Serialize`](https://docs.rs/serde/1/serde/trait.Serialize.html) と [`serde::Deserialize`](https://docs.rs/serde/1/serde/trait.Deserialize.html) を実装します。詳細については、[serde のドキュメント](https://serde.rs/) を参照してください。

```toml title="Cargo.toml"
[dependencies]
url = { version = "2", features = ["serde"] }
```
