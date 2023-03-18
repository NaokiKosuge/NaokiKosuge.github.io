---
slug: /sql
sidebar_label: SQL
---

# SQL

## 規格

SQL の規格を策定する委員会には、**ANSI**、**ISO**/**IEC** があります。主な規格は次の通りです：

- SQL89
- SQL92
- SQL:1999
- SQL:2003
- SQL:2008
- SQL:2011
- SQL:2016

## 命名規約

- データベース名、テーブル名、列名などの命名で使用できる文字は次のものに限定します：
  - 半角数字（`0`-`9`）
  - 半角英字（`a`-`z` および `A`-`Z`）
  - アンダースコア（`_`）
- 1文字目は半角英字にすること。
- テーブル名は _`UpperCamelCase`_ にして、それ以外は _`snake_case`_ にする。


## 制約

### 主キー制約

:::tip 主キー制約の命名

主キー制約（primary-key constraint）の名前には、`pk_<column>` という命名をすると分かり易いです。

```sql title="例" {5}
CREATE TABLE person
 (person_id SMALLINT UNSIGNED,
  fname VARCHAR(20),
  lname VARCHAR(20),
  CONSTRAINT pk_person PRIMARY KEY (person_id)
 );
```

:::

### 外部キー制約

:::tip 主キー制約の命名

外部キー制約（foreign-key constraint）の名前には、`fk_<column>` という命名をすると分かり易いです。

```sql title="例" {5}
CREATE TABLE favorite_food
 (person_id SMALLINT UNSIGNED,
  food VARCHAR(20),
  CONSTRAINT pk_favorite_food PRIMARY KEY (person_id, food),
  CONSTRAINT fk_person_id FOREIGN KEY (person_id)
  REFERENCES person (person_id)
 );
```

:::

### `NOT NULL` 制約

`NULL` を許可しない制約。

### `DEFAULT` 制約

デフォルト値を持つ制約。

## キーワード

- `ADD`
- `ALL` – 集合演算で重複行を残すためのオプション
- `ALTER`
- `AND`
- `AS` – 別名を付けたり定数を指定したりします。
- `ASC` –  `ORDER BY` 句において使用され、昇順に並び替えを行います。
- `AVG` – 数値列のデータの平均する関数。
- `BEGIN` [方言] – トランザクションの開始
- `BETWEEN`
- `BY`
- `CASCADE` [方言]
- `COLUMN`
- `COMMIT`
- `COUNT` – レコードの個数を数える関数。
- `CREATE`
- `CROSS`
- `DATABASE`
- `DELETE`
- `DESC` – `ORDER BY` 句において使用され、降順に並び替えを行います。
- `DESCRIBE` [方言]
- `DISTINCT` – 集約関数の計算過程でデータの重複を取り除きます。
- `DROP`
- `DUAL` [方言] – Oracle におけるダミーテーブル
- `EXISTS`
- `EXPECT` – 差集合演算子
- `FOLLOWING` 
- `FOREIGN`
- `FROM`
- `GRANT`
- `GROUP`
- `IN`
- `INNER`
- `INSERT`
- `INTERSECT` – 交差集合演算子
- `INTO`
- `IS`
- `JOIN`
- `KEY`
- `LIKE`
- `MAX` – 任意の列のデータの最大値を求める関数。
- `MIN` – 任意の列のデータの最小値を求める関数。
- `NOT`
- `NULL`
- `ON`
- `OR`
- `ORDER`
- `OUTER` 
- `PRECEDING`
- `PRIMARY`
- `REFERENCES`
- `RENAME` [方言]
- `REVOKE`
- `ROWS`
- `SELECT`
- `SMALLINT`
- `SUM` – 数値列のデータを合計する関数。
- `START` [方言] – トランザクションの開始
- `TABLE`
- `TRANSACTION`
- `UNION` – 和集合演算子
- `UPDATE`
- `VALUES`
- `VIEW`
- `WHERE` – 検索クエリの条件式を指定します。`FROM` 句の直後に記述します。

## 演算子

- _算術演算子_
  - `+`
  - `-`
  - `*`
  - `/`
- _比較演算子_
  - `=`
  - `<>`
  - `<=`
  - `<`
  - `>=`
  - `>`
- _論理演算子_
  - `NOT`
  - `AND`
  - `OR`
- _集合演算子_
  - `UNION`
  - `INTERSECT`
  - `EXPECT`

### `NULL` に対する算術演算

次の演算はすべて結果が `NULL` となります：

- `5 + NULL`
- `10 - NULL`
- `1 * NULL`
- `4 / NULL`
- `NULL / 9`
- `NULL / 0`

### `NULL` に対する比較演算

`NULL` に対する比較演算は行うことができません。代わりに **`IS NULL` 演算子**か **`IS NOT NULL` 演算子**を使用します。

## 真理値

SQL は「3値論理」を採用しています。そのため、次の3つの真理値があります：

- `TRUE` – 真であること。
- `FALSE` – 偽であること。
- `UNKNOWN` – 真でも偽でもない、つまりは不明であること。例えば、`NULL` との比較演算の結果がこれに該当します。

## コマンドの種類

- データ定義言語 (DDL: data definition language)
- データ操作言語 (DML: data manipulation language)
- データ制御言語 (DCL: data control language)

### データ定義言語（DDL）

- `CREATE`
  - `CREATE DATABSE` 文 – データベースの作成
  - `CREATE TABLE` 文 – テーブルの作成
- `DROP`
  - `DROP TABLE` 文 – テーブルの削除
- `ALTER`
  - `ALTER TABLE` 文 – テーブル定義の変更

### データ操作言語（DML）

- `INSERT INTO`
- `UPDATE SET`
- `DELETE FROM`
- `SELECT FROM`

### データ制御言語（DCL）

- `GRANT`
- `REVOKE`
- `SET TRANSACTION`
- `BEGIN`
  - `BEGIN TANSACTION` 文 – トランザクションの開始
- `COMMIT`
- `ROLLBACK`
- `SAVEPOINT`
- `LOCK`

## 文

- `CREATE TABLE` – テーブルの作成
- `SELECT` – データの検索
- `INSERT` – データの登録
- `UPDATE` – データの更新
- `DELETE` – データの削除

## 文；`SELECT` 文

- テーブルからデータを選択するには `SELECT` 文を使います。
- 列には表示のための別名を付けることができます－－`AS` キーワードを使います。
- `SELECT` 句には定数や式を書くことができます。
- `DISTINCT` キーワードを指定すると、行の重複を省くことができます。
- _句の記述順序_にはルールがあります：

  ```sql title="SELECT 文の構成"
  --(↓：数字は内部的な実行順序を表す)
  /* 5 */ SELECT <SELECT 句の内容>
  /* 1 */ FROM　<FROM 句の内容>
  /* 2 */ WHERE　<WHERE 句の内容>
  /* 3 */ GROUP BY　<GROUP BY 句の内容>
  /* 4 */ HAVING　<HAVING 句の内容>
  /* 6 */ ORDER BY <ORDER BY 句の内容>
  ```


### 1. `SELECT` 句

**最終的な**結果セットに含まれる列を指定します－－つまり、最初に記述しますが、最後の方で実行される句です。

### 2. `FROM` 句

### 3. `WHERE` 句

テーブルから**行**を指定の条件式で絞り込みます。

### 4. `GROUP BY` 句

結果セットを_指定の列_－－「集約キー」または「グループ化列」という－－ごとに切り分けます。`NULL` は1つの集約キーとして認識されます。

```sql title="構文：GROUP BY 句" {3}
SELECT <列名1>, <列名2>, <列名3>, ……
FROM <テーブル名>
GROUP BY <列名1>, <列名2>, <列名3>, ……;
```

:::caution 注意点：`SELECT` 句へ加える制限

`GROUP BY` 句を使う場合、`SELECT` 句には次の**要素**しか書くことができません：

- 定数－－数値や文字列、日付など
- 集約関数－－`COUNT` や `SUM` など
- 集約キー－－`GROUP BY` 句で指定した列名

<details>
<summary>例</summary>

```sql title="例：SELECT句に集約キー以外の列名を書くとエラーになる"
SELECT shohin_mei, shiire_tanka, COUNT(*)
FROM Shohin
GROUP BY shiire_tanka;
/* ERROR: 列"shohin.shohin_mei"はGROUP BY句で出現しなければならないか、
   集約関数内で使用しなければなりません
   行 1: SELECT shohin_mei, shiire_tanka, COUNT(*)
*/
```
</details>

:::

### 5. `HAVING` 句

`GROUP BY` 句によって切り分けられた**グループ**に対して絞り込み条件を指定します。

```sql title="構文：HAVING 句" {4}
SELECT <列名1>, <列名2>, <列名3>, ……
FROM <テーブル名>
GROUP BY <列名1>, <列名2>, <列名3>, ……
HAVING <グループの値に対する条件>
```

#### 要素

- 定数－－数値や文字列、日付など
- 集約関数－－`COUNT` や `SUM` など
- 集約キー－－`GROUP BY` 句で指定した列名

### 6. `ORDER BY` 句

結果セットのレコードを、指定の列（**ソートキー**）のデータで並び替えます（複数列が指定可能）。

```sql title="構文：ORDER BY 句" {3}
SELECT <列名1>, <列名2>, <列名3>, ……
FROM <テーブル名>;
ORDER BY <並べ替えの基準となる列1>, <並べ替えの基準となる列2>, ……
```

#### ソートキー

- テーブルに存在する列名
- `SELECT` 句で付けた別名
- 集約関数

#### 並び順

- `ASC`（デフォルト） – 昇順
- `DESC` – 降順

## 文；`INSERT` 文

- テーブルにデータ（行）を登録するには `INSERT` 文を使います。原則として `INSERT` 文は1回の実行で｀行を挿入するようにします。
- 列名や値をカンマで区切って、外側を括弧で括った形式を**リスト**と呼びます。
- `INSERT INTO <テーブル名>` の後に書く列リストは、テーブルの全列に対して `INSERT` を行う場合、省略することができます。
- `NULL` を挿入するには、`VALUES` 句の値リストに「`NULL`」を書きます。
- `DEFAULT` 制約が付いている列にはデフォルト値を設定することができます－－[後述](#デフォルト値)します。

```sql title="構文：INSERT 文"{}
INSERT INTO <テーブル名> (列1, 列2, 列3, ……)
VALUES (値1, 値2, 値3, ……);
```

### デフォルト値

- 明示的にデフォルト値を指定する場合は、値としてキーワード `DEFAULT` を指定します。

  ```sql title="例：明示的なデフォルト値の設定"
  -- 補足：列「hanbai_tanka」に DEFAULT 制約が付いていると仮定します。
  INSERT INTO ShohinIns
      (shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi)
  VALUES
      ('0007', 'おろしがね', 'キッチン用品', DEFAULT, 790, '2009-04-28');
  ```

- 一方、暗黙的に指定する場合は、列と値を文から省きます。

  ```sql title="例：暗黙的なデフォルト値の設定"
  -- 補足：列「hanbai_tanka」に DEFAULT 制約が付いていると仮定します。
  INSERT INTO ShohinIns
      (shohin_id, shohin_mei, shohin_bunrui, shiire_tanka, torokubi)
  VALUES
      ('0007', 'おろしがね', 'キッチン用品', 790, '2009-04-28');
  ```

### 別のテーブルからデータをコピーする

`INSERT` 文において、`VALUES` で指定する値を別のテーブルから `SELECT` 文を用いて用意することができます。

```sql title="例：INSERT-SELECT 文" {4-5}
-- Shohin テーブルのデータを ShohinCopy テーブルへ「コピー」
INSERT INTO ShohinCopy
  (shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi)
