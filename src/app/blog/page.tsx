import UnderConstructionIcon from "@/components/icons/UnderConstructionIcon";

export default function Blog() {
  return (
    <main className='flex justify-center items-center flex-col gap-y-4'>
      <UnderConstructionIcon width={125} height={125} className="mt-[5vh] text-white dark:invert opacity-75"/>
      <h1 className="text-xs md:text-sm font-semibold opacity-70">This page is still under construction</h1>
    </main>
  );
}