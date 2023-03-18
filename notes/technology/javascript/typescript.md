---
slug: /typescript
sidebar_label: TypeScript
---

# TypeScript

![](../../../static/img/notes/typescript.bg.jpeg)

> TypeScript は、型の構文を備えた JavaScript です。

## Node.js 環境における TypeScript プロジェクト

1. パッケージのインストール
   > ```bash
   > # TypeScript コア
   > npm i -D typescript
   > # 型定義ファイル
   > npm i -D @types/...
   > ```
2. 構成ファイル (`tsconfig.json`) の作成
3. マニフェスト (`package.json`) の変更
4. コンパイル

### 開発に役立つパッケージ

- [`typescript`](https://www.npmjs.com/package/typescript) – TypeScript コンパイラ
- [`ts-node`](https://www.npmjs.com/package/ts-node) – Node.js 用の TypeScript 実行エンジンおよびREPL

### 型定義ファイル (`.d.ts`)

## 型階層

- Unknown
  - Any
    - Never
    - Void
      - Undefined 
    - Null
    - Number
      - Number Enum
    - Bigint
    - String
      - String Enum
    - Symbol
    - Object
      - Array
        - Tuple
      - Function
      - Constructor

### Unknown

### Never と Void

## 一般的な型

- プリミティブ
  - `string`
  - `number`
  - `boolean`
- `Array<T>`, `T[]`
- `any`
- Union (`T | U | V | ...`)
- 型エイリアス (`type T = ...;`)
- インターフェース (`interface I { ... }`)
- 列挙型 (`enum`)

:::note 型エイリアスとインターフェースの違い

型エイリアスとインターフェースは非常によく似ており、多くの場合、自由に選択することができます。インターフェイスのほぼすべての機能が型でも利用できますが、重要な違いは、常に拡張可能なインターフェイスに対して、型は新しいプロパティを追加するために再オープンすることができないという点です。

<details>
<summary>【比較】拡張の違い</summary>

```ts title="インターフェースの拡張" {1-7}
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: 'Ted',
  honey: true,
}
```

```ts title="交差による型の拡張" {1-7}
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: 'Ted',
  honey: true,
}
```
</details>

<details>
<summary>【比較】プロパティの追加の違い</summary>

```ts title="インターフェース宣言のマージ" {1-7}
interface User {
  name: string
}

interface User {
  age:  number
}

const user: User = {
  name: 'John',
  age: 30,
}
```
```ts title="エラー：作成後にタイプを変更することはできません" {1-7}
type user = {
  name: string
}

type User = {
  age: number
}

// Error: Duplicate identifier 'User'.
```
</details>

:::

## ユーティリティ型

TypeScript は、一般的な型変換を容易にするためのいくつかのユーティリティ型を提供します。これらのユーティリティはグローバルに利用できます：

- [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) – `T` のすべてのプロパティをオプションに設定した型を構築します。
- [`Required<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) – `T` の持つ全てのプロパティを持つ型を構築します。
- [`Readonly<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) – `T` のすべてのプロパティが読み取り専用に設定されたタイプを構築します。
- [`Record<K, T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) – キーが `K` で、値が `T` であるオブジェクトタイプを構築します。 
- [`Pick<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys) – `T` からキー `K` のセットを選択した型を構築します。
- [`Omit<T, K>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) – `T` からキー `K` を取り除いた型を構築します。
- [`Exclude<U, E>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers) – Union 型 `U` から Union 型 `E` を取り除いた型を構築します。
- [`Extract<T, U>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) – Union 型 `T` から Union 型　`U` を取り出した型を構築します。
- [`NonNullable<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype) – `T` から `null` 及び `undefined` を取り除いた型を構築します。
- [`Parameters<F>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) – 関数型 `F` のパラメーターで使用される型からタプル型を構築します。
- [`ConstructorParameters<C>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype) – コンストラクター関数型 `C` のパラメーターで使用される型からタプル型を構築します。
- [`ReturnType<F>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype) – 関数型 `F` の戻り型で構成される型を構築します。
- [`InstanceType<C>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype) – コンストラクタ型 `C` のインスタンス型で構成される型を構築します。
- [`ThisParameterType<F>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype) – 関数型 `F` の `this` パラメーター型を抽出します。
- [`OmitThisParameter<F>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype) – 関数型 `F` の `this` パラメーター型を取り除いた型を構築します。
- [`ThisType<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype)
- [`Uppercase<StringType>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype) – 文字列型 `Stringtype` を大文字にした型構築します。
- [`Lowercase<StringType>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#lowercasestringtype) – 文字列型 `Stringtype` を小文字にした型構築します。
- [`Capitalize<StringType>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype)
- [`Uncapitalize<StringType>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#uncapitalizestringtype)

## JSDoc アノテーション

- Type
  - `@type`
  - `@param` (`@arg`, `@argument`)
  - `@returns` (`@return`)
  - `@typedef`
  - `@callback`
  - `@template`
- Class
  - `@public`, `@private`, `@protected`, `@readonly`
  - `@override`
  - `@extends` (`@augments`)
  - `implements`
  - `@class` (`@constructor`)
  - `@this`
- Documentation
  - `@deprecated`
  - `@see`
  - `@link`
- Other
  - `@enum`
  - `@author`

## TSConfig

> 🔗 [TypeScript: TSConfig Reference - Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig)

ディレクトリ内の TSConfig ファイルは、そのディレクトリが TypeScript または JavaScript プロジェクトのルートであることを示しています。 TSConfig ファイルは `tsconfig.json` または `jsconfig.json` のいずれかであり、どちらも同じ構成変数のセットを持っています。

- `files`
  > プログラムに含めるファイルの許可リスト
- `extends`
  > 継承元の別の構成ファイルへのパスを含む文字列
- `include`
  > プログラムに含めるファイル名またはパターンの配列を指定します。
- `exclude`
  > `include` を解決するときにスキップする必要があるファイル名またはパターンの配列を指定します。
- `references`
  > TypeScriptプログラムをより小さな部分に構造化する方法
- ⇣ [`compilerOptions`](#compileroptions)
  >言語がどのように機能するか

<details>
<summary><code>tsc --init</code></summary>

```json title="tsconfig.json"
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

</details>

### `compilerOptions`



## 外部ドキュメント

- [typescriptlang.org](https://www.typescriptlang.org/ja/)
  - [ハンドブック](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [リファレンス](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)
