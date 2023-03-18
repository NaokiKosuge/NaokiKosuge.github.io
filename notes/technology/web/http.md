---
slug: /http
sidebar_label: HTTP
---

# HTTP

<abbr title="Hypertext Transfer Protocol">HTTP</abbr> は HTML などのハイパーメディア文書を転送するためのアプリケーション層プロトコルです。

HTTP による通信はステートレスであり、個々の通信に関係性はありませんが、HTTP Cookie によってステートフルなセッションを実現できます。

## バージョン

- HTTP/1.0
- HTTP/1.1
- HTTP/2
- HTTP/3

## HTTP が制御できること

- キャッシュ
- オリジン制約の緩和
- 認証
- プロキシとトンネリング
- セッション

## HTTP に基づく API

- XMLHttpRequest
- Fetch API
- Server-sent events

## HTTP メッセージの構成要素

### リクエストメッセージ

- HTTP メソッド
- リソースのパス
- HTTP プロトコルのバージョン
- HTTP ヘッダー
- ボディ

### レスポンスメッセージ

- HTTP プロトコルのバージョン
- ステータスコード
- ステータスメッセージ
- HTTP ヘッダー
- ボディ

## HTTP リクエストメソッド

- `CONNECT`
- `DELETE`
- `GET`
- `HEAD`
- `OPTIONS`
- `PATCH`
- `POST`
- `PUT`
- `TRACE`

## HTTP ヘッダー

### 基本のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Host` | ○ |  | 送信先のホスト名を入れる。これにより同じIPアドレスでも複数のウェブサービスが稼働できる（バーチャルホスト） |
| `Referer` | ○ |  | ページ遷移時に前のページのURLが入る。https から http の時に送信するか、送信するときはドメイン名だけか、フルパスを返すかなどは、`Referrer-Policy` ヘッダーで制御可能 |
| `Date` |  | ○ | サーバーがレスポンスを返した日時 |
| `Location` |  | ○ | サーバーが `301`/`302`/`303`/`307`/`308` のリダイレクト用ステータスコードを返す時に、遷移先を指定する |
| `User-Agent` | ○ |  | ブラウザが名乗る自分の名前。フィーチャーフォン全盛時代はこれを見て絵文字をキャリアごとに書き換えることなどに利用された |
| `X-Powered-By` |  | ○ | サーバーが身元を名乗るヘッダー。非公式だがよく利用された |
| `Server` |  | ○ | `X-Powered-By` が RFC で標準化されたヘッダー |
| _`:authority`_ | ○ |  | `Host` ヘッダーの HTTP/2 以降の代替 |
| _`:path`_ | ○ |  | HTTP/2 以降はパスはヘッダーとして送信する |
| _`:method`_ | ○ |  | HTTP/2 以降はメソッドはヘッダーとして送信する |
| _`:status`_ |  | ○ | HTTP/2 以降はメソッドはヘッダーとして受信する。理由文は書けない |
| _`:scheme`_ | ○ |  | `http`、`https` など。HTTP/2 用 |
| _`:protocol`_ | ○ |  | `websocket` など、HTTP 以外の時に付与する |

### コンテンツ情報のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Accept` | ○ |  | ブラウザが、画像の種類など扱えるメディアの種類の候補を送信する。サーバーはこのリストと自分が対応可能な種類を比較し、返すファイルの種類を決める |
| `Content-Type` | ○ | ○ | 送受信するファイル/情報の MIME タイプを指定する。`text/html`、`image/png` など。`image/svg+xml` のような XML で表現された SVG のような文法とボキャブラリを同時に載せる MIME タイプも存在する |
| `Content-Length` | ○ | ○ | 送信するボディのサイズを設定。圧縮時には圧縮後のサイズ |
| `Accept-Encoding` | ○ |  | 自分が理解できる圧縮フォーマットのリストを送る |
| `Content-Encoding` |  | ○ | ボディを圧縮する場合の形式。クライアントから送られた利用可能フォーマットから選ぶ |
| `Accept-Language` | ○ |  | コンテンツの言語が選択できる場合にクライアントが受け取りたい言語のリストを送る |
| `Content-Language` |  | ○ | クライアントに送信するコンテンツの言語。クライアントから送られた利用可能言語から選ぶ |
| `Content-Disposition` |  | ○ | ファイルをブラウザでインライン表示させたいか、表示せずにローカルに保存するかの指定。ローカル保存時のファイル名指定できる |
| `Accept-Ranges` |  | ○ | サーバーが、部分的なダウンロードに対応している場合に `bytes` を、そうでない場合に `none` を返す |
| `Range` | ○ |  | クライアントから、部分的なダウンロードを行う場合に、ダウンロードしたい範囲を設定するのに使用する |
| `If-Range` | ○ |  | 部分ダウンロードは、コンテンツが書き換わっているとダウンロード済みの部分と組み合わせてもデータが破損状態になってしまうため、`ETag` か `Last-Modified` の情報を付与して、変更があった場合には部分ダウンロードから全体ダウンロードにフォールバックできるようにする |
| `Content-Renges` |  | ○ | クライアントのリクエストに対し、実際に返されたコンテンツの範囲を返す |

