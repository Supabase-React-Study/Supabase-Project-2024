'use server'

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export async function resetPwEmail(email) {
  const supabase = createClient()

  console.log("resetPwEmail");

  const { data, error } = await supabase.auth
    .resetPasswordForEmail(email, { // email
      redirectTo: `/modifypassword`
    })

  if (error) {
    console.log("비밀번호 변경 메일 보내기 실패")
  }

  // "メールを送りました。確認してください。"　ページに移動
  redirect(`/mailpage`);
}

export async function updatePassword(newPw) {
  const supabase = createClient()

  console.log("updatePassword");

const { data, error } = await supabase.auth
    .updateUser({ password: newPw });


  if (data) console.log("Password updated successfully!");
  if (error) console.log("There was an error updating your password.");

  const { signOutError } = await supabase.auth.signOut();

  if (signOutError) console.log("signOutError");

  // redirect(`/login`);
}

export async function updateUserInfo(newName, newGender, userEmail) {
  const supabase = createClient();

  
  const { data, error } = await supabase
  .from('userinfo')
  .update({ name: newName, 
            gender: newGender
  })
  .match({ email: userEmail })

    if (data) console.log("UserInfo updated successfully!");
    if (error) console.log("There was an error updating User Information.");

}