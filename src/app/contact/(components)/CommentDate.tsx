'use client';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import CommentDeletePopUp from './CommentDeletePopUp';

export default function CommentDate({
  nTimeAgo,
}: {
  nTimeAgo: string;
}): JSX.Element {
  const [commentPopUp, setCommentPopUp] = useState<boolean>(false);

  async function removeComment(): Promise<void> {}

  return (
    <div className='flex flex-row items-center gap-x-2'>
      <h3 className='dark:text-zinc-500 dark:opacity-100 opacity-70 text-sm'>
        {nTimeAgo}
      </h3>
      <button className='opacity-30 cursor-pointer' onClick={() => setCommentPopUp((prev) => !prev)}>
        <FaTrash size={12} />
      </button>
      {commentPopUp ? <CommentDeletePopUp setCommentPopUp={setCommentPopUp}/> : null}
    </div>
  );
}
