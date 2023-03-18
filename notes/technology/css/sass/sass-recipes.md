---
slug: /sass-techniques
sidebar_label: レシピ
---

# 【Sass】レシピ

## 命名規則

個人的におすすめの命名規則です：

- ファイル名
  - インデックス: `_index.scss`
  - エントリファイル: `main.scss`
  - 一般ファイル: 例）`_chain-case.scss`
- ディレクトリ名: 例）`chain-case/`
- 変数名: 例) `$lowerCamelCase`
- ミックスイン名: 例) `@mixin chain-case()`

## ドキュメンテーション

### SassDoc

> 🔗 [SassDoc](http://sassdoc.com/)

## ファイル編成

### angular.io の例

> 🔗 [CSS styles in angular.io](https://github.com/angular/angular/tree/master/aio/src/styles)

- `styles/`
  - `0-base/` – アプリケーション全体に影響する一般的なスタイル。
    > `_index.scss`, `_typography-theme.scss`, `_typography.scss`
  - `1-layouts/` – アプリケーションのレイアウトに関連する領域/コンポーネントのスタイル。
  - `2-modules/` – 特殊なコンポーネント（ボタン、コード、ラベルなど）および特定のページ（APIリストページ、「機能」ページなど）のスタイル。
  - `custom-themes/` – アプリケーションで使用可能なさまざまなテーマ（`light`, `dark` など）のエントリポイント
  - `_app-theme.scss` – アプリケーションテーマを作成するための `theme()` ミックスインを定義します。
  - `_constants.scss` – スタイル全体で使用されるいくつかの定数を定義します。
  - `_mixins.scss` – スタイル全体で使用されるSassミックスインを定義します。
  - `_print.scss` – 印刷時に適用されるスタイルが含まれています。
  - `main.scss` – エントリポイントのスタイル。
    > ````scss 
    > // import directories
    > @use './0-base' as base;
    > @use './1-layouts' as layouts;
    > @use './2-modules' as modules;
    >
    > // import print styles
    > @use './print';
    >
    > @use '@angular/material' as mat;
    >
    > // Include the base styles for Angular Material core. We include this here so that you only
    > // have to load a single css file for Angular Material in your app.
    > @include mat.core();
    > ````

## 一般的なグローバル定数

グローバル定数は、`_variables.scss` のような名前のファイルの中ですべて定義し、一元管理すべきです。

- ブレークポイント
- 色

## ミックスイン

### ブレークポイント

title="例：モバイルファーストのメディアクエリ"

```scss
@use "sass:map";

$gridBreakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);

@mixin media-breakpoint-up($breakpoint) {
  @media #{map.get($breakpoints, $breakpoint)} {
    @content;
  }
}
```