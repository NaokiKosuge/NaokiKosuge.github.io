---
slug: /javascript-iterator
sidebar_label: イテレーター
---

# 【JavaScript】イテレーター

イテレーターは、シーケンスの反復可能性を構築するための仕組みです。`for/of` ループや `...` スプレッド演算子では、内部的にイテレーターが利用されます。

- 反復可能オブジェクト

  反復可能オブジェクトが、反復処理を行う場合、`[Symbol.iterator]()` が呼び出され、イテレーターオブジェクトが返ります。

  ```ts title="反復可能オブジェクト"
  interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
  }
  ```

- 反復処理

  一連の反復処理過程の内、個々の処理は、イテレーターオブジェクトが持つ `next()` メソッドが呼び出されることで実行されます。このメソッドが呼ばれる度に反復結果オブジェクトが返ります。反復処理過程の途中で終了する時には `return()` メソッドが呼び出されます。また、`throw()` メソッドで例外を発生させるシグナルを送ることもできます。

  ```ts title="イテレータープロトコル"
  interface Iterator {
    next(): IteratorResult;
    return?(): IteratorResult;
    throw?(): IteratorResult;
  }
  interface Iterator<T, TReturn = any> {
    next(...args: []): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
  }
  ```

- 反復結果オブジェクト

  反復結果オブジェクトの `value` プロパティはシーケンスの値であり、`done` プロパティは最後の値が消費されたかどうかを表すフラグです。

  ```ts title="反復結果オブジェクト"
  type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

  interface IteratorYieldResult<TYield> {
    done?: false;
    value: TYield;
  }

  interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
  }
  ```
