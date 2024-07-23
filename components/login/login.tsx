export default function LoginPage() {
    return (
      
      <form>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">パスワード</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form>
    )
  }