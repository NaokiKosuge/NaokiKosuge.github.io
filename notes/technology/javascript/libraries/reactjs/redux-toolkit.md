---
slug: /redux-toolkit
sidebar_label: Redux Toolkit
---

# 実践 Redux － Redux Toolkit の使い方

今日、Redux を使用する場合は、[`redux`](https://www.npmjs.com/package/redux)
パッケージを直接使うのではなく、[`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit)
パッケージを使用することがディファクト・スタンダードとなっています。そのため、このドキュメントでは、Redux Toolkit の使用に焦点を当てることとし、Redux
の概念については [「Redux」のドキュメント](/notes/redux) に記します。

## Redux Toolkit の概要

Redux の公式が提供する基本パッケージには次の3つがあります：

- [`redux`](https://www.npmjs.com/package/redux) – Redux のコアパッケージ
- [`react-redux`](https://www.npmjs.com/package/react-redux) – Redux を React と接続します。
- [`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) – Redux をより快適に使用するためのツールキット。Redux コアを含みます。

昨今の開発プロジェクトでは、直接 `redux` パッケージをインストールするのではなく、 [`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit)
をインストールすることが推奨されます。また、React で使用する場合は、追加で [`react-redux`](https://www.npmjs.com/package/react-redux) をインストールします。

### `@reduxjs/toolkit` パッケージ

[`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) パッケージをインストールすることで次のことがもたらされます：

- 型定義（`@types/...` は不要）
- すべての Redux アプリで行う最も一般的なことを簡素化する API（特に、`configureStore` と `createSlice`）
- [`redux-thunk`](https://www.npmjs.com/package/redux-thunk) ミドルウェアをストアに追加して、非同期アクションに対応できるようにする
- Redux DevTools 拡張機能のサポートを有効化する
- [RTK Query](#rtk-query)（Reduxアプリ用の完全なデータフェッチおよびキャッシュソリューション）

## 導入方法

### npm によるパッケージインストール

```bash
npm install @reduxjs/toolkit react-redux
```

ℹ️ TypeScript で作成されているため、別途、型定義をインストールする必要はありません。

### Create React App によるインストール

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

## Redux Toolkit に含まれている API

- `configureStore()`
- `createReducer()`
- `createAction()`
- `createSlice()`
- `createListenerMiddleware()`
- `createAsyncThunk()`
- `createEntityAdapter()`
- `createSelector()`

## RTK Query

_RTK Query_ を使用すると、データのフェッチと読み込み状態の追跡を管理するために、サンク、レデューサー、アクションクリエーター、またはエフェクト・フックを作成する必要が無くなります。

## ディレクトリ構成

一般的なパターン：

- redux-way
- dukcks
- re-ducks

### redux-way【非推奨】

後述の、Ducks パターンが生まれるより前の Redux 構成は、次のようなものでした：

- `src/`
  - ...
  - `redux/`
    - `actions/`
      - _`articles.js`_
      - _`comments.js`_
      - _`users.js`_
    - `reducers/`
      - _`articles.js`_
      - _`comments.js`_
      - _`users.js`_

### ducks【小規模開発向き】

[Ducks](https://github.com/erikras/ducks-modular-redux) パターンは、Action-Type, Action-Creator, Reducer
を1つのモジュール（＝ファイル）で管理します。つまり、**1つの機能につき1つのファイル**で管理します。

構成例：

- `src/`
  - ...
  - `modules/` または `features/`
    - _`articlesSlice.js`_ – モジュール
    - _`commentsSlice.js`_ – モジュール
    - _`usersSlice.js`_ – モジュール

```ts title="【例】counterSlice.ts"
import { createSlice } from '@reduxjs/toolkit';

//region Types
export interface CounterState {
  value: number;
}
//endregion

const initialState: CounterState = {
  value: 0,
};

// Slice
export const counterSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload },
  },
});

//region Actions
export const { 
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;
//endregion

//region Action Creators
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000);
};
//endregion

//region Selectors
export const selectCount = (state) => state.counter.value;
//endregion

// Reducer
export default counterSlice.reducer;
```

### re-ducks【中・大規模開発向き】

[re-ducks](https://github.com/alexnm/re-ducks) パターンは、Ducks パターンのファイルをディレクトリへと昇格させます。つまり、**1つの機能につき1つのディレクトリ**で管理します。

構成例：

- `src/`
  - ...
  - `ducks/` または `features/`
    - _`articles/`_ – モジュール
      - `index.js` – モジュールのエントリポイント
      - `types.js` – 型定義 をエクスポート
      - `actions.js` – Action をエクスポート
      - `reducers.js` – Reducer をエクスポート
      - `operations.js` – Operation（Action のセット）をエクスポート
      - `selectors.js` – Selector をエクスポート
      - `tests.js` – テストを行う
    - _`comments/`_ – モジュール
      - ...
    - _`users/`_ – モジュール
      - ...

## Thunk

:::info 「Thunk」とは

「Thunk」は、「遅延作業を行うコードの一部」を意味するプログラミング用語です。今すぐロジックを実行するのではなく、後で作業を実行するために使用できる関数本体またはコードを記述できます。

:::

Redux のリデューサーは副作用を含んではなりません。しかし、実際のアプリケーションでは副作用を持つロジックが必要です。サンクパターンを利用すると、副作用があるアクションや非同期なアクションをディスパッチすることができるようになります。

Redux Toolkit では、[`redux-thunk`](https://www.npmjs.com/package/redux-thunk)
ミドルウェアが含まれており、ストア構成時にデフォルトで有効になるため、インストールやセットアップの作業をすることなくサンクロジックを追加できます。

### ユースケース

- 複雑なロジックをコンポーネントから移動する
- 非同期リクエストまたはその他の非同期ロジックの作成
- 複数のアクションを連続してまたは時間の経過とともにディスパッチする必要があるロジックの記述
- アクションの決定や他のステート値を含めるために `getState` へのアクセスが必要なロジックを記述する

### サンクミドルウェアの仕組み

ディスパッチされたアクションがプレーンなオブジェクトであった場合は、そのまま流して、同期的に処理されます。一方、サンク関数形式だった場合は、関数を解決した結果を流します。この関数は、非同期にもすることができます。

### サンクアクションの実装方法

0. Redux Toolkit では、何もせずともサンクミドルウェアが有効になっています。
1. 関数形式（同期/非同期）のアクションを返すアクションクリエーターを作成します。
2. この**サンクアクション**をディスパッチします。

```tsx title="サンクアクションの型定義"
export type ThunkAction<ReturnType,
  State,
  ExtraThunkArg,
  BasicAction extends Action> = (
  dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  getState: () => State,
  extraArgument: ExtraThunkArg,
) => ReturnType;
```

```tsx title="【例】サンクロジック" {7-10}
// [2]
import { useDispatch } from '@reduxjs/toolkit';

// [1] サンクアクションクリエーター
const fetchTodoById = (todoId) => {
  // サンクアクション
  return async (dispatch, getState) => {
    const response = await client.get(`/fakeApi/todo/${todoId}`);
    dispatch(todosLoaded(response.todos));
  };
};

// サンクアクションを利用するコンポーネント
const TodoComponent = ({ todoId }) => {
  // [2]
  const dispatch = useDispatch();

  const onFetchClicked = () => {
    // [2] サンクアクションクリエーターを呼び出し、サンク関数をディスパッチに渡します
    dispatch(fetchTodoById(todoId));
  };

  return (
    <>
      {/* ... */}
    </>
  );
};
```

## RTK Query

RTK Queryは、データフェッチおよびキャッシュツールで、Redux Toolkit に含まれているオプションのアドオンです。「状態の管理」とは切り離されており、「キャッシュされたデータの管理」に集中します。

RTK Queryは主に2つのAPIで構成されています：

- `createApi()` – RTK Queryの機能の中核となるものです。
  データ取得時の設定や変換方法も含め、各エンドポイントからのデータ取得方法をまとめて定義できます。ほとんどの場合、１つのアプリケーションで一度だけ用いるべきです。「1つのベースURLにつき1つのAPIスライス」が目安となります。
- `fetchBaseQuery()` – リクエストの簡素化を目的とした、ごく小さな `fetch` のラッパーです。多くのユーザーが `createApi` で使用する、推奨ベースクエリーとして意図されています。
- `<ApiProvider />` – ストアを作成していない場合、こちらを `Provider` として利用できます。
- `setupListeners()` – `refetchOnMount` および `refetchOnReconnect` を有効にするためのユーティリティです。

これらは、通常盤と React 統合版の2つのエントリポイントのいずれかから利用でき、それぞれ `'@reduxjs/toolkit/query'` と `'@reduxjs/toolkit/query/react'` からインポートします。

### 構成例

```tsx title="APIスライスの作成 (features/api/apiSlice.ts)"
// React 固有のエントリポイントからRTKクエリメソッドをインポートします。
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 単一のAPIスライスオブジェクトを定義します。
export const apiSlice = createApi({
  // キャッシュリデューサーは `state.api` に追加されることを期待しています（デフォルトを明示）
  reducerPath: 'api',
  // すべてのリクエストには、`/fakeApi` で始まる URL が含まれます。
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // タグの定義
  tagTypes: ['Post'],
  // `endpoints` は、このサーバーの操作とリクエストを表します。
  endpoints: builder => ({
    // `getPosts` エンドポイントは、データを返す「クエリ」操作です。
    getPosts: builder.query({
      // リクエストの URL は「/fakeApi/posts」です。 
      query: () => '/posts',
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost,
      }),
      // タグ「Post」で自動的なデータの再取得を有効にします。
      // これにより、キャッシュによるサーバー-クライアント間のデータの不整合を防ぐことができます。
      invalidatesTags: ['Post'],
    }),
    editPost: builder.mutation({
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'PATCH',
        body: post,
      })
    }),
  }),
});

// クエリエンドポイントの自動生成されたフックをエクスポートします。
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
} = apiSlice;
```

```tsx title="ストアの設定 (app/store.ts)"
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
```

### 利用例

#### 静的なエンドポイントへの GET リクエスト

> 👆 [APIスライスの構成](#構成例)

```tsx title="features/posts/SinglePostPage.tsx" {4,12}
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { useGetPostQuery } from '../api/apiSlice';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    );
  }

  return <section>{content}</section>;
};
```

#### 動的なエンドポイントへの GET リクエスト

> 👆 [APIスライスの構成](#構成例)

```tsx title="features/posts/AddPostForm.tsx" {4,12}
import { useSelector } from 'react-redux';

import { Spinner } from '../../components/Spinner';
import { useAddNewPostMutation } from '../api/apiSlice';
import { selectAllUsers } from '../users/usersSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ title, content, user: userId }).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  }

  // omit rendering logic
}
```

#### POST リクエスト

> 👆 [APIスライスの構成](#構成例)

```tsx title="features/posts/PostList.tsx" {5,13}
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Spinner } from '../../components/Spinner';
import { useAddNewPostMutation } from '../api/apiSlice';
import { selectAllUsers } from '../users/usersSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ title, content, user: userId }).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  }

  // omit rendering logic
}
```

## API

> 🔗 [API Reference](https://redux-toolkit.js.org/api/configureStore)

主に使われる API は次の通りです：

- ストアセットアップ
  - ⇣ [`configureStore`](#configurestore) – ストアを構成します
- レデューサー、アクション
  - ⇣ [`createReducer`](#createreducer) – リデューサーを作成します
  - ⇣ [`createAction`](#createaction) – アクションを作成します
  - ⇣ [`createSlice`](#createslice) – スライスを作成します
  - ⇣ [`createAsyncThunk`](#createasyncthunk) – サンクアクションクリエーターを作成します
  - ⇣ [`createEntityAdapter`](#createentityadapter)
- その他
  - ⇣ [`createSelector`](#createselector) – メモ化されたセレクターを作成します
  - マッチングユーティリティー
  - その他

### `configureStore`

<details>
<summary>型定義</summary>

```tsx title="configureStore"
export function configureStore<S = any,
  A extends Action = AnyAction,
  M extends Middlewares<S> = [ThunkMiddlewareFor<S>]>(options: ConfigureStoreOptions<S, A, M>): EnhancedStore<S, A, M> {}
```

```tsx title="configureStore > パラメーター"
interface ConfigureStoreOptions<
  S = any,
  A extends Action = AnyAction,
  M extends Middlewares<S> = Middlewares<S>
> {
  /**
   * ルートレデューサーとして使用される単一のリデューサー関数。
   * または `combineReducers()` に渡されるスライスリデューサーのオブジェクト。
   */
  reducer: Reducer<S, A> | ReducersMapObject<S, A>
  
  /**
   * インストールするミドルウェアのリスト。
   * 指定しない場合、デフォルトで `getDefaultMiddleware()` によって返されるミドルウェアのセットになります。
   */
  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M

  /**
   * Redux DevTools 統合を有効にするかどうか。デフォルトは `true` です。
   *
   * Redux DevTools オプションを渡すことにより、追加の構成を行うことができます
   */
  devTools?: boolean | DevToolsOptions
  
  /**
   * Redux の `createStore` と同じ初期ステートです。
   * ユニバーサルアプリでサーバーからステートをハイドレートしたり、
   * 以前にシリアライズしたユーザーセッションをリストアするためにオプションで指定することができます。
   * `compineReducers()` を使用してルートリデューサー関数を生成する場合
   * （直接、またはオブジェクトを `reducer` として間接的に渡すことで）、次のように指定します。
   * これは、リデューサーマップのキーと同じ形をしたオブジェクトでなければなりません。
   */
  preloadedState?: DeepPartial<S extends any ? S : S>
  
  /**
   * 適用するストアエンハンサーです。Redux の `createStore()` を参照してください。
   * すべてのエンハンサーは、DevTools Extension エンハンサーの前に含まれます。
   * エンハンサーの順序をカスタマイズする必要がある場合、オリジナルの配列
   * (例えば `[applyMiddleware]`) を受け取り、
   * 新しい配列 (例えば `[applyMiddleware, offline]`) を返すべきコールバック関数を提供します。
   * ミドルウェアを追加するだけであれば、代わりに `middleware` パラメータを使用することができます。
   */
  enhancers?: StoreEnhancer[] | ConfigureEnhancersCallback
}
```

```tsx title="configureStore > 戻り値"
export interface EnhancedStore<
  S = any,
  A extends Action = AnyAction,
  M extends Middlewares<S> = Middlewares<S>
> extends Store<S, A> {}
```

</details>

```tsx title="configureStore の使用例"
// app/store.js

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { batchedSubscribe } from 'redux-batched-subscribe';

import todosReducer from './features/todos/todosSlice';
import visibilityReducer from './features/visibility/visibilitySlice';

/**
 * Redux ストア
 */
const store = configureStoer({
  // ReducersMapObject 形式にしているため、combineReducers に渡すことで、
  // ルートリデューサーを自動的に作成します。
  reducer: {
    todos: todosReducer,
    visibility: visibilityReducer,
  },
  
  // デフォルトで redux-thunk が含まれているのと、
  // redux-logger を追加します。
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
  // Redux DevTools はデフォルトで有効ですが、
  // `production` モードでは無効にするよう変更しています。
  devTools: process.env.NODE_ENV !== 'production',
  
  // 初期ステート
  preloadedState: {
    todos: [
      {
        text: 'Eat food',
        completed: true,
      },
      {
        text: 'Exercise',
        completed: false,
      },
    ],
    visibilityFilter: 'SHOW_COMPLETED',
  },
});

export default store;
```

```tsx title="構成したストアの利用例"
// index.js

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### `createReducer`

リデューサー関数の作成を簡略化するユーティリティです。`createSlice` で利用されますが、単独で使うこともできます。利用の際は「ビルダーコールバック記法」と「マップオブジェクト記法」の2通りがあり、「ビルダーコルバック記法」が推奨されます。

<details>
<summary>型定義</summary>

```tsx title="createReducer"
// ビルダーコールバック記法
export function createReducer<S extends NotFunction<any>>(
  initialState: S | (() => S),
  builderCallback: (builder: ActionReducerMapBuilder<S>) => void
): ReducerWithInitialState<S> {}

// マップオブジェクト記法
export function createReducer<
  S extends NotFunction<any>,
  CR extends CaseReducers<S, any> = CaseReducers<S, any>
  >(
  initialState: S | (() => S),
  actionsMap: CR,
  actionMatchers?: ActionMatcherDescriptionCollection<S>,
  defaultCaseReducer?: CaseReducer<S>
): ReducerWithInitialState<S> {}
```

```tsx title="createReducer > 戻り値"
export type ReducerWithInitialState<S extends NotFunction<any>> = Reducer<S> & {
  getInitialState: () => S
}
```

</details>

```tsx title="【例】createReducer のビルダーコールバック記法"
import {
  createAction,
  createReducer,
  AnyAction,
  PayloadAction,
} from '@reduxjs/toolkit';

const increment = createAction<number>('increment');
const decrement = createAction<number>('decrement');

function isActionWithNumberPayload(
  action: AnyAction,
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

const reducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.counter += action.payload
      })
      .addCase(decrement, (state, action) => {
        state.counter -= action.payload
      })
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      .addDefaultCase((state, action) => {})
  }
);
```

### `createAction`

アクションタイプとアクションクリエーターをまとめて作成するためのヘルパー関数です。

```tsx
import { createAction } from '@reduxjs/toolkit';

const increment = createAction<number | undefined>('counter/increment');

let action = increment();
// → { type: 'counter/increment' }

action = increment(3);
// → { type: 'counter/increment', payload: 3 }

console.log(increment.toString());
// 'counter/increment'

console.log(`The action type is: ${increment}`);
// 'The action type is: counter/increment'
```

### `createSlice`

初期状態、レデューサー関数のオブジェクト、および「スライス名」を受け入れ、レデューサーと状態に対応するアクションクリエーターとアクションタイプを自動的に生成する関数。

<details>
<summary>型定義</summary>

```tsx title="createSlice"
export function createSlice<State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string>(
  options: CreateSliceOptions<State, CaseReducers, Name>
): Slice<State, CaseReducers, Name> {}
```

```tsx title="createSlice > パラメーター"
export interface CreateSliceOptions<State = any,
  CR extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string> {
  /**
   * スライスの名前。生成されたアクションタイプの名前空間に使用されます。
   */
  name: Name
  
  /**
   * レデューサーが最初に呼び出されたときに使用する必要がある初期状態。
   * これは「レイジーイニシャライザ」関数である場合もあり、呼び出されたときに初期状態値を返す必要があります。
   * これは、状態値として `undefined` を指定してレデューサーが呼び出されるたびに使用され、
   * 主に `localStorage` から初期状態を読み取る場合に役立ちます。
   */
  initialState: State | (() => State)
  
  /**
   * アクションタイプからアクションタイプ固有のケースリデューサー関数へのマッピングです。
   * すべてのアクションタイプに対して、 `createAction()` を使ってマッチするアクションクリエーターが
   * 生成されます。
   */
  reducers: ValidateSliceCaseReducers<State, CR>

  /**
   * builder オブジェクトを受け取るコールバックで、
   * `builder.addCase(actionCreatorOrType, reducer)` の呼び出しによって
   * ケースリデューサーを定義します。
   *
   * あるいは、アクションタイプからアクションタイプ固有のケースリデューサー関数へのマッピング。
   * これらのリデューサは、既存のアクションタイプをキーとして使用する必要があり、
   * アクションクリエーターは生成されません。
   */
  extraReducers?:
    | CaseReducers<NoInfer<State>, any>
    | ((builder: ActionReducerMapBuilder<NoInfer<State>>) => void)
}
```

```tsx title="createSlice > 戻り値"
export interface Slice<State = any,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string> {
  /**
   * スライス名
   */
  name: Name

  /**
   * スライスのリデューサー
   */
  reducer: Reducer<State>

  /**
   * スライスリデューサが処理するアクションの種類を表すアクションクリエーター。
   */
  actions: CaseReducerActions<CaseReducers>

  /**
   * `reducers` パラメーターに渡された、個々のケースリデューサー関数です。
   * これは、`createSlice` を呼び出す際にインラインで定義されていれば、再利用やテストが可能になります。
   */
  caseReducers: SliceDefinedCaseReducers<CaseReducers>

  /**
   * スライスに与えられた初期状態の値へのアクセスを提供します。
   * もし遅延状態イニシャライザーが提供された場合、それが呼び出され、新鮮な値が返されます。
   */
  getInitialState: () => State
}
```

</details>

```tsx title="スライスの作成例"
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

// アクション
const incrementBy = createAction<number>('incrementBy');
const decrementBy = createAction<number>('decrementBy');

// スライス
const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value?: number) => ({ payload: value || 2 }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload
    })
    builder.addCase(decrementBy, (state, action) => {
      return state - action.payload
    })
  },
})

// スライス
const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: {
    [counter.actions.increment]: (
      state,
      action,
    ) => {
      state.age += 1;
    },
  },
})

// リデューサー
const reducer = combineReducers({
  counter: counter.reducer,
  user: user.reducer,
})

// ストア
const store = createStore(reducer)

store.dispatch(counter.actions.increment())
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(counter.actions.increment())
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply(3))
// -> { counter: 6, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply())
// -> { counter: 12, user: {name: '', age: 22} }
console.log(`${counter.actions.decrement}`)
// -> "counter/decrement"
store.dispatch(user.actions.setUserName('eric'))
// -> { counter: 12, user: { name: 'eric', age: 22} }
```

### `createAsyncThunk`

サンクアクションクリエータを作成します。

これは、非同期リクエストのライフサイクルを処理するための標準的な推奨アプローチを抽象化します。具体的には、`/pending`, `/fulfilled`, `/rejected`
という3つのアクションタイプサフィックスを用いて、追加のアクションを生成します。

<details>
<summary>型定義</summary>

```tsx title="createAsyncThunk"
export function createAsyncThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  options?: AsyncThunkOptions<ThunkArg, {}>
): AsyncThunk<Returned, ThunkArg, {}> {}
```

```tsx title="createAsyncThunk > 戻り値"
export type AsyncThunk<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig
  > = AsyncThunkActionCreator<Returned, ThunkArg, ThunkApiConfig> & {
  pending: AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig>
  rejected: AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>
  fulfilled: AsyncThunkFulfilledActionCreator<
    Returned,
    ThunkArg,
    ThunkApiConfig
    >
  typePrefix: string
}
```

</details>

```tsx title="createSyncThunk の利用例"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from './userAPI';

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: string, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().users
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 【開始】idle → pending
      .addCase(fetchUserById.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      // 【成功】pending → idle
      .addCase(fetchUserById.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' && 
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.entities.push(action.payload);
          state.currentRequestId = undefined;
        }
      })
      // 【エラー】pending → idle
      .addCase(fetchUserById.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
  },
})

const UsersComponent = () => {
  const { entities, loading, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const fetchOneUser = async (userId) => {
    try {
      const user = await dispatch(fetchUserById(userId)).unwrap()
      showToast('success', `Fetched ${user.name}`)
    } catch (err) {
      showToast('error', `Fetch failed: ${err.message}`)
    }
  }

  // render UI here
}
```

### `createEntityAdapter`

### `createSelector`

💡 [Reselect](https://github.com/reduxjs/reselect) ライブラリ の `createSelector` ユーティリティを再エクスポートしています。

これは、メモ化された「セレクター」関数を作成します。

`createSelector` は、2つ以上の、可変長な引数をとります。最後の1つが出力セレクターで、それ以前が入力セレクタです。

```tsx
import { createSelector } from 'reselect';

const selectShopItems = state => state.shop.items;
const selectTaxPercent = state => state.shop.taxPercent;

// 入力セレクターが1つ
const selectSubtotal = createSelector(
  selectShopItems, 
  items => items.reduce((subtotal, item) => subtotal + item.value, 0),
);

// 入力セレクターが2つ
const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100),
)

// 入力セレクターが2つ
const selectTotal = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
)

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.2 },
      { name: 'orange', value: 0.95 }
    ]
  }
}

