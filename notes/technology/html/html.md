---
sidebar_position: 0
slug: /html
sidebar_label: HTML
---

# HTML

## HTML の仕様について

- HTML Living Standard
  > WHATWG が策定している HTML の規格
- HTML5
  > W3C が策定した HTML の内、メジャーバージョンが「5」のものを指す。特定のマイナーバージョンを指定して呼称する場合は、_HTML 5.1_ というようにスペースを入れる。

:::info 用語の意味

- W3C (World Wide Web Consortium)
  > W3C は、World Wide Webで使用される各種技術の標準化を推進する為に設立された標準化団体、非営利団体です。
- WHATWG (Web Hypertext Application Technology Working Group)
  > WHATWG は、HTML と関連技術の開発をするためのコミュニティです。Apple、Mozilla、Opera、Microsoft といったブラウザーベンダーが参加しています。

:::

## 要素一覧

- _メインルート_
  - [`<html>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/html) — HTML 文書 / ルート要素
- _文書メタデータ_
  - [`<base>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/base) — 文書の基底 URL 要素
  - [`<head>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/head) — 文書メタデータ (ヘッダー) 要素
  - [`<link>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/link) — 外部リソースへのリンク要素
  - [`<meta>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/meta) — 文書レベルメタデータ要素
  - [`<style>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/style) — スタイル情報要素
  - [`<title>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/title) — 文書題名要素
- _区分化ルート_
  - [`<body>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/body) — 文書の本文要素
- _コンテンツ区分_
  - [`<address>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/address) — 連絡先要素
  - [`<article>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/article) — 記事コンテンツ要素
  - [`<aside>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/aside) — 余談要素
  - [`<footer>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/footer) — フッター要素
  - [`<header>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/header) — ヘッダー要素
  - [`<h1>`-`<h6>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Heading_Elements) — HTML の見出し要素
  - [`<main>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/main) — 主要コンテンツ要素
  - [`<nav>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/nav) — ナビゲーションセクション要素
  - [`<section>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/) — 汎用セクション要素
- _テキストコンテンツ_
  - [`<blockquote>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote) — ブロック引用要素
  - [`<dd>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dd) — 詳細説明要素
  - [`<div>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/div) — コンテンツ区分要素
  - [`<dl>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dl) — 説明リスト要素
  - [`<dt>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dt) — 説明用語要素
  - [`<figcaption>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/figcaption) — 図キャプション要素
  - [`<figure>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/figure) — キャプションが付けられる図要素
  - [`<hr>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/hr) — 主題区切り (水平線) 要素
  - [`<li>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/li) — リストの項目要素
  - [`<ol>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ol) — 順序付きリスト要素
  - [`<p>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/p) — 段落要素
  - [`<pre>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/pre) — 整形済みテキスト要素
  - [`<ul>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul) — 順序なしリスト要素
- _インライン文字列意味付け_
  - [`<a>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a) — アンカー要素
  - [`<abbr>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/abbr) — 略語要素
  - [`<b>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/b) — 注目付け要素
  - [`<bdi>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/bdi) — 書字方向分離要素
  - [`<bdo>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/bdo) — 双方向文字列上書き要素
  - [`<br>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/br) — 改行要素
  - [`<cite>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/cite) — 引用元要素
  - [`<code>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/code) — 行内コード要素
  - [`<data>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/data) — データ付加要素
  - [`<dfn>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dfn) — 定義要素
  - [`<em>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/em) — 強調要素
  - [`<i>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/i) — 興味深いテキスト要素
  - [`<kbd>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/kbd) — キーボード入力要素
  - [`<mark>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/mark) — 文字列マーク要素
  - [`<q>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/q) — 行内引用要素
  - [`<rp>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/rp) — ルビのフォールバック用括弧要素
  - [`<rt>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/rt) — ルビ文字列要素
  - [`<ruby>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ruby) — ルビ要素
  - [`<s>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/s) — テキスト取り消し要素
  - [`<samp>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/samp) — サンプル出力要素
  - [`<small>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/small) — 附随コメント要素
  - [`<span>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/span) — 記述コンテンツ区分要素
  - [`<strong>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/strong) — 強い重要性要素
  - [`<sub>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/sub) — 下付き文字要素
  - [`<sup>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/sup) — 上付き文字要素
  - [`<time>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/time) — 時間要素
  - [`<u>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/u) — 非言語的注釈 (下線) 要素
  - [`<var>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/var) — 変数要素
  - [`<wbr>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/wbr) — 改行可能位置改行要素
- _画像とマルチメディア_
  - [`<area>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/area) — イメージマップ内領域要素
  - [`<audio>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/audio) — 埋め込み音声要素
  - [`<img>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img) — 画像埋め込み要素
  - [`<map>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/map) — イメージマップ要素
  - [`<track>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/track) — 埋め込みテキストトラック要素
  - [`<video>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/video) — 動画埋め込み要素
- _埋め込みコンテンツ_
  - [`<embed>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/embed) — 埋め込み外部コンテンツ要素
  - [`<iframe>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/iframe) — インラインフレーム要素
  - [`<object>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/object) — 外部オブジェクト要素
  - [`<param>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/param) — オブジェクト引数要素
  - [`<picture>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/picture) — 画像要素
  - [`<portal>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/portal) — ポータル要素
  - [`<source>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/source) — メディアまたは画像のソース要素
