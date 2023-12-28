'use client';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '@/config/config';
import { setLoggedIn, setUserEmail, setUserId } from '@/lib/slices/authSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const newUserMiddleware = async (email:string, password:string) => {
    const result = await createUserWithEmailAndPassword(email, password);
    
    if (result) {
        setLoggedIn(true);
        setUserEmail(result.user.email ? result.user.email : '');
        setUserId(result.user.uid ? result.user.uid : '');
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
    return <p>Loading...</p>;
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