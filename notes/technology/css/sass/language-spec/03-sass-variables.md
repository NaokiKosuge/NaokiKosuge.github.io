---
slug: /sass-variables
sidebar_label: 変数
---

# 【Sass】変数（SCSS構文）

Sass 変数は単純です。`$` で始まる名前に値を割り当てると、値自体の代わりにその名前を参照できます。しかし、その単純さにもかかわらず、Sass がテーブルにもたらす最も便利なツールの1つです。変数を使用すると、繰り返しを減らしたり、複雑な計算を行ったり、ライブラリを構成したりすることができます。

```scss title="変数"
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

## デフォルト値

通常、変数に値を割り当てるときに、その変数にすでに値がある場合、その古い値は上書きされます。ただし、Sassライブラリを作成している場合は、CSS の生成に使用する前に、ユーザーがライブラリの変数を構成できるようにすることをお勧めします。

これを可能にするために、Sass は `!default` フラグを提供します。これにより、変数が定義されていないか、その値がnullの場合にのみ、変数に値が割り当てられます。それ以外の場合は、既存の値が使用されます。

デフォルト値の定義方法は、ライブラリ側では、トップレベルで変数定義に `!default` フラグを使用します。そしてライブラリ利用側では、`@use <url> with (<variable>: <value>, ...)` でライブラリをロードする際、任意のデフォルト値を上書きします：

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

## 組み込み変数

組み込みモジュールで定義されている変数は変更できません。

```scss 
@use "sass:math" as math;

// この割り当ては失敗します。
math.$pi: 0;
```

## スコープ

変数はスコープを持ちます。ローカル変数はシャドーイングの特性を持つため、上書きされた変数はスコープの外部へは影響を与えません。

```scss 
$global-variable: global value;

.content {
  $local-variable: local value;
  global: $global-variable;
  local: $local-variable;
}

.sidebar {
  global: $global-variable;

  // $ local-variableがスコープ内にないため、これは失敗します。
  // local: $local-variable;
}
```

### フロー制御のスコープ

フロー制御ルールで宣言された変数には、特別なスコープルールがあります。つまり、フロー制御ルールと同じレベルで変数をシャドウイングしません。代わりに、それらはそれらの変数に割り当てるだけです。これにより、条件付きで変数に値を割り当てたり、ループの一部として値を作成したりするのがはるかに簡単になります。

以下の例では、`$dark-theme` のブール値によってテーマ切り替えを行うことができます：

```scss 
$dark-theme: true !default;

// デフォルトテーマ
$primary-color: #f8bbd0 !default;
$accent-color: #6a1b9a !default;

@if $dark-theme {
  // ダークテーマ
  $primary-color: darken($primary-color, 60%);
  $accent-color: lighten($accent-color, 60%);
}

.button {
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 3px;
}
```

## 変数の定義の有無を調べる関数

- `meta.variable-exists()` — 現在のスコープに指定の変数定義があるか調べる。
- `meta.global-variable-exists()` — グローバルスコープに指定の変数定義があるか調べる。