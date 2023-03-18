---
slug: /editorconfig
sidebar_label: EditorConfig
---

# EditorConfig


<figure class="inline-flex">


</figure>

[**EditorConfig**](https://editorconfig.org/) は、コーディングスタイルの定義ファイルの仕様であり、複数の開発者に対して一貫したコーディングスタイルを維持するためのものです。数多くのエディターがサポートしています。

そのため、[多数のプロジェクト](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig) で採用されています。

## サポートしているエディター

メジャーなエディターは全てサポートしています：

- Atom
- VSCode
- eclipse
- Emacs
- Vim
- Brackets
- Sublime Text
- JetBrains IDE
- [他多数](https://editorconfig.org/#download)

## 構成ファイル

**`.editorconfig`** という名前のファイルをプロジェクトに作成して共有します。

```text title="例：Python ファイルと JavaScript ファイルの行末スタイルとインデントスタイルを設定する"
# EditorConfigは素晴らしいです：https://EditorConfig.org

# 最上位の EditorConfig ファイル
root = true

# すべてのファイルを終了する改行を含む Unix スタイルの改行
[*]
end_of_line = lf
insert_final_newline = true

# ブレース拡張表記で複数のファイルに一致します。
# デフォルトの文字セットを設定
[*.{js,py}]
charset = utf-8

# 4スペースインデント
[*.py]
indent_style = space
indent_size = 4

# タブのインデント（サイズは指定されていません）
[Makefile]
indent_style = tab

# lib ディレクトリの下のすべてのJSのインデントオーバーライド
[lib/**.js]
indent_style = space
indent_size = 2

# package.json または .travis.yml のいずれかの正確なファイルと一致
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

### パターン

パターンは、`[patterns]` という風に、ブラケットで囲んで表現します。

使用可能なワイルドカードパターン：

| パターン | 説明 |
| --- | --- |
| `*` | パス区切り文字（`/`）を除く任意の文字列に一致します。 |
| `**` | 任意の文字列に一致します。 |
| `?` | 任意の1文字に一致します。 |
| `[name]` | `name` の任意の1文字に一致します。 |
| `[!name]` | `name` に含まれていない任意の1文字に一致します。 |
| `{s1,s2,s3}` | コンマで区切られた任意の文字列に一致します |
| `{num1..num2}` | `num1` と `num2` の間の任意の整数に一致します。ここで、`num1` と `num2` は正または負のいずれかになります。 |

### プロパティ

| プロパティ | 説明 | 値 |
| --- | --- | --- |
| `indent_style` | インデントスタイル | `tab`｜`space`｜`unset` |
| `indent_size` | インデント幅 | <em>整数</em>｜`unset` |
| `tab_width` | タブ幅 | <em>整数</em><br />｜`unset`（デフォルトは `indent_size` の値） |
| `end_of_line` | 改行文字 | `lf`｜`cr`｜`crlf`｜`unset` |
| `charset` | 文字セット | `latin1`｜`utf-8`｜`utf-8-bom`｜`utf-16be`｜`utf-16le`｜`unset` |
| `trim_trailing_whitespace` | 改行文字の前にある空白文字を削除する | `true`｜`false`｜`unset` |
| `insert_final_newline` | 保存時にファイルが改行で終了する | `true`｜`false`｜`unset` |
| `root` | `.editorconfig` ファイルがルートである | `true`｜`false`｜`unset` |
