'use client';
import ModifyPasswordJSX from '../../components/mypage/ModifyPassword'

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function ModifyPassword() {

  const [user, setUser] = useState(null);// auth.user
  const [userInfo, setUserInfo] = useState(null); // public.userinfo
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {

    const supabase = createClient();

    // 사용자 정보를 가져오는함수
    async function fetchUser() {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        router.push('/login'); // 로그인 페이지로 리디렉션
      } else {
        setUser(userData.user);

        // 추가 정보 가져오기
        const { data: userInfoData, error: userInfoError } = await supabase
          .from('userinfo') // public.userInfo 테이블
          .select('*') // 필요한 열을 선택
          .eq('email', userData.user.email) // 사용자 이메일로 필터링
          .single();

        if (userInfoError) {
          console.error('Error fetching user info:', userInfoError);
        } else {

          console.log('Fetched user info:', userInfoData);
          setUserInfo(userInfoData);
        }
      }
      setLoading(false);
    }

    fetchUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div><ModifyPasswordJSX userInfo={userInfo} /></div>
  )
}