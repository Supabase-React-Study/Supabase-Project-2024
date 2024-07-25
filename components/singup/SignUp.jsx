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
                    <input type="password" id="password"></input>
                </div>
                <div className="check-pw">
                    <div>パスワード確認</div>
                    <input type="check-pw" id="check-pw"></input>
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde" type="nickn" id="nickn"></input>
                </div>
                <div className="sex">
                    <div>性別
                    <input type="radio" id="sex">男</input>
                    <input type="radio" id="sex">女</input>
                    <input type="radio" id="sex">その他</input>
                    </div>
                </div>
                <div className="agree">
                    <input type="checkbox" id="agree">
                    利用規約および個人情報の取扱いについてに同意する。
                    </input>
                </div>
                <div className="btns">
                    <button id="signup" name="signup" value="signup">登録</button>
                </div>
            </form>
        </section>

    );
}

 