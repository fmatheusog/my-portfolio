// import styles from './ThemeSliderToggle.module.css';

import { FiSun, FiMoon } from 'react-icons/fi';

import ThemeSliderToggleStyle from '../../../../../styles/components/button/specifics/ThemeSliderToggleStyle';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export interface IThemeSliderToggle {}

const ThemeSliderToggle: React.FC<
  IThemeSliderToggle
> = () => {
  const [mounted, setMounted] = useState<boolean>();

  const { theme, setTheme } = useTheme();

  // If the page is not mounted, return null to avoid the theme switcher
  // to be rendered with the wrong theme
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`flex items-center ${
        theme === 'light' ? 'justify-start' : 'justify-end'
      } rounded-full w-[60px] h-[20px] overflow-visible bg-white`}
    >
      {theme === 'dark' ? (
        <button
          className={`${ThemeSliderToggleStyle} bg-secondary_dark text-white`}
          onClick={() => {
            setTheme('light');
          }}
        >
          <FiMoon className="z-10 text-lg md:text-sm" />
        </button>
      ) : (
        <button
          className={`${ThemeSliderToggleStyle} bg-icterine text-secondary_dark`}
          onClick={() => {
            setTheme('dark');
          }}
        >
          <FiSun className="z-10 text-lg md:text-sm" />
        </button>
      )}
    </div>
  );
};

export default ThemeSliderToggle;
