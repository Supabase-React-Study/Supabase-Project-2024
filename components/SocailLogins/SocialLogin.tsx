"use client";


import React, { useState } from 'react';
import Image from 'next/image'
import {createClient} from '@/utils/supabase/client'
import KakaoButton from '@/components/SocailLogins/imgs/kakao_login_large_narrow.png'
import GmailButton from '@/components/SocailLogins/imgs/web_light_sq_SU@3x.png'

export default function SocialLogin() {
  const [user, setUser] = useState(null); // State to store user information

  
  const logInWithOAuth = async (provider) => {
    const supabase = createClient(); // Supabase 클라이언트 생성
  
    try {
      const { user: authUser, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        redirectTo:"http://localhost:3000/"
      });
      if (error) {
        throw error;
      }
      setUser(authUser); // 로그인 성공 시 사용자 정보를 상태에 설정
    } catch (error) {
      console.error(`${provider} login error:`, error.message);
      // 에러 처리 (예: 사용자에게 에러 메시지 표시)
    }
  };

  return (
    <>
      <div>
        <Image src={KakaoButton} alt="Kakao Login Button" width={350}  onClick={() => logInWithOAuth('kakao')} />
      </div>

      <div>
        <Image src={GmailButton} alt="Gmail Login Button" width={350}  onClick={() => logInWithOAuth('google')} />
      </div>
    </>
  );
}
