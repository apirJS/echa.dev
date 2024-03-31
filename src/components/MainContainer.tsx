export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='grid md:w-full lg:max-w-[50vw] mt-[min(12vh,150px)] md:mt-[min(12vh,150px)] p-3 overflow-x-hidden w-full'>
      {children}
    </main>
  );
}
