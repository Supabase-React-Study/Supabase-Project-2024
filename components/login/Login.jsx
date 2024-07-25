import LoginCss from './LoginCss.css'
import React from 'react';

export default function Login() {
    return (
        <section>
            <header className="login-header">
                <h2>E-mailでLogin</h2>
            </header>
            <form className="user-info">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" type="email" id="email"/>
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input type="password" id="password"></input>
                </div>
                <div className="btns">
                    
                    <button formAction={Login} >ログイン</button>
                </div>
            </form>
        </section>

    );
}
