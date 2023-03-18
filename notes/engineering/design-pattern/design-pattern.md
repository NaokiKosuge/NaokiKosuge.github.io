---
slug: /design-pattern
sidebar_label: デザインパターン
---

# デザインパターン

## 一覧

> **GoF によるパターン**
>
> - _生成に関するパターン_
>   - Abstract Factory
>   - Builder
>   - [Factory Method](#factory-method)
>   - Prototype
>   - Singleton
> - _構造に関するパターン_
>   - [Adapter](#adapter)
>   - Bridge
>   - Composite
>   - [Decorator](#decorator)
>   - Facade
>   - Flyweight
>   - [Proxy](#proxy)
> - _振る舞いに関するパターン_
>   - Chain of Responsibility
>   - Command
>   - Interpreter
>   - Iterator
>   - Mediator
>   - Memento
>   - Observer
>   - State
>   - Strategy
>   - Template Method
>   - Visitor

> **並行性に関するパターン**
> 
> - Active object
> - Balking
> - Double-checked locking
> - Future
> - Guarded suspension
> - Lock
> - Monitor
> - Producer-consumer
> - Reactor
> - Readers–writer lock
> - Scheduler
> - Thread pool
> - Thread-specific storage
> - Two-phase termination

> **アーキテクチャに関するパターン**
>
> - Front Controller
> - Interceptor
> - MVC
> - MVVM
> - Multitier Architecture

> **その他のパターン**
>
> - 依存性の注入（DI）
> - 遅延読み込み
> - モックオブジェクト
> - Null オブジェクト
> - オブジェクトプール
> - Servant
> - Type tunnel

## 生成に関するパターン

### Factory Method

```ts title="TypeScript の例：Factory Method"
export function createImage(name: string): Image {
  // JPEG
  if(name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  // GIF
  } else if(name.match(/\.gif$/)) {
    return new GifImage(name);
  // PNG
  } else if(name.match(/\.png$/)) {
    return new PngImage(name);
  // Other
  } else {
    throw new Error('サポートされていないフォーマット');
  }
}
```

## 構造に関するパターン

### Adapter

```ts title="TypeScript の例：Adapter"
// todo
```

### Decorator

```ts title="TypeScript の例：Decorator"
export function decorate(component) {
  const proto = Object.getPrototypeOf(component);
  function Decorator(component) {
    this.component = component;
  }
  Decorator.prototype = Object.create(proto);
  //新しいメソッド
  Decorator.prototype.greetings = function() {
    return 'Hi!';
  };
  //委譲されるメソッド
  Decorator.prototype.hello = function() {
    return this.component.hello.apply(this.component, arguments);
  };
  return new Decorator(component);
}
```

### Proxy

```ts title="TypeScript の例：Proxy"
export function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);
  function Proxy(subject) {
    this.subject = subject;
  }
  Proxy.prototype = Object.create(proto);
  //プロキシが処理するメソッド
  Proxy.prototype.hello = function(){
    return this.subject.hello() + ' world!';
  };
  //サブジェクトに委譲するメソッド
  Proxy.prototype.goodbye = function(){
    return this.subject.goodbye
        .apply(this.subject, arguments);
  };
  return new Proxy(subject);
}
```

## 振る舞いに関するパターン

## 並行性に関するパターン

## アーキテクチャに関するパターン

## その他のパターン

## 参考サイト

- [JavaScript Design Patterns - Dofactory](https://www.dofactory.com/javascript/design-patterns)
