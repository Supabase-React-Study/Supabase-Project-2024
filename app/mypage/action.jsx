'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export async function getUserInfo() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("---------- user.email 으로 user 정보 가져오는 중 ... ----------");

  const { data, error } = await supabase
        .from('userinfo')
        .select('email, name, gender')
        .eq("email", user.email)


  const userinfo = data[0];
  console.log("----- action.jsx -----");
  console.log(userinfo);

  return JSON.stringify(userinfo);
}

export async function resetPwEmail(email) {
  const supabase = createClient()

  /alert("supabase 연동");

  const { data, error } = await supabase.auth
      .resetPasswordForEmail('n0rkjdx0@gmail.com', { // email
          redirectTo: `http://localhost:3000/modifypassword`
      })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/mailpage')
}