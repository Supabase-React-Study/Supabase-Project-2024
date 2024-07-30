"use client";

import React, { useState } from 'react';
import SignUpCss from './SignUpCss.css'; 
import { signup } from '@/app/login/actions';
import { SubmitButton } from "@/app/login/submit-button";


export default function SignUp() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [nicknError, setNicknError] = useState('');
    const [sexError, setSexError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [agreeError, setAgreeError] = useState('');
    const [agree, setAgree] = useState(false);  // 체크박스 상태
    
      // 비밀번호 표시
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //비밀번호 유효성
    const isPasswordValid = (password) => {
        const UpperCaseOrLowerCase = /[A-Za-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*\-+=]/.test(password);
        const isLongEnough = password.length >= 8;

        return UpperCaseOrLowerCase && hasDigit && hasSpecialChar && isLongEnough;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        

        // 초기화
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setNicknError('');
        setSexError('');
        setAgreeError('');
        setGeneralError('');

        // 값 가져오기
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');
        const nickn = formData.get('nickn');
        const sex = formData.get('sex');
        const agreeChecked = formData.get('agree');

        let valid = true;

        if (!email) {
            setEmailError('※メールアドレスを入力してください。');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('※メールアドレスが無効な形式です。');
            valid = false;
        }

        if (!password) {
            setPasswordError('※パスワードを入力してください。');
            valid = false;
        } else if (!isPasswordValid(password)) {
            setPasswordError('※ パスワードは半角8文字以上、英数字、特殊文字を組み合わせで入力してください。');
           
            valid = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordError('※パスワード確認を入力してください。');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('※パスワードが一致しません。');
            valid = false;
        }

        if (!nickn) {
            setNicknError('※ニックネームを入力してください。');
            valid = false;
        }

        if (!sex) {
            setSexError('※性別を選んでください。');
            valid = false;
        }

        if (!agreeChecked) {
            setAgreeError('※利用規約に同意をお願いします。');
            valid = false;
        }

        if (!valid) return;

        // 폼 데이터 제출
        try {
            const result = await signup(formData);
            if (result.error) {
                // 오류가 발생하면 일반 오류 메시지 설정
                setGeneralError(result.error);
            } else if (result.success) {
                // 가입 성공 후 페이지 리다이렉트
                window.location.href = '/mypage'; // 사용자의 페이지로 리다이렉트
            }
        } catch (error) {
            // 서버 오류 발생 시 콘솔에 에러 출력 및 일반 오류 메시지 설정
            console.error('加入エラー:', error);
            setGeneralError('※サーバーエラーが発生しました。');
        }

    };

    return (
        <section>
            <header className="Signup-header">
                <h2>E-mailで新規加入</h2>
            </header>
            <form className="user-info" onSubmit={handleSubmit}>
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="abcde@gmail.com" name="email" className={emailError ? 'input-error' : ''} />
                    {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input 
                        placeholder="••••••••" type={showPassword ? 'text' : 'password'} name="password" className={passwordError ? 'input-error' : ''} />
                         {/*비밀번호 확인*/}
                         <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                        </button>
                        
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div className="check-pw">
                    <div>パスワード確認</div>
                    <input placeholder="••••••••" type={showConfirmPassword ? 'text' : 'password'} name="confirm-password" className={confirmPasswordError ? 'input-error' : ''} />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                    </button>
                    {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                </div>
               

                <div className="nickn">
                    <div>ニックネーム</div>
                    <input placeholder="abcde" type="text" name="nickn" className={nicknError ? 'input-error' : ''} />
                    {nicknError && <div className="error-message">{nicknError}</div>}
                </div>
                <div className="sex">
                    <div>性別</div>
                    <div className="select-sex">
                        <input type="radio" id="man" name="sex" value="0" /><label htmlFor="man">男</label>
                        <input type="radio" id="woman" name="sex" value="1" /><label htmlFor="woman">女</label>
                        <input type="radio" id="etc" name="sex" value="2" /><label htmlFor="etc">その他</label>
                    </div>
                </div>
                {sexError && <div className="error-message">{sexError}</div>}
                <div className="agree">
                    <input type="checkbox" id="agree" name="agree" onChange={(e) => setAgree(e.target.checked)} />
                    利用規約および個人情報の取扱いについてに同意する。
                    {agreeError && <div className="error-message">{agreeError}</div>}
                </div>

                <div className="btns">
                    <SubmitButton formAction={signup}>登録</SubmitButton>
                </div>
                {generalError && <div className="error-message">{generalError}</div>}
            </form>
        </section>
    );
}
