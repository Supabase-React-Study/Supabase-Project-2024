import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Next.js의 Link 컴포넌트를 import
import styles from './Header.module.css';


import logo from '@/components/Header/imgs/logo.png'; // 로고 이미지 경로에 맞게 수정

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/login">
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" width={250} className={styles.logo} />
        </div>
      </Link>
      <button className={styles.logoutButton}>로그아웃</button>
    </div>
  );
};

export default Header;

{/* Link 컴포넌트로 감싸서 클릭 시 이동할 경로 설정 */}
{/* 클릭 가능한 요소로는 <a> 태그를 사용하지 않고, div 등의 컨테이너 요소를 사용 */}