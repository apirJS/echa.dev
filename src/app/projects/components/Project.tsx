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
    <div className=' rounded-md dark:bg-[#202020] bg-zinc-200 p-4 '>
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className='border rounded-md mb-4'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='font-bold  md:text-lg'>{title}</h3>
        <p className='text-neutral-300'>{desc}</p>
        <h4 className='font-semibold text-sm'>Tags</h4>
        <div className=' grid grid-cols-3 gap-2'>
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className='text-center inline-block border p-[5px]  text-xs dark:border-blue-900 rounded-sm rounded-tr-lg font-semibold'
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className='flex gap-x-4 font-semibold'>
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
