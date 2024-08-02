
"use client";

import MyPageCss from "./MyPageCss.css";
import { useEffect, useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';

import { updateUserInfo } from '../../app/modifypassword/action';

export default function ModifyUserInfo({ userInfo }) {
  const router = useRouter();
  const supabase = createClient(); // Supabase 클라이언트 생성

  const [selectedGender, setSelectedGender] = useState('');
  const [gender, setGender] = useState(userInfo.gender);

  useEffect(() => {
    // Initialize selectedGender based on userInfo.gender
    if (userInfo?.gender === '0') {
      setSelectedGender('man');
    } else if (userInfo?.gender === '1') {
      setSelectedGender('woman');
    } else if (userInfo?.gender === '2') {
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

  const [name, setName] = useState(userInfo.name);

  return (
    <section>
      <header className="mypage-header">
        <h2>マイページ</h2>
        <img className="fit-picture" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" alt="member-default-profile-img" />
      </header>
      <form className="user-info">
        <div className="mail-addr">
          <div>メールアドレス</div>
          <input placeholder={userInfo.email} id="email" readOnly/>
        </div>
        <div className="nickn">
          <div>ニックネーム</div>
          <input placeholder={userInfo.name} onChange={e => {
                                setName(e.currentTarget.value);
                            }}/>
        </div>
        <div className="gender">
          <div>性別</div>
          <div className="select-sex">
            <input type="hidden"/>
            <input
              type="radio" 
              id="man" 
              name="gender" 
              value="0" 
              checked={selectedGender === 'man'} 
              onChange={() => {setSelectedGender('man'); setGender(0);}
              }
            />
            <label htmlFor="man">男</label>
            <input
              type="radio" 
              id="woman" 
              name="gender" 
              value="1" 
              checked={selectedGender === 'woman'} 
              onChange={() => {setSelectedGender('woman'); setGender(1);}}
            />
            <label htmlFor="woman">女</label>
            <input
              type="radio" 
              id="etc" 
              name="gender" 
              value="2" 
              checked={selectedGender === 'etc'} 
              onChange={() => {setSelectedGender('etc'); setGender(2);}} 
            />
            <label htmlFor="etc">その他</label>
          </div>
        </div>
        <div className="btns">
        <a href="/mypage">戻る</a>
        <button id="update" name="update" onClick={() => updateUserInfo(name, gender, userInfo.email)}>変更</button>
        </div>
      </form>
    </section>
  );
}