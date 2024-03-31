import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import ReactJSIcon from '@/components/icons/ReactJSIcon';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon';
import NextJSIcon from '@/components/icons/NextJSIcon';
import ViteJSIcon from '@/components/icons/ViteJSIcon';
import ExpressJSIcon from '@/components/icons/ExpressJSIcon';
import TailwindCSSIcon from '@/components/icons/TailwindCSSIcon';
import JestIcon from '@/components/icons/JestIcon';
import GitIcon from '@/components/icons/GitIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import type { SVGComponentProps } from '@/types';

interface Icon {
  Icon: React.FC<SVGComponentProps>;
  name: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

export default function TechStack() {
  const icons: Array<Icon> = [
    {
      Icon: TypeScriptIcon,
      name: 'TypeScript',
      width: 100,
      height: 100,
      viewBox: '0 0 48 48',
    },
    {
      Icon: JavaScriptIcon,
      name: 'JavaScript',
      width: 100,
      height: 100,
      viewBox: '0 0 48 48',
    },
    {
      Icon: ReactJSIcon,
      name: 'ReactJS',
      width: 100,
      height: 100,
      viewBox: '0 0 32 32',
    },
    {
      Icon: NextJSIcon,
      name: 'NextJS',
    },
    {
      Icon: ViteJSIcon,
      name: 'ViteJS',
    },
    {
      Icon: TailwindCSSIcon,
      name: 'TailwindCSS',
    },
    {
      Icon: ExpressJSIcon,
      name: 'ExpressJS',
    },
    {
      Icon: JestIcon,
      name: 'Jest',
    },
    {
      Icon: GitIcon,
      name: 'Git',
    },
    {
      Icon: GitHubIcon,
      name: 'GitHub',
    }
  ];

  return (
    <ul className='grid grid-cols-5 gap-2'>
      {icons.map((icon, index) => (
        <li
          key={index}
          className='rounded-md p-2 flex flex-col justify-center items-center bg-[#282828] gap-y-1'
        >
          <icon.Icon
            className='w-[8vw] h-[8vw] sm:w-[5rem] sm:h-[5rem]'
            key={index}
            height={icon.height}
            width={icon.width}
            viewBox={icon.viewBox}
          />
          <p className='text-[.6rem]'>{icon.name}</p>
        </li>
      ))}
    </ul>
  );
}
