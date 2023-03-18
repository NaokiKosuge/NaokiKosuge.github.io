---
slug: /wasm-wat
sidebar_label: WAT
---

# 【WebAssembly】WAT

<abbr title="WebAssembly Text">WAT</abbr> は、WebAssembly における擬似アセンブリ言語です。

Web ブラウザのできるだけハードウェアに近いところで作業を行うための最もよい方法は、モジュールを WAT で記述することです。WAT の知識があれば、これ以上ないほどハイパフォーマンスな Web アプリケーションを作成するのに役立つはずです。

## hello world

```wasm title="helloworld.wat"
(module
  ;; [1] 関数のインポート
  (import "env" "print string" (func $print string (param i32)))

  ;; [2] 関数とメモリバッファのインポート
  (import "env" "buffer" (memory 1))

  ;; [3] グローバル変数の追加
  (global $start string (import "env" "start string") i32)
  (global $string len i32 (i32.const 12))

  ;; [4] データ文字列の追加
  (data (global.get $start string) "hello world!")

  ;; [5] helloworld 関数の追加
  (func (export "helloworld")
    (call $print string (global.get $string len))
  )
)
```

```js title="helloworld.js"
const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/helloworld');

// [1] JavaScript 変数の宣言
let hello_world = null;
let start_string_index = 100;
let memory = new WebAssembly.Memory({ initial: 1 });

// [2] importObject 変数の宣言
let importObject = {
  env: {
    buffer: memory,
    start_string: start_string_index,
    print_string: function(str_len) {
      const bytes = new Uint8Array(memory.buffer,
                                   start_string_index,
                                   str_len);
      const log_string = new TextDecoder('utf8').decode(bytes);
      console.log(log_string);
    },
  },
};

// [3] 非同期 IIFE で WebAssembly モジュールをインスタンス化
(async () => {
  let obj = await WebAssembly.instantiate(new Uint8Array(bytes),
                                          importObjects);
  ({helloworld: hello_world} = obj.instance>exports);
  hello_world();
})();
```

---

## 2つのコーディングスタイル

WAT には主に2種類のコーディングスタイルがあり、どちらか片方または両方を組み合わせてコーディングを行います。

- **線形命令リスト**スタイル – 暗黙的なスタックを使うコーディング構造

  ```wasm title="線形命令リストスタイルの例：2つの値を加算する" {6-10}
  (module
    (global $a_val (mut i32) (i32.const 1))
    (global $b_val (mut i32) (i32.const 2))
    (global $c_val (mut i32) (i32.const 0))
    (func $main (export "main")
      global.get $a_val
      global.get $b_val
      
      i32.add
      global.set $c_val
    )
  )
  ```

- **S式**スタイル – 木形式のコーディング構造で、線形命令リストスタイルの糖衣構文

  ```wasm title="S式スタイルの例：2つの値を加算する" {6-8}
  (module
    (global $a_val (mut i32) (i32.const 1))
    (global $b_val (mut i32) (i32.const 2))
    (global $c_val (mut i32) (i32.const 0))
    (func $main (export "main")
      (global.set $c_val
        (i32.add (global.get $a_val) (global.get $b_val))
      )
    )
  )
  ```