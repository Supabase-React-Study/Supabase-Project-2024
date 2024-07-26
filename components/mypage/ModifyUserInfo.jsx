import ModifyUserInfoCss from "./ModifyUserInfoCss.css";

export default function UserInfoModify() {
    return (
        <section>
            <header className="modify-header">
                <h2>私の情報 修正</h2>
            </header>

            <form className="user-info-modify">
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="(유저 이메일 정보)" readonly />
                </div>
                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="(유저의 기존 닉네임)" />
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div className="select-sex">
                        <input type="radio" id="man" name="sex" value="man" /><label for="男">男</label>
                        <input type="radio" id="woman" name="sex" value="woman" /><label for="女">女</label>
                        <input type="radio" id="etc" name="sex" value="etc" /><label for="その他">その他</label>
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