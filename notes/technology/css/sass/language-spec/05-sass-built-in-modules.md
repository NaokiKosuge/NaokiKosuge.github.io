---
slug: /sass-built-in-modules
sidebar_label: 組み込みモジュール
---

# 【Sass】組み込みモジュール

Sass には組み込みモジュールが用意されており、`@use` ルールを使用してロードすることができます。

- `sass:math` — 数値を操作する関数を提供します。
- `sass:string` — 文字列を簡単に組み合わせたり、検索したり、分割したりできます。
- `sass:color` — 既存の色に基づいて新しい色を生成し、色のテーマを簡単に作成できます。
- `sass:list` — リスト内の値にアクセスして変更できます。
- `sass:map` — マップ内のキーに関連付けられている値などを検索できます。
- `sass:selector` — Sass の強力なセレクターエンジンへのアクセスを提供します。
- `sass:meta` — Sass の内部動作の詳細を公開します。

## グローバル関数

## `sass:math`

```scss
@use "sass:math";
```

`math` のメンバー：

- 定数 
  - `$e` — ネイピア数 （`2.7182818285`）。
  - `$pi` — 円周率（`3.1415926536`）。
- 境界関数
  - `ceil($number)` — 切り上げる。
  - `clamp($min, $number, $max)` — 範囲内に収める。
  - `floor($number)` — 切り捨てる。
  - `max($number...)` — 最大値を取得する。
  - `min($number...)` — 最小値を取得する。
  - `round($number)` — 丸める。
- 距離関数
  - `abs($number)` — 絶対値を取得する。
  - `hypot($number...)` — 平方和の平方根を求める。
- 指数関数
  - `log($number, $base: null)` — 対数を取得する。
  - `pow($base, $exponent)` — 累乗計算する。
  - `sqrt($number)` — 平方根を求める。
- 三角関数
  - `cos($number)` — 余弦
  - `sin($number)` — 正弦
  - `tan($number)` — 正接
  - `acos($number)` — 逆余弦
  - `asin($number)` — 逆正弦
  - `atan($number)` — 逆正接
  - `atan2($y, $x)` — 2引数をとる逆正接
- 単位関数
  - `compatible($number1, $number2)` — 単位間の互換性の有無を調べる。
  - `is-unitless($number)` — 単位がないか調べる。
  - `unit($number)` — 単位の文字列表現を取得する。
- その他の関数
  - `div($number1, $number2)` — 除算する。
  - `percentage($number)` — パーセンテージ変換する。
  - `random($limit: null)` — ランダムな整数を取得する。

## `sass:string`

```scss
@use "sass:string";
```

`string` のメンバー：

- `quote($string)` — 引用符で囲む。
- `index($string, $substring)` — 文字列内のインデックスを取得する。
- `insert($string, $insert, $index)` — 文字列の挿入
- `length($string)` — 文字列の長さ
- `slice($string, $start-at, $end-at: -1)` — 文字列のスライス
- `to-upper-case($string)` — 大文字へ変換
- `to-lower-case($string)` — 小文字へ変換
- `unique-id()` — ランダムに生成された引用符で囲まれていない文字列を生成。
- `unquote($string)` — 引用符を外す。

## `sass:color`

```scss
@use "sass:color";
```

`color` のメンバー：

- `adjust($color,
  $red: null, $green: null, $blue: null,
  $hue: null, $saturation: null, $lightness: null,
  $alpha: null)` — 色の要素を増減させる。
- `alpha($color)` — アルファチャネルの値
- `blackness($color)` — `$color` のHWBの黒さを、0％から100％までの数値として返す。
- `blue($color)` — ブルーチャネルの値
- `change($color,
  $red: null, $green: null, $blue: null,
  $hue: null, $saturation: null, $lightness: null,
  $alpha: null)` — 色の1つ以上のプロパティを新しい値に設定する。
