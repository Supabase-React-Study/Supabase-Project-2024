import { login, signup } from './actions'
import SocialLogin from '../../components/SocailLogins/SocialLogin'
import Login from '../../components/login/Login'
import '@/components/header/Header'



export default function LoginPage() {
  return (
    <div className="centerContainerStyle">
      <div className="contentStyle">
        <div className="componentWrapperStyle">
          <h2 className="headingStyle">Login</h2> 
          <SocialLogin />
        </div>
        <div className="componentWrapperStyle">
          <Login />
        </div>
      </div>
    </div>
  );
}

