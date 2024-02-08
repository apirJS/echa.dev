import { useTheme } from 'next-themes';
import { PiMoonStars } from 'react-icons/pi';
import { IoSunnyOutline } from 'react-icons/io5';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <PiMoonStars /> : <IoSunnyOutline />}
    </button>
  );
}
