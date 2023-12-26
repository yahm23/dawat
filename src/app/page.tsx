'use client';
import { useAppSelector, useAppDispatch } from '../lib/hooks'


export default function Home() {
  const loggedStatusX = useAppSelector(state => state.loggedReducer.loggedInStatus)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {loggedStatusX.toString()}
        </div>
    </main>
  )
}
