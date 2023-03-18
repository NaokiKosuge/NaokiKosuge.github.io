---
slug: /mysql
sidebar_label: MySQL
---

# MySQL

<figure class="inline-flex">

![](../../../static/img/notes/mysql.logo.svg)

</figure>

:::note このドキュメントでは取り扱わない事項

- 各種プログラミング言語での操作方法 – その言語のドキュメントに記載する。
- SQL に関する一般的な事柄 – [SQL ノート](sql) に記載する。

:::

:::note このドキュメントの構成

1. [⇣：基礎](#types)
2. [⇣：操作方法](#installation)
3. [⇣：その他](#links)

:::

---

## データ型 {#types}

### 数値データ型

#### 整数型（真数値）

| 型           | signed の範囲               | unsigned の範囲   |
|-------------|--------------------------|----------------|
| `TINYINT`   | -128 〜 127               | 0 〜 255        |
| `SMALLINT`  | -32768 〜 32767           | 0 〜 65535      |
| `MEDIUMINT` | -8388608 〜 8388607       | 0 〜 16777215   |
| `INT`       | -2147483648 〜 2147483647 | 0 〜 4294967295 |
| `BIGINT`    | -2^63 〜 (2^63)-1         | 0 〜 (2^64)-1   |

#### 固定小数点型（真数値）

金銭データを扱う場合など、正確な精度を保持することが重要な場合に使用されます。

| 型         |
|-----------|
| `DECIMAL` |
| `NUMERIC` |


#### 浮動小数点型（概数値）

| 型          |
|------------|
| `FLOAT`    |
| `DOUBLE`   |

#### ビット値型

`M` ビット値のストレージを有効にします。

| 型        | ビット数             |
|----------|------------------|
| `BIT(M)` | `1` ≦ `M` ≦ `64` |

### 日時データ型

#### `DATE`、`DATETIME`、および `TIMESTAMP` 型

| 型           | デフォルトフォーマット           | 有効な値                                          |
|-------------|-----------------------|-----------------------------------------------|
| `DATE`      | `YYYY-MM-DD`          | `1000-01-01` 〜 `9999-12-31`                   |
| `DATETIME`  | `YYYY-MM-DD hh:mm:ss` | `1000-01-01 00:00:00` 〜 `9999-12-31 23:59:59` |
| `TIMESTAMP` | `YYYY-MM-DD hh:mm:ss` | `1970-01-01 00:00:01` 〜 `2038-01-19 03:14:07` |

#### `TIME` 型

| 型           | デフォルトフォーマット   | 有効な値                                       |
|-------------|---------------|--------------------------------------------|
| `TIME`      | `hh:mm:ss`    | `1000-01-01` 〜 `9999-12-31`                |

#### `YEAR` 型

| 型      | デフォルトフォーマット  | 有効な値            |
|--------|--------------|-----------------|
| `YEAR` | `YYYY`       | `1901` 〜 `2155` |

### 文字列データ型

#### _`CHAR`_ 型

| 型            | 文字数                  |
|--------------|----------------------|
| `CHAR(N)`    | `0` ≦ `N` ≦ `255`    |
| `VARCHAR(N)` | `0` ≦ `N` ≦ `65,535` |

`CHAR` 値は格納されると、指定された長さになるように右側がスペースで埋められ、固定長となります。一方、`VARCHAR` 値は可変長となります。

#### _`BINARY`_ 型

これらの型はそれぞれ、基本的には `CHAR` および `VARCHAR` と同様ですが、バイナリとして取り扱う点が異なります。

| 型              | バイト数                 |
|----------------|----------------------|
| `BINARY(N)`    | `0` ≦ `N` ≦ `255`    |
| `VARBINARY(N)` | `0` ≦ `N` ≦ `65,535` |

#### _`BLOB`_ 型

_`BLOB`_ は様々な容量のデータを保持できる大きなバイナリオブジェクトです。

- `TINYBLOB`
- `BLOB`
- `MEDIUMBLOB`
- `LONGBLOB`

#### _`TEXT`_ 型

- `TINYTEXT`
- `TEXT`
- `MEDIUMTEXT`
- `LONGTEXT`

#### ENUM 型

- `ENUM`

#### SET 型

- `SET`

### 空間データ型

- `GEOMETRY`
- `POINT`
- `LINESTRING`
- `POLYGON`
- `POINT`
- `LINESTRING`
- `POLYGON`
- `MULTIPOINT`
- `MULTILINESTRING`
- `MULTIPOLYGON`
- `GEOMETRYCOLLECTION`

### JSON データ型

- `JSON`

## 文字セット

<details>
<summary>

```bash
mysql> SHOW CHARACTER SET;
```

</summary>

| Charset  | Description                     | Default collation   | Maxlen |
|----------|---------------------------------|---------------------|-------:|
| armscii8 | ARMSCII-8 Armenian              | armscii8_general_ci |      1 |
| ascii    | US ASCII                        | ascii_general_ci    |      1 |
| big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |
| binary   | Binary pseudo charset           | binary              |      1 |
| cp1250   | Windows Central European        | cp1250_general_ci   |      1 |
| cp1251   | Windows Cyrillic                | cp1251_general_ci   |      1 |
| cp1256   | Windows Arabic                  | cp1256_general_ci   |      1 |
| cp1257   | Windows Baltic                  | cp1257_general_ci   |      1 |
| cp850    | DOS West European               | cp850_general_ci    |      1 |
| cp852    | DOS Central European            | cp852_general_ci    |      1 |
| cp866    | DOS Russian                     | cp866_general_ci    |      1 |
| cp932    | SJIS for Windows Japanese       | cp932_japanese_ci   |      2 |
| dec8     | DEC West European               | dec8_swedish_ci     |      1 |
| eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci |      3 |
| euckr    | EUC-KR Korean                   | euckr_korean_ci     |      2 |
| gb18030  | China National Standard GB18030 | gb18030_chinese_ci  |      4 |
| gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   |      2 |
| gbk      | GBK Simplified Chinese          | gbk_chinese_ci      |      2 |
| geostd8  | GEOSTD8 Georgian                | geostd8_general_ci  |      1 |
| greek    | ISO 8859-7 Greek                | greek_general_ci    |      1 |
| hebrew   | ISO 8859-8 Hebrew               | hebrew_general_ci   |      1 |
| hp8      | HP West European                | hp8_english_ci      |      1 |
| keybcs2  | DOS Kamenicky Czech-Slovak      | keybcs2_general_ci  |      1 |
| koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    |      1 |
| koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    |      1 |
| latin1   | cp1252 West European            | latin1_swedish_ci   |      1 |
| latin2   | ISO 8859-2 Central European     | latin2_general_ci   |      1 |
| latin5   | ISO 8859-9 Turkish              | latin5_turkish_ci   |      1 |
| latin7   | ISO 8859-13 Baltic              | latin7_general_ci   |      1 |
| macce    | Mac Central European            | macce_general_ci    |      1 |
| macroman | Mac West European               | macroman_general_ci |      1 |
| sjis     | Shift-JIS Japanese              | sjis_japanese_ci    |      2 |
| swe7     | 7bit Swedish                    | swe7_swedish_ci     |      1 |
| tis620   | TIS620 Thai                     | tis620_thai_ci      |      1 |
| ucs2     | UCS-2 Unicode                   | ucs2_general_ci     |      2 |
| ujis     | EUC-JP Japanese                 | ujis_japanese_ci    |      3 |
| utf16    | UTF-16 Unicode                  | utf16_general_ci    |      4 |
| utf16le  | UTF-16LE Unicode                | utf16le_general_ci  |      4 |
| utf32    | UTF-32 Unicode                  | utf32_general_ci    |      4 |
| utf8     | UTF-8 Unicode                   | utf8_general_ci     |      3 |
| utf8mb4  | UTF-8 Unicode                   | utf8mb4_0900_ai_ci  |      4 |

</details>

---

## インストール {#installation}

1. プラットフォームに応じた方法で [インストール](https://dev.mysql.com/doc/refman/ja/installing.html) を行います。
2. ターミナルで [`mysql_secure_installation`](https://dev.mysql.com/doc/refman/ja/mysql-secure-installation.html) を実行します。

   これは、MySQL インストールをセキュアにするプロセスの大部分を自動化するコマンド行ユーティリティです。特に、初期 `root` アカウントにパスワードを割り当てるプロセスを含んでいます。

## サーバーへの接続とサーバーからの切断 {#connection}

```bash {1,8}
$ mysql -h <host> -u <user> -p
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 25338 to server version: 8.0.26-standard

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql> QUIT
Bye
$
```

## データベース操作

### データベースの一覧表示

```bash {1}
mysql> SHOW DATABASES;
+----------+
| Database |
+----------+
| mysql    |
| test     |
| tmp      |
+----------+
```

### 現在選択されているデータベースの表示

```bash {1}
mysql> SELECT DATABASE();
+------------+
| DATABASE() |
+------------+
| menagerie  |
+------------+
```

### データベースの選択 {#selecting-a-database}

```bash {1}
mysql> USE <database>;
Database changed
```

### データベースの作成

```bash {1}
mysql> CREATE DATABASE <database>;
```

## テーブル操作

テーブル操作は、使用するデータベースが [選択](#selecting-a-database) された状態を前提とします。

### テーブルの一覧表示

```bash {1}
mysql> SHOW TABLES;
+---------------------+
| Tables in menagerie |
+---------------------+
| pet                 |
+---------------------+
```

### テーブルのスキーマ表示

```bash {1}
mysql> DESCRIBE pet;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| name    | varchar(20) | YES  |     | NULL    |       |
| owner   | varchar(20) | YES  |     | NULL    |       |
| species | varchar(20) | YES  |     | NULL    |       |
| sex     | char(1)     | YES  |     | NULL    |       |
| birth   | date        | YES  |     | NULL    |       |
| death   | date        | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
```

### ファイルからテーブルへのデータのロード

テーブルのスキーマに合致したデータを TSV ファイルで用意しておきます。このファイルでは、NULL 値は `\N` で表現します。

```bash {1}
mysql> LOAD DATA LOCAL INFILE '/path/to/file.tsv' INTO TABLE <Table>;
```

## アカウント操作

MySQL は、`mysql` システムデータベースの `user` テーブルにアカウントを格納します。

## コマンドラインユーティリティ

---

## 関連する外部リンク {#links}

- [MySQL リファレンスマニュアル](https://dev.mysql.com/doc/refman/ja/)

