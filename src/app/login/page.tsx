'use client';
import React, { useEffect } from 'react';
import { useAppSelector } from '@/lib/hooks'
import { AuthRouter } from '@/components/authRouter';


const Page = () => {
  const loggedStatus = useAppSelector(state => state.authReducer.loggedIn)

  useEffect(()=>{
    return () => AuthRouter({loggedStatus})
  },[loggedStatus]);
  
  return (
    <div>login Page</div>
  )
}

export default Page