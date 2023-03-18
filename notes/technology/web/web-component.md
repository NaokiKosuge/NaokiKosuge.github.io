---
slug: /web-component
sidebar_label: ウェブコンポーネント
---

# ウェブコンポーネント

## 概要

### 主要な技術構成

- カスタム要素
- シャドウ DOM
- HTML テンプレート

### 実装の流れ

1. クラスまたは関数を作成
2. 要素を登録 → `CustomElementRegistry.define()`
3. 【オプション】シャドウ DOMの紐付け → `Element.attachShadow()`
4. 【オプション】HTML テンプレートの定義 → `<template>`, `<slot>`
5. 通常のHTMLと同じように使用可能

## 詳細

### カスタム要素の作成

カスタム要素には3つの種類があります：

- **自律型カスタム要素** – 標準の HTML 要素を継承せず、要素に `-` を含んだ名前を付けます。`<popup-info>` あるいは `document.createElement("popup-info")` のように利用されます。
  ```ts title="【例】自律型カスタム要素の作成"
  class PopUpInfo extends HTMLElement {
    constructor() {
      super();
  
      // ここに要素の機能を記述します。
    }

    // 「ライフサイクルコールバック」
    // または 独自フィールド/メソッド
    // を記述できます。
  }
  ```
- **カスタム組み込み要素** – 名前に `-` を含まない組み込み要素を拡張します。`<p is="word-count">` や `document.createElement("p", { is: "word-count" })` のように利用されます。
  ```ts title="【例】カスタム組み込み要素の作成"
  class WordCount extends HTMLParagraphElement {
    constructor() {
      super();
  
      // ここに要素の機能を記述します。
    }
  
    // 「ライフサイクルコールバック」
    // または 独自フィールド/メソッド
    // を記述できます。
  }
  ```
- **フォームに関連付けられたカスタム要素** – カプセル化されたカスタム要素が所属するフォームと通信できるようにします。
  ```ts title="【例】フォームに関連付けられたカスタム要素の作"
  export class TextInputComponent extends HTMLElement {
    static formAssociated = true;
    private internals: ElementInternals;
    constructor() {
      super();
      attachShadow(this);
      this.internals = this.attachInternals();
    }
  }
  ```

#### ライフサイクルコールバック

- `connectedCallback()` – 文書の DOM から切断されるたびに呼び出されます。
  ```ts title="【例】connectedCallback"

  ```
- `adoptedCallback()` – 新しい文書に移動するたびに呼び出されます。
  ```ts title="【例】adoptedCallback"

  ```
- `attributeChangedCallback(name, oldValue, newValue)` – カスタム属性の1つが追加/削除/変更されるたびに呼び出されます。
  ```ts title="【例】attributeChangedCallback"

  ```
  > どの属性の変更が通知されたかは、`static get observedAttributes()` メソッドで指定されます。

### カスタム要素の登録

ウェブ文書上でカスタム要素を制御するのは `CustomElementRegistry` オブジェクトです。

```ts title="【例】カスタム要素の登録"
customElements.define('popup-info', PopUpInfo);
```

### シャドウ DOM

任意の要素にシャドウルートを取り付けるには `Element.attachShadow()` を利用します。

```ts title="【例】シャドウルートの取り付け"
// メインページからアクセス可能なシャドウルート
const openShadow = elementRef.attachShadow({ mode: 'opne' });

// メインページからアクセス出来ないシャドウルート
const closedShadow = elementRef.attachShadow({ mode: 'closed' });
```

#### シャドウ DOM 境界

グローバルスタイル宣言は、**CSS 変数宣言を除いて**自律型カスタム要素シャドウ DOM ツリーにある要素には適用出来ませんが、

#### 内部スタイルと外部スタイル

- **内部スタイル** – シャドウ DOM 内で `<style>` 要素を用いてスタイリング
- **外部スタイル** – シャドウ DOM 内から `<link>` 要素経由で外部のスタイルシートを参照

