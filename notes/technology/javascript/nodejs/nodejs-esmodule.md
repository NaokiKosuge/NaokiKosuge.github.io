---
slug: /nodejs-esmodule
sidebar_label: ECMAScript モジュール
---

# 【Node.js】ECMAScript モジュール

## 有効化

Node.js で ES モジュールを有効化するには、

- `pckage.json` の `"type"` フィールドを `"module"` にします。これにより、`.js` ファイルは、ES モジュールとして扱われます。

  ```json title"package.json"
  {
    "type": "module"
  }
  ```

- ファイルの拡張子を `.mjs` にします。これは、`package.json` に関係なく ES モジュールとして扱われます。
- `node` コマンドを実行する際、`--input-type=module` フラグを使用します。

```bash
node --input-type=module main.js
```

## インポート

### インポートの巻き上げ

ES モジュールの `import` 文は、静的な性質を持つことに関連して、実行時にファイルの先頭に巻き上げらます。つまり、`import` 文は、記述箇所に関わらず、モジュールの本文よりも先行して実行されます。

## エクスポート
