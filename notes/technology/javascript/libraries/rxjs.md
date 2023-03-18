---
slug: /rxjs
sidebar_label: RxJS
---

# RxJS

> 🔗 [rxjs.dev](https://rxjs.dev/)

RxJS は、観測可能なシーケンスを用いて、非同期かつイベントベースのプログラムを構成するためのライブラリです。Observer パターンと Iterator パターン、そしてコレクションを用いた関数型プログラミングを組み合わせ、イベントのシーケンスを管理する理想的な方法の必要性を満たしています。

## コンセプト

- Observable
  > 将来の値やイベントの呼び出し可能なコレクションという考えを表しています。
- Observer
  > Observable によって配信される値を聞く方法を知っているコールバックのコレクションです。
- Subscription
  > Observable の実行を表し、主に実行をキャンセルするのに便利なものです。
- Operators
  > 純粋な関数で、`map`, `filter`, `concat`, `reduce` などの操作でコレクションを扱う関数型プログラミングスタイルを可能にします。
- Subject
  > EventEmitter に相当し、値やイベントを複数の Observers にマルチキャストする唯一の方法です。
- Schedulers
  > 並行処理を制御するための集中ディスパッチャで、`setTimeout` や `requestAnimationFrame` などの計算がいつ行われるかを調整することができます。

## Observable

> Observable は、任意の時間にわたる任意の値のセットの表現で、RxJS の最も基本的な構成要素です。

- [`Observable`](https://rxjs.dev/api/index/class/Observable)
  - 
- [`from`](https://rxjs.dev/api/index/function/from) – 配列、配列のようなオブジェクト、`Promise`、反復可能なオブジェクト、または `Observable` のようなオブジェクトから `Observable` を作成します。
- [`fromEvent`](https://rxjs.dev/api/index/function/fromEvent) – 指定されたイベントターゲットからの特定のタイプのイベントを発行する `Observable` を作成します。
- [`fromEventPattern`](https://rxjs.dev/api/index/function/fromEventPattern) – イベントハンドラーを登録するための任意の APIか ら `Observable` を作成します。

## Observer

> Observer とは、Observable によって配信される値の消費者のことです。Observer は単純にコールバックのセットで、Observable によって配信される `next`、`error`、`complete` の各タイプの通知に1つずつあります。以下は典型的な Observer オブジェクトの例です。

## Operators

- [``](#)

## Subscription

## Subjects

## Scheduler