SELECT shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi
  FROM Shohin;
```

## 文；`UPDATE` 文

- テーブルのデータを変更（更新）するには `UPDATE` 文を使います。

  ```sql title="構文：UPDATE 文"
  UPDATE <テーブル名>
  SET <列名> = <式>;
  ```

- 一部に行を更新するときは、`WHERE` 句で対象行の条件を書きます。`WHERE` 句で更新対象行を制限した `UPDATE` 文を、「探索型 `UPDATE`」と呼びます。

  ```sql title="構文：探索型 UPDATE 文"
  UPDATE <テーブル名>
  SET <列名> = <式>
  WHERE <条件>;
  ```

- `UPDATE` 文で列を `NULL` クリアすることもできます－－これを「`NULL` クリア」と呼びます。

  ```sql title="例：NULL クリア" {2}
  UPDATE Shohin
  SET torokubi = NULL
  WHERE shohin_id = '0008';
  ```

- 複数の列を同時に更新することもでき、これには2つの方法があります：
  - 方法1：「`列1 = 値1, ... 列n = 値n`」という形式

    ```sql title="例：複数列を更新；カンマで区切る方法" {2-3}
    UPDATE Shohin
    SET hanbai_tanka = hanbai_tanka * 10,
        shiire_tanka = shiire_tanka / 2
    WHERE shohin_bunrui = 'キッチン用品';
    ```

  - 方法2：「`(列1, ... 列n) = (値1, ... 値n)`」という形式

    ```sql title="例：複数列を更新；括弧で囲む方法" {2}
    UPDATE Shohin
    SET (hanbai_tanka, shiire_tanka) = (hanbai_tanka * 10, shiire_tanka / 2)
    WHERE shohin_bunrui = 'キッチン用品';
    ```

## 文；`DELETE` 文

- **テーブル自体は残して**行を削除するには `DELETE` 文を使います。

### 全ての行を削除する

```sql title="構文：DELETE 文；全ての行を削除する"
DELETE FROM <テーブル名>;
```

:::info `TRANCATE` 文

多くの RDBMS 製品－－Oracle、SQL Server、PostgreSQL、My
SQL、DB2－－で用意されている方言として「`TRANCATE`」があります。これは、テーブルから全行を削除するものですが、`DELETE` 文よりも実行速度が早いことが特徴です。

:::

### 探索型 `DELETE`

```sql title="構文：DELETE 文；条件に合う行を削除する（探索型 DELETE）"
DELETE FROM <テーブル名>
WHERE <条件>;
```

## 文；`DROP TABLE` 文

- テーブルを、全ての行を含め**まるごと**削除するには `DROP TABLE` 文を使います。

## トランザクション

- **トランザクション**とは、ひとまとまりで実行されるべき1つ以上のデータ操作処理の集まりのことです。
- DBMS におけるトランザクションは、ACID 特性を守る義務があります。

  :::note ACID 特性

  - **Atomicity: 原子性**

    トランザクションの終了後の状態が、「`COMMIT` された状態」か「`ROLLBACK` された状態」のどちらか片方であるという性質のこと。

  - **Consistency: 一貫性**

    処理結果が、与えられた整合性を満たすことを保証する性質のこと。

  - **Isolation: 独立性** 

    個々のトランザクションが、他のトランザクションの操作から隠蔽され独立していること。

  - **Durability: 永続性**

    トランザクション操作の完了通知をユーザが受けた時点で、その操作は永続的となり、結果が失われないこと。

  :::

- トランザクションを作成するには、**トランザクション開始文**と**トランザクション終了文**の間にデータ操作文（DML 文）を1つ以上記述します。

  ```sql title="構文：トランザクション"
  トランザクション開始文（「BEGIN TRANSACTION」または「START TRANSACTION」）;

      DML文1;
      DML文2;
      DML文3;
      ...

  トランザクション終了文（「COMMIT」または「ROLLBACK」）;
  ```
  - _トランザクション開始文_

    実は標準 SQL では、トランザクションを明示的に開始する方法を定めていません。そのため、ベンダーごとに方法が定義されています：

    - `BEGIN TRANSACTION` – SQL Server、PostgreSQL
    - `START TRANSACTION` – MySQL
    - なし（つまり暗黙的に開始される） – Oracle、DB2
    
    :::note 自動コミットモード
  
    **自動コミットモード**は、「1つの SQL 文で1つのトランザクション」というルールです。SQL Server、PostgreSQL、MySQL においては規定になっています。このモードでは、ロールバックが行えないので注意が必要です。

    一方、Oracle では、「ユーザーが `COMMIT` または `ROLLBACK` を実行するまでが1つのトランザクションとみなされる」というルールが既定となっています。Oracle では、データベースへの接続後、最初に SQL が実行された時点でトランザクションが暗黙に開始されることになっているため、ユーザーがトラザクションの終了を明示するまではトランザクションが終わることはありません。

    :::
  - _トランザクション終了文_
    - `COMMIT` – 一連の処理を全て確定してトランザクションを終了します。
    - `ROLLBACK` – 一連の処理を全て取り消してトランザクションを終了します。

## ビュー

- ビューは **`SELECT` 文を保存する仕組み**です。
- ビューを作るには `CREATE VIEW` 文を使います。

  ```sql title="構文：CRESTE VIEW 文"
  CREATE VIEW <ビュー名> (<ビューの列名1>, <ビューの列名2>, ……)
  AS
  <SELECT 文>;
  ```

  ```sql title="例：ビューの作成"
  CREATE VIEW ShohinSum (shohin_bunrui, cnt_shohin)
  AS
  SELECT shohin_bunrui, COUNT(*)
  FROM Shohin
  GROUP BY shohin_bunrui;
  ```

- 標準 SQL では、ビューの中で `OREDER BY` 句を使用することはできません－－但し、PostgreSQL ではこの仕様に反し、使用することができます。
- 作成したビューは、`SELECT` 文の `FROM` 句で使うことができます。

  ```sql title="例：SELE" {2}
  SELECT shohin_bunrui, cnt_shohin
  FROM ShohinSum;
  /* 表示結果：
  shohin_bunrui | cnt_shohin
  --------------+------------
  衣服           | 2
  事務用品        | 2
  キッチン用品     | 4
  */
  ```

- ビューに対する更新は可能ですが、_制限_があります－－後述します。
- ビューを削除するには `DROP VIEW` 文を使います。

  ```sql title="構文：DROP VIEW 文"
  DROP VIEW <ビュー名>;
  ```

### ビューに対する更新

ビューを通してテーブルを更新することは可能ですが、各種制約－－主キーや `NOT NULL` など－－に加えて次の制限があります：

- `SELECT` 句に `DISTINCT` が含まれていないこと
- `FROM` 句に含まれるテーブルが1つだけであること

  複数のテーブルがあると、エンティティを特定できません。

- `GROUP BY` 句を使用していないこと

  ビューとテーブルの更新は連動して行なわれるため、集約されたビューは更新できません。

```sql title="例：ビューを更新できるケース"
-- 更新可能なビュー：
CREATE VIEW ShohinJim
(shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi)
AS
SELECT *
FROM Shohin
WHERE shohin_bunrui = '事務用品';

