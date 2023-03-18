---
slug: /git-branch-strategy
sidebar_label: ブランチ戦略
---

# 【git】ブランチ戦略

- [GitHub Flow](#github-flow) — デプロイを中心にした開発スタイル
- [git-flow](#git-flow) — リリース中心の開発スタイル

## GitHub Flow

[GitHub Flow](https://gist.github.com/Gab-km/3705015) は、デプロイを中心としたシンプルなワークフローであり、GitHub 社が採用しています。

### ブランチ

- `master` — 常にデプロイ可能なブランチ
- `<descriptively-name>` — 新しい何かに取り組む際に、説明的な名前で、`master` から分岐して作成する（例：`new-oauth2-scopes`）

### ワークフロー

- `master` ブランチのものは何であれデプロイ可能である
- 新しい何かに取り組む際は、説明的な名前のブランチを `master` から作成する（例: new-oauth2-scopes）
- 作成したブランチにローカルでコミットし、サーバー上の同じ名前のブランチにも定期的に作業内容をプッシュする
- フィードバックや助言が欲しい時、ブランチをマージしてもよいと思ったときは、 プルリクエスト を作成する
- 他の誰かがレビューをして機能にOKを出してくれたら、あなたはコードを `master` へマージすることができる
- マージをして `master` へプッシュしたら、直ちにデプロイをする

### 適したケース

- Web アプリなど、単一のバージョンのみのリリースで済み、かつ明示的なバージョン管理を行わない開発
- 短い間隔で頻繁にデプロイを行う開発

## git-flow

[git-flow](https://nvie.com/posts/a-successful-git-branching-model/) は、リリース中心のワークフローで、[ VincentDriessen 氏](https://nvie.com/about/) によって2010年に考案されました。

### ブランチ

- `feature/<name>` — 今後のリリースまたは遠い将来のリリースの新機能を開発します
- `develop` — 次のリリースに向けて最新の開発変更が提供された状態を常に反映しているメインブランチ
- `release/<vX.X.X>` — 新しい本番リリースの準備をサポートします
- `master` — 常に本番環境の状態を反映しているメインブランチ
- `hotfix/<name>` — 本番バージョンの重大なバグをすぐに解決するためのブランチ

| ブランチ | 分岐元 | マージ先 |
| --- | --- | --- |
| `feature` | `develop` | `develop` |
| `develop` | `master` | 

### ワークフロー

![](../../../static/img/notes/git.git-model@2x.png)

### `git-flow` コマンド

git-flow ワークフローは、専用の git のサブコマンドが提供されています。コマンドを利用することで、ワークフローにおける操作を簡潔に行うことができます。

#### インストール

Mac、[Installation · nvie/gitflow Wiki](https://github.com/nvie/gitflow/wiki/Installation) に従ってインストールを行います。

#### コマンド

```bash title="使い方：git-flow コマンド"
git flow <subcommand>
```

サブコマンド：

- `init` — ブランチモデルをサポートして、新しい git リポジトリを初期化します。
- `feature` — feature ブランチを管理します。
- `release` — release ブランチを管理します。
- `hotfix` — hotfix ブランチを管理します。
- `support` — support ブランチを管理します。
- `version` — バージョン情報を表示します。

#### Getting started

基本的な流れは、[git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.ja_JP.html) で確認することができます。

### 適したケース

- 明示的にバージョン管理されたソフトウェアを構築している場合
- ソフトウェアの複数のバージョンを実際にサポートする必要がある場合
