---
sidebar_position: 0
slug: /javascript-libraries
sidebar_label: ライブラリ
---

# 【JavaScript】ライブラリ

## Web フレームワーク

- [React](https://ja.reactjs.org/)
  - [React Native](https://reactnative.dev/)
  - [Next.js](https://nextjs.org/)
  - [Remix](https://remix.run/)
  - [Relay](https://relay.dev/) – GraphQL データをフェッチおよび管理
  - [Inferno](https://www.infernojs.org/)
  - [Docusaurus](https://docusaurus.io/)
  - [Gatsby](https://www.gatsbyjs.com/)
  - [RedwoodJS](https://redwoodjs.com/)
- [Preact](https://preactjs.com/)
- [Vue.js](https://jp.vuejs.org/)
  - [Nuxt.js](https://nuxtjs.org/ja/) – Vue 版 Next.js
  - [Vite](https://ja.vitejs.dev/)
- [Angular](https://angular.jp/)
  - [Ionic](https://ionicframework.com/) 
- [Electron](https://www.electronjs.org/ja)
- [Ember.js](https://emberjs.com/)
  - [Glimmer](https://glimmerjs.com/)
- [Svelte](https://svelte.jp/)
- [Stencil](https://stenciljs.com/)
- [Lit](https://lit.dev/docs/)
- [Solid](https://www.solidjs.com/)
- [NestJS](https://nestjs.com/)
- [AdonisJS](https://adonisjs.com/)
- [Alpine](https://alpinejs.dev/) – “新しい軽量の JavaScript フレームワーク”

## UI

- [Storybook](https://storybook.js.org/)

## デザインパターン

### DI

- [InversifyJS](https://inversify.io/)
- [TSyringe](https://github.com/microsoft/tsyringe) – Microsoft 製

## ユーティリティ

- [`async`](https://www.npmjs.com/package/async) [[Repository](https://github.com/caolan/async)] [[Homepage](https://caolan.github.io/async/)]
  > 非同期
- [`mousetrap`](https://www.npmjs.com/package/mousetrap) – キーボードショートカット処理
- [`clsx`](https://www.npmjs.com/package/clsx) – `className` 文字列操作のユーティリティー

## CSS-in-JS

- [CSS Modules](https://github.com/css-modules/css-modules) – `.modeuls.css` ファイルで CSS をモジュール化
- [`styled-components`](https://www.npmjs.com/package/styled-components) [[Repositories](https://github.com/styled-components)] [[Homepage](https://styled-components.com/)]
  > タグ付きテンプレートを使用した CSS-in-JS
- `@emotion` [[Repositories](https://github.com/emotion-js)] [[Homepage](https://emotion.sh)]
  > タグ付きテンプレートを使用した CSS-in-JS

## コンソール

- [`chalk`](https://www.npmjs.com/package/chalk) – ターミナル出力のカラーリング
- [`progress`](https://www.npmjs.com/package/progress) – ASCII プログレスバー
- [`readline-sync`](https://www.npmjs.com/package/readline-sync) – コンソール（TTY）を介してユーザーと会話するためにインタラクティブに実行するための同期Readline。
- [`Inquirer`](https://www.npmjs.com/package/inquirer) – インタラクティブな CLI

## パーサー

- [`ini`](https://www.npmjs.com/package/ini) – INI 形式のパーサーとシリアライザー

## 通信

- [`zeromq`](https://www.npmjs.com/package/zeromq) [[Repository](https://github.com/zeromq/zeromq.js)] [[Homepage](https://zeromq.org/)]
  > メッセージライブラリ。ソケットを操作するときに便利な機能
- [`ws`](https://www.npmjs.com/package/ws) – WebSocket クライアントおよびサーバー

## HTTP サーバー

- [`express`](https://www.npmjs.com/package/express) [[Repository](https://github.com/expressjs/express)] [[Homepage](http://expressjs.com/)]
  > Node.js の軽量な Web フレームワーク
- [`koa`](https://www.npmjs.com/package/koa) – HTTPミドルウェアフレームワーク

## 認証

- [`passport`](https://www.npmjs.com/package/passport) [[Repository](https://github.com/jaredhanson/passport)] [[Homepage](https://www.passportjs.org/)]
  > Express 互換の認証ミドルウェア

## HTTP クライアント

- [`axios`](https://www.npmjs.com/package/axios) [[Repository](https://github.com/axios/axios)] [[Homepage](https://axios-http.com/)]
  > `Promise` ベースの HTTP クライアント
- [`superagent`](https://www.npmjs.com/package/superagent) – 小さなプログレッシブクライアントサイド HTTP リクエストライブラリ

## GraphQL クライアント

- [`graphql`](https://www.npmjs.com/package/graphql) – 大元の GraphQL ライブラリ
- [**Apollo**](https://www.apollographql.com/) _ 今日のデファクトスタンダードの GraphQL ライブラリ。React、Angular、Vue などで動作します。
- [`graphql-request`](https://www.npmjs.com/package/graphql-request) – 最小限の GraphQL クライアント
- [urql](https://formidable.com/open-source/urql/docs/) – React 用の高度にカスタマイズ可能で用途の広い GraphQL クライアント
- [Relay](https://relay.dev/) – Facebook によるフル機能の GraphQL クライアントライブラリ

## データベース

- [`lowdb`](https://www.npmjs.com/package/lowdb) – 小規模なローカル JSON データベース
- [`mongoose`](https://www.npmjs.com/package/mongoose) [[Repository](https://github.com/Automattic/mongoose)] [[Homepage](https://mongoosejs.com/)]
  > 非同期の MongoDB オブジェクトモデリングツール
- [`sqlite3`](https://www.npmjs.com/package/sqlite3) – Node.js 用の非同期の非ブロッキング SQLite3 バインディング。
- [`nedb`](https://www.npmjs.com/package/nedb) – Node.js、nw.js、Electron、ブラウザ用の組み込み永続またはメモリデータベースで、100％ JavaScript、バイナリ依存なし。API は MongoDB のサブセットであり、非常に高速です。

## ストレージ

- [`levelup`](https://www.npmjs.com/package/levelup) – Google が構築したシンプルな Key-Value ストア。
- [`redis`](https://www.npmjs.com/package/redis) [[Repository](https://github.com/redis/node-redis)] [[Homepage](https://github.com/redis/node-redis)] – [Redis](https://redis.io/) クライアント
  > Redis は、リモートディクショナリサーバー の略で、高速でオープンソースのメモリ内 key-value データストアです。<br />－－[Redis | AWS](https://aws.amazon.com/jp/redis/)

## テスト

- [Jest]

## サウンド

- [MIDI.js](https://galactic.ink/midi-js/)
- [`soundfont-player`](https://www.npmjs.com/package/soundfont-player)

## ポリフィル

- [`cross-fetch`]

## アセット

- fontsource.org
  - `@fontsource/roboto`
  - `@fontsource/noto-sans-jp`

---

## 参考

- [JavaScript Open Source Award](https://osawards.com/javascript/)