-- Shohin テーブルは ShohinJim ビューを通して更新されます：
INSERT INTO ShohinJim
VALUES ('0009', '印鑑', '事務用品', 95, 10, '2009-11-30');
```

## サブクエリ

- サブクエリは、一言で言うと「使い捨てのビュー」です。
- サブクエリには名前をつける必要があり、処理内容から考えて適切な名前を付けます。
- 特に、必ず1行1列だけの結果を返すサブクエリを「スカラ・サブクエリ」と呼びます。

```sql title="例：サブクエリ" {2-7}
SELECT shohin_bunrui, cnt_shohin
FROM (
    SELECT shohin_bunrui, COUNT(*) AS cnt_shohin
    FROM Shohin
    GROUP BY shohin_bunrui
) AS ShohinSum;  -- 注記：AS は省略可能。
```

### スカラ・サブクエリ

スカラ・サブクエリは、戻り値が**単一の値**になるサブクエリのことです。

スカラ・サブクエリの便利なところは、比較演算子の入力とすることができる点にあります。

- 例えば、次のクエリは、エラーとなります：

  ```sql title="失敗例：WHERE 句に集約関数は使えない" {3}
  SELECT shohin_id, shohin_mei, hanbai_tanka
  FROM Shohin
  WHERE hanbai_tanka > AVG(hanbai_tanka);
  ```

- 一方、スカラ・サブクエリを使うと上手くいきます：

  ```sql title="成功例：スカラ・サブクエリを使用する" {3-6}
  SELECT shohin_id, shohin_mei, hanbai_tanka
  FROM Shohin
  WHERE hanbai_tanka > (
      SELECT AVG(hanbai_tanka)
      FROM Shohin
  );
  ```

### 相関サブクエリ

サブクエリは、先ず内側のクエリが実行され、その後に外側のクエリがその結果を利用します。**相関サブクエリ**は、これに加えて、サブクエリ側が外側にあるクエリの列を参照し、その行ごとに実行さます。

```sql title="例：相関サブクエリ" {7}
-- 商品分類ごとに全体の平均販売単価よりも高いものを表示する
SELECT shohin_bunrui, shohin_mei, hanbai_tanka
FROM Shohin AS S1
WHERE hanbai_tanka > (
    SELECT AVG(hanbai_tanka)
    FROM Shohin AS S2
    WHERE S1.shohin_bunrui = S2.shohin_bunrui
);
```

:::note 相関名のスコープ

相関にはスコープのルールがあり、外側のスコープから内側のスコープを参照することは出来ません。

```sql title="失敗例" {3}
SELECT shohin_bunrui, shohin_mei, hanbai_tanka
FROM Shohin AS S1
WHERE S1.shohin_bunrui = S2.shohin_bunrui
AND hanbai_tanka > (
    SELECT AVG(hanbai_tanka)
    FROM Shohin AS S2
    GROUP BY shohin_bunrui
);
```

:::

## 関数

- _算術関数_ – 数値の計算を行なうための関数
- _文字列関数_ – 文字列を操作するための関数
- _日付関数_ – （日付を操作するための関数
- _変換関数_ – データ型や値を変換するための関数
- _集約関数_ – 複数行を1行にまとめる関数
- _述語_ – 文字列が真理値になる特殊な関数

### 算術関数

- _四則演算を行う関数_ – `+`、`-`、`*`、`/`
- `ABS` – 絶対値を求めます。
- `MOD` – 剰余を求めます。
- `ROUND` – 四捨五入を行います。

### 文字列関数

- `||` – 文字列を連結します。
- `LENGTH` – 文字列の長さを求めます。
- `LOWER` – アルファベットを小文字に変換にします。
- `REPLACE` – 文字列を別の文字列に置き換えます。
- `SUBSTRING` – 文字列を切り出します。
- `UPPER` – アルファベットを大文字に変換にします。

### 日付関数

日付関数の大部分は、実際には実装依存になっているます。

- `CURRENT_DATE` – 現在の日付を求めます。
- `CURRENT_TIME` – 現在の時間を求めます。
- `CURRENT_TIMESTAMP` – 現在の日時を求めます。
- `EXTRACT` – 日付を切り出します。

### 変換関数

- `CAST` – 型変換を行います。
- `COALESCE` – リストから最初に現れる `NULL` でない値を返します。

### 集約関数

**集約関数**は、複数行を1行にまとめる関数です。基本的に `NULL`　を除外する性質を持ちます。引数に `DISTINCT` キーワードを使うと重複を排除できます。

集約関数は次の5つがあります：

- `COUNT` – 行数を数えます。引数に、特定の列ではなく `*` を指定すると `NULL` を除外せずに計算します。
- `SUM` – **数値データ**の合計を求めます。
- `AVG` – **数値データ**の平均を求めます。
- `MAX` – **数値データまたは文字データ**の最大を求めます。
- `MIN` – **数値データまたは文字データ**の最小を求めます。

### 述語

- [`LIKE`](#like) – 文字列のパターンマッチング
- [`BETWEEN`](#between) – 数値の範囲検索
- `IS NULL` と `IS NOT NULL` – `NULL` の判定
- [`IN`](#in) – 存在の判定
- [`EXISTS`](#exists) – ある条件に合致するレコードの存在有無の判定

#### `LIKE`

- ```sql title="前方一致"
  LIKE '<文字列>%'
  ```
- ```sql title="中間一致"
  LIKE '%<文字列>%'
  ```
- ```sql title="後方一致"
  LIKE '%<文字列>'
  ```

```sql title="例：LIKE による前方一致検索" {4}
SELECT *
FROM SampleLike
WHERE strcol
LIKE 'ddd%';
```

#### `BETWEEN`

```sql title="例：販売単価が100～1000円の商品を選択" {4}
SELECT shohin_mei, hanbai_tanka
FROM Shohin
WHERE hanbai_tanka
BETWEEN 100 AND 1000;
```

#### `IN`

- ```sql title="例1：IN で複数の仕入単価を指定して検索" {4}
  SELECT shohin_mei, shiire_tanka
  FROM Shohin
  WHERE shiire_tanka
  IN (320, 500, 5000);
  ```
- ```sql title="例2：IN の引数にサブクエリを使う" {4-8}
  SELECT shohin_mei, hanbai_tanka
  FROM Shohin
  WHERE shohin_id
  IN (
      SELECT shohin_id
      FROM TenpoShohin
      WHERE tenpo_id = '000C'
  );
  ```
- ```sql title="例3：NOT INの引数にサブクエリを使う" {4-8}
  SELECT shohin_mei, hanbai_tanka
  FROM Shohin
  WHERE shohin_id
  NOT IN (
      SELECT shohin_id
      FROM TenpoShohin
      WHERE tenpo_id = '000A'
  );
  ```
  
:::danger `NOT IN` の引数に `NULL` を入れてはならない

TODO: 『達人に学ぶ SQL徹底指南書　第2版』（翔泳社刊）の「第1部：1-4　3値論理
とNULL」を読んだ際に記述すること。

:::

#### `EXISTS`

`EXISTS` は、引数にサブクエリをとり、存在の確認を行います。存在確認を行うだけなので、このサブクエリの `SELECT` 句ではどんな列を指定してもよく、慣習的に `*` が用いられます。

```sql title="例：EXISTSで「大阪店に置いてある商品の販売単価」を求める
SELECT shohin_mei, hanbai_tanka
FROM Shohin AS S
WHERE EXISTS (
    SELECT * 
    FROM TenpoShohin AS TS
    WHERE TS.tenpo_id = '000C'
    AND TS.shohin_id = S.shohin_id
);
```

## `CASE` 式

- `CASE` 式を使うと、`SELECT` 文の結果を柔軟に組み替えることが出来ます。
- `CASE` 式には、「**単純 `CASE` 式**」と、その機能を全て含む「**検索 `CASE` 式**」があります：
  - ```sql title="構文：検索 CASE 式"
    CASE WHEN <評価式1> THEN <式1>
         WHEN <評価式2> THEN <式2>
         WHEN <評価式3> THEN <式3>
         ・・・
         ELSE <式n>
    END
    ```
  - ```sql title="構文：単純 CASE 式"
    CASE <式>
         WHEN <式> THEN <式>
         WHEN <式> THEN <式>
         WHEN <式> THEN <式>
         ・・・
         ELSE <式>
    END
    ```

```sql title="例：検索 CASE 式"
SELECT shohin_mei,
    CASE WHEN shohin_bunrui = '衣服'
         THEN 'A：' || shohin_bunrui
         WHEN shohin_bunrui = '事務用品'
         THEN 'B：' || shohin_bunrui
         WHEN shohin_bunrui = 'キッチン用品'
         THEN 'C：' || shohin_bunrui
         ELSE NULL
    END AS abc_shohin_bunrui
