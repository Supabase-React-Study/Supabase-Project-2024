
import React from 'react';
import SignupCss from './SignupCss.css'
import { signup } from '@/app/login/actions';
import { SubmitButton } from "@/app/login/submit-button";

export default function SignUp() {
    return (
        <section>
            <header className="Singup-header">
                <h2>E-mailで新規加入</h2>
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" type="email" name="email"/>
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input placeholder="••••••••" type="password" name="password"/>
                </div>
                <div className="check-pw">
                    <div>パスワード確認</div>
                    <input placeholder="••••••••" type="password" id="check-pw"/>
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde" type="nickn" name="nickn"/>
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div class="select-sex">
                        <input type="radio" id="man" name="sex" value="man"/><label for="男">男</label>
                        <input type="radio" id="woman" name="sex" value="woman"/><label for="女">女</label>
                        <input type="radio" id="etc" name="sex" value="etc"/><label for="その他">その他</label>
                    </div>
                </div>
                <div className="agree">
                    <input type="checkbox" id="agree"/>
                    利用規約および個人情報の取扱いについてに同意する。
                </div>

                <div className="btns">
                    <SubmitButton formAction={signup}>登録</SubmitButton>
                </div>
            </form>
        </section>

    );
}

 