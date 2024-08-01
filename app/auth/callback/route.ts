

import { NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';



export async function GET(request: Request) {


  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/mypage';
  
  console.log('받은 코드:', code);
  console.log('리디렉션 URL:', next);

  if (code) {
    const supabase = createClient();
    const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);
  
    if (error) {
      console.error('세션 교환 오류:', error);
      return NextResponse.redirect(`${origin}/auth/auth-code-error`);
    }
  
    console.log('세션:', session);
  
    const forwardedHost = request.headers.get('x-forwarded-host');
    const isLocalEnv = process.env.NODE_ENV === 'development';
  
    if (isLocalEnv) {
      return NextResponse.redirect(`${origin}${next}`);
    } else if (forwardedHost) {
      return NextResponse.redirect(`https://${forwardedHost}${next}`);
    } else {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

