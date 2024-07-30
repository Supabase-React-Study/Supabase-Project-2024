'use server'

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function resetPwEmail(email) {
  const supabase = createClient()

  console.log("resetPwEmail");

  const { data, error } = await supabase.auth
      .resetPasswordForEmail(email, { // email
          redirectTo: `http://localhost:3000/modifypassword`
      })

    if(error) {
      console.log("비밀번호 변경 메일 보내기 실패")
    }

    // "メールを送りました。確認してください。"　ページに移動
    // return NextResponse.redirect(`http://${forwardedHost}/mailpage`);
}

export async function updatePassword(newPw) {
  const supabase = createClient()

  console.log("updatePassword");
  const { user, error } = await supabase.auth.update({password: newPw})
}

export async function updateUserInfo(email, name, gender) {
  const supabase = createClient()

  const { data, error } = await supabase.auth
      .resetPasswordForEmail(email, { // email
          redirectTo: `http://localhost:3000/modifypassword`
      })

  // if (error) {
  //   console.error('', error);
  //   return NextResponse.redirect(`https://${forwardedHost}/error`);
  // }

  // NextResponse.redirect(`https://${forwardedHost}/mypage`);
}