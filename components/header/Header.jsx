
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Next.js의 Link 컴포넌트를 import
import HeaderCss from './HeaderCss.css';
import logo from './imgs/logo.png'; // 로고 이미지 경로에 맞게 수정

import { SubmitButton } from '../../app/login/submit-button';
import { signout } from '../../app/login/actions'
import { createClient } from '../../utils/supabase/server';


export default async function Header () {
  const supabase = createClient();

  // 로그인 상태 확인
  const { data, error } = await supabase.auth.getUser();

  // 로그인되지 않았으면 로그인 페이지로 리디렉션
    if (error || !data?.user) {
      return (
        <div className="header">
          <Link href="/login">
            <div className="logoContainer">
              <Image src={logo} alt="Logo" width={250} className="logo" />
            </div>
          </Link>
        </div>
      );
    }

  // 로그인 된 상태
  return (
    <div className="header">
      <Link href="/mypage">
        <div className="logoContainer">
          <Image src={logo} alt="Logo" width={250} className="logo" />
        </div>
      </Link>

      <div>
      <form>
        <SubmitButton className="logoutButton" formAction={signout}>
          ログアウト
        </SubmitButton>
      </form>
    </div>
     
    </div>
  );
};



{/* Link 컴포넌트로 감싸서 클릭 시 이동할 경로 설정 */}
{/* 클릭 가능한 요소로는 <a> 태그를 사용하지 않고, div 등의 컨테이너 요소를 사용 */}