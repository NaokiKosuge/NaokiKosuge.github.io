---
slug: /singleton-pattern
sidebar_label: シングルトン
---

# 【デザインパターン】シングルトン

## 解説



## 実装

### TypeScript

```ts {1-14}
class Singleton {
  private static instance: Singleton;
  private constructor() {
    // do something construct...
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      // ... any one time initialization goes here ...
    }
    return Singleton.instance;
  }
  someMethod() { }
}

let something = new Singleton(); // Error: constructor of 'Singleton' is private.

let instance = Singleton.getInstance(); // do something with the instance...
```
