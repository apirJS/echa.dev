'use client';
import Contacts from '@/app/contact/(components)/Contacts';
import SignIn from '@/app/contact/(components)/SignIn';
import Comments from '@/app/contact/(components)/Comments';
import SendComment from './(components)/SendComment';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Contact() {
  const { data: session } = useSession();

  return (
    <main className='flex flex-col justify-start md:justify-center gap-1 min-w-[80vw] md:min-w-[50vw]'>
      <Contacts />
      {session ? <SendComment session={session} /> : <SignIn/>}
      <hr className='ml-3 mr-3 mt-2 dark:opacity-10 dark:text-slate-500 text-black' />
      <Comments />
    </main>
  );
}
