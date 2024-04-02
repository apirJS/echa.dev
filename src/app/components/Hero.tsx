import Image from 'next/image';

export default function Hero() {
  return (
    <section className='flex flex-row gap-x-3 items-center dark:text-zinc-200'>
      <Image
        alt='Echa Apriliyanto'
        width={150}
        height={200}
        src='/profile-3-4.jpg'
        className='rounded-md'
      />
      <div className='flex flex-col gap-y-4'>
        <div className='text-xl font-bold sm:text-2xl md:text-3xl xl:text-4xl'>
          <h1>
            Hi There
            <span aria-label='waving hand emoji' className='waving-hand'>
              👋
            </span>
          </h1>
          <h1 className='font-bold'>I&#39;m Echa Apriliyanto</h1>
        </div>
        <div className='text-xs xs:text-base'>
          <p>
            You can call me <strong>Echa</strong> &#40;he/him&#41;
          </p>
          <p>
            I use JavaScript/TypeScript for personal and work
            projects
          </p>
        </div>
      </div>
    </section>
  );
}