FROM Shohin;

/* 実行結果：
shohin_mei  | abc_shohin_bunrui
------------+-------------------
Ｔシャツ      | A：衣服
穴あけパンチ   | B：事務用品
カッターシャツ  | A：衣服
包丁         | C：キッチン用品
圧力鍋        | C：キッチン用品
フォーク      | C：キッチン用品
おろしがね     | C：キッチン用品
ボールペン     | B：事務用品
*/
```

:::note 単純 `CASE` 式

上記の検索 `CASE` 式を単純 `CASE` 式で書き直すと次のようになります：

```sql title="例：単純 CASE 式"
SELECT shohin_mei,
       CASE shohin_bunrui
            WHEN '衣服' THEN 'A：' | | shohin_bunrui
            WHEN '事務用品' THEN 'B：' | | shohin_bunrui
            WHEN 'キッチン用品' THEN 'C：' | | shohin_bunrui
            ELSE NULL
       END AS abc_shohin_bunrui
FROM Shohin;
```

単純 `CASE` 式では、「`CASE shohin_bunrui`」のように、評価したい式－－ここでは列
そのものですが－－を記述した後は、`WHEN` 句でもう一度「`shohin_bunrui`」を記述する
必要がないので手軽です。しかし、「`WHEN` 句ごとに違う列に対して条件を指定したい」場合などは、単純 `CASE` 式で記述することはできません。

:::

## 集合演算

集合演算の種類:

- _行方向の集合演算_
  - [`UNION`](#union) – 和集合
  - [`INTERSECT`](#intersect) – 交差集合
  - [`EXEPT`](#except) – 差集合
- _列方向の集合演算_
  - [`INNER JOIN`](#inner-join) – 内部結合
  - [`OUTER JOIN`](#outer-join) – 外部結合
  - [`CROSS JOIN`](#cross-join) – クロス結合

**行方向の集合演算**の注意事項：

- 演算対象となるレコードの列数がおなじであること
- 演算対象となるレコードのデータ型一致するか、さもなくば許容されること
- `SELECT` 文ならどんな組み立てでも良いが、`ORDER BY` 句だけは最後に1つだけ追加できる。
- 重複を残す場合は `ALL` オプションを使う。

### `UNION`

- `UNION` は、2つ以上のテーブルの和集合を演算します。

```sql title="例：UNION によるテーブルの和集合"
/* Shohin:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0004      | 包丁        | キッチン用品     |          3000 |        2800 | 2009-09-20
  0005      | 圧力鍋       | キッチン用品     |         3000 |         5000 | 2009-01-15
  0006      | フォーク      | キッチン用品     |         500 |         NULL | 2009-09-20
  0007      | おろしがね    | キッチン用品     |          880 |         790 | 2008-04-28
  0008      | ボールペン    | 事務用品        |          100 |        NULL | 2009-11-11
*/
/* Shohin2:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0009      | 手袋        | 衣服           |          800 |          500 | NULL
  0010      | やかん       | キッチン用品     |         2000 |         1700 | 2009-09-20
*/
SELECT shohin_id, shohin_mei
FROM Shohin
UNION
SELECT shohin_id, shohin_mei
FROM Shohin2;
/* 実行結果：
 shohin_id | shohin_mei
-----------+------------
 0001      | Tシャツ
 0002      | 穴あけパンチ
 0003      | カッターシャツ
 0004      | 包丁
 0005      | 圧力鍋
 0006      | フォーク
 0007      | おろしがね
 0008      | ボールペン
 0009      | 手袋
 0010      | やかん
*/
```

### `INTERSECT`

- `INTERSECT` は、2つのテーブルの交差集合を演算します。

```sql title="例：INTERSECT によるテーブルの交差集合"
/* Shohin:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0004      | 包丁        | キッチン用品     |          3000 |        2800 | 2009-09-20
  0005      | 圧力鍋       | キッチン用品     |         3000 |         5000 | 2009-01-15
  0006      | フォーク      | キッチン用品     |         500 |         NULL | 2009-09-20
  0007      | おろしがね    | キッチン用品     |          880 |         790 | 2008-04-28
  0008      | ボールペン    | 事務用品        |          100 |        NULL | 2009-11-11
*/
/* Shohin2:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0009      | 手袋        | 衣服           |          800 |          500 | NULL
  0010      | やかん       | キッチン用品     |         2000 |         1700 | 2009-09-20
*/
SELECT shohin_id, shohin_mei
FROM Shohin
INTERSECT
SELECT shohin_id, shohin_mei
FROM Shohin2
ORDER BY shohin_id;
/* 実行結果：
 shohin_id | shohin_mei
-----------+------------
 0001      | Tシャツ
 0002      | 穴あけパンチ
 0003      | カッターシャツ
*/
```

### `EXCEPT`

- `EXCEPT` は、2つ以上のテーブルの差集合を演算します。
- 記述する順番によって結果が変わってきます。

```sql title="例：EXCEPT によるテーブルの差集合"
/* Shohin:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0004      | 包丁        | キッチン用品     |          3000 |        2800 | 2009-09-20
  0005      | 圧力鍋       | キッチン用品     |         3000 |         5000 | 2009-01-15
  0006      | フォーク      | キッチン用品     |         500 |         NULL | 2009-09-20
  0007      | おろしがね    | キッチン用品     |          880 |         790 | 2008-04-28
  0008      | ボールペン    | 事務用品        |          100 |        NULL | 2009-11-11
*/
/* Shohin2:
  shohin_id | shohin_mei | shohin_bunrui | hanbai_tanka | shiire_tnaka | torokubi
 -----------+------------+---------------+--------------+--------------+------------
  0001      | Tシャツ      | 衣服           |         1000 |          500 | 2008-09-20
  0002      | 穴あけパンチ  | 事務用品        |          500 |          320 | 2009-09-11
  0003      | カッターシャツ | 衣服           |         4000 |         2800 | NULL
  0009      | 手袋        | 衣服           |          800 |          500 | NULL
  0010      | やかん       | キッチン用品     |         2000 |         1700 | 2009-09-20
*/
SELECT shohin_id, shohin_mei
FROM Shohin
EXCEPT
SELECT shohin_id, shohin_mei
FROM Shohin2
ORDER BY shohin_id;
/* 実行結果：
 shohin_id | shohin_mei
-----------+------------
 0003      | カッターシャツ
 0004      | 包丁
 0005      | 圧力鍋
 0006      | フォーク
 0007      | おろしがね
 0008      | ボールペン
*/
```

### `INNER JOIN`

内部結合（`INNER JOIN`）は、2つのテーブルを、**両方に存在するデータ**を結合キーとして結合します。

```sql title="例1：2つのテーブルの内部結合"
SELECT TS.tenpo_id, TS.tenpo_mei, TS.shohin_id, S.shohin_mei, s.hanbai_tanka
FROM TenpoShohin AS TS
    INNER JOIN Shohin AS S
    ON TS.shohin_id = S.shohin_id
