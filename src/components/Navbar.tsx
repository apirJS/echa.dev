'use client';
import Link from 'next/link';
import { useRef, ElementRef, useEffect } from 'react';
interface NavbarProps {
  pathName: string;
  paths: Array<string[]>;
}

export default function Navbar({ pathName, paths}: NavbarProps) {
  const markerRef = useRef<ElementRef<'div'>>(null);
  const activeLink = useRef<ElementRef<'a'>>(null);

  useEffect(() => {
    if (activeLink.current && markerRef.current) {
      markerRef.current.style.left = activeLink.current.offsetLeft + 'px';
      markerRef.current.style.width = activeLink.current.offsetWidth + 'px';
    }
  }, [pathName]);

  return (
    <nav className='hidden relative sm:flex gap-8 text-sm sm:text-base '>
      <div
        className='absolute w-0 h-[2px] -bottom-[3px] left-0 dark:bg-white bg-slate-600 transition-all duration-150'
        ref={markerRef}
      />
      {paths.map(([path, name]) => {
        return (
          <Link
            href={path}
            key={name}
            ref={pathName === path ? activeLink : undefined}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
