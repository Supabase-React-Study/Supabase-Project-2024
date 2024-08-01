'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

 
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    let translatedErrorMessage = "※不明なエラーが発生しました。";
    switch (error.message) {
      case "User not found":
        translatedErrorMessage = "※メールアドレスが登録されていません。新規登録をお願いします。";
        break;
      case "Invalid login credentials":
        translatedErrorMessage = "※メールアドレスまたはパスワードが間違っています。";
        break;
      default:
        translatedErrorMessage = "※ログインに失敗しました。";
        break;
    }

    return { error: translatedErrorMessage }
  }
  
  return { success: true };

}

export async function signup(formData: FormData) {
  const supabase = createClient()

  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const nickn = formData.get('nickn') as string;
  const sex = formData.get('sex') as string;
  const agree = formData.get('agree') as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickn,
        sex,
        agree
      }
    }
  });
    
  if (error) {
    let translatedErrorMessage = "※不明なエラーが発生しました。";
    if (error.message === "User already registered") {
      translatedErrorMessage = "※ユーザーはすでに登録されています。";
    }

    return { error: translatedErrorMessage }
  }

  //유저정보 DB에 업데이트
  const userEmail = data.user?.email;

  if (userEmail) {
    const { data: updateData, error: updateError } = await supabase
      .from('userinfo')
      .update({ name: nickn, gender: sex })
      .eq('email', userEmail);

    if (updateError) {
      console.error("Failed to update userinfo:", updateError);
      return { error: "※ユーザー情報の更新に失敗しました。" };
    }
  }


  return { success: true };
  

}

//로그아웃
export async function signout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  redirect('/login')
}