WHERE TS.tenpo_id = '000A';
/* 実行結果：
 tenpo_id | tenpo_mei | shohin_id | shohin_mei | hanbai_tanka
----------+-----------+-----------+------------+--------------
 000A     | 東京       | 0001      | Tシャツ      |         1000
 000A     | 東京       | 0002      | 穴あけパンチ   |          500
 000A     | 東京       | 0003      | カッターシャツ |          4000
*/
```

```sql title="例2：3つのテーブルの内部結合"
SELECT TS.tenpo_id, TS.tenpo_mei, TS.shohin_id, S.shohin_mei, S.hanbai_tanka, ZS.zaiko_suryo
FROM TenpoShohin AS TS
    INNER JOIN Shohin AS S
    ON TS.shohin_id = S.shohin_id
        INNER JOIN ZaikoShohin AS ZS
        ON TS.shohin_id = ZS.shohin_id
WHERE ZS.souko_id = 'S001';
/* 実行結果：
 tenpo_id | tenpo_mei | shohin_id | shohin_mei | hanbai_tanka | zaiko_suryo
----------+-----------+-----------+------------+--------------+-------------
 000A     | 東京       | 0002      | 穴あけパンチ  |          500 |         120
 000A     | 東京       | 0003      | カッターシャツ |         4000 |         200
 000A     | 東京       | 0001      | Tシャツ      |         1000 |           0
 000B     | 名古屋      | 0007      | おろしがね   |          880 |          999
 000B     | 名古屋      | 0002      | 穴あけパンチ  |          500 |         120
 000B     | 名古屋      | 0003      | カッターシャツ |        4000 |          200
 000B     | 名古屋      | 0004      | 包丁        |         3000 |           3
 000B     | 名古屋      | 0006      | フォーク     |          500 |          99
 000C     | 大阪       | 0007      | おろしがね    |          880 |         999
 000C     | 大阪       | 0006      | フォーク      |         500 |           99
 000C     | 大阪       | 0003      | カッターシャツ |         4000 |          200
 000C     | 大阪       | 0004      | 包丁         |        3000 |            3
 000D     | 福岡       | 0001      | Tシャツ      |         1000 |            0
*/
```

### `OUTER JOIN`

外部結合（`OUTER JOIN`）は、2つのテーブルの一方（`LEFT` または `RIGHT`）を基準とし、結合キーを基に他方を結合します。「基準となったテーブルのデータは全て結果に含まれること」と「不明なデータは `NULL` で埋められること」が特徴です。

```sql title="例：外部結合（LEFT）"
SELECT TS.tenpo_id, TS.tenpo_mei, S.shohin_id, S.shohin_mei, S.hanbai_tanka
FROM Shohin AS S
    LEFT OUTER JOIN TenpoShohin AS TS
    ON TS.shohin_id = S.shohin_id;
