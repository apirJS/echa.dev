import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

interface Props {
  pathName: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function MenuMobile({
  pathName,
  isMenuOpen,
  setIsMenuOpen,
}: Props) {
  return (
    <nav
      className={`min-h-full md:hidden min-w-[60vw] bg-inherit border-l absolute right-0 top-0 ${
        isMenuOpen ? '' : 'translate-x-full'
      } transition`}
    >
      <button
        className='flex justify-end w-full p-5 active:scale-105 text-red-800'
        onClick={() => setIsMenuOpen(false)}
      >
        <IoMdClose size={30} />
      </button>
      <div className='flex flex-col justify-center text-xl pl-4 gap-y-8'>
        <Link href='/' className={`${pathName === '/' ? 'active-link' : ''}`}>
          Home
        </Link>
        <Link
          href='/projects'
          className={`${pathName === '/projects' ? 'active-link' : ''}`}
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className={`${pathName === '/contact' ? 'active-link' : ''}`}
        >
          Contact
        </Link>
        <Link
          href='/blog'
          className={`${pathName === '/blog' ? 'active-link' : ''}`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
