---
slug: /tailwindcss
sidebar_label: Tailwind CSS
---

# Tailwind CSS

> 🔗 [tailwindcss.jp](https://tailwindcss.jp/)

## 開始方法

1. パッケージのインストール
  > ```bash
  > npm i -D tailwindcss
  > ```
2. Tailwind 構成ファイルの作成
  > ```bash
  > npx tailwindcss init -p
  > ```
  > これにより、次の2つのファイルが作成されます：
  > - ```js title="tailwind.config.js"
  >   module.exports = {
  >     content: [],
  >     theme: {
  >       extend: {},
  >     },
  >     plugins: [],
  >   }
  >   ```
  > - ```js title="postcss.config.js"
  >   module.exports = {
  >     plugins: {
  >       tailwindcss: {},
  >       autoprefixer: {},
  >     },
  >   }
  >   ```
3. CSS に Tailwind を追加する
  > ```css title="CSS"
  > @tailwind base;
  > @tailwind components;
  > @tailwind utilities;
  > 
  > /* ↓ スタイルを記述 */
  > ```
4. ビルド実行
  > - CLI
  >   > ```bash
  >   > npx tailwindcss build styles.css -o output.css
  >   > # ✅ 自動で postcss.config.js が読み込まれます
  >   > ```
  > - webpack
  >   > [`postcss-loader`](https://www.npmjs.com/package/postcss-loader) を使用します。
  >   > ```js title="webpack.config.js"
  >   > module.exports = {
  >   >   // ...
  >   >   module: {
  >   >     rules: [
  >   >       {
  >   >         // ...
  >   >         use: [
  >   >           'style-loader',
  >   >           'css-loader',
  >   >           'postcss-loader',  // 自動で postcss.config.js が読み込まれます
  >   >         ],
  >   >       },
  >   >     ],
  >   >   },
  >   > };
  >   > ```
  > - gulp
  >   > [`gulp-postcss`](https://www.npmjs.com/package/gulp-postcss) を使用します。
  >   > ```js title="gulpfile.js"
  >   > const gulp = require('gulp');
  >   > exports.css = () => {
  >   >   const postcss = require('gulp-postcss');
  >   > 
  >   >   return gulp.src('src/style.css')
  >   >     .pipe(postcss(/* 自動で postcss.config.js が読み込まれます */))
  >   >     .pipe(gulp.dest('./dest'));
  >   > };
  >   > ```

## コアコンセプト

### ユーティリティクラス

ユーティリティクラスのカテゴライズ：

- レイアウト
- フレックスボックス
- グリッド
- ボックスの配置
- スペース
- サイズ
- タイポグラフィ
- 背景
- ボーダー
- テーブル
- トランジションとアニメーション
- トランスフォーム
- インタラクティブ
- アクセシビリティ
- 公式プラグイン

### ブレークポイント

レスポンシブデザインのためのユーティリティプレフィックスがあります。これらはモバイルファーストの戦略をとっています。

- (プレフィックスなし)
  > すべてのデバイス
- `sm:`
  > 大型スマートフォンの縦長画面幅以上の程度
- `md:`
  > スマートフォンの横長画面幅以上の程度
- `lg:`
  > ラップトップの画面幅以上の程度
- `xl:`
  > 大型ディスプレイの画面幅以上の程度

### 擬似クラスバリアント

> 🔗 [擬似クラスバリアント - Tailwind CSS](https://tailwindcss.jp/docs/pseudo-class-variants)

ユーティリティに、擬似クラスをプレフィックスとして付けることで、擬似クラス状態のユーティリティを実現できます。

組み込みでサポートされる擬似クラスプレフィックス：

- `hover:`
- `focus:`
- `active:`
- `group-hover:`
  > `.group` クラスを持つ要素の個要素に用いることで、グループの**ホバー時**にユーティリティが有効になります。
- `group-focus:`
  > `.group` クラスを持つ要素の個要素に用いることで、グループの**フォーカス時**にユーティリティが有効になります。
- `focus-within:`
  > 子要素にフォーカスがある場合にのみユーティリティが適用されます。
- `motion-safe:` 
  > [`prefers-reduced-motion`](https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion) メディア機能が `no-preference` と一致する場合にのみユーティリティを適用します。
- `motion-reduce:`
  > [`prefers-reduced-motion:`](https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion) メディア機能が `reduce` と一致する場合にのみユーティリティを適用します。
- `disabled:`
- `visited:`
- `checked:`
- `first:`
- `last:`
- `odd:`
- `even:`

### ベーススタイル

Tailwind では、ベーススタイルはプリフライトによって適用されます。

「**プリフライト**」は、[normalize.css](https://github.com/necolas/normalize.css/) の上に構築されたベーススタイルのセットです。

#### プリフライトの拡張

```css title="【例】プリフライトの拡張" {3-14}
@tailwind base;

h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}

@tailwind components;

@tailwind utilities;
```

#### プリフライトを無効にする

```js title="プリフライトを無効にする" {2-4}
module.exports = {
  corePlugins: {
    preflight: false,
  }
}
```

### ディレクティブ

- `@tailwind`
  > Tailwind の `base`, `components`, `utilities`, および `screens` スタイルを CSS に挿入します。
  > ```css title="【例】@tailwind ディレクティブ"
  > /** Tailwind のベーススタイルとプラグインによって登録されたベーススタイルが挿入されます。 */
  > @tailwind base;
  > 
  > /** Tailwind のコンポーネントクラスとプラグインによって登録されたコンポーネントクラスが挿入されます。 */
  > @tailwind components;
  > 
  > /** Tailwind のユーティリティクラスとプラグインによって登録されたユーティリティクラスが挿入されます。 */
  > @tailwind utilities;
  > 
  > /**
  >  * Tailwind が各ユーティリティのレスポンシブバリエーションを注入する場所を制御します。
  >  *
  >  * 省略した場合、Tailwind はデフォルトでこれらのクラスをスタイルシートの最後に追加します。
  >  */
  > @tailwind screens;
  > ```
- `@apply`
  > 既存のユーティリティクラスを独自のカスタム CSS にインライン化します。
  > ```css title="【例】@apply ディレクティブ"
  > .btn {
  >   @apply font-bold py-2 px-4 rounded;
  > }
  > .btn-blue {
  >   @apply bg-blue-500;
  >   @apply text-white;
  > }
  > ```
- `@layer`
  > カスタムスタイルのセットが属する「バケット」を Tailwind に通知します。 有効なレイヤーは `base`, `components`, `utilities` です。
  > ```css title="【例】@layer ディレクティブ"
  > @tailwind base;
  > @tailwind components;
  > @tailwind utilities;
  >
  > @layer base {
  >   h1 {
  >     @apply text-2xl;
  >   }
  >   h2 {
  >     @apply text-xl;
  >   }
  > }
  >
  > @layer components {
  >   .btn-blue {
  >     @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  >   }
  >   .btn-blue:hover {
  >     @apply bg-blue-700;
  >   }
  > }
  >
  > @layer utilities {
  >   @variants hover, focus {
  >     .filter-none {
  >       filter: none;
  >     }
  >     .filter-grayscale {
  >       filter: grayscale(100%);
  >     }
  >   }
  > }
  > ```
- `@variants`
  > 独自のユーティリティの `responsive`, `hover`, `focus`, `active` バリアントを生成します。
  > ```css title="【例】@variants ディレクティブ"
  > /* Input */
  > @variants focus, hover {
  >   .banana {
  >     color: yellow;
  >   }
  > }
  > 
  > /* Output */
  > .banana {
  >   color: yellow;
  > }
  > .hover\:banana:hover {
  >   color: yellow;
  > }
  > .focus\:banana:focus {
  >   color: yellow;
  > }
  > ```
- `@responsive`
  > 独自のクラスのレスポンシブバリアントを生成します。
- `@screen`
  > 独自のCSSで値を複製する代わりに、名前でブレークポイントを参照するメディアクエリを作成します。
  >
  > 例えば、このようにその値を複製する生のメディアクエリを書く代わりに：
  > ```css 
  > @media (min-width: 640px) {
  >   /* ... */
  > }
  > ```
  > `@screen` ディレクティブを使用して、名前でブレークポイントを参照できます：
  > ```css 
  > @screen sm {
  >   /* ... */
  > }
  > ```

### 関数

- `theme()` – ドット表記を使用して Tailwind 構成値にアクセスします。
  > ```css title="【例】theme() 関数"
  > .btn-blue {
  >   background-color: theme('colors.blue.500');
  > }
  > ```
  
## 構成

> 🔗 [コンフィギュレーション - Tailwind CSS](https://tailwindcss.jp/docs/configuration)

プロジェクトルートに構成ファイル（デフォルトでは `tailwind.config.js`）を用意することで、Tailwind をカスタマイズすることができます。

:::info デフォルト構成

[GitHub リポジトリ](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) で、デフォルト構成を確認できます。

:::

```js title="【例】tailwind.config.js"
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
```

### `purge`

> 🔗 [ファイルサイズコントロール - Tailwind CSS](https://tailwindcss.jp/docs/controlling-file-size)

「パージ」オプションは、未使用のスタイルを削除してビルドを最適化するための構成パートです。

```js title="【例】HTML, Vue, JSX で未使用のユーティリティクラスを削除する"
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
```

### `theme`

> 🔗 [テーマコンフィギュレーション - Tailwind CSS](https://tailwindcss.jp/docs/theme)

「テーマ」セクションでは、サイトのビジュアルデザインに関連するすべてのもの（カラーパレット、タイプスケール、フォントスタック、ブレークポイント、境界線の半径の値など）を定義します。

- ⇣ [ブレークポイント](#customizing-breakpoints)
- ⇣ [カラー](#customizing-colors)
- ⇣ [スペース](#customizing-spacing)

#### ブレークポイント {#customizing-breakpoints}

> 🔗 [ブレイクポイント - Tailwind CSS](https://tailwindcss.jp/docs/breakpoints)

```js title="【例】Bootstrap と同じブレークポイントへ変更"
module.exports = {
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    }
  }
}
```

#### カラー {#customizing-colors}

> 🔗 [カスタマイジングカラー - Tailwind CSS](https://tailwindcss.jp/docs/customizing-colors)

```js title="【例】カラーの変更と追加"
module.exports = {
  theme: {
    // デフォルトのカラーパレットを上書き
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
    },
    // デフォルトのカラーパレットを拡張
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
}
```

#### スペース {#customizing-spacing}

> 🔗 [カスタマイジングスペース - Tailwind CSS](https://tailwindcss.jp/docs/customizing-spacing)

```js title="【例】スペーシングスケールをカスタマイズ"
module.exports = {
  theme: {
    // デフォルトのスペーシングスケールを上書き
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    // デフォルトのスペーシングスケールを拡張
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
}
```

### `variants`

> 🔗 [バリアントコンフィギュレーション - Tailwind CSS](https://tailwindcss.jp/docs/configuring-variants)

「バリアント」セクションでは、コアユーティリティプラグインごとに生成されるバリアントを制御できます。

### `plugins`

> 🔗 [プラグインの作成 - Tailwind CSS](https://tailwindcss.jp/docs/plugins)

「プラグイン」セクションでは、サードパーティのプラグインを Tailwind に登録して、追加のユーティリティ、コンポーネント、基本スタイル、またはカスタムバリアントを生成することができます。

## Tips

### ブラウザサポート

Tailwindは、どのスタイルにもベンダープレフィックスを自動的に追加しません。 代わりに [Autoprefixer](https://github.com/postcss/autoprefixer)
を使うことをオススメします。

## 関連ツール

- [FlowBite](https://flowbite.com/): TailwindCSS のコンポーネントライブラリ