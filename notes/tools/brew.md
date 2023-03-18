---
slug: /brew
sidebar_label: Homebrew
---

# Homebrew

[Homebrew](https://brew.sh/index_ja) は、macOS（またはLinux）用パッケージマネージャーです。

## Homebrew 本体管理

### インストール

[公式サイト](https://brew.sh/index_ja#install) の指示に従います。

## CLI アプリケーション管理

## GUI アプリケーション管理；Cask

Cask は、macOS ネイティブアプリケーションをインストールするH omebrew パッケージ定義です。Homebrew を通して、ネイティブアプリケーションを管理することができます。

- ```bash
  brew install --cask 
  ```

## デーモン管理；Service

```bash title="構文"
brew services [subcommmmand]
```

- ```bash title="現在のユーザー（または root）のすべてのマネージドサービスを一覧表示する"
  [sudo] brew services
  ```

## 関連する外部リンク

- [brew.sh（日本語）](https://brew.sh/index_ja#install)
  - [docs.brew.sh](https://docs.brew.sh/)
    - [docs.brew.sh/Manpage](https://docs.brew.sh/Manpage)