---
slug: /rust-crate-std-time
sidebar_label: std::time
---

# 【Rust】標準ライブラリ `std::time`

- _構造体_
  - [`FromSecsError`](https://doc.rust-lang.org/std/time/struct.FromSecsError.html) – 秒の浮動小数点値を [`Duration`](https://doc.rust-lang.org/std/time/struct.Duration.html) に変換するときに返される可能性のあるエラー。
  - [`Duration`](https://doc.rust-lang.org/std/time/struct.Duration.html) – 期間を表す `Duration` 型 。通常、システムのタイムアウトに使用されます。
  - [`Instant`](https://doc.rust-lang.org/std/time/struct.Instant.html) – 単調に減少しない時計の測定。不透明で、[`Duration`](https://doc.rust-lang.org/std/time/struct.Duration.html) でのみ役立ちます。
  - [`SystemTime`](https://doc.rust-lang.org/std/time/struct.SystemTime.html) – システムクロックの測定値。ファイルシステムや他のプロセスなどの外部エンティティとの通信に役立ちます。
  - [`SystemTimeError`](https://doc.rust-lang.org/std/time/struct.SystemTimeError.html) – `SystemTime` の `duration_since` メソッドと `elapsed` メソッドから返されたエラー。システム時刻が反対方向にどれだけあるかを学習するために使用されます。
- _定数_
  - [`UNIX_EPOCH`](https://doc.rust-lang.org/std/time/constant.UNIX_EPOCH.html) – 新しい `SystemTime` インスタンスを作成したり、`SystemTime` が時間のどこにあるかを学習したりするために使用できる時間のアンカー。

## 例

- ```rust title="例：新しい Duration を作成するための複数の方法"
  let five_seconds = Duration::from_secs(5);
  assert_eq!(five_seconds, Duration::from_millis(5_000));
  assert_eq!(five_seconds, Duration::from_micros(5_000_000));
  assert_eq!(five_seconds, Duration::from_nanos(5_000_000_000));
  
  let ten_seconds = Duration::from_secs(10);
  let seven_nanos = Duration::from_nanos(7);
  let total = ten_seconds + seven_nanos;
  assert_eq!(total, Duration::new(10, 7));
  ```

- ```rust title="例：Instant を使用して、関数の実行にかかった時間を計算する"
  let now = Instant::now();
  
  // 遅い関数を呼び出すと、時間がかかる場合があります
  slow_function();
  
  let elapsed_time = now.elapsed();
  println!("Running slow_function() took {} seconds.", elapsed_time.as_secs());
  ```
