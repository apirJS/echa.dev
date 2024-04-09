'use client';
import { comments } from '@/database/schema';
import { signOut, useSession } from 'next-auth/react';
import { FormEvent } from 'react';

export default function CommentForm() {
  const { data: session } = useSession();

  async function sendComment(e: FormEvent<HTMLFormElement>): Promise<boolean> {
    e.preventDefault();
    if (session) {
      const comment = new FormData(e.currentTarget).get('comment') as string;
      const body: typeof comments.$inferInsert = {
        email: session.user?.email as string,
        name: session.user?.name as string,
        imageUrl: session.user?.image as string,
        content: comment,
      };
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      signOut();
      return true;
    } else {
      signOut();
      return false;
    }
  }

  return (
    <form className='flex gap-x-4 items-center' onSubmit={sendComment}>
      <textarea
        name='comment'
        className='rounded-tr-md text-sm rounded-br-xl border-emerald-400 [resize:none] dark:placeholder:opacity-30 placeholder:opacity-50 w-full box-content dark:border dark:border-[#52525b84] border rounded-sm bg-transparent p-[5px] '
        rows={1}
        required
        placeholder='Type here...'
      />
      <button
        type='submit'
        className='active:scale-95 text-sm md:text-base dark:bg-black p-1 rounded-md min-w-16 font-semibold min-h-8 max-h-14 bg-emerald-300'
      >
        Send
      </button>
    </form>
  );
}
