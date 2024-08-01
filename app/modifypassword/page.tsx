'use client';
import { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import ModifyPasswordJSX from '../../components/mypage/ModifyPassword';
import { User as SupabaseUser } from '@supabase/auth-js';

type User = {
  id: string;
  email: string;
  // 다른 필드들을 추가합니다
};

type UserInfo = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
};

export default function ModifyPassword() {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    async function fetchUser() {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        router.push('/login');
      } else {
        // SupabaseUser를 User 타입으로 변환
        const convertedUser: User = {
          id: userData.user.id,
          email: userData.user.email,
          // 필요한 필드를 매핑합니다
        };
        setUser(convertedUser);

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
