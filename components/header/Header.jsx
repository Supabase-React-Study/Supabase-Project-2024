import React from 'react';
import logo from '@/components/Header/imgs/logo.png'; // 로고 이미지 경로에 맞게 수정해야 합니다
import Image from 'next/image'
const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
       <div>
        <Image src={logo} width={150}  />
      </div>
    </div>
  );
}

export default Header;
