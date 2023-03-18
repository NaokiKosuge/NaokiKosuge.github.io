---
slug: /sass-at-rules
sidebar_label: ＠ルール
---

# 【Sass】＠ルール

- [`@use`](#use)
- [`@forward`](#forward)
- [`@import`](#import)
- [`@mixin` と `@include`](#mixin-and-include)
- [`@function`](#function)
- [`@extend`](#extend)
- [`@at-root`](#at-root)
- コンソールへの出力
  - [`@debug`](#debug)
  - [`@warn`](#warn)
  - [`@error`](#error)
- フロー制御
  - [`@if`](#if)
  - [`@each`](#each)
  - [`@for`](#for)
  - [`@while`](#while)
- CSS の ＠ルール

## `@use`

`@use` ルールは、他の Sass スタイルシートからミックスイン、関数、変数をロードし、複数のスタイルシートの CSS を結合します。`@use` によってロードされたスタイルシートは「モジュール」と呼ばれます。 Sassは、便利な機能が満載の組み込みモジュールも提供します。

- メンバーの読み込み
  - 名前空間の変更
  - デフォルト変数の上書き
- メンバーの公開設定

```scss title="style.scss"
// foundation/_code.scss をロードします。
@use 'foundation/code';
// foundation/_lists.scss をロードします。
@use 'foundation/lists';
```

### モジュールのメンバー

変数、関数、ミックスインはメンバーとしてモジュールから公開されます。ただし、名前が `-` または `_` から始まるメンバーは非公開となります。メンバー名は、`-` と `_` を区別されません。

```scss title="src/_corners.scss"
// 公開メンバー
$radius: 3px;
// 非公開メンバー
$-private: "SECRET㊙️"

@mixin rounded {
  border-radius: $radius;
}
```

### メンバーの読み込み

デフォルトでは、名前空間は、モジュールのファイル名に由来します：

```scss title="style.scss" {1}
@use "src/corners";

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
}
```

名前空間をデフォルトから変更する場合は、`as` で指定します：

```scss {1}
@use "src/corners" as c;

.button {
  @include c.rounded;
  padding: 5px + c.$radius;
}
```

### デフォルト値の上書き {#override-default-value}

ライブラリモジュールのメンバー変数にデフォルト値が指定されている場合、上書きできます。

```scss title="_lib.scss"
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```scss title="style.scss"
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

## `#forward`

`@forward` は、モジュールを転送する機能で、モジュールのエントリポイントを作成するのに役立ちます。

```scss title="src/_list.scss"
@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```scss title="bootstrap.scss"
@forward "src/list";
```

```scss title="style.scss"
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

### 可視性の制御

モジュール転送の際、一部のメンバーを非公開にすること、または、明示するメンバーのみを公開にすることができます。

- 一部を非公開 — `@forward <url> hide <members...>` 
- 明示したメンバーのみを公開 — `@forward <url> show <members...>`

```scss title="src/_list.scss"
$horizontal-list-gap: 2em;

@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin list-horizontal {
  @include reset;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: $horizontal-list-gap;
    }
  }
}
```

```scss title="bootstrap.scss"
@forward "src/list" hide list-reset, $horizontal-list-gap;
```

### デフォルト値の上書き

`@forward` は転送時の際、 [`@use`](#use) と同様に、`width` で [デフォルト値を上書き](#override-default-value) することができます。

## `@import`

:::caution 非推奨

Sass チームは、`@import` ルールの継続的な使用を推奨していません。Sass は、今後数年間で徐々に段階的に廃止し、最終的には言語から完全に削除します。代わりに`@use` ルールを優先します。 （現在、Dart Sass のみが `@use` をサポートしていることに注意してください。他の実装のユーザーは、代わりに `@import` ルールを使用する必要があります。）

<details>
<summary><code>@import</code> の何が問題になっていますか？</summary>

`@import` ルールには、いくつかの重大な問題があります：

- `@import` は、すべての変数、ミックスイン、および関数にグローバルにアクセスできるようにします。これにより、人（またはツール）がどこで定義されているかを判断するのが非常に困難になります。
- すべてがグローバルであるため、名前の衝突を避けるために、ライブラリはすべてのメンバーの前にプレフィックスを付ける必要があります。
- `@extend` ルールもグローバルであるため、どのスタイルルールが拡張されるかを予測するのは困難です。
- `@importe` されるたびに、各スタイルシートが実行され、その CSS が発行されます。これにより、コンパイル時間が長くなり、出力が肥大化します。
- ダウンストリームスタイルシートにアクセスできないプライベートメンバーまたはプレースホルダーセレクターを定義する方法はありませんでした。

新しいモジュールシステムと `@use` ルールは、これらすべての問題に対処します。

</details>

:::

Sass は、CSSの `@import` ルールを拡張して、Sass および CSS スタイルシートをインポートし、ミックスイン、関数、および変数へのアクセスを提供し、複数のスタイルシートの CSS を組み合わせます。ページをレンダリングするときにブラウザが複数の HTTP リクエストを行う必要があるプレーンな CSS インポートとは異なり、 Sass インポートはコンパイル中に完全に処理されます。

Sass インポートの構文は CSS インポートと同じですが、複数のインポートをそれぞれに独自の `@import` を持たせるのではなく、カンマで区切ることができる点が異なります。また、インデントされた構文では、インポートされた URL に引用符を付ける必要はありません。

```scss title="style.scss"
@import 'foundation/code', 'foundation/lists';
```

### ネスト

インポートは通常、スタイルシートのトップレベルで記述されますが、そうである必要はありません。スタイルルールまたは CSS　の ＠ルール 内にネストすることもできます。インポートされた CSS はそのコンテキストにネストされているため、ネストされたインポートは、CSS のチャンクを特定の要素またはメディアクエリにスコープするのに役立ちます。ただし、ネストされたインポートで定義されたトップレベルのミックスイン、関数、変数は引き続きグローバルに定義されていることに注意してください。

```scss title="style.scss"
.theme-sample {
  @import "theme";
}
```

## `@mixin` と `@include` {#mixin-and-include}

`@mixin`を使用すると、スタイルシート全体で再利用できるスタイルを定義できます。定義したミックスインを展開するには、`@include` を使用します。ミックスインには引数を持たせることができます。

`@mixin` において、引数の定義にはいくつかのバリエーションがあります：

- 通常の引数 — e.g. `@mixin some($arg) {...}`
- オプションの引数 — e.g. `@mixin some($arg: default) {...}`
- 可変調引数 — e.g. `@mixin some($args...) {...}`

`@include` において、引数を指定する方法にもいくつかのバリエーションがあります：

- 位置による指定 — e.g. `@include some(val)`
- キーワードによる指定 — e.g. `@include some($arg: val)`

```scss title="引数のないミックスインの定義と展開" {1,20}
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

```scss title="オプション引数を使ったミックスインの定義と展開" {1,14}
@mixin replace-text($image, $x: 50%, $y: 50%) {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;

  background: {
    image: $image;
    repeat: no-repeat;
    position: $x $y;
  }
}

.mail-icon {
  @include replace-text(url("/images/mail.svg"), 0);
}
```

```scss title="キーワード引数を使ったミックスインの定義と展開" {1,11}
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```

```scss title="可変調引数を使ったミックスインの定義と展開" {1,11}
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");
```

### `@content`

引数を取ることに加えて、ミックスインはコンテンツブロックと呼ばれるスタイルのブロック全体を取ることができます：

```scss {3,10}
@mixin hover {
  &:not([disabled]):hover {
    @content;
  }
}

.button {
  border: 1px solid black;
  @include hover {
    border-width: 2px;
  }
}
```

## `@function`

`@function` を用いると、スタイルシート全体で再利用できる SassScript 値に対する複雑な操作を関数として定義できます。関数ブロックは、必ず `@return` を用いて値を返す必要があります。また、関数は引数を持たせることができます。

`@function` において、引数の定義にはいくつかのバリエーションがあります：

- 通常の引数 — e.g. `@function fn($arg) {...}`
- オプションの引数 — e.g. `@function fn($arg: default) {...}`
- 可変調引数 — e.g. `@function fn($args...) {...}`

関数呼び出しにおいて、引数を指定する方法にもいくつかのバリエーションがあります：

- 位置による指定 — e.g. `some(val)`
- キーワードによる指定 — e.g. `some($arg: val)`

```scss 
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

## `@extend`

`@extend` を用いると、指定したセレクタのスタイルを継承することが出来ます。

このように動作します：

```scss title="SCSS"
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```

↓

```css title="CSS"
.error, .error--serious {
  border: 1px #f00;
  background-color: #fdd;
}
.error--serious {
  border-width: 3px;
}
```

### プレースホルダーセレクター

拡張のみを目的としたスタイルルールを作成したい場合があります。その場合、`%` で始まるクラスセレクターのように見えるプレースホルダーセレクターを使用できます（モジュール外に公開したくない場合は `%-` または `%_` で始める）。プレースホルダーを含むセレクターはCSS出力に含まれませんが、プレースホルダーを拡張するセレクターは含まれます。また、

```scss title="プレースホルダーセレクターの利用"
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}
```

↓

```css
.alert:hover {
  font-weight: bold;
}
```

## `@at-root`

`@at-root` を使用すると、ネストしているセレクタをルートに戻すことができます。但し、`@media` 内で使用した場合は、`@media` の内側に書き出されます。

```scss title="SCSS"
.block {
  .element-A {
    width: 80%;
  }
  @at-root .element-B {
    width: 100%;
  }
}
```

↓

```css title="CSS
.block .element-A {
  width: 80%;
}

.element-B {
  width: 100%;
}
```

### `without` オプションと `with` オプション

`@at-root` には2つのオプションが用意されています：

- `@at-root (without: ...)` — 指定したルールを除外する
- `@at-root (with: ...)` — 指定したルール以外を除外する

この時、指定できる値：

- CSS ＠ルール — `media`、`supports`、`keyflames`
- `rule` — スタイルルール
- `all` — 上記全て

## コンソールへの出力

### `@debug`

`@debug` を使用すると、コンパイル時に値を出力することができます。

```scss title="SCSS" {3}
@mixin inset-divider-offset($offset, $padding) {
  $divider-offset: (2 * $padding) + $offset;
  @debug "divider offset: #{$divider-offset}";

  margin-left: $divider-offset;
  width: calc(100% - #{$divider-offset});
}
```

↓

```text title="コンソール出力"
test.scss:3 Debug: divider offset: 132px
```

### `@warn`

`@warn` を使用すると、コンパイル時に警告を出力することができます。

```scss title="SCSS" {6}
$known-prefixes: webkit, moz, ms, o;

@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    @if not index($known-prefixes, $prefix) {
      @warn "Unknown prefix #{$prefix}.";
    }

    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.tilt {
  // Oops, we typo'd "webkit" as "wekbit"!
  @include prefix(transform, rotate(15deg), wekbit ms);
}
```

↓

```text title="コンソール出力"
Warning: Unknown prefix wekbit.
    example.scss 6:7   prefix()
    example.scss 16:3  root stylesheet
```

### `@error`

`@error` を使用すると、コンパイル時にエラーを出力し、処理を中断させることができます。

```scss title="SCSS" {3}
@mixin reflexive-position($property, $value) {
  @if $property != left and $property != right {
    @error "Property #{$property} must be either left or right.";
  }

  $left-value: if($property == right, initial, $value);
  $right-value: if($property == right, $value, initial);

  left: $left-value;
  right: $right-value;
  [dir=rtl] & {
    left: $right-value;
    right: $left-value;
  }
}

.sidebar {
  @include reflexive-position(top, 12px);
}
```

↓

```text title="コンソール出力"
Error: "Property top must be either left or right."
  ╷
3 │     @error "Property #{$property} must be either left or right.";
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss 3:5   reflexive-position()
  example.scss 19:3  root stylesheet
```

## フロー制御

### `@if`

`@if` を使用すれば、真偽値に応じて場合分けすることができます。分岐の数を増やすには `@else` を加えます。

```scss title="if"
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```

```scss title="if-else"
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme {
    background-color: $light-background;
    color: $light-text;
  } @else {
    background-color: $dark-background;
    color: $dark-text;
  }
}

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```

```scss title="if-else-if"
@use "sass:math";

@mixin triangle($size, $color, $direction) {
  height: 0;
  width: 0;

  border-color: transparent;
  border-style: solid;
  border-width: math.div($size, 2);

  @if $direction == up {
    border-bottom-color: $color;
  } @else if $direction == right {
    border-left-color: $color;
  } @else if $direction == down {
    border-top-color: $color;
  } @else if $direction == left {
    border-right-color: $color;
  } @else {
    @error "Unknown direction #{$direction}.";
  }
}

.next {
  @include triangle(5px, black, right);
}
```

### `@each`

`@each` を使用すると、リストの各要素またはマップの各ペアに対して、反復的に処理を行えます。

```scss title="リストに対する @each"
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
```

```scss title="マップに対する @each"
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}
```

```scss title="@each でデストラクチャリング"
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }
}
```

### `@for`

`@for` を使用すると、カウントアップシーケンスの要素に伴う繰り返し処理を行うことができます。書き方は2種類あります。

- `from-to` — from から始まり to まで。to は含まない。
- `from-through` — from から始まり through まで。through を含む。

```scss title="from-through"
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

### `#while`

`@while` を使用すると、式が `true` と評価される間繰り返し処理を行うことができます。

```scss title="SCSS"
@use "sass:math";

/// Divides `$value` by `$ratio` until it's below `$base`.
@function scale-below($value, $base, $ratio: 1.618) {
  @while $value > $base {
    $value: math.div($value, $ratio);
  }
  @return $value;
}

$normal-font-size: 16px;
sup {
  font-size: scale-below(20px, 16px);
}
```

```scss title="CSS"
sup {
  font-size: 12.36094px;
}
```

## CSS の ＠ルール

Sass が対応する CSS ＠ルール は以下の通りです。

- `@media`
- `@supports`
- `@keyframes`