/* 実行結果：
 tenpo_id | tenpo_mei | shohin_id | shohin_mei | hanbai_tanka
----------+-----------+-----------+------------+--------------
 000A     | 東京       | 0002      | 穴あけパンチ  |          500
 000A     | 東京       | 0003      | カッターシャツ |         4000
 000A     | 東京       | 0001      | Tシャツ      |         1000
 000B     | 名古屋      | 0007      | おろしがね   |          880
 000B     | 名古屋      | 0002      | 穴あけパンチ  |          500
 000B     | 名古屋      | 0003      | カッターシャツ |        4000
 000B     | 名古屋      | 0004      | 包丁        |         3000
 000B     | 名古屋      | 0006      | フォーク     |          500
 000C     | 大阪       | 0007      | おろしがね    |          880
 000C     | 大阪       | 0006      | フォーク      |         500
 000C     | 大阪       | 0003      | カッターシャツ |         4000
 000C     | 大阪       | 0004      | 包丁         |        3000
          |           | 0005      | 圧力鍋        |        6800
          |           | 0008      | ボールペン     |         100
*/
```

### `CROSS JOIN`

直積結合（`CROSS JOIN`）は、テーブル同士のレコードの全ての組み合わせを網羅する結合です。結果のレコード数は結合するテーブルのレコード数と結合されるテーブルのレコード数の積と等しくなります。

```sql title="例：直積結合"
SELECT TS.tenpo_id, TS.tenpo_mei, TS.shohin_id, S.shohin_mei
FROM TenpoShohin AS TS
    CROSS JOIN Shohin AS S;
