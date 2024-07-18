import { supabase } from '../utils/supabase'; // Assuming supabase is correctly imported
import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null); // State to store user information

  const logInWithKakao = async () => {
    try {
      const { user: authUser, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
      });
      if (error) {
        throw error.message;
      }
      setUser(authUser); // Set user information to state on successful login
    } catch (error) {
      console.error('Kakao login error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const logInWithGmail = async () => {
    try {
      const { user: authUser, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) {
        throw error.message;
      }
      setUser(authUser); // Set user information to state on successful login
    } catch (error) {
      console.error('Gmail login error:', error);
      // Handle error (e.g., show error message to user)
    }
  };


  return (
    <>
     <button onClick={logInWithKakao}>Kakao로 로그인</button>
    <button onClick={logInWithGmail}>G-mail로 로그인</button>
    </>
  );
};

export default Login;
