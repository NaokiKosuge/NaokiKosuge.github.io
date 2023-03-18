---
slug: /git-everyday
sidebar_label: Everyday Git
---

# 【git】Everyday Git

:::note

このドキュメントの大部分は、[giteveryday](https://git-scm.com/docs/giteveryday) を翻訳したものです。

:::

## NAME

giteveryday — 日常のGitに役立つ最小限のコマンドセット

## SYNOPSIS

20コマンド程度の日常の Git

## DESCRIPTION

Git ユーザーは、日常の Git に役立つコマンドの小さなセットをここで説明するために、大きく4つのカテゴリに分類できます。

- [個々の開発者（スタンドアロン）](#STANDALONE) コマンドは、単独で作業する人でも、コミットする人にとって不可欠です。
- 他の人と一緒に作業する場合は、[個々の開発者（参加者）](#PARTICIPANT) セクションにもリストされているコマンドが必要になります。
- [インテグレーター](#INTEGRATOR) の役割を果たす人々は、上記に加えていくつかのコマンドを学ぶ必要があります。
- [リポジトリ管理](#ADMINISTRATION) コマンドは、Git リポジトリの管理と提供を担当するシステム管理者向けです。

## 個人開発者（スタンドアロン） {#STANDALONE}

スタンドアロンの個々の開発者は、他の人とパッチを交換せず、次のコマンドを使用して、単一のリポジトリで単独で作業します。

- [git-init[1]](https://git-scm.com/docs/git-init) を使用して、新しいリポジトリを作成します。
- [git-log[1]](https://git-scm.com/docs/git-log) で、何が起こったかを確認します。
- ブランチを切り替えるための [git-switch[1]](https://git-scm.com/docs/git-switch) と [git-branch[1]](https://git-scm.com/docs/git-branch)。
- [git-add[1]](https://git-scm.com/docs/git-add) を使用して、インデックスファイルを管理します。
- [git-diff[1]](https://git-scm.com/docs/git-diff) と [git-status[1]](https://git-scm.com/docs/git-status) を使用して、実行中の処理を確認します。
- [git-commit[1]](https://git-scm.com/docs/git-commit) を使用して、現在のブランチを進めます。
- 変更を元に戻すには [git-restore[1]](https://git-scm.com/docs/git-restore)。
- [git-merge[1]](https://git-scm.com/docs/git-merge) は、ローカルブランチ間でマージします。
- トピックブランチを維持するための [git-rebase[1]](https://git-scm.com/docs/git-rebase)。
- 既知のポイントをマークするための [git-tag[1]](https://git-scm.com/docs/git-tag)。

### EXAMPLES

<dl>
<dt>新しいリポジトリの開始点として tarball を使用します。</dt>
<dd>

```bash
$ tar zxf frotz.tar.gz
$ cd frotz
$ git init
$ git add . (1)
$ git commit -m "import of frotz source tree."
$ git tag v2.43 (2)
```

1. 現在のディレクトリの下にすべてを追加します。
2. 軽量で注釈のないタグを作成します。

</dd>
<dt>トピックブランチを作成して開発します。</dt>
<dd>

```bash
$ git switch -c alsa-audio (1)
$ edit/compile/test
$ git restore curses/ux_audio_oss.c (2)
$ git add curses/ux_audio_alsa.c (3)
$ edit/compile/test
$ git diff HEAD (4)
$ git commit -a -s (5)
$ edit/compile/test
$ git diff HEAD^ (6)
$ git commit -a --amend (7)
$ git switch master (8)
$ git merge alsa-audio (9)
$ git log --since='3 days ago' (10)
$ git log v2.43.. curses/ (11)
```

1. 新しいトピックブランチを作成します。
2. `curses/ux_audio_oss.c` で失敗した変更を元に戻します。
3. 新しいファイルを追加したかどうかを Git に伝える必要があります。後で `git commit -a` を実行すると、削除と変更がキャッチされます。
4. コミットしている変更を確認します。
5. あなたがテストしたように、あなたのサインオフですべてをコミットします。
6. 前のコミットを含むすべての変更を確認します。
7. 元のメッセージを使用して、前のコミットを修正し、すべての新しい変更を追加します。
8. マスターブランチに切り替えます。
9. トピックブランチをマスターブランチにマージします。
10. コミットログを確認します。出力を制限する他の形式を組み合わせて、`-10`（最大10個のコミットを表示する）、`-until=2005-12-10` などを含めることができます。
11. `v2.43` タグ以降、`curses/` ディレクトリにあるものに影響を与える変更のみを表示します。

</dd>
</dl>

## 個人開発者（参加者） {#PARTICIPANT}

グループプロジェクトの参加者として作業する開発者は、他の人と通信する方法を学ぶ必要があり、スタンドアロンの開発者が必要とするコマンドに加えて、これらのコマンドを使用します。

- アップストリームから [git-clone[1]](https://git-scm.com/docs/git-clone) を実行して、ローカルリポジトリを準備します。
- 「origin」からの [git-pull[1]](https://git-scm.com/docs/git-pull) と [git-fetch[1]](https://git-scm.com/docs/git-fetch) は、アップストリームを最新の状態に保ちます。
- CVS スタイルの共有リポジトリワークフローを採用している場合は、共有リポジトリに [git-push[1]](https://git-scm.com/docs/git-push) します。
- Linux カーネルスタイルのパブリックフォーラムワークフローを採用している場合は、[git-format-patch[1]](https://git-scm.com/docs/git-format-patch) を使用して電子メール送信を準備します。
- [git-send-email[1]](https://git-scm.com/docs/git-send-email) を使用して、MUA による破損なしに電子メール送信を送信します。
- [git-request-pull[1]](https://git-scm.com/docs/git-request-pull) を使用して、アップストリームがプルする変更の概要を作成します。

### EXAMPLES

<dl>
<dt>アップストリームのクローンを作成して作業します。フィードの変更をアップストリームに。</dt>
<dd>

```bash
$ git clone git://git.kernel.org/pub/scm/.../torvalds/linux-2.6 my2.6
$ cd my2.6
$ git switch -c mine master (1)
$ edit/compile/test; git commit -a -s (2)
$ git format-patch master (3)
$ git send-email --to="person <email@example.com>" 00*.patch (4)
$ git switch master (5)
$ git pull (6)
$ git log -p ORIG_HEAD.. arch/i386 include/asm-i386 (7)
$ git ls-remote --heads http://git.kernel.org/.../jgarzik/libata-dev.git (8)
$ git pull git://git.kernel.org/pub/.../jgarzik/libata-dev.git ALL (9)
$ git reset --hard ORIG_HEAD (10)
$ git gc (11)
```

1. マスターから新しいブランチ `mine` をチェックアウトします。
2. 必要に応じて繰り返します。
3. マスターに関連して、ブランチからパッチを抽出し、
4. そしてそれらに電子メールを送ります。
5. `master` に戻り、最新情報を確認する準備をします
6. `git pull` はデフォルトで `origin` からフェッチし、現在のブランチにマージします。
7. 引っ張った直後に、前回チェックしてから上流で行われた変更を、関心のある領域でのみ確認します。
8. 外部リポジトリのブランチ名を確認してください（不明な場合）。
9. 特定のリポジトリから特定のブランチ `ALL` からフェッチし、それをマージします。
10. プルを元に戻します。
11. ガベージコレクションは、元に戻されたプルから残ったオブジェクトを収集します。

</dd>
<dt>別のリポジトリにプッシュします。</dt>
<dd>

```bash
satellite$ git clone mothership:frotz frotz (1)
satellite$ cd frotz
satellite$ git config --get-regexp '^(remote|branch)\.' (2)
remote.origin.url mothership:frotz
remote.origin.fetch refs/heads/*:refs/remotes/origin/*
branch.master.remote origin
branch.master.merge refs/heads/master
satellite$ git config remote.origin.push \
	   +refs/heads/*:refs/remotes/satellite/* (3)
satellite$ edit/compile/test/commit
satellite$ git push origin (4)

mothership$ cd frotz
mothership$ git switch master
mothership$ git merge satellite/master (5)
```

1. マザーシップマシンには、ホームディレクトリの下にfrotzリポジトリがあります。そこからクローンを作成して、衛星マシンでリポジトリを開始します。
2. クローンは、これらの構成変数をデフォルトで設定します。マザーシップマシンのブランチを取得してローカルの `remotes/origin/*` リモートトラッキングブランチに保存するように `git pull` を調整します。
3. `git push` を配置して、すべてのローカルブランチをマザーシップマシンの対応するブランチにプッシュします。
4. プッシュは、マザーシップマシンの　`remotes/satellite/*` リモート追跡ブランチにすべての作業を隠します。これをバックアップ方法として使用できます。同様に、母性があなたから「フェッチ」されたふりをすることができます（アクセスが一方的な場合に便利です）。
5. マザーシップマシンで、サテライトマシンで行われた作業をマスターブランチにマージします。

</dd>
<dt>特定のタグから分岐します。</dt>
<dd>

```bash
$ git switch -c private2.6.14 v2.6.14 (1)
$ edit/compile/test; git commit -a
$ git checkout master
$ git cherry-pick v2.6.14..private2.6.14 (2)
```

1. よく知られている（ただし多少遅れている）タグに基づいてプライベートブランチを作成します。
2. 正式な「マージ」なしで、private2.6.14ブランチのすべての変更をマスターブランチに転送します。またはロングハンド<br />`git format-patch -k -m --stdout v2.6.14..private2.6.14 | git am -3 -k`

</dd>
</dl>

別の参加者送信メカニズムは、`git request-pull` またはプルリクエストメカニズム（例えば、[GitHub](www.github.com)）で使用されているものなど）を使用して、コントリビューションのアップストリームに通知します。

## インテグレーター {#INTEGRATOR}

グループプロジェクトのインテグレーターとして機能するかなり中心的な人物は、他の人が行った変更を受け取り、それらをレビューして統合し、参加者が必要とするコマンドに加えてこれらのコマンドを使用して、他の人が使用できるように結果を公開します。

このセクションは、[GitHub](www.github.com) で `git request-pull` またはプルリクエストに応答するユーザーが、他のユーザーの作業を履歴に統合するために使用することもできます。リポジトリのサブエリア中尉は、参加者とインテグレータの両方として機能します。

- [git-am[1]](https://git-scm.com/docs/git-am) は、寄稿者から電子メールで送信されたパッチを適用します。
- [git-pull[1]](https://git-scm.com/docs/git-pull) を使用して、信頼できる中尉からマージします。
- [git-format-patch[1]](https://git-scm.com/docs/git-format-patch) を準備し、提案された代替案を寄稿者に送信します。
- [git-revert[1]](https://git-scm.com/docs/git-revert) は、失敗したコミットを元に戻します。
- [git-push [1]](https://git-scm.com/docs/git-push) を使用して、最先端を公開します。

### EXAMPLES

<dl>
<dt>典型的なインテグレーターのGitデー。</dt>
<dd>

```bash
$ git status (1)
$ git branch --no-merged master (2)
$ mailx (3)
& s 2 3 4 5 ./+to-apply
& s 7 8 ./+hold-linus
& q
$ git switch -c topic/one master
$ git am -3 -i -s ./+to-apply (4)
$ compile/test
$ git switch -c hold/linus && git am -3 -i -s ./+hold-linus (5)
$ git switch topic/one && git rebase master (6)
$ git switch -C seen next (7)
$ git merge topic/one topic/two && git merge hold/linus (8)
$ git switch maint
$ git cherry-pick master~4 (9)
$ compile/test
$ git tag -s -m "GIT 0.99.9x" v0.99.9x (10)
$ git fetch ko && for branch in master maint next seen (11)
    do
	git show-branch ko/$branch $branch (12)
    done
$ git push --follow-tags ko (13)

```

1. どちらかといえば、あなたがしている途中で何をしていたかを見てください。
2. まだ `master` にマージされていないブランチを確認してください。他の統合ブランチについても同様です。`maint`、`next`、そして `seen`。
3. メールを読んだり、該当するものを保存したり、準備が整っていないものを保存したりします（他のメールリーダーも利用できます）。
4. サインオフを使用して、インタラクティブにそれらを適用します。
5. 必要に応じてトピックブランチを作成し、再度サインオフして適用します。
6. マスターにマージされていない、または安定したブランチの一部として公開されていない内部トピックブランチをリベースします。
7. 次から毎回 `seen` を再起動します。
8. まだ調理中のトピックブランチをバンドルします。
9. 重要な修正をバックポートします。
10. 署名付きタグを作成します。
11. マスターがすでに押し出されている以上に誤って巻き戻されていないことを確認してください。
12. `git show-branch` からの出力では、`master` には `ko/master` が持つすべてのものが含まれ、`next` には `ko/next` が持つすべてのものが含まれる必要があります。
13. プッシュされた履歴を指す新しいタグとともに、最先端をプッシュします。

</dd>
</dl>

この例では、`ko` の省略形は kernel.org にある Git メンテナのリポジトリを指しており、次のようになります：

```
(in .git/config)
[remote "ko"]
	url = kernel.org:/pub/scm/git/git.git
	fetch = refs/heads/*:refs/remotes/ko/*
	push = refs/heads/master
	push = refs/heads/next
	push = +refs/heads/seen
	push = refs/heads/maint
```

## リポジトリ管理 {#ADMINISTRATION}

リポジトリ管理者は、次のツールを使用して、開発者によるリポジトリへのアクセスを設定および維持します。

- リポジトリからの匿名ダウンロードを許可する [git-daemon[1]](https://git-scm.com/docs/git-daemon)。
- [git-shell[1]](https://git-scm.com/docs/git-shell) は、共有中央リポジトリユーザーの **制限付きログインシェル** として使用できます。
- [git-http-backend[1]](https://git-scm.com/docs/git-http-backend) は、フェッチサービスとプッシュサービスの両方を可能にする Git-over-HTTP（「Smart http」）のサーバー側実装を提供します。
- [gitweb[1]](https://git-scm.com/docs/gitweb) は、Git リポジトリに Web フロントエンドを提供します。これは、[git-instaweb[1]](https://git-scm.com/docs/git-instaweb) スクリプトを使用して設定できます。

[update hook howto](https://git-scm.com/docs/howto/update-hook-example) には、共有中央リポジトリを管理する良い例があります。

さらに、次のような他の広く展開されているホスティング、ブラウジング、レビューソリューションがいくつかあります：

- gitolite、gerrit コードレビュー、cgit など。

### EXAMPLES

<dl>
<dt><code>/etc/services</code> では次のことを前提としています</dt>
<dd>

```bash
$ grep 9418 /etc/service
git		9418/tcp		# Git Version Control System
```

</dd>
<dt>git-daemon を実行して、inetd から <code>/pub/scm</code> を提供します。</dt>
<dd>

```bash
$ grep git /etc/inetd.conf
git	stream	tcp	nowait	nobody \
  /usr/bin/git-daemon git-daemon --inetd --export-all /pub/scm
```

実際の構成行は1行にする必要があります。

</dd>
<dt>git-daemon を実行して、xinetd から <code>/pub/scm</code> を提供します。</dt>
<dd>

```bash
$ cat /etc/xinetd.d/git-daemon
# default: off
# description: The Git server offers access to Git repositories
service git
{
	disable = no
	type            = UNLISTED
	port            = 9418
	socket_type     = stream
	wait            = no
	user            = nobody
	server          = /usr/bin/git-daemon
	server_args     = --inetd --export-all --base-path=/pub/scm
	log_on_failure  += USERID
}
```

xinetd(8) のドキュメントとセットアップを確認してください。これは Fedora システムからのものです。他のものは異なる場合があります。

</dd>
<dt>git-over-ssh を使用する開発者にプッシュ/プルのみのアクセスを許可します。</dt>
<dd>

例えば、使用しているもの：`$ git push/pull ssh://host.xz/pub/scm/project`

```bash
$ grep git /etc/passwd (1)
alice:x:1000:1000::/home/alice:/usr/bin/git-shell
bob:x:1001:1001::/home/bob:/usr/bin/git-shell
cindy:x:1002:1002::/home/cindy:/usr/bin/git-shell
david:x:1003:1003::/home/david:/usr/bin/git-shell
$ grep git /etc/shells (2)
/usr/bin/git-shell
```

1. ログインシェルは `/usr/bin/git-shell` に設定されており、`git push` と `git pull` 以外は許可されていません。ユーザーはマシンへの ssh アクセスを必要とします。
2. 多くのディストリビューションでは、`/etc/shells` はログインシェルとして使用されるものをリストする必要があります。

</dd>
<dt>CVS スタイルの共有リポジトリ。</dt>
<dd>

```bash
$ grep git /etc/group (1)
git:x:9418:alice,bob,cindy,david
$ cd /home/devo.git
$ ls -l (2)
  lrwxrwxrwx   1 david git    17 Dec  4 22:40 HEAD -> refs/heads/master
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 branches
  -rw-rw-r--   1 david git    84 Dec  4 22:40 config
  -rw-rw-r--   1 david git    58 Dec  4 22:40 description
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 hooks
  -rw-rw-r--   1 david git 37504 Dec  4 22:40 index
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 info
  drwxrwsr-x   4 david git  4096 Dec  4 22:40 objects
  drwxrwsr-x   4 david git  4096 Nov  7 14:58 refs
  drwxrwsr-x   2 david git  4096 Dec  4 22:40 remotes
$ ls -l hooks/update (3)
  -r-xr-xr-x   1 david git  3536 Dec  4 22:40 update
$ cat info/allowed-users (4)
refs/heads/master	alice\|cindy
refs/heads/doc-update	bob
refs/tags/v[0-9]*	david
```

1. 開発者を同じ git グループに配置します。
2. 共有リポジトリをグループが書き込み可能にします。
3. ブランチポリシーの制御には、Documentation/howto/ の Carl による update-hook の例を使用してください。
4. アリスとシンディはマスターにプッシュでき、ボブだけが doc-update にプッシュできます。 david はリリースマネージャーであり、バージョンタグを作成してプッシュできる唯一の人物です。

</dd>
</dl>