```

## ウィンドウ関数

```sql title="構文：ウィンドウ関数"
<ウィンドウ関数> OVER ([PARTITION BY <列リスト>]
ORDER BY <ソート用列リスト>)
```

- ウィンドウ関数として使える関数：
  - _集約関数_ – `SUM`、`AVG`、`COUNT`、`MAX`、`MIN`
  - _ウィンドウ専用関数_
    - `RANK` – レコードの順位を算出する（同一順位が複数ある場合、後続の順位が飛ぶ）
    - `DENSE_RANK` – レコードの順位を算出する（同一順位が複数ある場合、後続の順位が飛ばない）
    - `ROW_NUMBER` – 一意な連番を付与する
    - 他方言による

```sql title="例：ウィンドウ関数（RANK）" {2-5}
SELECT shohin_mei, shohin_bunrui, hanbai_tanka,
    RANK () OVER (
        PARTITION BY shohin_bunrui ORDER BY hanbai_tanka
    ) AS ranking
FROM Shohin;
/* 実行結果：
 shohin_mei | shohin_bunrui | hanbai_tanka | ranking
------------+---------------+--------------+---------
 フォーク     | キッチン用品     |          500 |       1
 おろしがね    | キッチン用品     |         880 |       2
 包丁        | キッチン用品     |         3000 |       3
 圧力鍋       | キッチン用品     |         6800 |       4
 Tシャツ      | 衣服           |         1000 |       1
 カッターシャツ | 衣服           |         4000 |       2
 ボールペン    | 事務用品        |          100 |       1
 穴あけパンチ  | 事務用品        |          500 |       2
*/
```

### `PARTITION BY` 句

`PARTITION BY` 句は、ウィンドウ関数に対して、順位を付ける対象の範囲を設定します。この、それぞれの範囲の集合を「ウィンドウ」と呼びます。

### `OREDER BY` 句

ウィンドウ関数における `ORDER BY` 句は、どんな順序で順位づけするかを指定します。

:::note ウィンドウ関数における `ORDER BY` 句は `SELECT` 文の `ORDER BY` 句と異なる

次の `SELECT` 文には、2つの `ORDER BY` 句がありますが、それぞれ役割が異なります。

```sql title="例：2つの意味の異なる ORDER BY 句" {3,6}
SELECT shohin_mei, shohin_bunrui, hanbai_tanka,
       RANK () OVER (
           ORDER BY hanbai_tanka  -- 昇順でウィンドウ関数を実行することを指定
       ) AS ranking
