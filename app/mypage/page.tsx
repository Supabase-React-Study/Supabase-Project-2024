import MyPageJsx from '../../components/mypage/MyPage';
import PrivatePage from '../../app/protected/page'
export default function MyPage() {
  return (
    <div><MyPageJsx/>
    <PrivatePage />
    </div>
  )
}