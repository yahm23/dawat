'use client';
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app'
import { config } from '../../config/config'
import { getAuth } from 'firebase/auth';
import { useAppSelector } from '../../lib/hooks'
import { AuthRouter } from '@/components/authRouter';

// export const firebaseApp = initializeApp(config.firebase);
// export const auth = getAuth(firebaseApp);

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