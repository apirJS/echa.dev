import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import CommentDate from '@/app/contact/(components)/CommentDate'

interface CommentProps {
  profileImageUrl: string;
  name: string;
  message: string;
  nTimeAgo: string;
}

export default function Comment({
  profileImageUrl,
  name,
  nTimeAgo,
  message,
}: CommentProps): JSX.Element {
  return (
    <div className='flex flex-col  gap-y-1 dark:border-neutral-700  border-slate-300 p-3 dark:bg-[#282828] bg-zinc-200 rounded-md rounded-tr-2xl rounded-br-2xl'>
      <div className='flex items-center justify-between mb-1'>
        <div className='flex items-center gap-x-[6px]'>
          <Image
            src={profileImageUrl}
            alt={name}
            width={36}
            height={36}
            className='rounded-full'
          />
          <h3 className='dark:text-neutral-100 font-semibold opacity-95 '>
            {name}
          </h3>
        </div>
        <CommentDate nTimeAgo={nTimeAgo}/>
      </div>
      <p className='dark:text-stone-200 text-emerald-900 dark:opacity-95'>
        {message}
      </p>
    </div>
  );
}
