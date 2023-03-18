---
slug: /yarnpkg
sidebar_label: Yarn
---

# Yarn

## ワークスペース

**ワークスペース** は複数のパッケージを一括で管理するための機能です。1つのリポジトリの中で複数のパッケージを開発する手法を **モノレポ** と呼びますが、Yarnのワークスペースは、次のような機能によりモノレポをサポートします：

- リポジトリ内で全パッケージ共通の `node_modules` を持つことで、同じ依存パッケージを複数回インストールしないで済むようにします。`yarn.lock` ファイルも共通化されます。
- リポジトリ内でのパッケージの依存関係をローカルで解決します。これは、シンボリックリンクを用いることで実現しています。

## CLI

### インストール

[インストール](https://classic.yarnpkg.com/en/docs/install) は、いくつかある方法の中で npm インストールする方法が推奨されています：

```bash
npm i -g yarn
```

### 主な npm と Yarn のコマンドの対応関係

| コマンド機能 | npm | Yarn |
| --- | --- | --- |
| `package.json` の作成| `npm init` | `yarn init` |
| 依存パッケージの一括インストール | `npm i` | `yarn[ install]` |
| `package-lock.json` に従った依存パッケージの一括インストール | `npm ci` | `yarn[ install] --frozen-lockfile` |
| npm パッケージのインストール（`dependencies`） | `npm i <パッケージ名>` | `yarn add <パッケージ名>` |
| npm パッケージのインストール（`devDependencies`） | `npm i <パッケージ名> -D`  | `yarn add <パッケージ名> -D` |
| npm パッケージのグローバルインストール | `npm i <パッケージ名> -g` | `yarn global add <パッケージ名>` |
| npm パッケージのアンインストール | `npm uninstall <パッケージ名>` | `yarn remove <パッケージ名>` |
| バージョンの上げ方を指定したバージョンの更新 | `npm version patch｜minor｜major` | `yarn version --patch｜--minor｜--major` |
| 具体的なバージョンを指定したバージョンの更新 | `npm version <新しいバージョン>` | `yarn version --new-version <新しいバージョン>` |
| `scripts` のスクリプト実行 | `npm run <スクリプト名> [-- オプション]` | `yarn[ run] <スクリプト名> [オプション]` |
| インストールした npm パッケージの実行可能ファイルの実行 | `npx <コマンド名> [オプション]` | `yarn[ run] <コマンド名> [オプション]` |
| npm パッケージの公開 | `npm publish` | `yarn publish` |
