import Image from 'next/image';
import { LuPencilLine } from 'react-icons/lu';

export default function SendComment() {
  return (
    <section className='p-3 flex flex-col gap-y-2'>
      <h1 className='flex flex-row justify-start items-center gap-x-1 text-base font-semibold mb-2'>
        <p>Leave a comment</p>
        <LuPencilLine />
      </h1>
      <div className='dark:bg-neutral-800 bg-neutral-200 dark:border-neutral-700 border-slate-300 flex flex-col gap-y-2 p-2 rounded-md w-full sm:w-min sm:min-w-[50%]'>
        <div className='flex items-center gap-x-2'>
          <Image
            src='https://placehold.co/100x100/000000/FFFFFF/png'
            width={36}
            height={36}
            alt='Profile Pictures'
            className='rounded-full'
          />
          <h2>Hendra Anggara</h2>
        </div>
        <form action='' className='flex gap-x-4 items-center'>
          <textarea
            name='comment'
            className=' [resize:none] placeholder:opacity-30 w-full focus:outline-neutral-400 dark:border dark:border-neutral-600 border-zinc-400 border-2 rounded-md bg-transparent p-1 '
            rows={1}
            required
            placeholder='Type here...'
          />
          <button
            type='submit'
            className='active:scale-95 text-sm md:text-base dark:bg-black p-1 rounded-md min-w-16 font-semibold min-h-8 max-h-14 bg-slate-400'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
