---
slug: /rust-crate-std-net
sidebar_label: std::net
---

# 【Rust】標準ライブラリ `std::net`

> TCP / UDP通信用のネットワークプリミティブ。

[`std::net`](https://doc.rust-lang.org/std/net/) は、伝送制御およびユーザーデータグラムプロトコルのネットワーク機能、および IP アドレスとソケットアドレスの型を提供します。

組織：

- [`TcpListener`](https://doc.rust-lang.org/std/net/struct.TcpListener.html) と [`TcpStream`](https://doc.rust-lang.org/std/net/struct.TcpStream.html) は、TCP を介した通信のための機能を提供します
- [`UdpSocket`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html) は、UDP を介した通信機能を提供します
- [`IpAddr`](https://doc.rust-lang.org/std/net/enum.IpAddr.html) は、IPv4 または IPv6 のいずれかの IP アドレスを表します。[`Ipv4Addr`](https://doc.rust-lang.org/std/net/struct.Ipv4Addr.html) と [`Ipv6Addr`](https://doc.rust-lang.org/std/net/struct.Ipv6Addr.html) は、それぞれ IPv4 アドレスと IPv6 アドレスです
- [`SocketAddr`](https://doc.rust-lang.org/std/net/enum.SocketAddr.html) は、IPv4 または IPv6 のいずれかのソケットアドレスを表します。 [`SocketAddrV4`](https://doc.rust-lang.org/std/net/struct.SocketAddrV4.html) と [`SocketAddrV6`](https://doc.rust-lang.org/std/net/struct.SocketAddrV6.html) は、それぞれ IPv4 と IPv6 のソケットアドレスです
- [`ToSocketAddrs`](https://doc.rust-lang.org/std/net/trait.ToSocketAddrs.html) は、[`TcpListener`](https://doc.rust-lang.org/std/net/struct.TcpListener.html)、[`TcpStream`](https://doc.rust-lang.org/std/net/struct.TcpStream.html)、[`UdpSocket`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html) などのネットワークオブジェクトと対話するときに一般的なアドレス解決に使用されるトレイトです。
- 他の型は、このモジュールのさまざまなメソッドの戻り型またはパラメーター型です。

公開メンバー：

- _構造体_
  - [`AddrParseError`](https://doc.rust-lang.org/std/net/struct.AddrParseError.html) — IP アドレスまたはソケットアドレスを解析するときに返される可能性のあるエラー。
  - [`Incoming`](https://doc.rust-lang.org/std/net/struct.Incoming.html) — [`TcpListener`](https://doc.rust-lang.org/std/net/struct.TcpListener.html) で接続を無限に受け入れるイテレータ。
  - [`Ipv4Addr`](https://doc.rust-lang.org/std/net/struct.Ipv4Addr.html) — IPv4 アドレス。
  - [`Ipv6Addr`](https://doc.rust-lang.org/std/net/struct.Ipv6Addr.html) — IPv6 アドレス。
  - [`SocketAddrV4`](https://doc.rust-lang.org/std/net/struct.SocketAddrV4.html) — IPv4 ソケットアドレス。
  - [`SocketAddrV6`](https://doc.rust-lang.org/std/net/struct.SocketAddrV6.html) — IPv6 ソケットアドレス。
  - [`TcpListener`](https://doc.rust-lang.org/std/net/struct.TcpListener.html) — 接続をリッスンする TCP ソケットサーバー。
  - [`TcpStream`](https://doc.rust-lang.org/std/net/struct.TcpStream.html) — ローカルソケットとリモートソケット間の TCP ストリーム。
  - [`UdpSocket`](https://doc.rust-lang.org/std/net/struct.UdpSocket.html) — UDPソケット。
- _列挙型_
  - [`Ipv6MulticastScope`](https://doc.rust-lang.org/std/net/enum.Ipv6MulticastScope.html) [実験的] — [IETF RFC7346 セクション2](https://tools.ietf.org/html/rfc7346#section-2) で定義されている [IPv6 マルチキャストアドレス](https://doc.rust-lang.org/std/net/struct.Ipv6Addr.html) のスコープ。
  - [`IpAddr`](https://doc.rust-lang.org/std/net/enum.IpAddr.html) — IPv4 または IPv6 のいずれかの IP アドレス。
  - [`Shutdown`](https://doc.rust-lang.org/std/net/enum.Shutdown.html) — [`TcpStream::shutdown`](https://doc.rust-lang.org/std/net/struct.TcpStream.html#method.shutdown) メソッドに渡すことができる可能な値。
  - [`SocketAddr`](https://doc.rust-lang.org/std/net/enum.SocketAddr.html) — IPv4 または IPv6 のいずれかのインターネットソケットアドレス。
- _トレイト_
  - [`ToSocketAddrs`](https://doc.rust-lang.org/std/net/trait.ToSocketAddrs.html) — 1つ以上の [`SocketAddr`](https://doc.rust-lang.org/std/net/enum.SocketAddr.html) 値に変換または解決できるオブジェクトの特性。