- `complement($color)` — RGB 補数
- `grayscale($color)` — グレースケール
- `green($color)` — グリーンチャネルの値
- `hue($color)` — 色相を0度から360度までの数値として取得する。
- `ie-hex-str($color)` — IE の `-ms-filter` 向けの値に変換する。
- `invert($color, $weight: 100%)` — 逆の色を取得する。
- `lightness($color)` — `$color`の HSL 明度を0％から100％までの数値として返す。
- `mix($color1, $color2, $weight: 50%)` — 混在する色を返す。
- `red($color)` — レッドチャネルの値
- `saturation($color)` — `$color` の HSL 飽和度を0％から100％までの数値として返す。
- `scale($color,
  $red: null, $green: null, $blue: null,
  $saturation: null, $lightness: null,
  $alpha: null)` — プロパティを流動的にスケーリングする。

## `sass:list`

```scss
@use "sass:list";
```

`list` のメンバー：

- `append($list, $val, $separator: auto)` — リストの末尾に追加する。
- `index($list, $value)` — 要素のインデックスを返す。
- `is-bracketed($list)` — リストにブラケットがあるか確認する。
- `join($list1, $list2, $separator: auto, $bracketed: auto)` — リストを結合する。
- `length($list)` — リストの長さを返す。
- `separator($list)` — リストの区切りの種類を返す。
- `nth($list, $n)` — リストから指定の位置の要素を返す。
- `set-nth($list, $n, $value)` — リストの指定の位置に要素を置き換える。
- `slash($elements...)` — スラッシュ区切りのリストに変換する。
- `zip($lists...)` — すべてのリストを要素ごとのサブリストへと結合する。

## `sass:map`

```scss
@use "sass:map";
```

`map` のメンバー：

- `deep-merge($map1, $map2)` — ディープマージ
- `deep-remove($map, $key, $keys...)` — ディープリムーブ
- `get($map, $key, $keys...)` — 指定のキーの値を返す。
- `has-key($map, $key, $keys...)` — 指定のキーの存在を確認する。
- `keys($map)` — 全てのキーをカンマ区切りのリストで返す。
- `merge($map1, $map2)` — マージ
- `remove($map, $keys...)` — リムーブ
- `set($map, $args...)` — セット
- `values($map)` — すべての値のカンマ区切りのリストを返す。

## `sass:selector`

```scss
@use "sass:selector";
```

`selector` のメンバー：

- `is-superselector($super, $sub)` — セレクター間において継承関係があるか調べる。
- `append($selectors...)` — セレクターを追加する。
- `extend($selector, $extendee, $extender)` — セレクターを拡張する。
- `nest($selectors...)` — セレクターをネストする。
- `parse($selector)` — セレクターをパースする。
- `replace($selector, $original, $replacement)` — セレクターを置き換える。
- `unify($selector1, $selector2)` — セレクターを統合する。
- `simple-selectors($selector)` — セレクターを分離しリストで返す。

## `sass:meta`

```scss
@use "sass:meta";
```

`meta` のメンバー：

- ミックスイン
  - `load-css($url, $with: null)` — モジュールをロードし、適用する。
- 関数
  - `calc-args($calc)` — 指定の `calc` 関数の引数をリストで返す。
  - `call($function, $args...)` — 関数を実行する。
  - `content-exists()` — 現在のミックスインに `@content` ブロックが渡されたかどうかを返す。
  - `feature-exists($feature)` — Sass の指定の機能の実装の有無を調べる。
  - `function-exists($name)` — 指定の関数が定義されているか調べる。
  - `get-function($name, $css: false, $module: null)` — 名前から関数を取得する。
  - `global-variable-exists($name, $module: null)` — 指定のグローバル変数の存在を調べる。
  - `inspect($value)` — 値の文字列表現を返す。
  - `keywords($args)` — 任意の引数を取るミックスインまたは関数に渡されたキーワードを返す。
  - `mixin-exists($name, $module: null)` — 指定のミックスインの存在を調べる。
  - `module-functions($module)` — モジュールから関数名と関数の連想配列を取得する。
  - `module-variables($module)` — モジュールから変数名と変数の連想配列を取得する。
  - `type-of($value)` — 型の種類を調べる。
  - `variable-exists($name)` — 指定の変数の存在を確認する。
