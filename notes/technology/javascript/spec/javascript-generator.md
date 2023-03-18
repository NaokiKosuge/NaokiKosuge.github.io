---
slug: /javascript-generator
sidebar_label: ジェネレーター
---

# 【JavaScript】ジェネレーター

ジェネレーターの基本機能は、計算処理を一時的に中止し、途中結果を生成し、後ほど計算を再開することです。

ジェネレーター関数を利用すると、簡単にイテレーターを作ることができます。

```js title="例：無限ジェネレーター"
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ...
```

## ジェネレータ関数宣言

ジェネレータ関数は、`function*` 式で定義します。

```js title="例：ジェネレーター関数宣言"
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
```

### `yield` キーワード

[`yield`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield) キーワードは次のことを行います：

- ジェネレーター関数の実行を一時停止します。
- ジェネレーターの呼び出し元に `yield` キーワードに続く値を返します。これは、ジェネレータ版 `return` と考えることができます。
- **[`[rv] = yield [expression];`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield#syntax) の形式**：`next()` メソッドから渡されたオプションの値を受け取ります。
- **[`yield* expression;`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield*) の形式**：別の ジェネレーター や反復可能なオブジェクトに委任します。

## ジェネレータの実行

ジェネレータ関数を実行すると `Generator` オブジェクトが返ります。ジェネレータを実行するには、`next` メソッドを呼び出します。

### `next()` メソッド

`next()` メソッドは次のことを行います：

- ジェネレータへ値を送ること
- ジェネレータを実行すること
- ジェネレータを実行した結果を受け取ること

```js title="next() メソッド" {8-11}
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
```

## ジェネレータの終了

ジェネレータを終了させるには、`return()` メソッドを使用します。

```js title="例：return() メソッド" {10}
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```

## ジェネレーターにおけるエラー

```js title="例：throw() メソッド" {14}
function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
```