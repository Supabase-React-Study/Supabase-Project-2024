
import LoginCss from './LoginCss.css'
import React from 'react';
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation';
import { SubmitButton } from "@/app/login/submit-button";
import { login } from '@/app/login/actions'


// import login from '../../app/login/actions'

export default function Login() {
   
    return (
        <section>
            <header className="login-header">
                <h2>E-mailでLogin</h2>
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="you@example.com" type="email" id="email"/>
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input placeholder="••••••••" type="password" id="password"></input>
                </div>
                <div className="btns">
                    
                    <button formAction={login}>ログイン</button>
              
                </div>
            </form>
        </section>

    );
}
