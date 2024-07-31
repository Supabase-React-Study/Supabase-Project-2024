"use client"

import LoginCss from './LoginCss.css'
import React, { useState } from 'react';
import { SubmitButton } from "@/app/login/submit-button";
import { login } from '@/app/login/actions'


export default function Login() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      // 초기화
      setEmailError('');
      setPasswordError('');
      setGeneralError('');
  
      // 값 가져오기
      const email = formData.get('email');
      const password = formData.get('password');
  
      let valid = true;
  
      if (!email) {
        setEmailError('※メールアドレスを入力してください。');
        valid = false;
      }
  
      if (!password) {
        setPasswordError('※パスワードを入力してください。');
        valid = false;
      }
  
      if (!valid) return;
  
      // 폼 데이터 제출
      try {
        const result = await login(formData);
        if (result.error) {
          // 오류가 발생하면 일반 오류 메시지 설정
          setGeneralError(result.error);
        } else if (result.success) {
          // 로그인 성공 후 페이지 리다이렉트
          window.location.href = '/mypage'; // 사용자의 페이지로 리다이렉트
        }
      } catch (error) {
        // 서버 오류 발생 시 콘솔에 에러 출력 및 일반 오류 메시지 설정
        console.error('ログインエラー:', error);
        setGeneralError('※サーバーエラーが発生しました。');
      }
    };

    return (
        <section>
            <header className="login-header">
                <h2>E-mailでLogin</h2>
            </header>
            <form className="user-info" onSubmit={handleSubmit}>
                <div className="mail-addr">
                    <div>メールアドレス</div>
                    <input placeholder="you@example.com" type="email" name="email" />
                    {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div className="password">
                    <div>パスワード</div>
                    <input placeholder="••••••••" type="password" name="password"></input>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div className="btns">
                  <a><SubmitButton formAction={login} pendingText='ログイン中...'>ログイン</SubmitButton></a> 
                    <a href='/signup'>新規登録</a>
                </div>
                {generalError && <div className="error-message">{generalError}</div>}
            </form>
        </section>
    );
}
