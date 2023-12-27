'use client';
import React, { useEffect } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { AuthRouter } from '@/components/authRouter';


const Signup = () => {
  const loggedStatus = useAppSelector(state => state.authReducer.loggedIn)

  useEffect(()=>{
    return () => AuthRouter({loggedStatus})
  },[loggedStatus]);
  
  return (
    <div>
        
    </div>
  )
}

export default Signup