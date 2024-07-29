'use server'

import MyPageCss from "./MyPageCss.css";
import { useEffect } from 'react';
import MemberImg from "./member.png";
import MyPage_Gender from "./MyPage_Gender.jsx";

// import { getUserInfo, resetPasswordForEmail } from '../../app/mypage/action'
import React from "react";

import { createClient } from '@/utils/supabase/server'

export default async function MyPage() {

    // const userInfo = getUserInfo(); // user.email
    // console.log("----- mypage.jsx -----");
    // console.log(userInfo);

        const supabase = createClient()

        const {
            data: { user },
        } = await supabase.auth.getUser();

        console.log("---------- user.email 으로 user 정보 가져오는 중 ... ----------");

        const { data, error } = await supabase
            .from('userinfo')
            .select('email, name, gender')
            .eq("email", user.email)


        const userinfo = data[0];
        console.log(userinfo);


    return (
        <section>
            <header className="mypage-header">
                <h2>マイページ</h2>
                <img className="fit-picture" alt="member-default-profile-img" src="https://www.pngall.com/wp-content/uploads/10/Member-Silhouette-Transparent.png" />
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder={userinfo.email} id="email" />
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder={userinfo.name}></input>
                </div>
                {/* <MyPage_Gender gender={userinfo.gender}/> */}
                {/* <div className="sex">
                    <div>性別</div>
                    <div className="select-sex">
                        <input type="radio" id="man" name="gender" value="man" /><label for="男">男</label>
                        <input type="radio" id="woman" name="gender" value="woman" /><label for="女">女</label>
                        <input type="radio" id="etc" name="gender" value="etc" /><label for="その他">その他</label>
                    </div>
                </div> */}
                <div className="btns">
                    <button id="ch-password" name="ch-password" value="パスワード 変更"> パスワード 変更</button>
                    {/* <onClick={() => resetPwEmail()}/> */}
                    <button type="button" id="ch-userinfo" name="ch-userinfo" value="変更">変更</button>
                </div>
            </form>
        </section >
    );
}