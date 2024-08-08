# [2024]SUPABASE login/signup project

![login image](https://github.com/user-attachments/assets/b665a4a3-2b4a-4e32-8814-f005a88a3e88)

- 배포 URL : https://supabase-project-2024.vercel.app/login
- Test ID : test@example.com
- Test PW : 123456

<br>

## 프로젝트 소개

- E-mail과 소셜로 회원가입을 진행하고 로그인을 할 수 있는 페이지입니다.
- 로그인이 완료되면 Mypage로 이동이 되어 유저정보를 확인하고 변경 할 수 있습니다.

<br>

## 팀원 구성

<div align="center">

|                  **김예슬**                   |               **유수빈**                |               **전나경**               |
| :-------------------------------------------: | :-------------------------------------: | :------------------------------------: |
| [ @Yeseul0411](https://github.com/Yeseul0411) | [ @Yusubin](https://github.com/Yusubin) | [@Nagyeong](https://github.com/nage24) |

</div>

<br>

## 1. 개발 환경 및 개발 언어

- OS : Window
- Framework: Next.js 14.2.5
- Library : React 18.2.0
- Language : TypeScript, JavaScript, Css
- DB : SUPABASE
- Cloud : Vercel
- Collaboration tool : Slack, Github Desktop, Figma

  <br>

## 2. 프로젝트 구조

```
Supabase-Project-2024
├─ app
│  ├─ auth
│  │  └─ callback
│  │     └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  ├─ actions.ts
│  │  ├─ page.tsx
│  │  └─ submit-button.tsx
│  ├─ mailpage
│  │  └─ page.tsx
│  ├─ modifypassword
│  │  ├─ action.jsx
│  │  └─ page.tsx
│  ├─ modifyuserinfo
│  │  └─ page.tsx
│  ├─ mypage
│  │  └─ page.tsx
│  ├─ page.tsx
│  └─ signup
│     └─ page.tsx
├─ components
│  ├─ header
│  │  ├─ Header.jsx
│  │  ├─ HeaderCss.css
│  │  └─ imgs
│  │     └─ logo.png
│  ├─ login
│  │  ├─ Login.jsx
│  │  └─ LoginCss.css
│  ├─ mypage
│  │  ├─ member.png
│  │  ├─ ModifyPassword.jsx
│  │  ├─ ModifyPasswordCss.css
│  │  ├─ ModifyUserInfo.jsx
│  │  ├─ ModifyUserInfoCss.css
│  │  ├─ MyPage.jsx
│  │  ├─ MyPageCss.css
│  │  └─ MyPage_Gender.jsx
│  ├─ signup
│  │  ├─ SignUp.jsx
│  │  └─ SignUpCss.css
│  └─ SocailLogins
│     ├─ imgs
│     │  ├─ kakao_login_large_narrow.png
│     │  ├─ kakao_login_large_wide.png
│     │  ├─ web_light_sq_ctn@3x.png
│     │  └─ web_light_sq_SU@3x.png
│     └─ SocialLogin.tsx
├─ middleware.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
└─ utils
   └─ supabase
      ├─ client.ts
      ├─ middleware.ts
      ├─ server.ts
      └─ supabase.d.ts

```

<br>

## 3. 역할 분담

### 김예슬

- ## **UI**
- 메일주소 로그인, 메일주소 회원가입, 로그아웃
- ## **기능**
- 메일주소 로그인, 메일주소 회원가입, 로그아웃
- ## **테스트**
- 마이페이지 기능 테스트
  <br>

### 유수빈

- ## **UI**
- 소셜 로그인, 소셜 회원가입
- ## **기능**
- 소셜 로그인, 소셜 회원가입
- ## **테스트**
- 로그인 기능 테스트

<br>

### 전나경

- ## **UI**
- 마이페이지, 비밀번호 변경, 유저 정보 변경
- ## **기능**
- DB, 마이페이지, 비밀번호 변경, 유저 정보 변경
- ## **테스트**
- 회원가입 기능 테스트

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.07.16 ~ 2024.08.05
- UI 구현 : 2024.07.22 ~ 2024.07.25
- 기능 구현 : 2024.07.25 ~ 2024.08.02
- 테스트 : 2024.08.05 ~ 2024.08.07
- 배포 : 2024.08.01

<br>

### 작업 관리

-

<br>

## 5. 페이지별 기능

### [초기화면]

-

| 초기화면 |
| -------- |
|          |

<br>

### [회원가입]

-

| 회원가입 |
| -------- |
|          |

<br>

### [로그인]

-

| 로그인 |
| ------ |
|        |

<br>

### [로그아웃]

-

| 로그아웃 |
| -------- |
|          |

<br>

### [헤더]

- 상단 헤더 : 로그아웃 상태에서 로고 클릭시 로그인페이지로 이동, 로그인 상태에서 로고 클릭시 마이페이지로 이동
  - 로그아웃 : 로그인 시 헤더에 로그아웃 버튼 생성, 로그아웃 상태는 버튼 존재X

| 헤더 |
| ---- |
|      |

<br>

### [마이페이지]

-

| 마이페이지 |
| ---------- |
|            |

<br>

<!-- 리드미참조 깃허브 : https://github.com/likelion-project-README/README -->

```

```
