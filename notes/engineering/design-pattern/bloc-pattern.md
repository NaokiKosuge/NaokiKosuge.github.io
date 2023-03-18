---
slug: /bloc-pattern
sidebar_label: BLoC パターン
---

# BLoC パターン

> BLoC (**B**usiness **Lo**gic **C**omponent) パターン は、Dart Conf 2018 で Google によって初めて発表されたパターンです。当時、Web アプリケーション、モバイル アプリケーション、バックエンドなど、プラットフォームに関係なくまったく同じコードを再利用できるようにするために考案されました。
> 
> ––[Reactive Programing - Streams - BLoC (didierboelens.com)](https://www.didierboelens.com/2018/08/reactive-programming-streams-bloc/#the-bloc-pattern)

## コアコンセプト

- ウィジェットは **シンク** を介して BLoC に **イベント** を送信します。
- ウィジェットは、**ストリーム** を介して BLoC から通知されます。
- それらは、BLoC によって実装されるビジネスロジックとは無関係です。

<figure class="inline-flex bg-white">

![BLoC Pattern](../../../static/img/notes/streams_bloc.png)

</figure>
