'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
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
    }
  }

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options,
  
  })
 
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/mypage')
}