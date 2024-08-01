"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { createClient } from '../../utils/supabase/client';
import KakaoButton from '../../components/SocailLogins/imgs/kakao_login_large_narrow.png';
import GmailButton from '../../components/SocailLogins/imgs/web_light_sq_SU@3x.png';
const defaultUrl = process.env.VERCEL_URL
  ? `http://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Define a type for supported OAuth providers
type OAuthProvider = 'kakao' | 'google';

export default function SocialLogin() {

  const logInWithOAuth = async (provider: OAuthProvider) => {
    const supabase = createClient(); // Supabase 클라이언트 생성

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: "http://supabase-project-2024.vercel.app/auth/callback",
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) {
        throw error;
      }
      // You might need to handle user state here
      // setUser(authUser); // 로그인 성공 시 사용자 정보를 상태에 설정
    } catch (error) {
      console.error(`${provider} login error:`, error);
      // 에러 처리 (예: 사용자에게 에러 메시지 표시)
    }
  };

  return (
    <>

   
     
      <div>
        <Image
          src={KakaoButton}
          alt="Kakao Login Button"
          width={350}
          onClick={() => logInWithOAuth('kakao')}
        />
      </div>

      <div>
        <Image
          src={GmailButton}
          alt="Gmail Login Button"
          width={350}
          onClick={() => logInWithOAuth('google')}
        />
      </div>
    </>
  );
}
