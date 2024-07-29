'use server'

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function resetPwEmail(email) {
  const supabase = createClient()

  const { data, error } = await supabase.auth
      .resetPasswordForEmail(email, { // email
          redirectTo: `http://localhost:3000/modifypassword`
      })

  if (error) {
    console.error('', error);
    return NextResponse.redirect(`https://${forwardedHost}/error`);
  }

  NextResponse.redirect(`https://${forwardedHost}/mypage`);
}