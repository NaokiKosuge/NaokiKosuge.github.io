---
sidebar_position: 0
slug: /sass
sidebar_label: 入門
---

# Sass

> [Sass](https://sass-lang.com/) は、世界で最も成熟した、安定した、強力なプロフェッショナルグレードの CSS 拡張言語です。

## 2種類の構文

Sass には2種類の構文があり、それぞれが他方をロードすることができます。一般的には、SCSS 構文を使用します。

- **SCSS 構文** — CSSのスーパーセット。拡張子は `.scss`。
- Sass 構文（インデント構文） — 中括弧やセミコロンの代わりにインデントを使用して記述する。拡張子は `.sass`。

## Sass の実装

Sass は、公式から3種類の実装が提供されています：

- **[Dart Sass](https://sass-lang.com/dart-sass)** — Dart 言語での実装。
- [LibSass](https://sass-lang.com/libsass) — C/C++ 言語での実装。Dart Sass の開発から遅れをとり、非推奨となった。
- [Ruby Sass](https://sass-lang.com/ruby-sass) — Ruby 言語での実装。2019年3月にサポートが終了した。

## インストール

コマンドラインに Sass（Dart Sass） をインストールすると、`sass` 実行可能ファイルを実行して、`.sass` ファイルと `.scss` ファイルを `.css` ファイルにコンパイルできるようになります。

インストールは、ターミナルで以下を実行します：

- npm — `npm i -D sass`
- Mac および Linux（Homebrew） — `brew install sass/sass/sass`
- Windows（Chocolatey） — `choco install sass`

## JavaScript API

npm で Sass をインストールしたら、JavaScript ライブラリとして利用できます。

- `renderSync()` — 同期的にコンパイルを実行する。高速に動作する。

  ```js
  const sass = require('sass');

  const result = sass.renderSync({file: "style.scss"});
  console.log(result.css.toString());
  ```

- `render()` — 非同期的にコンパイルを実行する。

  ```js
  const sass = require('sass');

  sass.render({
    file: "style.scss"
  }, function(err, result) {
    if (err) {
      // ...
    } else {
      console.log(result.css.toString());
    }
  });
  ```

### ビルドシステムとの統合

各種 [Node.js](/notes/nodejs) のビルドシステムにおいて、統合のためのパッケージが利用できます：

- Webpack — [`sass-loader`](https://www.npmjs.com/package/sass-loader)
- Gulp — [`gulp-sass`](https://www.npmjs.com/package/gulp-sass)
- Broccoli — [`broccoli-sass-source-maps`](https://www.npmjs.com/package/broccoli-sass-source-maps)
- Ember — [`ember-cli-sass`](https://www.npmjs.com/package/ember-cli-sass)
- Grunt — [`grunt-sass`](https://www.npmjs.com/package/grunt-sass)