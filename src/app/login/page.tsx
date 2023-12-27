import React from 'react'
import { initializeApp } from 'firebase/app'
import { config } from '../../config/config'
import { getAuth } from 'firebase/auth';


export const firebaseApp = initializeApp(config.firebase);
export const auth = getAuth(firebaseApp);

const page = () => {
  return (
    <div>login page</div>
  )
}

export default page