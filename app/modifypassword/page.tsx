'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import ModifyPasswordJSX from '../../components/mypage/ModifyPassword';
import { User as SupabaseUser } from '@supabase/auth-js'; 
// User 타입 정의
type User = {
  email: string;
};

// UserInfo 타입 정의
type UserInfo = {
  email: string;
  name: string;
};

export default function ModifyPassword() {
  const [user, setUser] = useState<SupabaseUser | null>(null); // Supabase의 User 타입 또는 null// User 또는 null 타입으로 설정
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null); // UserInfo 또는 null 타입으로 설정
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    // 사용자 정보를 가져오는 함수
    async function fetchUser() {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        router.push('/login'); // 로그인 페이지로 리디렉션
      } else {
        // 타입 단언을 사용하여 명확하게 설정
        setUser(userData.user as User);

        // 추가 정보 가져오기
        const { data: userInfoData, error: userInfoError } = await supabase
          .from('userinfo') // public.userInfo 테이블
          .select('*') // 필요한 열을 선택
          .eq('email', userData.user.email) // 사용자 이메일로 필터링
          .single();

        if (userInfoError) {
          console.error('Error fetching user info:', userInfoError);
        } else {
          // 타입 단언을 사용하여 명확하게 설정
          setUserInfo(userInfoData as UserInfo);
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
    <div>
      <ModifyPasswordJSX userInfo={userInfo} />
    </div>
  );
}
