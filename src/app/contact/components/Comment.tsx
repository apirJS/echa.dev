import Image from 'next/image';

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
    <div className='flex flex-col  gap-y-3 dark:border-neutral-700 border-slate-300 p-3 dark:bg-[#282828] bg-zinc-200 rounded-md '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <Image
            src={profileImageUrl}
            alt={name}
            width={36}
            height={36}
            className='rounded-full'
          />
          <h3 className='dark:text-neutral-200'>{name}</h3>
        </div>
        <h3 className='dark:text-zinc-500'>{nTimeAgo}</h3>
      </div>
      <p className='dark:text-stone-200'>{message}</p>
    </div>
  );
}
