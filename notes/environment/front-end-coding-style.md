---
slug: /front-end-coding-style
sidebar_label: フロントエンドのコーディングスタイル
---

# フロントエンドのコーディングスタイル環境を構築する

## ポイント

1. 遵守するスタイルガイドを決定する。お勧めは「Airbnb JavaScript Style Guide」をベースとして、必要に応じて独自のルールを追加する。
   → [代表的な JavaScript スタイルガイド](#代表的な-javascript-スタイルガイド)
2. リンターをセットアップする。
   → [ESLint](#eslint)、[Stylelint](#stylelint)
3. コードフォーマッターをセットアップする。
   → [Prettier](#prettier)
4. リンターで静的解析を行いつつ、適宜（手動または保存時などのトリガー時）フォーマッターでコード整形を行っていく運用とする。

## 代表的な JavaScript スタイルガイド

汎用的なスタイル：

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [StandardJS](https://standardjs.com/)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)

限定的なスタイル：

- [Node.js Style Guide](https://github.com/felixge/node-style-guide)
- [jQuery JavaScript Style Guide](https://contribute.jquery.org/style-guide/js/)
- [WordPress JavaScript コーディング規約](https://ja.wordpress.org/team/handbook/coding-standards/wordpress-coding-standards/javascript/)

## ESLint

> [📄 eslint.org](https://eslint.org/docs)

ESLint は構成可能な JavaScript リンターです。JavaScript コードの問題を見つけて修正するのに役立ちます。

### 2つの構成方式

- **従来の構成方式**
- （実験的）新しい、フラット構成方式

| 項目                     | 従来の構成                                                                        | フラット構成                                       |
|------------------------|------------------------------------------------------------------------------|----------------------------------------------|
| 構成ファイル                 | `.eslintrc.{js/cjs/yaml/yml/json}` または `package.json` の `eslintConfig` プロパティ | `eslint.config.js`                           |
| 構成の探索                  | _構成のカスケーディング_ による                                                            | カレントディレクトリか最も近い上位のディレクトリの `eslint.config.js` |
| 構成のカスケーディング            | ファイルシステムベースや `overrides` など                                                  | `eslint.config.js` での構成オブジェクトの配列             |
| `ecmaVersion` のデフォルト   | `5`                                                                          | `latest`                                     |
| `sourceType` のデフォルト    | `script`                                                                     | `module` (ESM) か `commonjs` (CommonJS)       |
| 対象ファイルのデフォルト	          | `*.js`                                                                       | `*.js`、`*.mjs`、`.cjs`                        |
| JavaScriptの解釈に関するオプション | `globals`, `ecmaVersion`, `sourceType`, `env` など                             | `languageOptions` に集約                        |
| プラグインの利用               | 文字列での指定                                                                      | モジュールとして明示的に `import`                        |

#### 従来の構成方式

1. インストール
   ```bash
   npm i -D eslint
   npm init @eslint/config
   ```

2. 構成ファイルを記述する（`.eslintrc.{js|cjs|yaml|yml|json}` または `package.json` の `eslintConfig` プロパティ）
3. 【オプション】構成除外ファイル `.eslintignore` の作成

##### 構成

```js title="【例】.eslintrc.cjs – React × TypeScript × airbnb"
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off', // named exportがエラーになるので使えるようにoff
    'import/extensions': [ // importのときに以下の拡張子を記述しなくてもエラーにしない
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [ // アロー関数以外受け付けない設定
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [ //jsx形式のファイル拡張子をjsxもしくはtsxに限定
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
  settings: {
    'import/resolver': { //importするファイルをjsだけではなく、tsを含むファイルを許可する
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
```

トップレベルプロパティ：

- `root` – 構成のカスケードにおいてトップレベルであることを示します。
- `env` – どのようなグローバルオブジェクトを宣言なしで参照可能にするかを ESLint
  に知らせるための項目です。一覧は [Specifying Environments](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)
  を参照して下さい。
- `parser` – JavaScript 以外の言語を解析できるようにさせる場合
    - [`"@typescript-eslint/parser"`](https://typescript-eslint.io/) – TypeScript を使用する場合に指定します。
- `parserOptions` – パーサーの設定を行う項目です。利用するパーサーごとに設定すべき項目やデフォルト値が変化することに注意して下さい。
    - `ecmaVersion` – `"latest"` や `2021` など
    - `sourceType: "module"` – `import/export` を使用する場合
    - `exmaFeatures: { jsx: true }` – JSX を使用する場合
    - `project: "./tsconfig.json"` – TypeScript の場合、型認識に必要
- `plugins`
    - [`"react"`](https://github.com/jsx-eslint/eslint-plugin-react) – React を使用する場合
    - [`"@typescript-eslint"`](https://typescript-eslint.io/) – TypeScript を使用する場合に含めます。
- `extends` – 利用するルールセットを指定します。
    - `"eslint:recommended"` – ESLint 標準
    - [`"plugin:react/recommended"`](https://github.com/jsx-eslint/eslint-plugin-react)
    - `"standard"`
    - `"airbnb"`
    - `"airbnb-typescript`
    - [`"prettier"`](https://github.com/prettier/eslint-config-prettier) – ESLint を Prettier と共に利用する場合、最後に追加します。
- [`rules`](https://eslint.org/docs/latest/rules/) – 個々のリントルールを設定します。`extens` で指定したルールセットはオーバーライドされます。
- `settings` – 各プラグインが共有する設定。

##### 構成の除外

`.eslintignore` を作成せずとも次の暗黙の除外ルールが適用されます。

- `node_modules/`
- ドットファイル (`.eslintrc.*` を除く) とドットディレクトリおよびその内容

#### フラット構成方式

プロジェクトルートに `eslint.config.js` を作成し、構成を記述します。まだ実験的な段階であり、基本的には採用しませんが、将来的には主流になっていくかもしれません。

### リンターの適用

- コマンド
  ```bash
  npx eslint .
  ```
- スクリプト
  ```json title="package.json"
  {
    "scripts": {
      "lint": "eslint ."
    }
  }
  ```
- [PhpStorm](https://pleiades.io/help/phpstorm/eslint.html)

## Stylelint

> [📄 stylelint.io](https://stylelint.io/)

[Stylelint.io](https://stylelint.io/) は構成可能な CSS リンターです。エラーを回避し、規則を適用するのに役立ちます。

### セットアップ

1. コアパッケージのインストール
   ```shell
   npm i -D stylelint
   ```
2. ベースとする構成のインストール
    - [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
    - [`stylelint-config`](https://www.npmjs.com/package/stylelint-config-standard-scss)
3. `.stylelintrc.json` の作成
   ```json title="【例】.stylelintrc.json"
   { 
     "extends": ["stylelint-config-standard"]
   }
   ```

### リンターの適用

- コマンド
  ```shell
  npx stylelint "**/*.css"
  ```
- スクリプチ
  ```json title="package.json"
  {
    "scripts": {
      "lint": "stylelint '**/*.css'"
    }
  }
  ```
- [PhpStorm](https://pleiades.io/help/phpstorm/using-stylelint-code-quality-tool.html#ws_stylelint_lint_your_code)

## Prettier

> [📄 prettier.io](https://prettier.io/docs/en/index.html)

[Prettier](https://prettier.io/)
はウェブフロントエンド言語（JS系、CSS系、HTML系、GraphQL、Markdown系、YAML）に特化したコードフォーマッターです。[プラグイン](https://prettier.io/docs/en/plugins.html#community-plugins)
を利用するとそれ以外の言語にも対応できます。

### リンターとの併用

リンターと併用する場合が殆どだと思いますが、その場合、競合する可能性のあるリントルールをオフにする設定をしておき、Prettier を優先させます。そのためのツールがあります：

- ESLint:  [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
- Stylelint: [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)

大抵の場合、ESLint と共に使用されます。Prettier は設定することが少ないですが、ESLint と競合する内容も含まれるため、[`
eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) を用いて競合するルールをオフにします。

### セットアップ

1. インストール

    ```bash
    npm i -D prettier
    ```
2. 次のいずれかで[構成](https://prettier.io/docs/en/options.html)をオーバーライドする。
    - `package.json` の `"prettier"` キー
    - JSON/YAML で書かれた `.prettierrc` ファイル
    - `.prettierrc.{json|yml|yaml|json5}` ファイル
    - `module.exports` でエクスポートされる `.prettierrc.{js|cjs}` または `.prettierrc.config.{js|cjs}`
    - `.prettierrc.toml`
3. [`.prettierignore`](https://prettier.io/docs/en/ignore.html) を構成

特定のファイルやフォルダーを無視します。但し、この指定が無くとも、バージョン管理システムディレクトリと `node_modules/`
は無視されます。ファイルの一部を無視するには、`pretty-ignore` コメントを使用します。

   ```ignorelang title="【例】.prettierignore"
   ../../build
   coverage
   ```

### コード整形を行う

- コマンド
  ```shell
  npx prettier --write .
  ```
- スクリプト
  ```json title="package.json"
  {
    "scripts": {
      "format": "prettier --write ."
    }
  }
  ```
- [PhpStorm](https://pleiades.io/help/phpstorm/prettier.html)