FROM Shohin
ORDER BY ranking;  -- 結果を昇順で並び替えることを指定
```

:::

### フレーム

ウィンドウ関数において、ウィンドウの中で更に集計範囲を細かく指定するオプション機能として「フレーム」があります。フレームにはいくつかの_キーワード_を使います：

- `ROWS` – 行数を指定する
- `PRECEDING` – 「前」の位置を指定する
- `FOLLOWING` - 「後」の位置を指定する

```sql title="例：ウィンドウ関数に、フレームを使ってカレントレコードの前後の行を集計対象に含める" {4}
SELECT shohin_id, shohin_mei, hanbai_tanka,
AVG (hanbai_tanka) OVER (
    ORDER BY shohin_id
        ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
) AS moving_avg
FROM Shohin;
/*
 shohin_id | shohin_mei | hanbai_tanka | moving_avg
-----------+------------+--------------+------------
 0001      | Tシャツ      |         1000 |        750 ←(1000+500)/2
 0002      | 穴あけパンチ  |          500 |        1833 ←(1000+500+4000)/3
 0003      | カッターシャツ |         4000 |       2500 ←(500+4000+3000)/3
 0004      | 包丁        |         3000 |       4600 ←(4000+3000+6800)/3
 0005      | 圧力鍋       |         6800 |       3433
 0006      | フォーク     |          500 |        2726
 0007      | おろしがね    |          880 |        493
 0008      | ボールペン    |          100 |        490
*/
```

## `GROUPING` 演算子

### `ROLLUP` 演算子

`ROLLUP` は、集約キーの組み合わせが異なる結果を一度に計算します。

```sql title="例：ROLLUP で合計行と小計を一度に求める"
SELECT shohin_bunrui, SUM(hanbai_tanka) AS sum_tanka
FROM Shohin
GROUP BY ROLLUP(shohin_bunrui);
-- 補足：MySQL では、GROUP BY句を「GROUP BY shohin_bunrui WITH ROLLUP;」に変更してください。
/* 実行結果：
 shohin_bunrui | sum_tanka
---------------+-----------
               |     16780
     キッチン用品 |     11180
        事務用品 |       600
           衣服 |      5000
*/
```

### `CUBE` 演算子

`CUBE` は、`GROUP BY` 句に与えられた集約キーの「すべての可能な組み合わせ」を1つの結果に含める機能です。

```sql title="例：CUBEで可能なすべての組み合わせを取得する"
SELECT CASE WHEN GROUPING(shohin_bunrui) = 1
            THEN '商品分類 合計'
            ELSE shohin_bunrui END AS shohin_bunrui,
       CASE WHEN GROUPING(torokubi) = 1
            THEN '登録日 合計'
            ELSE CAST(torokubi AS VARCHAR(16)) END AS torokubi,
       SUM(hanbai_tanka) AS sum_tanka
FROM Shohin
GROUP BY CUBE(shohin_bunrui, torokubi);
/* 実行結果：
 shohin_bunrui | torokubi   | sum_tanka
---------------+------------+-----------
 商品分類 合計    | 登録日 合計  |      16780
 商品分類 合計    | 2008-04-28 |        880  ←追加
 商品分類 合計    | 2009-01-15 |       6800  ←追加
 商品分類 合計    | 2009-09-11 |        500  ←追加
 商品分類 合計    | 2009-09-20 |       4500  ←追加
 商品分類 合計    | 2009-11-11 |        100  ←追加
 商品分類 合計    |            |       4000  ←追加
 キッチン用品     | 登録日   合計 |      11180
 キッチン用品     | 2008-04-28 |        880
 キッチン用品     | 2009-01-15 |       6800
 キッチン用品     | 2009-09-20 |       3500
 事務用品        | 登録日 合計   |        600
 事務用品        | 2009-09-11 |        500
 事務用品        | 2009-11-11 |        100
 衣服           | 登録日 合計   |       5000
 衣服           | 2009-09-20 |        1000
 衣服           |            |        4000
*/
```

### `GROUPING SETS` 演算子

`GROUPING SETS` は、`ROLL UP` や `CUBE` で求めた結果の一部のレコードだけを求めればいい場合に使います。

```sql title="例：GROUPING SETS で部分的な組み合わせを取得する"
SELECT CASE WHEN GROUPING(shohin_bunrui) = 1
            THEN '商品分類 合計'
            ELSE shohin_bunrui END AS shohin_bunrui,
       CASE WHEN GROUPING(torokubi) = 1
            THEN '登録日 合計'
            ELSE CAST(torokubi AS VARCHAR(16)) END AS torokubi,
       SUM(hanbai_tanka) AS sum_tanka
FROM Shohin
GROUP BY GROUPING SETS (shohin_bunrui, torokubi);
/* 実行結果：
 shohin_bunrui | torokubi   | sum_tanka
---------------+------------+-----------
 商品分類 合計    | 2008-04-28 |       880
 商品分類 合計    | 2009-01-15 |      6800
 商品分類 合計    | 2009-09-11 |       500
 商品分類 合計    | 2009-09-20 |      4500
 商品分類 合計    | 2009-11-11 |       100
 商品分類 合計    |            |      4000
 キッチン用品     | 登録日 合計   |     11180
 事務用品        | 登録日 合計   |       600
 衣服           | 登録日 合計   |      5000
*/
```

## コメント

- ```sql title="単一行コメント"
  -- 単一行コメントです。
  ```
- ```sql title="複数行コメント"
  /* 複数行に渡る
     コメントです。 */
  ```