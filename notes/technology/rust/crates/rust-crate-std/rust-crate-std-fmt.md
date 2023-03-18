---
slug: /rust-crate-std-fmt
sidebar_label: std::fmt
---

# 【Rust】標準ライブラリ `std::fmt`

> `String` をフォーマットおよび印刷するためのユーティリティ。


[`std::fmt`](https://doc.rust-lang.org/stable/std/fmt/) には、[`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) 構文拡張のランタイムサポートが含まれています。このマクロは、実行時に引数を文字列にフォーマットするために、このモジュールへの呼び出しを発行するためにコンパイラーに実装されます。

公開メンバー：

- _マクロ_
  - [`Debug`](https://doc.rust-lang.org/stable/std/fmt/macro.Debug.html) — トレイトデバッグの実装を生成するマクロを派生させます。
- _構造体_
  - [`Arguments`](https://doc.rust-lang.org/stable/std/fmt/struct.Arguments.html) — この構造体は、フォーマット文字列とその引数の安全にプリコンパイルされたバージョンを表します。これは安全に実行できないため、実行時に生成できません。そのため、コンストラクターは指定されず、フィールドは変更を防ぐためにプライベートになっています。
  - [`DebugList`](https://doc.rust-lang.org/stable/std/fmt/struct.DebugList.html) — [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装を支援する構造体。
  - [`DebugMap`](https://doc.rust-lang.org/stable/std/fmt/struct.DebugMap.html) — [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装を支援する構造体。
  - [`DebugSet`](https://doc.rust-lang.org/stable/std/fmt/struct.DebugSet.html) — [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装を支援する構造体。
  - [`DebugStruct`](https://doc.rust-lang.org/stable/std/fmt/struct.DebugStruct.html) — [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装を支援する構造体。
  - [`DebugTuple`](https://doc.rust-lang.org/stable/std/fmt/struct.DebugTuple.html) — [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装を支援する構造体。
  - [`Error`](https://doc.rust-lang.org/stable/std/fmt/struct.Error.html) — メッセージをストリームにフォーマットすることから返されるエラー型。
  - [`Formatter`](https://doc.rust-lang.org/stable/std/fmt/struct.Formatter.html) — フォーマットの構成。
- _列挙型_
  - [`Alignment`](https://doc.rust-lang.org/stable/std/fmt/enum.Alignment.html) — `Formatter::align` によって返される可能性のある配置
- _トレイト_
  - [`Binary`](https://doc.rust-lang.org/stable/std/fmt/trait.Binary.html) — `b` フォーマット。
  - [`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) — `?` フォーマット。
  - [`Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html) — 空のフォーマット `{}` のフォーマットトレイト。
  - [`LowerExp`](https://doc.rust-lang.org/stable/std/fmt/trait.LowerExp.html) — `e` フォーマット。
  - [`LowerHex`](https://doc.rust-lang.org/stable/std/fmt/trait.LowerHex.html) — `x` フォーマット。
  - [`Octal`](https://doc.rust-lang.org/stable/std/fmt/trait.Octal.html) — `o` フォーマット。
  - [`Pointer`](https://doc.rust-lang.org/stable/std/fmt/trait.Pointer.html) — `p` フォーマット。
  - [`UpperExp`](https://doc.rust-lang.org/stable/std/fmt/trait.UpperExp.html) — `E` フォーマット。
  - [`UpperHex`](https://doc.rust-lang.org/stable/std/fmt/trait.UpperHex.html) — `X` フォーマット。
  - [`Write`](https://doc.rust-lang.org/stable/std/fmt/trait.Write.html) — Unicode を受け入れるバッファまたはストリームに書き込みまたはフォーマットするためのトレイト。
- _関数_
  - [`format`](https://doc.rust-lang.org/stable/std/fmt/fn.format.html) — `format` 関数は、[`Arguments`](https://doc.rust-lang.org/stable/std/fmt/struct.Arguments.html) 構造体を取り、結果のフォーマットされた文字列を返します。
  - [`write`](https://doc.rust-lang.org/stable/std/fmt/fn.write.html) — `write` 関数は、出力ストリームと、`format_args!` マクロでプリコンパイルできる `Arguments` 構造体を受け取ります。
- _型定義_
  - [`Result`](https://doc.rust-lang.org/stable/std/fmt/type.Result.html) — フォーマッターメソッドによって返される型。

## 使い方

[`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) マクロは、C の `printf`/`fprintf` 関数または Python の `str.format` 関数に由来するものに精通していることを意図しています。

```rust title="format! の例"
format!("Hello");                 // => "Hello"
format!("Hello, {}!", "world");   // => "Hello, world!"
format!("The number is {}", 1);   // => "The number is 1"
format!("{:?}", (3, 4));          // => "(3, 4)"
format!("{value}", value=4);      // => "4"
format!("{} {}", 1, 2);           // => "1 2"
format!("{:04}", 42);             // => "0042" with leading zeros
format!("{:#?}", (100, 200));     // => "(
                                  //       100,
                                  //       200,
                                  //     )"
```

これらから、最初の引数がフォーマット文字列であることがわかります。これが文字列リテラルであることがコンパイラによって要求されます。（妥当性チェックを実行するために）渡される変数にすることはできません。次に、コンパイラはフォーマット文字列を解析し、提供された引数のリストがこのフォーマット文字列に渡すのに適しているかどうかを判断します。

単一の値を文字列に変換するには、[`to_string`](https://doc.rust-lang.org/stable/std/string/trait.ToString.html#tymethod.to_string) メソッドを使用します。これは、[`Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html) フォーマットトレイトを使用します。

### 位置パラメーター

各フォーマット引数は、参照する値引数を指定できます。省略した場合は、「次の引数」と見なされます。たとえば、フォーマット文字列 `{} {} {}` は3つのパラメータを取り、指定されたのと同じ順序でフォーマットされます。ただし、フォーマット文字列 `{2} {1} {0}` は、引数を逆の順序でフォーマットします。

2種類の位置指定子を混ぜ始めると、少し注意が必要になる場合があります。「次の引数」指定子は、引数の反復子と考えることができます。「次の引数」指定子が表示されるたびに、イテレータが進みます。これにより、次のような動作が発生します：

```rust
format!("{1} {} {0} {}", 1, 2); // => "2 1 1 2"
```

引数の内部イテレータは、最初の `{}` が表示されるまでに進められていないため、最初の引数を出力します。次に、2番目の `{}` に到達すると、イテレータは2番目の引数に進みます。基本的に、引数に明示的に名前を付けるパラメーターは、位置指定子に関して引数に名前を付けないパラメーターには影響しません。

すべての引数を使用するにはフォーマット文字列が必要です。そうでない場合、コンパイル時エラーになります。フォーマット文字列で同じ引数を複数回参照できます。

### 名前付きパラメーター

Rust 自体には、関数の名前付きパラメーターに相当する Python のようなものはありませんが、[`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) マクロは、名前付きパラメーターを活用できるようにする構文拡張です。名前付きパラメーターは、引数リストの最後にリストされ、構文は次のとおりです：

```
identifier '=' expression
```

たとえば、次の [`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) 式はすべて名前付き引数を使用します：

```rust
format!("{argument}", argument = "test");   // => "test"
format!("{name} {}", 1, name = 2);          // => "2 1"
format!("{a} {c} {b}", a="a", b='b', c=3);  // => "a 3 b"
```

名前のある引数の後に位置パラメータ（名前のないもの）を置くことは無効です。位置パラメーターと同様に、フォーマット文字列で使用されない名前付きパラメーターを指定することは無効です。

## パラメーターのフォーマット

フォーマットされる各引数は、いくつかのフォーマットパラメータ（[構文](https://doc.rust-lang.org/stable/std/fmt/#syntax)の `format_spec` に対応）によって変換できます。これらのパラメータは、フォーマットされているものの文字列表現に影響を与えます。

### 幅

```rust
// これらはすべて "Hello x    !" となります
println!("Hello {:5}!", "x");
println!("Hello {:1$}!", "x", 5);
println!("Hello {1:0$}!", 5, "x");
println!("Hello {:width$}!", "x", width = 5);
```

これは、フォーマットがとるべき「最小幅」のパラメーターです。値の文字列がこれだけ多くの文字を埋めない場合は、[塗りつぶし/配置](#fillalignment) で指定されたパディングを使用して、必要なスペースを占有します。

幅の値は、2番目の引数が幅を指定する [`usize`](https://doc.rust-lang.org/stable/std/primitive.usize.html) であることを示す、接尾辞 `$` を追加することにより、パラメーターのリストで [`usize`](https://doc.rust-lang.org/stable/std/primitive.usize.html) として提供することもできます。

ドル構文で引数を参照しても「次の引数」カウンターには影響しないため、通常は、位置で引数を参照するか、名前付き引数を使用することをお勧めします。

### 塗りつぶし/配置 {#fillalignment}

```rust
assert_eq!(format!("Hello {:<5}!", "x"),  "Hello x    !");
assert_eq!(format!("Hello {:-<5}!", "x"), "Hello x----!");
assert_eq!(format!("Hello {:^5}!", "x"),  "Hello   x  !");
assert_eq!(format!("Hello {:>5}!", "x"),  "Hello     x!");
```

オプションの塗りつぶし (_fill_) 文字と配置 (_alignment_) は、通常、[`width`](https://doc.rust-lang.org/stable/std/fmt/#width) パラメーターと組み合わせて提供されます。`width` の前、 `:` の直後に定義する必要があります。これは、フォーマットされている値が幅よりも小さい場合、その周りに詰め物となる文字が表示されることを示しています。塗りつぶしには、さまざまな配置用に次のバリエーションがあります：

- `[fill]<` — 引数は `width` の列で左揃えになります
- `[fill]^` — 引数は `width` の列で中央揃えになります
- `[fill]>` — 引数は `width` の列で右揃えになります

非数値のデフォルトの [塗りつぶし/配置](#fillalignment) はスペースであり、左揃えです。数値フォーマッタのデフォルトもスペース文字ですが、右揃えです。数値に0フラグ（以下を参照）が指定されている場合、暗黙の塗りつぶし文字は0です。

一部の型ではアライメントが実装されていない場合があることに注意してください。特に、通常は `Debug` トレイトには実装されていません。パディングが確実に適用されるようにする良い方法は、入力をフォーマットしてから、この結果の文字列をパディングして出力を取得することです：

```rust
println!("Hello {:^15}!", format!("{:?}", Some("hi"))); // => "Hello   Some("hi")   !"
```

### 記号/`#`/`0`

```rust
assert_eq!(format!("Hello {:+}!", 5), "Hello +5!");
assert_eq!(format!("{:#x}!", 27), "0x1b!");
assert_eq!(format!("Hello {:05}!", 5),  "Hello 00005!");
assert_eq!(format!("Hello {:05}!", -5), "Hello -0005!");
assert_eq!(format!("{:#010x}!", 27), "0x0000001b!");
```

これらはすべて、フォーマッタの動作を変更するフラグです。

- `+` — これは数値型を対象としており、記号 (_sign_) は常に表示する必要があることを示しています。正の記号はデフォルトで表示されることはなく、負の記号は記号付きの値に対してのみデフォルトで表示されます。このフラグは、正しい記号（`+` または `-`）を常に表示する必要があることを示します。
- `-` — 現在使用されていません
- `#` — このフラグは、「代替」形式の表示を使用する必要があることを示します。その形式は次のとおりです：
  - `#?` — [`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) フォーマットをきれいに表示します（改行とインデントを追加します）
  - `#x` — 引数の前に `0x` を付けます
  - `#X` — 引数の前に `0x` を付けます
  - `#b` — 引数の前に `0b` を付けます
  - `#o` — 引数の前に `0o` を付けます
- `0` — これは、整数形式の場合、`width` へのパディングは `0` 文字で行う必要があり、記号を認識する必要があることを示すために使用されます。`{:08}` のような形式では、整数 `1` に対して `00000001` が生成されますが、同じ形式では、整数 `-1` に対して `-0000001` が生成されます。負のバージョンには、正のバージョンよりもゼロが1つ少ないことに注意してください。パディングゼロは、常に記号（存在する場合）の後、数字の前に配置されることに注意してください。`＃` フラグと一緒に使用すると、同様のルールが適用されます。接頭辞の後、数字の前にパディングゼロが挿入されます。プレフィックスは全幅に含まれます。

### 精度

非数値型の場合、これは「最大幅」と見なすことができます。結果の文字列がこの幅よりも長い場合、この数の文字に切り捨てられ、これらのパラメーターが設定されている場合、その切り捨てられた値は適切な`fill`、`alignment`、および `width` で出力されます。

整数型の場合、これは無視されます。

浮動小数点型の場合、これは小数点以下の桁数を出力する必要があることを示します。

必要な `precision`（精度）を指定するには、次の3つの方法があります：

- 整数 — `.N`：

  整数 `N` 自体が精度です。

- 整数または名前の後にドル記号が続く — `.N$`：

  精度としてフォーマット_引数_ `N`（`usize` である必要があります）を使用します。

- アスタリスク — `.*`：

  `.*` は、この `{...}` が1つではなく2つのフォーマット入力に関連付けられていることを意味します。最初の入力は `usize` 精度を保持し、2番目の入力は表示する値を保持します。この場合、フォーマット文字列 `{<arg>:<spec>.*}` を使用する場合、`<arg>` 部分は出力する値を参照し、精度は `<arg>` の前の入力に含まれている必要があることに注意してください。

たとえば、次の呼び出しはすべて `Hello x is 0.01000` と同じものを出力します：

```rust
// Hello {arg 0 ("x")} is {arg 1 (0.01) with precision specified inline (5)}
println!("Hello {0} is {1:.5}", "x", 0.01);

// Hello {arg 1 ("x")} is {arg 2 (0.01) with precision specified in arg 0 (5)}
println!("Hello {1} is {2:.0$}", 5, "x", 0.01);

// Hello {arg 0 ("x")} is {arg 2 (0.01) with precision specified in arg 1 (5)}
println!("Hello {0} is {2:.1$}", "x", 5, 0.01);

// Hello {next arg ("x")} is {second of next two args (0.01) with precision
//                          specified in first of next two args (5)}
println!("Hello {} is {:.*}",    "x", 5, 0.01);

// Hello {next arg ("x")} is {arg 2 (0.01) with precision
//                          specified in its predecessor (5)}
println!("Hello {} is {2:.*}",   "x", 5, 0.01);

// Hello {next arg ("x")} is {arg "number" (0.01) with precision specified
//                          in arg "prec" (5)}
println!("Hello {} is {number:.prec$}", "x", prec = 5, number = 0.01);
```

これらの間：

```rust
println!("{}, `{name:.*}` has 3 fractional digits", "Hello", 3, name=1234.56);
println!("{}, `{name:.*}` has 3 characters", "Hello", 3, name="1234.56");
println!("{}, `{name:>8.*}` has 3 right-aligned characters", "Hello", 3, name="1234.56");
```

3つの大きく異なるものを表示します：

```
Hello, `1234.560` has 3 fractional digits
Hello, `123` has 3 characters
Hello, `     123` has 3 right-aligned characters
```

### ローカリゼーション

一部のプログラミング言語では、文字列フォーマット関数の動作は、オペレーティングシステムのロケール設定によって異なります。 Rust の標準ライブラリによって提供されるフォーマット関数にはロケールの概念がなく、ユーザー構成に関係なく、すべてのシステムで同じ結果が生成されます。

たとえば、次のコードは、システムロケールでドット以外の小数点記号が使用されている場合でも、常に `1.5` を出力します。

```rust
println!("The value is {}", 1.5);
```

## エスケープ

リテラル文字 `{` および `}` は、同じ文字を前に付けることで文字列に含めることができます。たとえば、`{` 文字は `{{` でエスケープされ、`}` 文字は `}}` でエスケープされます。

```rust
assert_eq!(format!("Hello {{}}"), "Hello {}");
assert_eq!(format!("{{ Hello"), "{ Hello");
```

## 構文

要約すると、ここにフォーマット文字列の完全な文法があります。使用されるフォーマット言語の構文は他の言語から引用されているため、あまり異質なものであってはなりません。引数は Python のような構文でフォーマットされます。つまり、引数は C のような `％` ではなく `{}` で囲まれます。フォーマット構文の実際の文法は次のとおりです：

```
format_string := text [ maybe_format text ] *
maybe_format := '{' '{' | '}' '}' | format
format := '{' [ argument ] [ ':' format_spec ] '}'
argument := integer | identifier

format_spec := [[fill]align][sign]['#']['0'][width]['.' precision]type
fill := character
align := '<' | '^' | '>'
sign := '+' | '-'
width := count
precision := count | '*'
type := '' | '?' | 'x?' | 'X?' | identifier
count := parameter | integer
parameter := argument '$'
```

上記の文法では、`text` に`'{'` または `'}'` 文字を含めることはできません。

## トレイトのフォーマット

引数を特定のタイプでフォーマットするように要求する場合、実際には、引数が特定のトレイトに起因することを要求しています。これにより、複数の実際の型を `{:x}` を介してフォーマットできます（[`i8`](https://doc.rust-lang.org/stable/std/primitive.i8.html) や [`isize`](https://doc.rust-lang.org/stable/std/primitive.isize.html) など）。型からトレイトへの現在のマッピングは次のとおりです：

- _なし_ ⇒ [`Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html)
- `?` ⇒ [`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html)
- `x?` ⇒ 小文字の16進整数で [`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) する
- `X?` ⇒ 大文字の16進整数で [`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) する
- `o` ⇒ [`Octal`](https://doc.rust-lang.org/stable/std/fmt/trait.Octal.html)
- `x` ⇒ [`LowerHex`](https://doc.rust-lang.org/stable/std/fmt/trait.LowerHex.html)
- `X` ⇒ [`UpperHex`](https://doc.rust-lang.org/stable/std/fmt/trait.UpperHex.html)
- `p` ⇒ [`Pointer`](https://doc.rust-lang.org/stable/std/fmt/trait.Pointer.html)
- `b` ⇒ [`Binary`](https://doc.rust-lang.org/stable/std/fmt/trait.Binary.html)
- `e` ⇒ [`LowerExp`](https://doc.rust-lang.org/stable/std/fmt/trait.LowerExp.html)
- `E` ⇒ [`UpperExp`](https://doc.rust-lang.org/stable/std/fmt/trait.UpperExp.html)

これが意味するのは、[`fmt::Binary`](https://doc.rust-lang.org/stable/std/fmt/trait.Binary.html) トレイトを実装する任意のタイプの引数を `{:b}` でフォーマットできるということです。これらのトレイトの実装は、標準ライブラリによっていくつかのプリミティブ型にも提供されています。フォーマットが指定されていない場合（`{}` または `{:6}` のように）、使用されるフォーマットトレイトは [`Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html) トレイトです。

独自のタイプのフォーマットトレイトを実装する場合は、`fmt` メソッドを実装する必要があります：

```rust 
fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {/* ... */}
```

型は参照によって `self` として渡され、関数は出力を `f.buf` ストリームに出力する必要があります。要求されたフォーマットパラメータに正しく準拠するかどうかは、各フォーマットトレイトの実装次第です。これらのパラメーターの値は、[`Formatter`](https://doc.rust-lang.org/stable/std/fmt/struct.Formatter.html) 構造体のフィールドにリストされます。これを支援するために、[`Formatter`](https://doc.rust-lang.org/stable/std/fmt/struct.Formatter.html) 構造体はいくつかのヘルパーメソッドも提供します。

さらに、この関数の戻り値は [`fmt::Result`](https://doc.rust-lang.org/stable/std/fmt/type.Result.html) であり、これは `Result<(), std::fmt::Error>` の型エイリアスです。フォーマットの実装では、[`Formatter`](https://doc.rust-lang.org/stable/std/fmt/struct.Formatter.html) からのエラーを確実に伝播する必要があります（たとえば、[`write!`](https://doc.rust-lang.org/stable/std/macro.write.html) を呼び出す場合）。ただし、誤ってエラーを返すことはありません。つまり、フォーマットの実装は、渡された [`Formatter`](https://doc.rust-lang.org/stable/std/fmt/struct.Formatter.html) がエラーを返した場合にのみエラーを返す必要があります。これは、関数のシグニチャが示唆するものとは反対に、文字列のフォーマットは間違いのない操作であるためです。この関数は、基になるストリームへの書き込みが失敗する可能性があり、エラーが発生したという事実をスタックに伝播する方法を提供する必要があるため、結果のみを返します。

フォーマットトレイトを実装する例は次のようになります：

```rust
use std::fmt;

#[derive(Debug)]
struct Vector2D {
    x: isize,
    y: isize,
}

impl fmt::Display for Vector2D {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        // `f`値は、write! マクロが期待している `Write` トレイトを実装します。
        // このフォーマットでは、文字列のフォーマットに提供される
        // さまざまなフラグが無視されることに注意してください。
        write!(f, "({}, {})", self.x, self.y)
    }
}

// 異なるトレイトにより、ある型の異なる形式の出力が可能になります。
// この形式の意味は、ベクトルの大きさを出力することです。
impl fmt::Binary for Vector2D {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let magnitude = (self.x * self.x + self.y * self.y) as f64;
        let magnitude = magnitude.sqrt();

        // Formatter オブジェクトのヘルパーメソッド `pad_integral` を使用して、
        // フォーマットフラグを尊重します。
        // 詳細についてはメソッドのドキュメントを参照してください。
        // 関数 `pad`を使用して文字列を埋めることができます。
        let decimals = f.precision().unwrap_or(3);
        let string = format!("{:.*}", decimals, magnitude);
        f.pad_integral(true, "", &string)
    }
}

fn main() {
    let myvector = Vector2D { x: 3, y: 4 };

    println!("{}", myvector);       // => "(3, 4)"
    println!("{:?}", myvector);     // => "Vector2D {x: 3, y:4}"
    println!("{:10.3b}", myvector); // => "     5.000"
}
```

### `fmt::Display` vs `fmt::Debug`

これらの2つのフォーマットトレイトには、明確な目的があります：

- [`fmt::Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html) 実装は、型が常に UTF-8 文字列として忠実に表現できることを表明します。すべての型が [`Display`](https://doc.rust-lang.org/stable/std/fmt/trait.Display.html) トレイトを実装することは期待されていません。
- [`fmt::Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) の実装は、すべてのパブリックな型に実装する必要があります。出力は通常、可能な限り忠実に内部状態を表します。[`Debug`](https://doc.rust-lang.org/stable/std/fmt/trait.Debug.html) トレイトの目的は、Rust コードのデバッグを容易にすることです。ほとんどの場合、`＃[derive (Debug)]` を使用するだけで十分であり、推奨されます。

両方のトレイトからの出力のいくつかの例：

```rust
assert_eq!(format!("{} {:?}", 3, 4), "3 4");
assert_eq!(format!("{} {:?}", 'a', 'b'), "a 'b'");
assert_eq!(format!("{} {:?}", "foo\n", "bar\n"), "foo\n \"bar\\n\"");
```

## 関連するマクロ

[`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) ファミリーには、関連するマクロがいくつかあります。現在実装されているものは次のとおりです：

```rust 
format!      // described above
write!       // first argument is a &mut io::Write, the destination
writeln!     // same as write but appends a newline
print!       // the format string is printed to the standard output
println!     // same as print but appends a newline
eprint!      // the format string is printed to the standard error
eprintln!    // same as eprint but appends a newline
format_args! // described below.
```

> 上記の最初の引数は `&mut io::Write` で、宛先は `write` と同じですが、改行を追加します。フォーマット文字列は `print` と同じ標準出力に出力されますが、改行を追加すると、フォーマット文字列は `eprint` と同じ標準エラーに出力されます。以下に説明する改行を追加します。

### `write!`

これと [`writeln!`](https://doc.rust-lang.org/stable/std/macro.writeln.html) 指定されたストリームにフォーマット文字列を出力するために使用される2つのマクロです。これは、フォーマット文字列の中間割り当てを防ぎ、代わりに出力を直接書き込むために使用されます。内部的には、この関数は実際には [`std::io::Write`](https://doc.rust-lang.org/stable/std/io/trait.Write.html) トレイトで定義された [`write_fmt`](https://doc.rust-lang.org/stable/std/io/trait.Write.html#method.write_fmt) 関数を呼び出しています。使用例は次のとおりです：

```rust 
use std::io::Write;
let mut w = Vec::new();
write!(&mut w, "Hello {}!", "world");
```

### `print!`

これと [`println!`](https://doc.rust-lang.org/stable/std/macro.println.html) 出力を _stdout_ に出力します。[`write!`](https://doc.rust-lang.org/stable/std/macro.write.html) マクロと同様に、これらのマクロの目的は、出力を表示するときに中間割り当てを回避することです。使用例は次のとおりです：

```rust
print!("Hello {}!", "world");
println!("I have a newline {}", "character at the end");
```

### `eprint!`

`eprint!` と `eprintln!` マクロは それぞれ `print!` とおよび `println!` と、出力を _stderr_ に出力することを除いては同様です。

### `format_args!`

これは、フォーマット文字列を記述する不透明なオブジェクトを安全に渡すために使用される奇妙なマクロです。このオブジェクトは、作成するためにヒープ割り当てを必要とせず、スタック上の情報のみを参照します。内部的には、関連するすべてのマクロがこの観点から実装されています。まず、使用例は次のとおりです：

```rust 
use std::fmt;
use std::io::{self, Write};

let mut some_writer = io::stdout();
write!(&mut some_writer, "{}", format_args!("print with a {}", "macro"));

fn my_fmt_fn(args: fmt::Arguments) {
    write!(&mut io::stdout(), "{}", args);
}
my_fmt_fn(format_args!(", or a {} too", "function"));
```

[`format_args!`](https://doc.rust-lang.org/stable/std/macro.format_args.html) マクロの結果は、型 [`fmt::Arguments`](https://doc.rust-lang.org/stable/std/fmt/struct.Arguments.html) の値です。次に、この構造体をこのモジュール内の [`write`](https://doc.rust-lang.org/stable/std/fmt/fn.write.html) 関数と [`format`](https://doc.rust-lang.org/stable/std/fmt/fn.format.html) 関数に渡して、フォーマット文字列を処理できます。このマクロの目的は、フォーマット文字列を処理するときに中間割り当てをさらに防ぐことです。

たとえば、ロギングライブラリは標準のフォーマット構文を使用できますが、出力の送信先が決定されるまで、この構造を内部的に渡します。
