import TechStack from '@/components/TechStack';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=' flex flex-col gap-y-4'>
      <section className='flex flex-row gap-x-3 items-center'>
        <Image
          alt='Echa Apriliyanto'
          width={150}
          height={200}
          src='/profile-3-4.jpg'
          className='rounded-md'
        />
        <div className='text-lg dark:text-zinc-100 flex flex-col gap-y-4'>
          <div>
            <h1 className='font-bold'>
              Hi There
              <span aria-label='waving hand emoji' className='waving-hand'>
                👋
              </span>
            </h1>
            <h1 className='font-bold'>I&#39;m Echa Apriliyanto</h1>
          </div>
          <div>
            <p className='text-xs'>
              You can call me <strong>Echa</strong> &#40;he/him&#41;
            </p>
            <p className='text-xs'>
              I use <strong>JavaScript/TypeScript</strong> for personal and work
              projects
            </p>
          </div>
        </div>
      </section>
      <section className='dark:text-zinc-300 text-sm'>
        <p>
          I&#39;m a <strong>Software Engineer</strong> based in Indonesia
        </p>
        <p>
          I can do <strong>Front End</strong> and <strong>Back End</strong> Web
          Development
        </p>
        <br />
        <p>
          I specialize in doing frontend to craft smooth and responsive
          websites. I&#39;d love to explore and utilize new technologies to make
          my life easier
        </p>
      </section>
      <section className='flex flex-col gap-y-1'>
        <h5 className='font-bold text-md'>My Tech Stack <span className='font-medium'>&</span> Tools</h5>
        <TechStack />
      </section>
    </div>
  );
}
