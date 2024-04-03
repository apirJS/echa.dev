import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

interface Props {
  pathName: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  paths: Array<string[]>;
}

export default function NavMobile({
  pathName,
  isMenuOpen,
  setIsMenuOpen,
  paths,
}: Props) {
  return (
    <>
      <nav
        className={`${
          isMenuOpen ? '' : 'translate-x-full'
        } select-none transition-all absolute top-0 right-0 h-[100vh] z-[500] dark:bg-dark-primary bg-white border-l dark:border-slate-500 opacity-100 w-[60vw]`}
      >
        <button
          className='flex justify-end w-full py-5 -ml-[22px] text-slate-300'
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdClose size={30} />
        </button>
        <div className='flex flex-col justify-center items-start text-lg font-semibold pl-4 gap-y-8 '>
          {paths.map(([path, name]) => {
            return (
              <Link
                href={path}
                key={name}
                className={`${pathName === path ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
      {isMenuOpen ? (
        <div className='fixed inset-0 bg-dark-primary dark:opacity-30 opacity-20' onClick={() => setIsMenuOpen(false)}>
        </div>
      ) : null}
    </>
  );
}
// export default function NavMobile({
//   pathName,
//   isMenuOpen,
//   setIsMenuOpen,
//   paths,
// }: Props) {
//   return (
//     <div className={`${isMenuOpen ? '': 'hidden'} sm:hidden fixed inset-0 z-[500] dark:bg-[rgba(23,23,23,.3)]`} onClick={(e) => {
//       setIsMenuOpen(false)
//     }}>
//       <nav className={`${isMenuOpen ? '' : 'translate-x-full'} transition-all absolute top-0 right-0 min-h-full dark:bg-dark-primary bg-white border-l dark:border-slate-500 mr-4 opacity-100 w-[60vw]`}>
//         <button
//           className='flex justify-end w-full py-5  text-slate-300'
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <IoMdClose size={30} />
//         </button>
//         <div className='flex flex-col justify-center text-xl pl-4 gap-y-8'>
//           {paths.map(([path, name]) => {
//             return (
//               <Link
//                 href={path}
//                 key={name}
//                 className={`${pathName === path ? 'active-link' : ''}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {name}
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default function NavMobile({
//   pathName,
//   isMenuOpen,
//   setIsMenuOpen,
//   paths,
// }: Props) {
//   return (
//     <div
//       className={`sm:hidden grid grid-cols-[4fr,6fr] absolute inset-0 min-h-[100vh] z-[500] nav-mobile ${
//         isMenuOpen ? '' : 'translate-x-full'
//       }  transition-transform`}
//     >
//       <div className='bg-transparent dark:bg-dark-primary' onClick={() => setIsMenuOpen(false)}></div>
//       <nav className=' min-h-full dark:bg-dark-primary bg-white border-l dark:border-slate-500 mr-4'>
//         <button
//           className='flex justify-end w-full py-5  text-slate-300'
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <IoMdClose size={30} />
//         </button>
//         <div className='flex flex-col justify-center text-xl pl-4 gap-y-8'>
//           {paths.map(([path, name]) => {
//             return (
//               <Link
//                 href={path}
//                 key={name}
//                 className={`${pathName === path ? 'active-link' : ''}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {name}
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// }
