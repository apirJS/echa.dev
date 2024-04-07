'use client';

import GoogleIcon from '@/components/icons/GoogleIcon';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export default function SignInOptions({ session }: { session: Session | null}) {
  async function handleSignIn(provider: "google" | "github") {
    const response = await signIn(provider)
    console.log(response, session)
  }

  return (
    <div className='flex flex-row items-start text-xs gap-x-2'>
      <button
        className='bg-gray-200 dark:bg-white text-slate-600 p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-1 active:scale-95'
        onClick={() => handleSignIn('google')}
      >
        <GoogleIcon width={20} height={20} />
        <span>Continue with Google</span>
      </button>
      <button
        className='dark:bg-black bg-black text-white dark:text-white p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-1 active:scale-95'
        onClick={() => handleSignIn('github')}
      >
        <FaGithub size={20} />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
}
