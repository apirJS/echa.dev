'use client';
import { useEffect, useState } from 'react';
import LoadingSpin from 'react-loading-spin';
import Navbar from './Navbar';
import IconMail from './IconMail';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className='inset-x-0 top-0 fixed min-h-[10vh] flex border-b dark:border-b-gray-700 border-b-zinc-300 dark:bg-dark-primary justify-center items-center md:font-medium bg-white'>
      <div className='flex  min-w-[min(70vw,700px)] justify-between'>
        <Navbar pathName={pathName} />
        <div className='flex items-center gap-4 text-[1.3rem]'>
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
    </header>
  );
}
