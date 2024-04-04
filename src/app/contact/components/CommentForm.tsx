export default function CommentForm() {
  return (
    <form action='' className='flex gap-x-4 items-center'>
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