### テンプレートとスロット

#### `<template>` 要素の活用

`<template>` 要素に囲まれた要素は、DOM 上に存在しつつも描画されません。そのため、名前の通り HTML のテンプレートを作成するために使われる要素です。

この性質はウェブコンポーネントと相性が良いです。JavaScriptで要素を命令的に生成するよりも、テンプレートを利用した方が、宣言的で簡単だからです。

```html title="【例】テンプレートの定義"
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

```ts title="【例】カスタム要素からのテンプレートの利用"
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      // 1. テンプレートを取得します。
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      // 2. テンプレートを元にコンテンツを作成し追加します。
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);
```

#### `<slot>` 要素の活用

ウェブコンポーネントにおいて `<slot>` 要素は、シャドウ DOM の外部から要素を動的に追加するためのプレースホルダーとして利用されます。

- スロットの定義側
  ```html
  <template id="my-paragraph"
    <p><slot name="my-text">既定のテキスト</slot></p>
  </template>
  ```
- スロットの利用側
  ```html
  <!-- slot 属性でスロットを指定します。 -->
  <my-paragraph>
    <span slot="my-text">別なテキストを入れましょう。</span>
  </my-paragraph>
  ```

### カスタム要素の利用

## ライブラリー

ウェブコンポーネントに関連したライブラリー：

- 基本ライブラリー
  - [Open Web Components](https://open-wc.org/) – Web コンポーネントを開発するためのガイド、ツール、およびライブラリ。
  - [Lit](https://lit.dev/) – Google の Web コンポーネント ライブラリ。そのコアは、リアクティブ状態、スコープ スタイル、および宣言型テンプレート システムを提供しながらボイラープレートを削減するように設計されたコンポーネント基本クラスです。
  - [Stencil](https://stenciljs.jp/) – Web コンポーネントで再利用可能でスケーラブルなデザイン システムを構築するためのツールチェーン。
  - [Slim.js](https://slimjs.com/) – コンポーネントを迅速かつ簡単にオーサリングするための高性能ライブラリ。拡張可能でプラグ可能で、フレームワーク間の互換性があります。
- コンポーネントライブラリー
  - [FAST](https://fast.design/) – FAST はマイクロソフトが開発した Web コンポーネント・ライブラリで、プロジェクトのニーズに応じて活用できるよう、いくつかのパッケージが提供されています。Fast Element は、パフォーマンスとメモリ効率に優れ、標準に準拠した Web コンポーネントを簡単に構築するための軽量な手段です。Fast Foundation は、登録された Web コンポーネントに組み込むことを目的とした、fast-element 上に構築された Web コンポーネントクラス、テンプレート、およびその他のユーティリティのライブラリです。
  - [Spectrum](https://opensource.adobe.com/spectrum-web-components/)
- [FASTElement](https://www.fast.design/)
- [Snuggsi](https://github.com/devpunks/snuggsi) – ポリフィルを含む ~1kB の簡単な Web コンポーネント
- [X-Tag](https://x-tag.github.io/)
- [Smart](https://www.htmlelements.com/)
- [hyperHTML-Element](https://viperhtml.js.org/hyper.html)
- [Hybrids](https://hybrids.js.org/) – オープンソースのウェブ コンポーネント ライブラリ。`class` と `this` 構文よりもプレーンなオブジェクトと純粋な関数を優先します。カスタム要素を作成するためのシンプルで機能的な API を提供します。
- [DataFormsJS](https://www.dataformsjs.com/ja/) – オープンソースの Web コンポーネントライブラリ - シングルページアプリケーション（SPA）の構築、API や Web サービスからの JSON データの表示、画面上の異なる要素へのデータバインディングに使用できるWebコンポーネントのセットです。すべての Web コンポーネントは、プレーンなJavaScriptで、ビルドプロセスを必要としません。

- [Custom-Element-Builder](https://tmorin.github.io/ceb/)