console.log(selectSubtotal(exampleState)) // 2.15
console.log(selectTax(exampleState)) // 0.172
console.log(selectTotal(exampleState)) // { total: 2.322 }
```

## レシピ

### リクエストの読み込み状態

4つの状態分け例：

- `IDLE` – リクエストはまだ開始されていません
- `LOADING` – リクエストは進行中です
- `SUCCEEDED` – リクエストは成功し、必要なデータが得られました
- `FAILED` – リクエストは失敗し、おそらくエラーメッセージが表示されます

3つの状態分け例：

- `START` – リクエストが開始された際にディスパッチし、要求が現在進行中であることを示します。
- `SUCCESS` – リクエストが「成功」して終わったことを示します。
- `FAILURE` – リクエストが「失敗」して終わったことを示します。

```tsx title="【例】サンクでリクエストステータスのアクション（3つの状態分け）"
const getRepoDetailsStarted = () => ({
  type: 'repoDetails/fetchStarted',
});
const getRepoDetailsSuccess = repoDetails => ({
  type: 'repoDetails/fetchSucceeded',
  payload: repoDetails,
});
const getRepoDetailsFailed = error => ({
  type: 'repoDetails/fetchFailed',
  payload: error,
});
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted());
  try {
    const repoDetails = await getRepoDetails(org, repo);
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()));
  }
};
```

## FAQ

### `preloadedState` と `createSlice` の　`initialState` の違いは何ですか？

> 🔗 [Initializing State | Redux](https://redux.js.org/usage/structuring-reducers/initializing-state)

アプリケーションの「状態」を初期化する方法は、主に2つあります：

- `preloadedState` – [`createStore`](https://redux.js.org/api/createstore) や、それを内部的に使用した [`configureStore`](https://redux-toolkit.js.org/api/configureStore#preloadedstate) で指定するオプション－－Store を構成する際に使用される初期 State
- `initialState` – [`createReducer`](https://redux-toolkit.js.org/api/createReducer) や、それを内部的に使用した [`createSlice`](https://redux-toolkit.js.org/api/createSlice#initialstate) で指定するオプション－－Reducer が使用される際に State が `undefined` だった場合に使用される デフォルト State

実用的には、`preloadedState` は `initialState` よりも優先されます。ストア構成時に `preloadedState` が適用され、それぞれの　Reducer が構成される際に `preloadedState` に含まれなかった State が　`initialState` の値を適用されます。

### セレクターに追加の引数を持たせるにはどうすればいいですか？

> 🔗 [Calling Selectors with Parameters](https://redux.js.org/usage/deriving-data-selectors#calling-selectors-with-parameters)

`useSelector` は、提供されたセレクター関数を常に1つの引数－－ルート `state`－－で呼び出します。

最も簡単な解決策は、`useSelector` に匿名セレクターを渡し、すぐに `state` と追加の引数を使用して実際のセレクターを呼び出すことです：

```tsx title="【例】追加の引数と共に useSelector を利用する"
// Selector
const selectTodoById = (state, todoId) => state.todos[todoId];

// Some Component
const TodoListItem = ({ todoId }) => {
  const todo = useSelector((state) => selectTodoById(state, todoId));
  //...
}
```
