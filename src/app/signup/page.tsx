'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { setLoggedIn, setUserEmail, setUserId } from '@/lib/slices/authSlice';
import { useAppDispatch } from '@/lib/hooks'
import {auth} from '@/config/config';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const newUserMiddleware = async (email:string, password:string) => {
    const result = await createUserWithEmailAndPassword(email, password);
    
    if (result) {
        dispatch(setLoggedIn(true));
        dispatch(setUserEmail(result.user.email ? result.user.email : ''));
        dispatch(setUserId(result.user.uid ? result.user.uid : ''));
        router.push('/profile', { scroll: false })
    }
  }

  if (error) {
    console.log(error.code);
    switch(error.code) {
        case 'auth/email-already-in-use':
            return (
                <div>
                    <p>Oops! This email is already in use, please login or reset your password.</p>
                </div>
            );
          break;
        case 'auth/credential-already-in-use':
          return (
              <div>
                  <p>Oops! These creditionals are already in use, please login, or reset your account.</p>
              </div>
          );
          break;
        default:
            return (
                <div>
                    <p>Oops! Something went wrong, try again in a bit.</p>
                </div>
            );
    }
  }
  if (loading) {
    return <p>Loading Component...</p>;
  }

  return (
    <div className="App">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => newUserMiddleware(email, password)}>
        Register
      </button>
    </div>
  );
};

export default SignIn;