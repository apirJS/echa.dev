import { Session } from 'next-auth';
import Image from 'next/image';
import { LuPencilLine } from 'react-icons/lu';
import CommentForm from '@/app/contact/(components)/CommentForm';

export default function SendComment({ session }: { session: Session }) {
  return (
    <section className='p-3 flex flex-col gap-y-2'>
      <h1 className='flex flex-row justify-start items-center gap-x-1 text-base font-semibold mb-2'>
        <p>Leave a comment</p>
        <LuPencilLine />
      </h1>
      <div className='rounded-tr-2xl rounded-br-2xl dark:bg-neutral-800 bg-zinc-200 dark:border-neutral-700  flex flex-col gap-y-2 p-2 rounded-md w-full sm:w-min sm:min-w-[50%]'>
        <div className='flex items-center gap-x-2'>
          <Image
            src={
              session.user?.image ??
              'https://placehold.co/100x100/000000/FFFFFF/png'
            }
            width={36}
            height={36}
            alt='Profile Pictures'
            className='rounded-full'
          />
          <h2 className='font-semibold opacity-90'>{session.user?.name}</h2>
        </div>
        <CommentForm />
      </div>
    </section>
  );
}
