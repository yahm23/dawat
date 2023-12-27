import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
  const router = useRouter()

  return (
    <div>
      <p>HomePage</p>
      <button type="button" onClick={() => router.push('/login')}> Log In/ Create account</button>
    </div>
  )
}

export default HomePage