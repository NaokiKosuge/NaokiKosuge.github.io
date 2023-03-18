---
slug: /prettier
sidebar_label: Prettier
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prettier

Prettier はコードフォーマッターで、多数の言語やエディターに対応しています。

Prettier は、コードを整形することに専念するツールでありスタイルガイドを定義するものではありません（つまり ESLint とは共存可能です）。これは次の例を見るといち早く理解できます:

```js
// 整形前
const user = {  name: "John Doe",
  age: 30
};
// 整形後——Prettier は、コードを1行に整形します。
const user = { name: "John Doe", age: 30 };

// ---

// 整形前
const user = {
  name: "John Doe", age: 30 };
// 整形後——Prettier は、コードを複数行に整形します。
const user = {
  name: "John Doe",
  age: 30,
};
```

## CLI での始め方

:::note エディターでの利用

CLI での実行は、継続的インテグレーション (CI) のために必要なことですが、エディターを使用する場合は、専用のプラグインを利用することを推奨します。

:::

1. インストール

  ```bash
  npm i -DE prettier
  ```

  :::info `-E` オプションの意味

  `-E` オプションは、`--save-exact` オプションの省略形で、`package.json` にバージョンを固定して記述します。
  
  :::
  
2. 構成ファイルを作成

  ```bash
  echo {}> .prettierrc.json
  ```

  また、必要に応じて `.prettierignore` ファイルを作成します:

3. Prettier でフォーマットを行う

  ```bash
  npx prettier --write src
  ```

## ESLint との統合

ESLint と共に使用する場合は、[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) を適用します。

```bash
npm i -D eslint-config-prettier
```

```js title=".eslintrc.js"
module.exports = {
  extends: [
    "some-other-config-you-use",
    "prettier",
  ]
};
```

## Git フックで利用する

