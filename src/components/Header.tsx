'use client';
import { useEffect, useState } from 'react';
import LoadingSpin from 'react-loading-spin';
import Navbar from './Navbar';
import EmailButton from './EmailButton';
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
      <header className='z-[500] inset-x-0 top-0 fixed min-h-[10vh] flex border-b dark:border-b-gray-700 lg:justify-center border-b-zinc-300 dark:bg-dark-primary justify-between items-center md:font-medium bg-white'>
        <div className='flex ml-4 lg:max-w-[50vw] w-full justify-between'>
          <Navbar pathName={pathName} paths={paths} />
          <div className='flex items-center gap-4 text-[1.5rem] mr-4'>
            {mounted ? (
              <>
                <EmailButton />
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
          className='sm:hidden mr-6 active:scale-105'
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
