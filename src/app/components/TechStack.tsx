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
import DockerIcon from '@/components/icons/DockerIcon';

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
    },
    {
      Icon: DockerIcon,
      name: 'Docker',
    },
  ];

  return (
    <section className='flex flex-col gap-y-2'>
      <h5 className='font-bold text-base'>
        My Tech Stack <span className='font-medium'>&</span> Tools
      </h5>
      <ul className='grid grid-cols-5 sm:grid-cols-[repeat(auto-fill,minmax(75px,1fr))] gap-2'>
        {icons.map((icon, index) => (
          <li
            key={index}
            className='rounded-md p-2 flex flex-col justify-center items-center dark:bg-[#282828] bg-zinc-200 font-semibold gap-y-1'
          >
            <icon.Icon
              className='w-[6.5vw] h-[6.5vw] sm:w-[4.5vw] sm:h-[4.5vw] md:w-[4vw] md:h-[4vw] lg:w-[3vw] lg:h-[3vw] xl:w-[2vw] xl:h-[2vw]'
              key={index}
              height={icon.height}
              width={icon.width}
              viewBox={icon.viewBox}
            />
            <p className='text-[.6rem]'>{icon.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
