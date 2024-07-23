import ModifyPasswordCss from "./ModifyPasswordCss.css";

export default function ModifyPassword() {
    return (
        <section>
            <header class="password-modify-header">
                <h2>パスワード変更</h2>
            </header>

            <form class="password-modify">
                <div class="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="(유저 이메일 정보)" readonly/>
                </div>
                <div class="password-check">
                    <div class="pw">
                        <div>パスワード</div>
                        <input placeholder="パスワードを入力してください。"/>
                    </div>
                    <div class="pw-check">
                        <div>パスワード変更</div>
                        <input placeholder="パスワードをもう一度入力してください。"/>
                    </div>
                </div>

                <div class="btns">
                    <button id="back" name="back" value="back">戻る</button>
                    <button id="update" name="update" value="update">変更</button>
                </div>
            </form>
        </section>


    );
}