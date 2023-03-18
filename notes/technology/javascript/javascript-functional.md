---
slug: /javascript-functional
sidebar_label: 関数型プログラミング
---

# JavaScript 関数型プログラミング

## 関数型プログラミングの基本的な用語

- 副作用
  > 関数の入力から出力までの過程において、関数の外部の状態に変化を与える効果のこと。
- 参照透過性
  > 何度呼び出しても、入力が同じであれば出力も同じである関数の性質を指します。
- 純粋関数
  > 参照透過であり副作用がない関数のこと
- アリティ
  > 関数がとる引数の個数

## タプル

タプルは、有限かつ順番に並べられた要素のリスト構造を指す概念です。

```ts
const Tuple = function(/* Types */) {
  const typeInfo = Array.prototype.slice.call(arguments, 0);
  const _T = function (/* values */) {
    const values: Array = Array.prototype.slice.call(arguments, 0);
    if (values.some(val => val === null || val === undefined)) {
      throw new ReferenceError('Touples may not have any null values');
    }
    if (values.length !== typeInfo.length) {
      
    }
  }
}
```

## カリー化

カリー化は、複数変数の缶酢を複数の単項関数に変換することで元の関数を段階的に実行するテクニックです。複数変数の関数は、すべての引数が提供されるまで、処理を「一時停止」あるいは「先送り」します。

```text title="【定義】3個のパラメーターの curry 関数"
curry(f) :: ((a,b,c) -> d) -> a -> b -> c -> d
```

````ts title="【TypeScript 実装例】2個の引数を用いた関数の「簡易な」カリー化関数"
/**
 * 2つの引数をとる関数 `fn` をカリー化します。
 * 
 * @example
 *     const add = curry2((a, b) => a + b);
 *     add(1);     // -> Function; ✅
 *     add(1)(2);  // -> 3; ✅
 *     add(1, 2);  // -> Function; ⚠️「3」が返ることを期待していた！
 */
function curry2(fn: Function) {
  return function (arg1) {
    return function (arg2) {
      return fn(arg1, arg2);
    }
  }
}
````

:::tip ライブラリが提供するカリー化関数

- Lodash からは、[`_.curry`](https://lodash.com/docs/#curry) と [`_.curryRight`](https://lodash.com/docs/#curryRight) が提供されています。
- Ramda からは、[`R.curry`](https://ramdajs.com/docs/#curry), [`R.curryN`](https://ramdajs.com/docs/#curryN), [`R.uncurryN`](https://ramdajs.com/docs/#uncurryN) が提供されています。 

:::

## 部分適用

部分適用は、非可変個の引数のパラメーターの一部を固定値に初期化して、アリティ（→引数の個数のこと）がより少ない関数を作成する処理です。

例えば、5個のパラメーターをとる関数があって、そのうち3個の引数を渡すと、最終的に残り2個の引数を要求する関数が得られます。

````ts title="【TypeScript 実装例】「簡易な」部分適用関数"
/**
 * 関数 `fn` とそれが求める引数の一部をとり、新たな関数を返します。
 * 返される関数は、渡された引数を既に適用されたものであり、
 * 残りの引数を受け取ることを求めます。
 * これらの引数の順番は守る必要があります。
 * 
 * @example
 *     function greet(greeting, name) {
 *       return greeting + ' ' + name;
 *     }
 *     
 *     const sayHelloTo = partial(greet, 'hello');
 *     sayHelloTo('fred');  // -> 'hello fred'
 */
function partial(fn: Function, ...argsBound: Array): Function {
  return function(...args: Array) {
    return fn.call(this, ...argsBound, ...args);
  }
}
````

:::tip ライブラリが提供する部分適用関数

- Lodash からは、[`_.partial`](https://lodash.com/docs/#partial) と [`_.partialRight`](https://lodash.com/docs/#partialRight) が提供されています。
- Ramda からは、[`R.partial`](https://ramdajs.com/docs/#partial), [`R.partialObject`](https://ramdajs.com/docs/#partialObject), [`R.partialRight`](https://ramdajs.com/docs/#partialRight) が提供されています。

:::

## 関数合成

## パイプライン

## コンビネータ

## ファンクター

## モナド構造

### Maybe モナド

Maybe モナドは、フォールトトレランスを実現するのに役立つ関数型の仕組みであり、「オプション型」としても知られています。Maybe は次の様に、Just と Nothing という2つのサブタイプを持っていて、値の有／無を抽象的に扱うことが出来ます。

- **Maybe** – 【抽象型】値の有無が不明な状態
  >
  > ```js
  > class Maybe {
  >   static just(a) {
  >     return new Just(a);
  >   }
  >   static nothing() {
  >    
  >   }
  > }
  > ```

- **Just** – 【具象型】値が有る状態
- **Nothing** – 【具象型】（`null` や `undefined` といった）値が無い状態

### Either モナド

Either モナドは、排他的な2つの値を論理的に分離しつつも抽象的に扱うことを可能にするもので、「結果型」としても知られています。Either には、Left と Right という2つのサブタイプがあります。

- **Either** – 【抽象型】
  - **Left** – 【具象型】（`Error` オブジェクトといった）失敗値
  - **Right** – 【具象型】成功値

### IO モナド

## メモ化

メモ化は、プログラム高速化のための最適化技法で、「参照透過性を備えた関数は、入力が同じであれば出力も同じである」という性質を利用したキャッシュ機構です。

```ts title="【TypeScript 実装例】メモ化関数"
/**
 *  関数をメモ化します。
 *  
 *  @param {Function} fn - 参照透過性を備えた関数
 *  @returns {Function} メモ化された関数
 */
function memoize(fn: Function): Function {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}
```

:::tip ライブラリが提供するメモ化関数

- Lodash からは、[`_.memoize`](https://lodash.com/docs/#memoize) が提供されています。
- Ramda からは、[`R.memoizeWith`](https://ramdajs.com/docs/#memoizeWith) が提供されています。

:::

