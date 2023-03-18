---
slug: /babeljs
sidebar_label: Babel
---

# Babel

<figure class="inline-flex">

![](../../../../static/img/notes/babeljs.logo.svg)

</figure>

> 🔗 [Babel · The compiler for next generation JavaScript](https://babeljs.io/)

Babel は、現在および古いブラウザまたは環境で ECMAScript2015+ コードを下位互換性のあるバージョンの JavaScript に変換するために主に使用されるツールチェーンです。

## 構成ファイル

### 構成ファイルの種類

- プロジェクト全体の構成
  > プロジェクト全体の設定のために、Babel は自動的にルートディレクトリでこれらのファイルを検索します。
  > - `babel.config.(json|js|cjs|mjs)`
- ファイル相対の構成
  > プロジェクト全体の設定値の上にマージされるので、特定のオーバーライドのために有用な方法です。
  > - `.babelrc`, `.babelrc.(json|js|cjs|mjs)`
  > - `package.json` の `"babel"` キー

## プラグイン

> 🔗 [Plugins・Babel](https://babeljs.io/docs/en/plugins)

**プラグイン**は、コードへの変換を実行する方法を Babel に指示する小さな JavaScript プログラムです。

### プラグインの構成方法

- ```json title="JSON"
  {
    "plugins": [
      "babel-plugin-myPlugin",
      "@babel/plugin-transform-runtime"
    ],
  }
  ```

### プラグイン一覧

> 🔗 [Plugins List・Babel](https://babeljs.io/docs/en/plugins-list)

## プリセット

> 🔗 [Presets・Babel](https://babeljs.io/docs/en/presets)

**プリセット**は、事前に決定されたプラグインのセットです。

### プリセットの構成方法

- ```json title="JSON"
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
      ]
    ]
  }
  ```
- ```bash title="CLI"
  babel --presets @babel/preset-typescript script.ts
  ```
- ```js title="Node API"
  require("@babel/core").transformSync("code", {
    presets: ["@babel/preset-typescript"],
  });
  ```

### プリセット一覧

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) – ターゲットとなる環境で必要な構文変換 (オプションでブラウザポリフィル) を細かく管理することなく、最新の JavaScript を使用できるようにするスマートなプリセットです。
  > ```json title="JSON"
  > {
  >   "presets": [
  >     [
  >       "@babel/preset-env",
  >       {
  >         "targets": {
  >           "edge": "17",
  >           "firefox": "60",
  >           "chrome": "67",
  >           "safari": "11.1"
  >         },
  >         "useBuiltIns": "usage",
  >         "corejs": "3.6.5"
  >       }
  >     ]
  >   ]
  > }
  > ```
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) – React
- [`@babel/prefix-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) – TypeScript
- [`@babel/preset-flow`](https://babeljs.io/docs/en/babel-preset-flow) – Flow
