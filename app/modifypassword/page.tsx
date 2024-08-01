'use client';
import { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import ModifyPasswordJSX from '../../components/mypage/ModifyPassword';
import { User as SupabaseUser } from '@supabase/auth-js'; // Supabase의 User 타입을 가져옵니다

type UserInfo = {
  id: string;
  email: string;
  name: string;

};

export default function ModifyPassword() {
  const [user, setUser] = useState<SupabaseUser | null>(null); // Supabase의 User 타입 또는 null
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    async function fetchUser() {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        router.push('/login'); // 로그인 페이지로 리디렉션
      } else {
        setUser(userData.user); // Supabase의 User 타입을 그대로 사용

        const { data: userInfoData, error: userInfoError } = await supabase
          .from('userinfo')
          .select('*')
          .eq('email', userData.user.email)
          .single();

        if (userInfoError) {
          console.error('Error fetching user info:', userInfoError);
        } else {
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
