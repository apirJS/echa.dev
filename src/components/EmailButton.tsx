import { useTheme } from 'next-themes';
import { IoMailOutline } from 'react-icons/io5';

export default function EmailButton() {
  const { resolvedTheme } = useTheme();

  return (
    <button className='active:scale-105'
  >
      <IoMailOutline color={resolvedTheme === 'light' ? 'black' : 'white'} />
    </button>
  );
}
