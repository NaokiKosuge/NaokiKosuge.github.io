---
sidebar_position: 0
slug: /git
sidebar_label: 入門
---

# Git

<figure class="inline-flex bg-white">

![](../../../static/img/notes/git.logo@2x.png)

</figure>

## `.gitignore`

```text title="【例】.gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## FAQ

### マージかリベースか

- **マージ**
  - _メリット_
    - コンフリクトの解決が、一度しか起こらないため、比較的容易である。
  - _デメリット_
    - マージコミットが沢山あると履歴が複雑化する。
- **リベース**
  - _メリット_
    - 履歴を綺麗に保つことができる。
  - _デメリット_
    - コンフリクトの解決が、コミットごとに行う必要があり、面倒である。

結論は、プッシュしていないローカルの変更にはリベースを使い、プッシュした後はマージを使う。コンフリクトしそうならマージを使う。
