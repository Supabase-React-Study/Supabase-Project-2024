import React from 'react';

export default function SignUpPage() {
    return (
      <form>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">パスワード</label>
        <input id="password" name="password" type="password" required />
        <label htmlFor="confirmpassword">パスワード確認</label>
        <input id="confirmpassword" name="confirmpassword" type="confirmpassword" required />
        <label htmlFor="nickname">ニックネーム</label>
        <input id="nickname" name="nickname" type="nickname" required />
        <input type="radio" name="gender" value="">男性</input>
        <input type="radio" name="gender" value="">女性</input>
        <input type="radio" name="gender" value="">その他</input>
        <input type="checkbox" name="checkbox" value="">
        利用規約および個人情報の取扱いについてに同意する
        </input>
        <button formAction={SignUpPage}>登録</button>
      </form>
    )
  }

 