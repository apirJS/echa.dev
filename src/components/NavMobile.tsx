import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

interface Props {
  pathName: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  paths: Array<string[]>
}

export default function NavMobile({
  pathName,
  isMenuOpen,
  setIsMenuOpen,
  paths
}: Props) {
  return (
    <div
      className={`grid grid-cols-[4fr,6fr] absolute inset-0 min-h-[100vh] ${
        isMenuOpen ? 'md:hidden' : 'hidden' 
      } transition`}
    >
      <div className='bg-transparent' onClick={() => setIsMenuOpen(false)}></div>
      <nav className=' min-h-full dark:bg-dark-primary bg-white border-l dark:border-slate-500'>
        <button
          className='flex justify-end w-full py-5 -ml-[0.45rem] active:scale-105 text-red-800'
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdClose size={30} />
        </button>
        <div className='flex flex-col justify-center text-xl pl-4 gap-y-8'>
          {paths.map(([path, name]) => {
            return (
              <Link
                href={path}
                key={name}
                className={`${pathName === path ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
