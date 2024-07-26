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
                    <input placeholder="••••••••" type="password" id="password"/>
                </div>
                <div className="check-pw">
                    <div>パスワード確認</div>
                    <input placeholder="••••••••" type="check-pw" id="check-pw"/>
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde" type="nickn" id="nickn"/>
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div class="select-sex">
                    <input type="radio" id="man" name="sex" value="man" /><label for="男">男</label>
                        <input type="radio" id="woman" name="sex" value="woman" /><label for="女">女</label>
                        <input type="radio" id="etc" name="sex" value="etc" /><label for="その他">その他</label>
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

 