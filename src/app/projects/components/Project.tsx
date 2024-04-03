import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';

interface ProjectProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  githubURL?: string;
  demoURL?: string;
  stack?: string[];
}

export default function Project({
  title,
  desc,
  tags,
  img,
}: ProjectProps): JSX.Element {
  return (
    <div className='relative rounded-md dark:bg-[#282828] bg-zinc-200 p-4 pb-14'>
      <div className='flex justify-center sm:block'>
        <Image
          src={img}
          alt={title}
          width={400}
          height={200}
          className='border rounded-md mb-2'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-lg md:text-xl'>{title}</h3>
        <p className=' dark:text-neutral-300 text-neutral-700'>{desc}</p>
        <h4 className='font-semibold text-sm md:text-base'>Tags</h4>
        <div className='lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-4 gap-2'>
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className='lg:text-xs text-center inline-block border-none dark:bg-slate-700 bg-emerald-300 p-[5px]  text-xs dark:border-zinc-500 rounded-sm rounded-tr-lg font-semibold border-slate-400'
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className='flex gap-x-4 font-semibold absolute left-4 bottom-4'>
          <button className='flex items-center gap-x-1 '>
            <CiGlobe />
            Demo
          </button>
          <button className='flex items-center gap-x-1'>
            <FaGithub /> Github
          </button>
        </div>
      </div>
    </div>
  );
}
