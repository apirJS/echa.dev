import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignIn() {
  return (
    <section className=' p-3'>
      <h1 className='text-slate-200 mb-2'>Leave a comment</h1>
      <div className='flex flex-col items-start text-xs gap-y-2'>
        <button className='bg-white text-slate-600 p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-2'>
          <span>Continue with Google</span>
          <FaGoogle size={20} />  
        </button>
        <button className='dark:bg-black dark:text-white p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-2'>
          <span>Continue with GitHub</span>
          <FaGithub size={20} />  
        </button>
      </div>
    </section>
  );
}
