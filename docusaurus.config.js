/** @see https://docusaurus.io/docs/docusaurus-config */
module.exports = {
  /*
  サイト設定
  */

  /** ウェブサイトのタイトル */
  title: "Libra NK",
  /** サイトのタグライン（キャッチコピー） */
  tagline: "NaokiKosuge の個人ノート",
  /** ファビコンのURLまたはパス */
  favicon: "img/favicon.ico",
  /** サイトURL */
  url: "https://NaokiKosuge.github.io",
  /** サイトのベースURL */
  baseUrl: "/",
  /** HTML の noindex メタを有効にするか */
  noIndex: true,
  scripts: [],
  clientModules: [],
  stylesheets: [],
  /** タイトルの区切り文字 */
  titleDelimiter: "|",

  /*
  Docusaurus設定
  */

  /** 壊れたリンクを検出した時のDocusaurusの動作 ('ignore' | 'log' | 'warn' | 'error' | 'throw') */
  onBrokenLinks: "warn",
  /** 壊れたマークダウンリンクを検出した時のDocusaurusの動作 ('ignore' | 'log' | 'warn' | 'error' | 'throw') */
  onBrokenMarkdownLinks: "log",
  /** 重複するルートを検出したときのDocusaurusの動作 ('ignore' | 'log' | 'warn' | 'error' | 'throw') */
  onDuplicateRoutes: "warn",
  /** リポジトリ名 */
  projectName: "NaokiKosuge.github.io",
  /** GitHub ユーザー名 */
  organizationName: "NaokiKosuge",
  /** URL末尾のスラッシュ「/」 */
  trailingSlash: false,
  /** i18n */
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    localeConfigs: {
      ja: {
        label: "日本語",
        direction: "ltr",
      },
    },
  },
  /**
   * テーマ設定
   *
   * @see https://docusaurus.io/docs/api/themes/configuration
   */
  themeConfig: {
    /** カラーモード */
    colorMode: {
      /** デフォルトの外観モード (`light` | `dark`) */
      defaultMode: "light",
      /** ナビゲーションバーのスイッチを非表示にします。単色モードをサポートしたい場合に便利です。 */
      disableSwitch: false,
      /** ハードコードされたdefaultModeの代わりに、ユーザーシステム設定を使用してprefers-color-schemeメディアクエリを使用する必要がある場合 */
      respectPrefersColorScheme: false,
      /** ダーク/ライトスイッチアイコンオプション */
    },
    /** メタ画像。OGPに使用されます。 */
    image: "img/lnk.png",
    /** 追加の html メタデータ（既存のメタデータをオーバーライドできます）。 */
    metadata: [{ name: "twitter:card", content: "summary" }],
    /** アナウンスバー */
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //       'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    /** ナビゲーションバー */
    navbar: {
      /** ロゴ横のタイトル */
      title'Libra NK'K",
      /** ロゴ */
      logo: {
        alt'Libra NK のロゴ'ゴ",
        src'img/logo.svg'g",
      },
      /**
       * ナビゲーションアイテム
       *
       * アイテムの種類は以下のものがあります。
       *
       * - [ドロップダウン](https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown)
       * - [ドキュメントへのリンク](https://docusaurus.io/docs/api/themes/configuration#navbar-doc-link)
       * - [バージョンドロップダウン](https://docusaurus.io/docs/api/themes/configuration#navbar-docs-version-dropdown)
       * - [ドキュメントのバージョン](https://docusaurus.io/docs/api/themes/configuration#navbar-docs-version)
       * - [ロケールドロップダウン](https://docusaurus.io/docs/api/themes/configuration#navbar-locale-dropdown)
       * - [検索ボックス](https://docusaurus.io/docs/api/themes/configuration#navbar-search)
       *
       */
      items: [
        { to: '/notes', label: 'ノート', position: 'left' },
        { to: '/blog', label: 'ブログ', position: 'left' },
        {
          href: 'https://github.com/NaokiKosuge',
          position: 'right',
          className: 'icon-link icon-link-github',
          'aria-label': 'GitHub',
          title: 'GitHub',
        },
        {
          href: 'https://twitter.com/NaokiKosuge',
          position: 'right',
          className: 'icon-link icon-link-twitter',
          'aria-label': 'Twitter',
          title: 'Twitter',
        },
        {
          href: 'https://codepen.io/NaokiKosuge',
          position: 'right',
          className: 'icon-link icon-link-codepen',
          'aria-label': 'CodePen',
          title: 'CodePen',
        },
      ],
      /**
       * 自動非表示スティッキーナビゲーション
       *
       * ユーザーがページを下にスクロールし始めるとナビゲーションバーを自動的に非表示にし、ユーザーが上にスクロールするとナビゲーションバーを再び表示するこのクールなUI機能を有効にできます。
       */
      hideOnScroll: true,
      /** ナビゲーションバーのスタイル (`dark` | `primary`) */
      // style: 'dark',
    },
    /** コードブロック */
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: [
        'dart',
        'java',
        'kotlin',
        'php',
        'rust',
        'swift',
        'typescript',
        'toml',
      ],
    },
    /** フッター */
    footer: {
      // logo: {
      //   alt: '',
      //   src: 'img/',
      //   href: '',
      // },
      links: [
        {
          title: 'リンク',
          items: [
            {
              label: 'ホーム',
              to: '/',
            },
            {
              label: 'ノート',
              to: '/notes',
            },
            {
              label: 'ブログ',
              to: '/blog',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NaokiKosuge',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NaokiKosuge',
            },
            {
              label: 'CodePen',
              href: 'https://codepen.io/NaokiKosuge',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} @NaokiKosuge`,
    },
    /** TOC */
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
  plugins: [
    // PWA
    [
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          'appInstalled', // サイトをアプリとしてインストールしたユーザーに対してアクティブ化されます（100％信頼できるわけではありません）
          'standalone', // アプリをスタンドアロンとして実行しているユーザーに対してアクティブ化されます（多くの場合、PWAがインストールされると）
          'queryString', // queryString に `offlineMode=true` が含まれている場合にアクティブになります（PWAデバッグに便利）
          'mobile', // モバイルユーザー向けにアクティブ化 (width <= 940px)
          'saveData', // `navigator.connection.saveData === true` のユーザーに対してアクティブ化されます
          'always', // すべてのユーザーに対してアクティブ化
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/lnk.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#304ffe',
          },
        ],
      },
    ],
    // Sass
    'docusaurus-plugin-sass',
    // Tailwind CSS
    async (context, options) => {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  themes: [],
  presets: [
    [
      /**
       * このプリセットには、以下が含まれます...
       *
       * テーマ:
       *   - `@docusaurus/theme-classic`
       *   - `@docusaurus/theme-search-algolia`
       *
       * プラグイン:
       *   - `@docusaurus/plugin-content-docs`
       *   - `@docusaurus/plugin-content-blog`
       *   - `@docusaurus/plugin-content-pages`
       *   - `@docusaurus/plugin-debug`
       *   - `@docusaurus/plugin-google-analytics`
       *   - `@docusaurus/plugin-google-gtag`
       *   - `@docusaurus/plugin-sitemap`
       */
      '@docusaurus/preset-classic',
      {
        /** @docusaurus/theme-classic に渡されます。 */
        theme: {
          customCss: [require.resolve('./src/theme/custom-css/main.scss')],
        },
        /** @docusaurus/plugin-content-docs に渡されます（無効にするには false） */
        docs: {
          // ドキュメントのファイルシステム上のベースパス
          path: 'notes',
          // ドキュメントのルーティング上のベースパス
          routeBasePath: 'notes',
          sidebarPath: require.resolve('./sidebars.js'),
          // ソースコードのリポジトリ
          editUrl:
            'https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/',
        },
        /** @docusaurus/plugin-content-blog に渡されます（無効にするには false） */
        blog: {
          showReadingTime: true,
          /** Please change this to your repo. */
          editUrl:
            'https://github.com/NaokiKosuge/NaokiKosuge.github.io/edit/main/',
          /** RSS/Atomフィード (https://{your-domain}/blog/rss.xml OR https://{your-domain}/blog/atom.xml) */
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} @NaokiKosuge.`,
          },
          /** ブログタイトル */
          blogTitle: '@NaokiKosuge のブログ',
          blogDescription:
            'フロントエンドエンジニア @NaokiKosuge のブログです。',
        },
        /** @docusaurus/plugin-content-pages に渡されます（無効にするには false） */
        pages: {},
        /** docusaurus/plugin-content-sitemapに渡されます（無効にするには false） */
        sitemap: {},
        /** Google アナリティクス */
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
          anonymizeIP: false, // IPを匿名化する必要がありますか？
        },
        /** Google Site Tag */
        gtag: {
          trackingID: 'UA-141789564-1', // ここで「G-」測定IDを使用することもできます。
          anonymizeIP: false, // IPを匿名化する必要がありますか？
        },
      },
    ],
  ],
  /**
   * カスタムフィールド
   */
  customFields: {
    /** プロフィール画像 */
    profileImage: 'https://avatars.githubusercontent.com/NaokiKosuge',
  },
};
