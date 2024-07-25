

import SocialLogin  from '../../components/SocailLogins/SocialLogin'
import SignUp  from '../../components/singup/SignUp'

const centerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '70vh',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',

};

const componentWrapperStyle = {
  margin: '0 20px', // 좌우 여백을 10px로 설정합니다.
};

export default function SignUPPage() {
  return (
    <div style={centerContainerStyle}>
      <div style={contentStyle}>
        <div style={componentWrapperStyle}>
          <h2>Login</h2>
          <SocialLogin />
        </div>
        <div style={componentWrapperStyle}>
          <SignUp />
        </div>
      </div>
    </div>
  );
}