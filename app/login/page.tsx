import { login, signup } from './actions'
import SocialLogin  from '../../components/SocailLogins/SocialLogin'
export default function LoginPage() {
  return (
      <>
      <div class="container">
  <div class="social-login">
    <SocialLogin/>
  </div>
  <div class="login-form">
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  </div>
</div>

    </>
  
  )
}