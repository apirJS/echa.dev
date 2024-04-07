import { LuPencilLine } from 'react-icons/lu';
import SignInOptions from "@/app/contact/(components)/SignInOptions"
import { Session } from 'next-auth';

export default function SignIn({ session }: { session: Session | null}) {
  return (
    <section className='p-3'>
      <h1 className='flex flex-row justify-start items-center gap-x-1 text-base font-semibold mb-2'>
        <p>Leave a comment</p>
        <LuPencilLine />
      </h1>
      <SignInOptions session={session}/>
    </section>
  );
}
