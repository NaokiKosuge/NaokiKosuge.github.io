---
slug: /sass-style-rules
sidebar_label: スタイルルール
---

# 【Sass】スタイルルール（SCSS構文）

## プロパティ宣言

### ネスト

```scss title="色々なネスト"
// ネスト
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

// セレクターリスト
.alert, .warning {
  ul, p {
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
  }
}

// セレクターコンビネーター
h2 {
  + p {
    border-top: 1px solid gray;
  }
}
```

### 補間

補間（`#{}`）を使用して、変数や関数呼び出しなどの式からセレクターに値を挿入できます。

```scss {2} title="例：ミックスインで補間を活用する"
@mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    font-family: IconFont;
    font-variant: normal;
    font-weight: normal;
    content: $glyph;
  }
}

@include define-emoji("women-holding-hands", "👭");
```

```scss title="例：カスタムプロパティで補間を利用する" {6-8}
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}
```
ほとんどの場合、補間により、式がプロパティ値として使用された場合に使用されるのとまったく同じテキストが挿入されます。ただし、例外が1つあります。引用符で囲まれた文字列を囲む引用符は削除されます（引用符で囲まれた文字列がリストに含まれている場合でも）。これにより、SassScriptで許可されていない構文（セレクターなど）を含む引用符で囲まれた文字列を記述し、それらをスタイルルールに補間することができます：

```scss 
.example {
  unquoted: #{"string"};
  // →「unquoted: string;」へと変換される
}
```

## 親セレクター

ネストされたセレクターにおいて親セレクターを `&` で参照できます：

```scss title="例：BEM 構造での親セレクター"
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

## プレースホルダーセレクター

定義が CSS の出力に含まれないセレクターをプレースホルダーセレクターと言い、セレクタを `%` に続けて定義します：

```scss title="SCSS"
// この定義そのものは出力されない。
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```

↓

```css title="CSS"
.action-buttons, .reset-buttons {
  box-sizing: border-box;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 16px 0;
  width: 100%;
}
.action-buttons:hover, .reset-buttons:hover {
  border: 2px rgba(0, 0, 0, 0.5) solid;
}

.action-buttons {
  color: #4285f4;
}

.reset-buttons {
  color: #cddc39;
}
```