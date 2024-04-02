'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathName = usePathname();
  const paths: Array<string[]> = [
    ['/', 'Home'],
    ['/projects', 'Projects'],
    ['/contact', 'Contact'],
    ['/blog', 'Blog'],
  ];

  return (
    <footer className='w-full p-3 flex justify-between md:text-base gap-y-3 my-[6vh] sm:my-[12vh] text-sm flex-col sm:flex-row items-center'>
      <menu className='flex gap-x-4'>
        {paths.map(([href, name]) => {
          return (
            <li key={name} className='active:scale-105'>
              <Link
                href={href}
                className={pathName === href ? 'font-extrabold' : 'font-normal'}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </menu>
      <div className='flex flex-row xl:flex-row gap-x-1 md:text-base text-xs text-neutral-600 dark:text-neutral-400 xl:px-5'>
        <h4>Echa Apriliyanto</h4>
        <h4>©</h4>
        <h4>2024</h4>
      </div>
    </footer>
  );
}
