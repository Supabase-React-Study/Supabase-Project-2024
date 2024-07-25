import { login, signup } from './actions'
import SocialLogin  from '../../components/SocailLogins/SocialLogin'
import Login  from '../../components/login/Login'

const centerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
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

export default function LoginPage() {
  return (
    <div style={centerContainerStyle}>
      <div style={contentStyle}>
        <div style={componentWrapperStyle}>
          <h2>Login</h2>
          <SocialLogin />
        </div>
        <div style={componentWrapperStyle}>
          <Login />
        </div>
      </div>
    </div>
  );
}