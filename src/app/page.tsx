import Image from 'next/image';
import { ID } from 'country-flag-icons/react/3x2';

export default function Home() {
  return (
    <div className='h-[500px] flex flex-col gap-10'>
      <section className='flex flex-row gap-x-4 items-end'>
        <div>
          <Image
            alt='Echa Apriliyanto'
            width={250}
            height={200}
            src='https://placehold.co/600x400/black/white'
          />
        </div>
        <div className='text-[clamp(2rem,3vw,100px)] font-extrabold dark:text-zinc-100'>
          <h1>
            Hi There <span aria-label='waving hand emoji'>👋</span>
          </h1>
          <h1>I&#39;m Echa Apriliyanto</h1>
        </div>
      </section>
      <section className='dark:text-zinc-300 text-md'>
        <div className='flex items-center gap-1'>
          <p>I&#39;m a <strong>Software Engineer</strong> based on Sleman Regency, Indonesia</p>
          <ID className='mt-[2px]' width={22} />
        </div>
        <p>I can help you build a production ready <strong>website</strong> and <strong>mobile apps</strong></p>
        <button className='dark:bg-[#0c0c0c] rounded-md dark:text-slate-200 w-[6.5vw] h-[5vh] font-mono dark:font-medium text-lg mt-5 active:scale-105 dark:hover:text-white bg-slate-200 font-bold'>
          Hire me
        </button>
      </section>
    </div>
  );
}
