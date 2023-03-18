---
slug: /apache
sidebar_label: Apache HTTP サーバー
---

# Apache HTTP サーバー

<figure class="inline-flex">

![](../../static/img/notes/apache.logo.png)

</figure>

## インストール

## 各種設定ファイル

Apache の設定ファイル群は、`/etc/aoache2` ディレクトリ以下に保存されています。

- `httpd.conf`
- `users/<username>.conf`
- `magic`
- `extra/httpd-<name>.conf`
- `other/<name>.conf`
- `.htaccess` — ディレクトリ毎に設定を変更する方法

## CLI (`apachectl`)

### NAME

`apachectl` — ApacheHTTP サーバー制御インターフェース

### SYNOPSIS

パススルーモードで動作する場合、`apachectl` は httpd バイナリで利用可能なすべての引数を取ることができます。httpd バイナリで利用可能なすべての引数を取ることができます。

```bash
apachectl [ httpd-argument ]
```

SysV initモードでは、apachectlは以下のようなシンプルな一言のコマンドを取ります。

`apachectl` コマンド

### SUMMARY

apachectl は、Apache HyperText Transfer Protocol (HTTP) サーバのフロントエンドです。(HTTP) サーバのフロントエンドです。管理者が Apache httpd デーモンの機能を制御するのに役立つように設計されています。管理者が Apache httpd デーモンの機能を制御できるように設計されています。

apachectl スクリプトは2つのモードで動作します。まず、httpd コマンドの単純なフロントエンドとして動作し、 必要な環境変数を設定した後、コマンドラインの引数を渡して httpd を起動します。第二に、apachectl は SysV init スクリプトとして動作し、`start`, `restart`, `stop` のような簡単な一言の引数を受け取り、 httpd への適切なシグナルに変換します。

Apache のインストールに標準外のパスが使われている場合は、apachectl スクリプトを編集して、httpd バイナリに適切なパスを設定する必要があります。また、必要な httpd のコマンドライン引数を指定することもできます。詳しくは、スクリプトのコメントをご覧ください。

apachectl スクリプトは、成功すると `0` の終了値を返し、エラーが発生すると `>0` を返します。エラーが発生した場合は `0` を返します。詳細については、スクリプトのコメントをご覧ください。

### OPTIONS

ここでは、SysV の init-style オプションのみが定義されています。その他の引数は httpd のマニュアルページで定義されています。

- `start`
  
  org.apache.httpd launchd のジョブをロードします。

- `stop`, `graceful-stop`

  org.apache.httpd launchd のジョブをアンロードします。

- ` restart`, `graceful`

  org.apache.httpd launchd のジョブをアンロードしてからロードします。

- `fullstatus`

  mod_status からの完全なステータスレポートを表示します。この機能を使うためには、サーバで mod_status が有効になっていて、システムで lynx のようなテキストベースのブラウザがシステムで利用できる必要があります。ステータスレポートにアクセスするための URL は、スクリプトの `STATUSURL` 変数を編集することで設定できます。

- `status`

  簡単なステータスレポートを表示します。 `fullstatus` オプションと似ていますが、現在提供されているリクエストのリストが省略されています。

- `configtest`

  設定ファイルの構文テストを実行します。設定ファイルを解析し、`Syntax Ok` と報告するか、特定の構文エラーに関する詳細情報を報告します。 これは、`apachectl -t` と同じです。

  以下のオプションは、以前のバージョンでは利用可能でしたが、削除されました。

- `startssl`

  SSL をサポートした httpd を起動するには、設定ファイルを編集して関連するディレクティブを含め、通常の `apachectl start` を使用する必要があります。
