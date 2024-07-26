"use client";
import MyPageCss from "./MyPageCss.css";
import { useEffect } from 'react';
import MemberImg from "./member.png";
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
export default function MyPage() {
    const router = useRouter();
    const supabase = createClient(); // Supabase 클라이언트 생성
  useEffect(() => {
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
  }, [router]);

    return (
        <section>
            <header class="mypage-header">
                <h2>マイページ</h2>
                <img class="fit-picture" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" alt="member-default-profile-img" />
            </header>
            <form class="user-info">
                <div class="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" id="email"/>
                </div>
                <div class="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde"></input>
                </div>
                <div class="sex">
                    <div>性別</div>
                    <div class="select-sex">
                        <input type="radio" id="man" name="sex" value="man"/><label for="男">男</label>
                        <input type="radio" id="woman" name="sex" value="woman"/><label for="女">女</label>
                        <input type="radio" id="etc" name="sex" value="etc"/><label for="その他">その他</label>
                    </div>
                </div>
                <div class="btns">
                    <button id="ch-password" name="ch-password" value="パスワード 変更">パスワード 変更</button>
                    <button type="button" id="ch-userinfo" name="ch-userinfo" value="変更">変更</button>
                </div>
            </form>
        </section>

    );
}