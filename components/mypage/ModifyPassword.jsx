'use client'

import ModifyPasswordCss from "./ModifyPasswordCss.css";
import { createClient } from '@/utils/supabase/client';

import React, { useState } from 'react';

import { resetPwEmail } from '../../app/modifypassword/action';

function checkPw(value, currentPw) {
    if(value == currentPw) {return true;}


    alert("PW 불일치!");
    return false;
}

function sendPwEmail(value, currentPw) {
    if(checkPw(value, currentPw)) {
        resetPwEmail(userInfo.email)
    };
}

export default function ModifyPassword({ userInfo }) {

    const [value, setValue] = useState('');

    // const supabase = createClient();

    //     const [email, password] = useState("", "");

    //     useEffect(() => {
    //         alert("useEffect");

    //         supabase.auth.onAuthStateChange(async (event, session) => {

    //             console.log(event, session);

    //             if (true) {     // event == "PASSWORD_RECOVERY"
    //                 const newPassword = prompt("What would you like your new password to be?");
    //                 const { data, error } = await supabase.auth
    //                     .updateUser({ password: newPassword })

    //                 if (data) alert("Password updated successfully!")
    //                 if (error) alert("There was an error updating your password.")
    //             } 
    //         })
    //     }, [])



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
                        <div>パスワード</div>
                        <input placeholder="パスワードを入力してください。" 
                                type="password" 
                                value={value}
                                onChange={e => { 
                                    setValue(e.currentTarget.value); 
                                    }}/>
                    </div>
                    <div className="pw-check">
                        <div>パスワード変更</div>
                        <input placeholder="パスワードをもう一度入力してください。" type="password"
                                value={value}
                                onChange={e => {
                                    if(checkPw(value, e.currentTarget.value)){;
                                    setValue(e.currentTarget.value)}; 
                                    }}/>
                    </div>
                </div>

                <div className="btns">
                    <button id="back" name="back" value="back" type="button" onclick="location.href='http://localhost:3000/mypage'">戻る</button>
                    <button id="update" name="update" value="update" onClick={() => sendPwEmail(value, currentPw)}>
                                                                                        変更</button>
                </div>
            </form>
        </section>
    );
}