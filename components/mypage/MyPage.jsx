
"use client";

import MyPageCss from "./MyPageCss.css";
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function MyPage({ user, userInfo }) {
  const router = useRouter();
  const supabase = createClient(); // Supabase 클라이언트 생성

  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
    // Initialize selectedGender based on userInfo.gender
    if (userInfo?.gender === '0') {
      setSelectedGender('man');
    } else if (userInfo?.gender === '1') {
      setSelectedGender('woman');
    } else if (userInfo?.gender === '2' || userInfo?.gender === null) {
      setSelectedGender('etc');
    } else {
      setSelectedGender(''); // Default or no gender selected
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/login');
      } else if (event === 'SIGNED_IN') {
        router.push('/mypage');
      }
    });

    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, [router, userInfo?.gender, supabase]);

  return (
    <section>
      <header className="mypage-header">
        <h2>マイページ</h2>
        <img className="fit-picture" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" alt="member-default-profile-img" />
      </header>
      <form className="user-info">
        <div className="mail-addr">
          <div>メールアドレス</div>
          <input placeholder={userInfo.email} id="email" value={userInfo.email} readOnly/>
        </div>
        <div className="nickn">
          <div>ニックネーム</div>
          <input placeholder={userInfo.name}  value={userInfo.name} readOnly/>
        </div>
        <div className="gender">
          <div>性別</div>
          <div className="select-sex">
            <input type="hidden" value={userInfo.gender} readOnly/>
            <input
              type="radio" 
              id="man" 
              name="gender" 
              value="0" 
              checked={selectedGender === 'man'} 
              // onChange={() => setSelectedGender('man')}
              onclick="return(false);"
            />
            <label htmlFor="man">男</label>
            <input
              type="radio" 
              id="woman" 
              name="gender" 
              value="1" 
              checked={selectedGender === 'woman'} 
              // onChange={() => setSelectedGender('woman')}
              onclick="return false;"
            />
            <label htmlFor="woman">女</label>
            <input
              type="radio" 
              id="etc" 
              name="gender" 
              value="2" 
              checked={selectedGender === 'etc'} 
              // onChange={() => setSelectedGender('etc')}
              onclick="return false;" 
            />
            <label htmlFor="etc">その他</label>
          </div>
        </div>
        <div className="btns">
          <a href="/modifypassword" id="ch-password" name="ch-password">パスワード 変更</a>
          <a href="/modifyuserinfo" id="ch-userinfo" name="ch-userinfo">変更</a>
        </div>
      </form>
    </section>
  );
}