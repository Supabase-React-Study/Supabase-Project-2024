

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) { //POST요청 처리
  const supabase = createClient()

  const {                               
    data: { user },
  } = await supabase.auth.getUser()     //현재 로그인된 사용자의 정보를 가져옴

  if (user) {
    await supabase.auth.signOut()       //user가 null이나 undefind가 아니면(=user가 존재하면) 로그아웃처리
  }

  revalidatePath('/', 'layout')         //캐시 무효화

  return NextResponse.redirect(new URL('/login', req.url), {    //로그인페이지로 되돌아가기 //Next.js에서 서버측 redirect수행 
    status: 302,
  })
}