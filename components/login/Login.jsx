import LoginCss from "./LoginCss.css";


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
                    <input placeholder="" type="password" id="password"></input>
                </div>
                <div className="btns">
                    
                    <button id="login" name="login" value="login">ログイン</button>
                </div>
            </form>
        </section>

    );
}
