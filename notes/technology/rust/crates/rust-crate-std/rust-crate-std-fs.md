---
slug: /rust-crate-std-fs
sidebar_label: std::fs
---

# 【Rust】標準ライブラリ `std::fs`

[`std::fs`](https://doc.rust-lang.org/std/fs/) は、ファイルシステムの操作操作に関するメンバーを提供します。

このモジュールには、ローカルファイルシステムのコンテンツを操作するための基本的なメソッドが含まれています。このモジュールのすべてのメソッドは、クロスプラットフォームのファイルシステム操作を表します。追加のプラットフォーム固有の機能は、`std::os::$platform` の拡張トレイトにあります。

- _構造体_
  - [`DirBuilder`](https://doc.rust-lang.org/std/fs/struct.DirBuilder.html) — さまざまな方法でディレクトリを作成するために使用されるビルダー。
  - [`DirEntry`](https://doc.rust-lang.org/std/fs/struct.DirEntry.html) — [`ReadDir`](https://doc.rust-lang.org/std/fs/struct.ReadDir.html) イテレータによって返されるエントリ。
  - [`File`](https://doc.rust-lang.org/std/fs/struct.File.html) — ファイルシステムで開いているファイルへの参照。
  - [`FileType`](https://doc.rust-lang.org/std/fs/struct.FileType.html) — ファイルタイプごとにアクセサを備えたファイルタイプを表す構造。これは、[`Metadata::file_type`](https://doc.rust-lang.org/std/fs/struct.Metadata.html#method.file_type) メソッドによって返されます。
  - [`Metadata`](https://doc.rust-lang.org/std/fs/struct.Metadata.html) — ファイルに関するメタデータ情報。
  - [`OpenOptions`](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html) — ファイルを開く方法を構成するために使用できるオプションとフラグ。
  - [`Permissions`](https://doc.rust-lang.org/std/fs/struct.Permissions.html) — ファイルに対するさまざまなアクセス許可の表現。
  - [`ReadDir`](https://doc.rust-lang.org/std/fs/struct.ReadDir.html) — ディレクトリ内のエントリに対するイテレータ。
- _関数_
  - [`available_concurrency`](https://doc.rust-lang.org/std/thread/fn.available_concurrency.html) [実験的] — プログラムで使用可能なハードウェアスレッドの数を返します。
  - [`try_exists`](https://doc.rust-lang.org/std/fs/fn.try_exists.html) [実験的] — パスが既存のエンティティを指している場合は、`Ok(true)` を返します。
  - [`canonicalize`](https://doc.rust-lang.org/std/fs/fn.canonicalize.html) — すべての中間コンポーネントが正規化され、シンボリックリンクが解決された、パスの正規の絶対形式を返します。
  - [`copy`](https://doc.rust-lang.org/std/fs/fn.copy) — あるファイルの内容を別のファイルにコピーします。この関数は、元のファイルの許可ビットも宛先ファイルにコピーします。
  - [`create_dir`](https://doc.rust-lang.org/std/fs/fn.create_dir) — 指定されたパスに新しい空のディレクトリを作成します。
  - [`create_dir_all`](https://doc.rust-lang.org/std/fs/fn.create_dir_all) — ディレクトリとそのすべての親コンポーネントが欠落している場合は、それらを再帰的に作成します。
  - [`hard_link`](https://doc.rust-lang.org/std/fs/fn.hard_link) — ファイルシステムに新しいハードリンクを作成します。
  - [`metadata`](https://doc.rust-lang.org/std/fs/fn.metadata) — パスを指定して、ファイルシステムにクエリを実行し、ファイルやディレクトリなどに関する情報を取得します。
  - [`read`](https://doc.rust-lang.org/std/fs/fn.read) — ファイルの内容全体をバイトベクトルに読み込みます。
  - [`read_dir`](https://doc.rust-lang.org/std/fs/fn.read_dir) — ディレクトリ内のエントリに対するイテレータを返します。
  - [`read_link`](https://doc.rust-lang.org/std/fs/fn.read_link) — シンボリックリンクを読み取り、リンクが指すファイルを返します。
  - [`read_to_string`](https://doc.rust-lang.org/std/fs/fn.read_to_string) — ファイルの内容全体を文字列に読み込みます。
  - [`remove_dir`](https://doc.rust-lang.org/std/fs/fn.remove_dir) — 空のディレクトリを削除します。
  - [`remove_dir_all`](https://doc.rust-lang.org/std/fs/fn.remove_dir_all) — すべての内容を削除した後、このパスのディレクトリを削除します。慎重に使用してください！
  - [`remove_file`](https://doc.rust-lang.org/std/fs/fn.remove_file) — ファイルシステムからファイルを削除します。
  - [`rename`](https://doc.rust-lang.org/std/fs/fn.rename) — ファイルまたはディレクトリの名前を新しい名前に変更し、元のファイルがすでに存在する場合はそれを置き換えます。
  - [`set_permissions`](https://doc.rust-lang.org/std/fs/fn.set_permissions) — ファイルまたはディレクトリで見つかった権限を変更します。
  - [`symlink_metadata`](https://doc.rust-lang.org/std/fs/fn.symlink_metadata) — シンボリックリンクをたどらずに、ファイルに関するメタデータを照会します。
  - [`write`](https://doc.rust-lang.org/std/fs/fn.write) — ファイルの内容全体としてスライスを書き込みます。
