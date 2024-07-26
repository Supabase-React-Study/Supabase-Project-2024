import LoginCss from './LoginCss.css'
import React from 'react';
import { createClient } from '@/utils/supabase/server'
import { SubmitButton } from "@/app/login/submit-button";
import { login } from '@/app/login/actions'


export default function Login() {
   
    return (
        <section>
            <header className="login-header">
                <h2>E-mailでLogin</h2>
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="you@example.com" type="email" name="email" />
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input placeholder="••••••••" type="password" name="password"></input>
                </div>
                <div className="btns">
                    <SubmitButton formAction={login}>ログイン</SubmitButton>
                    <a href='/signup'>新規登録</a>
                </div>
                
            </form>
        </section>
    );
}
