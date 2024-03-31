import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignIn() {
  return (
    <section className=' p-3'>
      <h1 className=' mb-2'>Leave a comment</h1>
      <div className='flex flex-row items-start text-xs gap-x-2'>
        <button className='bg-gray-200 dark:bg-white text-slate-600 p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-2 active:scale-105'>
          <FaGoogle size={20} />  
          <span>Continue with Google</span>
        </button>
        <button className='dark:bg-black bg-black text-white dark:text-white p-1 rounded-sm font-semibold flex flex-row justify-center items-center gap-x-2 active:scale-105'>
          <FaGithub size={20} />  
          <span>Continue with GitHub</span>
        </button>
      </div>
    </section>
  );
}
