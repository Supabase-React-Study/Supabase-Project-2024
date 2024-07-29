'use client'


import Script from 'next/script'
import React, { useRef } from 'react';
import a from '../mypage/MyPage_Gender'

import { createClient } from '@/utils/supabase/client'

export default async function MyPage(user_gender) {

    console.log(user_gender);

    if (typeof window !== 'undefined') {
        console.log("js loading ... ")
        React.render(<div/>, document.getElementById("gender"));
        console.log(document.getElementById("gender"))
    }

    console.log("mypage_gender");

    const genderRef = useRef(null);


    return (
        null
    );
}
