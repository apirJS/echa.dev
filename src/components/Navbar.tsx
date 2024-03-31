import Link from 'next/link';

interface NavbarProps {
  pathName: string;
  paths: Array<string[]>
}

export default function Navbar({ pathName, paths}: NavbarProps) {
  return (
    <nav className='hidden sm:static sm:flex gap-8 text-sm'>
      {paths.map(([path, name]) => {
        return <Link href={path} key={name} className={pathName === path ? 'active-link' : ''}>{name}</Link>
      })}
    </nav>
  );
}
