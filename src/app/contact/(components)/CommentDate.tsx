export default function CommentDate({
  nTimeAgo,
}: {
  nTimeAgo: string;
}): JSX.Element {

  return (
    <div className='flex flex-row items-center gap-x-2'>
      <h3 className='dark:text-zinc-500 dark:opacity-100 opacity-70 text-sm'>
        {nTimeAgo}
      </h3>
    </div>
  );
}
