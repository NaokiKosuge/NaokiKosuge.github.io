---
slug: /javascript-types
sidebar_label: 型
---

# 【JavaScript】型

## 型分類

- _プリミティブ型_
  - `undefined` 
  - `null`
  - 論理型（`Boolean`）
  - 数値型（`Number`）
  - 長整数型（`BigInt`）
  - 文字列型（`String`）
  - シンボル型（`Symbol`）
- _オブジェクト型_（`Object`）
  - `Function`

### プリミティブ型

プリミティブ型は、メソッドを持たないデータ型のことで、その値は不変（イミュータブル）です。それ故基本型とも呼ばれています。

プリミティブは次の7種類があります：

| プリミティブ      | ラッパーオブジェクト | 具体的な値              |
|-------------|------------|--------------------|
| `undefined` | なし         | `undefined`        |
| `null`      | なし         | `null`             |
| 論理値         | `Boolean`  | `true` または `false` |
| 数値          | `Number`   | `1` など             |
| 長整数         | `BigInt`   | `1n` など            |
| 文字列         | `String`   | `'文字列'` など         |
| シンボル        | `Symbol`   | `Symbol()` など      |

プリミティブ型は自体はメソッドを利用できませんが、**オートボクシング**により、対応するラッパーオブジェクトに暗黙的に変換されることでメソッドを利用することができるようになっています。

```js title="例：文字列のオートボクシング"
'title'.toUpperCase();  // => TITLE
```

## `typeof` 演算子

`typeof` 演算子は、オペランドのデータ型を示す文字列を返す、単項演算子です。

```js typeof 演算子の動作確認
typeof undefined;         // => 'undefined'
typeof null;              // => 'object'
typeof true;              // => 'boolean'
typeof 1;                 // => 'number'
typeof NaN;               // => 'number'
typeof 1n;                // => 'bigint'
typeof SYmbol();          // => 'symbol'
typeof (() => {});        // => 'function'
typeof (function f() {}); // => 'function'
typeof ({});              // => 'object'
typeof (Date);            // => 'function'
typeof (new Date());      // => 'obkect'
```

## `instanceof` 演算子

`instanceof` 演算子は、左辺のオブジェクトが右辺のクラスのインスタンスであれば `true` を返します。これは、プロトタイプチェーンを遡ってチェックされます。

```js title="instanceof 演算子の動作確認"
let d = new Date(); // Date() コンストラクタを使って新しいオブジェクトを生成する。
d instanceof Date;   // => true: d はDate() を使って生成された。
d instanceof Object; // => true: すべてのオブジェクトはObject のインスタンス。
d instanceof Number; // => false: d はNumber オブジェクトではない。
let a = [1, 2, 3];  // 配列リテラル構文を使って配列を生成する。
a instanceof Array;  // => true: a は配列。
a instanceof Object; // => true: すべての配列はオブジェクト。
a instanceof RegExp; // => false: 配列は正規表現ではない。
```

## オブジェクト

オブジェクトはプロパティの集合体です。

一般的には、オブジェクトは名前の付けられた値を順不同にまとめたものですが、配列という、値に順序を付けた特殊なオブジェクトもあります。

