import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex gap-10 text-base'>
      <Link href='/'>Home</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/blog'>Blog</Link>
    </nav>
  );
}
