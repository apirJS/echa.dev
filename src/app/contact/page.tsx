import Image from 'next/image';
import Contacts from '@/app/contact/components/Contacts';
import SignIn from '@/app/contact/components/SignIn';
import Comments from '@/app/contact/components/Comments';
import SendComment from './components/SendComment';

export default function Contact() {
  return (
    <main className='flex flex-col justify-start md:justify-center gap-1 min-w-[80vw] md:min-w-[50vw]'>
      <Contacts />
      {/* <SignIn /> */}
      <SendComment />
      <Comments />
    </main>
  );
}
