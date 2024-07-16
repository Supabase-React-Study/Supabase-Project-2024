import React from "react";
import supabase from '../utils/supabase'

const Login =()=>{
    console.log(supabase)

    const login =async()=>{

        await supabase.auth.signInWithOAuth({
            provider:"kakao"
        })

    }
  return (
    <>
   
     <div>
       <div><button>googleで　Login</button></div>
       <div> <button onClick={login}>kakaoでLogin</button></div>

    <p>email:</p><input placeholder=' email'></input>
    
    </div>
      
      <p>password:</p><input placeholder='password 入力  '></input>
      <button>Login</button>
   
    </>
  )

}

export default Login;