import Footer from '@/components/Footer';

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='grid lg:max-w-[50vw] mt-[min(10vh,150px)] md:mt-[min(12vh,150px)] p-3 w-full'>
      {children}
      <Footer />
    </main>
  );
}
