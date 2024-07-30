'use client'

import ModifyPasswordCss from "./ModifyPasswordCss.css";
import { createClient } from '@/utils/supabase/client';

import React, { useState, useEffect } from 'react';

import { updatePassword } from '../../app/modifypassword/action';
import { redirect } from "next/dist/server/api-utils";

// password & password_check 일치하는지 확인
function checkPw(password, passwordCh) {
    if (password === passwordCh) {
        return true;
    }
    return false;
}

function changePassword(password, passwordCh) {
    alert(password);
    alert(passwordCh);

    if (checkPw(password, passwordCh) == true) {

        // 비밀번호 변경
        updatePassword(password);

        alert("비밀번호 변경 성공");
    };

    alert("!!");

    redirect("/mypage");
}

export default function ModifyPassword({ userInfo }) {

    const [password, setPassword] = useState('');
    const [passwordCh, setPasswordCh] = useState('');

    return (
        <section>
            <header className="password-modify-header">
                <h2>パスワード変更</h2>
            </header>

            <form className="password-modify">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder={userInfo.email} id="email" value={userInfo.email} readOnly />
                </div>
                <div className="password-check">
                    <div className="pw">
                        <div>パスワード変更</div>
                        <input placeholder="パスワードを入力してください。"
                            type="password"
                            onChange={e => {
                                setPassword(e.currentTarget.value);
                            }} />
                    </div>
                    <div className="pw-check">
                        <div>パスワード確認</div>

                        <input placeholder="パスワードをもう一度入力してください。" type="password"
                            onChange={e => {
                                ;
                                setPasswordCh(e.currentTarget.value);
                            }} />

                    </div>
                </div>

                <div className="btns">
                    <a href="http://localhost:3000/mypage">戻る</a>
                    <button id="update" name="update" value="update" onClick={() => changePassword(password, passwordCh)}>
                        変更</button>
                </div>
            </form>
        </section>
    );
}