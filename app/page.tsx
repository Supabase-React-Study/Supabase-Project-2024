"use server"

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default async function Index() {
  

    redirect('/mypage')
  }