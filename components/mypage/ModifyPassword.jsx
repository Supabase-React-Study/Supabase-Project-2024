import ModifyPasswordCss from "./ModifyPasswordCss.css";

export default function ModifyPassword() {
    return (
        <section>
            <header className="password-modify-header">
                <h2>パスワード変更</h2>
            </header>

            <form className="password-modify">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="(유저 이메일 정보)" readonly/>
                </div>
                <div className="password-check">
                    <div className="pw">
                        <div>パスワード</div>
                        <input placeholder="パスワードを入力してください。"/>
                    </div>
                    <div className="pw-check">
                        <div>パスワード変更</div>
                        <input placeholder="パスワードをもう一度入力してください。"/>
                    </div>
                </div>

                <div className="btns">
                    <button id="back" name="back" value="back">戻る</button>
                    <button id="update" name="update" value="update">変更</button>
                </div>
            </form>
        </section>


    );
}