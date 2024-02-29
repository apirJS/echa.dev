import Link from 'next/link';

interface NavbarProps {
  pathName: string;
}

export default function Navbar({ pathName }: NavbarProps) {
  return (
    <nav className='hidden md:flex gap-8 text-base'>
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
    </nav>
  );
}
