'use client';
import { useEffect, useState } from 'react';
import LoadingSpin from 'react-loading-spin';
import Navbar from './Navbar';
import IconMail from './IconMail';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { IoIosMenu } from 'react-icons/io';
import NavMobile from './NavMobile';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const paths: Array<string[]> = [
    ['/', 'Home'],
    ['/projects', 'Projects'],
    ['/contact', 'Contact'],
    ['/blog', 'Blog'],
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMenu(): void {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
    console.log(isMenuOpen);
  }

  return (
    <>
      <header className='inset-x-0 top-0 fixed min-h-[10vh] flex border-b dark:border-b-gray-700 border-b-zinc-300 dark:bg-dark-primary md:justify-center justify-between items-center md:font-medium bg-white'>
        <div className='flex md:ml-0 ml-4 md:w-[min(70vw,760px)] w-full justify-between'>
          <Navbar pathName={pathName} paths={paths} />
          <div className='flex items-center gap-4 text-[1.5rem]'>
            {mounted ? (
              <>
                <IconMail />
                <ThemeToggle />
              </>
            ) : (
              <LoadingSpin
                primaryColor='white'
                secondaryColor='#171717'
                size='17px'
                width='3px'
                animationDuration='2s'
              />
            )}
          </div>
        </div>
        <button
          className='sm:hidden ml-10 active:scale-105'
          onClick={handleMenu}
        >
          <IoIosMenu size={26} />
        </button>
      </header>
      <NavMobile
        pathName={pathName}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        paths={paths}
      />
    </>
  );
}
