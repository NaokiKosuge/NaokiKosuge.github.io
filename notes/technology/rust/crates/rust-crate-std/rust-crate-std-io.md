---
slug: /rust-crate-std-io
sidebar_label: std::io
---

# 【Rust】標準ライブラリ `std::io`

> コア I/O 機能のトレイト、ヘルパー、および型定義。

[`std::io`](https://doc.rust-lang.org/std/io/) モジュールには、入出力を行うときに必要となる一般的なものがいくつか含まれています。このモジュールの最もコアな部分は、[`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) と [`Write`](https://doc.rust-lang.org/std/io/trait.Write.html) のトレイトです。これは、入力と出力の読み取りと書き込みのための最も一般的なインターフェイスを提供します。

- _モジュール_
  - [`prelude`](https://doc.rust-lang.org/std/io/prelude/index.html) — I/O プレリュード。
- _構造体_
  - [`Initializer`](https://doc.rust-lang.org/std/io/struct.Initializer.html) [実験的] — `Read` メソッドに渡されるバッファーを条件付きで初期化するために使用される型。
  - [`BufReader`](https://doc.rust-lang.org/std/io/struct.BufReader.html) — `BufReader<R>` 構造体は、任意のリーダーにバッファリングを追加します。
  - [`BufWriter`](https://doc.rust-lang.org/std/io/struct.BufWriter.html) — ライターをラップし、その出力をバッファリングします。
  - [`Bytes`](https://doc.rust-lang.org/std/io/struct.Bytes.html) — リーダーの `u8` 値に対するイテレーター。
  - [`Chain`](https://doc.rust-lang.org/std/io/struct.Chain.html) — 2つのリーダーをチェーン接続するためのアダプター。
  - [`Cursor`](https://doc.rust-lang.org/std/io/struct.Cursor.html) — `Cursor` はメモリ内のバッファをラップし、[`Seek`](https://doc.rust-lang.org/std/io/trait.Seek.html) の実装を提供します。
  - [`Empty`](https://doc.rust-lang.org/std/io/struct.Empty.html) — 常にEOFにあるリーダー。
  - [`Error`](https://doc.rust-lang.org/std/io/struct.Error.html) — [`Read`](https://doc.rust-lang.org/std/io/trait.Read.html)、[`Write`](https://doc.rust-lang.org/std/io/trait.Write.html)、[`Seak`](https://doc.rust-lang.org/std/io/trait.Seek.html)、および関連するトレイトの I/O 操作のエラータイプ。
  - [`IntoInnerError`](https://doc.rust-lang.org/std/io/struct.IntoInnerError.html) — バッファの書き込み中に発生したエラーと、状態からの回復に使用できるバッファリングされたライターオブジェクトを組み合わせた [`BufWriter::into_inner`](https://doc.rust-lang.org/std/io/struct.BufWriter.html#method.into_inner) によって返されるエラー。
  - [`IoSlice`](https://doc.rust-lang.org/std/io/struct.IoSlice.html) — `Write::write_vectored` で使用されるバッファー型。
  - [`IoSliceMut`](https://doc.rust-lang.org/std/io/struct.IoSliceMut.html) — `Read::read_vectored` で使用されるバッファー型。
  - [`LineWriter`](https://doc.rust-lang.org/std/io/struct.LineWriter.html) — ライターをラップし、出力をバッファリングして、改行（`0x0a`、`'\n'`）が検出されるたびにフラッシュします。
  - [`Lines`](https://doc.rust-lang.org/std/io/struct.Lines.html) — `BufRead` のインスタンスの行に対するイテレータ。
  - [`Repeat`](https://doc.rust-lang.org/std/io/struct.Repeat.html) — 1バイトを何度も何度も何度も何度も生成するリーダー…
  - [`Sink`](https://doc.rust-lang.org/std/io/struct.Sink.html) — データを void に移動するライター。
  - [`Split`](https://doc.rust-lang.org/std/io/struct.Split.html) — 特定のバイトで分割された `BufRead` のインスタンスの内容に対するイテレーター。
  - [`Stderr`](https://doc.rust-lang.org/std/io/struct.Stderr.html) — プロセスの標準エラーストリームへのハンドル。
  - [`StderrLock`](https://doc.rust-lang.org/std/io/struct.StderrLock.html) — [`Stderr`](https://doc.rust-lang.org/std/io/struct.Stderr.html) ハンドルへのロックされた参照。
  - [`Stdin`](https://doc.rust-lang.org/std/io/struct.Stdin.html) — プロセスの標準入力ストリームへのハンドル。
  - [`StdinLock`](https://doc.rust-lang.org/std/io/struct.StdinLock.html) — [`Stdin`](https://doc.rust-lang.org/std/io/struct.Stdin.html) ハンドルへのロックされた参照。
  - [`Stdout`](https://doc.rust-lang.org/std/io/struct.Stdout.html) — 現在のプロセスのグローバル標準出力ストリームへのハンドル。
  - [`StdoutLock`](https://doc.rust-lang.org/std/io/struct.StdoutLock.html) — [`Stdout`](https://doc.rust-lang.org/std/io/struct.Stdout.html) ハンドルへのロックされた参照。
  - [`Take`](https://doc.rust-lang.org/std/io/struct.Take.html) — 基盤となるリーダーから読み取られるバイトを制限するリーダーアダプター。
  - [`WriterPanicked`](https://doc.rust-lang.org/std/io/struct.WriterPanicked.html) — 基になるライターが以前にパニックに陥ったときに、`BufWriter::into_parts` からバッファリングされたデータに対してエラーが返されました。（おそらく部分的に書き込まれた）バッファリングされたデータが含まれます。
- _列挙型_
  - [`ErrorKind`](https://doc.rust-lang.org/std/io/enum.ErrorKind.html) — I/O エラーの一般的なカテゴリを指定するリスト。
  - [`SeekFrom`](https://doc.rust-lang.org/std/io/enum.SeekFrom.html) — I/O オブジェクト内でシークする可能性のあるメソッドの列挙。
- _トレイト_
  - [`BufRead`](https://doc.rust-lang.org/std/io/trait.BufRead.html) — `BufRead` は、内部バッファーを備えたリーダーの一種であり、追加の読み取り方法を実行できます。
  - [`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) — `Read`トレイトを使用すると、ソースからバイトを読み取ることができます。
  - [`Seek`](https://doc.rust-lang.org/std/io/trait.Seek.html) — `Seek` トレイトは、バイトストリーム内で移動できるカーソルを提供します。
  - [`Write`](https://doc.rust-lang.org/std/io/trait.Write.html) — バイト指向のシンクであるオブジェクトのトレイト。
- _関数_
  - [`read_to_string`](https://doc.rust-lang.org/std/io/fn.read_to_string.html) [実験的] — [`reader`](https://doc.rust-lang.org/std/io/trait.Read.html) からすべてのバイトを新しい [`String`](https://doc.rust-lang.org/std/string/struct.String.html) に読み込みます。
  - [`stderr_locked`](https://doc.rust-lang.org/std/io/fn.stderr_locked.html) [実験的] — 現在のプロセスの標準エラーに対する新しいロックされたハンドルを作成します。
  - [`stdin_locked`](https://doc.rust-lang.org/std/io/fn.stdin_locked.html) [実験的] — 現在のプロセスの標準入力への新しいロックされたハンドルを構築します。
  - [`stdout_locked`](https://doc.rust-lang.org/std/io/fn.stdout_locked.html) [実験的] — 現在のプロセスの標準出力への新しいロックされたハンドルを構築します。
  - [`copy`](https://doc.rust-lang.org/std/io/fn.copy.html) — リーダーのコンテンツ全体をライターにコピーします。
  - [`empty`](https://doc.rust-lang.org/std/io/fn.empty.html) — 空のリーダーへの新しいハンドルを作成します。
  - [`repeat`](https://doc.rust-lang.org/std/io/fn.repeat.html) — 1バイトを無限に繰り返すリーダーのインスタンスを作成します。
  - [`sink`](https://doc.rust-lang.org/std/io/fn.sink.html) — すべてのデータを正常に消費するライターのインスタンスを作成します。
  - [`stderr`](https://doc.rust-lang.org/std/io/fn.stderr.html) — 現在のプロセスの標準エラーへの新しいハンドルを作成します。
  - [`stdin`](https://doc.rust-lang.org/std/io/fn.stdin.html) — 現在のプロセスの標準入力への新しいハンドルを作成します。
  - [`stdout`](https://doc.rust-lang.org/std/io/fn.stdout.html) — 現在のプロセスの標準出力への新しいハンドルを作成します。
- _型定義_
  - [`Result`](https://doc.rust-lang.org/std/io/type.Result.html) — I/O 操作に特化した [`Result`](https://doc.rust-lang.org/std/result/enum.Result.html) 型。

## 読み書き

それらはトレイトであるため、[`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) と [`Write`](https://doc.rust-lang.org/std/io/trait.Write.html) は他の多くの型によって実装され、自分の型にも実装できます。そのため、このモジュールのドキュメント全体で、[`File`](https://doc.rust-lang.org/std/fs/struct.File.html)、[`TcpStreams`](https://doc.rust-lang.org/std/net/struct.TcpStream.html)、場合によっては [`Vec<T>`](https://doc.rust-lang.org/std/vec/struct.Vec.html) などのいくつかの異なる型の I/O が表示されます。たとえば、[`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) は、[`File`](https://doc.rust-lang.org/std/fs/struct.File.html) で使用できる [`read`](https://doc.rust-lang.org/std/io/trait.Read.html#tymethod.read) メソッドを追加します：

```rust
use std::io;
use std::io::prelude::*;
use std::fs::File;

fn main() -> io::Result<()> {
    let mut f = File::open("foo.txt")?;
    let mut buffer = [0; 10];

    // 最大10バイトを読み取る
    let n = f.read(&mut buffer)?;

    println!("The bytes: {:?}", &buffer[..n]);
    Ok(())
}
```

[`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) と [`Wtire`](https://doc.rust-lang.org/std/io/trait.Write.html) は非常に重要であるため、2つの特性の実装者には、リーダーとライターというニックネームがあります。そのため、「[`Read`](https://doc.rust-lang.org/std/io/trait.Read.html) トレイトを実装する型」ではなく「リーダー」が表示されることがあります。はるかに簡単です！

## シークと `BufRead`

それ以外に、提供される2つの重要な特性があります。[`Seek`](https://doc.rust-lang.org/std/io/trait.Seek.html) と [`BufRead`](https://doc.rust-lang.org/std/io/trait.BufRead.html) です。これらは両方ともリーダーの上に構築され、読み取りがどのように行われるかを制御します。 [`Seek`](https://doc.rust-lang.org/std/io/trait.Seek.html) を使用すると、次のバイトの送信元を制御できます。

```rust
use std::io;
use std::io::prelude::*;
use std::io::SeekFrom;
use std::fs::File;

fn main() -> io::Result<()> {
    let mut f = File::open("foo.txt")?;
    let mut buffer = [0; 10];

    // ファイルの最後の10バイトにスキップします
    f.seek(SeekFrom::End(-10))?;

    // 最大10バイトを読み取る
    let n = f.read(&mut buffer)?;

    println!("The bytes: {:?}", &buffer[..n]);
    Ok(())
}
```

[`BufRead`](https://doc.rust-lang.org/std/io/trait.BufRead.html) は、内部バッファーを使用して他の多くの読み取り方法を提供しますが、それを誇示するために、バッファー全般について説明する必要があります。読み続けます！

## `BufReader` と `BufWriter`

バイトベースのインターフェースは扱いにくく、非効率的である可能性があります。これは、オペレーティングシステムに対してほぼ一定の呼び出しを行う必要があるためです。これを支援するために、`std::io` には、リーダーとライターをラップする [`BufReader`](https://doc.rust-lang.org/std/io/struct.BufReader.html) と [`BufWriter`](https://doc.rust-lang.org/std/io/struct.BufWriter.html) の2つの構造体が付属しています。ラッパーはバッファーを使用して、呼び出しの数を減らし、必要なものに正確にアクセスするためのより優れたメソッドを提供します。

たとえば、[`BufReader`](https://doc.rust-lang.org/std/io/struct.BufReader.html) は [`BufRead`](https://doc.rust-lang.org/std/io/trait.BufRead.html) トレイトと連携して、任意のリーダーにメソッドを追加します：

```rust
use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::fs::File;

fn main() -> io::Result<()> {
    let f = File::open("foo.txt")?;
    let mut reader = BufReader::new(f);
    let mut buffer = String::new();

    // 行をバッファに読み込む
    reader.read_line(&mut buffer)?;

    println!("{}", buffer);
    Ok(())
}
```

[`BufWriter`](https://doc.rust-lang.org/std/io/struct.BufWriter.html) は、新しい書き方を追加しません。[`write`](https://doc.rust-lang.org/std/io/trait.Write.html#tymethod.write) のすべての呼び出しをバッファリングするだけです：

```rust
use std::io;
use std::io::prelude::*;
use std::io::BufWriter;
use std::fs::File;

fn main() -> io::Result<()> {
    let f = File::create("foo.txt")?;
    {
        let mut writer = BufWriter::new(f);

        // バッファにバイトを書き込む
        writer.write(&[42])?;

    } // ライターがスコープ外になると、バッファーがフラッシュされます

    Ok(())
}
```

## 標準の入力と出力

非常に一般的な入力ソースは、標準入力です：

```rust
use std::io;

fn main() -> io::Result<()> {
    let mut input = String::new();

    io::stdin().read_line(&mut input)?;

    println!("You typed: {}", input.trim());
    Ok(())
}
```

[`Result<T, E>`](https://doc.rust-lang.org/std/result/enum.Result.html) を返さない関数の中では [`?` 演算子](https://doc.rust-lang.org/book/appendix-02-operators.html) は使用できないことに注意してください。代わりに、[`.unwrap()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap) を呼び出すか、戻り値を照合して、発生する可能性のあるエラーをキャッチできます：

```rust 
use std::io;

let mut input = String::new();

io::stdin().read_line(&mut input).unwrap();
```

そして、非常に一般的な出力ソースは標準出力です：

```rust
use std::io;
use std::io::prelude::*;

fn main() -> io::Result<()> {
    io::stdout().write(&[42])?;
    Ok(())
}
```

もちろん、[`io::stdout`](https://doc.rust-lang.org/std/io/fn.stdout.html) を直接使用することは、[`println!`](https://doc.rust-lang.org/std/macro.println.html) のようなものほど一般的ではありません。

## イテレーター型

`std::io` によって提供される構造の多くは、I/O を反復処理するさまざまな方法のためのものです。たとえば、[`Lines`](https://doc.rust-lang.org/std/io/struct.Lines.html) は行に分割するために使用されます：

```rust
use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::fs::File;

fn main() -> io::Result<()> {
    let f = File::open("foo.txt")?;
    let reader = BufReader::new(f);

    for line in reader.lines() {
        println!("{}", line?);
    }
    Ok(())
}
```

## 関数

さまざまな機能へのアクセスを提供する多くの[関数](https://doc.rust-lang.org/std/io/index.html#functions-1)があります。たとえば、これらの関数の3つを使用して、標準入力から標準出力まですべてをコピーできます：

```rust
use std::io;

fn main() -> io::Result<()> {
    io::copy(&mut io::stdin(), &mut io::stdout())?;
    Ok(())
}
```

## `io::Result`

最後に、もちろん重要なことですが、[`io::Result`](https://doc.rust-lang.org/std/io/type.Result.html) です。この型は、エラーを引き起こす可能性のある多くの `std::io` 関数の戻り型として使用され、独自の関数からも返すことができます。このモジュールの例の多くは [`?` 演算子](https://doc.rust-lang.org/book/appendix-02-operators.html) を使用しています：

```rust
use std::io;

fn read_input() -> io::Result<()> {
    let mut input = String::new();

    io::stdin().read_line(&mut input)?;

    println!("You typed: {}", input.trim());

    Ok(())
}
```

`read_input()` の戻り型である [`io::Result<()>`](https://doc.rust-lang.org/std/io/type.Result.html) は、「実際の」戻り値を持たないが、エラーが発生した場合にエラーを返したい関数の非常に一般的な型です。この場合、この関数の唯一の目的は行を読み取って印刷することなので、`()` を使用します。

## プラットフォーム固有の動作

標準ライブラリ全体の多くの I/O 関数は、それらが委任されているさまざまなライブラリまたはシステムコールを示すために文書化されています。これは、アプリケーションが内部で何が起こっているかを理解し、不明確なセマンティクスを調査するのに役立つようにするために行われます。ただし、これは情報提供であり、拘束力のある契約ではないことに注意してください。これらの関数の多くの実装は、時間の経過とともに変更される可能性があり、より少ないまたはより多くの システムコール/ライブラリ関数を呼び出す場合があります。
