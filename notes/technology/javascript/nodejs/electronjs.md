---
slug: /electronjs
sidebar_label: Electron
---

# Electron

<figure class="inline-flex">

![](../../../../static/img/notes/electron.logo.svg)

</figure>

> Build cross-platform desktop apps with JavaScript, HTML, and CSS

Electron の採用事例：

- [VisualStudio Code](https://code.visualstudio.com/) [リポジトリ](https://github.com/microsoft/vscode)
- [Facebook Messeanger](https://www.messenger.com/desktop)
- [Twitch](https://twitch.com/)
- [Slack](https://slack.com/)
- [Figma](https://figma.com/)

## Electron プロジェクトの作成

```bash
my-electron-app $ npm init -y
my-electron-app $ npm i -D electron
```

## モジュール

- メインプロセスモジュール
  - [`app`](https://www.electronjs.org/ja/docs/latest/api/app) – アプリケーションのイベントライフサイクルを制御する
  - [`BrowserWindow`](https://www.electronjs.org/ja/docs/latest/api/browser-window) – アプリケーションウインドウを作成し管理する
- レンダラープロセスモジュール

## プロセスモデル

Electron は**マルチプロセス**アーキテクチャを継承しています。プロセスの種類は2つあります。

- メインプロセス
  > アプリは1つのメインプロセスがあり、それは Node.js 環境で動作します。
  >
  > 主な目的：
  > 
  > - ウィンドウの作成とその管理 – [`BrowserWindow`](https://www.electronjs.org/ja/docs/latest/api/browser-window) モジュールを使用して行います。
  > - アプリケーションライフサイクルの制御 – [`app`](https://www.electronjs.org/ja/docs/latest/api/app) モジュールを介して行います。
  > - ネイティブ API の使用 – ネイティブなデスクトップ機能を制御するモジュールを使用し、OS との対話を行います。 
- レンダラープロセス
  > ウェブコンテンツのレンダリングを担います。これは、ウェブ標準に従って動作し、Node.js の API に直接アクセスすることはできません。

### プリロードスクリプト

プリロードスクリプトは、メインプロセスからアタッチされ、レンダラープロセス内でウェブコンテンツの読み込み開始前に実行されるコードです。

### プロセス間通信

> プロセス間通信（IPC）は、UI からネイティブ API を呼び出したり、ネイティブメニューから Web コンテンツの変更をトリガーしたりするなど、多くの一般的なタスクを実行する唯一の方法です。

- [`ipcMain`](https://www.electronjs.org/ja/docs/latest/api/ipc-main) – メインプロセスで、レンダラープロセスから送信されるメッセージを受信して処理間します。
- [`ipcRenderer`](https://www.electronjs.org/ja/docs/latest/api/ipc-renderer) – レンダラープロセスで、メインプロセスに対して同期/非同期のメッセージを送信します。
- [`contextBridge`](https://www.electronjs.org/ja/docs/latest/api/context-bridge) – プリロードで、分離されたコンテキスト間に、安全、双方向で同期されたブリッジを作成します。

#### レンダラーからメインに対してメッセージを送信する

- メインプロセス: [`ipcMain.on`](https://www.electronjs.org/ja/docs/latest/api/ipc-main#ipcmainonchannel-listener) を使用して、レンダラープロセスからメッセージを受信します。
- レンダラープロセス: [`ipcRenderer.send`](https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrenderersendchannel-args) を使用して、メインプロセスにメッセージを送信します。実際にはこれは、プリロードから公開されたブリッジを介して呼び出すのことが推奨されます。
- プリロード: [`contextBridge.exposeInMainWorld`](https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api) を使用して、レンダラープロセスに対して API を公開します。

#### レンダラーからメインに対してハンドラを呼び出す

- メインプロセス: [`ipcMain.handle`](https://www.electronjs.org/ja/docs/latest/api/ipc-main#ipcmainhandlechannel-listener) を使用して、レンダラープロセスからの呼び出しに対応します。
- レンダラープロセス: [`ipcRenderer.invoke`](https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrendererinvokechannel-args) を使用して、メインプロセスのハンドラを呼び出します。実際にはこれは、プリロードから公開されたブリッジを介して呼び出すのことが推奨されます。
- プリロード: [`contextBridge.exposeInMainWorld`](https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api) を使用して、レンダラープロセスに対して API を公開します。

#### メインからレンダラーに対してメッセージを送信する

- メインプロセス: [`BrowserWindow.webContents.send`](https://www.electronjs.org/ja/docs/latest/api/web-contents#contentssendchannel-args) を使用して、レンダラーに対してメッセージを送信します。
- レンダラープロセス: [`ipcRenderer.on`](https://www.electronjs.org/ja/docs/latest/api/ipc-renderer#ipcrendereronchannel-listener) を使用して、メインプロセスからメッセージを受信します。
- プリロード: [`contextBridge.exposeInMainWorld`](https://www.electronjs.org/ja/docs/latest/api/context-bridge#contextbridgeexposeinmainworldapikey-api) を使用して、レンダラープロセスに対して API を公開します。

## アプリケーションのリリース

## 関連パッケージ

- [`electron`](https://www.npmjs.com/package/electron) – Electorn コア
  - [`electron-packager`](https://www.npmjs.com/package/electron-packager) – パッケージング

## 関連リンク

- [Electron](https://www.electronjs.org/ja/) – Electron のウェブサイト
  - [ドキュメント](https://www.electronjs.org/ja/docs/latest/)
  - [API](https://www.electronjs.org/ja/docs/latest/api/app)
  - [サンプル](https://www.electronjs.org/ja/docs/latest/tutorial/examples)
  - [Electron Fiddle](https://www.electronjs.org/fiddle)
- [Electron Forge](https://www.electronforge.io/) – “最新の Electron アプリケーションを作成、公開、およびインストールするための完全なツールです。”
- [Awesome Electron](https://github.com/sindresorhus/awesome-electron) – Electron でアプリを作成するための便利なリソース
