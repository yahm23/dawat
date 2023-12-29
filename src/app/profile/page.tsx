'use client';
import React from 'react'
import { useAppSelector } from '@/lib/hooks'

const Profile = () => {
  const userEmail = useAppSelector(state => state.auth.user.email);
  const userUid = useAppSelector(state => state.auth.user.userId);

  return (
    <div>
      <p>Registered UserEmai: {userEmail}</p>
      <p>Registered UserID: {userUid}</p>
    </div>
  )
}

export default Profile