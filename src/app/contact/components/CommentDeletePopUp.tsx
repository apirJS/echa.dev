export default function CommentDeletePopUp({
  setCommentPopUp,
}: {
  setCommentPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div className='fixed inset-0 bg-[rgba(23,23,23,.8)] z-[999] grid place-items-center '>
      <div className='flex flex-col bg-neutral-800 min-h-[8vh] justify-center items-center rounded-md py-6 px-8 gap-y-4'>
        <h1 className='font-semibold text-lg'>Are you sure?</h1>
        <div className='flex gap-x-4'>
          <button
            className=' dark:bg-dark-primary dark:text-emerald-100 w-[6vw] rounded-sm'
            onClick={() => setCommentPopUp(false)}
          >
            No
          </button>
          <button className=' dark:bg-emerald-200 dark:text-black w-[6vw] rounded-sm'>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
