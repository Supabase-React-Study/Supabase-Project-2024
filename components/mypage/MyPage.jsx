'use client'

import MyPageCss from "./MyPageCss.css";
import { useEffect } from 'react';
import MemberImg from "./member.png";

import React, { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client'
import { redirect } from "next/dist/server/api-utils";


export default async function MyPage() {

    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

    console.log(user);

    const resetPwEmail = async () => {
        alert("supabase 연동");

        const { data, error } = await supabase.auth
            .resetPasswordForEmail('n0rkjdx0@gmail.com', {
                redirectTo: `http://localhost:3000/modifypassword`
            })

        redirect("http://localhost:3000/mailpage");
    }

    return (
        <section>
            <header className="mypage-header">
                <h2>マイページ</h2>
                <img className="fit-picture" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" alt="member-default-profile-img" />
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder={user.email} id="email" />
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde"></input>
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div className="select-sex">
                        <input type="radio" id="man" name="sex" value="man"/><label htmlFor="男">男</label>
                        <input type="radio" id="woman" name="sex" value="woman"/><label htmlFor="女">女</label>
                        <input type="radio" id="etc" name="sex" value="etc"/><label htmlFor="その他">その他</label>
                    </div>
                </div>
                <div className="btns">
                    <button id="ch-password" name="ch-password" value="パスワード 変更" onClick={() => resetPwEmail()}> パスワード 変更</button>
                <button type="button" id="ch-userinfo" name="ch-userinfo" value="変更">変更</button>
            </div>
        </form>
        </section >

    );
}