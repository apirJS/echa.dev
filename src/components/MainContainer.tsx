export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='grid justify-center lg:max-w-[max(800px,80%)]'>
      {children}
    </main>
  );
}
