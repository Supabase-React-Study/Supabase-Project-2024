
import SocialLogin  from '../../components/SocailLogins/SocialLogin'
import SignUp  from '@/components/signup/SignUp'

export default function SignUPPage() {
  return (
    <div className="centerContainerStyle">
      <div className="contentStyle">
        <div className="componentWrapperStyle">
        <h2 className="headingStyle">Login</h2>
          <SocialLogin />
        </div>
        <div className="componentWrapperStyle">
          <SignUp />
        </div>
      </div>
    </div>
  );
}