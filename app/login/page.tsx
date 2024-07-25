import Login from '@/components/login/Login'
import SignUp from '@/components/singup/SignUp'
import { login, signup } from './actions'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'


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
      <div>
      {/* <SignUp/> */}
      </div>
    </div>
  )
}
