import MyPageCss from "./login.css";


export default function Login() {
    return (
        <section>
            <header class="login-header">
                <h2>E-mailでLogin</h2>
            </header>
            <form class="user-info">
                <div class="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" type="email" id="email"/>
                </div>
                <div class="password">
                    <div>パスワード</div>
                    <input placeholder="" type="password" id="password"></input>
                </div>
                <div class="btns">
                    
                    <button id="login" name="login" value="login">ログイン</button>
                </div>
            </form>
        </section>

    );
}
