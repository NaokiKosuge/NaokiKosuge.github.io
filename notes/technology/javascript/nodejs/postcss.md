---
slug: /postcss
sidebar_label: PostCSS
---

# PostCSS

<figure class="inline-flex">

![](../../../../static/img/notes/postcss.logo-horizontal.svg)

</figure>

> [PostCSS](https://postcss.org/) は、JavaScript で CSS を変換するためのツールです。

## セットアップ手順

1. 必要パッケージのインストール
   - PostCSS コアとプラグイン
     > ```bash
     > npm i -D postcss autoprefixer
     > ```
   - ビルドツールのパッケージ
     - Webpack
       > ```bash
       > npm i -D postcss-loader
       > ```
     - Parcel
       > 組み込まれているのでインストールは必要ありません。
     - Gulp
       > ```bash
       > npm i -D gulp-postcss
       > ```
     - Deno
       > ```ts
       > import postcss from 'https://deno.land/x/postcss/mod.js';
       > import autoprefixer from 'https://jspm.dev/autoprefixer';
       > 
       > const result = await postcss([autoprefixer]).process(css);
       > ```
2. PostCSS 構成ファイルの作成
   > ```js title="【例】postcss.config.js"
   > module.exports = {
   >   plugins: [
   >     require('autoprefixer'),
   >   ]
   > }
   > ```
3. ビルドツールの構成ファイルの修正

## プラグイン

- グローバルCSS問題を解決する
  - [`postcss-use`](https://github.com/postcss/postcss-use) – CSS 内で PostCSS プラグインを明示的に設定し、現在のファイルに対してのみそれらを実行できます。
  - [`postcss-modules`](https://github.com/outpunk/postcss-modules), [`react-css-modules`](https://github.com/gajus/react-css-modules) – コンポーネント内のセレクターを自動的に分離します。
  - [`postcss-autoreset`](https://github.com/maximkoretskiy/postcss-autoreset) – 分離可能なコンポーネントに適したグローバルリセットを使用する代わりの方法です。
  - [`postcss-initial`](https://github.com/maximkoretskiy/postcss-initial) `all: initial` サポートを追加します。これにより、継承されたすべてのスタイルがリセットされます。
  - [`cq-prolyfill`](https://github.com/ausi/cq-prolyfill) – コンテナクエリのサポートを追加し、親の幅に対応するスタイルを可能にします。
  - [`postcss-normalize`](https://www.npmjs.com/package/postcss-normalize) – ブラウザリストから必要な `normalize.css` または `sanitize.css` の部分を使用できます。
- 将来の CSS を使用する
  - [`autoprefixer`](https://github.com/postcss/autoprefixer) – [Can I Use](https://caniuse.com/) のデータを使用して、ベンダープレフィックスを追加します。
  - [`postcss-preset-env`](https://github.com/jonathantneal/postcss-preset-env) – 将来の CSS 機能を今日使用できます。
- CSSの読みやすさの向上
  - [`postcss-nested`](https://github.com/postcss/postcss-nested) – Sass と同じようにネストされたルールをアンラップします。
  - [`postcss-sorting`](https://github.com/hudochenkov/postcss-sorting) – ルールと at-rules のコンテンツを並べ替えます。
  - [`postcss-utilities`](https://github.com/ismamz/postcss-utilities) – 最も一般的に使用されるショートカットとヘルパーが含まれています。
  - [`short`](https://github.com/jonathantneal/postcss-short) – 多数の短縮プロパティを追加および拡張します。
- 画像とフォント
  - [`postcss-assets`](https://github.com/assetsjs/postcss-assets) – 画像のサイズとインラインファイルを挿入します。
  - [`postcss-sprites`](https://github.com/2createStudio/postcss-sprites) – 画像スプライトを生成します。
  - [`font-magician`](https://github.com/jonathantneal/postcss-font-magician) – CSS で必要なすべての `@font-face` ルールを生成します。
  - [`postcss-inline-svg`](https://github.com/TrySound/postcss-inline-svg) – SVG をインライン化し、そのスタイルをカスタマイズできます。
  - [`postcss-write-svg`](https://github.com/jonathantneal/postcss-write-svg) CSS に直接単純な SVG を書くことができます。
  - [`webp-in-css`](https://github.com/ai/webp-in-css) – CSS バックグラウンドで WebP 画像形式を使用します。
  - [`avif-in-css`](https://github.com/nucliweb/avif-in-css) – CSS バックグラウンドで AVIF 画像形式を使用します。
- リンター
  - [`stylelint`](https://github.com/stylelint/stylelint) – モジュラースタイルシートリンターです。
  - [`stylefmt`](https://github.com/morishitter/stylefmt) – stylelint ルールに従って CSS を自動的にフォーマットするツールです。
  - [`doiuse`](https://github.com/anandthakker/doiuse) – [Can I Use](https://caniuse.com/) のデータを使用して、ブラウザサポート用のCSSをリントします。
  - [`colorguard`](https://github.com/SlexAxton/css-colorguard) – 一貫したカラーパレットを維持するのに役立ちます。
- その他
  - [`postcss-rtl`](https://github.com/vkalinichev/postcss-rtl) – 双方向（左から右および右から左）のスタイルを1つの CSS ファイルに結合します。
  - [`cssnano`](https://cssnano.co/) – モジュラー CSS ミニファイアです。
  - [`lost`](https://github.com/peterramsing/lost) – 機能豊富な `calc()` グリッドシステムです。
  - [`rtlcss`](https://github.com/MohammadYounes/rtlcss) – 右から左へのロケールのスタイルをミラーリングします。

## CLI

ビルドツールを使わず直接 PostCSS を実行する場合、追加で [`postcss-cli`](https://github.com/postcss/postcss-cli) が必要になります。

```bash
npm i -D postcss postcss-cli
```

### help

<details>
<summary><code>postcss --help</code></summary>

```
Usage:
  postcss [input.css] [OPTIONS] [-o|--output output.css] [--watch|-w]
  p
ostcss <input.css>... [OPTIONS] --dir <output-directory> [--watch|-w]
  postcss
<input-directory> [OPTIONS] --dir <output-directory> [--watch|-w]
  postcss <inp
ut-glob-pattern> [OPTIONS] --dir <output-directory> [--watch|-w]
  postcss <inpu
t.css>... [OPTIONS] --replace

Basic options:
  -o, --output   Output file                                               [文字列]
  -d, --dir      Output directory                                          [文字列]
  -r, --replace  Replace (overwrite) the input file                         [真偽]
  -m, --map      Create an external sourcemap
      --no-map   Disable the default inline sourcemaps
  -w, --watch    Watch files for changes and recompile as needed            [真偽]
      --verbose  Be verbose                                                 [真偽]
      --env      A shortcut for setting NODE_ENV                           [文字列]

Options for use without a config file:
  -u, --use          List of postcss plugins to use                         [配列]
      --parser       Custom postcss parser                                 [文字列]
      --stringifier  Custom postcss stringifier                            [文字列]
      --syntax       Custom postcss syntax                                 [文字列]

Options for use with --dir:
      --ext   Override the output file extension; for use with --dir       [文字列]
      --base  Mirror the directory structure relative to this path in the output
               directory, for use with --dir                               [文字列]

Advanced options:
      --include-dotfiles  Enable glob to match files/dirs that begin with "."
                                                                            [真偽]
      --poll              Use polling for file watching. Can optionally pass pol
                          ling interval; default 100 ms
      --config            Set a custom directory to look for a config file [文字列]

オプション:
      --version  バージョンを表示                                                   [真偽]
  -h, --help     ヘルプを表示                                                     [真偽]

例:
  postcss input.css -o output.css           Basic usage
  postcss src/**/*.css --base src --dir bu  Glob Pattern & output
  ild
  cat input.css | postcss -u autoprefixer   Piping input & output
  > output.css

If no input files are passed, it reads from stdin. If neither -o, --dir, or --re
place is passed, it writes to stdout.

If there are multiple input files, the --dir or --replace option must be passed.

Input files may contain globs (e.g. src/**/*.css). If you pass an input director
y, it will process all files in the directory and any subdirectories, respecting
 the glob pattern.

For more details, please see https://github.com/postcss/postcss-cli
```

</details>