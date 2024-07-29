import { login, signup } from './actions'
import SocialLogin from '../../components/SocailLogins/SocialLogin'
import Login from '../../components/login/Login'

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
  margin: '0 20px',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
};

const headingStyle = {
  marginBottom: '100px',
};

export default function LoginPage() {
  return (
    <div style={centerContainerStyle}>
      <div style={contentStyle}>
        <div style={componentWrapperStyle}>
          <h2 style={headingStyle}>Login</h2> 
          <SocialLogin />
        </div>
        <div style={componentWrapperStyle}>
          <Login />
        </div>
      </div>
    </div>
  );
}
