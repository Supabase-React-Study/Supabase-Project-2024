"use client";
import React from 'react';
import SignupCss from './SignupCss.css'


export default function SignUp() {
    return (
        <section>
            <header className="Singup-header">
                <h2>E-mailで新規加入</h2>
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" type="email" id="email"/>
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input type="password" id="password"/>
                </div>
                <div className="check-pw">
                    <div>パスワード確認</div>
                    <input type="check-pw" id="check-pw"/>
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde" type="nickn" id="nickn"/>
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div class="select-sex">
                        <input type="radio" id="sex" value="man"/>男
                        <input type="radio" id="sex" value="woman"/>女
                        <input type="radio" id="sex" value="etc"/>その他
                    </div>
                </div>
                <div className="agree">
                    <input type="checkbox" id="agree"/>
                    利用規約および個人情報の取扱いについてに同意する。
                </div>
                <div className="btns">
                    <button id="signup" name="signup" value="signup">登録</button>
                </div>
            </form>
        </section>

    );
}

 