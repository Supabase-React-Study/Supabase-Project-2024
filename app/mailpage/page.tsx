import React from 'react';

export default function MailPage() {
  return (

    <div style={{ textAlign: 'center', marginTop: '200px' }}>

    <h2>認証メールを送りました。</h2>
    <h5 style={{ color: '#676767' }}>ご確認ください。</h5>
    <a href="/login" style={{ color: '#676767' }}>
      ログインページへ移動
    </a>
  </div>
  );
}
