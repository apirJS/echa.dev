import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex gap-10'>
      <Link href='#'>Home</Link>
      <Link href='#'>Projects</Link>
      <Link href='#'>Blog</Link>
    </nav>
  );
}