- _SVG と MathML_
  - [`<svg>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/svg) — SVG 要素
  - [`<math>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/math) — MathML 要素
- _スクリプティング_
  - [`<canvas>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/canvas) — グラフィックキャンバス要素
  - [`<noscript>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/noscript) — スクリプト代替要素
  - [`<script>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/script) — スクリプト要素
- _編集範囲の指定_
  - [`<del>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/del) — 削除済み文字列要素
  - [`<ins>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ins) — 追加文字列要素
- _テーブル_
  - [`<caption>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/caption) — 表キャプション要素
  - [`<col>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/col) — 表内列要素
  - [`<colgroup>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/colgroup) — 表内列グループ要素
  - [`<table>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/table) — 表要素
  - [`<tbody>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tbody) — 表本体要素
  - [`<td>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/td) — 表データセル要素
  - [`<tfoot>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tfoot) — 表フッター要素
  - [`<th>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/th) — 表内列見出し要素
  - [`<thead>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/thead) — 表ヘッダー要素
  - [`<tr>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tr) — 表内行要素
- _フォーム_
  - [`<button>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button) — ボタン要素
  - [`<datalist>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/datalist) — データリスト要素
  - [`<fieldset>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/fieldset) — フィールドセット要素
  - [`<form>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/form) — フォーム要素
  - [`<input>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input) — 入力欄 (フォーム入力) 要素
  - [`<label>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/label) — ラベル要素
  - [`<legend>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/legend) — フィールドセットキャプション要素
  - [`<meter>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/meter) — HTML メーター要素
  - [`<optgroup>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/optgroup) — HTML 選択肢グループ要素
  - [`<option>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/option) — HTML 選択肢要素
  - [`<output>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/output) — 出力要素
  - [`<progress>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/progress) — 進捗表示要素
  - [`<select>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/select) — HTML 選択要素
  - [`<textarea>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/textarea) — テキストエリア要素
- _インタラクティブ要素_
  - [`<details>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/details) — 詳細折りたたみ要素
  - [`<dialog>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog) — ダイアログ要素
  - [`<summary>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/summary) — 概要明示要素
- _ウェブコンポーネント_
  - [`<slot>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/slot) — コンポーネントプレースホルダー要素
  - [`<template>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/template) — コンテンツテンプレート要素


## コンテンツカテゴリー

> すべての HTML 要素は1つ以上の [コンテンツカテゴリー](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories) に属していて、カテゴリーごとに共通した特徴を持つ要素を分類しています。どのカテゴリーにも属さない要素も存在します。

<figure class="inline-flex">

![](../../../static/img/notes/html.Content_categories_venn.png)

</figure>

- メタデータコンテンツ
- フローコンテンツ
- 区分コンテンツ
- 見出しコンテンツ
- 記述コンテンツ
- 埋め込みコンテンツ
- 対話型コンテンツ
- 知覚可能コンテンツ
- フォーム関連コンテンツ

## HTML5 文書構造

```html
<!DOCTYPE html>
<html lang="ja">
  <head><!-- HEAD --></head>
  <body><!-- BODY --></body>
</html>
```

### コンテンツの構造化

- **ヘッダー**: `<header>`。
- **ナビゲーションバー**: `<nav>`。
- **メインコンテンンツ**: `<main>`。`<article`、`<section>`、`<div>` 要素で表されるさまざまなコンテンツサブセクションを含みます。
- **サイドバー**: `<aside>`; `<main>` の中に置かれることがよくあります。
- **フッター**: `<footer>`

