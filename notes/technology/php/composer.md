---
slug: /composer
sidebar_label: Composer
---

# Composer

<figure class="bg-white inline-flex">

![](../../../static/img/notes/composer.logo.png)

</figure>

> [Composer](https://getcomposer.org/) は PHP の依存関係管理のためのツールです。プロジェクトが依存するライブラリを宣言することができ、それらを管理（インストール/更新）します。
>
> Composer は、Linux における [Yum](http://yum.baseurl.org/) や [Apt](https://wiki.debian.org/Apt) のようなパッケージマネージャではなく、Node.js の [npm](/notes/npmjs) や Ruby の [Bundler](https://bundler.io/) のようなアイディアと同様のツールです。

## 概要

### システム要件

Composer は _PHAR_（PHP アーカイブ）形式をとっており、PHP 5.3.2 以降が必要です。

### 接続されるリポジトリ

メインのリポジトリは [Packagist](https://packagist.org/) となっており、パブリック PHP パッケージをインストールすることができます。

### 構成ファイルの種類

- `composer.json`
- `composer.lock`

### 依存ライブラリの配置先

[`install`](#cmd-install) コマンドによってインストールされるライブラリは、デフォルトでは `vendor` ディレクトリに配置されます。

## 基本的な使い方

1. **Composer のインストール**：`composer.phar` を（ダウンロードし、そして配置することで）[インストール](#インストール) します。
2. **Composer の構成**：[`composer.json`](#composerjson) ファイルをプロジェクトルートに作成し、構成します。これには、`init` コマンドが便利です。
3. **コマンドを使用する**：以降、各種 [`composer` コマンド](#cli) を使用することができます。

——上記に加えて、[**オートローディング**](#auto-loading) の構成をとることで、PHP ソースコードは依存ライブラリのインクルードを記述する必要が無くなります。

### オートローディング {#auto-loading}

## インストール

1. `composer.phar` を _ダウンロード_（スクリプト/ダウンロードページ）します。
2. _適切なディレクトリ_（ローカル/グローバル）に配置します。

### ダウンロード方法

- コマンド操作 → PHP スクリプトを実行
- GUI 操作 → マニュアルダウンロード

——いずれの場合も [ダウンロードページ](https://getcomposer.org/download/) の手順に従います。

### 配置先

ダウンロードした `composer.phar` を次の場所に配置します：

- **ローカルインストール** の場合 → プロジェクトディレクトリに配置します：

  ```bash
  mv composer.phar <project-dir> 
  ```

- **グローバルインストール** の場合 → `/usr/local/bin/composer` として配置し、実行権限を付与します：

  ```bash
  sudo mv composer.phar /usr/local/bin/composer
  chmod +x /usr/local/bin/composer
  ```

## `composer.json`

`composer.json` ファイルには、プロジェクトの依存関係が記述されており、他のメタデータも含まれている場合があります。

### スキーマ

| プロパティ | 意味 |
| --- | --- |
| `name` | パッケージの名前 |
| `description` | パッケージの簡単な説明 |
| `version` | パッケージのバージョン |
| `type` | パッケージのタイプ |
| `keywords` | パッケージが関連するキーワード |
| `homepage` | プロジェクトのウェブサイトへのURL |
| `readme` | readmeドキュメントへの相対パス |
| `time` | バージョンのリリース日 |
| `license` | パッケージのライセンス |
| `authors` | パッケージの作者 |
| `support` | プロジェクトに関するサポートを得るためのさまざまな情報。 |
| `funding` | 新機能の保守と開発のためにパッケージ作成者に資金を提供するためのURLのリスト |
| `require` | このパッケージに必要なパッケージのマップ |
| `require-dev` | このパッケージの開発やテストの実行などに必要なパッケージのマップ |
| `conflict` | このパッケージのこのバージョンと競合するパッケージのマップ |
| `replace` | このパッケージに置き換えられたパッケージのマップ |
| `provide` | このパッケージによって提供されるパッケージのマップ |
| `suggest` | このパッケージを強化またはうまく機能させることができる推奨パッケージ |
| `autoload` | PHPオートローダーのオートロードマッピング |
| `autoload-dev` | このセクションでは、開発目的のオートロードルール |
| `minimum-stability` | 安定性によってパッケージをフィルタリングするためのデフォルトの動作 |
| `prefer-stable` | 不安定なパッケージよりも安定したパッケージを優先する |
| `repositories` | 使用するカスタムパッケージリポジトリ |
| `config` | 構成オプションのセット |
| `scripts` | スクリプト |
| `extra` | `scripts` で消費するための任意の追加データ |
| `bin` | バイナリとして扱われ、`bin-dir`（config から）にシンボリックリンクされる必要があるファイルのセット |
| `archive` | パッケージアーカイブを作成するための一連のオプション |
| `abandoned` | このパッケージが破棄されたかどうか |
| `non-feature-branches` | 数値ではない（「最新」など）ブランチ名の正規表現パターンのリスト |

詳細は公式サイトの [The composer.json schema](https://getcomposer.org/doc/04-schema.md) を参照してください。

## CLI

- **ローカルインストール** した Composer のコマンド構文：

  ```bash
  php composer.phar <cmmand> [options] [arguments]
  ```

- **グローバルインストール** した Composer のコマンド構文：

  ```bash
  composer <cmmand> [options] [arguments]
  ```

### コマンド一覧

| コマンド | 概要 |
| --- | --- |
| `about` | Composer についての簡単な情報を表示します。 |
| `archive` | この composer パッケージのアーカイブを作成します。 |
| `browse` | パッケージのリポジトリ URL またはホームページをブラウザで開きます。 |
| `check-platform-reqs` | プラットフォームの要件を満たしているかどうかを確認します。 |
| `clear-cache`,<br />`clearcache`,<br />`cc` | composer の内部パッケージ・キャッシュをクリアします。 |
| `config` | 構成オプションを設定します。 |
| `create-project` | 指定されたディレクトリにパッケージから新しいプロジェクトを作成します。 |
| `depends`, `why` | 指定したパッケージをインストールする原因となるパッケージを表示します。 |
| `diagnose` | システムを診断して、一般的なエラーを特定します。 |
| `dump-autoload`,<br />`dumpautoload` | オートローダーをダンプします。 |
| `exec` | ベンダーの binary／script を実行します。 |
| `fund` | 依存関係のメンテナンスに資金を援助する方法を発見します。 |
| `global` | composer のグローバルディレクトリ (`$COMPOSER_HOME`) でのコマンド実行を許可します。 |
| `help` | コマンドのヘルプを表示します。 |
| `home` | パッケージのリポジトリ URL またはホームページをブラウザで開きます。 |
| [`install`,<br />`i`](#cmd-install) | プロジェクトの依存関係を、`composer.lock` ファイルがあればそれに基づいてインストールし、なければ `composer.json` に基づいてインストールします。 |
| `info` | パッケージに関する情報を表示します。 |
| [`init`](#cmd-init) | 基本的な `composer.json` ファイルをカレント・ディレクトリに作成します。 |
| `licenses` | 依存関係にあるプロジェクトのライセンス情報を表示します。 |
| `list` | コマンドを一覧表示します。 |
| `outdated` | インストールされているパッケージのうち、アップデートが可能なものを最新バージョンも含めて表示します。 |
| `prohibits`,<br />`why-not` | 指定されたパッケージのインストールを妨げるパッケージを表示します。 |
| `reinstall` | 指定されたパッケージ名をアンインストールおよび再インストールします。 |
| `remove` | 指定のパッケージを `require` または `require-dev` から削除します。 |
| `require` | `composer.json` に必要なパッケージを追加し、インストールします。 |
| `run`,<br />`run-script` | `composer.json` で定義されているスクリプトを実行します。 |
| `search` | パッケージを検索します。 |
| `self-update`,<br />`selfupdate` | `composer.phar` を最新バージョンに更新します。  |
| `show` | パッケージの情報を表示します。 |
| `status` | ローカルに変更されたパッケージの一覧を表示します。 |
| `suggests` | パッケージの提案を表示します。 |
| [`update`,<br />`upgrade`,<br />`u`](#cmd-update) | `composer.json` にしたがって、依存関係にあるパッケージを最新バージョンにアップグレードし、`composer.lock` ファイルを更新します。 |
| `validate` | `composer.json` と `composer.lock` を検証します。 |

### 共通のオプション

| オプション | 意味 |
| --- | --- |
| `--verbose`, `-v` | メッセージの冗長性を高めます。 |
| `--help`, `-h` | ヘルプ情報を表示します。 |
| `--no-interaction` `-n` | インタラクティブな質問をしません。 |
| `--no-plugins` | プラグインを無効にします。 |
| `--no-cache` | キャッシュディレクトリの使用を無効にします。環境変数 `COMPOSER_CACHE_DIR` を | `/dev/null`（または Windows の場合は `NUL`）に設定するのと同じです。
| `--working-dir`, `-d` | 指定されている場合は、指定されたディレクトリを作業ディレクトリとして使用します。 |
| `--profile` | タイミングとメモリ使用量の情報を表示します。 |
| `--ansi` | ANSI出力を強制します。 |
| `--no-ansi` | ANSI 出力を無効にします。 |
| `--version`, `-V` | このアプリケーションのバージョンを表示します。 |

### プロセス終了コード

- `0`: OK
- `1`: 一般的な、または不明なエラー
- `2`: 依存関係解決のエラーコード

---

### `init` {#cmd-init}

`init` コマンドは、対話的に `composer.json` を作成します。

```bash
php composer.phar init
```

#### オプション

| オプション | 意味 |
| --- | ---|
| `--name` | パッケージの名前。 |
| `--description` | パッケージの説明。 |
| `--author` | パッケージの作成者名。 |
| `--type` | パッケージのタイプ。 |
| `--homepage` | パッケージのホームページ。 |
| `--require` | バージョン制約付きで必要なパッケージ。<br />`foo/bar:1.0.0` の形式である必要があります。 |
| `--require-dev` | 開発要件での、バージョン制約付きで必要なパッケージ。 |
| `--stability`, `-s` | 最小安定性フィールドの値。 |
| `--license`, `-l` | パッケージのライセンス。 |
| `--repository` | 1つ（または複数）のカスタムリポジトリを提供します。それらは生成された `composer.json` に保存され、`require` のリストを要求するときにオートコンプリートに使用されます。すべてのリポジトリは、`composer` リポジトリを指す HTTP URL、またはリポジトリキーが受け入れるものと同様の JSON 文字列のいずれかです。 |
| `--autoload`, `-a` | PSR-4 自動ロードマッピングを `composer.json` に追加します。パッケージの名前空間を指定されたディレクトリに自動的にマップします。（`src/` などの相対パスが必要です）[PSR-4 自動ロード](https://getcomposer.org/doc/04-schema.md#psr-4) も参照してください。 |

### `install` / `i` {#cmd-install}

`install` コマンドは、現在のディレクトリから `composer.lock` ファイルを読み取り、正確なバージョンを `vendor` にインストールします。`composer.lock` が無かった場合は、代わりに `composer.json` ファイルを読み取り、**依存関係を解決して** インストールします。

```bash
php composer.phar install
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--prefer-install` | パッケージをダウンロードするには、`source` と `dist` の2つの方法があります。Composer はデフォルトで `dist` を使用します。`--prefer-install=source`（または `--prefer-source`）を渡すと、Composer はソースがある場合はソースからインストールします。これは、プロジェクトにバグ修正を加えて、依存関係のローカル git クローンを直接取得する場合に役立ちます。Composer がパッケージの開発バージョンに対してソースを自動的に使用するという従来の動作を取得するには、`--prefer-install=auto` を使用します。[config.preferred-install](https://getcomposer.org/doc/06-config.md#preferred-install) も参照してください。このフラグを渡すと、構成値が上書きされます。 |
| `--dry-run` | 実際にパッケージをインストールせずにインストールを実行する場合は、`--dry-run` を使用できます。これにより、インストールがシミュレートされ、何が起こるかが示されます。 |
| `--dev` | `require-dev` にリストされているパッケージをインストールします（これがデフォルトの動作です）。 |
| `--no-dev` | `require-dev` にリストされているパッケージのインストールをスキップします。オートローダーの生成は、`autoload-dev` ルールをスキップします。 |
| `--no-autoloader` | オートローダーの生成をスキップします。 |
| `--no-scripts` | `composer.json` で定義されたスクリプトの実行をスキップします。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--optimize-autoloader`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。`--optimize-autoloader` を暗黙的に有効にします。 |
| `--apcu-autoloader` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-autoloader-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu-autoloader` を暗黙的に有効にします。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件（`php`、`hhvm`、`lib-*`および `ext-*`）を無視し、ローカルマシンがこれらを満たさない場合でもインストールを強制します。`platform` 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがそれを満たさない場合でもインストールを強制します。ワイルドカードを使用すると、複数の要件を無視できます。 |

### `update` / `upgrade` / `u` {#cmd-update}

`update` コマンドは、依存関係の最新バージョンを取得し、`composer.lock` ファイルを更新します。このコマンドは、`apt-get` または同様のパッケージマネージャーを考えている場合の `upgrade` と同じように、`upgrade` としてエイリアスされます。

- 次のようにすると、プロジェクトのすべての依存関係が解決され、正確なバージョンが `composer.lock` に書き込まれます：

  ```bash
  php composer.phar update
  ```

- すべてではなく、いくつかのパッケージのみを更新する場合は、次のようにリストできます：

  ```bash
  php composer.phar update vendor/package vendor/package2
  ```

- ワイルドカードを使用して、多数のパッケージを一度に更新することもできます：

  ```bash
  php composer.phar update "vendor/*"
  ```

- `composer.json` を変更せずにパッケージを特定のバージョンにダウングレードする場合は、`--with` を使用して、カスタムバージョン制約を提供できます：

  ```bash
  php composer.phar update --with vendor/package:2.0.1
  ```

  カスタム制約は、既存の制約のサブセットである必要があり、この機能は、ルートパッケージの依存関係でのみ使用できます。

- `--with` を使用してカスタム制約を提供するパッケージのみを更新する場合は、`--with` をスキップして、部分更新構文で制約を使用できます：

  ```bash
  php composer.phar update vendor/package:2.0.1 vendor/package2:3.0.*
  ```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--prefer-install` | パッケージをダウンロードするには、`source` と `dist` の2つの方法があります。Composer はデフォルトで `dist` を使用します。`--prefer-install=source`（または `--prefer-source`）を渡すと、Composer はソースがある場合はソースからインストールします。これは、プロジェクトにバグ修正を加えて、依存関係のローカル git クローンを直接取得する場合に役立ちます。Composer がパッケージの開発バージョンに対してソースを自動的に使用するという従来の動作を取得するには、`--prefer-install=auto` を使用します。[config.preferred-install](https://getcomposer.org/doc/06-config.md#preferred-install) も参照してください。このフラグを渡すと、構成値が上書きされます。 |
| `--dry-run` | 実際に何もせずにコマンドをシミュレートします。 |
| `--dev` | `require-dev` にリストされているパッケージをインストールします（これがデフォルトの動作です）。 |
| `--no-dev` | `require-dev` にリストされているパッケージのインストールをスキップします。オートローダーの生成は、`autoload-dev` ルールをスキップします。 |
| `--no-install` | `composer.lock` ファイルを更新した後、インストール手順を実行しません。 |
| `--lock` | ロックファイルのハッシュのみを更新して、ロックファイルが古くなっているという警告を抑制します。 |
| `--with` | 追加する一時的なバージョン制約（例：`foo/bar:1.0.0` または `foo/bar=1.0.0`） |
| `--no-autoloader` | オートローダーの生成をスキップします。 |
| `--no-scripts` | `composer.json` で定義されたスクリプトの実行をスキップします。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--with-dependencies`, `-w` | ルート要件であるものを除いて、引数リスト内のパッケージの依存関係も更新します。 |
| `--with-all-dependencies`, `-W` | ルート要件であるものを含め、引数リスト内のパッケージの依存関係も更新します。 |
| `--optimize-autoloader`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在、デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。 `--optimize-autoloader` を暗黙的に有効にします。 |
| `--apcu-autoloader` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-autoloader-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu-autoloader` を暗黙的に有効にします。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがこれらを満たさない場合でもインストールを強制します。`platform` 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがそれを満たさない場合でもインストールを強制します。ワイルドカードを使用すると、複数の要件を無視できます。 |
| `--prefer-stable` | 依存関係の安定したバージョンを優先します。 |
| `--prefer-lowest` | 依存関係の最も低いバージョンを優先します。要件の最小バージョンをテストするのに役立ちます。通常は `--prefer-stable` とともに使用されます。 |
| `--interactive` | 更新するパッケージを選択するためのオートコンプリート付きのインタラクティブインターフェイス。 |
| `--root-reqs` | 更新を1次の依存関係に制限します。 |

引数として `mirrors`、`lock`、または `nothing` という単語のいずれかを指定すると、オプション `--lock` を指定するのと同じ効果があります。たとえば、`composer updatemirrors` は `composerupdate--lock` とまったく同じです。

### `require` {#cmd-require}

現在のディレクトリから `composer.json` ファイルに新しいパッケージを追加します。ファイルが存在しない場合は、その場で作成されます。

```bash
php composer.phar require
```

要件を追加/変更した後、変更された要件がインストールまたは更新されます。

要件をインタラクティブに選択したくない場合は、それらをコマンドに渡すことができます。

```bash
php composer.phar require "vendor/package:2.*" vendor/package2:dev-master
```

パッケージを指定しない場合、Composer はパッケージを検索するように促し、結果が表示されたら、必要な一致のリストを提供します。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--dev` | `require-dev` にパッケージを追加します。 |
| `--dry-run` | 実際に何もせずにコマンドをシミュレートします。 |
| `--prefer-install` | パッケージをダウンロードする方法には、`source` と `dist` の2種類があります。Composer はデフォルトで `dist` を使用します。`--prefer-install=source` (または `--prefer-source`) を指定すると、ソースがある場合はソースからインストールします。これは、プロジェクトのバグフィックスを行い、依存関係にあるローカルの git クローンを直接取得したい場合に便利です。開発版のパッケージで自動的にソースを使用する従来の動作にするには、`--prefer-install=auto` を使用してください。[config.prefer-install](https://getcomposer.org/doc/06-config.md#preferred-install も参照してください。このフラグを渡すと、コンフィグの値がオーバーライドされます。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--no-update` | 依存関係の自動更新を無効にします（`--no-install` を意味します）。 |
| `--no-install` | `composer.lock` ファイルを更新した後、インストール手順を実行しません。|
| `--no-scripts` | `composer.json` で定義されたスクリプトの実行をスキップします。 |
| `--update-no-dev` | `--no-dev` オプションを指定して依存関係の更新を実行します。 |
| `--update-with-dependencies`, `-w` | ルート要件であるものを除いて、新しく必要なパッケージの依存関係も更新します。 |
| `--update-with-all-dependencies`, `-W` | ルート要件であるものを含め、新しく必要なパッケージの依存関係を更新します。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがこれらを満たさない場合でもインストールを強制します。`platform` 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがそれを満たさない場合でもインストールを強制します。ワイルドカードを使用すると、複数の要件を無視できます。 |
| `--prefer-stable` | 依存関係の安定したバージョンを優先します。 |
| `--prefer-lowest` | 依存関係の最も低いバージョンを優先します。要件の最小バージョンをテストするのに役立ちます。通常は `--prefer-stable` とともに使用されます。 |
| `--sort-packages` | パッケージを `composer.json` でソートしたままにします。 |
| `--optimize-autoloader`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在、デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。`--optimize-autoloader` を暗黙的に有効にします。 |
| `--apcu-autoloader` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-autoloader-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu-autoloader` を暗黙的に有効にします。 |

#### `remove` {#cmd-remove}

`remove` コマンドは、現在のディレクトリの `composer.json` ファイルからパッケージを削除します。

```bash
php composer.phar remove vendor/package vendor/package2
```

要件を削除した後、変更された要件はアンインストールされます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--dev` | `require-dev` からパッケージを削除します。 |
| `--dry-run` | 実際に何もせずにコマンドをシミュレートします。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--no-update` | 依存関係の自動更新を無効にします（`--no-install` を意味します）。 |
| `--no-install` | `composer.lock` ファイルを更新した後、インストール手順を実行しません。 |
| `--no-scripts` | `composer.json` で定義されたスクリプトの実行をスキップします。 |
| `--update-no-dev` | `--no-dev` オプションを指定して依存関係の更新を実行します。 |
| `--update-with-dependencies`, `-w` | 削除されたパッケージの依存関係も更新します。（非推奨、現在はデフォルトの動作です） |
| `--update-with-all-dependencies`, `-W` | ルート要件であるものを含め、すべての継承された依存関係を更新できるようにします。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがこれらを満たさない場合でもインストールを強制します。`platform` 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがそれを満たさない場合でもインストールを強制します。ワイルドカードを使用すると、複数の要件を無視できます。 |
| `--optimize-autoloader`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。`--optimize-autoloader` を暗黙的に有効にします。 |
| `--apcu-autoloader` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-autoloader-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu-autoloader` を暗黙的に有効にします。 |

### `reinstall` {#cmd-reinstall}

`reinstall` コマンドは、インストールされているパッケージを名前で検索し、アンインストールしてから再インストールします。これにより、ファイルをいじった場合、または `--prefer-install` を使用してインストールの種類を変更したい場合に、パッケージのクリーンインストールを実行できます。

```bash
php composer.phar reinstall acme/foo acme/bar
```

再インストールするパッケージ名を複数指定するか、ワイルドカードを使用して一度に複数のパッケージを選択できます：

```bash
php composer.phar reinstall "acme/*"
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--prefer-install` | パッケージをダウンロードするには、`source` と `dist` の2つの方法があります。 Composer はデフォルトで `dist` を使用します。 `--prefer-install=source`（または `--prefer-source`）を渡すと、Composer はソースがある場合はソースからインストールします。これは、プロジェクトにバグ修正を加えて、依存関係のローカル git クローンを直接取得する場合に役立ちます。Composer がパッケージの開発バージョンに対してソースを自動的に使用するという従来の動作を取得するには、`--prefer-install=auto` を使用します。[config.preferred-install](https://getcomposer.org/doc/06-config.md#preferred-install) も参照してください。このフラグを渡すと、構成値が上書きされます。 |
| `--no-autoloader` | オートローダーの生成をスキップします。 |
| `--no-scripts` | `composer.json` で定義されたスクリプトの実行をスキップします。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--optimize-autoloader`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。`--optimize-autoloader` を暗黙的に有効にします。 |
| `--apcu-autoloader` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-autoloader-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu-autoloader` を暗黙的に有効にします。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件を無視します。これは、`reinstall` コマンドのオートローダー生成のコンテキストでのみ効果があります。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件を無視します。これは、`reinstall` コマンドのオートローダー生成のコンテキストでのみ効果があります。ワイルドカードを使用すると、複数の要件を無視できます。 |

### `check-platform-reqs` {#cmd-check-platform-reqs}

`check-platform-reqs` コマンドは、PHP と拡張機能のバージョンがインストールされたパッケージのプラットフォーム要件と一致することを確認します。これは、たとえば、本番サーバーがプロジェクトのインストール後にプロジェクトを実行するために必要なすべての拡張機能を備えていることを確認するために使用できます。

`update`/`install`とは異なり、このコマンドは `config.platform` 設定を無視し、実際のプラットフォームパッケージをチェックするため、必要なプラットフォームの依存関係があることを確認できます。

### `global` {#cmd-global}

グローバルコマンドを使用すると、`COMPOSER_HOME` ディレクトリから実行しているかのように、`install`、`remove`、`require`、`update` などの他のコマンドを実行できます。

これは、どこでも利用できるようにしたい CLI ツールまたは Composer プラグインを保持できる中央の場所に保存されているプロジェクトを管理するための単なるヘルパーです。

これを使用して、CLI ユーティリティをグローバルにインストールできます。次に例を示します：

```bash
php composer.phar global require friendsofphp/php-cs-fixer
```

これで、`php-cs-fixer` バイナリがグローバルに利用可能になりました。グローバルベンダーバイナリディレクトリが `$PATH` 環境変数にあることを確認してください。次のコマンドを使用して、その場所を取得できます：

```bash
php composer.phar global config bin-dir --absolute
```

後でバイナリを更新する場合は、グローバル更新を実行できます：

```bash
php composer.phar global update
```

### `search` {#cmd-search}

`search` コマンドを使用すると、現在のプロジェクトのパッケージリポジトリを検索できます。通常、これは packagist になります。検索したい用語を渡します。

```bash
php composer.phar search monolog
```

複数の引数を渡すことで、複数の用語を検索することもできます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--only-name`, `-N` | 名前だけで検索します。 |
| `--type`, `-t` | 特定のパッケージタイプを検索します。 |
| `--format`, `-f` | テキスト（デフォルト）または json 出力形式から選択できます。jsonで は、名前キーと説明キーのみが存在することが保証されていることに注意してください。残り（`url`、`repository`、`downloads`、`favers`）は Packagist.org の検索結果で利用でき、他のリポジトリは多かれ少なかれデータを返す場合があります。 |

### `show` {#cmd-show}

使用可能なすべてのパッケージを一覧表示するには、`show` コマンドを使用できます。

```bash
php composer.phar show
```

リストをフィルタリングするには、ワイルドカードを使用してパッケージマスクを渡すことができます。

```bash
php composer.phar show monolog/*

monolog/monolog 1.19.0 Sends your logs to files, sockets, inboxes, databases and various web service
```

特定のパッケージの詳細を確認したい場合は、パッケージ名を渡すことができます。

```bash
php composer.phar show monolog/monolog

name     : monolog/monolog
versions : master-dev, 1.0.2, 1.0.1, 1.0.0, 1.0.0-RC1
type     : library
names    : monolog/monolog
source   : [git] https://github.com/Seldaek/monolog.git 3d4e60d0cbc4b888fe5ad223d77964428b1978da
dist     : [zip] https://github.com/Seldaek/monolog/zipball/3d4e60d0cbc4b888fe5ad223d77964428b1978da 3d4e60d0cbc4b888fe5ad223d77964428b1978da
license  : MIT

autoload
psr-0
Monolog : src/

requires
php >=5.3.0
```

パッケージバージョンを渡すこともできます。これにより、その特定のバージョンの詳細がわかります。

```bash
php composer.phar show monolog/monolog 1.0.2
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--all` | すべてのリポジトリで利用可能なすべてのパッケージを一覧表示します。 |
| `--installed`, `-i` | インストールされているパッケージを一覧表示します（これはデフォルトで有効になっており、非推奨です）。 |
| `--platform`, `-p` | プラットフォームパッケージ（php と拡張機能）のみを一覧表示します。 |
| `--available`, `-a` | 利用可能なパッケージのみを一覧表示します。 |
| `--name-only`, `-N` | パッケージ名のみをリストします。 |
| `--path`, `-P` | パッケージパスを一覧表示します。 |
| `--tree`, `-t` | 依存関係をツリーとしてリストします。パッケージ名を渡すと、そのパッケージの依存関係ツリーが表示されます。 |
| `--latest`, `-l` | 最新バージョンを含む、インストールされているすべてのパッケージを一覧表示します。 |
| `--outdated`, `-o` | `--latest` を意味しますが、これは新しいバージョンが利用可能なパッケージ_のみ_をリストします。 |
| `--no-dev` | パッケージリストから開発者の依存関係をフィルタリングします。 |
| `--minor-only`, `-m` | --latestとともに使用します。 SemVer 互換のマイナーアップデートがあるパッケージのみが表示されます。 |
| `--direct`, `-D` | パッケージのリストを直接の依存関係に制限します。 |
| `--strict` | 古いパッケージがある場合は、ゼロ以外の終了コードを返します。 |
| `--format`, `-f` | テキスト（デフォルト）または json 出力形式から選択できます。 |

### `outdated` {#cmd-outdated}

`outdated`コマンドは、現在および最新のバージョンを含む、更新が利用可能なインストール済みパッケージのリストを表示します。これは基本的に `composer show -lo` のエイリアスです。

色分けは次のとおりです。

- **緑 (=)**：依存関係は最新のバージョンで、最新の状態になっています。
- **黄 (`~`)**：依存関係には、semver に応じた下位互換性の中断を含む新しいバージョンが利用可能であるため、可能な場合はアップグレードしますが、作業が必要になる場合があります。
- **赤 (!)**：依存関係には、semver 互換の新しいバージョンがあるため、アップグレードする必要があります。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--all`, `-a` | 古いパッケージだけでなく、すべてのパッケージを表示します（`composer show -l` のエイリアス）。 |
| `--direct`, `-D` | パッケージのリストを直接の依存関係に制限します。 |
| `--strict` | パッケージが古くなっている場合は、ゼロ以外の終了コードを返します。 |
| `--minor-only`, `-m` | SemVer 互換のマイナーアップデートがあるパッケージのみが表示されます。 |
| `--format`, `-f` | テキスト（デフォルト）または json 出力形式から選択できます。 |
| `--no-dev` | 古い開発依存関係を表示しないでください。 |
| `--locked` | 現在ベンダーディレクトリにあるものに関係なく、ロックファイルからのパッケージの更新を表示します。 |

### `browse` / `home` {#cmd-browse}

`browse`（エイリアスは `home`）は、ブラウザーでパッケージのリポジトリー URL またはホームページを開きます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--homepage`, `-H` | リポジトリの URL の代わりにホームページを開きます。 |
| `--show`, `-s` | ホームページまたはリポジトリの URL のみを表示します。 |

### `suggests` {#cmd-suggests}

現在インストールされているパッケージのセットによって提案されたすべてのパッケージを一覧表示します。オプションで、`vendor/package` の形式で1つまたは複数のパッケージ名を渡して、それらのパッケージによって行われた提案のみに出力を制限することができます。

`--by-package`（デフォルト）または `--by-suggestion` フラグを使用して、それぞれ提案または提案されたパッケージを提供するパッケージごとに出力をグループ化します。

提案されたパッケージ名のリストのみが必要な場合は、`--list` を使用します。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--by-package` | パッケージを提案して出力をグループ化します（デフォルト）。 |
| `--by-suggestion` | 提案されたパッケージによって出力されたグループ。 |
| `--all` | 推移的なものを含むすべての依存関係からの提案を表示します（デフォルトでは、直接的な依存関係の提案のみが表示されます）。 |
| `--list` | 提案されたパッケージ名のリストのみを表示します。 |
| `--no-dev` | `require-dev` パッケージからの提案を除外します。 |

### `find` {#cmd-find}

依存関係の維持に資金を提供する方法を見つけてください。これにより、インストールされている依存関係からのすべての資金調達リンクが一覧表示されます。`--format=json` を使用して、機械可読出力を取得します。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--format`, `-f` | テキスト（デフォルト）または json 出力形式から選択できます。 |

### `depends` / `why` {#cmd-depends}

``depends コマンドは、他のどのパッケージが特定のパッケージに依存しているかを示します。インストールの場合と同様に、`require-dev` の関係は、ルートパッケージに対してのみ考慮されます。

```bash
php composer.phar depends doctrine/lexer
 doctrine/annotations v1.2.7 requires doctrine/lexer (1.*)
 doctrine/common      v2.6.1 requires doctrine/lexer (1.*)
```

オプションで、パッケージの後にバージョン制約を指定して、検索を制限できます。

`--tree` または `-t` フラグを追加して、パッケージが依存している理由の再帰ツリーを表示します。次に例を示します：

```bash
php composer.phar depends psr/log -t
psr/log 1.0.0 Common interface for logging libraries
|- aboutyou/app-sdk 2.6.11 (requires psr/log 1.0.*)
|  `- __root__ (requires aboutyou/app-sdk ^2.6)
|- monolog/monolog 1.17.2 (requires psr/log ~1.0)
|  `- laravel/framework v5.2.16 (requires monolog/monolog ~1.11)
|     `- __root__ (requires laravel/framework ^5.2)
`- symfony/symfony v3.0.2 (requires psr/log ~1.0)
   `- __root__ (requires symfony/symfony ^3.0)
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--recursive`, `-r` | ルートパッケージまで再帰的に解決します。 |
| `--tree`, `-t` | 結果をネストされたツリーとして出力します。これは `-r` を意味します。 |

### `prohibits` / `why-not` {#cmd-prohibits}

`prohibits` コマンドは、特定のパッケージのインストールをブロックしているパッケージを示します。バージョン制約を指定して、プロジェクトでアップグレードを実行できるかどうかを確認し、実行できない場合は実行できない理由を確認します。次の例を参照してください：

```bash
php composer.phar prohibits symfony/symfony 3.1
 laravel/framework v5.2.16 requires symfony/var-dumper (2.8.*|3.0.*)
```

たとえば、サーバーを PHP 8.0 にアップグレードできるかどうかを確認するために、プラットフォーム要件を指定することもできることに注意してください：

```bash
php composer.phar prohibits php:8
 doctrine/cache        v1.6.0 requires php (~5.5|~7.0)
 doctrine/common       v2.6.1 requires php (~5.5|~7.0)
 doctrine/instantiator 1.0.5  requires php (>=5.3,<8.0-DEV)
```

`depends` と同様に、再帰ルックアップをリクエストできます。これにより、競合の原因となったパッケージに応じてすべてのパッケージが一覧表示されます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--recursive`, `-r` | ルートパッケージまで再帰的に解決します。 |
| `--tree`, `-t` | 結果をネストされたツリーとして出力します。これは `-r` を意味します。 |

### `validate` {#cmd-validate}

`composer.json` ファイルをコミットする前、およびリリースにタグを付ける前に、必ず `validate` コマンドを実行する必要があります。それはあなたの `composer.json` が有効であるかどうかをチェックします。

```bash
php composer.phar validate
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--no-check-all` | `composer.json` の要件がバインドされていない、または過度に厳密なバージョン制約を使用している場合でも、警告を発しません。 |
| `--no-check-lock` | `composer.lock` が存在し、最新でない場合でもエラーを発行しないでください。 |
| `--no-check-publish` | `composer.json` がPackagistでのパッケージとしての公開に適していないが、それ以外の場合は有効である場合でも、エラーを発行しないでください。 |
| `--with-dependencies` | また、インストールされているすべての依存関係の `composer.json` を検証します。 |
| `--strict` | 警告およびエラーに対してゼロ以外の終了コードを返します。 |

### `status` {#cmd-status}

依存関係のコードを頻繁に変更する必要があり、それらがソースからインストールされている場合、`status` コマンドを使用すると、依存関係にローカルな変更があるかどうかを確認できます。

```bash
php composer.phar status
```

`--verbose` オプションを使用すると、何が変更されたかについての詳細情報を取得できます：

```bash
php composer.phar status -v

You have changes in the following dependencies:
vendor/seld/jsonlint:
    M README.mdown
```

### `self-update` / `selfupdate` {#cmd-self-update}

Composer 自体を最新バージョンに更新するには、`self-update` コマンドを実行します。それはあなたの `composer.phar` を最新バージョンに置き換えます。

```bash
php composer.phar self-update
```

代わりに特定のリリースに更新する場合は、次のように指定します：

```bash
php composer.phar self-update 1.0.0-alpha7
```

システム全体に Composer をインストールした場合（[グローバルインストール](https://getcomposer.org/doc/00-intro.md#globally)を参照）、`root` 権限でコマンドを実行する必要がある場合があります

```bash
sudo -H composer self-update
```

Composer が PHAR としてインストールされていない場合、このコマンドは使用できません。（これは、Composer がオペレーティングシステムのパッケージマネージャーによってインストールされた場合に発生することがあります。）

#### オプション

| オプション | 意味 |
| --- | --- |
| `--rollback`, `-r` | インストールした最後のバージョンにロールバックします。 |
| `--clean-backups` | 更新中に古いバックアップを削除します。これにより、Composer の現在のバージョンが更新後に使用可能な唯一のバックアップになります。 |
| `--no-progress` | ダウンロードの進行状況を出力しません。 |
| `--update-keys` | キーの更新をユーザーに求めます。 |
| `--stable` | 安定したチャネルを強制的に更新します。 |
| `--preview` | プレビューチャネルを強制的に更新します。 |
| `--snapshot` | スナップショットチャネルを強制的に更新します。 |
| `--1` | 安定したチャネルを強制的に更新しますが、1.xバージョンのみを使用します |
| `--2` | 安定したチャネルを強制的に更新しますが、2.xバージョンのみを使用します |
| `--set-channel-only` | チャネルのみをデフォルトとして保存してから終了します |

### `config` {#cmd-config}

`config` コマンドを使用すると、ローカルの `composer.json` ファイルまたはグローバルな `config.json` ファイルのいずれかで Composer の構成設定とリポジトリを編集できます。

さらに、ローカルの `composer.json` のほとんどのプロパティを編集できます。

```bash
php composer.phar config --list
```

#### 構文

```
config [options] [setting-key] [setting-value1] ... [setting-valueN]
```

`settings-key` は構成オプション名であり、`setting-value1` は構成値です。値の配列をとることができる設定（`github-protocols` など）の場合、複数の設定値引数を使用できます。

次のプロパティの値を編集することもできます：`description`、`homepage`、`keywords`、`license`、`minimum-stability`、`name`、`prefer-stable`、`type`、`version`

#### オプション

| オプション | 意味 |
| --- | --- |
| `--globa`, `-g` | デフォルトでは、`$COMPOSER_HOME/config.json` にあるグローバル構成ファイルを操作します。このオプションがない場合、このコマンドはローカルの `composer.json` ファイルまたは `--file` で指定されたファイルに影響します。 |
| `--editor`, `-e` | `EDITOR` 環境変数で定義されているテキストエディターを使用して、ローカルの `composer.json` ファイルを開きます。 `--global` オプションを使用すると、グローバル構成ファイルが開きます。 |
| `--auth`, `-a` | auth config ファイルに影響します（`--editor` にのみ使用されます）。 |
| `--unset` | `settings-key` で指定された構成要素を削除します。 |
| `--list`, `-l` | 現在の構成変数のリストを表示します。`--global` オプションを使用すると、グローバル構成のみが一覧表示されます。 |
| `--file="..."`, `-f` | `composer.json` ではなく特定のファイルを操作します。これを `--global` オプションと組み合わせて使用することはできないことに注意してください。 |
| `--absolute` | 相対パスではなく `*-dir` 構成値をフェッチするときに絶対パスを返します。 |
| `--json` | JSON は設定値をデコードし、`extra.*` キーで使用します。 |
| `--merge` | 設定値を現在の値とマージして、`--json` と組み合わせて `extra.*` キーで使用します。 |
| `--append` | リポジトリを追加するときは、リポジトリを先頭に追加する（最高の優先度）のではなく、既存のリポジトリに追加します（最低の優先度）。 |
| `--source` | 構成値のロード元を表示します。 |

#### リポジトリの変更

`config` コマンドは、config セクションの変更に加えて、次の方法でリポジトリセクションを変更することもサポートしています：

```bash
php composer.phar config repositories.foo vcs https://github.com/foo/bar
```

リポジトリにさらに多くの構成オプションが必要な場合は、代わりにそのJSON表現を渡すことができます：

```bash
php composer.phar config repositories.foo '{"type": "vcs", "url": "http://svn.example.org/my-project/", "trunk-path": "master"}'
```

#### 余分な値の変更

`config` コマンドは、config セクションの変更に加えて、次の方法で追加セクションを変更することもサポートしています：

```bash
php composer.phar config extra.foo.bar value
```

ドットは配列のネストを示しますが、最大3レベルの深さが許可されます。上記は `"extra": { "foo": { "bar": "value" } }` を設定します。

追加/変更する複雑な値がある場合は、`--json` フラグと `--merge` フラグを使用して、追加のフィールドを json として編集できます：

```bash
php composer.phar config --json extra.foo.bar '{"baz": true, "qux": []}'
```

### `create-project` {#cmd-create-project}

Composer を使用して、既存のパッケージから新しいプロジェクトを作成できます。これは、`git clone`/`svn checkout`を実行してからベンダーの `composer install` を実行するのと同じです。

これにはいくつかのアプリケーションがあります：

1. アプリケーションパッケージをデプロイできます。
2. たとえば、任意のパッケージをチェックアウトして、パッチの開発を開始できます。
3. 複数の開発者がいるプロジェクトでは、この機能を使用して、開発用の初期アプリケーションをブートストラップできます。

Composer を使用して新しいプロジェクトを作成するには、`create-project` コマンドを使用できます。パッケージ名と、プロジェクトを作成するディレクトリを渡します。3番目の引数としてバージョンを指定することもできます。指定しない場合は、最新バージョンが使用されます。

ディレクトリが現在存在しない場合は、インストール時に作成されます。

```bash
php composer.phar create-project doctrine/orm path "2.2.*"
```

プロジェクトをブートストラップするために、既存の `composer.json` ファイルがあるディレクトリでparamsなしでコマンドを実行することもできます。

デフォルトでは、コマンドは packagist.org でパッケージをチェックします。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--stability`, `-s` | パッケージの最小安定性。デフォルトは `stable` です。 |
| `--prefer-install` | パッケージをダウンロードするには、`source` と `dist` の2つの方法があります。 Composer はデフォルトで `dist` を使用します。 `--prefer-install=source`（または `--prefer-source`）を渡すと、Composer はソースがある場合はソースからインストールします。これは、プロジェクトにバグ修正を加えて、依存関係のローカル git クローンを直接取得する場合に役立ちます。Composer がパッケージの開発バージョンに対してソースを自動的に使用するという従来の動作を取得するには、`--prefer-install=auto` を使用します。[config.preferred-install](https://getcomposer.org/doc/06-config.md#preferred-install) も参照してください。このフラグを渡すと、構成値が上書きされます。 |
| `--repository` | packagist の代わりに使用されるパッケージを検索するためのカスタムリポジトリを提供します。`composer` リポジトリを指す HTTP URL、ローカルの `packages.json` ファイルへのパス、または[リポジトリ](https://getcomposer.org/doc/04-schema.md#repositories)キーが受け入れるものと同様の JSON 文字列のいずれかです。これを複数回使用して、複数のリポジトリを構成できます。 |
| `--add-repository` | `composer.json` にカスタムリポジトリを追加します。ロックファイルが存在する場合、それは削除され、インストールの代わりに更新が実行されます。 |
| `--dev` | `require-dev` にリストされているパッケージをインストールします。 |
| `--no-dev` | `require-dev` パッケージのインストールを無効にします。 |
| `--no-scripts` | ルートパッケージで定義されているスクリプトの実行を無効にします。 |
| `--no-progress` | バックスペース文字を処理しない一部の端末またはスクリプトを混乱させる可能性のある進行状況の表示を削除します。 |
| `--no-secure-http` | ルートパッケージのインストール時に、`secure-http` 構成オプションを一時的に無効にします。ご自身の責任でお使いください。このフラグを使うのはよくありません。 |
| `--keep-vcs` | 作成されたプロジェクトの VCS メタデータの削除をスキップします。これは、コマンドを非対話モードで実行する場合に最も役立ちます。 |
| `--remove-vcs` | プロンプトを表示せずに VCS メタデータを強制的に削除します。 |
| `--no-install` | ベンダーのインストールを無効にします。 |
| `--ignore-platform-reqs` | すべてのプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがこれらを満たさない場合でもインストールを強制します。[`platform`](https://getcomposer.org/doc/06-config.md#platform) 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*` および `ext-*`）を無視し、ローカルマシンがそれを満たさない場合でもインストールを強制します。ワイルドカードを使用すると、複数の要件を無視できます。 |
| `--ask` | 新しいプロジェクトのターゲットディレクトリを提供するようにユーザーに依頼します。 |

### `dump-autoload` / `dumpautoload` {#cmd-dump-autoload}

たとえば、クラスマップパッケージの新しいクラスのためにオートローダーを更新する必要がある場合は、`dump-autoload` を使用して、インストールや更新を行う必要がありません。

さらに、パフォーマンス上の理由から、PSR-0/4 パッケージをクラスマップパッケージに変換する最適化されたオートローダーをダンプできます。多くのクラスを持つ大規模なアプリケーションでは、オートローダーはすべてのリクエストの時間のかなりの部分を占める可能性があります。すべてにクラスマップを使用することは、開発ではあまり便利ではありませんが、このオプションを使用すると、利便性のために PSR-0/4 を使用し、パフォーマンスのためにクラスマップを使用できます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--no-scripts` | `composer.json` ファイルで定義されているすべてのスクリプトの実行をスキップします。 |
| `--optimize`, `-o` | PSR-0/4 オートローディングをクラスマップに変換して、より高速なオートローダーを取得します。これは特に本番環境で推奨されますが、実行に少し時間がかかる可能性があるため、現在、デフォルトでは実行されていません。 |
| `--classmap-authoritative`, `-a` | クラスマップからのみクラスを自動ロードします。`--optimize` を暗黙的に有効にします。 |
| `--apcu` | APCu を使用して、見つかったクラスと見つからなかったクラスをキャッシュします。 |
| `--apcu-prefix` | APCu オートローダーキャッシュにカスタムプレフィックスを使用します。`--apcu` を暗黙的に有効にします。 |
| `--no-dev` | `autoload-dev` ルールを無効にします。Composer は、デフォルトで、最後の `install` または `update` `--no-dev` 状態に従ってこれを自動的に推測します。 |
| `--dev` | `autoload-dev` ルールを有効にします。Composer は、デフォルトで、最後の `install` または `update` `--no-dev` 状態に従ってこれを自動的に推測します。 |
| `--ignore-platform-reqs` | `php`、`hhvm`、`lib-*`、`ext-*` のすべての要件を無視し、これらの[プラットフォームチェック](https://getcomposer.org/doc/07-runtime.md#platform-check)をスキップします。[`platform`](https://getcomposer.org/doc/06-config.md#platform 構成オプションも参照してください。 |
| `--ignore-platform-req` | 特定のプラットフォーム要件（`php`、`hhvm`、`lib-*`、`ext-*`）を無視し、プラットフォームチェックをスキップします。ワイルドカードを使用すると、複数の要件を無視できます。 |

### `clear-cache` / `clearcache` / `cc` {#cmd-clear-cache}

Composer のキャッシュディレクトリからすべてのコンテンツを削除します。

### `licenses` {#cmd-licenses}

インストールされているすべてのパッケージの名前、バージョン、およびライセンスを一覧表示します。`--format=json` を使用して、機械可読出力を取得します。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--format` | 出力の形式：`text`、`json`、または `summary`（デフォルト：`text`） |
| `--no-dev` | 出力から開発依存関係を削除します |

### `run-script` {#cmd-run-script}

#### オプション

| オプション | 意味 |
| --- | --- |
| `--timeout` | スクリプトのタイムアウトを秒単位で設定するか、タイムアウトがない場合は0を設定します。 |
| `--dev` | 開発モードを設定します。 |
| `--no-dev` | 開発モードを無効にします。 |
| `--list`, `-l` | ユーザー定義のスクリプトを一覧表示します。 |

スクリプトを手動で実行するには、このコマンドを使用して、スクリプト名とオプションで必要な引数を指定します。

### `exec` {#cmd-exec}

ベンダーのバイナリ/スクリプトを実行します。任意のコマンドを実行できます。これにより、コマンドを実行する前に、Composerの `bin` ディレクトリが `PATH` にプッシュされます。

#### オプション

| オプション | 意味 |
| --- | --- |
| `--list`, `-l` | 使用可能な Composer バイナリを一覧表示します。 |

### `diagnose` {#cmd-diagnose}

バグを見つけた場合、または何かがおかしな動作をしていると思われる場合は、`diagnose` コマンドを実行して、多くの一般的な問題の自動チェックを実行することをお勧めします。

```bash
php composer.phar diagnose
```

### `archive` {#cmd-archive}

このコマンドは、特定のバージョンの特定のパッケージの zip/tar アーカイブを生成するために使用されます。また、除外/無視されたファイルなしでプロジェクト全体をアーカイブするために使用することもできます。

```bash
php composer.phar archive vendor/package 2.0.21 --format=zip
```

#### オプション

| オプション | 意味 |
| --- | --- |
| `--format`, `-f` | 結果のアーカイブの形式：`tar` または `zip`（デフォルト：`tar`） |
| `--dir` | このディレクトリにアーカイブを書き込みます（デフォルト：`.`） |
| `--file` | 指定されたファイル名でアーカイブを書き込みます。 |

### `help` {#cmd-help}

特定のコマンドに関する詳細情報を取得するには、`help` を使用できます。

```bash
php composer.phar help install
```

---

### 環境変数

特定の設定を上書きするいくつかの環境変数を設定できます。可能な限り、代わりに `composer.json` `のconfig` セクションでこれらの設定を指定することをお勧めします。環境変数は `composer.json` で指定された値よりも常に優先されることに注意してください。

| 環境変数 | 説明 |
| --- | --- |
| `COMPOSER` | `composer.json` に別名を指定します。 |
| `COMPOSER_ALLOW_SUPERUSER` | `1` に設定すると、この環境では、root/super ユーザーとしてコマンドを実行することに関する警告を無効にします。また、sudo セッションの自動クリアも無効になるため、Docker コンテナーのように、Composer を常にスーパーユーザーとして使用する場合にのみ、これを設定する必要があります。 |
| `COMPOSER_ALLOW_XDEBUG` | `1` に設定すると、この環境では、Xdebug 拡張機能が有効になっている場合に、PHPを再起動せずに Composer を実行できます。 |
| `COMPOSER_AUTH` | `COMPOSER_AUTH` 変数を使用すると、認証を環境変数として設定できます。変数の内容は、必要に応じて http-basic、github-oauth、bitbucket-oauth、...オブジェクトを含み、構成の仕様に従った JSON 形式のオブジェクトである必要があります。 |
| `COMPOSER_BIN_DIR` | このオプションを設定することにより、`bin`（ベンダーバイナリ）ディレクトリを `vendor/bin` 以外のものに変更できます。 |
| `COMPOSER_CACHE_DIR` | Composer キャッシュディレクトリを変更できます。これは、cache-dir オプションを介して構成することもできます。デフォルトでは、Unix 系と macOS では `$COMPOSER_HOME/cache` を指し、Windowsでは `C:\Users\<user>\AppData\Local\Composer`（または `％LOCALAPPDATA％/Composer`）を指します。 |
| `COMPOSER_CAFILE` | この環境値を設定することにより、SSL/TLS ピア検証中に使用される証明書バンドルファイルへのパスを設定できます。 |
| `COMPOSER_DISABLE_XDEBUG_WARN` | 1 に設定すると、このenvは、ComposerがXdebug拡張機能を有効にして実行しているときの警告を抑制します。 |
| `COMPOSER_DISCARD_CHANGES` | この変数は、`discard-changesconfig` オプションを制御します。 |
| `COMPOSER_HOME` | Composer のホームディレクトリを変更できます。これは、すべてのプロジェクト間で共有される非表示のグローバル（マシン上のユーザーごと）ディレクトリです。`composer config --global home` を使用して、ホームディレクトリの場所を確認します。デフォルトでは、Windows では `C:\Users\<user>\AppData\Roaming\Composer`、macOS では `/Users/<user>/.composer` を指します。XDG ベースディレクトリ仕様に従う Unix 系システムでは、`$XDG_CONFIG_HOME/composer` を指します。他の Unix 系システムでは、`/home/<user>/.composer` を指します。 |
| `COMPOSER_HTACCESS_PROTECT` | デフォルトは `1` です。`0` に設定すると、Composer は Composer のホーム、キャッシュ、およびデータディレクトリに `.htaccess` ファイルを作成しません。 |
| `COMPOSER_MEMORY_LIMIT` | 設定されている場合、値は php の memory_limit として使用されます。 |
| `COMPOSER_MIRROR_PATH_REPOS` | `1` に設定すると、この環境はデフォルトのパスリポジトリ戦略を `symlink` ではなく `mirror` に変更します。設定されているデフォルトの戦略であるため、リポジトリオプションで上書きすることができます。 |
| `COMPOSER_NO_INTERACTION` | `1` に設定すると、この環境変数により、Composer はすべてのコマンドに `--no-interaction` フラグを渡した場合と同じように動作します。これはビルドボックス/CIで設定できます。 |
| `COMPOSER_PROCESS_TIMEOUT` | この環境変数は、Composerがコマンド（gitコマンドなど）の実行を終了するのを待つ時間を制御します。デフォルト値は300秒（5分）です。 |
| `COMPOSER_ROOT_VERSION` | この変数を設定することで、VCS 情報から推測できず、`composer.json` に存在しない場合に、ルートパッケージのバージョンを指定できます。 |
| `COMPOSER_VENDOR_DIR` | この変数を設定することで、Composer に `vendor` 以外のディレクトリに依存関係をインストールさせることができます。 |
| `COMPOSER_RUNTIME_ENV` | これにより、Composer が実行されている環境をヒントでき、Composer が環境固有の問題を回避するのに役立ちます。現在サポートされている唯一の値は `virtualbox` です。これにより、いくつかの短い `sleep()` 呼び出しで、ファイルシステムがファイルを正しく書き込むのを待ってから、ファイルを読み取ろうとします。Vagrant または VirtualBox を使用していて、ファイルが存在するはずなのにインストール中にファイルが見つからないという問題が発生した場合は、環境変数を設定できます。 |
| `http_proxy`, `HTTP_PROXY` | HTTP プロキシ経由で Composer を使用する場合は、標準の `http_proxy` または `HTTP_PROXY` 環境変数を使用できます。この変数にはプロキシの URL を設定します。多くのオペレーティング・システムでは、すでにこの変数が設定されています。多くのオペレーティングシステムでは、すでにこの変数が設定されています。<br />git や curl などの一部のツールは小文字の `http_proxy` バージョンのみを使用するため、`http_proxy`（小文字）を使用するか、両方を定義することをお勧めします。または、`git config --global http.proxy <proxyurl>` を使用して git プロキシを定義することもできます。<br />非 CLI コンテキストで Composer を使用していて（つまり、CMS または同様のユースケースへの統合）、プロキシをサポートする必要がある場合は、代わりに `CGI_HTTP_PROXY` 環境変数を指定してください。詳細については、[httpoxy.org](https://httpoxy.org/) を参照してください。 |
| `COMPOSER_MAX_PARALLEL_HTTP` | 整数に設定して、並行してダウンロードできるファイルの数を構成します。これはデフォルトで `12` であり、`1` から `50` の間でなければなりません。プロキシに同時実行性の問題がある場合は、これを低くすることをお勧めします。通常、これを増やしてもパフォーマンスは向上しません。 |
| `HTTP_PROXY_REQUEST_FULLURI` | プロキシを使用しているが、`request_fulluri` フラグをサポートしていない場合は、この環境変数 `false` または `0` に設定して、Composer が `request_fulluri` オプションを設定できないようにする必要があります。 |
| `HTTPS_PROXY_REQUEST_FULLURI` | プロキシを使用しているが、HTTPS リクエストの `request_fulluri` フラグをサポートしていない場合は、この環境変数を `false` または `0` に設定して、Composer が `request_fulluri` オプションを設定できないようにする必要があります。 |
| `COMPOSER_SELF_UPDATE_TARGET` | 設定されている場合、自己更新コマンドは、それ自体を上書きするのではなく、新しい Composer phar ファイルをそのパスに書き込みます。読み取り専用ファイルシステムで Composer を更新するのに便利です。 |
| `no_proxy`, `NO_PROXY` | プロキシの背後にいて、特定のドメインでプロキシを無効にしたい場合は、 `no_proxy` または `NO_PROXY` 環境変数を使用できます。プロキシを使用しないドメインのコンマ区切りリストに設定します。<br />この環境変数は、CIDR 表記のドメイン、IP アドレス、および IP アドレスブロックを受け入れます。フィルタを特定のポート（例：`:80`）に制限できます。`*` に設定して、すべての HTTP リクエストのプロキシを無視することもできます。 |
| `COMPOSER_DISABLE_NETWORK` | `1` に設定すると、ネットワークアクセスが無効になります（ベストエフォート）。これは、デバッグに使用したり、接続性の低い飛行機や宇宙船で Composer を実行したりするために使用できます。`prime` に設定すると、GitHub VCS リポジトリがキャッシュをプライムするため、`1` で完全にオフラインで使用できます。 |
| `COMPOSER_DEBUG_EVENTS` | `1` に設定すると、ディスパッチされているイベントに関する情報を出力します。これは、プラグインの作成者が正確にいつ起動しているのかを特定するのに役立ちます。 |
