import { useTheme } from 'next-themes';
import { IoMail, IoMailOutline } from 'react-icons/io5';

export default function IconMail() {
  const { resolvedTheme } = useTheme();

  return <IoMailOutline color={resolvedTheme === 'light' ? 'black': 'white'}/>;
}