`git add` の際に Prettier を実行することができます。これには、[`husky`](https://github.com/typicode/husky) と [`lint-staged`](https://github.com/okonet/lint-staged) が必要です。

1.

  ```bash
  # パッケージのインストール:
  npm i -D husky lint-staged
  # Git フックを有効にする (これにより .husky ディレクトリが作成される):
  npx husky install
  # インストール後にGitフックを自動的に有効にする:
  npm set-script prepare "husky install"
  # フックを作成:
  npx husky add .husky/pre-commit "npx lint-staged"
  ```

2. `package.json` に追加

  ```json
  {
    "lint-staged": {
      "**/*": "prettier --write --ignore-unknown"
    }
  }
  ```

## プラグイン

<!-- TODO: プラグインの使い方を記載する -->

プラグインのパッケージ名は次のいずれかです:

- `@prettier/plugin-*`
- `prettier/plugin-*`
- `@<scope>/prettier-plugin-*`

主なプラグイン:

- [`@prettier/plugin-php`](https://github.com/prettier/plugin-php)
- [`@prettier/plugin-ruby`](https://github.com/prettier/plugin-ruby)
- [`@prettier/plugin-xml
`](https://github.com/prettier/plugin-xml)
- [`prettier-plugin-svelte`](https://github.com/UnwrittenFun/prettier-plugin-svelte)
- [`prettier-plugin-sh`](https://github.com/rx-ts/prettier/tree/master/packages/sh)

## 構成ファイル

### 構成ファイルの形式

Prettier の構成は、次に挙げる順番に検索されます:

- `package.json` の `prettier` オプション
- JSON または YAML で記述された`.prettierrc` という名前のファイル
- `.prettierrc.{json|yml|yaml|json5}` ファイル
- `module.exports` でオブジェクトをエクスポートした `.prettierrc.{js|cjs|config.js|config.cjs}`
- `.prettierrc.toml` ファイル

例:

<Tabs>
<TabItem value="package.json" default={true}>

```json title="package.json"
{
  "prettier": {
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
  }
}
```

</TabItem>
<TabItem value="JSON">

```json title="「.prettierrc」または「.prettierrc.json」または「.prettierrc.json5」"
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

</TabItem>
<TabItem value="JS">

```js title="「prettier.config.js」または「.prettierrc.js」"
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```

</TabItem>
<TabItem value="YAML">

```yaml title="「.prettierrc」または「.prettierrc.yml」または「.prettierrc.yaml」"
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```

</TabItem>
<TabItem value="TOML">

```toml title=".prettier.toml"
trailingComma = "es5"
tabWidth = 4
semi = false
singleQuote = true
```

</TabItem>
</Tabs>

### 構成オプション

Prettier にはフォーマットのためのオプションがいくつか用意されていますが、基本はデフォルトのままで利用することを推奨します。

:::info オプション一覧

構成オプションの一覧は [こちら](/notes/prettier-options) を参照してください。

:::

## コードの無視

### `.prettierignore` ファイル

ESLint の `.eslintignore` ファイルと同様、[gitignore構文](https://git-scm.com/docs/gitignore#_pattern_format) 使用し、無視するディレクトリ/ファイルを指定できます:

```
# Ignore artifacts:
build
coverage

# Ignore all HTML files:
*.html
```

### コメントによる指定

各言語、次のように「`prettier-ignore`」をコードの前に記述することで、そのコードは無視されます。

```js
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

## CLI

### インストール

```bash
npm i -D prettier
```

### 構文

```bash
prettier [options] [file/dir/glob ...]
```

### 主要なオプション

#### `--write`

ファイルをインプレースでフォーマットします。ただし、デフォルトでは `node_modules` ディレクトリは無視します。

#### `--check`

ファイルがフォーマットされているかチェックします。

終了コード:

| コード | 情報 |
| --- | --- |
| `0` | 全てが適切にフォーマットされている。 |
| `1` | 何かが正しくフォーマットされていない。 |
| `2` | Prettier に問題がある。 |

## Prettier の構成オプション

:::note 公式ドキュメント

こちらのドキュメントは [公式ドキュメント](https://prettier.io/docs/en/options.html) の内容を抜粋しています。

:::


### 印刷幅

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `80` | `--print-width <int>` | `printWidth: <int>` |

### タブ幅

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `2` | `	--tab-width <int>` | `tabWidth: <int>` |

### タブ

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--use-tabs` | `useTabs: <bool>` |

### セミコロン

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `true` | `--no-semi` | `semi: <bool>` |

### 引用符

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--single-quote` | `singleQuote: <bool>` |

### プロパティの引用符

有効なオプション:

- `"as-needed"`: 必要な場合のみ引用符で囲む。
- `"consistent"`: オブジェクト内の少なくとも1つのプロパティに引用符が必要な場合は、すべてのプロパティを引用符で囲む。
- `"preserve"`: すべて引用符で囲む。

:::caution 文字列キーと数値キー

オブジェクトプロパティが数値キーの場合は引用符で囲みません。

:::

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"as-needed"</code></td>
<td><code>--quote-props &lt;as-needed|consistent|preserve></code></td>
<td><code>quoteProps: "&lt;as-needed|consistent|preserve>"</code></td>
</tr>
</tbody>
</table>

### JSXの引用符

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--jsx-single-quote` | `jsxSingleQuote: <bool>` |

### 末尾のコンマ

有効なオプション:

- `"es5"`: ES5 で有効な場合は末尾にコンマを付ける。TypeScript の `type` パラメーターでは末尾にコンマはつけない。
- `"none"`: 末尾にコンマを付けない。
- `"all"`: 可能な限り末尾にコンマを付ける。TypeScript の `type` パラメータでは末尾にコンマを付ける。

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"es5"</code></td>
<td><code>--trailing-comma &lt;es5|none|all></code></td>
<td><code>trailingComma: "&lt;es5|none|all>"</code></td>
</tr>
</tbody>
</table>

### ブラケットの間隔

有効なオプション:

- `true`: （例）`{ foo: bar }`
- `false`: （例）`{foo: bar}`

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `true` | `--no-bracket-spacing` | `bracketSpacing: <bool>` |

### ブラケットライン

有効なオプション:

- `true`: （例)

  ```jsx
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}>
    Click Here
  </button>
  ```

- `false`: （例）

  ```jsx
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}
  >
    Click Here
  </button>
  ```

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--bracket-same-line` | `bracketSameLine: <bool>` |

### アロー関数の括弧

有効なオプション:

- `"always"`: 常に括弧で囲む。（例）`(x) => x`
- `"avoid"`: 可能であれば括弧を省略する。（例）`x => x`

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"always"</code></td>
<td><code>--arrow-parens &lt;always|avoid></code></td>
<td><code>arrowParens: "&lt;always|avoid>"</code></td>
</tr>
</tbody>
</table>

### 範囲

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `0` | `--range-start <int>` | `rangeStart: <int>` |
| `Infinity` | `--range-end <int>` | `rangeEnd: <int>` |

### パーサー

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| なし | `--parser <string>`<br />`--parser ./my-parser` | `parser: "<string>"`<br />`parser: require("./my-parser")` |

### ファイルパス

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| なし | `--stdin-filepath <string>` | `filepath: "<string>"` |

### プラグマ

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--require-pragma` | `requirePragma: <bool>` |

### プラグマを挿入

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--insert-pragma` | `insertPragma: <bool>` |

### 散文のラップ

有効なオプション:

- `"always"`: プリント幅を超える場合は、散文をラップする。
- `"never"`: 散文を含まない。
- `"preserve"`: 散文をそのままラップする。

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"preserve"</code></td>
<td><code>--prose-wrap &lt;always|never|preserve></code></td>
<td><code>proseWrap: "&lt;always|never|preserve>"</code></td>
</tr>
</tbody>
</table>

### HTMLにおけるスペースの感度

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"css"</code></td>
<td><code>--html-whitespace-sensitivity &lt;css|strict|ignore></code></td>
<td><code>htmlWhitespaceSensitivity: "&lt;css|strict|ignore>"</code></td>
</tr>
</tbody>
</table>

### Vueファイルのスクリプトとスタイルタグのインデント

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `false` | `--vue-indent-script-and-style` | `vueIndentScriptAndStyle: <bool>` |

### 行の終わり

<table>
<thead>
<tr>
<th>デフォルト</th>
<th>CLI オーバーライド</th>
<th>API オーバーライド</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"lf"</code></td>
<td><code>--end-of-line &lt;lf|crlf|cr|auto></code></td>
<td><code>endOfLine: "&lt;lf|crlf|cr|auto>"</code></td>
</tr>
</tbody>
</table>

### 埋め込み言語フォーマット

| デフォルト | CLI オーバーライド | API オーバーライド |
| --- | --- | --- |
| `"auto"` | `--embedded-language-formatting=off` | `embeddedLanguageFormatting: "off"` |

## エディターで Prettier を使う

### WebStorm

:::note

公式ガイドは [こちら](https://pleiades.io/help/webstorm/prettier.html)

:::

WebStorm の Prettier 連携機能は次の事柄を前提とします:

- コンピューターに Node.js がインストールされていること
- プロジェクトで Node.js インタープリターが構成されていること

  **設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）を開き、**言語 & フレームワーク | Node.js と NPM** に移動します。**Node インタープリター**フィールドには、デフォルトのプロジェクト Node.js インタープリターが表示されます。

- Prettier とプラグインなどの関連パッケージがインストールされていること (`npm i -DE prettier`)

#### プロジェクトに　Prettier をインストールして構成する

1. パッケージをインストールする

  ```bash
  npm i -DE prettier
  ```

2. **設定/環境設定**ダイアログ（<kbd>⌘,</kbd>）で、**言語およびフレームワーク | JavaScript | Prettier** に移動します。

3. **Prettier パッケージリスト**から、使用する `prettier` インストールを選択します。

   また、ここでは次の動作を指定できます:

    - フォーマット対象とするファイルのグロブパターン
    - 「コードの再フォーマット」（<kbd>⌥⌘L</kbd>）に Prettier を使用するか
    - コードの保存時に Prettier を自動実行するか

      :::caution 特定のディレクトリに限定する

      フォーマット対象を特定のディレクトリに限定させたい場合は、グロブで指定する必要があります。（例）`src/**/*.{js,ts,jsx,tsx}`

      :::

