"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { createClient } from '@/utils/supabase/client';
import KakaoButton from '@/components/SocailLogins/imgs/kakao_login_large_narrow.png';
import GmailButton from '@/components/SocailLogins/imgs/web_light_sq_SU@3x.png';

export default function SocialLogin() {
  

  const logInWithOAuth = async (provider) => {
    const supabase = createClient(); // Supabase 클라이언트 생성

    try {
      const { user: authUser, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        
        
        options: {
          redirectTo: "http://localhost:3000/auth/callback",
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) {
        throw error;
      }
      setUser(authUser); // 로그인 성공 시 사용자 정보를 상태에 설정
    } catch (error) {
      console.error(`${provider} login error:`, error);
      // 에러 처리 (예: 사용자에게 에러 메시지 표시)
    }
  };

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive" // 이 전략을 사용하여 페이지가 로드되기 전에 스크립트를 로드
      />
   

      <div id="g_id_button"></div>

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
