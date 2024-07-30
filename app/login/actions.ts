'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

 
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout') //페이지 레이아웃 캐시 무효화 
  redirect('/mypage')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const options = { 
    data: {
      nickn: formData.get('nickn') as string,
      sex: formData.get('sex') as string,
      agree: formData.get('agree') as string
    }
  }

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options,
  
  })
    
  if (error) {
    let translatedErrorMessage = "不明なエラーが発生しました。";
    if (error.message === "User already registered") {
      translatedErrorMessage = "※ユーザーはすでに登録されています。";
    }

    return { error: translatedErrorMessage }
  }
  
  return { success: true };
  

}

//로그아웃
export async function signout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  redirect('/login')
}