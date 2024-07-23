import React from 'react';

export default function Login() {
    return (
      
      <form>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">パスワード</label>
        <input id="password" name="password" type="password" required />
        <button formAction={Login}>Log in</button>
      </form>
    )
  }