```html title="例：よくみられるブログの HTML コンテンツ構造"
<body>
  <header>
    <nav><!-- グローバルナビゲーション --></nav>
  </header>
  <main>
    <aside><nav><!-- サイドバーナビゲーション --></nav></aside>
    <article>
      <h1><!-- メインコンテンツタイトル --></h1>
      <!--
      記事コンテンツ
      -->
    </article>
  </main>
  <footer><!-- フッターコンテンツ --></footer>
</body>
```

## `<html>` 要素の属性

- `lang` — ページ言語。`ja` や `en-US` など。
- `class` — クラス
- `id` — ID
- `prefix` — `og: https://ogp.me/ns#`

## `<head>` 要素に入るもの

### ページタイトル

```html
<head>
  <title>ページタイトル</title>
</head>
```

### メタ情報

#### HTML 文書の文字コード

```html
<head>
  <meta charset="utf-8">
</head>
```

#### 基底 URL

```html
<head>
  <base href="https://www.example.com/">
</head>
```

#### ページの説明

```html
<head>
  <meta name="description" content="ここ２ページの説明文を入れます。この内容は、Google に代表される検索エンジンの検索結果に表示される可能性があります。">
</head>
```

#### OGP (Open Graph Protocol)

SNS などでシェアされた際のビューを調整します。

```html
<head>
  <meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.png">
  <meta property="og:description" content="The Mozilla Developer Network (MDN) provides
  information about Open Web technologies including HTML, CSS, and APIs for both Web sites
  and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
  <meta property="og:title" content="Mozilla Developer Network">
  <meta name="twitter:title" content="Mozilla Developer Network">
</head>
```

### ファビコン

```html
<head>
  <!-- third-generation iPad with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.mozilla.org/static/img/favicon144.png">
  <!-- iPhone with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.mozilla.org/static/img/favicon114.png">
  <!-- first- and second-generation iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.mozilla.org/static/img/favicon72.png">
  <!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
  <link rel="apple-touch-icon-precomposed" href="https://developer.mozilla.org/static/img/favicon57.png">
  <!-- basic favicon -->
  <link rel="shortcut icon" href="https://developer.mozilla.org/static/img/favicon32.png">
</head>
```

### CSS（ファイル）

```html
<head>
  <link rel="stylesheet" href="my-css-file.css">
</head>
```

### CSS（ハードコード）

```html
<head>
  <style>
    * {
      box-sizing: border-box;
    }
  </style>
</head>
```

### JavaScript（ファイル／ハードコード）

```html
<head>
  <script src="my-js-file.js"></script>
</head>
```

:::note NOTE

JavaScript の関連付け（ファイルリンクまたはハードコード）は `<script>` 要素で指定します。これは、`<head>` 要素だけでなく `<body>` 要素にも配置することができます。

:::

### 構造化データ

> [構造化データ](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data?hl=ja) とは、ページに関する情報を提供し、そのコンテンツ（たとえば、レシピページの場合は材料、加熱時間と加熱温度、カロリーなど）を分類するために標準化されたデータ形式です。

```html
<head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "Party Coffee Cake",
      "author": {
        "@type": "Person",
        "name": "Mary Stone"
      },
      "datePublished": "2018-03-10",
      "description": "This coffee cake is awesome and perfect for parties.",
      "prepTime": "PT20M"
    }
    </script>
</head>
```

## ハイパーリンク

ハイパーリンクは、`<a>` 要素で囲むことで作成し、`href` 属性でターゲットを指定します。

### `href` 属性で指定できるもの

- 絶対 URL（例：`href="http://www.example.com/projects/"`）
- 相対 URL（例：`href="pdfs/project-brief.pdf"`）
- ドキュメントフラグメント（例：`href="#top"`）
- メールリンク（例：`herf="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email"`）

### ハイパーリンクに関する補足的な情報

`title` 属性を追加することで補足情報を示すことがでいます。この値は、マウスホバーの際にツールチップとして表示されます。

### ダウンロードへのリンクは `download` を指定する

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
   download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

この場合、ダウンロードリンクは `https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US` であり、それはブラウザーで開くのではなく、デフォルトで `firefox-latest-64bit-installer.exe` というファイル名で保存される、ことを意味します。

### メールリンク

```html title="例：メールリンク"
お問い合わせは
<a href="mailto:user@example.com?cc=nobody@mozilla.org&subject=質問">
  こちら
</a>
```

- `mailto:` — メールアプリで開くことを示す
- _`user@example.com`_ — 宛先メールアドレス
- _クエリ_
  - `subject` — 件名
  - `cc` — CC
  - `bcc` — BCC

## HTML バリデーションツール

W3C は、[Markup Validation Service](https://validator.w3.org/) という、オンラインバリデーターツールを公開しています。