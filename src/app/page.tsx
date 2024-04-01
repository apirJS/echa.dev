import Description from '@/app/components/Desctiption';
import Hero from '@/app/components/Hero';
import TechStack from '@/app/components/TechStack';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-6'>
      <Hero />
      <Description />
      <TechStack />
    </div>
  );
}
