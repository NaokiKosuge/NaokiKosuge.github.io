---
slug: /javascript-async-function
sidebar_label: async-await
---

# 【JavaScript】非同期関数

非同期関数は `async` キーワードで宣言され、その中で `await` キーワードを使うことができます。`async` および `await` キーワードを使用することで、プロミスベースの非同期の動作を、プロミスチェーンを明示的に構成する必要なく、よりすっきりとした方法で書くことができます。

デバッガーは非同期コードをステップオーバーしないため、`Promise` のデバッグは困難です。コンパイラにとっては同期コードと同じであるため、`async`/`await` を使用するとこれが非常に簡単になります。

## `async`

`async` が付与された関数は、それが `Promise` でラップされたかのように振る舞います。

非同期関数が `return` した場合、それは `Promise.resolve()` が返されたかの様に振る舞います。また、非同期関数で例外が発生し、捕捉されなかった場合、それは `Promise.reject()` が返されたかの様に振る舞います。

例えば、次のコードは（ほぼ）同等です：

- ```js title="例：非同期関数（アロー関数）"
  const aFunction = async () => {
    return 'test';
  }
  
  aFunction().then(alert); // This will alert 'test'
  ```

- ```js title="例：Promise を返す同期関数（アロー関数）"
  const aFunction = () => {
    return Promise.resolve('test');
  }
  
  aFunction().then(alert); // This will alert 'test'
  ```

上記の例では、アロー関数を使用していますが、「`function` 宣言」や「`function` 式」においても同様です。

## `await`

`await` 式は、`async` 関数の中で使用することができ、非同期関数を含む、`Promise` を同期的に扱うことを可能にします。例えば、次の2つのコードは同等です：

- ```js title="例：Prmoise チェーン"
  const getFirstUserData = () => {
    return fetch('/users.json') // get users list
      .then(response => response.json()) // parse JSON
      .then(users => users[0]) // pick first user
      .then(user => fetch(`/users/${user.name}`)) // get user data
      .then(userResponse => userResponse.json()) // parse JSON
  }
    
  getFirstUserData();
  ```

- ```js title="例：async-await"
  const getFirstUserData = async () => {
    const response = await fetch('/users.json'); // get users list
    const users = await response.json(); // parse JSON
    const user = users[0]; // pick first user
    const userResponse = await fetch(`/users/${user.name}`); // get user data
    const userData = await userResponse.json(); // parse JSON
    return userData;
  }

  getFirstUserData();
  ```