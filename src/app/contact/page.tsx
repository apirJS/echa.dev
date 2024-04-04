import Contacts from '@/app/contact/components/Contacts';
import SignIn from '@/app/contact/components/SignIn';
import Comments from '@/app/contact/components/Comments';
import SendComment from './components/SendComment';
import { getServerSession } from 'next-auth';
import db from '@/database/db'

export default async function Contact() {
  const session = await getServerSession();

  return (
    <main className='flex flex-col justify-start md:justify-center gap-1 min-w-[80vw] md:min-w-[50vw]'>
      <Contacts />
      {session ? <SendComment session={session}/> : <SignIn />}
      {/* <SignIn /> */}
      <hr className='ml-3 mr-3 mt-2 dark:opacity-10 dark:text-slate-500 text-black' />
      <Comments />
    </main>
  );
}
