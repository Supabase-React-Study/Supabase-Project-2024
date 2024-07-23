import React from 'react';
import './Footer.css'; // CSS 파일 임포트

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
        {/* 다른 필요한 푸터 내용 추가 가능 */}
      </div>
    </footer>
  );
}

export default Footer;
