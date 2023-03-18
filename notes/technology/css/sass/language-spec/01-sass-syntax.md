---
slug: /sass-syntax
sidebar_label: 構文
---

# 【Sass】SCSS 構文

## ステートメント

ステートメントはセミコロンで区切られます。

### ユニバーサルステートメント

これらのタイプのステートメントは、Sassスタイルシートのどこでも使用できます：

- `$var: value` 形式の**変数宣言**。
- `@if` や `@each` などのフロー制御ルール。
- `@error`、`@warn`、`@debug` ルール。 

### CSS ステートメント

これらのステートメントは CSS を生成します。 `@function` 内を除いて、どこでも使用できます：

- `h1 { /* ... */ }` といった形式のスタイルルール
- `@media` や `@font-face` といった CSS @ルール
- ミックスインの使用は、`@include` を使用します。
- `@at-root` ルール

### トップレベルステートメント

これらのステートメントは、スタイルシートのトップレベルでのみ使用するか、トップレベルのCSSステートメント内にネストすることができます：

- `@use` を使用してモジュールをロードします。
- `@import` を使用してインポートします。
- `@mixin` を使用してミックスインを定義します。
- `@function` を使用して関数を定義します。

### その他のステートメント

- `width: 100px;` などのプロパティ宣言は、スタイルルール内でのみ使用できます。
- `@extend` ルールは、スタイルルール内でのみ使用できます。

## 式

式とは、プロパティまたは変数の宣言の右側にあるものです。各式は値を生成します。有効な CSS プロパティ値も Sass 式ですが、Sass 式はプレーンな CSS 値よりもはるかに強力です。これらは、ミックスインと関数に引数として渡され、`@if` ルールを使用した制御フローに使用され、算術演算を使用して操作されます。 Sass の式構文を SassScript と呼びます。

### リテラル

- `12` や `100px` など、単位がある場合とない場合がある**数値**。
- `"Helvetica Neue"` や `bold` など、引用符が含まれる場合と含まれない場合がある**文字列**。
- `#c6538c` のような16進表現や `blue` などの名前で参照可能な**色**。
- `true` または `false` という**ブール**。
- `null`。
- `1.5em 1em 0 2em`、`Helvetica, Arial, sans-serif`、`[col1-start]` など、スペースやカンマで区切って角かっこで囲むか、角かっこをまったく使用しない**値リスト**。

### 演算子
 
- 等しいことを確認する `==` と等しくないことを確認する `!=`。
- `+`、`-`、`*`、`/`、および `％` といった四則演算子と剰余演算子。
- `<`、`<=`、`>`、および `>=` といった比較演算子。
- `and`、`or`、および `not` は通常のブール動作をします。Sassは、`false` と `null` を除いて、すべての値を「真」と見なします。
- `+`、`-`、および `/` を使用して、文字列を連結できます。
- `( and )` を使用して、操作の優先順位を明示的に制御できます。

### その他の式

- `$var` のような**変数**
- `nth($list, 1)` や `var(--main-bg-color)` などのような**関数呼び出し**。
- `calc(1px + 100％)` や `url(http://myapp.com/assets/logo.png)` など、独自の解析ルールを持つ特殊関数。
- 親セレクター `&`。
- 値 `!important` は、引用符で囲まれていない文字列として解析されます。

## コメント

| コメント | 内容 | CSS への出力 |
| --- | --- | --- |
| `// ...` | 1行コメント | 出力されない。 |
| `/* ... */` | 複数行コメント | `expanded` スタイルには出力されるが、`compressed` スタイルには出力されない。 |
| `/*! ... */` | 複数行コメント | `compressed` スタイルにのみ出力される。|

### ドキュメンテーションコメント

1行コメントの中でも特に、`///` から始まるものは、ドキュメンテーションコメントとなり、SassDoc ツールによってマークダウン解析されます。

```scss 
/// 指数を計算する。
///
/// @param {number} $base
///   底
/// @param {integer (unitless)} $exponent
///   指数
/// @return {number} `$base` to the power of `$exponent`.
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}
```

## 特殊関数

CSS は多くの関数を定義しており、それらのほとんどは Sass の通常の関数構文で問題なく機能します。それらは関数呼び出しとして解析され、プレーンな CSS 関数に解決され、そのまま CSS にコンパイルされます。ただし、いくつかの例外があり、SassScript 式として解析するだけでは不十分な特別な構文があります。すべての特殊関数呼び出しは、引用符で囲まれていない文字列を返します。

### `url()`

`url()` 関数は CSS で一般的に使用されますが、その構文は他の関数とは異なります。引用符で囲まれたURLまたは引用符で囲まれていない URL のいずれかを取ることができます。引用符で囲まれていないURLは有効な SassScript 式ではないため、Sass はそれを解析するために特別なロジックを必要とします。

`url()` の引数が引用符で囲まれていない有効な URL である場合、Sass はそれをそのまま解析しますが、補間を使用して SassScript 値を挿入することもできます。引用符で囲まれていない有効な URL でない場合（たとえば、変数や関数呼び出しが含まれている場合）、通常のプレーンな CSS 関数呼び出しとして解析されます。

```scss title="SCSS"
$roboto-font-path: "../fonts/roboto";

@font-face {
    // これは、引用符で囲まれた文字列を受け取る通常の関数呼び出しとして解析されます。
    src: url("#{$roboto-font-path}/Roboto-Thin.woff2") format("woff2");

    font-family: "Roboto";
    font-weight: 100;
}

@font-face {
    // これは、算術式をとる通常の関数呼び出しとして解析されます。
    src: url($roboto-font-path + "/Roboto-Light.woff2") format("woff2");

    font-family: "Roboto";
    font-weight: 300;
}

@font-face {
    // これは、補間された特殊関数として解析されます。
    src: url(#{$roboto-font-path}/Roboto-Regular.woff2) format("woff2");

    font-family: "Roboto";
    font-weight: 400;
}
```

```css title="コンパイルされる CSS"
@font-face {
  src: url("../fonts/roboto/Roboto-Thin.woff2") format("woff2");
  font-family: "Roboto";
  font-weight: 100;
}
@font-face {
  src: url("../fonts/roboto/Roboto-Light.woff2") format("woff2");
  font-family: "Roboto";
  font-weight: 300;
}
@font-face {
  src: url(../fonts/roboto/Roboto-Regular.woff2) format("woff2");
  font-family: "Roboto";
  font-weight: 400;
}

```