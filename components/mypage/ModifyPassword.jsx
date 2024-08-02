'use client';

import React, { useState } from 'react';
import ModifyPasswordCss from "./ModifyPasswordCss.css";
import { updatePassword } from '../../app/modifypassword/action';
import { useRouter } from 'next/navigation'; // Use this for redirection

// Password validation function
const isPasswordValid = (password) => {
    const UpperCaseOrLowerCase = /[A-Za-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*\-+=]/.test(password);
    const isLongEnough = password.length >= 8;

    return UpperCaseOrLowerCase && hasDigit && hasSpecialChar && isLongEnough;
};

// Password matching function
const doPasswordsMatch = (password, passwordCh) => {
    return password === passwordCh;
};

export default function ModifyPassword({ userInfo }) {
    const [password, setPassword] = useState('');
    const [passwordCh, setPasswordCh] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Clear previous errors
        setPasswordError('');
        setConfirmPasswordError('');

        let valid = true;

        if (!isPasswordValid(password)) {
            setPasswordError('※ パスワードは半角8文字以上、英数字、特殊文字を組み合わせて入力してください。');
            valid = false;
        }

        if (!doPasswordsMatch(password, passwordCh)) {
            setConfirmPasswordError('※ パスワードが一致しません。');
            valid = false;
        }

        if (!valid) return;

        try {
            await updatePassword(password);
            alert('※ パスワード変更成功');
            router.push('/login');
        } catch (error) {
            console.error('パスワード変更エラー:', error);
            alert('※ サーバーエラーが発生しました。');
        }
    };

    return (
        <section>
            <header className="password-modify-header">
                <h2>パスワード変更</h2>
            </header>

            <form className="password-modify" onSubmit={handleSubmit}>
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder={userInfo.email} id="email" value={userInfo.email} readOnly />
                </div>
                <div className="password-check">
                    <div className="pw">
                        <div>パスワード変更</div>
                        <input 
                            placeholder="パスワードを入力してください。"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword(e.currentTarget.value)}
                            className={passwordError ? 'input-error' : ''}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </button>
                        {passwordError && <div className="error-message">{passwordError}</div>}
                    </div>
                    <div className="pw-check">
                        <div>パスワード確認</div>
                        <input 
                            placeholder="パスワードをもう一度入力してください。" 
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={passwordCh}
                            onChange={e => setPasswordCh(e.currentTarget.value)}
                            className={confirmPasswordError ? 'input-error' : ''}
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </button>
                        {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                    </div>
                </div>

                <div className="btns">
                    <a href="/mypage">戻る</a>
                    <button id="update" type="submit">
                        変更
                    </button>
                </div>
            </form>
        </section>
    );
}
