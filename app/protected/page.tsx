import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import AuthButton from "@/components/AuthButton";


export default async function PrivatePage() {
  const supabase = createClient()

 
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }


  return (
    <div>
      <AuthButton />
    </div>
  )
}