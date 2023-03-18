---
slug: /javascript
sidebar_label: JavaScript
---

# JavaScript

## ECMAScript

- ES5
- ES2015
- ES2016
- ES2017
- ES2018
- ES2019
- ES2020
- ES2021

## モジュールシステム

- ESModule
  > `import` キーワードと `export` キーワードを使用する、標準化された方式です。
- [CommonJS](http://commonjs.org)
  > Node.js で採用されたモジュールシステムで、`require` 関数を使用します。
- AMD (Asynchronous Module Definition)
  > モジュールを非同期でロードする仕組みです。[RequireJS](https://requirejs.org/) は、ブラウザ内での使用に最適化された AMD 実装です。

:::info ユニバーサルモジュール定義（UMD: universal module definition）

UMD パターンは、もっともよく使われているモジュールシステムと互換性のあるモジュールを作成
するのに使われる、効果的で単純な技法です。ただし、webpack などのモジュールバンドラーを使えば、自前でこのようなコードを書く必要はないため、現実的な方法とは言えません。

<details>
<summary>例：UMD パターン</summary>

```js
(function(root, factory) {
  if(typeof define === 'function' && define.amd) {
    define(['mustache'], factory);
  } else if(typeof module === 'object' &&
      typeof module.exports === 'object') {
    var mustache = require('mustache');
    module.exports = factory(mustache);
  } else {
    root.UmdModule = factory(root.Mustache);
  }
}(this, function(mustache) {
  var template = '<h1>Hello <i>{{name}}</i></h1>';
  mustache.parse(template);
  return {
    sayHello:function(toWhom) {
      return mustache.render(template, {name: toWhom});
    }
  };
}));
```

</details>

:::

## スタイルガイド

- 🥇 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- 🥈 [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- 🥉 [JavaScript Standard Style](https://standardjs.com/)

## JavaScript 開発における基盤ツール

| 用途            | ツール                                                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| 静的解析ツール       | [ESLint](/notes/eslint)                                                                                                       |
| フォーマッター       | [Prettier](/notes/prettier)                                                                                                   |
| テスティングフレームワーク | [Jest](/notes/jest), [Cypress](https://www.cypress.io/), [Vitest](https://vitest.dev/)                                        |
| パッケージマネージャー   | [npm](/notes/npmjs), [Yarn](/notes/yarnpkg), pnpm, [Volta](https://docs.volta.sh/), [NVM](https://github.com/nvm-sh/nvm)      |
| モジュールバンドラー    | [webpack](/notes/webpack), Rollup, Parcel, esbuild                                                                            |
| ビルドシステム       | [Lerna](https://lerna.js.org/), [Nx](https://nx.dev/), [Storybook](https://storybook.js.org/), [Vite](https://ja.vitejs.dev/) |
| コンパイラ         | [Babel](/notes/babeljs), JSX, [TypeScript](/notes/typescript), Flow                                                           |
| ランタイム         | [Node.js](/notes/nodejs), [Deno](/notes/deno)                                                                                 |
| スタイル          | [PostCSS](/notes/postcss)                                                                                                     |

## `jsconfig.json`

> 🔗 [jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig)

`jsconfig.json` ファイルは、プロジェクトが（TypeScript ではなく）JavaScript プロジェクトであることを明示し、構成を示すことができます。

## 便利なウェブツール

- [Create App](https://createapp.dev/) – フロントエンドビルド構成ジェネレーター (🆓ウェブアプリケーション)
