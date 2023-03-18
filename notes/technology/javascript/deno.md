---
slug: /deno
sidebar_label: Deno
---

# Deno

<figure class="inline-flex">

![](../../../static/img/notes/deno.logo.svg)

</figure>

[Deno](https://deno.land/) は、V8 を使用し、Rust に組み込まれている、JavaScript および TypeScript 用のシンプルでモダンで安全なランタイムです。

Deno は、Node.js の作者であるライアン・ダール氏によって2018年にメジャーリリースされました。同氏は、 Node.js の設計で後悔したことを克服するために作成した意図を明かしています（→ [Node.js に関する10の反省点](/notes/design-mistakes-in-node)）。

## 特徴

- 1つの実行ファイル `deno` で実行可能
- デフォルトでセキュア – 明示的に有効にしない限り、ファイル、ネットワーク、環境へのアクセスができない
- ブラウザ互換 – 独自の API はすべてグローバル名前空間 `Deno` に含められている
- 生産性に役立つビルトインユーティリティ – バンドラー、テスト、コードフォーマッター、リンターなど
- TypeScript をネイティブサポート

### Node.js との比較

- `npm` を使用しない – モジュールの参照には URL や ファイルパスを使用
- `package.json` を使用しない
- すべての非同期は `Promise` ベース
- パーミッシンシステム
- 補足できないエラーが発生した場合は必ず停止する
- ES モジュールを採用し、CommonJS モジュールはサポートされない

## インストール

[deno_install](https://github.com/denoland/deno_install) の手順に従ってインストールします。

### アップデート

```bash
deno upgrade
```

## CLI (`deno`)

Deno は `deno` コマンドを提供します。

### サブコマンド

- `bundle` – Bundle module and dependencies into single file
- `cache` – Cache the dependencies
- `compile` – UNSTABLE: Compile the script into a self contained executable
- `completions` – Generate shell completions
- `coverage` – Print coverage reports
- `doc` – Show documentation for a module
- `eval` – Eval script
- `fmt` – Format source files
- `help` – Print this message or the help of the given subcommand(s)
- `info` – Show info about cache or info related to source file
- `install` – Install script as an executable
- `lint` – Lint source files
- `lsp` – Start the language server
- `repl` – Read Eval Print Loop
- `run` – Run a JavaScript or TypeScript program
- `test` – Run tests
- `types` – Print runtime TypeScript declarations
- `uninstall` – Uninstall a script previously installed with deno install
- `upgrade` – Upgrade deno executable to given version
- `vendor` – Vendor remote modules into a local directory

### 監視モード

`deno run`、`deno test`、`deno bundle`、および `deno fmt` では、`--watch` フラグを指定することで監視モードを有効にすることができます。

### フラグ

#### 整合性フラグ（ロックファイル）

キャッシュにリソースをダウンロードできるコマンド－－`deno cache`、`deno run`、`deno test`、`deno bundle`、`deno doc`、および `deno compile`－－に影響を与えます：

- `--lock <FILE>` – 指定されたロックファイルを確認してください
- `--lock-write` – ロックファイルを書き込みます。`--lock` とともに使用します。

#### キャッシュとコンパイルのフラグ

キャッシュにデータを取り込むことができるコマンド－－`deno cache`、`deno run`、`deno test`、`deno bundle`、`deno doc`、および `deno compile`－－に影響を与えます：

- `--config <FILE>` – 構成ファイルをロードします
- `--import-map <FILE>` – インポートマップファイルをロードします
- `--no-remote` – リモートモジュールを解決しないでください
- `--reload=<CACHE_BLOCKLIST>` – ソースコードキャッシュをリロードします（TypeScript を再コンパイルします）
- `--unstable` – 不安定な API を有効にします

#### ランタイムフラグ

ユーザーコードを実行するコマンド－－`deno run` と `deno test`－－に影響します：

- `--cached-only` – リモート依存関係がすでにキャッシュされていることを要求します
- `--inspect=<HOST:PORT>`
- `--inspect-brk=<HOST:PORT>`
- `--location <HREF> ` – 一部の Web API で使用される `globalThis.location` の値
- `--prompt` – 必要な許可が渡されなかった場合にプロンプトを表示するフォールバック
- `--seed <NUMBER>` – `Math.random()` のシード
- `--v8-flags=<v8-flags>` – V8コマンドラインオプションを設定します

### 権限

Deno はデフォルトではセキュアになるように設計されています。特に**権限**のオプションを有効にしない限り、Deno で実行されるプログラムには、ファイル、ネットワーク、環境へアクセスする権限はありません。

- `--allow-env=<allow-env>` – 環境変数の取得や設定などの環境アクセスを許可します。
- `--allow-hrtime` – 高解像度の時間測定を可能にします（高解像度の時間は、タイミング攻撃やフィンガープリントに使用できます）。
- `--allow-net=<allow-net>` – ネットワークアクセスを許可します。オプションのコンマ区切りのIPアドレスまたはホスト名のリスト（オプションでポート付き）を指定して、許可されたネットワークアドレスの許可リストを提供できます。
- `--allow-ffi` – ダイナミックライブラリのロードを許可します。ダイナミックライブラリはサンドボックスで実行されないため、Denoプロセスと同じセキュリティ制限がないことに注意してください。したがって、注意して使用してください。 --allow-ffiは不安定な機能であることに注意してください。
- `--allow-read=<allow-read>` – ファイルシステムの読み取りアクセスを許可します。オプションのコンマ区切りのディレクトリまたはファイルのリストを指定して、許可されたファイルシステムアクセスの許可リストを提供できます。
- `--allow-run=<allow-run>` – サブプロセスの実行を許可します。サブプロセスのオプションのコンマ区切りリストを指定して、許可されたサブプロセスの許可リストを提供できます。サブプロセスはサンドボックスで実行されないため、Denoプロセスと同じセキュリティ制限がないことに注意してください。したがって、注意して使用してください。
- `--allow-write=<allow-write>` – ファイルシステムの書き込みアクセスを許可します。オプションのコンマ区切りのディレクトリまたはファイルのリストを指定して、許可されたファイルシステムアクセスの許可リストを提供できます。
- `-A`, `--allow-all` – すべての権限を許可します。これにより、セキュリティに敏感なすべての機能が有効になります。注意して使用してください。

## 構成ファイル

`deno` コマンドでは、`--config path/to/deno.json` フラグで構成ファイルを指定することができます。

Node.js の `package.json` とは異なり、Deno の構成ファイルのプロパティは全て `deno` コマンドのフラグで指定することができるため、必須のものではありません。

### ファイル名

構成ファイルの名前は `deno.(json|jsonc)` が推奨されています。

### 例

```json
{
  "compilerOptions": {
    "allowJs": true,
    "lib": ["deno.window"],
    "strict": true
  },
  "lint": {
    "files": {
      "include": ["src/"],
      "exclude": ["src/testdata/"]
    },
    "rules": {
      "tags": ["recommended"],
      "include": ["ban-untagged-todo"],
      "exclude": ["no-unused-vars"]
    }
  },
  "fmt": {
    "files": {
      "include": ["src/"],
      "exclude": ["src/testdata/"]
    },
    "options": {
      "useTabs": true,
      "lineWidth": 80,
      "indentWidth": 4,
      "singleQuote": true,
      "proseWrap": "preserve"
    }
  }
}
```

### TypeScript

Deno は、TypeScript の設定ファイルをサポートしますが、`tsc` とは異なり、 `compilerOptions` セクションのうちの一部のオプションのみをサポートします。サポートされるオプションの一覧は [こちら](https://deno.land/manual@v1.19.0/typescript/configuration#how-deno-uses-a-configuration-file) に記載されています。

```json title="Deno における暗黙の tsconfig.json"
{
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "inlineSourceMap": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["deno.window"],  // --unstable フラグ使用時は `[ "deno.window", "deno.unstable" ]`
    "module": "esnext",
    "strict": true,
    "target": "esnext",
    "useDefineForClassFields": true
  }
}
```

### JSON スキーマ

[JSON スキーマ](https://deno.land/x/deno/cli/schemas/config-file.v1.json) が用意されています。

## モジュール

Deno のモジュールシステムは、Node.js のものとは異なります。

- Deno は npm を使用しません。URL またはファイルパスとして参照されるモジュールを使用します。そしてそれは 拡張子を含めて指定する必要があります。
- Denoはモジュール解決アルゴリズムで `package.json` を使用しません。
- Deno は Node.js プラグインをサポートしていません（そしてサポートしません）。パッケージにネイティブプラグインが必要な場合、Deno では機能しません。
- Denoは「ESモジュール」を使用し、`require()` をサポートしていません。サードパーティのモジュールは、URL を介してインポートされます。

### Node.js 互換モード

Node.js 互換モードを有効にすると、Node.js 環境をエミュレートし、Node.js 向けのモジュールが使用できるようになります（但し完全互換ではない）。

- 互換モードを有効にするには、CLI で `--compat` フラグを渡します。更に、今のところ合わせて `--unstable` フラグも必要です。
- CommonJS モジュールを利用する場合は、`--allow-read` フラグが必要となります。パッケージ管理はサポートしていないため、npm や yarn を使用します。
- 現在、互換モードでは TypeScript はサポートされていませんが、今後サポートされていく予定です。

互換モードを有効にすると、Node グローバルが設定されます。`process`、`global`、`Buffer` といった API が Node.js と同じように利用できます。これは、[`std/node/global.ts`](https://deno.land/std/node/global.ts) が実行されることによって行われます。また、[Node ビルトインモジュール](https://github.com/denoland/deno_std/tree/main/node#supported-modules) がセットアップされるため、`fs` モジュールや `require()` などが使用できるようにになります。

### プライベートモジュール

GitHub などのプライベートリポジトリにあるモジュールをロードするのに、Bearer トークンの送信をサポートします。これには、環境変数 `DENO_AUTH_TOKENS` に `{token}@{hostname[:port]}`　という形式で指定します。

```bash title="例：DENO_AUTH_TOKENS"
# 単一のトークンの指定
DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land

# 複数のトークンの指定
DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land;f1e2d3c4b5a6@example.com:8080
```

### Import maps

Deno は、[Import maps](https://github.com/WICG/import-maps) をサポートします。例を以下に示します。

```json title="import_map.json"
{
   "imports": {
      "fmt/": "https://deno.land/std@0.94.0/fmt/",
      "/": "./",
      "./": "./"
   }
}
```

```ts title="src/color.ts"
import { red } from "fmt/colors.ts";  // https://deno.land/std@0.94.0/fmt/colors.ts
import { MyUtil } from "/util.ts";    // $root/util.js
```

`--import-map=<FILE>` CLI フラグで import maps を使うことが出来まます：

```bash
deno run --import-map=importmap.json  color.ts
```

## テスト (`deno test`)

:::info テストに関する公式ドキュメント

- [Testing | Deno Manual](https://deno.land/manual/testing)
- [deno.land/std@0.94.0/ testing](https://deno.land/std/testing)

:::

### テストファイルの名前

- `test.{ts, tsx, js, mjs, jsx}`
- `*.test.{ts, tsx, js, mjs, jsx}`
- `*_test.{ts, tsx, js, mjs, jsx}`

### テストコードの書き方

テストコードは `Deno.test()` を呼び出します。

```ts title="例：テストの書き方 "
import { assertEquals } from "https://deno.land/std@0.94.0/testing/asserts.ts";

// コンパクトな形式：名前と関数
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// コンパクトな形式：名前付き関数
Deno.test(function helloWorld3() {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// 長い形式：テスト定義
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});

// 「コンパクトな形式」に似ていますが、2番目の引数として追加の構成があります。
Deno.test("hello world #4", { permissions: { read: true } }, () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// 「長い形式」に似ていますが、2番目の引数としてテスト関数があります。
Deno.test(
  { name: "hello world #5", permissions: { read: true } },
  () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
);

// 「長い形式」に似ていますが、2番目の引数として名前付きテスト関数があります。
Deno.test({ permissions: { read: true } }, function helloWorld6() {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// 非同期関数を使った例
Deno.test("async hello world", async () => {
  const x = 1 + 2;

  await delay(100);

  if (x !== 3) {
    throw Error("x は 3 になるはずです");
  }
});
```

#### テストステップ

```ts title="例：テストステップ"
Deno.test("database", async (t) => {
  const db = await Database.connect("postgres://localhost/test");

  // ステップ名と関数を提供します
  await t.step("insert user", async () => {
    const users = await db.query(
      "INSERT INTO users (name) VALUES ('Deno') RETURNING *",
    );
    assertEquals(users.length, 1);
    assertEquals(users[0].name, "Deno");
  });

  // またはテスト定義を提供します
  await t.step({
    name: "insert book",
    fn: async () => {
      const books = await db.query(
        "INSERT INTO books (name) VALUES ('The Deno Manual') RETURNING *",
      );
      assertEquals(books.length, 1);
      assertEquals(books[0].name, "The Deno Manual");
    },
    ignore: false,
    // これらはデフォルトで親テストまたはステップの値になります
    sanitizeOps: true,
    sanitizeResources: true,
    sanitizeExit: true,
  });

  // ネストされたステップもサポートされています
  await t.step("update and delete", async (t) => {
    await t.step("update", () => {
      // このテストがスローされても、外部の promise は拒否されず、
      // 次のテストステップが実行されます
      throw new Error("Fail.");
    });

    await t.step("delete", () => {
      // ...etc...
    });
  });

  // ステップは、実行されたかどうかを示す値を返します
  const testRan = await t.step({
    name: "copy books",
    fn: () => {
      // ...etc...
    },
    ignore: true, // 無視されたため、`false`を返します
  });

  // 兄弟ステップで消毒剤が無効になっている場合、ステップを同時に実行できます
  const testCases = [1, 2, 3];
  await Promise.all(testCases.map((testCase) =>
    t.step({
      name: `case ${testCase}`,
      fn: async () => {
        // ...etc...
      },
      sanitizeOps: false,
      sanitizeResources: false,
      sanitizeExit: false,
    })
  ));

  db.close();
});
```

### アサーション

```ts title="例：全アサーションのインポート"
import {
  equal,
  assert,
  assertEquals, assertNotEquals,
  assertStrictEquals,
  assertStringIncludes,
  assertMatch, assertNotMatch,
  assertArrayIncludes,
  assertObjectMatch,
  assertThrows, assertThrowsAsync,
  unimplemented,
  unreachable,
} from "https://deno.land/std@0.94.0/testing/asserts.ts";
```

### テストの実行

テストは `deno test` コマンドが担います。

```bash title="例：テスト実行のコマンド"
# 現在のディレクトリとそのサブディレクトリ内のすべてのテストを実行
eno test

# util ディレクトリ内のすべてのテストを実行
eno test util/

# my_test.ts のみをテストを実行
eno test my_test.ts


# テストオプションの利用...

# テスト名が「test」を含むテストをフィルタリング
eno test --filter "test" tests/

# テストカバレッジを作成する
deno test --coverage
```

### Doc テスト

コードの Doc にある example をテストすることができます。

````ts title="foo.ts"
/**
 * # Examples
 *
 * ```ts
 * import { foo } from "./foo.ts";
 * ```
 */
export function foo(): string {
return "foo";
}
````

```bash title="例：Doc テスト"
deno test --doc foo.ts
```

## コードフォーマット (`deno fmt`)

```bash title="例：コードフォーマット"
# format all supported files in the current directory and subdirectories
deno fmt
# format specific files
deno fmt myfile1.ts myfile2.ts
# format all supported files in specified directory and subdirectories
deno fmt src/
# check if all the supported files in the current directory and subdirectories are formatted
deno fmt --check
# format stdin and write to stdout
cat file.ts | deno fmt -
```

### フォーマット対象となる拡張子

- JavaScript (`.js`, `.jsx`)
- TypeScript (`.ts`, `.tsx`)
- マークダウン (`md`, `.markdown`)
- JSON (`.json`, `.jsonc`)

### コードを除外

コードに `deno-fmt-ignore` コメントを含めることで、フォーマットの対象から外すことができます。

```ts title="例：deno-fmt-ignore"
// deno-fmt-ignore
export const identity = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
];
```

### フラグ

| フラグ                                            | 内容                      | デフォルト    |
|------------------------------------------------|-------------------------|----------|
| `--options-use-tabs`                           | タブを使用するかどうか             | `false`  |
| `--options-line-width`                         | コード行の幅                  | `80`     |
| `--options-indent-width`                       | インデントの文字数               | `2`      |
| `--options-single-quote`                       | シングルクォーと使用する角か          | `false`  |
| `--options-prose-wrap={always,never,preserve}` | 散文をMarkdownファイルでラップする方法 | `always` |

## モジュールバンドル (`deno bundle`)

```bash title="例：モジュールバンドル"
deno bundle src/main.ts bundle.ts
```

## ドキュメント生成 (`deno doc`)

```bash title="例：ドキュメント生成"
deno doc --json src/main.ts
```

## 依存関係検査 (`deno info`)

`deno info [URL]` を実行することで、ES モジュールの依存関係を確認することができます。

```bash title="例：deno info"
$ deno info https://deno.land/std@0.67.0/http/file_server.ts
deno info https://deno.land/std@0.67.0/http/file_server.ts
Download https://deno.land/std@0.67.0/http/file_server.ts
...
local: /home/deno/.cache/deno/deps/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020
type: TypeScript
emit: /home/deno/.cache/deno/gen/https/deno.land/f57792e36f2dbf28b14a75e2372a479c6392780d4712d76698d5031f943c0020.js
dependencies: 23 unique (total 139.89KB)
https://deno.land/std@0.67.0/http/file_server.ts (10.49KB)
├─┬ https://deno.land/std@0.67.0/path/mod.ts (717B)
│ ├── https://deno.land/std@0.67.0/path/_constants.ts (2.35KB)
│ ├─┬ https://deno.land/std@0.67.0/path/win32.ts (27.36KB)
│ │ ├── https://deno.land/std@0.67.0/path/_interface.ts (657B)
│ │ ├── https://deno.land/std@0.67.0/path/_constants.ts *
...
│   ├── https://deno.land/std@0.67.0/http/server.ts *
│   └── https://deno.land/std@0.67.0/http/http_status.ts (5.93KB)
├─┬ https://deno.land/std@0.67.0/flags/mod.ts (9.54KB)
│ └── https://deno.land/std@0.67.0/_util/assert.ts *
└── https://deno.land/std@0.67.0/_util/assert.ts *
```

## Linter (`deno lint`)

### 構成フラグ

| フラグ               | 内容                                                     | デフォルト           |
|-------------------|--------------------------------------------------------|-----------------|
| `--rules-tags`    | 実行されるタグ名のリスト。空のリストはすべてのタグを無効にし、`include` のルールのみを使用します。 | `"recommended"` |
| `--rules-exclude` | 設定されたタグセットから除外されるルール名のリスト。同じルールが含まれている場合、それが実行されます。    | `[]`            |
| `--rules-include` | 実行されるルール名のリスト。同じルールが除外されている場合でも、実行されます。                | `[]`            |

## 継続的インテグレーション

Deno の組み込みツールを活用すると、CI パイプラインが簡単に設定できます。

### 基本的なパイプライン

```yaml
name: Build

on: push

jobs:
  build:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      - uses: denoland/setup-deno@v1.0.0
        with:
          deno-version: v1.x # Run with latest stable Deno.

      # 【フォーマット】
      # Check if the code is formatted according to Deno's default
      # formatting conventions.
      - run: deno fmt --check

      # 【Lint】
      # Scan the code for syntax errors and style issues. If
      # you want to use a custom linter configuration you can add a configuration file with --config <myconfig>
      - run: deno lint

      # 【テスト】
      # Run all test files in the repository and collect code coverage. The example
      # runs with all permissions, but it is recommended to run with the minimal permissions your program needs (for example --allow-read).
      - run: deno test --allow-all --coverage=cov/

      # 【カバレッジ】
      # This generates a report from the collected coverage in `deno test --coverage`. It is
      # stored as a .lcov file which integrates well with services such as Codecov, Coveralls and Travis CI.
      - run: deno coverage --lcov cov/ > cov.lcov
```

## 関連する外部リンク

- _公式_
  - 公式サイト［[deno.land](https://deno.land/)］［[deno-ja](https://deno-ja.vercel.app/)］
    - Manual［[deno.land](https://deno.land/manual)］［[deno-ja](https://deno-ja.vercel.app/manual)］
    - Standard Library［[deno.land](https://deno-ja.vercel.app/std)］［[deno-ja](https://deno-ja.vercel.app/std)］
    - Third Party Modules［[deno.land](https://deno.land/x)］［[deno-ja](https://deno-ja.vercel.app/x)］
  - [Deno Doc](https://doc.deno.land/)
  - [Deno Lnad - GitHub](https://github.com/denoland)
- _CDN_ 
  - [esm.sh](https://esm.sh/) – Deno用に特別に設計されたCDN
  - [Skypack](https://www.skypack.dev/) – インストールやビルドツールを使用せずに、最適化された npm パッケージを読み込みます
  - [UNPCKG](https://unpkg.com/) – “unpkg は、npm のすべてに対応する高速でグローバルなコンテンツ配信ネットワークです。これを使用して、次のようなURLを使用して、任意のパッケージから任意のファイルをすばやく簡単にロードします。”
  - [JSPN](https://jspm.org/) – “jspm は、インポートマップ用のモジュール CDN とパッケージ管理を提供します。npm のパッケージは、ブラウザに直接読み込まれ、追加のツールを使用せずに完全に最適化されます。”
- _フレームワーク_
  - [oak](https://oakserver.github.io/oak/) – “A middleware framework for handling HTTP with Deno 🐿️ 🦕”
  - [Aleph.js](https://alephjs.org/) – “The Fullstack Framework in Deno.”
- _ライブラリー_
  - [Discordeno](https://github.com/discordeno/discordeno) – “Discord API library for Deno”
- _非公式_
  - [Effective Deno (@uki00a)](https://zenn.dev/uki00a/books/effective-deno)