'use client';
import HomePage from './homepage/page';
import React, { useEffect } from 'react';
import { useAppSelector } from '../lib/hooks'
import { AuthRouter } from '@/components/authRouter';

export default function App() {
  const loggedStatus = useAppSelector(state => state.authReducer.loggedIn)

  useEffect(()=>{
    return () => AuthRouter({loggedStatus})
  },[loggedStatus]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <HomePage/>
        </div>
    </main>
  )
}
