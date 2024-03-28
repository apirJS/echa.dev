import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';

export default function Contacts() {
  return (
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
  );
}
