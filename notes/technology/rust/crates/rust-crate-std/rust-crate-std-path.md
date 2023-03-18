---
slug: /rust-crate-std-path
sidebar_label: std::path
---

# 【Rust】標準ライブラリ `std::path`

[`std:path`](https://doc.rust-lang.org/std/path/) は、クロスプラットフォームのパス操作に関するメンバーを提供します。

このモジュールは、パスを抽象的に操作するために、`PathBuf` と `Path`（`String` と `str` に類似）の2つのタイプを提供します。これらのタイプは、それぞれ `OsString` と `OsStr` の薄いラッパーです。つまり、ローカルプラットフォームのパス構文に従って文字列を直接処理します。

`Path` の `components` メソッドによって返される構造を反復処理することにより、`Path` を `Components` に解析できます。コンポーネントは、パス区切り文字（`/` または `\`）間のサブストリングにほぼ対応します。`PathBuf` の `push` メソッドを使用して、コンポーネントから同等のパスを再構築できます。コンポーネントメソッドのドキュメントで説明されている正規化によって、パスが構文的に異なる場合があることに注意してください。

- _構造体_
  - [`Ancestors`](https://doc.rust-lang.org/std/path/struct.Ancestors.html) — [`Path`](https://doc.rust-lang.org/std/path/struct.Path.html) とその祖先のイテレータ。
  - [`Components`](https://doc.rust-lang.org/std/path/struct.Components.html) — [`Path`](https://doc.rust-lang.org/std/path/struct.Path.html) の [`Component`](https://doc.rust-lang.org/std/path/enum.Component.html) に対するイテレータ。
  - [`Display`](https://doc.rust-lang.org/std/path/struct.Display.html) — [`format!`](https://doc.rust-lang.org/std/macro.format.html) と `{}` を使用してパスを安全に印刷するためのヘルパー構造体。
  - [`iter`](https://doc.rust-lang.org/std/path/struct.Iter.html) — [`OsStr`](https://doc.rust-lang.org/std/ffi/struct.OsStr.html) スライスとしての [`Path`](https://doc.rust-lang.org/std/path/struct.Path.html) の [`Component`](https://doc.rust-lang.org/std/path/enum.Component.html) に対するイテレータ。
  - [`Path`](https://doc.rust-lang.org/std/path/struct.Path.html) — パスのスライス（[`str`](https://doc.rust-lang.org/std/primitive.str.html) に似ています）。
  - [`PathBuf`](https://doc.rust-lang.org/std/path/struct.PathBuf.html) — 所有された可変パス（[`String`](https://doc.rust-lang.org/std/string/struct.String.html) に類似）。
  - [`PrefixComponent`](https://doc.rust-lang.org/std/path/struct.PrefixComponent.html) — Windows パスプレフィックスとその未解析の文字列表現をラップする構造。
  - [`StripPrefixError`](https://doc.rust-lang.org/std/path/struct.StripPrefixError.html) — プレフィックスが見つからなかった場合、[`Path::strip_prefix`](https://doc.rust-lang.org/std/path/struct.Path.html#method.strip_prefix) からエラーが返されました。
- _列挙型_
  - [`Component`](https://doc.rust-lang.org/std/path/enum.Component.html) — パスの単一のコンポーネント。
  - [`Prefix`](https://doc.rust-lang.org/std/path/enum.Prefix.html) — Windowsパスプレフィックス（例：`C:` または `\\server\share`）。
- _定数_
  - [`MAIN_SEPARATOR`](https://doc.rust-lang.org/std/path/constant.MAIN_SEPARATOR.html) — 現在のプラットフォームのパスコンポーネントのプライマリセパレータ。
- _関数_
  - [`is_separator`](https://doc.rust-lang.org/std/path/fn.is_separator.html) — 文字が現在のプラットフォームで許可されているパス区切り文字の1つであるかどうかを判別します。

## 簡単な使い方

パス操作には、スライスからのコンポーネントの解析と、新しい所有パスの構築の両方が含まれます。

パスを解析するには、`str` スライスから `Path` スライスを作成し、質問を開始します：

```rust 
use std::path::Path;
use std::ffi::OsStr;

let path = Path::new("/tmp/foo/bar.txt");

let parent = path.parent();
assert_eq!(parent, Some(Path::new("/tmp/foo")));

let file_stem = path.file_stem();
assert_eq!(file_stem, Some(OsStr::new("bar")));

let extension = path.extension();
assert_eq!(extension, Some(OsStr::new("txt")));
```

パスを作成または変更するには、`PathBuf` を使用します：

```rust 
use std::path::PathBuf;

// This way works...
let mut path = PathBuf::from("c:\\");

path.push("windows");
path.push("system32");

path.set_extension("dll");

// ... but push is best used if you don't know everything up
// front. If you do, this way is better:
let path: PathBuf = ["c:\\", "windows", "system32.dll"].iter().collect();
```
