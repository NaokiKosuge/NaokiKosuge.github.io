<!-- TOC -->
* [@NaokiKosuge のパーソナルサイト](#naokikosuge-のパーソナルサイト)
  * [全般](#全般)
    * [ブランチ戦略](#ブランチ戦略)
    * [オペレーション](#オペレーション)
      * [リアルタイムプレビュー](#リアルタイムプレビュー)
      * [ビルドプレビュー](#ビルドプレビュー)
      * [デプロイ](#デプロイ)
    * [Tailwind CSS](#tailwind-css)
  * [開発](#開発)
    * [Docusaurus のアップデート](#docusaurus-のアップデート)
    * [サイドバーの作成方法](#サイドバーの作成方法)
  * [コンテンツ](#コンテンツ)
    * [ノートの書き方](#ノートの書き方)
      * [ノートファイルの作成](#ノートファイルの作成)
      * [ノートのメタデータ](#ノートのメタデータ)
      * [コードブロック](#コードブロック)
        * [コードタイトル](#コードタイトル)
        * [行ハイライト](#行ハイライト)
      * [アラートブロック](#アラートブロック)
    * [ブログの書き方](#ブログの書き方)
      * [ブログ記事ファイルの作成](#ブログ記事ファイルの作成)
      * [ブログ記事のメタデータ](#ブログ記事のメタデータ)
      * [要約の切り捨て](#要約の切り捨て)
<!-- TOC -->

# @NaokiKosuge のパーソナルサイト

このプロジェクトは [@NaokiKosuge](https://github.com/NaokiKosuge) のパーソナルサイトです。[Docusaurus 2](https://docusaurus.io/)
を使用して作成されています。サイトは、[NaokiKosuge.github.io](https://NaokiKosuge.github.io) に公開しています。

---

## 全般

### ブランチ戦略

| ブランチ           | 説明                                                                                  | 変更       |
|----------------|-------------------------------------------------------------------------------------|----------|
| `main` (デフォルト) | デプロイコードのソース                                                                         | 自動       |
| `gh-pages`     | GitHub Pages への公開のためのブランチ（パブリッシングソース）                                               | 自動       |
| `deploy`       | デプロイを試みるブランチ。このブランチにソースコードをプッシュすると、CI/CDツールが起動し、自動でビルド及びテストが行われ、パスした場合にのみデプロイが行われる。 | プッシュのみ手動 |
| `edit`         | 開発側またはコンテンツ側 (`notes/`または`blog/`ディレクトリ以下) に対する変更。                                   | 手動       |

---

### オペレーション

#### リアルタイムプレビュー

```console
npm run start
```

このコマンドはローカル開発サーバーを起動し、ブラウザーウィンドウを開きます。 ほとんどの変更は、サーバーを再起動しなくてもライブで反映されます。

#### ビルドプレビュー

```console
npm run serve
```

このコマンドはローカルサーバーを起動し、ビルドしたファイルをブラウザで試すことができます。デプロイ前のチェックに便利です。

#### デプロイ

GitHub Pages でサイトを公開しています。リポジトリの `deploy` ブランチにプッシュすると、GitHub Actions が走り、テストにパスすれば公開されます。

```console
git pull
git switch deploy
git merge edit
git push origin HEAD
git switch edit
```

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/docs) を導入しています。開発側（CSSやTS）とコンテンツ側（ノートやブログ）の両方で使うことができます。

## 開発

### Docusaurus のアップデート

Docusaurus のバージョンを更新するには、`package.json` の `@docusaurus/<package>` のバージョンを変更し、`npm i` コマンドを実行します。この際、これらすべてのバージョンを同じにする必要があります。

### サイドバーの作成方法

サイドバーの設定は[`sidebar.js`](sidebars.js) に記述します（`docusaurus.config.js`で指定しているため）。

```js title="sidebar.js"
module.exports = {
  mySidebar1: [
    /* サイドバーアイテム */
  ],
  mySidebar2: [
    /* サイドバーアイテム */
  ],
  // ...
};
```

## コンテンツ

コンテンツは「ノート」と「ブログ」の2種類があります。

### ノートの書き方

> このサイトでは Docusaurus の「ドキュメント」を「ノート」という特有の名称で呼びます。

#### ノートファイルの作成

ノートは[`notes/`](notes/) ディレクトリ内に任意のディレクトリ階層の後、`[name].mdx`を作成します。

#### ノートのメタデータ

ノートごとに次のメタデータフィールドを使用できます。

- `id`: 一意のノートID

  このフィールドが存在しない場合、ノートの`id`はデフォルトでファイル名（拡張子なし）になります。

- `title`: ノートのタイトル

  このフィールドが存在しない場合、ノートの`title`はデフォルトでその`id`になります。

- `hide_title`: ノートの上部にあるタイトルを非表示にするかどうか

  デフォルトは`false`です。

- `hide_table_of_contents`: 右側の目次を非表示にするかどうか

  デフォルトでは`false`です。

- `sidebar_label`: ノートのサイドバーと、このノートの[次へ/前へ]ボタンに表示されるテキスト

  このフィールドが存在しない場合、ノートの`sidebar_label`はデフォルトでその`title`になります。

- `sidebar_position`

  自動生成されたサイドバーアイテムを使用するときに、生成されたサイドバースライス内のノートの位置を制御することを許可します。 IntまたはFloatにすることができます。

- `parse_number_prefixes`

  ノートに番号プレフィックス（`001-My Doc.md`、`2. MyDoc.md`...）がある場合、プラグイン`numberPrefixParser`によって自動的に解析および抽出され、番号プレフィックスが`sidebar_position`として使用されます。このノートで番号プレフィックスの解析を無効にするには、`parse_number_prefixes: false`を使用します。

- `custom_edit_url`: このノートを編集するためのURL

  このフィールドが存在しない場合、ノートの編集URLは、`docusaurus-plugin-content-docs`に渡されたオプションフィールドから`editUrl`にフォールバックします。

- `keywords`: 検索エンジン用のノートページのキーワードメタタグ


- `description`: ノートの説明

  `<head>`の`<meta name="description" content="..." />`および`<meta property="og:description" content="..." />`になります。検索エンジンで使用されます。このフィールドが存在しない場合、デフォルトでコンテンツの最初の行になります。

- `image`: 投稿へのリンクを表示するときに使用されるカバーまたはサムネイル画像


- `slug`: スラッグ

  ノートのURL（`/<routeBasePath>/<slug>`）をカスタマイズできます。

例:

```markdown
---
id: doc-markdown
title: Markdown Features
hide_title: false hide_table_of_contents: false sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem 
keywords:

- docs
- docusaurus image: https://i.imgur.com/mErPwqL.png
  slug: /myDoc

---
My Document Markdown content
```

#### コードブロック

##### コードタイトル

````markdown
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
````

Docusaurus がコードハイライトに [`prism-react-renderer`](https://github.com/FormidableLabs/prism-react-renderer) を使用しているため、以下の言語指定が可能です:

- `markup`
- `bash`
- `clike`
- `c`
- `cpp`
- `css`
- `css-extras`
- `javascript`
- `jsx`
- `js-extras`
- `coffeescript`
- `diff`
- `git`
- `go`
- `graphql`
- `handlebars`
- `json`
- `less`
- `makefile`
- `markdown`
- `objectivec`
- `ocaml`
- `python`
- `reason`
- `sass`
- `scss`
- `sql`
- `stylus`
- `tsx`
- `typescript`
- `wasm`
- `yaml`

上記に加えて、`docusaurus.config.js` の `themeConfig.prism.additionalLanguages` プロパティで以下の言語してもサポートするようにカスタマイズしています。

- `dart`
- `java`
- `kotlin`
- `php`
- `rust`
- `swift`
- `typescript`
- `toml`

> 更に言語を追加したい場合は、 https://prismjs.com/#supported-languages から選択して下さい。
>
>（根拠: https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages）

##### 行ハイライト

````markdown
```jsx {3}
function HighlightSomeText(highlight) {
  if (highlight) {
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```
````

#### アラートブロック

記述形式:

```
:::[種類] [タイトル]

本文

:::
```

種類:

- `note`: ℹ️NOTE
- `tip`: 💡TIP
- `info`: ℹINFO
- `caution`: ⚠️CAUTION
- `danger`: 🔥DANGER

### ブログの書き方

#### ブログ記事ファイルの作成

ブログ記事は[`blog/`](blog/) ディレクトリ直下に`YYYY-MM-DD-[slug].md`という形式の名前で作成します。

たとえば、`my-website/blog/2019-09-05-hello-docusaurus-v2.md`：

```markdown
---
title: Welcome Docusaurus v2
author: Joel Marcey
author_title: Co-creator of Docusaurus 1
author_url: https://github.com/JoelMarcey
author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
tags: [hello, docusaurus-v2]
description: This is my first post on Docusaurus 2.
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
Welcome to this blog. This blog is created with [**Docusaurus 2 alpha**](https://docusaurus.io/).

<!--truncate-->

This is my first post on Docusaurus 2.

A whole bunch of exploration to follow.
```

#### ブログ記事のメタデータ

必須フィールドは`title`のみです。ただし、他のオプションとともに、ブログ記事に作成者情報を追加するオプションも提供しています。

- `author`: 表示される作成者名

- `author_url`: 著者名がリンクされるURL

  これは、GitHub、Twitter、FacebookのプロファイルURLなどである可能性があります。

- `author_image_url`: 著者のサムネイル画像へのURL

- `author_title`: 著者の説明

- `title`: ブログ記事のタイトル

- `tags`: ブログ記事にタグ付けする文字列のリスト

- `draft`

  ブログ記事が進行中であり、したがってまだ公開されるべきではないことを示すbooleanフラグ。ただし、ドラフトブログ投稿は開発中に表示されます。

- `description`: 投稿の説明

  これは、`<head>`の`<meta name="description" content="..." />`および`<metaproperty = "og：description" content="..." />`になります。検索エンジンで使用されます。このフィールドが存在しない場合、デフォルトでコンテンツの最初の行になります。

- `image`: 投稿へのリンクを表示するときに使用される表紙またはサムネイル画像

- `hide_table_of_contents`: 右側の目次を非表示にするかどうか

  デフォルトでは`false`です。

#### 要約の切り捨て

ブログ投稿で`<！-truncate->`マーカーを使用して、公開されているすべてのブログ投稿を表示するときに要約として表示される内容を表します。 `<！-truncate->`より上のものはすべて、要約の一部になります。例えば:

```markdown
---
title: Truncation Example
---
All these will be part of the blog post summary.

Even this.

<!--truncate-->

But anything from here on down will not be.

Not this.

Or this.
```
