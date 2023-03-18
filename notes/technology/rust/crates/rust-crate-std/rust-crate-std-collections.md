---
slug: /rust-crate-std-collections
sidebar_label: std::collections
---

# 【Rust】標準ライブラリ `std::collections`

> コレクションの型。

Rust の 標準コレクションライブラリ ([`std::collections`](https://doc.rust-lang.org/std/collections/index.html)) は、最も一般的な汎用プログラミングデータ構造の効率的な実装を提供します。標準の実装を使用することにより、2つのライブラリが大幅なデータ変換なしで通信できるようになります。

これを邪魔にならないようにするには、おそらく [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) または [`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) を使用する必要があります。これらの2つのコレクションは、一般的なデータの保存と処理のほとんどのユースケースをカバーしています。彼らは彼らがしていることをするのが非常に得意です。標準ライブラリの他のすべてのコレクションには、それらが最適な選択である特定のユースケースがありますが、これらのケースは、比較すると境界ニッチです。`Vec` と `HashMap` が技術的に最適ではない場合でも、開始するにはおそらく十分な選択です。

Rust のコレクションは、次の4つの主要なカテゴリに分類できます：

- シーケンス：[`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html)、[`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html)、[`LinkedList`](https://doc.rust-lang.org/std/collections/struct.LinkedList.html)
- マップ：[`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html)、[`BTreeMap`](https://doc.rust-lang.org/std/collections/struct.BTreeMap.html)
- セット：[`HashSet`](https://doc.rust-lang.org/std/collections/hash_set/struct.HashSet.html)、[`BTreeSet`](https://doc.rust-lang.org/std/collections/struct.BTreeSet.html)
- その他：[`BinaryHeap`](https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html)

公開メンバー：

- _モジュール_
  - [`binary_heap`](https://doc.rust-lang.org/std/collections/binary_heap/index.html) — バイナリヒープで実装された優先キュー。
  - [`btree_map`](https://doc.rust-lang.org/std/collections/btree_map/index.html) — Bツリーに基づくマップ。
  - [`btree_set`](https://doc.rust-lang.org/std/collections/btree_set/index.html) — Bツリーをベースにしたセット。
  - [`hash_map`](https://doc.rust-lang.org/std/collections/hash_map/index.html) — 2次プロービングとSIMDルックアップで実装されたハッシュマップ。
  - [`hash_set`](https://doc.rust-lang.org/std/collections/hash_set/index.html) — 値が `()` である `HashMap` として実装されたハッシュセット。
  - [`linked_list`](https://doc.rust-lang.org/std/collections/linked_list/index.html) — 所有ノードを持つ二重リンクリスト。
  - [`vec_deque`](https://doc.rust-lang.org/std/collections/vec_deque/index.html) — 拡大可能なリングバッファで実装された両端キュー。
- _構造体_
  - [`BTreeMap`](https://doc.rust-lang.org/std/collections/struct.BTreeMap.html) — [Bツリー](https://en.wikipedia.org/wiki/B-tree) に基づくマップ。
  - [`BTreeSet`](https://doc.rust-lang.org/std/collections/struct.BTreeSet.html) — Bツリーをベースにしたセット。
  - [`BinaryHeap`](https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html) — バイナリヒープで実装された優先キュー。
  - [`HashMap`](https://doc.rust-lang.org/std/collections/struct.HashMap.html) — 2次プロービングと SIMD ルックアップで実装された [ハッシュマップ](https://doc.rust-lang.org/std/collections/index.html#use-a-hashmap-when)。
  - [`HashSet`](https://doc.rust-lang.org/std/collections/struct.HashSet.html) — 値が `()` であるHashMapとして実装された [ハッシュセット](https://doc.rust-lang.org/std/collections/index.html#use-the-set-variant-of-any-of-these-maps-when)。
  - [`LinkedList`](https://doc.rust-lang.org/std/collections/struct.LinkedList.html) — 所有ノードを持つ2重リンクリスト。
  - [`TryReserveError`](https://doc.rust-lang.org/std/collections/struct.TryReserveError.html) — `try_reserve` メソッドのエラー型。
  - [`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html) — 拡大可能なリングバッファで実装された両端キュー。
- _列挙型_
  - [`TryReserveErrorKind`](https://doc.rust-lang.org/std/collections/enum.TryReserveErrorKind.html) [実験的] — `TryReserveError` の原因となった割り当ての詳細

## どのコレクションをいつ使用する必要がありますか？

これらは、各コレクションを検討する必要がある時期のかなり高レベルで迅速な内訳です。個々のコレクションの長所と短所の詳細な説明は、それぞれのドキュメントページにあります。

### 次の場合に `Vec` を使用します：

- 後で処理または他の場所に送信するためにアイテムを収集する必要があり、保存されている実際の値のプロパティは気にしません。
- 特定の順序で要素のシーケンスが必要であり、最後に（またはその近くに）追加するだけです。
- スタックが必要です。
- サイズ変更可能な配列が必要です。
- ヒープに割り当てられた配列が必要です。

### 次の場合に `VecDeque` を使用します：

- シーケンスの両端で効率的な挿入をサポートする [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) が必要です。
- キューが必要です。
- 両端キュー（deque）が必要です。

### 次の場合に `LinkedList` を使用します：

- サイズが不明な [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) または [`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html) が必要であり、償却を許容できません。
- リストを効率的に分割して追加したい。
- あなたは本当に、本当に、二重にリンクされたリストが欲しいと絶対に確信しています。

### 次の場合に `HashMap` を使用します：

- 任意のキーを任意の値に関連付けたいとします。
- キャッシュが必要です。
- 追加機能のないマップが必要です。

### 次の場合に `BTreeMap` を使用します：

- キーでソートされたマップが必要です。
- さまざまなエントリをオンデマンドで取得できるようにする必要があります。
- 最小または最大のキーと値のペアが何であるかに関心があります。
- 何かよりも小さいまたは大きい最大または最小のキーを見つけたいとします。

### 次の場合にこれら `Map` のいずれかの `Set` バリアントを使用します：

- 見たキーを覚えておきたいだけです。
- キーに関連付ける意味のある値はありません。
- セットが欲しいだけです。

### 次の場合に `BinaryHeap` を使用します：

- 多数の要素を保存したいが、常に「最大」または「最も重要」な要素のみを処理したい。
- 優先キューが必要です。

## パフォーマンス

仕事に適したコレクションを選択するには、各コレクションが得意なことを理解する必要があります。ここでは、特定の重要な操作に対するさまざまなコレクションのパフォーマンスを簡単に要約します。詳細については、各タイプのドキュメントを参照してください。実際のメソッドの名前は、特定のコレクションで以下の表と異なる場合があることに注意してください。

ドキュメント全体を通して、いくつかの規則に従います。すべての操作で、コレクションのサイズは _n_ で示されます。別のコレクションが操作に関係している場合、そのコレクションには _m_ 個の要素が含まれます。償却原価のあるオペレーションには、`*` が付いています。予想されるコストの操作には、`~` が付加されます。

償却されたすべてのコストは、容量が使い果たされたときにサイズを変更する必要がある可能性があるためのものです。サイズ変更が発生した場合、_O_(_n_) 時間がかかります。コレクションが自動的に縮小することはないため、削除操作は償却されません。十分に大規模な一連の操作では、操作あたりの平均コストは決定論的に所定のコストに等しくなります。

ハッシュの確率的性質のため、[`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) だけがコストを予想していました。理論的には、[`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) のパフォーマンスが低下する可能性はほとんどありません。

### シーケンス

|                                                                                  | get(i)                 | insert(i)               | remove(i)              | append(i) | split_off(i)           |
|----------------------------------------------------------------------------------|------------------------|-------------------------|------------------------|-----------|------------------------|
| [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html)                       | _O_(1)                 | _O_(_n_-_i_)*           | _O_(_n_-_i_)*          | _O_(_m_)* | _O_(_n_-_i_)           |
| [`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html)     | _O_(1)                 | _O_(min(_i_, _n_-_i_))* | _O_(min(_i_, _n_-_i_)) | _O_(_m_)* | _O_(min(_i_, _n_-_i_)) |
| [`LinkedList`](https://doc.rust-lang.org/std/collections/struct.LinkedList.html) | _O_(min(_i_, _n_-_i_)) | _O_(min(_i_, _n_-_i_))  | _O_(min(_i_, _n_-_i_)) | _O_(1)    | _O_(min(_i_, _n_-_i_)) |

同点が発生する場合、[`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) は通常 [`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html) よりも高速になり、[`VecDeque`](https://doc.rust-lang.org/std/collections/struct.VecDeque.html) は通常 [`LinkedList`](https://doc.rust-lang.org/std/collections/struct.LinkedList.html) よりも高速になることに注意してください。

### マップ

セットの場合、すべての操作には同等のマップ操作のコストがかかります。

|                                                                                     | get           | insert        | remove        | range         | append       |
|-------------------------------------------------------------------------------------|---------------|---------------|---------------|---------------|--------------|
| [`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) | _O_(1)~       | _O_(1)~*      | _O_(1)~       | N/A           | N/A          |
| [`BTreeMap`](https://doc.rust-lang.org/std/collections/struct.BTreeMap.html)        | _O_(log(_n_)) | _O_(log(_n_)) | _O_(log(_n_)) | _O_(log(_n_)) | _O_(_n_+_m_) |

## コレクションの正確かつ効率的な使用法

もちろん、どのコレクションがその仕事に適しているかを知っていても、すぐにそれを正しく使用することはできません。ここでは、一般的な標準コレクションを効率的かつ正しく使用するための簡単なヒントをいくつか紹介します。特に特定のコレクションの使用方法に興味がある場合は、そのドキュメントで詳細な説明とコード例を参照してください。

### 容量管理

多くのコレクションは、「容量」を参照するいくつかのコンストラクターとメソッドを提供します。これらのコレクションは通常、配列の上に構築されます。最適には、この配列はコレクションに格納されている要素のみに適合する適切なサイズになりますが、コレクションがこれを行うには非常に非効率的です。バッキング配列が常に正確に正しいサイズである場合、要素が挿入されるたびに、コレクションはそれに合うように配列を拡大する必要があります。ほとんどのコンピュータでメモリが割り当てられ、管理される方法のため、これにはほぼ確実に、まったく新しいアレイを割り当て、古いアレイから新しいアレイにすべての要素をコピーする必要があります。うまくいけば、これはすべての操作で実行するのにあまり効率的ではないことがわかります。

したがって、ほとんどのコレクションは償却配分戦略を使用しています。彼らは一般的に、彼らがたまに成長する必要があるだけであるように、彼ら自身にかなりの量の空いているスペースを持たせます。それらが成長するとき、それらは要素を移動するためにかなり大きな配列を割り当て、別の成長が必要になるまでしばらく時間がかかるようにします。この戦略は一般的には優れていますが、コレクションがバッキング配列のサイズを変更する必要がない場合はさらに優れています。残念ながら、コレクション自体には、これを実行するための十分な情報がありません。したがって、ヒントを与えるのはプログラマー次第です。

`with_capacity` コンストラクターは、指定された数の要素に十分なスペースを割り当てるようにコレクションに指示します。理想的には、これはまさにその数の要素に当てはまりますが、実装の詳細によってはこれが妨げられる場合があります。詳細については、コレクション固有のドキュメントを参照してください。一般に、挿入される要素の数が正確にわかっている場合、または少なくともその数に妥当な上限がある場合は、`with_capacity` を使用します。

大量の要素の流入を予測する場合、予備のメソッドファミリーを使用して、コレクションに次のアイテムのためにどれだけのスペースを確保する必要があるかを示唆できます。  `with_capacity` と同様に、これらのメソッドの正確な動作は、対象のコレクションに固有です。

最適なパフォーマンスを実現するために、コレクションは通常、縮小を回避します。コレクションにすぐに要素が含まれなくなる、または本当にメモリが必要になると思われる場合、 `shrink_to_fit` メソッドは、要素を保持できる最小サイズにバッキング配列を縮小するようにコレクションに促します。

最後に、コレクションの実際の容量に関心がある場合、ほとんどのコレクションは、この情報をオンデマンドで照会するための `capacity` メソッドを提供します。これは、デバッグの目的で、または `reserve` メソッドで使用する場合に役立ちます。

### イテレータ

イテレータは、Rust の標準ライブラリ全体で使用される強力で堅牢なメカニズムです。イテレータは、一般的で安全、効率的かつ便利な方法で一連の値を提供します。イテレータの内容は通常遅延評価されるため、実際に必要な値のみが実際に生成され、一時的に保存するために割り当てを行う必要はありません。イテレータは主に `for` ループを使用して使用されますが、多くの関数は、値のコレクションまたはシーケンスが必要な場合にもイテレータを使用します。

すべての標準コレクションは、コンテンツの一括操作を実行するためのいくつかのイテレータを提供します。ほとんどすべてのコレクションが提供する必要がある3つの主要なイテレーターは、`iter`、`iter_mut`、および `into_iter` です。これらのいくつかは、それらを提供することが不健全または不合理であるコレクションでは提供されません。

`iter` は、コレクションのすべてのコンテンツへの不変の参照を最も「自然な」順序で繰り返すイテレーターを提供します。 [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html) のようなシーケンスコレクションの場合、これは、アイテムが0から始まるインデックスの昇順で生成されることを意味します。[`BTreeMap`](https://doc.rust-lang.org/std/collections/struct.BTreeMap.html) のような順序付けられたコレクションの場合、これは、アイテムがソートされた順序で生成されることを意味します。 [`HashMap`](https://doc.rust-lang.org/std/collections/hash_map/struct.HashMap.html) のような順序付けされていないコレクションの場合、アイテムは、内部表現が最も便利になった順序で生成されます。これは、コレクションのすべてのコンテンツを読むのに最適です。

```rust 
let mut vec = vec![1, 2, 3, 4];
for x in vec.iter_mut() {
   *x += 1;
}
```

`into_iter` は、実際のコレクションをその内容の値によるイテレーターに変換します。これは、コレクション自体が不要になり、値が他の場所で必要になった場合に最適です。 `into_iter` で `extend` を使用することは、あるコレクションのコンテンツを別のコレクションに移動する主な方法です。 `extend` は自動的に `into_iter` を呼び出し、任意の `T: IntoIterator` を取ります。イテレータ自体で `collect` を呼び出すことも、あるコレクションを別のコレクションに変換するための優れた方法です。これらの方法は両方とも、これを可能な限り効率的に行うために、前のセクションで説明した容量管理ツールを内部的に使用する必要があります。

```rust 
let mut vec1 = vec![1, 2, 3, 4];
let vec2 = vec![10, 20, 30, 40];
vec1.extend(vec2);
```

```rust 
use std::collections::VecDeque;

let vec = vec![1, 2, 3, 4];
let buf: VecDeque<_> = vec.into_iter().collect();
```

イテレータは、シーケンスに対して共通のスレッドを実行するための一連のアダプタメソッドも提供します。アダプターの中には、`map`、`fold`、`skip`、`take`などの機能的なお気に入りがあります。コレクションで特に興味深いのは、この操作をサポートするイテレーターを逆にする `rev` アダプターです。ほとんどのコレクションは、逆の順序で反復する方法として、可逆反復子を提供します。

```rust 
let vec = vec![1, 2, 3, 4];
for x in vec.iter().rev() {
   println!("vec contained {}", x);
}
```

他のいくつかの収集メソッドもイテレータを返し、結果のシーケンスを生成しますが、結果を格納するためにコレクション全体を割り当てることは避けます。これにより、必要に応じて、 `collect` または `extend` を呼び出してシーケンスを任意のコレクションに「パイプ」できるため、最大限の柔軟性が得られます。それ以外の場合は、シーケンスを `for` ループでループすることができます。イテレータは、部分的に使用した後に破棄することもできるため、未使用のアイテムの計算を防ぐことができます。

### エントリ

`entry` APIは、キーの有無に応じてマップのコンテンツを条件付きで操作するための効率的なメカニズムを提供することを目的としています。このための主な動機付けのユースケースは、効率的なアキュムレータマップを提供することです。たとえば、各キーが表示された回数のカウントを維持したい場合は、キーが初めて表示されたかどうかについて、条件付きロジックを実行する必要があります。通常、これには `find` とそれに続く `insert` が必要であり、挿入ごとに検索作業を効果的に複製します。

ユーザーが `map.entry(&key)` を呼び出すと、マップはキーを検索し、`Entry` 列挙型のバリアントを生成します。

`Vacant(entry)` が生成された場合、キーは見つかりませんでした。この場合、唯一の有効な操作は、エントリに値を `insert` することです。これが行われると、空のエントリが消費され、挿入された値への可変参照に変換されます。これにより、検索自体の存続期間を超えて値をさらに操作できます。これは、値が挿入されたばかりかどうかに関係なく、値に対して複雑なロジックを実行する必要がある場合に役立ちます。

`Occupied(entry)` が生成された場合、キーが見つかりました。この場合、ユーザーにはいくつかのオプションがあります。占有されているエントリの値を`get`、`insert`、または `remove` できます。さらに、占有されたエントリをその値への可変参照に変換して、空の `insert` ケースに対称性を提供できます。

#### 例

`entry` が使用される2つの主な方法は次のとおりです。まず、値に対して実行されるロジックが簡単な例です。

##### 文字列内の各文字が出現する回数を数える

```rust 
use std::collections::btree_map::BTreeMap;

let mut count = BTreeMap::new();
let message = "she sells sea shells by the sea shore";

for c in message.chars() {
    *count.entry(c).or_insert(0) += 1;
}

assert_eq!(count.get(&'s'), Some(&8));

println!("Number of occurrences of each character");
for (char, count) in &count {
    println!("{}: {}", char, count);
}
```

値に対して実行されるロジックがより複雑な場合は、`entry` APIを使用して、値が初期化されていることを確認し、後でロジックを実行することができます。

##### バーでの顧客の酩酊の追跡

```rust 
use std::collections::btree_map::BTreeMap;

// A client of the bar. They have a blood alcohol level.
struct Person { blood_alcohol: f32 }

// All the orders made to the bar, by client ID.
let orders = vec![1, 2, 1, 2, 3, 4, 1, 2, 2, 3, 4, 1, 1, 1];

// Our clients.
let mut blood_alcohol = BTreeMap::new();

for id in orders {
    // If this is the first time we've seen this customer, initialize them
    // with no blood alcohol. Otherwise, just retrieve them.
    let person = blood_alcohol.entry(id).or_insert(Person { blood_alcohol: 0.0 });

    // Reduce their blood alcohol level. It takes time to order and drink a beer!
    person.blood_alcohol *= 0.9;

    // Check if they're sober enough to have another beer.
    if person.blood_alcohol > 0.3 {
        // Too drunk... for now.
        println!("Sorry {}, I have to cut you off", id);
    } else {
        // Have another!
        person.blood_alcohol += 0.1;
    }
}
```

## 挿入キーと複雑なキー

より複雑なキーがある場合、`insert`　を呼び出してもキーの値は更新されません。例えば：

```rust 
use std::cmp::Ordering;
use std::collections::BTreeMap;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
struct Foo {
    a: u32,
    b: &'static str,
}

// we will compare `Foo`s by their `a` value only.
impl PartialEq for Foo {
    fn eq(&self, other: &Self) -> bool { self.a == other.a }
}

impl Eq for Foo {}

// we will hash `Foo`s by their `a` value only.
impl Hash for Foo {
    fn hash<H: Hasher>(&self, h: &mut H) { self.a.hash(h); }
}

impl PartialOrd for Foo {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> { self.a.partial_cmp(&other.a) }
}

impl Ord for Foo {
    fn cmp(&self, other: &Self) -> Ordering { self.a.cmp(&other.a) }
}

let mut map = BTreeMap::new();
map.insert(Foo { a: 1, b: "baz" }, 99);

// We already have a Foo with an a of 1, so this will be updating the value.
map.insert(Foo { a: 1, b: "xyz" }, 100);

// The value has been updated...
assert_eq!(map.values().next().unwrap(), &100);

// ...but the key hasn't changed. b is still "baz", not "xyz".
assert_eq!(map.keys().next().unwrap().b, "baz");
```
