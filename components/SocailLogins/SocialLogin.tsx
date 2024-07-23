
import Image from 'next/image'

import KakaoButton from '@/components/SocailLogins/imgs/kakao_login_large_narrow.png'
import GmailButton from '@/components/SocailLogins/imgs/web_light_sq_SU@3x.png'

export default function SocialLogin() {


  return (
    <>
      <div>
        <Image src={KakaoButton} alt="Kakao Login Button" width={350}  />
      </div>

      <div>
        <Image src={GmailButton} alt="Gmail Login Button" width={350}  />
      </div>
    </>
  );
}
