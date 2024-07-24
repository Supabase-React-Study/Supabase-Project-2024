import Login from '@/components/login/Login'
import { login, signup } from './actions'
// import SocialLogin  from '../../components/SocailLogins/SocialLogin'
export default function LoginPage() {
  return (
    <div>
      <div>
        <h2> Login </h2>
        {/* <SocialLogin/> */}
        </div>
   
      <div>
        <Login/>
        
      </div>
    </div>
  )
}