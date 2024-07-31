"use client";

import MyPageCss from "./MyPageCss.css";
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

import { resetPwEmail } from '../../app/modifypassword/action';

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

  }, [router, userInfo?.gender, supabase]);

  const [namePlaceholder, setNamePlaceholder] = useState(userInfo.name)
  useEffect(() => {
    if(userInfo.name == null) {
        setNamePlaceholder('ニックネームがないです。');

        
    }
  })

  // Check the provider to determine which elements to hide
  const isProviderKakaoOrGoogle = user.app_metadata?.provider === 'kakao' || user.app_metadata?.provider === 'google';

  return (
    <section>
      <header className="mypage-header">
        <h2>マイページ</h2>
        <img className="fit-picture" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" alt="member-default-profile-img" />
      </header>
      <div className="user-info">
        <div className="mail-addr">
          <div>メールアドレス</div>
          <input placeholder={userInfo.email} id="email" value={userInfo.email} readOnly/>
        </div>
        
        {!isProviderKakaoOrGoogle && (
          <>
            <div className="nickn">
              <div>ニックネーム</div>
              <input placeholder={namePlaceholder} style={{color: "#d9d9d9"}} readOnly />
            </div>

            <div className="sex">
              <div>性別</div>
              <div className="select-sex">
                <input 
                  type="radio" 
                  id="man" 
                  name="sex" 
                  value="0" 
                  checked={selectedGender === 'man'} 
                  onChange={() => setSelectedGender('man')} 
                />
                <label htmlFor="man">男</label>
                <input 
                  type="radio" 
                  id="woman" 
                  name="sex" 
                  value="1" 
                  checked={selectedGender === 'woman'} 
                  onChange={() => setSelectedGender('woman')} 
                />
                <label htmlFor="woman">女</label>
                <input 
                  type="radio" 
                  id="etc" 
                  name="sex" 
                  value="2" 
                  checked={selectedGender === 'etc'} 
                  onChange={() => setSelectedGender('etc')} 
                />
                <label htmlFor="etc">その他</label>
              </div>
            </div>
          
        
        <div className="btns">
          <button id="ch-password" name="ch-password" onClick={() => resetPwEmail(userInfo.email)}>パスワード 変更</button>
          <a href="/modifyuserinfo" id="ch-userinfo" name="ch-userinfo">変更</a>
        </div>
        </>
        )}
      </div>
    </section>
  );
}
