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

## 팀원 구성 및 담당 기능

<div align="center">

|                  **김예슬**                   |               **유수빈**                |               **전나경**               |
| :-------------------------------------------: | :-------------------------------------: | :------------------------------------: |
| [ @Yeseul0411](https://github.com/Yeseul0411) | [ @Yusubin](https://github.com/Yusubin) | [@Nagyeong](https://github.com/nage24) |
|   메일주소 로그인, 메일주소 회원가입, 로그아웃    |         소셜 로그인, 소셜 회원가입         | 마이페이지, 비밀번호 변경, 유저 정보 변경 |
|              마이페이지 기능 테스트             |         로그인 기능 테스트                |           회원가입 기능 테스트          |


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

### 작업 관리

-

<br>

## 5. 페이지별 기능

### [초기화면]

- 로그인 페이지로 고정. 신규회원가입페이지로 이동 가능. 

| 초기화면 |
| -------- |
|  ![login image](https://github.com/user-attachments/assets/b665a4a3-2b4a-4e32-8814-f005a88a3e88)         |

<br>

### [회원가입]

-사용자가 회원가입을 시도할 때 Supabase를 사용하여 새 사용자를 등록하고, 사용자 정보를 데이터베이스에 업데이트하는 기능을 수행한다.
 Supabase의 URL과 Anon Key를 전달, formData.get() 메서드를 사용하여 
 폼 데이터에서 이메일, 비밀번호, 닉네임, 성별, 동의 여부를 가져온 후 supabase.auth.signUp() 메서드를 호출하여 사용자를 등록한다.

| 회원가입 |
| -------- |
|          |

<br>

### [로그인]

-사용자가 이메일과 비밀번호를 이용하여 인증을 시도하는 페이지. 
Supabase의 인증 시스템을 사용하여 로그인을 처리하며, 로그인 과정에서 발생할 수 있는 다양한 오류를 처리

| 로그인 |
| ------ |
|        |

<br>

### [로그아웃]

- 사용자가 로그아웃버튼을 누르면 Supabase를 사용하여 세션을 종료하고, 사용자를 로그인 페이지로 리디렉션하는 기능을 수행한다.

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

- 사용자의 프로필 페이지를 구성하는 페이지.
   특정 조건(소셜가입유무)에 따라 UI 요소가 다르게 렌더링된다.
   이메일인증 가입자인 경우, 주요 기능은 사용자 정보를 표시하고, 패스워드 변경 및 사용자 정보 수정 기능을 제공한다. 
   소셜 가입자의 경우 가입한 소셜계정의 이메일만 표시한다. *패스워드 및 정보수정 불가.

| 마이페이지 |
| ---------- |
|            |

<br>

<!-- 리드미참조 깃허브 : https://github.com/likelion-project-README/README -->

```

```
