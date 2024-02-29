export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='grid md:w-[52vw] mt-[min(12vh,150px)] md:p-5 border'>
      {children}
    </main>
  );
}
