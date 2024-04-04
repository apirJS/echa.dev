'use client';

import GoogleIcon from '@/components/icons/GoogleIcon';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export default function SignInOptions() {
  return (
    <div className='flex flex-row items-start text-xs gap-x-2'>
      <button
        onClick={() => signIn('google')}
        className='bg-gray-200 dark:bg-white text-slate-600 p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-1 active:scale-95'
      >
        <GoogleIcon width={20} height={20} />
        <span>Continue with Google</span>
      </button>
      <button
        onClick={() => signIn('github')}
        className='dark:bg-black bg-black text-white dark:text-white p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-1 active:scale-95'
      >
        <FaGithub size={20} />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
}
