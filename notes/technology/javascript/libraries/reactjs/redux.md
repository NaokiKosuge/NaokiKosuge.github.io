---
slug: /redux
sidebar_label: Redux
---

# Redux

Redux は、アプリケーションの状態を管理するための JavaScript ライブラリです。主に [React](/notes/reactjs) を使用したプロジェクトに用いられています。

このドキュメントでは、Redux の概念に焦点を当てます。使用に関しては、[「Redux Toolkit」のドキュメント](/notes/redux-toolkit) に記します。

## Context API との比較

[Context API](https://ja.reactjs.org/docs/context.html) があるのに Redux が必要とされるのはなぜでしょうか？

Reduxには多くの重要な利点があります：

- ブラウザツール
  > [Redux DevTools](https://github.com/reduxjs/redux-devtools) を使用して、Redux コードをデバッグできます。これにより、ディスパッチされたアクションのリストを確認したり、状態を調べたり、タイムトラベルを確認したりすることができます。アクション履歴を前後に切り替えて、それぞれの状態がどのように処理されたかを確認できます。
- 副作用の処理
  > `useReducer` を使用すると、ネットワーク要求を実行するコードを整理する独自の方法を考案する必要があります。 Redux はそれを処理するミドルウェア API を提供します。また、このタスクをさらに簡単にする [ReduxThunk](https://github.com/reduxjs/redux-thunk) のようなツールがあります。
- テスト
  > Redux は純粋関数に基づいているため、テストが簡単です。すべてのテストは、与えられた入力で出力をチェックすることに要約されます。
- パターンとコード編成
  > Redux はよく研究されており、ほとんどの問題のレシピがあります。 Redux コードを整理するために使用できる [Ducks](#ducks) と呼ばれる方法論があります。

## コンセプト

> 🔗 [Glossary | Redux](https://redux.js.org/understanding/thinking-in-redux/glossary)

- ⇣ [State](#state)
  - ⇣ [Selector](#selector)
- ⇣ [Action](#action)
  - ⇣ [Action Creator](#action-creator)
- ⇣ [Reducer](#reducer)
- ⇣ [Dispatching Function](#dispatching-function)
- ⇣ [Middleware](#middleware) 
- ⇣ [Store](#store)

### State

```tsx
type State = any;
```

ステートは、Redux アプリケーショに管理させる「状態」を表すオブジェクトです。

#### Selector

```tsx
type Selector<S, TProps, TOwnProps = null> = TOwnProps extends
  | null
  | undefined
  ? (state: S) => TProps
  : (state: S, ownProps: TOwnProps) => TProps
```

セレクターは、ステートを構成するプロパティを取り出す関数です。

### Action

```tsx
type Action = Object;
```

Action は、状態を変更する意図を表すオブジェクトであり、データを Store に取り込むための唯一の方法です。

```tsx title="【例】Action の作成"
import { createAction } from '@reduxjs/toolkit';

export const setValue = createAction('setStroke');
```

#### Action Creator

```tsx
type ActionCreator<A, P extends any[] = any[]> = (...args: P) => Action | AsyncAction;
```

```tsx title="【例】Action Creator"
export const setValue = (value): Action => ({
  type: 'SET_VALUE',
  payload: value,
});
```

### Reducer

```tsx
type Reducer<S, A> = (state: S, action: A) => S;
```

```tsx title="【例】Action"
export function reducer(state = '', action: Action): State {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload;
    default:
      return state;
  }
}
```

リデューサーは、ステートとアクションを受け取り、新たな ステートを返すものです。

API 呼び出しを Reducer に含めてはいけません。

#### Reducer の分割

`combineReducer` 関数は、いくつかの部分的なリデューサーを束ねて1つのリデューサーを構成します。

アプリケーションの規模が大きくなり、ロジックを再編成する際に用いられます。

#### Slice

Slice は、Redux Toolkit における概念で、初期State、Reucer、Action Creatorのセットです。

### Dispatching Function

```tsx
type BaseDispatch = (a: Action) => Action;
type Dispatch = (a: Action | AsyncAction) => any;
```

### Middleware

```tsx
type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch;
```

ミドルウェアは、アクションのディスパッチごとに起動される関数で、ネットワークへのリクエスト、ログの記録、ストレージへのデータの書き込みなどの副作用を実行するために使用されます。

### Store

```tsx
type Store = {
  dispatch: Dispatch,
  getState: () => State,
  subscribe: (listener: () => void) => () => void,
  replaceReducer: (reducer: Reducer) => void,
};
```

Redux アプリケーションが1つだけ持つストアは、アプリケーションの状態を保持するオブジェクトです。

```tsx title="【例】ストアの作成 (Toolkit)"
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
```

```tsx title="【例】ストアの作成 (redux)"
import { createStore } from 'redux';

const store = createStore(reducer, 'Initial Value');

// ストアが更新した時に対応して何かを処理できます
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// State を更新するには、
// Store に対して Action をディスパッチします
store.dispatch({
  type: 'SET_VALUE',
  payload: 'New value',
});
```

#### Store creator

```tsx
type StoreCreator = (reducer: Reducer, preloadedState?: State) => Store;
```

ストアクリエーターとは、Redux store を作成する関数のことです。

#### Store enhancer

```tsx
type StoreEnhancer = (next: StoreCreator) => StoreCreator;
```

ストアエンハンサーは、ストアクリエーターを構成して、新しい強化されたストアクリエーターを返す高階関数です。

## Ducks {#ducks}

> 🔗 [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)


## 関連ツール

- コアパッケージ
  - [`redux`](https://www.npmjs.com/package/redux)
  - [`react-redux`](https://www.npmjs.com/package/react-redux)
    - [`@types/react-redux`](https://www.npmjs.com/package/@types/react-redux)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
- ミドルウェア
  - [`redux-thunk`](https://www.npmjs.com/package/redux-thunk) – 副作用と非同期アクションを実行可能にするミドルウェア。
- その他
  - [Redux DevTools](https://github.com/reduxjs/redux-devtools)
    - [`@redux-devtools/extension`](https://www.npmjs.com/package/@redux-devtools/extension) – Redux DevTools Extension's helper
  - [`redux-logger`](https://www.npmjs.com/package/redux-logger) – Logger for Redux
    - [`@types/redux-logger`](https://www.npmjs.com/package/@types/redux-logger)
  - [`redux-persist`] (https://www.npmjs.com/package/redux-persist) – Redux ストアを永続化します。