### キャッシュ関連のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Pragma: no-cache` | ○ |  | 通信経路のプロキシーに対し、キャッシュをしないように要請する。HTTP/1.0 時代のヘッダーで、現在は非推奨。`Cache-Control` があればこのヘッダーは無視される |
| `Expires` |  | ○ | 鮮度維持期間を設定する。鮮度維持期間内は HTTP アクセスせずにキャッシュを利用する。HTTP/1.0 時代のヘッダーで、`Cache-Control` があればこのヘッダーは無視される |
| `Cache-Control` | ○ | ○ | クライアントからのリクエスト、サーバーからのレスポンスの両方で使えるキャッシュ制御ヘッダー |
| `Last-Modified` |  | ○ | コンテンツの最終更新日時を返す。この日時はクライアントが次回アクセス時に `If-Modifiled-Since` として送り返すことで、サーバーがキャッシュが有効か判断するのに使う |
| `If-Modified-Since` | ○ |  | `Last-Modified` とセットで使う |
| `ETag` |  | ○ | 日時以外の条件、例えばコンテンツの内容のハッシュなど、サーバー側で条件を設定できるキャッシュのキー。この情報はクライアントが次回アクセス時に `If-None-Match` として送り返すことで、サーバーがキャッシュが有効か判断するのに使う |
| `If-None-Match` | ○ |  | `ETag` とセットで使用する |
| `Vary` |  | ○ | 同じ URL であっても、言語、モバイルか PC かなどによってコンテンツが違う場合にキャッシュされすぎてしまうのを防ぐためのヘッダー。どのヘッダーがコンテンツの違いに寄与するのかを列挙することで、ブラウザがキャッシュを使うべきか判断する |
| `Link` |  | ○ | 現在表示しているリソースの関連情報へのリンク情報を格納する。インデックスや著者情報などのドキュメントとしての関連情報、ブックマーク用のパーマリンク、RESTful のリソースの前、後といった情報、プリロードすべき CSS などのファイルなど。利用できる種類は [IANA で定義されている](https://www.iana.org/assignments/link-relations/link-relations.xhtml) |

### HTTP/1.1 で導入された通信方式に関するヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Connection: Keep-Alive` | ○ | ○ | HTTP/1.1 の Keep-Alive を有効にする。クライアントが送り、サーバーが同じヘッダーを送り返すことで有効になる |
| `Connection: Close` |  | ○ | Keep-Alive を強制的に打ち切る時に送信する。送信せずにタイムアウトでも切れる |
| `Connection: Upgrade` |  | ○ | WebSocket などのプロトコルにアップグレードする時に返す。`Upgrade` ヘッダーとセットで使う |
| `Upgrade` |  | ○ | アップグレードする先のプロトコルを記述する |
| `Expect: 100-continue` | ○ |  | クライアントが巨大なファイルを送信する場合に、`Content-Length` ヘッダーで送信したいデータ量をサーバーに問い合わせる。サーバーは問題がなければ `100 Continue` のステータスを返す |
| `Transfer-Encoding: chunked` |  | ○ | チャンク形式でボディを返す時にサーバーが送る |
| `Transfer-Encoding: (その他)` |  | ○ | `Content-Encoding` はボディのみの圧縮だが、通信経路全体を圧縮する場合に利用する |
| `Trailer` |  | ○ | いくつかのヘッダーをボディの後に送信したいときに、どのヘッダーを後から送るかをブラウザに知らせる |
| `Allow` |  | ○ | OPTION メソッドを使って、利用可能なメソッドをブラウザが問い合わせてきた時に、使えるメソッドの情報を返す時に利用する |
| `Via` | ○ | ○ | プロキシを使った場合などに、中継サーバーの情報を記録するときに使う |
| `X-Forwarded-For` | ○ |  | プロキシが途中でフォワードした IP アドレス一覧 |
| `Forwarded` | ○ |  | `X-Forwarded-For` と同じだが、こちらは RFC の公式なヘッダー |

### 認証・セッションのヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `WWW-Authenticate` |  | ○ | 認証が必要なとき（`401 Unauthorized`）に、どの認証方式をサーバーが使っているのかをブラウザに通知する。ブラウザが理解できるのは Basic 認証と Digest 認証 |
| `Authorization` | ○ |  | 認証に必要な情報（ID＋パスワード、アクセストークンなど）を送信するのに使う |
| `Set-Cookie` |  | ○ | サーバーがブラウザに保存して欲しい情報を送信する。ブラウザは次回、指定された範囲（ドメイン・パス）へのアクセス時に保存した情報を `Cookie` ヘッダーでリクエストに付与する |
| `Cookie` | ○ |  | 以前受け取ったクッキーの情報をサーバーに送信するときに使う |

### WebSocket 用のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Sec-WebSocket-Key` | ○ |  | HTTP/1.1 時代にブラウザから送信していたランダムな文字列 |
| `Sec-WebSocket-Accept` |  | ○ | HTTP/1.1 時代にサーバーから返送していた文字列。`Sec-WebSocket-Key` を元に生成 |
| `Sec-WebSocket-Protocol` | ○ | ○ | サブプロトコルを指定する。送信側はカンマ区切りで候補のリストを送り、サーバー側は選択したものを1つ送り返す |
| `Sec-WebSocket-Extensions` | ○ |  | メッセージ単位で圧縮をかけるなどの拡張機能を有効にします |
| `Sec-WebSocket-Version: 13` | ○ |  | WebSocket のバージョン番号。現時点では13固定 |

### セキュリティ関連のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `X-XSS-Protection` |  | ○ | クロスサイトスクリプティングの恐れのある動作を検出したときに動作を停止させる |
| `Content-Security-Policy` |  | ○ | ウェブサイトで利用するコンテンツのセキュリティ要件を細かく定義する |
| `Content-Security-Policy-Report-Only` |  | ○ | `Content-Security-Policy` と同様だが、動作を停止させるのではなく、エラーの報告だけ行う |
| `Strict-Transport-Security` |  | ○ |  |
| `Public-Key-Pins` |  | ○ | 認証局がハッキングされ、MITM 攻撃されるのを防ぐために、サイトが持つ証明書のハッシュを提供し、証明書の検証をブラウザができるようにする。運用負荷が高いなどの問題があり、規格を提唱した Google 自身の Chrome がすでにサポートを取りやめた |
| `Public-Key-Pins-Report-Only` |  | ○ | `Public-Key-Pins` と同様だが、動作を停止させるのではなく、エラーの報告だけ行う |
| `Expect-CT` |  | ○ | `Public-Key-Pins` の代替として有力視されているもので、署名付き証明書タイムスタンプを返す。認証局とは別にあるログサーバーが発行する署名付き証明書タイムスタンプ情報と付き合わせて、ブラウザが証明書の検証ができるようにする |
| `X-Frame-Options` |  | ○ | IFrame の内部でウェブサイトを動作させることを禁止するようにブラウザに通達し、クリックジャッキングを防止する |
| `X-Content-Type-Options: nosniff` |  | ○ | MIME タイプではなく、ファイルの中身を見て種類を類推する機能をオフにして、思いがけずスクリプトが実行されてしまう、といった事故を防ぐ |
| `Referrer-Policy` |  | ○ | サイト内部や外部サイトに遷移するときに、どこまでの情報を開示するかを制御する |
| `X-Robots-Tag` |  | ○ | 検索エンジンなどのクローラーに対してインデックスの可否を伝える |

### CORS 関連のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Origin` | ○ |  | 通信元のウェブページのドメイン名を指定 |
| `Access-Control-Request-Method` | ○ |  | 通信を許可してもらいたいメソッドをカンマ区切りで列挙 |
| `Access-Control-Request-Headers` | ○ |  | 許可してほしいヘッダーをカンマ区切りで列挙 |
| `Access-Control-Allow-Origin` |  | ○ | 通信を許容するオリジン名。クッキーを利用しない場合にはワイルドカード（`*`）が設定可能 |
| `Access-Control-Allow-Method` |  | ○ | 対象の URL に対して許容されるメソッド名のリスト。プリフライトリクエストが不要なメソッドの場合は省略されることがある |
| `Access-Control-Allow-Headers` |  | ○ | 対象の URL に対して許容されるヘッダー名のリスト。プリフライトリクエストが不要なメソッドの場合は省略されることがある |
| `Access-Control-Allow-Credentials` |  | ○ | クッキーなどの資格情報をサーバーが受け取ることを許可するときに付与される。値としては `true` のみが設定できる |
| `Access-Control-Expose-Headers` |  | ○ | 許可ではなく、サーバーから返すレスポンスヘッダーのうち、スクリプトから参照できるヘッダー名の一覧を返す |
| `Access-Control-Max-Age` |  | ○ | プリフライトリクエストの結果を保持可能な期間 |

### ウェブプッシュ関連のヘッダー

| ヘッダー名 | 送信 | 受信 | 説明 |
| --- | --- | --- | --- |
| `Prefer` | ○ |  | ウェブプッシュの設定を指定する |
| `TTL` | ○ |  | 古くなると価値がなくなるプッシュ情報を送る場合に、その寿命の秒数を設定する |
| `Topic` | ○ |  | トピックを表す識別子。同じ識別子のプッシュが送信された時に、古いプッシュの情報は削除され、ユーザーには最新の情報だけが通知される |
| `Urgency` | ○ |  | メッセージの緊急度。`high` であれば、端末のバッテリー残量が少なくても通知が行われる。`low` であれば、電源か Wifi がつながっていない限り無視される |

## HTTP レスポンスステータスコード

以下は、Node.js の `http` モジュールのでサポートされている HTTP ステータスコードです：

- _1xx Informational (情報)_
  - `100 Continue` (継続)
  - `101 Switching Protocols` (プロトコル切替)
  - `102 Processing` (処理中)
  - `103 Early Hints` (早期のヒント)
- _2xx Success (成功)_
  - `200 OK` (OK)
  - `201 Created` (作成)
  - `202 Accepted` (受理)
  - `203 Non-Authoritative Information` (信頼できない情報)
  - `204 No Content` (内容なし)
  - `205 Reset Content` (内容のリセット)
  - `206 Partial Content` (部分的内容)
  - `207 Multi-Status` (複数のステータス)
  - `208 Already Reported` (既に報告)
  - `226 IM Used` (IM使用)
- _3xx Redirection (リダイレクション)_
  - `300 Multiple Choices` (複数の選択)
  - `301 Moved Permanently` (恒久的に移動した)
  - `302 Found` (発見した)
  - `303 See Other` (他を参照せよ)
  - `304 Not Modified` (未更新)
  - `305 Use Proxy` (プロキシを使用せよ)
  - `307 Temporary Redirect` (一時的リダイレクト)
  - `308 Permanent Redirect` (恒久的リダイレクト)
- _4xx Client Error (クライアントエラー)_
  - `400 Bad Request` (リクエストが不正である)
  - `401 Unauthorized` (認証が必要である)
  - `402 Payment Required` (支払いが必要である)
  - `403 Forbidden` (禁止されている)
  - `404 Not Found` (未検出)
  - `405 Method Not Allowed` (許可されていないメソッド)
  - `406 Not Acceptable` (受理できない)
  - `407 Proxy Authentication Required` (プロキシ認証が必要である)
  - `408 Request Timeout` (リクエストタイムアウト)
  - `409 Conflict` (競合)
  - `410 Gone` (消滅した)
  - `411 Length Required` (長さが必要)
  - `412 Precondition Failed` (前提条件で失敗した)
  - `413 Payload Too Large` (ペイロードが大きすぎる)
  - `414 URI Too Long` (URIが大きすぎる)
  - `415 Unsupported Media Type` (サポートしていないメディアタイプ)
  - `416 Range Not Satisfiable` (レンジは範囲外にある)
  - `417 Expectation Failed` (Expectヘッダによる拡張が失敗)
  - `418 I'm a teapot` (私はティーポット)
  - `421 Misdirected Request` (誤ったリクエスト)
  - `422 Unprocessable Entity` (処理できないエンティティ)
  - `423 Locked` (ロックされている)
  - `424 Failed Dependency` (依存関係で失敗)
  - `425 Too Early` (Early dataを受け入れない)
  - `426 Upgrade Required` (アップグレード要求)
  - `428 Precondition Required` (事前条件が必要)
  - `429 Too Many Requests` (要求が多すぎる)
  - `431 Request Header Fields Too Large` (リクエストヘッダーフィールドが大きすぎる)
  - `451 Unavailable For Legal Reasons` (法的理由により利用不可)
- _5xx Server Error (サーバエラー)_
  - `500 Internal Server Error` (サーバ内部エラー)
  - `501 Not Implemented` (実装されていない)
  - `502 Bad Gateway` (不正なゲートウェイ)
  - `503 Service Unavailable` (サービス利用不可)
  - `504 Gateway Timeout` (ゲートウェイタイムアウト)
  - `505 HTTP Version Not Supported` (サポートしていないHTTPバージョン)
  - `506 Variant Also Negotiates`
  - `507 Insufficient Storage` (容量不足)
  - `508 Loop Detected` (ループを検出)
  - `510 Not Extended` (拡張できない)
  - `511 Network Authentication Required` (ネットワークに対する認証が必要)

## 関連する外部ドキュメント

- [HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP)
- [Hypertext Transfer Protocol - Wikipedia](https://ja.wikipedia.org/wiki/Hypertext_Transfer_Protocol)