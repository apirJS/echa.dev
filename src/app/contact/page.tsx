import Image from 'next/image';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';

export default function Contact() {
  return (
    <main className='flex flex-col gap-3 min-w-[80vw] md:min-w-[50vw]'>
      <section className=' dark:border-slate-400 p-3 gap-y-2 flex flex-col text-md'>
        <div className='flex items-center gap-x-2'>
          <MdOutlineEmail size={26} />
          <a
            target='_blank'
            href='mailto:apriliyantoecha1@gmail.com'
            className=''
          >
            apriliyantoecha1@gmail.com
          </a>
        </div>
        <div className='flex items-center gap-x-2'>
          <AiFillLinkedin size={26} />
          <a
            target='_blank'
            href='https://www.linkedin.com/in/echa-apriliyanto-125402244/'
            className=' '
          >
            Echa Apriliyanto
          </a>
        </div>
        <div className='flex items-center gap-x-2'>
          <FaGithub size={26} />
          <a target='_blank' href='https://github.com/apirPr' className=''>
            @apirPr
          </a>
        </div>
        <div className='flex items-center gap-x-2'>
          <LuInstagram size={26} />
          <a
            target='_blank'
            href='https://www.instagram.com/apr_314/'
            className=''
          >
            @apr314
          </a>
        </div>
      </section>
      <section className=' p-3'>
        <h1 className='text-slate-200'>send me an email</h1>
        <form className='flex flex-col gap-3 items-center text-[1rem]'>
          <div className='flex flex-row gap-2 w-full'>
            <input
              type='text'
              placeholder='First Name'
              className='p-1 rounded-sm bg-inherit border border-r-2 w-full dark:border-slate-400'
            />
            <input
              type='text'
              placeholder='Last Name'
              className='p-1 rounded-sm bg-inherit border border-r-2 w-full dark:border-slate-400'
            />
          </div>
          <input
            type='email'
            placeholder='Email'
            className='p-1 rounded-sm bg-inherit border border-r-2 w-full dark:border-slate-400'
          />
          <input
            type='text'
            placeholder='Subject'
            className='p-1 rounded-sm bg-inherit border border-r-2 w-full dark:border-slate-400'
          />
          <textarea
            placeholder='Message'
            className='p-1 rounded-sm bg-inherit border border-r-2 w-full dark:border-slate-400'
          ></textarea>
          <button className='border w-28 h-10 border-slate-300'>Send</button>
        </form>
      </section>
    </main>
  );
}
